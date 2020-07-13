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
// routes.get("/admin/recipes/:id/edit", recipes.edit); // Mostrar formulário de edição de receita

// routes.post("/admin/recipes", recipes.post); // Cadastrar nova receita
// routes.put("/admin/recipes", recipes.put); // Editar uma receita
// routes.delete("/admin/recipes", recipes.delete); // Deletar uma receita

module.exports = routes;
