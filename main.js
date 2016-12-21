var selectFile = require('./selectFile');
var fs = require('fs');


var stateDir = {};
var stateFiles = {};
function resetState(){
	stateDir = fs.readdirSync(__dirname+'/src');
	console.log(stateDir);
	for (var i = 0; i < stateDir.length; i++) {
		stateFiles[stateDir[i]] = fs.readFileSync('./src/' + stateDir[i], 'utf8');
		
	}
}



resetState();

function func() {
	var dir = fs.readdirSync(__dirname+'/src');
	var files = {};
	for (var i = 0; i < stateDir.length; i++) {
		files[dir[i]] = fs.readFileSync('./src/' + dir[i], 'utf8');
	}

	for (var i = 0; i < dir.length; i++) {
		if(stateDir[i] != dir[i]){

			selectFile(dir[i]);
			resetState();

			console.log('added:'+stateDir[i])
		}
		if(stateFiles[stateDir[i]] != files[dir[i]]){
			selectFile(stateDir[i]);
			resetState();

			console.log('update:'+stateDir[i])
		}
	}
	console.log('monitor');
	setTimeout(function() {
		func();
	},500);
}

func();