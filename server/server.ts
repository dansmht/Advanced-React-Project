/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const path = require("path");
const jsonServer = require("json-server");
const jwt = require("jsonwebtoken");

const dbFileName = "db.json";
const SERVER_LATENCY_IN_MS = 500;
const JWT_SECRET = "SECRET";
const PORT = 8000;

const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, dbFileName));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use(async (req, res, next) => {
  await new Promise((resolve) => setTimeout(resolve, SERVER_LATENCY_IN_MS));
  next();
});

server.post("/login", (req, res) => {
  const { username, password } = req.body;
  const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, dbFileName)));
  const { users } = db;

  const user = users.find((user) => user.username === username && user.password === password);

  console.log("USER", user);


  if (!user) {
    return res.status(401).json({ message: "INVALID CREDENTIALS" });
  }

  const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: "1d" });

  return res.json(token);
});

server.use((req, res, next) => {
  const authHeaders = req.headers.authorization;
  const authHeadersArray = authHeaders?.split(" ");

  if (!authHeaders || authHeadersArray?.[0] !== "Bearer" || !authHeadersArray?.[1]) {
    return res.status(401).json({ message: "AUTH ERROR" });
  }

  const token = authHeadersArray[1];

  try {
    jwt.verify(token, JWT_SECRET);
  } catch (err) {
    console.log("ERROR", err);
    return res.status(401).json({ message: "INVALID TOKEN" });
  }
  next();
});

server.use(router);

server.listen(PORT, () => {
  console.log(`JSON Server is running on ${PORT} port`);
});
