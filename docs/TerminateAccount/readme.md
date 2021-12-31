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
    }
}
```

