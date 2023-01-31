import express from "express";
import pizzaRoutes from "./pizzasRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send("Projeto final - Damas");
  });

  app.use(express.json(), pizzaRoutes);
};

export default routes;
