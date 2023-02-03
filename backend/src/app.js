import express from "express";
import PizzaController from "./app/controllers/PizzaController.js";
import routes from "./app/routes/index.js";
import cors from "cors";

const app = express();

//leitura do json
app.use(cors());
app.use(express.json());
routes(app);

export default app;

//onde o servidor ta rodando
