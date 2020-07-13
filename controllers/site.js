const data = require("../data");

exports.index = (request, response) => {
  return response.render("site/index", { items: data });
};

exports.about = (request, response) => {
  return response.render("site/about");
};

exports.recipes = (request, response) => {
  return response.render("site/recipes", { items: data });
};

exports.showRecipe = (request, response) => {
  const { id } = request.params;
  const recipe = data[id];
  return response.render("site/recipe", { recipe });
};
