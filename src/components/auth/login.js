import React, {Component} from "react";
import {connect} from "react-redux";
import {doLogin, doLogout} from "../../services/authService";
import {message as ErrorMessage} from "../../lang/en/error";

const defaultStates = {
    inputs: {
        username: "",
        password: "",
    },
    errors: {
        username: false,
        password: false,
    },
};

class Login extends Component {

    constructor (props) {
        super();

        this.state = {
            ...defaultStates,
        };

        this.clearAuth(props);
    }

    clearAuth = ({doLogout}) => {
        doLogout();
    }

    componentDidUpdate(prevProps) {
        const {auth, history} = this.props;

        if (auth.loggedIn === true) history.push('/');
    }

    setDefaultStates = () => {
        this.setState({
            ...defaultStates,
        });
    };
    
    formElementChange = (name, value) => {
        this.changeInputError("errors", name, false);
        this.changeInputError("inputs", name, value);
    }

    changeInputError = (type, elem, val) => {
        this.setState({
            [type]: {
                ...this.state[type],
                [elem]: val,
            },
        });
    };

    formHasErrors = () => {
        const {username, password} = this.state.inputs;
        let errors = {...defaultStates.errors};

        if (!username) errors.username = true;
        if (!password) errors.password = true;

        this.setState({errors});

        return Object.values(errors).includes(true);
    }

    onLogin = () => {
        if (this.formHasErrors()) return;

        this.props.doLogin(this.state.inputs);
    }

    render(){
        const {inputs, errors} = this.state;

        return (
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col col-md-6 pt-5">
                        <div className="card">
                            <div className="card-body p-5 pb-2">
                                <h3 className="card-title">Login</h3>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Enter User Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="username"
                                        placeholder="username"
                                        value={inputs.username}
                                        onChange={(event) => this.formElementChange('username', event.target.value)}
                                    />
                                    {
                                        errors.username && <label className="error">{ErrorMessage.username}</label>
                                    }
                                </div>                                            
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="Password"
                                        value={inputs.password}
                                        onChange={(event) => this.formElementChange('password', event.target.value)}
                                    />
                                    {
                                        errors.password && <label className="error">{ErrorMessage.password}</label>
                                    }
                                </div>
                                {
                                    this.props.auth.error &&
                                    <div className="alert alert-danger" role="alert">
                                        {ErrorMessage.credentials}
                                    </div>
                                }
                                <button type="button" className="btn btn-primary float-end mt-3" onClick={this.onLogin}>Login</button>
                            </div>
                            <div className="card-footer text-muted border-0 bg-transparent px-5">
                                <div className="alert alert-warning" role="alert">
                                    <p className="alert-heading">Login Credentials</p>
                                    <p>username: admin</p>
                                    <p>password: 123456</p>
                                </div>
                            </div>                        
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    doLogin: (payload) => dispatch(doLogin(payload)),
    doLogout: () => dispatch(doLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

