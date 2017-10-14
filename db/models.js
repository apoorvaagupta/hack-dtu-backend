const Sequelize = require('sequelize');

const db = new Sequelize('hackdtu', 'hackdtu', 'hackdtu', {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres'
});

const Usage = db.define('usage', {
    id: {type: Sequelize.DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    amount: Sequelize.DataTypes.INTEGER,
    location: Sequelize.DataTypes.STRING,
    time: Sequelize.DataTypes.DATE,
    usernfc: Sequelize.DataTypes.STRING,
    username: Sequelize.DataTypes.STRING,
    usercontact: Sequelize.DataTypes.STRING
});


const BlockChain = db.define('blockchain', {
    id: {type: Sequelize.DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    index: Sequelize.DataTypes.INTEGER,
    timestamp: Sequelize.DataTypes.STRING,
    data: Sequelize.DataTypes.STRING(1234),
    previousHash: Sequelize.DataTypes.STRING(1234),
    hash: Sequelize.DataTypes.STRING(1234)
});

db.sync({force: false}).then(() => {
    console.log('Database configured')
});

module.exports = {
    models: {
        Usage,
        BlockChain
    }
};