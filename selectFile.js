var read = require('read');
var fs = require('fs');
var less = require('less');

var filename;
var contentsfilesrc;
var contentsfilepublic;
//задаем имя файла
read({ prompt : 'filename: ' }, function (err, fileName) {
	filename = fileName;
	//Содержимое файла src
	var contentsfilesrc = fs.readFileSync('./src/' + filename + '.less', 'utf8');
	//Содержимое файла public
	less.render(contentsfilesrc,function (e, output) {
	   var writer = fs.createWriteStream('public/'+filename+'.css', {flags: 'w'});
	   writer.write(output.css);
	});
});

