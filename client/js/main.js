const server = "http://localhost:3000";
var socket;
socket = io.connect(server);
socket.on("connect", () => {
  console.log("connect");
});
