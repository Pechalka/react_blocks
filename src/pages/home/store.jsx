var Reflux = require('reflux');

var actions = require('./actions');

var TodosStore = Reflux.createStore({
	state : {
		todos : [],
		filter : "all"
	},
	getInitialState: function() {
		return this.state;
	},
	

	init : function(){
	//	this.listenToMany(actions);
		this.listenTo(actions.getTodos.completed, this.getTodos)
		this.listenTo(actions.toggleComplited.completed, this.toggleComplited)
		this.listenTo(actions.removeTodo.completed, this.removeTodo)
		this.listenTo(actions.addTodo.completed, this.addTodo)
	},


	getTodos : function(todos, filter){
		this.state.filter = filter;
		this.state.todos = todos;
		this.trigger(this.state);				
	},

	toggleComplited : function(todo){
		var ids = this.state.todos.map(t => t.id);
		var index = ids.indexOf(todo.id);
		if (index == -1) return;

		this.state.todos[index] = todo;
		//.completed = !this.state.todos[index].completed;
		this.trigger(this.state);		
	},

	removeTodo : function(todo){
		var ids = this.state.todos.map(t => t.id);
		var index = ids.indexOf(todo.id);
		if (index == -1) return;

		this.state.todos.splice(index, 1);
		this.trigger(this.state);		
	},
	addTodo : function(todo){
		this.state.todos.push(todo);
		this.state.todos = this.state.todos.splice(0);
		this.trigger(this.state);
	},



})



module.exports = TodosStore;