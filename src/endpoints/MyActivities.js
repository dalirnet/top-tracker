import _ from 'lodash'
import Api from '../lib/Api.js'
import { ActivityInterface } from '../lib/ApiInterface.js'

class MyActivities extends Api {
    static METHOD = 'GET'
    static ENDPOINT = '/activities/my'
    static DESC = 'Get my activities'
    static INPUT = {
        access_token: 'isString',
        project_ids: ['isNumber'],
        start_date: 'isISODate',
        end_date: 'isISODate',
    }
    static OUTPUT = [ActivityInterface]

    call({ access_token, project_ids, start_date, end_date }) {
        const input = {
            access_token,
            project_ids: project_ids || 'all',
            start_date: start_date || new Date(Date.now() - 86400000 * 10).toISOString(),
            end_date: end_date || new Date().toISOString(),
        }
        if (input.project_ids !== 'all') {
            delete input.project_ids
            input['project_ids[]'] = project_ids
        }

        return super.call(input).then(({ dates = [] }) => {
            return _.flatMap(dates, 'activities')
        })
    }
}

export default MyActivities
