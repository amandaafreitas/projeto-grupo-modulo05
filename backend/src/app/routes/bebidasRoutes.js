import express from "express";
import BebidaController from "../controllers/BebidaController.js";

const router = express.Router();

router
  //adicionar bebidas
  .post("/bebidas", BebidaController.store)
  //listar todas as bebidas
  .get("/bebidas", BebidaController.index)
  //buscar bebidas por id
  .get("/bebidas/:id", BebidaController.show)
  //Atualizar bebidas
  .put("/bebidas/:id", BebidaController.update)
  // deletar bebidas
  .delete("/bebidas/:id", BebidaController.delete);

export default router;
