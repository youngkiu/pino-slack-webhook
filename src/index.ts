import build from 'pino-abstract-transport';
import axios from 'axios';

export async function sendNotiToSlack({
    url,
    channel,
    username,
    emoji,
    text,
}: {
  url: string;
  channel: string;
  username?: string;
  emoji?: string;
  text: string;
}) {
    const configs = {
        method: 'POST',
        url,
        headers: { 'content-type': 'application/json' },
        data: {
            channel,
            username,
            icon_emoji: emoji,
            text,
        },
    };

    try {
        const response = await axios(configs);
        if (response.status !== 200) {
            console.error({ ...response });
        }
    } catch (e) {
        throw new Error(`${e}`);
    }
}

export default async function (opts: {
  webhookUrl: string;
  channel: string;
  username?: string;
  emoji?: string;
}) {
    const {
        webhookUrl,
        channel,
        username = 'webhookbot',
        emoji = ':ghost:',
    } = opts;

    if (!opts.webhookUrl || !opts.channel) {
        throw new Error('The required options(webhookUrl, channel) are missing');
    }

    return build(async (source) => {
        for await (const obj of source) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { time, level, msg, err, error, stack, ...props } = obj;
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { message: errMessage, stack: errStack, ...errorProps} = err || error || {};

            await sendNotiToSlack({
                url: webhookUrl,
                channel,
                username,
                emoji,
                text: msg,
            });
        }
    });
}
