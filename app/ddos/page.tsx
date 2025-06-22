export default function Page() {
  return (
    <article>
      <h1>DDoS</h1>
      <h3>💥 What is a DDoS Attack?</h3>
      <p>A DDoS (Distributed Denial of Service) attack:</p>
      <ul>
        <li>Originates from many devices (often thousands or millions), typically compromised machines forming a botnet.</li>
        <li>Sends huge volumes of traffic (requests, packets, connections) to a target system.</li>
        <li>Goal: Crash the service or exhaust resources (bandwidth, memory, CPU), causing downtime.</li>
      </ul>
      <h3>🎯 Goals of a DDoS Attack</h3>
      <ul>
        <li>Knock websites or services offline (e.g., e-commerce, banking).</li>
        <li>Hurt reputation or revenue.</li>
        <li>Distract security teams (while performing another attack).</li>
        <li>Harass or extort money (ransom DDoS).</li>
        <li>Make a political or ideological statement.</li>
      </ul>
      <h3>🛡️ What is DDoS protection?</h3>
      <p>
        DDoS protection refers to the technologies and strategies used to detect, mitigate, and prevent Distributed Denial of Service (DDoS) attacks — where
        attackers flood a server, network, or application with massive fake traffic to overwhelm it and make it unavailable to real users.
      </p>
      <h3>🛡️ Common DDoS Protection Techniques</h3>
      <ul>
        <li>
          <b>Rate Limiting</b>: Restricts number of requests per IP per second/minute.
        </li>
        <li>
          <b>Web Application Firewall (WAF)</b>: Filters HTTP traffic; blocks suspicious patterns.
        </li>
        <li>
          <b>Geo-blocking / IP Blacklisting</b>: Blocks traffic from high-risk countries or known malicious IPs.
        </li>
        <li>
          <b>CAPTCHA / JS Challenges</b>: Distinguishes bots from real users before processing.
        </li>
        <li>
          <b>CDN with DDoS Protection</b>: Providers like Cloudflare, Akamai, AWS CloudFront absorb and block attacks.
        </li>
        <li>
          <b>Anycast Network Routing</b>: Distributes incoming traffic to multiple data centers to avoid overloading one.
        </li>
        <li>
          <b>Behavioral Analysis</b>: Uses machine learning to detect unusual traffic patterns.
        </li>
      </ul>
      <h3>🧱 DDoS Protection on Cloud Platforms</h3>
      <ul>
        <li>
          <b>Cloudflare</b>: Free/paid DDoS mitigation, WAF, bot management
        </li>
        <li>
          <b>AWS Shield</b>: Automatic DDoS protection for AWS services (Shield Standard/Advanced)
        </li>
        <li>
          <b>Google Cloud Armor</b>: Protects apps behind Google Load Balancer with rules and geo-filtering
        </li>
        <li>
          <b>Azure DDoS Protection</b>: Network-level protection with adaptive tuning
        </li>
      </ul>
      <h3>🧪 Types of DDoS Attacks</h3>
      <table>
        <thead>
          <tr>
            <th>Attack Type</th>
            <th>Target</th>
            <th>Example</th>
            <th>Layer</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Volumetric</td>
            <td>Bandwidth</td>
            <td>UDP floods, ICMP floods</td>
            <td>L3/L4</td>
          </tr>
          <tr>
            <td>Protocol Attacks</td>
            <td>Network stack</td>
            <td>SYN flood, Ping of Death</td>
            <td>L3/L4</td>
          </tr>
          <tr>
            <td>Application Layer (Layer 7)</td>
            <td>Web apps</td>
            <td>HTTP GET/POST floods</td>
            <td>L7</td>
          </tr>
        </tbody>
      </table>
      <p>✅ Best Practices</p>
      <ul>
        <li>Use a reverse proxy (e.g., Cloudflare, AWS ALB) to hide your real IP.</li>
        <li>Enforce rate limits and CAPTCHA on login/contact forms.</li>
        <li>Monitor traffic in real time using dashboards or SIEM tools.</li>
        <li>Use auto-scaling infrastructure to absorb traffic spikes.</li>
        <li>Implement WAF rules for suspicious behavior (e.g., long URLs, SQLi patterns).</li>
      </ul>
    </article>
  )
}
