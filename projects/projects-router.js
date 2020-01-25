const express = require('express');
const Projects = require('./projects-model.js');

const router = express.Router();

// ----------------- GET ----------------------

router.get('/projects', (req, res) => {
  Projects.getAllProjects()
    .then(projects => {
      res.json(projects);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get projects' });
    });
});

router.get('/projects/:id', (req, res) => {
  const { id } = req.params;

  Projects.getProjectById(id)
  .then(project => {
    if (project) {
      Promise.all([ Projects.getTasksByProjectId(id),
                    Projects.getResourcesByProjectId(id)])
        .then(result => {
            project.tasks = result[0];
            project.resources = result[1];
            res.json(project);
        })
      // Projects.getTasksByProjectId(id)
      //   .then(tasks => {
      //     console.log(`Found ${tasks.length} tasks for project ${id}`);
      //     project.tasks = tasks;
      //     console.log(`Stored ${project.tasks.length} tasks.`);
      //     res.json(project);
      //   })
      //   .catch(err => console.log(err));
      // res.json(project);
    }
    else {
      res.status(404).json({ message: 'Could not find project with given id.' })
    }
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ message: 'Failed to get projects' });
  });
});

router.get('/resources', (req, res) => {
  Projects.getAllResources()
    .then(resources => {
      res.json(resources);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get resources' });
    });
})

// Get Resources for a specific project
router.get('/resources/:id', (req, res) => {
  const { id } = req.params;
  Projects.getResourcesByProjectId(id)
    .then(resources => {
      res.json(resources);
    })
    .catch(err => {
      console.log(`Error getting resources for project ${id}: ${err}`);
      res.status(500).json({ message: 'Failed to get resources' });
    });
})

router.get('/tasks', (req, res) => {
  Projects.getAllTasks()
    .then(tasks => {
      res.json(tasks);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get tasks' });
    });
})

// Note: This gets tasks for a specific project
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

// ------------- POST ------------------

router.post('/projects', (req, res) => {
  const projectData = req.body;

  Projects.addProject(projectData)
    .then(project => {
      res.status(201).json(project);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new project' });
    });
});

router.post('/tasks', (req, res) => {
  const taskData = req.body;
  const id = taskData.project_id;
  console.log("Adding task to project #", id);

  Projects.getProjectById(id)
    .then(project => {
      if (project) {
        Projects.addTask(taskData)
          .then(project => {
            res.status(201).json(project);
          })
          .catch (err => {
            res.status(500).json({ message: 'Failed to create new task' });
          });
      }
      else {
        res.status(404).json({ message: 'Could not find project with given id.' })
      }
    })
    .catch (err => {
      res.status(500).json({ message: 'General Server Error' });
    });
});

router.post('/resources', (req, res) => {
  const resourceData = req.body;

  Projects.addResource(resourceData)
  .then(resource => {
    res.status(201).json(resource);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new resource' });
  });
});



module.exports = router;