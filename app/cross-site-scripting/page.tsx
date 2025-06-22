export default function Page() {
  return (
    <article>
<h1>Cross-Site Scripting (XSS)</h1>
<p>Cross-Site Scripting (XSS) is a type of web security vulnerability that allows attackers to inject malicious scripts into webpages viewed by other users.</p>
<h3>🔍 How XSS Works</h3>
<p>When a web application does not properly validate or escape user input, an attacker can inject malicious JavaScript into the application. This script runs in the context of the victim’s browser, allowing the attacker to:</p>
<ul>
<li>Steal cookies or session tokens.</li>
<li>Redirect users to malicious sites.</li>
<li>Deface webpages.</li>
<li>Perform actions on behalf of the user (e.g., sending messages, changing settings).</li>
</ul>
<h3>🎯 Types of XSS</h3>
<ul>
<li><b>Stored XSS</b>: Malicious script is permanently stored on the target server (e.g., in a comment, forum post). It runs whenever the data is viewed.</li>
<li><b>Reflected XSS</b>: Script is embedded in a URL or request and immediately reflected in the response (e.g., error message, search result).</li>
<li><b>DOM-based XSS</b>: The vulnerability is in the client-side JavaScript, which modifies the DOM using untrusted data (e.g., from window.location).</li>
</ul>
<h3>🔐 Example of Reflected XSS</h3>
<p>Suppose a website echoes back user input in the URL:</p>
<pre className="line-numbers"><code className="language-php">{`https://example.com/search?q=<script>alert('XSS')</script>`}</code></pre><p>If the site renders that input directly into the page without escaping it, the JavaScript will execute in the browser.</p>
<h3>🛡️ How to Prevent XSS</h3>
<ul>
<li>Escape output: Convert characters like &lt;, &gt;, &quot;, &#39; to HTML entities when rendering user input.</li>
<li>Use Content Security Policy (CSP): Limits the sources of executable scripts.</li>
<li>Validate and sanitize input: Remove or neutralize potentially dangerous input.</li>
<li>Use secure frameworks: Libraries like React, Angular, or Vue automatically escape output.</li>
<li>Avoid innerHTML and eval() in JavaScript unless absolutely necessary.</li>
</ul>
<h3>🧪 CSRF vs XSS</h3>
<table><thead><tr>
<th>Aspect</th>
<th>CSRF</th>
<th>XSS</th>
</tr></thead><tbody>
<tr>
<td>Attacks the user or session</td>
<td>✅</td>
<td>✅</td>
</tr>
<tr>
<td>Requires user to be authenticated</td>
<td>✅</td>
<td>❌ (often not required)</td>
</tr>
<tr>
<td>Exploits trust of site in the user</td>
<td>✅</td>
<td>❌</td>
</tr>
<tr>
<td>Exploits trust of user in the site</td>
<td>❌</td>
<td>✅</td>
</tr>
<tr>
<td>Usually does not require script injection</td>
<td>✅</td>
<td>❌</td>
</tr>
</tbody></table></article>
  )
}