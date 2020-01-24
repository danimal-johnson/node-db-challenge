
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Project_Resource').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Project_Resource').insert([
        {id: 1, project_id: 1, resource_id: 1},
        {id: 2, project_id: 1, resource_id: 1},
        {id: 3, project_id: 1, resource_id: 1}
      ]);
    });
};
