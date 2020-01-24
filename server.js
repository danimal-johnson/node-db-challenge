const express = require('express');

const ProjectsRouter = require('./projects/projects-router.js');

const server = express();

server.use(express.json());
server.use('/api', ProjectsRouter);

server.get('/', (req, res) => {
  res.send('<h3>Project database is running. Welcome.</h3>');
});

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: "Something went wrong"
  })
})

module.exports = server;