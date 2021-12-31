import * as ApiError from '../../src/lib/ApiError.js'

test('throw AbstractError', () => {
    expect(() => {
        throw new ApiError.UnknownError()
    }).toThrow('Unknown api error.')
})
test('throw InvalidHTTPMethodError', () => {
    expect(() => {
        throw new ApiError.InvalidHTTPMethodError({ method: 'OPTIONS' })
    }).toThrow("'OPTIONS' isn't a valid HTTP method.")
})
test('throw MissingEndpointParameterError', () => {
    expect(() => {
        throw new ApiError.MissingEndpointParameterError({ parameter: 'id' })
    }).toThrow("Missing required endpoint parameter for 'id'.")
})
test('throw MalformedRequestError', () => {
    expect(() => {
        throw new ApiError.MalformedRequestError({ status: '500', message: 'Internal error' })
    }).toThrow("Malformed request. '500' 'Internal error'")
})
