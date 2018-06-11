'use strict';

/*
 * wirearguments2grid_type.js
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






angular.module("widgetCtrlsTypes").factory("WireArguments2GridType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "WireGridSelectionType",
    "$timeout",
    function( theSS_typesregistry,
              theSS_Overrider,
              theSS_WireGridSelectionType,
              theSS_timeout) {




        var ModuleName     = "wirearguments2grid_type";
        var ModulePackages = "widgetctrls";
        var ModuleFullName = ModulePackages + "/" + ModuleName;



        var aMod_definer = function( theS_Overrider,
                                     theS_WireGridSelectionType,
                                     $timeout) {
            if( $timeout){}/* CQT */

            if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}





            var pgInitWithModuleVariations = function( theToInit) {

                if( !theToInit) {
                    return;
                }

                theToInit.LOGARGUMENTS2GRIDEVENTS = true;

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

                theToInit.WIREKIND_ARGUMENTS2GRID = "ARGUMENTS2GRID";
                theToInit.WIREKIND = theToInit.WIREKIND_ARGUMENTS2GRID;


                theToInit.DEFAULTTITLE = "WireArguments2GridDefaultName";

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






            var aWireArguments2Grid_Prototype = (function() {


                var aPrototype = new theS_WireGridSelectionType.WireGridSelection_SuperPrototypeConstructor();

                pgInitFromModuleConstants( aPrototype);


                aPrototype._v_SuperPrototype = theS_WireGridSelectionType.WireGridSelection_Prototype;


                aPrototype._v_Type = "WireArguments2Grid";

                aPrototype._v_Module = null;






                var _pInit = function( theTitle, theIdentifier, theRecorder, theScope,
                                       theWireSpec, theWireOwner) {

                    this._pInit_WireArguments2Grid( theTitle, theIdentifier, theRecorder, theScope,
                        theWireSpec, theWireOwner);
                };
                if( _pInit){}/* CQT */
                aPrototype._pInit = _pInit;






                var _pInit_WireArguments2Grid = function( theTitle, theIdentifier, theRecorder, theScope,
                                                 theWireSpec, theWireOwner) {

                    /* Delegate on super prototype initialization */
                    aPrototype._v_SuperPrototype._pInit_WireGridSelection.apply( this, [ theTitle, theIdentifier, theRecorder, theScope,
                                                                                 theWireSpec, theWireOwner]);

                    this._v_Prototype = aPrototype;
                    this._v_Type      = this._v_Prototype._v_Type;
                    this._v_Module    = aPrototype._v_Module;

                    this._v_WireKind = this.WIREKIND_ARGUMENTS2GRID;

                    if( this._v_WireKind){}/* CQT */
                };
                if( _pInit_WireArguments2Grid){}/* CQT */
                aPrototype._pInit_WireArguments2Grid = _pInit_WireArguments2Grid;









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


                    var aChangeListener = this.fNewArgumentsChangeListener();
                    if( !aChangeListener) {
                        return false;
                    }


                    aFromCtrl.pAddValuesChangeListener( aChangeListener);
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

                    var aToName = this._v_WireSpec[ "from"];
                    if( !aToName) {
                        return null;
                    }

                    if( !this._v_WireOwner) {
                        return null;
                    }

                    this._v_FromCtrl = this._v_WireOwner.fEditorCtrlNamed( aToName);

                    return this._v_FromCtrl;
                };
                if( fFromCtrl){}/* CQT */
                aPrototype.fFromCtrl = fFromCtrl;



                
                


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

                    this._v_ToCtrl = this._v_WireOwner.fGridCtrlNamed( aToName);

                    return this._v_ToCtrl;
                };
                if( fToCtrl){}/* CQT */
                aPrototype.fToCtrl = fToCtrl;















                var fArgumentsInterestedCtrlDoPromise = function( theRetrieval, theArguments) {

                    var aResultPromise = null;

                    var aToCtrl = this.fToCtrl();
                    if( !aToCtrl) {
                        aResultPromise = theRetrieval();
                    }
                    else {

                        /* ACV OJO ToDo 201410291511 Optional master selection
                        */

                        var aRetrieval = theRetrieval;

                        if( !theArguments) {
                            var aToCtrlOwnRetrieval = aToCtrl.fOwnGridRetrieval();
                            if( aToCtrlOwnRetrieval) {
                                aRetrieval = aToCtrlOwnRetrieval;
                            }
                        }

                        aResultPromise = aToCtrl.fprDo_RetrieveRows( aRetrieval, theArguments);
                    }

                    return aResultPromise;
                };
                if( fArgumentsInterestedCtrlDoPromise){}/* CQT */
                aPrototype.fArgumentsInterestedCtrlDoPromise = fArgumentsInterestedCtrlDoPromise;













                var fNewArgumentsChangeListener = function( ) {
                    var aMethodName = this._v_Type + " fNewArgumentsChangeListener";

                    var aThis = this;
                    return ( function() {
                        var aThis_here = aThis;
                        var aMethodName_here = aMethodName;

                        var aListener = (function( theChangedArgumentNames) {
                            if( theChangedArgumentNames){}/* CQT */

                            if( aThis_here.LOGARGUMENTS2GRIDEVENTS) {
                                aThis_here.pLogEvent( aThis_here.EVENTKIND_ARGUMENTSCHANGELISTENED, theChangedArgumentNames, null);
                            }



                            var aToCtrl = aThis_here.fToCtrl();
                            if( !aToCtrl) {
                                console.log( "\n\nACV OJO 201412120120 Now detecting !aThis_here.fToCtrl()\n\n");

                                return aThis_here.fNewDeferredRejectPromise( aMethodName_here + " !aThis_here.fToCtrl()");
                            }




                            if( theChangedArgumentNames == null) {
                                console.log( "ACV OJO 201503122310 theChangedArgumentNames == null to pass null , diferent from arguments_ctrl_type fprDo_ArgumentsAny SOMETHINGNOTNULLbecauseNullIsUsedToPassANullToListeners");

                                var aToCtrlOwnRetrieval = aToCtrl.fOwnGridRetrieval();
                                if( !aToCtrlOwnRetrieval) {
                                    return aThis_here.fNewDeferredResolveWithNullPromise();
                                }

                                var anOwnRetrievalPromise = aToCtrl.fprDo_RetrieveRows( aToCtrlOwnRetrieval, null);

                                return anOwnRetrievalPromise;
                            }



                            var aFromCtrl = aThis_here.fFromCtrl();
                            if( !aFromCtrl) {
                                return aThis_here.fNewDeferredRejectPromise( aMethodName_here + " !aThis_here.fFromCtrl()");
                            }


                            var someEditableFields = aFromCtrl.fEditableFields();

                            if( typeof someEditableFields == "undefined") {
                                return aThis_here.fNewDeferredRejectPromise( aMethodName_here + " typeof aSelection == 'undefined'");
                            }


                            var aWith = someEditableFields;
                            if( someEditableFields) {
                                var aWithName = aThis_here._v_WireSpec[ "with"];
                                if( aWithName) {
                                    aWith = someEditableFields[ aWithName];
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

                                        var aQueryValueSupplier = someEditableFields;
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


                            var aResultPromise = aThis_here.fArgumentsInterestedCtrlDoPromise( aRetrieval, theChangedArgumentNames);
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
                if( fNewArgumentsChangeListener){}/* CQT */
                aPrototype.fNewArgumentsChangeListener = fNewArgumentsChangeListener;















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

                    if( !this.LOGARGUMENTS2GRIDEVENTS) {
                        return;
                    }

                    aPrototype._v_SuperPrototype.pLogEvent.apply( this, [ theEvent, theData, theDetails]);
                };
                if( pLogEvent){}/* CQT */
                aPrototype.pLogEvent = pLogEvent;



                
                
                
                
                
                
                
                
                
                
                
                
                
                


                return aPrototype;

            })();




            var WireArguments2Grid_Constructor = function( theTitle, theIdentifier, theRecorder, theScope,
                                                  theWireSpec, theWireOwner) {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_WireGridSelectionType.WireGridSelection_Prototype;

                this._v_Prototype = null;
                this._v_Type = null;
                this._v_Module = null;

                this._pInit_WireArguments2Grid( theTitle, theIdentifier, theRecorder, theScope,
                    theWireSpec, theWireOwner);
            };
            WireArguments2Grid_Constructor.prototype = aWireArguments2Grid_Prototype;





            var WireArguments2Grid_SuperPrototypeConstructor = function() {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_WireGridSelectionType.WireGridSelection_Prototype;

                this._v_Prototype = aWireArguments2Grid_Prototype;
                this._v_Type      = null;
                this._v_Module    = null;
            };
            WireArguments2Grid_SuperPrototypeConstructor.prototype = aWireArguments2Grid_Prototype;



            var aModule = {
                "WireArguments2Grid_Prototype": aWireArguments2Grid_Prototype,
                "WireArguments2Grid_Constructor": WireArguments2Grid_Constructor,
                "WireArguments2Grid_SuperPrototypeConstructor": WireArguments2Grid_SuperPrototypeConstructor
            };
            pgInitFromModuleConstants( aModule);
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;

            aWireArguments2Grid_Prototype._v_Module = aModule;





            return aModule;
        };







        var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        if( !anExistingModule) {

            var aModule = aMod_definer(
                theSS_Overrider,
                theSS_WireGridSelectionType,
                theSS_timeout
            );
            anExistingModule = aModule;

            theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
        }






        return anExistingModule;

    }]);







