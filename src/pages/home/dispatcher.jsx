

var actions = require('./actions');
var store = require('./store');

var MemoryApi = require('utils/MemoryApi');

var todos = new MemoryApi('/api/todos', [
	{ title : 'task 1', completed : true, id : 1 },
	{ title : 'task 2', completed : false, id : 2 }
]);

actions.addTodo.listen(function(title){
	todos.create({ title : title, completed : false }).then(this.completed);
})


actions.removeTodo.listen(function(todo){
	todos.del(todo.id).then(this.completed);
})

actions.toggleComplited.listen(function(todo){
	todos.patch(todo.id, { completed : !todo.completed }).then(this.completed);
})

actions.getTodos.listen(function(filter){
	todos.get().then(function(items) {
		switch(filter){
			case "completed":
				return items.filter(t => t.completed);
			break;			
			case "not-done":
				return items.filter(t => !t.completed);
			break;			
			default:
				return items;
			break;			
		}

	}).then(json => this.completed(json, filter))	
})


