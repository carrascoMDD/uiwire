'use strict';

/*
 * withtabs_ctrl_type.js
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






angular.module("widgetCtrlsTypes").factory("WithTabsCtrlType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "WithLastActionCtrlType",
    "TabbedCtrlType",
function( theSS_typesregistry,
          theSS_Overrider,
          theSS_WithLastActionCtrlType,
          theSS_TabbedCtrlType) {




    var ModuleName     = "withtabs_ctrl_type";
    var ModulePackages = "springnut/widgetctrls";
    var ModuleFullName = ModulePackages + "/" + ModuleName;



    var aMod_definer = function( theS_Overrider,
                                 theS_WithLastActionCtrlType,
                                 theS_TabbedCtrlType) {



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
            theToInit.DEFAULTWITHTABSCTRLTITLE = "WithTabsCtrlDefaultName";

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









        var aWithTabsCtrl_Prototype = (function() {


            var aPrototype = new theS_WithLastActionCtrlType.WithLastActionCtrl_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_SuperPrototype = theS_WithLastActionCtrlType.WithLastActionCtrl_Prototype;


            aPrototype._v_Type = "WithTabsCtrl";

            aPrototype._v_Module = null;


            aPrototype._v_TabsTopCtrl    = null;

            aPrototype._v_StaticTabs = null;




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
                                   theInitialInCreationNames,
                                   theTabsBarEntries,
                                   theInitiallySelectedTab,
                                   theTabsFixedInitial) {

                this._pInit_WithTabsCtrl( theTitle, theIdentifier, theRecorder, theScope,
                                          theDomIdPrefix,
                                          theParentCtrl,
                                          theConverter,
                                          theGridSpecs,
                                          theEditorSpecs,
                                          theCreatorSpecs,
                                          theWireSpecs,
                                          theInitialLoadGridNames,
                                          theInitialLoadEditorNames,
                                          theInitialInCreationNames,
                                          theTabsBarEntries,
                                          theInitiallySelectedTab,
                                          theTabsFixedInitial);
                                };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_WithTabsCtrl = function( theTitle, theIdentifier, theRecorder, theScope,
                                                theDomIdPrefix,
                                                theParentCtrl,
                                                theConverter,
                                                theGridSpecs,
                                                theEditorSpecs,
                                                theCreatorSpecs,
                                                theWireSpecs,
                                                theInitialLoadGridNames,
                                                theInitialLoadEditorNames,
                                                theInitialInCreationNames,
                                                theTabsBarEntries,
                                                theInitiallySelectedTab,
                                                theTabsFixedInitial) {


                /* Delegate on super prototype initialization */
                aPrototype._v_SuperPrototype._pInit_WithLastActionCtrl.apply( this, [
                    theTitle || this.DEFAULTWITHTABSCTRLTITLE,
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
                this._v_Module    = this._v_Prototype._v_Module;

                this._v_StaticTabs = null;


                this._v_TabsTopCtrl = new theS_TabbedCtrlType.TabbedCtrl_Constructor(
                    "(For-" + this._v_Title + ")",
                    this._v_Identifier,
                    this._v_Recorder,
                    this._v_Scope,
                    this._v_DomIdPrefix,
                    theInitiallySelectedTab,
                    theTabsFixedInitial,
                    theTabsBarEntries.slice()

                );
            };
            if( _pInit_WithTabsCtrl){}/* CQT */
            aPrototype._pInit_WithTabsCtrl = _pInit_WithTabsCtrl;












            var pInitStaticTabsContent = function( ) {

                if( this._v_StaticTabs) {
                    return;
                }

                this._v_StaticTabs  = { };

            };
            if( pInitStaticTabsContent){}/* CQT */
            aPrototype.pInitStaticTabsContent = pInitStaticTabsContent;









            var fprDo_GoToTab = function( theGoToTabSpec, theSelectionValue) {

                if( !theGoToTabSpec) {
                    return this.fNewDeferredResolveWithNothingPromise();
                }

                var aTabName = theGoToTabSpec[ "tabName"];
                if( aTabName) {
                    if( this._v_TabsTopCtrl) {
                        this._v_TabsTopCtrl.pSelectTab( aTabName);
                    }
                }

                var aSelection = theGoToTabSpec[ "selection"];
                if( !aSelection) {
                    return this.fNewDeferredResolveWithNothingPromise();
                }

                var aGridName = aSelection[ "gridName"];
                if( !aGridName) {
                    return this.fNewDeferredResolveWithNothingPromise();
                }

                var aGridCtrl = this.fGridCtrlNamed( aGridName);
                if( !aGridCtrl) {
                    return this.fNewDeferredResolveWithNothingPromise();
                }

                return aGridCtrl.fprDo_GoToSelection( aSelection, theSelectionValue);
            };
            if( fprDo_GoToTab){}/* CQT */
            aPrototype.fprDo_GoToTab = fprDo_GoToTab;










            var fprDo_InitialExtra = function() {

                this.pInitStaticTabsContent();

                return this._v_TabsTopCtrl.fprDo_Initial()
                    .then( aPrototype._v_SuperPrototype.fprDo_InitialExtra.bind( this));
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




        var WithTabsCtrl_Constructor = function( theTitle, theIdentifier, theRecorder, theScope,
                                                 theDomIdPrefix,
                                                 theParentCtrl,
                                                 theConverter,
                                                 theGridSpecs,
                                                 theEditorSpecs,
                                                 theCreatorSpecs,
                                                 theWireSpecs,
                                                 theInitialLoadGridNames,
                                                 theInitialLoadEditorNames,
                                                 theInitialInCreationNames,
                                                 theTabsBarEntries,
                                                 theInitiallySelectedTab,
                                                 theTabsFixedInitial) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_WithLastActionCtrlType.WithLastActionCtrl_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;
            this._v_Module = null;

            this._v_TabsTopCtrl = null;

            this._v_StaticTabs  = null;

            this._pInit_WithTabsCtrl( theTitle, theIdentifier, theRecorder, theScope,
                                      theDomIdPrefix,
                                      theParentCtrl,
                                      theConverter,
                                      theGridSpecs,
                                      theEditorSpecs,
                                      theCreatorSpecs,
                                      theWireSpecs,
                                      theInitialLoadGridNames,
                                      theInitialLoadEditorNames,
                                      theInitialInCreationNames,
                                      theTabsBarEntries,
                                      theInitiallySelectedTab,
                                      theTabsFixedInitial);
        };
        WithTabsCtrl_Constructor.prototype = aWithTabsCtrl_Prototype;





        var WithTabsCtrl_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_WithLastActionCtrlType.WithLastActionCtrl_Prototype;

            this._v_Prototype = aWithTabsCtrl_Prototype;
            this._v_Type      = null;
            this._v_Module    = null;

            this._v_TabsTopCtrl = null;

            this._v_StaticTabs  = null;

        };
        WithTabsCtrl_SuperPrototypeConstructor.prototype = aWithTabsCtrl_Prototype;



        var aModule = {
            "WithTabsCtrl_Prototype": aWithTabsCtrl_Prototype,
            "WithTabsCtrl_Constructor": WithTabsCtrl_Constructor,
            "WithTabsCtrl_SuperPrototypeConstructor": WithTabsCtrl_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aWithTabsCtrl_Prototype._v_Module = aModule;





        return aModule;
    };







    var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
    if( !anExistingModule) {

        var aModule = aMod_definer(
            theSS_Overrider,
            theSS_WithLastActionCtrlType,
            theSS_TabbedCtrlType
        );
        anExistingModule = aModule;

        theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
    }






    return anExistingModule;

}]);







