export default function Page() {
  return (
    <article>
<h1>Onion Architecture</h1>
<p>Onion Architecture is a software architectural pattern designed to address common problems with traditional layered architectures, such as tight coupling and difficulty in testing. It was introduced by Jeffrey Palermo and focuses on creating applications that are:</p>
<ul>
<li>Independent of frameworks</li>
<li>Testable</li>
<li>Maintainable</li>
<li>Loosely coupled</li>
</ul>
<h3>️ ️⚙️ Core Idea</h3>
<p>The Onion Architecture organizes code into concentric layers that have clear dependencies, with the innermost layer being the most fundamental (core business logic) and the outer layers being more infrastructure-related. Dependencies flow inward, meaning outer layers can depend on inner layers, but not the other way around.</p>
<h3>🧅 Onion Layers Breakdown</h3>
<h4>Core / Domain Layer (Innermost)</h4>
<ul>
<li>Contains Entities (business objects), value objects, and interfaces (abstractions).</li>
<li>No dependencies on any other part of the system.</li>
<li>Pure business rules.</li>
</ul>
<h4>Application / Service Layer</h4>
<ul>
<li>Contains use cases, application services, and interfaces for repositories, external services, etc.</li>
<li>Calls the domain layer but remains independent of infrastructure.</li>
</ul>
<h4>Interface / Adapter Layer</h4>
<ul>
<li>Contains implementations of interfaces (e.g., database repositories, email services, web controllers).</li>
<li>Depends on application and domain layers via their interfaces.</li>
</ul>
<h4>Infrastructure Layer (Outermost)</h4>
<ul>
<li>Actual technical details like ORM, HTTP clients, file systems, and frameworks.</li>
<li>Implements interfaces defined in inner layers.</li>
</ul>
<h3>✅ Benefits</h3>
<ul>
<li>Testability: You can test the business logic without involving external systems like databases.</li>
<li>Flexibility: You can change external layers (e.g., switch from PostgreSQL to MongoDB) without changing the core logic.</li>
<li>Separation of concerns: Encourages clean boundaries between business rules and technical implementation.</li>
</ul>
<h3>🛠 Related Architectures</h3>
<ul>
<li>Hexagonal Architecture (Ports and Adapters): Very similar, emphasizes decoupling through ports (interfaces) and adapters (implementations).</li>
<li>Clean Architecture: Also similar, popularized by Robert C. Martin (Uncle Bob), focuses on dependency inversion.</li>
</ul>
</article>
  )
}