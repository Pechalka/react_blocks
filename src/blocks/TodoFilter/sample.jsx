var React = require('react');

var TodoFilter = require('./index');

var TodoFilterSample = React.createClass({

	render: function() {
		return <div>
			<TodoFilter filter="all"/>
		</div>
	}

});

module.exports = TodoFilterSample;