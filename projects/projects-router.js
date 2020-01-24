const express = require('express');
const Projects = require('./projects-model.js');

const router = express.Router();

router.get('/projects', (req, res) => {
  Projects.getProjects()
    .then(projects => {
      res.json(projects);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get projects' });
    });
});

router.get('/projects/:id', (req, res) => {
  const { id } = req.params;

  Projects.findById(id)
  .then(project => {
    if (project) {
      res.json(project);
    } else {
      res.status(404).json({ message: 'Could not find project with given id.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get projects' });
  });
});

router.get('/resources', (req, res) => {
  Projects.getResources()
    .then(resources => {
      res.json(resources);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get resources' });
    });
})

router.get('/tasks', (req, res) => {
  Projects.getTasks()
    .then(tasks => {
      res.json(tasks);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get tasks' });
    });
})

router.get('/tasks/:id', (req, res) => {
  const { id } = req.params;
  Projects.getTasksByProjectId(id)
  .then(tasks => {
    res.json(tasks);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get tasks' });
  });
})

router.post('/projects', (req, res) => {
  res.status(501).json({ message: 'Not yet implemented' });
})

module.exports = router;