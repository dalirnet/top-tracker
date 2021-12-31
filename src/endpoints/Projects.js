import Api from '../lib/Api.js'
import { ProjectInterface, SimplifiedUserInterface } from '../lib/ApiInterface.js'

class Projects extends Api {
    static METHOD = 'GET'
    static ENDPOINT = '/web/projects'
    static DESC = 'Get projects'
    static INPUT = {
        access_token: 'isString',
        archived: 'isBoolean',
    }
    static OUTPUT = {
        projects: [ProjectInterface],
        users: SimplifiedUserInterface,
    }
}

export default Projects
