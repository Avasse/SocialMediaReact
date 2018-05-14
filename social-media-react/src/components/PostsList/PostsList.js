import React from 'react'
import { Card } from 'semantic-ui-react'

import { connect } from 'react-redux';
import { fetchPosts } from '../../store/actions/postActions';

const listStyle = {
  'maxHeight': '100%',
  'overflowY': 'scroll',
  'paddingTop': '0.2rem',
  'paddingLeft': '1.2rem',
  'paddingRight': '1.2rem'
};

class PostsList extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render () {
    const { error, loading, posts } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    else if (loading) {
      return <div>Loading...</div>;
    }

    else if (posts) {
      return (
        <div className="posts-list" style={listStyle}>
          {
            posts.map((post, index) => {
              return (
                <Card fluid key={index}>
                  <Card.Content header={post.username} />
                  <Card.Content description={post.text} />
                </Card>
              )
            })
          }
        </div>
      )
    }

    else return <div>Loading...</div>;

  }
}

const mapStateToProps = state => ({
  posts: state.posts.items,
  loading: state.posts.loading,
  error: state.posts.error
});

export default connect(mapStateToProps)(PostsList);