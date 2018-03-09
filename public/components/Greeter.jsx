var React = require('react');
var GreetMessage = require('GreeterMessage');
var GreetForm = require('GreeterForm');

var Greeter = React.createClass({
  getDefaultProps: function(){
    return {
      name: 'React',
      message: 'This is the default message.'
    }
  },
  getInitialState: function () {
    return {
      name: this.props.name,
      message: this.props.message
    }
  },
  handleNewData: function(updates) {
    this.setState(updates);
  },
  render: function () {
    var name = this.state.name;
    var message = this.state.message;
    return (
      <div>

        <GreetMessage name={name} message={message}/>
        <GreetForm onNewData={this.handleNewData}/>

      </div>
    );
  }
});


module.exports = Greeter;
