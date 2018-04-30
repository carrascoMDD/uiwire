'use strict';

/*
 * edivalidaciones_instrumentacion_ctrl_type.js
 *
 * Creado @author Antonio Carrasco Valero 201409301309
 *
 *
 ***************************************************************************

 Copyright 2014 2015 2016 Antonio Carrasco Valero
 Utiliza uiwire asynchronous user interface written by Antonio Carrasco Valero in Javascript with AngularJS and licensed under EUPL  http://www.uiwire.org

 Licensed under the EUPL, Version 1.1 only (the "Licence"); You may not use this work except in compliance with the Licence. You may obtain a copy of the Licence at: https://joinup.ec.europa.eu/software/page/eupl/licence-eupl Unless required by applicable law or agreed to in writing, software distributed under the Licence is distributed on an "AS IS" basis, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the Licence for the specific language governing permissions and limitations under the Licence.
 {{License2}}

 {{Licensed1}}
 {{Licensed2}}

 ***************************************************************************
 *
 */






angular.module("edivalidacionesTypes").factory("EdivalidacionesInstrumentacionCtrlType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "EdivalidacionesCtrlType",
    "EdivalidacionesSvce",
    "EdivalidacionesInstrumentacionCtrlSpecs",
    "$timeout",
function( theSS_typesregistry,
          theSS_Overrider,
          theSS_EdivalidacionesCtrlType,
          theSS_EdivalidacionesSvce,
          theSS_EdivalidacionesInstrumentacionCtrlSpecs,
          theSS_timeout) {




    var ModuleName     = "edivalidaciones_instrumentacion_ctrl_type";
    var ModulePackages = "springnut/edivalidaciones";
    var ModuleFullName = ModulePackages + "/" + ModuleName;



    var aMod_definer = function( theS_Overrider,
                                 theS_EdivalidacionesCtrlType,
                                 theS_EdivalidacionesSvce,
                                 theS_EdivalidacionesInstrumentacionCtrlSpecs,
                                 $timeout) {
        if(  $timeout){}/* CQT */


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
            theToInit.DEFAULTEDIVALIDACIONESINSTRUMENTACIONCTRLTITLE = "EdivalidacionesInstrumentacionCtrlDefaultName";

            theToInit.ISINSTRUMENTACION = true;

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









        var aEdivalidacionesInstrumentacionCtrl_Prototype = (function() {


            var aPrototype = new theS_EdivalidacionesCtrlType.EdivalidacionesCtrl_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_SuperPrototype = theS_EdivalidacionesCtrlType.EdivalidacionesCtrl_Prototype;


            aPrototype._v_Type = "EdivalidacionesInstrumentacionCtrl";

            aPrototype._v_Module = null;





            var _pInit = function( theTitle, theIdentifier, theRecorder, theScope,
                                   theParentCtrl,
                                   theConverter) {

                this._pInit_EdivalidacionesInstrumentacionCtrl( theTitle, theIdentifier, theRecorder, theScope,
                                                 theParentCtrl,
                                                 theConverter);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_EdivalidacionesInstrumentacionCtrl = function( theTitle, theIdentifier, theRecorder, theScope,
                                                       theParentCtrl,
                                                       theConverter) {

                /* Delegate on super prototype initialization */
                aPrototype._v_SuperPrototype._pInit_EdivalidacionesCtrl.apply( this, [
                    theS_EdivalidacionesInstrumentacionCtrlSpecs.EDIVALIDACIONES_PAGEHEADER || theTitle || this.DEFAULTEDIVALIDACIONESINSTRUMENTACIONCTRLTITLE,
                    theIdentifier, theRecorder, theScope,
                    theParentCtrl,
                    theConverter,
                    theS_EdivalidacionesInstrumentacionCtrlSpecs
                ]);

                this._v_Prototype = aPrototype;
                this._v_Type      = this._v_Prototype._v_Type;
                this._v_Module    = aPrototype._v_Module;

                this._v_IsInstrumentacion = this.ISINSTRUMENTACION;

                if( this._v_IsInstrumentacion){}/* CQT */
            };
            if( _pInit_EdivalidacionesInstrumentacionCtrl){}/* CQT */
            aPrototype._pInit_EdivalidacionesInstrumentacionCtrl = _pInit_EdivalidacionesInstrumentacionCtrl;










            var pInitStaticTabsContent = function( ) {

                if( this._v_StaticTabs) {
                    return;
                }

                if( !this._v_CtrlSpecs) {
                    return;
                }

                this._v_StaticTabs  = { };

                if( this._v_GridSpecs) {
                    this._v_StaticTabs[ this._v_CtrlSpecs.STATICTAB_GRIDSPECS_NAME]   = JSON.stringify( this._v_GridSpecs, null, 4);
                }
                else {
                    this._v_StaticTabs[ this._v_CtrlSpecs.STATICTAB_GRIDSPECS_NAME]   = null;
                }

                if( this._v_EditorSpecs) {
                    this._v_StaticTabs[ this._v_CtrlSpecs.STATICTAB_EDITORSPECS_NAME]   = JSON.stringify( this._v_EditorSpecs, null, 4);
                }
                else {
                    this._v_StaticTabs[ this._v_CtrlSpecs.STATICTAB_EDITORSPECS_NAME]   = null;
                }

                if( this._v_CreatorSpecs) {
                    this._v_StaticTabs[ this._v_CtrlSpecs.STATICTAB_CREATORSPECS_NAME]   = JSON.stringify( this._v_CreatorSpecs, null, 4);
                }
                else {
                    this._v_StaticTabs[ this._v_CtrlSpecs.STATICTAB_CREATORSPECS_NAME]   = null;
                }

                if( this._v_WireSpecs) {
                    this._v_StaticTabs[ this._v_CtrlSpecs.STATICTAB_WIRESPECS_NAME]   = JSON.stringify( this._v_WireSpecs, null, 4);
                }
                else {
                    this._v_StaticTabs[ this._v_CtrlSpecs.STATICTAB_WIRESPECS_NAME]   = null;
                }


                var aSvceSpec = null;

                var aEdivalidacionesSvce = this.fEdivalidacionesSvce();
                if( aEdivalidacionesSvce) {
                    if( aEdivalidacionesSvce.fActiveOperationSpecs) {
                        var someOperationSpecs = aEdivalidacionesSvce.fActiveOperationSpecs();
                        if( someOperationSpecs) {
                            aSvceSpec = JSON.stringify( someOperationSpecs, null, 4);
                        }
                    }
                }
                this._v_StaticTabs[ this._v_CtrlSpecs.STATICTAB_SVCESPECS_NAME] = aSvceSpec;

            };
            if( pInitStaticTabsContent){}/* CQT */
            aPrototype.pInitStaticTabsContent = pInitStaticTabsContent;







            var fprDo_InitialExtra = function() {

                this.pInitStaticTabsContent();

                return aPrototype._v_SuperPrototype.fprDo_InitialExtra.apply( this);

            };
            if( fprDo_InitialExtra){}/* CQT */
            aPrototype.fprDo_InitialExtra = fprDo_InitialExtra;








            return aPrototype;

        })();




        var EdivalidacionesInstrumentacionCtrl_Constructor = function( theTitle, theIdentifier, theRecorder, theScope,
                                                        theParentCtrl,
                                                        theConverter) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_EdivalidacionesCtrlType.EdivalidacionesCtrl_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;
            this._v_Module = null;

            this._v_IsInstrumentacion = null;

            this._pInit_EdivalidacionesInstrumentacionCtrl( theTitle, theIdentifier, theRecorder, theScope,
                                                            theParentCtrl,
                                                            theConverter);
        };
        EdivalidacionesInstrumentacionCtrl_Constructor.prototype = aEdivalidacionesInstrumentacionCtrl_Prototype;





        var EdivalidacionesInstrumentacionCtrl_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_EdivalidacionesCtrlType.EdivalidacionesCtrl_Prototype;

            this._v_Prototype = aEdivalidacionesInstrumentacionCtrl_Prototype;
            this._v_Type      = null;
            this._v_Module    = null;

            this._v_IsInstrumentacion = null;
        };
        EdivalidacionesInstrumentacionCtrl_SuperPrototypeConstructor.prototype = aEdivalidacionesInstrumentacionCtrl_Prototype;



        var aModule = {
            "EdivalidacionesInstrumentacionCtrl_Prototype": aEdivalidacionesInstrumentacionCtrl_Prototype,
            "EdivalidacionesInstrumentacionCtrl_Constructor": EdivalidacionesInstrumentacionCtrl_Constructor,
            "EdivalidacionesInstrumentacionCtrl_SuperPrototypeConstructor": EdivalidacionesInstrumentacionCtrl_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aEdivalidacionesInstrumentacionCtrl_Prototype._v_Module = aModule;





        return aModule;
    };







    var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
    if( !anExistingModule) {

        var aModule = aMod_definer(
            theSS_Overrider,
            theSS_EdivalidacionesCtrlType,
            theSS_EdivalidacionesSvce,
            theSS_EdivalidacionesInstrumentacionCtrlSpecs,
            theSS_timeout
        );
        anExistingModule = aModule;

        theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
    }






    return anExistingModule;

}]);







