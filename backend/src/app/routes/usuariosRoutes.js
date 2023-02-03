import express from "express";
import UsuarioController from "../controllers/UsuarioController.js";

const router = express.Router();

router
  //adicionar pizza
  .post("/usuarios", UsuarioController.store)
  //listar todas as pizzzas
  .get("/usuarios", UsuarioController.index)
  //buscar pizza por id
  .get("/usuarios/:id", UsuarioController.show)
  //Atualizar pizza
  .put("/usuarios/:id", UsuarioController.update)
  // deletar usuarios
  .delete("/usuarios/:id", UsuarioController.delete);

export default router;
