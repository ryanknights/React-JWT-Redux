import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUsers, removeUser } from '../../../actions/users';
import { setFeedback } from '../../../actions/feedback';
import { getAllUsers, getIsFetchingUsers, getIsRemovingUser } from '../../../reducers/users';
import UsersList from './UsersList';

const propTypes = {
  fetching: PropTypes.bool.isRequired,
  getUsers: PropTypes.func.isRequired,
  setFeedback: PropTypes.func.isRequired,
  users: PropTypes.objectOf(PropTypes.object).isRequired,
  removeUser: PropTypes.func.isRequired,
  removing: PropTypes.bool.isRequired,
};

class PageAdmin extends Component {
  componentDidMount() {
    const { props } = this;
    if (!props.fetching) {
      props.getUsers()
        .catch((error) => {
          props.setFeedback({ message: 'There was a problem retrieving the users', type: 'warning' });
        });
    }
  }

  render() {
    const { props } = this;
    return (
      <div>
        <h1 className="display-4">Admin</h1>
        <UsersList
          users={props.users}
          fetching={props.fetching}
          setFeedback={props.setFeedback}
          remove={props.removeUser}
          removing={props.removing}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: getAllUsers(state),
    fetching: getIsFetchingUsers(state),
    removing: getIsRemovingUser(state),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getUsers,
    removeUser,
    setFeedback,
  }, dispatch);
}

PageAdmin.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(PageAdmin);
