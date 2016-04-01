var React = require('react');

require('./index.css')

var Title = React.createClass({
	render: function() {
		return <h2 {...this.props} className="title">{this.props.children}</h2>
	}

});

module.exports = Title;