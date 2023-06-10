import pino from 'pino';

const transport = pino.transport({
    targets: [
        {
            target: '../src/index.ts',
            level: 'error',
            options: {
                webhookUrl: 'https://hooks.slack.com/services/xxx/xxx/xxx',
                channel: '#error-noti',
                username: 'testuser',
                iconEmoji: 'testemoji',
                verbose: true,
            },
        },
        {
            target: 'pino-pretty',
            level: 'debug',
            options: { destination: 1 },
        },
    ],
});

const now = new Date();

const logger = pino({ level: 'debug' }, transport);

logger.debug('debug log!', now);
logger.info('info log!', now);
logger.error('error log!', now);
