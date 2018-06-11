'use strict';

/*
 * trabajos_ctrl_type.js
 *
 * Creado @author Antonio Carrasco Valero 201411280008
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






angular.module("trabajosTypes").factory("TrabajosCtrlType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "WithTabsCtrlType",
    "TiposTrabajos",
    "TrabajosSvce",
    "TrabajosCtrlSpecsFactoryExplicit", /* "TrabajosCtrlSpecsFactoryRevenged" "TrabajosCtrlSpecsFactoryExplicit" */
function( theSS_typesregistry,
          theSS_Overrider,
          theSS_WithTabsCtrlType,
          theSS_TiposTrabajos,
          theSS_TrabajosSvce,
          theSS_TrabajosCtrlSpecsFactory) {




    var ModuleName     = "trabajos_ctrl_type";
    var ModulePackages = "springnut/trabajos";
    var ModuleFullName = ModulePackages + "/" + ModuleName;



    var aMod_definer = function( theS_Overrider,
                                 theS_WithTabsCtrlType,
                                 theS_TiposTrabajos,
                                 theS_TrabajosSvce,
                                 theS_TrabajosCtrlSpecsFactory) {



        if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}





        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
            }
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

            theToInit.DEFAULTTRABAJOSCTRLTITLE = "TrabajosCtrlDefaultName";

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









        var aTrabajosCtrl_Prototype = (function() {


            var aPrototype = new theS_WithTabsCtrlType.WithTabsCtrl_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_SuperPrototype = theS_WithTabsCtrlType.WithTabsCtrl_Prototype;


            aPrototype._v_Type = "TrabajosCtrl";

            aPrototype._v_Module = null;


            aPrototype._v_CtrlSpecs = null;

            aPrototype._v_TipoTrabajo       = null;
            aPrototype._v_TipoTrabajoForURL = null;

            aPrototype._v_TipoBoletin       = null;
            aPrototype._v_TipoBoletinForURL = null;

            aPrototype._v_IsInstrumentacion = null;





            var _pInit = function( theTitle, theIdentifier, theRecorder, theScope,
                                   theParentCtrl,
                                   theConverter) {

                this._pInit_TrabajosCtrl( theTitle, theIdentifier, theRecorder, theScope,
                                                 theParentCtrl,
                                                 theConverter);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;






            var _pInit_TrabajosCtrl = function( theTitle, theIdentifier, theRecorder, theScope,
                                                       theParentCtrl,
                                                       theConverter) {

                this._v_TipoTrabajo       = "";
                this._v_TipoBoletin       = "";
                this._v_IsInstrumentacion = false;


                this.pInitFromLocationURL();

                if( this._v_LocationURL) {

                    var someTiposTrabajos = theS_TiposTrabajos.TIPOSTRABAJOS;
                    if( someTiposTrabajos) {

                        var aNumWhens = someTiposTrabajos.length;
                        for( var aWhenIdx= 0; aWhenIdx < aNumWhens; aWhenIdx++) {

                            var aWhen = someTiposTrabajos[ aWhenIdx];
                            if( !aWhen) {
                                continue;
                            }

                            var aTipoTrabajo = aWhen[ "tTra"];
                            if( !aTipoTrabajo) {
                                continue;
                            }

                            var aRouteTo = aWhen[ "routeTo"];
                            if( !aRouteTo) {
                                continue;
                            }

                            var aPath = "/trabajos_tTra_" + aTipoTrabajo;

                            var aTipoBoletin = aWhen[ "tBol"];
                            if( aTipoBoletin) {
                                aPath += "_tBol_" + aTipoBoletin
                            }
                            else {
                                aTipoBoletin = null;
                            }

                            if( this._v_LocationURL == aPath) {
                                this._v_TipoTrabajo = aTipoTrabajo;
                                this._v_TipoBoletin = aTipoBoletin;
                                this._v_IsInstrumentacion = false;

                                break;
                            }
                        }
                    }
                }

                this._v_TipoTrabajoForURL = this._v_TipoTrabajo;
                this._v_TipoBoletinForURL = this._v_TipoBoletin;



                this._v_CtrlSpecs = theS_TrabajosCtrlSpecsFactory.fsCtrlSpecs( this._v_IsInstrumentacion);



                /* Delegate on super prototype initialization */
                aPrototype._v_SuperPrototype._pInit_WithTabsCtrl.apply( this, [
                    this._v_CtrlSpecs.TRABAJOS_PAGEHEADER || theTitle || this.DEFAULTTRABAJOSCTRLTITLE,
                    theIdentifier, theRecorder, theScope,
                    this._v_CtrlSpecs.TRABAJOS_DOMIDPREFIX,
                    theParentCtrl,
                    theConverter,
                    this._v_CtrlSpecs.GRIDPARAMETERS,
                    this._v_CtrlSpecs.EDITPARAMETERS,
                    this._v_CtrlSpecs.CREATEPARAMETERS,
                    this._v_CtrlSpecs.WIRES,
                    this._v_CtrlSpecs.GRIDNAMES_INITIALLOAD,
                    this._v_CtrlSpecs.EDITORNAMES_INITIALLOAD,
                    null,
                    this._v_CtrlSpecs.TOPTABSBAR_ENTRIES,
                    this._v_CtrlSpecs.TOPTABSBAR_INITIALLYSELECTEDTAB,
                    this._v_CtrlSpecs.TOPTABSBAR_TABSFIXEDINITIAL
                ]);

                this._v_Prototype = aPrototype;
                this._v_Type      = this._v_Prototype._v_Type;
                this._v_Module    = aPrototype._v_Module;

                if( this._v_TipoTrabajoForURL){}/* CQT */
                if( this._v_TipoBoletinForURL){}/* CQT */
            };
            if( _pInit_TrabajosCtrl){}/* CQT */
            aPrototype._pInit_TrabajosCtrl = _pInit_TrabajosCtrl;








            var pDestroy = function() {

                this._v_CtrlSpecs = null;

                this._v_TipoBoletin       = null;
                this._v_TipoBoletinForURL = null;

                this._v_IsInstrumentacion = null;

                this.pUnRegisterActionHappenedListener();

                aPrototype._v_SuperPrototype.pDestroy.apply( this);
            };
            if( pDestroy){}/* CQT */
            aPrototype.pDestroy = pDestroy;













            var pInitialObtainConverter = function() {
            };
            if( pInitialObtainConverter){}/* CQT */
            aPrototype.pInitialObtainConverter = pInitialObtainConverter;














            var pSetGridSpecsAutoSelectIndexFromLocationQuery = function() {
                if( !this._v_IsInstrumentacion) {
                    return;
                }

                aPrototype._v_SuperPrototype.pSetGridSpecsAutoSelectIndexFromLocationQuery.apply( this);
            };
            if( pSetGridSpecsAutoSelectIndexFromLocationQuery){}/* CQT */
            aPrototype.pSetGridSpecsAutoSelectIndexFromLocationQuery = pSetGridSpecsAutoSelectIndexFromLocationQuery;






            var pSetInitialLoadGridNamesFromLocationQuery = function() {
                if( !this._v_IsInstrumentacion) {
                    return;
                }

                aPrototype._v_SuperPrototype.pSetInitialLoadGridNamesFromLocationQuery.apply( this);
            };
            if( pSetInitialLoadGridNamesFromLocationQuery){}/* CQT */
            aPrototype.pSetInitialLoadGridNamesFromLocationQuery = pSetInitialLoadGridNamesFromLocationQuery;






            var pSetEditorSpecsAutoEditFromLocationQuery = function() {
                if( !this._v_IsInstrumentacion) {
                    return;
                }

                aPrototype._v_SuperPrototype.pSetEditorSpecsAutoEditFromLocationQuery.apply( this);
            };
            if( pSetEditorSpecsAutoEditFromLocationQuery){}/* CQT */
            aPrototype.pSetEditorSpecsAutoEditFromLocationQuery = pSetEditorSpecsAutoEditFromLocationQuery;







            var fTrabajosSvce = function( ) {

                return theS_TrabajosSvce;
            };
            if( fTrabajosSvce){}/* CQT */
            aPrototype.fTrabajosSvce = fTrabajosSvce;










            var fprDo_CheckSessionLoggedAuthenticated = function() {
                return this.fNewDeferredResolveWithNothingPromise();
            };
            if( fprDo_CheckSessionLoggedAuthenticated){}/* CQT */
            aPrototype.fprDo_CheckSessionLoggedAuthenticated = fprDo_CheckSessionLoggedAuthenticated;









            var pInitStaticTabsContent = function( ) {


                if( this._v_StaticTabs) {
                    return;
                }


                if( !this._v_CtrlSpecs) {
                    return;
                }

                if( !this._v_IsInstrumentacion) {
                    return;
                }


                aPrototype._v_SuperPrototype.pInitStaticTabsContent.apply( this);


                if( !this._v_StaticTabs ) {
                    this._v_StaticTabs  = { };
                }



                var aNumTabsBarEntries = this._v_CtrlSpecs.TOPTABSBAR_ENTRIES.length;
                for( var aTabsBarEntryIdx=0; aTabsBarEntryIdx < aNumTabsBarEntries; aTabsBarEntryIdx++) {

                    var aTabsBarEntry = this._v_CtrlSpecs.TOPTABSBAR_ENTRIES[ aTabsBarEntryIdx];
                    if( aTabsBarEntry) {

                        if( aTabsBarEntry[ "static"]) {

                            switch( aTabsBarEntry[ "value"]) {

                                case this._v_CtrlSpecs.STATICTAB_GRIDSPECS_NAME:
                                    if( this._v_GridSpecs) {
                                        this._v_StaticTabs[ this._v_CtrlSpecs.STATICTAB_GRIDSPECS_NAME]   = JSON.stringify( this._v_GridSpecs, null, 4);
                                    }
                                    else {
                                        this._v_StaticTabs[ this._v_CtrlSpecs.STATICTAB_GRIDSPECS_NAME]   = null;
                                    }
                                    break;



                                case this._v_CtrlSpecs.STATICTAB_EDITORSPECS_NAME:
                                    if( this._v_EditorSpecs) {
                                        this._v_StaticTabs[ this._v_CtrlSpecs.STATICTAB_EDITORSPECS_NAME]   = JSON.stringify( this._v_EditorSpecs, null, 4);
                                    }
                                    else {
                                        this._v_StaticTabs[ this._v_CtrlSpecs.STATICTAB_EDITORSPECS_NAME]   = null;
                                    }
                                    break;



                                case this._v_CtrlSpecs.STATICTAB_CREATORSPECS_NAME:
                                    if( this._v_EditorSpecs) {
                                        this._v_StaticTabs[ this._v_CtrlSpecs.STATICTAB_CREATORSPECS_NAME]   = JSON.stringify( this._v_CreatorSpecs, null, 4);
                                    }
                                    else {
                                        this._v_StaticTabs[ this._v_CtrlSpecs.STATICTAB_CREATORSPECS_NAME]   = null;
                                    }
                                    break;



                                case this._v_CtrlSpecs.STATICTAB_WIRESPECS_NAME:
                                    if( this._v_WireSpecs) {
                                        this._v_StaticTabs[ this._v_CtrlSpecs.STATICTAB_WIRESPECS_NAME]   = JSON.stringify( this._v_WireSpecs, null, 4);
                                    }
                                    else {
                                        this._v_StaticTabs[ this._v_CtrlSpecs.STATICTAB_WIRESPECS_NAME]   = null;
                                    }
                                    break;



                                case this._v_CtrlSpecs.STATICTAB_SVCESPECS_NAME:
                                    var aSvceSpec = null;

                                    var aWithTabsSvce = this.fTrabajosSvce();
                                    if( aWithTabsSvce) {
                                        if( aWithTabsSvce.fActiveOperationSpecs) {
                                            var someOperationSpecs = aWithTabsSvce.fActiveOperationSpecs();
                                            if( someOperationSpecs) {
                                                aSvceSpec = JSON.stringify( someOperationSpecs, null, 4);
                                            }
                                        }
                                    }

                                    this._v_StaticTabs[ this._v_CtrlSpecs.STATICTAB_SVCESPECS_NAME]   = aSvceSpec;

                            }
                        }
                    }
                }
            };
            if( pInitStaticTabsContent){}/* CQT */
            aPrototype.pInitStaticTabsContent = pInitStaticTabsContent;








            var fprDo_InitialExtra = function() {

                this.pObtainConverter();

                return aPrototype._v_SuperPrototype.fprDo_InitialExtra.apply( this);

            };
            if( fprDo_InitialExtra){}/* CQT */
            aPrototype.fprDo_InitialExtra = fprDo_InitialExtra;







            var fprDo_Initial = function() {

                return aPrototype._v_SuperPrototype.fprDo_Initial.apply( this);

            };
            if( fprDo_Initial){}/* CQT */
            aPrototype.fprDo_Initial = fprDo_Initial;









            return aPrototype;

        })();




        var TrabajosCtrl_Constructor = function( theTitle, theIdentifier, theRecorder, theScope,
                                                        theParentCtrl,
                                                        theConverter) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_WithTabsCtrlType.WithTabsCtrl_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;
            this._v_Module = null;

            this._v_CtrlSpecs         = null;

            this._v_TipoTrabajo       = null;
            this._v_TipoTrabajoForURL = null;

            this._v_TipoBoletin       = null;
            this._v_TipoBoletinForURL = null;

            this._v_IsInstrumentacion = null;

            this._pInit_TrabajosCtrl( theTitle, theIdentifier, theRecorder, theScope,
                                             theParentCtrl,
                                             theConverter);
        };
        TrabajosCtrl_Constructor.prototype = aTrabajosCtrl_Prototype;





        var TrabajosCtrl_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_WithTabsCtrlType.WithTabsCtrl_Prototype;

            this._v_Prototype = aTrabajosCtrl_Prototype;
            this._v_Type      = null;
            this._v_Module    = null;

            this._v_CtrlSpecs         = null;

            this._v_TipoTrabajo       = null;
            this._v_TipoTrabajoForURL = null;

            this._v_TipoBoletin       = null;
            this._v_TipoBoletinForURL = null;

            this._v_IsInstrumentacion = null;

        };
        TrabajosCtrl_SuperPrototypeConstructor.prototype = aTrabajosCtrl_Prototype;



        var aModule = {
            "TrabajosCtrl_Prototype": aTrabajosCtrl_Prototype,
            "TrabajosCtrl_Constructor": TrabajosCtrl_Constructor,
            "TrabajosCtrl_SuperPrototypeConstructor": TrabajosCtrl_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aTrabajosCtrl_Prototype._v_Module = aModule;





        return aModule;
    };







    var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
    if( !anExistingModule) {

        var aModule = aMod_definer(
            theSS_Overrider,
            theSS_WithTabsCtrlType,
            theSS_TiposTrabajos,
            theSS_TrabajosSvce,
            theSS_TrabajosCtrlSpecsFactory
        );
        anExistingModule = aModule;

        theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
    }






    return anExistingModule;

}]);







