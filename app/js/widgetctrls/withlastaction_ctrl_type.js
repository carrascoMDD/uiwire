'use strict';

/*
 * withlastaction_ctrl_type.js
 *
 * Creado @author Antonio Carrasco Valero 201411111701
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






angular.module("widgetCtrlsTypes").factory("WithLastActionCtrlType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "CompositeCtrlType",
function( theSS_typesregistry,
          theSS_Overrider,
          theSS_CompositeCtrlType) {




    var ModuleName     = "withlastaction_ctrl_type";
    var ModulePackages = "springnut/widgetctrls";
    var ModuleFullName = ModulePackages + "/" + ModuleName;



    var aMod_definer = function( theS_Overrider,
                                 theS_CompositeCtrlType) {



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
            theToInit.DEFAULTWITHLASTACTIONCTRLTITLE = "WithLastActionCtrlDefaultName";

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









        var aWithLastActionCtrl_Prototype = (function() {


            var aPrototype = new theS_CompositeCtrlType.CompositeCtrl_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_SuperPrototype = theS_CompositeCtrlType.CompositeCtrl_Prototype;


            aPrototype._v_Type = "WithLastActionCtrl";

            aPrototype._v_Module = null;


            aPrototype._v_LastActionCtrl = null;



            var _pInit = function( theTitle, theIdentifier, theRecorder, theScope,
                                   theDomIdPrefix,
                                   theParentCtrl,
                                   theConverter,
                                   theGridSpecs,
                                   theEditorSpecs,
                                   theCreatorSpecs,
                                   theWireSpecs,
                                   theInitialLoadGridNames,
                                   theInitialLoadEditorNames,
                                   theInitialInCreationNames) {

                this._pInit_WithLastActionCtrl( theTitle, theIdentifier, theRecorder, theScope,
                                                theDomIdPrefix,
                                                theParentCtrl,
                                                theConverter,
                                                theGridSpecs,
                                                theEditorSpecs,
                                                theCreatorSpecs,
                                                theWireSpecs,
                                                theInitialLoadGridNames,
                                                theInitialLoadEditorNames,
                                                theInitialInCreationNames);
                                };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_WithLastActionCtrl = function( theTitle, theIdentifier, theRecorder, theScope,
                                                      theDomIdPrefix,
                                                      theParentCtrl,
                                                      theConverter,
                                                      theGridSpecs,
                                                      theEditorSpecs,
                                                      theCreatorSpecs,
                                                      theWireSpecs,
                                                      theInitialLoadGridNames,
                                                      theInitialLoadEditorNames,
                                                      theInitialInCreationNames) {


                /* Delegate on super prototype initialization */
                aPrototype._v_SuperPrototype._pInit_CompositeCtrl.apply( this, [
                    theTitle || this.DEFAULTWITHLASTACTIONCTRLTITLE,
                    theIdentifier, theRecorder, theScope,
                    theDomIdPrefix,
                    theParentCtrl,
                    theConverter,
                    theGridSpecs,
                    theEditorSpecs,
                    theCreatorSpecs,
                    theWireSpecs,
                    theInitialLoadGridNames,
                    theInitialLoadEditorNames,
                    theInitialInCreationNames
                ]);

                this._v_Prototype = aPrototype;
                this._v_Type      = this._v_Prototype._v_Type;
                this._v_Module    = aPrototype._v_Module;

                this._v_LastActionCtrl    = null;
            };
            if( _pInit_WithLastActionCtrl){}/* CQT */
            aPrototype._pInit_WithLastActionCtrl = _pInit_WithLastActionCtrl;








            var pRegisterLastActionCtrl = function( theLastActionCtrl) {

                if( !theLastActionCtrl) {
                    return;
                }

                this._v_LastActionCtrl = theLastActionCtrl;
            };
            if( pRegisterLastActionCtrl){}/* CQT */
            aPrototype.pRegisterLastActionCtrl = pRegisterLastActionCtrl;









            var pBubbleActionReport = function( theActionReport) {

                if( !this._v_LastActionCtrl) {
                    return;
                }

                if( !theActionReport) {
                    this._v_LastActionCtrl.pClearLastActionReport();
                    return;
                }

                this._v_LastActionCtrl.pSetLastActionReport( theActionReport);

            };
            if( pBubbleActionReport){}/* CQT */
            aPrototype.pBubbleActionReport = pBubbleActionReport;










            var pSetLastActionReport = function( theLastActionReport) {

                this._v_LastActionCtrl.pSetLastActionReport( theLastActionReport);
            };
            if( pSetLastActionReport){}/* CQT */
            aPrototype.pSetLastActionReport = pSetLastActionReport;










            var fprDo_InitialExtra = function() {

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




        var WithLastActionCtrl_Constructor = function( theTitle, theIdentifier, theRecorder, theScope,
                                                       theDomIdPrefix,
                                                       theParentCtrl,
                                                       theConverter,
                                                       theGridSpecs,
                                                       theEditorSpecs,
                                                       theCreatorSpecs,
                                                       theWireSpecs,
                                                       theInitialLoadGridNames,
                                                       theInitialLoadEditorNames,
                                                       theInitialInCreationNames) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_CompositeCtrlType.CompositeCtrl_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;
            this._v_Module = null;

            this._v_LastActionCtrl    = null;

            this._pInit_WithLastActionCtrl( theTitle, theIdentifier, theRecorder, theScope,
                                            theDomIdPrefix,
                                            theParentCtrl,
                                            theConverter,
                                            theGridSpecs,
                                            theEditorSpecs,
                                            theCreatorSpecs,
                                            theWireSpecs,
                                            theInitialLoadGridNames,
                                            theInitialLoadEditorNames,
                                            theInitialInCreationNames);
        };
        WithLastActionCtrl_Constructor.prototype = aWithLastActionCtrl_Prototype;





        var WithLastActionCtrl_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_CompositeCtrlType.CompositeCtrl_Prototype;

            this._v_Prototype = aWithLastActionCtrl_Prototype;
            this._v_Type      = null;
            this._v_Module    = null;

            this._v_LastActionCtrl    = null;
        };
        WithLastActionCtrl_SuperPrototypeConstructor.prototype = aWithLastActionCtrl_Prototype;



        var aModule = {
            "WithLastActionCtrl_Prototype": aWithLastActionCtrl_Prototype,
            "WithLastActionCtrl_Constructor": WithLastActionCtrl_Constructor,
            "WithLastActionCtrl_SuperPrototypeConstructor": WithLastActionCtrl_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aWithLastActionCtrl_Prototype._v_Module = aModule;





        return aModule;
    };







    var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
    if( !anExistingModule) {

        var aModule = aMod_definer(
            theSS_Overrider,
            theSS_CompositeCtrlType
        );
        anExistingModule = aModule;

        theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
    }






    return anExistingModule;

}]);







