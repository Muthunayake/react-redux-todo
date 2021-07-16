import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import { createBrowserHistory } from "history";
import { Router } from "react-router";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "react-responsive-modal/styles.css";

import store from './store';

const history = createBrowserHistory();

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Router history={history}>
                    <App />
                </Router>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
