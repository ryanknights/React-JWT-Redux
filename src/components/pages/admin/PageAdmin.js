import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 
import { getUsers, removeUser } from '../../../actions/users';
import { setFeedback } from '../../../actions/feedback';

import UsersList from './UsersList';

class PageAdmin extends Component {
	componentDidMount() {
		if (!this.props.fetching) {
			this.props.getUsers()
				.catch(error => {
					this.props.setFeedback({message: 'There was a problem retrieving the users', 'type': 'warning'});
				});
		}
	}
	render () {
		return (
			<div>
				<h1 className="display-4">Admin</h1>
				<UsersList 
					users={this.props.users}
					fetching={this.props.fetching}
					setFeedback={this.props.setFeedback}
					remove={this.props.removeUser}
				/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		auth: state.auth,
		users: state.users.all,
		fetching: state.users.isFetching
	}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
	getUsers: getUsers,
	removeUser: removeUser,
	setFeedback: setFeedback,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PageAdmin);