export default function Page() {
  return (
    <article>
<h1>File Inclusion</h1>
<p><b>File Inclusion</b> is a type of web vulnerability where an attacker tricks the web application into <b>loading and executing unauthorized files</b> on the server. It usually happens when <b>user input is used to construct file paths</b> without proper validation or sanitization.</p>
<h3>🧨 Two Main Types of File Inclusion</h3>
<table><thead><tr>
<th>Type</th>
<th>Description</th>
</tr></thead><tbody>
<tr>
<td><b>Local File Inclusion (LFI)</b></td>
<td>Attacker includes files already on the server</td>
</tr>
<tr>
<td><b>Remote File Inclusion (RFI)</b></td>
<td>Attacker includes external files from a URL (only in certain misconfigured environments)</td>
</tr>
</tbody></table>
<h3>📉 Impact of File Inclusion Attacks</h3>
<table><thead><tr>
<th>Risk</th>
<th>Description</th>
</tr></thead><tbody>
<tr>
<td><b>🔎 Information Disclosure</b></td>
<td>Read sensitive config or system files</td>
</tr>
<tr>
<td><b>🐚 Remote Code Execution</b></td>
<td>Execute malicious code via RFI</td>
</tr>
<tr>
<td><b>🐞 Application Exploitation</b></td>
<td>Load unintended files, leak source</td>
</tr>
<tr>
<td><b>🪓 Privilege Escalation</b></td>
<td>Combine with LFI to gain shell access</td>
</tr>
</tbody></table>
<h3>🛡️ How to Prevent File Inclusion</h3>
<table><thead><tr>
<th>✅ Best Practice</th>
<th>Description</th>
</tr></thead><tbody>
<tr>
<td><b>Avoid using raw user input in file paths</b></td>
<td>Never trust input from query params for file names</td>
</tr>
<tr>
<td><b>Use a whitelist of allowed files</b></td>
<td>Only include known-safe files</td>
</tr>
<tr>
<td><b>Sanitize and validate input</b></td>
<td>Strip ../, %00, etc. to prevent path traversal</td>
</tr>
<tr>
<td><b>Disable dangerous PHP settings</b></td>
<td>Turn off allow_url_include and allow_url_fopen</td>
</tr>
<tr>
<td><b>Use framework routing instead</b></td>
<td>Let your web framework handle routing, not manual includes</td>
</tr>
<tr>
<td><b>Limit file access permissions</b></td>
<td>Only allow access to needed directories</td>
</tr>
<tr>
<td><b>Use static file mapping or templates</b></td>
<td>Avoid dynamic includes when possible</td>
</tr>
</tbody></table>
<h3>🧪 Tools to Detect File Inclusion Vulnerabilities</h3>
<table><thead><tr>
<th>Tool</th>
<th>Description</th>
</tr></thead><tbody>
<tr>
<td><b>Burp Suite</b></td>
<td>Manual and automated testing</td>
</tr>
<tr>
<td><b>OWASP ZAP</b></td>
<td>Open-source vulnerability scanner</td>
</tr>
<tr>
<td><b>Nikto / Dirb</b></td>
<td>Scan directories and file access</td>
</tr>
<tr>
<td><b>Static Code Analysis</b></td>
<td>SonarQube, Semgrep, etc. can flag insecure include() usage</td>
</tr>
</tbody></table>
<h3>🔍 Remote File Inclusion (RFI) vs LFI (Local File Inclusion)</h3>
<table><thead><tr>
<th>Aspect</th>
<th>Remote File Inclusion (RFI)</th>
<th>LFI (Local File Inclusion)</th>
</tr></thead><tbody>
<tr>
<td>File Location</td>
<td>Remote (e.g., http://evil.com)</td>
<td>ocal (e.g., ../../etc/passwd)</td>
</tr>
<tr>
<td>Risk Level</td>
<td>Very high (can run arbitrary code)</td>
<td>High (can leak files or escalate to RCE)</td>
</tr>
<tr>
<td>Common Vector</td>
<td>include($_GET['page'])</td>
<td>Same</td>
</tr>
</tbody></table>
<h2>🗂️ What is Local File Inclusion (LFI)</h2>
<p>Local File Inclusion (LFI) is a web security vulnerability that allows an attacker to include files from the local server file system in the response. This happens when a web application loads files using user input without proper validation.</p>
<h3>⚠️ Why is LFI Dangerous?</h3>
<ul>
<li>It can expose sensitive server files like:<ul>
<li>/etc/passwd (on Linux)</li>
<li>C:\Windows\win.ini (on Windows)</li>
</ul>
</li>
<li>Can allow remote code execution (RCE) in some cases (e.g., via log poisoning)</li>
<li>Can expose source code or configuration secrets</li>
</ul>
<h3>📁 Example: Vulnerable PHP Code (works similarly in Express/Node.js if unsafe)</h3>
<pre className="line-numbers"><code className="language-go">{`<?php
  $page = $_GET['page'];
  include($page . ".php");
?>`}</code></pre><h3>✅ How to Prevent LFI</h3>
<table><thead><tr>
<th>Method</th>
<th>Description</th>
</tr></thead><tbody>
<tr>
<td>✅ Use Static Serving</td>
<td>Use frameworks like express.static</td>
</tr>
<tr>
<td>✅ Whitelist Allowed Files</td>
<td>Only serve files from a fixed, allowed list</td>
</tr>
<tr>
<td>✅ Sanitize User Input</td>
<td>Remove ../, /, \, and null bytes (%00)</td>
</tr>
<tr>
<td>✅ Never Use User Input in Paths</td>
<td>Avoid dynamic file inclusion from input</td>
</tr>
<tr>
<td>✅ Set File Access Boundaries</td>
<td>Use path.join() and validate paths carefully.</td>
</tr>
</tbody></table>


<h3>🔒 Secure Express.js Example</h3>
<pre className="line-numbers"><code className="language-ts">{`import path from "path"

app.get("/view", (req, res) => {
  const allowedPages = ["home", "about", "contact"]
  const page = req.query.page

  if (allowedPages.includes(page)) {
    res.sendFile(path.join(__dirname, "views", \`${page}.html\`))
  } else {
    res.status(403).send("Forbidden")
  }
})`}</code></pre><h2>🔥 What is Remote File Inclusion (RFI)?</h2>
<p>Remote File Inclusion (RFI) is a serious web security vulnerability that allows an attacker to include and execute a remotely hosted malicious file on a vulnerable server.</p>
<p>Remote File Inclusion happens when a web application allows user input to specify a file path that gets fetched and executed by the server — without proper validation.</p>
<h3>⚠️ Example in PHP (vulnerable code)</h3>
<pre className="line-numbers"><code className="language-go">{`<?php
  include($_GET['page']);
?>`}</code></pre><h3>🎯 Impacts of RFI</h3>
<ul>
<li>Remote code execution (RCE)</li>
<li>Server compromise</li>
<li>Data theft</li>
<li>Web shell/backdoor installation</li>
<li>Pivoting to internal systems</li>
</ul>
<h3>🔐 How to Prevent RFI</h3>
<table><thead><tr>
<th>Method</th>
<th>Description</th>
</tr></thead><tbody>
<tr>
<td>✅ Avoid dynamic includes</td>
<td>Don’t include files based on user input.</td>
</tr>
<tr>
<td>✅ Whitelist allowed files</td>
<td>Allow only predefined local files.</td>
</tr>
<tr>
<td>✅ Validate and sanitize input</td>
<td>Ensure input matches a safe pattern (e.g., no http://, .., etc).</td>
</tr>
<tr>
<td>✅ Disable remote file access</td>
<td>In PHP, set allow_url_include = Off in php.ini.</td>
</tr>
<tr>
<td>✅ Use full paths</td>
<td>Reference files with fixed paths, not user-supplied names.</td>
</tr>
</tbody></table>
</article>
  )
}