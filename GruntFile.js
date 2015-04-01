module.exports = function(grunt) {
	grunt.initConfig({
		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: [{
					'app/css/bootstrap.min.css':'src/styles/scss/bootstrap.scss',
					'app/css/theme.min.css':'src/styles/scss/theme.scss'
		    	}]
			}
		},
		uglify: {
			dist: {
				files: [{
					'app/js/vendor/bootstrap.min.js':'node_modules/bootstrap-sass/assets/javascripts/bootstrap.js'
				}]
			}
			
		},
		copy: {
			main: {
			    expand: true,
			    cwd: 'src/',
			    src: ['*.html','*.png','*.ico','*.xml','js/**','img/**','fonts/**'],
			    dest: 'app/'
			  }
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			},
			html: {
				files: 'src/*.html',
				tasks: ['copy']
			},
			img: {
				files:'src/img/**',
				tasks: ['copy']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.registerTask('default',['sass','uglify','copy']);
};
