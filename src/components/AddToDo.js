import React, { Component } from "react";
import PropTypes from 'prop-types';

export class AddToDo extends Component {
  
    state = {
        title : '' 
    }    

    addText = (e) => {
        this.setState({ [e.target.name]: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();     // preventing the default submition.
        const {title}  = this.state;
        this.props.addToDo(title);
        this.setState({ title: '' });
    }

    render() {
    return (
      <form style={{ display: "flex" }} onSubmit = {this.onSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Add Todo ..."
          style={{ flex: "10", padding: "5px" }}
          value={this.setState.title}
          onChange={this.addText}
        />
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{ flex: "1" }}
        />
      </form>
    );
  }
}

AddToDo.protoTypes = {
  addToDo : PropTypes.func.isRequired,
}


export default AddToDo;
