/**
 * Created by jed on 6/18/2016.
 */

var mongoose = require('mongoose');

var teamsSchema = new mongoose.Schema({
    teamName: {
        type: String,
        required: true
    },

    skip: {
        type: String,
        required: true
    },

    third: {
        type: String,
        required: true
    },

    second:{
        type: String,
        required: true
    },

    lead: {
        type: String,
        required: true
    },

    club: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('teams', teamsSchema);