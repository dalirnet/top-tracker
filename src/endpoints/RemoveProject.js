import Api from '../lib/Api.js'

class RemoveProject extends Api {
    static TODO = true
    static METHOD = 'DELETE'
    static ENDPOINT = '/projects/$id'
    static DESC = 'Remove a project'
    static INPUT = {
        access_token: 'isString',
    }
}

export default RemoveProject
