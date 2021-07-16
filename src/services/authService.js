
import {login, logout, loginError} from '../actions/authActions';

const user = {
    username: 'admin',
    password: '123456',
    name: 'Admin User',
}

export const doLogin = ({username, password}) => dispatch => {
    //need to check from backend and get the jwt token
    const isLogin = (user.username === username && user.password === password);
  
    localStorage.setItem('auth', JSON.stringify({
        user,
        loggedIn: isLogin
    }));

    if (isLogin) {
        dispatch(login({user, isLogin}));
    } else {
        dispatch(loginError(true));
    }
}

export const doLogout = () => dispatch => {

    localStorage.setItem('auth', JSON.stringify({
        user: {},
        loggedIn: false
    }));

    dispatch(logout());
}