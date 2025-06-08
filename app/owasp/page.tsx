export default function Page() {
  return (
    <article>
<h1>OWASP</h1>
<p>OWASP stands for Open Worldwide Application Security Project. It is a non-profit organization focused on improving the security of software.</p>
<h3>🔐 What does OWASP do?</h3>
<p>OWASP provides:</p>
<ul>
<li>Security standards </li>
<li>Best practices </li>
<li>Open-source tools </li>
<li>Educational resources</li>
</ul>
<p>These are widely adopted by security professionals and developers around the world.</p>
<h3>🌍 Most Famous Project: OWASP Top 10</h3>
<p>This is a list of the top 10 most critical security risks to web applications. As of the 2021 update, the list includes:</p>
<table><thead><tr>
<th>Rank</th>
<th>Risk</th>
<th>Description</th>
</tr></thead><tbody>

<tr>
<td>1</td>
<td><b>Broken Access Control</b></td>
<td>Failures in enforcing user privileges and permissions</td>
</tr>

<tr>
<td>2</td>
<td><b>Cryptographic Failures</b></td>
<td>Weak or missing encryption</td>
</tr>

<tr>
<td>3</td>
<td><b>Injection</b></td>
<td>SQL, NoSQL, OS command, and other injection flaws</td>
</tr>

<tr>
<td>4</td>
<td><b>Insecure Design</b></td>
<td>Missing or flawed security architecture</td>
</tr>

<tr>
<td>5</td>
<td><b>Security Misconfiguration</b></td>
<td>Incorrect settings, default credentials, exposed files</td>
</tr>

<tr>
<td>6</td>
<td><b>Vulnerable and Outdated Components</b></td>
<td>Using libraries or platforms with known issues</td>
</tr>

<tr>
<td>7</td>
<td><b>Identification and Authentication Failures</b></td>
<td>Broken login, session management, or account handling</td>
</tr>

<tr>
<td>8</td>
<td><b>Software and Data Integrity Failures</b></td>
<td>Trust boundary violations, unsafe deserialization, CI/CD flaws</td>
</tr>

<tr>
<td>9</td>
<td><b>Security Logging and Monitoring Failures</b></td>
<td>Lack of proper logging or alerting</td>
</tr>

<tr>
<td>10</td>
<td><b>Server-Side Request Forgery (SSRF)</b></td>
<td>Exploiting servers to access internal systems</td>
</tr>

</tbody></table>

<h3>🧰 Other Key OWASP Projects</h3>
<table><thead><tr>
<th>Project</th>
<th>Purpose</th>
</tr></thead><tbody>

<tr>
<td><b>OWASP ZAP</b></td>
<td>Web app vulnerability scanner</td>
</tr>

<tr>
<td><b>OWASP Dependency-Check</b></td>
<td>Detects vulnerable libraries in projects</td>
</tr>

<tr>
<td><b>OWASP ASVS</b></td>
<td>Application Security Verification Standard</td>
</tr>

<tr>
<td><b>OWASP Cheat Sheet Series</b></td>
<td>Practical security tips for developers</td>
</tr>

<tr>
<td><b>OWASP Mobile Top 10</b></td>
<td>Security risks specific to mobile apps</td>
</tr>

</tbody></table>

<h3>🛠 How Can You Use OWASP?</h3>
<ul>
<li>Integrate OWASP Top 10 checks in your development pipeline. </li>
<li>Use tools like ZAP or Dependency-Check in your CI/CD. </li>
<li>Follow ASVS for building secure applications. </li>
<li>Refer to cheat sheets when coding critical features (e.g., auth, input validation).</li>
</ul>
</article>
  )
}