import AbstractError from './AbstractError.js'

class InvalidHTTPMethodError extends AbstractError {
    static MESSAGE = "{method} isn't a valid HTTP method."

    constructor(payload = { method: 'unknonw' }) {
        super(InvalidHTTPMethodError.MESSAGE, payload)
    }
}

export default InvalidHTTPMethodError
