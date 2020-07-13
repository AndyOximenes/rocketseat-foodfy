const fs = require("fs");
const data = require("../data");

exports.index = (request, response) => {
  return response.render("admin/index", { items: data });
};

exports.show = (request, response) => {
  const { id } = request.params;
  const recipe = data[id];
  return response.render("admin/recipeDetails", { recipe });
};
