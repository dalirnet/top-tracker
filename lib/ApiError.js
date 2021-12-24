import _ from 'lodash'

class ApiError extends Error {
    static errors = {
        UNKNOWN: 'Unknown error.',
        MISSING_URL_PARAMETER: "Missing required url parameter for '{parameter}'.",
        INVALID_HTTP_METHOD: "'{method}' isn't a valid HTTP method.",
        MALFORMED_REQUEST: "Malformed request. '{message}'",
    }

    static createError(key, parameters) {
        const rawMessage = _.get(ApiError.errors, _.toUpper(_.snakeCase(key)), ApiError.errors.UNKNOWN)
        const replacedMessage = _.reduce(
            parameters,
            (message, value, key) => {
                return _.replace(message, `{${key}}`, value)
            },
            rawMessage
        )

        return replacedMessage
    }

    constructor(key, parameters) {
        super(ApiError.createError(key, parameters))
    }
}

export default ApiError
