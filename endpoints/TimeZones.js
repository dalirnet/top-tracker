import Api from '../lib/Api.js'

class TimeZones extends Api {
    static METHOD = 'GET'
    static ENDPOINT = '/time_zones'
    static DESC = 'Get time zones list'
    static OUTPUT = [
        {
            value: 'isString',
            label: 'isString',
        },
    ]
}

export default TimeZones
