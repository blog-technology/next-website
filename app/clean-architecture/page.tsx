export default function Page() {
  return (
    <article>
<h1>Clean Architecture</h1>
<p>Clean Architecture is a software design philosophy introduced by Robert C. Martin (Uncle Bob). It emphasizes separation of concerns and independence of frameworks, databases, UI, and external agencies from the business logic.</p>
<h3>⚙️ Core Concept</h3>
<p>Clean Architecture organizes code into concentric circles, with dependencies pointing inward, toward the business logic.</p>
<h3>🔄 Dependency Rule</h3>
<p>&quot;Source code dependencies must always point inward.&quot;</p>
<p>This means:</p>
<ul>
<li>Inner layers know nothing about outer layers.</li>
<li>Outer layers depend on abstractions defined in inner layers.</li>
</ul>
<h3>🔧 Layer Breakdown</h3>
<table><thead>
<tr>
<th>Layer</th>
<th>Purpose</th>
<th>Knows about</th>
</tr></thead><tbody>
<tr>
<td><b>Entities</b></td>
<td>Core business objects and rules</td>
<td>Nothing</td>
</tr>
<tr>
<td><b>Use Cases</b></td>
<td>Application-specific logic (e.g. register user)</td>
<td>Entities</td>
</tr>
<tr>
<td><b>Interface Adapters</b></td>
<td>Converts data from external systems into internal forms</td>
<td>Use Cases (via interfaces)</td>
</tr>
<tr>
<td><b>Frameworks &amp; Drivers</b></td>
<td>Web, DB, UI frameworks (e.g., Gin, GORM)</td>
<td>Interfaces defined by inner layers</td>
</tr>
</tbody></table>
<h3>✅ Goals of Clean Architecture</h3>
<ul>
<li>Independent of frameworks (e.g., not tied to Gin or GORM).</li>
<li>Testable without UI, DB, or web server.</li>
<li>Independent of UI — same logic could support CLI, REST, gRPC.</li>
<li>Independent of DB — you can swap Postgres for Mongo easily.</li>
<li>Separation of concerns — each layer has a single job.</li>
</ul>
<h3>🆚 Comparison: Clean vs Hexagonal</h3>
<table><thead>
<tr>
<th>Layer</th>
<th>Purpose</th>
<th>Knows about</th>
</tr></thead><tbody>
<tr>
<td><b>Entities</b></td>
<td>Core business objects and rules</td>
<td>Nothing</td>
</tr>
<tr>
<td><b>Use Cases</b></td>
<td>Application-specific logic (e.g. register user)</td>
<td>Entities</td>
</tr>
<tr>
<td><b>Interface Adapters</b></td>
<td>Converts data from external systems into internal forms</td>
<td>Use Cases (via interfaces)</td>
</tr>
<tr>
<td><b>Frameworks &amp; Drivers</b></td>
<td>Web, DB, UI frameworks (e.g., Gin, GORM)</td>
<td>Interfaces defined by inner layers</td>
</tr>
</tbody></table></article>
  )
}