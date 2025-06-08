export default function Page() {
  return (
    <article>
<h1>CI/CD</h1>
<p>CI/CD stands for Continuous Integration and Continuous Delivery (or Continuous Deployment). It is a set of practices used in software development to automate and streamline the process of building, testing, and releasing software.</p>
<h2>CI – Continuous Integration</h2>
<p>CI (Continuous Integration) is a software development practice where developers frequently integrate code into a shared repository—multiple times a day. Each integration is verified by an automated build and test process, allowing teams to detect problems early.</p>
<h3>🔄 How CI Works</h3>
<ol>
<li>Developer writes code on a local machine.</li>
<li>Code is pushed to a shared repository (e.g., GitHub, GitLab).</li>
<li>A CI server detects the change and:<ul>
<li>Pulls the new code </li>
<li>Builds the project </li>
<li>Runs automated tests (unit, integration, linting, etc.)</li>
</ul>
</li>
<li>Feedback (pass/fail, errors) is sent back to the developer.</li>
</ol>
<h3>🎯 Goals of CI</h3>
<ul>
<li>Detect bugs early by testing every change </li>
<li>Reduce integration issues (aka “it works on my machine” problems)</li>
<li>Ensure the codebase is always in a working state </li>
<li>Provide fast feedback to developers</li>
</ul>
<h3>🔧 Common CI Tools</h3>
<table><thead><tr>
<th>Tool</th>
<th>Description</th>
</tr></thead><tbody>

<tr>
<td><b>Jenkins</b></td>
<td>Highly configurable, open-source CI server</td>
</tr>

<tr>
<td><b>GitHub Actions</b></td>
<td>Integrated with GitHub; customizable workflows</td>
</tr>

<tr>
<td><b>GitLab CI</b></td>
<td>Built into GitLab; supports full DevOps cycle</td>
</tr>

<tr>
<td><b>CircleCI</b></td>
<td>Cloud-native CI/CD with fast performance</td>
</tr>

</tbody></table>

<h3>📈 Example Use Case</h3>
<p>You push a commit to your feature branch. A GitHub Action automatically:</p>
<ul>
<li>Installs dependencies </li>
<li>Lints your code </li>
<li>Runs unit tests </li>
<li>Builds the application</li>
</ul>
<p>If anything fails, the CI stops and notifies you, so you can fix it before merging to the main branch.</p>
<h2>CD – Continuous Delivery/Continuous Deployment</h2>
<p>CD stands for either:</p>
<ul>
<li>Continuous Delivery</li>
<li>Continuous Deployment</li>
</ul>
<p>Both are built on top of CI (Continuous Integration) and automate the release process of software, but they differ slightly in how far automation goes.</p>
<h3>🚀 1. Continuous Delivery (CD)</h3>
<ul>
<li>✅ Automatically prepares your code for production</li>
<li>❌ Requires manual approval to deploy to production</li>
</ul>
<h4>🔄 Flow:</h4>
<ol>
<li>Developer pushes code → CI runs tests </li>
<li>If tests pass → CD builds and deploys to staging </li>
<li>A team member manually approves → code is deployed to production</li>
</ol>
<h4>✅ Benefits:</h4>
<ul>
<li>Faster, safer releases </li>
<li>Reproducible builds </li>
<li>Better testing before production</li>
</ul>
<h3>⚙️ 2. Continuous Deployment (CD)</h3>
<ul>
<li>✅ Automatically deploys every change to production</li>
<li>✅ No human intervention after tests pass</li>
</ul>
<h4>🔄 Flow:</h4>
<ol>
<li>Code is committed → CI builds &amp; tests </li>
<li>If all tests pass → CD automatically pushes to production</li>
</ol>
<h4>✅ Benefits:</h4>
<ul>
<li>Fastest delivery cycle </li>
<li>Immediate feedback from real users </li>
<li>Encourages small, safe, incremental updates</li>
</ul>
<h3>🔧 Example CD Tools</h3>
<table><thead><tr>
<th>Tool</th>
<th>Use Case</th>
</tr></thead><tbody>

<tr>
<td><b>GitHub Actions</b></td>
<td>Build → Test → Deploy</td>
</tr>

<tr>
<td><b>GitLab CI/CD</b></td>
<td>Full CI/CD pipeline in GitLab</td>
</tr>

<tr>
<td><b>Argo CD</b></td>
<td>GitOps deployment to Kubernetes</td>
</tr>

<tr>
<td><b>Spinnaker</b></td>
<td>Multi-cloud deployment</td>
</tr>

</tbody></table></article>
  )
}