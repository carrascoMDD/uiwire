'use strict';

/*
 * record.js
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



angular.module("identifyingTypes").factory("RecordType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    function( theSS_typesregistry,
              theSS_Overrider) {


        var ModuleName     = "record";
        var ModulePackages = "identifying";
        var ModuleFullName = ModulePackages + "/" + ModuleName;



        var aMod_definer = function( theS_Overrider) {


            if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}








            var pgInitWithModuleVariations = function( theToInit) {

                if( !theToInit) {
                    return;
                }

                theToInit.MAXDATASTRINGLEN = 512;
                theToInit.MAXJSONSTRINGLEN = 2048;
                theToInit.MAXJSONELEMENTSTRINGLEN = 1024;

                theToInit.MAXDATASTRINGLEN = 1024;

                theToInit.MAXLOGSTRINGLEN = 4096;

                theToInit.LIMITLOGSTRINGLEN = true;
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










            var aRecord_Prototype = (function() {


                var aPrototype = {};

                pgInitFromModuleConstants( aPrototype);


                aPrototype._v_Type = "Record";

                aPrototype._v_Timestamp    = null;
                aPrototype._v_Recorder     = null;
                aPrototype._v_RecordId     = null;
                aPrototype._v_Instance     = null;
                aPrototype._v_Step         = null;
                aPrototype._v_EventKind    = null;
                aPrototype._v_Data         = null;
                aPrototype._v_Reason       = null;
                aPrototype._v_Detail       = null;






                var _pInit = function( theRecorder, theRecordId, theInstance, theStep, theEventKind, theData, theReason, theDetail) {

                    this._pInit_Record( theRecorder, theRecordId, theInstance, theStep, theEventKind, theData, theReason, theDetail);
                };
                if( _pInit){}/* CQT */
                aPrototype._pInit = _pInit;




                var _pInit_Record = function( theRecorder, theRecordId, theInstance, theStep, theEventKind, theData, theReason, theDetail) {

                    this._v_Type = aPrototype._v_Type;

                    this._v_Timestamp    = Date.now();
                    this._v_Recorder     = theRecorder;
                    this._v_RecordId     = theRecordId;
                    this._v_Instance     = theInstance;
                    this._v_Step         = theStep;
                    this._v_EventKind    = theEventKind;
                    this._v_Data         = theData;
                    this._v_Reason       = theReason;
                    this._v_Detail       = theDetail;
                };
                if( _pInit_Record){}/* CQT */
                aPrototype._pInit_Record = _pInit_Record;






                var fCopyWithoutException = function() {

                    var aCopy = new Record_Constructor(
                        this._v_Recorder,
                        this._v_RecordId,
                        this._v_Instance,
                        this._v_Step,
                        this._v_EventKind,
                        this._v_Data,
                        this._v_Reason,
                        this._v_Detail
                    );

                    aCopy._v_Timestamp = this._v_Timestamp;

                    if( aCopy._v_Data) {
                        if( aCopy._v_Data.name) {

                            if(aCopy._v_Data.name == "Error") {
                                aCopy._v_Data = null;
                            }

                            if( aCopy._v_Data.name == "ForcedException") {
                                aCopy._v_Data = null;
                            }
                        }
                    }

                    if( aCopy._v_Reason) {
                        if( aCopy._v_Reason.name) {

                            if(aCopy._v_Reason.name == "Error") {
                                aCopy._v_Reason = null;
                            }

                            if( aCopy._v_Reason.name == "ForcedException") {
                                aCopy._v_Reason = null;
                            }
                        }
                    }

                    if( aCopy._v_Detail) {
                        if( aCopy._v_Detail.name) {

                            if(aCopy._v_Detail.name == "Error") {
                                aCopy._v_Detail = null;
                            }

                            if( aCopy._v_Detail.name == "ForcedException") {
                                aCopy._v_Detail = null;
                            }
                        }
                    }

                    return aCopy;
                };
                if( fCopyWithoutException){}/* CQT */
                aPrototype.fCopyWithoutException = fCopyWithoutException;












                var toString = function() {
                    return this.fLogString();
                };
                if( toString){}/* CQT */
                aPrototype.toString = toString;








                var fLogString = function() {

                    if( !this.LIMITLOGSTRINGLEN) {
                        return this.fLogString_unlimited();
                    }

                    return this.fLogString_limited();
                };
                if( fLogString){}/* CQT */
                aPrototype.fLogString = fLogString;








                var fLogString_unlimited = function() {

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
                if( fLogString_unlimited){}/* CQT */
                aPrototype.fLogString_unlimited = fLogString_unlimited;








                var fLogString_limited = function() {

                    var aLog = this.fAsLogObject_limited();
                    if( aLog == null) {
                        return "";
                    }

                    var aLogString = "";
                    try {
                        aLogString = JSON.stringify( aLog);
                    }
                    catch( anException) {}


                    if( aLogString.length < this.MAXLOGSTRINGLEN) {

                        return aLogString;
                    }

                    var aLogStringLimited = aLogString.slice( 0, this.MAXLOGSTRINGLEN);
                    if( aLogStringLimited){}/* CQT */

                    return aLogStringLimited;
                };
                if( fLogString_limited){}/* CQT */
                aPrototype.fLogString_limited = fLogString_limited;









                var fString_NeedsToBeLimited = function( theValue) {

                    if( theValue == null) {
                        return false;
                    }

                    if( typeof theValue == "number") {
                        return false;
                    }

                    if( !( typeof theValue == "string")) {
                        return false;
                    }

                    var aNeedsToBeLimited = theValue.length > this.MAXJSONELEMENTSTRINGLEN;
                    if( aNeedsToBeLimited){}/* CQT */

                    return aNeedsToBeLimited;
                };
                if( fString_NeedsToBeLimited){}/* CQT */
                aPrototype.fString_NeedsToBeLimited = fString_NeedsToBeLimited;









                var fString_limited = function( theValue) {

                    if( theValue == null) {
                        return null;
                    }

                    if( typeof theValue == "number") {
                        return theValue;
                    }

                    if( !( typeof theValue == "string")) {
                        return null;
                    }

                    if( theValue.length < this.MAXJSONELEMENTSTRINGLEN) {

                        return theValue;
                    }

                    var aStrLimited = theValue.slice( 0, this.MAXJSONELEMENTSTRINGLEN);
                    if( aStrLimited){}/* CQT */

                    return aStrLimited;
                };
                if( fString_limited){}/* CQT */
                aPrototype.fString_limited = fString_limited;









                var fJSONValue_orLimited = function( theValue) {

                    if( theValue == null) {
                        return null;
                    }

                    if( typeof theValue == "number") {
                        return theValue;
                    }

                    if( typeof theValue == "string") {
                        return this.fString_limited( theValue);
                    }

                    if( ( theValue === this)) {
                        return "this";
                    }

                    var aJSONstr = null;
                    try {
                        aJSONstr = JSON.stringify( theValue);
                    }
                    catch( anException) {}

                    if( !( aJSONstr == null)) {
                        if( this.fString_NeedsToBeLimited( aJSONstr)) {
                            var aJSONstrLimited = this.fString_limited( aJSONstr);
                            if( aJSONstrLimited){}/* CQT */

                            return aJSONstrLimited;
                        }

                        return theValue;
                    }


                    var aStr = theValue.toString();
                    if( aStr){}/* CQT */

                    var aStrLimited = this.fString_limited( aStr);
                    if( aStrLimited){}/* CQT */

                    return aStrLimited;
                };
                if( fJSONValue_orLimited){}/* CQT */
                aPrototype.fJSONValue_orLimited = fJSONValue_orLimited;










                var fAsLogObject = function() {

                    var aLog = {};
                    var aHasLog = false;


                    if( this._v_Timestamp) {
                        aHasLog = true;
                        aLog.time = new Date( this._v_Timestamp).toISOString();
                    }

                    if( this._v_RecordId) {
                        aHasLog = true;
                        aLog.rec = this._v_RecordId;
                    }

                    var aEventKind = this.fConvertValueToJSON( this._v_EventKind);
                    if( !( aEventKind == null)) {
                        aHasLog = true;
                        aLog.kind = aEventKind;
                    }

                    var aStep = this.fConvertValueToJSON( this._v_Step);
                    if( !( aStep == null)) {
                        aHasLog = true;
                        aLog.step = aStep;
                    }


                    var aInstance = this.fConvertValueToJSON( this._v_Instance);
                    if( !( aInstance == null)) {
                        aHasLog = true;
                        aLog.inst = aInstance;
                    }


                    var aData = this.fConvertValueToJSON( this._v_Data);
                    if( !( aData == null)) {
                        aHasLog = true;
                        aLog.data = aData;
                    }

                    var aReason = this.fConvertReasonToJSON( this._v_Reason);
                    if( !( aReason == null)) {
                        aHasLog = true;
                        aLog.reason = aReason;
                    }

                    var aDetail = this.fConvertValueToJSON( this._v_Detail);
                    if( !( aDetail == null)) {
                        aHasLog = true;
                        aLog.detail = aDetail;
                    }

                    if( !aHasLog) {
                        return null;
                    }

                    return aLog;
                };
                if( fAsLogObject){}/* CQT */
                aPrototype.fAsLogObject = fAsLogObject;











                var fAsLogObject_limited = function() {

                    var aLog = {};
                    var aHasLog = false;


                    if( this._v_Timestamp) {
                        aHasLog = true;
                        aLog.time = new Date( this._v_Timestamp).toISOString();
                    }

                    if( this._v_RecordId) {
                        aHasLog = true;
                        aLog.rec = this._v_RecordId;
                    }

                    var aEventKind = this.fConvertValueToJSON_limited( this._v_EventKind);
                    if( !( aEventKind == null)) {
                        aHasLog = true;
                        aLog.kind = aEventKind;
                    }

                    var aStep = this.fConvertValueToJSON_limited( this._v_Step);
                    if( !( aStep == null)) {
                        aHasLog = true;
                        aLog.step = aStep;
                    }


                    var aInstance = this.fConvertValueToJSON_limited( this._v_Instance);
                    if( !( aInstance == null)) {
                        aHasLog = true;
                        aLog.inst = aInstance;
                    }


                    var aData = this.fConvertValueToJSON_limited( this._v_Data);
                    if( !( aData == null)) {
                        aHasLog = true;
                        aLog.data = aData;
                    }

                    var aReason = this.fConvertReasonToJSON_limited( this._v_Reason);
                    if( !( aReason == null)) {
                        aHasLog = true;
                        aLog.reason = aReason;
                    }

                    var aDetail = this.fConvertValueToJSON_limited( this._v_Detail);
                    if( !( aDetail == null)) {
                        aHasLog = true;
                        aLog.detail = aDetail;
                    }

                    if( !aHasLog) {
                        return null;
                    }

                    return aLog;
                };
                if( fAsLogObject_limited){}/* CQT */
                aPrototype.fAsLogObject_limited = fAsLogObject_limited;











                var fConvertReasonToJSON = function( theValue) {

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

                    if( theValue.fAsReasonChain) {
                        return theValue.fAsReasonChain();
                    }

                    if( theValue.fAsLogObject) {
                        return theValue.fAsLogObject();
                    }

                    if( theValue.fAsJSONable) {
                        return theValue.fAsJSONable();
                    }

                    if( theValue.fIdentifyingWithTitleJSON) {
                        return theValue.fIdentifyingWithTitleJSON();
                    }

                    if( theValue.fIdentifyingJSON) {
                        return theValue.fIdentifyingJSON();
                    }

                    if( theValue.fIdentifyingString) {
                        return theValue.fIdentifyingString();
                    }

                    if( theValue.fLogString) {
                        return theValue.fLogString();
                    }

                    var aJSONable = this.fAsJSONable( theValue);
                    if( !( aJSONable == null)) {
                        return aJSONable;
                    }

                    var aStr = theValue.toString().substr( 0, this.MAXDATASTRINGLEN);
                    if( aStr){}/* CQT */
                    return aStr;
                };
                if( fConvertReasonToJSON){}/* CQT */
                aPrototype.fConvertReasonToJSON = fConvertReasonToJSON;










                var fConvertReasonToJSON_limited = function( theValue) {

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

                    if( theValue.fAsReasonChain_limited) {
                        return theValue.fAsReasonChain_limited();
                    }

                    if( theValue.fAsLogObject_limited) {
                        return theValue.fAsLogObject_limited();
                    }

                    if( theValue.fAsJSONable_limited) {
                        return theValue.fAsJSONable_limited();
                    }

                    if( theValue.fIdentifyingWithTitleJSON) {
                        return this.fJSONValue_orLimited( theValue.fIdentifyingWithTitleJSON());
                    }

                    if( theValue.fIdentifyingJSON) {
                        return this.fJSONValue_orLimited( theValue.fIdentifyingJSON());
                    }

                    if( theValue.fIdentifyingString) {
                        return this.fJSONValue_orLimited( theValue.fIdentifyingString());
                    }

                    if( theValue.fLogString_limited) {
                        return theValue.fLogString_limited();
                    }

                    var aJSONable = this.fAsJSONable_limited( theValue);
                    if( !( aJSONable == null)) {
                        return aJSONable;
                    }

                    var aStr = theValue.toString();
                    var aStr_limited = this.fString_limited( aStr);
                    if( aStr_limited){}/* CQT */

                    return aStr_limited;
                };
                if( fConvertReasonToJSON_limited){}/* CQT */
                aPrototype.fConvertReasonToJSON_limited = fConvertReasonToJSON_limited;










                var fAsReasonChain = function( theAlready) {


                    if( theAlready && ( theAlready.indexOf( this) >= 0)) {
                        return null;
                    }

                    var anAlready = theAlready;
                    if( !anAlready) {
                        anAlready = [ ];
                    }

                    anAlready.push( this);


                    var aLog = {};
                    var aHasLog = false;


                    if( this._v_Id) {
                        aHasLog = true;
                        aLog.tre = this._v_Id;
                    }

                    var aEventKind = this.fConvertValueToJSON( this._v_EventKind);
                    if( !( aEventKind == null)) {
                        aHasLog = true;
                        aLog.kind = aEventKind;
                    }

                    if( this._v_Reason) {
                        var aReason = null;
                        if( this._v_Reason.fAsReasonChain) {
                            aReason = this._v_Reason.fAsReasonChain( anAlready);
                        }
                        else {
                            aReason = this.fConvertValueToJSON( this._v_Reason);
                        }
                        if( !( aReason == null)) {
                            aHasLog = true;
                            aLog.reason = aReason;
                        }
                    }


                    var aDetail = this.fConvertValueToJSON( this._v_Detail);
                    if( !( aDetail == null)) {
                        aHasLog = true;
                        aLog.detail = aDetail;
                    }

                    if( !aHasLog) {
                        return null;
                    }

                    return aLog;
                };
                if( fAsReasonChain){}/* CQT */
                aPrototype.fAsReasonChain = fAsReasonChain;









                var fAsReasonChain_limited = function( theAlready) {


                    if( theAlready && ( theAlready.indexOf( this) >= 0)) {
                        return null;
                    }

                    var anAlready = theAlready;
                    if( !anAlready) {
                        anAlready = [ ];
                    }

                    anAlready.push( this);


                    var aLog = {};
                    var aHasLog = false;


                    if( this._v_Id) {
                        aHasLog = true;
                        aLog.tre = this._v_Id;
                    }

                    var aEventKind = this.fConvertValueToJSON_limited( this._v_EventKind);
                    if( !( aEventKind == null)) {
                        aHasLog = true;
                        aLog.kind = aEventKind;
                    }

                    if( this._v_Reason) {
                        var aReason = null;
                        if( this._v_Reason.fAsReasonChain) {
                            aReason = this.fConvertValueToJSON_limited( this._v_Reason.fAsReasonChain_limited( anAlready));
                        }
                        else {
                            aReason = this.fConvertValueToJSON_limited( this._v_Reason);
                        }
                        if( !( aReason == null)) {
                            aHasLog = true;
                            aLog.reason = aReason;
                        }
                    }


                    var aDetail = this.fConvertValueToJSON_limited( this._v_Detail);
                    if( !( aDetail == null)) {
                        aHasLog = true;
                        aLog.detail = aDetail;
                    }

                    if( !aHasLog) {
                        return null;
                    }

                    return aLog;
                };
                if( fAsReasonChain_limited){}/* CQT */
                aPrototype.fAsReasonChain_limited = fAsReasonChain_limited;









                var fConvertValueToJSON = function( theValue, theIncludeMembers) {

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

                    if( theValue.fAsJSONable) {
                        return theValue.fAsJSONable();
                    }

                    if( theValue.fIdentifyingWithTitleJSON) {
                        return theValue.fIdentifyingWithTitleJSON();
                    }

                    if( theValue.fIdentifyingJSON) {
                        return theValue.fIdentifyingJSON();
                    }

                    if( theValue.fIdentifyingString) {
                        return theValue.fIdentifyingString();
                    }

                    if( theValue.fLogString) {
                        return theValue.fLogString();
                    }

                    var aJSONable = this.fAsJSONable( theValue);
                    if( !( aJSONable == null)) {
                        return aJSONable;
                    }

                    if( theIncludeMembers) {
                        if( theValue.fToResultJSON) {
                            return theValue.fToResultJSON();
                        }

                        try {
                            var aJSONstr = JSON.stringify( theValue);
                            if( aJSONstr){}/* CQT */
                            return aJSONstr;
                        }
                        catch( anException) {}
                    }

                    var aStr = theValue.toString().substr( 0, this.MAXDATASTRINGLEN);
                    if( aStr){}/* CQT */
                    return aStr;
                };
                if( fConvertValueToJSON){}/* CQT */
                aPrototype.fConvertValueToJSON = fConvertValueToJSON;













                var fConvertValueToJSON_limited = function( theValue) {

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
                        return this.fJSONValue_orLimited( theValue.fIdentifyingJSON());
                    }

                    if( theValue.fAsLogObject) {
                        return this.fJSONValue_orLimited( theValue.fAsLogObject());
                    }

                    if( theValue.fAsJSONable_limited) {
                        return theValue.fAsJSONable_limited();
                    }

                    if( theValue.fIdentifyingWithTitleJSON) {
                        return this.fJSONValue_orLimited( theValue.fIdentifyingWithTitleJSON());
                    }

                    if( theValue.fIdentifyingJSON) {
                        return this.fJSONValue_orLimited( theValue.fIdentifyingJSON());
                    }

                    if( theValue.fIdentifyingString) {
                        return this.fJSONValue_orLimited( theValue.fIdentifyingString);
                    }

                    if( theValue.fLogString_limited) {
                        return theValue.fLogString_limited();
                    }

                    var aJSONable = this.fAsJSONable_limited( theValue);
                    if( !( aJSONable == null)) {
                        return aJSONable;
                    }

                    var aStr = theValue.toString();
                    if( aStr){}/* CQT */

                    var aStrLimited = this.fString_limited( aStr);
                    if( aStrLimited){}/* CQT */

                    return aStrLimited;
                };
                if( fConvertValueToJSON_limited){}/* CQT */
                aPrototype.fConvertValueToJSON_limited = fConvertValueToJSON_limited;












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









                var fAsJSONable_limited = function( theValue) {

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
                        return this.fJSONValue_orLimited( theValue.fIdentifyingJSON());
                    }

                    if( theValue.fAsLogObject) {
                        return theValue.fAsLogObject_limited();
                    }

                    if( theValue.fIdentifyingWithTitleJSON) {
                        return this.fJSONValue_orLimited( theValue.fIdentifyingWithTitleJSON());
                    }

                    if( theValue.fIdentifyingJSON) {
                        return this.fJSONValue_orLimited( theValue.fIdentifyingJSON());
                    }

                    if( theValue.fIdentifyingWithTitleString) {
                        return this.fJSONValue_orLimited( theValue.fIdentifyingWithTitleString());
                    }

                    if( theValue.fIdentifyingString) {
                        return this.fJSONValue_orLimited( theValue.fIdentifyingString());
                    }

                    if( theValue.fLogString_limited) {
                        return theValue.fLogString_limited();
                    }

                    if( theValue.fToResultJSON) {
                        return this.fJSONValue_orLimited( theValue.fToResultJSON());
                    }

                    var aJSONorStr = this.fJSONValue_orLimited( theValue);
                    if( aJSONorStr){}/* CQT */

                    return aJSONorStr;
                };
                if( fAsJSONable_limited){}/* CQT */
                aPrototype.fAsJSONable_limited = fAsJSONable_limited;











                var fIdentifyingJSON = function() {

                    var aIdentifiyingJSON = {
                        "recref": this._v_RecordId
                    };
                    if( aIdentifiyingJSON){}/* CQT */

                    return aIdentifiyingJSON;
                };
                if( fIdentifyingJSON){}/* CQT */
                aPrototype.fIdentifyingJSON = fIdentifyingJSON;






                var fRecordHasEvent_recursive = function( theExpectedEvent, theAlready) {

                    if( !theExpectedEvent) {
                        return false;
                    }

                    if( theAlready  && ( theAlready.indexOf( this) >= 0)) {
                        return false;
                    }

                    if( this._v_EventKind && ( this._v_EventKind == theExpectedEvent)) {
                        return true;
                    }

                    if( theAlready) {
                        theAlready.push( this);
                    }


                    if( this._v_Reason) {
                        if( this._v_Reason.fRecordHasEvent_recursive) {
                            return this._v_Reason.fRecordHasEvent_recursive( theExpectedEvent, theAlready);
                        }

                        if( this._v_Reason._v_Record) {
                            return this._v_Reason._v_Record.fRecordHasEvent_recursive( theExpectedEvent, theAlready);
                        }
                    }

                    return false;
                };
                if( fRecordHasEvent_recursive){}/* CQT */
                aPrototype.fRecordHasEvent_recursive = fRecordHasEvent_recursive;






                return aPrototype;
            })();




            var Record_Constructor = function( theRecorder, theRecordId, theInstance, theStep, theEventKind, theData, theReason, theDetail) {

                this._v_Type = null;

                this._v_Recorder   = null;
                this._v_RecordId   = null;
                this._v_Instance   = null;
                this._v_Step       = null;
                this._v_EventKind  = null;
                this._v_Data       = null;
                this._v_Reason     = null;
                this._v_Detail     = null;

                this._pInit_Record( theRecorder, theRecordId, theInstance, theStep, theEventKind, theData, theReason, theDetail);
            };
            Record_Constructor.prototype = aRecord_Prototype;





            var Record_SuperPrototypeConstructor = function() {

                this._v_Type = null;

                this._v_Recorder   = null;
                this._v_RecordId   = null;
                this._v_Instance   = null;
                this._v_Step       = null;
                this._v_EventKind  = null;
                this._v_Data       = null;
                this._v_Reason     = null;
                this._v_Detail     = null;
            };
            Record_SuperPrototypeConstructor.prototype = aRecord_Prototype;







            var aModule = {
                "Record_Prototype": aRecord_Prototype,
                "Record_Constructor": Record_Constructor,
                "Record_SuperPrototypeConstructor": Record_SuperPrototypeConstructor
            };
            pgInitFromModuleConstants( aModule);
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;

            aRecord_Prototype._v_Module = aModule;





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





