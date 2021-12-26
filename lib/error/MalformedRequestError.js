import AbstractError from './AbstractError.js'

class MalformedRequestError extends AbstractError {
    static MESSAGE = 'Malformed request. {status} {message}'

    constructor({ status = 'unknonw', message = 'unknonw', payload = {} } = {}) {
        super(MalformedRequestError.MESSAGE, { status, message })
        this.payload = payload
    }
}

export default MalformedRequestError
