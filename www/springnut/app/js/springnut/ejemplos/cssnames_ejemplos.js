'use strict';

/*
 * cssnames_ejemplos.js
 *
 * Creado @author Antonio Carrasco Valero 201503030557
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


angular.module("cssNames_Springnut_Ejemplos", [
    "typesRegistry",
    "cssKeys",
    "cssNames_Springnut"
]).
factory("CssNames_Springnut_Ejemplos", [
    "TypesRegistrySvce",
    "CssKeys",
    "CssNames_Springnut",
function( theSS_typesregistry,
          theSS_CssKeys,
          theSS_CssNames_Springnut) {




    var ModuleName     = "cssnames_ejemplos";
    var ModulePackages = "springnut/ejemplos";
    var ModuleFullName = ModulePackages + "/" + ModuleName;



    var aMod_definer = function( theS_CssKeys,
                                 theS_CssNames_Springnut) {


        if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}






        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
                return;
            }


            theToInit.CSSs_SPRINGNUT_EJEMPLOS_TABLE = { };

            var aNumGridClassKeys = theS_CssKeys.GRIDCLASSKEYS.length;
            for( var aGridClassKeyIdx=0; aGridClassKeyIdx < aNumGridClassKeys; aGridClassKeyIdx++) {
                var aGridClassKey = theS_CssKeys.GRIDCLASSKEYS[ aGridClassKeyIdx];
                theToInit.CSSs_SPRINGNUT_EJEMPLOS_TABLE[ aGridClassKey] = theS_CssNames_Springnut.CSSs_SPRINGNUT_TABLE[ aGridClassKey];
            }



            theToInit.CSSs_SPRINGNUT_EJEMPLOS_EDITOR = { };

            var aNumEditorClassKeys = theS_CssKeys.EDITORCLASSKEYS.length;
            for( var anEditorClassKeyIdx=0; anEditorClassKeyIdx < aNumEditorClassKeys; anEditorClassKeyIdx++) {
                var anEditorClassKey = theS_CssKeys.EDITORCLASSKEYS[ anEditorClassKeyIdx];
                theToInit.CSSs_SPRINGNUT_EJEMPLOS_EDITOR[ anEditorClassKey] = theS_CssNames_Springnut.CSSs_SPRINGNUT_EDITOR[ anEditorClassKey];
            }
        };



        var ModuleConstants = {};
        theS_CssNames_Springnut.pgInitFromModuleConstants( ModuleConstants);
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

        aModule.pgInitFromModuleConstants = pgInitFromModuleConstants;




        return aModule;
    };







    var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
    if( !anExistingModule) {

        var aModule = aMod_definer(
            theSS_CssKeys,
            theSS_CssNames_Springnut
        );
        anExistingModule = aModule;

        theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
    }






    return anExistingModule;

}]);







