// 1XX
exports.CONTINUE = 100;
exports.SWITCHING_PROTOCOLS = 101;
exports.PROCESSING = 102;

// 2XX
exports.OK = 200;
exports.CREATED = 201;
exports.ACCEPTED = 202;
exports.NON_AUTHORITATIVE_INFORMATION = 203;
exports.NO_CONTENT = 204;
exports.RESET_CONTENT = 205;
exports.PARTIAL_CONTENT = 206;
exports.MULTI_STATUS = 207;

// 3XX
exports.MULTIPLE_CHOICES = 300;
exports.MOVED_PERMANENTLY = 301;
exports.MOVED_TEMPORARILY = 302;
exports.SEE_OTHER = 303;
exports.NOT_MODIFIED = 304;
exports.USE_PROXY = 305;
exports.TEMPORARY_REDIRECT = 307;

// 4XX
exports.BAD_REQUEST = 400;
exports.UNAUTHORIZED = 401;
exports.PAYMENT_REQUIRED = 402;
exports.FORBIDDEN = 403;
exports.NOT_FOUND = 404;
exports.METHOD_NOT_ALLOWED = 405;
exports.NOT_ACCEPTABLE = 406;
exports.PROXY_AUTHENTICATION_REQUIRED = 407;
exports.REQUEST_TIMEOUT = 408;
exports.CONFLICT = 409;
exports.GONE = 410;
exports.LENGTH_REQUIRED = 411;
exports.PRECONDITION_FAILED = 412;
exports.REQUEST_TOO_LONG = 413;
exports.REQUEST_URI_TOO_LONG = 414;
exports.UNSUPPORTED_MEDIA_TYPE = 415;
exports.REQUESTED_RANGE_NOT_SATISFIABLE = 416;
exports.EXPECTATION_FAILED = 417;
exports.INSUFFICIENT_SPACE_ON_RESOURCE = 419;
exports.METHOD_FAILURE = 420;
exports.UNPROCESSABLE_ENTITY = 422;
exports.LOCKED = 423;

// 5XX
exports.INTERNAL_SERVER_ERROR = 500;
exports.NOT_IMPLEMENTED = 501;
exports.BAD_GATEWAY = 502;
exports.SERVICE_UNAVAILABLE = 503;
exports.GATEWAY_TIMEOUT = 504;
exports.HTTP_VERSION_NOT_SUPPORTED = 505;
exports.INSUFFICIENT_STORAGE = 507;


exports.getStatusText = function (statusCode) {
    if (statusCodes.hasOwnProperty(statusCode)) {
        return statusCodes[statusCode];
    } else {
        return 'Status code ' + statusCode + ' does not exist';

    }
};

var statusCodes = {};

statusCodes[this.ACCEPTED] = "Accepted";
statusCodes[this.BAD_GATEWAY] = "Bad Gateway";
statusCodes[this.BAD_REQUEST] = "Bad Request";
statusCodes[this.CONFLICT] = "Conflict";
statusCodes[this.CONTINUE] = "Continue";
statusCodes[this.CREATED] = "Created";
statusCodes[this.EXPECTATION_FAILED] = "Expectation Failed";
statusCodes[this.FORBIDDEN] = "Forbidden";
statusCodes[this.GATEWAY_TIMEOUT] = "Gateway Timeout";
statusCodes[this.GONE] = "Gone";
statusCodes[this.HTTP_VERSION_NOT_SUPPORTED] = "HTTP Version Not Supported";
statusCodes[this.INSUFFICIENT_SPACE_ON_RESOURCE] = "Insufficient Space on Resource";
statusCodes[this.INSUFFICIENT_STORAGE] = "Insufficient Storage";
statusCodes[this.INTERNAL_SERVER_ERROR] = "Server Error";
statusCodes[this.LENGTH_REQUIRED] = "Length Required";
statusCodes[this.LOCKED] = "Locked";
statusCodes[this.METHOD_FAILURE] = "Method Failure";
statusCodes[this.METHOD_NOT_ALLOWED] = "Method Not Allowed";
statusCodes[this.MOVED_PERMANENTLY] = "Moved Permanently";
statusCodes[this.MOVED_TEMPORARILY] = "Moved Temporarily";
statusCodes[this.MULTI_STATUS] = "Multi-Status";
statusCodes[this.MULTIPLE_CHOICES] = "Multiple Choices";
statusCodes[this.NO_CONTENT] = "No Content";
statusCodes[this.NON_AUTHORITATIVE_INFORMATION] = "Non Authoritative Information";
statusCodes[this.NOT_ACCEPTABLE] = "Not Acceptable";
statusCodes[this.NOT_FOUND] = "Not Found";
statusCodes[this.NOT_IMPLEMENTED] = "Not Implemented";
statusCodes[this.NOT_MODIFIED] = "Not Modified";
statusCodes[this.OK] = "OK";
statusCodes[this.PARTIAL_CONTENT] = "Partial Content";
statusCodes[this.PAYMENT_REQUIRED] = "Payment Required";
statusCodes[this.PRECONDITION_FAILED] = "Precondition Failed";
statusCodes[this.PROCESSING] = "Processing";
statusCodes[this.PROXY_AUTHENTICATION_REQUIRED] = "Proxy Authentication Required";
statusCodes[this.REQUEST_TIMEOUT] = "Request Timeout";
statusCodes[this.REQUEST_TOO_LONG] = "Request Entity Too Large";
statusCodes[this.REQUEST_URI_TOO_LONG] = "Request-URI Too Long";
statusCodes[this.REQUESTED_RANGE_NOT_SATISFIABLE] = "Requested Range Not Satisfiable";
statusCodes[this.RESET_CONTENT] = "Reset Content";
statusCodes[this.SEE_OTHER] = "See Other";
statusCodes[this.SERVICE_UNAVAILABLE] = "Service Unavailable";
statusCodes[this.SWITCHING_PROTOCOLS] = "Switching Protocols";
statusCodes[this.TEMPORARY_REDIRECT] = "Temporary Redirect";
statusCodes[this.UNAUTHORIZED] = "Unauthorized";
statusCodes[this.UNPROCESSABLE_ENTITY] = "Unprocessable Entity";
statusCodes[this.UNSUPPORTED_MEDIA_TYPE] = "Unsupported Media Type";
statusCodes[this.USE_PROXY] = "Use Proxy";
