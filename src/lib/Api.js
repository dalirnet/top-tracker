import _ from 'lodash'
import Superagent from 'superagent'
import { InvalidHTTPMethodError, MissingEndpointParameterError, MalformedRequestError } from './ApiError.js'

_.mixin({
    isISODate(value) {
        return Date.parse(value) > 0
    },
    isTrue(value) {
        return value === true
    },
    isFalse(value) {
        return value === false
    },
})

class Api {
    static TODO = false
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
        const type = this.outputRootType()
        if (!_[type](output)) {
            return [{ type, output }]
        }

        const flatten = {
            subject: this.flatOutput(this.OUTPUT),
            target: this.flatOutput(output),
        }

        if (_.isObjectLike(flatten.subject)) {
            const unequal = _.reduce(
                flatten.subject,
                (unequal, type, key) => {
                    const output = _.get(flatten.target, key, _.includes(key, '.') ? null : undefined)
                    if (!_[type](output) && !_.isNull(output)) {
                        unequal.push({ key, type, output })
                    }

                    return unequal
                },
                []
            )
            if (!_.isEmpty(unequal)) {
                return unequal
            }
        } else {
            if (!_[flatten.subject](flatten.target)) {
                return [{ type: flatten.subject, output: flatten.target }]
            }
        }

        return true
    }

    static extractEndpointParameters(endpoint) {
        return _.reduce(
            _.sortBy(endpoint.match(/\$([^/$]*)/g), (parameter) => {
                return parameter.length * -1
            }),
            (parameters, parameter) => {
                return _.set(parameters, parameter, _.camelCase(_.trim(parameter, '$')))
            },
            {}
        )
    }

    initMethod(method) {
        if (_.has(Api.METHODS, _.toUpper(method))) {
            return _.toLower(method)
        }

        throw new InvalidHTTPMethodError({ method })
    }

    initEndpoint(endpoint, parameters = {}) {
        return _.reduce(
            Api.extractEndpointParameters(endpoint),
            (keepRawEndpoint, key, match) => {
                const parameter = _.get(parameters, key, _.get(parameters, _.snakeCase(key)))
                if (parameter) {
                    return _.replace(keepRawEndpoint, match, parameter)
                }

                throw new MissingEndpointParameterError({ parameter: key })
            },
            endpoint
        )
    }

    call(input = {}) {
        return new Promise((resolve, reject) => {
            return Superagent[this.method](this.endpointUrl)
                [this.methodBodyFunction](input)
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
                    } else if (response.type === 'application/json') {
                        resolve(response.body)
                    } else {
                        resolve(JSON.parse(response.text))
                    }
                })
                .catch(({ status, message, response = {} }) => {
                    reject(
                        new MalformedRequestError({
                            status,
                            message,
                            url: _.get(response, 'request.url'),
                            payload: _.get(response, 'body.errors'),
                        })
                    )
                })
        })
    }
}

export default Api
