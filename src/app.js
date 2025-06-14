import express from "express";
import conectaNaDatabase from "./config/database_config.js";
import 'dotenv/config';
const app = express();

const conexao = await conectaNaDatabase();
conexao.on("error", (erro) => {
    console.error("Erro de conexão!", erro);
});
conexao.once("open", () => {
    console.log("Conexão com o banco feita com sucesso!");
});


export default app;