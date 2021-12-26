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
import { SignIn } from 'top-tracker'

const parameters = {}
const input = {}

new SignIn(parameters)
    .call(input)
    .then((output) => {})
    .catch(({ message, payload }) => {})
```

### Endpoints

-   [Countries](./docs/Countries/readme.md)

-   [Currencies](./docs/Currencies/readme.md)

-   [TimeZones](./docs/TimeZones/readme.md)

-   [SignIn](./docs/SignIn/readme.md)

-   UsersLocation `todo`

-   Invitation `todo`

-   InvoiceConfirm `todo`

-   InvoiceDetails `todo`

-   InvoiceSummary `todo`

