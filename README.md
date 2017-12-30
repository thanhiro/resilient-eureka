# resilient-eureka

[resilient.js](https://github.com/resilient-http/resilient.js) HTTP client
[middleware](https://github.com/resilient-http/resilient.js#middleware-layer) for [Eureka](https://github.com/Netflix/eureka).

Via this middleware you can use Eureka as compatible discovery server in Resilient HTTP clients.
Greatly inspired by [resilient-consul](https://github.com/h2non/resilient-consul).

## Installation

### Node.js

Requires Node.js 8+.

```
npm install resilient-eureka-middleware --save
```

## Usage

```js
// ES2016 modules with babel
import Resilient from 'resilient';
import eureka from 'resilient-eureka-middleware';

const client = Resilient({
  discovery: {
    servers: ['http://localhost:8761'],
    headers: {
      Accept: 'application/json'
    }
  }
});
client.use(eureka());
return client;

```

## License

MIT
