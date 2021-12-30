import _ from 'lodash'
import Api from '../lib/Api.js'

class SignOut extends Api {
    static METHOD = 'DELETE'
    static ENDPOINT = '/sessions/me'
    static DESC = 'Signout and remove session'
    static INPUT = {
        access_token: 'isString',
    }
    static OUTPUT = 'isTrue'

    call(input) {
        return super
            .call(input)
            .then((output) => {
                return _.isEmpty(output)
            })
            .catch(() => {
                return false
            })
    }
}

export default SignOut
