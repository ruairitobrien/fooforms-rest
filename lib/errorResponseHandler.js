var log = require('fooforms-logging').LOG;
var statusCodes = require('./statusCodes');
/**
 * A basic utility method for returning errors in API calls.
 *
 * @param res - the response to send the error in
 * @param err - The error object. Can be a message.
 * @param file - The file where the error occurred (optional and for logging purposes only)
 */
exports.handleError = function (res, err, file) {
    try {
        var responseCode = statusCodes.INTERNAL_SERVER_ERROR;
        if (err && err.http_code) {
            responseCode = err.http_code;
        }
        if (file) {
            log.error(file, '-', err);
        } else {
            log.error(err);
        }
        res.status(responseCode);
        res.send(err);
    } catch (err) {
        log.error(err);
        res.status(statusCodes.INTERNAL_SERVER_ERROR).send('Something bad happened');
    }
};

