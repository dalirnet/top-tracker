# Get Countries

`/countries/:name`

Get countries list

### Sample

```js
import topTracker from 'top-tracker'

/* Make instance */
const instance = new topTracker.GetCountries()

/* Make request */
const request = instance.call()

/* Get result */
request.then((output) => {
    /* output */
})
```


#### Parameters

```js
new topTracker.GetCountries(parameters)
```

```json
/* parameters */
{
    "name": "isString"
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
        "name": "isString"
    }
]
```

