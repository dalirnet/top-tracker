import ApiError from '../../src/lib/ApiError.js'

test('throw AbstractError', () => {
    expect(() => {
        throw new ApiError.unknown()
    }).toThrow('Unknown api error.')
})
test('throw InvalidHTTPMethodError', () => {
    expect(() => {
        throw new ApiError.invalidHTTPMethod({ method: 'OPTIONS' })
    }).toThrow("'OPTIONS' isn't a valid HTTP method.")
})
test('throw MissingEndpointParameterError', () => {
    expect(() => {
        throw new ApiError.missingEndpointParameter({ parameter: 'id' })
    }).toThrow("Missing required endpoint parameter for 'id'.")
})
test('throw MalformedRequestError', () => {
    expect(() => {
        throw new ApiError.malformedRequest({ status: '500', message: 'Internal error' })
    }).toThrow("Malformed request. '500' 'Internal error'")
})
