var React = require('react');


var TodoList = require('./index');


var todos = [
	{ title : 'task1', completed : false },
	{ title : 'task2', completed : true },
	{ title : 'ddd', completed : false }
]

var TodoListSample = React.createClass({

	render: function() {
		return <div>
			<TodoList filter="completed" todos={todos} />
		</div>
	}

});

module.exports = TodoListSample;