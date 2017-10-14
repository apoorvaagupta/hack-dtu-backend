const BlockchainHandler = require('../blockchainHandler');

const router = require('express').Router();
const db = require('./../db/models');

router.post('/', (req, res) => {

    db.models.Usage.create({
        amount: +req.body.amount,
        location: req.body.place,
        // time: req.body.time,
        usernfc: req.body.usernfc,
        username: req.body.username,
        usercontact: req.body.usercontact
    }).then((usage) => {
        let result = BlockchainHandler.addTransaction({
            amount: +req.body.amount,
            location: req.body.place,
            // time: req.body.time,
            usernfc: req.body.usernfc,
            username: req.body.username,
            usercontact: req.body.usercontact
        });
        console.log(result.success);
        res.send({success: result.success, data: usage.get()})
    }).catch((err) => {
        console.log('Internal Server Error');
        res.send("Error");
    })
});

router.get('/username/:username', (req, res) => {
    db.models.BlockChain.findAll({
        where: {username : req.params.username}
    }).then((transactions) => {
        if(transactions.length !== 0)
        res.send({success: true, data: transactions});
        else
            res.send({success: false});
    }).catch((e) => {
        console.log(err);
        res.send({success: false, error: e});
    })
})

router.get('/location/:location', (req, res) => {
    db.models.BlockChain.findAll({
        where: {location : req.params.location}
    }).then((transactions) => {
        if(transactions.length !== 0)
            res.send({success: true, data: transactions});
        else
            res.send({success: false});
    }).catch((e) => {
        console.log(err);
        res.send({success: false, error: e});
    })
})

module.exports = router;