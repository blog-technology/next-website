export default function Page() {
  return (
    <article>
<h1>Event Sourcing Architecture</h1>
<p>Event Sourcing is an architectural pattern where state changes in an application are stored as a sequence of events, rather than storing just the current state in a database.</p>
<h3>⚙️ Core Idea</h3>
<p>Instead of updating rows in a table (like in traditional CRUD apps), every change to the application state is captured as an immutable event and stored in an event store. The current state is then reconstructed by replaying these events.</p>
<p>Instead of doing this:</p>
<pre className="line-numbers"><code className="language-sql">{`UPDATE accounts SET balance = 900 WHERE id = 1;`}</code></pre><p>You do this:</p>
<pre className="line-numbers"><code className="language-text">{`Event 1: AccountCreated { id: 1, balance: 0 }
Event 2: MoneyDeposited { id: 1, amount: 1000 }
Event 3: MoneyWithdrawn { id: 1, amount: 100 }`}</code></pre><p>And the current state is reconstructed by replaying these events.</p>
<h3>🧱 Example</h3>
<p>Imagine a bank account:</p>
<ul>
<li>Instead of storing the current balance (balance = 1000),</li>
<li>You store events like:<ul>
<li>AccountOpened (initialBalance: 500)</li>
<li>MoneyDeposited (amount: 500)</li>
<li>MoneyWithdrawn (amount: 100)</li>
</ul>
</li>
</ul>
<p>To calculate the balance, you replay the events:</p>
<p>500 (open) + 500 (deposit) - 100 (withdrawal) = 900</p>
<h3>📦 Key Components</h3>
<table><thead><tr>
<th>Component</th>
<th>Description</th>
</tr></thead><tbody>
<tr>
<td><b>Event</b></td>
<td>A record of something that happened (e.g., UserRegistered, OrderShipped).</td>
</tr>
<tr>
<td><b>Command</b></td>
<td>A request to change state, which, if valid, results in one or more events.</td>
</tr>
<tr>
<td><b>Event Store</b></td>
<td>An append-only log of all events (e.g., stored in Kafka, PostgreSQL, etc.).</td>
</tr>
<tr>
<td><b>Aggregate</b></td>
<td>The business object that processes and applies events to rebuild its state.</td>
</tr>
<tr>
<td><b>Projection (Read Model)</b></td>
<td>Reads events and creates read-optimized views for querying.</td>
</tr>
</tbody></table>
<h3>✅ Benefits</h3>
<ul>
<li><b>Auditability</b>: Every change is logged—perfect for compliance and debugging.</li>
<li><b>Reproducibility</b>: Replaying events lets you rebuild system state at any point in time.</li>
<li><b>Flexibility</b>: Create multiple read models for different purposes without modifying the core logic.</li>
<li><b>Integration</b>: Events can trigger other services or workflows (often used in event-driven systems).</li>
</ul>
<h3>⚠️ Challenges</h3>
<ul>
<li><b>Event Versioning</b>: Changes in event structure over time must be managed.</li>
<li><b>Complexity</b>: More moving parts than traditional approaches.</li>
<li><b>Event Ordering &amp; Idempotency</b>: Must ensure correct handling when replaying or reprocessing events.</li>
<li><b>Data Querying</b>: No direct queries on current state; must rely on projections.</li>
</ul>
<h3>🔄 Event Sourcing vs Traditional CRUD</h3>
<table><thead><tr>
<th>Aspect</th>
<th>Traditional CRUD</th>
<th>Event Sourcing</th>
</tr></thead><tbody>
<tr>
<td>State Storage</td>
<td>Latest state in DB</td>
<td>Event log + replay for current state</td>
</tr>
<tr>
<td>Change Tracking</td>
<td>Often lost unless explicitly stored</td>
<td>Built-in history of all changes</td>
</tr>
<tr>
<td>Auditability</td>
<td>Manual</td>
<td>Automatic</td>
</tr>
<tr>
<td>Complexity</td>
<td>Low</td>
<td>High</td>
</tr>
<tr>
<td>Complexity</td>
<td>Low</td>
<td>High</td>
</tr>
<tr>
<td>Performance (reads)</td>
<td>Fast</td>
<td>Needs read models (projections)</td>
</tr>
</tbody></table>
<h3>🔧 When to Use Event Sourcing</h3>
<p>✅ Good fit if:</p>
<ul>
<li>You need full history of changes.</li>
<li>You need audit trails.</li>
<li>You&#39;re building complex business workflows.</li>
<li>You&#39;re using CQRS and/or event-driven architecture.</li>
</ul>
<p>🚫 Avoid if:</p>
<ul>
<li>Your domain is simple and CRUD is enough.</li>
<li>You don’t need a full history of changes.</li>
<li>You&#39;re unfamiliar with distributed/event-based systems.</li>
</ul>
<h3>🔗 Often Used With</h3>
<ul>
<li><b>CQRS</b>: Commands create events; projections serve queries.</li>
<li><b>EDA</b>: Events are emitted and consumed by other services.</li>
<li><b>Microservices</b>: Each service manages its own event stream and projections.</li>
</ul>
</article>
  )
}