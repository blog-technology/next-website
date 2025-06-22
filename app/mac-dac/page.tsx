export default function Page() {
  return (
    <article>
<h1>MAC - DAC</h1>
<p>In User Access Control, MAC and DAC are two types of access control models that define how users can access resources in a system:</p>
<h3>MAC (Mandatory Access Control)</h3>
<h4>Definition</h4>
<p>MAC is a strict access control model where the operating system or security policy enforces rules, and users cannot change permissions on resources.</p>
<h4>Key Characteristics</h4>
<ul>
<li>Access is based on security labels (e.g., Top Secret, Confidential).</li>
<li>Only system administrators or predefined policies can modify access rules.</li>
<li>Users cannot change who can access their files.</li>
</ul>
<h4>Use Cases</h4>
<ul>
<li>Military and government systems.</li>
<li>Environments needing high security and confidentiality.</li>
</ul>
<h4>Example</h4>
<ul>
<li>A user with “Confidential” clearance cannot access a “Top Secret” file.</li>
<li>Even if the file owner wants to share it, they can’t override the access policy.</li>
</ul>
<h3>DAC (Discretionary Access Control)</h3>
<h4>Definition</h4>
<p>DAC is a more flexible model where resource owners control access to their resources.</p>
<h4>Key Characteristics</h4>
<ul>
<li>The owner of the resource decides who gets access.</li>
<li>Permissions (read, write, execute) can be granted or revoked by users.</li>
<li>Based on user identity and group membership.</li>
</ul>
<h4>Use Cases</h4>
<ul>
<li>Most commercial and home operating systems (e.g., Windows, Linux).</li>
<li>Systems where users need to share resources freely.</li>
</ul>
<h4>Example</h4>
<ul>
<li>Alice creates a file and grants Bob read and write permissions.</li>
<li>Alice can later revoke Bob’s access.</li>
</ul>
<h3>Summary</h3>
<table><thead><tr>
<th>Feature</th>
<th>MAC (Mandatory Access Control)</th>
<th>DAC (Discretionary Access Control)</th>
</tr></thead><tbody>
<tr>
<td>Control Type</td>
<td>System-enforced</td>
<td>Owner-enforced</td>
</tr>
<tr>
<td>Flexibility</td>
<td>Low</td>
<td>High</td>
</tr>
<tr>
<td>Typical Use</td>
<td>High-security (e.g., military)</td>
<td>General systems (e.g., Linux)</td>
</tr>
<tr>
<td>User Control</td>
<td>No</td>
<td>Yes</td>
</tr>
<tr>
<td>Example System</td>
<td>SELinux, MLS</td>
<td>Windows, standard Linux ACLs</td>
</tr>
</tbody></table></article>
  )
}