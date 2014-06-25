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
                    'js/admin.js': ['dev/js/bootstrap/affix.js',
                        'dev/js/bootstrap/alert.js',
                        'dev/js/bootstrap/button.js',
                        'dev/js/bootstrap/carousel.js',
                        'dev/js/bootstrap/collapse.js',
                        'dev/js/bootstrap/dropdown.js',
                        'dev/js/bootstrap/tab.js',
                        'dev/js/bootstrap/transition.js',
                        'dev/js/bootstrap/scrollspy.js',
                        'dev/js/bootstrap/modal.js',
                        'dev/js/bootstrap/tooltip.js',
                        'dev/js/bootstrap/popover.js',
                        'dev/js/admin.js'],
                    'js/frontend.js': [//'dev/js/bootstrap/affix.js',
                        //'dev/js/bootstrap/alert.js',
                        //'dev/js/bootstrap/button.js',
                        'dev/js/bootstrap/carousel.js',
                        //'dev/js/bootstrap/collapse.js',
                        //'dev/js/bootstrap/dropdown.js',
                        //'dev/js/bootstrap/tab.js',
                        'dev/js/bootstrap/transition.js',
                        //'dev/js/bootstrap/scrollspy.js',
                        'dev/js/bootstrap/modal.js',
                        //'dev/js/bootstrap/tooltip.js',
                        //'dev/js/bootstrap/popover.js',
                        'dev/js/frontend.js',
                        'dev/js/vendor/jquery.mustache.js',
                        'dev/js/vendor/mustache.js',
                        'dev/js/modules/map.js',
                        'dev/js/modules/search.js']
                }
            }
        },

        jshint: {
            /*
                Note:
                In case there is a /release/ directory found, we don't want to lint that
                so we use the ! (bang) operator to ignore the specified directory
            */
            files: ['Gruntfile.js', 'dev/**/*.js', 'dev/js/modules/*.js', '!js/**', '!dev/js/bootstrap/**', '!js/vendor/**', '!dev/js/vendor/**'],
            options: {
                curly:   true,
                eqeqeq:  true,
                immed:   true,
                latedef: true,
                newcap:  true,
                noarg:   true,
                sub:     true,
                undef:   true,
                boss:    true,
                eqnull:  true,
                browser: true,

                globals: {
                    // AMD
                    module:     true,
                    require:    true,
                    requirejs:  true,
                    define:     true,

                    // Environments
                    console:    true,
                    alert:      true,

                    // General Purpose Libraries
                    $:          true,
                    jQuery:     true,

                    meta:       true,
                    base: true,

                    search: true,
                    map: true,
                    google: true,
                    restaurants: true

                }
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'expanded',
                    compass: 'true',
                    lineNumbers: true,
                    require: ['./dev/sass/includes/url64.rb','bootstrap-sass']
                },
                expand: true,
                cwd: 'dev/sass/',
                src: ['*.scss'],
                files: 'dev/**/*.scss',
                dest: './css/',
                ext: '.css'
            }
        },

        // `optimizationLevel` is only applied to PNG files (not JPG)
        imagemin: {
            png: {
                options: {
                    optimizationLevel: 7
                },
                files: [
                    {
                        expand: true,
                        cwd: 'dev/images/',
                        src: ['**/*.png'],
                        dest: 'images/',
                        ext: '.png'
                    }
                ]
            },
            jpg: {
                options: {
                    progressive: true
                },
                files: [
                    {
                        expand: true,
                        cwd: 'dev/images/',
                        src: ['**/*.jpg'],
                        dest: 'images/',
                        ext: '.jpg'
                    }
                ]
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

    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.registerTask('imagemin', ['imagemin']);

    // Release Task
    grunt.registerTask('release', ['jshint', 'uglify:dist', 'sass', 'imagemin']);

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