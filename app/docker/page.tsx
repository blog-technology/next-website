export default function Page() {
  return (
    <article>
<h1>Docker</h1>
<p>Docker is an open-source platform designed to automate the deployment, scaling, and management of applications using containerization. Containers are lightweight, portable, and self-sufficient environments that include everything needed to run an application, including the code, runtime, system tools, libraries, and settings. This ensures that applications run consistently across different environments, from development to production.</p>
<h3>⚙️ Key Concepts</h3>
<ul>
<li><b>Image</b>: A read-only template with instructions to create a container (like a blueprint).</li>
<li><b>Container</b>: A runnable instance of an image. It includes everything needed to run the app.</li>
<li><b>Dockerfile</b>: A script that defines how to build a Docker image.</li>
<li><b>Docker Hub</b>: A public registry where Docker images can be shared.</li>
</ul>
<h3>📦 Why Use Docker?</h3>
<ul>
<li><b>Isolation</b>: Applications run in isolated containers.</li>
<li><b>Portability</b>: Containers can be moved between environments seamlessly.</li>
<li><b>Efficiency</b>: Containers share the host OS kernel, making them more efficient than traditional virtual machines.</li>
<li><b>Speed</b>: Quick startup time and fast scaling.</li>
</ul>
<p>Docker has become a fundamental tool in modern DevOps practices for building, shipping, and running distributed applications.</p>
<h3>🆚 Docker vs Virtual Machines</h3>
<h2>How Docker containers work</h2>
<p><img src="https://cdn-images-1.medium.com/max/800/1*9X62t8jrICwpxmHToUv0zA.png" alt="How Docker containers work"/></p>
<h3>Top to Bottom Breakdown</h3>
<h3>Application</h3>
<ul>
<li>Your actual code (Node.js, Go, Python, etc.)</li>
<li>This is the logic you want to run.</li>
</ul>
<h3>Docker Engine</h3>
<ul>
<li>The heart of Docker.</li>
<li>Manages everything related to containers:<ul>
<li>Builds images</li>
<li>Runs containers</li>
<li>Handles networking, volumes, etc.</li>
</ul>
</li>
</ul>
<h3>Containers</h3>
<ul>
<li>Lightweight, isolated environments.</li>
<li>Each contains:<ul>
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
<p>Docker uses one host OS to run many containers efficiently. Each container behaves like its own environment, but they all rely on the same kernel underneath.</p>
<h2>Containers share the host OS kernel</h2>
<p>In Docker, containers share the host operating system&#39;s kernel, which is the core part of the OS that manages system resources, such as memory, CPU, and storage. Unlike virtual machines (VMs), which each run their own full operating system with a separate kernel, Docker containers run on the same OS kernel as the host, but in isolated environments.</p>
<p>This sharing of the kernel allows containers to be more lightweight and efficient compared to VMs because they do not need to carry a full OS inside each container, reducing overhead and improving performance.</p>
<h3>How Containers Work Without a Full OS</h3>
<p>Containers can run without a full OS inside because they leverage the host OS&#39;s kernel, which is responsible for low-level operations like managing hardware, memory, and processes. Instead of bundling their own kernel, containers share the host&#39;s kernel but have their own isolated user space (the environment where applications run). This isolation is achieved using technologies like namespaces and cgroups.</p>
<ul>
<li><b>Namespaces</b>: Provide isolation for processes, network interfaces, and file systems, making it appear as though the container has its own environment. </li>
<li><b>cgroups</b>: Control and limit resource usage like CPU, memory, and disk I/O for each container.</li>
</ul>
<h3>Comparing Virtual Machines (VMs) and Docker Containers</h3>
<table><thead><tr>
<th>Aspect</th>
<th>Virtual Machines (VMs)</th>
<th>Docker Containers</th>
</tr></thead><tbody>

<tr>
<td>Architecture</td>
<td>Full OS with its own kernel inside each VM.</td>
<td>Share the host OS kernel, isolated user space.</td>
</tr>

<tr>
<td>Resource Usage</td>
<td>Heavier, with more overhead due to full OS per VM.</td>
<td>Lightweight, minimal overhead as no separate kernel is needed.</td>
</tr>

<tr>
<td>Boot Time</td>
<td>Slower (minutes) because it includes OS boot time.</td>
<td>Faster (seconds) as it skips the OS boot process.</td>
</tr>

<tr>
<td>Portability</td>
<td>Less portable due to dependencies on hypervisor and OS.</td>
<td>Highly portable across environments as long as Docker is available.</td>
</tr>

<tr>
<td>Isolation</td>
<td>Strong isolation as each VM has its own OS and kernel.</td>
<td>Less isolation, but sufficient for most use cases, relying on the host OS kernel.</td>
</tr>

<tr>
<td>Use Cases</td>
<td>Best for running multiple, different OSes or applications requiring full isolation.</td>
<td>Ideal for microservices, CI/CD pipelines, and applications needing quick deployment and scalability.</td>
</tr>

</tbody></table>

<h3>Summary</h3>
<p>Containers are more efficient than VMs because they don&#39;t need to run a full OS, reducing overhead and improving performance. They share the host&#39;s OS kernel while maintaining isolation through namespaces and cgroups, making them ideal for scenarios requiring quick, scalable, and portable environments. VMs, on the other hand, provide stronger isolation and are better suited for running different OSes on the same hardware.</p>
<h2>Host OS&#39;s kernel</h2>
<p>The host OS kernel is the core part of an operating system that manages system resources such as CPU, memory, and I/O devices. It acts as a bridge between applications and the hardware. The kernel handles critical tasks like process management, memory allocation, and system calls, enabling applications to interact with the hardware without needing to know the specifics.</p>
<p>In Docker, containers leverage the host OS&#39;s kernel, meaning they use the same kernel as the underlying OS but operate in isolated environments. This allows containers to be lightweight and fast, as they don&#39;t need their own kernel or full OS. Instead, they rely on the host kernel for essential services while maintaining their own isolated user space for running applications.</p>
<h2>Docker on a Windows machine</h2>
<p>when you install Docker on a Windows machine, it typically requires a Linux environment to run Linux containers. Docker achieves this by using a lightweight virtual machine (VM) that runs a Linux distribution under the hood. This VM is managed by Docker and uses a technology called WSL 2 (Windows Subsystem for Linux 2) or a tool like Hyper-V on older setups.</p>
<p>So, even though you&#39;re on a Windows machine, Docker sets up a minimal Linux environment to ensure that Linux-based containers can run seamlessly.</p>
<h2>Key components</h2>
<p>To understand what&#39;s inside Docker, it&#39;s helpful to break down its key components and how they work together:</p>
<h3>Docker Image:</h3>
<ul>
<li>A Docker image is a lightweight, standalone, and executable package that includes everything needed to run a piece of software: code, runtime, libraries, environment variables, and configuration files. </li>
<li>Images are immutable and can be shared via Docker Hub or other repositories.</li>
</ul>
<h3>Docker Container:</h3>
<ul>
<li>A container is a runtime instance of a Docker image. It’s the live environment where your application runs, isolated from other containers and the host system. </li>
<li>Containers share the host OS kernel but operate in their isolated user space.</li>
</ul>
<h3>Docker Engine:</h3>
<ul>
<li>The Docker Engine is the underlying software that creates and manages Docker images, containers, networks, and storage volumes. </li>
<li>It consists of three key components:<ul>
<li><b>Docker Daemon</b>: Runs in the background and manages containers. </li>
<li><b>REST API</b>: Allows communication with the Docker Daemon. </li>
<li><b>Docker CLI</b>: The command-line interface used to interact with Docker.</li>
</ul>
</li>
</ul>
<h3>Dockerfile:</h3>
<ul>
<li>A Dockerfile is a script containing a series of commands to assemble a Docker image. It automates the creation of images, ensuring consistency and repeatability.</li>
</ul>
<h3>Volumes:</h3>
<ul>
<li>Volumes are used for persistent data storage, allowing data to persist beyond the lifecycle of a container. </li>
<li>They provide a way to share data between containers or between the host and containers.</li>
</ul>
<h3>Networking:</h3>
<ul>
<li>Docker provides various networking options to connect containers to each other and to the outside world. </li>
<li>It includes bridge networks (default), host networks, overlay networks (for clustering), and custom networks.</li>
</ul>
<h3>Registry:</h3>
<ul>
<li>A Docker registry is a storage and distribution system for Docker images. The most common registry is Docker Hub, where public and private images can be stored and shared.</li>
</ul>
<h3>How it Works Together:</h3>
<ul>
<li>When you run a container, Docker uses the image, creates a new container instance, and starts it in a controlled environment.</li>
<li>The container interacts with the host OS kernel for system resources but remains isolated in terms of file system, network, and process space.</li>
</ul>
<p>This setup allows for consistent, isolated, and reproducible environments that can be easily managed and scaled across different systems and platforms.</p>
</article>
  )
}