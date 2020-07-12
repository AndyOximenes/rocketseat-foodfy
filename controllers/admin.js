const fs = require("fs");
const data = require("../data.js");

exports.index = (request, response) => {
  return response.render("admin/index", { items: data });
};

exports.show = (request, response) => {
  const { id } = request.params;
  console.log(recipe);
  return response.render("admin/recipeDetails", { recipe });
};
