import React, {Component} from "react";
import {connect} from "react-redux";

import AddTask from "./addTask";
import ListItem from "./listItem";

import '../../styles/todo-lists.scss'

class Lists extends Component {
    constructor(){
        super();

        this.state = {
            open: false
        }
    }

    onOpenModal = () => {
        this.setState({open: true});
    }

    onCloseModal = () => {
        this.setState({open: false});
    }

    render() {
        const {lists} = this.props;

        return (
            <div className="list-container">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col col-md-8 pt-5">
                            <div className="todo-card">
                                <div className="body">
                                    <div className="row header">
                                        <div className="col-10">
                                            <button onClick={this.onOpenModal}>
                                                Add Task
                                            </button>   
                                        </div>
                                        <div className="col">
                                            <label>Priority</label>
                                        </div>
                                    </div>
                                    {
                                        lists.length > 0 ? 
                                            lists.map((item , index) => <ListItem key={index} item={item}/>) :
                                            <div className="row justify-content-md-center p-2">no task in the list</div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <AddTask open={this.state.open} onCloseModal={this.onCloseModal}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        lists: state.task.lists
    }
}

export default connect(mapStateToProps)(Lists);


