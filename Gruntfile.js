module.exports = function(grunt) {

	grunt.initConfig({

		watch: {
			tudo: {
				options: {
					livereload: true
				},
				files: ['public/**/*']
			}
		}, 

		connect: {
			servidor: {
				options: {
					livereload: true,
					base: 'public',
					port: 3000
				}
			}
		}
		
	});


	grunt.registerTask('default', ['connect', 'watch'])
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
};