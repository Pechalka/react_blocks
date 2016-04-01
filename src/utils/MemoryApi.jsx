
var memory = {};
var MemoryApi = function(endpoint, defaultValue){
	var items = memory[endpoint] = defaultValue || [];
	this.get = function(){
		return new Promise(function(resolve){
			resolve([...items])
		})
	}

	this.del = function(id){
		var ids = items.map(i => i.id);
		var index = ids.indexOf(id);
		return new Promise(function(resolve, reject){
			if (index == -1){
				reject('not found ' + id);
			} else {
				resolve({...items.splice(index, 1)})
			}
		})
	}

	this.create = function(obj){
		return new Promise(function(resolve){
			var id = new Date().getTime();
			var newObj = {...obj, id }
			items.push(newObj);
			resolve(newObj)
		})
	}

	this.patch = function(id, update){
		var ids = items.map(i => i.id);
		var index = ids.indexOf(id);
		return new Promise(function(resolve, reject){
			if (index == -1){
				reject('not found ' + id);
			} else {
				var item = items[index];
				for(var key in update){
					item[key] = update[key];
				}
				resolve({...item})
			}
		})	
	}
}

module.exports = MemoryApi;