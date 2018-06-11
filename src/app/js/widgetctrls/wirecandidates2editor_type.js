'use strict';

/*
 * wirecandidates2editor_type.js
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






angular.module("widgetCtrlsTypes").factory("WireCandidates2EditorType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "WireGridWithReverseType",
    "$timeout",
    function( theSS_typesregistry,
              theSS_Overrider,
              theSS_WireGridWithReverseType,
              theSS_timeout) {




        var ModuleName     = "wirecandidates2editor_type";
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

                theToInit.LOGCANDIDATES2EDITORWIREEVENTS    = true;

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
                theToInit.DEFAULTTITLE = "WireCandidates2EditorDefaultName";


                theToInit.WIREKIND_CANDIDATES2EDITOR = "CANDIDATES2EDITOR";
                theToInit.WIREKIND = theToInit.WIREKIND_CANDIDATES2EDITOR;

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






            var aWireCandidates2Editor_Prototype = (function() {


                var aPrototype = new theS_WireGridWithReverseType.WireGridWithReverse_SuperPrototypeConstructor();

                pgInitFromModuleConstants( aPrototype);


                aPrototype._v_SuperPrototype = theS_WireGridWithReverseType.WireGridWithReverse_Prototype;


                aPrototype._v_Type = "WireCandidates2Editor";

                aPrototype._v_Module = null;




                var _pInit = function( theTitle, theIdentifier, theRecorder, theScope,
                                       theWireSpec, theWireOwner,
                                       theFromCtrl, theToCtrl) {

                    this._pInit_WireCandidates2Editor( theTitle, theIdentifier, theRecorder, theScope,
                                                       theWireSpec, theWireOwner,
                                                       theFromCtrl, theToCtrl);
                };
                if( _pInit){}/* CQT */
                aPrototype._pInit = _pInit;







                var _pInit_WireCandidates2Editor = function( theTitle, theIdentifier, theRecorder, theScope,
                                                             theWireSpec, theWireOwner,
                                                             theFromCtrl, theToCtrl) {

                    /* Delegate on super prototype initialization */
                    aPrototype._v_SuperPrototype._pInit_WireGridWithReverse.apply( this, [ theTitle, theIdentifier, theRecorder, theScope,
                        theWireSpec, theWireOwner]);

                    this._v_Prototype = aPrototype;
                    this._v_Type      = this._v_Prototype._v_Type;
                    this._v_Module    = aPrototype._v_Module;

                    this._v_WireKind = this.WIREKIND_CANDIDATES2EDITOR;

                    this._v_FromCtrl = theFromCtrl;
                    this._v_ToCtrl   = theToCtrl;

                };
                if( _pInit_WireCandidates2Editor){}/* CQT */
                aPrototype._pInit_WireCandidates2Editor = _pInit_WireCandidates2Editor;










                var fFromCtrl = function() {

                    if( this._v_FromCtrl) {
                        return this._v_FromCtrl;
                    }

                    return null;
                };
                if( fFromCtrl){}/* CQT */
                aPrototype.fFromCtrl = fFromCtrl;







                var fToCtrl = function() {

                    if( this._v_ToCtrl) {
                        return this._v_ToCtrl;
                    }

                    return null;
                };
                if( fToCtrl){}/* CQT */
                aPrototype.fToCtrl = fToCtrl;









                var fSelectionInterestedCtrlDoPromise = function( theRetrieval, theSelection) {
                    if( theSelection){}/* CQT */

                    var aResultPromise = null;

                    var aFromCtrl = this.fFromCtrl();
                    var aToCtrl = this.fToCtrl();

                    if( !aFromCtrl || !aToCtrl) {
                        aResultPromise = theRetrieval();
                    }
                    else {

                        var aCandidatesField = aFromCtrl.fCandidatesField();
                        if( !aCandidatesField) {
                            aResultPromise = theRetrieval();
                        }
                        else {
                            aResultPromise = aToCtrl.fprDo_SetCandidatesFieldValues( aCandidatesField, theRetrieval, theSelection);
                        }
                    }

                    return aResultPromise;
                };
                if( fSelectionInterestedCtrlDoPromise){}/* CQT */
                aPrototype.fSelectionInterestedCtrlDoPromise = fSelectionInterestedCtrlDoPromise;













                var fNewReverseChangeListener = function( ) {

                    var aMethodName = this._v_Type + " fNewReverseChangeListener";
                    if( aMethodName){}/* CQT */

                    var aThis = this;
                    return ( function() {
                        var aThis_here = aThis;

                        var aListener = (function( theFieldsChanges) {

                            if( aThis_here.LOGEDITORVALUESCHANGELISTENED) {
                                aThis_here.pLogEvent( "EDITORVALUESCHANGELISTENED", ( theFieldsChanges || []).join( ","));
                            }

                            return aThis_here.fNewDeferredResolveWithFieldsPromise( theFieldsChanges);
                        });



                        aListener.fIdentifyingWithTitleJSON = function() {

                            var aIdentifiyingWithTitleJSON = aThis_here.fIdentifyingWithTitleJSON();

                            var anIdentifyingJSON = {
                                "type": "CandidatesEditorValuesWireChangeListener",
                                "wire": aIdentifiyingWithTitleJSON
                            };
                            if( anIdentifyingJSON){}/* CQT */
                            return anIdentifyingJSON;
                        };


                        aListener.fIdentifyingJSON = aListener.fIdentifyingWithTitleJSON;


                        return aListener;

                    })();


                };
                if( fNewReverseChangeListener){}/* CQT */
                aPrototype.fNewReverseChangeListener = fNewReverseChangeListener;












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

                    if( !this.LOGCANDIDATES2EDITORWIREEVENTS) {
                        return;
                    }

                    aPrototype._v_SuperPrototype.pLogEvent.apply( this, [ theEvent, theData, theDetails]);
                };
                if( pLogEvent){}/* CQT */
                aPrototype.pLogEvent = pLogEvent;






                return aPrototype;

            })();




            var WireCandidates2Editor_Constructor = function( theTitle, theIdentifier, theRecorder, theScope,
                                                              theWireSpec, theWireOwner,
                                                              theFromCtrl, theToCtrl) {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_WireGridWithReverseType.WireGridWithReverse_Prototype;

                this._v_Prototype = null;
                this._v_Type = null;
                this._v_Module = null;

                this._v_ReverseListener   = null;
                this._v_ReverseWired      = null;

                this._pInit_WireCandidates2Editor( theTitle, theIdentifier, theRecorder, theScope,
                                                   theWireSpec, theWireOwner,
                                                   theFromCtrl, theToCtrl);
            };
            WireCandidates2Editor_Constructor.prototype = aWireCandidates2Editor_Prototype;





            var WireCandidates2Editor_SuperPrototypeConstructor = function() {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_WireGridWithReverseType.WireGridWithReverse_Prototype;

                this._v_Prototype = aWireCandidates2Editor_Prototype;
                this._v_Type      = null;
                this._v_Module    = null;

                this._v_ReverseListener     = null;
                this._v_ReverseWired      = null;
            };
            WireCandidates2Editor_SuperPrototypeConstructor.prototype = aWireCandidates2Editor_Prototype;



            var aModule = {
                "WireCandidates2Editor_Prototype": aWireCandidates2Editor_Prototype,
                "WireCandidates2Editor_Constructor": WireCandidates2Editor_Constructor,
                "WireCandidates2Editor_SuperPrototypeConstructor": WireCandidates2Editor_SuperPrototypeConstructor
            };
            pgInitFromModuleConstants( aModule);
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;

            aWireCandidates2Editor_Prototype._v_Module = aModule;





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







