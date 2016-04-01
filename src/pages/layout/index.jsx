var React = require('react');

var { RouteHandler, State } = require('react-router');


var Layout = React.createClass({
    render: function () {
        return <div>
            <RouteHandler  />
        </div>
    }

});

module.exports = Layout;