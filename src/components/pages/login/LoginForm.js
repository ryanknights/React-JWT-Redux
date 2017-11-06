import React, { Component } from 'react';

export default class LoginForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			password: ''
		};
	}
	render () {
		return (
			<form onSubmit={event => this.submitForm(event, this.state)}>
				<div className="form-group">
					<label for="username">Username</label>
					<input 
						type="text" 
						className="form-control" 
						id="username" 
						placeholder="Enter username" 
						onChange={event => this.setState({username: event.target.value})}
					/>
				</div>					
				<div className="form-group">
					<label for="password">Password</label>
					<input 
						type="password" 
						className="form-control" 
						id="password" 
						placeholder="Enter password" 
						onChange={event => this.setState({password: event.target.value})}
					/>
				</div>
				<button type="submit" className="btn btn-primary">Login</button>
			</form>
		);
	}

	submitForm(event, data) {
		event.preventDefault();
		this.props.login(this.state)
			.then(response => {

			}).catch(error => {
				this.props.setFeedback({message: error.data, type: 'warning'})
			});
	}
}