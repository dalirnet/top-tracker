import Api from '../lib/Api.js'

class TerminateAccount extends Api {
    static METHOD = 'DELETE'
    static ENDPOINT = '/users/$id'
    static DESC = 'Terminate account'
    static INPUT = {
        access_token: 'isString',
    }
    static OUTPUT = {
        user: {
            id: 'isNumber',
            email: 'isString',
            name: 'isString',
            time_zone: 'isString',
            avatar_url: 'isString',
            company_name: 'isAny',
            invoice_due_period: 'isNumber',
            address: 'isAny',
            phone: 'isAny',
            currency: 'isAny',
            used_desktop: 'isBoolean',
            has_invoices: 'isBoolean',
            first_name: 'isAny',
            middle_name: 'isAny',
            last_name: 'isAny',
            city: 'isAny',
            country_id: 'isNumber',
        },
    }
}

export default TerminateAccount
