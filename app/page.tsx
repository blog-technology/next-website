export default function Home() {
  return (
    <div className="view-container">
      <header>
        <h1>Tech Blog</h1>
      </header>
      <div className="view-body">
        <p className="p">This is the technology blog.</p>
        <section>
          <h2>Content</h2>
          <ul className="row list">
            <li className="col s12 l6 xl3 card">
              <section>
                <h3>Basic Concepts</h3>
                <p>Basic Concepts of software development, including programming languages, algorithms, data structures, and software design principles.</p>
              </section>
            </li>
            <li className="col s12 l6 xl3 card">
              <section>
                <h3>Nodejs</h3>
                <p>
                  Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to build scalable network applications using
                  JavaScript on the server side.
                </p>
              </section>
            </li>
            <li className="col s12 l6 xl3 card">
              <section>
                <h3>Frontend</h3>
                <p>Frontend programming</p>
              </section>
            </li>
            <li className="col s12 l6 xl3 card">
              <section>
                <h3>GO</h3>
                <p>
                  Go is an open-source programming language that makes it easy to build simple, reliable, and efficient software. It is designed for high
                  performance and scalability, making it a popular choice for cloud computing and microservices architectures.
                </p>
              </section>
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}
