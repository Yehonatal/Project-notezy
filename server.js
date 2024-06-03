import http from "http";

const server = http.createServer((req, res) => {
    console.log("Received request:", req.method, req.url);
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello there");
});

server.listen(4000, () => {
    console.log("Server running: http://localhost:4000");
});
