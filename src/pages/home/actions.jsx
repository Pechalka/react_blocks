var Reflux = require('reflux');


var actions = Reflux.createActions([]);


actions.addTodo = Reflux.createAction({ asyncResult : true });
actions.removeTodo = Reflux.createAction({ asyncResult : true });
actions.toggleComplited = Reflux.createAction({ asyncResult : true });
actions.getTodos = Reflux.createAction({ asyncResult : true });


module.exports = actions;