export default function Page() {
  return (
    <article>
<h1>BCP - DRP</h1>
<p>BCP (Business Continuity Plan) and DRP (Disaster Recovery Plan) are both crucial components of an organization&#39;s resilience strategy, but they serve different purposes:</p>
<h2>🧩 BCP – Business Continuity Plan</h2>
<h3>Definition</h3>
<p>A proactive plan to ensure that critical business functions continue during and after a disruption (e.g., natural disaster, cyberattack, pandemic).</p>
<h3>Goal</h3>
<p>Minimize downtime and keep the business running (even in degraded mode).</p>
<h3>Scope</h3>
<ul>
<li><b>People</b>: alternate teams, roles, contacts</li>
<li><b>Processes</b>: critical operations, supply chains</li>
<li><b>Technology</b>: cloud backups, remote access</li>
<li><b>Facilities</b>: alternate offices, work-from-home plans</li>
</ul>
<h3>Examples</h3>
<ul>
<li>Can customer service continue if the call center is down?</li>
<li>Are there alternative suppliers if your main one fails?</li>
</ul>
<h2>🔧 2. DRP – Disaster Recovery Plan</h2>
<h3>Definition</h3>
<p>A technical subset of BCP focused specifically on recovering IT systems, data, and infrastructure after a disaster.</p>
<h3>Goal</h3>
<p>Restore IT services and data as quickly as possible.</p>
<h3>Scope</h3>
<ul>
<li>Backups and restore plans</li>
<li>Data center failover</li>
<li>Cloud recovery and snapshots</li>
<li>RTO/RPO (Recovery Time Objective &amp; Recovery Point Objective)</li>
</ul>
<h3>Examples</h3>
<ul>
<li>Can customer service continue if the call center is down?</li>
<li>Are there alternative suppliers if your main one fails?</li>
</ul>
<h2>🧠 Key Difference</h2>
<table><thead><tr>
<th>Feature</th>
<th>BCP</th>
<th>DRP</th>
</tr></thead><tbody>
<tr>
<td>Focus</td>
<td>Business operations</td>
<td>IT systems & data recovery</td>
</tr>
<tr>
<td>Scope</td>
<td>Organization-wide</td>
<td>Technology-specific</td>
</tr>
<tr>
<td>Goal</td>
<td>Ensure business continuity</td>
<td>Resume IT functions</td>
</tr>
<tr>
<td>Strategy Type</td>
<td>Operational and procedural</td>
<td>Technical</td>
</tr>
<tr>
<td>Trigger Events</td>
<td>Any disruption (cyber, supply)</td>
<td>IT/data-related disasters</td>
</tr>
</tbody></table>
<h2>🧪 Example Scenario</h2>
<p>Disaster: Ransomware attack hits your company.</p>
<h3>🧰 BCP ensures:</h3>
<ul>
<li>Employees can work remotely.</li>
<li>Customer support rerouted to another office.</li>
<li>Paper/manual processes available for some workflows.</li>
</ul>
<h3>🛠️ DRP ensures:</h3>
<ul>
<li>Encrypted servers restored from yesterday’s backups.</li>
<li>IT systems online within 6 hours.</li>
<li>Data validated and applications restored.</li>
</ul>
<h2>📦 Common Components</h2>
<table><thead><tr>
<th>BCP Includes</th>
<th>DRP Includes</th>
</tr></thead><tbody>
<tr>
<td>Risk Assessment</td>
<td>Backup and Restore Strategy</td>
</tr>
<tr>
<td>Business Impact Analysis</td>
<td>Disaster Recovery Sites</td>
</tr>
<tr>
<td>Communication Plans</td>
<td>Failover & Failback Process</td>
</tr>
<tr>
<td>Contingency Strategies</td>
<td>DR Drills and Testing</td>
</tr>
<tr>
<td>Alternate Work Locations</td>
<td>RTO/RPO Objectives</td>
</tr>
</tbody></table>
<h2>Appendix: RTO and RPO</h2>
<p>Both RTO and RPO define recovery goals in case of a disruption or failure — especially in disaster recovery planning (DRP) and business continuity planning (BCP).</p>
<h3>⏱️ RTO – Recovery Time Objective</h3>
<p>Maximum acceptable time to restore systems.</p>
<ul>
<li>In Simple Terms: How quickly must we recover this system after it fails?</li>
</ul>
<h4>Example</h4>
<p>If your email system has an RTO of 4 hours, then:</p>
<ul>
<li>You must restore email service within 4 hours of an outage.</li>
<li>If it&#39;s down for more than 4 hours, it may lead to lost communication, business delays, or financial impact.</li>
</ul>
<h4>Summary</h4>
<p>✅ Helps define failover plans, automation, and resource scaling.</p>
<h3>🔁 RPO – Recovery Point Objective</h3>
<p>Maximum acceptable amount of data loss (measured in time).</p>
<ul>
<li>In Simple Terms: How much data can we afford to lose?</li>
</ul>
<h4>Example</h4>
<p>If a database has an RPO of 1 hour, that means:</p>
<ul>
<li>You can tolerate losing up to 1 hour’s worth of data.</li>
<li>Backups or replication must occur at least every hour to meet this goal.</li>
</ul>
<h4>Summary</h4>
<p>✅ Helps design backup frequency, replication, and data sync strategies.</p>
<h3>🧠 Side-by-side Comparison</h3>
<table><thead><tr>
<th>Metric</th>
<th>⏱️ RTO – Recovery Time Objective</th>
<th>🔁 RPO – Recovery Point Objective</th>
</tr></thead><tbody>
<tr>
<td>Definition</td>
<td>Maximum downtime you can tolerate</td>
<td>Maximum data loss (in time) you can tolerate</td>
</tr>
<tr>
<td>Focus</td>
<td>Recovery time</td>
<td>Data loss tolerance</td>
</tr>
<tr>
<td>Unit</td>
<td>Time (e.g., minutes/hours)</td>
<td>Time (e.g., seconds/minutes)</td>
</tr>
<tr>
<td>Purpose</td>
<td>Restore operations quickly</td>
<td>Minimize data loss</td>
</tr>
<tr>
<td>Example</td>
<td>Resume within 2h</td>
<td>Accept at most 5 minutes of data loss</td>
</tr>
<tr>
<td>Used for</td>
<td>Failover, automation</td>
<td>Backup, replication, journaling</td>
</tr>
</tbody></table>
<h3>📌 Visual Example:</h3>
<p>If your last backup was at 12:00 PM and a crash happens at 2:00 PM:</p>
<ul>
<li>You lose 2 hours of data.</li>
<li>If your RPO is 1 hour, this violates your RPO.</li>
<li>You’d need more frequent backups (e.g., every 30 minutes) to meet that RPO.</li>
</ul>
<h3>☁️ Cloud Examples (AWS / GCP)</h3>
<table><thead><tr>
<th>Cloud Component</th>
<th>⏱️ Helps with RTO</th>
<th>🔁 Helps with RPO</th>
</tr></thead><tbody>
<tr>
<td>AWS Route 53 failover</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td>GCP Cloud Load Balancer</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td>AWS Backup / GCS Snapshots</td>
<td></td>
<td>✅ (automated snapshots)</td>
</tr>
<tr>
<td>RDS Multi-AZ / Cloud SQL</td>
<td>✅ (auto failover)</td>
<td>✅ (real-time sync or backups)</td>
</tr>
<tr>
<td>S3 Cross-region Replication</td>
<td></td>
<td>✅ (geo redundancy)</td>
</tr>
</tbody></table>
</article>
  )
}