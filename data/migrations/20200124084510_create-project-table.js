
exports.up = function(knex) {
    // Start with the 1's: 1 recipe has many steps and ingrdients
    return knex.schema
    .createTable('Project', tbl => {
      tbl.increments();
      tbl.string('name', 127)
        .notNullable();
      tbl.string('description', 255);
      tbl.boolean('completed')
        .defaultTo(false);
    })
    .createTable('Resource', tbl => {
      tbl.increments();
      tbl.string('name', 127)
        .notNullable()
        .unique();
      tbl.string('description', 255);
    })
    .createTable('Task', tbl => {
      tbl.increments();
      tbl.string('description', 127)
        .notNullable();
      tbl.string('notes', 255);
      tbl.boolean('completed')
        .defaultTo(false);
      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('Project')
        .onDelete('RESTRICT') 
        .onUpdate('CASCADE'); 
    })
    .createTable('Project_Resource', tbl => {
      tbl.increments();
      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('Project')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
      tbl.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('Resource')
        .onDelete('RESTRICT') // What happens if this ID is deleted.
        .onUpdate('CASCADE'); // What happens if this ID changes.
    });
        // CASCADE, SET NULL, DO NOTHING, RESTRICT
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('Task')
    .dropTableIfExists('Resource')
    .dropTableIfExists('Project')
    .dropTableIfExists('Project_Resource');
};
