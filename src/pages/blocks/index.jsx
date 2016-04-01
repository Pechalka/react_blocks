var React = require('react');

var req = require.context("blocks/", true, /sample.jsx$/);

var getBlock = function(blockName){
	return req('./' + blockName + '/sample.jsx')
}

var NotFound = React.createClass({
	render : function(){
		return <div> block not found</div>
	}
})

var BlockList = React.createClass({
	render : function(){
		return <div>
			{this.props.blocks.map(b => <a className="blocks-list__item" href={"#/blocks/" + b}>{b}</a>)}
		</div>
	}
})

var BlockContainer = React.createClass({
	render : function(){
		return <div className="block-container">
			{this.props.children}
		</div>
	}
})

require('./index.css')

var BlockTest = React.createClass({

	render: function() {
		var blocks = [<NotFound/>];
		var blockName = this.props.params.name || "all";
		var blocksNames = req.keys().map(b => b.split('\/')[1]);

		try {
			if (blockName == "all"){
				blocks = blocksNames.map(name => {
					var Block = getBlock(name);
					return <Block/>;
				});
			} else {
				var Block = getBlock(blockName);
				blocks = [<Block/>]				
			}
		} catch(e) {}
		
		blocks = blocks.map(b => <BlockContainer>{b}</BlockContainer>)

		return <div>
			<BlockList blocks={blocksNames.concat(['all'])}/>

			{blocks}
		</div>
	}

});

module.exports = BlockTest;