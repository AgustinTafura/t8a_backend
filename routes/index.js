const express = require('express');
const router = express.Router();

const eventsRouter = require('./events')


/* GET home page. */
router.use('/events', eventsRouter);

module.exports = router;
