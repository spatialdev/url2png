'use strict';

/**
 *
 * @param message - error message
 * @param status - HTTP status code
 * @constructor
 */

module.exports = function CustomError(message, status) {
    Error.captureStackTrace(this, this.constructor);
    this.name = this.constructor.name;
    this.message = message;
    this.status = status;
};
