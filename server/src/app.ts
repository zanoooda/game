import express, { Application, Request, Response } from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";

const app: Application = express();

const port: number = 3000;
app.use(cors());

app.get("/test", (req: Request, res: Response) => {
  res.send("Yo");
});

const httpServer = createServer(app);
const io = new Server(httpServer);

io.on("connection", (socket) => {
  console.log("connection");

  // ...
});

// httpServer.listen(3001);

app.listen(port, function () {
  console.log(`App is listening on port ${port} !`);
});
