'use strict';

/*
 * adminoperadores_operacion_ctrl_type.js
 *
 * Creado @author Antonio Carrasco Valero 201411031729
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






angular.module("adminoperadoresTypes").factory("AdminoperadoresOperacionCtrlType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "AdminoperadoresCtrlType",
    "AdminoperadoresSvce",
    "AdminoperadoresOperacionCtrlSpecs",
    "$timeout",
    function( theSS_typesregistry,
              theSS_Overrider,
              theSS_AdminoperadoresCtrlType,
              theSS_AdminoperadoresSvce,
              theSS_AdminoperadoresOperacionCtrlSpecs,
              theSS_timeout) {




        var ModuleName     = "adminoperadores_ctrl_type";
        var ModulePackages = "springnut/adminoperadores";
        var ModuleFullName = ModulePackages + "/" + ModuleName;



        var aMod_definer = function( theS_Overrider,
                                     theS_AdminoperadoresCtrlType,
                                     theS_AdminoperadoresSvce,
                                     theS_AdminoperadoresOperacionCtrlSpecs,
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
                theToInit.DEFAULTADMINOPERADORESOPERACIONCTRLTITLE = "AdminoperadoresOperacionCtrlDefaultName";

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









            var aAdminoperadoresOperacionCtrl_Prototype = (function() {


                var aPrototype = new theS_AdminoperadoresCtrlType.AdminoperadoresCtrl_SuperPrototypeConstructor();

                pgInitFromModuleConstants( aPrototype);


                aPrototype._v_SuperPrototype = theS_AdminoperadoresCtrlType.AdminoperadoresCtrl_Prototype;


                aPrototype._v_Type = "AdminoperadoresOperacionCtrl";

                aPrototype._v_Module = null;





                var _pInit = function( theTitle, theIdentifier, theRecorder, theScope,
                                       theParentCtrl,
                                       theConverter) {

                    this._pInit_AdminoperadoresOperacionCtrl( theTitle, theIdentifier, theRecorder, theScope,
                        theParentCtrl,
                        theConverter);
                };
                if( _pInit){}/* CQT */
                aPrototype._pInit = _pInit;







                var _pInit_AdminoperadoresOperacionCtrl = function( theTitle, theIdentifier, theRecorder, theScope,
                                                           theParentCtrl,
                                                           theConverter) {

                    /* Delegate on super prototype initialization */
                    aPrototype._v_SuperPrototype._pInit_AdminoperadoresCtrl.apply( this, [
                        theS_AdminoperadoresOperacionCtrlSpecs.ADMINOPERADORES_PAGEHEADER || theTitle || this.DEFAULTADMINOPERADORESOPERACIONCTRLTITLE,
                        theIdentifier, theRecorder, theScope,
                        theParentCtrl,
                        theConverter,
                        theS_AdminoperadoresOperacionCtrlSpecs
                    ]);

                    this._v_Prototype = aPrototype;
                    this._v_Type      = this._v_Prototype._v_Type;
                    this._v_Module    = aPrototype._v_Module;
                };
                if( _pInit_AdminoperadoresOperacionCtrl){}/* CQT */
                aPrototype._pInit_AdminoperadoresOperacionCtrl = _pInit_AdminoperadoresOperacionCtrl;







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




            var AdminoperadoresOperacionCtrl_Constructor = function( theTitle, theIdentifier, theRecorder, theScope,
                                                            theParentCtrl,
                                                            theConverter) {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_AdminoperadoresCtrlType.AdminoperadoresCtrl_Prototype;

                this._v_Prototype = null;
                this._v_Type = null;
                this._v_Module = null;

                this._pInit_AdminoperadoresOperacionCtrl( theTitle, theIdentifier, theRecorder, theScope,
                    theParentCtrl,
                    theConverter);
            };
            AdminoperadoresOperacionCtrl_Constructor.prototype = aAdminoperadoresOperacionCtrl_Prototype;





            var AdminoperadoresOperacionCtrl_SuperPrototypeConstructor = function() {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_AdminoperadoresCtrlType.AdminoperadoresCtrl_Prototype;

                this._v_Prototype = aAdminoperadoresOperacionCtrl_Prototype;
                this._v_Type      = null;
                this._v_Module    = null;
            };
            AdminoperadoresOperacionCtrl_SuperPrototypeConstructor.prototype = aAdminoperadoresOperacionCtrl_Prototype;



            var aModule = {
                "AdminoperadoresOperacionCtrl_Prototype": aAdminoperadoresOperacionCtrl_Prototype,
                "AdminoperadoresOperacionCtrl_Constructor": AdminoperadoresOperacionCtrl_Constructor,
                "AdminoperadoresOperacionCtrl_SuperPrototypeConstructor": AdminoperadoresOperacionCtrl_SuperPrototypeConstructor
            };
            pgInitFromModuleConstants( aModule);
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;

            aAdminoperadoresOperacionCtrl_Prototype._v_Module = aModule;





            return aModule;
        };







        var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        if( !anExistingModule) {

            var aModule = aMod_definer(
                theSS_Overrider,
                theSS_AdminoperadoresCtrlType,
                theSS_AdminoperadoresSvce,
                theSS_AdminoperadoresOperacionCtrlSpecs,
                theSS_timeout
            );
            anExistingModule = aModule;

            theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
        }






        return anExistingModule;

    }]);







