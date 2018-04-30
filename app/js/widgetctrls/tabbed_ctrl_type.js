'use strict';

/*
 * tabbed_ctrl_type.js
 *
 * Creado @author Antonio Carrasco Valero 201409301309
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






angular.module("widgetCtrlsTypes").factory("TabbedCtrlType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "WidgetCtrlType",
function( theSS_typesregistry,
          theSS_Overrider,
          theSS_WidgetCtrlType) {




    var ModuleName     = "tabbed_ctrl_type";
    var ModulePackages = "widgetctrls";
    var ModuleFullName = ModulePackages + "/" + ModuleName;



    var aMod_definer = function( theS_Overrider,
                                 theS_WidgetCtrlType) {


        if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}








        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.LOCATIONPARMNAME_TABSFIXED = "theTabsFixed";

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
            theToInit.TABBEDCTRL_DEFAULTTITLE = "TabbedCtrlDefaultName";

            theToInit.CSSCLASS_TAB         = "horizontal_list ui-state-default ui-corner-top";
            theToInit.CSSCLASS_TABSELECTED = theToInit.CSSCLASS_TAB + " ui-tabs-active ui-state-active";

            theToInit.CSSCLASS_TAB_MDD         = "MDD_Tab";
            theToInit.CSSCLASS_TABSELECTED_MDD = "MDD_Tab_Selected";


            theToInit.DOMIDPOSTFIX_TABS_BAR = "_TopTabs";
            theToInit.DOMIDPOSTFIX_TABS_TAB = "_TopTabs_Tab";


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






        var aTabbedCtrl_Prototype = (function() {


            var aPrototype = new theS_WidgetCtrlType.WidgetCtrl_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_SuperPrototype = theS_WidgetCtrlType.WidgetCtrl_Prototype;


            aPrototype._v_Type = "TabbedCtrl";

            aPrototype._v_Module = null;


            aPrototype._v_TabsBarDomId   = null;
            aPrototype._v_TabDomIdPrefix = null;
            aPrototype._v_TabsBarEntries = null;

            aPrototype._v_SelectedTab    = null;
            aPrototype._v_TabsFixed      = null;






            var _pInit = function( theTitle, theIdentifier, theRecorder, theScope,
                                   theDomIdPrefix,
                                   theSelectedTab, theTabsFixed, theTabsBarEntries) {

                this._pInit_TabbedCtrl( theTitle, theIdentifier, theRecorder, theScope,
                                        theDomIdPrefix,
                                        theSelectedTab, theTabsFixed, theTabsBarEntries);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;








            var _pInit_TabbedCtrl = function( theTitle, theIdentifier, theRecorder, theScope,
                                              theDomIdPrefix,
                                              theSelectedTab, theTabsFixed, theTabsBarEntries) {

                /* Delegate on super prototype initialization */
                aPrototype._v_SuperPrototype._pInit_WidgetCtrl.apply( this, [ theTitle, theIdentifier, theRecorder, theScope,
                                                                              theDomIdPrefix]);

                this._v_Prototype = aPrototype;
                this._v_Type      = this._v_Prototype._v_Type;
                this._v_Module    = aPrototype._v_Module;

                this._v_TabsBarDomId   = theDomIdPrefix + this.DOMIDPOSTFIX_TABS_BAR;
                this._v_TabDomIdPrefix = theDomIdPrefix + this.DOMIDPOSTFIX_TABS_TAB;

                this._v_TabsBarEntries = theTabsBarEntries;

                this._v_SelectedTab    = theSelectedTab;
                this._v_TabsFixed      = { };


                this._pInitTabsFixedFromEntries();


                if( theTabsFixed) {

                    var aNumTabsFixed = theTabsFixed.length;
                    if( aNumTabsFixed) {

                        for( var aTabFixedIdx=0; aTabFixedIdx < aNumTabsFixed; aTabFixedIdx++) {
                            var aTabFixed = theTabsFixed[ aTabFixedIdx];
                            if( aTabFixed && this._v_TabsFixed.hasOwnProperty( aTabFixed)) {
                                this._v_TabsFixed[ aTabFixed] = true;
                            }
                        }
                    }
                }
            };
            if( _pInit_TabbedCtrl){}/* CQT */
            aPrototype._pInit_TabbedCtrl = _pInit_TabbedCtrl;








            var _pInitTabsFixedFromEntries = function() {

                if( !this._v_TabsBarEntries) {
                    this._v_TabsBarEntries = [ ];
                }

                if( !this._v_TabsFixed) {
                    this._v_TabsFixed      = { };
                }

                var aNumTabsBarEntries = this._v_TabsBarEntries.length;
                for( var aTabsBarEntryIdx=0; aTabsBarEntryIdx < aNumTabsBarEntries; aTabsBarEntryIdx++) {
                    var aTabsBarEntry = this._v_TabsBarEntries[ aTabsBarEntryIdx];
                    if( aTabsBarEntry) {
                        var aTabValue = aTabsBarEntry[ "value"];
                        if( aTabValue) {
                            this._v_TabsFixed[ aTabValue] = false;
                        }
                    }
                }
            };
            if( _pInitTabsFixedFromEntries){}/* CQT */
            aPrototype._pInitTabsFixedFromEntries = _pInitTabsFixedFromEntries;







            var pSetTabsFixedFromLocationQuery = function() {

                if( !this._v_TabsFixed) {
                    return;
                }

                if( !this._v_LocationQuery) {
                    return;
                }

                var aTabsFixedParmStr = this._v_LocationQuery[ this.LOCATIONPARMNAME_TABSFIXED];
                if( !aTabsFixedParmStr) {
                    return;
                }


                var someTabNames = Object.keys( this._v_TabsFixed);
                if( !someTabNames) {
                    return;
                }

                var aNumTabNames = someTabNames.length;
                if( !aNumTabNames) {
                    return;
                }


                var someTabsFixedNames = null;
                if( aTabsFixedParmStr == this.LOCATIONPARMALLNAMES) {
                    someTabsFixedNames = someTabNames.slice();
                }
                else {
                    someTabsFixedNames = aTabsFixedParmStr.split( this.LOCATIONPARMNAME_NAMES_SEPARATOR);
                }

                var aNumTabsFixedNames = someTabsFixedNames.length;
                if( !aNumTabsFixedNames) {
                    return;
                }


                for( var aTabNameIdx=0; aTabNameIdx < aNumTabNames; aTabNameIdx++) {
                    var aTabName = someTabNames[ aTabNameIdx];
                    if( aTabName) {
                        var anIsFixed =  someTabsFixedNames.indexOf( aTabName) >= 0;
                        if( anIsFixed){}/* CQT */

                        this._v_TabsFixed[ aTabName] = anIsFixed;
                    }
                }

            };
            if( pSetTabsFixedFromLocationQuery){}/* CQT */
            aPrototype.pSetTabsFixedFromLocationQuery = pSetTabsFixedFromLocationQuery;








            var pReset_Tabs = function() {

                this._v_SelectedTab = null;

                this._pInitTabsFixedFromEntries();

                this.pSetTabsFixedFromLocationQuery();
            };
            if( pReset_Tabs){}/* CQT */
            aPrototype.pReset_Tabs = pReset_Tabs;








            var fprDo_Reset_Tabs = function() {

                this.pReset_Tabs();

                return this.fNewDeferredResolveWithNothingPromise();
            };
            if( fprDo_Reset_Tabs){}/* CQT */
            aPrototype.fprDo_Reset_Tabs = fprDo_Reset_Tabs;






            var pHookTabsToUI = function() {

                var aTabsBarDomElem =  $("#" + this._v_TabsBarDomId);

                aTabsBarDomElem.tabs();

                var aTabsBarDomId = this._v_TabsBarDomId;
                setTimeout(
                    function() {
                        var otherTabsBarDomElem =  $("#" + aTabsBarDomId);
                        if( otherTabsBarDomElem) {

                            var someChildrenLi = otherTabsBarDomElem.find( "li");
                            if( someChildrenLi && someChildrenLi.length) {
                                someChildrenLi.hover(function(){
                                    $(this).toggleClass('ui-state-hover');
                                });
                            }
                        }
                    },
                    300
                );
            };
            if( pHookTabsToUI){}/* CQT */
            aPrototype.pHookTabsToUI = pHookTabsToUI;











            var fprDo_Initial = function() {

                this.pInitFromLocationURLquery();

                this.pSetTabsFixedFromLocationQuery();

                this.pHookTabsToUI();

                return this.fNewDeferredResolveWithNothingPromise();
            };
            if( fprDo_Initial){}/* CQT */
            aPrototype.fprDo_Initial = fprDo_Initial;








            var pSelectTab = function( theTabValue) {
                this._v_SelectedTab = theTabValue;

                this.pScrollTabContentIntoView( theTabValue);
            };
            if( pSelectTab){}/* CQT */
            aPrototype.pSelectTab = pSelectTab;








            var fAnyTabSelected = function() {

                if( this._v_SelectedTab) {
                    return true;
                }

                var someTabValues = Object.keys( this._v_TabsFixed);
                var aNumTabValues = someTabValues.length;
                for( var aTabValueIdx=0; aTabValueIdx < aNumTabValues; aTabValueIdx++) {
                    var aTabValue = someTabValues[ aTabValueIdx];
                    if( aTabValue) {
                        return true;
                    }
                }

                return false;
            };
            if( fAnyTabSelected){}/* CQT */
            aPrototype.fAnyTabSelected = fAnyTabSelected;









            var fTabClass = function( theTabValue) {
                if( this._v_SelectedTab == theTabValue) {
                    return this.CSSCLASS_TABSELECTED;
                }

                return this.CSSCLASS_TAB;
            };
            if( fTabClass){}/* CQT */
            aPrototype.fTabClass = fTabClass;







            var fTabClass_nojquery = function( theTabValue) {
                if( this._v_SelectedTab == theTabValue) {
                    return this.CSSCLASS_TABSELECTED_MDD;
                }

                return this.CSSCLASS_TAB_MDD;
            };
            if( fTabClass_nojquery){}/* CQT */
            aPrototype.fTabClass_nojquery = fTabClass_nojquery;













            var pToggleTabsFixed = function( theTabValue) {
                
                if( !theTabValue) {
                    return;
                }

                if( !this._v_TabsFixed) {
                    return;
                }

                if( !this._v_TabsFixed.hasOwnProperty( theTabValue)) {
                    return;
                }

                this._v_TabsFixed[ theTabValue] = this._v_TabsFixed[ theTabValue]? false : true;
                
            };
            if( pToggleTabsFixed){}/* CQT */
            aPrototype.pToggleTabsFixed = pToggleTabsFixed;







            var fTabValues = function() {

                if( !this._v_TabsBarEntries) {
                    return [];
                }

                var someTabValues = [ ];

                var aNumTabsBarEntries = this._v_TabsBarEntries.length;
                for( var aTabsBarEntryIdx=0; aTabsBarEntryIdx < aNumTabsBarEntries; aTabsBarEntryIdx++) {
                    var aTabsBarEntry = this._v_TabsBarEntries[ aTabsBarEntryIdx];
                    if( aTabsBarEntry) {
                        var aTabValue = aTabsBarEntry[ "value"];
                        if( aTabValue) {
                            someTabValues.push( aTabValue);
                        }
                    }
                }

                return someTabValues;
            };
            if( fTabValues){}/* CQT */
            aPrototype.fTabValues = fTabValues;






            var fHasTabsFixedBefore = function( theTabValue) {

                if( !theTabValue) {
                    return false;
                }

                if( !this._v_TabsFixed) {
                    return false;
                }

                var someTabValues = this.fTabValues();
                if( !someTabValues) {
                    return false;
                }

                var aNumTabValues = someTabValues.length;
                for (var aTabValueIdx = 0; aTabValueIdx < aNumTabValues; aTabValueIdx++) {

                    var aTabValue = someTabValues[ aTabValueIdx];
                    if ( aTabValue) {

                        if( aTabValue == theTabValue) {
                            return false;
                        }

                        if( this._v_TabsFixed[ aTabValue]) {
                            return true;
                        }
                    }
                }

                return false;
            };
            if( fHasTabsFixedBefore){}/* CQT */
            aPrototype.fHasTabsFixedBefore = fHasTabsFixedBefore;







            var fHasTabsShownBefore = function( theTabValue) {

                if( !theTabValue) {
                    return false;
                }

                var someTabValues = this.fTabValues();
                if( !someTabValues) {
                    return false;
                }

                var aNumTabValues = someTabValues.length;
                for (var aTabValueIdx = 0; aTabValueIdx < aNumTabValues; aTabValueIdx++) {

                    var aTabValue = someTabValues[ aTabValueIdx];
                    if ( aTabValue) {
                        if( aTabValue == theTabValue) {
                            return false;
                        }
                        else {
                            if( this._v_SelectedTab && ( aTabValue == this._v_SelectedTab)) {
                                return true;
                            }

                            if( this._v_TabsFixed && this._v_TabsFixed[ aTabValue]) {
                                return true;
                            }
                        }
                    }
                }

                return false;
            };
            if( fHasTabsShownBefore){}/* CQT */
            aPrototype.fHasTabsShownBefore = fHasTabsShownBefore;









            var pScrollTabContentIntoView = function( theTabValue) {

                if( !theTabValue) {
                    return;
                }

                if( !this._v_TabDomIdPrefix) {
                    return;
                }

                var aHasTabsFixedBefore = this.fHasTabsFixedBefore( theTabValue);
                if( !aHasTabsFixedBefore) {
                    return;
                }

                var aThis = this;
                setTimeout(
                    function() {
                        var anElementId =  aThis._v_TabDomIdPrefix + "_" + theTabValue;
                        var anElement = document.getElementById( anElementId);
                        if( anElement) {
                            anElement.scrollIntoView();
                        }
                    },
                    100
                );
            };
            if( pScrollTabContentIntoView){}/* CQT */
            aPrototype.pScrollTabContentIntoView = pScrollTabContentIntoView;









            var fMayNeedToScrollTabsBarIntoView = function( theTabValue) {

                if( !theTabValue) {
                    return false;
                }

                var aHasTabsShownBefore = this.fHasTabsShownBefore( theTabValue);
                if( aHasTabsShownBefore){}/* CQT */

                return aHasTabsShownBefore;
            };
            if( fMayNeedToScrollTabsBarIntoView){}/* CQT */
            aPrototype.fMayNeedToScrollTabsBarIntoView = fMayNeedToScrollTabsBarIntoView;







            var pScrollTabsBarIntoView = function( theTabValue) {

                if( !theTabValue) {
                    return;
                }

                if( !this._v_TabsBarDomId) {
                    return;
                }

                var aHasTabsShownBefore = this.fHasTabsShownBefore( theTabValue);
                if( !aHasTabsShownBefore) {
                    return;
                }

                var aThis = this;
                setTimeout(
                    function() {
                        var anElement = document.getElementById( aThis._v_TabsBarDomId);
                        if( anElement) {
                            anElement.scrollIntoView();
                        }
                    },
                    100
                );
            };
            if( pScrollTabsBarIntoView){}/* CQT */
            aPrototype.pScrollTabsBarIntoView = pScrollTabsBarIntoView;












            return aPrototype;

        })();




        var TabbedCtrl_Constructor = function( theTitle, theIdentifier, theRecorder, theScope,
                                               theDomIdPrefix,
                                               theSelectedTab, theTabsFixed, theTabsBarEntries) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_WidgetCtrlType.WidgetCtrl_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;
            this._v_Module = null;

            this._v_TabsBarDomId   = null;
            this._v_TabDomIdPrefix = null;
            this._v_TabsBarEntries = null;

            this._v_SelectedTab    = null;
            this._v_TabsFixed      = null;

            this._pInit_TabbedCtrl( theTitle, theIdentifier, theRecorder, theScope,
                                    theDomIdPrefix,
                                    theSelectedTab, theTabsFixed, theTabsBarEntries);
        };
        TabbedCtrl_Constructor.prototype = aTabbedCtrl_Prototype;





        var TabbedCtrl_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_WidgetCtrlType.WidgetCtrl_Prototype;

            this._v_Prototype = aTabbedCtrl_Prototype;
            this._v_Type      = null;
            this._v_Module    = null;

            this._v_TabsBarDomId   = null;
            this._v_TabDomIdPrefix = null;
            this._v_TabsBarEntries = null;

            this._v_SelectedTab    = null;
            this._v_TabsFixed      = null;
        };
        TabbedCtrl_SuperPrototypeConstructor.prototype = aTabbedCtrl_Prototype;



        var aModule = {
            "TabbedCtrl_Prototype": aTabbedCtrl_Prototype,
            "TabbedCtrl_Constructor": TabbedCtrl_Constructor,
            "TabbedCtrl_SuperPrototypeConstructor": TabbedCtrl_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aTabbedCtrl_Prototype._v_Module = aModule;





        return aModule;
    };







    var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
    if( !anExistingModule) {

        var aModule = aMod_definer(
            theSS_Overrider,
            theSS_WidgetCtrlType
        );
        anExistingModule = aModule;

        theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
    }






    return anExistingModule;

}]);







