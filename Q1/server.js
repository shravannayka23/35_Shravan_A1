const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    if (req.url === "/gethello" && req.method === "GET") {

        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Hello NodeJS!!");

    }
    else if (req.url === "/" && req.method === "GET") {

        fs.readFile("index.html", (err, data) => {

            if (err) {
                res.writeHead(500);
                res.end("Error loading HTML file");
                return;
            }

            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });

    }
    else {
        res.writeHead(404);
        res.end("Page Not Found");
    }

});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});