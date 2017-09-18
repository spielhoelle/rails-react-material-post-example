var React = require('react');
const enhanceWithClickOutside = require('react-click-outside');
import { Card, Row, Col, Input } from 'react-materialize';

export class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editing: null};
    this.handleEdit = this.handleEdit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleClickOutside() {
    this.setState({ editing: null });
  }
  
  renderItemOrEditField( post ) {
    if ( this.state.editing === true ) {
      return ( 
          <Card className='post darken-1 hoverable' textClassName='' actions={[<a key={this.props.id} onClick={this.handleUpdate}>Save</a>]}>
            <Row>
              <Input className="inline" label="Name" ref="title" defaultValue={this.props.title} />
              <Col s={12} className="input-field">
                <label className="active" for={this.props.id}>Content</label>
                <textarea className="materialize-textarea" id="input_2" ref="text"  defaultValue={this.props.text}/>
            </Col>
            </Row>
          </Card>
        )
      } else {
        return (
          <Card 
            onClick={(e) => { this.handleEdit(post) }}
            className='post darken-1 hoverable'
            textClassName=''
            title={this.props.title}
            actions={[ <a key={this.props.title} onClick={(e) => { this.handleDelete(e) }}>Delete</a>, ]}>
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
      }.bind(this)
    });

  }
  handleUpdate(e){
    console.log(e)
    console.log(this)
    var id = this.props.id;
    var title = this.refs.title.state.value.trim();
    var text = this.refs.text.value.trim();
    if (!text || !title) {
      return;
    }
    this.setState( { editing: null } );
    var post = {id: id , title: title , text: text};
    this.props.onUpdateItems(post)
  }
  
  handleEdit(post){ 
    event.stopPropagation();
    this.setState( { editing: true } );
  }

  render() {
    return (
      <Col l={4} m={6} s={12}>
        {this.renderItemOrEditField(this.props)}
      </Col>
    );
  }
};

module.exports = enhanceWithClickOutside(Post);
