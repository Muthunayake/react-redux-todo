import {LOGIN, LOGOUT, LOGIN_ERROR} from "../constants/actionType";

let authState = JSON.parse(localStorage.getItem("auth"));
const defaultState = {loggedIn: false, user: {}, error: false};
const initState = authState ? authState : defaultState;

export function auth(state = initState, action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...defaultState,
                loggedIn: true,
                user: action.payload.user,
            };
        case LOGOUT:
            return {
                ...defaultState,
            };
        case LOGIN_ERROR:
            return {
                ...defaultState,
                error: true,
            };
        default:
            return state;
    }
}
