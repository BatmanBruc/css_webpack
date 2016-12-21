var read = require('read');
var fs = require('fs');
var less = require('less');
var pack = require('./pack');

console.log(fs.readFileSync('./src/footer.less', 'utf8'))
var selectFile = function(filename){
	var contentsfilesrc;
	contentsfilesrc = fs.readFileSync('./src/' + filename, 'utf8');
	less.render(contentsfilesrc,function (e, output) {
	   var writer = fs.createWriteStream('public/'+filename.split('.')[0]+'.css', {flags: 'w'});
	   writer.write(output.css);
	});
	//console.log('selectFile'+contentsfilesrc);
	//if(contentsfilesrc != undefined)setTimeout(pack,300);
}

module.exports = selectFile;


