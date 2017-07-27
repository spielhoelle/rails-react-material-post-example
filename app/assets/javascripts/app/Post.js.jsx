var React = require('react');
import { Button, Card, Row, Col } from 'react-materialize';

export class Post extends React.Component {

  render() {
    return (
      <Col m={6} s={12} >
        <Card className='post darken-1' textClassName='' title={this.props.title}  actions={[<a key={this.props.title} onClick={(e) => { this.props.handleDelete(e) }}>Delete</a>]}>
          <p className="card-text">{this.props.text}</p>
        </Card>
      </Col>
    );
  }
};
module.exports = Post; 

