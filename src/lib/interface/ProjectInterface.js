import TrackingRequirementsInterface from './TrackingRequirementsInterface.js'
import SimplifiedProfileInterface from './SimplifiedProfileInterface.js'
import ProjectBudgetInterface from './ProjectBudgetInterface.js'

export default {
    id: 'isNumber',
    name: 'isString',
    archived_at: 'isString',
    abilities: ['isString'],
    currency: 'isString',
    admin_id: 'isNumber',
    last_activity_time: 'isString',
    current_user: {
        role: 'isString',
        joined: 'isISODate',
        creator: 'isBoolean',
    },
    profiles_ids: ['isNumber'],
    pending_invitation_ids: [],
    is_admin_client: 'isBoolean',
    created_at: 'isISODate',
    engagement_ids: ['isNumber'],
    budget: ProjectBudgetInterface,
    billable: 'isBoolean',
    admin_profile: SimplifiedProfileInterface,
    tracking_requirements: TrackingRequirementsInterface,
    invoicing_schedule: {
        schedule_type: 'isString',
        period: 'isString',
        day: 'isNumber',
    },
    stats: {
        number_of_workers: 'isNumber',
    },
}
