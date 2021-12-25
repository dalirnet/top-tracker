import Api from '../lib/Api.js'
class GetCurrencies extends Api {
    static METHOD = 'GET'
    static ENDPOINT = '/payments/currencies'

    call() {
        return super.call().then(({ currencies }) => {
            return currencies
        })
    }
}

export default GetCurrencies
