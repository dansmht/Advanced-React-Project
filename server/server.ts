/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const jsonServer = require("json-server");
const jwt = require("jsonwebtoken");
const { getDatabaseData, getUserWithoutPassword } = require("./helpers.ts");
const { dbFileName, SERVER_LATENCY_IN_MS, PORT, JWT_SECRET } = require("./constants.ts");

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
  const { users } = getDatabaseData();

  const user = users.find((user) => user.username === username && user.password === password);

  console.log("USER", user);

  if (!user) {
    return res.status(401).json({ message: "INVALID CREDENTIALS" });
  }

  const token = jwt.sign({
    id: user.id,
    username: user.username,
  }, JWT_SECRET, { expiresIn: "1d" });

  const userWithoutPassword = getUserWithoutPassword(user);

  return res.json({
    user: userWithoutPassword,
    token,
  });
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

server.get("/me", (req, res) => {
  const token = req.headers.authorization.split(" ")[1];

  const jwtPayload = jwt.decode(token);

  const userId = jwtPayload.id;

  const { users } = getDatabaseData();

  const user = users.find((user) => user.id === userId);

  const userWithoutPassword = getUserWithoutPassword(user);

  return res.json(userWithoutPassword);
});

server.use(router);

server.listen(PORT, () => {
  console.log(`JSON Server is running on ${PORT} port`);
});
