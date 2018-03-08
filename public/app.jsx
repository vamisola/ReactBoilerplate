var GreetMessage = React.createClass({
  render: function () {
    var name = this.props.name;
    var message = this.props.message;
    return (
      <div>
          <h1>Hello {name}!</h1>
          <p>{message}</p>
      </div>
    );
  }
});

var GreetForm = React.createClass({
  onFormSubmit: function (e){
    e.preventDefault();
    var name = this.refs.name.value;
    if(name.length > 0) {
      this.refs.name.value = '';
      this.props.onNewName(name);
    }
  },
  render: function (){
    return (
      <div>
          <form onSubmit={this.onFormSubmit}>
            <input type="text" ref="name"/>
            <button>Set Name</button>
          </form>
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
      name: this.props.name
    }
  },
  handleNewName: function(name) {
    this.setState({
      name: name
    });
  },
  render: function () {
    var name = this.state.name;
    var message = this.props.message;
    return (
      <div>

        <GreetMessage name={name} message={message}/>
        <GreetForm onNewName={this.handleNewName}/>

      </div>
    );
  }
});

ReactDOM.render(
  <Greeter name="Vina" message="Message from prop"/>,
  document.getElementById("app")
);
