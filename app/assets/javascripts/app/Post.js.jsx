var React = require('react');

export class Post extends React.Component {
  render() {
    return (
      <div className="col-md-3">
        <div className="post mb-3">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">
                {this.props.title}
              </h3>
            </div>
            <div className="card-block">
              <p className="card-text">{this.props.children}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
module.exports = Post; 

