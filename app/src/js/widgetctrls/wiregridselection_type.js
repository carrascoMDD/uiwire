'use strict';

/*
 * wiregridselection_type.js
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






angular.module("widgetCtrlsTypes").factory("WireGridSelectionType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "WireCommonType",
    "$timeout",
    function( theSS_typesregistry,
              theSS_Overrider,
              theSS_WireCommonType,
              theSS_timeout) {




        var ModuleName     = "wiregridselection_type";
        var ModulePackages = "widgetctrls";
        var ModuleFullName = ModulePackages + "/" + ModuleName;



        var aMod_definer = function( theS_Overrider,
                                     theS_WireCommonType,
                                     $timeout) {
            if( $timeout){}/* CQT */

            if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}





            var pgInitWithModuleVariations = function( theToInit) {

                if( !theToInit) {
                    return;
                }

                theToInit.LOGGRIDSELECTIONEVENTS = true;

                theToInit.LOGGRIDSELECTIONCHANGELISTENED = true;

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

                theToInit.DEFAULTTITLE = "WireGridSelectionDefaultName";



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






            var aWireGridSelection_Prototype = (function() {


                var aPrototype = new theS_WireCommonType.WireCommon_SuperPrototypeConstructor();

                pgInitFromModuleConstants( aPrototype);


                aPrototype._v_SuperPrototype = theS_WireCommonType.WireCommon_Prototype;


                aPrototype._v_Type = "WireGridSelection";

                aPrototype._v_Module = null;






                var _pInit = function( theTitle, theIdentifier, theRecorder, theScope,
                                       theWireSpec, theWireOwner) {

                    this._pInit_WireGridSelection( theTitle, theIdentifier, theRecorder, theScope,
                        theWireSpec, theWireOwner);
                };
                if( _pInit){}/* CQT */
                aPrototype._pInit = _pInit;






                var _pInit_WireGridSelection = function( theTitle, theIdentifier, theRecorder, theScope,
                                                 theWireSpec, theWireOwner) {

                    /* Delegate on super prototype initialization */
                    aPrototype._v_SuperPrototype._pInit_WireCommon.apply( this, [ theTitle, theIdentifier, theRecorder, theScope,
                                                                                 theWireSpec, theWireOwner]);

                    this._v_Prototype = aPrototype;
                    this._v_Type      = this._v_Prototype._v_Type;
                    this._v_Module    = aPrototype._v_Module;

                    this._v_WireKind = null;

                };
                if( _pInit_WireGridSelection){}/* CQT */
                aPrototype._pInit_WireGridSelection = _pInit_WireGridSelection;









                var fWireCtrl_noLog = function( theCtrl, theCtrlName) {

                    var aGridToGridWireResult = this.fWireForward( theCtrl, theCtrlName);
                    if( aGridToGridWireResult){}/* CQT */

                    return aGridToGridWireResult;
                };
                if( fWireCtrl_noLog){}/* CQT */
                aPrototype.fWireCtrl_noLog = fWireCtrl_noLog;








                var fWireForward = function( theCtrl, theCtrlName) {

                    if( this._v_Wired) {
                        return true;
                    }

                    if( !theCtrl) {
                        return false;
                    }

                    if( !theCtrlName) {
                        return false;
                    }

                    if( !this._v_WireSpec) {
                        return false;
                    }

                    if( !this._v_WireOwner) {
                        return false;
                    }

                    var aFromCtrl = this.fFromCtrl();
                    if( !aFromCtrl) {
                        return false;
                    }

                    var aToCtrl = this.fToCtrl();
                    if( !aToCtrl) {
                        return false;
                    }


                    var aChangeListener = this.fNewGridSelectionChangeListener();
                    if( !aChangeListener) {
                        return false;
                    }


                    aFromCtrl.pAddSelectionChangeListener( aChangeListener);
                    this._v_ChangeListener = aChangeListener;

                    this._v_Wired = true;

                    return true;
                };
                if( fWireForward){}/* CQT */
                aPrototype.fWireForward = fWireForward;







                var fFromCtrl = function() {

                    if( this._v_FromCtrl) {
                        return this._v_FromCtrl;
                    }

                    var aFromName = this._v_WireSpec[ "from"];
                    if( !aFromName) {
                        return null;
                    }

                    this._v_FromCtrl = this._v_WireOwner.fGridCtrlNamed( aFromName);

                    return this._v_FromCtrl;
                };
                if( fFromCtrl){}/* CQT */
                aPrototype.fFromCtrl = fFromCtrl;







                var fToCtrl = function() {

                    return null;
                };
                if( fToCtrl){}/* CQT */
                aPrototype.fToCtrl = fToCtrl;








                var fNewGridSelectionChangeListener = function( ) {
                    var aMethodName = this._v_Type + " fNewGridSelectionChangeListener";

                    var aThis = this;
                    return ( function() {
                        var aThis_here = aThis;
                        var aMethodName_here = aMethodName;

                        var aListener = (function( theRowsOrSelection, theMayBeSelectionIndex) {
                            if( theRowsOrSelection){}/* CQT */
                            if( theMayBeSelectionIndex){}/* CQT */


                            if( aThis_here.LOGGRIDSELECTIONCHANGELISTENED) {
                                aThis_here.pLogEvent( aThis_here.EVENTKIND_GRIDSELECTIONCHANGELISTENED, theRowsOrSelection, theMayBeSelectionIndex);
                            }


                            var aFromCtrl = aThis_here.fFromCtrl();
                            if( !aFromCtrl) {
                                return aThis_here.fNewDeferredRejectPromise( aMethodName_here + " !aThis_here.fFromCtrl()");
                            }

                            var aToCtrl = aThis_here.fToCtrl();
                            if( !aToCtrl) {
                                console.log( "\n\nACV OJO 201412120120 Now detecting !aThis_here.fToCtrl()\n\n");

                                return aThis_here.fNewDeferredRejectPromise( aMethodName_here + " !aThis_here.fToCtrl()");
                            }

                            var aSelection = aFromCtrl.fSelection();

                            if( typeof aSelection == "undefined") {
                                return aThis_here.fNewDeferredRejectPromise( aMethodName_here + " typeof aSelection == 'undefined'");
                            }


                            var aWith = aSelection;
                            if( aSelection) {
                                var aWithName = aThis_here._v_WireSpec[ "with"];
                                if( aWithName) {
                                    aWith = aSelection[ aWithName];
                                    if( typeof aWith == "undefined") {
                                        console.log( "\n\nACV OJO 201410311611 " + aMethodName_here + " typeof aWith == 'undefined'\n\n");
                                        return aThis_here.fNewDeferredRejectPromise( aMethodName_here + " typeof aWith == 'undefined'");
                                    }

                                    console.log( "NOT DOING ACV OJO 201410131433 if( aWith == null) { aThis_here.pDeferredResolveWithNull( aDeferred); return aDeferred.promise;}");
                                    /* ACV OJO 201410131433
                                     if( aWith == null) {
                                     aThis_here.pDeferredResolveWithNull( aDeferred);

                                     return aDeferred.promise;
                                     }
                                     */
                                }


                                var aQuery = aThis_here._v_WireSpec[ "query"];
                                if( aQuery) {

                                    var aWithQuery = { };

                                    var someQueryKeys = Object.keys( aQuery);
                                    var aNumQueryKeys = someQueryKeys.length;
                                    for( var aQueryKeyIdx=0; aQueryKeyIdx < aNumQueryKeys; aQueryKeyIdx++) {

                                        var aQueryKey   = someQueryKeys[ aQueryKeyIdx];
                                        var aQueryValue = aQuery[ aQueryKey];

                                        var aQueryEntryWithName = aQueryValue;

                                        var aQueryValueSupplier = aSelection;
                                        if( aQueryValue.indexOf( aThis_here.RETRIEVALWITHPARENTSENTINEL) == 0) {
                                            aQueryEntryWithName = aQueryValue.replace( aThis_here.RETRIEVALWITHPARENTSENTINEL, "");
                                            if( aThis_here._v_FromCtrl && aThis_here._v_FromCtrl.fParentCtrl) {
                                                aQueryValueSupplier = aThis_here._v_FromCtrl.fParentCtrl();
                                            }
                                        }

                                        if( aQueryValueSupplier) {
                                            var aQueryEntryWithValue = aQueryValueSupplier[ aQueryEntryWithName];
                                            if( !( typeof aQueryEntryWithValue == "undefined")) {
                                                aWithQuery[ aQueryKey] = aQueryEntryWithValue;
                                            }
                                        }
                                    }


                                    aWith = aWithQuery;

                                    if( Object.keys( aWithQuery).length < 1) {
                                        console.log( "\n\nACV OJO 201410311611 " + aMethodName_here + " Object.keys( aWithQuery).length < 1'\n\n");
                                        return aThis_here.fNewDeferredRejectPromise( aMethodName_here + " Object.keys( aWithQuery).length < 1");
                                    }
                                }
                            }


                            var aRetrieval = null;




                            var aDoTargetName = aThis_here._v_WireSpec[ "doTarget"];
                            if( aDoTargetName) {

                                var aDoTarget = null;
                                if( aDoTargetName == aThis_here.DOTARGETSENTINEL_WIREOWNER) {
                                    aDoTarget = aThis_here._v_WireOwner;
                                }
                                else {
                                    if( aDoTargetName == aThis_here.DOTARGETSENTINEL_FROMCTRL) {
                                        aDoTarget = aFromCtrl;
                                    }
                                    else {
                                        if( aDoTargetName == aThis_here.DOTARGETSENTINEL_TOCTRL) {
                                            aDoTarget = aToCtrl;
                                        }
                                        else {
                                            aDoTarget = aThis_here._v_WireOwner[ aDoTargetName];
                                        }
                                    }
                                }

                                if( typeof aDoTarget == "undefined") {
                                    return aThis_here.fNewDeferredResolveWhenInDoubtPromise( aWith);
                                }

                                if( typeof aDoTarget == "function") {
                                    aDoTarget = aDoTarget();
                                    if( !aDoTarget) {
                                        return aThis_here.fNewDeferredResolveWhenInDoubtPromise( aWith);
                                    }
                                }




                                var aMethodToDoName = aThis_here._v_WireSpec[ "do"];
                                if( aMethodToDoName) {

                                    var aMethod = aDoTarget[ aMethodToDoName];
                                    if( !aMethod) {
                                        return aThis_here.fNewDeferredRejectPromise( aMethodName_here + " typeof aDoTarget[ " + aMethodToDoName + "] == 'undefined'");
                                    }

                                    if( !( typeof aMethod == "function")) {
                                        return aThis_here.fNewDeferredRejectPromise( aMethodName_here + "!( typeof aMethod == 'function')");
                                    }

                                    aRetrieval = aMethod.bind( aDoTarget, aWith);
                                }
                            }

                            if( !aRetrieval) {
                                var aWOretrieval = (function() {
                                    var aWith_here = aWith;
                                    return ( function() {
                                        return aThis_here.fNewDeferredResolveWhenInDoubtPromise( aWith_here);
                                    });
                                })();
                                if( aWOretrieval){}/* CQT */
                                aRetrieval = aWOretrieval;
                            }


                            var aResultPromise = aThis_here.fSelectionInterestedCtrlDoPromise( aRetrieval, aSelection);
                            if( aResultPromise){}/* CQT */

                            return aResultPromise;
                        });



                        aListener.fIdentifyingWithTitleJSON = function() {

                            var aIdentifiyingWithTitleJSON = aThis_here.fIdentifyingWithTitleJSON();

                            var anIdentifyingJSON = {
                                "type": "WireChangeListener",
                                "wire": aIdentifiyingWithTitleJSON
                            };
                            if( anIdentifyingJSON){}/* CQT */
                            return anIdentifyingJSON;
                        };


                        aListener.fIdentifyingJSON = aListener.fIdentifyingWithTitleJSON;


                        return aListener;

                    })();
                };
                if( fNewGridSelectionChangeListener){}/* CQT */
                aPrototype.fNewGridSelectionChangeListener = fNewGridSelectionChangeListener;













                var fSelectionInterestedCtrlDoPromise = function( theRetrieval, theSelecion) {
                    if( theSelecion){}/* CQT */

                    var aResultPromise = theRetrieval();
                    if( aResultPromise){}/* CQT */

                    return aResultPromise;
                };
                if( fSelectionInterestedCtrlDoPromise){}/* CQT */
                aPrototype.fSelectionInterestedCtrlDoPromise = fSelectionInterestedCtrlDoPromise;









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

                    if( !this.LOGGRIDSELECTIONEVENTS) {
                        return;
                    }

                    aPrototype._v_SuperPrototype.pLogEvent.apply( this, [ theEvent, theData, theDetails]);
                };
                if( pLogEvent){}/* CQT */
                aPrototype.pLogEvent = pLogEvent;





                return aPrototype;

            })();




            var WireGridSelection_Constructor = function( theTitle, theIdentifier, theRecorder, theScope,
                                                  theWireSpec, theWireOwner) {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_WireCommonType.WireCommon_Prototype;

                this._v_Prototype = null;
                this._v_Type = null;
                this._v_Module = null;

                this._pInit_WireGridSelection( theTitle, theIdentifier, theRecorder, theScope,
                    theWireSpec, theWireOwner);
            };
            WireGridSelection_Constructor.prototype = aWireGridSelection_Prototype;





            var WireGridSelection_SuperPrototypeConstructor = function() {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_WireCommonType.WireCommon_Prototype;

                this._v_Prototype = aWireGridSelection_Prototype;
                this._v_Type      = null;
                this._v_Module    = null;
            };
            WireGridSelection_SuperPrototypeConstructor.prototype = aWireGridSelection_Prototype;



            var aModule = {
                "WireGridSelection_Prototype": aWireGridSelection_Prototype,
                "WireGridSelection_Constructor": WireGridSelection_Constructor,
                "WireGridSelection_SuperPrototypeConstructor": WireGridSelection_SuperPrototypeConstructor,
                "pgInitFromModuleConstants":  pgInitFromModuleConstants
            };
            pgInitFromModuleConstants( aModule);
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;


            aWireGridSelection_Prototype._v_Module = aModule;





            return aModule;
        };







        var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        if( !anExistingModule) {

            var aModule = aMod_definer(
                theSS_Overrider,
                theSS_WireCommonType,
                theSS_timeout
            );
            anExistingModule = aModule;

            theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
        }






        return anExistingModule;

    }]);







