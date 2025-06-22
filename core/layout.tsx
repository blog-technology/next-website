export default function LayoutPage({ children }: { children: React.ReactNode }) {
  return (
    <div id="root">
      <div className="sidebar-parent menu-on">
        <div className="menu sidebar">
          <nav id="sysNav" className="expanded-all">
            <ul>
              <li>
                <p className="sidebar-off-menu">
                  <button className="toggle"></button>
                </p>
              </li>
              <li className="active">
                <a className="menu-item" href="/">
                  <i className="material-icons">home</i>
                  <span>Home</span>
                </a>
              </li>
              <li className="open">
                <div className="menu-item">
                  <i className="material-icons">settings</i>
                  <span>Basic Concept</span>
                  <i className="entity-icon down"></i>
                </div>
                <ul className="sub-list expanded">
                  <li>
                    <a className="menu-item" href="/cloud">
                      <i className="material-icons">zoom_in</i>
                      <span>Cloud</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/cloud-services">
                      <i className="material-icons">zoom_in</i>
                      <span>Cloud Services</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/serverless">
                      <i className="material-icons">zoom_in</i>
                      <span>Serverless</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/cdn">
                      <i className="material-icons">zoom_in</i>
                      <span>CDN</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/three-tier-application">
                      <i className="material-icons">zoom_in</i>
                      <span>Three-tier application</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/cluster">
                      <i className="material-icons">zoom_in</i>
                      <span>Cluster</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/virtual-machine">
                      <i className="material-icons">zoom_in</i>
                      <span>Virtual Machine</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/docker">
                      <i className="material-icons">credit_card</i>
                      <span>Docker</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/kubernetes">
                      <i className="material-icons">credit_card</i>
                      <span>Kubernetes</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/cicd">
                      <i className="material-icons">zoom_in</i>
                      <span>CI/CD</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/devops">
                      <i className="material-icons">credit_card</i>
                      <span>DevOps</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/devsecops">
                      <i className="material-icons">credit_card</i>
                      <span>DevSecOps</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/ldap">
                      <i className="material-icons">zoom_in</i>
                      <span>LDAP</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/orm">
                      <i className="material-icons">assignment</i>
                      <span>ORM</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/message-queue">
                      <i className="material-icons">mail</i>
                      <span>Message Queue</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/forward-proxy">
                      <i className="material-icons">zoom_in</i>
                      <span>Forward Proxy</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/reverse-proxy">
                      <i className="material-icons">zoom_in</i>
                      <span>Reverse Proxy</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/bcp-drp">
                      <i className="material-icons">zoom_in</i>
                      <span>BCP - DRP</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="open">
                <div className="menu-item">
                  <i className="material-icons">settings</i>
                  <span>Design</span>
                  <i className="entity-icon down"></i>
                </div>
                <ul className="sub-list expanded">
                  <li>
                    <a className="menu-item" href="/layer-architecture">
                      <i className="material-icons">zoom_in</i>
                      <span>Layer Architecture</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/hexagonal-architecture">
                      <i className="material-icons">zoom_in</i>
                      <span>Hexagonal Architecture</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/clean-architecture">
                      <i className="material-icons">zoom_in</i>
                      <span>Clean Architecture</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/onion-architecture">
                      <i className="material-icons">zoom_in</i>
                      <span>Onion Architecture</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/soa">
                      <i className="material-icons">zoom_in</i>
                      <span>Service Oriented Architecture (SOA)</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/microservices">
                      <i className="material-icons">assignment</i>
                      <span>Microservices</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/cqrs">
                      <i className="material-icons">credit_card</i>
                      <span>CQRS Architecture</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/event-driven-architecture">
                      <i className="material-icons">mail</i>
                      <span>Event Driven Architecture</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/event-sourcing-architecture">
                      <i className="material-icons">credit_card</i>
                      <span>Event Sourcing Architecture</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/microkernel-architecture">
                      <i className="material-icons">credit_card</i>
                      <span>Microkernel Architecture</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="open">
                <div className="menu-item">
                  <i className="material-icons">settings</i>
                  <span>Security</span>
                  <i className="entity-icon down"></i>
                </div>
                <ul className="sub-list expanded">
                  <li>
                    <a className="menu-item" href="/owasp">
                      <i className="material-icons">credit_card</i>
                      <span>OWASP</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/soc-2-type-ii">
                      <i className="material-icons">credit_card</i>
                      <span>SOC 2 Type II</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/soc-2-type-ii-checklist">
                      <i className="material-icons">credit_card</i>
                      <span>SOC 2 Type II Checklist</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/waf-hips-fim">
                      <i className="material-icons">credit_card</i>
                      <span>WAF, HIPS, FIM Protection</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/hardening-va-scan-pentest">
                      <i className="material-icons">credit_card</i>
                      <span>Hardening Scan - VA Scan - Pentest</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/sql-injection">
                      <i className="material-icons">assignment</i>
                      <span>SQL Injection</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/cross-site-scripting">
                      <i className="material-icons">assignment</i>
                      <span>Cross-Site Scripting (XSS)</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/cross-site-request-forgery">
                      <i className="material-icons">assignment</i>
                      <span>Cross-Site Request Forgery (CSRF)</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/file-inclusion">
                      <i className="material-icons">assignment</i>
                      <span>File Inclusion</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/ddos">
                      <i className="material-icons">assignment</i>
                      <span>DDoS Attack</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/ransomware-attack">
                      <i className="material-icons">credit_card</i>
                      <span>Ransomware Attack</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/malware-virus-trojan-worms">
                      <i className="material-icons">credit_card</i>
                      <span>Malware, Virus, Trojan, Worms</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/mac-dac">
                      <i className="material-icons">credit_card</i>
                      <span>MAC - DAC</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/rbac">
                      <i className="material-icons">assignment</i>
                      <span>Role-Based Access Control (RBAC)</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/maker-checker">
                      <i className="material-icons">assignment</i>
                      <span>Maker/Checker</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="open">
                <div className="menu-item">
                  <i className="material-icons">credit_card</i>
                  <span>Golang</span>
                  <i className="entity-icon down"></i>
                </div>
                <ul className="sub-list expanded">
                  <li>
                    <a className="menu-item" href="/go-syntax">
                      <i className="material-icons">credit_card</i>
                      <span>Go Syntax</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/go-developer-roadmap">
                      <i className="material-icons">credit_card</i>
                      <span>Go Developer Roadmap</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/go-interview-questions">
                      <i className="material-icons">credit_card</i>
                      <span>Go Interview Questions</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/go-project-layout">
                      <i className="material-icons">assignment</i>
                      <span>Go Project Layout</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/go-data-validation">
                      <i className="material-icons">assignment</i>
                      <span>Go Data Validation</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/go-export-data">
                      <i className="material-icons">assignment</i>
                      <span>Go Export Data</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/go-import-data">
                      <i className="material-icons">assignment</i>
                      <span>Go Import Data</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/go-sql">
                      <i className="material-icons">assignment</i>
                      <span>Go SQL</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/go-sql-orm">
                      <i className="material-icons">assignment</i>
                      <span>Go ORM</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/go-mongo">
                      <i className="material-icons">assignment</i>
                      <span>Go Mongo</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/go-rest-api">
                      <i className="material-icons">assignment</i>
                      <span>Go REST API</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/go-grpc">
                      <i className="material-icons">assignment</i>
                      <span>GRPC</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="open">
                <div className="menu-item">
                  <i className="material-icons">credit_card</i>
                  <span>node</span>
                  <i className="entity-icon down"></i>
                </div>
                <ul className="sub-list expanded">
                  <li>
                    <a className="menu-item" href="/node-project-layout">
                      <i className="material-icons">assignment</i>
                      <span>Node Project Layout</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/node-interview-questions">
                      <i className="material-icons">assignment</i>
                      <span>Node Interview Questions</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/node-developer-roadmap">
                      <i className="material-icons">assignment</i>
                      <span>Node Developer Roadmap</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/node-data-validation">
                      <i className="material-icons">assignment</i>
                      <span>Node Data Validation</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/node-export-data">
                      <i className="material-icons">assignment</i>
                      <span>Node Export Data</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/node-import-data">
                      <i className="material-icons">assignment</i>
                      <span>Node Import Data</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/node-sql">
                      <i className="material-icons">assignment</i>
                      <span>Node SQL</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/node-mongo">
                      <i className="material-icons">assignment</i>
                      <span>Node MongoDB</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/express-sql">
                      <i className="material-icons">assignment</i>
                      <span>Express SQL</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/express-mongo">
                      <i className="material-icons">assignment</i>
                      <span>Express MongoDB</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="open">
                <div className="menu-item">
                  <i className="material-icons">work</i>
                  <span>Frontend</span>
                  <i className="entity-icon down"></i>
                </div>
                <ul className="sub-list expanded">
                  <li>
                    <a className="menu-item" href="/chips">
                      <i className="material-icons">assignment</i>
                      <span>Chips</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/editor">
                      <i className="material-icons">assignment</i>
                      <span>Editor</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/react">
                      <i className="material-icons">assignment</i>
                      <span>React</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/angular">
                      <i className="material-icons">assignment</i>
                      <span>Angular</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/vue">
                      <i className="material-icons">assignment</i>
                      <span>Vue</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <div className="page-container">
          <div className="page-header">
            <form>
              <div className="search-group">
                <section>
                  <button type="button" className="toggle-menu"></button>
                  <button type="button" className="toggle-search"></button>
                  <button type="button" className="close-search"></button>
                </section>
                <div className="logo-wrapper">
                  <img className="logo" src="../logo192.png" alt="Logo of The Company" />
                </div>
                <label className="search-input">
                  <input type="text" id="q" name="q" maxLength={1000} placeholder="Keyword" autoComplete="off" />
                  <button type="button" hidden className="btn-remove-text"></button>
                  <button type="button" className="btn-search"></button>
                </label>
                <section className="quick-nav">
                  <div className="dropdown-menu-profile">
                    <i className="material-icons">person</i>
                    <ul id="dropdown-basic" className="dropdown-content-profile">
                      <li className="menu" data-menu="Menu" data-sidebar="Sidebar">
                        <i className="material-icons">credit_card</i>
                        <span>Menu</span>
                      </li>
                      <hr />
                      <li>
                        <i className="material-icons">timelapse</i>
                        <span>Dark mode</span>
                      </li>
                      <hr />
                      <li>
                        <i className="material-icons">account_circle</i>
                        <a href="/settings">kaka</a>
                      </li>
                      <hr />
                      <li>
                        <i className="material-icons">exit_to_app</i>
                        <button>Sign out</button>
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
            </form>
          </div>
          <div id="pageBody" className="page-body">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
