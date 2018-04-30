'use strict';

/*
 * hitserver_svce_type.js
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




angular.module("hitServerTypes").factory("HitServerSvceType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "CommonSvceType",
    "IdentifierType",
    "HitServerReport",
    "HttpSvce",
function( theSS_typesregistry,
          theSS_Overrider,
          theSS_CommonSvceType,
          theSS_IdentifierType,
          theSS_HitServerReport,
          theSS_HttpSvce){



    var ModuleName     = "hitserver_svce_type";
    var ModulePackages = "hitserver";
    var ModuleFullName = ModulePackages + "/" + ModuleName;





    var aMod_definer = function( theS_Overrider,
                                 theS_CommonSvceType,
                                 theS_IdentifierType,
                                 theS_HitServerReport,
                                 theS_HttpSvce) {


        if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}





        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.LOGREQUESTS  = true;
            theToInit.LOGFORMS     = true;
            theToInit.LOGREPLIES   = true;
            theToInit.LOGRESPONSES = true;
            theToInit.LOGFAILURES = true;


            theToInit.MAXRESPONSELOGENTRIES = 4;


            theToInit.OPERATIONMESSAGE_ERROR           = "Error accediendo al servicio";
            theToInit.OPERATIONMESSAGE_FALTAPARAMETRO  = "No ha suministrado parametro requerido para el servicio";
            theToInit.OPERATIONMESSAGE_YAEXISTE        = "Ya existe objeto con misma clave";
            theToInit.OPERATIONMESSAGE_NOEXISTE        = "No existe objeto con la clave";
            theToInit.OPERATIONMESSAGE_NOCREADO        = "El objeto no ha sido creado";





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


            theToInit.HITSERVERSVCE_DEFAULTNAME = "HitServerSvceDefaultName";



            theToInit.OPERATIONKIND_LIST   = "LISTA";
            theToInit.OPERATIONKIND_ONE    = "ONE";
            theToInit.OPERATIONKIND_CHANGE = "CHANGE";
            theToInit.OPERATIONKIND_CREATE = "CREATE";
            theToInit.OPERATIONKIND_DELETE = "DELETE";
            theToInit.OPERATIONKIND_ACTION = "ACTION";


            theToInit.OPERATIONKINDS = [
                theToInit.OPERATIONKIND_LIST,
                theToInit.OPERATIONKIND_ONE,
                theToInit.OPERATIONKIND_CHANGE,
                theToInit.OPERATIONKIND_CREATE,
                theToInit.OPERATIONKIND_DELETE,
                theToInit.OPERATIONKIND_ACTION
            ];

            theToInit.OPERATIONKINDMESSAGES = { };
            theToInit.OPERATIONKINDMESSAGES[ theToInit.OPERATIONKIND_LIST]   = "Leer lista";
            theToInit.OPERATIONKINDMESSAGES[ theToInit.OPERATIONKIND_ONE]    = "Leer uno";
            theToInit.OPERATIONKINDMESSAGES[ theToInit.OPERATIONKIND_CHANGE] = "Cambiar";
            theToInit.OPERATIONKINDMESSAGES[ theToInit.OPERATIONKIND_CREATE] = "Crear";
            theToInit.OPERATIONKINDMESSAGES[ theToInit.OPERATIONKIND_DELETE] = "Eliminar";
            theToInit.OPERATIONKINDMESSAGES[ theToInit.OPERATIONKIND_ACTION] = "Acciòn";


            theToInit.RESPONSEVTIPOEXCEPTION    = "ExcepcionJSON";
            theToInit.RESPONSEVTIPOEXCEPTIONMSG = "Situación excepcional detectada por el servidor.";



            theToInit.FIRSTINDEXURLREPLACEMENT = "{thePrimero}";
            theToInit.HOWMANYURLREPLACEMENT    = "{theCuantos}";



            theToInit.STATUS_200_OK = 200;




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






        var aHitServerSvce_Prototype = (function() {


            var aPrototype = new theS_CommonSvceType.CommonSvce_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_SuperPrototype = theS_CommonSvceType.CommonSvce_Prototype;


            aPrototype._v_Type = "HitServerSvce";

            aPrototype._v_Module = null;


            aPrototype._v_Reports           = null;
            aPrototype._v_ReportsIdentifier = null;




            var _pInit = function( theTitle, theIdentifier, theRecorder) {

                this._pInit_HitServerSvce( theTitle, theIdentifier, theRecorder);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_HitServerSvce = function( theTitle, theIdentifier, theRecorder) {

                /* Delegate on super prototype initialization */
                aPrototype._v_SuperPrototype._pInit_CommonSvce.apply( this, [
                    theTitle || this.HITSERVERSVCE_DEFAULTNAME,
                    theIdentifier,
                    theRecorder
                ]);

                this._v_Prototype = aPrototype;
                this._v_Type      = this._v_Prototype._v_Type;
                this._v_Module    = aPrototype._v_Module;


                this._v_Reports    = [ ];

                this._v_ReportsIdentifier = new theS_IdentifierType.Identifier_Constructor( "(For-" + this._v_Title + ")");

            };
            if( _pInit_HitServerSvce){}/* CQT */
            aPrototype._pInit_HitServerSvce = _pInit_HitServerSvce;








            var fCreateAndRegisterReport = function(
                theOperationKind,
                theOperationName,
                theTitle,
                theURL,
                theHitType,
                theField,
                theUrlParm,
                theForm,
                theFirstIndex,
                theHowMany
                ) {

                var aReportId = this._v_ReportsIdentifier.fReserveId();

                var aRecord = new theS_HitServerReport.HitServerReport_Constructor(
                    this,
                    aReportId,
                    theOperationKind,
                    theOperationName,
                    theTitle,
                    theURL,
                    theHitType,
                    theField,
                    theUrlParm,
                    theForm,
                    theFirstIndex,
                    theHowMany
                );

                this._v_Reports.push( aRecord);

                return aRecord;
            };
            if( fCreateAndRegisterReport){}/* CQT */
            aPrototype.fCreateAndRegisterReport = fCreateAndRegisterReport;









            var fCheckResponseReceived_AndUpdateReport = function(
                theOperationReport,
                theResponse) {


                if( !theOperationReport) {
                    return false;
                }

                theOperationReport._v_Response         = theResponse;
                theOperationReport._v_OutcomeTimestamp = Date.now();

                if( !theResponse) {
                    theOperationReport._v_Success = false;
                    theOperationReport._v_ServerFailureKind = this.HITSVRFAILURE_NORESPONSE;
                    return false;
                }


                var anExpectedType = theOperationReport._v_ExpectedResponseType;
                if( anExpectedType) {
                    var aResponseType = theResponse[ "vTipo"];
                    if( !( aResponseType == anExpectedType)) {

                        if( aResponseType == this.RESPONSEVTIPOEXCEPTION) {

                            theOperationReport._v_Success = false;
                            theOperationReport._v_ServerFailureKind = this.HITSVRFAILURE_REPORTEDEXCEPTION;

                            theOperationReport._v_ServerException = theResponse[ "vClassName"];
                            theOperationReport._v_ServerMessage   = theResponse[ "vMessage"];
                            theOperationReport._v_ServerTrace     = theResponse[ "vStackTrace"];
                            return false;
                        }

                        theOperationReport._v_Success = false;
                        theOperationReport._v_ServerFailureKind = this.HITSVRFAILURE_WRONGTYPE;
                        return false;
                    }
                }

                var aResponseSuccess = theResponse[ "vSuccess"];
                if( !aResponseSuccess) {

                    theOperationReport._v_Success = false;
                    theOperationReport._v_ServerFailureKind = this.HITSVRFAILURE_NOSUCCESS;

                    var anOperationStatus = theResponse[ "vStatusOperacion"];
                    if( anOperationStatus) {
                        theOperationReport._v_OperationStatus = anOperationStatus;
                    }

                    var anOperationDetails = theResponse[ "vDetallesOperacion"];
                    if( anOperationDetails) {
                        theOperationReport._v_OperationDetails = anOperationDetails;
                    }

                    return false;
                }


                theOperationReport._v_Success = true;
                theOperationReport._v_ServerFailureKind = null;

                return true;

            };
            if( fCheckResponseReceived_AndUpdateReport){}/* CQT */
            aPrototype.fCheckResponseReceived_AndUpdateReport = fCheckResponseReceived_AndUpdateReport;






            var pReportMissingParms = function(
                theOperationReport,
                theMissingParmNames
                ) {

                if( !theOperationReport) {
                    return;
                }

                theOperationReport._v_OutcomeTimestamp = Date.now();

                theOperationReport._v_Success = false;
                theOperationReport._v_ServerFailureKind = this.HITSVRFAILURE_NOTSENTMISSINGPARMS;

                theOperationReport._v_MissingParms = theMissingParmNames;

            };
            if( pReportMissingParms){}/* CQT */
            aPrototype.pReportMissingParms = pReportMissingParms;





            var pReportNoUrlParm = function(
                theOperationReport,
                theURLparmName
                ) {

                if( !theOperationReport) {
                    return;
                }

                theOperationReport._v_OutcomeTimestamp = Date.now();

                theOperationReport._v_Success = true;

                theOperationReport._v_MissingParms = [ theURLparmName];

            };
            if( pReportNoUrlParm){}/* CQT */
            aPrototype.pReportNoUrlParm = pReportNoUrlParm;





            var pReportAjaxError = function(
                theOperationReport,
                theErrorData,
                theErrorStatus
                ) {

                if( !theOperationReport) {
                    return;
                }

                theOperationReport._v_OutcomeTimestamp = Date.now();

                theOperationReport._v_Success = false;
                theOperationReport._v_ServerFailureKind = this.HITSVRFAILURE_AJAX;

                theOperationReport._v_AjaxErrorData     = theErrorData;
                theOperationReport._v_AjaxErrorStatus   = theErrorStatus;

            };
            if( pReportAjaxError){}/* CQT */
            aPrototype.pReportAjaxError = pReportAjaxError;






            var pReportNoResponseField = function(
                theOperationReport
                ) {

                if( !theOperationReport) {
                    return;
                }

                theOperationReport._v_OutcomeTimestamp = Date.now();

                theOperationReport._v_Success = false;
                theOperationReport._v_ServerFailureKind = this.HITSVRFAILURE_NORESPONSEFIELD;

            };
            if( pReportNoResponseField){}/* CQT */
            aPrototype.pReportNoResponseField = pReportNoResponseField;










            




            var fprDo_RetrieveListWithParm = function( theOperationKind, theOperationName, theTitle, theURL, theHitType, theField, theUrlParm, theFirstIndex, theHowMany) {
                var aMethodName = "fprDo_RetrieveListWithParm";
                if( aMethodName){}/* CQT */


                var anOperationReport = this.fCreateAndRegisterReport(
                    theOperationKind,
                    theOperationName,
                    theTitle,
                    theURL,
                    theHitType,
                    theField,
                    theUrlParm,
                    null,
                    theFirstIndex,
                    theHowMany
                );

                var someMissingParms = [ ];
                if( !theURL) {
                    someMissingParms.push( "theURL");
                }
                if( !theHitType) {
                    someMissingParms.push( "theHitType");
                }
                if( !theField) {
                    someMissingParms.push( "theField");
                }
                if( typeof theUrlParm == "undefined") {
                    someMissingParms.push( "theUrlParm");
                }
                if( someMissingParms.length) {
                    this.pReportMissingParms( anOperationReport, someMissingParms);
                    return this.fNewDeferredRejectPromise(  anOperationReport);
                }

                if( !theUrlParm) {
                    this.pReportNoUrlParm( anOperationReport, "theUrlParm");
                    return this.fNewDeferredResolveWithNullPromise();
                }

                var anAppBaseURL = this.fAppBaseURL();

                var aURL = anAppBaseURL + theURL + theUrlParm;

                return this.fprDo_RetrieveList_inner( anOperationReport, aURL);

            };
            if( fprDo_RetrieveListWithParm){}/* CQT */
            aPrototype.fprDo_RetrieveListWithParm = fprDo_RetrieveListWithParm;











            var fprDo_RetrieveListWithQuery = function( theOperationKind, theOperationName, theTitle, theURL, theHitType, theField, theQueryParms, theFirstIndex, theHowMany) {
                var aMethodName = "fprDo_RetrieveListWithQuery";
                if( aMethodName){}/* CQT */


                var anOperationReport = this.fCreateAndRegisterReport(
                    theOperationKind,
                    theOperationName,
                    theTitle,
                    theURL,
                    theHitType,
                    theField,
                    theQueryParms,
                    null,
                    theFirstIndex,
                    theHowMany
                );

                var someMissingParms = [ ];
                if( !theURL) {
                    someMissingParms.push( "theURL");
                }
                if( !theHitType) {
                    someMissingParms.push( "theHitType");
                }
                if( !theField) {
                    someMissingParms.push( "theField");
                }
                if( typeof theQueryParms == "undefined") {
                    someMissingParms.push( "theQueryParms");
                }
                if( someMissingParms.length) {
                    this.pReportMissingParms( anOperationReport, someMissingParms);
                    return this.fNewDeferredRejectPromise(  anOperationReport);
                }

                if( !theQueryParms) {
                    this.pReportNoUrlParm( anOperationReport, "theQueryParms");
                    return this.fNewDeferredResolveWithNullPromise();
                }


                var aURL = theURL;


                var someURLparmKeys = Object.keys( theQueryParms);
                var anNumURLparmKeys = someURLparmKeys.length;

                for( var aURLparmKeyIdx=0; aURLparmKeyIdx < anNumURLparmKeys; aURLparmKeyIdx++) {

                    var aURLparmKey   = someURLparmKeys[ aURLparmKeyIdx];
                    var aURLparmValue =  theQueryParms[ aURLparmKey];

                    if( !( aURLparmValue == null)) {

                        if( !( aURLparmValue == null)) {

                            var aURLparmKeyEncoded   = encodeURIComponent( aURLparmKey);
                            var aURLparmValueEncoded = encodeURIComponent( aURLparmValue);

                            var aURLparmAndValue = aURLparmKeyEncoded + "=" + aURLparmValueEncoded;

                            if( aURL.indexOf( this.HTTPQUERYCHAR) < 0) {
                                aURL +=  this.HTTPQUERYCHAR;
                            }
                            else {
                                aURL +=  this.HTTPEXTRAPARMCHAR;
                            }

                            aURL +=  aURLparmAndValue;
                        }
                    }
                }


                var anAppBaseURL = this.fAppBaseURL();

                var aFullURL = anAppBaseURL + aURL;
                if( aFullURL){}/* CQT */

                return this.fprDo_RetrieveList_inner( anOperationReport, aFullURL);

            };
            if( fprDo_RetrieveListWithQuery){}/* CQT */
            aPrototype.fprDo_RetrieveListWithQuery = fprDo_RetrieveListWithQuery;









            var fprDo_RetrieveList = function( theOperationKind, theOperationName, theTitle, theURL, theHitType, theField, theFirstIndex, theHowMany) {
                var aMethodName = this._v_Type + " fprDo_RetrieveList";
                if( aMethodName){}/* CQT */


                var anOperationReport = this.fCreateAndRegisterReport(
                    theOperationKind,
                    theOperationName,
                    theTitle,
                    theURL,
                    theHitType,
                    theField,
                    null,
                    null,
                    theFirstIndex,
                    theHowMany
                );

                var someMissingParms = [ ];
                if( !theURL) {
                    someMissingParms.push( "theURL");
                }
                if( !theHitType) {
                    someMissingParms.push( "theHitType");
                }
                if( !theField) {
                    console.log("ACV OJO 201501251818 fprDo_RetrieveList ignore !theField");
                    if( false) {
                        someMissingParms.push( "theField");
                    }
                }
                if( someMissingParms.length) {
                    this.pReportMissingParms( anOperationReport, someMissingParms);
                    return this.fNewDeferredRejectPromise(  anOperationReport);
                }

                var anAppBaseURL = this.fAppBaseURL();

                var aURL = anAppBaseURL + theURL;

                if( ( typeof theFirstIndex == "number") || ( typeof theFirstIndex == "string")) {
                    aURL = aURL.replace( this.FIRSTINDEXURLREPLACEMENT, theFirstIndex.toString());
                }

                if( ( typeof theHowMany == "number") || ( typeof theHowMany == "string")) {
                    aURL = aURL.replace( this.HOWMANYURLREPLACEMENT, theHowMany.toString());
                }


                return this.fprDo_RetrieveList_inner( anOperationReport, aURL);

            };
            if( fprDo_RetrieveList){}/* CQT */
            aPrototype.fprDo_RetrieveList = fprDo_RetrieveList;











            var fprDo_RetrieveList_inner = function( theOperationReport, theURL) {
                var aMethodName = this._v_Type + " fprDo_RetrieveList_inner";

                var someMissingParms = [ ];
                if( !theOperationReport) {
                    someMissingParms.push( "theOperationReport");
                }
                if( !theURL) {
                    someMissingParms.push( "theURL");
                }
                if( someMissingParms.length) {
                    this.pReportMissingParms( theOperationReport, someMissingParms);
                    return this.fNewDeferredRejectPromise(  theOperationReport);
                }

                if( this.LOGREQUESTS) {
                    this.fRecord( aMethodName, this.EVENTKIND_SERVICEREPORT_SENDING, theOperationReport, null, theURL);
                }


                var aURL = theURL;

                var aThis = this;

                return theS_HttpSvce
                    .fprDo_HttpGet( theURL)
                    .then( function( theResponse) {

                        if( !aThis.fCheckResponseReceived_AndUpdateReport( theOperationReport, theResponse)) {
                            return aThis.fNewDeferredRejectPromise( theOperationReport);
                        }


                        var someRows = theResponse;

                        var aField = theOperationReport._v_Field;
                        if( aField) {
                            someRows = theResponse[ aField];
                        }

                        if( typeof someRows == "undefined") {
                            aThis.pReportNoResponseField( theOperationReport);
                            return aThis.fNewDeferredRejectPromise( theOperationReport);
                        }

                        if( aThis.LOGREPLIES) {
                            var aResponseLog = null;
                            if( aThis.LOGRESPONSES) {
                                aResponseLog = someRows;
                                if( !aResponseLog) {
                                    aResponseLog = [];
                                }
                                aResponseLog.fAsLogObject = (function() {
                                    if( aResponseLog.length) {
                                        return aResponseLog.slice( 0, aThis.MAXRESPONSELOGENTRIES);
                                    }
                                    return aResponseLog;
                                });
                            }
                            aThis.fRecord( aMethodName, aThis.EVENTKIND_SERVICEREPORT_OK, theOperationReport, aURL, aResponseLog);
                        }

                        return aThis.fNewDeferredResolveWithRowsPromise( someRows);
                    })
                    ["catch"]( function( theError) {

                        aThis.pReportAjaxError( theOperationReport, theError, null);

                        if( aThis.LOGFAILURES) {
                            aThis.fRecord( aMethodName, aThis.EVENTKIND_SERVICEREPORT_FAIL, theOperationReport, aURL, theError);
                        }

                        throw theError;
                    });

            };
            if( fprDo_RetrieveList_inner){}/* CQT */
            aPrototype.fprDo_RetrieveList_inner = fprDo_RetrieveList_inner;










            var fprDo_RetrieveOneWithQuery = function( theOperationKind, theOperationName, theTitle, theURL, theHitType, theField, theQueryParms) {
                var aMethodName =  this._v_Type + " fprDo_RetrieveOneWithQuery";
                if( aMethodName){}/* CQT */


                var anOperationReport = this.fCreateAndRegisterReport(
                    theOperationKind,
                    theOperationName,
                    theTitle,
                    theURL,
                    theHitType,
                    theField,
                    theQueryParms,
                    null,
                    null,
                    null
                );

                var someMissingParms = [ ];
                if( !theURL) {
                    someMissingParms.push( "theURL");
                }
                if( !theHitType) {
                    someMissingParms.push( "theHitType");
                }
                if( typeof theQueryParms == "undefined") {
                    someMissingParms.push( "theQueryParms");
                }
                if( someMissingParms.length) {
                    this.pReportMissingParms( anOperationReport, someMissingParms);
                    return this.fNewDeferredRejectPromise(  anOperationReport);
                }

                if( !theQueryParms) {
                    this.pReportNoUrlParm( anOperationReport, "theQueryParms");
                    return this.fNewDeferredResolveWithNullPromise();
                }


                var aURL = theURL;


                var someURLparmKeys = Object.keys( theQueryParms);
                var anNumURLparmKeys = someURLparmKeys.length;

                for( var aURLparmKeyIdx=0; aURLparmKeyIdx < anNumURLparmKeys; aURLparmKeyIdx++) {

                    var aURLparmKey   = someURLparmKeys[ aURLparmKeyIdx];
                    var aURLparmValue =  theQueryParms[ aURLparmKey];

                    if( !( aURLparmValue == null)) {

                        if( !( aURLparmValue == null)) {

                            var aURLparmKeyEncoded   = encodeURIComponent( aURLparmKey);
                            var aURLparmValueEncoded = encodeURIComponent( aURLparmValue);

                            var aURLparmAndValue = aURLparmKeyEncoded + "=" + aURLparmValueEncoded;

                            if( aURL.indexOf( this.HTTPQUERYCHAR) < 0) {
                                aURL +=  this.HTTPQUERYCHAR;
                            }
                            else {
                                aURL +=  this.HTTPEXTRAPARMCHAR;
                            }

                            aURL +=  aURLparmAndValue;
                        }
                    }
                }


                var anAppBaseURL = this.fAppBaseURL();

                var aFullURL = anAppBaseURL + aURL;
                if( aFullURL){}/* CQT */

                return this.fprDo_RetrieveOne_inner( anOperationReport, aFullURL);

            };
            if( fprDo_RetrieveOneWithQuery){}/* CQT */
            aPrototype.fprDo_RetrieveOneWithQuery = fprDo_RetrieveOneWithQuery;











            var fprDo_RetrieveOne = function( theOperationKind, theOperationName, theTitle, theURL, theHitType, theField, theUrlParm) {
                var aMethodName =  this._v_Type + " fprDo_RetrieveOne";
                if( aMethodName){}/* CQT */

                var anOperationReport = this.fCreateAndRegisterReport(
                    theOperationKind,
                    theOperationName,
                    theTitle,
                    theURL,
                    theHitType,
                    theField,
                    theUrlParm,
                    null,
                    null,
                    null
                );

                var someMissingParms = [ ];
                if( !theURL) {
                    someMissingParms.push( "theURL");
                }
                if( !theHitType) {
                    someMissingParms.push( "theHitType");
                }
                if( !theUrlParm) {
                    someMissingParms.push( "theUrlParm");
                }
                if( someMissingParms.length) {
                    this.pReportMissingParms( anOperationReport, someMissingParms);
                    return this.fNewDeferredRejectPromise(  anOperationReport);
                }


                var anAppBaseURL = this.fAppBaseURL();

                var aURL = anAppBaseURL + theURL + theUrlParm;
                if( aURL){}/* CQT */

                return this.fprDo_RetrieveOne_inner( anOperationReport, aURL);

            };
            if( fprDo_RetrieveOne){}/* CQT */
            aPrototype.fprDo_RetrieveOne = fprDo_RetrieveOne;










            var fprDo_RetrieveOne_inner = function( theOperationReport, theURL) {

                var aMethodName =  this._v_Type + " fprDo_RetrieveOne_inner";

                var someMissingParms = [ ];
                if( !theOperationReport) {
                    someMissingParms.push( "theOperationReport");
                }
                if( !theURL) {
                    someMissingParms.push( "theURL");
                }
                if( someMissingParms.length) {
                    this.pReportMissingParms( theOperationReport, someMissingParms);
                    return this.fNewDeferredRejectPromise(  theOperationReport);
                }

                if( this.LOGREQUESTS) {
                    this.fRecord( aMethodName, this.EVENTKIND_SERVICEREPORT_SENDING, theOperationReport, null, theURL);
                }


                var aThis  = this;

                return theS_HttpSvce
                    .fprDo_HttpGet( theURL)
                    .then( function( theResponse) {

                        if( !aThis.fCheckResponseReceived_AndUpdateReport( theOperationReport, theResponse)) {
                            return aThis.fNewDeferredRejectPromise( theOperationReport);
                        }

                        var aField = theOperationReport._v_Field;

                        var someFields = theResponse;
                        if( aField) {
                            someFields = theResponse[ aField];
                            if( typeof someFields == "undefined") {
                                aThis.pReportNoResponseField( theOperationReport);
                                return aThis.fNewDeferredRejectPromise( theOperationReport);
                            }
                        }

                        if( aThis.LOGREPLIES) {
                            var aResponseLog = null;
                            if( aThis.LOGRESPONSES) {
                                aResponseLog = someFields;
                                if( !aResponseLog) {
                                    aResponseLog = [];
                                }
                                aResponseLog.fAsLogObject = (function() {
                                    if( aResponseLog.length) {
                                        return aResponseLog.slice( 0, aThis.MAXRESPONSELOGENTRIES);
                                    }
                                    return aResponseLog;
                                });
                            }
                            aThis.fRecord( aMethodName, aThis.EVENTKIND_SERVICEREPORT_OK, theOperationReport, null, aResponseLog);
                        }

                        return aThis.fNewDeferredResolveWithFieldsPromise( someFields);
                    })
                    ["catch"]( function( theError) {

                        aThis.pReportAjaxError( theOperationReport, theError, null);

                        if( aThis.LOGFAILURES) {
                            aThis.fRecord( aMethodName, aThis.EVENTKIND_SERVICEREPORT_FAIL, theOperationReport, theError, null);
                        }

                        throw theError;
                    });

            };
            if( fprDo_RetrieveOne_inner){}/* CQT */
            aPrototype.fprDo_RetrieveOne_inner = fprDo_RetrieveOne_inner;









            var fprDo_RetrieveOne_ORIG = function( theOperationKind, theOperationName, theTitle, theURL, theHitType, theField, theUrlParm) {
                var aMethodName =  this._v_Type + " fprDo_RetrieveOne_ORIG";

                var anOperationReport = this.fCreateAndRegisterReport(
                    theOperationKind,
                    theOperationName,
                    theTitle,
                    theURL,
                    theHitType,
                    theField,
                    theUrlParm,
                    null,
                    null,
                    null
                );

                var someMissingParms = [ ];
                if( !theURL) {
                    someMissingParms.push( "theURL");
                }
                if( !theHitType) {
                    someMissingParms.push( "theHitType");
                }
                if( !theUrlParm) {
                    someMissingParms.push( "theUrlParm");
                }
                if( someMissingParms.length) {
                    this.pReportMissingParms( anOperationReport, someMissingParms);
                    return this.fNewDeferredRejectPromise(  anOperationReport);
                }


                var anAppBaseURL = this.fAppBaseURL();

                var aURL = anAppBaseURL + theURL + theUrlParm;

                if( this.LOGREQUESTS) {
                    this.fRecord( aMethodName, this.EVENTKIND_SERVICEREPORT_SENDING, anOperationReport, null, aURL);
                }


                var aField  = theField;

                var aThis  = this;

                return theS_HttpSvce
                    .fprDo_HttpGet( aURL)
                    .then( function( theResponse) {

                        if( !aThis.fCheckResponseReceived_AndUpdateReport( anOperationReport, theResponse)) {
                            return aThis.fNewDeferredRejectPromise( anOperationReport);
                        }

                        var someFields = theResponse;
                        if( aField) {
                            someFields = theResponse[ aField];
                            if( typeof someFields == "undefined") {
                                aThis.pReportNoResponseField( anOperationReport);
                                return aThis.fNewDeferredRejectPromise( anOperationReport);
                            }
                        }

                        if( aThis.LOGREPLIES) {
                            var aResponseLog = null;
                            if( aThis.LOGRESPONSES) {
                                aResponseLog = someFields;
                                if( !aResponseLog) {
                                    aResponseLog = [];
                                }
                                aResponseLog.fAsLogObject = (function() {
                                    if( aResponseLog.length) {
                                        return aResponseLog.slice( 0, aThis.MAXRESPONSELOGENTRIES);
                                    }
                                    return aResponseLog;
                                });
                            }
                            aThis.fRecord( aMethodName, aThis.EVENTKIND_SERVICEREPORT_OK, anOperationReport, null, aResponseLog);
                        }

                        return aThis.fNewDeferredResolveWithFieldsPromise( someFields);
                    })
                    ["catch"]( function( theError) {

                        aThis.pReportAjaxError( anOperationReport, theError, null);

                        if( aThis.LOGFAILURES) {
                            aThis.fRecord( aMethodName, aThis.EVENTKIND_SERVICEREPORT_FAIL, anOperationReport, theError, null);
                        }

                        throw theError;
                    });

            };
            if( fprDo_RetrieveOne_ORIG){}/* CQT */
            aPrototype.fprDo_RetrieveOne_ORIG = fprDo_RetrieveOne_ORIG;





            var fprDo_ChangeOne = function( theOperationKind, theOperationName, theTitle, theURL, theHitType, theField, theForm) {
                var aMethodName =  this._v_Type + " fprDo_ChangeOne";

                var anOperationReport = this.fCreateAndRegisterReport(
                    theOperationKind,
                    theOperationName,
                    theTitle,
                    theURL,
                    theHitType,
                    theField,
                    null,
                    theForm,
                    null,
                    null
                );

                var someMissingParms = [ ];
                if( !theURL) {
                    someMissingParms.push( "theURL");
                }
                if( !theHitType) {
                    someMissingParms.push( "theHitType");
                }
                if( !theForm) {
                    someMissingParms.push( "theForm");
                }
                if( someMissingParms.length) {
                    this.pReportMissingParms( anOperationReport, someMissingParms);
                    return this.fNewDeferredRejectPromise(  anOperationReport);
                }

                if( this.LOGREQUESTS) {
                    this.fRecord( aMethodName, this.EVENTKIND_SERVICEREPORT_SENDING, anOperationReport, null, null);
                }


                var anAppBaseURL = this.fAppBaseURL();

                var aURL = anAppBaseURL + theURL;

                var aField      = theField;

                var aThis = this;

                return theS_HttpSvce
                    .fprDo_HttpPost( aURL, theForm)
                    .then( function( theResponse) {

                        if( !aThis.fCheckResponseReceived_AndUpdateReport( anOperationReport, theResponse)) {
                            return aThis.fNewDeferredRejectPromise( anOperationReport);
                        }

                        var someFields = theResponse;
                        if( aField) {
                            someFields = theResponse[ aField];
                            if( typeof someFields == "undefined") {
                                aThis.pReportNoResponseField( anOperationReport);
                                return aThis.fNewDeferredRejectPromise( anOperationReport);
                            }
                        }

                        if( aThis.LOGREPLIES) {
                            var aResponseLog = null;
                            if( aThis.LOGRESPONSES) {
                                aResponseLog = someFields;
                                if( !aResponseLog) {
                                    aResponseLog = [];
                                }
                                aResponseLog.fAsLogObject = (function() {
                                    if( aResponseLog.length) {
                                        return aResponseLog.slice( 0, aThis.MAXRESPONSELOGENTRIES);
                                    }
                                    return aResponseLog;
                                });
                            }
                            aThis.fRecord( aMethodName, aThis.EVENTKIND_SERVICEREPORT_OK, anOperationReport, null, aResponseLog);
                        }

                        return aThis.fNewDeferredResolveWithFieldsPromise( someFields);
                    })
                    ["catch"]( function( theError) {

                        aThis.pReportAjaxError( anOperationReport, theError, null);

                        if( aThis.LOGFAILURES) {
                            aThis.fRecord( aMethodName, aThis.EVENTKIND_SERVICEREPORT_FAIL, anOperationReport, theError, null);
                        }

                        throw theError;
                    });

            };
            if( fprDo_ChangeOne){}/* CQT */
            aPrototype.fprDo_ChangeOne = fprDo_ChangeOne;









            var fprDo_Create = function( theOperationKind, theOperationName, theTitle, theURL, theHitType, theField, theForm) {
                var aMethodName =  this._v_Type + " fprDo_Create";

                var anOperationReport = this.fCreateAndRegisterReport(
                    theOperationKind,
                    theOperationName,
                    theTitle,
                    theURL,
                    theHitType,
                    theField,
                    null,
                    theForm,
                    null,
                    null
                );

                var someMissingParms = [ ];
                if( !theURL) {
                    someMissingParms.push( "theURL");
                }
                if( !theHitType) {
                    someMissingParms.push( "theHitType");
                }
                if( !theForm) {
                    someMissingParms.push( "theForm");
                }
                if( someMissingParms.length) {
                    this.pReportMissingParms( anOperationReport, someMissingParms);
                    return this.fNewDeferredRejectPromise(  anOperationReport);
                }

                if( this.LOGREQUESTS) {
                    this.fRecord( aMethodName, this.EVENTKIND_SERVICEREPORT_SENDING, anOperationReport, null, null);
                }

                var anAppBaseURL = this.fAppBaseURL();

                var aURL = anAppBaseURL + theURL;

                var aField      = theField;

                var aThis = this;

                return theS_HttpSvce
                    .fprDo_HttpPost( aURL, theForm)
                    .then( function( theResponse) {

                        if( !aThis.fCheckResponseReceived_AndUpdateReport( anOperationReport, theResponse)) {
                            return aThis.fNewDeferredRejectPromise( anOperationReport);
                        }

                        var someFields = theResponse;
                        if( aField) {
                            someFields = theResponse[ aField];
                            if( typeof someFields == "undefined") {
                                aThis.pReportNoResponseField( anOperationReport);
                                return aThis.fNewDeferredRejectPromise( anOperationReport);
                            }
                        }

                        if( aThis.LOGREPLIES) {
                            var aResponseLog = null;
                            if( aThis.LOGRESPONSES) {
                                aResponseLog = someFields;
                                if( !aResponseLog) {
                                    aResponseLog = [];
                                }
                                aResponseLog.fAsLogObject = (function() {
                                    if( aResponseLog.length) {
                                        return aResponseLog.slice( 0, aThis.MAXRESPONSELOGENTRIES);
                                    }
                                    return aResponseLog;
                                });
                            }
                            aThis.fRecord( aMethodName, aThis.EVENTKIND_SERVICEREPORT_OK, anOperationReport, null, aResponseLog);
                        }

                        return aThis.fNewDeferredResolveWithFieldsPromise( someFields);
                    })
                    ["catch"]( function( theError) {

                        aThis.pReportAjaxError( anOperationReport, theError, null);

                        if( aThis.LOGFAILURES) {
                            aThis.fRecord( aMethodName, aThis.EVENTKIND_SERVICEREPORT_FAIL, anOperationReport, theError, null);
                        }

                        throw theError;
                    });

            };
            if( fprDo_Create){}/* CQT */
            aPrototype.fprDo_Create = fprDo_Create;









            var fprDo_Delete = function( theOperationKind, theOperationName, theTitle, theURL, theHitType, theField, theForm) {
                var aMethodName =  this._v_Type + " fprDo_Delete";


                var anOperationReport = this.fCreateAndRegisterReport(
                    theOperationKind,
                    theOperationName,
                    theTitle,
                    theURL,
                    theHitType,
                    theField,
                    null,
                    theForm,
                    null,
                    null
                );

                var someMissingParms = [ ];
                if( !theURL) {
                    someMissingParms.push( "theURL");
                }
                if( !theHitType) {
                    someMissingParms.push( "theHitType");
                }
                if( !theForm) {
                    someMissingParms.push( "theForm");
                }
                if( someMissingParms.length) {
                    this.pReportMissingParms( anOperationReport, someMissingParms);
                    return this.fNewDeferredRejectPromise(  anOperationReport);
                }

                if( this.LOGREQUESTS) {
                    this.fRecord( aMethodName, this.EVENTKIND_SERVICEREPORT_SENDING, anOperationReport, null, null);
                }

                var anAppBaseURL = this.fAppBaseURL();

                var aURL = anAppBaseURL + theURL;

                var aField      = theField;

                var aThis = this;

                return theS_HttpSvce
                    .fprDo_HttpPost( aURL, theForm)
                    .then( function( theResponse) {

                        if( !aThis.fCheckResponseReceived_AndUpdateReport( anOperationReport, theResponse)) {
                            return aThis.fNewDeferredRejectPromise( anOperationReport);
                        }

                        var someFields = theResponse;
                        if( aField) {
                            someFields = theResponse[ aField];
                            if( typeof someFields == "undefined") {
                                aThis.pReportNoResponseField( anOperationReport);
                                return aThis.fNewDeferredRejectPromise( anOperationReport);
                            }
                        }

                        if( aThis.LOGREPLIES) {
                            var aResponseLog = null;
                            if( aThis.LOGRESPONSES) {
                                aResponseLog = someFields;
                                if( !aResponseLog) {
                                    aResponseLog = [];
                                }
                                aResponseLog.fAsLogObject = (function() {
                                    if( aResponseLog.length) {
                                        return aResponseLog.slice( 0, aThis.MAXRESPONSELOGENTRIES);
                                    }
                                    return aResponseLog;
                                });
                            }
                            aThis.fRecord( aMethodName, aThis.EVENTKIND_SERVICEREPORT_OK, anOperationReport, null, aResponseLog);
                        }

                        return aThis.fNewDeferredResolveWithFieldsPromise( someFields);
                    })
                    ["catch"]( function( theError) {

                        aThis.pReportAjaxError( anOperationReport, theError, null);

                        if( aThis.LOGFAILURES) {
                            aThis.fRecord( aMethodName, aThis.EVENTKIND_SERVICEREPORT_FAIL, anOperationReport, theError, null);
                        }

                        throw theError;
                    });

            };
            if( fprDo_Delete){}/* CQT */
            aPrototype.fprDo_Delete = fprDo_Delete;









            var fprDo_Action = function( theOperationKind, theOperationName, theTitle, theURL, theHitType, theField, theForm) {
                var aMethodName =  this._v_Type + " fprDo_Action";

                var anOperationReport = this.fCreateAndRegisterReport(
                    theOperationKind,
                    theOperationName,
                    theTitle,
                    theURL,
                    theHitType,
                    theField,
                    null,
                    theForm,
                    null,
                    null
                );

                var someMissingParms = [ ];
                if( !theURL) {
                    someMissingParms.push( "theURL");
                }
                if( !theHitType) {
                    someMissingParms.push( "theHitType");
                }
                if( !theForm) {
                    someMissingParms.push( "theForm");
                }
                if( someMissingParms.length) {
                    this.pReportMissingParms( anOperationReport, someMissingParms);
                    return this.fNewDeferredRejectPromise(  anOperationReport);
                }

                if( this.LOGREQUESTS) {
                    this.fRecord( aMethodName, this.EVENTKIND_SERVICEREPORT_SENDING, anOperationReport, null, null);
                }

                var anAppBaseURL = this.fAppBaseURL();

                var aURL = anAppBaseURL + theURL;

                var aField      = theField;

                var aThis = this;

                return theS_HttpSvce
                    .fprDo_HttpPost( aURL, theForm)
                    .then( function( theResponse) {

                        if( !aThis.fCheckResponseReceived_AndUpdateReport( anOperationReport, theResponse)) {
                            return aThis.fNewDeferredRejectPromise( anOperationReport);
                        }

                        var someFields = theResponse;
                        if( aField) {
                            someFields = theResponse[ aField];
                            if( typeof someFields == "undefined") {
                                aThis.pReportNoResponseField( anOperationReport);
                                return aThis.fNewDeferredRejectPromise( anOperationReport);
                            }
                        }

                        if( aThis.LOGREPLIES) {
                            var aResponseLog = null;
                            if( aThis.LOGRESPONSES) {
                                aResponseLog = someFields;
                                if( !aResponseLog) {
                                    aResponseLog = [];
                                }
                                aResponseLog.fAsLogObject = (function() {
                                    if( aResponseLog.length) {
                                        return aResponseLog.slice( 0, aThis.MAXRESPONSELOGENTRIES);
                                    }
                                    return aResponseLog;
                                });
                            }
                            aThis.fRecord( aMethodName, aThis.EVENTKIND_SERVICEREPORT_OK, anOperationReport, null, aResponseLog);
                        }

                        return aThis.fNewDeferredResolveWithFieldsPromise( someFields);
                    })
                    ["catch"]( function( theError) {

                    aThis.pReportAjaxError( anOperationReport, theError, null);

                    if( aThis.LOGFAILURES) {
                        aThis.fRecord( aMethodName, aThis.EVENTKIND_SERVICEREPORT_FAIL, anOperationReport, theError, null);
                    }

                    throw theError;
                });

            };
            if( fprDo_Action){}/* CQT */
            aPrototype.fprDo_Action = fprDo_Action;









            return aPrototype;

        })();








        var HitServerSvce_Constructor = function( theTitle, theIdentifier, theRecorder) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_CommonSvceType.CommonSvce_Prototype;

            this._v_Prototype = null;
            this._v_Type      = null;
            this._v_Module    = null;

            this._v_Reports           = null;
            this._v_ReportsIdentifier = null;

            this._pInit_HitServerSvce( theTitle, theIdentifier, theRecorder);
        };
        HitServerSvce_Constructor.prototype = aHitServerSvce_Prototype;





        var HitServerSvce_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_CommonSvceType.CommonSvce_Prototype;

            this._v_Prototype = aHitServerSvce_Prototype;
            this._v_Type      = null;
            this._v_Module    = null;

            this._v_Reports           = null;
            this._v_ReportsIdentifier = null;
        };
        HitServerSvce_SuperPrototypeConstructor.prototype = aHitServerSvce_Prototype;



        var aModule = {
            "HitServerSvce_Prototype": aHitServerSvce_Prototype,
            "HitServerSvce_Constructor": HitServerSvce_Constructor,
            "HitServerSvce_SuperPrototypeConstructor": HitServerSvce_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aHitServerSvce_Prototype._v_Module = aModule;




        return aModule;
    };







    var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
    if( !anExistingModule) {

        var aModule = aMod_definer(
            theSS_Overrider,
            theSS_CommonSvceType,
            theSS_IdentifierType,
            theSS_HitServerReport,
            theSS_HttpSvce
        );
        anExistingModule = aModule;

        theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
    }



    return anExistingModule;


}]);







