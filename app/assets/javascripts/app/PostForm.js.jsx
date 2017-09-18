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
    var text = this.refs.text.value.trim();
    if (!text || !title) {
      return;
    }
    this.props.onPostSubmit({title: title, text: text});
    document.getElementById(this.refs.title._id).value = ""
    document.getElementById(this.refs.text.id).value = ""
    return;
  }

  render() {
    return (
      <Row>
        <form className="postForm" onSubmit={this.handleSubmit}>
          <Input s={12} className="inline" label="Name" ref={this.props.title} />
          <Col s={12} className="input-field">
            <label for="input_0">Content</label>
            <textarea className="materialize-textarea" id="input_1" ref={this.props.text}/>
            <Button waves='light'>submit</Button>
          </Col>

        </form>
      </Row>
    );
  }
};

module.exports = PostForm; 
