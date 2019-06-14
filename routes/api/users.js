const express = require('express');
const router = express.Router();

/** 
 * @route   GET api/users   <--- request type and endpoint
 * @desc    Test route      <--- description
 * @access  Public          <--- public or private (need token)
 * */
router.get('/', (req, res) => res.send('User route'));

module.exports = router;
