
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Project_Resource').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Project_Resource').insert([
        {id: 1, project_id: 1, resource_id: 1},
        {id: 2, project_id: 1, resource_id: 7},
        {id: 3, project_id: 1, resource_id: 8},
        {id: 4, project_id: 1, resource_id: 3},
        {id: 5, project_id: 1, resource_id: 6},
        {id: 6, project_id: 1, resource_id: 4},
        {id: 7, project_id: 1, resource_id: 9},
      ]);
    });
};
