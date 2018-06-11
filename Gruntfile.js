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
                    'app/**/*'
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
                    {expand: true, flatten: true,  src: ['app/logmoduleloads-priic.js'], dest: 'www/js/', filter: 'isFile'},

                    {expand: true, flatten: true,  src: ['test/priic-front-fake-tests/tobe_read_fake_remotehttp.json'], dest: 'www/resources/', filter: 'isFile'},

                    {expand: true, cwd: 'webapp/', src: ['META-INF/**'],  dest: 'www/'},
                    {expand: true, cwd: 'webapp/', src: ['WEB-INF/**'],   dest: 'www/'},


                    /* ACV OJO 201602261355 TODO Remove when not in debug development, this deployment of the non-minified javascript files */
                    {expand: true, cwd: 'webapp/', src: ['js/**'],  dest: 'www/'}
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
                    'webapp/js/logmoduleloads-priic.js',

                    'webapp/js/te2est/te2est-traversals/te2est-traversals-type.js',
                    'webapp/js/te2est/te2est-traversals/te2est-traversals-types.js',
                    'webapp/js/te2est/te2est-traversals/te2est-traversals.js',

                    'webapp/js/te2est/te2est-checks/te2est-checks-types.js',
                    'webapp/js/te2est/te2est-checks/te2est-checks.js',


                    'webapp/js/priieventkinds.js',
                    'webapp/js/priieventkinds_ng.js',


                    'webapp/js/priic-doers-common/priic-doers-common-types.js',

                    'webapp/js/priic-doers-common/priic-assembly-constants.js',

                    'webapp/js/priic-doers-common/priic-doer-type.js',

                    'webapp/js/priic-doers-common/priic-changerequestsregistry-type.js',

                    'webapp/js/priic-doers-common/priic-databasewrapper-type.js',
                    'webapp/js/priic-doers-common/priic-filesystemwrapper-type.js',

                    'webapp/js/priic-doers-common/priic-collectionsmanager-type.js',
                    'webapp/js/priic-doers-common/priic-configsmanager-type.js',
                    'webapp/js/priic-doers-common/priic-staticsmanager-type.js',

                    'webapp/js/priic-doers-common/priic-specs-type.js',
                    'webapp/js/priic-doers-common/priic-readspecs-type.js',
                    'webapp/js/priic-doers-common/priic-sortspecs-type.js',
                    'webapp/js/priic-doers-common/priic-responsespecs-type.js',
                    'webapp/js/priic-doers-common/priic-actionspecs-type.js',
                    'webapp/js/priic-doers-common/priic-forwardspecs-type.js',
                    'webapp/js/priic-doers-common/priic-changespecs-type.js',


                    'webapp/js/priic-doers-common/priic-ctxt-type.js',

                    'webapp/js/priic-doers-common/priic-readctxt-type.js',
                    'webapp/js/priic-doers-common/priic-readctxt-treewalk-type.js',
                    'webapp/js/priic-doers-common/priic-readctxt-treewalk-full-type.js',
                    'webapp/js/priic-doers-common/priic-readctxt-treewalk-traversal-type.js',
                    'webapp/js/priic-doers-common/priic-readctxt-treewalk-node-type.js',
                    'webapp/js/priic-doers-common/priic-readctxt-treewalk-root-type.js',
                    'webapp/js/priic-doers-common/priic-readctxt-isobatch-type.js',

                    'webapp/js/priic-doers-common/priic-changectxt-type.js',
                    'webapp/js/priic-doers-common/priic-changectxt-onebyone-type.js',


                    'webapp/js/priic-doers-common/priic-strategy-type.js',
                    'webapp/js/priic-doers-common/priic-readstrategy-type.js',
                    'webapp/js/priic-doers-common/priic-readstrategy-treewalk-type.js',
                    'webapp/js/priic-doers-common/priic-readstrategy-isobatch-type.js',

                    'webapp/js/priic-doers-common/priic-changestrategy-type.js',
                    'webapp/js/priic-doers-common/priic-changestrategy-onebyone-type.js',

                    'webapp/js/priic-doers-common/priic-sideeffectsdiscover-type.js',

                    'webapp/js/priic-doers-common/priic-remotesorter-type.js',
                    'webapp/js/priic-doers-common/priic-remotereader-type.js',
                    'webapp/js/priic-doers-common/priic-remotechanger-type.js',

                    'webapp/js/priic-doers-common/priic-collectionsreader-type.js',

                    'webapp/js/priic-doers-common/priic-responseassembler-type.js',
                    'webapp/js/priic-doers-common/priic-idreserver-type.js',
                    'webapp/js/priic-doers-common/priic-actionexecutor-type.js',
                    'webapp/js/priic-doers-common/priic-forwarder-type.js',

                    'webapp/js/priic-doers-common/priic-apprequestrouter-type.js',
                    'webapp/js/priic-doers-common/priic-safeguarder-type.js',

                    'webapp/js/priic-doers-common/priic-choreographer-general-type.js',
                    'webapp/js/priic-doers-common/priic-choreographer-userdata-type.js',
                    'webapp/js/priic-doers-common/priic-choreographer-subordinate-type.js',
                    'webapp/js/priic-doers-common/priic-choreographer-safeguard-type.js',
                    'webapp/js/priic-doers-common/priic-choreographyspecs-type.js',
                    'webapp/js/priic-doers-common/priic-keepalive-type.js',
                    'webapp/js/priic-doers-common/priic-pingremote-type.js',
                    'webapp/js/priic-doers-common/priic-databasecleaner-type.js',
                    'webapp/js/priic-doers-common/priic-commsanalyzer-type.js',
                    'webapp/js/priic-doers-common/priic-commsbroker-type.js',
                    'webapp/js/priic-doers-common/priic-deltaservertime-type.js',
                    'webapp/js/priic-doers-common/priic-accessprotector-type.js',
                    'webapp/js/priic-doers-common/priic-choreographer-master-type.js',

                    'webapp/js/priic-doers-common/priic-assembly-type.js',
                    'webapp/js/priic-doers-common/priic-assembly-svce.js',

                    'webapp/js/priic-doers-common/priic-remotereader-todiscover-type.js',
                    'webapp/js/priic-doers-common/priic-assembly-todiscover-type.js'

                ],
                dest: 'www/js/priic-doers-common.js'
            },
            concatFake: {
                src: [
                    'webapp/js/priic-doers-fake/priic-doers-fake-types.js',
                    'webapp/js/priic-doers-fake/priic-assembly-fake-constants.js',

                    'webapp/js/priic-doers-fake/priic-idreserver-fake-type.js',
                    'webapp/js/priic-doers-fake/priic-actionexecutor-fake-type.js',
                    'webapp/js/priic-doers-fake/priic-apprequestrouter-fake-type.js',
                    'webapp/js/priic-doers-fake/priic-collectionsmanager-fake-type.js',
                    'webapp/js/priic-doers-fake/priic-configsmanager-fake-type.js',
                    'webapp/js/priic-doers-fake/priic-staticsmanager-fake-type.js',
                    'webapp/js/priic-doers-fake/priic-remotechanger-fake-type.js',
                    'webapp/js/priic-doers-fake/priic-remotereader-fake-type.js',
                    'webapp/js/priic-doers-fake/priic-remotesorter-fake-type.js',
                    'webapp/js/priic-doers-fake/priic-responseassembler-fake-type.js',

                    'webapp/js/priic-doers-fake/priic-readspecs-fake-type.js',
                    'webapp/js/priic-doers-fake/priic-sortspecs-fake-type.js',
                    'webapp/js/priic-doers-fake/priic-responsespecs-fake-type.js',
                    'webapp/js/priic-doers-fake/priic-changespecs-fake-type.js',
                    'webapp/js/priic-doers-fake/priic-actionspecs-fake-type.js',
                    'webapp/js/priic-doers-fake/priic-readctxt-fake-type.js',
                    'webapp/js/priic-doers-fake/priic-readstrategy-fake-type.js',
                    'webapp/js/priic-doers-fake/priic-changestrategy-fake-type.js',

                    'webapp/js/priic-doers-fake/priic-assembly-fake-type.js',
                    'webapp/js/priic-doers-fake/priic-assembly-fake-svce.js',

                    'webapp/js/priic-doers-fake/priic-remotereader-todiscover-fake-type.js',
                    'webapp/js/priic-doers-fake/priic-assembly-todiscover-fake-type.js',
                    'webapp/js/priic-doers-fake/priic-assembly-todiscover-fake-svce.js',

                    'webapp/js/priic-front-fake/priic-front-fake-types.js',
                    'webapp/js/priic-front-fake/priic-front-fake-type.js',
                    'webapp/js/priic-front-fake/priic-front-fake-svce.js'

                ],
                dest: 'www/js/priic-doers-and-front-fake.js'
            },
            concatAngular: {
                src: [
                    'webapp/js/useprii-static.js',
                    'webapp/js/useprii.js',

                    'webapp/js/priic-front-common/priic-front-types.js',

                    'webapp/js/priic-front-common/priic-common-ctrl-type.js',
                    'webapp/js/priic-front-common/priic-common-svce-type.js',

                    'webapp/js/priic-front-common/priic-progresstracker-type.js',
                    'webapp/js/priic-front-common/priic-progresstracker-svce.js',

                    'webapp/js/priic-front-common/priic-connectionstatus-type.js',
                    'webapp/js/priic-front-common/priic-connectionstatus-svce.js',

                    'webapp/js/priic-front-common/priic-remotereadtracker-type.js',
                    'webapp/js/priic-front-common/priic-remotereadtracker-svce.js',

                    'webapp/js/priic-front-common/priic-remotereadtracker-todiscover-type.js',

                    'webapp/js/priic-front-common/priic-disconnector-type.js',
                    'webapp/js/priic-front-common/priic-disconnector-svce.js',

                    'webapp/js/priic-front-common/priic-facade-switch-svce-type.js',
                    'webapp/js/priic-front-common/priic-facade-switch-svce.js',
                    'webapp/js/priic-front-common/priic-facade-switch-ctrl-type.js',
                    'webapp/js/priic-front-common/priic-facade-switch-ctrl.js',

                    'webapp/js/priic-front-common/priic-front-type.js',
                    'webapp/js/priic-front-common/priic-front-svce.js',

                    'webapp/js/priic-front-common/httpService-priic-facade-type.js',
                    'webapp/js/priic-front-common/httpService-priic-facade-svce.js',

                    'webapp/js/priic-front-common/priic-actionslistener-todiscover-type.js',

                    'webapp/js/priic-front-common/priic-instrumentation-type.js',
                    'webapp/js/priic-front-common/priic-instrumentation-ctrl.js'


                ],
                dest: 'www/js/priic-front-common.js'
            }
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
            },
            uglifyFake: {
                src: '<%= concat.concatFake.dest %>',
                dest: 'www/js/priic-doers-and-front-fake.min.js',
                options: {
                    banner: '/*! <%= pkg.name %>  - v<%= pkg.version %> - */\n',
                    sourceMap: true,
                    sourceMapIncludeSources: true,
                    sourceMapIn: 'www/js/priic-doers-and-front-fake.js.map'
                }
            },
            uglifyAngular: {
                src: '<%= concat.concatAngular.dest %>',
                dest: 'www/js/priic-front-common.min.js',
                options: {
                    banner: '/*! <%= pkg.name %>  - v<%= pkg.version %> - */\n',
                    sourceMap: true,
                    sourceMapIncludeSources: true,
                    sourceMapIn: 'www/js/priic-front-common.js.map'
                }
            }
        },
      
        
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');


    grunt.registerTask('concatwhole', [ 'concat:concatDoers', 'concat:concatFake', 'concat:concatAngular']);

    grunt.registerTask('uglifywhole', [ 'uglify:uglifyDoers', 'uglify:uglifyFake', 'uglify:uglifyAngular']);

    grunt.registerTask('justcleancopyfordeviniciojsp', [ 'clean', 'copy']);

    grunt.registerTask('default', [ 'clean', 'copy', 'concatwhole', 'uglifywhole']);

};
