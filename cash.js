var fs = require('fs');

var cash = {
	getCash : function() {
		try{
		var cash = fs.readFileSync('cash.json', 'utf8');
		}
		catch(e){
			if(e)console.log(e);
			return undefined;
		}
		console.log('get cash!')
		return undefined;

	},

	setCash : function(cash) {
		if(fs.existsSync(__dirname+'cash.json'))fs.unlinkSync(__dirname+'cash.json');

		var writer = fs.createWriteStream('cash.json', {flags: 'w'});
		writer.on('finish',function () {
			console.log('cached!');
		})
		writer.end(cash);
	}
}

module.exports = cash;