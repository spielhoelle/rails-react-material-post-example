import React from 'react';
import ReactDOM from 'react-dom';
import PostList from './PostList.js.jsx';
import PostForm from './PostForm.js.jsx';

var PostBox = React.createClass({
  loadPostsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  handlePostSubmit: function(post) {
    var posts = this.state.data;
    posts.push(post);
    this.setState({data: posts}, function() {
      // `setState` accepts a callback. To avoid (improbable) race condition,
      // `we'll send the ajax request right after we optimistically set the new
      // `state.
      $.ajax({
        url: this.props.url,
        dataType: 'json',
        type: 'POST',
        data: { post: post },
        success: function(data) {
        }.bind(this),
        error: function(xhr, status, err) {
          posts.pop();
          this.setState({data: posts});
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
    });
  },
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadPostsFromServer();
    this.loadPostsFromServer
  },
  render: function() {
    return (
      <div className="postBox">
        <h1>Posts</h1>
        <PostForm title="title" text="text" onPostSubmit={this.handlePostSubmit} />
        <PostList data={this.state.data} />
      </div>
    );
  }
});


$(document).on("turbolinks:load", function() {
  var $content = $("#content");
  if ($content.length > 0) {
    ReactDOM.render(
      <PostBox url="posts.json" />,
      document.getElementById('content')
    );
  }
})
