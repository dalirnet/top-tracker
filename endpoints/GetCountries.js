import Api from '../lib/Api.js'
class GetCountries extends Api {
    static METHOD = 'GET'
    static ENDPOINT = '/countries'
    static OUTPUT = [{ id: Number, name: String }]

    constructor() {
        super(GetCountries.METHOD, GetCountries.ENDPOINT)
    }
}

export default GetCountries
