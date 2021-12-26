import Api from '../lib/Api.js'

class GetCountries extends Api {
    static METHOD = 'GET'
    static ENDPOINT = '/countries'
    static DESC = 'Get countries list'
    static OUTPUT = [
        {
            id: 'isNumber',
            name: 'isString',
        },
    ]
}

export default GetCountries
