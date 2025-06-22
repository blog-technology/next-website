export default function Page() {
  return (
    <article>
<h1>ORM</h1>
<p>ORM stands for Object-Relational Mapping. It&#39;s a programming technique that allows developers to interact with a relational database using object-oriented programming (OOP) principles—without writing raw SQL queries.</p>
<h3>⚙️ Basic Idea</h3>
<p>ORM maps tables in a database to classes in code, and rows in tables to objects of those classes.</p>
<h3>🧠 Why Use ORM?</h3>
<ul>
<li>✅ Simplifies database operations with high-level abstractions</li>
<li>✅ Reduces boilerplate SQL code</li>
<li>✅ Enhances portability across different databases</li>
<li>✅ Helps maintain consistency with application logic</li>
</ul>
<h3>🧱 How It Works</h3>
<table><thead><tr>
<th>SQL Concept</th>
<th>OOP / ORM Equivalent</th>
</tr></thead><tbody>
<tr>
<td>Table</td>
<td>Class</td>
</tr>
<tr>
<td>Row</td>
<td>Object (instance)</td>
</tr>
<tr>
<td>Column</td>
<td>Attribute (field)</td>
</tr>
<tr>
<td>Foreign key</td>
<td>Reference (association)</td>
</tr>
</tbody></table>
<h3>👨‍💻 Java Example with JPA &amp; Hibernate</h3>
<pre className="line-numbers"><code className="language-java">{`import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Column;

@Entity
@Table(name = "users")
public class User {

    @Id
    private Long id;

    @Column(name = "name")
    private String name;

    // Constructors
    public User() {}

    public User(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}`}</code></pre><h4>🧱 What&#39;s Happening Here?</h4>
<table><thead><tr>
<th>Part</th>
<th>Purpose</th>
</tr></thead><tbody>
<tr>
<td>@Entity</td>
<td>Marks this class as a persistent entity</td>
</tr>
<tr>
<td>@Table(name = "users")</td>
<td>Maps the class to the users table</td>
</tr>
<tr>
<td>@Id</td>
<td>Marks the primary key field</td>
</tr>
<tr>
<td>@Column(name = "name")</td>
<td>Maps the field to a specific column</td>
</tr>
</tbody></table>
<h4>🛠 ORM in Action (Hibernate Example)</h4>
<p>You can now use a JPA Repository or Hibernate Session to interact with the database like this:</p>
<pre className="line-numbers"><code className="language-java">{`User user = entityManager.find(User.class, 1L); // Get user by ID
user.setName("Alice");
entityManager.persist(user); // Save or update`}</code></pre><p>No SQL is written manually — Hibernate will generate it behind the scenes.</p>
<h3>📊 Advantages and Disadvantages of ORM</h3>
<table><thead><tr>
<th>Aspect</th>
<th>Advantage</th>
<th>Disadvantage</th>
</tr></thead><tbody>
<tr>
<td><b>Productivity</b></td>
<td>Less SQL, faster development</td>
<td>Less control over generated SQL</td>
</tr>
<tr>
<td><b>Maintainability</b></td>
<td>Cleaner, centralized code</td>
<td>Mapping issues with complex schemas</td>
</tr>
<tr>
<td><b>Performance</b></td>
<td>Built-in caching & optimization</td>
<td>Potential inefficiencies, N+1 queries</td>
</tr>
<tr>
<td><b>Learning Curve</b></td>
<td>Easier CRUD operations</td>
<td>Harder to master advanced ORM features</td>
</tr>
<tr>
<td><b>Portability</b></td>
<td>Works across databases</td>
<td>Not ideal for DB-specific optimization</td>
</tr>
</tbody></table>
<h3>🔍 Popular ORM Libraries</h3>
<ul>
<li>Java: Hibernate, JPA</li>
<li>Go: GORM, ent</li>
<li>JavaScript/TypeScript: TypeORM, Sequelize, Prisma</li>
<li>Python: SQLAlchemy, Django ORM</li>
<li>PHP: Eloquent (Laravel)</li>
</ul>
</article>
  )
}