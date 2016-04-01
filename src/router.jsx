var React = require('react');
var Router = require('react-router');

var { Route, Link, State, Redirect,
	Navigation, RouteHandler, 
	DefaultRoute } = Router;

var Layout = require('pages/layout/index.jsx');
var Home = require('pages/home/index.jsx');
var BlockTest = require('pages/blocks/');

React.initializeTouchEvents(true);

var routes = (
	<Route handler={Layout} path="/">
		<DefaultRoute handler={Home} />
		<Route handler={Home} name="home" path="todos"  />
		<Route handler={BlockTest}  path="blocks/:name" />
		<Route handler={BlockTest}  path="blocks" />
	</Route>);

React.initializeTouchEvents(true);

module.exports = {
	run : function(){
		Router.run(routes, function (Handler) { React.render(<Handler />, document.getElementById('app'));});
		//Router.run(routes, Router.HistoryLocation, function (Handler) { React.render(<Handler />, document.getElementById('app'));});
	}
};