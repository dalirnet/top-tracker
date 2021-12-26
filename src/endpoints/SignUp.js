import Api from '../lib/Api.js'

class SignUp extends Api {
    static METHOD = 'POST'
    static ENDPOINT = '/users'
    static DESC = 'Signup and get session'
    static INPUT = {
        first_name: 'isString',
        last_name: 'isString',
        country_id: 'isNumber',
        city: 'isString',
        email: 'isString',
        password: 'isString',
        company_name: 'isString',
        time_zone: 'isString',
        type: 'isString',
    }
    static OUTPUT = {
        access_token: 'isString',
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
        profiles: [
            {
                id: 'isNumber',
                type: 'isString',
                name: 'isString',
                avatar_url: 'isString',
                company_name: 'isAny',
                address: 'isAny',
                phone: 'isAny',
                active: 'isBoolean',
            },
        ],
    }
}

export default SignUp
