# Currencies

Get currencies

#### Sample

```js
import { Currencies } from 'top-tracker'

const parameters = {}
const input = {}

new Currencies(parameters)
    .call(input)
    .then((output) => {})
    .catch(({ message, payload }) => {})
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
new Currencies().call().then((output) => {})
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

