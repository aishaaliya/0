import express, { Express } from "express";
const server: Express = express();
server.use(express.json());
server.use(express.urlencoded());

let users: string[] = [
    'Aisha','Aliya'
];


server.get("/users", (request, response) => {
  response.status(200).send(users);
});

server.post("/users", (request, response) => {
  const x = request.body.name;
  users.push(x);

  response
  .status(200)
  .send('User qowildi')
});

server.listen(1215, () => {
  console.log("Server iwlamoqda::1215");
});
