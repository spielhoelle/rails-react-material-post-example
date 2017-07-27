var React = require('react');
import { Button, Card, Row, Col, Input, Icon } from 'react-materialize';
export class PostForm extends React.Component {
 constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    var title = this.refs.title.state.value.trim();
    var text = this.refs.text.state.value.trim();
    if (!text || !title) {
      return;
    }
    this.props.onPostSubmit({title: title, text: text});
    document.getElementById(this.refs.title._id).value = ""
    document.getElementById(this.refs.text._id).value = ""
    return;
  }

  render() {
    return (
      <Row>
        <form className="postForm" onSubmit={this.handleSubmit}>
          <Input className="inline" label="Name" ref={this.props.title} />
          <Input className="inline" label="Content" ref={this.props.text} />
          <Button waves='light'>submit</Button>

        </form>
      </Row>
    );
  }
};

module.exports = PostForm; 
