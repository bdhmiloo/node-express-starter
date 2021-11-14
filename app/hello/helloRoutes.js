const router = require('express').Router();
const helloController = require('./helloController');

router
    .route('/')
    .get(helloController.sayHello);

module.exports = router;
