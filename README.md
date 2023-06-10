[![ESLint](https://github.com/youngkiu/pino-slack-webhook/actions/workflows/eslint.yml/badge.svg)](https://github.com/youngkiu/pino-slack-webhook/actions/workflows/eslint.yml)
[![Node.js CI](https://github.com/youngkiu/pino-slack-webhook/actions/workflows/node.js.yml/badge.svg)](https://github.com/youngkiu/pino-slack-webhook/actions/workflows/node.js.yml)

[//]: # ([![npm version]&#40;https://badge.fury.io/js/@youngkiu/pino-slack-webhook&#41;]&#40;https://badge.fury.io/js/@youngkiu/pino-slack-webhook&#41;)
[![NPM downloads](http://img.shields.io/npm/dm/@youngkiu/pino-slack-webhook.svg?style=flat-square)](http://www.npmtrends.com/@youngkiu/pino-slack-webhook)

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
[app.ts](example/app.ts)

<img alt="slack-webhook.png" src="image/slack-webhook.png" width="200"/>

## Reference

- [https://getpino.io/#/docs/transports?id=writing-a-transport](https://github.com/pinojs/pino/blob/master/docs/transports.md#writing-a-transport)
- https://github.com/autotelic/pino-seq-transport
- https://github.com/technicallyjosh/pino-http-send
