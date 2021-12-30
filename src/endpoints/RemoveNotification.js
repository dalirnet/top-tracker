import Api from '../lib/Api.js'

class RemoveNotification extends Api {
    static TODO = true
    static METHOD = 'DELETE'
    static ENDPOINT = '/notifications/$id'
    static DESC = 'Remove a notification'
    static INPUT = {
        access_token: 'isString',
    }
}

export default RemoveNotification
