const express = require('express');
const mainRouter = express.Router();
const {test} = require('../controller/main-controller');

mainRouter.get('/', test);

module.exports = mainRouter;