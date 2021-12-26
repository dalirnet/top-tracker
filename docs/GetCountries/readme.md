# Get Countries

Get countries list

#### Sample

```js
import { GetCountries } from 'top-tracker'

const parameters = {}
const input = {}

new GetCountries(parameters)
    .call(input)
    .then((output) => {})
    .catch((error) => {})
```

-   **Parameters**

```js
new GetCountries(parameters)
```

```json
/* parameters */
{
    "name": "isString"
}
```

-   **Input**

```json
/* whitout input */
```

-   **Output**

```js
new GetCountries().call().then((output) => {})
```

```json
/* output */
[
    {
        "id": "isNumber",
        "name": "isString"
    }
]
```

