import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 

class PageHome extends Component {
	constructor(props) {
		super(props);
	}
	render () {
		return (
			<div>
				<h1 className="display-4">Home</h1>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({

  }, dispatch)
}

export default connect(null, mapDispatchToProps)(PageHome);