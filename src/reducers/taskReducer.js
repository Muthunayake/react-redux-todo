import {ADD_TASK} from '../constants/actionType';

const initState = {
    lists: [],
};

export function task(state = initState, action) {
    switch (action.type) {
        case ADD_TASK:
            state.lists.push(action.payload);
            return state;
        default:
            return state;
    }
}
