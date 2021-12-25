import Api from '../lib/Api.js'
class GetCountries extends Api {
    static METHOD = 'GET'
    static ENDPOINT = '/countries'
    static OUTPUT = [
        {
            id: 'isNumber',
            name: 'isString',
        },
    ]
}

export default GetCountries
