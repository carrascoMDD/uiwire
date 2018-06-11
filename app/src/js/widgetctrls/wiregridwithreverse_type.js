'use strict';

/*
 * wiregridwithreverse_type.js
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






angular.module("widgetCtrlsTypes").factory("WireGridWithReverseType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "WireGridSelectionType",
    "$timeout",
    function( theSS_typesregistry,
              theSS_Overrider,
              theSS_WireGridSelectionType,
              theSS_timeout) {




        var ModuleName     = "wiregridwithreverse_type";
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

                theToInit.LOGGRIDWITHREVERSEWIREEVENTS    = true;

                theToInit.LOGREVERSECHANGELISTENED = true;

                theToInit.LOGREVERSEUNWIRE = true;

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
                theToInit.DEFAULTTITLE = "WireGridWithReverseDefaultName";

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






            var aWireGridWithReverse_Prototype = (function() {


                var aPrototype = new theS_WireGridSelectionType.WireGridSelection_SuperPrototypeConstructor();

                pgInitFromModuleConstants( aPrototype);


                aPrototype._v_SuperPrototype = theS_WireGridSelectionType.WireGridSelection_Prototype;


                aPrototype._v_Type = "WireGridWithReverse";

                aPrototype._v_Module = null;


                aPrototype._v_ReverseListener   = null;
                aPrototype._v_ReverseWired    = null;






                var _pInit = function( theTitle, theIdentifier, theRecorder, theScope,
                                       theWireSpec, theWireOwner) {

                    this._pInit_WireGridWithReverse( theTitle, theIdentifier, theRecorder, theScope,
                        theWireSpec, theWireOwner);
                };
                if( _pInit){}/* CQT */
                aPrototype._pInit = _pInit;







                var _pInit_WireGridWithReverse = function( theTitle, theIdentifier, theRecorder, theScope,
                                                theWireSpec, theWireOwner) {

                    /* Delegate on super prototype initialization */
                    aPrototype._v_SuperPrototype._pInit_WireGridSelection.apply( this, [ theTitle, theIdentifier, theRecorder, theScope,
                        theWireSpec, theWireOwner]);

                    this._v_Prototype = aPrototype;
                    this._v_Type      = this._v_Prototype._v_Type;
                    this._v_Module    = aPrototype._v_Module;

                    this._v_ReverseListener   = null;
                    this._v_ReverseWired      = false;

                    if( this._v_ReverseListener){}/* CQT */
                };
                if( _pInit_WireGridWithReverse){}/* CQT */
                aPrototype._pInit_WireGridWithReverse = _pInit_WireGridWithReverse;







                var pDestroy = function() {

                    this.pUnwireReverse_here();

                    this._v_ReverseListener   = null;
                    this._v_ReverseWired    = null;

                    aPrototype._v_SuperPrototype.pDestroy.apply( this);
                };
                if( pDestroy){}/* CQT */
                aPrototype.pDestroy = pDestroy;






                var pUnwireReverse_here = function() {

                    if( this.LOGREVERSEUNWIRE) {
                        this.pLogEvent( "UNWIRED");
                    }

                    this._v_ReverseListener   = null;
                    this._v_ReverseWired      = false;
                };
                if( pUnwireReverse_here){}/* CQT */
                aPrototype.pUnwireReverse_here = pUnwireReverse_here;






                var pUnwire = function() {

                    this.pUnwireReverse_here();

                    aPrototype._v_SuperPrototype.pUnwire.apply( this);
                };
                if( pUnwire){}/* CQT */
                aPrototype.pUnwire = pUnwire;







                var fWireCtrl_noLog = function( theCtrl, theCtrlName) {

                    if( this._v_Wired) {
                        return true;
                    }

                    var aWireForwardResult      = this.fWireForward( theCtrl, theCtrlName);
                    if( !aWireForwardResult) {
                        return false;
                    }

                    var aWireReverse  = this.fWireReverse( theCtrl, theCtrlName);
                    if( aWireReverse){}/* CQT */

                    return aWireReverse;
                };
                if( fWireCtrl_noLog){}/* CQT */
                aPrototype.fWireCtrl_noLog = fWireCtrl_noLog;















                var fWireReverse = function( theCtrl, theCtrlName) {

                    if( this._v_ReverseWired) {
                        return true;
                    }

                    if( !this._v_WireSpec) {
                        return false;
                    }

                    var aReverseDo = this._v_WireSpec[ "reverseDo"];
                    if( !aReverseDo) {
                        return true;
                    }

                    var aToCtrl = this.fToCtrl();
                    if( !aToCtrl) {
                        return false;
                    }


                    var aChangeListener = this.fNewReverseChangeListener();
                    if( !aChangeListener) {
                        return false;
                    }

                    aToCtrl.pAddValuesChangeListener( aChangeListener);
                    this._v_ReverseListener = aChangeListener;

                    this._v_ReverseWired = true;

                    this.pLogWired( theCtrl, theCtrlName);

                    return true;
                };
                if( fWireReverse){}/* CQT */
                aPrototype.fWireReverse = fWireReverse;










                var fNewReverseChangeListener = function( ) {
                    return null;
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

                    if( !this.LOGGRIDWITHREVERSEWIREEVENTS) {
                        return;
                    }

                    aPrototype._v_SuperPrototype.pLogEvent.apply( this, [ theEvent, theData, theDetails]);
                };
                if( pLogEvent){}/* CQT */
                aPrototype.pLogEvent = pLogEvent;








                var fNewReverseUpdaterWithForm = function( theActionReport) {
                    var aMethodName = this._v_Type + " fNewCreationUpdater";
                    if( aMethodName){}/* CQT */

                    var anUpdater = null;

                    if( theActionReport) {

                        var aForm = theActionReport._v_Form;
                        if( !aForm) {
                            return null;
                        }

                        var aDoReverseTargetName = this._v_WireSpec[ "reverseDoTarget"];
                        if( !aDoReverseTargetName) {
                            aDoReverseTargetName = this._v_WireSpec[ "doTarget"];
                        }


                        if( aDoReverseTargetName) {

                            var aDoReverseTarget = null;
                            if( aDoReverseTargetName == this.DOTARGETSENTINEL_WIREOWNER) {
                                aDoReverseTarget = this._v_WireOwner;
                            }
                            else {
                                if( aDoReverseTargetName == this.DOTARGETSENTINEL_FROMCTRL) {
                                    aDoReverseTarget = this.fFromCtrl();
                                }
                                else {
                                    if( aDoReverseTargetName == this.DOTARGETSENTINEL_TOCTRL) {
                                        aDoReverseTarget = this.fToCtrl();
                                    }
                                    else {
                                        aDoReverseTarget = this._v_WireOwner[ aDoReverseTargetName];
                                    }
                                }
                            }

                            if( typeof aDoReverseTarget == "undefined") {
                                return null;
                            }


                            if( typeof aDoReverseTarget == "function") {
                                aDoReverseTarget = aDoReverseTarget();
                                if( !aDoReverseTarget) {
                                    return null;
                                }
                            }

                            var anAlternateIfNullParm = this._v_WireSpec[ "alternateIfNullParm"];
                            if( anAlternateIfNullParm) {
                                var anAlternateParmValue = aForm[ anAlternateIfNullParm];
                                if( !anAlternateParmValue) {

                                    var aReverseAlternateMethodName = this._v_WireSpec[ "alternateDo"];
                                    if( aReverseAlternateMethodName) {

                                        var aReverseAlternateMethod = aDoReverseTarget[ aReverseAlternateMethodName];
                                        if( !aReverseAlternateMethod) {
                                            return null;
                                        }

                                        if( !( typeof aReverseAlternateMethod == "function")) {
                                            return null;
                                        }

                                        anUpdater = aReverseAlternateMethod.bind( aDoReverseTarget, aForm);
                                    }
                                }
                            }

                            if( !anUpdater) {
                                var aReverseMethodName = this._v_WireSpec[ "reverseDo"];
                                if( aReverseMethodName) {

                                    var aReverseMethod = aDoReverseTarget[ aReverseMethodName];
                                    if( !aReverseMethod) {
                                        return null;
                                    }

                                    if( !( typeof aReverseMethod == "function")) {
                                        return null;
                                    }

                                    anUpdater = aReverseMethod.bind( aDoReverseTarget, aForm);
                                }
                            }
                        }
                    }




                    if( !anUpdater) {
                        var aThis = this;
                        anUpdater = (function() {
                            var aThis_here = aThis;
                            var aForm_here = aForm;
                            return ( function() {
                                return aThis_here.fNewDeferredResolveWithFieldsPromise( aForm_here);
                            });
                        })();
                    }

                    return anUpdater;
                };
                if( fNewReverseUpdaterWithForm){}/* CQT */
                aPrototype.fNewReverseUpdaterWithForm = fNewReverseUpdaterWithForm;







                return aPrototype;

            })();




            var WireGridWithReverse_Constructor = function( theTitle, theIdentifier, theRecorder, theScope,
                                                 theWireSpec, theWireOwner) {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_WireGridSelectionType.WireGridSelection_Prototype;

                this._v_Prototype = null;
                this._v_Type = null;
                this._v_Module = null;

                this._v_ReverseListener     = null;
                this._v_ReverseWired      = null;

                this._pInit_WireGridWithReverse( theTitle, theIdentifier, theRecorder, theScope,
                    theWireSpec, theWireOwner);
            };
            WireGridWithReverse_Constructor.prototype = aWireGridWithReverse_Prototype;





            var WireGridWithReverse_SuperPrototypeConstructor = function() {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_WireGridSelectionType.WireGridSelection_Prototype;

                this._v_Prototype = aWireGridWithReverse_Prototype;
                this._v_Type      = null;
                this._v_Module    = null;

                this._v_ReverseListener     = null;
                this._v_ReverseWired      = null;
            };
            WireGridWithReverse_SuperPrototypeConstructor.prototype = aWireGridWithReverse_Prototype;



            var aModule = {
                "WireGridWithReverse_Prototype": aWireGridWithReverse_Prototype,
                "WireGridWithReverse_Constructor": WireGridWithReverse_Constructor,
                "WireGridWithReverse_SuperPrototypeConstructor": WireGridWithReverse_SuperPrototypeConstructor
            };
            pgInitFromModuleConstants( aModule);
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;

            aWireGridWithReverse_Prototype._v_Module = aModule;





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







