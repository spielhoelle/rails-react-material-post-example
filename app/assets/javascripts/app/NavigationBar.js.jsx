import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar, NavItem, Icon } from 'react-materialize';

var NavBox = React.createClass({
  getInitialState: function() {
    return {data: []};
  },

  componentDidMount: function() {
  },

  render: function() {
    return (
      <Navbar className="container" brand='logo' right>
	<NavItem href='get-started.html'><Icon>search</Icon></NavItem>
	<NavItem href='get-started.html'><Icon>view_module</Icon></NavItem>
	<NavItem href='get-started.html'><Icon>refresh</Icon></NavItem>
	<NavItem href='get-started.html'><Icon>more_vert</Icon></NavItem>
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
