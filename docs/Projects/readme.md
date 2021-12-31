# Projects

Get projects

#### Sample

```js
import { Projects } from 'top-tracker'

const parameters = {}
const input = {}

new Projects(parameters)
    .call(input)
    .then((output) => {})
    .catch(({ message, payload }) => {})
```

-   **Parameters**

```js
/* whitout parameters */
```

-   **Input**

```json
{
    "access_token": "isString",
    "archived": "isBoolean"
}
```

-   **Output**

```json
{
    "projects": [
        {
            "id": "isNumber",
            "name": "isString",
            "archived_at": "isString",
            "abilities": [
                "isString"
            ],
            "currency": "isString",
            "admin_id": "isNumber",
            "last_activity_time": "isString",
            "current_user": {
                "role": "isString",
                "joined": "isISODate",
                "creator": "isBoolean"
            },
            "profiles_ids": [
                "isNumber"
            ],
            "pending_invitation_ids": [],
            "is_admin_client": "isBoolean",
            "created_at": "isISODate",
            "engagement_ids": [
                "isNumber"
            ],
            "budget": {
                "amount": "isString",
                "limited": "isBoolean",
                "rate_type": "isString",
                "used": "isNumber"
            },
            "billable": "isBoolean",
            "admin_profile": {
                "id": "isNumber",
                "name": "isString",
                "avatar_url": "isString",
                "address": "isString",
                "phone": "isString",
                "active": "isBoolean"
            },
            "tracking_requirements": {
                "mouse": "isBoolean",
                "keyboard": "isBoolean",
                "screenshots": "isBoolean",
                "web_tracker": "isBoolean",
                "desktop_tracker": "isBoolean",
                "manual_time_entry": "isBoolean",
                "screenshots_interval": "isNumber"
            },
            "invoicing_schedule": {
                "schedule_type": "isString",
                "period": "isString",
                "day": "isNumber"
            },
            "stats": {
                "number_of_workers": "isNumber"
            }
        }
    ],
    "users": {
        "id": "isNumber",
        "email": "isString",
        "name": "isString",
        "time_zone": "isString",
        "avatar_url": "isString",
        "company_name": "isString",
        "invoice_due_period": "isNumber",
        "address": "isString",
        "phone": "isString",
        "currency": "isString"
    }
}
```

