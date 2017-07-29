var React = require('react');
import { Button, Card, Row, Col, Input } from 'react-materialize';
export class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editing: null};
    this.handleEdit = this.handleEdit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);

  }
  renderItemOrEditField( post ) {
    if ( this.state.editing === post.id ) {
      return ( 
          <Card className='post darken-1' textClassName='' actions={[<a key={this.props.id} onClick={this.handleUpdate}>Save</a>]}>
            <Row>
            <Input className="inline" label="Name" ref="title" defaultValue={this.props.title} />
            <Input className="inline" label="Content" ref="text" defaultValue={this.props.text}/>
          </Row>
          </Card>
        )
      } else {
        return (
          <Card 
            className='post darken-1'
            textClassName=''
            title={this.props.title}
            actions={[
              <a key={this.props.title} onClick={(e) => { this.handleDelete(e) }}>Delete</a>,
              <a key={this.props.id} onClick={(e) => { this.handleEdit(post) }}> edit</a>
              ]}>
            <p ref="cardtext" className="card-text">{this.props.text}</p>
          </Card>

        )
      }
  }
  handleDelete(e){
    $.ajax({
      type: "DELETE",
      dataType: 'json',
      url: "/posts/" + this.props.id,
      success: function(data) {
        this.props.filterPosts(this.props.id);
      }.bind(this),
      failure: function() {
        console.error(status, err.toString());
      }
    });

  }
  handleUpdate(e){
    event.stopPropagation()
    event.stopImmediatePropagation();
    var id = this.props.id;
    var title = this.refs.title.state.value.trim();
    var text = this.refs.text.state.value.trim();
    if (!text || !title) {
      return;
    }
    this.setState( { editing: null } );
    var post = {id: id , title: title , text: text};
    this.props.onUpdateItems(post)
  }
  
  handleEdit(post){ 
    event.stopPropagation();
    this.setState( { editing: post.id } );
  }

  render() {
    return (
      <Col m={6} s={12}>
        {this.renderItemOrEditField(this.props)}
      </Col>
    );
  }
};
module.exports = Post; 

