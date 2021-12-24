import _ from 'lodash'
import Superagent from 'superagent'
import ApiError from './ApiError.js'

class Api {
    static root = 'https://tracker-api.toptal.com/'
    static methods = {
        GET: 'query',
        POST: 'send',
        PUT: 'send',
        DELETE: 'send',
    }

    constructor(endpoint = '/', method = 'get', parameters = {}) {
        this._endpoint = endpoint
        this._method = method
        this._parameters = parameters
    }

    get requestEndpoint() {
        const matchedParameters = this._endpoint.match(/:([^/:]*)/g)
        const sortedParameters = _.sortBy(matchedParameters, (parameter) => parameter.length * -1)
        const replacedUrl = _.reduce(
            sortedParameters,
            (url, match) => {
                const parameterKey = _.trim(match, ':')
                const parameterValue = _.get(this._parameters, parameterKey)
                if (parameterValue) {
                    return _.replace(url, match, parameterValue)
                }

                throw new ApiError('MISSING_URL_PARAMETER', { parameter: parameterKey })
            },
            this._endpoint
        )

        return _.trimEnd(Api.root, '/') + '/' + _.trimStart(replacedUrl, '/')
    }

    get requestMethod() {
        const method = _.toUpper(this._method)
        if (_.has(Api.methods, method)) {
            return method
        }

        throw new ApiError('INVALID_HTTP_METHOD', { method })
    }

    agent(method, endpoint, body = {}) {
        const methodName = _.toLower(method)
        const methodBodyFunction = Api.methods[method]

        return Superagent[methodName](endpoint)[methodBodyFunction](body)
    }

    call(body = {}) {
        return new Promise((resolve, reject) => {
            return this.agent(this.requestMethod, this.requestEndpoint, body)
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
                    reject(new ApiError('MALFORMED_REQUEST', { message }))
                })
        })
    }
}

export default Api
