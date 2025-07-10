const express = require("express");
const app = express();

const indexRoute = require("./routes/index");

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/index", indexRoute);

app.get("/", (req, res) => {
  res.redirect("/index");
});

app.listen(3000, () => {
  console.log("Servidor Rodando");
});
