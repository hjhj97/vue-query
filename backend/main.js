const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const cors = require("cors");
app.use(cors());

const list = [
  {
    name: "aa",
    age: 10,
  },
  {
    name: "bb",
    age: 20,
  },
];

app.get("/", (request, response) => {
  response.send("Hello");
});

app.get("/getList", (request, response) => {
  response.send(list);
});

app.post("/addItem", (request, response) => {
  list.push(request.body);
  console.log(list);
  response.send({
    sucesss: true,
  });
});

app.listen(3000, () => console.log("listening port 3000"));
