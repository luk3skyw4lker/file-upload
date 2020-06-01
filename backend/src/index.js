const path = require('path');

require('dotenv').config({ path: path.resolve(__dirname, '..', '.env') });

const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');

const port = process.env.PORT || 3000;
const routes = require('./routes');

const app = express();

/**
 * Database
 */
mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);

mongoose.connect(process.env.MONGODB_URI);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  '/files',
  express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
);
app.use(morgan('dev'));

app.use(routes);

app.listen(port, (err) => {
  if (err) throw err;

  return console.info('Server listening on port:', port);
});
