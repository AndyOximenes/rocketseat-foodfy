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

exports.edit = (request, response) => {
  const { id } = request.params;
  const recipe = data.recipes[id];

  if (!recipe) return response.send("Recipe not found!");

  return response.render("admin/edit", { recipe, id });

  // return response.send("ok");
};

exports.post = (request, response) => {
  let {
    image,
    title,
    author,
    ingredients,
    preparation,
    information,
  } = request.body;

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

exports.put = (request, response) => {
  const { id } = request.params;

  data.recipes[id] = { ...request.body };

  fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
    if (err) return response.send("Write file error!");

    return response.redirect(`/admin/recipes/${id}`);
  });
};

exports.delete = (request, response) => {
  const { id } = request.params;

  data.recipes.splice(id, 1);

  fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
    if (err) return response.send("Write file error!");

    return response.redirect(`/admin/recipes`);
  });
};
