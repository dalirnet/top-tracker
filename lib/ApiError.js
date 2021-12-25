import AbstractError from './error/AbstractError.js'
import InvalidHTTPMethodError from './error/InvalidHTTPMethodError.js'
import MissingEndpointParameterError from './error/MissingEndpointParameterError.js'
import MalformedRequestError from './error/MalformedRequestError.js'

export default {
    unknown: AbstractError,
    invalidHTTPMethod: InvalidHTTPMethodError,
    missingEndpointParameter: MissingEndpointParameterError,
    malformedRequest: MalformedRequestError,
}
