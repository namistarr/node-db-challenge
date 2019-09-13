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

}

function getProjectList() {

}

function getTaskList() {

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