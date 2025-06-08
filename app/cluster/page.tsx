export default function Page() {
  return (
    <article>
<h1>Cluster</h1>
<p>A computer cluster is a group of interconnected computers (called nodes) that work together as a single system to perform computing tasks. The main goal of a cluster is to increase performance, reliability, or availability beyond what a single computer can provide.</p>
<h2>Key Features of a Cluster</h2>
<ul>
<li><b>Multiple Nodes</b>: Each node is an independent computer (with CPU, memory, disk, OS).</li>
<li><b>Networked</b>: Nodes are connected via a local network (usually high-speed Ethernet or InfiniBand).</li>
<li><b>Distributed Workload</b>: Tasks are divided and processed in parallel across multiple nodes.</li>
<li><b>Failover Support</b>: If one node fails, others can take over (high availability).</li>
<li><b>Unified Interface</b>: Appears to users as a single system.</li>
</ul>
<h2>Common Types of Clusters</h2>
<ul>
<li><b>High-Performance Cluster (HPC)</b>: For scientific computation, simulations, etc.</li>
<li><b>Load-Balancing Cluster</b>: Distributes user requests across nodes (e.g., web servers).</li>
<li><b>High-Availability Cluster (HA)</b>: Provides continuous service by recovering from node failures.</li>
</ul>
<h2>Real-World Examples:</h2>
<ul>
<li>Google Search Engine Infrastructure: Powered by massive clusters of servers.</li>
<li>Amazon EC2 Auto Scaling Groups: Dynamically scale clusters in the cloud.</li>
<li>Scientific Computing: Weather simulation, genome analysis, physics simulations.</li>
</ul>
<h2>How It Works</h2>
<p><img src="https://cdn-images-1.medium.com/max/800/1*6qH7tHZGxwE1JiB1LAiVyQ.png" alt="Cluster"/></p>
<ul>
<li><b>Cluster Manager</b>: Controls task distribution, health checks, and coordination.</li>
<li><b>Node A, B, C</b>: Independent computers working together (each has CPU, memory, storage).</li>
<li><b>Lines</b>: Network connections (usually high-speed LAN).</li>
</ul>
</article>
  )
}