module.exports = function(grunt) {
	grunt.initConfig({
		dirs: {
	        source: 'src',
	        staging: 'app'
	    },
		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: [{
					'<%= dirs.staging %>/css/bootstrap.min.css':'<%= dirs.source %>/styles/scss/bootstrap.scss',
					'<%= dirs.staging %>/css/theme.min.css':'<%= dirs.source %>/styles/scss/theme.scss'
		    	}]
			}
		},
		uglify: {
			dist: {
				files: [{
					'<%= dirs.staging %>/js/vendor/bootstrap.min.js':'node_modules/bootstrap-sass/assets/javascripts/bootstrap.js'
				}]
			}
			
		},
		copy: {
			main: {
			    expand: true,
			    cwd: '<%= dirs.source %>/',
			    src: ['*.html','*.png','*.ico','*.xml','js/**','img/**','fonts/**'],
			    dest: '<%= dirs.staging %>/'
			  }
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			},
			html: {
				files: '<%= dirs.source %>/*.html',
				tasks: ['copy']
			},
			img: {
				files:'<%= dirs.source %>/img/**',
				tasks: ['copy']
			},
			fonts: {
				files:'<%= dirs.source %>/fonts/**',
				tasks: ['copy']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.registerTask('default',['sass','uglify','copy', 'watch']);
};
