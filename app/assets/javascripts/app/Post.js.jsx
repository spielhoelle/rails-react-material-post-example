var React = require('react');

export class Post extends React.Component {
  render() {
    return (
      <div className="post px-2 mb-2">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">
              {this.props.title}
            </h3>
          </div>
          <div className="card-block">
            <p className="card-text">{this.props.children}</p>
            <a href="#" className="btn btn-primary">edit</a>
          </div>
        </div>
      </div>
    );
  }
};
module.exports = Post; 

