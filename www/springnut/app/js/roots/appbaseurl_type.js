'use strict';

/*
 * appbaseurl_type.js
 *
 * Creado @author Antonio Carrasco Valero 201410030300
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



angular.module("rootsTypes").factory("AppBaseURLType", [
    "TypesRegistrySvce",
function( theSS_typesregistry) {


    var ModuleName     = "appbaseurl_type";
    var ModulePackages = "roots";
    var ModuleFullName = ModulePackages + "/" + ModuleName;



    var aMod_definer = function() {


        if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}






        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.APPBASEURLFIELDDOMID = "did_AppBaseURLfld";
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




        var gAppBaseURL = null;


        var fAppBaseURL = function() {
            if( gAppBaseURL) {
                return gAppBaseURL;
            }

            var anAppBaseURLelement = document.getElementById( this.APPBASEURLFIELDDOMID);
            if( !anAppBaseURLelement) {
                return null;
            }

            gAppBaseURL = anAppBaseURLelement.value;

            return gAppBaseURL;
        };
        if( fAppBaseURL){}/* CQT */
        aModule.fAppBaseURL = fAppBaseURL;






        var fAppBaseURL_jquery_unused = function() {
            if( gAppBaseURL) {
                return gAppBaseURL;
            }

            document.getElementById( this.APPBASEURLFIELDDOMID)
            var anAppBaseURLelement = $("#" + this.APPBASEURLFIELDDOMID);
            if( !anAppBaseURLelement || !anAppBaseURLelement.length) {
                return null;
            }

            gAppBaseURL = anAppBaseURLelement.val();

            return gAppBaseURL;
        };
        if( fAppBaseURL_jquery_unused){}/* CQT */
        aModule.fAppBaseURL_jquery_unused = fAppBaseURL_jquery_unused;



        return aModule;
    };






    var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
    if( !anExistingModule) {

        var aModule = aMod_definer();
        anExistingModule = aModule;

        theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
    }





    return anExistingModule;

}]);







