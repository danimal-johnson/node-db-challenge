
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Project').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Project').insert([
        {id: 1, name: '', description: '', completed: false},
        {id: 2, name: '', description: '', completed: false},
        {id: 3, name: '', description: '', completed: false}
      ]);
    });
};
