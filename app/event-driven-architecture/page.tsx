export default function Page() {
  return (
    <article>
<h1>Event-Driven Architecture (EDA)</h1>
<p>Event-Driven Architecture (EDA) is a software design pattern where components of a system communicate and react to events, rather than relying on direct calls between modules. It promotes asynchronous, loosely coupled communication, where events act as triggers for actions across the system.</p>
<h3>⚙️ Core Concept</h3>
<table><thead><tr>
<th>Concept</th>
<th>Description</th>
</tr></thead><tbody>

<tr>
<td><b>Event</b></td>
<td>A message or notification that something happened (e.g., "UserRegistered", "OrderPlaced").</td>
</tr>

<tr>
<td><b>Producer</b></td>
<td>The component that emits an event. It doesn't care who listens.</td>
</tr>

<tr>
<td><b>Consumer</b></td>
<td>The component that listens for and reacts to events.</td>
</tr>

<tr>
<td><b>Event Bus/Broker</b></td>
<td>Middleware (e.g., Kafka, RabbitMQ, NATS) that routes events from producers to consumers.</td>
</tr>

</tbody></table>

<h3>🔁 Flow Example</h3>
<p>In an e-commerce app:</p>
<ol>
<li>The Order Service places an order and emits an OrderPlaced event.</li>
<li>The Inventory Service listens for this event and decreases stock.</li>
<li>The Email Service also listens and sends a confirmation email.</li>
<li>The Shipping Service prepares the package.</li>
</ol>
<p>All of this happens without direct dependencies between services.</p>
<h3>🧩 Characteristics</h3>
<ul>
<li><b>Asynchronous</b>: Services don&#39;t wait for responses; they just emit events.</li>
<li><b>Loose Coupling</b>: Services don&#39;t need to know about each other.</li>
<li><b>Scalable</b>: Easy to add new consumers without changing producers.</li>
<li><b>Resilient</b>: Failures in one service don’t affect others (if decoupled properly).</li>
</ul>
<h3>✅ Benefits</h3>
<ul>
<li><b>Flexibility</b>: Easily extend functionality by adding new event listeners.</li>
<li><b>Decoupling</b>: Services evolve independently.</li>
<li><b>Responsiveness</b>: Enables real-time and reactive systems.</li>
<li><b>Auditability</b>: Events provide a trace of system activity.</li>
</ul>
<h3>⚠️ Challenges</h3>
<ul>
<li><b>Complex Debugging</b>: Hard to trace cause-effect relationships.</li>
<li><b>Event Ordering</b>: Managing the correct sequence of events can be tricky.</li>
<li><b>Data Consistency</b>: Often eventual, not immediate.</li>
<li><b>Testing Difficulty</b>: Requires simulation of asynchronous event flows.</li>
</ul>
<h3>📦 Common Tools</h3>
<ul>
<li><b>Brokers</b>: Kafka, RabbitMQ, NATS, AWS SNS/SQS, Google Pub/Sub</li>
<li><b>Patterns</b>:<ul>
<li>Pub/Sub (Publish/Subscribe)</li>
<li>Event Sourcing </li>
<li>Command and Event handling</li>
</ul>
</li>
</ul>
<h3>📌 When to Use Event-Driven Architecture (EDA)</h3>
<ul>
<li>You need real-time updates (e.g., notification systems, stock tickers). </li>
<li>Your system is distributed and modular. </li>
<li>You want to enable high scalability and loose coupling.</li>
</ul>
</article>
  )
}