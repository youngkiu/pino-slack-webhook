import build from 'pino-abstract-transport';
import axios from 'axios';
import createTransport, { sendNotiToSlack } from '../src/index';

jest.mock('pino-abstract-transport', () => jest.fn());
jest.mock('axios', () => jest.fn().mockImplementation(() => Promise.resolve({ status: 200 })));

describe('pino-slack-webhook', () => {
    test('build transport', async () => {
        const options = {
            webhookUrl: 'https://hooks.slack.com/services/xxx/xxx/xxx',
            channel: '#pino-noti',
        };

        await createTransport(options);

        expect(build).toHaveBeenCalled();
    });

    test('sendNotiToSlack', async () => {
        const webhookUrl = 'https://hooks.slack.com/services/abc/def/ghi';
        const channel = '#error-noti';
        const username = 'testuser';
        const msg = 'test log!';

        await sendNotiToSlack({ url: webhookUrl, channel, username, text: msg });

        expect(axios).toBeCalledWith({
            method: 'POST',
            url: webhookUrl,
            headers: { 'content-type': 'application/json' },
            data: {
                channel,
                username,
                text: msg,
            }
        });
    });
});
