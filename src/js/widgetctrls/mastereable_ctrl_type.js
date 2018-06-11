'use strict';

/*
 * mastereable_ctrl_type.js
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






angular.module("widgetCtrlsTypes").factory("MastereableCtrlType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "ActionsCtrlType",
function( theSS_typesregistry,
          theSS_Overrider,
          theSS_ActionsCtrlType) {




    var ModuleName     = "mastereable_ctrl_type";
    var ModulePackages = "widgetctrls";
    var ModuleFullName = ModulePackages + "/" + ModuleName;



    var aMod_definer = function( theS_Overrider,
                                 theS_ActionsCtrlType) {


        if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}








        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.REFRESHDELAYMILLIS = 100;

            theToInit.LOGEVENTS                        = true;
            theToInit.LOGREGISTRATION                  = true;
            theToInit.LOGREGISTRATIONSPEC              = false;
            theToInit.LOGADDROWSCHANGELISTENER         = true;
            theToInit.LOGREMOVEROWSCHANGELISTENER      = true;
            theToInit.LOGADDSELECTIONCHANGELISTENER    = true;
            theToInit.LOGREMOVESELECTIONCHANGELISTENER = true;
            theToInit.LOGACLEANUPROWS                  = true;
            theToInit.LOGACLEANUPSELECTION             = true;
            theToInit.LOGRETRIEVEROWS                  = true;
            theToInit.LOGRETRIEVEDROWS                 = false;
            theToInit.LOGCONTENTCHANGE                 = true;
            theToInit.LOGSELECTIONCHANGE               = true;
            theToInit.LOGUPDATEROW                     = true;
            theToInit.LOGUPDATEROWDATA                 = true;
            theToInit.LOGINSERTED                      = true;
            theToInit.LOGINSERTEDDATA                  = true;

            theToInit.MASTERLABELVALUESEPARATOR  = " ";

            theToInit.LOGFIELDSACCESSFUNCTIONINVOCATIONS = false;

            theToInit.MASTERLABEL_MAXELEMENTLEN = "255";
            theToInit.MASTERLABEL_MAXLEN = "512";

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
            theToInit.DEFAULTTITLE = "MastereableCtrlDefaultName";

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






        var aMastereableCtrl_Prototype = (function() {


            var aPrototype = new theS_ActionsCtrlType.ActionsCtrl_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_SuperPrototype = theS_ActionsCtrlType.ActionsCtrl_Prototype;


            aPrototype._v_Type = "MastereableCtrl";

            aPrototype._v_Module = null;


            aPrototype._v_MasterLabels      = null;
            aPrototype._v_MasterFields      = null;
            aPrototype._v_MasterParms       = null;
            aPrototype._v_MasterType        = null;

            aPrototype._v_LastMasterFields  = null;
            aPrototype._v_MasterFieldValuesFunctions = null;
            aPrototype._v_MasterLabel       = null;



            var _pInit = function( theTitle, theIdentifier, theRecorder, theScope,
                                   theDomIdPrefix,
                                   theParentCtrl,
                                   theConverter,
                                   theMasterLabels, theMasterFields, theMasterParms, theMasterType) {

                this._pInit_MastereableCtrl( theTitle, theIdentifier, theRecorder, theScope,
                                             theDomIdPrefix,
                                             theParentCtrl,
                                             theConverter,
                                             theMasterLabels, theMasterFields, theMasterParms, theMasterType);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;









            var _pInit_MastereableCtrl = function( theTitle, theIdentifier, theRecorder, theScope,
                                                   theParentCtrl,
                                                   theConverter,
                                                   theMasterLabels, theMasterFields, theMasterParms, theMasterType) {

                /* Delegate on super prototype initialization */
                aPrototype._v_SuperPrototype._pInit_ActionsCtrl.apply( this, [ theTitle, theIdentifier, theRecorder, theScope,
                                                                                 theParentCtrl,
                                                                                 theConverter]);

                this._v_Prototype = aPrototype;
                this._v_Type      = this._v_Prototype._v_Type;
                this._v_Module    = aPrototype._v_Module;

                this._v_MasterLabels      = theMasterLabels;
                this._v_MasterFields      = theMasterFields;
                this._v_MasterParms       = theMasterParms;
                this._v_MasterType        = theMasterType;

                this._v_LastMasterFields  = theMasterFields;

                this._v_MasterFieldValuesFunctions = null;
                this._v_MasterLabel  = null;



                this.pUpdateMasterLabel();

                if( this._v_MasterLabel){}/* CQT */
                if( this._v_MasterType){}/* CQT */
            };
            if( _pInit_MastereableCtrl){}/* CQT */
            aPrototype._pInit_MastereableCtrl = _pInit_MastereableCtrl;







            var fMasterFields = function() {

                var someMasterFields = this._v_LastMasterFields;
                if( !someMasterFields) {
                    someMasterFields = this._v_MasterFields;
                }

                return someMasterFields;
            };
            if( fMasterFields){}/* CQT */
            aPrototype.fMasterFields = fMasterFields;







            var pUpdateMasterLabel = function() {

                this._v_MasterLabel  = null;

                if( !this._v_MasterLabels) {
                    return;
                }

                var someMasterFieldValuesFunctions = this.fMasterFieldValuesFunctions();

                var someMasterFields = this._v_LastMasterFields;
                if( !someMasterFields) {
                    someMasterFields = this._v_MasterFields;
                    if( !someMasterFields) {
                        return;
                    }
                }

                var someMasterValues = [ ];

                var aNumMasterLabels = this._v_MasterLabels.length;
                for( var aMasterLabelIdx=0; aMasterLabelIdx < aNumMasterLabels; aMasterLabelIdx++) {

                    var aMasterLabel = this._v_MasterLabels[ aMasterLabelIdx];
                    if( aMasterLabel) {

                        var aMasterValue = null;

                        if( someMasterFieldValuesFunctions) {
                            var aFieldValueFunction = someMasterFieldValuesFunctions[ aMasterLabelIdx];
                            if( aFieldValueFunction) {
                                aMasterValue = aFieldValueFunction( someMasterFields);
                            }
                            else {
                                aMasterValue = someMasterFields[ aMasterLabel];
                            }
                        }
                        else {
                            aMasterValue = someMasterFields[ aMasterLabel];
                        }

                        if( !( typeof aMasterValue == "undefined")) {
                            
                            var aMasterValueStr = "" + aMasterLabelIdx;
                            if( aMasterValueStr.length > this.MASTERLABEL_MAXELEMENTLEN) {
                                aMasterValueStr = aMasterValueStr.substring( 0, this.MASTERLABEL_MAXELEMENTLEN);
                            }
                            someMasterValues.push( aMasterValue);
                        }
                    }
                }

                var aFullMasterLabel =  someMasterValues.join( this.MASTERLABELVALUESEPARATOR);

                if( aFullMasterLabel.length > this.MASTERLABEL_MAXLEN) {
                    aFullMasterLabel = aFullMasterLabel.substring( 0, this.MASTERLABEL_MAXLEN);
                }

                this._v_MasterLabel = aFullMasterLabel;
            };
            if( pUpdateMasterLabel){}/* CQT */
            aPrototype.pUpdateMasterLabel = pUpdateMasterLabel;








            var fMasterFieldValuesFunctions = function() {

                if( this._v_MasterFieldValuesFunctions) {
                    return this._v_MasterFieldValuesFunctions;
                }

                var aNumMasterLabels    = this._v_MasterLabels.length;

                this._v_MasterFieldValuesFunctions = new Array( aNumMasterLabels);

                for( var aMasterLabelFieldIdx=0; aMasterLabelFieldIdx < aNumMasterLabels; aMasterLabelFieldIdx++) {

                    var aFieldName = this._v_MasterLabels[ aMasterLabelFieldIdx];
                    if( aFieldName) {

                        if( aFieldName.indexOf( this.FIELDNAMEDOT) < 0) {
                            continue;
                        }

                        var someFieldSteps = aFieldName.split(  this.FIELDNAMEDOT);
                        var aNumFieldSteps = someFieldSteps.length;
                        if( !aNumFieldSteps) {
                            continue;
                        }

                        var aFunctionSourceCode = "(function( theRec) { ";
                        if( this.LOGFIELDSACCESSFUNCTIONINVOCATIONS) {
                            aFunctionSourceCode += " console.log( 'FieldsAccessFunction " + aFieldName + "');";
                        }
                        aFunctionSourceCode += " var aCur = theRec;";

                        for( var aFieldStepIdx=0; aFieldStepIdx < aNumFieldSteps; aFieldStepIdx++) {
                            var aFieldStep = someFieldSteps[ aFieldStepIdx];
                            if( aFieldStep) {
                                aFunctionSourceCode += " if( !aCur) { return null}; ";
                                aFunctionSourceCode += " aCur = aCur." + aFieldStep + ";";
                            }
                        }
                        aFunctionSourceCode += " return aCur;";
                        aFunctionSourceCode += " });";
                        var aCellValueFunction = null;
                        try {
                            aCellValueFunction = eval( aFunctionSourceCode);
                        }
                        catch( anException) {
                        }
                        if( aCellValueFunction) {
                            this._v_MasterFieldValuesFunctions[ aMasterLabelFieldIdx] = aCellValueFunction;
                        }
                    }
                }

                return this._v_MasterFieldValuesFunctions;

            };
            if( fMasterFieldValuesFunctions){}/* CQT */
            aPrototype.fMasterFieldValuesFunctions = fMasterFieldValuesFunctions;







            return aPrototype;

        })();






        var MastereableCtrl_Constructor = function( theTitle, theIdentifier, theRecorder, theScope,
                                                    theDomIdPrefix,
                                                    theParentCtrl,
                                                    theConverter,
                                                    theMasterLabels, theMasterFields, theMasterParms, theMasterType) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_ActionsCtrlType.ActionsCtrl_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;
            this._v_Module = null;

            this._v_MasterLabels      = null;
            this._v_MasterFields      = null;
            this._v_MasterParms       = null;
            this._v_MasterType        = null;

            this._v_LastMasterFields  = null;
            this._v_MasterFieldValuesFunctions = null;
            this._v_MasterLabel       = null;

            this._pInit_MastereableCtrl( theTitle, theIdentifier, theRecorder, theScope,
                                         theDomIdPrefix,
                                         theParentCtrl,
                                         theConverter,
                                         theMasterLabels, theMasterFields, theMasterParms, theMasterType);
        };
        MastereableCtrl_Constructor.prototype = aMastereableCtrl_Prototype;







        var MastereableCtrl_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_ActionsCtrlType.ActionsCtrl_Prototype;

            this._v_Prototype = aMastereableCtrl_Prototype;
            this._v_Type      = null;
            this._v_Module    = null;

            this._v_MasterLabels      = null;
            this._v_MasterFields      = null;
            this._v_MasterParms       = null;
            this._v_MasterType        = null;

            this._v_LastMasterFields  = null;
            this._v_MasterFieldValuesFunctions = null;
            this._v_MasterLabel       = null;
        };
        MastereableCtrl_SuperPrototypeConstructor.prototype = aMastereableCtrl_Prototype;



        var aModule = {
            "MastereableCtrl_Prototype": aMastereableCtrl_Prototype,
            "MastereableCtrl_Constructor": MastereableCtrl_Constructor,
            "MastereableCtrl_SuperPrototypeConstructor": MastereableCtrl_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aMastereableCtrl_Prototype._v_Module = aModule;





        return aModule;
    };







    var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
    if( !anExistingModule) {

        var aModule = aMod_definer(
            theSS_Overrider,
            theSS_ActionsCtrlType
        );
        anExistingModule = aModule;

        theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
    }






    return anExistingModule;

}]);







