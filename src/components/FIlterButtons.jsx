import React, { Component } from 'react';
import './FilterButtons.css';

/**
 * Once the buttons are clicked it changes the items in
 * the todo list
 */
class FilterButtons extends Component {
    /* Handles the click event on filter buttons */
    handleClick = (e) => {
        //pass the argument to the parent component
        this.props.onClick(e.target.value);
    }

    render() {
        return (<div className="filter-wrapper">
            <button className="filter-btns" value={"all"} onClick={(e) => this.handleClick(e)}>All</button>
            <button className="filter-btns" value={"active"} onClick={(e) => this.handleClick(e)}>Active</button>
            <button className="filter-btns" value={"completed"} onClick={(e) => this.handleClick(e)}>Completed</button>
        </div>);
    }
}


export default FilterButtons;