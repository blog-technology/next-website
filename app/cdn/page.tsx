export default function Page() {
  return (
    <article>
<h1>CDN (Content Delivery Network)</h1>
<p>A CDN (Content Delivery Network) is a system of distributed servers that delivers web content to users based on their geographic location. Its main purpose is to improve website performance, reliability, and security.</p>
<h3>🔍 How a CDN Works</h3>
<p>When a user accesses your website:</p>
<ul>
<li>Without a CDN: Their request goes directly to your origin server (which may be far away), causing higher latency.</li>
<li>With a CDN: The request is served from a nearby edge server in the CDN&#39;s global network, reducing load time.</li>
</ul>
<h3>📦 What Does a CDN Deliver?</h3>
<ul>
<li>Static assets (images, CSS, JavaScript, fonts)</li>
<li>Video/audio streaming</li>
<li>Web pages (HTML, via caching)</li>
<li>Software downloads</li>
<li>API responses (sometimes)</li>
</ul>
<h3>✅ Benefits of Using a CDN</h3>
<table><thead><tr>
<th>Benefit</th>
<th>Description</th>
</tr></thead><tbody>
<tr>
<td>🌍 Faster loading</td>
<td>Reduces latency by serving content from servers near the user</td>
</tr>
<tr>
<td>🛡️ Increased security</td>
<td>Protects against DDoS attacks, adds SSL/TLS, and hides the origin server</td>
</tr>
<tr>
<td>📈 High availability</td>
<td>Distributes traffic and handles failover if one server is down</td>
</tr>
<tr>
<td>💰 Cost savings</td>
<td>Reduces bandwidth usage on the origin server by caching static content</td>
</tr>
</tbody></table>
<h3>🧠 Popular CDN Providers</h3>
<ul>
<li>Cloudflare</li>
<li>Akamai</li>
<li>Amazon CloudFront</li>
<li>Google Cloud CDN</li>
<li>Fastly</li>
</ul>
</article>
  )
}