import _ from 'lodash'
import Superagent from 'superagent'
import ApiError from './ApiError.js'

_.mixin({ isAny: () => true })

class Api {
    static METHOD = 'GET'
    static METHODS = { GET: 'query', POST: 'send', PUT: 'send', DELETE: 'send' }
    static DESC = 'Top tracker endpoint'
    static ROOT = 'https://tracker-api.toptal.com/'
    static ENDPOINT = '/'
    static INPUT = {}
    static OUTPUT = {}

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

    static outputRootType() {
        if (_.isObjectLike(this.OUTPUT)) {
            return _.isArray(this.OUTPUT) ? 'isArray' : 'isPlainObject'
        }

        return this.OUTPUT
    }

    static flatOutput(input, keep = {}, keys = []) {
        const subject = _.isArray(input) ? _.head(input) : input
        if (_.isObjectLike(subject)) {
            _.each(subject, (value, key) => {
                const flatKeys = [...keys, key]
                if (_.isObjectLike(value)) {
                    this.flatOutput(value, keep, flatKeys)
                } else {
                    keep[_.join(flatKeys, '.')] = value
                }
            })

            return keep
        }

        return subject
    }

    static outputMatch(output = {}) {
        if (!_[this.outputRootType()](output)) {
            return false
        }

        const flatten = {
            subject: this.flatOutput(this.OUTPUT),
            target: this.flatOutput(output),
        }

        if (_.isObjectLike(flatten.subject)) {
            return _.every(flatten.subject, (type, key) => {
                return _[type](_.get(flatten.target, key))
            })
        }

        return _[flatten.subject](flatten.target)
    }

    static extractEndpointParameters(endpoint) {
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

    initMethod(method) {
        if (_.has(Api.METHODS, _.toUpper(method))) {
            return _.toLower(method)
        }

        throw new ApiError.invalidHTTPMethod({ method })
    }

    initEndpoint(endpoint, parameters = {}) {
        return _.reduce(
            Api.extractEndpointParameters(endpoint),
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
