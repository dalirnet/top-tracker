import AbstractError from './AbstractError.js'

class MalformedRequestError extends AbstractError {
    static MESSAGE = 'Malformed request. {message}'

    constructor(payload = { message: 'unknonw' }) {
        super(MalformedRequestError.MESSAGE, payload)
    }
}

export default MalformedRequestError
