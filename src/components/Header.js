import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 
import { logout } from '../actions/auth';

class Header extends Component {
	constructor(props) {
		super(props);
	}
	render () {
		return (
			<header>
			  <nav className="navbar navbar-expand-lg navbar-light bg-light">
			    <div className="container">
			    <Link to="/" className="navbar-brand">React JWT</Link>
			      <div className="navbar-collapse" id="navbar">
			        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
			          <li className="nav-item active">
			            <Link to="/" className="nav-link">Home</Link>
			          </li> 
			        </ul>
			        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
			          <li className="nav-item active">
			            <Link to="/login" className="nav-link">Login</Link>
			          </li>
			          <li className="nav-item">
			            <Link to="/register" className="nav-link">Register</Link>
			          </li>
				      { 
				        (this.props.auth.loggedin)
				          ? <li><a onClick={event => this.onClickLogout(event)}>Logout</a></li>
				          : null 
				      }			           
			        </ul>         
			      </div>      
			    </div>
			  </nav> 
			</header>
		);
	}
	onClickLogout(event) {
		event.preventDefault();
		this.props.logout();
	}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    logout: logout
  }, dispatch)
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);