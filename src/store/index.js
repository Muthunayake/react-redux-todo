// import {configureStore, createSlice} from '@reduxjs/toolkit';

// const initialtaskListState = {
//     lists: [],
// };

// const taskListSlice = createSlice({
//     name: 'TaskList',
//     initialState: initialtaskListState,
//     reducers: {
//         add(state, {payload}){
//             state.lists.push(payload); 
//         }
//     }
// });

// const initialAuthState = {
//     isAuthenticated: false
// };

// const authSlice = createSlice({
//     name: 'Auth',
//     initialState: initialAuthState,
//     reducers: {
//         login(state){
//             state.isAuthenticated = true;
//         },
//         logout(state){
//             state.isAuthenticated = false;
//         },
//     }
// });

// const StoreSlice = configureStore({
//     reducer: {
//         taskList: taskListSlice.reducer, 
//         auth: authSlice.reducer
//     }
// })

// export const taskListAction = taskListSlice.actions;
// export const authAction = authSlice.actions;

// export default StoreSlice;


import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import thunkMiddleware from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default store;