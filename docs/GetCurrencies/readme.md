# Get Currencies

`/payments/currencies`

Get currencies list

### Sample

```js
import topTracker from 'top-tracker'

/* Make instance */
const instance = new topTracker.GetCurrencies()

/* Make request */
const request = instance.call()

/* Get result */
request.then((output) => {
    /* output */
})
```


#### Input

```js
instance.call(input)
```

```json
/* input */
{
    "id": "isNumber"
}
```


#### Output

```js
request.then((output) => {})
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

