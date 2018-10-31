const express = require('express');

const router = express.Router();

const getMessage = (req, res, next) => {
  res.json('Welcome To forge starter pack');
};

router.route('/message').get(getMessage);

module.exports = router;
