/*
 * Gruntfile.js
 *
 * Created @author Antonio Carrasco Valero 201806110657
 *
 *
 ***************************************************************************
 
 Copyright 2018 Antonio Carrasco Valero
 AngularJS components including Tabs, Arguments, Table, Selector, Candidates, Editor, Creator, Action and wires, zero code with JSON specs..
 
 Licensed under the EUPL, Version 1.1 only (the "Licence");
 You may not use this work except in compliance with the
 Licence.
 You may obtain a copy of the Licence at:
 https://joinup.ec.europa.eu/software/page/eupl/licence-eupl
 Unless required by applicable law or agreed to in
 writing, software distributed under the Licence is
 distributed on an "AS IS" basis,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 express or implied.
 See the Licence for the specific language governing
 permissions and limitations under the Licence.
 {{License2}}
 
 {{Licensed1}}
 {{Licensed2}}
 
 ***************************************************************************
 *
 */
module.exports = function(grunt) {


    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            scripts: {
                files: [
                    'zzz-app/**/*'
                ],

                tasks: [ 'clean', 'copy', 'concatwhole', 'uglifywhole'],
                options: {
                    spawn:false,
                    event:['all']
                }
            }
        },
        clean: [ "www/**/*"],
        copy: {
            main: {
                files: [
                    {expand: true, flatten: true,  src: ['app/src/launchapp.html'], dest: 'www/springnut/app', filter: 'isFile'},
                    {expand: true, flatten: true,  src: ['app/src/LICENCIA'], dest: 'www/springnut/app', filter: 'isFile'},
                    {expand: true, flatten: true,  src: ['app/src/LICENSE'], dest: 'www/springnut/app', filter: 'isFile'},

                    {expand: true, cwd: 'app/src', src: ['css/**'],  dest: 'www/springnut/app'},
                    {expand: true, cwd: 'app/src', src: ['data/**'],  dest: 'www/springnut/app'},
                    {expand: true, cwd: 'app/src', src: ['harness/**'],  dest: 'www/springnut/app'},
                    {expand: true, cwd: 'app/src', src: ['img/**'],  dest: 'www/springnut/app'},
                    {expand: true, cwd: 'app/src', src: ['js/**'],  dest: 'www/springnut/app'},
                    {expand: true, cwd: 'app/src', src: ['lib/**'],  dest: 'www/springnut/app'},
                    {expand: true, cwd: 'app/src', src: ['partials/**'],  dest: 'www/springnut/app'},
                ]
            }
        },

        concat: {
            options: {
                separator: ';',
                sourceMap: true
            },
            concatDoers: {
                src: [
                   // 'webapp/js/logmoduleloads-priic.js',
                ],
                dest: 'www/js/priic-doers-common.js'
            },
        },

        uglify: {
            uglifyDoers: {
                src: '<%= concat.concatDoers.dest %>',
                dest: 'www/js/priic-doers-common.min.js',
                options: {
                    banner: '/*! <%= pkg.name %>  - v<%= pkg.version %> - */\n',
                    sourceMap: true,
                    sourceMapIncludeSources: true,
                    sourceMapIn: 'www/js/priic-doers-common.js.map'
                }
            }
        },
      
        
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');


    grunt.registerTask('concatwhole', [ 'concat:concatDoers']);

    grunt.registerTask('uglifywhole', [ 'uglify:uglifyDoers']);

    grunt.registerTask('justcleancopyfordeviniciojsp', [ 'clean', 'copy']);

    grunt.registerTask('default', [ 'clean', 'copy', 'concatwhole', 'uglifywhole']);

};
