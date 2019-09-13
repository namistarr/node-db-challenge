
exports.seed = function(knex) {
  return knex('tasks').insert([
    {description: 'Learn', notes: 'Ask Luis questions', completed: false, project_id: 1, resource_id: 1},
    {description: 'Use VSCode to complete the sprint', completed: false, project_id: 1, resource_id: 2},
    {description: 'Drink coffee', notes: 'Caramel macchiato', completed: false, project_id: 1, resource_id: 5},
    {description: 'Buy study books', completed: false, project_id: 3, resource_id: 4},
    {description: 'Build API', notes: 'Data modeling', completed: false, project_id: 2, resource_id: 3}
  ]);
};
