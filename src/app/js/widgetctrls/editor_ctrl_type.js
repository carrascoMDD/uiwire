'use strict';

/*
 * editor_ctrl_type.js
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






angular.module("widgetCtrlsTypes").factory("EditorCtrlType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "WithCandidatesCtrlType",
function( theSS_typesregistry,
          theSS_Overrider,
          theSS_WithCandidatesCtrlType) {




    var ModuleName     = "editor_ctrl_type";
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
            theToInit.LOGRETRIEVEFIELDS            = true;
            theToInit.LOGRETRIEVEDFIELDS           = true;
            theToInit.LOGUPDATEFIELDS              = true;
            theToInit.LOGUPDATEFIELDSDATA          = true;
            theToInit.LOGSETCANDIDATESFIELDS       = true;
            theToInit.LOGCANDIDATESFIELDS          = true;


            theToInit.OBTAINCANDIDATESDELAY  = 100;

            theToInit.SCROLLTOCANDIDATESELECTIONDELAY = 100;

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
            theToInit.DEFAULTTITLE = "EditorCtrlDefaultName";




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







        var aEditorCtrl_Prototype = (function() {


            var aPrototype = new theS_WithCandidatesCtrlType.WithCandidatesCtrl_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_SuperPrototype = theS_WithCandidatesCtrlType.WithCandidatesCtrl_Prototype;


            aPrototype._v_Type = "EditorCtrl";

            aPrototype._v_Module = null;


            aPrototype._v_EditorName          = null;
            aPrototype._v_EditorLabel         = null;
            aPrototype._v_EditorClasses       = null;

            aPrototype._v_AutoEdit  = null;
            aPrototype._v_InEdition = null;

            aPrototype._v_NoRefresh = null;
            aPrototype._v_NoEdit    = null;
            aPrototype._v_NoDelete  = null;

            aPrototype._v_EditRoles = null;
            aPrototype._v_HasAnyEditRoles = null;





            var _pInit = function( theTitle, theIdentifier, theRecorder, theScope,
                                   theDomIdPrefix,
                                   theParentCtrl,
                                   theConverter,
                                   theMasterLabels, theMasterFields, theMasterParms, theMasterType,
                                   theEditorName, theEditorLabel, theEditorClasses,
                                   theRetrieval,
                                   theEditableFieldNames, theAutoEdit,
                                   theFieldsChangeListener, theValuesChangeListener,
                                   theFieldSpecs,
                                   theEditRoles) {

                this._pInit_EditorCtrl( theTitle, theIdentifier, theRecorder, theScope,
                                        theDomIdPrefix,
                                        theParentCtrl,
                                        theConverter,
                                        theMasterLabels, theMasterFields, theMasterParms, theMasterType,
                                        theEditorName, theEditorLabel, theEditorClasses,
                                        theRetrieval,
                                        theEditableFieldNames, theAutoEdit,
                                        theNoRefresh, theNoEdit, theNoDelete,
                                        theFieldsChangeListener, theValuesChangeListener,
                                        theFieldSpecs,
                                        theEditRoles);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_EditorCtrl = function( theTitle, theIdentifier, theRecorder, theScope,
                                              theDomIdPrefix,
                                              theParentCtrl,
                                              theConverter,
                                              theMasterLabels, theMasterFields, theMasterParms, theMasterType,
                                              theEditorName, theEditorLabel, theEditorClasses,
                                              theRetrieval,
                                              theEditableFieldNames, theAutoEdit,
                                              theNoRefresh, theNoEdit, theNoDelete,
                                              theFieldsChangeListener, theValuesChangeListener,
                                              theFieldSpecs,
                                              theEditRoles) {

                /* Delegate on super prototype initialization */
                aPrototype._v_SuperPrototype._pInit_WithCandidatesCtrl.apply( this, [ theTitle, theIdentifier, theRecorder, theScope,
                                                                                      theDomIdPrefix,
                                                                                      theParentCtrl,
                                                                                      theConverter,
                                                                                      theMasterLabels, theMasterFields, theMasterParms, theMasterType,
                                                                                      theRetrieval,
                                                                                      theEditableFieldNames,
                                                                                      theFieldsChangeListener, theValuesChangeListener,
                                                                                      theFieldSpecs]);

                this._v_Prototype = aPrototype;
                this._v_Type      = this._v_Prototype._v_Type;
                this._v_Module    = aPrototype._v_Module;

                this._v_EditorName          = theEditorName;
                this._v_EditorLabel         = theEditorLabel;
                this._v_EditorClasses       = theEditorClasses;

                this._v_AutoEdit   = theAutoEdit;
                this._v_InEdition  = false;

                this._v_NoRefresh = null;
                this._v_NoEdit    = null;
                this._v_NoDelete  = null;

                this._v_EditRoles = theEditRoles;
                this._v_HasAnyEditRoles = null;
                this.pInitHasRoles();

                if( this._v_EditorLabel){}/* CQT */
                if( this._v_EditorClasses){}/* CQT */
                if( this._v_InEdition){}/* CQT */
                if( this._v_NoEdit){}/* CQT */
                if( this._v_NoDelete){}/* CQT */
                if( this._v_HasAnyEditRoles){}/* CQT */
            };
            if( _pInit_EditorCtrl){}/* CQT */
            aPrototype._pInit_EditorCtrl = _pInit_EditorCtrl;









            var pDestroy = function() {

                this._v_EditorName    = null;
                this._v_EditorLabel   = null;
                this._v_EditorClasses = null;

                this._v_AutoEdit   = null;
                this._v_InEdition  = null;

                this._v_NoRefresh = null;
                this._v_NoEdit    = null;
                this._v_NoDelete  = null;

                this._v_EditRoles = null;
                this._v_HasAnyEditRoles = null;

                aPrototype._v_SuperPrototype.pDestroy.apply( this);
            };
            if( pDestroy){}/* CQT */
            aPrototype.pDestroy = pDestroy;









            var pInitialObtainConverter = function() {
            };
            if( pInitialObtainConverter){}/* CQT */
            aPrototype.pInitialObtainConverter = pInitialObtainConverter;







            var pRegisterEditorInParent = function( theParentCtrl, theEditorName) {

                if( !theParentCtrl) {
                    return;
                }

                if( !theEditorName) {
                    return;
                }

                this.pSetParentCtrl( theParentCtrl);


                var someEditorParameters = theParentCtrl.fParametersForNewEditorCtrl( this, theEditorName);
                if( !someEditorParameters) {
                    return;
                }

                this._v_DomIdPrefix        = someEditorParameters[ "domIdPrefix"];

                this._v_MasterLabels       = someEditorParameters[ "masterLabels"];
                this._v_MasterFields       = someEditorParameters[ "masterFields"];
                this._v_LastMasterFields   = this._v_MasterFields;

                this._v_MasterParms        = someEditorParameters[ "masterParms"];
                this._v_MasterType         = someEditorParameters[ "masterType"];

                this._v_EditorName         = someEditorParameters[ "name"];
                this._v_EditorLabel        = someEditorParameters[ "editorLabel"];
                this._v_EditorClasses      = someEditorParameters[ "editorClasses"];
                this._v_Retrieval          = someEditorParameters[ "retrieval"];
                this._v_EditableFieldNames = someEditorParameters[ "editableFieldNames"];
                this._v_AutoEdit           = someEditorParameters[ "autoEdit"];
                this._v_FieldSpecs         = someEditorParameters[ "fields"];

                this._v_OnErrorDoTarget    = someEditorParameters[ "onErrorDoTarget"];
                this._v_OnErrorDo          = someEditorParameters[ "onErrorDo"];

                this._v_RetryField         = someEditorParameters[ "retryField"];
                this._v_RetryValue         = someEditorParameters[ "retryValue"];

                this._v_RetryLabel         = someEditorParameters[ "retryLabel"];

                this._v_NoRefresh          = someEditorParameters[ "noRefresh"];
                this._v_NoEdit             = someEditorParameters[ "noEdit"];
                this._v_NoDelete           = someEditorParameters[ "noDelete"];

                this._v_EditRoles = someEditorParameters[ "editRoles"];
                this._v_HasAnyEditRoles = null;
                this.pInitHasRoles();


                if( this._v_EditorName) {
                    this._v_Title += ( "-" + this._v_EditorName);
                }

                this.pObtainConverter();


                this.pInitFieldSpecsByName();

                if( this.LOGREGISTRATION) {
                    if( this.LOGREGISTRATIONSPEC) {
                        this.pLogEvent( this.EVENTKIND_EDITORREGISTEREDINPARENT, someEditorParameters);

                    }
                    else {
                        this.pLogEvent( this.EVENTKIND_EDITORREGISTEREDINPARENT);
                    }
                }

                this.pUpdateMasterLabel();

                var aParentCtrl = this.fParentCtrl();
                if( aParentCtrl) {
                    aParentCtrl.pWireNewCtrl( this, this._v_EditorName);
                }

            };
            if( pRegisterEditorInParent){}/* CQT */
            aPrototype.pRegisterEditorInParent = pRegisterEditorInParent;







            var pInitHasRoles = function() {

                var aParentCtrl = this.fParentCtrl();
                if( !aParentCtrl) {
                    this._v_HasAnyEditRoles = true;
                    return;
                }

                if( !( aParentCtrl.fHasAnyRole) || !( typeof aParentCtrl.fHasAnyRole == "function")) {
                    this._v_HasAnyEditRoles = true;
                    return;
                }

                if( this._v_EditRoles) {
                    this._v_HasAnyEditRoles = aParentCtrl.fHasAnyRole( this._v_EditRoles);
                }
                else {
                    this._v_HasAnyEditRoles = true;
                }
            };
            if( pInitHasRoles){}/* CQT */
            aPrototype.pInitHasRoles = pInitHasRoles;
            







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













            var pSetFieldsWithData = function( theFields) {

                aPrototype._v_SuperPrototype.pSetFieldsWithData.apply( this, [ theFields]);

                if( this._v_AutoEdit) {
                    this._v_InEdition = true;
                }

                this.pInitDisplayFields();
            };
            if( pSetFieldsWithData){}/* CQT */
            aPrototype.pSetFieldsWithData = pSetFieldsWithData;















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








            var fUIEditRefreshClickListener = function( theEvent) {
                if( theEvent){}/* CQT */

                this.fprDo_RetrieveFieldsAgain();

                return true;
            };
            if( fUIEditRefreshClickListener){}/* CQT */
            aPrototype.fUIEditRefreshClickListener = fUIEditRefreshClickListener;






            var fUIEditOpenClickListener = function( theEvent) {
                if( theEvent){}/* CQT */

                this._v_InEdition = true;

                return true;
            };
            if( fUIEditOpenClickListener){}/* CQT */
            aPrototype.fUIEditOpenClickListener = fUIEditOpenClickListener;





            var fUIEditCancelClickListener = function( theEvent) {
                if( theEvent){}/* CQT */

                this.pCancelEdition();

                return true;
            };
            if( fUIEditCancelClickListener){}/* CQT */
            aPrototype.fUIEditCancelClickListener = fUIEditCancelClickListener;





            var fUIEditCloseClickListener = function( theEvent) {
                if( theEvent){}/* CQT */

                this.pCancelEdition();

                return true;
            };
            if( fUIEditCloseClickListener){}/* CQT */
            aPrototype.fUIEditCloseClickListener = fUIEditCloseClickListener;











            var fUIEditSaveClickListener = function( theEvent) {
                if( theEvent){}/* CQT */


                var aThis = this;

                this.fprDo_ValuesChanged().then(
                    function( theFieldsAfterChange) {
                        if( theFieldsAfterChange){}/* CQT */

                        aThis.pCancelEdition();
                        console.log( "\n\nfUIEditSaveClickListener SAVED\n\n\n");
                        }
                    )
                    ["catch"]( function( theError) {
                        if( theError){}/* CQT */

                        console.log( "\n\nfUIEditSaveClickListener ERROR SAVING\n\n\n");
                    });

                return true;
            };
            if( fUIEditSaveClickListener){}/* CQT */
            aPrototype.fUIEditSaveClickListener = fUIEditSaveClickListener;











            var fUIGoToValueClicked = function( theFieldName) {

                if( !theFieldName) {
                    return true;
                }

                console.log( "\n\nfUIGoToValueClicked\n\n\n");

                var aFieldSpec = this.fFieldSpecByName( theFieldName);
                if( !aFieldSpec) {
                    return true;
                }

                var aGoToTabSpec = aFieldSpec[ "goToTab"];
                if( !aGoToTabSpec){
                    return true;
                }

                var aParentCtrl = this.fParentCtrl();
                if( !aParentCtrl){
                    return true;
                }

                if( !aParentCtrl.fprDo_GoToTab){
                    return true;
                }


                var aSelectionValue  = null;

                var aSelection = aGoToTabSpec[ "selection"];
                if( aSelection) {

                    var aSourceField = aSelection[ "sourceField"];
                    if( aSourceField) {

                        var someFields = this.fFields();
                        if( someFields) {
                            aSelectionValue = someFields[ aSourceField];
                        }
                    }
                }



                var aThis = this;

                aParentCtrl.fprDo_GoToTab( aGoToTabSpec, aSelectionValue)
                    .then( function( ) {
                        var aSelection2 = aGoToTabSpec[ "selection2"];
                        if( !aSelection2) {
                            return aThis.fNewDeferredResolveWithNothingPromise();
                        }

                        var aSourceField2 = aSelection[ "sourceField"];
                        if( !aSourceField2) {
                            return aThis.fNewDeferredResolveWithNothingPromise();
                        }

                        var someFields2 = aThis.fFields();
                        if( !someFields2) {
                            return aThis.fNewDeferredResolveWithNothingPromise();
                        }

                        var aSelectionValue2 = someFields2[ aSourceField2];

                        var aGridName = aSelection2[ "gridName"];
                        if( !aGridName) {
                            return this.fNewDeferredResolveWithNothingPromise();
                        }

                        var aGridCtrl = aParentCtrl.fGridCtrlNamed( aGridName);
                        if( !aGridCtrl) {
                            return this.fNewDeferredResolveWithNothingPromise();
                        }

                        return aGridCtrl.fprDo_GoToSelection( aSelection, aSelectionValue2);

                    })
                    .then( function( ) {
                        console.log( "\n\nfUIGoToValueClicked DONE\n\n\n");
                    })
                    ["catch"]( function( theError) {
                        if( theError){}/* CQT */

                        console.log( "\n\nfUIGoToValueClicked ERROR\n\n\n");
                    });

                return true;
            };
            if( fUIGoToValueClicked){}/* CQT */
            aPrototype.fUIGoToValueClicked = fUIGoToValueClicked;











            var pCancelEdition = function( theEvent) {
                if( theEvent){}/* CQT */

                aPrototype._v_SuperPrototype.pCancelEdition.apply( this, [ theEvent]);

                this._v_InEdition = false;

                this.pInitDisplayFields();
            };
            if( pCancelEdition){}/* CQT */
            aPrototype.pCancelEdition = pCancelEdition;












            return aPrototype;

        })();




        var EditorCtrl_Constructor = function( theTitle, theIdentifier, theRecorder, theScope,
                                               theDomIdPrefix,
                                               theParentCtrl,
                                               theConverter,
                                               theMasterLabels, theMasterFields, theMasterParms, theMasterType,
                                               theEditorName, theEditorLabel, theEditorClasses,
                                               theRetrieval,
                                               theEditableFieldNames, theAutoEdit,
                                               theNoRefresh, theNoEdit, theNoDelete,
                                               theFieldsChangeListener, theValuesChangeListener,
                                               theFieldSpecs,
                                               theEditRoles) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_WithCandidatesCtrlType.WithCandidatesCtrl_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;
            this._v_Module = null;

            this._v_EditorName          = null;
            this._v_EditorLabel         = null;
            this._v_EditorClasses       = null;

            this._v_AutoEdit   = null;
            this._v_InEdition  = null;

            this._v_NoRefresh = null;
            this._v_NoEdit    = null;
            this._v_NoDelete  = null;

            this._v_EditRoles = null;
            this._v_HasAnyEditRoles = null;

            this._pInit_EditorCtrl( theTitle, theIdentifier, theRecorder, theScope,
                                    theDomIdPrefix,
                                    theParentCtrl,
                                    theConverter,
                                    theMasterLabels, theMasterFields, theMasterParms, theMasterType,
                                    theEditorName, theEditorLabel, theEditorClasses,
                                    theRetrieval,
                                    theEditableFieldNames, theAutoEdit,
                                    theNoRefresh, theNoEdit, theNoDelete,
                                    theFieldsChangeListener, theValuesChangeListener,
                                    theFieldSpecs,
                                    theEditRoles);
        };
        EditorCtrl_Constructor.prototype = aEditorCtrl_Prototype;





        var EditorCtrl_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_WithCandidatesCtrlType.WithCandidatesCtrl_Prototype;

            this._v_Prototype = aEditorCtrl_Prototype;
            this._v_Type      = null;
            this._v_Module    = null;

            this._v_EditorName          = null;
            this._v_EditorLabel         = null;
            this._v_EditorClasses       = null;

            this._v_AutoEdit   = null;
            this._v_InEdition  = null;

            this._v_NoRefresh = null;
            this._v_NoEdit    = null;
            this._v_NoDelete  = null;

            this._v_EditRoles = null;
            this._v_HasAnyEditRoles = null;
        };
        EditorCtrl_SuperPrototypeConstructor.prototype = aEditorCtrl_Prototype;





        var aModule = {
            "EditorCtrl_Prototype": aEditorCtrl_Prototype,
            "EditorCtrl_Constructor": EditorCtrl_Constructor,
            "EditorCtrl_SuperPrototypeConstructor": EditorCtrl_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aEditorCtrl_Prototype._v_Module = aModule;





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







