import React, { Component } from 'react';

export default class AddForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: '',
			content: ''
		};
	}
	render () {
		return (
			<form onSubmit={event => this.submitForm(event, this.state)}>
				<h3>Add Post</h3>
				<div className="form-group">
					<label>Title</label>
					<input 
						type="text" 
						className="form-control" 
						id="title" 
						placeholder="Enter title" 
						onChange={event => this.setState({title: event.target.value})}
						value={this.state.title}
					/>
				</div>					
				<div className="form-group">
					<label>Content</label>
					<input 
						type="text" 
						className="form-control" 
						id="content" 
						placeholder="Enter content" 
						onChange={event => this.setState({content: event.target.value})}
						value={this.state.content}
					/>
				</div>
				<button type="submit" className="btn btn-primary">Add Post</button>
			</form>
		);
	}

	submitForm(event, data) {
		event.preventDefault();
		this.props.add(this.state)
			.then(() => this.setState({title: '', content: ''}))
			.then(() => this.props.setFeedback({message: 'Post added', type: 'success'}))
			.catch(error => this.props.setFeedback({message: 'There was a problem adding the post', type: 'warning'}));		
	}
}