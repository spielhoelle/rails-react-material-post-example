import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar, NavItem } from 'react-materialize';

var NavBox = React.createClass({
  getInitialState: function() {
    return {data: []};
  },

  componentDidMount: function() {
  },

  render: function() {
    return (
      <Navbar brand='logo' right>
	<NavItem href='get-started.html'>Getting started</NavItem>
	<NavItem href='components.html'>Components</NavItem>
      </Navbar>
    );
  }
});

$(document).on("turbolinks:load", function() {
    ReactDOM.render(
      <NavBox />,
      document.getElementById('navigation')
    );
})
