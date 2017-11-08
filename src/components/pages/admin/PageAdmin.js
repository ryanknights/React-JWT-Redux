import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 
import { getUsers, removeUser } from '../../../actions/users';
import { setFeedback } from '../../../actions/feedback';
import { getAllUsers, getIsFetchingUsers, getIsRemovingUser } from '../../../reducers/users';

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
					removing={this.props.removing}
				/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		users: getAllUsers(state),
		fetching: getIsFetchingUsers(state),
		removing: getIsRemovingUser(state)
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