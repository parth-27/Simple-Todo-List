import React from "react";
import "./App.css";
import Todos from "./components/Todos";
import Header from "./components/Layout/Header";
import AddToDo from "./components/AddToDo";
// import { v4 } from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from './components/Pages/About';
import axios from "axios";

class App extends React.Component {
	// adding state
	state = {
		todos: [],
	};

	// Toggle Complete.
	markComplete = (id) => {
		this.setState({
			todos: this.state.todos.map((todo) => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			}),
		});
	};

	// this lifecycle method will run right after the component mounts
	componentDidMount(){
		axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(res => {
			this.setState({todos : res.data});
		});
	}

	// Delete todo
	delTodo = (id) => {

		axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res => {
			this.setState({
				todos: [...this.state.todos.filter((todo) => todo.id !== id)],
			})
		})

	};

	// Add todo
	addToDo = (title) => {
		// console.log(title);
		// const newTodo = {
		// 	id: v4(),
		// 	title,
		// 	complete: false,
		// };

		axios.post('https://jsonplaceholder.typicode.com/todos',
		{title,completed:false})
		.then(res => this.setState({ todos: [...this.state.todos, res.data] }));
	};

	render() {
		return (
			// This is JSX
			<Router>
				<div className="App">
					<div className="container">
						<Header />
						<Route
							exact
							path="/"
							render={props => (
								<React.Fragment>
									<AddToDo addToDo={this.addToDo} />
									{/* Passing todos from the state to the Todos Component as a prop	 */}
									<Todos
										todos={this.state.todos}
										markComplete={this.markComplete}
										delTodo={this.delTodo}
									/>
									{/*Todos Component */}
								</React.Fragment>
							)}/>
						<Route path ="/about" component={About}/>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
