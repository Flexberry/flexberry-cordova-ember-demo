module.exports = function( context ) {
	var Q = context.requireCordovaModule('q');
	var deferral = new Q.defer();
	var exec = require('child_process').exec;

	console.log('Start building EmberJS application...');
	process.chdir('demoapp');
	console.log('Loading npm packages...');
    exec(['npm install'], function(npmInstallError) {
		if (npmInstallError !== null) {
			console.log('exec error: ' + npmInstallError);
		} else {
            console.log('Loading bower packages...');
            exec(['bower install'], function(bowerInstallError){
                if (bowerInstallError !== null) {
                    console.log('exec error: ' + bowerInstallError);
                } else {
                    console.log('Building EmberJS application...');
                    exec(['ember build --environment=production'], function(emberBuildError) {
                        if (emberBuildError !== null) {
                            console.log('exec error: ' + emberBuildError);
                        } else {
                            console.log('EmberJS application has been successfully built.');
                            deferral.resolve();
                        }
                    });
                }
            });
		}
	});

	return deferral.promise;
};