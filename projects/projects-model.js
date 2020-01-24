const db = require("../data/db-config.js");

module.exports = {
  getProjects,
  getTasks,
  getResources,
}

function getProjects (id) {
  return db("Project");
}

function getTasks (id) {
  return db("Task");
}

function getResources () {
  return db("Resource");
}