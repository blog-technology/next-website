export default function Page() {
  return (
    <article>
<h1>Kubernetes</h1>
<p>Kubernetes (often abbreviated as K8s) is an open-source container orchestration platform for automating the deployment, scaling, and management of containerized applications.</p>
<h3>🔧 What it does:</h3>
<p>Kubernetes helps you manage applications that run in containers (like Docker) across a cluster of machines (virtual or physical). It takes care of things like:</p>
<ul>
<li><b>Deployment</b>: Runs your containers based on desired configuration.</li>
<li><b>Scaling</b>: Automatically increases or decreases the number of running containers based on demand.</li>
<li><b>Load Balancing</b>: Distributes traffic across containers.</li>
<li><b>Self-healing</b>: Restarts failed containers and reschedules them on healthy machines.</li>
<li><b>Rolling updates</b>: Updates your app with zero downtime.</li>
</ul>
<h3>🧱 Key Concepts:</h3>
<table><thead><tr>
<th>Component</th>
<th>Description</th>
</tr></thead><tbody>
<tr>
<td><b>Pod</b></td>
<td>The smallest deployable unit in Kubernetes. A pod usually wraps one or more containers.</td>
</tr>
<tr>
<td><b>Node</b></td>
<td>A machine (VM or physical) where Kubernetes runs workloads.</td>
</tr>
<tr>
<td><b>Cluster</b></td>
<td>A group of nodes managed by Kubernetes.</td>
</tr>
<tr>
<td><b>Deployment</b></td>
<td>A controller that manages replica sets and ensures your app runs as expected.</td>
</tr>
<tr>
<td><b>Service</b></td>
<td>A stable endpoint that connects clients to Pods, often used for load balancing.</td>
</tr>
<tr>
<td><b>ConfigMap / Secret</b></td>
<td>Inject configuration or sensitive data into containers.</td>
</tr>
</tbody></table>
<h3>🚀 Why Kubernetes?</h3>
<ul>
<li>Handles complex container lifecycle management</li>
<li>Works with all major cloud providers (GCP, AWS, Azure)</li>
<li>Supports hybrid and multi-cloud setups</li>
<li>Strong ecosystem and community support</li>
</ul>
<h3>📌 Example Use Case</h3>
<p>Suppose you&#39;re running a web app inside Docker. With Kubernetes, you can:</p>
<ol>
<li>Define your desired number of web server instances.</li>
<li>Automatically scale them up/down based on traffic.</li>
<li>Handle container crashes by restarting them.</li>
<li>Expose them via a single IP or domain name.</li>
</ol>
<h2>A basic Kubernetes example with GO</h2>
<h3>🧱 Project Structure</h3>
<pre className="line-numbers"><code className="language-go">{`go-k8s-app/
├── main.go
├── Dockerfile
├── k8s/
│   ├── deployment.yaml
│   └── service.yaml`}</code></pre><h3>1. Go Web App – main.go</h3>
<pre className="line-numbers"><code className="language-go">{`package main

import (
	"fmt"
	"log"
	"net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "Hello from Go running in Kubernetes!")
}

func main() {
	http.HandleFunc("/", handler)
	log.Println("Server starting on port 8080...")
	log.Fatal(http.ListenAndServe(":8080", nil))
}`}</code></pre><h3>2. Dockerfile</h3>
<pre className="line-numbers"><code className="language-Dockerfile">{`# Start from a minimal Go base image
FROM golang:1.21-alpine

# Set working directory
WORKDIR /app

# Copy source code
COPY . .

# Build the Go app
RUN go build -o main .

# Expose port 8080
EXPOSE 8080

# Run the binary
CMD ["./main"]`}</code></pre><h3>3. Kubernetes Manifests (inside /k8s)</h3>
<h4>deployment.yaml</h4>
<pre className="line-numbers"><code className="language-yaml">{`apiVersion: apps/v1
kind: Deployment
metadata:
  name: go-web-app
spec:
  replicas: 2
  selector:
    matchLabels:
      app: go-web
  template:
    metadata:
      labels:
        app: go-web
    spec:
      containers:
        - name: go-web
          image: your-dockerhub-username/go-web-app:latest
          ports:
            - containerPort: 8080`}</code></pre><h4>service.yaml</h4>
<pre className="line-numbers"><code className="language-yaml">{`apiVersion: v1
kind: Service
metadata:
  name: go-web-service
spec:
  type: LoadBalancer  # Use NodePort if running locally with minikube
  selector:
    app: go-web
  ports:
    - protocol: TCP
      port: 80
      targetPort: 8080`}</code></pre><h3>🚀 Steps to Run</h3>
<h4>1. Build Docker image</h4>
<pre className="line-numbers"><code className="language-bash">{`docker build -t your-dockerhub-username/go-web-app .`}</code></pre><h4>2. Push to Docker Hub</h4>
<pre className="line-numbers"><code className="language-bash">{`docker push your-dockerhub-username/go-web-app`}</code></pre><h4>3. Apply Kubernetes manifests</h4>
<pre className="line-numbers"><code className="language-bash">{`kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml`}</code></pre><h4>4. Access the App</h4>
<p>If you&#39;re using minikube:</p>
<pre className="line-numbers"><code className="language-bash">{`minikube service go-web-service`}</code></pre><p>On cloud platforms (e.g., GKE, EKS, AKS), wait for the external IP from kubectl get svc.</p>
</article>
  )
}