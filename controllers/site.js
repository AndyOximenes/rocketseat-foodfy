const data = require("../data.json");

exports.index = (request, response) => {
  return response.render("site/index", { items: data.recipes });
};

exports.about = (request, response) => {
  return response.render("site/about");
};

exports.recipes = (request, response) => {
  return response.render("site/recipes", { items: data.recipes });
};

exports.showRecipe = (request, response) => {
  const { id } = request.params;
  const recipe = data.recipes[id];
  return response.render("site/recipe", { recipe });
};
