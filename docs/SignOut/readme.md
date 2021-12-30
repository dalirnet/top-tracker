# Sign Out

Signout and remove session

#### Sample

```js
import { SignOut } from 'top-tracker'

const parameters = {}
const input = {}

new SignOut(parameters)
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
    "access_token": "isString"
}
```

-   **Output**

```json
"isTrue"
```

