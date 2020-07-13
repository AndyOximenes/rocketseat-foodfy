const fs = require("fs");
const data = require("../data.json");

exports.index = (request, response) => {
  return response.render("admin/index", { items: data.recipes });
};

exports.create = (request, response) => {
  return response.render("admin/create");
};

exports.show = (request, response) => {
  const { id } = request.params;
  const recipe = data.recipes[id];
  return response.render("admin/recipeDetails", { recipe, id });
};

exports.post = (request, response) => {
  const keys = Object.keys(request.body);
  let {
    image,
    title,
    author,
    ingredients,
    preparation,
    information,
  } = request.body;

  for (key of keys) {
    if (request.body[key] == "") {
      return response.send("Please fill all the fields");
    }
  }

  data.recipes.push({
    image,
    title,
    author,
    ingredients,
    preparation,
    information,
  });

  fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
    if (err) return response.send("Write file error!");

    return response.redirect("/admin/recipes");
  });
  // return response.send(request.body);
};

exports.edit = (request, response) => {
  const { id } = request.params;
  const recipe = data.recipes[id];

  if (!recipe) return response.send("Recipe not found!");

  return response.render("admin/edit", { recipe, id });

  // return response.send("ok");
};

exports.put = (request, response) => {
  const { id } = request.params;
  const recipe = data.recipes[id];

  // if (!recipe) return response.send("Recipe not found!");

  const editRecipe = {
    ...recipe,
    ...request.body,
  };

  data.recipes[id] = editRecipe;

  console.log(editRecipe);
  fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
    if (err) return response.send("Write file error!");

    return response.redirect(`/admin/recipes/`, { id });
  });
};
