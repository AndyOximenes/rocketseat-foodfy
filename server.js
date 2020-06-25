const express = require("express");
const nunjucks = require("nunjucks");

const server = express();
const recipes = require("./data");
const { request, response } = require("express");

server.use(express.static("public"));

server.set("view engine", "njk");

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true,
});

server.get("/", (request, response) => {
  return response.render("index");
});

server.get("/about", (request, response) => {
  return response.render("about");
});

server.listen(5000, () => {
  console.log("Server is running - Port 5000");
});
