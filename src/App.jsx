import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList.jsx';

/* Main Container encloses all the components that forms the todo app */
class App extends Component {
    render() {
        return (<div >
            <TodoList />
        </div>
        );
    }
}

export default App;