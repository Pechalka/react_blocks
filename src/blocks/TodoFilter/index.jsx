var React = require('react');
var cx = require('classnames');

require('./index.css');

var TodoFilter = React.createClass({
	getDefaultProps: function() {
		return {
			onChageFilter : function(){}
		};
	},
	all : function(){
		this.props.onChageFilter("all")
	},
	completed : function(){
		this.props.onChageFilter("completed")
	},
	notDone : function(){
		this.props.onChageFilter("not-done")
	},
	render : function(){
		return <div className="todo-list-filter">
			<a onClick={this.all} className={cx("todo-list-filter__item", { "todo-list-filter__item--active" : this.props.filter == "all"})}>all</a>
			<a onClick={this.completed} className={cx("todo-list-filter__item", { "todo-list-filter__item--active" : this.props.filter == "completed"})}>completed</a>
			<a onClick={this.notDone} className={cx("todo-list-filter__item", { "todo-list-filter__item--active" : this.props.filter == "not-done"})}>not done</a>
		</div>
	}
})

module.exports = TodoFilter;