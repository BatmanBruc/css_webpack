var fs = require('fs');

var pack = function() {
	if(fs.existsSync(__dirname+'/public/style.css'))fs.unlinkSync(__dirname+'/public/style.css');
	var files = fs.readdirSync(__dirname+'/public');
	console.log(files);

	var styleFile = '';
	for (var i = 0; i < files.length; i++) {
		if(files[i]==='style.css')continue;
		console.log(files[i]);
		fileInclud = fs.readFileSync('./public/' + files[i], 'utf8');
		styleFile += fileInclud;
	}

	var writer = fs.createWriteStream('public/style.css', {flags: 'w'});
	writer.write(styleFile);
}

module.exports = pack;

