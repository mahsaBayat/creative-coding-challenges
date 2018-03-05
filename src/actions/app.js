export const APP_MESSAGE_SET = 'APP_MESSAGE_SET';

export const setMessage = message => ({
    type: APP_MESSAGE_SET,
    message,
});
