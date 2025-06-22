export default function Page() {
  return (
    <article>
<h1>LDAP</h1>
<p>LDAP stands for Lightweight Directory Access Protocol. It is an open, vendor-neutral, industry-standard protocol used to access and manage directory information over an IP network.</p>
<h3>🔍 What is a directory?</h3>
<p>A directory in this context is a specialized database optimized for read-heavy operations, typically used to store structured information about users, groups, systems, services, etc.</p>
<h3>🧠 What is LDAP used for?</h3>
<p>LDAP is commonly used for:</p>
<ul>
<li>Authentication (e.g., verifying usernames and passwords)</li>
<li>Authorization (e.g., checking user roles or group membership)</li>
<li>Centralized user management across systems (like Windows, Linux, web applications)</li>
</ul>
<h3>📚 Common LDAP implementations:</h3>
<ul>
<li>Microsoft Active Directory</li>
<li>OpenLDAP</li>
<li>389 Directory Server</li>
<li>Apache Directory Server</li>
</ul>
<h3>🧾 Example LDAP data</h3>
<p>LDAP data is hierarchical and resembles a directory tree:</p>
<pre className="line-numbers"><code className="language-bash">{`dc=microsoft,dc=com
 └── ou=users
      ├── cn=alice
      └── cn=bob`}</code></pre><p>Explanation:</p>
<ul>
<li>dc = domain component</li>
<li>ou = organizational unit</li>
<li>cn = common name (a user or entity)</li>
</ul>
<h3>🛠️ Typical Use Case</h3>
<p>When you log in to a corporate network, the system may:</p>
<ol>
<li>Query the LDAP server to find your username.</li>
<li>Verify your password.</li>
<li>Check your group membership to determine your access rights.</li>
</ol>
<h3>🔑 Key Concepts</h3>
<ul>
<li><b>Bind</b>: Login to the LDAP server.</li>
<li><b>Search</b>: Look up entries (e.g., find a user).</li>
<li><b>DN (Distinguished Name)</b>: Unique identifier for an LDAP entry.</li>
<li><b>Attributes</b>: Key-value pairs stored with each entry (e.g., email, phone).</li>
</ul>
</article>
  )
}