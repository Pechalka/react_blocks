var React = require('react');
var cx = require('classnames')

require('./index.css');

var TodoListItem = React.createClass({
	remove : function(e){
		this.props.onRemove(this.props);
	},
	toggle : function(){
		this.props.onToggleComplited(this.props);
	},
	render : function(){
		var css = cx('todo-list-item', { 'todo-list-item--completed' : this.props.completed })
		return <div className={css}>
			<span onClick={this.toggle} className="todo-list-item__title">{this.props.title}</span>
			<button onClick={this.remove} className="todo-list-item__remove-btn">remove</button>
		</div>
	}
})



var TodoList = React.createClass({
	getDefaultProps: function() {
		return {
			onRemove : function(){},
			onToggleComplited : function(){},
			onChageFilter : function(){}
		};
	},
	render: function() {
		var todos = this.props.todos.map(todo => <TodoListItem key={todo.id} {...todo} {...this.props}/>)
		return <div className="todo-list">			
			{todos}
		</div>
	}

});

module.exports = TodoList;