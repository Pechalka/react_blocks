var React = require('react');


var TodoList = require('blocks/TodoList/');
var AddTodoForm = require('blocks/AddTodoForm/')
var TodoFilter = require('blocks/TodoFilter/')
var Title = require('blocks/Title/');

var store = require('./store');
var Reflux = require('reflux');

require('./dispatcher');

var actions = require('./actions')
var store = require('./store');

var Home = React.createClass({
	mixins : [Reflux.connect(store, 'store')],
	componentDidMount: function() {
		actions.getTodos("all")
	},
	render: function() {
		var store = this.state.store;
		return <div>
			<Title>Tasks</Title>
			<TodoFilter 
				filter={store.filter} 
				onChageFilter={actions.getTodos} 
			/>
			<TodoList 				
				onToggleComplited={actions.toggleComplited} 
				onRemove={actions.removeTodo} 				
				todos={store.todos}
			/>
			<AddTodoForm onAdd={actions.addTodo}/>
		</div>
	}

});

module.exports = Home;
