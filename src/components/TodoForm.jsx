import React, { Component } from 'react';
import './TodoForm.css'
class TodoForm extends Component {
    constructor(props) {
        super(props);

        //Store the task the user enters in the state
        this.state = {
            item: ""
        };
    }

    /* Gets the task and saves it in the state variable item */
    handleOnchange = (event) => {
        this.setState({
            item: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        //submit the form
        if (this.state.item !== "") { //check to see if there's a value for item
            this.props.onSubmit({
                text: this.state.item,
                complete: false,
                key: Date.now()
            });

            //clear the text input field after submitting
            this.setState({
                item: ""
            });
        } else {
            alert("You have to insert a task first!");
        }
    }

    render() {
        return (<div className="form-div">
            <form onSubmit={this.handleSubmit}>
                <input className="form-input" type="text" value={this.state.item} onChange={this.handleOnchange} placeholder="Enter your task..." />
                <button className="form-button" onClick={this.handleSubmit}>Add Todo</button>
            </form>
        </div>);
    }
}

export default TodoForm;