export default function Page() {
  return (
    <article>
<h1>Role-Based Access Control (RBAC)</h1>
<p>It&#39;s a method for managing user permissions within a system by assigning roles to users, and then associating those roles with specific permissions.</p>
<h3>Key Concepts of RBAC</h3>
<ul>
<li>User: An individual who interacts with the system.</li>
<li>Role: A named collection of permissions that represents a job function (e.g., Admin, Editor, Viewer).</li>
<li>Permission: The ability to perform a specific action on a resource (e.g., read article, delete user).</li>
<li>Resource: The object being accessed or manipulated (e.g., files, APIs, database records).</li>
</ul>
<h3>How It Works</h3>
<ul>
<li>Users are assigned roles.</li>
<li>Roles define what permissions are granted.</li>
<li>This simplifies access control by avoiding assigning permissions directly to users.</li>
</ul>
<h3>Example</h3>
<p>Imagine a blog system:</p>
<ul>
<li>Admin: Can create, edit, delete any post and manage users.</li>
<li>Editor: Can create and edit posts.</li>
<li>Viewer: Can only read posts.</li>
</ul>
<p>So instead of assigning create_post, edit_post, and delete_post to each admin individually, you assign them the Admin role that encapsulates those permissions.</p>
<h3>Advantages</h3>
<ul>
<li>Simplifies permission management.</li>
<li>Easier to audit and scale.</li>
<li>Reduces the risk of assigning excessive permissions to users.</li>
</ul>
</article>
  )
}