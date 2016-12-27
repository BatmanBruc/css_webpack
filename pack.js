var fs = require('fs');
var CleanCSS = require('clean-css');
var ftp = require('./ftp')


var pack = function() {
	if(fs.existsSync(__dirname+'/public/style/style.css'))fs.unlinkSync(__dirname+'/public/style/style.css');
	var files = fs.readdirSync(__dirname+'/public');
	console.log(files);

	var styleFile = '';
	for (var i = 0; i < files.length; i++) {
		if(files[i]==='style.css')continue;
		if(files[i].split('.')[1] === 'css'){
			console.log(files[i]);
			fileInclud = fs.readFileSync('./public/' + files[i], 'utf8');
			styleFile += fileInclud;
		}
	}

	var writer = fs.createWriteStream('public/style/style.css', {flags: 'w'});
	console.log(styleFile);
	writer.on('finish',function() {
		var source = fs.readFileSync('./public/style/style.css', 'utf8');;
		minified = new CleanCSS().minify(source).styles;
		var writer = fs.createWriteStream('public/style/style-mini.css', {flags: 'w'});

		writer.on('finish',function () {
			ftp();
		})
		writer.end(minified);
		console.log('Файл записан!');
	});
	console.log('styleFile');
	writer.end(styleFile);
	
}

module.exports = pack;

