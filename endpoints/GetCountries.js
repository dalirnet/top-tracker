import Api from '../lib/Api.js'

class GetCountries extends Api {
    static method = 'GET'
    static endpoint = '/countries'

    constructor(parameters = {}) {
        super(GetCountries.endpoint, GetCountries.method, parameters)
    }

    call(body = {}) {
        return super.call(body).then((json) => {
            return json
        })
    }
}

export default GetCountries
