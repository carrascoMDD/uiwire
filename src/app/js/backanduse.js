/*
 * backanduse.js
 *
 * Creado @author Antonio Carrasco Valero 201512301251
 *
 *
 ***************************************************************************

 Copyright 2014 2015 2016 Antonio Carrasco Valero
 uiwire asynchronous user interface written by Antonio Carrasco Valero in Javascript with AngularJS and licensed under EUPL  http://www.uiwire.org

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

var mBackanduse = angular.module("backanduse", []);

mBackanduse.factory("BackandUse", function( $location) {

    var ModuleName     = "BackandUse";
    var ModulePackages = "";
    var ModuleFullName =  ModuleName;



    var aMod_definer = function( ) {

        if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}



        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
                return;
            }


            theToInit.BACKANDUSE = true;

            theToInit.BACKAND_DOMAIN = ".backand.";


        };


        var ModuleConstants = {};
        pgInitWithModuleConstants( ModuleConstants);



        var pgInitFromModuleConstants = function( theToInit) {
            if( !theToInit) {
                return;
            }

            for( var aGlobalName in ModuleConstants) {
                if( ModuleConstants.hasOwnProperty( aGlobalName)) {
                    theToInit[ aGlobalName] = ModuleConstants[ aGlobalName];
                }
            }
        };





        var aModule = { };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;





        var fBackandUse = function() {

            if( !aModule.BACKANDUSE) {
                return false;
            }

            var anAbsURL = $location.absUrl();
            if( !anAbsURL) {
                return false;
            }

            var aBackandDomainPos = anAbsURL.indexOf( aModule.BACKAND_DOMAIN);
            if( aBackandDomainPos < 0) {
                return false;
            }

            return true;

        };
        if( fBackandUse){}/* CQT */
        aModule.fBackandUse = fBackandUse;




        return aModule;
    };



    var aService = aMod_definer();
    return aService;



});








