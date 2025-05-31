export default function Page() {
  return (
    <article>
      <h1>Angular Interview Questions</h1>
      <h2>Basic (Junior-Level)</h2>
      <h3>🧠 Core Angular Knowledge</h3>
      <ul>
        <li>What is Angular and how is it different from AngularJS? </li>
        <li>Explain the role of components, templates, and modules in Angular. </li>
        <li>What are directives? Name some built-in directives in Angular. </li>
        <li>How do you bind data in Angular? Explain interpolation and property binding. </li>
        <li>What is two-way data binding and how is it implemented? </li>
        <li>What is the purpose of ngOnInit()? How does it differ from the constructor? </li>
        <li>What is Angular CLI? What are the common commands you use?</li>
      </ul>
      <h3>🧩 Routing &amp; Navigation</h3>
      <ul>
        <li>How do you configure routing in an Angular application? </li>
        <li>What is the purpose of RouterModule? </li>
        <li>What is the difference between routerLink and navigate()?</li>
      </ul>
      <h3>💾 Forms</h3>
      <ul>
        <li>What is the difference between template-driven and reactive forms? </li>
        <li>How do you validate a form input field?</li>
      </ul>
      <h2>Intermediate (Mid-Level)</h2>
      <h3>🧠 Component Communication</h3>
      <ul>
        <li>How can parent and child components communicate in Angular? </li>
        <li>How do you use @Input() and @Output()?</li>
      </ul>
      <h3>🔄 Lifecycle &amp; Change Detection</h3>
      <ul>
        <li>Describe Angular&#39;s component lifecycle hooks. </li>
        <li>How does Angular’s change detection mechanism work?</li>
      </ul>
      <h3>🛠️ Services and Dependency Injection</h3>
      <ul>
        <li>What is dependency injection in Angular? </li>
        <li>How do you create and provide a service in Angular?</li>
      </ul>
      <h3>🌐 HTTP &amp; API Integration</h3>
      <ul>
        <li>How do you make HTTP requests in Angular? </li>
        <li>What is HttpClientModule? </li>
        <li>How do you handle errors from an API call?</li>
      </ul>
      <h3>🧱 Modular Architecture</h3>
      <ul>
        <li>What are feature modules? Why should we use them? </li>
        <li>What is lazy loading and how is it implemented?</li>
      </ul>
      <h3>🧪 Testing</h3>
      <ul>
        <li>How do you unit test an Angular component? </li>
        <li>What are TestBed and Jasmine?</li>
      </ul>
      <h2>Advanced (Senior-Level)</h2>
      <h3>📦 State Management</h3>
      <ul>
        <li>How do you manage state in Angular applications?</li>
        <li>What is NgRx? When would you use it instead of services? </li>
        <li>Compare service-based state management with NgRx/NgXS.</li>
      </ul>
      <h3>📈 Performance Optimization</h3>
      <ul>
        <li>How do you improve performance in Angular apps? </li>
        <li>What are pure vs impure pipes? </li>
        <li>What is ChangeDetectionStrategy.OnPush and when should you use it?</li>
      </ul>
      <h3>⚙️ Build &amp; Deployment</h3>
      <ul>
        <li>What is Ahead-of-Time (AOT) compilation? </li>
        <li>What optimizations are done by Angular CLI during production builds?</li>
      </ul>
      <h3>🔐 Security</h3>
      <ul>
        <li>How do you prevent Cross-Site Scripting (XSS) in Angular? </li>
        <li>How do you implement route guards for authorization? </li>
        <li>How would you secure communication between Angular and a GOLANG backend?</li>
      </ul>
      <h3>🧠 Architectural Thinking</h3>
      <ul>
        <li>How would you structure a large LMS project in Angular?</li>
        <li>How do you ensure code maintainability and scalability? </li>
        <li>Have you worked in a microfrontend architecture before?</li>
      </ul>
      <h2>Practical Tasks / Coding Challenge (Optional)</h2>
      <ul>
        <li>Build a simple course enrollment form using Angular reactive forms. </li>
        <li>Create a component that displays a list of lessons with filtering and pagination. </li>
        <li>Consume a sample API (mocked or from backend) and display the results in a table. </li>
        <li>Create a route guard that prevents unauthorized users from accessing the &quot;Admin Panel&quot;.</li>
      </ul>
      <h2>Soft Skills &amp; Collaboration</h2>
      <ul>
        <li>How do you ensure good collaboration with backend (e.g. GOLANG) developers? </li>
        <li>How do you handle disagreements on frontend/backend API contracts? </li>
        <li>What tools do you use for debugging or profiling Angular apps?</li>
      </ul>
    </article>
  )
}
