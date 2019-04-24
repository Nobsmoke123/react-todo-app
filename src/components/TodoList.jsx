import React, { Component } from 'react';
import TodoForm from './TodoForm.jsx';
import TodoItems from './ToDoItems.jsx';
import FilterButtons from './FIlterButtons.jsx';


class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [],//An empty todos
            filter: "all"
        }

        //binds the function to the component since they're changing the component's state
        this.addTodo = this.addTodo.bind(this);
        this.tickComplete = this.tickComplete.bind(this);
        this.filterTodos = this.filterTodos.bind(this);
    }

    /* Add a task to the todos state */
    addTodo = todo => {
        this.setState({
            todos: [todo, ...this.state.todos]
        });
    }

    /* Tick a task as complete */
    tickComplete = (key) => {
        let values = this.state.todos;
        values.forEach((item) => {
            if (item.key === key) {
                item.complete = !item.complete;
            }
        });

        this.setState({
            todos: values
        });
    }

    /* Filter tasks to be displayed */
    filterTodos = (e) => {
        this.setState({
            filter: e
        });
    }

    /* Component's render function */
    render() {

        /* Handle the filter logic */
        let todos = [];
        let values = this.state.todos;
        if (this.state.filter === "all") {
            todos = values;
        } else if (this.state.filter === "active") {
            todos = values.filter((item) => !item.complete);
        } else if (this.state.filter === "completed") {
            todos = values.filter((item) => item.complete);
        }
        return (<div>
            <h3 style={{ textAlign: "center", letterSpacing: "2px", textTransform: "uppercase", fontWeight: "700", marginTop: "40px" }}>Reactive Todo App</h3>
            <TodoForm onSubmit={this.addTodo} />
            <h4 style={{ textAlign: "center" }}>Showing {this.state.filter} Tasks! &nbsp;&nbsp;Count: {todos.length}</h4>
            <FilterButtons onClick={this.filterTodos} />
            <TodoItems entries={todos}
                tickFunction={this.tickComplete} />
        </div>);
    }
}

export default TodoList;