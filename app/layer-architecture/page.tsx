export default function Page() {
  return (
    <article>
<h1>Layer Architecture</h1>
<p>Layered architecture is a software design pattern that organizes the system into separate layers, each with a specific responsibility. It’s commonly used in enterprise applications, web development, and desktop applications because it promotes separation of concerns, modularity, and scalability.</p>
<h3>⚙️ Key Concepts</h3>
<p>Each layer in the architecture is responsible for a particular aspect of the application and typically communicates only with the layers directly above or below it.</p>
<h3>🧱 Common Layers in Layered Architecture</h3>
<h4>Presentation Layer (UI Layer)</h4>
<ul>
<li>What it does: Handles user interface and user interaction.</li>
<li>Examples: Web pages (HTML/CSS/JavaScript), desktop UI, mobile screens.</li>
<li>Tools: React, Angular, Flutter, etc.</li>
</ul>
<h4>Application Layer (Service Layer)</h4>
<ul>
<li>What it does: Manages application logic and workflows.</li>
<li>Often contains service classes that orchestrate use cases.</li>
<li>Tools: Spring Services, Express.js controllers, etc.</li>
</ul>
<h4>Business Logic Layer (Domain Layer)</h4>
<ul>
<li>What it does: Contains business rules and domain logic.</li>
<li>Independent of UI or databases.</li>
<li>Tools: Java classes, Go structs with logic, domain entities.</li>
</ul>
<h4>Data Access Layer (Repository Layer / Persistence Layer)</h4>
<ul>
<li>What it does: Handles CRUD operations with the database.</li>
<li>Abstracts the database access from the rest of the system.</li>
<li>Tools: JPA/Hibernate (Java), GORM (Go), Sequelize (Node.js)</li>
</ul>
<h4>Database Layer (Infrastructure Layer)</h4>
<ul>
<li>What it does: The actual database system.</li>
<li>Examples: PostgreSQL, MySQL, MongoDB</li>
</ul>
<h3>📊 Diagram of Layered Architecture</h3>
<h3>✅ Advantages</h3>
<ul>
<li>Separation of concerns</li>
<li>Easy to maintain and test</li>
<li>Can reuse code across applications</li>
<li>Makes onboarding new developers easier</li>
</ul>
<h3>⚠️ Disadvantages</h3>
<ul>
<li>Can become tightly coupled if not carefully designed</li>
<li>Overhead in simple applications</li>
<li>Harder to enforce layer boundaries without discipline</li>
</ul>
</article>
  )
}