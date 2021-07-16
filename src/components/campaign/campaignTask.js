import React, { Component } from "react";
import Lists from "../task/lists";
import NavBar from "../header/navBar";

class CampaignTask extends Component {
    render() {
        return (
            <div>
                <NavBar {...this.props}/>
                <Lists/>
            </div>
        );
    }
}

export default CampaignTask;
