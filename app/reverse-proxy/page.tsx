export default function Page() {
  return (
    <article>
<h1>Reverse Proxy</h1>
<p>A reverse proxy is a server that sits between client devices (like browsers or apps) and one or more backend servers. It receives client requests, forwards them to the appropriate backend server, and then sends the server’s response back to the client—but the client never directly interacts with the backend server.</p>
<h3>🔄 Key Difference: Reverse Proxy vs Forward Proxy</h3>
<ul>
<li><p>Forward proxy: Client → Proxy → Internet</p>
<ul>
<li>(Hides the client from the server)</li>
</ul>
</li>
<li><p>Reverse proxy: Internet/Client → Proxy → Backend server</p>
<ul>
<li>(Hides the server from the client)</li>
</ul>
</li>
</ul>
<h3>✅ Common Use Cases for Reverse Proxies</h3>
<h4>Load Balancing</h4>
<ul>
<li>Distributes incoming traffic across multiple backend servers to prevent overload.</li>
</ul>
<h4>Security &amp; Anonymity</h4>
<ul>
<li>Hides backend server details and can block malicious traffic (e.g., via firewall rules or rate limiting).</li>
</ul>
<h4>SSL Termination</h4>
<ul>
<li>Handles HTTPS encryption/decryption, reducing the load on backend servers.</li>
</ul>
<h4>Caching</h4>
<ul>
<li>Serves cached responses to improve performance and reduce server load.</li>
</ul>
<h4>Compression &amp; Optimization</h4>
<ul>
<li>Compresses content before sending it to clients, improving performance.</li>
</ul>
<h4>Application Firewall</h4>
<ul>
<li>Can be configured to filter traffic and block attacks (e.g., SQL injection).</li>
</ul>
<h3>🛠 Examples of Reverse Proxies</h3>
<ul>
<li>Nginx</li>
<li>Apache HTTP Server (with mod_proxy)</li>
<li>HAProxy</li>
<li>Traefik</li>
<li>Caddy</li>
</ul>
<h3>📈 Example Scenario</h3>
<p>Imagine a client requests <a href="https://example.com/api/users">https://example.com/api/users</a>.</p>
<ul>
<li>The request goes to an Nginx reverse proxy.</li>
<li>Nginx checks routing rules and forwards the request to <a href="http://internal-api-server:8080/users">http://internal-api-server:8080/users</a>.</li>
<li>The internal server processes the request and returns the result.</li>
<li>Nginx sends the result back to the client.</li>
</ul>
<p>The client never knows the internal structure or address of the API server.</p>
</article>
  )
}