// deps
const express = require('express');
const path = require('path');
const env = require('dotenv').config();
const cookieParser = require('cookie-parser');
const logger = require('morgan');
// routers
const usersRouter = require('./routes/users');

const app = express();
// middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// routes
app.use('/users', usersRouter);

app.listen(process.env.PORT || 3001, () => {
  console.info(`Listening on port ${process.env.PORT}`);
});

module.exports = app;
