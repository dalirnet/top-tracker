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

    constructor(endpointParameters = {}) {
        this.method = this.initMethod(this.constructor.METHOD)
        this.endpoint = this.initEndpoint(this.constructor.ENDPOINT, endpointParameters)
    }

    static outputType(output) {
        if (_.isArray(this.OUTPUT)) {
            return _.isArray(output)
        }
        if (_.isPlainObject(this.OUTPUT)) {
            return _.isPlainObject(output)
        }
        if (_.isString(this.OUTPUT)) {
            return _.isString(output)
        }
        if (_.isNumber(this.OUTPUT)) {
            return _.isNumber(output)
        }

        return false
    }

    extractParametersFromEndpoint(endpoint) {
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

    fillEndpointParameters(endpoint, parameters = {}) {
        return _.reduce(
            this.extractParametersFromEndpoint(endpoint),
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

    initMethod(method) {
        if (_.has(Api.METHODS, _.toUpper(method))) {
            return _.toLower(method)
        }

        throw new ApiError.invalidHTTPMethod({ method })
    }

    initEndpoint(endpoint, parameters) {
        return `${_.trimEnd(Api.ROOT, '/')}/${_.trimStart(this.fillEndpointParameters(endpoint, parameters), '/')}`
    }

    agent(body = {}) {
        return Superagent[this.method](this.endpoint)[Api.METHODS[_.toUpper(this.method)]](body)
    }

    call(body) {
        return new Promise((resolve, reject) => {
            return this.agent(body)
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
