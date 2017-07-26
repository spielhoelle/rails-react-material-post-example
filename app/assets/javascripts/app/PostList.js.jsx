var React = require('react');
import { Button } from 'react-materialize';
import Post from './Post.js.jsx';

export class PostList extends React.Component {

  render() {
    var postNodes = this.props.data.map(function(post, index) {
      return (
        // `key` is a React-specific concept and is not mandatory for the
        // purpose of this tutorial. if you're curious, see more here:
        // http://facebook.github.io/react/docs/multiple-components.html#dynamic-children
        <Post id={post.id} title={post.title} key={post.id}>
          {post.text}
          <Button s={4} waves='light' onClick={(e) => { this.props.handleDelete(post) }}>Delete</Button>
        </Post>
      );
    }, this);
    return (
      <div className="postList card-columns row my-3 ">
        {postNodes}
      </div>
    );
  }
};
module.exports = PostList; 
