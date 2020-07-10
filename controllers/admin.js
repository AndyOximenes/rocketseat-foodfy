const fs = require("fs");
const data = require("../data");

exports.index = (request, response) => {
  return response.render("admin/index");
};
