'use strict';

/*
 * ejemplos_ctrl_specs_factory_explicit.js
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






angular.module("ejemplosTypes").factory("EjemplosCtrlSpecsFactoryExplicit", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "IdentifierSvce",
    "RecorderSvce",
    "FillspecsSvceType",
    "CssKeys",
    "CssNames_Springnut_Ejemplos",
    "EjemplosCtrlSpecsTobefilled",
    function( theSS_typesregistry,
              theSS_Overrider,
              theSS_IdentifierSvce,
              theSS_RecorderSvce,
              theSS_FillspecsSvceType,
              theSS_CssKeys,
              theSS_CssNames_Springnut_Ejemplos,
              theSS_EjemplosCtrlSpecsTobefilled) {




        var ModuleName     = "ejemplos_ctrl_specs_factory_explicit";
        var ModulePackages = "springnut/ejemplos";
        var ModuleFullName = ModulePackages + "/" + ModuleName;



        var aMod_definer = function( theS_Overrider,
                                     theS_IdentifierSvce,
                                     theS_RecorderSvce,
                                     theS_FillspecsSvceType,
                                     theS_CssKeys,
                                     theS_CssNames_Springnut_Ejemplos,
                                     theS_EjemplosCtrlSpecsTobefilled) {


            if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}






            var pgInitWithModuleVariations = function( theToInit) {

                if( !theToInit) {
                    return;
                }


                theToInit.LOGSOURCESPECS           = false;
                theToInit.LOGCSSFILLEDSPECS        = false;
                theToInit.LOGRETRIEVALSFILLEDSPECS = false;
                theToInit.LOGSPECSTORETURN         = false;

            };





            var pgInitFromModuleVariations = function( theToInit) {
                if( !theToInit) {
                    return;
                }

                for( var aGlobalName in ModuleVariations) {
                    if( ModuleVariations.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleVariations[ aGlobalName];
                    }
                }
            };


            var ModuleVariations = { };

            pgInitWithModuleVariations( ModuleVariations);

            theS_Overrider.pOverrideModuleVariations( ModuleFullName, ModuleVariations);








            var pgInitWithModuleConstants = function( theToInit) {

                if( !theToInit) {
                    return;
                }
                theToInit.DEFAULTTITLE = "EjemplosCtrlDefaultName";



                theToInit.EJEMPLOS_DOMIDPREFIX = "didSpringnut_Ejemplos";

                theToInit.EJEMPLOS_PAGEHEADER = "Ejemplos";



                theToInit.RETRIEVALTARGET = "fEjemplosSvce";


                theToInit.RETRIEVALSFORGRIDNAMES = {
                    "ListaAuxauditables":      "fprDo_Ejemplos_ListaTodasAuxauditables_Wrapper"
                };




                theToInit.STATICTAB_GRIDSPECS_NAME    = "GridSpecs";
                theToInit.STATICTAB_EDITORSPECS_NAME  = "EditorSpecs";
                theToInit.STATICTAB_CREATORSPECS_NAME = "CreatorSpecs";
                theToInit.STATICTAB_WIRESPECS_NAME    = "WireSpecs";
                theToInit.STATICTAB_SVCESPECS_NAME    = "SvceSpecs";


                theToInit.STATICTAB_GRIDSPECS_LABEL    = "Grids";
                theToInit.STATICTAB_EDITORSPECS_LABEL  = "Editors";
                theToInit.STATICTAB_CREATORSPECS_LABEL = "Creators";
                theToInit.STATICTAB_WIRESPECS_LABEL    = "Wires";
                theToInit.STATICTAB_SVCESPECS_LABEL    = "Service";


                theToInit.TOPTABSBAR_ENTRIES_STATIC_TOADD  = [
                    { static: true, label:  theToInit.STATICTAB_GRIDSPECS_LABEL,    value: theToInit.STATICTAB_GRIDSPECS_NAME},
                    { static: true, label:  theToInit.STATICTAB_EDITORSPECS_LABEL,  value: theToInit.STATICTAB_EDITORSPECS_NAME},
                    { static: true, label:  theToInit.STATICTAB_CREATORSPECS_LABEL, value: theToInit.STATICTAB_CREATORSPECS_NAME},
                    { static: true, label:  theToInit.STATICTAB_WIRESPECS_LABEL,    value: theToInit.STATICTAB_WIRESPECS_NAME},
                    { static: true, label:  theToInit.STATICTAB_SVCESPECS_LABEL,    value: theToInit.STATICTAB_SVCESPECS_NAME}
                ];

            };



            var ModuleConstants = {};
            pgInitFromModuleVariations( ModuleConstants);
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










            var fsCtrlSpecs = function( theIsInstrumentacion) {

                var aSourceCtrlSpecs = theS_EjemplosCtrlSpecsTobefilled.CTRLSPECS;
                if( !aSourceCtrlSpecs) {
                    return null;
                }



                if( aModule.LOGSOURCESPECS) {
                    var aSourceCtrlSpecsJSON = JSON.stringify( aSourceCtrlSpecs, null, 4);
                    console.log( "SOURCESPECS\n" + aSourceCtrlSpecsJSON);
                }




                var aFillspecsSvce = new theS_FillspecsSvceType.FillspecsSvce_Constructor(
                    "Fillspecs_Service-For-" + aModule.DEFAULTTITLE,
                    theS_IdentifierSvce,
                    theS_RecorderSvce
                );



                var aCsssFilledCtrlSpecs = aFillspecsSvce.fFillSpecsCsss(
                    aSourceCtrlSpecs,
                    theS_CssNames_Springnut_Ejemplos.CSSs_SPRINGNUT_EJEMPLOS_TABLE,
                    theS_CssNames_Springnut_Ejemplos.CSSs_SPRINGNUT_EJEMPLOS_EDITOR
                );
                if( !aCsssFilledCtrlSpecs) {
                    return null;
                }
                if( aModule.LOGCSSFILLEDSPECS) {
                    var aCsssFilledCtrlSpecsJSON = JSON.stringify( aCsssFilledCtrlSpecs, null, 4);
                    console.log( "CSSFILLEDSPECS\n" + aCsssFilledCtrlSpecsJSON);
                }


                var aRetrievalsFilledCtrlSpecs = aFillspecsSvce.fFillSpecsRetrievals(
                    aCsssFilledCtrlSpecs,
                    aModule.RETRIEVALTARGET,
                    aModule.RETRIEVALSFORGRIDNAMES,
                    null,
                    null);
                if( !aRetrievalsFilledCtrlSpecs) {
                    return null;
                }

                if( aModule.LOGRETRIEVALSFILLEDSPECS) {
                    var aRetrievalsFilledCtrlSpecsJSON = JSON.stringify( aRetrievalsFilledCtrlSpecs, null, 4);
                    console.log( "RETRIEVALSFILLEDSPECS\n" + aRetrievalsFilledCtrlSpecsJSON);
                }




                var aCtrlSpecsToReturn = {};

                var someCtrlSpecKeys = Object.keys( aRetrievalsFilledCtrlSpecs);
                var aNumKeys = someCtrlSpecKeys.length;
                for( var aKeyIdx=0; aKeyIdx < aNumKeys; aKeyIdx++) {
                    var aKey = someCtrlSpecKeys[ aKeyIdx];
                    aCtrlSpecsToReturn[ aKey] = aRetrievalsFilledCtrlSpecs[ aKey];
                }




                if( aCtrlSpecsToReturn.GRIDNAMES_INITIALLOAD && aCtrlSpecsToReturn.GRIDNAMES_INITIALLOAD.length) {

                    if( aCtrlSpecsToReturn.GRIDNAMES_INITIALLOAD.length == 1) {
                        aCtrlSpecsToReturn.GRIDNAMES_INITIALLOAD = [ aCtrlSpecsToReturn.GRIDNAMES_INITIALLOAD[ 0]];
                    }
                    else {
                        aCtrlSpecsToReturn.GRIDNAMES_INITIALLOAD = aCtrlSpecsToReturn.GRIDNAMES_INITIALLOAD.slice();
                    }
                }


                if( theIsInstrumentacion) {
                    var someEntriesToAdd = aModule.TOPTABSBAR_ENTRIES_STATIC_TOADD;
                    if( someEntriesToAdd && someEntriesToAdd.length) {
                        var someTopTabsBarEntries = aCtrlSpecsToReturn.TOPTABSBAR_ENTRIES;
                        if( someTopTabsBarEntries) {
                            Array.prototype.push.apply( someTopTabsBarEntries, someEntriesToAdd);
                        }
                    }
                }



                if( aCtrlSpecsToReturn.TOPTABSBAR_TABSFIXEDINITIAL && aCtrlSpecsToReturn.TOPTABSBAR_TABSFIXEDINITIAL.length) {
                    aCtrlSpecsToReturn.TOPTABSBAR_TABSFIXEDINITIAL = [];
                }



                aCtrlSpecsToReturn.EJEMPLOS_DOMIDPREFIX = aModule.EJEMPLOS_DOMIDPREFIX;

                aCtrlSpecsToReturn.EJEMPLOS_PAGEHEADER =  aModule.EJEMPLOS_PAGEHEADER;

                aCtrlSpecsToReturn.STATICTAB_GRIDSPECS_NAME     = aModule.STATICTAB_GRIDSPECS_NAME    ;
                aCtrlSpecsToReturn.STATICTAB_EDITORSPECS_NAME   = aModule.STATICTAB_EDITORSPECS_NAME  ;
                aCtrlSpecsToReturn.STATICTAB_CREATORSPECS_NAME  = aModule.STATICTAB_CREATORSPECS_NAME ;
                aCtrlSpecsToReturn.STATICTAB_WIRESPECS_NAME     = aModule.STATICTAB_WIRESPECS_NAME    ;
                aCtrlSpecsToReturn.STATICTAB_SVCESPECS_NAME     = aModule.STATICTAB_SVCESPECS_NAME    ;
                aCtrlSpecsToReturn.STATICTAB_GRIDSPECS_LABEL    = aModule.STATICTAB_GRIDSPECS_LABEL   ;
                aCtrlSpecsToReturn.STATICTAB_EDITORSPECS_LABEL  = aModule.STATICTAB_EDITORSPECS_LABEL ;
                aCtrlSpecsToReturn.STATICTAB_CREATORSPECS_LABEL = aModule.STATICTAB_CREATORSPECS_LABEL;
                aCtrlSpecsToReturn.STATICTAB_WIRESPECS_LABEL    = aModule.STATICTAB_WIRESPECS_LABEL   ;
                aCtrlSpecsToReturn.STATICTAB_SVCESPECS_LABEL    = aModule.STATICTAB_SVCESPECS_LABEL   ;



                if( aModule.LOGSPECSTORETURN) {
                    var aCtrlSpecsToReturnJSON = JSON.stringify( aCtrlSpecsToReturn, null, 4);
                    console.log( "RETRIEVALSFILLEDSPECS\n" + aCtrlSpecsToReturnJSON);
                }

                return aCtrlSpecsToReturn;
            };
            if( fsCtrlSpecs){}/* cQT */
            aModule.fsCtrlSpecs = fsCtrlSpecs;






            return aModule;
        };







        var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        if( !anExistingModule) {

            var aModule = aMod_definer(
                theSS_Overrider,
                theSS_IdentifierSvce,
                theSS_RecorderSvce,
                theSS_FillspecsSvceType,
                theSS_CssKeys,
                theSS_CssNames_Springnut_Ejemplos,
                theSS_EjemplosCtrlSpecsTobefilled
            );
            anExistingModule = aModule;

            theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
        }






        return anExistingModule;

    }]);







