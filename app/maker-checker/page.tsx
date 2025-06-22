export default function Page() {
  return (
    <article>
<h1>Maker/Checker</h1>
<p>Maker/Checker is a concept often used in systems where segregation of duties and auditability are important — especially in banking, finance, and enterprise workflows.</p>
<h3>🔍 What Is the Maker/Checker Rule?</h3>
<p>It defines a two-step approval process:</p>
<ul>
<li><b>Maker</b>: Initiates or creates a request or transaction.</li>
<li><b>Checker</b>: Reviews and approves (or rejects) the action initiated by the Maker.</li>
</ul>
<h3>🧾 Example Use Case</h3>
<h4>Scenario: Bank Transfer System</h4>
<ul>
<li>A teller (Maker) creates a transfer of $10,000.</li>
<li>A supervisor (Checker) must approve the transaction before it is executed.</li>
</ul>
<p>This ensures:</p>
<ul>
<li>No single person has full control, reducing risk.</li>
<li>Changes are audited, which is critical for compliance.</li>
</ul>
<h3>✅ Maker/Checker vs RBAC</h3>
<table><thead><tr>
<th>Aspect</th>
<th>RBAC</th>
<th>Maker/Checker</th>
</tr></thead><tbody>
<tr>
<td>Purpose</td>
<td>Controls what a role can do</td>
<td>Separates who creates vs who approves</td>
</tr>
<tr>
<td>Roles involved</td>
<td>Admin, Editor, Viewer, etc.</td>
<td>Maker, Checker</td>
</tr>
<tr>
<td>Focus</td>
<td>Permissions</td>
<td>Process Integrity</td>
</tr>
</tbody></table></article>
  )
}