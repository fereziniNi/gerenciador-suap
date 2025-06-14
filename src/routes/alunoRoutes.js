import express from "express";
import AlunoController from "../controllers/alunoController.js";
import authenticateJWT from "./src/middleware/jws_config.js";

const routes = express.Router();
routes.use(authenticateJWT);
routes.get("/alunos", AlunoController.listarAlunos);
routes.get("/alunos/:id", AlunoController.listarAlunoPorId);
routes.post("/alunos", AlunoController.cadastrarAluno);
routes.put("/alunos/:id", AlunoController.atualizarAluno);
routes.delete("/alunos/:id", AlunoController.excluirAluno);



export default routes;