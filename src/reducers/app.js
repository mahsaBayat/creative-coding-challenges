import { SUBMIT_SIMPLE_FORM } from '../actions/app';

const initialState = {};

// takes the current state and an action and
// returns a new state.
export default function(state = initialState, action) {
    switch (action.type) {
        case SUBMIT_SIMPLE_FORM:
            return {
                ...state,
                credentials: action.credentials,
            };
        default:
            return state;
    }
}
