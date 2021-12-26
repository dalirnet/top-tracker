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

### Endpoints

-   [GetCountries](./docs/GetCountries/readme.md)

-   [GetCurrencies](./docs/GetCurrencies/readme.md)

-   [GetTimeZones](./docs/GetTimeZones/readme.md)

-   GetUsersLocation `todo`

-   GetInvitation `todo`

