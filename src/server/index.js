const os = require('os');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const mongoose = require('mongoose');

// swagger
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../server/config/swagger.json');

// routes
const index = require('./routes/index');

const app = express();

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  ) // Adding new mongo url parser
  .then(() => {
    console.log('MongoDB Connected...');
  })
  .catch(err => console.log(err));

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

// security
app.use(helmet());
app.use(helmet.hidePoweredBy());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'build')));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Use Routes
app.use('/api', index);

app.listen(8080, () => console.log('Listening on port 8080!'));
