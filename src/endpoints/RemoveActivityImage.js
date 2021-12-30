import Api from '../lib/Api.js'

class RemoveActivityImage extends Api {
    static TODO = true
    static METHOD = 'DELETE'
    static ENDPOINT = '/activities/images/$id'
    static DESC = 'Remove an image from activity'
    static INPUT = {
        access_token: 'isString',
    }
}

export default RemoveActivityImage
