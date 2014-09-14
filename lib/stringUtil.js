/*jslint node: true */

/**
 * Escapes Regex characters from text
 *
 * @param text
 * @returns {*|XML|string|void}
 */
exports.escapeRegExpChars = function (text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};
