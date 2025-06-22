export default function Page() {
  return (
    <article>
<h1>Hexagonal Architecture</h1>
<p>Hexagonal Architecture (also known as Ports and Adapters Architecture) is a software design pattern introduced by Alistair Cockburn. It aims to create loosely coupled application components that can be easily tested and adapted to different environments or delivery mechanisms.</p>
<h3>⚙️ Key Concepts</h3>
<h4>💡 Core Idea:</h4>
<p>Instead of thinking in terms of layers (like layered architecture), Hexagonal Architecture thinks in terms of inbound and outbound interactions with the application core.</p>
<h3>Components of Hexagonal Architecture</h3>
<h4>Application Core (Inside the Hexagon)</h4>
<ul>
<li>Contains the business logic (aka domain logic or use cases).</li>
<li>Isolated from frameworks, databases, UI, etc.</li>
<li>Doesn&#39;t know anything about how data is presented or persisted.</li>
</ul>
<h4>Ports</h4>
<ul>
<li>Interfaces that define how the application communicates with the outside world.</li>
<li>Two types:<ul>
<li>Inbound Ports: Interfaces that allow external systems (like controllers or UI) to trigger application logic.</li>
<li>Outbound Ports: Interfaces that the core uses to call external systems (like databases or APIs).</li>
</ul>
</li>
</ul>
<h4>Adapters</h4>
<ul>
<li>Implementations of the ports.</li>
<li>They “plug into” the hexagon to provide specific infrastructure, like HTTP, CLI, DB, etc.</li>
<li>Examples:<ul>
<li>An HTTP adapter that turns a request into a use case call.</li>
<li>A repository adapter that implements DB access for a given port.</li>
</ul>
</li>
</ul>
<h3>🖼 Diagram</h3>
<h3>🆚 Comparison: Hexagonal vs Layered</h3>
<table><thead>
<tr>
<th>Feature</th>
<th>Hexagonal Architecture</th>
<th>Layered Architecture</th>
</tr></thead><tbody>
<tr>
<td>Focus</td>
<td>Interaction (ports/adapters)</td>
<td>Responsibilities (layers)</td>
</tr>
<tr>
<td>Dependency direction</td>
<td>Toward the application core</td>
<td>Downward from top to bottom</td>
</tr>
<tr>
<td>Testability</td>
<td>Very high</td>
<td>Moderate</td>
</tr>
<tr>
<td>Flexibility</td>
<td>High (plug in adapters easily)</td>
<td>Lower, especially with tight coupling</td>
</tr>
<tr>
<td>Framework Independence</td>
<td>Yes</td>
<td>Often no (tightly bound to web/ORM)</td>
</tr>
</tbody></table>
<h3>✅ Benefits</h3>
<ul>
<li>Easy to test the application core without databases or HTTP.</li>
<li>Swap adapters easily (e.g., use SQL or NoSQL, REST or gRPC).</li>
<li>Promotes clean separation of concerns.</li>
<li>Core logic is framework-agnostic.</li>
</ul>
</article>
  )
}