# Users Location

Get users location

#### Sample

```js
import { UsersLocation } from 'top-tracker'

const parameters = {}
const input = {}

new UsersLocation(parameters)
    .call(input)
    .then((output) => {})
    .catch((error) => {})
```

-   **Parameters**

```js
/* whitout parameters */
```

-   **Input**

```js
/* whitout input */
```

-   **Output**

```js
new UsersLocation().call().then((output) => {})
```

```json
{
    "code": "isString",
    "country": "isString",
    "city": "isAny",
    "in_eu": "isBoolean",
    "prohibited": "isBoolean",
    "prohibited_region": "isAny"
}
```

