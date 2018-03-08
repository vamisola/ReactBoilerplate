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
var firstName = "Vina";
ReactDOM.render(
  <Greeter name={firstName} message="Not the default message from Component."/>,
  document.getElementById("app")
);
