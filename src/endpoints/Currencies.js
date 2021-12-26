import Api from '../lib/Api.js'

class Currencies extends Api {
    static METHOD = 'GET'
    static ENDPOINT = '/payments/currencies'
    static DESC = 'Get currencies'
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

export default Currencies
