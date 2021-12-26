import Api from '../lib/Api.js'

class Countries extends Api {
    static METHOD = 'GET'
    static ENDPOINT = '/countries'
    static DESC = 'Get countries'
    static OUTPUT = [
        {
            id: 'isNumber',
            name: 'isString',
        },
    ]
}

export default Countries
