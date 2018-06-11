'use strict';

/*
 * composite_ctrl_type.js
 *
 * Creado @author Antonio Carrasco Valero 201410102047
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






angular.module("widgetCtrlsTypes").factory("CompositeCtrlType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "ActionsCtrlType",
    "WireGrid2SlaveGridType",
    "WireGrid2CreatorType",
    "WireGrid2EditorType",
    "WireArguments2GridType",
    "$q",
    "$timeout",
function( theSS_typesregistry,
          theSS_Overrider,
          theSS_ActionsCtrlType,
          theSS_WireGrid2SlaveGridType,
          theSS_WireGrid2CreatorType,
          theSS_WireGrid2EditorType,
          theSS_WireArguments2GridType,
          theSS_q,
          theSS_timeout) {




    var ModuleName     = "composite_ctrl_type";
    var ModulePackages = "widgetctrls";
    var ModuleFullName = ModulePackages + "/" + ModuleName;



    var aMod_definer = function( theS_Overrider,
                                 theS_ActionsCtrlType,
                                 theS_WireGrid2SlaveGridType,
                                 theS_WireGrid2CreatorType,
                                 theS_WireGrid2EditorType,
                                 theS_WireArguments2GridType,
                                 $q,
                                 $timeout) {


        if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}





        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
            }
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
            theToInit.DEFAULTTITLE = "CompositeCtrlDefaultName";



            theToInit.WIREKINDS = [
                theS_WireGrid2SlaveGridType.WIREKIND_GRID2SLAVEGRID,
                theS_WireGrid2EditorType.WIREKIND_GRID2EDITOR,
                theS_WireGrid2CreatorType.WIREKIND_GRID2CREATOR,
                theS_WireArguments2GridType.WIREKIND_ARGUMENTS2GRID
            ];



            theToInit.OBTAININITIALLISTSDELAY  = 1000;
            theToInit.OBTAININITIALFIELDSDELAY = 1000;

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






        var aCompositeCtrl_Prototype = (function() {


            var aPrototype = new theS_ActionsCtrlType.ActionsCtrl_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_SuperPrototype = theS_ActionsCtrlType.ActionsCtrl_Prototype;


            aPrototype._v_Type = "CompositeCtrl";

            aPrototype._v_Module = null;


            aPrototype._v_GridSpecs              = null;
            aPrototype._v_EditorSpecs            = null;
            aPrototype._v_CreatorSpecs           = null;
            aPrototype._v_WireSpecs              = null;
            aPrototype._v_InitialLoadGridNames   = null;
            aPrototype._v_InitialLoadEditorNames = null;
            aPrototype._v_InitialInCreationNames = null;

            aPrototype._v_GridCtrls    = null;
            aPrototype._v_EditorCtrls  = null;
            aPrototype._v_CreatorCtrls = null;
            aPrototype._v_CtrlWires    = null;

            aPrototype._v_EditorNamesByCreatorName = null;
            aPrototype._v_CreatorNamesByEditorName = null;




            var _pInit = function( theTitle, theIdentifier, theRecorder, theScope,
                                   theDomIdPrefix,
                                   theParentCtrl,
                                   theConverter,
                                   theGridSpecs,
                                   theEditorSpecs,
                                   theCreatorSpecs,
                                   theWireSpecs,
                                   theInitialLoadGridNames,
                                   theInitialLoadEditorNames,
                                   theInitialInCreationNames) {

                this._pInit_CompositeCtrl( theTitle, theIdentifier, theRecorder, theScope,
                                           theDomIdPrefix,
                                           theParentCtrl,
                                           theConverter,
                                           theGridSpecs,
                                           theEditorSpecs,
                                           theCreatorSpecs,
                                           theWireSpecs,
                                           theInitialLoadGridNames,
                                           theInitialLoadEditorNames,
                                           theInitialInCreationNames);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_CompositeCtrl = function( theTitle, theIdentifier, theRecorder, theScope,
                                                 theDomIdPrefix,
                                                 theParentCtrl,
                                                 theConverter,
                                                 theGridSpecs,
                                                 theEditorSpecs,
                                                 theCreatorSpecs,
                                                 theWireSpecs,
                                                 theInitialLoadGridNames,
                                                 theInitialLoadEditorNames,
                                                 theInitialInCreationNames) {

                /* Delegate on super prototype initialization */
                aPrototype._v_SuperPrototype._pInit_ActionsCtrl.apply( this, [ theTitle, theIdentifier, theRecorder, theScope,
                                                                               theDomIdPrefix,
                                                                               theParentCtrl,
                                                                               theConverter]);

                this._v_Prototype = aPrototype;
                this._v_Type      = this._v_Prototype._v_Type;
                this._v_Module    = aPrototype._v_Module;

                this._v_GridSpecs              = theGridSpecs;
                this._v_EditorSpecs            = theEditorSpecs;
                this._v_CreatorSpecs           = theCreatorSpecs;
                this._v_WireSpecs              = theWireSpecs;
                this._v_InitialLoadGridNames   = theInitialLoadGridNames;
                this._v_InitialLoadEditorNames = theInitialLoadEditorNames;
                this._v_InitialInCreationNames = theInitialInCreationNames;

                this._v_GridCtrls    = { };
                this._v_EditorCtrls  = { };
                this._v_CreatorCtrls = { };
                this._v_CtrlWires    = [ ];

                this._v_EditorNamesByCreatorName = { };
                this._v_CreatorNamesByEditorName = { };

                this._pInitEditorAndCreatorNamesRelationships();
            };
            if( _pInit_CompositeCtrl){}/* CQT */
            aPrototype._pInit_CompositeCtrl = _pInit_CompositeCtrl;









            var _pInitEditorAndCreatorNamesRelationships = function() {

                this._v_EditorNamesByCreatorName = { };
                this._v_CreatorNamesByEditorName = { };

                var someGridSpecNames = Object.keys( this._v_GridSpecs);
                if( !someGridSpecNames) {
                    return;
                }

                var aNumGridSpecs = someGridSpecNames.length;
                if( !aNumGridSpecs) {
                    return;
                }

                for( var aGridSpecNameIdx=0; aGridSpecNameIdx < aNumGridSpecs; aGridSpecNameIdx++) {

                    var aGridSpecName = someGridSpecNames[ aGridSpecNameIdx];
                    if( aGridSpecName) {

                        var aGridSpec = this._v_GridSpecs[ aGridSpecName];

                        var anEditorName = aGridSpec[ "editorName"];
                        var aCreatorName = aGridSpec[ "creatorName"];

                        if( anEditorName && aCreatorName) {
                            this._v_EditorNamesByCreatorName[ aCreatorName] = anEditorName;
                            this._v_CreatorNamesByEditorName[ anEditorName] = aCreatorName;
                        }
                    }
                }
            };
            if( _pInitEditorAndCreatorNamesRelationships){}/* CQT */
            aPrototype._pInitEditorAndCreatorNamesRelationships = _pInitEditorAndCreatorNamesRelationships;







            var pDestroy = function() {

                this.pReleaseWires();
                this.pReleaseGridCtrls();
                this.pReleaseEditorCtrls();
                this.pReleaseCreatorCtrls();

                this._v_DomIdPrefix            = null;
                this._v_GridSpecs              = null;
                this._v_EditorSpecs            = null;
                this._v_CreatorSpecs           = null;
                this._v_WireSpecs              = null;
                this._v_InitialLoadGridNames   = null;
                this._v_InitialLoadEditorNames = null;
                this._v_InitialInCreationNames = null;

                this._v_GridCtrls    = null;
                this._v_EditorCtrls  = null;
                this._v_CreatorCtrls = null;
                this._v_CtrlWires    = null;

                this._v_EditorNamesByCreatorName = null;
                this._v_CreatorNamesByEditorName = null;

                aPrototype._v_SuperPrototype.pDestroy.apply( this);
            };
            if( pDestroy){}/* CQT */
            aPrototype.pDestroy = pDestroy;









            var fIsEditorShown = function( theEditorName) {

                if( !theEditorName) {
                    return false;
                }

                if( !this._v_CreatorNamesByEditorName) {
                    return true;
                }

                var aRelatedCreatorName = this._v_CreatorNamesByEditorName[ theEditorName];
                if( !aRelatedCreatorName) {
                    return true;
                }

                var aCreatorCtrl = this.fCreatorCtrlNamed( aRelatedCreatorName);
                if( !aCreatorCtrl) {
                    return true;
                }

                var aCreatorInCreation = aCreatorCtrl.fInCreation();

                var aIsEditorShown = aCreatorInCreation ? false : true;
                if( aIsEditorShown){}/* CQT */

                return aIsEditorShown;
            };
            if( fIsEditorShown){}/* CQT */
            aPrototype.fIsEditorShown = fIsEditorShown;








            var pSetInCreation = function( theCreatorName) {

                if( !theCreatorName) {
                    return;
                }

                var aCreatorCtrl = this.fCreatorCtrlNamed( theCreatorName);
                if( !aCreatorCtrl) {
                    return;
                }

                aCreatorCtrl.pSetInCreation( true);
            };
            if( pSetInCreation){}/* CQT */
            aPrototype.pSetInCreation = pSetInCreation;








            var pCreateWires = function() {

                if( !this._v_WireSpecs) {
                    return;
                }

                var aNumWireSpecs = this._v_WireSpecs.length;
                if( !aNumWireSpecs) {
                    return;
                }

                for( var aWireSpecIdx=0; aWireSpecIdx < aNumWireSpecs; aWireSpecIdx++) {

                    var aWireSpec = this._v_WireSpecs[ aWireSpecIdx];
                    if( aWireSpec) {

                        var aTitle = this._v_Title;
                        if( !aTitle) {
                            aTitle = "?";
                        }

                        var aNewWire = null;

                        var aWireKind =  aWireSpec[ "kind"];
                        if( this.WIREKINDS.indexOf( aWireKind) < 0) {
                            continue;
                        }

                        switch( aWireKind) {

                            case theS_WireGrid2SlaveGridType.WIREKIND_GRID2SLAVEGRID:
                                aNewWire = new theS_WireGrid2SlaveGridType.WireGrid2SlaveGrid_Constructor(
                                    aWireSpec.name + "-For-" + aTitle,
                                    this._v_Identifier,
                                    this._v_Recorder,
                                    this._v_Scope,
                                    aWireSpec,
                                    this
                                );
                                break;


                            case theS_WireGrid2EditorType.WIREKIND_GRID2EDITOR:
                                aNewWire = new theS_WireGrid2EditorType.WireGrid2Editor_Constructor(
                                    aWireSpec.name + "-For-" + aTitle,
                                    this._v_Identifier,
                                    this._v_Recorder,
                                    this._v_Scope,
                                    aWireSpec,
                                    this
                                );
                                break;


                            case theS_WireGrid2CreatorType.WIREKIND_GRID2CREATOR:
                                aNewWire = new theS_WireGrid2CreatorType.WireGrid2Creator_Constructor(
                                    aWireSpec.name + "-For-" + aTitle,
                                    this._v_Identifier,
                                    this._v_Recorder,
                                    this._v_Scope,
                                    aWireSpec,
                                    this
                                );
                                break;



                            case theS_WireArguments2GridType.WIREKIND_ARGUMENTS2GRID:
                                aNewWire = new theS_WireArguments2GridType.WireArguments2Grid_Constructor(
                                    aWireSpec.name + "-For-" + aTitle,
                                    this._v_Identifier,
                                    this._v_Recorder,
                                    this._v_Scope,
                                    aWireSpec,
                                    this
                                );
                                break;




                            default:
                        }

                        if( aNewWire) {
                            this._v_CtrlWires.push( aNewWire);
                        }
                    }
                }
            };
            if( pCreateWires){}/* CQT */
            aPrototype.pCreateWires = pCreateWires;







            var pReleaseWires = function() {

                if( !this._v_CtrlWires) {
                    return;
                }

                var aNumCtrlWires = this._v_CtrlWires.length;
                if( !aNumCtrlWires) {
                    return;
                }

                for( var aCtrlWireIdx=0; aCtrlWireIdx < aNumCtrlWires; aCtrlWireIdx++) {

                    var aCtrlWire = this._v_CtrlWires[ aCtrlWireIdx];
                    if( aCtrlWire) {
                        aCtrlWire.pDestroy();
                    }
                }
            };
            if( pReleaseWires){}/* CQT */
            aPrototype.pReleaseWires = pReleaseWires;










            var pReleaseGridCtrls = function() {

                if( !this._v_GridCtrls) {
                    return;
                }

                var aNumGridCtrls = this._v_GridCtrls.length;
                if( !aNumGridCtrls) {
                    return;
                }

                for( var aGridCtrlIdx=0; aGridCtrlIdx < aNumGridCtrls; aGridCtrlIdx++) {

                    var aGridCtrl = this._v_GridCtrls[ aGridCtrlIdx];
                    if( aGridCtrl) {
                        aGridCtrl.pDestroy();
                    }
                }
            };
            if( pReleaseGridCtrls){}/* CQT */
            aPrototype.pReleaseGridCtrls = pReleaseGridCtrls;








            var pReleaseEditorCtrls = function() {

                if( !this._v_EditorCtrls) {
                    return;
                }

                var aNumEditorCtrls = this._v_EditorCtrls.length;
                if( !aNumEditorCtrls) {
                    return;
                }

                for( var aEditorCtrlIdx=0; aEditorCtrlIdx < aNumEditorCtrls; aEditorCtrlIdx++) {

                    var aEditorCtrl = this._v_EditorCtrls[ aEditorCtrlIdx];
                    if( aEditorCtrl) {
                        aEditorCtrl.pDestroy();
                    }
                }

            };
            if( pReleaseEditorCtrls){}/* CQT */
            aPrototype.pReleaseEditorCtrls = pReleaseEditorCtrls;







            var pReleaseCreatorCtrls = function() {

                if( !this._v_CreatorCtrls) {
                    return;
                }

                var aNumCreatorCtrls = this._v_CreatorCtrls.length;
                if( !aNumCreatorCtrls) {
                    return;
                }

                for( var aCreatorCtrlIdx=0; aCreatorCtrlIdx < aNumCreatorCtrls; aCreatorCtrlIdx++) {

                    var aCreatorCtrl = this._v_CreatorCtrls[ aCreatorCtrlIdx];
                    if( aCreatorCtrl) {
                        aCreatorCtrl.pDestroy();
                    }
                }

            };
            if( pReleaseCreatorCtrls){}/* CQT */
            aPrototype.pReleaseCreatorCtrls = pReleaseCreatorCtrls;












            var fParametersForNewGridCtrl = function( theGridCtrl, theNombreLista) {

                if( !theGridCtrl) {
                    return null;
                }

                if( !theNombreLista) {
                    return null;
                }

                if( !this.fRegisterNewGridCtrl( theGridCtrl, theNombreLista)) {
                    return null;
                }

                var aGridParameters = this._v_GridSpecs[ theNombreLista];
                if( !aGridParameters) {
                    return null;
                }

                aGridParameters[ "domIdPrefix"] = this._v_DomIdPrefix;


                console.log( "\n\ncomposite_ctrl_type.js fParametersForNewGridCtrl\nACV OJO not doing 201410212324 if( typeof aGridParameters[ 'retrieval''] == 'string') { aRetrievalMethod = this[ aRetrieval]; }\n\n");
                /*
                var aRetrieval = aGridParameters[ "retrieval"];
                if( aRetrieval) {
                    if( typeof aRetrieval == "string") {
                        var aRetrievalMethod = this[ aRetrieval];
                        if ( aRetrievalMethod) {
                            aGridParameters[ "retrieval"] = aRetrievalMethod.bind( this);
                        }
                    }
                }
                */

                return aGridParameters;
            };
            if( fParametersForNewGridCtrl){}/* CQT */
            aPrototype.fParametersForNewGridCtrl = fParametersForNewGridCtrl;







            var fRegisterNewGridCtrl = function( theGridCtrl, theNombreLista) {

                if( !theGridCtrl) {
                    return false;
                }

                if( !theNombreLista) {
                    return false;
                }

                var anExistingGridCtrl = this.fGridCtrlNamed( theNombreLista);
                if( anExistingGridCtrl) {
                    return false;
                }

                var aGridParameters = this._v_GridSpecs[ theNombreLista];
                if( !aGridParameters) {
                    return false;
                }

                this._v_GridCtrls[ theNombreLista] = theGridCtrl;

                return true;
            };
            if( fRegisterNewGridCtrl){}/* CQT */
            aPrototype.fRegisterNewGridCtrl = fRegisterNewGridCtrl;










            var fParametersForNewEditorCtrl = function( theEditorCtrl, theNombreEditor) {

                if( !theEditorCtrl) {
                    return null;
                }

                if( !theNombreEditor) {
                    return null;
                }

                if( !this.fRegisterNewEditorCtrl( theEditorCtrl, theNombreEditor)) {
                    return null;
                }

                var anEditorParameters = this._v_EditorSpecs[ theNombreEditor];
                if( !anEditorParameters) {
                    return null;
                }

                anEditorParameters[ "domIdPrefix"] = this._v_DomIdPrefix;

                var aFieldsChange = anEditorParameters[ "fieldsChange"];
                if( aFieldsChange) {
                    if( typeof aFieldsChange == "string") {
                        var aRowsChangeMethod = this[ aFieldsChange];
                        if ( aRowsChangeMethod) {
                            anEditorParameters[ "fieldsChange"] = aRowsChangeMethod.bind( this);
                        }
                    }
                }

                return anEditorParameters;
            };
            if( fParametersForNewEditorCtrl){}/* CQT */
            aPrototype.fParametersForNewEditorCtrl = fParametersForNewEditorCtrl;









            var fRegisterNewEditorCtrl = function( theEditorCtrl, theNombreEditor) {

                if( !theEditorCtrl) {
                    return false;
                }

                if( !theNombreEditor) {
                    return false;
                }

                var anExistingEditorCtrl = this.fEditorCtrlNamed( theNombreEditor);
                if( anExistingEditorCtrl) {
                    return false;
                }

                var aParameters = this._v_EditorSpecs[ theNombreEditor];
                if( !aParameters) {
                    return false;
                }

                this._v_EditorCtrls[ theNombreEditor] = theEditorCtrl;

                return true;
            };
            if( fRegisterNewEditorCtrl){}/* CQT */
            aPrototype.fRegisterNewEditorCtrl = fRegisterNewEditorCtrl;











            var fParametersForNewCreatorCtrl = function( theCreatorCtrl, theNombreCreator) {

                if( !theCreatorCtrl) {
                    return null;
                }

                if( !theNombreCreator) {
                    return null;
                }

                if( !this.fRegisterNewCreatorCtrl( theCreatorCtrl, theNombreCreator)) {
                    return null;
                }

                var aCreatorParameters = this._v_CreatorSpecs[ theNombreCreator];
                if( !aCreatorParameters) {
                    return null;
                }

                aCreatorParameters[ "domIdPrefix"] = this._v_DomIdPrefix;

                var aFieldsChange = aCreatorParameters[ "fieldsChange"];
                if( aFieldsChange) {
                    if( typeof aFieldsChange == "string") {
                        var aRowsChangeMethod = this[ aFieldsChange];
                        if ( aRowsChangeMethod) {
                            aCreatorParameters[ "fieldsChange"] = aRowsChangeMethod.bind( this);
                        }
                    }
                }


                if( this._v_InitialInCreationNames && ( this._v_InitialInCreationNames.indexOf( theNombreCreator) >= 0)) {
                    aCreatorParameters[ "initiallyInCreation"] = true;
                }


                return aCreatorParameters;
            };
            if( fParametersForNewCreatorCtrl){}/* CQT */
            aPrototype.fParametersForNewCreatorCtrl = fParametersForNewCreatorCtrl;









            var fRegisterNewCreatorCtrl = function( theCreatorCtrl, theNombreCreator) {

                if( !theCreatorCtrl) {
                    return false;
                }

                if( !theNombreCreator) {
                    return false;
                }

                var anExistingCreatorCtrl = this.fCreatorCtrlNamed( theNombreCreator);
                if( anExistingCreatorCtrl) {
                    return false;
                }

                var aParameters = this._v_CreatorSpecs[ theNombreCreator];
                if( !aParameters) {
                    return false;
                }

                this._v_CreatorCtrls[ theNombreCreator] = theCreatorCtrl;

                return true;
            };
            if( fRegisterNewCreatorCtrl){}/* CQT */
            aPrototype.fRegisterNewCreatorCtrl = fRegisterNewCreatorCtrl;








            var pWireNewCtrl = function( theCtrl, theCtrlName) {

                if( !theCtrl) {
                    return;
                }

                if( !theCtrlName) {
                    return;
                }

                if( !this._v_CtrlWires) {
                    return;
                }

                var aNumCtrlWires = this._v_CtrlWires.length;
                if( !aNumCtrlWires) {
                    return;
                }

                for( var aCtrlWireIdx=0; aCtrlWireIdx < aNumCtrlWires; aCtrlWireIdx++) {

                    var aCtrlWire = this._v_CtrlWires[ aCtrlWireIdx];
                    if( aCtrlWire) {
                        aCtrlWire.fWireCtrl( theCtrl, theCtrlName);
                    }
                }
            };
            if( pWireNewCtrl){}/* CQT */
            aPrototype.pWireNewCtrl = pWireNewCtrl;












            var fSubCtrlNamed = function( theCtrlName) {

                if( !theCtrlName) {
                    return null;
                }

                var aSubCtrl = this.fGridCtrlNamed( theCtrlName);
                if( aSubCtrl) {
                    return aSubCtrl;
                }

                aSubCtrl = this.fEditorCtrlNamed( theCtrlName);
                if( aSubCtrl) {
                    return aSubCtrl;
                }

                aSubCtrl = this.fCreatorCtrlNamed( theCtrlName);
                if( aSubCtrl) {
                    return aSubCtrl;
                }

                return null;
            };
            if( fSubCtrlNamed){}/* CQT */
            aPrototype.fSubCtrlNamed = fSubCtrlNamed;









            var fGridCtrlNamed = function( theCtrlName) {

                if( !theCtrlName) {
                    return null;
                }

                var aGridCtrl = this._v_GridCtrls[  theCtrlName];
                if( !aGridCtrl) {
                    return null;
                }

                return aGridCtrl;
            };
            if( fGridCtrlNamed){}/* CQT */
            aPrototype.fGridCtrlNamed = fGridCtrlNamed;









            var fEditorCtrlNamed = function( theCtrlName) {

                if( !theCtrlName) {
                    return null;
                }

                var aEditorCtrl = this._v_EditorCtrls[  theCtrlName];
                if( !aEditorCtrl) {
                    return null;
                }

                return aEditorCtrl;
            };
            if( fEditorCtrlNamed){}/* CQT */
            aPrototype.fEditorCtrlNamed = fEditorCtrlNamed;







            var fCreatorCtrlNamed = function( theCtrlName) {

                if( !theCtrlName) {
                    return null;
                }

                var aCreatorCtrl = this._v_CreatorCtrls[  theCtrlName];
                if( !aCreatorCtrl) {
                    return null;
                }

                return aCreatorCtrl;
            };
            if( fCreatorCtrlNamed){}/* CQT */
            aPrototype.fCreatorCtrlNamed = fCreatorCtrlNamed;










            var fWiresFromWith = function( theFromCtrl, theFieldNames) {

                if( !theFromCtrl) {
                    return null;
                }

                if( !theFieldNames) {
                    return null;
                }

                if( !this._v_CtrlWires) {
                    return null;
                }

                var someWires = [ ];

                var aNumCtrlWires = this._v_CtrlWires.length;
                if( !aNumCtrlWires) {
                    return someWires;
                }

                for( var aCtrlWireIdx=0; aCtrlWireIdx < aNumCtrlWires; aCtrlWireIdx++) {

                    var aCtrlWire = this._v_CtrlWires[ aCtrlWireIdx];
                    if( aCtrlWire) {

                        var aCtrlWireFrom = aCtrlWire.fFromCtrl();
                        if( aCtrlWireFrom) {
                            if( aCtrlWireFrom == theFromCtrl) {

                                var aCtrlWireSpec = aCtrlWire._v_WireSpec;
                                if( aCtrlWireSpec) {

                                    var aWithFieldName = aCtrlWireSpec[ "with"];
                                    if( aWithFieldName) {

                                        if( theFieldNames.indexOf( aWithFieldName) >= 0) {

                                            someWires.push( aCtrlWire);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                return someWires;
            };
            if( fWiresFromWith){}/* CQT */
            aPrototype.fWiresFromWith = fWiresFromWith;










            var pSetInitialLoadGridNamesFromLocationQuery = function() {

                if( !this._v_InitialLoadGridNames) {
                    return;
                }

                if( !this._v_LocationQuery) {
                    return;
                }


                var anInitialLoadGridNamesParmStr = this._v_LocationQuery[ this.LOCATIONPARMNAME_INITIALLOADGRIDNAMES];
                if( !anInitialLoadGridNamesParmStr) {
                    return;
                }

                var someGridSpecNames = Object.keys( this._v_GridSpecs);
                if( !someGridSpecNames) {
                    return;
                }

                var someInitialLoadGridNames = null;

                if( anInitialLoadGridNamesParmStr == this.LOCATIONPARMALLNAMES) {
                    someInitialLoadGridNames = someGridSpecNames.slice();
                }
                else {
                    someInitialLoadGridNames = anInitialLoadGridNamesParmStr.split( this.LOCATIONPARMNAME_NAMES_SEPARATOR);
                }

                this._v_InitialLoadGridNames = someInitialLoadGridNames;

            };
            if( pSetInitialLoadGridNamesFromLocationQuery){}/* CQT */
            aPrototype.pSetInitialLoadGridNamesFromLocationQuery = pSetInitialLoadGridNamesFromLocationQuery;








            var pSetEditorSpecsAutoEditFromLocationQuery = function() {

                if( !this._v_EditorSpecs) {
                    return;
                }

                if( !this._v_LocationQuery) {
                    return;
                }

                var anAutoEditNamesParmStr = this._v_LocationQuery[ this.LOCATIONPARMNAME_AUTOEDITNAMES];
                if( !anAutoEditNamesParmStr) {
                    return;
                }


                var someEditorSpecNames = Object.keys( this._v_EditorSpecs);
                if( !someEditorSpecNames) {
                    return;
                }

                var someAutoEditNamesParm = null;

                if( anAutoEditNamesParmStr == this.LOCATIONPARMALLNAMES) {
                    someAutoEditNamesParm = someEditorSpecNames.slice();
                }
                else {
                    someAutoEditNamesParm = anAutoEditNamesParmStr.split( this.LOCATIONPARMNAME_NAMES_SEPARATOR);
                }

                if( !someAutoEditNamesParm) {
                    return;
                }

                var aNumEditorSpecs = someEditorSpecNames.length;
                if( !aNumEditorSpecs) {
                    return;
                }

                for( var anEditorSpecNameIdx=0; anEditorSpecNameIdx < aNumEditorSpecs; anEditorSpecNameIdx++) {
                    var anEditorSpecName = someEditorSpecNames[ anEditorSpecNameIdx];
                    if( anEditorSpecName) {
                        var anEditorSpec = this._v_EditorSpecs[ anEditorSpecName];

                        var anAutoEdit =  someAutoEditNamesParm.indexOf( anEditorSpecName) >= 0;
                        if( anAutoEdit){}/* CQT */

                        anEditorSpec[ "autoEdit"] = anAutoEdit;
                    }
                }
            };
            if( pSetEditorSpecsAutoEditFromLocationQuery){}/* CQT */
            aPrototype.pSetEditorSpecsAutoEditFromLocationQuery = pSetEditorSpecsAutoEditFromLocationQuery;








            var pSetGridSpecsAutoSelectIndexFromLocationQuery = function() {

                if( !this._v_EditorSpecs) {
                    return;
                }

                if( !this._v_LocationQuery) {
                    return;
                }

                var anAutoSelectParmStr = this._v_LocationQuery[ this.LOCATIONPARMNAME_AUTOSELECT];
                if( typeof anAutoSelectParmStr == "undefined") {
                    return;
                }

                if( !anAutoSelectParmStr) {
                    return;
                }


                var anAutoSelectIndex = -1;
                try {
                    anAutoSelectIndex = parseInt( anAutoSelectParmStr);
                }
                catch( anException) {
                }

                var someGridSpecNames = Object.keys( this._v_GridSpecs);
                if( !someGridSpecNames) {
                    return;
                }

                var aNumGridSpecs = someGridSpecNames.length;
                if( !aNumGridSpecs) {
                    return;
                }

                for( var aGridSpecNameIdx=0; aGridSpecNameIdx < aNumGridSpecs; aGridSpecNameIdx++) {
                    var aGridSpecName = someGridSpecNames[ aGridSpecNameIdx];
                    if( aGridSpecName) {
                        var aGridSpec = this._v_GridSpecs[ aGridSpecName];
                        if( aGridSpec){}/* CQT */

                        aGridSpec[ "autoSelectIndex"] = anAutoSelectIndex;
                    }
                }
            };
            if( pSetGridSpecsAutoSelectIndexFromLocationQuery){}/* CQT */
            aPrototype.pSetGridSpecsAutoSelectIndexFromLocationQuery = pSetGridSpecsAutoSelectIndexFromLocationQuery;













            var fprDo_LoadInitialGrids = function() {

                var aDeferred = this.fNewDeferred();

                if( !this._v_InitialLoadGridNames || !this._v_InitialLoadGridNames.length) {
                    this.pDeferredResolveWithNothing( aDeferred);
                    return aDeferred.promise;
                }


                var aThis = this;

                $timeout(
                    function() {
                        var someGridCtrlPromises = [ ];

                        var aNumGridNames = aThis._v_InitialLoadGridNames.length;
                        for( var aGridNameIdx=0; aGridNameIdx < aNumGridNames; aGridNameIdx++) {

                            var aGridName = aThis._v_InitialLoadGridNames[ aGridNameIdx];
                            if( aGridName) {

                                var aGridCtrl = aThis.fGridCtrlNamed( aGridName);
                                if( aGridCtrl) {

                                    var aGridCtrlPromise = aGridCtrl.fprDo_RetrieveRows();
                                    if( aGridCtrlPromise) {
                                        someGridCtrlPromises.push( aGridCtrlPromise);
                                    }
                                }
                            }
                        }

                        if( !someGridCtrlPromises.length) {
                            aThis.pDeferredResolveWithNothing( aDeferred);
                            return;
                        }

                        var aPromiseAll = aThis.fNewPromiseAll( someGridCtrlPromises);
                        aPromiseAll.then( function() {
                            aThis.pDeferredResolveWithNothing( aDeferred);
                        });
                    },
                    this.OBTAININITIALLISTSDELAY
                );


                return aDeferred.promise;
            };
            if( fprDo_LoadInitialGrids){}/* CQT */
            aPrototype.fprDo_LoadInitialGrids = fprDo_LoadInitialGrids;











            var fprDo_LoadInitialEditors = function() {

                var aDeferred = this.fNewDeferred();

                if( !this._v_InitialLoadEditorNames || !this._v_InitialLoadEditorNames.length) {
                    this.pDeferredResolveWithNothing( aDeferred);
                    return aDeferred.promise;
                }


                var aThis = this;

                $timeout(
                    function() {
                        var someEditorCtrlPromises = [ ];

                        var aNumEditorNames = aThis._v_InitialLoadEditorNames.length;
                        for( var aEditorNameIdx=0; aEditorNameIdx < aNumEditorNames; aEditorNameIdx++) {

                            var aEditorName = aThis._v_InitialLoadEditorNames[ aEditorNameIdx];
                            if( aEditorName) {

                                var aEditorCtrl = aThis.fEditorCtrlNamed( aEditorName);
                                if( aEditorCtrl) {

                                    var aEditorCtrlPromise = aEditorCtrl.fprDo_RetrieveFields();
                                    if( aEditorCtrlPromise) {
                                        someEditorCtrlPromises.push( aEditorCtrlPromise);
                                    }
                                }
                            }
                        }

                        if( !someEditorCtrlPromises.length) {
                            aThis.pDeferredResolveWithNothing( aDeferred);
                            return;
                        }

                        var aPromiseAll = aThis.fNewPromiseAll( someEditorCtrlPromises);
                        aPromiseAll.then( function() {
                            aThis.pDeferredResolveWithNothing( aDeferred);
                        });
                    },
                    this.OBTAININITIALFIELDSDELAY
                );


                return aDeferred.promise;
            };
            if( fprDo_LoadInitialEditors){}/* CQT */
            aPrototype.fprDo_LoadInitialEditors = fprDo_LoadInitialEditors;












            var fprDo_InitialExtra = function() {

                this.pInitFromLocationURLquery();

                this.pCreateWires();

                this.pSetInitialLoadGridNamesFromLocationQuery();

                this.pSetEditorSpecsAutoEditFromLocationQuery();

                this.pSetGridSpecsAutoSelectIndexFromLocationQuery();

                return aPrototype._v_SuperPrototype.fprDo_InitialExtra.apply( this);
            };
            if( fprDo_InitialExtra){}/* CQT */
            aPrototype.fprDo_InitialExtra = fprDo_InitialExtra;









            var fprDo_Initial = function() {

                var aPromise = this.fprDo_DisableUIhandlers().
                    then( this.fprDo_InitialExtra.bind( this)).
                    then( this.fprDo_LoadInitialGrids.bind( this)).
                    then( this.fprDo_LoadInitialEditors.bind( this))

                    ['finally']( this.fprDo_EnableUIhandlers.bind( this));

                if( aPromise){}/* CQT */

                return aPromise;
            };
            if( fprDo_Initial){}/* CQT */
            aPrototype.fprDo_Initial = fprDo_Initial;











            return aPrototype;

        })();




        var CompositeCtrl_Constructor = function( theTitle, theIdentifier, theRecorder, theScope,
                                                  theDomIdPrefix,
                                                  theParentCtrl,
                                                  theConverter,
                                                  theGridSpecs,
                                                  theEditorSpecs,
                                                  theCreatorSpecs,
                                                  theWireSpecs,
                                                  theInitialLoadGridNames,
                                                  theInitialLoadEditorNames,
                                                  theInitialInCreationNames) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_ActionsCtrlType.ActionsCtrl_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;
            this._v_Module = null;

            this._v_GridSpecs              = null;
            this._v_EditorSpecs            = null;
            this._v_CreatorSpecs           = null;
            this._v_WireSpecs              = null;
            this._v_InitialLoadGridNames   = null;
            this._v_InitialLoadEditorNames = null;

            this._v_GridCtrls    = null;
            this._v_EditorCtrls  = null;
            this._v_CreatorCtrls = null;
            this._v_CtrlWires    = null;

            this._v_EditorNamesByCreatorName = null;
            this._v_CreatorNamesByEditorName = null;

            this._pInit_CompositeCtrl( theTitle, theIdentifier, theRecorder, theScope,
                                       theDomIdPrefix,
                                       theParentCtrl,
                                       theConverter,
                                       theGridSpecs,
                                       theEditorSpecs,
                                       theCreatorSpecs,
                                       theWireSpecs,
                                       theInitialLoadGridNames,
                                       theInitialLoadEditorNames,
                                       theInitialInCreationNames);
        };
        CompositeCtrl_Constructor.prototype = aCompositeCtrl_Prototype;





        var CompositeCtrl_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_ActionsCtrlType.ActionsCtrl_Prototype;

            this._v_Prototype = aCompositeCtrl_Prototype;
            this._v_Type      = null;
            this._v_Module    = null;


            this._v_GridSpecs              = null;
            this._v_EditorSpecs            = null;
            this._v_CreatorSpecs           = null;
            this._v_WireSpecs              = null;
            this._v_InitialLoadGridNames   = null;
            this._v_InitialLoadEditorNames = null;

            this._v_GridCtrls    = null;
            this._v_CreatorCtrls = null;
            this._v_EditorCtrls  = null;
            this._v_CtrlWires    = null;

            this._v_EditorNamesByCreatorName = null;
            this._v_CreatorNamesByEditorName = null;
        };
        CompositeCtrl_SuperPrototypeConstructor.prototype = aCompositeCtrl_Prototype;





        var aModule = {
            "CompositeCtrl_Prototype": aCompositeCtrl_Prototype,
            "CompositeCtrl_Constructor": CompositeCtrl_Constructor,
            "CompositeCtrl_SuperPrototypeConstructor": CompositeCtrl_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aCompositeCtrl_Prototype._v_Module = aModule;





        return aModule;
    };







    var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
    if( !anExistingModule) {

        var aModule = aMod_definer(
            theSS_Overrider,
            theSS_ActionsCtrlType,
            theSS_WireGrid2SlaveGridType,
            theSS_WireGrid2CreatorType,
            theSS_WireGrid2EditorType,
            theSS_WireArguments2GridType,
            theSS_q,
            theSS_timeout
        );
        anExistingModule = aModule;

        theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
    }






    return anExistingModule;

}]);







