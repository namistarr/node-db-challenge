
exports.seed = function(knex) {
  return knex('tasks').insert([
    {description: 'Learn', notes: 'Ask Luis questions', project_id: 1, resource_id: 1},
    {description: 'Use VSCode to complete the sprint', project_id: 1, resource_id: 2},
    {description: 'Drink coffee', notes: 'Caramel macchiato', project_id: 1, resource_id: 5},
    {description: 'Buy study books', project_id: 3, resource_id: 4},
    {description: 'Build API', notes: 'Data modeling', project_id: 2, resource_id: 3},
  ]);
};
