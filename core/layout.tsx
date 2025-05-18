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
                    <a className="menu-item" href="/microservices">
                      <i className="material-icons">mail</i>
                      <span>Microservices</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/docker">
                      <i className="material-icons">mail</i>
                      <span>Docker</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/kubernetes">
                      <i className="material-icons">assignment</i>
                      <span>Kubernetes</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/rto-rpo-drp">
                      <i className="material-icons">assignment</i>
                      <span>RTO - RPO - DRP</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/reverse-proxy">
                      <i className="material-icons">assignment</i>
                      <span>Reverse Proxy</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/orm">
                      <i className="material-icons">assignment</i>
                      <span>ORM</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/devops">
                      <i className="material-icons">assignment</i>
                      <span>Devops</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/cloud">
                      <i className="material-icons">assignment</i>
                      <span>Cloud</span>
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
                    <a className="menu-item" href="/sql-injection">
                      <i className="material-icons">assignment</i>
                      <span>SQL Injection</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/waf-hips-fim-protection">
                      <i className="material-icons">assignment</i>
                      <span>WAF, HIPS, FIM Protection</span>
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
                    <a className="menu-item" href="/remote-file-inclusion">
                      <i className="material-icons">assignment</i>
                      <span>Remote File Inclusion (RFI)</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/ddos">
                      <i className="material-icons">assignment</i>
                      <span>DDoS Attack</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/ransomware">
                      <i className="material-icons">assignment</i>
                      <span>Ransomware Attack</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/malware-virus-trojan-worms">
                      <i className="material-icons">assignment</i>
                      <span>Malware, Virus, Trojan, Worms</span>
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
              <li className="open">
                <div className="menu-item">
                  <i className="material-icons">mail</i>
                  <span>Golang</span>
                  <i className="entity-icon down"></i>
                </div>
                <ul className="sub-list expanded">
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
