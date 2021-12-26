import Api from '../lib/Api.js'

class GetCountries extends Api {
    static METHOD = 'GET'
    static ENDPOINT = '/countries/:name'
    static DESC = 'Get countries list'
    static INPUT = undefined
    static OUTPUT = [
        {
            id: 'isNumber',
            name: 'isString',
        },
    ]
}

export default GetCountries
