import _ from 'lodash'
import Superagent from 'superagent'
import ApiError from './ApiError.js'

class Api {
    static METHOD = 'GET'
    static METHODS = { GET: 'query', POST: 'send', PUT: 'send', DELETE: 'send' }
    static ROOT = 'https://tracker-api.toptal.com/'
    static ENDPOINT = '/'
    static INPUT = {}
    static OUTPUT = {}
    static OUTPUT_TYPES = ['isArray', 'isPlainObject', 'isString', 'isNumber']

    constructor(endpointParameters = {}) {
        this.method = this.initMethod(this.constructor.METHOD)
        this.endpoint = this.initEndpoint(this.constructor.ENDPOINT, endpointParameters)
    }

    get methodBodyFunction() {
        return Api.METHODS[_.toUpper(this.method)]
    }

    get endpointUrl() {
        return _.trimEnd(Api.ROOT, '/') + '/' + _.trimStart(this.endpoint, '/')
    }

    static outputType(output) {
        let state = false
        _.each(this.OUTPUT_TYPES, (type) => {
            if (_[type](this.OUTPUT)) {
                state = _[type](output)
                return false
            }
        })

        return state
    }

    initMethod(method) {
        if (_.has(Api.METHODS, _.toUpper(method))) {
            return _.toLower(method)
        }

        throw new ApiError.invalidHTTPMethod({ method })
    }

    extractEndpointParameters(endpoint) {
        return _.reduce(
            _.sortBy(endpoint.match(/:([^/:]*)/g), (parameter) => {
                return parameter.length * -1
            }),
            (parameters, parameter) => {
                return _.set(parameters, parameter, _.camelCase(_.trim(parameter, ':')))
            },
            {}
        )
    }

    initEndpoint(endpoint, parameters = {}) {
        return _.reduce(
            this.extractEndpointParameters(endpoint),
            (keepRawEndpoint, key, match) => {
                const parameter = _.get(parameters, key, _.get(parameters, _.snakeCase(key)))
                if (parameter) {
                    return _.replace(keepRawEndpoint, match, parameter)
                }

                throw new ApiError.missingEndpointParameter({ parameter: key })
            },
            endpoint
        )
    }

    call(body = {}) {
        return new Promise((resolve, reject) => {
            return Superagent[this.method](this.endpointUrl)
                [this.methodBodyFunction](body)
                .accept('json')
                .then((response) => {
                    if (response.type === 'application/octet-stream') {
                        const buffers = []
                        response
                            .on('data', (chunk) => {
                                buffers.push(chunk)
                            })
                            .on('end', () => {
                                resolve(JSON.parse(Buffer.concat(buffers)))
                            })
                    } else {
                        resolve(response.body)
                    }
                })
                .catch(({ message }) => {
                    reject(new ApiError.malformedRequest({ message }))
                })
        })
    }
}

export default Api
