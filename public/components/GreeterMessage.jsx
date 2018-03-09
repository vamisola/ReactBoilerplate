var React = require('react');

var GreetMessage = React.createClass({
  render: function () {
    var name = this.props.name;
    var message = this.props.message;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 align-self-center">
              <h1>Hello {name}!</h1>
              <p>{message}</p>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = GreetMessage;
