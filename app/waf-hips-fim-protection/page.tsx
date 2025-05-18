export default function WAF() {
  return (
    <article>
      <header>
        <h1>WAF, HIPS, FIM protection</h1>
      </header>
      <div className="article-body">
        <p>
          WAF, HIPS, and FIM are three types of security protection mechanisms commonly used in modern IT environments, especially in enterprises, to enhance
          system and data security. Here's a breakdown of each:
        </p>
        <h3>WAF (Web Application Firewall)</h3>
        <p>
          A WAF is a security solution that monitors and filters HTTP traffic to and from a web application. It helps protect web applications from various
          attacks, including SQL injection, cross-site scripting (XSS), and other vulnerabilities. WAFs can be deployed in front of web servers to inspect
          incoming requests and outgoing responses, ensuring that only legitimate traffic reaches the application.
        </p>
        <h4>Key Features</h4>
        <ul>
          <li>Blocks common web attacks like:</li>
          <ul>
            <li>SQL Injection</li>
            <li>Cross-Site Scripting (XSS)</li>
            <li>Cross-Site Request Forgery (CSRF)</li>
            <li>Remote File Inclusion (RFI)</li>
          </ul>
          <li>Works at Layer 7 (Application Layer) of the OSI model.</li>
          <li>Can be network-based, host-based, or cloud-based.</li>
        </ul>
        <h4>Use case</h4>
        <p>Prevents hackers from exploiting vulnerabilities in websites and web apps.</p>
        <p>Example: AWS WAF, Cloudflare WAF, Azure WAF, ModSecurity (open source).</p>
      </div>
    </article>
  )
}
