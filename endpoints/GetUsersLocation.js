import Api from '../lib/Api.js'

class GetUsersLocation extends Api {
    static TODO = true
    static METHOD = 'GET'
    static ENDPOINT = '/users/location'
    static DESC = 'Get users location'
    static OUTPUT = {
        code: 'isString',
        country: 'isString',
        city: 'isAny',
        in_eu: 'isBoolean',
        prohibited: 'isBoolean',
        prohibited_region: 'isAny',
    }
}

export default GetUsersLocation
