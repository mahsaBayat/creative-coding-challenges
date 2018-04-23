import { APP_MESSAGE_SET } from '../actions/app';

const initialState = {
    message: 'Hello World',
};

export default function(state = initialState, action) {
    switch (action.type) {
        case APP_MESSAGE_SET:
            return {
                ...state,
                message: action.message,
            };
        default:
            return {
                ...state,
            };
    }
}
