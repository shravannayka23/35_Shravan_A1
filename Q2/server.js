const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {

    let filePath = path.join(
        __dirname,
        req.url === "/" ? "index.html" : req.url
    );

    const extname = path.extname(filePath);

    let contentType = "text/html";

    if (extname === ".css") {
        contentType = "text/css";
    }

    fs.readFile(filePath, (err, content) => {

        if (err) {
            res.writeHead(404);
            res.end("File Not Found");
            return;
        }

        res.writeHead(200, {
            "Content-Type": contentType
        });

        res.end(content);
    });

});

server.listen(3001, () => {
    console.log("Static server running at http://localhost:3001");
});