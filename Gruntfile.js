module.exports = function (grunt) {

    // Displays the elapsed execution time of grunt tasks
    require('time-grunt')(grunt);

    // Load NPM Tasks
    require('load-grunt-tasks')(grunt, ['grunt-*', '!grunt-template-jasmine-istanbul', '!grunt-template-jasmine-requirejs']);

    // Project configuration.
    grunt.initConfig({

        // Store your Package file so you can reference its specific data whenever necessary
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            options: {
                mangle: false,
                beautify: true
            },
            static_mappings: {
                // Because these src-dest file mappings are manually specified, every
                // time a new file is added or removed, the Gruntfile has to be updated.
                files: {
                    'assets_min/js/admin.js': [
                        'assets/js/vendor/jquery.js',
                        'assets/js/bootstrap/affix.js',
                        'assets/js/bootstrap/alert.js',
                        'assets/js/bootstrap/button.js',
                        'assets/js/bootstrap/carousel.js',
                        'assets/js/bootstrap/collapse.js',
                        'assets/js/bootstrap/dropdown.js',
                        'assets/js/bootstrap/tab.js',
                        'assets/js/bootstrap/transition.js',
                        'assets/js/bootstrap/scrollspy.js',
                        'assets/js/bootstrap/modal.js',
                        'assets/js/bootstrap/tooltip.js',
                        'assets/js/bootstrap/popover.js',
                        'assets/js/admin.js'],
                    'assets_min/js/frontend.js': [
                        'assets/js/vendor/jquery.js',
                        'assets/js/vendor/*.js'
                    ]
                }
            }
        },

        sass: {
            dist: {
                options: {
                    style: 'expanded',
                    compass: 'true',
                    sourcemap: true,
                    lineNumbers: true,
                    require: ['bootstrap-sass']
                },
                files:{
                    'assets_min/css/admin.css' : 'assets/sass/admin.scss',
                    'assets_min/css/styles.css' : 'assets/sass/styles.scss'
                }
            }
        },

        // Run: `grunt watch` from command line for this section to take effect
        watch: {
            js : {
                files: ['<%= jshint.files %>'],
                tasks: ['jshint', 'uglify']
            },
            css : {
                files: ['<%= sass.dist.files %>'],
                tasks: 'sass'
            }
        },

        concurrent: {
          options: {
            logConcurrentOutput: true
          },
          prod: {
            tasks: ["watch:js", "watch:css"]
          },
          dev: {
            tasks: ["watch:js", "watch:css"]
          }
        }

    });

    // Default Task
    grunt.registerTask('default', ['jshint', 'uglify', 'sass']);

    grunt.registerTask("dev", ["concurrent:dev"]);

    // Release Task
    grunt.registerTask('release', ['jshint', 'uglify:dist', 'sass']);

    /*
        Notes:

        When registering a new Task we can also pass in any other registered Tasks.
        e.g. grunt.registerTask('release', 'default requirejs'); // when running this task we also run the 'default' Task

        We don't do this above as we would end up running `sass:dev` when we only want to run `sass:dist`
        We could do it and `sass:dist` would run afterwards, but that means we're compiling sass twice which (although in our example quick) is extra compiling time.

        To run specific sub tasks then use a colon, like so...
        grunt sass:dev
        grunt sass:dist
    */

};