
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Tasks').insert([
        {id: 1, description: '', notes: '', completed: false},
        {id: 2, description: '', notes: '', completed: false},
        {id: 3, description: '', notes: '', completed: false}
      ]);
    });
};
