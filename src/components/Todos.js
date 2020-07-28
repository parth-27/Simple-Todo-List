import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends React.Component {
    

    render() {
        console.log(this.props.todos);
        return (
            // for iterating over anything in react we use map function
            // we can write JS experssion in the {}
            this.props.todos.map((todo) => (
                // when we have single statement in the arrow function than we don't need {} brackets we can use () parenthesis.
                <TodoItem key={todo.id} todo={todo} markComplete = {this.props.markComplete} delTodo = {this.props.delTodo} />
            ))
        )
    }
}

// PropTypes
Todos.protoTypes = {
    // todos which was passed from the app.js is an array
    todos:PropTypes.array.isRequired,   

    markComplete:PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired

}
export default Todos