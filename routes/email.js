const express = require('express');
const router = express.Router();
const cors = require('cors');

const corsOptions = {
  origin: '*',
  // some legacy browsers (IE11, various SmartTVs) choke on 204
  optionsSuccessStatus: 200 
}
router.use(cors(corsOptions));
router.put('/', function(req, res, next) {
  console.log('put arrived here: payload', JSON.stringify(req.body));
  const email = req.body;
  res.json(email).end();
});

router.get('/', function(req, res, next) {
  const email = req.body;
  res.json("OK").end();
});

module.exports = router;
