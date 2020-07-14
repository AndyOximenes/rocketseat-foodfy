const express = require("express");
const routes = express.Router();
const site = require("../controllers/site.js");
const admin = require("../controllers/admin");

routes.get("/", site.index);
routes.get("/about", site.about);
routes.get("/recipes", site.recipes);
routes.get("/recipes/:id", site.showRecipe);

routes.get("/admin/recipes", admin.index); // Mostrar a lista de receitas
routes.get("/admin/recipes/create", admin.create); // Mostrar formulário de nova receita
routes.get("/admin/recipes/:id", admin.show); // Exibir detalhes de uma receita
routes.get("/admin/recipes/:id/edit", admin.edit); // Mostrar formulário de edição de receita

routes.post("/admin/recipes", admin.post); // Cadastrar nova receita
routes.put("/admin/recipes/:id", admin.put); // Editar uma receita
routes.delete("/admin/recipes/:id", admin.delete); // Deletar uma receita

module.exports = routes;
