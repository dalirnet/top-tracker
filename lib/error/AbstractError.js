import _ from 'lodash'

class AbstractError extends Error {
    static MESSAGE = 'Unknown api error.'

    constructor(message, payload) {
        super(AbstractError.createMessage(message, payload))
    }

    static createMessage(message = AbstractError.MESSAGE, payload = {}) {
        return _.reduce(
            payload,
            (keepMessage, value, key) => {
                return _.replace(keepMessage, `{${key}}`, `'${value}'`)
            },
            message
        )
    }
}

export default AbstractError
