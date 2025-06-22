export default function Page() {
  return (
    <article>
<h1>go-sql-export</h1>
<h2>Export 1 million records from SQL to CSV or Fixed-Length Format Files with high performance</h2>
<p>Exporting large volumes of data efficiently from SQL into a CSV or fixed-length format file requires careful consideration of memory management, I/O performance, and database interactions. This article provides an approach to optimize the process in Golang.</p>
<p><img src="https://cdn-images-1.medium.com/max/800/1*IEMXhQXJ0hWZBPL8q2jMNw.png" alt="Export data from SQL to CSV or fixed-length format files"/></p>
<h3>Test Info</h3>
<ul>
<li>RAM: 12 GB</li>
<li>Disk: SSD KINGSTON SA400S37240G ATA Device</li>
<li>Exec File Size: 10M</li>
<li>Database: PosgreSQL 16</li>
<li>Total of rows: 1.018.584 rows</li>
<li>Total of columns: 76 columns</li>
<li>Power Usage: Very High</li>
<li>CPU: 15%</li>
</ul>
<table><thead><tr>
<td><b>Type</b></td>
<td><b>File Size</b></td>
<td><b>Rows</b></td>
<td><b>RAM</b></td>
<td><b>Disk</b></td>
<td><b>Duration</b></td>
<td><b>Description</b></td>
</tr></thead><tbody>
<tr>
<td>Fix Length</td>
<td>1.15 GB</td>
<td>1,018,584</td>
<td>15 M</td>
<td>10.1 M/s</td>
<td>1 min 45 sec</td>
<td>Full scan the table</td>
</tr>
<tr>
<td>CSV</td>
<td>975 MB</td>
<td>1,018,584</td>
<td>15 M</td>
<td>10.1 M/s</td>
<td>1 min 12 sec</td>
<td>Full scan the table</td>
</tr>
<tr>
<td>Fix Length</td>
<td>1.02 GB</td>
<td>905,408</td>
<td>15 M</td>
<td>10.1 M/s</td>
<td>1 min 33 sec</td>
<td>Filter by index on 1 field</td>
</tr>
<tr>
<td>CSV</td>
<td>863 MB</td>
<td>905,408</td>
<td>15 M</td>
<td>10.1 M/s</td>
<td>1 min 3 sec</td>
<td>Filter by index on 1 field</td>
</tr>
<tr>
<td>Fix Length</td>
<td>890 MB</td>
<td>792,232</td>
<td>14 M</td>
<td>9.9 M/s</td>
<td>1 min 23 sec</td>
<td>Filter by index on 1 field</td>
</tr>
<tr>
<td>CSV</td>
<td>764 MB</td>
<td>792,232</td>
<td>14 M</td>
<td>9.9 M/s</td>
<td>55 sec</td>
<td>Filter by index on 1 field</td>
</tr>
<tr>
<td>Fix Length</td>
<td>254 MB</td>
<td>226,352</td>
<td>14 M</td>
<td>9.9 M/s</td>
<td>24 sec</td>
<td>Filter by index on 1 field</td>
</tr>
<tr>
<td>CSV</td>
<td>220 M</td>
<td>226,352</td>
<td>14 M</td>
<td>9.9 M/s</td>
<td>16 sec</td>
<td>Filter by index on 1 field</td>
</tr>
</tbody></table>
<h3>Batch jobs</h3>
<p>Differ from online processing:</p>
<ul>
<li>Long time running, often at night, after working hours.</li>
<li>Non-interactive, often include logic for handling errors</li>
<li>Large volumes of data</li>
</ul>
<h3>Common Mistakes</h3>
<ul>
<li><b>Inefficient Writing to I/O</b>: Large writing to I/O can slow down performance. Writing each record immediately without buffering is inefficient due to the high overhead of repeated I/O operations.<ul>
<li><b>Solution</b>: Use &quot;<b>bufio.Writer</b>&quot; for more efficient writing.</li>
</ul>
</li>
<li><b>Loading All Data Into Memory</b>: Fetching all records at once can consume a lot of memory, causing the program to slow down or crash. Use streaming with cursors instead.<ul>
<li><b>Solution</b>: Loop on each cursor. On each cursor, use bufio.Writer to write to database</li>
</ul>
</li>
<li><b>Inefficient Query</b>: Full scan the table. Do not filter on the index.<ul>
<li><b>Solution</b>: If you export the whole table, you can scan the full table. If not, you need to filter on the index.</li>
</ul>
</li>
</ul>
<h3>Implementation</h3>
<h4>Data Reader for SQL</h4>
<ol>
<li><p>Build Query: For efficient query, you need to filter on the index, avoid to scan the full table. In my sample, I created index on field createdDate. In my 6 use cases, I use 4 use cases to filter on indexing field: createdDate.</p>
</li>
<li><p>Scan the GO row into an appropriate GO struct:</p>
<p>We provide a function to map a row to a GO struct. We use gorm tag, so that this struct can be reused for gorm later, with these benefits:</p>
<ul>
<li>Simplifies the process of converting database rows into Go objects.</li>
<li>Reduces repetitive code and potential errors in manual data mapping.</li>
<li>Enhances code readability and maintainability.</li>
</ul>
</li>
</ol>
<pre className="line-numbers"><code className="language-go">{`type User struct {
    Id          string     \`gorm:"column:id;primary_key" format:"%011s" length:"11"\`
    Username    string     \`gorm:"column:username" length:"10"\`
    Email       string     \`gorm:"column:email" length:"31"\`
    Phone       string     \`gorm:"column:phone" length:"20"\`
    Status      bool       \`gorm:"column:status" true:"1" false:"0" format:"%5s" length:"5"\`
    CreatedDate *time.Time \`gorm:"column:createdDate" length:"10" format:"dateFormat:2006-01-02"\`
}`}</code></pre><h4>Transformer</h4>
<p>Transform a GO struct to a string (CSV or fixed-length format). We created 2 providers already:</p>
<ul>
<li>CSV Transformer: read GO tags to transform CSV line.</li>
<li>Fixed Length Transformer: read GO tags to transform Fixed Length line.</li>
</ul>
<p>To improve performance, we cache the struct of CSV or Fixed Length Format.</p>
<h4>File Writer</h4>
<ul>
<li>It is a wrapper of &quot;<b>bufio.Writer</b>&quot; to buffer writes to the file. This reduces the number of I/O operations.</li>
</ul>
<h3>Key Aspects to improve performance:</h3>
<ul>
<li><b>Streaming</b>: The code uses db.QueryContext to fetch records in a streaming manner. This prevents loading all records into memory at once.</li>
<li><b>Memory Management</b>: Since rows are processed one by one, memory usage remains low, even when handling a large number of records.</li>
<li><b>Cache Scanning</b>: to improve performance: based on gorm tag, cache column structure when scanning the GO row into an appropriate GO struct.</li>
<li><b>Cache Transforming</b>: to improve performance, cache CSV or fixed-length format structure when transforming a GO struct into CSV format or fixed-length format.</li>
</ul>
<h2>Conclusion</h2>
<p>In the sample, I tested with 1 million records, I see Postgres still used less than 14M RAM, and my program used about 15M RAM.</p>
<p>So, for this case, we don&#39;t need to use LIMIT/OFFSET , as long as we loop on cursor, at each of cursor, we write to file stream.</p>
<p>In the past, I also test with 4 million records, export 4GB, it still works.</p>
<h3>Other Samples:</h3>
<ul>
<li><a href="https://github.com/project-samples/go-hive-export">go-hive-export</a>: export data from hive to fix-length or csv file.</li>
<li><a href="https://github.com/project-samples/go-cassandra-export">go-cassandra-export</a>: export data from cassandra to fix-length or csv file.</li>
<li><a href="https://github.com/project-samples/go-mongo-export">go-mongo-export</a>: export data from mongo to fix-length or csv file.</li>
<li><a href="https://github.com/project-samples/go-firestore-export">go-firestore-export</a>: export data from firestore to fix-length or csv file.</li>
</ul>
</article>
  )
}