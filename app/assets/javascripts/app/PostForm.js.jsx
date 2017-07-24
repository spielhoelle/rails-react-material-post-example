var React = require('react');

export class PostForm extends React.Component {
 constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    var title = this.refs.title.value.trim();
    var text = this.refs.text.value.trim();
    if (!text || !title) {
      return;
    }
    this.props.onPostSubmit({title: title, text: text});
    this.refs.title.value = '';
    this.refs.text.value = '';
    return;
  }

  render() {
    return (
      <div className="card">
        <h3 className="card-header">Add a Post</h3>
        <div className="card-block">
          <form className="row postForm " onSubmit={this.handleSubmit}>
            <div className="form-group col-sm-4">
              <label className="control-label" forName="titleInput">Title</label>
              <input type="text" id="titleInput" className="form-control" placeholder="Your name" ref={this.props.title} />
            </div>
            <div className="form-group col-sm-4">
              <label className="control-label" forName="postInput">Post</label>
              <textarea className="form-control" id="postInput" rows="3" placeholder="Say something..." ref={this.props.text} />
            </div>
            <div className="form-group col-sm-4 mt-5">
              <input type="submit" className="btn btn-primary" value="Post" />
            </div>
          </form>
        </div>
      </div>
    );
  }
};

module.exports = PostForm; 
