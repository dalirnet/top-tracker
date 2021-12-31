import Api from '../lib/Api.js'
import { UserInterface } from '../lib/ApiInterface.js'

class TerminateAccount extends Api {
    static METHOD = 'DELETE'
    static ENDPOINT = '/users/$id'
    static DESC = 'Terminate account'
    static INPUT = {
        access_token: 'isString',
    }
    static OUTPUT = {
        user: UserInterface,
    }
}

export default TerminateAccount
