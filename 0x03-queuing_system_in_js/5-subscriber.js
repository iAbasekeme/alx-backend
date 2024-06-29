import { createClient } from 'redis'

const client = createClient();

client.on('connect', () => {
    console.log('Redis client connected to the server');
});

client.on('error', (err) => {
    console.error('Redis client not connected to the server: ', err);
});

client.subscribe('holberton school channel', (err) => {
    if (err) {
        throw err
    };
});

client.on('message', (channel, message) => {
    console.log(`Received a message on channel: ${channel}`);

    if (message === 'KILL_SERVER') {
        client.unsubscribe('holberton school channel');
        client.quit();
    }
});
