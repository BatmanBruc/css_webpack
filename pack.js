var fs = require('fs');
var CleanCSS = require('clean-css');


var pack = function() {
	if(fs.existsSync(__dirname+'/public/style.css'))fs.unlinkSync(__dirname+'/public/style.css');
	var files = fs.readdirSync(__dirname+'/public');
	console.log(files);

	var styleFile = '';
	for (var i = 0; i < files.length; i++) {
		if(files[i]==='style.css')continue;
		if(files[i].split('.')[1] === 'less'){
			console.log(files[i]);
			fileInclud = fs.readFileSync('./public/' + files[i], 'utf8');
			styleFile += fileInclud;
		}
	}

	var writer = fs.createWriteStream('public/style.css', {flags: 'w'});
	writer.write(styleFile);

	var minified
	setTimeout(function(){
		var source = fs.readFileSync('./public/style.css', 'utf8');;
		minified = new CleanCSS().minify(source).styles;
		var writer = fs.createWriteStream('public/style.mini.css', {flags: 'w'});
		writer.write(minified);
	},200)
	
}

module.exports = pack;

