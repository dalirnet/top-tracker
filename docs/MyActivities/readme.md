# My Activities

Get my activities

#### Sample

```js
import { MyActivities } from 'top-tracker'

const parameters = {}
const input = {}

new MyActivities(parameters)
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
    "project_ids": [
        "isNumber"
    ],
    "start_date": "isISODate",
    "end_date": "isISODate"
}
```

-   **Output**

```json
[
    {
        "id": "isNumber",
        "description": "isString",
        "offline": "isBoolean",
        "offline_type": "isString",
        "user_id": "isNumber",
        "project_id": "isNumber",
        "start_time": "isISODate",
        "end_time": "isISODate",
        "abilities": [
            "isString"
        ],
        "user_agent": {
            "client": "isString",
            "version": "isString",
            "os_type": "isString",
            "os_version": "isString"
        },
        "changed_manually": "isBoolean",
        "invoice_custom_id": "isNumber",
        "mouse_clicks": "isNumber",
        "keyboard_hits": "isNumber",
        "shot_ids": [
            "isNumber"
        ],
        "screenshot_count": "isNumber",
        "duration": "isNumber",
        "project_name": "isString",
        "last_shot": {
            "id": "isNumber",
            "thumb_url": "isString",
            "taken_at": "isISODate",
            "archived_at": "isISODate"
        },
        "shots": [
            {
                "id": "isNumber",
                "type": "isString",
                "url": "isString",
                "thumb_url": "isString",
                "taken_at": "isISODate",
                "is_time_randomized": "isBoolean",
                "blurred": "isBoolean",
                "archived_at": "isISODate",
                "abilities": [
                    "isString"
                ],
                "associated_shot": "isString"
            }
        ]
    }
]
```

