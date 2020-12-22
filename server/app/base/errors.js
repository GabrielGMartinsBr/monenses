class AppRequestError extends Error {
    type;
    code;
    data;

    constructor({ type, message, code, data } = {}) {
        type = type || 'UnexpectedError';

        super(message || type);

        this.type = type;
        this.code = code;
        this.data = data;
    }
}

module.exports.AppRequestError = AppRequestError;
