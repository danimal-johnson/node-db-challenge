
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Resource').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Resource').insert([
        {id: 1, name: '', description: ''},
        {id: 2, name: '', description: ''},
        {id: 3, name: '', description: ''}
      ]);
    });
};
