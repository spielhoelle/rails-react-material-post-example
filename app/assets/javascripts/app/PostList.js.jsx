var React = require('react');
import { Button } from 'react-materialize';
import Post from './Post.js.jsx';

export class PostList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {data: this.props.data};
    this.updateItems = this.updateItems.bind(this)
  }
  
  updateItems(item) {
    $.ajax({
      type: "PUT",
      dataType: 'json',
      url: "/posts/" + item.id,
      data: {post: item},
      success: function(data) {
        this.props.onUpdate(item)
      }.bind(this),
      failure: function() {
        console.error(status, err.toString());
      }
    });
  }

  render() {
    var postNodes = this.props.data.map(function(post, index) {
      return (
        <Post title={post.title} onUpdateItems={this.updateItems} filterPosts={this.props.filterPostList} text={post.text} key={post.id} id={post.id}  >
        </Post>
      );
    }, this);
    return (
      <div className="postList card-columns row my-3 " >
        {postNodes}
      </div>
    );
  }
};
module.exports = PostList; 
