// @flow
// action type
export const SUBMIT_SIMPLE_FORM = 'SUBMIT_SIMPLE_FORM';

// action itself
export const submitSimpleForm = (credentials: Credentials) => ({
    type: SUBMIT_SIMPLE_FORM,
    credentials,
});
