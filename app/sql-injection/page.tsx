export default function Page() {
  return (
    <article>
<h1>SQL Injection</h1>
<p>SQL Injection (SQLi) is a type of web security vulnerability that allows an attacker to interfere with the queries that an application makes to its database.</p>
<h4>🧨 In simple terms:</h4>
<ul>
<li>SQL Injection happens when user input is directly embedded into a SQL query without proper sanitization, allowing the attacker to inject malicious SQL commands.</li>
</ul>
<h3>🔓 Example: Vulnerable Code</h3>
<pre><code className="language-javascript">{`// Example in Node.js (vulnerable)
const username = req.query.username;
const sql = \`SELECT * FROM users WHERE username = '${username}'\`;
db.query(sql);`}</code></pre><p>If an attacker enters:</p>
<pre><code className="language-bash">{`' OR '1'='1`}</code></pre><p>The query becomes:</p>
<pre><code className="language-sql">{`SELECT * FROM users WHERE username = '' OR '1'='1'`}</code></pre><p>✅ Which always returns all users.</p>
<h3>⚠️ Potential Impacts</h3>
<table><thead><tr>
<th>Attack Type</th>
<th>Effect</th>
</tr></thead><tbody>

<tr>
<td><b>Authentication Bypass</b></td>
<td>Login without password</td>
</tr>

<tr>
<td><b>Data Exfiltration</b></td>
<td>Steal sensitive info (e.g. users, emails)</td>
</tr>

<tr>
<td><b>Data Tampering</b></td>
<td>Modify or delete data</td>
</tr>

<tr>
<td><b>Remote Code Execution</b></td>
<td>In rare cases, execute OS-level commands</td>
</tr>

</tbody></table>

<h3>🛡️ How to Prevent SQL Injection</h3>
<table><thead><tr>
<th>✅ Best Practice</th>
<th>Description</th>
</tr></thead><tbody>

<tr>
<td><b>🔐 Use Parameterized Queries / Prepared Statements</b></td>
<td>Never concatenate SQL with raw input. Use ? or named placeholders.</td>
</tr>

<tr>
<td><b>🧱 Use ORM or Query Builders</b></td>
<td>Tools like Sequelize, TypeORM, Prisma prevent direct SQL injection.</td>
</tr>

<tr>
<td><b>🧹 Validate & Sanitize Input</b></td>
<td>Enforce expected types (e.g., email, int), length, and format.</td>
</tr>

<tr>
<td><b>🧾 Whitelist Input When Possible</b></td>
<td>Only allow specific values (e.g., sortBy = 'name' or 'date')</td>
</tr>

<tr>
<td><b>👤 Limit DB Permissions</b></td>
<td>Use read-only accounts when possible, no admin/root.</td>
</tr>

<tr>
<td><b>🧪 Automate Security Testing</b></td>
<td>Run tools like SQLMap, OWASP ZAP, or Burp Suite during CI/CD.</td>
</tr>

<tr>
<td><b>🔐 Escape Output Carefully</b></td>
<td>For SQL, escaping is not enough—parametrize instead.</td>
</tr>

<tr>
<td><b>🛡️ Use a Web Application Firewall (WAF)</b></td>
<td>Azure WAF, AWS WAF, or Cloud Armor can detect/block SQLi patterns.</td>
</tr>

<tr>
<td><b>📜 Enable Logging + Monitoring</b></td>
<td>Use logging tools to detect abnormal queries or spikes.</td>
</tr>

<tr>
<td><b>🔒 Keep Libraries/Frameworks Up to Date</b></td>
<td>Fixes for known SQLi vectors are often patched quickly.</td>
</tr>

<tr>
<td><b>⚠️ Don't Trust Hidden Fields / Cookies</b></td>
<td>	Attackers can tamper with any client-side data.</td>
</tr>

</tbody></table>

<h3>🔎 Tools to Detect SQLi</h3>
<table><thead><tr>
<th>Tool</th>
<th>Use</th>
</tr></thead><tbody>

<tr>
<td><b>SQLMap</b></td>
<td>Open-source SQLi scanner</td>
</tr>

<tr>
<td><b>Burp Suite</b></td>
<td>Manual + automated testing</td>
</tr>

<tr>
<td><b>OWASP ZAP</b></td>
<td>Free vulnerability scanner</td>
</tr>

<tr>
<td><b>Static Analysis</b></td>
<td>SonarQube, Coverity, etc.</td>
</tr>

</tbody></table></article>
  )
}