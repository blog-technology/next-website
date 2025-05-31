export default function Page() {
  return (
    <article>
      <h1>DevSecOps</h1>
      <p>
        DevSecOps stands for Development, Security, and Operations. It extends DevOps by integrating security practices into every phase of the software
        development lifecycle — from planning and coding to testing, deployment, and monitoring.
      </p>
      <h3>Common DevSecOps Practices</h3>
      <ul>
        <li>
          <b>Threat Modeling</b>: Identify risks during planning/design
        </li>
        <li>
          <b>Static Code Analysis (SAST)</b>: Detect code vulnerabilities early
        </li>
        <li>
          <b>Dependency Scanning (SCA)</b>: Check for known CVEs in libraries
        </li>
        <li>
          <b>Secret Scanning</b>: Find hardcoded credentials (e.g., in Git)
        </li>
        <li>
          <b>Dynamic Analysis (DAST)</b>: Test the running application for security flaws
        </li>
        <li>
          <b>Security in CI/CD</b>: Add security tools to pipelines
        </li>
        <li>
          <b>Container Scanning</b>: Scan Docker images for vulnerabilities
        </li>
        <li>
          <b>Policy-as-Code</b>: Enforce security and compliance via code rules
        </li>
      </ul>
      <h3>DevSecOps Tools (by Category)</h3>
      <ul>
        <li>
          <b>SAST</b>: SonarQube, CodeQL, Fortify
        </li>
        <li>
          <b>DAST</b>: OWASP ZAP, Burp Suite, Nikto
        </li>
        <li>
          <b>SCA</b>: Snyk, Dependabot, WhiteSource
        </li>
        <li>
          <b>Secrets Scan</b>: GitLeaks, TruffleHog, Detect Secrets
        </li>
        <li>
          <b>Container Scan</b>: Clair, Anchore, Grype
        </li>
        <li>
          <b>IaC Scan</b>: Checkov, TFLint, tfsec, KICS
        </li>
      </ul>
      <h3>Benefits of DevSecOps</h3>
      <ul>
        <li>Security by design </li>
        <li>Faster, safer releases </li>
        <li>Reduced costs from fixing bugs early </li>
        <li>Culture of shared responsibility</li>
      </ul>
      <h2>Security Gate</h2>
      <p>
        In DevSecOps, a security gate is a checkpoint or control mechanism in the software development pipeline that enforces security policies before allowing
        code or artifacts to proceed to the next stage of the development or deployment process.
      </p>
      <h3>Purpose of a Security Gate</h3>
      <p>
        The main goal of a security gate is to prevent insecure code or configurations from being released into production by automatically verifying compliance
        with security standards.
      </p>
      <h3>Examples of Security Gates</h3>
      <p>Security gates can be implemented at various stages of the DevSecOps pipeline:</p>
      <ul>
        <li>
          <b>Code Commit</b>: Static Application Security Testing (SAST) tools (e.g., SonarQube, Checkmarx) to block insecure code.
        </li>
        <li>
          <b>Build</b>: Dependency checking tools (e.g., OWASP Dependency-Check, Snyk) to reject vulnerable libraries.
        </li>
        <li>
          <b>Test</b>: Dynamic Application Security Testing (DAST) or API security testing before allowing promotion.
        </li>
        <li>
          <b>Deploy</b>: Infrastructure as Code (IaC) scanners (e.g., tfsec, Checkov) to catch misconfigurations.
        </li>
        <li>
          <b>Release</b>: Policy checks to ensure compliance (e.g., encryption enabled, secrets not exposed).
        </li>
      </ul>
      <h3>How It Works</h3>
      <p>A security gate can:</p>
      <ul>
        <li>Fail a build or block a deployment if issues are found. </li>
        <li>Require manual approval for exceptions or overrides. </li>
        <li>Integrate with CI/CD tools (e.g., Jenkins, GitHub Actions, GitLab CI/CD).</li>
      </ul>
      <h3>Benefits</h3>
      <ul>
        <li>Automated enforcement of security policies. </li>
        <li>Shift-left security, catching issues early and cheaply. </li>
        <li>Reduced risk of vulnerabilities reaching production.</li>
      </ul>
      <h3>Summary</h3>
      <p>
        A security gate in DevSecOps is a control point in the development pipeline that ensures only code meeting defined security standards can advance. It
        helps teams build secure software faster by integrating security checks into CI/CD workflows.
      </p>
    </article>
  )
}
