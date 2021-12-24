import Api from '../lib/Api.js'

class GetCurrencies extends Api {
    static method = 'GET'
    static endpoint = '/payments/currencies'

    constructor() {
        super(GetCurrencies.endpoint, GetCurrencies.method)
    }

    call() {
        return super.call().then(({ currencies }) => {
            return currencies
        })
    }
}

export default GetCurrencies
