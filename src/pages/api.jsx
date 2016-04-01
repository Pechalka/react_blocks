

var addTodo = function(title){

}

var removeTodo = function(id){

}

var patch = function($update){

}

var get = function(){

}


var todos = REST('/api/todos');


todos.get();
todos.patch({ completed : true })
todos.del(2);
todos.create({ title : 2 })

