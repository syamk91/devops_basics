const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  res.end("✅ Hello from Node.js App behind NGINX reverse proxy!");
});

server.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
