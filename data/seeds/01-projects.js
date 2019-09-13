
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('table_name').insert([
        {project_name: 'Data Persistence Sprint', description: 'Will I make it?'},
        {project_name: 'Buffy API', description: 'A Buffy API for your Buffy needs.'},
        {project_name: 'JLPT N1', description: 'Study & pass!'}
      ]);
};
