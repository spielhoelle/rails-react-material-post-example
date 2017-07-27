var React = require('react');
import { Button, Card, Row, Col } from 'react-materialize';

export class Post extends React.Component {

  render() {
    return (
      <Col m={6} s={12}  >
        <Card className='post darken-1' textClassName='' title={this.props.title}>
          <p className="card-text">{this.props.text}</p>
          {this.props.children}
        </Card>
      </Col>
    );
  }
};
module.exports = Post; 

