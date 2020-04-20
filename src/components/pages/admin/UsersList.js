import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  remove: PropTypes.func.isRequired,
  setFeedback: PropTypes.func.isRequired,
  fetching: PropTypes.bool.isRequired,
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  removing: PropTypes.bool.isRequired,
};

class UsersList extends Component {
  removePost(id) {
    const { props } = this;
    props.remove(id)
      .then(() => props.setFeedback({ message: 'User removed', type: 'success' }))
      .catch((error) => props.setFeedback({ message: error.data, type: 'warning' }));
  }

  render() {
    const { props } = this;
    return (
      <div className="users__list">
        { (props.fetching) ? (
          <div>Fetching Users</div>
        ) : (
          <div>
            { (props.users !== undefined && props.users.length) ? (
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Admin</th>
                    <th>&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  { props.users.map((user) => (
                    <tr key={user._id}>
                      <td>{user._id}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{(user.isAdmin) ? 'true' : 'false'}</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={(event) => this.removePost(user._id)}
                          disabled={props.removing}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="alert alert-warning">
                No users to display
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

UsersList.propTypes = propTypes;

export default UsersList;
