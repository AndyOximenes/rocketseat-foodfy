const recipes = require("../data");

exports.index = (request, response) => {
  return response.render("site/index", { items: recipes });
};

exports.about = (request, response) => {
  return response.render("site/about");
};

exports.recipes = (request, response) => {
  return response.render("site/recipes", { items: recipes });
};

exports.showRecipe = (request, response) => {
  const { recipeId } = request.params;
  const recipe = recipes[recipeId];
  return response.render("site/recipe", { recipe });
};
