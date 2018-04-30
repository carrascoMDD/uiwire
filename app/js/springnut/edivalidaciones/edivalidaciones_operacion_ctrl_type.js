'use strict';

/*
 * edivalidaciones_operacion_ctrl_type.js
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






angular.module("edivalidacionesTypes").factory("EdivalidacionesOperacionCtrlType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "EdivalidacionesCtrlType",
    "EdivalidacionesSvce",
    "EdivalidacionesOperacionCtrlSpecs",
    "$timeout",
    function( theSS_typesregistry,
              theSS_Overrider,
              theSS_EdivalidacionesCtrlType,
              theSS_EdivalidacionesSvce,
              theSS_EdivalidacionesOperacionCtrlSpecs,
              theSS_timeout) {




        var ModuleName     = "edivalidaciones_ctrl_type";
        var ModulePackages = "springnut/edivalidaciones";
        var ModuleFullName = ModulePackages + "/" + ModuleName;



        var aMod_definer = function( theS_Overrider,
                                     theS_EdivalidacionesCtrlType,
                                     theS_EdivalidacionesSvce,
                                     theS_EdivalidacionesOperacionCtrlSpecs,
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
                theToInit.DEFAULTEDIVALIDACIONESOPERACIONCTRLTITLE = "EdivalidacionesOperacionCtrlDefaultName";

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









            var aEdivalidacionesOperacionCtrl_Prototype = (function() {


                var aPrototype = new theS_EdivalidacionesCtrlType.EdivalidacionesCtrl_SuperPrototypeConstructor();

                pgInitFromModuleConstants( aPrototype);


                aPrototype._v_SuperPrototype = theS_EdivalidacionesCtrlType.EdivalidacionesCtrl_Prototype;


                aPrototype._v_Type = "EdivalidacionesOperacionCtrl";

                aPrototype._v_Module = null;





                var _pInit = function( theTitle, theIdentifier, theRecorder, theScope,
                                       theParentCtrl,
                                       theConverter) {

                    this._pInit_EdivalidacionesOperacionCtrl( theTitle, theIdentifier, theRecorder, theScope,
                        theParentCtrl,
                        theConverter);
                };
                if( _pInit){}/* CQT */
                aPrototype._pInit = _pInit;







                var _pInit_EdivalidacionesOperacionCtrl = function( theTitle, theIdentifier, theRecorder, theScope,
                                                           theParentCtrl,
                                                           theConverter) {

                    /* Delegate on super prototype initialization */
                    aPrototype._v_SuperPrototype._pInit_EdivalidacionesCtrl.apply( this, [
                        theS_EdivalidacionesOperacionCtrlSpecs.EDIVALIDACIONES_PAGEHEADER || theTitle || this.DEFAULTEDIVALIDACIONESOPERACIONCTRLTITLE,
                        theIdentifier, theRecorder, theScope,
                        theParentCtrl,
                        theConverter,
                        theS_EdivalidacionesOperacionCtrlSpecs
                    ]);

                    this._v_Prototype = aPrototype;
                    this._v_Type      = this._v_Prototype._v_Type;
                    this._v_Module    = aPrototype._v_Module;
                };
                if( _pInit_EdivalidacionesOperacionCtrl){}/* CQT */
                aPrototype._pInit_EdivalidacionesOperacionCtrl = _pInit_EdivalidacionesOperacionCtrl;







                var pSetGridSpecsAutoSelectIndexFromLocationQuery = function() {
                };
                if( pSetGridSpecsAutoSelectIndexFromLocationQuery){}/* CQT */
                aPrototype.pSetGridSpecsAutoSelectIndexFromLocationQuery = pSetGridSpecsAutoSelectIndexFromLocationQuery;




                var pSetInitialLoadGridNamesFromLocationQuery = function() {
                };
                if( pSetInitialLoadGridNamesFromLocationQuery){}/* CQT */
                aPrototype.pSetInitialLoadGridNamesFromLocationQuery = pSetInitialLoadGridNamesFromLocationQuery;





                var pSetEditorSpecsAutoEditFromLocationQuery = function() {
                };
                if( pSetEditorSpecsAutoEditFromLocationQuery){}/* CQT */
                aPrototype.pSetEditorSpecsAutoEditFromLocationQuery = pSetEditorSpecsAutoEditFromLocationQuery;







                var fprDo_InitialExtra = function() {

                    return  aPrototype._v_SuperPrototype.fprDo_InitialExtra.apply( this);
                };
                if( fprDo_InitialExtra){}/* CQT */
                aPrototype.fprDo_InitialExtra = fprDo_InitialExtra;







                return aPrototype;

            })();




            var EdivalidacionesOperacionCtrl_Constructor = function( theTitle, theIdentifier, theRecorder, theScope,
                                                            theParentCtrl,
                                                            theConverter) {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_EdivalidacionesCtrlType.EdivalidacionesCtrl_Prototype;

                this._v_Prototype = null;
                this._v_Type = null;
                this._v_Module = null;

                this._pInit_EdivalidacionesOperacionCtrl( theTitle, theIdentifier, theRecorder, theScope,
                    theParentCtrl,
                    theConverter);
            };
            EdivalidacionesOperacionCtrl_Constructor.prototype = aEdivalidacionesOperacionCtrl_Prototype;





            var EdivalidacionesOperacionCtrl_SuperPrototypeConstructor = function() {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_EdivalidacionesCtrlType.EdivalidacionesCtrl_Prototype;

                this._v_Prototype = aEdivalidacionesOperacionCtrl_Prototype;
                this._v_Type      = null;
                this._v_Module    = null;
            };
            EdivalidacionesOperacionCtrl_SuperPrototypeConstructor.prototype = aEdivalidacionesOperacionCtrl_Prototype;



            var aModule = {
                "EdivalidacionesOperacionCtrl_Prototype": aEdivalidacionesOperacionCtrl_Prototype,
                "EdivalidacionesOperacionCtrl_Constructor": EdivalidacionesOperacionCtrl_Constructor,
                "EdivalidacionesOperacionCtrl_SuperPrototypeConstructor": EdivalidacionesOperacionCtrl_SuperPrototypeConstructor
            };
            pgInitFromModuleConstants( aModule);
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;

            aEdivalidacionesOperacionCtrl_Prototype._v_Module = aModule;





            return aModule;
        };







        var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        if( !anExistingModule) {

            var aModule = aMod_definer(
                theSS_Overrider,
                theSS_EdivalidacionesCtrlType,
                theSS_EdivalidacionesSvce,
                theSS_EdivalidacionesOperacionCtrlSpecs,
                theSS_timeout
            );
            anExistingModule = aModule;

            theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
        }






        return anExistingModule;

    }]);







