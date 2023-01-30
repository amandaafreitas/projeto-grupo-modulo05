import express from "express";
import conexao from "./app/database/conexao.js";
import PizzaController from "./app/controllers/PizzaController.js";
const app = express();

//leitura do json
app.use(express.json());

//adicionar pizza
app.post("/pizzas", PizzaController.store);
//listar todas as pizzzas
app.get("/pizzas", PizzaController.index);
//buscar pizza por id
app.get("/pizzas/:id", PizzaController.show);
//Atualizar pizza
app.put("/pizzas/:id", PizzaController.update);
// deletar pizzas
app.delete("/pizzas/:id", PizzaController.delete);

export default app;

//onde o servidor ta rodando
