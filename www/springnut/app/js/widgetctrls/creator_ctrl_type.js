'use strict';

/*
 * creator_ctrl_type.js
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






angular.module("widgetCtrlsTypes").factory("CreatorCtrlType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "WithCandidatesCtrlType",
function( theSS_typesregistry,
          theSS_Overrider,
          theSS_WithCandidatesCtrlType) {




    var ModuleName     = "creator_ctrl_type";
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
            theToInit.DEFAULTTITLE = "CreatorCtrlDefaultName";


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







        var aCreatorCtrl_Prototype = (function() {


            var aPrototype = new theS_WithCandidatesCtrlType.WithCandidatesCtrl_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_SuperPrototype = theS_WithCandidatesCtrlType.WithCandidatesCtrl_Prototype;


            aPrototype._v_Type = "CreatorCtrl";

            aPrototype._v_Module = null;



            aPrototype._v_CreatorName          = null;
            aPrototype._v_CreatorLabel         = null;
            aPrototype._v_CreatorClasses       = null;

            aPrototype._v_InitiallyInCreation  = null;
            aPrototype._v_InCreation           = null;


            aPrototype._v_LastCreateErrorReport = null;




            var _pInit = function( theTitle, theIdentifier, theRecorder, theScope,
                                   theDomIdPrefix,
                                   theParentCtrl,
                                   theConverter,
                                   theCreatorName, theCreatorLabel, theCreatorClasses,
                                   theRetrieval, theMasterFields,
                                   theEditableFieldNames,
                                   theInitiallyInCreation,
                                   theFieldsChangeListener, theValuesChangeListener,
                                   theFieldSpecs) {

                this._pInit_CreatorCtrl( theTitle, theIdentifier, theRecorder, theScope,
                                         theDomIdPrefix,
                                         theParentCtrl,
                                         theConverter,
                                         theCreatorName, theCreatorLabel, theCreatorClasses,
                                         theRetrieval, theMasterFields,
                                         theEditableFieldNames,
                                         theInitiallyInCreation,
                                         theFieldsChangeListener, theValuesChangeListener,
                                         theFieldSpecs);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_CreatorCtrl = function( theTitle, theIdentifier, theRecorder, theScope,
                                               theDomIdPrefix,
                                               theParentCtrl,
                                               theConverter,
                                               theMasterLabels, theMasterFields, theMasterParms, theMasterType,
                                               theCreatorName, theCreatorLabel, theCreatorClasses,
                                               theRetrieval,
                                               theEditableFieldNames,
                                               theInitiallyInCreation,
                                               theFieldsChangeListener, theValuesChangeListener,
                                               theFieldSpecs) {

                /* Delegate on super prototype initialization */
                aPrototype._v_SuperPrototype._pInit_WithCandidatesCtrl.apply( this, [ theTitle, theIdentifier, theRecorder, theScope,
                                                                                      theDomIdPrefix,
                                                                                      theParentCtrl,
                                                                                      theConverter,
                                                                                      theMasterLabels, theMasterFields, theMasterParms, theMasterType,
                                                                                      theRetrieval,
                                                                                      theEditableFieldNames,
                                                                                      theInitiallyInCreation,
                                                                                      theFieldsChangeListener, theValuesChangeListener,
                                                                                      theFieldSpecs]);

                this._v_Prototype = aPrototype;
                this._v_Type      = this._v_Prototype._v_Type;
                this._v_Module    = aPrototype._v_Module;


                this._v_CreatorName          = theCreatorName;
                this._v_CreatorLabel         = theCreatorLabel;
                this._v_CreatorClasses       = theCreatorClasses;

                this._v_InitiallyInCreation  = theInitiallyInCreation;
                this._v_InCreation           = this._v_InitiallyInCreation ? true : false;

                this._v_LastCreateErrorReport = null;

                this.pInitFieldsWithDefaultValues();

                if( this._v_CreatorLabel){}/* CQT */
                if( this._v_CreatorClasses){}/* CQT */
                if( this._v_LastCreateErrorReport){}/* CQT */
            };
            if( _pInit_CreatorCtrl){}/* CQT */
            aPrototype._pInit_CreatorCtrl = _pInit_CreatorCtrl;











            var pInitialObtainConverter = function() {
            };
            if( pInitialObtainConverter){}/* CQT */
            aPrototype.pInitialObtainConverter = pInitialObtainConverter;







            var pRegisterCreatorInParent = function( theParentCtrl, theCreatorName) {

                if( !theParentCtrl) {
                    return;
                }

                if( !theCreatorName) {
                    return;
                }

                this.pSetParentCtrl( theParentCtrl);


                var someCreatorParameters = theParentCtrl.fParametersForNewCreatorCtrl( this, theCreatorName);
                if( !someCreatorParameters) {
                    return;
                }

                this._v_DomIdPrefix         = someCreatorParameters[ "domIdPrefix"];


                this._v_MasterLabels        = someCreatorParameters[ "masterLabels"];
                this._v_MasterFields        = someCreatorParameters[ "masterFields"];
                this._v_LastMasterFields    = this._v_MasterFields;
                this.pUpdateMasterLabel();

                this._v_MasterParms         = someCreatorParameters[ "masterParms"];
                this._v_MasterType          = someCreatorParameters[ "masterType"];

                this._v_CreatorName         = someCreatorParameters[ "name"];
                this._v_CreatorLabel        = someCreatorParameters[ "creatorLabel"];
                this._v_CreatorClasses      = someCreatorParameters[ "creatorClasses"];
                this._v_EditableFieldNames  = someCreatorParameters[ "editableFieldNames"];
                this._v_InitiallyInCreation = someCreatorParameters[ "initiallyInCreation"];
                this._v_InCreation          = this._v_InitiallyInCreation ? true : false;
                this._v_FieldSpecs          = someCreatorParameters[ "fields"];

                this._v_OnErrorDoTarget     = someCreatorParameters[ "onErrorDoTarget"];
                this._v_OnErrorDo           = someCreatorParameters[ "onErrorDo"];

                this._v_RetryField          = someCreatorParameters[ "retryField"];
                this._v_RetryValue          = someCreatorParameters[ "retryValue"];

                this._v_RetryLabel          = someCreatorParameters[ "retryLabel"];

                if( this._v_CreatorName) {
                    this._v_Title += ( "-" + this._v_CreatorName);
                }

                this.pObtainConverter();


                this.pInitFieldSpecsByName();


                if( this.LOGREGISTRATION) {
                    if( this.LOGREGISTRATIONSPEC) {
                        this.pLogEvent( this.EVENTKIND_CREATORREGISTEREDINPARENT, someCreatorParameters);

                    }
                    else {
                        this.pLogEvent( this.EVENTKIND_CREATORREGISTEREDINPARENT);
                    }
                }


                this.pInitFieldsWithDefaultValues();

                var aParentCtrl = this.fParentCtrl();
                if( aParentCtrl) {
                    aParentCtrl.pWireNewCtrl( this, this._v_CreatorName);
                }
            };
            if( pRegisterCreatorInParent){}/* CQT */
            aPrototype.pRegisterCreatorInParent = pRegisterCreatorInParent;








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










            var fIsCreatorRendered = function() {

               return true;
            };
            if( fIsCreatorRendered){}/* CQT */
            aPrototype.fIsCreatorRendered = fIsCreatorRendered;









            var fIsCreatorShown = function() {

                var aIsCreatorShown = this.fInCreation();
                if( aIsCreatorShown){}/* CQT */

                return aIsCreatorShown;
            };
            if( fIsCreatorShown){}/* CQT */
            aPrototype.fIsCreatorShown = fIsCreatorShown;







            var fInCreation = function() {

                return this._v_InCreation;
            };
            if( fInCreation){}/* CQT */
            aPrototype.fInCreation = fInCreation;








            var pSetInCreation = function( theInCreation) {

                this._v_InCreation = theInCreation ? true : false;
            };
            if( pSetInCreation){}/* CQT */
            aPrototype.pSetInCreation = pSetInCreation;








            var pLogEvent = function( theEvent, theData, theDetails) {

                if( !this.LOGEVENTS) {
                    return;
                }

                aPrototype._v_SuperPrototype.pLogEvent.apply( this, [ theEvent, theData, theDetails]);
            };
            if( pLogEvent){}/* CQT */
            aPrototype.pLogEvent = pLogEvent;










            var fUICreateCancelClickListener = function( theEvent) {
                if( theEvent){}/* CQT */

                this.pCancelCreation();

                return true;
            };
            if( fUICreateCancelClickListener){}/* CQT */
            aPrototype.fUICreateCancelClickListener = fUICreateCancelClickListener;









            var pCancelCreation = function( theEvent) {
                if( theEvent){}/* CQT */

                this._v_Fields   = this.fCopyFieldsData( this._v_UnchangedFields);

                this.pInitEditableFields();

                this.pCleanUpDirtyFlag();
                this._v_ChangedFieldNames = { };

                this._v_InCreation = false;


                this.pRetryEnable( false);

                this.pCleanUpDirtyFlag();

                if( this._v_RetryField) {
                    this.pForceFieldReset( this._v_RetryField, null);
                }
            };
            if( pCancelCreation){}/* CQT */
            aPrototype.pCancelCreation = pCancelCreation;









            var fUICreateSaveClickListener = function( theEvent) {
                if( theEvent){}/* CQT */

                this.pRetryEnable( false);

                if( this._v_RetryField) {
                    this.pForceFieldReset( this._v_RetryField);
                }

                return this.fprDo_CreateSaveClickListener().then(
                    function( theChanges, theMore) {
                            if( theChanges){}/* CQT */
                            if( theMore){}/* CQT */

                            console.log( "\n\nfUICreateSaveClickListener CREATED\n\n\n");
                        }
                    )
                    ["catch"]( function( theError) {
                        if( theError){}/* CQT */

                        console.log( "\n\nfUICreateSaveClickListener ERROR CREATING\n\n\n");
                    });
            };
            if( fUICreateSaveClickListener){}/* CQT */
            aPrototype.fUICreateSaveClickListener = fUICreateSaveClickListener;







            var fprDo_CreateSaveClickListener = function() {

                var aThis = this;

                return this.fprDo_ValuesChanged()
                    .then(
                        function( theChanges, theMore) {
                            if( theChanges){}/* CQT */
                            if( theMore){}/* CQT */

                            aThis._v_LastCreateErrorReport = null;

                            aThis.pCancelCreation();

                            return aThis.fNewDeferredResolvePromise( theChanges);
                        }
                    )
                    ["catch"]( function( theError) {

                        aThis._v_LastCreateErrorReport = null;

                        aThis.pReactToError_CreateSave( theError);

                        throw theError;
                    });
            };
            if( fprDo_CreateSaveClickListener){}/* CQT */
            aPrototype.fprDo_CreateSaveClickListener = fprDo_CreateSaveClickListener;










            var pReactToError_CreateSave = function( theError) {

                this._v_LastCreateErrorReport = null;

                if( !theError) {
                    return;
                }

                if( !theError._v_Type) {
                    return;
                }

                if( this.RELEVANTERRORTYPES.indexOf( theError._v_Type) < 0) {
                    return;
                }


                this._v_LastCreateErrorReport = theError;


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

                            this.pRetryEnable( true);
                        }
                        else {
                            this._v_RetryMessage = null;

                            this.pRetryEnable( false);

                            this.pCancelCreation();
                        }
                    }
                }
            };
            if( pReactToError_CreateSave){}/* CQT */
            aPrototype.pReactToError_CreateSave = pReactToError_CreateSave;














            var fUICreateSaveClickListener_RetryConfirm = function( theEvent) {
                if( theEvent){}/* CQT */

                if( !this.fRetryEnabled()) {
                    return true;
                }

                this.pRetryEnable( false);

                if( this._v_RetryField) {
                    this.pForceFieldValue( this._v_RetryField, this._v_RetryValue);
                }


                var aThis = this;

                return this.fprDo_CreateSaveClickListener()
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

                            if( aThis._v_RetryField) {
                                aThis.pForceFieldReset( aThis._v_RetryField);
                            }

                            console.log( "\n\nfUICreateSaveClickListener ERROR CREATING\n\n\n");
                        });


            };
            if( fUICreateSaveClickListener_RetryConfirm){}/* CQT */
            aPrototype.fUICreateSaveClickListener_RetryConfirm = fUICreateSaveClickListener_RetryConfirm;

















            var fUICreateSaveAndCreateAgainClickListener = function( theEvent) {
                if( theEvent){}/* CQT */

                var aThis = this;

                this.fprDo_ValuesChanged()
                    .then(
                        function( theChanges, theMore) {
                            if( theChanges){}/* CQT */
                            if( theMore){}/* CQT */

                            aThis._v_LastCreateErrorReport = null;

                            console.log( "\n\n\nfUICreateSaveAndCreateAgainClickListener SAVED\n\n\n");
                        }
                    )
                    ["catch"]( function( theError) {
                        if( theError){}/* CQT */

                        aThis._v_LastCreateErrorReport = null;

                        aThis.pReactToError_CreateSave( theError);

                        console.log( "\n\n\nfUICreateSaveAndCreateAgainClickListener ERROR SAVING\n\n\n");
                    });

                return true;
            };
            if( fUICreateSaveAndCreateAgainClickListener){}/* CQT */
            aPrototype.fUICreateSaveAndCreateAgainClickListener = fUICreateSaveAndCreateAgainClickListener;








            return aPrototype;

        })();




        var CreatorCtrl_Constructor = function( theTitle, theIdentifier, theRecorder, theScope,
                                                theDomIdPrefix,
                                                theParentCtrl,
                                                theConverter,
                                                theMasterLabels, theMasterFields, theMasterParms, theMasterType,
                                                theCreatorName, theCreatorLabel, theCreatorClasses,
                                                theRetrieval,
                                                theEditableFieldNames,
                                                theInitiallyInCreation,
                                                theFieldsChangeListener, theValuesChangeListener,
                                                theFieldSpecs) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_WithCandidatesCtrlType.WithCandidatesCtrl_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;
            this._v_Module = null;

            this._v_CreatorName          = null;
            this._v_CreatorLabel         = null;
            this._v_CreatorClasses       = null;

            this._v_InitiallyInCreation = null;
            this._v_InCreation          = null;

            this._v_LastCreateErrorReport = null;

            this._pInit_CreatorCtrl( theTitle, theIdentifier, theRecorder, theScope,
                                     theDomIdPrefix,
                                     theParentCtrl,
                                     theConverter,
                                     theMasterLabels, theMasterFields, theMasterParms, theMasterType,
                                     theCreatorName, theCreatorLabel, theCreatorClasses,
                                     theRetrieval,
                                     theEditableFieldNames,
                                     theInitiallyInCreation,
                                     theFieldsChangeListener, theValuesChangeListener,
                                     theFieldSpecs);
        };
        CreatorCtrl_Constructor.prototype = aCreatorCtrl_Prototype;





        var CreatorCtrl_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_WithCandidatesCtrlType.WithCandidatesCtrl_Prototype;

            this._v_Prototype = aCreatorCtrl_Prototype;
            this._v_Type      = null;
            this._v_Module    = null;

            this._v_CreatorName          = null;
            this._v_CreatorLabel         = null;
            this._v_CreatorClasses       = null;

            this._v_InitiallyInCreation = null;
            this._v_InCreation          = null;

            this._v_LastCreateErrorReport = null;
        };
        CreatorCtrl_SuperPrototypeConstructor.prototype = aCreatorCtrl_Prototype;






        var aModule = {
            "CreatorCtrl_Prototype": aCreatorCtrl_Prototype,
            "CreatorCtrl_Constructor": CreatorCtrl_Constructor,
            "CreatorCtrl_SuperPrototypeConstructor": CreatorCtrl_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aCreatorCtrl_Prototype._v_Module = aModule;





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







