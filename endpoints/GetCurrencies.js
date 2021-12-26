import Api from '../lib/Api.js'

class GetCurrencies extends Api {
    static METHOD = 'GET'
    static ENDPOINT = '/payments/currencies'
    static DESC = 'Get currencies list'
    static INPUT = { id: 'isNumber' }
    static OUTPUT = [
        {
            id: 'isNumber',
            name: 'isString',
            code: 'isString',
            symbol: 'isString',
        },
    ]

    call() {
        return super.call().then(({ currencies }) => {
            return currencies
        })
    }
}

export default GetCurrencies
