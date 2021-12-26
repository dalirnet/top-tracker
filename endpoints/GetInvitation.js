import Api from '../lib/Api.js'

class GetInvitation extends Api {
    static TODO = true
    static METHOD = 'GET'
    static ENDPOINT = '/invitations/:token'
    static DESC = 'Get inavtion'
}

export default GetInvitation
