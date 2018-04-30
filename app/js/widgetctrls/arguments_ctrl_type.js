'use strict';

/*
 * arguments_ctrl_type.js
 *
 * Creado @author Antonio Carrasco Valero 201410170450
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






angular.module("widgetCtrlsTypes").factory("ArgumentsCtrlType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "WithCandidatesCtrlType",
function( theSS_typesregistry,
          theSS_Overrider,
          theSS_WithCandidatesCtrlType) {




    var ModuleName     = "arguments_ctrl_type";
    var ModulePackages = "widgetctrls";
    var ModuleFullName = ModulePackages + "/" + ModuleName;



    var aMod_definer = function( theS_Overrider,
                                 theS_WithCandidatesCtrlType) {


        if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}








        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.LOGEVENTS = true;
            theToInit.LOGREGISTRATION              = true;
            theToInit.LOGREGISTRATIONSPEC          = false;

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
            theToInit.DEFAULTTITLE = "ArgumentsCtrlDefaultName";


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







        var aArgumentsCtrl_Prototype = (function() {


            var aPrototype = new theS_WithCandidatesCtrlType.WithCandidatesCtrl_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_SuperPrototype = theS_WithCandidatesCtrlType.WithCandidatesCtrl_Prototype;


            aPrototype._v_Type = "ArgumentsCtrl";

            aPrototype._v_Module = null;



            aPrototype._v_EditorName          = null;
            aPrototype._v_EditorLabel         = null;
            aPrototype._v_EditorClasses       = null;

            aPrototype._v_InitiallyArgumenting  = null;
            aPrototype._v_Argumenting           = null;


            aPrototype._v_LastArgumentationReport = null;

            aPrototype._v_AllButtonLabel = null;
            aPrototype._v_AnyButtonLabel = null;

            aPrototype._v_AreThereArgumentsInHeader = null;
            aPrototype._v_AllArgumentsAreInHeader   = null;




            var _pInit = function( theTitle, theIdentifier, theRecorder, theScope,
                                   theDomIdPrefix,
                                   theParentCtrl,
                                   theConverter,
                                   theArgumentsName, theArgumentsLabel, theeditorClasses,
                                   theRetrieval, theMasterFields,
                                   theEditableFieldNames,
                                   theInitiallyArgumenting,
                                   theFieldsChangeListener, theValuesChangeListener,
                                   theFieldSpecs,
                                   theAllButtonLabel,
                                   theAnyButtonLabel) {

                this._pInit_ArgumentsCtrl( theTitle, theIdentifier, theRecorder, theScope,
                                         theDomIdPrefix,
                                         theParentCtrl,
                                         theConverter,
                                         theArgumentsName, theArgumentsLabel, theeditorClasses,
                                         theRetrieval, theMasterFields,
                                         theEditableFieldNames,
                                         theInitiallyArgumenting,
                                         theFieldsChangeListener, theValuesChangeListener,
                                         theFieldSpecs,
                                         theAllButtonLabel,
                                         theAnyButtonLabel);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_ArgumentsCtrl = function( theTitle, theIdentifier, theRecorder, theScope,
                                               theDomIdPrefix,
                                               theParentCtrl,
                                               theConverter,
                                               theMasterLabels, theMasterFields, theMasterParms, theMasterType,
                                               theArgumentsName, theArgumentsLabel, theeditorClasses,
                                               theRetrieval,
                                               theEditableFieldNames,
                                               theInitiallyArgumenting,
                                               theFieldsChangeListener, theValuesChangeListener,
                                               theFieldSpecs,
                                               theAllButtonLabel,
                                               theAnyButtonLabel) {

                /* Delegate on super prototype initialization */
                aPrototype._v_SuperPrototype._pInit_WithCandidatesCtrl.apply( this, [ theTitle, theIdentifier, theRecorder, theScope,
                                                                                      theDomIdPrefix,
                                                                                      theParentCtrl,
                                                                                      theConverter,
                                                                                      theMasterLabels, theMasterFields, theMasterParms, theMasterType,
                                                                                      theRetrieval,
                                                                                      theEditableFieldNames,
                                                                                      theInitiallyArgumenting,
                                                                                      theFieldsChangeListener, theValuesChangeListener,
                                                                                      theFieldSpecs]);

                this._v_Prototype = aPrototype;
                this._v_Type      = this._v_Prototype._v_Type;
                this._v_Module    = aPrototype._v_Module;


                this._v_EditorName          = theArgumentsName;
                this._v_EditorLabel         = theArgumentsLabel;
                this._v_EditorClasses       = theeditorClasses;

                this._v_InitiallyArgumenting  = theInitiallyArgumenting;
                this._v_Argumenting           = this._v_InitiallyArgumenting ? true : false;
                this._v_LastArgumentationReport = null;

                this._v_AllButtonLabel = theAllButtonLabel;
                this._v_AnyButtonLabel = theAnyButtonLabel;

                this._v_AreThereArgumentsInHeader = false;
                this._v_AllArgumentsAreInHeader   = false;

                this.pInitFieldSpecsByName();

                this.pInitFieldsWithDefaultValues();

                this.pInitAreThereArgumentsInHeader();

                if( this._v_EditorLabel){}/* CQT */
                if( this._v_EditorClasses){}/* CQT */
                if( this._v_LastArgumentationReport){}/* CQT */
                if( this._v_AllButtonLabel){}/* CQT */
                if( this._v_AnyButtonLabel){}/* CQT */
            };
            if( _pInit_ArgumentsCtrl){}/* CQT */
            aPrototype._pInit_ArgumentsCtrl = _pInit_ArgumentsCtrl;









            var pInitAreThereArgumentsInHeader = function() {

                this._v_AreThereArgumentsInHeader = false;
                this._v_AllArgumentsAreInHeader   = false;

                if( !this._v_FieldSpecs) {
                    return;
                }

                var aNumFields = this._v_FieldSpecs.length;
                if( !aNumFields) {
                    return;
                }

                this._v_AllArgumentsAreInHeader   = true;

                for( var aFieldIdx=0; aFieldIdx < aNumFields; aFieldIdx++) {
                    var aField = this._v_FieldSpecs[ aFieldIdx];
                    if( aField) {
                        var aFieldInHeader = aField[ "inHeader"];
                        if( aFieldInHeader) {
                            this._v_AreThereArgumentsInHeader = true;
                        }
                        else {
                            this._v_AllArgumentsAreInHeader = false;
                        }
                    }
                }
            };
            if( pInitAreThereArgumentsInHeader){}/* CQT */
            aPrototype.pInitAreThereArgumentsInHeader = pInitAreThereArgumentsInHeader;










            var pInitialObtainConverter = function() {
            };
            if( pInitialObtainConverter){}/* CQT */
            aPrototype.pInitialObtainConverter = pInitialObtainConverter;







            var pRegisterArgumentsInParent = function( theParentCtrl, theArgumentsName) {

                if( !theParentCtrl) {
                    return;
                }

                if( !theArgumentsName) {
                    return;
                }

                this.pSetParentCtrl( theParentCtrl);


                var someArgumentsParameters = theParentCtrl.fParametersForNewEditorCtrl( this, theArgumentsName);
                if( !someArgumentsParameters) {
                    return;
                }

                this._v_DomIdPrefix         = someArgumentsParameters[ "domIdPrefix"];


                this._v_MasterLabels        = someArgumentsParameters[ "masterLabels"];
                this._v_MasterFields        = someArgumentsParameters[ "masterFields"];
                this._v_LastMasterFields    = this._v_MasterFields;
                this.pUpdateMasterLabel();

                this._v_MasterParms         = someArgumentsParameters[ "masterParms"];
                this._v_MasterType          = someArgumentsParameters[ "masterType"];

                this._v_EditorName         = someArgumentsParameters[ "name"];
                this._v_EditorLabel        = someArgumentsParameters[ "editorLabel"];
                this._v_EditorClasses      = someArgumentsParameters[ "editorClasses"];
                this._v_EditableFieldNames  = someArgumentsParameters[ "editableFieldNames"];
                this._v_InitiallyArgumenting = someArgumentsParameters[ "initiallyArgumenting"];
                this._v_Argumenting          = this._v_InitiallyArgumenting ? true : false;
                this._v_FieldSpecs          = someArgumentsParameters[ "fields"];

                this._v_OnErrorDoTarget     = someArgumentsParameters[ "onErrorDoTarget"];
                this._v_OnErrorDo           = someArgumentsParameters[ "onErrorDo"];

                this._v_RetryField          = someArgumentsParameters[ "retryField"];
                this._v_RetryValue          = someArgumentsParameters[ "retryValue"];

                this._v_RetryLabel          = someArgumentsParameters[ "retryLabel"];

                this._v_AllButtonLabel      = someArgumentsParameters[ "allButtonLabel"];
                this._v_AnyButtonLabel      = someArgumentsParameters[ "anyButtonLabel"];


                if( this._v_EditorName) {
                    this._v_Title += ( "-" + this._v_EditorName);
                }

                this._v_AreThereArgumentsInHeader = false;
                this._v_AllArgumentsAreInHeader   = false;


                this.pObtainConverter();


                this.pInitFieldSpecsByName();


                if( this.LOGREGISTRATION) {
                    if( this.LOGREGISTRATIONSPEC) {
                        this.pLogEvent( this.EVENTKIND_CREATORREGISTEREDINPARENT, someArgumentsParameters);

                    }
                    else {
                        this.pLogEvent( this.EVENTKIND_CREATORREGISTEREDINPARENT);
                    }
                }


                this.pInitFieldsWithDefaultValues();


                this.pInitAreThereArgumentsInHeader();


                var aParentCtrl = this.fParentCtrl();
                if( aParentCtrl) {
                    aParentCtrl.pWireNewCtrl( this, this._v_EditorName);
                }
            };
            if( pRegisterArgumentsInParent){}/* CQT */
            aPrototype.pRegisterArgumentsInParent = pRegisterArgumentsInParent;









            var pInitFieldsWithDefaultValues = function() {

                var someFields = this.fFieldsDefaultValues();
                if( someFields){}/* CQT */

                this.pSetFieldsWithData( someFields);
            };
            if( pInitFieldsWithDefaultValues){}/* CQT */
            aPrototype.pInitFieldsWithDefaultValues = pInitFieldsWithDefaultValues;







            var fFieldsDefaultValues = function() {

                var someFields = { };

                if( !this._v_FieldSpecs) {
                    return someFields;
                }


                this._v_FieldSpecs.forEach(
                    function( theFieldSpec) {

                        var aFieldName = theFieldSpec[ "name"];
                        if( aFieldName) {

                            var aDefaultValue = theFieldSpec[ "defaultValue"];
                            if( !( typeof aDefaultValue == "undefined")) {
                                someFields[ aFieldName] = aDefaultValue;
                            }
                        }
                    }
                );

                return someFields;
            };
            if( fFieldsDefaultValues){}/* CQT */
            aPrototype.fFieldsDefaultValues = fFieldsDefaultValues;







            var pSetFieldsWithData = function( theFields) {

                var someFields = theFields;
                if( !someFields) {
                    someFields = this.fFieldsDefaultValues();
                }

                aPrototype._v_SuperPrototype.pSetFieldsWithData.apply( this, [ someFields]);

                this._v_UnchangedFields   = { };

                this._v_IsDirty           = true;

                var aThis = this;
                Object.keys( someFields).forEach( function( athKey) {
                    aThis.fCheckIfFieldValueHasChanged( athKey);
                    aThis._v_ChangedFieldNames[ athKey] = true;
                });
            };
            if( pSetFieldsWithData){}/* CQT */
            aPrototype.pSetFieldsWithData = pSetFieldsWithData;








            var pUpdateMasterFields_UponRetrieveFields = function( theMasterFields) {
                this._v_MasterFields     = theMasterFields;
                this._v_LastMasterFields = theMasterFields;

                this.pUpdateMasterLabel();
            };
            if( pUpdateMasterFields_UponRetrieveFields){}/* CQT */
            aPrototype.pUpdateMasterFields_UponRetrieveFields = pUpdateMasterFields_UponRetrieveFields;






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










            var fIsArgumentsRendered = function() {

               return true;
            };
            if( fIsArgumentsRendered){}/* CQT */
            aPrototype.fIsArgumentsRendered = fIsArgumentsRendered;









            var fIsArgumentsShown = function() {

                var aIsArgumentsShown = this.fArgumenting();
                if( aIsArgumentsShown){}/* CQT */

                return aIsArgumentsShown;
            };
            if( fIsArgumentsShown){}/* CQT */
            aPrototype.fIsArgumentsShown = fIsArgumentsShown;







            var fArgumenting = function() {

                return this._v_Argumenting;
            };
            if( fArgumenting){}/* CQT */
            aPrototype.fArgumenting = fArgumenting;








            var pSetArgumenting = function( theArgumenting) {

                this._v_Argumenting = theArgumenting ? true : false;
            };
            if( pSetArgumenting){}/* CQT */
            aPrototype.pSetArgumenting = pSetArgumenting;








            var pLogEvent = function( theEvent, theData, theDetails) {

                if( !this.LOGEVENTS) {
                    return;
                }

                aPrototype._v_SuperPrototype.pLogEvent.apply( this, [ theEvent, theData, theDetails]);
            };
            if( pLogEvent){}/* CQT */
            aPrototype.pLogEvent = pLogEvent;









            var fUIArgumentsAllClickListener = function( theEvent) {
                if( theEvent){}/* CQT */

                this.pAllArguments();


                var aThis = this;

                return this.fprDo_ArgumentsAll()
                    .then(
                        function( theResponse) {
                            aThis._v_LastArgumentationReport = null;

                            return aThis.fNewDeferredResolvePromise( theResponse);
                        }
                    )
                    ["catch"]( function( theError) {

                        aThis._v_LastArgumentationReport = null;

                        aThis.pReactToError_ArgumentsApply( theError);

                        throw theError;
                    });
            };
            if( fUIArgumentsAllClickListener){}/* CQT */
            aPrototype.fUIArgumentsAllClickListener = fUIArgumentsAllClickListener;







            var pAllArguments = function( theEvent) {
                if( theEvent){}/* CQT */

                this._v_Fields   = this.fCopyFieldsData( this._v_UnchangedFields);

                this.pInitEditableFields();

                this.pCleanUpDirtyFlag();
                this._v_ChangedFieldNames = { };

                this.pCleanUpDirtyFlag();

            };
            if( pAllArguments){}/* CQT */
            aPrototype.pAllArguments = pAllArguments;








            var fprDo_ArgumentsAll = function( ) {

                var someListenerPromises = [ ];

                var aNumListeners = this._v_ValuesChangeListeners.length;
                for( var aListenerIdx=0; aListenerIdx < aNumListeners; aListenerIdx++) {

                    var aListener = this._v_ValuesChangeListeners[ aListenerIdx];
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
            if( fprDo_ArgumentsAll){}/* CQT */
            aPrototype.fprDo_ArgumentsAll = fprDo_ArgumentsAll;










            var fUIArgumentsAnyClickListener = function( theEvent) {
                if( theEvent){}/* CQT */

                this.pAnyArguments();


                var aThis = this;

                return this.fprDo_ArgumentsAny()
                    .then(
                        function( theNull, theMinusOne) {
                            if( theNull){}/* CQT */
                            if( theMinusOne){}/* CQT */

                            aThis._v_LastArgumentationReport = null;

                            return aThis.fNewDeferredResolvePromise( theNull, theMinusOne);
                        }
                    )
                    ["catch"]( function( theError) {

                    aThis._v_LastArgumentationReport = null;

                    aThis.pReactToError_ArgumentsApply( theError);

                    throw theError;
                });
            };
            if( fUIArgumentsAnyClickListener){}/* CQT */
            aPrototype.fUIArgumentsAnyClickListener = fUIArgumentsAnyClickListener;










            var fprDo_ArgumentsAny = function( ) {

                var someListenerPromises = [ ];

                var aNumListeners = this._v_ValuesChangeListeners.length;
                for( var aListenerIdx=0; aListenerIdx < aNumListeners; aListenerIdx++) {

                    var aListener = this._v_ValuesChangeListeners[ aListenerIdx];
                    if( aListener) {

                        if( typeof aListener == "function") {

                            var aListenerResult = aListener( "SOMETHINGNOTNULLbecauseNullIsUsedToPassANullToListeners");
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
            if( fprDo_ArgumentsAny){}/* CQT */
            aPrototype.fprDo_ArgumentsAny = fprDo_ArgumentsAny;










            var pAnyArguments = function( theEvent) {
                if( theEvent){}/* CQT */

                this._v_Fields   = this.fCopyFieldsData( this._v_UnchangedFields);

                this.pInitEditableFields();

                this.pCleanUpDirtyFlag();
                this._v_ChangedFieldNames = { };

                this.pCleanUpDirtyFlag();

            };
            if( pAnyArguments){}/* CQT */
            aPrototype.pAnyArguments = pAnyArguments;









            var fUIArgumentsApplyClickListener = function( theEvent) {
                if( theEvent){}/* CQT */

                return this.fprDo_ArgumentsApplyClickListener().then(
                    function( theChanges, theMore) {
                            if( theChanges){}/* CQT */
                            if( theMore){}/* CQT */

                            console.log( "\n\nfUIArgumentsApplyClickListener APPLIED\n\n\n");
                        }
                    )
                    ["catch"]( function( theError) {
                        if( theError){}/* CQT */

                        console.log( "\n\nfUIArgumentsApplyClickListener ERROR APPLYING\n\n\n");
                    });
            };
            if( fUIArgumentsApplyClickListener){}/* CQT */
            aPrototype.fUIArgumentsApplyClickListener = fUIArgumentsApplyClickListener;







            var fprDo_ArgumentsApplyClickListener = function() {

                var aThis = this;

                return this.fprDo_ValuesChanged()
                    .then(
                        function( theChanges, theMore) {
                            if( theChanges){}/* CQT */
                            if( theMore){}/* CQT */

                            aThis._v_LastArgumentationReport = null;

                            return aThis.fNewDeferredResolvePromise( theChanges);
                        }
                    )
                    ["catch"]( function( theError) {

                        aThis._v_LastArgumentationReport = null;

                        aThis.pReactToError_ArgumentsApply( theError);

                        throw theError;
                    });
            };
            if( fprDo_ArgumentsApplyClickListener){}/* CQT */
            aPrototype.fprDo_ArgumentsApplyClickListener = fprDo_ArgumentsApplyClickListener;










            var pReactToError_ArgumentsApply = function( theError) {

                this._v_LastArgumentationReport = null;

                if( !theError) {
                    return;
                }

                if( !theError._v_Type) {
                    return;
                }

                if( this.RELEVANTERRORTYPES.indexOf( theError._v_Type) < 0) {
                    return;
                }


                this._v_LastArgumentationReport = theError;


                if( this._v_OnErrorDoTarget) {

                    var anOnErrorDoTarget = this;
                    if( this._v_OnErrorDoTarget == this.PARENTSENTINEL) {
                        anOnErrorDoTarget = this.fParentCtrl();
                    }

                    if( typeof anOnErrorDoTarget == "undefined") {
                        return;
                    }

                    if( typeof anOnErrorDoTarget == "function") {
                        anOnErrorDoTarget = anOnErrorDoTarget();
                        if( !anOnErrorDoTarget) {
                            return;
                        }
                    }


                    if( this._v_OnErrorDo) {

                        var aMethod = anOnErrorDoTarget[ this._v_OnErrorDo];
                        if( !aMethod) {
                            return;
                        }

                        if( !( typeof aMethod == "function")) {
                            return;
                        }

                        aMethod = aMethod.bind( anOnErrorDoTarget);

                        var anOnErrorDoResult = aMethod( theError, this);
                        if( anOnErrorDoResult) {

                            this._v_RetryMessage = anOnErrorDoResult;
                        }
                        else {
                            this._v_RetryMessage = null;

                            this.pAnyArguments();
                        }
                    }
                }
            };
            if( pReactToError_ArgumentsApply){}/* CQT */
            aPrototype.pReactToError_ArgumentsApply = pReactToError_ArgumentsApply;













            return aPrototype;

        })();




        var ArgumentsCtrl_Constructor = function( theTitle, theIdentifier, theRecorder, theScope,
                                                theDomIdPrefix,
                                                theParentCtrl,
                                                theConverter,
                                                theMasterLabels, theMasterFields, theMasterParms, theMasterType,
                                                theArgumentsName, theArgumentsLabel, theeditorClasses,
                                                theRetrieval,
                                                theEditableFieldNames,
                                                theInitiallyArgumenting,
                                                theFieldsChangeListener, theValuesChangeListener,
                                                theFieldSpecs,
                                                theAllButtonLabel,
                                                theAnyButtonLabel) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_WithCandidatesCtrlType.WithCandidatesCtrl_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;
            this._v_Module = null;

            this._v_EditorName          = null;
            this._v_EditorLabel         = null;
            this._v_EditorClasses       = null;

            this._v_InitiallyArgumenting = null;
            this._v_Argumenting          = null;

            this._v_LastArgumentationReport = null;

            this._v_AllButtonLabel = null;
            this._v_AnyButtonLabel = null;

            this._v_AreThereArgumentsInHeader = null;
            this._v_AllArgumentsAreInHeader   = false;

            this._pInit_ArgumentsCtrl( theTitle, theIdentifier, theRecorder, theScope,
                                     theDomIdPrefix,
                                     theParentCtrl,
                                     theConverter,
                                     theMasterLabels, theMasterFields, theMasterParms, theMasterType,
                                     theArgumentsName, theArgumentsLabel, theeditorClasses,
                                     theRetrieval,
                                     theEditableFieldNames,
                                     theInitiallyArgumenting,
                                     theFieldsChangeListener, theValuesChangeListener,
                                     theFieldSpecs,
                                     theAllButtonLabel,
                                     theAnyButtonLabel);
        };
        ArgumentsCtrl_Constructor.prototype = aArgumentsCtrl_Prototype;





        var ArgumentsCtrl_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_WithCandidatesCtrlType.WithCandidatesCtrl_Prototype;

            this._v_Prototype = aArgumentsCtrl_Prototype;
            this._v_Type      = null;
            this._v_Module    = null;

            this._v_EditorName          = null;
            this._v_EditorLabel         = null;
            this._v_EditorClasses       = null;

            this._v_InitiallyArgumenting = null;
            this._v_Argumenting          = null;

            this._v_LastArgumentationReport = null;

            this._v_AllButtonLabel = null;
            this._v_AnyButtonLabel = null;

            this._v_AreThereArgumentsInHeader = null;
            this._v_AllArgumentsAreInHeader   = false;
        };
        ArgumentsCtrl_SuperPrototypeConstructor.prototype = aArgumentsCtrl_Prototype;






        var aModule = {
            "ArgumentsCtrl_Prototype": aArgumentsCtrl_Prototype,
            "ArgumentsCtrl_Constructor": ArgumentsCtrl_Constructor,
            "ArgumentsCtrl_SuperPrototypeConstructor": ArgumentsCtrl_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aArgumentsCtrl_Prototype._v_Module = aModule;





        return aModule;
    };







    var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
    if( !anExistingModule) {

        var aModule = aMod_definer(
            theSS_Overrider,
            theSS_WithCandidatesCtrlType
        );
        anExistingModule = aModule;

        theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
    }






    return anExistingModule;

}]);







