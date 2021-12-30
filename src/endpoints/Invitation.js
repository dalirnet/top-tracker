import Api from '../lib/Api.js'

class Invitation extends Api {
    static TODO = true
    static METHOD = 'GET'
    static ENDPOINT = '/invitations/$token'
    static DESC = 'Get inavtion by token'
}

export default Invitation
