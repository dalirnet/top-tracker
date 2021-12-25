import AbstractError from './AbstractError.js'

class MissingEndpointParameterError extends AbstractError {
    static MESSAGE = 'Missing required endpoint parameter for {parameter}.'

    constructor(payload = { parameter: 'unknonw' }) {
        super(MissingEndpointParameterError.MESSAGE, payload)
    }
}

export default MissingEndpointParameterError
