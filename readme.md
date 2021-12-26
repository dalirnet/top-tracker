# Top tracker

JavaScript client for **[Toptal](https://www.toptal.com/)** [tracker](https://www.toptal.com/tracker)

#### Install

```bash
npm install top-tracker
```

#### Import

```js
import topTracker from 'top-tracker'
```

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

### Methods

-   [Get Countries](./docs/GetCountries/readme.md)

-   [Get Currencies](./docs/GetCurrencies/readme.md)

-   [Time Zones](./docs/TimeZones/readme.md)

-   [Users Location](./docs/UsersLocation/readme.md)

