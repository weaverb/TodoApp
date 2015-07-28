/// <binding ProjectOpened='watch' />
/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function (grunt) {
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        clean: ['wwwroot/lib/*'],       
        jshint: {
            files: ['Scripts/**/*.js'],
            options: {
                '-W069':false
            }
        },
        uglify: {
            all: {
                src: ['Scripts/app.js', 'Scripts/**/*.js'],
                dest: 'wwwroot/lib/app.min.js'
            }
        },
        watch: {
            files: ['Scripts/**/*.js'],
            tasks:['all']
        }
    });

    grunt.registerTask("all", ['clean', 'jshint', 'uglify']);

};