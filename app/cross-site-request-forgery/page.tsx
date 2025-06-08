export default function Page() {
  return (
    <article>
<h1>Cross-Site Request Forgery (CSRF)</h1>
<p>Cross-Site Request Forgery (CSRF) is a type of web security vulnerability that tricks a victim into performing unintended actions on a web application where they’re authenticated.</p>
<h3>🧨 How CSRF Works</h3>
<p>When a web application does not properly validate or escape user input, an attacker can inject malicious JavaScript into the application. This script runs in the context of the victim’s browser, allowing the attacker to:Imagine you&#39;re logged into your banking site. Then, while still logged in, you visit a malicious website. That malicious site sends a request to your bank (e.g., to transfer money) — using your credentials (like cookies) because your browser automatically includes them.</p>
<p>The bank can’t tell the difference between a legitimate request and the forged one, because the request comes from your browser.er (e.g., sending messages, changing settings).</p>
<h3>🎯 Typical Attack Scenario</h3>
<ol>
<li>User logs into bank.com and has a valid session cookie.</li>
<li>User visits an attacker-controlled website.</li>
<li>That site submits a hidden request to bank.com/transfer?to=attacker&amp;amount=1000. </li>
<li>Because the user is authenticated, the request is accepted.</li>
</ol>
<h3>💡 Example</h3>
<p>A malicious site includes this:</p>
<pre><code className="language-html">{`<img src="https://bank.com/transfer?to=attacker&amount=1000" style="display:none" />`}</code></pre><p>When the logged-in user loads this page, their browser sends the request — including session cookies — to the bank.</p>
<h3>🛡️ How to Prevent CSRF</h3>
<ul>
<li><b>CSRF Tokens</b>: Generate a unique token per form/request. Server checks this token before processing.</li>
<li><b>SameSite Cookies</b>: Set SameSite=Strict or Lax on cookies to prevent them from being sent on cross-site requests.</li>
<li><b>Double Submit Cookies</b>: Send a token in a cookie and in a request parameter; both must match.</li>
<li><b>User Confirmation</b>: Add user interactions (e.g., CAPTCHA, re-authentication) for sensitive actions.</li>
<li><b>Check Referer/Origin</b>: Validate that requests come from your own site (though not foolproof).</li>
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