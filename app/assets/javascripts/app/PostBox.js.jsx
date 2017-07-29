import React from 'react';

import PostList from './PostList.js.jsx';
import PostForm from './PostForm.js.jsx';
export class PostBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: []};
    this.onFilterPosts = this.onFilterPosts.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
  }

  loadPostsFromServer() {
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
  }

  handlePostSubmit(post) {
    var posts = this.state.data;
    this.setState({data: posts}, function() {
      $.ajax({
        url: this.props.url,
        dataType: 'json',
        type: 'POST',
        data: { post: post },
        success: function(data) {
          posts.push(data);
          this.setState({data: posts});
        }.bind(this),
        error: function(xhr, status, err) {
          posts.pop();
          this.setState({data: posts});
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
    });
  }

  onFilterPosts(id) {
    var newItems = this.state.data.filter((post) => { 
      return id != post.id;
    }); 
    this.setState({ data: newItems });
  }

  onUpdate(item) {
    var items = this.state.data
    items.filter((i, index) => {
      if ( item.id === i.id ) {
        items[index] = item
      }
    });
    this.setState({data: items });
  }

  componentDidMount() {
    this.loadPostsFromServer();
  }

  render() {
    return (
      <div className="postBox my-3">
        <h3>Write a post</h3>
        <PostForm title="title" text="text" onPostSubmit={this.handlePostSubmit.bind(this)} />
        <PostList data={this.state.data} onUpdate={this.onUpdate} filterPostList={this.onFilterPosts}  />
      </div>
    );
  }
};

module.exports = PostBox
