const db = require('../data/db-config.js');

module.exports = {
    getResourceList,
    getProjectList,
    getTaskList,
    addResource,
    addProject,
    addTask
}

function getResourceList() {
    return db('resources')
}

function getProjectList() {
    return db('projects')
}

function getTaskList() {
    return db('tasks')
        .join('projects', 'tasks.project_id', '=', 'projects.id')
        .select('tasks.id', 'tasks.description', 'tasks.completed', 'tasks.notes', 'projects.project_name')
}

function addResource(resource) {
    return db('resources').insert(resource)
}

function addProject(project) {
    return db('projects').insert(project)
}

function addTask(task) {
    return db('tasks').insert(task)
}