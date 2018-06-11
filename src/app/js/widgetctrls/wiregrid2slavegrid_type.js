'use strict';

/*
 * wiregrid2slavegrid_type.js
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






angular.module("widgetCtrlsTypes").factory("WireGrid2SlaveGridType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "WireGridSelectionType",
    "$timeout",
    function( theSS_typesregistry,
              theSS_Overrider,
              theSS_WireGridSelectionType,
              theSS_timeout) {




        var ModuleName     = "wiregrid2slavegrid_type";
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

                theToInit.LOGGRID2SLAVEGRIDEVENTS = true;

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

                theToInit.WIREKIND_GRID2SLAVEGRID = "GRID2SLAVEGRID";
                theToInit.WIREKIND = theToInit.WIREKIND_GRID2SLAVEGRID;


                theToInit.DEFAULTTITLE = "WireGrid2SlaveGridDefaultName";

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






            var aWireGrid2SlaveGrid_Prototype = (function() {


                var aPrototype = new theS_WireGridSelectionType.WireGridSelection_SuperPrototypeConstructor();

                pgInitFromModuleConstants( aPrototype);


                aPrototype._v_SuperPrototype = theS_WireGridSelectionType.WireGridSelection_Prototype;


                aPrototype._v_Type = "WireGrid2SlaveGrid";

                aPrototype._v_Module = null;






                var _pInit = function( theTitle, theIdentifier, theRecorder, theScope,
                                       theWireSpec, theWireOwner) {

                    this._pInit_WireGrid2SlaveGrid( theTitle, theIdentifier, theRecorder, theScope,
                        theWireSpec, theWireOwner);
                };
                if( _pInit){}/* CQT */
                aPrototype._pInit = _pInit;






                var _pInit_WireGrid2SlaveGrid = function( theTitle, theIdentifier, theRecorder, theScope,
                                                 theWireSpec, theWireOwner) {

                    /* Delegate on super prototype initialization */
                    aPrototype._v_SuperPrototype._pInit_WireGridSelection.apply( this, [ theTitle, theIdentifier, theRecorder, theScope,
                                                                                 theWireSpec, theWireOwner]);

                    this._v_Prototype = aPrototype;
                    this._v_Type      = this._v_Prototype._v_Type;
                    this._v_Module    = aPrototype._v_Module;

                    this._v_WireKind = this.WIREKIND_GRID2SLAVEGRID;

                    if( this._v_WireKind){}/* CQT */
                };
                if( _pInit_WireGrid2SlaveGrid){}/* CQT */
                aPrototype._pInit_WireGrid2SlaveGrid = _pInit_WireGrid2SlaveGrid;








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








                var fSelectionInterestedCtrlDoPromise = function( theRetrieval, theSelection) {
                    if( theSelection){}/* CQT */

                    var aResultPromise = null;

                    var aToCtrl = this.fToCtrl();
                    if( !aToCtrl) {
                        aResultPromise = theRetrieval();
                    }
                    else {

                        /* ACV OJO ToDo 201410291511 Optional master selection
                        */

                        var aRetrieval = theRetrieval;

                        if( !theSelection) {
                            var aToCtrlOwnRetrieval = aToCtrl.fOwnGridRetrieval();
                            if( aToCtrlOwnRetrieval) {
                                aRetrieval = aToCtrlOwnRetrieval;
                            }
                        }

                        aResultPromise = aToCtrl.fprDo_RetrieveRows( aRetrieval, theSelection);
                    }

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

                    if( !this.LOGGRID2SLAVEGRIDEVENTS) {
                        return;
                    }

                    aPrototype._v_SuperPrototype.pLogEvent.apply( this, [ theEvent, theData, theDetails]);
                };
                if( pLogEvent){}/* CQT */
                aPrototype.pLogEvent = pLogEvent;





                return aPrototype;

            })();




            var WireGrid2SlaveGrid_Constructor = function( theTitle, theIdentifier, theRecorder, theScope,
                                                  theWireSpec, theWireOwner) {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_WireGridSelectionType.WireGridSelection_Prototype;

                this._v_Prototype = null;
                this._v_Type = null;
                this._v_Module = null;

                this._pInit_WireGrid2SlaveGrid( theTitle, theIdentifier, theRecorder, theScope,
                    theWireSpec, theWireOwner);
            };
            WireGrid2SlaveGrid_Constructor.prototype = aWireGrid2SlaveGrid_Prototype;





            var WireGrid2SlaveGrid_SuperPrototypeConstructor = function() {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_WireGridSelectionType.WireGridSelection_Prototype;

                this._v_Prototype = aWireGrid2SlaveGrid_Prototype;
                this._v_Type      = null;
                this._v_Module    = null;
            };
            WireGrid2SlaveGrid_SuperPrototypeConstructor.prototype = aWireGrid2SlaveGrid_Prototype;



            var aModule = {
                "WireGrid2SlaveGrid_Prototype": aWireGrid2SlaveGrid_Prototype,
                "WireGrid2SlaveGrid_Constructor": WireGrid2SlaveGrid_Constructor,
                "WireGrid2SlaveGrid_SuperPrototypeConstructor": WireGrid2SlaveGrid_SuperPrototypeConstructor
            };
            pgInitFromModuleConstants( aModule);
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;

            aWireGrid2SlaveGrid_Prototype._v_Module = aModule;





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







