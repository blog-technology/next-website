export default function Page() {
  return (
    <article>
<h1>A three-tier application</h1>
<p>A three-tier application is a specific type of layered architecture that organizes an application into three distinct logical and physical layers (tiers):</p>
<h3>🧱 1. Presentation Tier (Client Tier)</h3>
<ul>
<li>Role: The front-end, responsible for the user interface and interaction.</li>
<li>Runs on: Browser, mobile app, or desktop client.</li>
<li>Examples:<ul>
<li>Web page (HTML/JS/CSS)</li>
<li>Mobile app screen</li>
<li>React, Angular, Flutter UI</li>
</ul>
</li>
</ul>
<h3>⚙️ 2. Application Tier (Middle Tier / Business Logic Tier)</h3>
<ul>
<li>Role: Contains the core application logic — processes commands, makes decisions, performs calculations, and manages data flow.</li>
<li>Runs on: Application server</li>
<li>Examples:<ul>
<li>REST API using Express.js (Node.js)</li>
<li>Java Spring Boot service</li>
<li>Python Flask backend</li>
<li>Golang microservice</li>
</ul>
</li>
</ul>
<h3>🗃️ 3. Data Tier (Database Tier)</h3>
<ul>
<li>Role: Manages the application&#39;s data storage. Responsible for data persistence, queries, and transactions.</li>
<li>Runs on: Database server</li>
<li>Examples:<ul>
<li>PostgreSQL, MySQL, MongoDB</li>
<li>Firebase Realtime Database</li>
<li>Redis (for caching)</li>
</ul>
</li>
</ul>
<h3>📊 Diagram of a 3-Tier Architecture</h3>
<h3>✅ Benefits of 3-Tier Architecture</h3>
<ul>
<li><b>Scalability</b>: Each tier can be scaled independently (e.g., horizontal scaling of API servers).</li>
<li><b>Maintainability</b>: Changes in one tier have minimal impact on others.</li>
<li><b>Security</b>: Sensitive data is kept in the backend, not exposed to users.</li>
<li><b>Flexibility</b>: Can swap out or upgrade tiers independently (e.g., change the database without touching UI).</li>
</ul>
<h3>🧠 Difference: 3-Tier Architecture vs Layered Architecture</h3>
<table><thead>
<tr>
<th>Feature</th>
<th>3-Tier Architecture</th>
<th>Layered Architecture</th>
</tr></thead><tbody>
<tr>
<td>Physical separation</td>
<td>Yes (can run on separate machines)</td>
<td>Not required (can be logical only)</td>
</tr>
<tr>
<td>Common usage</td>
<td>Web, cloud, enterprise apps</td>
<td>Most general-purpose apps</td>
</tr>
<tr>
<td>Example</td>
<td>Client → API → Database</td>
<td>UI → Service → Domain → Repo → DB</td>
</tr>
</tbody></table>
<h2>A real-world example in a banking app of how the 3 tiers work together</h2>
<p>🏦 Scenario: A user checks their account balance on the mobile app</p>
<h4>1. Presentation Tier (Client Tier)</h4>
<p>🔹 Role:</p>
<ul>
<li>The mobile banking app UI is the front-end that the user interacts with.</li>
</ul>
<p>🧩 What Happens:</p>
<ul>
<li>User opens the Cake Bank mobile app.</li>
<li>Taps &quot;Check Balance&quot; on their account.</li>
<li>The app sends an HTTP request (e.g., GET /accounts/{id}/balance) to the backend.</li>
</ul>
<p>👇 Example:</p>
<pre className="line-numbers"><code className="language-json">{`GET https://api.cakebank.com/accounts/12345/balance
Authorization: Bearer user-access-token`}</code></pre><h4>2. Application Tier (Middle Tier)</h4>
<p>🔹 Role:</p>
<ul>
<li>The backend server (e.g., written in Java/Spring Boot or Go) processes the request.</li>
</ul>
<p>🧩 What Happens:</p>
<ul>
<li>Validates the JWT token to authenticate the user.</li>
<li>Checks user permissions.</li>
<li>Calls the business logic to retrieve account info.</li>
<li>Interacts with the data tier to fetch balance.</li>
</ul>
<p>⚙️ Example logic:</p>
<pre className="line-numbers"><code className="language-go">{`// Application logic
if userHasPermission(userID, accountID) {
    balance := accountService.getBalance(accountID)
    return balance
} else {
    return error("Access Denied")
}`}</code></pre><h4>3. Data Tier (Database Tier)</h4>
<p>🔹 Role:</p>
<ul>
<li>The database server (e.g., PostgreSQL) stores account and transaction data.</li>
</ul>
<p>🧩 What Happens:</p>
<ul>
<li>The backend queries the DB to get the current balance for account ID 12345.</li>
</ul>
<p>💾 Example SQL:</p>
<pre className="line-numbers"><code className="language-sql">{`SELECT balance FROM accounts WHERE account_id = '12345';`}</code></pre><h3>📦 End-to-End Flow Summary</h3>
<h3>💡 Real Systems in Cake Bank You Might Map Like This</h3>
<table><thead>
<tr>
<th>Tier</th>
<th>Example Component</th>
</tr></thead><tbody>
<tr>
<td>Presentation Tier</td>
<td>Cake mobile app</td>
</tr>
<tr>
<td>Application Tier</td>
<td>Cake API gateway, Account microservice</td>
</tr>
<tr>
<td>Data Tier</td>
<td>Oracle (Core banking DB), Redis</td>
</tr>
</tbody></table></article>
  )
}