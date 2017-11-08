import React, { Component } from 'react';

export default class PostsList extends Component {
	render() {
		return (
			<div className="posts__list">
				{
					(this.props.fetching)
					? <div>Fetching Posts</div>
					: <div>
						{
							(this.props.posts !== undefined && this.props.posts.length)
							? <table className="table table-striped">
								<thead>
									<tr>
										<th>ID</th>
										<th>Title</th>
										<th>Content</th>
										<th></th>
									</tr>
								</thead>
								<tbody>
									{this.props.posts.map((post) => {
										return (
											<tr key={post._id}>
												<td>{post._id}</td>
												<td>{post.title}</td>
												<td>{post.content}</td>
												<td>
													<button 
														className="btn btn-danger"
														onClick={event => this.removePost(post._id)}
														disabled={this.props.removing}
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
								No posts to display
							  </div>
						}
					  </div>
				}
			</div>		
		);
	}
	removePost(id) {
		this.props.remove(id)
	        .then(() => this.props.setFeedback({message: 'Post removed', type: 'success'}))
	        .catch((error) => this.props.setFeedback({message: error.data, type: 'warning'}));
	}
}