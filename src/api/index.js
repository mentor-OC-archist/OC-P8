const express = require('express');
const router = express.Router();

const { getAllProjects, addProject } = require("../dao/projectDAO");
const Project = require("../models/Project");



// Route GET pour récupérer tous les projets
router.get("/projects", (req, res) => {
  const projects = getAllProjects();
  res.json(projects);
});
// Route POST pour ajouter un nouveau projet
router.post("/projects", (req, res) => {
  const { id, title, image, description } = req.body;
  const newProject = new Project(id, title, image, description);
  const createdProject = addProject(newProject);
  res.status(201).json(createdProject);
});










router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});


module.exports = router;
