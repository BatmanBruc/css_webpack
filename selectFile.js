var read = require('read');
var fs = require('fs');
var less = require('less');
var pack = require('./pack');

var selectFile = function(filename){
	var contentsfilesrc;
	contentsfilesrc = fs.readFileSync('./src/' + filename, 'utf8');
	less.render(contentsfilesrc,function (e, output) {
		if(e){
			console.log('ERROR:'+e)
			setTimeout(pack,300);
			return;
		}
	   var writer = fs.createWriteStream('public/'+filename.split('.')[0]+'.css', {flags: 'w'});
	   writer.write(output.css);
	   if(contentsfilesrc != ''){
			setTimeout(pack,300);
			console.log('pack');
		};
	});
	
}

module.exports = selectFile;


