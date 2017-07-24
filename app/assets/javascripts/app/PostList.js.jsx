var React = require('react');
import Post from './Post.js.jsx';

export class PostList extends React.Component {
  render() {
    var postNodes = this.props.data.map(function(post, index) {
      return (
        // `key` is a React-specific concept and is not mandatory for the
        // purpose of this tutorial. if you're curious, see more here:
        // http://facebook.github.io/react/docs/multiple-components.html#dynamic-children
        <Post title={post.title} key={index}>
          {post.text}
        </Post>
      );
    });
    return (
      <div className="postList card-columns row my-3 ">
        {postNodes}
      </div>
    );
  }
};
module.exports = PostList; 
