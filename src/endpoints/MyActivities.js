import Api from '../lib/Api.js'

class MyActivities extends Api {
    static METHOD = 'GET'
    static ENDPOINT = '/activities/my'
    static DESC = 'Get my activities'
    static INPUT = {
        access_token: 'isString',
        project_ids: ['isNumber'],
        start_date: 'isodate',
        end_date: 'isodate',
    }
    static OUTPUT = {}
}

export default MyActivities
