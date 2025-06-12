const http = require("http")

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    return res.end('<h1>Welcome to our home page</h1><br><a href="/about">about</a>')
  }
  if (req.url === "/about") {
    return res.end("Here is out short history")
  }
  res.end(`<h1>Oops!</h1><p>try these links</p>
          <a href="/">back home</a>`)
})

server.listen(5000)
