'use strict';

module.exports = function (grunt)
{
	const sass = require('node-sass');
	
	//Time how long tasks take. Can help when optimizing build times
	require('time-grunt')(grunt);
	
	// Automatically load required Grunt tasks
	require('jit-grunt')(grunt);
	
	//Define the configuration for all the tasks
	grunt.initConfig({
		sass: {
			options: {
				implementation: sass
			},
			dist: {
				files: {
					'assets/css/styles.css': 'assets/css/styles.scss'
				}
			}
		},
		watch: {
			files: 'assets/css/*.scss',
			tasks: ['sass']
		},
		browserSync: {
			dev: {
				bsFiles: {
					src: [
						'assets/css/*.css',
						'*.html',
						'assets/js/*.js'
					]
				},
				options: {
					watchTask: true,
					server: {
						baseDir: "./"
					}
				}
			}
		}
	});
	
	grunt.registerTask('css', ['sass']);
	grunt.registerTask('default', ['browserSync', 'watch']);
};