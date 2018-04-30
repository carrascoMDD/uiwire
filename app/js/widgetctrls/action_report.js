'use strict';

/*
 * action_report.js
 *
 * Creado @author Antonio Carrasco Valero 201410240227
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



angular.module("hitServerTypes").factory("ActionReport", [
    "TypesRegistrySvce",
    "OverriderSvce",
    function( theSS_typesregistry,
              theSS_Overrider) {


        var ModuleName     = "action_report";
        var ModulePackages = "widgetsctrl";
        var ModuleFullName = ModulePackages + "/" + ModuleName;



        var aMod_definer = function( theS_Overrider) {


            if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}








            var pgInitWithModuleVariations = function( theToInit) {

                if( !theToInit) {
                    return;
                }

                theToInit.MAXDATASTRINGLEN = 512;
                theToInit.MAXJSONSTRINGLEN = 1024;

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
                }
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











            var pgInitModuleGlobalsOn = function( theToInit) {

                if( !theToInit) {
                }
            };



            var ModuleGlobals = { };
            pgInitModuleGlobalsOn( ModuleGlobals);










            var anActionReport_Prototype = (function() {


                var aPrototype = {};

                pgInitFromModuleConstants( aPrototype);


                aPrototype._v_Type = "ActionReport";

                aPrototype._v_Module = null;


                aPrototype._v_OwnerCtrl     = null;
                aPrototype._v_ReportId      = null;

                aPrototype._v_ActionKind     = null;
                aPrototype._v_ActionName     = null;
                aPrototype._v_With           = null;
                aPrototype._v_Form           = null;
                aPrototype._v_HitServerReport = null;

                aPrototype._v_Performed      = null;

                aPrototype._v_Success        = null;
                aPrototype._v_FailureKind    = null;
                aPrototype._v_FailureDetails = null;

                aPrototype._v_Timestamp = null;
                aPrototype._v_LastTimestamp = null;






                var _pInit = function( theOwnerCtrl,
                                       theReportId,
                                       theActionKind,
                                       theActionName,
                                       theWith,
                                       theWithDescribe,
                                       theForm,
                                       theFormDescribe,
                                       theHitServerReport,
                                       thePerformed,
                                       theSuccess,
                                       theFailureKind,
                                       theFailureDetails) {

                    this._pInit_ActionReport( theOwnerCtrl,
                                                 theReportId,
                                                 theActionKind,
                                                 theActionName,
                                                 theWith,
                                                 theWithDescribe,
                                                 theForm,
                                                 theFormDescribe,
                                                 theHitServerReport,
                                                 thePerformed,
                                                 theSuccess,
                                                 theFailureKind,
                                                 theFailureDetails);
                };
                if( _pInit){}/* CQT */
                aPrototype._pInit = _pInit;






                var _pInit_ActionReport = function( theOwnerCtrl,
                                                    theReportId,
                                                    theActionKind,
                                                    theActionName,
                                                    theWith,
                                                    theWithDescribe,
                                                    theForm,
                                                    theFormDescribe,
                                                    theHitServerReport,
                                                    thePerformed,
                                                    theSuccess,
                                                    theFailureKind,
                                                    theFailureDetails) {

                    this._v_Prototype = aPrototype;
                    this._v_Type      = aPrototype._v_Type;
                    this._v_Module    = aPrototype._v_Module;

                    this._v_OwnerCtrl       = theOwnerCtrl;
                    this._v_ReportId        = theReportId;

                    this._v_ActionKind      = theActionKind;
                    this._v_ActionName      = theActionName;
                    this._v_With            = theWith;
                    this._v_WithDescribe    = theWithDescribe;
                    this._v_Form            = theForm;
                    this._v_FormDescribe    = theFormDescribe;
                    this._v_HitServerReport = theHitServerReport;

                    this._v_Performed      = thePerformed ? true : false;

                    this._v_Success        = theSuccess;
                    this._v_FailureKind    = theFailureKind;
                    this._v_FailureDetails = theFailureDetails;

                    this._v_Timestamp = Date.now();
                    this._v_LastTimestamp = null;

                    if( this._v_LastTimestamp){}/* CQT */
                };
                if( _pInit_ActionReport){}/* CQT */
                aPrototype._pInit_ActionReport = _pInit_ActionReport;









                var fLogString = function() {

                    var aLog = this.fAsLogObject();
                    if( aLog == null) {
                        return "";
                    }

                    var aLogString = "";
                    try {
                        aLogString = JSON.stringify( aLog);
                    }
                    catch( anException) {}

                    return aLogString;
                };
                if( fLogString){}/* CQT */
                aPrototype.fLogString = fLogString;





                var toString = function() {
                    return this.fLogString();
                };
                if( toString){}/* CQT */
                aPrototype.toString = toString;







                var fAsLogObject = function() {

                    var aLog = {};

                    aLog.performed = this._v_Performed;

                    aLog.success = this._v_Success;

                    if( this._v_Timestamp) {
                        aLog.time = new Date( this._v_Timestamp).toISOString();
                    }

                    if( this._v_ReportId) {
                        aLog.rec = this._v_ReportId;
                    }

                    if( !( this._v_ActionKind == null)) {
                        aLog.kind = this._v_ActionKind;
                    }

                    if( !( this._v_ActionName == null)) {
                        aLog.operation = this._v_ActionName;
                    }

                    if( !( this._v_With == null)) {
                        aLog["with"] = this._v_With;
                    }

                    var aWithDescribe = this.fAsJSONable( this._v_WithDescribe);
                    if( !( aWithDescribe == null)) {
                        aLog.withDescribe = aWithDescribe;
                    }

                    var aForm = this.fAsJSONable( this._v_Form);
                    if( !( aForm == null)) {
                        aLog.form = aForm;
                    }

                    var aFormDescribe = this.fAsJSONable( this._v_FormDescribe);
                    if( !( aFormDescribe == null)) {
                        aLog.formDescribe = aFormDescribe;
                    }

                    var aHitServerReport = this.fAsJSONable( this._v_HitServerReport);
                    if( !( aHitServerReport == null)) {
                        aLog.hitServerReport = aHitServerReport;
                    }

                    if( !( this._v_FailureKind == null)) {
                        aLog.failureKind = this._v_FailureKind;
                    }

                    var aFailureDetails = this.fAsJSONable( this._v_FailureDetails);
                    if( !( aFailureDetails == null)) {
                        aLog.failureDetails = aFailureDetails;
                    }

                    return aLog;
                };
                if( fAsLogObject){}/* CQT */
                aPrototype.fAsLogObject = fAsLogObject;








                var fAsJSONable = function( theValue) {

                    if( theValue == null) {
                        return null;
                    }

                    if( typeof theValue == "number") {
                        return theValue;
                    }

                    if( typeof theValue == "string") {
                        return theValue;
                    }

                    if( ( theValue === this)) {
                        return "this";
                    }

                    if( theValue._v_Type && ( theValue._v_Type == this._v_Type)) {
                        return theValue.fIdentifyingJSON();
                    }

                    if( theValue.fAsLogObject) {
                        return theValue.fAsLogObject();
                    }

                    if( theValue.fIdentifyingWithTitleJSON) {
                        return theValue.fIdentifyingWithTitleJSON();
                    }

                    if( theValue.fIdentifyingJSON) {
                        return theValue.fIdentifyingJSON();
                    }

                    if( theValue.fIdentifyingWithTitleString) {
                        return theValue.fIdentifyingWithTitleString();
                    }

                    if( theValue.fIdentifyingString) {
                        return theValue.fIdentifyingString();
                    }

                    if( theValue.fLogString) {
                        return theValue.fLogString();
                    }

                    if( theValue.fToResultJSON) {
                        return theValue.fToResultJSON();
                    }

                    var aJSONstr = null;
                    try {
                        aJSONstr = JSON.stringify( theValue);
                    }
                    catch( anException) {}

                    if( !( aJSONstr == null)) {
                        var aJSONstrlen = aJSONstr.length;
                        if ( aJSONstrlen > this.MAXJSONSTRINGLEN) {
                            return aJSONstr.substr( 0, this.MAXJSONSTRINGLEN);
                        }
                        return theValue;
                    }

                    var aStr = theValue.toString().substr( 0, this.MAXDATASTRINGLEN);
                    if( aStr){}/* CQT */
                    return aStr;
                };
                if( fAsJSONable){}/* CQT */
                aPrototype.fAsJSONable = fAsJSONable;






                var fIdentifyingJSON = function() {

                    var aIdentifiyingJSON = {
                        "act": this._v_ReportId
                    };
                    if( aIdentifiyingJSON){}/* CQT */

                    return aIdentifiyingJSON;
                };
                if( fIdentifyingJSON){}/* CQT */
                aPrototype.fIdentifyingJSON = fIdentifyingJSON;







                var fNewVoidDisplayReport = function() {

                    var aIdentifiyingJSON = {
                        "act": this._v_ReportId
                    };
                    if( aIdentifiyingJSON){}/* CQT */

                    return aIdentifiyingJSON;
                };
                if( fNewVoidDisplayReport){}/* CQT */
                aPrototype.fNewVoidDisplayReport = fNewVoidDisplayReport;








                return aPrototype;
            })();




            var ActionReport_Constructor = function( theOwnerCtrl,
                                                        theReportId,
                                                        theActionKind,
                                                        theActionName,
                                                        theWith,
                                                        theWithDescribe,
                                                        theForm,
                                                        theFormDescribe,
                                                        theHitServerReport,
                                                        thePerformed,
                                                        theSuccess,
                                                        theFailureKind,
                                                        theFailureDetails) {

                this._v_Prototype = null;
                this._v_Type      = null;
                this._v_Module    = null;

                this._v_OwnerCtrl     = null;
                this._v_ReportId      = null;

                this._v_ActionKind    = null;
                this._v_ActionName    = null;
                this._v_With          = null;
                this._v_WithDescribe  = null;
                this._v_Form          = null;
                this._v_FormDescribe  = null;
                this._v_HitServerReport  = null;

                this._v_Performed     = null;

                this._v_Success        = null;
                this._v_FailureKind    = null;
                this._v_FailureDetails = null;

                this._v_Timestamp = null;
                this._v_LastTimestamp = null;

                this._pInit_ActionReport( theOwnerCtrl,
                                          theReportId,
                                          theActionKind,
                                          theActionName,
                                          theWith,
                                          theWithDescribe,
                                          theForm,
                                          theFormDescribe,
                                          theHitServerReport,
                                          thePerformed,
                                          theSuccess,
                                          theFailureKind,
                                          theFailureDetails);
            };
            ActionReport_Constructor.prototype = anActionReport_Prototype;





            var ActionReport_SuperPrototypeConstructor = function() {

                this._v_Prototype = anActionReport_Prototype;
                this._v_Type      = null;
                this._v_Module    = null;

                this._v_OwnerCtrl     = null;
                this._v_ReportId      = null;

                this._v_ActionKind    = null;
                this._v_ActionName    = null;
                this._v_With          = null;
                this._v_WithDescribe  = null;
                this._v_Form          = null;
                this._v_FormDescribe  = null;
                this._v_HitServerReport  = null;

                this._v_MissingParms  = null;

                this._v_Performed     = null;

                this._v_Success        = null;
                this._v_FailureKind    = null;
                this._v_FailureDetails = null;

                this._v_Timestamp = null;
                this._v_LastTimestamp = null;

            };
            ActionReport_SuperPrototypeConstructor.prototype = anActionReport_Prototype;







            var aModule = {
                "ActionReport_Prototype": anActionReport_Prototype,
                "ActionReport_Constructor": ActionReport_Constructor,
                "ActionReport_SuperPrototypeConstructor": ActionReport_SuperPrototypeConstructor
            };
            pgInitFromModuleConstants( aModule);
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;

            anActionReport_Prototype._v_Module = aModule;





            return aModule;
        };







        var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        if( !anExistingModule) {

            var aModule = aMod_definer(
                theSS_Overrider
            );
            anExistingModule = aModule;

            theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
        }






        return anExistingModule;

    }]);





