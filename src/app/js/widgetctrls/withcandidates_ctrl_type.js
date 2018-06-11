'use strict';

/*
 * withcandidates_ctrl_type.js
 *
 * Creado @author Antonio Carrasco Valero 20141104152
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






angular.module("widgetCtrlsTypes").factory("WithCandidatesCtrlType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "FieldsCtrlType",
    "WireCandidates2EditorType",
    "$q",
    "$timeout",
function( theSS_typesregistry,
          theSS_Overrider,
          theSS_FieldsCtrlType,
          theSS_WireCandidates2EditorType,
          theSS_q,
          theSS_timeout) {




    var ModuleName     = "withcandidates_ctrl_type";
    var ModulePackages = "widgetctrls";
    var ModuleFullName = ModulePackages + "/" + ModuleName;



    var aMod_definer = function( theS_Overrider,
                                 theS_FieldsCtrlType,
                                 theS_WireCandidates2EditorType,
                                 $q,
                                 $timeout) {


        if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}








        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.LOGEVENTS = true;
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
            theToInit.DEFAULTTITLE = "WithCandidatesCtrlDefaultName";




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







        var aWithCandidatesCtrl_Prototype = (function() {


            var aPrototype = new theS_FieldsCtrlType.FieldsCtrl_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_SuperPrototype = theS_FieldsCtrlType.FieldsCtrl_Prototype;


            aPrototype._v_Type = "WithCandidatesCtrl";

            aPrototype._v_Module = null;

            aPrototype._v_CandidatesCtrls      = null;
            aPrototype._v_CandidatesCtrlsShown = null;
            aPrototype._v_CandidatesWires      = null;





            var _pInit = function( theTitle, theIdentifier, theRecorder, theScope,
                                   theDomIdPrefix,
                                   theParentCtrl,
                                   theConverter,
                                   theMasterLabels, theMasterFields, theMasterParms, theMasterType,
                                   theEditorName, theEditorLabel, theEditorClasses,
                                   theRetrieval,
                                   theEditableFieldNames, theAutoEdit,
                                   theFieldsChangeListener, theValuesChangeListener,
                                   theFieldSpecs) {

                this._pInit_WithCandidatesCtrl( theTitle, theIdentifier, theRecorder, theScope,
                                                theDomIdPrefix,
                                                theParentCtrl,
                                                theConverter,
                                                theMasterLabels, theMasterFields, theMasterParms, theMasterType,
                                                theEditorName, theEditorLabel, theEditorClasses,
                                                theRetrieval,
                                                theEditableFieldNames, theAutoEdit,
                                                theFieldsChangeListener, theValuesChangeListener,
                                                theFieldSpecs);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_WithCandidatesCtrl = function( theTitle, theIdentifier, theRecorder, theScope,
                                                      theDomIdPrefix,
                                                      theParentCtrl,
                                                      theConverter,
                                                      theMasterLabels, theMasterFields, theMasterParms, theMasterType,
                                                      theEditorName, theEditorLabel, theEditorClasses,
                                                      theRetrieval,
                                                      theEditableFieldNames, theAutoEdit,
                                                      theFieldsChangeListener, theValuesChangeListener,
                                                      theFieldSpecs) {

                /* Delegate on super prototype initialization */
                aPrototype._v_SuperPrototype._pInit_FieldsCtrl.apply( this, [ theTitle, theIdentifier, theRecorder, theScope,
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

                this._v_CandidatesCtrls      = { };
                this._v_CandidatesCtrlsShown = { };
                this._v_CandidatesWires      = [ ];
            };
            if( _pInit_WithCandidatesCtrl){}/* CQT */
            aPrototype._pInit_WithCandidatesCtrl = _pInit_WithCandidatesCtrl;








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









            var pLogEvent = function( theEvent, theData, theDetails) {

                if( !this.LOGEVENTS) {
                    return;
                }

                aPrototype._v_SuperPrototype.pLogEvent.apply( this, [ theEvent, theData, theDetails]);
            };
            if( pLogEvent){}/* CQT */
            aPrototype.pLogEvent = pLogEvent;









            var fParametersForNewCandidatesCtrl = function( theCandidatesCtrl, theFieldName) {

                if( !theCandidatesCtrl) {
                    return null;
                }

                if( !theFieldName) {
                    return null;
                }

                if( !this.fRegisterNewCandidatesCtrl( theCandidatesCtrl, theFieldName)) {
                    return null;
                }

                var aFieldSpec = this.fFieldSpecByName( theFieldName);
                if( !aFieldSpec) {
                    return null;
                }

                var aCandidatesSpec = aFieldSpec[ "candidates"];
                if( !aCandidatesSpec) {
                    return null;
                }

                var aCandidatesGridParameters = aCandidatesSpec[ "grid"];
                if( !aCandidatesGridParameters) {
                    return null;
                }



                var aCandidatesGridName = aCandidatesGridParameters[ "name"];
                if( !aCandidatesGridName) {
                    return null;
                }

                var aCopyOfCandidatesGridParameters = { };
                Object.keys( aCandidatesGridParameters).forEach( function( athKey) {
                    aCopyOfCandidatesGridParameters[ athKey] = aCandidatesGridParameters[ athKey];
                });

                aCopyOfCandidatesGridParameters[ this.CANDIDATESFIELDINJECTEDPARAMETER] = theFieldName;

                aCopyOfCandidatesGridParameters[ "domIdPrefix"] = this._v_DomIdPrefix;

                return aCopyOfCandidatesGridParameters;
            };
            if( fParametersForNewCandidatesCtrl){}/* CQT */
            aPrototype.fParametersForNewCandidatesCtrl = fParametersForNewCandidatesCtrl;








            var fRegisterNewCandidatesCtrl = function( theCandidatesCtrl, theFieldName) {

                if( !theCandidatesCtrl) {
                    return false;
                }

                if( !theFieldName) {
                    return false;
                }

                var anExistingCandidatesCtrl = this.fCandidatesCtrlForFieldNamed( theFieldName);
                if( anExistingCandidatesCtrl) {
                    return false;
                }

                var aFieldSpec = this.fFieldSpecByName( theFieldName);
                if( !aFieldSpec) {
                    return false;
                }

                var aCandidatesSpec = aFieldSpec[ "candidates"];
                if( !aCandidatesSpec) {
                    return false;
                }

                var aCandidatesGridParameters = aCandidatesSpec[ "grid"];
                if( !aCandidatesGridParameters) {
                    return false;
                }

                var aCandidatesGridName = aCandidatesGridParameters[ "name"];
                if( !aCandidatesGridName) {
                    return false;
                }

                this._v_CandidatesCtrls[ theFieldName] = theCandidatesCtrl;

                return true;
            };
            if( fRegisterNewCandidatesCtrl){}/* CQT */
            aPrototype.fRegisterNewCandidatesCtrl = fRegisterNewCandidatesCtrl;








            var fCandidatesCtrlForFieldNamed = function( theFieldName) {

                if( !theFieldName) {
                    return null;
                }

                var aCandidatesCtrl = this._v_CandidatesCtrls[  theFieldName];
                if( !aCandidatesCtrl) {
                    return null;
                }

                return aCandidatesCtrl;
            };
            if( fCandidatesCtrlForFieldNamed){}/* CQT */
            aPrototype.fCandidatesCtrlForFieldNamed = fCandidatesCtrlForFieldNamed;











            var pWireNewCandidatesCtrl = function( theCtrl, theCtrlName) {

                if( !theCtrl) {
                    return;
                }

                if( !theCtrlName) {
                    return;
                }

                var aCandidatesField = theCtrl.fCandidatesField();
                if( !aCandidatesField) {
                    return;
                }

                var aCandidatesCtrl = this.fCandidatesCtrlForFieldNamed( aCandidatesField);
                if( !aCandidatesCtrl) {
                    return;
                }

                if( !( theCtrl === aCandidatesCtrl)) {
                    return;
                }


                var aTitle = this._v_Title;
                if( !aTitle) {
                    aTitle = "?";
                }

                var aCtrlTitle = aCandidatesCtrl._v_Title;
                if( !aCtrlTitle) {
                    aCtrlTitle = "?";
                }

                var aWireTitle = "Candidates2EditorWireIn-" + aTitle + "-" + aCtrlTitle;

                var aWireSpec =  {
                    "name":     aWireTitle,
                    "kind":     theS_WireCandidates2EditorType.WIREKIND_CANDIDATES2EDITOR,
                    "from":     aCandidatesCtrl._v_GridName,
                    "to":       this._v_EditorName
                };

                var aWire = new theS_WireCandidates2EditorType.WireCandidates2Editor_Constructor(
                    aWireTitle,
                    this._v_Identifier,
                    this._v_Recorder,
                    this._v_Scope,
                    aWireSpec,
                    this,
                    aCandidatesCtrl,
                    this
                );

                this._v_CandidatesWires.push( aWire);

                aWire.fWireCtrl( theCtrl, theCtrlName);

            };
            if( pWireNewCandidatesCtrl){}/* CQT */
            aPrototype.pWireNewCandidatesCtrl = pWireNewCandidatesCtrl;













            var fUIFieldRdOnlyClicked = function( theFieldName) {

                if( !theFieldName) {
                    return true;
                }

                var aCandidatesCtrl = this.fCandidatesCtrlForFieldNamed( theFieldName);
                if( !aCandidatesCtrl) {
                    return true;
                }

                var aFieldName = theFieldName;
                var aThis = this;

                this.fprDo_LoadCandidates( theFieldName)
                    .then( function() {
                        aThis._v_CandidatesCtrlsShown[ aFieldName] = true;
                    })
                    ['finally']( function() {
                    $timeout(
                        function() {
                            aCandidatesCtrl.pScrollSelectedRowIntoView();
                        },
                        aThis.SCROLLTOCANDIDATESELECTIONDELAY
                    );
                });


                return true;
            };
            if( fUIFieldRdOnlyClicked){}/* CQT */
            aPrototype.fUIFieldRdOnlyClicked = fUIFieldRdOnlyClicked;







            var fprDo_LoadCandidates = function( theFieldName) {

                var aDeferred = this.fNewDeferred();

                if( !theFieldName) {
                    this.pDeferredResolveWithNothing( aDeferred);
                    return aDeferred.promise;
                }


                var aCandidatesCtrl = this.fCandidatesCtrlForFieldNamed( theFieldName);
                if( !aCandidatesCtrl) {
                    this.pDeferredResolveWithNothing( aDeferred);
                    return aDeferred.promise;
                }

                var aFieldName = theFieldName;
                var aThis = this;

                $timeout(
                    function() {

                        var otherCandidatesCtrl = aThis.fCandidatesCtrlForFieldNamed( aFieldName);
                        if( !otherCandidatesCtrl) {
                            aThis.pDeferredResolveWithNothing( aDeferred);
                            return;
                        }

                        var aToSelectFields = aThis.fToSelectFieldsForCandidates( aFieldName);

                        otherCandidatesCtrl.pInhibitSelectionChangeNotifications( true);

                        otherCandidatesCtrl.fprDo_RetrieveRows( null, null, aToSelectFields)
                            .then( function( theRetrievedData) {
                                aDeferred.resolve( theRetrievedData);
                            })
                            ['finally']( function() {
                                otherCandidatesCtrl.pInhibitSelectionChangeNotifications( false);
                            });
                    },
                    this.OBTAINCANDIDATESDELAY
                );


                return aDeferred.promise;
            };
            if( fprDo_LoadCandidates){}/* CQT */
            aPrototype.fprDo_LoadCandidates = fprDo_LoadCandidates;









            var fToSelectFieldsForCandidates = function( theFieldName) {

                if( !theFieldName) {
                    return null;
                }

                if( !this._v_Fields) {
                    return null;
                }

                var aFieldSpec = this.fFieldSpecByName( theFieldName);
                if( !aFieldSpec) {
                    return null;
                }

                var aCandidatesSpec = aFieldSpec[ "candidates"];
                if( !aCandidatesSpec) {
                    return null;
                }


                var someCandidateFields = aCandidatesSpec[ "candidateFields"];
                if( !someCandidateFields) {
                    return null;
                }

                var aNumCandidateFields = someCandidateFields.length;
                if( !aNumCandidateFields) {
                    return null;
                }


                var aToSelectFields = { };

                for( var aCandidateFieldIdx=0; aCandidateFieldIdx < aNumCandidateFields; aCandidateFieldIdx++) {

                    var aCandidateField = someCandidateFields[ aCandidateFieldIdx];
                    if( aCandidateField) {

                        var anEditorFieldName   = aCandidateField[ "editorField"];
                        var aCandidateFieldName = aCandidateField[ "candidateField"];

                        if( anEditorFieldName && aCandidateFieldName) {

                            var anEditorFieldValue = this._v_Fields[ anEditorFieldName];
                            if( !( typeof anEditorFieldValue == "undefined")) {
                                aToSelectFields[ aCandidateFieldName] = anEditorFieldValue;
                            }
                        }
                    }
                }

                return aToSelectFields;
            };
            if( fToSelectFieldsForCandidates){}/* CQT */
            aPrototype.fToSelectFieldsForCandidates = fToSelectFieldsForCandidates;










            var fIsCandidatesCtrlShown= function( theFieldName) {

                if( !theFieldName) {
                    return false;
                }

                var aIsCandidatesCtrlShown = this._v_CandidatesCtrlsShown[ theFieldName];
                if( aIsCandidatesCtrlShown){}/* CQT */

                return aIsCandidatesCtrlShown;
            };
            if( fIsCandidatesCtrlShown){}/* CQT */
            aPrototype.fIsCandidatesCtrlShown = fIsCandidatesCtrlShown;









            var pCandidatesCtrlNotShown= function( theFieldName) {

                if( !theFieldName) {
                    return;
                }

                this._v_CandidatesCtrlsShown[ theFieldName] = false;

            };
            if( pCandidatesCtrlNotShown){}/* CQT */
            aPrototype.pCandidatesCtrlNotShown = pCandidatesCtrlNotShown;









            var fShownCandidatesFieldNames = function() {

                if( !this._v_CandidatesCtrlsShown) {
                    return null;
                }

                var someShownCandidatesFieldNames = [ ];

                var someCandidatesFieldNames = Object.keys( this._v_CandidatesCtrlsShown);
                var aNumCandidatesFieldNames = someCandidatesFieldNames.length;

                for( var aCandidatesFieldNameIdx=0; aCandidatesFieldNameIdx < aNumCandidatesFieldNames; aCandidatesFieldNameIdx++) {

                    var aCandidatesFieldName = someCandidatesFieldNames[ aCandidatesFieldNameIdx];
                    if( aCandidatesFieldName) {

                        var aIsCandidateShown = this.fIsCandidatesCtrlShown( aCandidatesFieldName);
                        if( aIsCandidateShown) {

                            someShownCandidatesFieldNames.push( aCandidatesFieldName);
                        }
                    }
                }

                return someShownCandidatesFieldNames;
            };
            if( fShownCandidatesFieldNames){}/* CQT */
            aPrototype.fShownCandidatesFieldNames = fShownCandidatesFieldNames;









            var fprDo_UpdateCandidatesSelectionIfShown = function( theRetrievedData) {

                var aDeferred = this.fNewDeferred();

                if( !this._v_CandidatesCtrlsShown) {
                    this.pDeferredResolveWithFields( aDeferred, theRetrievedData);
                    return aDeferred.promise;
                }

                var someUpdateCandidatesPromises = [ ];

                var someShownCandidatesFieldNames = this.fShownCandidatesFieldNames();

                var aNumFieldNames = someShownCandidatesFieldNames.length;
                for( var aFieldNameIdx=0; aFieldNameIdx < aNumFieldNames; aFieldNameIdx++) {

                    var aFieldName = someShownCandidatesFieldNames[ aFieldNameIdx];
                    if( aFieldName) {

                        var aCandidatesCtrl = this.fCandidatesCtrlForFieldNamed( aFieldName);
                        if( aCandidatesCtrl) {

                            var aToSelectFields = this.fToSelectFieldsForCandidates( aFieldName);

                            console.log( "\nACV OJO TODO 201411041457 Now works because there is at most a candidates field for editor: mutable variable used in scheduled funcion.\n");

                            aCandidatesCtrl.pInhibitSelectionChangeNotifications( true);
                            var anUpdateCandidatesPromise = aCandidatesCtrl
                                .fprDo_RetrieveRows( null, null, aToSelectFields)
                                ['finally']( function() {
                                    aCandidatesCtrl.pInhibitSelectionChangeNotifications( false);
                                });
                            if( anUpdateCandidatesPromise) {
                                someUpdateCandidatesPromises.push( anUpdateCandidatesPromise);
                            }
                        }
                    }
                }

                if( !someUpdateCandidatesPromises.length) {
                    this.pDeferredResolveWithFields( aDeferred, theRetrievedData);
                    return aDeferred.promise;
                }

                return this.fNewPromiseAll( someUpdateCandidatesPromises);
            };
            if( fprDo_UpdateCandidatesSelectionIfShown){}/* CQT */
            aPrototype.fprDo_UpdateCandidatesSelectionIfShown = fprDo_UpdateCandidatesSelectionIfShown;













            var fprDo_SetCandidatesFieldValues = function( theCandidatesFieldName, theRetrieval, theCandidatesSelection) {
                if( theCandidatesSelection){}/* CQT */

                var aMethodName = this._v_Type + " fprDo_RetrieveFields";
                if( aMethodName){}/* CQT */

                var aDeferred = this.fNewDeferred();


                var aCandidatesFieldName = theCandidatesFieldName;

                var aCandidatesSelection = theCandidatesSelection;

                /* ********************************************************************
                 Retrieve data NOW (usually from server, remote or async resource, ...)
                 */
                var aPromise = theRetrieval();

                var aThis = this;
                aPromise
                    .then(
                        function( theResolvedData) {

                            if( aThis.LOGSETCANDIDATESFIELDS) {
                                if( aThis.LOGCANDIDATESFIELDS) {
                                    aThis.pLogEvent( aThis.EVENTKIND_RETRIEVEDFIELDS, theResolvedData);
                                }
                                else {
                                    aThis.pLogEvent( aThis.EVENTKIND_RETRIEVEDFIELDS);
                                }
                            }

                            if( !aCandidatesFieldName) {
                                aThis.pDeferredResolveWithFields( aDeferred, theResolvedData);
                                return aDeferred.promise;
                            }

                            aThis.pSetFieldsFromCandidatesSelection( aCandidatesFieldName, theResolvedData);

                            if( !aThis._v_DirtyChangeListeners || !aThis._v_DirtyChangeListeners.length) {
                                aThis.pDeferredResolveWithFields( aDeferred, theResolvedData);
                                return aDeferred.promise;
                            }

                            aThis.fprDo_DirtyChanged( aCandidatesFieldName, aCandidatesSelection)
                                .then( function( ) {
                                    aThis.pDeferredResolveWithFields( aDeferred, theResolvedData);
                                })

                            return aDeferred.promise;
                        }
                    )
                    /*
                    .then(
                        this.fprDo_ValuesChanged.bind( this)
                    )
                    */
                    .then(
                        function() {
                            aThis.pDeferredResolveWithFields( aDeferred, aRetrievedDataHolder[ 0]);
                        }
                    )
                    ["catch"](
                        function( theError) {
                            aThis._v_Leyendo = false;
                            aThis.pDeferredReject( aDeferred, theError);
                        }
                    );

                return aDeferred.promise;

            };
            if( fprDo_SetCandidatesFieldValues){}/* CQT */
            aPrototype.fprDo_SetCandidatesFieldValues = fprDo_SetCandidatesFieldValues;













            var pSetFieldsFromCandidatesSelection = function( theCandidatesFieldName, theCandidatesSelection) {

                if( !theCandidatesFieldName) {
                    return;
                }

                if( typeof theCandidatesSelection == "undefined") {
                    return;
                }

                if( !this._v_Fields) {
                    return;
                }

                var aFieldSpec = this.fFieldSpecByName( theCandidatesFieldName);
                if( !aFieldSpec) {
                    return;
                }

                var aCandidatesSpec = aFieldSpec[ "candidates"];
                if( !aCandidatesSpec) {
                    return;
                }


                var someCandidateFields = aCandidatesSpec[ "candidateFields"];
                if( !someCandidateFields) {
                    return;
                }

                var aNumCandidateFields = someCandidateFields.length;
                if( !aNumCandidateFields) {
                    return;
                }

                var aConverter = this.fConverter();


                for( var aCandidateFieldIdx=0; aCandidateFieldIdx < aNumCandidateFields; aCandidateFieldIdx++) {

                    var aCandidateField = someCandidateFields[ aCandidateFieldIdx];
                    if( aCandidateField) {

                        var anEditorFieldName   = aCandidateField[ "editorField"];
                        var aCandidateFieldName = aCandidateField[ "candidateField"];

                        if( anEditorFieldName && aCandidateFieldName) {

                            var aCandidateFieldValue = null;

                            if( theCandidatesSelection) {
                                aCandidateFieldValue = theCandidatesSelection[ aCandidateFieldName];
                            }

                            if( !( typeof aCandidateFieldValue == "undefined")) {

                                var aConvertedCandidateValue = aCandidateFieldValue;

                                if( aConverter) {
                                    var aDataType = null;

                                    var otherFieldSpec = this.fFieldSpecByName( anEditorFieldName);
                                    if( otherFieldSpec) {
                                        aDataType = otherFieldSpec[ "dataType"];
                                    }

                                    aConvertedCandidateValue = aConverter.fConvertFromEditableValue( aConvertedCandidateValue, aDataType);
                                }

                                this._v_EditableFields[ anEditorFieldName] = aConvertedCandidateValue;
                            }

                            this.fCheckIfFieldValueHasChanged( anEditorFieldName);
                        }
                    }
                }

                this.pCandidatesCtrlNotShown( theCandidatesFieldName);
            };
            if( pSetFieldsFromCandidatesSelection){}/* CQT */
            aPrototype.pSetFieldsFromCandidatesSelection = pSetFieldsFromCandidatesSelection;












            return aPrototype;

        })();




        var WithCandidatesCtrl_Constructor = function( theTitle, theIdentifier, theRecorder, theScope,
                                                       theDomIdPrefix,
                                                       theParentCtrl,
                                                       theConverter,
                                                       theMasterLabels, theMasterFields, theMasterParms, theMasterType,
                                                       theEditorName, theEditorLabel, theEditorClasses,
                                                       theRetrieval,
                                                       theEditableFieldNames, theAutoEdit,
                                                       theFieldsChangeListener, theValuesChangeListener,
                                                       theFieldSpecs) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_FieldsCtrlType.FieldsCtrl_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;
            this._v_Module = null;

            this._v_EditorName          = null;
            this._v_EditorLabel         = null;
            this._v_EditorClasses       = null;

            this._v_AutoEdit   = null;
            this._v_InEdition  = null;

            this._v_CandidatesCtrls      = null;
            this._v_CandidatesCtrlsShown = null;
            this._v_CandidatesWires      = null;

            this._pInit_WithCandidatesCtrl( theTitle, theIdentifier, theRecorder, theScope,
                                            theDomIdPrefix,
                                            theParentCtrl,
                                            theConverter,
                                            theMasterLabels, theMasterFields, theMasterParms, theMasterType,
                                            theEditorName, theEditorLabel, theEditorClasses,
                                            theRetrieval,
                                            theEditableFieldNames, theAutoEdit,
                                            theFieldsChangeListener, theValuesChangeListener,
                                            theFieldSpecs);
        };
        WithCandidatesCtrl_Constructor.prototype = aWithCandidatesCtrl_Prototype;





        var WithCandidatesCtrl_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_FieldsCtrlType.FieldsCtrl_Prototype;

            this._v_Prototype = aWithCandidatesCtrl_Prototype;
            this._v_Type      = null;
            this._v_Module    = null;

            this._v_EditorName          = null;
            this._v_EditorLabel         = null;
            this._v_EditorClasses       = null;

            this._v_AutoEdit   = null;
            this._v_InEdition  = null;

            this._v_CandidatesCtrls      = null;
            this._v_CandidatesCtrlsShown = null;
            this._v_CandidatesWires      = null;
        };
        WithCandidatesCtrl_SuperPrototypeConstructor.prototype = aWithCandidatesCtrl_Prototype;





        var aModule = {
            "WithCandidatesCtrl_Prototype": aWithCandidatesCtrl_Prototype,
            "WithCandidatesCtrl_Constructor": WithCandidatesCtrl_Constructor,
            "WithCandidatesCtrl_SuperPrototypeConstructor": WithCandidatesCtrl_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aWithCandidatesCtrl_Prototype._v_Module = aModule;





        return aModule;
    };







    var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
    if( !anExistingModule) {

        var aModule = aMod_definer(
            theSS_Overrider,
            theSS_FieldsCtrlType,
            theSS_WireCandidates2EditorType,
            theSS_q,
            theSS_timeout
        );
        anExistingModule = aModule;

        theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
    }






    return anExistingModule;

}]);







