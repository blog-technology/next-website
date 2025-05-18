export default function Docker() {
  return (
    <article>
      <header>
        <h1>Docker</h1>
      </header>
      <div className="article-body">
        <h3>What is docker?</h3>
        <p>
          Docker is an open-source platform for developing, shipping, and running applications inside lightweight, portable containers. It helps developers
          package an application along with all of its dependencies (libraries, configurations, and environment settings) so that it runs consistently across
          different environments—from a developer's laptop to testing, staging, and production servers.
        </p>
        <h3>Key Concepts?</h3>
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
        <h3>Why docker?</h3>
        <ul>
          <li>
            <b>Portability</b>: Works the same across development, staging, and production.
          </li>
          <li>
            <b>Isolation</b>: Each container runs independently, avoiding conflicts.
          </li>
          <li>
            <b>Efficiency</b>: Containers are lightweight and use fewer resources than VMs.
          </li>
          <li>
            <b>Speed</b>: Quick startup time and fast scaling.
          </li>
        </ul>
      </div>
    </article>
  )
}
