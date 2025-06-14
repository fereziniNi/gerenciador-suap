import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config()
// Cria o aplicativo express:
const app = express();
// Middleware express.json() que vai ser aplicado
// em todas as rotas:
app.use(express.json());
// Array para simular um banco de dados de usuários:
const users = [];
app.listen(3000,
    () => {
        console.log("Servidor ativo e aguardando requisições...");
    }
);
