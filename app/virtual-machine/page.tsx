export default function Page() {
  return (
    <article>
<h1>Virtual Machine (VM)</h1>
<p>A virtual machine (VM) is a software-based emulation of a physical computer. It runs an operating system and applications just like a real computer, but it&#39;s hosted on a physical machine called the host, using a hypervisor to manage resources.</p>
<h3>⚙️ Key Concepts</h3>
<ul>
<li>Guest OS: The OS running inside the VM (e.g., Windows, Ubuntu).</li>
<li>Host OS: The OS running on the physical machine (e.g., Windows, Linux).</li>
<li>Hypervisor: Software that allows multiple VMs to run on a single host.<ul>
<li>Type 1 (bare-metal): Runs directly on hardware (e.g., VMware ESXi, Hyper-V).</li>
<li>Type 2 (hosted): Runs on top of a host OS (e.g., VirtualBox, VMware Workstation).</li>
</ul>
</li>
</ul>
<h3>✅ Advantages</h3>
<ul>
<li>Isolation: Each VM is isolated from others.</li>
<li>Portability: Easily move VMs between environments.</li>
<li>Resource Efficiency: Multiple VMs on one physical machine.</li>
<li>Testing/Sandboxing: Safe environment for development and security testing.</li>
</ul>
<h3>❌ Disadvantages</h3>
<ul>
<li>Overhead: VMs consume extra memory and CPU due to virtualization.</li>
<li>Performance: Slightly slower than running on bare metal.</li>
</ul>
<h3>🧰 Examples of VM Tools</h3>
<ul>
<li>VirtualBox</li>
<li>VMware Workstation/ESXi</li>
<li>Microsoft Hyper-V</li>
<li>KVM (Linux)</li>
<li>QEMU</li>
</ul>
</article>
  )
}