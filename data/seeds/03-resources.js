
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Resource').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Resource').insert([
        { id: 1,
          name: 'Teeth',
          description: 'Good for gnawing. Also snacking.'},
        { id: 2,
          name: 'Fingers',
          description: 'Good tool for typing.'},
        { id: 3,
          name: 'Computer',
          description: 'Helpful Lambda accessory.'},
        { id: 4,
          name: 'Team lead',
          description: 'Sprint assistance when necessary.'},
        { id: 5,
          name: 'Luis',
          description: 'Fountain of Node knowledge.'},
        { id: 6,
          name: 'Student',
          description: 'Good luck finishing a sprint without one of these.'},
        { id: 7,
          name: 'Floppy disk drive',
          description: 'Not likely necessary, but available nonetheless.'},
        { id: 8,
          name: 'Remote Control',
          description: 'What does this thing even go to?'},
        { id: 9,
          name: 'Printer',
          description: 'In case you want to mail in your assignment.'},
      ]);
    });
};
