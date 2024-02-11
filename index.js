import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/api/users" && req.method === "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify({ message: "all users here should be" }));
    res.end();
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify({ message: "Not found!" }));
    res.end();
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`running on port http://localhost:${port}`);
});
