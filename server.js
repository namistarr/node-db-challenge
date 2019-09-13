const express = require('express');
const ProjectRoutes = require('./routes/ProjectRoutes.js');

const server = express();

server.use(express.json());

server.use('/api/projects', ProjectRoutes);

server.use('/', (req, res) => {
    res.send(`Hi from Sleepytown`)
});