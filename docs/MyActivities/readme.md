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
    "start_date": "isodate",
    "end_date": "isodate"
}
```

-   **Output**

```js
/* whitout output */
```

