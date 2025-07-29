const http = require('http');

const server = http.createServer((req, res) => {
  res.end('✅ Hello from Node.js App behind NGINX reverse proxy!');
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
