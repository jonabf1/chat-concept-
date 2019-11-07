const express = require('express');

const UserGithubController = require('./controllers/UserGithubController')
const UserVisitorController = require('./controllers/UserVisitorGithub')
const MessageController = require('./controllers/MessageController')
const AllUsersController = require('./controllers/AllUsersController')

const routes = express.Router();

routes.post('/github', UserGithubController.store);
routes.post('/user', UserVisitorController.store);
routes.post('/message', MessageController.store);
routes.get('/message/:page', MessageController.index);
routes.get('/users/all', AllUsersController.index);
routes.delete('/message', MessageController.delete);

module.exports = routes;
