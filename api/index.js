/**
 * Created by apoorvaagupta on 14/10/17.
 */

const router = require('express').Router();

router.use('/usage', require('./usage'));
router.use('/blockchain', require('./blockchain'));

module.exports = router;