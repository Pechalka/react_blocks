var React = require('react');

var Title = require('./index');

var TitleSample = React.createClass({

	render: function() {
		return <div>
			<Title>Tasks</Title>
		</div>
	}

});

module.exports = TitleSample;