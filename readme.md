# Top tracker

JavaScript client for **[Toptal](https://www.toptal.com/)** [tracker](https://www.toptal.com/tracker)

#### Install

```bash
npm install top-tracker
```

#### Import

```js
import * as topTracker from 'top-tracker'
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

-   [SignIn](./docs/SignIn/readme.md)

-   [SignOut](./docs/SignOut/readme.md)

-   [SignUp](./docs/SignUp/readme.md)

-   [TimeZones](./docs/TimeZones/readme.md)

-   Invitation `todo`

-   InvoiceConfirm `todo`

-   InvoiceDetails `todo`

-   InvoiceSummary `todo`

-   UsersLocation `todo`

