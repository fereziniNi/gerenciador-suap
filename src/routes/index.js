import express from "express";

import rotasAlunos from "./alunoRoutes.js";
import rotasAuthentic from "./authenticateRoutes.js";


routes.use("/alunos", rotasAlunos);
routes.use("/", rotasAuthentic);

export default routes;