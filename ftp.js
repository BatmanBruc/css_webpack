require('events').EventEmitter.prototype._maxListeners = 100;
var Client = require('ssh2-sftp-client');
var sftp = new Client();
var ftp = function() {
	sftp.connect({
	    host: '192.168.111.103',
	    port: '22',
	    username: 'root',
	    password: '12071995'
	}).then(() => {
	    return sftp.put(__dirname+'/public/style/style-mini.css','/var/www/r999111/data/www/999111.ru/templates/999111/css/public/style/style-mini.css', false);
	}).then((data) => {
		console.log('отправлено');
	    sftp.end();
	}).catch((err) => {
	    console.log(err, 'catch error');
	    sftp.end();
	    ftp();
	});
}

module.exports = ftp;
	