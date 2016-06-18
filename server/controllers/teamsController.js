/**
 * Created by jed on 6/18/2016.
 */

var Resource = require('resourcejs');

module.exports = function (app, route) {
    Resource(app, '', route, app.models.teams).rest();

    return function (req, res, next) {
        next()
    };
};