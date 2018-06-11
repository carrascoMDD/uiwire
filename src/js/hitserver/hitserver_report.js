'use strict';

/*
 * hitserver_report.js
 *
 * Creado @author Antonio Carrasco Valero 201410030300
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



angular.module("hitServerTypes").factory("HitServerReport", [
    "TypesRegistrySvce",
    "OverriderSvce",
    function( theSS_typesregistry,
              theSS_Overrider) {


        var ModuleName     = "hitserver_report";
        var ModulePackages = "hitserver";
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










            var aHitServerReport_Prototype = (function() {


                var aPrototype = {};

                pgInitFromModuleConstants( aPrototype);


                aPrototype._v_Type = "HitServerReport";

                aPrototype._v_Module = null;


                aPrototype._v_HitServer     = null;
                aPrototype._v_ReportId      = null;

                aPrototype._v_OperationKind = null;
                aPrototype._v_OperationName = null;
                aPrototype._v_Title         = null;
                aPrototype._v_URL           = null;
                aPrototype._v_ExpectedResponseType  = null;
                aPrototype._v_Field         = null;
                aPrototype._v_UrlParm       = null;
                aPrototype._v_Form          = null;
                aPrototype._v_FirstIndex    = null;
                aPrototype._v_HowMany       = null;

                aPrototype._v_MissingParms  = null;
                aPrototype._v_Response      = null;
                aPrototype._v_AjaxErrorData     = null;
                aPrototype._v_AjaxErrorStatus   = null;

                aPrototype._v_Success           = null;
                aPrototype._v_ServerFailureKind = null;
                aPrototype._v_OperationStatus   = null;
                aPrototype._v_OperationDetails  = null;
                aPrototype._v_ServerException   = null;
                aPrototype._v_ServerMessage     = null;
                aPrototype._v_ServerTrace       = null;

                aPrototype._v_Timestamp = null;
                aPrototype._v_OutcomeTimestamp = null;






                var _pInit = function( theHitServer,
                                       theReportId,
                                       theOperationKind,
                                       theOperationName,
                                       theTitle,
                                       theURL,
                                       theHitType,
                                       theField,
                                       theUrlParm,
                                       theForm,
                                       theFirstIndex,
                                       theHowMany) {

                    this._pInit_HitServerReport( theHitServer,
                                                 theReportId,
                                                 theOperationKind,
                                                 theOperationName,
                                                 theTitle,
                                                 theURL,
                                                 theHitType,
                                                 theField,
                                                 theUrlParm,
                                                 theForm,
                                                 theFirstIndex,
                                                 theHowMany);
                };
                if( _pInit){}/* CQT */
                aPrototype._pInit = _pInit;






                var _pInit_HitServerReport = function( theHitServer,
                                                       theReportId,
                                                       theOperationKind,
                                                       theOperationName,
                                                       theTitle,
                                                       theURL,
                                                       theHitType,
                                                       theField,
                                                       theUrlParm,
                                                       theForm,
                                                       theFirstIndex,
                                                       theHowMany) {

                    this._v_Prototype = aPrototype;
                    this._v_Type      = aPrototype._v_Type;
                    this._v_Module    = aPrototype._v_Module;

                    this._v_HitServer     = theHitServer;
                    this._v_ReportId      = theReportId;

                    this._v_OperationKind = theOperationKind;
                    this._v_OperationName = theOperationName;
                    this._v_Title         = theTitle;
                    this._v_URL           = theURL;
                    this._v_ExpectedResponseType  = theHitType;
                    this._v_Field         = theField;
                    this._v_UrlParm       = theUrlParm;
                    this._v_Form          = theForm;
                    this._v_FirstIndex    = theFirstIndex;
                    this._v_HowMany       = theHowMany;

                    this._v_MissingParms  = null;

                    this._v_Response      = null;
                    this._v_AjaxErrorData     = null;
                    this._v_AjaxErrorStatus   = null;

                    this._v_Success           = null;
                    this._v_ServerFailureKind = null;
                    this._v_OperationStatus   = null;
                    this._v_OperationDetails  = null;
                    this._v_ServerException   = null;
                    this._v_ServerMessage     = null;
                    this._v_ServerTrace       = null;

                    this._v_Timestamp     = Date.now();
                    this._v_OutcomeTimestamp = null;

                    if( this._v_HitServer){}/* CQT */
                    if( this._v_ServerTrace){}/* CQT */
                    if( this._v_OutcomeTimestamp){}/* CQT */
                };
                if( _pInit_HitServerReport){}/* CQT */
                aPrototype._pInit_HitServerReport = _pInit_HitServerReport;









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
                    var aHasLog = false;


                    if( this._v_Timestamp) {
                        aHasLog = true;
                        aLog.time = new Date( this._v_Timestamp).toISOString();
                    }

                    if( this._v_ReportId) {
                        aHasLog = true;
                        aLog.rec = this._v_ReportId;
                    }

                    if( !( this._v_OperationKind == null)) {
                        aHasLog = true;
                        aLog.kind = this._v_OperationKind;
                    }

                    if( !( this._v_OperationName == null)) {
                        aHasLog = true;
                        aLog.operation = this._v_OperationName;
                    }

                    if( !( this._v_Title == null)) {
                        aHasLog = true;
                        aLog.title = this._v_Title;
                    }

                    if( !( this._v_URL == null)) {
                        aHasLog = true;
                        aLog.URL = this._v_URL;
                    }

                    if( !( this._v_ExpectedResponseType == null)) {
                        aHasLog = true;
                        aLog.hit = this._v_ExpectedResponseType;
                    }

                    if( !( this._v_Field == null)) {
                        aHasLog = true;
                        aLog.field = this._v_Field;
                    }

                    if( !( this._v_UrlParm == null)) {
                        aHasLog = true;
                        aLog.urlParm = this._v_UrlParm;
                    }

                    var aForm = this.fAsJSONable( this._v_Form);
                    if( !( aForm == null)) {
                        aHasLog = true;
                        aLog.form = aForm;
                    }

                    if( !( this._v_FirstIndex == null)) {
                        aHasLog = true;
                        aLog.firstIndex = this._v_FirstIndex;
                    }

                    if( !( this._v_HowMany == null)) {
                        aHasLog = true;
                        aLog.howMany = this._v_HowMany;
                    }

                    if( !( this._v_MissingParms == null)) {
                        aHasLog = true;
                        aLog.missingParms = this._v_MissingParms;
                    }

                    var aResponse = this.fAsJSONable( this._v_Response);
                    if( !( aResponse == null)) {
                        aHasLog = true;
                        aLog.response = aResponse;
                    }

                    var anAjaxErrorData = this.fAsJSONable( this._v_AjaxErrorData);
                    if( !( anAjaxErrorData == null)) {
                        aHasLog = true;
                        aLog.ajaxErrorData = anAjaxErrorData;
                    }

                    var anAjaxErrorStatus = this.fAsJSONable( this._v_AjaxErrorStatus);
                    if( !( anAjaxErrorStatus == null)) {
                        aHasLog = true;
                        aLog.ajaxErrorData = anAjaxErrorStatus;
                    }

                    if( !aHasLog) {
                        return null;
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
                        "hitsvr": this._v_ReportId
                    };
                    if( aIdentifiyingJSON){}/* CQT */

                    return aIdentifiyingJSON;
                };
                if( fIdentifyingJSON){}/* CQT */
                aPrototype.fIdentifyingJSON = fIdentifyingJSON;






                var fNewVoidDisplayReport = function() {

                    var aIdentifiyingJSON = {
                        "hitsvr": this._v_ReportId
                    };
                    if( aIdentifiyingJSON){}/* CQT */

                    return aIdentifiyingJSON;
                };
                if( fNewVoidDisplayReport){}/* CQT */
                aPrototype.fNewVoidDisplayReport = fNewVoidDisplayReport;









                var fErrorResponseMessage = function( theOperationKind, theResponse) {

                    if( !theResponse) {
                        return null;
                    }

                    var aMessage = "";

                    var anOperationKindMessage = this.OPERATIONKINDMESSAGES[ theOperationKind];
                    if( anOperationKindMessage) {
                        aMessage += ( anOperationKindMessage + ": ");
                    }


                    var aResponseTipo = theResponse[ "vTipo"];
                    if( aResponseTipo) {
                        if( aResponseTipo == this.RESPONSEVTIPOEXCEPTION) {
                            aMessage += ( this.RESPONSEVTIPOEXCEPTIONMSG + ". ");
                        }
                        else {
                            aMessage += ( aResponseTipo  + ". ");
                        }
                    }



                    var anOperationStatus = theResponse[ "vStatusOperacion"];
                    if( !anOperationStatus) {
                        anOperationStatus = this.OPERATIONSTATUS_ERROR;
                    }

                    var aStatusMessage = this.OPERATIONMESSAGESBYSTATUS[ anOperationStatus];
                    if( !aStatusMessage) {
                        aStatusMessage = this.OPERATIONMESSAGE_ERROR;
                    }
                    aMessage += aStatusMessage;

                    var anOperationDetails = theResponse[ "vDetallesOperacion"];
                    if( anOperationDetails) {
                        aMessage += ". ";
                        aMessage += anOperationDetails;
                    }

                    return aMessage;
                };
                if( fErrorResponseMessage){}/* CQT */
                aPrototype.fErrorResponseMessage = fErrorResponseMessage;









                var fErrorAjaxMessage = function( theOperationKind, theErrorData, theErrorStatus) {


                    var anOperationKindMessage = this.OPERATIONKINDMESSAGES[ theOperationKind];

                    var aMessage = anOperationKindMessage + ": Error en comunicación con servidor";

                    if( theErrorStatus) {
                        var anErrorStatus = null;
                        try {
                            anErrorStatus = JSON.stringify( theErrorData);
                        }
                        catch( anException) {
                        }
                        if ( anErrorStatus) {
                            aMessage += ( " " + anErrorStatus);
                        }
                    }

                    if( theErrorData) {
                        var anErrorData = null;
                        try {
                            anErrorData = JSON.stringify( theErrorData);
                        }
                        catch( anException) {
                        }
                        if ( anErrorData) {
                            aMessage += ( " " + anErrorData);
                        }
                    }

                    return aMessage;
                };
                if( fErrorAjaxMessage){}/* CQT */
                aPrototype.fErrorAjaxMessage = fErrorAjaxMessage;













                return aPrototype;
            })();




            var HitServerReport_Constructor = function( theHitServer,
                                                        theReportId,
                                                        theOperationKind,
                                                        theOperationName,
                                                        theTitle,
                                                        theURL,
                                                        theHitType,
                                                        theField,
                                                        theUrlParm,
                                                        theForm,
                                                        theFirstIndex,
                                                        theHowMany) {

                this._v_Prototype = null;
                this._v_Type      = null;
                this._v_Module    = null;

                this._v_HitServer     = null;
                this._v_ReportId      = null;

                this._v_OperationKind = null;
                this._v_OperationName = null;
                this._v_Title         = null;
                this._v_URL           = null;
                this._v_ExpectedResponseType  = null;
                this._v_Field         = null;
                this._v_UrlParm       = null;
                this._v_Form          = null;
                this._v_FirstIndex    = null;
                this._v_HowMany       = null;

                this._v_MissingParms  = null;

                this._v_Response      = null;
                this._v_AjaxErrorData     = null;
                this._v_AjaxErrorStatus   = null;

                this._v_Success           = null;
                this._v_ServerFailureKind = null;
                this._v_OperationStatus   = null;
                this._v_OperationDetails  = null;
                this._v_ServerException   = null;
                this._v_ServerMessage     = null;
                this._v_ServerTrace       = null;

                this._v_Timestamp     = null;
                this._v_OutcomeTimestamp = null;

                this._pInit_HitServerReport( theHitServer,
                                             theReportId,
                                             theOperationKind,
                                             theOperationName,
                                             theTitle,
                                             theURL,
                                             theHitType,
                                             theField,
                                             theUrlParm,
                                             theForm,
                                             theFirstIndex,
                                             theHowMany);
            };
            HitServerReport_Constructor.prototype = aHitServerReport_Prototype;





            var HitServerReport_SuperPrototypeConstructor = function() {

                this._v_Prototype = aHitServerReport_Prototype;
                this._v_Type      = null;
                this._v_Module    = null;

                this._v_HitServer     = null;
                this._v_ReportId      = null;

                this._v_OperationKind = null;
                this._v_OperationName = null;
                this._v_Title         = null;
                this._v_URL           = null;
                this._v_ExpectedResponseType  = null;
                this._v_Field         = null;
                this._v_UrlParm       = null;
                this._v_Form          = null;
                this._v_FirstIndex    = null;
                this._v_HowMany       = null;

                this._v_MissingParms  = null;

                this._v_Response      = null;
                this._v_AjaxErrorData     = null;
                this._v_AjaxErrorStatus   = null;

                this._v_Success           = null;
                this._v_ServerFailureKind = null;
                this._v_OperationStatus   = null;
                this._v_OperationDetails  = null;
                this._v_ServerException   = null;
                this._v_ServerMessage     = null;
                this._v_ServerTrace       = null;

                this._v_Timestamp     = null;
                this._v_OutcomeTimestamp = null;
            };
            HitServerReport_SuperPrototypeConstructor.prototype = aHitServerReport_Prototype;







            var aModule = {
                "HitServerReport_Prototype": aHitServerReport_Prototype,
                "HitServerReport_Constructor": HitServerReport_Constructor,
                "HitServerReport_SuperPrototypeConstructor": HitServerReport_SuperPrototypeConstructor
            };
            pgInitFromModuleConstants( aModule);
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;

            aHitServerReport_Prototype._v_Module = aModule;





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





