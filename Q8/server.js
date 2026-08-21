const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    res.end('Q8 Server is Running Successfully!');
});

server.listen(3005, () => {
    console.log('Server running at http://localhost:3005');
});