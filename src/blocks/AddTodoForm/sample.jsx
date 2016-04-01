var React = require('react');

var AddTodoForm = require('./index.jsx');

var AddTodoFormSample = React.createClass({

	render: function() {
		return <div>
			<AddTodoForm />
		</div>
	}

});

module.exports = AddTodoFormSample;