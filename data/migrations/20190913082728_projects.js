
exports.up = function(knex) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments();
            tbl.string('project_name', 255)
                .notNullable()
            tbl.text('description');
            tbl.boolean('completed')
                .defaultTo(false)
        })
        .createTable('resources', tbl => {
            tbl.increments();
            tbl.string('resource_name', 255) 
                .notNullable()
            tbl.text('description')
        })
        .createTable('tasks', tbl => {
            tbl.increments();
            tbl.text('description') 
                .notNullable()
            tbl.text('notes')
            tbl.boolean('completed') 
                .defaultTo(false)
            tbl.integer('project_id')
                .notNullable()
                .unsigned()
                .references('id') 
                .inTable('projects')
                .onDelete('RESTRICT') 
                .onUpdate('CASCADE') 
            tbl.integer('resource_id') 
                .unsigned()
                .references('id') 
                .inTable('resources')
                .onDelete('RESTRICT') 
                .onUpdate('CASCADE')
        })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources') 
    .dropTableIfExists('projects')
};
