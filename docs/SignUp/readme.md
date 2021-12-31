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

