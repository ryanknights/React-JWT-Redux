import React, { Component } from 'react';

export default class UsersList extends Component {
	render() {
		return (
			<div className="users__list">
				{
					(this.props.fetching)
					? <div>Fetching Users</div>
					: <div>
						{
							(this.props.users !== undefined && this.props.users.length)
							? <table className="table table-striped">
								<thead>
									<tr>
										<th>ID</th>
										<th>Name</th>
										<th>Email</th>
										<th>Admin</th>
										<th></th>
									</tr>
								</thead>
								<tbody>
									{this.props.users.map((user) => {
										return (
											<tr key={user._id}>
												<td>{user._id}</td>
												<td>{user.username}</td>
												<td>{user.email}</td>
												<td>{(user.isAdmin)? 'true' : 'false'}</td>
												<td>
													<button 
														className="btn btn-danger"
														onClick={event => this.removePost(user._id)}
													>
														Delete
													</button>
												</td>
											</tr>
										)
									})}
								</tbody>
							  </table>
							: <div className="alert alert-warning">
								No users to display
							  </div>
						}
					  </div>
				}
			</div>		
		);
	}
	removePost(id) {
		this.props.remove(id)
	        .then(() => this.props.setFeedback({message: 'User removed', type: 'success'}))
	        .catch((error) => this.props.setFeedback({message: error.data, type: 'warning'}));
	}
}