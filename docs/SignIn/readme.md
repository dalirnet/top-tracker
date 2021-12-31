# Sign In

Signin and get session

#### Sample

```js
import { SignIn } from 'top-tracker'

const parameters = {}
const input = {}

new SignIn(parameters)
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
    "email": "isString",
    "password": "isString",
    "remember_me": "isBoolean",
    "profile": "isString"
}
```

-   **Output**

```json
{
    "access_token": "isString",
    "user": {
        "id": "isNumber",
        "email": "isString",
        "name": "isString",
        "time_zone": "isString",
        "avatar_url": "isString",
        "company_name": "isString",
        "invoice_due_period": "isNumber",
        "address": "isString",
        "phone": "isString",
        "currency": "isString",
        "used_desktop": "isBoolean",
        "has_invoices": "isBoolean",
        "first_name": "isString",
        "middle_name": "isString",
        "last_name": "isString",
        "city": "isString",
        "country_id": "isNumber"
    },
    "profiles": [
        {
            "id": "isNumber",
            "type": "isString",
            "name": "isString",
            "avatar_url": "isString",
            "company_name": "isString",
            "address": "isString",
            "phone": "isString",
            "active": "isBoolean"
        }
    ]
}
```

