import express from "express";
import pizzasRoutes from "./pizzasRoutes.js";
import bebidasRoutes from "./bebidasRoutes.js";
import usuariosRoutes from "./usuariosRoutes.js";
import loginRoutes from "./loginRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send("Projeto final - Damas");
  });

  app.use(
    express.json(),
    pizzasRoutes,
    bebidasRoutes,
    usuariosRoutes,
    loginRoutes
  );
};

export default routes;
