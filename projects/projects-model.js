const db = require("../data/db-config.js");

module.exports = {
  getProjects,
  getProjectById,
  getTasks,
  getTasksByProjectId,
  getResources,
}

function getProjects () {
  return db("Project");
}

function getProjectById (id) {
  return db("Project")
    .where({ id: id })
    .first();
}

function getTasks () {
  return db("Task");
}

function getTasksByProjectId (id) {
  // TODO
}

function getResources () {
  return db("Resource");
}