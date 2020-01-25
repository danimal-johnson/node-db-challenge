
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Project').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Project').insert([
        { id: 1, 
          name: 'Get out of the house',
          description: 'Come up with an elaborate scheme.',
          completed: false },
        { id: 2,
          name: 'Complete this sprint',
          description: 'Tackle insurmountable odds',
          completed: false },
      ]);
    });
};
