 /*
    
 Tipos de parâmentros:
Query params: Parâmentros nomeados enviados na rota após "?" (Filtros, Páginação);
Route params: Parâmentros utilizados para identificar recursos;
Request Body: Corpo de requisito, utilizado para criar ou alterar recursos;
 
*/

const express = require('express');

const OngController = require('./controllers/OngController');
const incidentsController = require('./controllers/IncidentsController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/session', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', incidentsController.index);
routes.post('/incidents', incidentsController.create);
routes.delete('/incidents/:id', incidentsController.delete);

module.exports = routes;