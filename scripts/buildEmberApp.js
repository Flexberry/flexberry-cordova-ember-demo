module.exports = function(context) {
	var Q = context.requireCordovaModule('q');
	var deferral = new Q.defer();
	var exec = require('child_process').exec;

	console.log('Start building EmberJS application ...');
	process.chdir('demoapp');
	
	console.log('Loading npm packages ...');
	exec(['npm install'], function(e2) {
		if (e2 !== null) {
			console.log('exec error: ' + e2);
		} else {
			console.log('Building EmberJS application ...');
			exec(['ember build --environment=production'], function(e3) {
				if (e3 !== null) {
					console.log('exec error: ' + e3);
				} else {
					console.log('EmberJS application has been successfully built.');
					deferral.resolve();
				}
			});
		}
	});

	return deferral.promise;
};