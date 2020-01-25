const db = require("../data/db-config.js");

module.exports = {
  getAllProjects,
  getProjectById,
  getAllTasks,
  getTasksByProjectId,
  getAllResources,
  getResourceById,
  getResourcesByProjectId,
  addProject,
  addResource,
  addTask
}

function getAllProjects () {
  return db("Project");
}

function getProjectById (id) {
  return db("Project")
    .where({id: id})
    .first();
}

function getAllTasks () {
    // SELECT T.id, T.description, T.notes,
    //   P.name as 'Project Name',
    //   P.description as 'Project Description'
    // FROM Task AS T
    // JOIN Project as P
    // ON P.id = T.project_id;

  return db("Task as T")
    .join("Project as P", "T.project_id", "=", "P.id")
    .select("T.id as Task.id", "T.description", "T.notes", "T.completed",
            "P.name as ProjectName", "P.description as ProjectDesc");
}

function getTaskById (id) {
  return db("Task")
    .where({id: id})
    .first();
}

function getTasksByProjectId (id) {
  return db("Task as T")
  .join("Project as P", "T.project_id", "=", "P.id")
  .select("T.id as Task.id", "T.description", "T.notes", "T.completed")
  .where('P.id', id);

  // return db("Task as T")
  //   .join ("Project as P", "P.id", "T.project_id")
  //   .where({project_id: id})
  //   .select('')
}

function getAllResources () {
  return db("Resource");
}

function getResourceById (id) {
  return db("Resource")
    .where({id: id})
    .first();
}

function getResourcesByProjectId (id) {
  // For future use
}

// ------ Add New items -------

function addProject(projectData) {
  return db("Project")
    .insert(projectData)
    .then(projectList => {
      let projectId = projectList[0];
      return getProjectById(projectId);
    })
    .catch(err => console.log(err))
}

function addResource (resourceData) {
  return db("Resource")
    .insert(resourceData)
    .then(resourceList => {
      let resourceId = resourceList[0];
      return getResourceById(resourceId);
    })
    .catch(err => console.log(err))
}

function addTask (taskData) {
    return db("Task")
      .insert(taskData)
      .then(taskList => {
        let taskId = taskList[0];
        return getTaskById(taskId);
      })
      .catch(err => console.log(err));
}