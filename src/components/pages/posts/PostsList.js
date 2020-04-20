import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  remove: PropTypes.func.isRequired,
  setFeedback: PropTypes.func.isRequired,
  fetching: PropTypes.bool.isRequired,
  removing: PropTypes.bool.isRequired,
  posts: PropTypes.instanceOf(PropTypes.object).isRequired,
};

class PostsList extends Component {
  removePost(id) {
    const { props } = this;
    props.remove(id)
      .then(() => props.setFeedback({ message: 'Post removed', type: 'success' }))
      .catch((error) => props.setFeedback({ message: error.data, type: 'warning' }));
  }

  render() {
    const { props } = this;
    return (
      <div className="posts__list">
        { (props.fetching) ? (
          <div>Fetching Posts</div>
        ) : (
          <div>
            { (props.posts !== undefined && props.posts.length) ? (
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Content</th>
                    <th>&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  { props.posts.map((post) => (
                    <tr key={post._id}>
                      <td>{post._id}</td>
                      <td>{post.title}</td>
                      <td>{post.content}</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={(event) => this.removePost(post._id)}
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
                No posts to display
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

PostsList.propTypes = propTypes;

export default PostsList;
