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

```json
/* whitout parameters */
```

-   **Input**

```js
new GetCurrencies().call(input)
```

```json
/* input */
{
    "id": "isNumber"
}
```

-   **Output**

```js
new GetCurrencies().call().then((output) => {})
```

```json
/* output */
[
    {
        "id": "isNumber",
        "name": "isString",
        "code": "isString",
        "symbol": "isString"
    }
]
```

