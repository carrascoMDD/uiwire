'use strict';

/*
 * candidates_ctrl_type.js
 *
 * Creado @author Antonio Carrasco Valero 201410030802
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






angular.module("widgetCtrlsTypes").factory("CandidatesCtrlType", [
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




    var ModuleName     = "candidates_ctrl_type";
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
            theToInit.DEFAULTTITLE = "CandidatesCtrlDefaultName";



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






        var aCandidatesCtrl_Prototype = (function() {


            var aPrototype = new theS_GridCtrlType.GridCtrl_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_SuperPrototype = theS_GridCtrlType.GridCtrl_Prototype;


            aPrototype._v_Type = "CandidatesCtrl";

            aPrototype._v_Module = null;


            aPrototype._v_CandidatesField = null;





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
                                   theRowsChangeListener, theSelectionChangeListener) {

                this._pInit_CandidatesCtrl( theTitle, theIdentifier, theRecorder, theScope,
                                            theDomIdPrefix,
                                            theParentCtrl,
                                            theConverter,
                                            theMasterFields,
                                            theGridName, theGridLabel, theLabels, theFields, theHiddenFields, theDataTypes,
                                            theGridClasses, theColumnClasses,
                                            theRetrievalTarget, theRetrieval, theWith, theQuery, theDeleteQuery, theDeleteQuery,
                                            theAutoSelectIndex, theKeyField,
                                            theEditorName, theCreatorName,
                                            theDeleteTarget, theDelete, theDeleteWith, theDeleteParm, theDeleteSucessIfNotExistsParm,
                                            theRowsChangeListener, theSelectionChangeListener);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_CandidatesCtrl = function( theTitle, theIdentifier, theRecorder, theScope,
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
                                                  theCandidatesField) {

                /* Delegate on super prototype initialization */
                aPrototype._v_SuperPrototype._pInit_GridCtrl.apply( this, [ theTitle, theIdentifier, theRecorder, theScope,
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
                                                                            theRowsChangeListener, theSelectionChangeListener]);

                this._v_Prototype = aPrototype;
                this._v_Type      = this._v_Prototype._v_Type;
                this._v_Module    = aPrototype._v_Module;

                this._v_CandidatesField = theCandidatesField;
            };
            if( _pInit_CandidatesCtrl){}/* CQT */
            aPrototype._pInit_CandidatesCtrl = _pInit_CandidatesCtrl;









            var pInitialObtainConverter = function() {
            };
            if( pInitialObtainConverter){}/* CQT */
            aPrototype.pInitialObtainConverter = pInitialObtainConverter;








            var pRegisterCandidates = function( theEditorCtrl, theFieldName) {

                if( !theEditorCtrl) {
                    return;
                }

                if( !theFieldName) {
                    return;
                }

                this.pSetParentCtrl( theEditorCtrl);


                var someGridParameters = theEditorCtrl.fParametersForNewCandidatesCtrl( this, theFieldName);
                if( !someGridParameters) {
                    return;
                }

                this._v_DomIdPrefix      = someGridParameters[ "domIdPrefix"];

                this._v_MasterLabels     = someGridParameters[ "masterLabels"];
                this._v_MasterFields     = someGridParameters[ "masterFields"];
                this._v_LastMasterFields = this._v_MasterFields;
                this.pUpdateMasterLabel();

                this._v_MasterParms      = someGridParameters[ "masterParms"];
                this._v_MasterType       = someGridParameters[ "masterType"];

                this._v_GridName         = someGridParameters[ "name"];
                this._v_GridLabel        = someGridParameters[ "gridLabel"];
                this._v_Labels           = someGridParameters[ "labels"];
                this._v_Fields           = someGridParameters[ "fields"];
                this._v_HiddenFields     = someGridParameters[ "hiddenFields"];

                this._v_DataTypes        = someGridParameters[ "dataTypes"];
                this._v_GridClasses      = someGridParameters[ "gridClasses"];
                this._v_ColumnClasses    = someGridParameters[ "classes"];
                this._v_RetrievalTarget  = someGridParameters[ "retrievalTarget"];
                this._v_Retrieval        = someGridParameters[ "retrieval"];
                this._v_With             = someGridParameters[ "with"];
                this._v_Query            = someGridParameters[ "query"];
                this._v_AutoSelectIndex  = someGridParameters[ "autoSelectIndex"];
                this._v_KeyField         = someGridParameters[ "keyField"];
                this._v_EditorName       = someGridParameters[ "editorName"];
                this._v_CreatorName      = someGridParameters[ "creatorName"];
                this._v_DeleteTarget     = someGridParameters[ "deleteTarget"];
                this._v_Delete           = someGridParameters[ "delete"];
                this._v_DeleteWith       = someGridParameters[ "deleteWith"];
                this._v_DeleteParm       = someGridParameters[ "deleteParm"];
                this._v_DeleteSucessIfNotExistsParm = someGridParameters[ "deleteSucessIfNotExistsParm"];
                this._v_DeleteQuery      = someGridParameters[ "deleteQuery"];
                this._v_NoRefresh        = someGridParameters[ "noRefresh"];

                this._v_LastRetrieval = null;
                this._v_LastMasterFields = null;

                if( this._v_GridName) {
                    this._v_Title += ( "-" + this._v_GridName);
                }


                this._v_CandidatesField = someGridParameters[ this.CANDIDATESFIELDINJECTEDPARAMETER];


                this.pObtainConverter();


                if( this.LOGREGISTRATION) {
                    if( this.LOGREGISTRATIONSPEC) {
                        this.pLogEvent( this.EVENTKIND_CANDIDATEREGISTEREDINEDITOR, someGridParameters);

                    }
                    else {
                        this.pLogEvent( this.EVENTKIND_CANDIDATEREGISTEREDINEDITOR);
                    }
                }

                theEditorCtrl.pWireNewCandidatesCtrl( this, this._v_GridName);

            };
            if( pRegisterCandidates){}/* CQT */
            aPrototype.pRegisterCandidates = pRegisterCandidates;










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








            var fIsCandidatesRendered = function() {

               return true;
            };
            if( fIsCandidatesRendered){}/* CQT */
            aPrototype.fIsCandidatesRendered = fIsCandidatesRendered;








            var fCandidatesField = function() {

                return this._v_CandidatesField;
            };
            if( fCandidatesField){}/* CQT */
            aPrototype.fCandidatesField = fCandidatesField;









            var fIsCandidatesShown = function() {

                var aCandidatesField = this.fCandidatesField();
                if( !aCandidatesField) {
                    return false;
                }

                var aParentCtrl = this.fParentCtrl();
                if( !aParentCtrl) {
                    return false;
                }

                var anIsCandidatesShown = aParentCtrl.fIsCandidatesCtrlShown( aCandidatesField);
                if( !anIsCandidatesShown) {
                    return false;
                }

                anIsCandidatesShown = aPrototype._v_SuperPrototype.fIsGridShown.apply( this);

                return anIsCandidatesShown;
            };
            if( fIsCandidatesShown){}/* CQT */
            aPrototype.fIsCandidatesShown = fIsCandidatesShown;









            var fUICandidatesRefreshClickListener = function( theEvent) {
                if( theEvent){}/* CQT */

                this.pInhibitSelectionChangeNotifications( true);

                var aThis = this;
                aPrototype._v_SuperPrototype.fprDo_RetrieveRowsAgain.apply( this)
                    ['finally']( function() {
                        aThis.pInhibitSelectionChangeNotifications( false);
                    });


                return true;
            };
            if( fUICandidatesRefreshClickListener){}/* CQT */
            aPrototype.fUICandidatesRefreshClickListener = fUICandidatesRefreshClickListener;







            var fUICandidatesCancelClickListener = function( theEvent) {
                if( theEvent){}/* CQT */

                var aCandidatesField = this.fCandidatesField();
                if( !aCandidatesField) {
                    return false;
                }

                var aParentCtrl = this.fParentCtrl();
                if( !aParentCtrl) {
                    return false;
                }

                aParentCtrl.pCandidatesCtrlNotShown( aCandidatesField);

                return true;
            };
            if( fUICandidatesCancelClickListener){}/* CQT */
            aPrototype.fUICandidatesCancelClickListener = fUICandidatesCancelClickListener;










            var fUICandidatesNoneClickListener = function( theEvent) {
                if( theEvent){}/* CQT */

                var aCandidatesField = this.fCandidatesField();
                if( !aCandidatesField) {
                    return false;
                }

                var aParentCtrl = this.fParentCtrl();
                if( !aParentCtrl) {
                    return false;
                }

                this.fprDo_SelectNone().then( function() {
                    aParentCtrl.pCandidatesCtrlNotShown( aCandidatesField);
                });

                return true;
            };
            if( fUICandidatesNoneClickListener){}/* CQT */
            aPrototype.fUICandidatesNoneClickListener = fUICandidatesNoneClickListener;








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




        var CandidatesCtrl_Constructor = function( theTitle, theIdentifier, theRecorder, theScope,
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
                                                   theCandidatesField) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_GridCtrlType.GridCtrl_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;
            this._v_Module = null;

            this._v_CandidatesField = null;

            this._pInit_CandidatesCtrl( theTitle, theIdentifier, theRecorder, theScope,
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
                                        theCandidatesField);
        };
        CandidatesCtrl_Constructor.prototype = aCandidatesCtrl_Prototype;







        var CandidatesCtrl_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_GridCtrlType.GridCtrl_Prototype;

            this._v_Prototype = aCandidatesCtrl_Prototype;
            this._v_Type      = null;
            this._v_Module    = null;

            this._v_CandidatesField = null;
        };
        CandidatesCtrl_SuperPrototypeConstructor.prototype = aCandidatesCtrl_Prototype;



        var aModule = {
            "CandidatesCtrl_Prototype": aCandidatesCtrl_Prototype,
            "CandidatesCtrl_Constructor": CandidatesCtrl_Constructor,
            "CandidatesCtrl_SuperPrototypeConstructor": CandidatesCtrl_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aCandidatesCtrl_Prototype._v_Module = aModule;





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







