const express = require('express');

const router = express.Router();

router.get('/message', (req, res, next) => {
  res.json('Welcome To forge starter pack');
});

module.exports = router;
