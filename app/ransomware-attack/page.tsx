export default function Page() {
  return (
    <article>
<h1>Ransomware Attack</h1>
<p>A ransomware attack is a type of cyberattack where malicious software (ransomware) encrypts or locks a victim’s data or systems, and then demands a ransom payment (usually in cryptocurrency) to restore access.</p>
<h3>🧨 How Ransomware Works</h3>
<ol>
<li>Infection: Victim downloads a malicious file (e.g., email attachment, fake software).</li>
<li>Execution: The ransomware runs silently, encrypting files or locking the system.</li>
<li>Ransom Note: A message appears demanding payment to get a decryption key.</li>
<li>Payment (optional): Victims may pay — but there&#39;s no guarantee the files will be restored.</li>
</ol>
<h3>🎯 Common Entry Points</h3>
<table><thead><tr>
<th>Method</th>
<th>Example</th>
</tr></thead><tbody>

<tr>
<td><b>Phishing emails</b></td>
<td>Fake invoices, resumes, delivery notices</td>
</tr>

<tr>
<td><b>Malicious links</b></td>
<td>Drive-by downloads or fake updates</td>
</tr>

<tr>
<td><b>Remote Desktop Protocol (RDP)</b></td>
<td>Exposed RDP ports brute-forced or exploited</td>
</tr>

<tr>
<td><b>Software vulnerabilities</b></td>
<td>Unpatched OS or applications</td>
</tr>

<tr>
<td><b>USB devices</b></td>
<td>Infected external drives</td>
</tr>

</tbody></table>

<h3>🔐 Effects of Ransomware</h3>
<ul>
<li>🔒 Loss of access to critical files or systems </li>
<li>💰 Financial loss (ransom + downtime)</li>
<li>📉 Business disruption or reputation damage </li>
<li>🛑 Legal/regulatory penalties for data breaches</li>
</ul>
<h3>🧬 Common Ransomware Types</h3>
<table><thead><tr>
<th>Name</th>
<th>Behavior</th>
</tr></thead><tbody>

<tr>
<td><b>CryptoLocker</b></td>
<td>Encrypts files with RSA keys</td>
</tr>

<tr>
<td><b>WannaCry</b></td>
<td>Exploited SMB protocol on Windows</td>
</tr>

<tr>
<td><b>LockBit</b></td>
<td>Targets businesses, often double extortion</td>
</tr>

<tr>
<td><b>Ryuk</b></td>
<td>High-value target attacks (e.g. hospitals)</td>
</tr>

</tbody></table>

<h3>🛡️ How to Protect Against Ransomware</h3>
<table><thead><tr>
<th>Defense Strategy</th>
<th>Description</th>
</tr></thead><tbody>

<tr>
<td><b>Email filtering</b></td>
<td>Block phishing and spam messages</td>
</tr>

<tr>
<td><b>Regular backups</b></td>
<td>Offline/cloud backups to recover data</td>
</tr>

<tr>
<td><b>Patch management</b></td>
<td>Keep OS and apps up to date</td>
</tr>

<tr>
<td><b>Endpoint protection</b></td>
<td>Use antivirus + ransomware detection</td>
</tr>

<tr>
<td><b>Network segmentation</b></td>
<td>Limit spread across systems</td>
</tr>

<tr>
<td><b>Least privilege</b></td>
<td>Restrict user access rights</td>
</tr>

<tr>
<td><b>Multi-factor authentication</b></td>
<td>Secure remote access</td>
</tr>

</tbody></table>

<h3>📌 Real-World Example</h3>
<p>In 2021, the Colonial Pipeline (USA) was shut down after a ransomware attack by the DarkSide group. It led to fuel shortages and a $4.4 million ransom payment.</p>
</article>
  )
}