import Api from '../lib/Api.js'
import { UserInterface, ProfileInterface } from '../lib/ApiInterface.js'

class SignIn extends Api {
    static METHOD = 'POST'
    static ENDPOINT = '/sessions'
    static DESC = 'Signin and get session'
    static INPUT = {
        email: 'isString',
        password: 'isString',
        remember_me: 'isBoolean',
        profile: 'isString',
    }
    static OUTPUT = {
        access_token: 'isString',
        user: UserInterface,
        profiles: [ProfileInterface],
    }
}

export default SignIn
