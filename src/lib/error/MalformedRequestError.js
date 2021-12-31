import AbstractError from './AbstractError.js'

class MalformedRequestError extends AbstractError {
    static MESSAGE = 'Malformed request. {status} {message}'

    constructor({ status = 'unknonw', message = 'unknonw', url = null, payload = {} } = {}) {
        super(MalformedRequestError.MESSAGE, { status, message })
        this.url = url
        this.payload = payload
    }
}

export default MalformedRequestError
