# Sign In

SignIn and get session

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
        "company_name": "isAny",
        "invoice_due_period": "isNumber",
        "address": "isAny",
        "phone": "isAny",
        "currency": "isAny",
        "used_desktop": "isBoolean",
        "has_invoices": "isBoolean",
        "first_name": "isAny",
        "middle_name": "isAny",
        "last_name": "isAny",
        "city": "isAny",
        "country_id": "isNumber"
    },
    "profiles": [
        {
            "id": "isNumber",
            "type": "isString",
            "name": "isString",
            "avatar_url": "isString",
            "company_name": "isAny",
            "address": "isAny",
            "phone": "isAny",
            "active": "isBoolean"
        }
    ]
}
```

