import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  add: PropTypes.func.isRequired,
  setFeedback: PropTypes.func.isRequired,
  adding: PropTypes.bool.isRequired,
};

class AddForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      content: '',
    };
  }

  submitForm(event) {
    const { props, state } = this;
    event.preventDefault();
    props.add(state)
      .then(() => this.setState({ title: '', content: '' }))
      .then(() => props.setFeedback({ message: 'Post added', type: 'success' }))
      .catch(() => props.setFeedback({ message: 'There was a problem adding the post', type: 'warning' }));
  }

  render() {
    const { title, content } = this.state;
    const { adding } = this.props;
    return (
      <form onSubmit={(event) => this.submitForm(event, this.state)}>
        <h3>Add Post</h3>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter title"
            onChange={(event) => this.setState({ title: event.target.value })}
            value={title}
          />
        </div>
        <div className="form-group">
          <label>Content</label>
          <input
            type="text"
            className="form-control"
            id="content"
            placeholder="Enter content"
            onChange={(event) => this.setState({ content: event.target.value })}
            value={content}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={adding}
        >
          Add Post
        </button>
      </form>
    );
  }
}

AddForm.propTypes = propTypes;

export default AddForm;
