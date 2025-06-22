export default function Page() {
  return (
    <article>
<h1>Cloud Services</h1>
<table><thead>
<tr>
<th><b>Category</b></th>
<th><b>Cloud Model</b></th>
<th><b>AWS</b></th>
<th><b>Azure</b></th>
<th><b>Google Cloud</b></th>
<th><b>IBM Cloud</b></th>
<th><b>Oracle Cloud</b></th>
<th><b>Alibaba Cloud</b></th>
</tr></thead><tbody>
<tr>
<td>🧱 <b>Compute</b></td>
<td>IaaS</td>
<td>EC2</td>
<td>Azure VMs</td>
<td>Compute Engine</td>
<td>Virtual Servers</td>
<td>OCI Compute</td>
<td>ECS (Elastic Compute)</td>
</tr>
<tr>
<td></td>
<td>PaaS</td>
<td>Lambda</td>
<td>Azure Functions</td>
<td>Cloud Functions, App Engine</td>
<td>IBM Functions</td>
<td>OCI Functions</td>
<td>Function Compute</td>
</tr>
<tr>
<td>🗄️ <b>Storage</b></td>
<td>IaaS</td>
<td>S3, EBS, Glacier</td>
<td>Blob Storage, Disk Storage</td>
<td>Cloud Storage, Persistent Disk</td>
<td>Cloud Object Storage</td>
<td>Object Storage, Archive</td>
<td>OSS (Object Storage), NAS</td>
</tr>
<tr>
<td>🛢 <b>Database</b></td>
<td>PaaS</td>
<td>RDS, DynamoDB</td>
<td>Azure SQL, Cosmos DB</td>
<td>Cloud SQL, Firestore</td>
<td>Db2, Cloudant</td>
<td>Autonomous DB, MySQL HeatWave</td>
<td>ApsaraDB, PolarDB</td>
</tr>
<tr>
<td></td>
<td>SaaS</td>
<td>Amazon Aurora (fully managed)</td>
<td>Azure Database for MySQL</td>
<td>BigQuery (analytics-as-a-service)</td>
<td>Db2 on Cloud</td>
<td>Oracle Cloud Database</td>
<td>AnalyticDB</td>
</tr>
<tr>
<td>🔧 <b>DevOps</b></td>
<td>PaaS</td>
<td>CodeBuild, CodePipeline</td>
<td>Azure DevOps, GitHub Actions</td>
<td>Cloud Build, Deployment Manager</td>
<td>Continuous Delivery Toolchain</td>
<td>DevOps Service</td>
<td>Cloud DevOps Tools</td>
</tr>
<tr>
<td>📦 <b>Containers</b></td>
<td>PaaS</td>
<td>ECS, EKS, Fargate</td>
<td>AKS (Kubernetes), ACI</td>
<td>GKE (Kubernetes), Cloud Run</td>
<td>IBM Kubernetes Service</td>
<td>OCI Container Engine</td>
<td>ACK (Alibaba Kubernetes)</td>
</tr>
<tr>
<td>🌐 <b>Networking</b></td>
<td>IaaS</td>
<td>VPC, Route 53, CloudFront</td>
<td>VNet, Azure DNS, Azure CDN</td>
<td>VPC, Cloud DNS, Cloud CDN</td>
<td>VPC, Load Balancer</td>
<td>VCN, Load Balancer</td>
<td>VPC, SLB, Cloud DNS</td>
</tr>
<tr>
<td>🛡️ <b>Security</b></td>
<td><b>IaaS / PaaS</b></td>
<td>IAM, KMS, Shield</td>
<td>Azure AD, Key Vault</td>
<td>IAM, Cloud KMS, IAP</td>
<td>IAM, Key Protect</td>
<td>IAM, Vault</td>
<td>RAM, KMS</td>
</tr>
<tr>
<td>📜 <b>Monitoring / Logs</b></td>
<td><b>PaaS</b></td>
<td>CloudWatch, X-Ray</td>
<td>Azure Monitor, Log Analytics</td>
<td>Stackdriver (Cloud Monitoring)</td>
<td>Instana, Log Analysis</td>
<td>OCI Logging/Monitoring</td>
<td>CloudMonitor, Log Service</td>
</tr>
<tr>
<td>🧠 <b>AI/ML</b></td>
<td>PaaS</td>
<td>SageMaker, Comprehend</td>
<td>Azure AI, Cognitive Services</td>
<td>Vertex AI, AutoML</td>
<td>Watson Studio, AutoAI</td>
<td>OCI Data Science</td>
<td>PAI (Platform for AI)</td>
</tr>
<tr>
<td></td>
<td>SaaS</td>
<td>Rekognition, Translate</td>
<td>Azure Form Recognizer</td>
<td>Vision AI, Dialogflow</td>
<td>Watson Assistant</td>
<td>Language AI</td>
<td>Image Search</td>
</tr>
<tr>
<td>📈 <b>BI & Reporting</b></td>
<td>SaaS</td>
<td>QuickSight</td>
<td>Power BI, Azure Synapse</td>
<td>Looker, BigQuery</td>
<td>Cognos Analytics</td>
<td>Oracle Analytics Cloud</td>
<td>Quick BI</td>
</tr>
<tr>
<td>👥 <b>Collab Apps</b></td>
<td>SaaS</td>
<td>Amazon WorkDocs, Chime</td>
<td>Microsoft 365, Teams</td>
<td>Google Workspace (Gmail, Docs)</td>
<td>IBM Connections</td>
<td>—</td>
<td>DingTalk, Alibaba Mail</td>
</tr>
</tbody></table>
</article>
  )
}