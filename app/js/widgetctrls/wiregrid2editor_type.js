'use strict';

/*
 * wiregrid2editor_type.js
 *
 * Creado @author Antonio Carrasco Valero 201410120209
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






angular.module("widgetCtrlsTypes").factory("WireGrid2EditorType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "WireGridWithReverseType",
    "$timeout",
    function( theSS_typesregistry,
              theSS_Overrider,
              theSS_WireGridWithReverseType,
              theSS_timeout) {




        var ModuleName     = "wiregrid2editor_type";
        var ModulePackages = "widgetctrls";
        var ModuleFullName = ModulePackages + "/" + ModuleName;



        var aMod_definer = function( theS_Overrider,
                                     theS_WireGridWithReverseType,
                                     $timeout) {
            if( $timeout){}/* CQT */

            if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}





            var pgInitWithModuleVariations = function( theToInit) {

                if( !theToInit) {
                    return;
                }

                theToInit.LOGGRID2EDITORWIREEVENTS    = true;

                theToInit.LOGEDITORVALUESCHANGELISTENED = true;

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
                theToInit.DEFAULTTITLE = "WireGrid2EditorDefaultName";


                theToInit.WIREKIND_GRID2EDITOR = "GRID2EDITOR";
                theToInit.WIREKIND = theToInit.WIREKIND_GRID2EDITOR;

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






            var aWireGrid2Editor_Prototype = (function() {


                var aPrototype = new theS_WireGridWithReverseType.WireGridWithReverse_SuperPrototypeConstructor();

                pgInitFromModuleConstants( aPrototype);


                aPrototype._v_SuperPrototype = theS_WireGridWithReverseType.WireGridWithReverse_Prototype;


                aPrototype._v_Type = "WireGrid2Editor";

                aPrototype._v_Module = null;




                var _pInit = function( theTitle, theIdentifier, theRecorder, theScope,
                                       theWireSpec, theWireOwner) {

                    this._pInit_WireGrid2Editor( theTitle, theIdentifier, theRecorder, theScope,
                        theWireSpec, theWireOwner);
                };
                if( _pInit){}/* CQT */
                aPrototype._pInit = _pInit;







                var _pInit_WireGrid2Editor = function( theTitle, theIdentifier, theRecorder, theScope,
                                                theWireSpec, theWireOwner) {

                    /* Delegate on super prototype initialization */
                    aPrototype._v_SuperPrototype._pInit_WireGridWithReverse.apply( this, [ theTitle, theIdentifier, theRecorder, theScope,
                        theWireSpec, theWireOwner]);

                    this._v_Prototype = aPrototype;
                    this._v_Type      = this._v_Prototype._v_Type;
                    this._v_Module    = aPrototype._v_Module;

                    this._v_WireKind = this.WIREKIND_GRID2EDITOR;

                };
                if( _pInit_WireGrid2Editor){}/* CQT */
                aPrototype._pInit_WireGrid2Editor = _pInit_WireGrid2Editor;








                var fToCtrl = function() {

                    if( this._v_ToCtrl) {
                        return this._v_ToCtrl;
                    }

                    var aToName = this._v_WireSpec[ "to"];
                    if( !aToName) {
                        return null;
                    }

                    if( !this._v_WireOwner) {
                        return null;
                    }

                    this._v_ToCtrl = this._v_WireOwner.fEditorCtrlNamed( aToName);

                    return this._v_ToCtrl;
                };
                if( fToCtrl){}/* CQT */
                aPrototype.fToCtrl = fToCtrl;








                var fSelectionInterestedCtrlDoPromise = function( theRetrieval, theSelection) {
                    if( theSelection){}/* CQT */

                    var aResultPromise = null;

                    var aToCtrl = this.fToCtrl();

                    if( !aToCtrl) {
                        aResultPromise = theRetrieval();
                    }
                    else {
                        aResultPromise = aToCtrl.fprDo_RetrieveFields( theRetrieval, theSelection);
                    }

                    return aResultPromise;
                };
                if( fSelectionInterestedCtrlDoPromise){}/* CQT */
                aPrototype.fSelectionInterestedCtrlDoPromise = fSelectionInterestedCtrlDoPromise;









                var fNewReverseChangeListener = function( ) {

                    return this.fNewEditionRequestedListener();
                };
                if( fNewReverseChangeListener){}/* CQT */
                aPrototype.fNewReverseChangeListener = fNewReverseChangeListener;








                var fNewEditionRequestedListener = function( ) {

                    var aMethodName = this._v_Type + " fNewEditionRequestedListener";

                    var aThis = this;
                    return ( function() {
                        var aThis_here = aThis;

                        var aListener = (function( theFieldsChanges) {

                            if( aThis_here.LOGCREATORVALUESCHANGELISTENED) {
                                aThis_here.fRecord( aMethodName, aThis_here.EVENTKIND_LISTENED, theFieldsChanges, null, null);
                            }

                            var anEditonActionReport = aThis_here.fNewEditionActionReport( theFieldsChanges);
                            if( !anEditonActionReport) {
                                return aThis_here.fNewDeferredRejectPromise( "InternalError " + aMethodName + " !anEditonActionReport");
                            }


                            var aFromCtrl = aThis_here.fFromCtrl();
                            if( !aFromCtrl) {
                                return aThis_here.fNewDeferredRejectPromise( anEditonActionReport);
                            }

                            var aToCtrl = aThis_here.fToCtrl();
                            if( !aToCtrl) {
                                return aThis_here.fNewDeferredRejectPromise( anEditonActionReport);
                            }


                            var anUpdater = aThis_here.fNewEditionUpdater( anEditonActionReport);

                            var anUpdatedPromise = anUpdater();

                            return anUpdatedPromise
                                .then( function( theRetrievedFields) {
                                    aToCtrl.pReportActionSuccess( anEditonActionReport);

                                    return aFromCtrl.fprDo_UpdateRow_AfterEdition_AndPropagateToWiresWithChanged( theRetrievedFields)
                                })
                                .then( function( theRetrievedFields) {
                                    return aToCtrl.fprDo_UpdateFieldsData( theRetrievedFields);
                                })
                                .then( function( theRetrievedFields) {
                                    return aToCtrl.fNewDeferredResolveWithFieldsPromise( theRetrievedFields);
                                })
                                ["catch"]( function( theError) {

                                    aToCtrl.pReportFailedAction( anEditonActionReport, aToCtrl.ACTIONFAILURE_PROMISECATCH, theError);

                                    throw theError;
                                });
                        });




                        aListener.fIdentifyingWithTitleJSON = function() {

                            var aIdentifiyingWithTitleJSON = aThis_here.fIdentifyingWithTitleJSON();

                            var anIdentifyingJSON = {
                                "type": "fNewCreationRequestedListener",
                                "wire": aIdentifiyingWithTitleJSON
                            };
                            if( anIdentifyingJSON){}/* CQT */
                            return anIdentifyingJSON;
                        };
                        aListener.fIdentifyingJSON = aListener.fIdentifyingWithTitleJSON;


                        return aListener;

                    })();
                };
                if( fNewEditionRequestedListener){}/* CQT */
                aPrototype.fNewEditionRequestedListener = fNewEditionRequestedListener;







                var fNewEditionActionReport = function( theFieldsChanges) {

                    var aMethodName = this._v_Type + " fNewEditionActionReport";


                    if( !theFieldsChanges || !theFieldsChanges.length) {
                        return null;
                    }

                    var aFromCtrl = this.fFromCtrl();
                    if( !aFromCtrl) {
                        return null;
                    }

                    var aToCtrl = this.fToCtrl();
                    if( !aToCtrl) {
                        return null;
                    }

                    var aFieldsChangeFormAndDescribe = aToCtrl.fFieldsChangeFormAndDescribe();
                    if( !aFieldsChangeFormAndDescribe) {
                        return null;
                    }

                    var aFieldsChangeForm = aFieldsChangeFormAndDescribe.fieldsChangeForm;
                    if( !aFieldsChangeForm) {
                        return null;
                    }

                    var aFieldsChangeDescribe = aFieldsChangeFormAndDescribe.fieldsChangeDescribe;
                    if( !aFieldsChangeDescribe) {
                        return null;
                    }

                    var anActionReport = aToCtrl.fCreateAndRegisterActionReport(
                        "CHANGE", /* this.ACTIONKIND_CHANGE */
                        aToCtrl._v_EditorName,  /* theActionName */
                        null, /* theWith */
                        null, /* theWithDescribe */
                        aFieldsChangeForm, /* theForm */
                        aFieldsChangeDescribe, /* theFormDescribe */
                        null, /* theHitServerReport */
                        false, /* thePerformed */
                        false, /* theSuccess */
                        null, /* theFailureKind */
                        null /* theFailureDetails */
                    );

                    return anActionReport;

                };
                if( fNewEditionActionReport){}/* CQT */
                aPrototype.fNewEditionActionReport = fNewEditionActionReport;






                var fNewEditionUpdater = function( theEditionActionReport) {

                    return this.fNewReverseUpdaterWithForm( theEditionActionReport);
                };
                if( fNewEditionUpdater){}/* CQT */
                aPrototype.fNewEditionUpdater = fNewEditionUpdater;






                var fprDo_InitialExtra = function() {

                    return aPrototype._v_SuperPrototype.fprDo_InitialExtra.apply( this);
                };
                if( fprDo_InitialExtra){}/* CQT */
                aPrototype.fprDo_InitialExtra = fprDo_InitialExtra;








                var fprDo_Initial = function() {

                    return this.fprDo_InitialExtra();
                };
                if( fprDo_Initial){}/* CQT */
                aPrototype.fprDo_Initial = fprDo_Initial;







                var fprDo_Wire = function( theCtrl) {

                    return aPrototype._v_SuperPrototype.fprDo_Wire.apply( this, [ theCtrl]);
                };
                if( fprDo_Wire){}/* CQT */
                aPrototype.fprDo_Wire = fprDo_Wire;








                var pLogEvent = function( theEvent, theData, theDetails) {

                    if( !this.LOGGRID2EDITORWIREEVENTS) {
                        return;
                    }

                    aPrototype._v_SuperPrototype.pLogEvent.apply( this, [ theEvent, theData, theDetails]);
                };
                if( pLogEvent){}/* CQT */
                aPrototype.pLogEvent = pLogEvent;






                return aPrototype;

            })();




            var WireGrid2Editor_Constructor = function( theTitle, theIdentifier, theRecorder, theScope,
                                                 theWireSpec, theWireOwner) {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_WireGridWithReverseType.WireGridWithReverse_Prototype;

                this._v_Prototype = null;
                this._v_Type = null;
                this._v_Module = null;

                this._v_ReverseListener     = null;
                this._v_ReverseWired      = null;

                this._pInit_WireGrid2Editor( theTitle, theIdentifier, theRecorder, theScope,
                    theWireSpec, theWireOwner);
            };
            WireGrid2Editor_Constructor.prototype = aWireGrid2Editor_Prototype;





            var WireGrid2Editor_SuperPrototypeConstructor = function() {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_WireGridWithReverseType.WireGridWithReverse_Prototype;

                this._v_Prototype = aWireGrid2Editor_Prototype;
                this._v_Type      = null;
                this._v_Module    = null;

                this._v_ReverseListener     = null;
                this._v_ReverseWired      = null;
            };
            WireGrid2Editor_SuperPrototypeConstructor.prototype = aWireGrid2Editor_Prototype;



            var aModule = {
                "WireGrid2Editor_Prototype": aWireGrid2Editor_Prototype,
                "WireGrid2Editor_Constructor": WireGrid2Editor_Constructor,
                "WireGrid2Editor_SuperPrototypeConstructor": WireGrid2Editor_SuperPrototypeConstructor
            };
            pgInitFromModuleConstants( aModule);
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;

            aWireGrid2Editor_Prototype._v_Module = aModule;





            return aModule;
        };







        var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        if( !anExistingModule) {

            var aModule = aMod_definer(
                theSS_Overrider,
                theSS_WireGridWithReverseType,
                theSS_timeout
            );
            anExistingModule = aModule;

            theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
        }






        return anExistingModule;

    }]);







