import {ADD_TASK} from "../constants/actionType";

export const addTask = (payload) => dispatch => {
    dispatch({
        type: ADD_TASK,
        payload
    });
}