import ApiError from '../../lib/ApiError.js'

describe('ApiError class', () => {
    test('Test AbstractError', () => {
        expect(() => {
            throw new ApiError.unknown()
        }).toThrow('Unknown api error.')
    })
    test('Test InvalidHTTPMethodError', () => {
        expect(() => {
            throw new ApiError.invalidHTTPMethod({ method: 'OPTIONS' })
        }).toThrow("'OPTIONS' isn't a valid HTTP method.")
    })
    test('Test MissingEndpointParameterError', () => {
        expect(() => {
            throw new ApiError.missingEndpointParameter({ parameter: 'id' })
        }).toThrow("Missing required endpoint parameter for 'id'.")
    })
    test('Test MalformedRequestError', () => {
        expect(() => {
            throw new ApiError.malformedRequest({ message: 'test' })
        }).toThrow("Malformed request. 'test'")
    })
})
