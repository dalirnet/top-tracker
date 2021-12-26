# Sign Up

Signup and get session

#### Sample

```js
import { SignUp } from 'top-tracker'

const parameters = {}
const input = {}

new SignUp(parameters)
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
    "first_name": "isString",
    "last_name": "isString",
    "country_id": "isNumber",
    "city": "isString",
    "email": "isString",
    "password": "isString",
    "company_name": "isString",
    "time_zone": "isString",
    "type": "isString"
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

