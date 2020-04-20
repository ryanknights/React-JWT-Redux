import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  login: PropTypes.func.isRequired,
  setDelayedFeedback: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  setFeedback: PropTypes.func.isRequired,
};

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  submitForm(event) {
    const { props } = this;
    event.preventDefault();
    props.login(this.state)
      .then((response) => {
        props.setDelayedFeedback({ message: 'Logged in', type: 'info' });
        props.history.push('/');
      }).catch((error) => {
        props.setFeedback({ message: error.data, type: 'warning' });
      });
  }

  render() {
    return (
      <form onSubmit={(event) => this.submitForm(event, this.state)}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Enter username"
            onChange={(event) => this.setState({ username: event.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter password"
            onChange={(event) => this.setState({ password: event.target.value })}
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    );
  }
}

LoginForm.propTypes = propTypes;

export default LoginForm;
