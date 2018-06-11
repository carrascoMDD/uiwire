'use strict';

/*
 * wirecommon_type.js
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






angular.module("widgetCtrlsTypes").factory("WireCommonType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "CommonCtrlType",
    "$timeout",
    function( theSS_typesregistry,
              theSS_Overrider,
              theSS_CommonCtrlType,
              theSS_timeout) {




        var ModuleName     = "WireCommon";
        var ModulePackages = "widgetctrls";
        var ModuleFullName = ModulePackages + "/" + ModuleName;



        var aMod_definer = function( theS_Overrider,
                                     theS_CommonCtrlType,
                                     $timeout) {
            if( $timeout){}/* CQT */

            if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}





            var pgInitWithModuleVariations = function( theToInit) {

                if( !theToInit) {
                    return;
                }

                theToInit.LOGEVENTS         = true;
                theToInit.LOGUNWIRE         = true;
                theToInit.LOGWIRED          = true;
                theToInit.LOGCHANGELISTENED = true;


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
                theToInit.DEFAULTTITLE = "WireCommonDefaultName";

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






            var aWireCommon_Prototype = (function() {


                var aPrototype = new theS_CommonCtrlType.CommonCtrl_SuperPrototypeConstructor();

                pgInitFromModuleConstants( aPrototype);


                aPrototype._v_SuperPrototype = theS_CommonCtrlType.CommonCtrl_Prototype;


                aPrototype._v_Type = "WireCommon";

                aPrototype._v_Module = null;


                aPrototype._v_WireKind  = null;

                aPrototype._v_WireSpec  = null;
                aPrototype._v_WireOwner = null;

                aPrototype._v_FromCtrl = null;
                aPrototype._v_ToCtrl   = null;

                aPrototype._v_ChangeListener = null;
                aPrototype._v_Wired          = null;





                var _pInit = function( theTitle, theIdentifier, theRecorder, theScope,
                                       theWireSpec, theWireOwner) {

                    this._pInit_WireCommon( theTitle, theIdentifier, theRecorder, theScope,
                        theWireSpec, theWireOwner);
                };
                if( _pInit){}/* CQT */
                aPrototype._pInit = _pInit;







                var _pInit_WireCommon = function( theTitle, theIdentifier, theRecorder, theScope,
                                                 theWireSpec, theWireOwner) {

                    /* Delegate on super prototype initialization */
                    aPrototype._v_SuperPrototype._pInit_CommonCtrl.apply( this, [ theTitle, theIdentifier, theRecorder, theScope]);

                    this._v_Prototype = aPrototype;
                    this._v_Type      = this._v_Prototype._v_Type;
                    this._v_Module    = aPrototype._v_Module;

                    this._v_WireKind = null;

                    this._v_WireSpec   = theWireSpec;
                    this._v_WireOwner  = theWireOwner;

                    this._v_FromCtrl   = null;
                    this._v_ToCtrl     = null;

                    this._v_ChangeListener = null;
                    this._v_Wired          = false;

                    if( this._v_ChangeListener){}/* CQT */
                };
                if( _pInit_WireCommon){}/* CQT */
                aPrototype._pInit_WireCommon = _pInit_WireCommon;









                var pDestroy = function() {

                    this.pUnwire_here();

                    this._v_WireKind  = null;

                    this._v_WireSpec  = null;
                    this._v_WireOwner = null;

                    this._v_FromCtrl = null;
                    this._v_ToCtrl   = null;

                    this._v_ChangeListener = null;
                    this._v_Wired          = null;
                    
                    aPrototype._v_SuperPrototype.pDestroy.apply( this);
                };
                if( pDestroy){}/* CQT */
                aPrototype.pDestroy = pDestroy;






                var pUnwire_here = function() {

                    if( this.LOGUNWIRE) {
                        this.pLogEvent( this.EVENTKIND_UNWIRED);
                    }

                    this._v_FromCtrl = null;
                    this._v_ToCtrl   = null;

                    this._v_ChangeListener = null;
                    this._v_Wired          = false;
                };
                if( pUnwire_here){}/* CQT */
                aPrototype.pUnwire_here = pUnwire_here;







                var pUnwire = function() {

                    this.pUnwire_here();

                    aPrototype._v_SuperPrototype.pUnwire.apply( this);
                };
                if( pUnwire){}/* CQT */
                aPrototype.pUnwire = pUnwire;








                var fWireOwner = function() {

                    return this._v_WireOwner;
                };
                if( fWireOwner){}/* CQT */
                aPrototype.fWireOwner = fWireOwner;








                var fWireCtrl = function( theCtrl, theCtrlName) {

                    if( this._v_Wired) {
                        return true;
                    }

                    if( this.fWireCtrl_noLog( theCtrl, theCtrlName)) {
                        this.pLogWired( theCtrl, theCtrlName);
                        return true;
                    }

                    return false;
                };
                if( fWireCtrl){}/* CQT */
                aPrototype.fWireCtrl = fWireCtrl;








                var fWireCtrl_noLog = function( theCtrl, theCtrlName) {
                    if( theCtrl){}/* CQT */
                    if( theCtrlName){}/* CQT */

                    return true;
                };
                if( fWireCtrl_noLog){}/* CQT */
                aPrototype.fWireCtrl_noLog = fWireCtrl_noLog;










                var pLogWired = function( theCtrl, theCtrlName) {

                    if( this.LOGWIRED) {
                        var aLogDetails = this.fWiredLogEntry( theCtrl, theCtrlName);
                        if( aLogDetails){}/* CQT */

                        this.pLogEvent( this.EVENTKIND_WIRED, theCtrlName, aLogDetails);
                    }
                };
                if( pLogWired){}/* CQT */
                aPrototype.pLogWired = pLogWired;









                var fWiredLogEntry = function( theCtrl, theCtrlName) {
                    if( theCtrl){}/* CQT */

                    var aLogDetails = {
                        "wiringCtrlNamed": theCtrlName
                    };


                    if( this._v_FromCtrl) {
                        if( this._v_FromCtrl.fIdentifyingWithTitleJSON) {
                            aLogDetails[ "from"] = this._v_FromCtrl.fIdentifyingWithTitleJSON();
                        }
                        else {
                            if( this._v_FromCtrl._v_Title) {
                                aLogDetails[ "from"] = this._v_FromCtrl._v_Title;
                            }
                            else {
                                aLogDetails[ "from"] = this._v_FromCtrl.toString();
                            }
                        }
                    }


                    if( this._v_ToCtrl) {
                        if( this._v_ToCtrl.fIdentifyingWithTitleJSON) {
                            aLogDetails[ "to"] = this._v_ToCtrl.fIdentifyingWithTitleJSON();
                        }
                        else {
                            if( this._v_ToCtrl._v_Title) {
                                aLogDetails[ "to"] = this._v_ToCtrl._v_Title;
                            }
                            else {
                                aLogDetails[ "to"] = this._v_ToCtrl.toString();
                            }
                        }
                    }

                    if( this._v_WireSpec) {
                        aLogDetails[ "spec"] = this._v_WireSpec;
                    }

                    aLogDetails.fAsLogObject = function() { return aLogDetails};

                    return aLogDetails;
                };
                if( fWiredLogEntry){}/* CQT */
                aPrototype.fWiredLogEntry = fWiredLogEntry;










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

                    var aMethodName = this._v_Type + " fprDo_Wire";

                    if( !this.fWireCtrl( theCtrl)) {
                        this.pDeferredReject( aDeferred, aMethodName + "!this.fWireCtrl( theCtrl)");
                        return aDeferred.promise;
                    }

                    return this.fNewDeferredResolveWithNothingPromise();
                };
                if( fprDo_Wire){}/* CQT */
                aPrototype.fprDo_Wire = fprDo_Wire;








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






            var WireCommon_Constructor = function( theTitle, theIdentifier, theRecorder, theScope,
                                                  theWireSpec, theWireOwner) {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_CommonCtrlType.CommonCtrl_Prototype;

                this._v_Prototype = null;
                this._v_Type = null;
                this._v_Module = null;

                this._v_WireKind  = null;

                this._v_WireSpec   = null;
                this._v_WireOwner  = null;

                this._v_FromCtrl   = null;
                this._v_ToCtrl     = null;

                this._v_ChangeListener = null;
                this._v_Wired          = null;

                this._pInit_WireCommon( theTitle, theIdentifier, theRecorder, theScope,
                    theWireSpec, theWireOwner);
            };
            WireCommon_Constructor.prototype = aWireCommon_Prototype;





            var WireCommon_SuperPrototypeConstructor = function() {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_CommonCtrlType.CommonCtrl_Prototype;

                this._v_Prototype = aWireCommon_Prototype;
                this._v_Type      = null;
                this._v_Module    = null;

                this._v_WireKind  = null;

                this._v_WireSpec   = null;
                this._v_WireOwner  = null;

                this._v_FromCtrl   = null;
                this._v_ToCtrl     = null;

                this._v_ChangeListener = null;
                this._v_Wired          = null;
            };
            WireCommon_SuperPrototypeConstructor.prototype = aWireCommon_Prototype;



            var aModule = {
                "WireCommon_Prototype": aWireCommon_Prototype,
                "WireCommon_Constructor": WireCommon_Constructor,
                "WireCommon_SuperPrototypeConstructor": WireCommon_SuperPrototypeConstructor,
                "pgInitFromModuleConstants": pgInitFromModuleConstants
            };
            pgInitFromModuleConstants( aModule);
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;

            aWireCommon_Prototype._v_Module = aModule;





            return aModule;
        };







        var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        if( !anExistingModule) {

            var aModule = aMod_definer(
                theSS_Overrider,
                theSS_CommonCtrlType,
                theSS_timeout
            );
            anExistingModule = aModule;

            theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
        }






        return anExistingModule;

    }]);







