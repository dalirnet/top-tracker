# Get Currencies

Get currencies list

#### Sample

```js
import { GetCurrencies } from 'top-tracker'

const parameters = {}
const input = {}

new GetCurrencies(parameters)
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
new GetCurrencies().call().then((output) => {})
```

```json
[
    {
        "id": "isNumber",
        "name": "isString",
        "code": "isString",
        "symbol": "isString"
    }
]
```

