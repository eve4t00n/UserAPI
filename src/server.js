const express = require("express");
const app = express();

const indexRoute = require("./routes/index");

app.use(express.json());
app.use("/index", indexRoute);

app.get("/", (req, res) => {
  res.send("Meu sistema de gerenciamento de usuários");
});

app.listen(3000, () => {
  console.log("Servidor Rodando");
});
