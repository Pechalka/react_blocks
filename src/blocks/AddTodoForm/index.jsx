var React = require('react');

require('./index.css')

var AddTodoForm = React.createClass({
	getDefaultProps: function() {
		return {
			onAdd : function(){}
		};
	},
	handleClick : function(e){
		var input = React.findDOMNode(this.refs.input);
		this.props.onAdd(input.value);
		input.value = '';
	},
	render: function() {
		return <div className="add-todo-form">
			<input className="add-todo-form__input" ref="input" type="text" />
			<button className="add-todo-form__btn" onClick={this.handleClick}>add</button>
		</div>
	}

});

module.exports = AddTodoForm;