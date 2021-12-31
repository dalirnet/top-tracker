import Api from '../lib/Api.js'
import { UserInterface, ProfileInterface } from '../lib/ApiInterface.js'

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
        user: UserInterface,
        profiles: [ProfileInterface],
    }
}

export default SignUp
