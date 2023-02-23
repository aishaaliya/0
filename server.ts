import express, { Express, request, response } from "express";
const server: Express = express();

let phone: string = "+99899245567";

server.use(express.json());
server.use(express.urlencoded());


server.get("/phone", (request, response) => {
  response
  .status(200)
  .send(phone);
});

server.post('/phone', (request, response) => {
  phone = request.body.tel;
console.log(request.body);

  response
  .status(200)
  .send("phone saved");
});

server.get("/", (request, response) => {
  response.status(201).send("Hello Everyone!");
});

server.get("/pubg", (request, response) => {
  response.status(403).send("Dars vaqti telefondan foydalaniw mumkin emas!");
});

server.listen(9057, () => {
  console.log("Server iwlayapti::9057");
});
