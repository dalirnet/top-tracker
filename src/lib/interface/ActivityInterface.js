import ShotInterface from './ShotInterface.js'
import SimplifiedShotInterface from './SimplifiedShotInterface.js'

export default {
    id: 'isNumber',
    description: 'isString',
    offline: 'isBoolean',
    offline_type: 'isString',
    user_id: 'isNumber',
    project_id: 'isNumber',
    start_time: 'isISODate',
    end_time: 'isISODate',
    abilities: ['isString'],
    user_agent: {
        client: 'isString',
        version: 'isString',
        os_type: 'isString',
        os_version: 'isString',
    },
    changed_manually: 'isBoolean',
    invoice_custom_id: 'isNumber',
    mouse_clicks: 'isNumber',
    keyboard_hits: 'isNumber',
    shot_ids: ['isNumber'],
    screenshot_count: 'isNumber',
    duration: 'isNumber',
    project_name: 'isString',
    last_shot: SimplifiedShotInterface,
    shots: [ShotInterface],
}
