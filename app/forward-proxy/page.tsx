export default function Page() {
  return (
    <article>
<h1>Forward Proxy</h1>
<p>A forward proxy (often just called a &quot;proxy&quot;) is a server that sits between a client and the internet. It acts on behalf of the client—when the client wants to access a website or resource, the request goes to the proxy server first, which then forwards the request to the target server. The response also comes back through the proxy.</p>
<h3>🔄 How It Works (Forward Proxy)</h3>
<pre><code className="language-bash">{`Client → Forward Proxy → Target Server (e.g., a website)`}</code></pre><ul>
<li>The proxy server sends the request to the internet. </li>
<li>The target server sees the proxy&#39;s IP address, not the client’s. </li>
<li>The proxy then returns the result to the client.</li>
</ul>
<h3>✅ Use Cases for Forward Proxies</h3>
<h4>Access Control / Censorship Bypass</h4>
<ul>
<li>Bypass geo-restrictions (e.g., using a US proxy to access US-only content). </li>
<li>Used in schools/offices to block certain websites or monitor access.</li>
</ul>
<h4>Anonymity / Privacy</h4>
<ul>
<li>Hides the client’s IP address from the server. </li>
<li>Useful for secure or anonymous browsing.</li>
</ul>
<h4>Content Filtering</h4>
<ul>
<li>Blocks or allows specific content based on rules. </li>
<li>Often used by parents, schools, or corporations.</li>
</ul>
<h4>Caching</h4>
<ul>
<li>Frequently requested resources can be cached, speeding up access.</li>
</ul>
<h4>Logging and Monitoring</h4>
<ul>
<li>Tracks which sites users are visiting (common in corporate environments).</li>
</ul>
<h3>🛠 Examples of Forward Proxies</h3>
<ul>
<li>Squid </li>
<li>CCProxy </li>
<li>Privoxy </li>
<li>Browser-based proxy plugins </li>
<li>VPNs (some function like forward proxies)</li>
</ul>
<h3>📈 Example Scenario</h3>
<p>A student in a restricted network tries to visit <a href="https://example.com">https://example.com</a>, but that site is blocked.</p>
<ul>
<li>They configure their browser to use a forward proxy located in a different country. </li>
<li>The browser sends the request to the proxy. </li>
<li>The proxy accesses example.com, retrieves the data, and sends it back to the student. </li>
<li>The school network only sees traffic to the proxy, not to the blocked site.</li>
</ul>
<h3>🔁 Forward vs Reverse Proxy</h3>
<table><thead><tr>
<th>Feature</th>
<th>Forward Proxy</th>
<th>Reverse Proxy</th>
</tr></thead><tbody>

<tr>
<td>Represents</td>
<td>The client</td>
<td>The server</td>
</tr>

<tr>
<td>Hides</td>
<td>The client's identity</td>
<td>The server's identity</td>
</tr>

<tr>
<td>Main use cases</td>
<td>Privacy, content access, filtering</td>
<td>Load balancing, security, SSL offload</td>
</tr>

<tr>
<td>Seen by</td>
<td>Target server</td>
<td>Client</td>
</tr>

</tbody></table></article>
  )
}