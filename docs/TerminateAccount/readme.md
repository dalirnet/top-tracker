# Terminate Account

Terminate account

#### Sample

```js
import { TerminateAccount } from 'top-tracker'

const parameters = {}
const input = {}

new TerminateAccount(parameters)
    .call(input)
    .then((output) => {})
    .catch(({ message, payload }) => {})
```

-   **Parameters**

```json
{
    "id": "isString"
}
```

-   **Input**

```json
{
    "access_token": "isString"
}
```

-   **Output**

```json
{
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
    }
}
```

