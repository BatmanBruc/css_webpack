var selectFile = require('./selectFile');
var fs = require('fs');
var dateFormat = require('dateformat');
var now = new Date();



function resetState(){
	var dir = {};
	var files = {};
	for (var i = 0; i < fs.readdirSync(__dirname+'/src').length; i++) {
		if(fs.readdirSync(__dirname+'/src')[i].split('.')[1] === 'less'){
			dir[fs.readdirSync(__dirname+'/src')[i]] = fs.readdirSync(__dirname+'/src')[i];
		}
	}
	//console.log(dir);
	for (var key in dir) {
		files[key] = fs.readFileSync('./src/' + key, 'utf8');
		
	}
	//console.log({'dir':dir,'Files':files});
	return {'dir':dir,'files':files};
}

var state = resetState();

function func() {
	var updateState = resetState(); 

	for (var key in updateState.dir) {
		if(!state.dir.hasOwnProperty(key)){
			selectFile(key);
			state = resetState();
			console.log('added: '+key)
			continue;
		}
		if (state.files[key] != updateState.files[key]) {
			selectFile(key);
			state = resetState();
			console.log('update: '+key);
		}
	}
	console.log('monitor/'+dateFormat("longTime"));
	setTimeout(function() {
		func();
	},500);
}

func();