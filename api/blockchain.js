const router = require('express').Router();
const db = require('./../db/models');
const BlockChain = require('./../blockchainHandler').BlockChain;


router.get('/', (req, res) => {

    res.status(200).send({
        success: true,
        data: BlockChain.chain
    })

});

module.exports = router;