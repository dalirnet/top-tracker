import Api from '../../lib/Api.js'

describe('Api class', () => {
    test('extract parameters from endpoint', () => {
        const parameters = new Api().extractParametersFromEndpoint('/endpoint/:path/:other_path')
        expect(parameters).toMatchObject({
            ':path': 'path',
            ':other_path': 'otherPath',
        })
    })
    test('fill endpoint parameters', () => {
        const endpoint = '/endpoint/:path/:other_path'
        const finalEndpoint = '/endpoint/valueOfPath/valueOfOtherPath'
        const testOne = new Api().fillEndpointParameters(endpoint, {
            path: 'valueOfPath',
            other_path: 'valueOfOtherPath',
        })
        const testTwo = new Api().fillEndpointParameters(endpoint, {
            path: 'valueOfPath',
            otherPath: 'valueOfOtherPath',
        })
        expect(testOne).toBe(finalEndpoint)
        expect(testTwo).toBe(finalEndpoint)
    })
    test('throw InvalidHTTPMethodError', () => {
        expect(() => {
            new Api('PATCH')
        }).toThrow("'PATCH' isn't a valid HTTP method.")
    })
    test('throw MissingEndpointParameterError', () => {
        expect(() => {
            new Api('GET', '/endpoint/:id')
        }).toThrow("Missing required endpoint parameter for 'id'.")
    })
    test('throw MalformedRequestError', () => {
        return new Api('GET', '/malforemd/request').call().catch(({ message }) => {
            expect(message).toBe("Malformed request. 'Not Found'")
        })
    })
})
