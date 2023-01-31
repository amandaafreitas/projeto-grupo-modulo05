import express from "express";
import pizzasRoutes from "./pizzasRoutes.js";
import bebidasRoutes from "./bebidasRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send("Projeto final - Damas");
  });

  app.use(express.json(), pizzasRoutes, bebidasRoutes);
};

export default routes;
