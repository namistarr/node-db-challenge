
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('projects').insert([
        {project_name: 'Data Persistence Sprint', description: 'Will I make it?', completed: false},
        {project_name: 'Buffy API', description: 'A Buffy API for your Buffy needs.', completed: false},
        {project_name: 'JLPT N1', description: 'Study & pass!', completed: false}
      ]);
};
