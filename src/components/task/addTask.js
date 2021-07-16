import React, {Component} from "react";
import {connect} from "react-redux";
import {Modal} from "react-responsive-modal";
import Select from "react-select";

import {addTask} from "../../actions/taskActions";
import {message as ErrorMessage} from "../../lang/en/error";

const defaultStates = {
    inputs: {
        title: "",
        description: "",
        priority: "",
    },
    errors: {
        title: false,
        priority: false,
    },
    priority: [
        {value: "high", label: "High"},
        {value: "medium", label: "Medium"},
        {value: "low", label: "Low"},
    ],
};

class AddTask extends Component {
    constructor() {
        super();

        this.state = {...defaultStates};
    };

    setDefaultStates = () => {
        this.setState({...defaultStates});
    };

    changeInputError = (type, elem, val) => {
        this.setState({
            [type]: {
                ...this.state[type],
                [elem]: val,
            },
        });
    };

    formElementChange = (name, value) => {
        this.changeInputError("errors", name, false);
        this.changeInputError("inputs", name, value);
    };

    formHasErrors = () => {
        const {title, priority} = this.state.inputs;
        let errors = {};

        if (!title) errors.title = true;
        if (!priority) errors.priority = true;

        this.setState({errors});

        return Object.values(errors).includes(true);
    };

    onSaveTask = () => {
        if(this.formHasErrors()) return;

        this.props.addTask(this.state.inputs);
        this.onCloseModal();
    };

    onCloseModal = () => {
        const {onCloseModal} = this.props;

        this.setDefaultStates();
        onCloseModal();
    }

    render() {
        const {inputs, errors} = this.state;
        const {open} = this.props;

        return (
            <Modal open={open} onClose={this.onCloseModal}>
                <div className="modal-header">Add New Task</div>
                <div
                    style={{ width: "700px" }}
                    className="modal-content p-2 border-0">
                    <div className="col mb-3">
                        <label htmlFor="title" className="form-label">
                            Title
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            value={inputs.title}
                            onChange={(event) => this.formElementChange('title', event.target.value)}
                            placeholder="enter title"
                        />
                        {
                            errors.title && <label className="error">{ErrorMessage.title}</label>
                        }
                    </div>
                    <div className="col mb-3">
                        <label htmlFor="priority" className="form-label">
                            Priority
                        </label>
                        <Select
                            onChange={({value}) => this.formElementChange("priority", value)}
                            isSearchable={false}
                            placeholder="select priority"
                            options={this.state.priority}
                        />
                        {
                            errors.priority && <label className="error">{ErrorMessage.priority}</label>
                        }
                    </div>
                    <div className="col mb-3">
                        <label htmlFor="description" className="form-label">
                            Description
                        </label>
                        <textarea
                            className="form-control"
                            id="description"
                            rows={3}
                            value={inputs.description}
                            onChange={(event) =>this.formElementChange('description', event.target.value)}
                            placeholder="enter description"
                        />
                    </div>
                </div>
                <div className="modal-footer border-0">
                    <button className="btn btn-light" onClick={this.onCloseModal}>
                        Close
                    </button>
                    <button
                        className="btn btn-primary"
                        onClick={this.onSaveTask}>
                        Save
                    </button>
                </div>
            </Modal>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    addTask: (payload) => dispatch(addTask(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
