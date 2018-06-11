'use strict';

/*
 * fields_ctrl_type.js
 *
 * Creado @author Antonio Carrasco Valero 201410180421
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






angular.module("widgetCtrlsTypes").factory("FieldsCtrlType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "MastereableCtrlType",
function( theSS_typesregistry,
          theSS_Overrider,
          theSS_MastereableCtrlType) {




    var ModuleName     = "fields_ctrl_type";
    var ModulePackages = "widgetctrls";
    var ModuleFullName = ModulePackages + "/" + ModuleName;



    var aMod_definer = function( theS_Overrider,
                                 theS_MastereableCtrlType) {


        if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}








        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.LOGEVENTS = true;
            theToInit.LOGREGISTRATION              = true;
            theToInit.LOGREGISTRATIONSPEC          = false;
            theToInit.LOGRETRIEVEFIELDS            = true;
            theToInit.LOGRETRIEVEDFIELDS           = true;
            theToInit.LOGUPDATEFIELDS              = true;
            theToInit.LOGUPDATEFIELDSDATA          = true;


            /* ACV OJO 201411300044 HACK para pasarle a las plantillas el valor que indica que no hay valor, para que puedan aplicar logica dependiente de si un campo tiene o no valor a mostrar */
            theToInit.REPRESENTATIONVALUE_NULL = "Ø"; /* aConverter.REPRESENTATIONVALUE_NULL = ; */

            theToInit.LOGFIELDSACCESSFUNCTIONINVOCATIONS = false;

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
            theToInit.DEFAULTTITLE = "FieldsCtrlDefaultName";


            theToInit.RELEVANTERRORTYPES = [
                "HitServerReport"
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







        var aFieldsCtrl_Prototype = (function() {


            var aPrototype = new theS_MastereableCtrlType.MastereableCtrl_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_SuperPrototype = theS_MastereableCtrlType.MastereableCtrl_Prototype;


            aPrototype._v_Type = "FieldsCtrl";

            aPrototype._v_Module = null;



            aPrototype._v_Retrieval             = null;
            aPrototype._v_MasterFields          = null;
            aPrototype._v_EditableFieldNames    = null;
            aPrototype._v_FieldSpecs            = null;

            aPrototype._v_FieldSpecsByName      = null;

            aPrototype._v_FieldsChangeListeners = null;
            aPrototype._v_ValuesChangeListeners = null;
            aPrototype._v_DirtyChangeListeners = null;

            aPrototype._v_Leyendo               = null;
            aPrototype._v_Fields                = null;
            aPrototype._v_UnchangedFields       = null;

            aPrototype._v_IsDirty               = null;
            aPrototype._v_ChangedFieldNames     = null;

            aPrototype._v_DisplayFields         = null;
            aPrototype._v_EditableFields        = null;

            aPrototype._v_LastRetrieval         = null;
            aPrototype._v_LastMasterFields      = null;

            aPrototype._v_FieldValuesFunctions  = null;

            aPrototype._v_OnErrorDoTarget       = null;
            aPrototype._v_OnErrorDo             = null;

            aPrototype._v_RetryLabel            = null;
            aPrototype._v_RetryField            = null;
            aPrototype._v_RetryValue            = null;

            aPrototype._v_RetryMessage          = null;
            aPrototype._v_RetryEnabled          = null;

            aPrototype._v_LastSelectedFiles     = null;

            aPrototype._v_FieldsDisabled            = { };
            aPrototype._v_FieldsDisabledMessages    = { };
            aPrototype._v_FieldsHidden              = { };

            aPrototype._v_LastActionsResults        = { };
            aPrototype._v_LastActionsErrorReports   = { };

            aPrototype._v_ActionsSuccesses          = { };
            aPrototype._v_ActionsSuccessesMessages  = { };
            aPrototype._v_ActionsErrorsMessages     = { };

            aPrototype._v_ActionsRetriesEnabled     = { };
            aPrototype._v_ActionsRetriesMessages    = { };






            var _pInit = function( theTitle, theIdentifier, theRecorder, theScope,
                                   theDomIdPrefix,
                                   theParentCtrl,
                                   theConverter,
                                   theMasterLabels, theMasterFields, theMasterParms, theMasterType,
                                   theRetrieval,
                                   theEditableFieldNames,
                                   theFieldsChangeListener, theValuesChangeListener,
                                   theFieldSpecs) {

                this._pInit_FieldsCtrl( theTitle, theIdentifier, theRecorder, theScope,
                                        theDomIdPrefix,
                                        theParentCtrl,
                                        theConverter,
                                        theMasterLabels, theMasterFields, theMasterParms, theMasterType,
                                        theRetrieval,
                                        theEditableFieldNames,
                                        theFieldsChangeListener, theValuesChangeListener,
                                        theFieldSpecs);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;









            var _pInit_FieldsCtrl = function( theTitle, theIdentifier, theRecorder, theScope,
                                              theDomIdPrefix,
                                              theParentCtrl,
                                              theConverter,
                                              theMasterLabels, theMasterFields, theMasterParms, theMasterType,
                                              theRetrieval,
                                              theEditableFieldNames,
                                              theFieldsChangeListener, theValuesChangeListener,
                                              theFieldSpecs) {

                /* Delegate on super prototype initialization */
                aPrototype._v_SuperPrototype._pInit_MastereableCtrl.apply( this, [ theTitle, theIdentifier, theRecorder, theScope,
                                                                                   theDomIdPrefix,
                                                                                   theParentCtrl,
                                                                                   theConverter,
                                                                                   theMasterLabels, theMasterFields, theMasterParms, theMasterType]);

                this._v_Prototype = aPrototype;
                this._v_Type      = this._v_Prototype._v_Type;
                this._v_Module    = aPrototype._v_Module;

                this._v_Retrieval           = theRetrieval;
                this._v_EditableFieldNames  = theEditableFieldNames;
                this._v_FieldSpecs          = theFieldSpecs;

                this._v_FieldSpecsByName = {};
                if( this._v_FieldSpecs) {
                    this._v_FieldSpecs.forEach( function( theField) {
                        if( theField[ "name"]) {
                            this._v_FieldSpecsByName[ theField[ "name"]] = theField;
                        }
                    }, this);
                }

                this._v_FieldsChangeListeners = [ ];
                this._v_ValuesChangeListeners = [ ];
                this._v_DirtyChangeListeners  = [ ];

                if( theFieldsChangeListener) {
                    this.pAddFieldsChangeListener( theFieldsChangeListener);
                }

                if( theValuesChangeListener) {
                    this.pAddValuesChangeListener( theValuesChangeListener);
                }

                this._v_Leyendo               = null;
                this._v_Fields                = null;
                this._v_UnchangedFields       = null;

                this._v_IsDirty               = false;
                this._v_ChangedFieldNames     = { };

                this._v_DisplayFields         = null;
                this._v_EditableFields        = null;

                this._v_LastRetrieval         = null;
                this._v_LastMasterFields      = null;

                this._v_FieldValuesFunctions  = null;

                this._v_OnErrorDoTarget       = null;
                this._v_OnErrorDo             = null;

                this._v_RetryLabel            = null;
                this._v_RetryField            = null;
                this._v_RetryValue            = null;

                this._v_RetryMessage          = null;
                this._v_RetryEnabled          = false;

                this._v_LastSelectedFiles     = null;

                this._v_FieldsDisabled            = { };
                this._v_FieldsDisabledMessages    = { };
                this._v_FieldsHidden              = { };

                this._v_LastActionsResults        = { };
                this._v_LastActionsErrorReports   = { };

                this._v_ActionsSuccesses          = { };
                this._v_ActionsSuccessesMessages  = { };
                this._v_ActionsErrorsMessages     = { };

                this._v_ActionsRetriesEnabled     = { };
                this._v_ActionsRetriesMessages    = { };

                if( this._v_IsDirty){}/* CQT */
                if( this._v_EditableFieldNames){}/* CQT */
                if( this._v_DisplayFields){}/* CQT */
                if( this._v_EditableFields){}/* CQT */
                if( this._v_OnErrorDoTarget){}/* CQT */
                if( this._v_OnErrorDo){}/* CQT */
                if( this._v_RetryLabel){}/* CQT */
                if( this._v_RetryMessage){}/* CQT */
            };
            if( _pInit_FieldsCtrl){}/* CQT */
            aPrototype._pInit_FieldsCtrl = _pInit_FieldsCtrl;







            var pDestroy = function() {

                this._v_Retrieval             = null;
                this._v_MasterFields           = null;
                this._v_EditableFieldNames    = null;
                this._v_FieldSpecs            = null;

                this._v_FieldSpecsByName      = null;

                this._v_FieldsChangeListeners = null;
                this._v_ValuesChangeListeners = null;
                this._v_DirtyChangeListeners  = null;

                this._v_Leyendo               = null;
                this._v_Fields                = null;
                this._v_UnchangedFields       = null;

                this._v_IsDirty               = null;
                this._v_ChangedFieldNames     = null;

                this._v_DisplayFields         = null;
                this._v_EditableFields        = null;

                this._v_LastRetrieval         = null;
                this._v_LastMasterFields      = null;

                this._v_FieldValuesFunctions  = null;

                this._v_OnErrorDoTarget       = null;
                this._v_OnErrorDo             = null;

                this._v_RetryLabel            = null;
                this._v_RetryField            = null;
                this._v_RetryValue            = null;

                this._v_RetryMessage          = null;
                this._v_RetryEnabled          = null;

                this._v_LastSelectedFiles     = null;

                this._v_FieldsDisabled            = { };
                this._v_FieldsDisabledMessages    = { };
                this._v_FieldsHidden              = { };

                this._v_LastActionsResults        = { };
                this._v_LastActionsErrorReports   = { };

                this._v_ActionsSuccesses          = { };
                this._v_ActionsSuccessesMessages  = { };
                this._v_ActionsErrorsMessages     = { };

                this._v_ActionsRetriesEnabled     = { };
                this._v_ActionsRetriesMessages    = { };

                aPrototype._v_SuperPrototype.pDestroy.apply( this);
            };
            if( pDestroy){}/* CQT */
            aPrototype.pDestroy = pDestroy;








            var pInitialObtainConverter = function() {
            };
            if( pInitialObtainConverter){}/* CQT */
            aPrototype.pInitialObtainConverter = pInitialObtainConverter;










            var pInitFieldSpecsByName= function() {

                if( !this._v_FieldSpecs) {
                    return;
                }

                var aNumFieldSpecs = this._v_FieldSpecs.length;
                for( var aFieldSpecIdx=0; aFieldSpecIdx < aNumFieldSpecs; aFieldSpecIdx++) {
                    var aFieldSpec = this._v_FieldSpecs[ aFieldSpecIdx];
                    if( aFieldSpec) {
                        var aFieldName = aFieldSpec[ "name"];
                        if( aFieldName) {

                            this._v_FieldSpecsByName[ aFieldName] = aFieldSpec;
                        }
                    }
                }
            };
            if( pInitFieldSpecsByName){}/* CQT */
            aPrototype.pInitFieldSpecsByName = pInitFieldSpecsByName;










            var pAddFieldsChangeListener = function( theListener) {

                if( !theListener) {
                    return;
                }

                if( this._v_FieldsChangeListeners.indexOf( theListener) >= 0) {
                    return;
                }

                this._v_FieldsChangeListeners.push( theListener);

            };
            if( pAddFieldsChangeListener){}/* CQT */
            aPrototype.pAddFieldsChangeListener = pAddFieldsChangeListener;






            var pRemoveFieldsChangeListener = function( theListener) {

                if( !theListener) {
                    return;
                }

                var aListenerIndex = this._v_FieldsChangeListeners.indexOf( theListener);

                if( aListenerIndex < 0) {
                    return;
                }

                this._v_FieldsChangeListeners.splice( aListenerIndex, 1);

            };
            if( pRemoveFieldsChangeListener){}/* CQT */
            aPrototype.pRemoveFieldsChangeListener = pRemoveFieldsChangeListener;







            var pAddValuesChangeListener = function( theListener) {

                if( !theListener) {
                    return;
                }

                if( this._v_ValuesChangeListeners.indexOf( theListener) >= 0) {
                    return;
                }

                this._v_ValuesChangeListeners.push( theListener);

            };
            if( pAddValuesChangeListener){}/* CQT */
            aPrototype.pAddValuesChangeListener = pAddValuesChangeListener;






            var pRemoveValuesChangeListener = function( theListener) {

                if( !theListener) {
                    return;
                }

                var aListenerIndex = this._v_ValuesChangeListeners.indexOf( theListener);

                if( aListenerIndex < 0) {
                    return;
                }

                this._v_ValuesChangeListeners.splice( aListenerIndex, 1);

            };
            if( pRemoveValuesChangeListener){}/* CQT */
            aPrototype.pRemoveValuesChangeListener = pRemoveValuesChangeListener;




            var pAddDirtyChangeListener = function( theListener) {

                if( !theListener) {
                    return;
                }

                if( this._v_DirtyChangeListeners.indexOf( theListener) >= 0) {
                    return;
                }

                this._v_DirtyChangeListeners.push( theListener);

            };
            if( pAddDirtyChangeListener){}/* CQT */
            aPrototype.pAddDirtyChangeListener = pAddDirtyChangeListener;






            var pRemoveDirtyChangeListener = function( theListener) {

                if( !theListener) {
                    return;
                }

                var aListenerIndex = this._v_DirtyChangeListeners.indexOf( theListener);

                if( aListenerIndex < 0) {
                    return;
                }

                this._v_DirtyChangeListeners.splice( aListenerIndex, 1);

            };
            if( pRemoveDirtyChangeListener){}/* CQT */
            aPrototype.pRemoveDirtyChangeListener = pRemoveDirtyChangeListener;







            var fFields = function( ) {

                return this._v_Fields;
            };
            if( fFields){}/* CQT */
            aPrototype.fFields = fFields;






            var fDisplayFields = function( ) {

                return this._v_DisplayFields;
            };
            if( fDisplayFields){}/* CQT */
            aPrototype.fDisplayFields = fDisplayFields;







            var fEditableFields = function( ) {

                return this._v_EditableFields;
            };
            if( fEditableFields){}/* CQT */
            aPrototype.fEditableFields = fEditableFields;






            var fUnchangedFields = function( ) {

                return this._v_UnchangedFields;
            };
            if( fUnchangedFields){}/* CQT */
            aPrototype.fUnchangedFields = fUnchangedFields;










            var fRetryEnabled = function( ) {

                return this._v_RetryEnabled;
            };
            if( fRetryEnabled){}/* CQT */
            aPrototype.fRetryEnabled = fRetryEnabled;





            var pRetryEnable = function( theEnablement ) {

                if( theEnablement) {
                    this._v_RetryEnabled = true;
                }
                else {
                    this._v_RetryEnabled = false;
                    this._v_RetryMessage = null;
                }
            };
            if( pRetryEnable){}/* CQT */
            aPrototype.pRetryEnable = pRetryEnable;






            var pRetryDisable = function( ) {

                this._v_RetryEnabled = false;
            };
            if( pRetryDisable){}/* CQT */
            aPrototype.pRetryDisable = pRetryDisable;






            var pCleanUpFields = function( ) {

                this._v_Fields            = null;
                this._v_UnchangedFields   = null;

                this._v_DisplayFields  = null;
                this._v_EditableFields = null;

                this._v_IsDirty           = false;
                this._v_ChangedFieldNames = { };

                this._v_MasterFields     = null;
                this._v_LastRetrieval   = null;
                this._v_LastMasterFields = null;

                this._v_RetryMessage          = null;
                this._v_RetryEnabled          = null;

                this._v_LastSelectedFiles     = null;

                this._v_FieldsDisabled            = { };
                this._v_FieldsDisabledMessages    = { };
                this._v_FieldsHidden              = { };

                this._v_LastActionsResults        = { };
                this._v_LastActionsErrorReports   = { };

                this._v_ActionsSuccesses          = { };
                this._v_ActionsSuccessesMessages  = { };
                this._v_ActionsErrorsMessages     = { };

                this._v_ActionsRetriesEnabled     = { };
                this._v_ActionsRetriesMessages    = { };
            };
            if( pCleanUpFields){}/* CQT */
            aPrototype.pCleanUpFields = pCleanUpFields;








            var pCleanUpDirtyFlag = function( ) {

                this._v_IsDirty           = false;
            };
            if( pCleanUpDirtyFlag){}/* CQT */
            aPrototype.pCleanUpDirtyFlag = pCleanUpDirtyFlag;








            var fprDo_CleanUpFields = function( ) {

                this.pCleanUpFields();

                return this.fNewDeferredResolveWithNothingPromise();
            };
            if( fprDo_CleanUpFields){}/* CQT */
            aPrototype.fprDo_CleanUpFields = fprDo_CleanUpFields;









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







            var pUpdateMasterFields_UponRetrieveFields = function( theMasterFields) {
                if( theMasterFields){}/* CQT */
            };
            if( pUpdateMasterFields_UponRetrieveFields){}/* CQT */
            aPrototype.pUpdateMasterFields_UponRetrieveFields = pUpdateMasterFields_UponRetrieveFields;









            var fprDo_UpdateCandidatesSelectionIfShown = function( theRetrievedData) {
                if( theRetrievedData){}/* CQT */
            };
            if( fprDo_UpdateCandidatesSelectionIfShown){}/* CQT */
            aPrototype.fprDo_UpdateCandidatesSelectionIfShown = fprDo_UpdateCandidatesSelectionIfShown;









            var pForceFieldValue = function( theFieldName, theValue, theDisplayValue, theEditableValue) {

                var aDisplayValue = theDisplayValue;
                if( typeof aDisplayValue == "undefined") {

                    var aFieldSpec = this.fFieldSpecByName( theFieldName);
                    if( aFieldSpec) {
                        var aDataType = aFieldSpec[ "dataType"];

                        var aConverter = this.fConverter();
                        if( aConverter) {
                            aDisplayValue = aConverter.fConvertToDisplayValue( theValue, aDataType);
                        }
                    }
                }

                if( !aDisplayValue) {
                    aDisplayValue = "";
                }

                var aEditableValue = theEditableValue;
                if( typeof aEditableValue == "undefined") {
                    aEditableValue = theValue;
                }


                if( this._v_UnchangedFields) {
                    this._v_UnchangedFields[ theFieldName]  = theValue;
                }

                if( this._v_Fields) {
                    this._v_Fields[ theFieldName]            = theValue;
                }

                if( this._v_DisplayFields) {
                    this._v_DisplayFields[ theFieldName]     = aDisplayValue;
                }

                if( this._v_EditableFields) {
                    this._v_EditableFields[ theFieldName]    = aEditableValue;
                }

                if( this._v_ChangedFieldNames) {
                    this._v_ChangedFieldNames[ theFieldName] = true;
                }

                this._v_IsDirty           = true;

                this.pUpdateFieldsDisabledOrHidden();
            };
            if( pForceFieldValue){}/* CQT */
            aPrototype.pForceFieldValue = pForceFieldValue;










            var pForceFieldReset = function( theFieldName) {

                if( this._v_UnchangedFields) {
                    this._v_UnchangedFields[ theFieldName]  = null;
                }

                if( this._v_Fields) {
                    this._v_Fields[ theFieldName]            = null;
                }

                if( this._v_DisplayFields) {
                    this._v_DisplayFields[ theFieldName]     = null;
                }

                if( this._v_EditableFields) {
                    this._v_EditableFields[ theFieldName]    = null;
                }

                if( this._v_ChangedFieldNames) {
                    this._v_ChangedFieldNames[ theFieldName] = false;
                }

                this._v_IsDirty           = true;

                this.pUpdateFieldsDisabledOrHidden();

                this._v_LastActionsResults[       theFieldName] = null;
                this._v_LastActionsErrorReports[  theFieldName] = null;

                this._v_ActionsSuccesses[         theFieldName] = null;
                this._v_ActionsSuccessesMessages[ theFieldName] = null;
                this._v_ActionsErrorsMessages[    theFieldName] = null;

                this._v_ActionsRetriesEnabled[    theFieldName] = null;
                this._v_ActionsRetriesMessages[   theFieldName] = null;

            };
            if( pForceFieldReset){}/* CQT */
            aPrototype.pForceFieldReset = pForceFieldReset;











            var fprDo_RetrieveFields = function( theRetrieval, theMasterFields) {

                var aMethodName = this._v_Type + " fprDo_RetrieveFields";

                var aDeferred = this.fNewDeferred();


                this._v_LastRetrieval = null;
                this._v_LastMasterFields = null;

                this._v_Leyendo = true;

                this.pUpdateMasterFields_UponRetrieveFields( theMasterFields);

                var aParentCtrl = this.fParentCtrl();

                var aRetrieval = theRetrieval;
                if( !aRetrieval) {
                    var aRetrievalTargetName = this._v_RetrievalTarget;
                    if( aRetrievalTargetName) {

                        if( aParentCtrl) {

                            var aRetrievalTarget = aParentCtrl[ aRetrievalTargetName];
                            if( aRetrievalTarget) {

                                if( typeof aRetrievalTarget == "function") {
                                    aRetrievalTarget = aRetrievalTarget();
                                }

                                var aRetrievalName = this._v_Retrieval;
                                if( aRetrievalName) {

                                    var aNamedRetrieval = aRetrievalTarget[ aRetrievalName];
                                    if( typeof aNamedRetrieval == "function") {
                                        aRetrieval = aNamedRetrieval.bind( aRetrievalTarget);
                                    }
                                }
                            }
                        }
                    }
                }
                if( !aRetrieval) {
                    this.pDeferredReject( aMethodName + " !aRetrieval");
                    return aDeferred.promise;
                }


                this._v_LastRetrieval = aRetrieval;

                this.pUpdateMasterFields_UponRetrieveFields( theMasterFields);




                if( this.LOGRETRIEVEFIELDS) {
                    this.pLogEvent( this.EVENTKIND_TRYTORETRIEVEFIELDS, aRetrieval);
                }



                /* ********************************************************************
                Retrieve data NOW (usually from server, remote or async resource, ...)
                */
                var aPromise = aRetrieval();

                var aRetrievedDataHolder = [ null];

                var aThis = this;
                aPromise
                    .then(
                        function( theResolvedData) {

                            if( aThis.LOGRETRIEVEFIELDS) {
                                if( aThis.LOGRETRIEVEDFIELDS) {
                                    aThis.pLogEvent( aThis.EVENTKIND_RETRIEVEDFIELDS, theResolvedData);
                                }
                                else {
                                    aThis.pLogEvent( aThis.EVENTKIND_RETRIEVEDFIELDS);
                                }
                            }

                            aThis._v_Leyendo = false;

                            aThis.pSetFieldsWithData( theResolvedData);

                            return aThis.fNewDeferredResolveWithFieldsPromise( theResolvedData);
                        }
                    )
                    .then(
                        function( theResolvedData) {

                            return aThis.fprDo_RefreshFields( theResolvedData);
                        }
                    )
                    .then(
                        function( theResolvedData) {

                            return aThis.fprDo_UpdateCandidatesSelectionIfShown( theResolvedData);
                        }
                    )
                    .then(
                        this.fprDo_FieldsChanged.bind( this)
                    )
                    .then(
                        function( theSomething) {
                            if( theSomething){}/* CQT */

                            aThis.pDeferredResolveWithFields( aDeferred, aRetrievedDataHolder[ 0]);
                        }
                    )
                    ["catch"](
                        function( theError) {
                            aThis._v_Leyendo = false;

                            aThis.pSetFieldsWithData( null);

                            aThis.pDeferredReject( aDeferred, theError);
                        }
                    );

                return aDeferred.promise;

            };
            if( fprDo_RetrieveFields){}/* CQT */
            aPrototype.fprDo_RetrieveFields = fprDo_RetrieveFields;












            var fprDo_RetrieveFieldsAgain = function() {

                return this.fprDo_RetrieveFields( this._v_LastRetrieval, this._v_LastMasterFields);
            };
            if( fprDo_RetrieveFieldsAgain){}/* CQT */
            aPrototype.fprDo_RetrieveFieldsAgain = fprDo_RetrieveFieldsAgain;








            var pSetFieldsWithData = function( theFields) {

                this._v_Fields = theFields;

                this._v_UnchangedFields   = this.fCopyFieldsData( theFields);

                this.pInitEditableFields();

                this._v_IsDirty           = false;
                this._v_ChangedFieldNames = { };

                this._v_FieldsDisabled            = { };
                this._v_FieldsDisabledMessages    = { };
                this._v_FieldsHidden              = { };

                this._v_LastActionsResults        = { };
                this._v_LastActionsErrorReports   = { };

                this._v_ActionsSuccesses          = { };
                this._v_ActionsSuccessesMessages  = { };
                this._v_ActionsErrorsMessages     = { };

                this._v_ActionsRetriesEnabled     = { };
                this._v_ActionsRetriesMessages    = { };

                this.pUpdateFieldsDisabledOrHidden();
            };
            if( pSetFieldsWithData){}/* CQT */
            aPrototype.pSetFieldsWithData = pSetFieldsWithData;









            var fFieldValuesFunctions = function() {
                if( this._v_FieldValuesFunctions) {
                    return this._v_FieldValuesFunctions;
                }


                var aNumFieldSpecs    = this._v_FieldSpecs.length;

                this._v_FieldValuesFunctions = new Array( aNumFieldSpecs);

                for( var aFieldIdx=0; aFieldIdx < aNumFieldSpecs; aFieldIdx++) {

                    var aFieldSpec = this._v_FieldSpecs[ aFieldIdx];
                    if( aFieldSpec) {

                        var aFieldName = aFieldSpec[ "name"];

                        if( aFieldName) {

                            if( aFieldName.indexOf( this.FIELDNAMEDOT) < 0) {
                                continue;
                            }

                            var someFieldSteps = aFieldName.split(  this.FIELDNAMEDOT);
                            var aNumFieldSteps = someFieldSteps.length;
                            if( !aNumFieldSteps) {
                                continue;
                            }

                            var aFunctionSourceCode = "(function( theRec) { ";
                            if( this.LOGFIELDSACCESSFUNCTIONINVOCATIONS) {
                                aFunctionSourceCode += " console.log( 'FieldsAccessFunction " + aFieldName + "');";
                            }
                            aFunctionSourceCode += " var aCur = theRec;";

                            for( var aFieldStepIdx=0; aFieldStepIdx < aNumFieldSteps; aFieldStepIdx++) {
                                var aFieldStep = someFieldSteps[ aFieldStepIdx];
                                if( aFieldStep) {
                                    aFunctionSourceCode += " if( !aCur) { return null}; ";
                                    aFunctionSourceCode += " aCur = aCur." + aFieldStep + ";";
                                }
                            }
                            aFunctionSourceCode += " return aCur;";
                            aFunctionSourceCode += " });";
                            var aCellValueFunction = null;
                            try {
                                aCellValueFunction = eval( aFunctionSourceCode);
                            }
                            catch( anException) {
                            }
                            if( aCellValueFunction) {
                                this._v_FieldValuesFunctions[ aFieldIdx] = aCellValueFunction;
                            }
                        }

                    }
                }

                return this._v_FieldValuesFunctions;

            };
            if( fFieldValuesFunctions){}/* CQT */
            aPrototype.fFieldValuesFunctions = fFieldValuesFunctions;








            var pInitDisplayFields = function( ) {

                this._v_DisplayFields = { };

                var someFields = this.fFields();
                if( !someFields) {
                    return;
                }

                if( !this._v_FieldSpecs) {
                    return;
                }

                var aConverter = this.fConverter();
                if( !aConverter) {
                    this._v_DisplayFields = someFields;
                    return;
                }


                var someFieldValuesFunctions = this.fFieldValuesFunctions();

                var aNumFieldSpecs = this._v_FieldSpecs.length;

                for( var aFieldSpecIdx=0; aFieldSpecIdx < aNumFieldSpecs; aFieldSpecIdx++) {
                    var aFieldSpec = this._v_FieldSpecs[ aFieldSpecIdx];
                    if( aFieldSpec) {

                        var aFieldName = aFieldSpec[ "name"];
                        if( aFieldName) {

                            var aFieldValue = null;

                            if( someFieldValuesFunctions) {
                                var aFieldValueFunction = someFieldValuesFunctions[ aFieldSpecIdx];
                                if( aFieldValueFunction) {
                                    aFieldValue = aFieldValueFunction( someFields);
                                }
                                else {
                                    aFieldValue = someFields[ aFieldName];
                                }
                            }
                            else {
                                aFieldValue = someFields[ aFieldName];
                            }

                            var aDataType = aFieldSpec[ "dataType"];

                            var aConvertedFieldValue = aConverter.fConvertToDisplayValue( aFieldValue, aDataType);
                            if( aConvertedFieldValue){}/* CQT */

                            this._v_DisplayFields[ aFieldName] = aConvertedFieldValue;
                        }
                    }
                }
            };
            if( pInitDisplayFields){}/* CQT */
            aPrototype.pInitDisplayFields = pInitDisplayFields;










            var pInitEditableFields = function( ) {

                this._v_EditableFields = { };

                var someFields = this.fFields();
                if( !someFields) {
                    return;
                }

                if( !this._v_FieldSpecs) {
                    return;
                }

                var aConverter = this.fConverter();
                if( !aConverter) {
                    this._v_EditableFields = someFields;
                    return;
                }

                var aThis = this;
                this._v_FieldSpecs.forEach(
                    function( athFieldSpec) {

                        var aFieldName = athFieldSpec[ "name"];
                        if( aFieldName) {

                            var aFieldValue = someFields[ aFieldName];

                            var aDataType = athFieldSpec[ "dataType"];
                            var aConvertedFieldValue = aConverter.fConvertToEditableValue( aFieldValue, aDataType);
                            if( aConvertedFieldValue){}/* CQT */

                            aThis._v_EditableFields[ aFieldName] = aConvertedFieldValue;
                        }
                    }
                );

                this.pUpdateFieldsDisabledOrHidden();
            };
            if( pInitEditableFields){}/* CQT */
            aPrototype.pInitEditableFields = pInitEditableFields;










            var fFieldContainerHeightClass = function( theFieldSpecName) {

                if( !theFieldSpecName) {
                    return "";
                }

                var aFieldSpec = this.fFieldSpecByName( theFieldSpecName);
                if( !aFieldSpec) {
                    return "";
                }

                return "";
            };
            if( fFieldContainerHeightClass){}/* CQT */
            aPrototype.fFieldContainerHeightClass = fFieldContainerHeightClass;









            var fCopyFieldsData = function( theFields) {

                if( !theFields) {
                    return theFields;
                }

                var aFieldsCopy = this.fCopyFieldValue( theFields);
                if( aFieldsCopy){}/* CQT */

                return aFieldsCopy;
            };
            if( fCopyFieldsData){}/* CQT */
            aPrototype.fCopyFieldsData = fCopyFieldsData;







            var fCopyFieldValue = function( theFieldValue) {

                if( typeof theFieldValue == "undefined") {
                    return theFieldValue;
                }

                if( typeof theFieldValue == "string") {
                    return theFieldValue;
                }

                if( typeof theFieldValue == "boolean") {
                    return theFieldValue;
                }

                if( typeof theFieldValue == "number") {
                    return theFieldValue;
                }

                if( typeof theFieldValue == "function") {
                    return theFieldValue;
                }

                if( !(typeof theFieldValue == "object")) {
                    return theFieldValue;
                }

                if( theFieldValue == null) {
                    return theFieldValue;
                }


                if( !( typeof theFieldValue.length == "undefined")) {
                    var aFieldValueListCopy = this.fCopyFieldValueList( theFieldValue);
                    if( aFieldValueListCopy){}/* CQT */

                    return aFieldValueListCopy
                }


                var aFieldValueCopy = { };

                var someFieldValues = theFieldValue;
                var aThis = this;
                Object.keys( someFieldValues).forEach( function( athFieldKey) {
                    var aSubFieldValue = someFieldValues[ athFieldKey];
                    aFieldValueCopy[ athFieldKey] = aThis.fCopyFieldValue( aSubFieldValue);
                });

                return aFieldValueCopy;
            };
            if( fCopyFieldValue){}/* CQT */
            aPrototype.fCopyFieldValue = fCopyFieldValue;








            var fCopyFieldValueList = function( theFieldValueList) {

                if( typeof theFieldValueList == "undefined") {
                    return theFieldValue;
                }

                if( typeof theFieldValueList == "string") {
                    return theFieldValueList;
                }

                if( typeof theFieldValueList == "boolean") {
                    return theFieldValueList;
                }

                if( typeof theFieldValueList == "number") {
                    return theFieldValueList;
                }

                if( typeof theFieldValueList == "function") {
                    return theFieldValueList;
                }

                if( !(typeof theFieldValueList == "object")) {
                    return theFieldValueList;
                }

                if( theFieldValueList == null) {
                    return theFieldValueList;
                }


                if( typeof theFieldValueList.length == "undefined") {
                    return theFieldValueList
                }

                var aNumListValues = theFieldValueList.length;
                if( !aNumListValues) {
                    return [ ];
                }


                var aFieldValueListCopy = new Array( aNumListValues);

                for( var aListValueIdx=0; aListValueIdx < aNumListValues; aListValueIdx++) {

                    var aListValue = theFieldValueList[ aListValueIdx];

                    var aListValueCopy = this.fCopyFieldValue( aListValue);
                    if( aListValueCopy){}/* CQT */

                    aFieldValueListCopy[ aListValueIdx] = aListValueCopy;
                }

                return aFieldValueListCopy;
            };
            if( fCopyFieldValueList){}/* CQT */
            aPrototype.fCopyFieldValueList = fCopyFieldValueList;













            var fprDo_RefreshFields = function( theFields) {

                return this.fNewDeferredResolveWithFieldsPromise( theFields);
            };
            if( fprDo_RefreshFields){}/* CQT */
            aPrototype.fprDo_RefreshFields = fprDo_RefreshFields;











            var fprDo_FieldsChanged = function( ) {

                var someListenerPromises = [ ];

                var aNumListeners = this._v_FieldsChangeListeners.length;
                for( var aListenerIdx=0; aListenerIdx < aNumListeners; aListenerIdx++) {

                    var aListener = this._v_FieldsChangeListeners[ aListenerIdx];
                    if( aListener) {

                        if( typeof aListener == "function") {

                            var aListenerResult = aListener( this.fFields());
                            if( aListenerResult && aListenerResult.then) {
                                someListenerPromises.push( aListenerResult);
                            }
                        }
                        else {

                            if( ( typeof aListener == "object") && ( aListener.length)) {

                                var someFields = this.fFields();

                                aListener.forEach( function( athListenerOne) {

                                    if( typeof athListenerOne == "function") {
                                        var aOneListenerResult = athListenerOne( someFields);
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
            if( fprDo_FieldsChanged){}/* CQT */
            aPrototype.fprDo_FieldsChanged = fprDo_FieldsChanged;








            var fChangedFieldNames = function( ) {

                if( !this._v_ChangedFieldNames) {
                    return null;
                }


                var someChangedFieldNames = [ ];

                var someChangedFieldNameKeys = Object.keys( this._v_ChangedFieldNames);

                var aNumChangedFieldNameKeys = someChangedFieldNameKeys.length;
                for( var aChangedFieldNameKeyIdx=0; aChangedFieldNameKeyIdx < aNumChangedFieldNameKeys; aChangedFieldNameKeyIdx++) {

                    var aChangedFieldNameKey = someChangedFieldNameKeys[ aChangedFieldNameKeyIdx];

                    var aIsChangedField = this._v_ChangedFieldNames[ aChangedFieldNameKey];
                    if( aIsChangedField) {

                        someChangedFieldNames.push( aChangedFieldNameKey);
                    }
                }

                return someChangedFieldNames;
            };
            if( fChangedFieldNames){}/* CQT */
            aPrototype.fChangedFieldNames = fChangedFieldNames;









            var fFieldsChangeForm_OLD = function( theMasterFields) {

                if( theMasterFields) {
                    this._v_MasterFields     = theMasterFields;
                    this._v_LastMasterFields = theMasterFields;
                    this.pUpdateMasterLabel();
                }

                if( !this._v_FieldSpecs) {
                    return null;
                }

                if( !this._v_ChangedFieldNames) {
                    return null;
                }

                if( !this._v_Fields) {
                    return null;
                }


                var aFieldsChangeForm = { };


                if( this._v_MasterParms) {

                    var aNumMasterParms = this._v_MasterParms.length;
                    if( aNumMasterParms) {

                        var someMasterFields = this._v_LastMasterFields;
                        if( !someMasterFields) {
                            someMasterFields = this._v_MasterFields;
                            if( !someMasterFields) {
                                return null;
                            }
                        }
                    }

                    for( var aMasterParmIdx=0; aMasterParmIdx < aNumMasterParms; aMasterParmIdx++) {

                        var aMasterParm = this._v_MasterParms[ aMasterParmIdx];
                        if( aMasterParm && ( aMasterParm.length > 1)) {

                            var aMasterFieldName = aMasterParm[ 0];
                            var aMasterParmName  = aMasterParm[ 1];

                            if( aMasterFieldName && aMasterParmName) {
                                var aMasterFieldValue = someMasterFields[ aMasterFieldName];
                                if( typeof aMasterFieldValue == "undefined") {
                                    return null;
                                }

                                aFieldsChangeForm[ aMasterParmName] = aMasterFieldValue;
                            }
                        }
                    }
                }



                var aNumFieldSpecs = this._v_FieldSpecs.length;
                for( var aFieldSpecIdx=0; aFieldSpecIdx < aNumFieldSpecs; aFieldSpecIdx++) {

                    var aFieldSpec = this._v_FieldSpecs[ aFieldSpecIdx];
                    if( aFieldSpec) {

                        var aFieldName = aFieldSpec[ "name"];
                        if( aFieldName) {

                            var aChangeParm = aFieldSpec[ "changeParm"];
                            if( aChangeParm) {

                                var aParmAlways = aFieldSpec[ "parmAlways"];
                                var aFieldIsChanged = this._v_ChangedFieldNames[ aFieldName] ? true : false;

                                if( aParmAlways || aFieldIsChanged) {
                                    var aFieldValue = this._v_Fields[ aFieldName];
                                    if( aFieldValue){}/* CQT */

                                    aFieldsChangeForm[ aChangeParm] = aFieldValue;
                                }
                                else {
                                    aFieldsChangeForm[ aChangeParm] = null;
                                }

                                var aChangeFlag =  aFieldSpec[ "changeFlag"];
                                if( aChangeFlag) {
                                    aFieldsChangeForm[ aChangeFlag] = aFieldIsChanged;
                                }
                            }
                        }
                    }
                }

                return aFieldsChangeForm;
            };
            if( fFieldsChangeForm_OLD){}/* CQT */
            aPrototype.fFieldsChangeForm_OLD = fFieldsChangeForm_OLD;





            var fFieldsChangeFormAndDescribe_ResettingMasterFields = function() {

                this._v_MasterFields     = null;
                this._v_LastMasterFields = null;

                var aFieldsChangeForm = this.fFieldsChangeFormAndDescribe( null);
                if( aFieldsChangeForm){}/* CQT */

                return aFieldsChangeForm;
            };
            if( fFieldsChangeFormAndDescribe_ResettingMasterFields){}/* CQT */
            aPrototype.fFieldsChangeFormAndDescribe_ResettingMasterFields = fFieldsChangeFormAndDescribe_ResettingMasterFields;






            var fFieldsChangeFormAndDescribe = function( theMasterFields) {

                if( theMasterFields) {
                    this._v_MasterFields     = theMasterFields;
                    this._v_LastMasterFields = theMasterFields;
                    this.pUpdateMasterLabel();
                }

                if( !this._v_FieldSpecs) {
                    return null;
                }

                if( !this._v_ChangedFieldNames) {
                    return null;
                }

                if( !this._v_Fields) {
                    return null;
                }


                var aFieldsChangeForm     = { };
                var aFieldsChangeDescribe = [ ];


                if( this._v_MasterParms) {

                    var aNumMasterParms = this._v_MasterParms.length;
                    if( aNumMasterParms) {

                        var someMasterFields = this._v_LastMasterFields;
                        if( !someMasterFields) {
                            someMasterFields = this._v_MasterFields;
                        }

                        for( var aMasterParmIdx=0; aMasterParmIdx < aNumMasterParms; aMasterParmIdx++) {

                            var aMasterParm = this._v_MasterParms[ aMasterParmIdx];
                            if( aMasterParm && ( aMasterParm.length > 1)) {

                                var aMasterFieldName = aMasterParm[ 0];
                                var aMasterParmName  = aMasterParm[ 1];

                                var aMasterParmOptional  = false;
                                if( aMasterParm && ( aMasterParm.length > 2)) {
                                    aMasterParmOptional = ( aMasterParm.slice(2).indexOf( this.MASTERPARMISOPTIONALSYMBOL) >= 0);
                                }

                                if( !someMasterFields) {
                                    if( !aMasterParmOptional) {
                                        return null;
                                    }
                                }
                                else {
                                    if( aMasterFieldName && aMasterParmName) {

                                        var aMasterFieldValue = someMasterFields[ aMasterFieldName];
                                        if( typeof aMasterFieldValue == "undefined") {
                                            if( !aMasterParmOptional) {
                                                return null;
                                            }
                                        }
                                        else {
                                            aFieldsChangeForm[ aMasterParmName] = aMasterFieldValue;
                                            aFieldsChangeDescribe.push( this.fNewDescribe( aMasterFieldName, aMasterFieldName, aMasterParmName));
                                        }
                                    }
                                }

                            }
                        }
                    }
                }



                var aNumFieldSpecs = this._v_FieldSpecs.length;
                for( var aFieldSpecIdx=0; aFieldSpecIdx < aNumFieldSpecs; aFieldSpecIdx++) {

                    var aFieldSpec = this._v_FieldSpecs[ aFieldSpecIdx];
                    if( aFieldSpec) {

                        var aFieldName = aFieldSpec[ "name"];
                        if( aFieldName) {

                            var aChangeParm = aFieldSpec[ "changeParm"];
                            if( aChangeParm) {

                                var aParmAlways = aFieldSpec[ "parmAlways"];
                                var aFieldIsChanged = this._v_ChangedFieldNames[ aFieldName] ? true : false;

                                if( aParmAlways || aFieldIsChanged) {

                                    var aFieldValue = this._v_Fields[ aFieldName];
                                    if( ( typeof aFieldValue == "undefined") || ( aFieldValue == null)){

                                        var aDefaultValue =  aFieldSpec[ "defaultValue"];
                                        if( !( typeof aDefaultValue == "undefined")) {
                                            aFieldValue = aDefaultValue;
                                        }
                                    }

                                    aFieldsChangeForm[ aChangeParm] = aFieldValue;

                                    aFieldsChangeDescribe.push( this.fNewDescribe( aFieldName, aFieldSpec[ "label"], aChangeParm));
                                }
                                else {
                                    aFieldsChangeForm[ aChangeParm] = null;
                                }

                                var aChangeFlag =  aFieldSpec[ "changeFlag"];
                                if( aChangeFlag) {
                                    aFieldsChangeForm[ aChangeFlag] = aFieldIsChanged;
                                }
                            }
                        }
                    }
                }

                return {
                    fieldsChangeForm:     aFieldsChangeForm,
                    fieldsChangeDescribe: aFieldsChangeDescribe
                };
            };
            if( fFieldsChangeFormAndDescribe){}/* CQT */
            aPrototype.fFieldsChangeFormAndDescribe = fFieldsChangeFormAndDescribe;








            var fprDo_ValuesChanged = function( ) {

                if( !this._v_ChangedFieldNames) {
                    return this.fNewDeferredResolveWithNothingPromise();
                }


                var someChangedFieldNames =  this.fChangedFieldNames();

                if( !someChangedFieldNames || !someChangedFieldNames.length) {
                    return this.fNewDeferredResolveWithNothingPromise();
                }


                var someListenerPromises = [ ];

                var aNumListeners = this._v_ValuesChangeListeners.length;
                for( var aListenerIdx=0; aListenerIdx < aNumListeners; aListenerIdx++) {

                    var aListener = this._v_ValuesChangeListeners[ aListenerIdx];
                    if( aListener) {

                        if( typeof aListener == "function") {

                            var aListenerResult = aListener( someChangedFieldNames);
                            if( aListenerResult && aListenerResult.then) {
                                someListenerPromises.push( aListenerResult);
                            }
                        }
                        else {

                            if( ( typeof aListener == "object") && ( aListener.length)) {

                                aListener.forEach( function( athListenerOne) {

                                    if( typeof athListenerOne == "function") {
                                        var aOneListenerResult = athListenerOne( someChangedFieldNames);
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

                var aThis = this;

                if( aNumListenerPromises == 1) {
                    return someListenerPromises[ 0].
                        then( function( theListenerResponse) {
                            return aThis.fNewDeferredResolvePromise( theListenerResponse);
                        });
                }


                return this.fNewPromiseAll( someListenerPromises)
                    .then( function( theAllResponses) {
                        return aThis.fNewDeferredResolvePromise( theAllResponses);
                    });
            };
            if( fprDo_ValuesChanged){}/* CQT */
            aPrototype.fprDo_ValuesChanged = fprDo_ValuesChanged;









            var fprDo_DirtyChanged = function( theFieldName, theFieldValue) {

                if( !theFieldName) {
                    return this.fNewDeferredResolveWithNothingPromise();
                }

                var someListenerPromises = [ ];

                var aNumListeners = this._v_DirtyChangeListeners.length;
                for( var aListenerIdx=0; aListenerIdx < aNumListeners; aListenerIdx++) {

                    var aListener = this._v_DirtyChangeListeners[ aListenerIdx];
                    if( aListener) {

                        if( typeof aListener == "function") {

                            var aListenerResult = aListener( theFieldName, theFieldValue);
                            if( aListenerResult && aListenerResult.then) {
                                someListenerPromises.push( aListenerResult);
                            }
                        }
                        else {

                            if( ( typeof aListener == "object") && ( aListener.length)) {

                                aListener.forEach( function( athListenerOne) {

                                    if( typeof athListenerOne == "function") {
                                        var aOneListenerResult = athListenerOne( theFieldName, theFieldValue);
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

                var aThis = this;

                if( aNumListenerPromises == 1) {
                    return someListenerPromises[ 0].
                        then( function( theListenerResponse) {
                            return aThis.fNewDeferredResolvePromise( theListenerResponse);
                        });
                }


                return this.fNewPromiseAll( someListenerPromises)
                    .then( function( theAllResponses) {
                        return aThis.fNewDeferredResolvePromise( theAllResponses);
                    });
            };
            if( fprDo_DirtyChanged){}/* CQT */
            aPrototype.fprDo_DirtyChanged = fprDo_DirtyChanged;








            var fIsEditorRendered = function() {

               return true;
            };
            if( fIsEditorRendered){}/* CQT */
            aPrototype.fIsEditorRendered = fIsEditorRendered;







            var fIsEditorShown = function() {

                if( this._v_ParentCtrl) {
                    if( !this._v_ParentCtrl.fIsEditorShown( this._v_EditorName)) {
                        return false;
                    }
                }

                var anIsEditorShown = this._v_Fields ? true : false;
                if( anIsEditorShown){}/* CQT */

                return anIsEditorShown;
            };
            if( fIsEditorShown){}/* CQT */
            aPrototype.fIsEditorShown = fIsEditorShown;











            var pLogEvent = function( theEvent, theData, theDetails) {

                if( !this.LOGEVENTS) {
                    return;
                }

                aPrototype._v_SuperPrototype.pLogEvent.apply( this, [ theEvent, theData, theDetails]);
            };
            if( pLogEvent){}/* CQT */
            aPrototype.pLogEvent = pLogEvent;











            var pCancelEdition = function( theEvent) {
                if( theEvent){}/* CQT */

                this._v_Fields   = this.fCopyFieldsData( this._v_UnchangedFields);

                this.pInitEditableFields();

                this._v_IsDirty           = false;
                this._v_ChangedFieldNames = { };
            };
            if( pCancelEdition){}/* CQT */
            aPrototype.pCancelEdition = pCancelEdition;







            var fUIFieldRdOnlyClicked = function( theFieldName) {
                if( theFieldName){}/* CQT */

                return true;
            };
            if( fUIFieldRdOnlyClicked){}/* CQT */
            aPrototype.fUIFieldRdOnlyClicked = fUIFieldRdOnlyClicked;








            var fUIFieldChangeListener = function( theFieldSpecName) {

                if( !theFieldSpecName) {
                    return true;
                }

                var aFieldSpec = this.fFieldSpecByName( theFieldSpecName);
                if( !aFieldSpec) {
                    return true;
                }

                if( aFieldSpec[ "dataType"] && ( aFieldSpec[ "dataType"] == this.DATATYPE_FILE)) {
                    return this.fUIFileChangeListener( theFieldSpecName);
                }

                if( this.fCheckIfFieldValueHasChanged( theFieldSpecName)) {

                    var anEditableValue = this._v_EditableFields[ theFieldSpecName];

                    if( !this._v_DirtyChangeListeners || !this._v_DirtyChangeListeners.length) {
                        return true;
                    }

                    this.fprDo_DirtyChanged( theFieldSpecName, anEditableValue);
                }


                return true;
            };
            if( fUIFieldChangeListener){}/* CQT */
            aPrototype.fUIFieldChangeListener = fUIFieldChangeListener;








            var fUIFileChangeListener = function( theFieldSpecName) {

                if( !theFieldSpecName) {
                    return true;
                }

                var aFieldSpec = this.fFieldSpecByName( theFieldSpecName);
                if( !aFieldSpec) {
                    return true;
                }

                if( !aFieldSpec[ "dataType"] || !( aFieldSpec[ "dataType"] == this.DATATYPE_FILE)) {
                    return true;
                }


                this.pForceFieldReset( theFieldSpecName);


                if( !this._v_LastSelectedFiles) {
                    return true;
                }


                if( !this._v_LastSelectedFiles.length) {
                    return true;
                }

                var anUploadFile = this._v_LastSelectedFiles[ 0];

                this._v_LastSelectedFiles = null;

                if( !anUploadFile) {
                    return true;
                }

                this.pForceFieldValue( theFieldSpecName, anUploadFile);


                return true;
            };
            if( fUIFileChangeListener){}/* CQT */
            aPrototype.fUIFileChangeListener = fUIFileChangeListener;









            var fFieldSpecByName = function( theFieldSpecName) {

                if( !theFieldSpecName) {
                    return null;
                }

                if( !this._v_FieldSpecsByName) {
                    return null;
                }

                var aFieldSpec = this._v_FieldSpecsByName[ theFieldSpecName];
                if( aFieldSpec){}/* CQT */

                return aFieldSpec;
            };
            if( fFieldSpecByName){}/* CQT */
            aPrototype.fFieldSpecByName = fFieldSpecByName;










            var fCheckIfFieldValueHasChanged = function( theFieldSpecName) {

                if( !this._v_UnchangedFields) {
                    return false;
                }

                if( !this._v_Fields) {
                    return false;
                }

                if( !this._v_ChangedFieldNames) {
                    return false;
                }

                var aFieldSpec = this.fFieldSpecByName( theFieldSpecName);
                if( !aFieldSpec) {
                    return false;
                }

                var anEditableValue = this._v_EditableFields[ theFieldSpecName];
                if( anEditableValue){}/* CQT */

                var aMayBeChangedFieldValue = anEditableValue;

                var aConverter = this.fConverter();
                if( aConverter) {
                    var aDataType = aFieldSpec[ "dataType"];

                    aMayBeChangedFieldValue = aConverter.fConvertFromEditableValue( aMayBeChangedFieldValue, aDataType);
                }

                var anUnchangedFieldValue   = this._v_UnchangedFields[ theFieldSpecName];

                var aFieldValueComparison = this.fCompareFieldValue( aMayBeChangedFieldValue, anUnchangedFieldValue);

                var aFieldHasChanged = !( aFieldValueComparison == null);

                this._v_Fields[ theFieldSpecName] = aMayBeChangedFieldValue;

                this._v_ChangedFieldNames[ theFieldSpecName] = aFieldHasChanged;

                this.pUpdateIsDirtyFromChangedFieldNames();

                return true;
            };
            if( fCheckIfFieldValueHasChanged){}/* CQT */
            aPrototype.fCheckIfFieldValueHasChanged = fCheckIfFieldValueHasChanged;










            var pUpdateIsDirtyFromChangedFieldNames = function() {

                if( !this._v_ChangedFieldNames) {
                    return;
                }

                var anIsDirty = false;

                var someChangedFieldNameKeys = Object.keys( this._v_ChangedFieldNames);
                var aNumChangedFieldNameKeys = someChangedFieldNameKeys.length;
                for( var aChangedFieldNameKeyIdx=0; aChangedFieldNameKeyIdx < aNumChangedFieldNameKeys; aChangedFieldNameKeyIdx++) {

                    var aChangedFieldNameKey = someChangedFieldNameKeys[ aChangedFieldNameKeyIdx];

                    var aIsFieldChanged = this._v_ChangedFieldNames[ aChangedFieldNameKey];
                    if( aIsFieldChanged) {
                        anIsDirty = true;
                        break;
                    }
                }

                this._v_IsDirty = anIsDirty;
            };
            if( pUpdateIsDirtyFromChangedFieldNames){}/* CQT */
            aPrototype.pUpdateIsDirtyFromChangedFieldNames = pUpdateIsDirtyFromChangedFieldNames;





















            var fCompareFieldValue = function( theMayBeChangedFieldValue, theUnchangedFieldValue) {
                
                var aFirstDiff = this.fFirstDiff( theMayBeChangedFieldValue, theUnchangedFieldValue);
                if( aFirstDiff){}/* CQT */

                return aFirstDiff;
            };
            if( fCompareFieldValue){}/* CQT */
            aPrototype.fCompareFieldValue = fCompareFieldValue;












            var fprDo_UpdateFieldsData = function( theFields) {

                if( this.LOGUPDATEFIELDSDATA) {
                    this.pLogEvent( "fprDo_UpdateFieldsData", theFields);
                }

                this.pSetFieldsWithData( theFields);

                if( theFields) {
                    return this.fNewDeferredResolveWithFieldsPromise( theFields);
                }

                return this.fNewDeferredResolveWithFieldsPromise( theFields);
            };
            if( fprDo_UpdateFieldsData){}/* CQT */
            aPrototype.fprDo_UpdateFieldsData = fprDo_UpdateFieldsData;

















            var fUIActionClickListener = function( theFieldSpecName) {

                console.log( "fUIActionClickListener BEGIN");

                return this.fprDo_ActionClickListener( theFieldSpecName)
                    .then(
                        function( theActionResponse) {
                            if( theActionResponse){}/* CQT */

                            console.log( "\n\ffUIActionClickListener PERFORMED\n\n\n");
                        }
                    )
                    ["catch"]( function( theError) {
                        if( theError){}/* CQT */

                        console.log( "\n\ffUIActionClickListener ERROR PERFORMING\n\n\n");
                    });
            };
            if( fUIActionClickListener){}/* CQT */
            aPrototype.fUIActionClickListener = fUIActionClickListener;











            var fprDo_ActionClickListener = function( theFieldSpecName) {

                if( !theFieldSpecName) {
                    return this.fNewDeferredRejectActionErrorPromise( "!theFieldSpecName");
                }

                var aFieldSpec = this.fFieldSpecByName( theFieldSpecName);
                if( !aFieldSpec) {
                    return this.fNewDeferredRejectActionErrorPromise( "!this.fFieldSpecByName( theFieldSpecName)");
                }

                this._v_ActionsSuccesses[         theFieldSpecName] = false;
                this._v_ActionsSuccessesMessages[ theFieldSpecName] = null;

                this._v_ActionsErrorsMessages[    theFieldSpecName] = null;

                this._v_LastActionsResults[       theFieldSpecName] = null;
                this._v_LastActionsErrorReports[  theFieldSpecName] = null;

                this._v_ActionsRetriesEnabled[    theFieldSpecName] = null;
                this._v_ActionsRetriesMessages[   theFieldSpecName] = null;



                var someFields = this.fEditableFields();

                var aWith = this.fResolveWithOrQuery( aFieldSpec, someFields);

                if( !( typeof aWith == "undefined")) {
                    if(  !( typeof aWith == "object")) {

                        var aWithParmName =  aFieldSpec[ "withParmName"];
                        if( aWithParmName) {

                            var aOtherWith = aWith;
                            aWith = {};
                            aWith[ aWithParmName] = aOtherWith;
                        }
                    }
                }


                var aDoTargetName = aFieldSpec[ "doTarget"];
                var aDoName       = aFieldSpec[ "do"];

                var aBoundDoMethod = this.fResolveDoTargetMethod( this, aDoTargetName, aDoName);
                if( !aBoundDoMethod) {
                    return this.fNewDeferredResolveWithNothingPromise();
                }

                if( !( typeof aBoundDoMethod == "function")) {
                    return this.fNewDeferredResolveWithNothingPromise();
                }




                var anActionPromiseOrValue = aBoundDoMethod( aWith);
                if( !anActionPromiseOrValue) {
                    return this.fNewDeferredResolveWithNothingPromise();
                }


                if( !anActionPromiseOrValue.then) {
                    return this.fNewDeferredResolvePromise( anActionPromiseOrValue);
                }




                var aFieldSpecName = theFieldSpecName;
                var aThis = this;

                return anActionPromiseOrValue.then(
                    function( theActionResult) {
                        if( theActionResult){}/* CQT */

                        aThis._v_ActionsSuccesses[ aFieldSpecName] = true;
                        aThis._v_ActionsSuccessesMessages[ aFieldSpecName] = ( aFieldSpec[ "successMessage"] || "OK");

                        aThis._v_ActionsErrorsMessages[    aFieldSpecName] = null;

                        aThis._v_LastActionsResults[       aFieldSpecName] = theActionResult;
                        aThis._v_LastActionsErrorReports[  aFieldSpecName] = null;

                        aThis._v_ActionsRetriesEnabled[    aFieldSpecName] = null;
                        aThis._v_ActionsRetriesMessages[   aFieldSpecName] = null;

                        return aThis.fNewDeferredResolvePromise( theActionResult);
                    }
                )
                ["catch"]( function( theError) {

                    aThis.pReactToActionError( theError);

                    throw theError;
                });
            };
            if( fprDo_ActionClickListener){}/* CQT */
            aPrototype.fprDo_ActionClickListener = fprDo_ActionClickListener;









            var pReactToActionError = function( theFieldSpecName, theError) {

                if( !theFieldSpecName) {
                    return true;
                }


                var aFieldSpec = this.fFieldSpecByName( theFieldSpecName);
                if( !aFieldSpec) {
                    return true;
                }

                this._v_ActionsSuccesses[         theFieldSpecName] = false;
                this._v_ActionsSuccessesMessages[ theFieldSpecName] = null;

                this._v_ActionsErrorsMessages[    theFieldSpecName] = null;

                this._v_LastActionsResults[       theFieldSpecName] = null;
                this._v_LastActionsErrorReports[  theFieldSpecName] = null;

                this._v_ActionsRetriesEnabled[    theFieldSpecName] = null;
                this._v_ActionsRetriesMessages[   theFieldSpecName] = null;


                if( !theError) {
                    return;
                }

                if( !theError._v_Type) {
                    return;
                }

                if( this.RELEVANTERRORTYPES.indexOf( theError._v_Type) < 0) {
                    return;
                }


                this._v_LastActionsErrorReports[  theFieldSpecName] = theError;
                this._v_ActionsErrorsMessages[    theFieldSpecName] = theError.toString();

                var aOnErrorDoTargetName = aFieldSpec[ "onErrorDoTarget"];
                var aOnErrorDoName       = aFieldSpec[ "onErrorDo"];

                var aBoundDoErrorMethod = this.fResolveDoTargetMethod( this, aOnErrorDoTargetName, aOnErrorDoName);
                if( !aBoundDoErrorMethod) {
                    return;
                }


                var anOnErrorDoResult = aBoundDoErrorMethod( theError, this);
                if( anOnErrorDoResult) {

                    this._v_ActionsRetriesEnabled[  theFieldSpecName]  = true;
                    this._v_ActionsRetriesMessages[ theFieldSpecName] = anOnErrorDoResult;
                }
                else {
                    this.pCancelEdition();
                }
            };
            if( pReactToActionError){}/* CQT */
            aPrototype.pReactToActionError = pReactToActionError;














            var fUIActionRetryClickListener = function( theEvent) {
                if( theEvent){}/* CQT */

                if( !this.fRetryEnabled()) {
                    return true;
                }

                this.pRetryEnable( false);

                if( false && this._v_RetryField) {
                    this.pForceFieldValue( this._v_RetryField, this._v_RetryValue);
                }


                var aThis = this;

                return this.fprDo_ActionClickListener()
                    .then(
                    function( theChanges, theMore) {
                        if( theChanges){}/* CQT */
                        if( theMore){}/* CQT */

                        aThis.pCancelCreation();

                        console.log( "\n\nfUICreateSaveClickListener CREATED\n\n\n");
                    }
                )
                    ["catch"]( function( theError) {
                    if( theError){}/* CQT */

                    if( false && aThis._v_RetryField) {
                        aThis.pForceFieldReset( aThis._v_RetryField);
                    }

                    console.log( "\n\nfUICreateSaveClickListener ERROR CREATING\n\n\n");
                });


            };
            if( fUIActionRetryClickListener){}/* CQT */
            aPrototype.fUIActionRetryClickListener = fUIActionRetryClickListener;











            var fResolveWithOrQuery = function( theFieldSpec, theFields) {

                if( !theFieldSpec) {
                    return null;
                }

                if( !theFields) {
                    return null;
                }

                var aWith = null;

                var aWithName = theFieldSpec[ "with"];
                if( aWithName) {
                    aWith = theFields[ aWithName];
                    if( typeof aWith == "undefined") {
                        return null;
                    }
                    return aWith;
                }

                var aQuery = theFieldSpec[ "query"];
                if( !aQuery) {
                    return null;
                }


                var aWithQuery = { };

                var someQueryKeys = Object.keys( aQuery);
                var aNumQueryKeys = someQueryKeys.length;
                for( var aQueryKeyIdx=0; aQueryKeyIdx < aNumQueryKeys; aQueryKeyIdx++) {

                    var aQueryKey   = someQueryKeys[ aQueryKeyIdx];
                    var aQueryValue = aQuery[ aQueryKey];

                    var aQueryEntryWith_Name = aQueryValue;

                    var aQueryValueSupplier = theFields;
                    if( aQueryValue.indexOf( this.RETRIEVALWITHPARENTSENTINEL) == 0) {

                        aQueryEntryWith_Name = aQueryValue.replace( this.RETRIEVALWITHPARENTSENTINEL, "");

                        if( this.fParentCtrl) {
                            aQueryValueSupplier = this.fParentCtrl();
                        }
                    }

                    if( aQueryValueSupplier) {
                        var aQueryEntryWith_Value = aQueryValueSupplier[ aQueryEntryWith_Name];
                        if( !( typeof aQueryEntryWith_Value == "undefined")) {
                            aWithQuery[ aQueryKey] = aQueryEntryWith_Value;
                        }
                    }
                }


                if( Object.keys( aWithQuery).length < 1) {
                    return null;
                }

                return aWithQuery;
            };
            if( fResolveWithOrQuery){}/* CQT */
            aPrototype.fResolveWithOrQuery = fResolveWithOrQuery;











            var fResolveDoTarget = function( theResolver, theTargetName) {

                var aResolver = theResolver;
                if( !aResolver) {
                    aResolver = this;
                }

                if( !theTargetName) {
                    return aResolver;
                }

                var aDoTarget = null;

                if( theTargetName == this.PARENTSENTINEL) {
                    if( !aResolver.fParentCtrl) {
                        return null;
                    }

                    aDoTarget = aResolver.fParentCtrl();
                }
                else {
                    var aTargetName = theTargetName;
                    if( aTargetName.indexOf( this.RETRIEVALWITHPARENTSENTINEL) == 0) {

                        aDoTarget = aResolver.fParentCtrl();

                        aTargetName = aTargetName.replace( this.RETRIEVALWITHPARENTSENTINEL, "");
                    }

                    if( aTargetName) {
                        aDoTarget = aDoTarget[ aTargetName];
                    }
                }

                if( typeof aDoTarget == "undefined") {
                    return null;
                }

                if( typeof aDoTarget == "function") {
                    aDoTarget = aDoTarget();
                    if( !aDoTarget) {
                        return null;
                    }
                }

                return aDoTarget;
            };
            if( fResolveDoTarget){}/* CQT */
            aPrototype.fResolveDoTarget = fResolveDoTarget;









            var fResolveDoTargetMethod = function( theResolver, theTargetName, theDoName) {

                if( !theDoName) {
                    return null;
                }

                var aDoTarget = this.fResolveDoTarget( theResolver, theTargetName);
                if( !aDoTarget) {
                    return null;
                }

                var aMethod = aDoTarget[ theDoName];
                if( !aMethod) {
                    return null;
                }

                if( !( typeof aMethod == "function")) {
                    return null;
                }

                var aBoundMethod = aMethod.bind( aDoTarget);
                if( aBoundMethod){}/* CQT */

                return aBoundMethod;
            };
            if( fResolveDoTargetMethod){}/* CQT */
            aPrototype.fResolveDoTargetMethod = fResolveDoTargetMethod;










            var pSetAllKeysToValue = function( theRecord, theValue) {

                if( !theRecord) {
                    return null;
                }

                var someQueryKeys = Object.keys( theRecord);
                var aNumQueryKeys = someQueryKeys.length;

                for( var aQueryKeyIdx=0; aQueryKeyIdx < aNumQueryKeys; aQueryKeyIdx++) {
                    var aQueryKey   = someQueryKeys[ aQueryKeyIdx];
                    if( aQueryKey){}/* CQT */

                    theRecord[ aQueryKey] = theValue;
                }
            };
            if( pSetAllKeysToValue){}/* CQT */
            aPrototype.pSetAllKeysToValue = pSetAllKeysToValue;









            var pUpdateFieldsDisabledOrHidden = function() {

                this.pSetAllKeysToValue( this._v_FieldsDisabled,         false);
                this.pSetAllKeysToValue( this._v_FieldsDisabledMessages, null);
                this.pSetAllKeysToValue( this._v_FieldsHidden,           false);

                if( !this._v_FieldSpecs) {
                    return;
                }

                var someFields = this.fEditableFields();
                if( !someFields) {
                    return;
                }

                var aNumFieldSpecs = this._v_FieldSpecs.length;

                for( var aFieldSpecIdx=0; aFieldSpecIdx < aNumFieldSpecs; aFieldSpecIdx++) {
                    var aFieldSpec = this._v_FieldSpecs[ aFieldSpecIdx];
                    if( aFieldSpec) {

                        var aFieldName = aFieldSpec[ "name"];
                        if( aFieldName) {

                            var anEnablement = aFieldSpec[ "enablement"];
                            if( anEnablement) {

                                var anEnablementTarget = aFieldSpec[ "enablementTarget"];
                                if( anEnablementTarget) {

                                    var aBoundDoMethod = this.fResolveDoTargetMethod( this, anEnablementTarget, anEnablement);
                                    if( aBoundDoMethod) {

                                        if( ( typeof aBoundDoMethod == "function")) {

                                            var aDisabledOrOptionalMessage = aBoundDoMethod( aFieldSpec, this, someFields);

                                            if( aDisabledOrOptionalMessage == null) {
                                                continue;
                                            }

                                            if( aDisabledOrOptionalMessage === false) {
                                                continue;
                                            }

                                            this._v_FieldsDisabled[ aFieldName] = true;

                                            var aDisabledMessage = "";

                                            if( ( typeof aDisabledOrOptionalMessage == "string") && aDisabledOrOptionalMessage.length) {
                                                aDisabledMessage = aDisabledOrOptionalMessage;
                                            }
                                            else {
                                                var aSpecDisabledMessage = aFieldSpec[ "disabledMessage"];
                                                if( aSpecDisabledMessage) {
                                                    aDisabledMessage = aSpecDisabledMessage;
                                                }
                                            }

                                            if( aDisabledMessage) {
                                                this._v_FieldsDisabledMessages[ aFieldName] = aDisabledMessage;
                                            }
                                            else {
                                                this._v_FieldsHidden[ aFieldName] = true;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }


                var aParentCtrl = this.fParentCtrl();
                if( aParentCtrl) {
                    if( aParentCtrl.fHasAnyRole && ( typeof aParentCtrl.fHasAnyRole == "function")) {

                        for( var aFieldSpecIdx=0; aFieldSpecIdx < aNumFieldSpecs; aFieldSpecIdx++) {
                            var aFieldSpec = this._v_FieldSpecs[ aFieldSpecIdx];
                            if( aFieldSpec) {

                                var aFieldName = aFieldSpec[ "name"];
                                if( aFieldName) {

                                    if( this._v_FieldsDisabled[ aFieldName]) {
                                        continue;
                                    }

                                    if( this._v_FieldsHidden[ aFieldName]) {
                                        continue;
                                    }

                                    var aVisibleRoles = aFieldSpec[ "visibleRoles"];
                                    if( !aVisibleRoles) {
                                        continue;
                                    }

                                    if( !aParentCtrl.fHasAnyRole( aVisibleRoles)) {
                                        this._v_FieldsHidden[ aFieldName] = true;
                                    }
                                }
                            }
                        }
                    }
                }

            };
            if( pUpdateFieldsDisabledOrHidden){}/* CQT */
            aPrototype.pUpdateFieldsDisabledOrHidden = pUpdateFieldsDisabledOrHidden;













            return aPrototype;

        })();




        var FieldsCtrl_Constructor = function( theTitle, theIdentifier, theRecorder, theScope,
                                               theDomIdPrefix,
                                               theParentCtrl,
                                               theConverter,
                                               theMasterLabels, theMasterFields, theMasterParms, theMasterType,
                                               theRetrieval,
                                               theEditableFieldNames,
                                               theFieldsChangeListener, theValuesChangeListener,
                                               theFieldSpecs) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_MastereableCtrlType.MastereableCtrl_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;
            this._v_Module = null;

            this._v_Retrieval           = null;
            this._v_EditableFieldNames  = null;
            this._v_FieldSpecs          = null;

            this._v_FieldSpecsByName    = null;

            this._v_FieldsChangeListeners = null;
            this._v_ValuesChangeListeners = null;
            this._v_DirtyChangeListeners  = null;

            this._v_Leyendo               = null;
            this._v_Fields                = null;
            this._v_UnchangedFields       = null;

            this._v_IsDirty               = null;
            this._v_ChangedFieldNames     = null;

            this._v_DisplayFields         = null;
            this._v_EditableFields        = null;

            this._v_LastRetrieval         = null;
            this._v_LastMasterFields      = null;

            this._v_FieldValuesFunctions  = null;

            this._v_OnErrorDoTarget       = null;
            this._v_OnErrorDo             = null;

            this._v_RetryLabel            = null;
            this._v_RetryField            = null;
            this._v_RetryValue            = null;

            this._v_RetryMessage          = null;
            this._v_RetryEnabled          = null;

            this._v_LastSelectedFiles     = null;

            this._v_FieldsDisabled            = { };
            this._v_FieldsDisabledMessages    = { };
            this._v_FieldsHidden              = { };

            this._v_LastActionsResults        = { };
            this._v_LastActionsErrorReports   = { };

            this._v_ActionsSuccesses          = { };
            this._v_ActionsSuccessesMessages  = { };
            this._v_ActionsErrorsMessages     = { };

            this._v_ActionsRetriesEnabled     = { };
            this._v_ActionsRetriesMessages    = { };

            this._pInit_FieldsCtrl( theTitle, theIdentifier, theRecorder, theScope,
                                    theDomIdPrefix,
                                    theParentCtrl,
                                    theConverter,
                                    theMasterLabels, theMasterFields, theMasterParms, theMasterType,
                                    theRetrieval,
                                    theEditableFieldNames,
                                    theFieldsChangeListener, theValuesChangeListener,
                                    theFieldSpecs);
        };
        FieldsCtrl_Constructor.prototype = aFieldsCtrl_Prototype;





        var FieldsCtrl_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_MastereableCtrlType.MastereableCtrl_Prototype;

            this._v_Prototype = aFieldsCtrl_Prototype;
            this._v_Type      = null;
            this._v_Module    = null;

            this._v_Retrieval           = null;
            this._v_MasterFields = null;
            this._v_EditableFieldNames  = null;
            this._v_FieldSpecs          = null;

            this._v_FieldSpecsByName    = null;

            this._v_FieldsChangeListeners = null;
            this._v_ValuesChangeListeners = null;
            this._v_DirtyChangeListeners  = null;
            
            this._v_Leyendo               = null;
            this._v_Fields                = null;
            this._v_UnchangedFields       = null;

            this._v_IsDirty               = null;
            this._v_ChangedFieldNames     = null;

            this._v_DisplayFields         = null;
            this._v_EditableFields        = null;

            this._v_LastRetrieval         = null;
            this._v_LastMasterFields      = null;

            this._v_FieldValuesFunctions  = null;

            this._v_OnErrorDoTarget       = null;
            this._v_OnErrorDo             = null;

            this._v_RetryLabel            = null;
            this._v_RetryField            = null;
            this._v_RetryValue            = null;

            this._v_RetryMessage          = null;
            this._v_RetryEnabled          = null;

            this._v_LastSelectedFiles         = null;

            this._v_FieldsDisabled            = { };
            this._v_FieldsDisabledMessages    = { };
            this._v_FieldsHidden              = { };

            this._v_LastActionsResults        = { };
            this._v_LastActionsErrorReports   = { };

            this._v_ActionsSuccesses          = { };
            this._v_ActionsSuccessesMessages  = { };
            this._v_ActionsErrorsMessages     = { };

            this._v_ActionsRetriesEnabled     = { };
            this._v_ActionsRetriesMessages    = { };
        };
        FieldsCtrl_SuperPrototypeConstructor.prototype = aFieldsCtrl_Prototype;





        var aModule = {
            "FieldsCtrl_Prototype": aFieldsCtrl_Prototype,
            "FieldsCtrl_Constructor": FieldsCtrl_Constructor,
            "FieldsCtrl_SuperPrototypeConstructor": FieldsCtrl_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aFieldsCtrl_Prototype._v_Module = aModule;





        return aModule;
    };







    var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
    if( !anExistingModule) {

        var aModule = aMod_definer(
            theSS_Overrider,
            theSS_MastereableCtrlType
        );
        anExistingModule = aModule;

        theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
    }






    return anExistingModule;

}]);







