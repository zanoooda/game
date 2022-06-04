const server = "http://localhost:3000";
var socket;

const start = () => {
  console.log("start");
  socket = io.connect(server);
  socket.on("connect", () => {
    console.log("connect");
  });

  socket.on("counter", (n) => {
    // online-users-counter
    console.log(spinner, `${n - 1} users online.`);
  });
  socket.on("partner-found", (player) => {
    console.log(`partner-found ${player}`);
  });
  socket.on('move', (move) => {
    // validation
    console.log(move);
});
};
const move = () => {
  socket.emit('move', {"data": "data"});
}