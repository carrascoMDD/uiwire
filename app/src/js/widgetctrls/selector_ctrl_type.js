'use strict';

/*
 * selector_ctrl_type.js
 *
 * Creado @author Antonio Carrasco Valero 201410300106
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






angular.module("widgetCtrlsTypes").factory("SelectorCtrlType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "GridCtrlType",
    "CssKeys",
    "$q",
    "$timeout",
function( theSS_typesregistry,
          theSS_Overrider,
          theSS_GridCtrlType,
          theSS_CssKeys,
          theSS_q,
          theSS_timeout) {




    var ModuleName     = "selector_ctrl_type";
    var ModulePackages = "widgetctrls";
    var ModuleFullName = ModulePackages + "/" + ModuleName;



    var aMod_definer = function( theS_Overrider,
                                 theS_GridCtrlType,
                                 theS_CssKeys,
                                 $q,
                                 $timeout) {
        if( $q){}/* CQT */
        if( $timeout){}/* CQT */


        if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}








        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.LOGEVENTS                        = true;

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
            theToInit.DEFAULTTITLE = "SelectorCtrlDefaultName";



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






        var aSelectorCtrl_Prototype = (function() {


            var aPrototype = new theS_GridCtrlType.GridCtrl_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_SuperPrototype = theS_GridCtrlType.GridCtrl_Prototype;


            aPrototype._v_Type = "SelectorCtrl";

            aPrototype._v_Module = null;


            aPrototype._v_SelectorShown = null;





            var _pInit = function( theTitle, theIdentifier, theRecorder, theScope,
                                   theDomIdPrefix,
                                   theParentCtrl,
                                   theConverter,
                                   theMasterFields,
                                   theGridName, theGridLabel, theLabels, theFields, theHiddenFields, theDataTypes,
                                   theGridClasses, theColumnClasses,
                                   theRetrievalTarget, theRetrieval, theWith, theQuery, theDeleteQuery,
                                   theAutoSelectIndex, theKeyField,
                                   theEditorName, theCreatorName,
                                   theDeleteTarget, theDelete, theDeleteWith, theDeleteParm, theDeleteSucessIfNotExistsParm,
                                   theRowsChangeListener, theSelectionChangeListener,
                                   theSelectorShown,
                                   theCreateRoles, theDeleteRoles) {

                this._pInit_SelectorCtrl( theTitle, theIdentifier, theRecorder, theScope,
                                          theDomIdPrefix,
                                          theParentCtrl,
                                          theConverter,
                                          theMasterFields,
                                          theGridName, theGridLabel, theLabels, theFields, theHiddenFields, theDataTypes,
                                          theGridClasses, theColumnClasses,
                                          theRetrievalTarget, theRetrieval, theWith, theQuery, theDeleteQuery,
                                          theAutoSelectIndex, theKeyField,
                                          theEditorName, theCreatorName,
                                          theDeleteTarget, theDelete, theDeleteWith, theDeleteParm, theDeleteSucessIfNotExistsParm,
                                          theRowsChangeListener, theSelectionChangeListener,
                                          theCreateRoles, theDeleteRoles,
                                          theSelectorShown);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_SelectorCtrl = function( theTitle, theIdentifier, theRecorder, theScope,
                                                theDomIdPrefix,
                                                theParentCtrl,
                                                theConverter,
                                                theMasterFields,
                                                theGridName, theGridLabel, theLabels, theFields, theHiddenFields, theDataTypes,
                                                theGridClasses, theColumnClasses,
                                                theRetrievalTarget, theRetrieval, theWith, theQuery,
                                                theAutoSelectIndex, theKeyField,
                                                theEditorName, theCreatorName,
                                                theDeleteTarget, theDelete, theDeleteWith, theDeleteParm, theDeleteSucessIfNotExistsParm,
                                                theRowsChangeListener, theSelectionChangeListener,
                                                theCreateRoles, theDeleteRoles,
                                                theSelectorShown) {

                /* Delegate on super prototype initialization */
                aPrototype._v_SuperPrototype._pInit_GridCtrl.apply( this, [ theTitle, theIdentifier, theRecorder, theScope,
                                                                            theDomIdPrefix,
                                                                            theParentCtrl,
                                                                            theConverter,
                                                                            theMasterFields,
                                                                            theGridName, theGridLabel, theLabels, theFields, theHiddenFields, theDataTypes,
                                                                            theGridClasses, theColumnClasses,
                                                                            theRetrievalTarget, theRetrieval, theWith, theQuery,
                                                                            theAutoSelectIndex, theKeyField,
                                                                            theEditorName, theCreatorName,
                                                                            theDeleteTarget, theDelete, theDeleteWith, theDeleteParm, theDeleteSucessIfNotExistsParm,
                                                                            theRowsChangeListener, theSelectionChangeListener,
                                                                            theCreateRoles, theDeleteRoles]);

                this._v_Prototype = aPrototype;
                this._v_Type      = this._v_Prototype._v_Type;
                this._v_Module    = aPrototype._v_Module;

                this._v_SelectorShown = theSelectorShown;
            };
            if( _pInit_SelectorCtrl){}/* CQT */
            aPrototype._pInit_SelectorCtrl = _pInit_SelectorCtrl;









            var pInitialObtainConverter = function() {
            };
            if( pInitialObtainConverter){}/* CQT */
            aPrototype.pInitialObtainConverter = pInitialObtainConverter;









            var pRegisterSelectorInParent = function( theEditorCtrl, theFieldName) {

                this.pRegisterGridInParent( theEditorCtrl, theFieldName);
            };
            if( pRegisterSelectorInParent){}/* CQT */
            aPrototype.pRegisterSelectorInParent = pRegisterSelectorInParent;










            var fCanDeleteSelection = function( ) {
                return false;
            };
            if( fCanDeleteSelection){}/* CQT */
            aPrototype.fCanDeleteSelection = fCanDeleteSelection;









            var fprDo_InitialExtra = function() {

                return aPrototype._v_SuperPrototype.fprDo_InitialExtra.apply( this);
            };
            if( fprDo_InitialExtra){}/* CQT */
            aPrototype.fprDo_InitialExtra = fprDo_InitialExtra;








            var fprDo_Initial = function() {

                var aPromise = this.fprDo_DisableUIhandlers().
                    then( this.fprDo_InitialExtra.bind( this))
                    ['finally']( this.fprDo_EnableUIhandlers.bind( this));
                if( aPromise){}/* CQT */

                return aPromise;
            };
            if( fprDo_Initial){}/* CQT */
            aPrototype.fprDo_Initial = fprDo_Initial;







            var fprDo_AutoSelect = function( ) {

                return this.fNewDeferredResolveWithNothingPromise();

            };
            if( fprDo_AutoSelect){}/* CQT */
            aPrototype.fprDo_AutoSelect = fprDo_AutoSelect;








            var fIsSelectorRendered = function() {

               return true;
            };
            if( fIsSelectorRendered){}/* CQT */
            aPrototype.fIsSelectorRendered = fIsSelectorRendered;











            var fIsSelectorShown = function() {

                var aSelectorShown =  this._v_SelectorShown ? true : false;
                if( aSelectorShown){}/* CQT */

                return aSelectorShown;
                /*
                var anIsSelectorShown = aPrototype._v_SuperPrototype.fIsGridShown.apply( this);
                return anIsSelectorShown;
                */
            };
            if( fIsSelectorShown){}/* CQT */
            aPrototype.fIsSelectorShown = fIsSelectorShown;










            var pUISelectionClick_DoAtBegin = function( theEvent) {
                if( theEvent){}/* CQT */

                if( !this._v_SelectorShown) {
                    return;
                }

                this._v_SelectorShown = false;
            };
            if( pUISelectionClick_DoAtBegin){}/* CQT */
            aPrototype.pUISelectionClick_DoAtBegin = pUISelectionClick_DoAtBegin;








            var fUISelectorRefreshClickListener = function( theEvent) {
                if( theEvent){}/* CQT */

                this.pInhibitSelectionChangeNotifications( true);

                var aThis = this;
                aPrototype._v_SuperPrototype.fprDo_RetrieveRowsAgain.apply( this)
                    ['finally']( function() {
                        aThis.pInhibitSelectionChangeNotifications( false);
                    });


                return true;
            };
            if( fUISelectorRefreshClickListener){}/* CQT */
            aPrototype.fUISelectorRefreshClickListener = fUISelectorRefreshClickListener;












            var fUISelectorCancelClickListener = function( theEvent) {
                if( theEvent){}/* CQT */

                if( !this._v_SelectorShown) {
                    return true;
                }

                this._v_SelectorShown = false;

                return true;
            };
            if( fUISelectorCancelClickListener){}/* CQT */
            aPrototype.fUISelectorCancelClickListener = fUISelectorCancelClickListener;










            var fUISelectorNoneClickListener = function( theEvent) {
                if( theEvent){}/* CQT */

                if( !this._v_SelectorShown) {
                    return false;
                }

                this._v_SelectorShown = false;

                this.pCacheUnselect( this._v_PreviousSelectionIndex);

                this.fprDo_SelectNone();

                return true;
            };
            if( fUISelectorNoneClickListener){}/* CQT */
            aPrototype.fUISelectorNoneClickListener = fUISelectorNoneClickListener;








            var fprDo_SelectNone = function() {

                if( this._v_InhibitSelectionChangeNotifications) {
                    return this.fNewDeferredResolveWithFieldsPromise( this._v_Selection);
                }

                this._v_Selection = null;

                var someListenerPromises = [ ];

                var aNumListeners = this._v_SelectionChangeListeners.length;
                for( var aListenerIdx=0; aListenerIdx < aNumListeners; aListenerIdx++) {

                    var aListener = this._v_SelectionChangeListeners[ aListenerIdx];
                    if( aListener) {

                        if( typeof aListener == "function") {

                            var aListenerResult = aListener( null, -1);
                            if( aListenerResult && aListenerResult.then) {
                                someListenerPromises.push( aListenerResult);
                            }
                        }
                        else {

                            if( ( typeof aListener == "object") && ( aListener.length)) {

                                aListener.forEach( function( athListenerOne) {

                                    if( typeof athListenerOne == "function") {
                                        var aOneListenerResult = athListenerOne( null, -1);
                                        if( aOneListenerResult && aOneListenerResult.then) {
                                            someListenerPromises.push( aOneListenerResult);
                                        }
                                    }
                                });
                            }
                        }
                    }
                }



                var aNumListenerPromises = someListenerPromises.length;
                if( !aNumListenerPromises) {
                    return this.fNewDeferredResolveWithNothingPromise();
                }

                if( aNumListenerPromises == 1) {
                    return someListenerPromises[ 0];
                }

                return this.fNewPromiseAll( someListenerPromises);
            };
            if( fprDo_SelectNone){}/* CQT */
            aPrototype.fprDo_SelectNone = fprDo_SelectNone;






            var pLogEvent = function( theEvent, theData, theDetails) {

                if( !this.LOGEVENTS) {
                    return;
                }

                aPrototype._v_SuperPrototype.pLogEvent.apply( this, [ theEvent, theData, theDetails]);
            };
            if( pLogEvent){}/* CQT */
            aPrototype.pLogEvent = pLogEvent;










            return aPrototype;

        })();




        var SelectorCtrl_Constructor = function( theTitle, theIdentifier, theRecorder, theScope,
                                                 theDomIdPrefix,
                                                 theParentCtrl,
                                                 theConverter,
                                                 theMasterFields,
                                                 theGridName, theGridLabel, theLabels, theFields, theHiddenFields, theDataTypes,
                                                 theGridClasses, theColumnClasses,
                                                 theRetrievalTarget, theRetrieval, theWith, theQuery, theDeleteQuery,
                                                 theAutoSelectIndex, theKeyField,
                                                 theEditorName, theCreatorName,
                                                 theDeleteTarget, theDelete, theDeleteWith, theDeleteParm, theDeleteSucessIfNotExistsParm,
                                                 theRowsChangeListener, theSelectionChangeListener,
                                                 theCreateRoles, theDeleteRoles,
                                                 theSelectorShown) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_GridCtrlType.GridCtrl_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;
            this._v_Module = null;

            this._v_SelectorShown = null;

            this._pInit_SelectorCtrl( theTitle, theIdentifier, theRecorder, theScope,
                                      theDomIdPrefix,
                                      theParentCtrl,
                                      theConverter,
                                      theMasterFields,
                                      theGridName, theGridLabel, theLabels, theFields, theHiddenFields, theDataTypes,
                                      theGridClasses, theColumnClasses,
                                      theRetrievalTarget, theRetrieval, theWith, theQuery, theDeleteQuery,
                                      theAutoSelectIndex, theKeyField,
                                      theEditorName, theCreatorName,
                                      theDeleteTarget, theDelete, theDeleteWith,
                                      theRowsChangeListener, theSelectionChangeListener,
                                      theCreateRoles, theDeleteRoles,
                                      theSelectorShown);
        };
        SelectorCtrl_Constructor.prototype = aSelectorCtrl_Prototype;







        var SelectorCtrl_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_GridCtrlType.GridCtrl_Prototype;

            this._v_Prototype = aSelectorCtrl_Prototype;
            this._v_Type      = null;
            this._v_Module    = null;

            this._v_SelectorShown = null;
        };
        SelectorCtrl_SuperPrototypeConstructor.prototype = aSelectorCtrl_Prototype;



        var aModule = {
            "SelectorCtrl_Prototype": aSelectorCtrl_Prototype,
            "SelectorCtrl_Constructor": SelectorCtrl_Constructor,
            "SelectorCtrl_SuperPrototypeConstructor": SelectorCtrl_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aSelectorCtrl_Prototype._v_Module = aModule;





        return aModule;
    };







    var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
    if( !anExistingModule) {

        var aModule = aMod_definer(
            theSS_Overrider,
            theSS_GridCtrlType,
            theSS_CssKeys,
            theSS_q,
            theSS_timeout
        );
        anExistingModule = aModule;

        theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
    }






    return anExistingModule;

}]);







