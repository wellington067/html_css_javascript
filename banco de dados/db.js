const { ECDH } = require('crypto');
const Sequeize = require('sequelize');
const sequelize = new Sequeize ('nomedobanco', 'usuario', 'senha'),{dialect:'mysql', host:'localhost'};
module exports = sequelize;
