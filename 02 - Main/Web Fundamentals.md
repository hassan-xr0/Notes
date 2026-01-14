# Socket-IO Server
Normally, when a client communicates with a server using HTTP, the client sends a request and the server responds. After that, the connection is usually closed — it’s mostly a one-way, request–response model.

WebSockets, on the other hand, enable a persistent, bidirectional connection between the client and the server. This means both can send and receive messages at any time without needing to repeatedly open new connections. WebSockets work on top of TCP.

Socket.IO is a library that builds on WebSockets (but is not the same). It provides extra features like automatic reconnection, event-based communication, and fallbacks when WebSockets are not available