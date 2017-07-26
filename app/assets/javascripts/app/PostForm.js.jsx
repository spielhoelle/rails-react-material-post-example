var React = require('react');
import { Button, Card, Row, Col, Input, Icon } from 'react-materialize';
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
      <Row>
        <form className="row postForm " onSubmit={this.handleSubmit}>
          <Input s={4} label="First Name" ref={this.props.title} />
          <Input s={4} label="Last Name" ref={this.props.text} />
          <Button s={4} waves='light'>submit</Button>

        </form>
      </Row>
    );
  }
};

module.exports = PostForm; 
