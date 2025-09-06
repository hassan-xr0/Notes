import express from "express";
import http from "http";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const _dirname = dirname(fileURLToPath(import.meta.url));
app.get("/", (req, res) => {
  res.sendFile(join(_dirname, "index.html"));
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.emit("msg", "emit from server");
  socket.on("new-msg", (msg) => {
    console.log(msg);
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
