'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DepositionRequestSchema = new Schema({
    ipfsHash: String,
    remoteAddress: String,
    submittedAt: {type: Date, default: Date.now},
    state: {type: String, default: 'new'}
});

mongoose.model('DepositionRequest', DepositionRequestSchema);
