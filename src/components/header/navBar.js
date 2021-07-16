import React, {Component} from "react";
import {connect} from "react-redux";

import {doLogout} from "../../services/authService";
import "../../styles/nav-bar.scss";

class NavBar extends Component {
    onLogout = () => {
        const { doLogout, history } = this.props;

        doLogout();
        history.replace("/login");
    };

    render() {
        return (
            <div className="nav-bar">
                <div className="row nav-header">
                    <div className="col-auto">
                        <i className="fa fa-align-justify fa-lg pe-2"></i>
                    </div>
                    <div className="col nav-item">
                        <label>My Tasks</label>
                        <button
                            className="btn-logout"
                            type="button"
                            onClick={this.onLogout}
                        >
                            LogOut
                        </button>
                
                    </div>
                </div>
                <div className="row nav-title">
                    <h4>Marketing Campaign</h4>
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state) => ({
    ...state,
});

const mapDispatchToProps = (dispatch) => ({
    doLogout: (payload) => dispatch(doLogout(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
