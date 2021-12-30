import Api from '../lib/Api.js'

class RemoveInvitation extends Api {
    static TODO = true
    static METHOD = 'DELETE'
    static ENDPOINT = '/invitations/$invitation_id'
    static DESC = 'Remove an invitation'
    static INPUT = {
        access_token: 'isString',
    }
}

export default RemoveInvitation
