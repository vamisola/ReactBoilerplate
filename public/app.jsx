var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('./components/Greeter');

var firstName = "Hey, you!";
ReactDOM.render(
  <Greeter name={firstName} message="Not the default message from Component."/>,
  document.getElementById("app")
);
