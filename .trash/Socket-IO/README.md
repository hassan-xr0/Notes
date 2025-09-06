# Socket-IO Server
Normally, when a client communicates with a server using HTTP, the client sends a request and the server responds. After that, the connection is usually closed — it’s mostly a one-way, request–response model.

WebSockets, on the other hand, enable a persistent, bidirectional connection between the client and the server. This means both can send and receive messages at any time without needing to repeatedly open new connections. WebSockets work on top of TCP.

Socket.IO is a library that builds on WebSockets (but is not the same). It provides extra features like automatic reconnection, event-based communication, and fallbacks when WebSockets are not available

# Server Setup
so first import `Server` fro socket io and then create a new instance of `Server` by

```js
import { Server } from 'socket.io';
import express from 'express';
import http from 'http';

const app = express();
const server = http.createServer(app);
const io = new Server(server);
```

after that we need tell the socket-IO to listen for connection event. Whcih occus when a new client establishes a connection  with socket io server after that the callback function is called

```js
io.on('connection', (socket #client) => {
    console.log('a user connected');
});
```
here `io` is entire server and `socket` is the client that connect

To send data from server to client we can use `socket.emit` method
```js
socket.emit("msg", "emit from server");
or
socket.emit("msg", callback-function);
```
the `msg` can be any name like apple or anyother thing but remember On client side when receiving the msg (or any other naem you wrote) also should be used

To recive data from we use
```js
  socket.on("new-msg", (msg) => {
    console.log(msg);
  });
  ```

# Client Setup
for connecting to server we use `io` object
```js
const socket = io();
socket.on("connect", () => {
    console.log("Connected");
});
```
for receiving data from server we use
```js
socket.on("msg", (msg) => {console.log(msg);});
````
for sending data to server we use
```js
socket.emit("new-msg", "Hello World! from client");
````
