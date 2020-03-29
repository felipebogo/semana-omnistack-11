const express = require('express');
const routes = express.Router();
const {celebrate, Segments, Joi} = require('celebrate');

const OngsController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngsController.index);
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required(),
        city: Joi.string().required(),
        uf: Joi.string().required()
    })
}), OngsController.create);

routes.get('/incidents',celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
    })
}), IncidentsController.index);
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents/:id',celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}), IncidentsController.delete);

routes.get('/profile',celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()
}) ,ProfileController.index);

module.exports = routes;