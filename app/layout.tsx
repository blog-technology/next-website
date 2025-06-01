import "@assets/css/globals.css"
import LayoutPage from "@core/layout"
import Script from "next/script"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="../public/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="light" />
        <meta name="theme-color" content="#008577" />
        <meta name="description" content="Web site created using create-react-app" />
        <link rel="apple-touch-icon" href="../public/logo192.png" />
        <link href="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-tomorrow.min.css" rel="stylesheet" />
        <script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/components/prism-core.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/components/prism-clike.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/components/prism-java.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/components/prism-javascript.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/components/prism-typescript.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/components/prism-go.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/components/prism-bash.min.js"></script>
        <link href="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/plugins/line-numbers/prism-line-numbers.min.css" rel="stylesheet" />
        <script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/plugins/line-numbers/prism-line-numbers.min.js"></script>
        <style>
          {`
          pre {
            border-radius: 10px;
            overflow: auto;
            padding: 1em;
            margin-bottom: 2em;
          }
          `}
        </style>
        <title>Next App</title>
      </head>
      <body id="sysBody" className="full-header top-menu">
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="sysToast" className="toast-message alert-success"></div>
        <div id="sysLoading" className="loader-wrapper" style={{ display: "none" }}>
          <div className="loader-sign">
            <div className="loader"></div>
          </div>
        </div>
        <div id="sysAlert" className="alert-wrapper">
          <div className="alert">
            <div>
              <div id="sysIcon" className="alert-icon"></div>
              <h4 id="sysMessageHeader"></h4>
              <p id="sysMessage"></p>
            </div>
            <footer>
              <button type="button" className="btn-cancel" id="sysNo" name="btnCancel" />
              <button type="submit" className="btn-accept" id="sysYes" name="btnAccept" />
            </footer>
          </div>
        </div>
        <Script src="/static/script.js"></Script>
        <LayoutPage>{children}</LayoutPage>
      </body>
    </html>
  )
}
