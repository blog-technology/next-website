export default function Page() {
  return (
    <article>
      <h1>DevOps</h1>
      <p>
        DevOps is a set of practices and a cultural philosophy that aims to bridge the gap between software development (Dev) and IT operations (Ops). It
        promotes collaboration, automation, and continuous improvement throughout the software delivery lifecycle.
      </p>
      <h2>🔍 Key Concepts of DevOps</h2>
      <ul>
        <li>
          <b>Collaboration</b>: Dev and Ops teams work together instead of in silos.
        </li>
        <li>
          <b>Collaboration</b>: Dev and Ops teams work together instead of in silos.
        </li>
        <li>
          <b>Automation</b>: Tasks like building, testing, deployment, and infrastructure provisioning are automated.
        </li>
        <li>
          <b>Continuous Integration (CI)</b>: Developers frequently integrate code into a shared repo, triggering automated builds/tests.
        </li>
        <li>
          <b>Continuous Delivery (CD)</b>: Code changes are automatically tested and staged for release to production.
        </li>
        <li>
          <b>Infrastructure as Code (IaC)</b>: Infrastructure is managed with code (e.g., using Terraform, Ansible).
        </li>
        <li>
          <b>Monitoring &amp; Feedback</b>: Applications and infrastructure are continuously monitored for performance and issues.
        </li>
      </ul>
      <h2>📈 Why DevOps Matters</h2>
      <ul>
        <li>
          <b>Faster Releases</b>: Reduces time-to-market.
        </li>
        <li>
          <b>Improved Quality</b>: Automated testing ensures fewer bugs in production.
        </li>
        <li>
          <b>Increased Efficiency</b>: Reduces manual work via scripts and tools.
        </li>
        <li>
          <b>Better Collaboration</b>: Shared responsibility across teams.
        </li>
      </ul>
      <h3>⚙️ Common DevOps Tools</h3>
      <ul>
        <li>
          <b>Version Control</b>: Git, GitHub, GitLab
        </li>
        <li>
          <b>CI/CD</b>: Jenkins, GitHub Actions, GitLab CI, CircleCI
        </li>
        <li>
          <b>Configuration Management</b>: Ansible, Puppet, Chef
        </li>
        <li>
          <b>IaC</b>: Terraform, CloudFormation
        </li>
        <li>
          <b>Containers</b>: Docker
        </li>
        <li>
          <b>Orchestration</b>: Kubernetes
        </li>
        <li>
          <b>Monitoring</b>: Prometheus, Grafana, ELK Stack
        </li>
      </ul>
      <h3>🏗️ Typical DevOps Lifecycle</h3>
      <p>
        <img src="https://cdn-images-1.medium.com/max/800/1*BPwIJNFq4wKjt4WfxL3LvQ.png" alt="Typical DevOps Lifecycle" />
      </p>
      <h3>⚙️ DevOps CI/CD Pipeline (without Security)</h3>
      <p>
        <img src="https://cdn-images-1.medium.com/max/800/1*ZfUp2co41FKAcndHNWZcmw.png" alt="Typical DevOps Lifecycle" />
      </p>
      <h2>Real-World Example: A Web App Deployment Using DevOps</h2>
      <h3>Scenario:</h3>
      <p>You&#39;re building a Node.js web application, hosted on AWS, and your team uses GitHub, Docker, and Kubernetes</p>
      <h3>DevOps Lifecycle in Action:</h3>
      <ul>
        <li>
          <b>Plan</b>: Product team writes user stories and acceptance criteria in Jira.
        </li>
        <li>
          <b>Code</b>: Developers push code to a GitHub repository with feature branches.
        </li>
        <li>
          <b>Build</b>: GitHub Actions compiles code, builds Docker images, and runs unit tests.
        </li>
        <li>
          <b>Test</b>: Automated integration and security tests run in the CI pipeline.
        </li>
        <li>
          <b>Release</b>: If tests pass, the image is tagged and pushed to a container registry (e.g., ECR).
        </li>
        <li>
          <b>Deploy</b>: Kubernetes applies new deployment configurations via Helm charts.
        </li>
        <li>
          <b>Operate</b>: The app runs in a Kubernetes cluster, with autoscaling and failover.
        </li>
        <li>
          <b>Monitor</b>: Prometheus scrapes metrics; Grafana dashboards show app health and performance. Alerts go to Slack.
        </li>
      </ul>
      <h3>Example Tools Used:</h3>
      <ul>
        <li>
          <b>Version Control</b>: Git + GitHub
        </li>
        <li>
          <b>CI/CD</b>: GitHub Actions
        </li>
        <li>
          <b>Containerization</b>: Docker
        </li>
        <li>
          <b>IaC</b>: Terraform
        </li>
        <li>
          <b>Orchestration</b>: Kubernetes + Helm
        </li>
        <li>
          <b>Monitoring</b>: Prometheus + Grafana
        </li>
        <li>
          <b>Issue Tracking</b>: Jira
        </li>
      </ul>
    </article>
  )
}
