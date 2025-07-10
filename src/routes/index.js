//IIFE - Imedediately Invoked Function Expression
//Cria o usuário admin base do sistema. Se já estiver sido criado
//Não faz nada e apenas carrega o banco de dados.sqlite
(async function () {
  const database = require("../../db/db");
  const Usuario = require("../../models/usuario");
  await database.sync();
  const [usuario, created] = await Usuario.findOrCreate({
    where: { nome: "admin" },
    defaults: {
      nome: "admin",
      senha: "admin",
      cargo: "adiministrador",
    },
  });
})();

const express = require("express");
const route = express.Router();

route.get("/", async (req, res) => {
  const Usuario = require("../../models/usuario");
  const usuarios = await Usuario.findAll();
  //Para ser consumido por aplicação front-end SPA
  //res.status(200).send(usuarios);
  //Para aplicação SSR
  res.render("index", { usuarios: usuarios });
});

route.get("/cadastrar", (req, res) => {
  res.render("cadastrarUsuario");
});

route.post("/cadastrar", async (req, res) => {
  try {
    const { nome, senha, cargo } = req.body;
    if (!nome || !senha || !cargo) {
      res.status(400).send({ mensagem: "Campos Obrigatórios Estão Vazios" });
    }
    const Usuario = require("../../models/usuario");
    await Usuario.create({
      nome: nome,
      senha: senha,
      cargo: cargo,
    });
    res.status(201).send("Usuário Criado Com Sucesso");
  } catch (error) {
    console.log(error);
    res.status(500).send({ mensagem: "Erro Interno Do Servidor" });
  }
});

route.get("/remover", (req, res) => {
  res.render("removerUsuario");
});

route.delete("/remover", async (req, res) => {
  try {
    const { usuario } = req.query;
    if (!usuario) {
      res.status(400).send({ mensagem: "Usuário é Obrigatório" });
    }
    const Usuario = require("../../models/usuario");
    if (await Usuario.findOne({ where: { nome: usuario } })) {
      await Usuario.destroy({ where: { nome: usuario } });
      res.status(200).send("Usuário Removido Com Sucesso");
    } else {
      res.status(404).send({ mensagem: "Usuário Não Encontrado" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ mensagem: "Erro interno no servidor" });
  }
});

module.exports = route;
