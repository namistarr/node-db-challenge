const express = require('express');

const ProjectDb = require('./ProjectModel.js');

const router = express.Router();

// Project Routes
router.get('/', (req,res) => {
    ProjectDb.getProjectList()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

router.post('/', (req, res) => {
    const newProject = req.body;

    ProjectDb.addProject(newProject)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

// Task routes
router.get('/tasks', (req, res) => {
    ProjectDb.getTaskList()
        .then(tasks => {
            res.status(200).json(tasks)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

router.post('/:id/tasks', (req, res) => {
    const newTask = req.body;
    newTask.project_id = req.params.id;
    
    console.log(newTask)
    ProjectDb.addTask(newTask)
        .then(task => {
            res.status(201).json(task)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

// Resource routes
router.get('/resources', (req, res) => {
    ProjectDb.getResourceList()
        .then(list => {
            res.status(200).json(list)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

router.post('/resources', (req, res) => {
    const newResource = req.body;

    ProjectDb.addResource(newResource)
        .then(resource => {
            res.status(201).json(resource)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

module.exports = router;