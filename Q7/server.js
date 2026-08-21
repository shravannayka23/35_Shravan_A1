const http = require("http");

const server = http.createServer(async (req, res) => {

    console.log("URL RECEIVED:", req.url);

    if (req.url.startsWith("/google")) {

        try {

            console.log("Fetching Google...");

            const response = await fetch("https://www.google.com");

            const data = await response.text();

            console.log("Google data received.");

            res.writeHead(200, {
                "Content-Type": "text/html"
            });

            res.end(data);

        } catch (error) {

            console.log("FETCH ERROR:", error.message);

            res.writeHead(500, {
                "Content-Type": "text/plain"
            });

            res.end("Error: " + error.message);
        }

    } else {

        res.writeHead(404, {
            "Content-Type": "text/plain"
        });

        res.end("Page Not Found");
    }

});

server.listen(3002, "localhost", () => {
    
    console.log("Open: http://localhost:3002/google");
});