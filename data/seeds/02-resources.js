
exports.seed = function(knex) {
  return knex('resources').insert([
    {resource_name: 'Luis', description: 'Instructor'},
    {resource_name: 'VSCode', description: 'Code editor'},
    {resource_name: 'Pictures of Buffy', description: 'What is an API with no pictures?'},
    {resource_name: 'Books', description: 'Vocab/Grammar/Kanji/Reading & Listening Comprehension'},
    {resource_name: 'Caffeine'}
  ]);
};
