import express from "express";
import PizzaController from "../controllers/PizzaController.js";

const router = express.Router();

router
  //adicionar pizza
  .post("/pizzas", PizzaController.store)
  //listar todas as pizzzas
  .get("/pizzas", PizzaController.index)
  //buscar pizza por id
  .get("/pizzas/:id", PizzaController.show)
  //Atualizar pizza
  .put("/pizzas/:id", PizzaController.update)
  // deletar pizzas
  .delete("/pizzas/:id", PizzaController.delete);

export default router;
