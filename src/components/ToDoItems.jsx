import React, { Component } from 'react';
import './TodoItems.css';
class TodoItems extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    generateKey() {
        return Math.random().toString(36).replace('0.', '');
    }

    render() {
        let todoEntries = this.props.entries;
        let listItems = todoEntries.map((items) => {
            return (<div key={this.generateKey()} className="list-box">
                <label key={this.generateKey()} className="container" >
                    <input key={items.key} onClick={() => {
                        this.props.tickFunction(items.key);
                    }}
                        type="checkbox"
                        className="form-check" checked={items.complete}
                        onChange={() => { }} />
                    <span key={this.generateKey()} className="checkmark"> </span>
                </label>
                <li key={items.key} style={{ textDecoration: items.complete ? "line-through" : "" }}> {items.text} </li> </div >);
        });
        return (<ul> {listItems} </ul >);
    }
}

export default TodoItems;