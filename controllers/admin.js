const fs = require("fs");
const data = require("../data.json");

exports.index = (request, response) => {
  return response.render("admin/index", { items: data.recipes });
};

exports.show = (request, response) => {
  const { id } = request.params;
  const recipe = data.recipes[id];
  return response.render("admin/recipeDetails", { recipe });
};

exports.create = (request, response) => {
  return response.render("admin/create");
};
