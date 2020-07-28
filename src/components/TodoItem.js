import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        // if the task is completed put a line through on it.
        // In jsx, CSS is written in camel Case and not using hypen(-)
        return{
            backgroundColor : '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration : this.props.todo.completed ? 'line-through':'none'
        }
    }
    

    render() {

        // destructuring the variables.
        const {id,title} = this.props.todo;

        return (
            // for inline styling we use {{}} brackets. {{ backgroundColor: '#f4f4f4'}} or {itemStyle}
            <div style = {this.getStyle()}>
                <p>
                <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/>   {/* If we don't want to write .bind(this) 
                after the method than use arrow function instead of normal methods.
                here we have write this.props.markComplete.bind(this,id) because the main state is in other parent component and for accessing id we are passing it. */}
                {'  '}
                {title}
                <button style={btnStyle} onClick={this.props.delTodo.bind(this,id)}>x</button>
                </p>
            </div>
        )
    }
}

// PropTypes.
TodoItem.protoTypes = {
    todo : PropTypes.object.isRequired,
    markComplete:PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}


const btnStyle = {
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    borderRadius : '50%',
    cursor: 'pointer',
    float:'right'
}

// const itemStyle = {
//     backgroundColor: '#f4f4f4'
// }

export default TodoItem
