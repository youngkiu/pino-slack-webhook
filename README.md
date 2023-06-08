
# @youngkiu/pino-slack-webhook

A [Pino v7+ transport](https://getpino.io/#/docs/transports?id=v7-transports) to send events to [Slack](https://slack.com/)

## Installation

```
npm install --save @youngkiu/pino-slack-webhook
```

## Usage

```js
import pino from 'pino'

const logger = pino({
  transport: {
    target: '@youngkiu/pino-slack-webhook',
    level: 'info',
    options: {
      webhookUrl: 'https://hooks.slack.com/services/xxx/xxx/xxx',
      channel: '#pino-log',
      username: 'webhookbot',
      icon_emoji: ':ghost:'
    }
  }
})

logger.info('test log!');
```
[test-app.ts](test/test-app.ts)

<img alt="slack-webhook.png" src="image/slack-webhook.png" width="200"/>

## Reference

- [https://getpino.io/#/docs/transports?id=writing-a-transport](https://github.com/pinojs/pino/blob/master/docs/transports.md#writing-a-transport)
- https://github.com/autotelic/pino-seq-transport
- https://github.com/technicallyjosh/pino-http-send
