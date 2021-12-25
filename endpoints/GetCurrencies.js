import Api from '../lib/Api.js'
class GetCurrencies extends Api {
    static METHOD = 'GET'
    static ENDPOINT = '/payments/currencies'
    static OUTPUT = [{ id: Number, name: String }]

    call() {
        return super.call().then(({ currencies }) => {
            return currencies
        })
    }
}

export default GetCurrencies
