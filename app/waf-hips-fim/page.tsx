export default function Page() {
  return (
    <article>
<h1>WAF, HIPS, FIM protection</h1>
<p>WAF, HIPS, and FIM are three types of security protection mechanisms commonly used in modern IT environments, especially in enterprises, to enhance system and data security. Here&#39;s a breakdown of each:</p>
<h3>🔒 1. WAF (Web Application Firewall)</h3>
<p><b>Purpose</b>: Protects web applications by filtering and monitoring HTTP traffic between a web application and the Internet.</p>
<p><b>Key Features</b>:</p>
<ul>
<li>Blocks common web attacks like:<ul>
<li>SQL Injection</li>
<li>Cross-Site Scripting (XSS)</li>
<li>Cross-Site Request Forgery (CSRF)</li>
<li>File Inclusion</li>
</ul>
</li>
<li>Works at Layer 7 (Application Layer) of the OSI model.</li>
<li>Can be network-based, host-based, or cloud-based.</li>
</ul>
<p><b>Use case</b>: Prevents hackers from exploiting vulnerabilities in websites and web apps.</p>
<ul>
<li>Example: AWS WAF, Cloudflare WAF, Azure WAF, ModSecurity (open source).</li>
</ul>
<h3>🛡️ 2. HIPS (Host-based Intrusion Prevention System)</h3>
<p><b>Purpose</b>: Monitors and analyzes activities on a specific host (server, workstation) to detect and block malicious behavior.</p>
<p><b>Key Features</b>:</p>
<ul>
<li>Detects unauthorized changes to files, registries, memory, processes.</li>
<li>Uses behavior-based, signature-based, and heuristic methods.</li>
<li>Often integrated into antivirus or endpoint protection platforms.</li>
</ul>
<p><b>Use case</b>: Stops malware or attackers from exploiting the operating system or installed applications.</p>
<ul>
<li>Example: Symantec Endpoint Protection, OSSEC (open-source HIDS/HIPS), CrowdStrike Falcon.</li>
</ul>
<h3>📁 3. FIM (File Integrity Monitoring)</h3>
<p><b>Purpose</b>: Detects unauthorized changes to important files and system configurations.</p>
<p><b>Key Features</b>:</p>
<ul>
<li>Tracks changes (create/modify/delete) to:<ul>
<li>System files</li>
<li>Configuration files</li>
<li>Log files</li>
</ul>
</li>
<li>Sends alerts when files change unexpectedly.</li>
<li>Often used for compliance (PCI-DSS, HIPAA, etc.).</li>
</ul>
<p><b>Use case</b>: Detect tampering or unauthorized modifications, e.g., a web shell uploaded to a server.</p>
<ul>
<li>Example: Tripwire, OSSEC, Qualys FIM.</li>
</ul>
<h3>🧩 Summary</h3>
<table><thead><tr>
<th>Protection</th>
<th>Full Name</th>
<th>Protects Against</th>
<th>Where It Operates</th>
</tr></thead><tbody>

<tr>
<td><b>WAF</b></td>
<td>Web Application Firewall</td>
<td>Web attacks (SQLi, XSS, etc.)</td>
<td>HTTP/HTTPS traffic (App)</td>
</tr>

<tr>
<td><b>HIPS</b></td>
<td>Host-based Intrusion Prevention</td>
<td>Exploits, malware on host</td>
<td>Host OS (kernel/user)</td>
</tr>

<tr>
<td><b>FIM</b></td>
<td>File Integrity Monitoring</td>
<td>Unauthorized file/config changes</td>
<td>File system monitoring</td>
</tr>

</tbody></table>
</article>
  )
}