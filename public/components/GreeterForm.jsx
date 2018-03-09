var React = require('react');

var GreetForm = React.createClass({
  onFormSubmit: function (e){
    e.preventDefault();

    var updates = {};
    var name = this.refs.name.value;
    var message = this.refs.message.value;

    if(name.length > 0) {
      this.refs.name.value = '';
      updates.name = name;
      //this.props.onNewName(name);
    }
    if(message.length > 0) {
      this.refs.message.value = '';
      updates.message = message;
    }

    this.props.onNewData(updates);
  },
  render: function (){
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 align-self-center">
              <form onSubmit={this.onFormSubmit}>
                <div><input type="text" ref="name" placeholder="Your Name here..."/></div>
                <div><textarea ref="message" placeholder="Your Message here..."></textarea></div>
                <div><button>Submit</button></div>
              </form>
          </div>
        </div>
    </div>
    );
  }
});

module.exports = GreetForm;
