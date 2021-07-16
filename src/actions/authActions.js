import {LOGIN, LOGOUT, LOGIN_ERROR} from "../constants/actionType";

export const login = payload => dispatch => {
    dispatch({
        type: LOGIN,
        payload
    });
};

export const logout = payload => dispatch => {
    dispatch({
        type: LOGOUT,
        payload
    });
};

export const loginError = (payload = true) => dispatch => {
    dispatch({
        type: LOGIN_ERROR,
        payload
    });
};