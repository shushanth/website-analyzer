
/**
 * @author: shushanth
 * @description: home router configuration
 */

const express = require('express');
const path = require('path');

const homeRoute = express.Router();

const onHomeRoute = (req, res) => res.sendFile(path.join(__dirname, '../../dist/index.html'));
const onError = (error, req, res, next) => next(error);

homeRoute.get('/', onHomeRoute, onError);

module.exports = homeRoute;
