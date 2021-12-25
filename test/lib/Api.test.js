import Api from '../../lib/Api.js'

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
    class TestApi extends Api {
        static METHOD = 'PATCH'
    }
    expect(() => {
        new TestApi()
    }).toThrow("'PATCH' isn't a valid HTTP method.")
})
test('throw MissingEndpointParameterError', () => {
    class TestApi extends Api {
        static ENDPOINT = '/endpoint/:id'
    }
    expect(() => {
        new TestApi()
    }).toThrow("Missing required endpoint parameter for 'id'.")
})
test('throw MalformedRequestError', () => {
    return new Api('GET', '/malforemd/request').call().catch(({ message }) => {
        expect(message).toBe("Malformed request. 'Not Found'")
    })
})
