export default function Page() {
  return (
    <article>
      <h1>Docker</h1>
      <p>
        Docker is an open-source platform designed to automate the deployment, scaling, and management of applications using containerization. Containers are
        lightweight, portable, and self-sufficient environments that include everything needed to run an application, including the code, runtime, system tools,
        libraries, and settings. This ensures that applications run consistently across different environments, from development to production.
      </p>
      <h2>Key Concepts</h2>
      <ul>
        <li>
          <b>Image</b>: A read-only template with instructions to create a container (like a blueprint).
        </li>
        <li>
          <b>Container</b>: A runnable instance of an image. It includes everything needed to run the app.
        </li>
        <li>
          <b>Dockerfile</b>: A script that defines how to build a Docker image.
        </li>
        <li>
          <b>Docker Hub</b>: A public registry where Docker images can be shared.
        </li>
      </ul>
      <h2>Why Use Docker?</h2>
      <ul>
        <li>
          <b>Isolation</b>: Applications run in isolated containers.
        </li>
        <li>
          <b>Portability</b>: Containers can be moved between environments seamlessly.
        </li>
        <li>
          <b>Efficiency</b>: Containers share the host OS kernel, making them more efficient than traditional virtual machines.
        </li>
        <li>
          <b>Speed</b>: Quick startup time and fast scaling.
        </li>
      </ul>
      <p>Docker has become a fundamental tool in modern DevOps practices for building, shipping, and running distributed applications.</p>
      <h2>How Docker containers work</h2>
      <p>
        <img src="https://cdn-images-1.medium.com/max/800/1*9X62t8jrICwpxmHToUv0zA.png" alt="How Docker containers work" />
      </p>
      <h3>Top to Bottom Breakdown</h3>
      <h3>Application</h3>
      <ul>
        <li>Your actual code (Node.js, Go, Python, etc.)</li>
        <li>This is the logic you want to run.</li>
      </ul>
      <h3>Docker Engine</h3>
      <ul>
        <li>The heart of Docker.</li>
        <li>
          Manages everything related to containers:
          <ul>
            <li>Builds images</li>
            <li>Runs containers</li>
            <li>Handles networking, volumes, etc.</li>
          </ul>
        </li>
      </ul>
      <h3>Containers</h3>
      <ul>
        <li>Lightweight, isolated environments.</li>
        <li>
          Each contains:
          <ul>
            <li>Your app (or a part of it)</li>
            <li>Required libraries, config, and dependencies </li>
            <li>They share the Host OS kernel, but run as if they&#39;re isolated.</li>
          </ul>
        </li>
      </ul>
      <h3>Host OS</h3>
      <ul>
        <li>A single, real operating system (e.g., Linux, Windows)</li>
        <li>Provides the kernel and system resources that containers use </li>
        <li>Not duplicated for each container (unlike virtual machines)</li>
      </ul>
      <h3>Key Takeaway</h3>
      <p>
        Docker uses one host OS to run many containers efficiently. Each container behaves like its own environment, but they all rely on the same kernel
        underneath.
      </p>
    </article>
  )
}
