import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPosts, removePost, addPost } from '../../../actions/posts';
import { setFeedback } from '../../../actions/feedback';
import {
  getAllPosts,
  getIsFetchingPosts,
  getIsAddingPost,
  getIsRemovingPost,
} from '../../../reducers/posts';

import PostsList from './PostsList';
import AddForm from './AddForm';

const propTypes = {
  getPosts: PropTypes.func.isRequired,
  fetching: PropTypes.bool.isRequired,
  posts: PropTypes.instanceOf(PropTypes.object).isRequired,
  setFeedback: PropTypes.func.isRequired,
  removePost: PropTypes.func.isRequired,
  removing: PropTypes.bool.isRequired,
  addPost: PropTypes.func.isRequired,
  adding: PropTypes.bool.isRequired,
};

class PagePosts extends Component {
  componentDidMount() {
    const { props } = this;
    if (!props.fetching) {
      props.getPosts()
        .catch((error) => props.setFeedback({ message: 'fdsf', type: 'warning' }));
    }
  }

  render() {
    const { props } = this;
    return (
      <div>
        <h1 className="display-4">Posts</h1>
        <PostsList
          posts={props.posts}
          fetching={props.fetching}
          remove={props.removePost}
          removing={props.removing}
          setFeedback={props.setFeedback}
        />
        <AddForm
          add={props.addPost}
          adding={props.adding}
          setFeedback={props.setFeedback}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: getAllPosts(state),
    fetching: getIsFetchingPosts(state),
    adding: getIsAddingPost(state),
    removing: getIsRemovingPost(state),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getPosts,
    removePost,
    setFeedback,
    addPost,
  }, dispatch);
}

PagePosts.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(PagePosts);
