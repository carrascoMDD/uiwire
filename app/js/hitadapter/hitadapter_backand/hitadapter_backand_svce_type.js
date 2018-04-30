'use strict';

/*
 * hitadapter_backand_svce_type.js
 *
 * Creado @author Antonio Carrasco Valero 201601040003
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




angular.module("hitAdapterTypes").factory("HitAdapterBackandSvceType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "HitAdapterSvceType",
    "IdentifierType",
    "HitServerReport",
    "HttpSvce",
    function( theSS_typesregistry,
              theSS_Overrider,
              theSS_HitAdapterSvceType,
              theSS_IdentifierType,
              theSS_HitServerReport,
              theSS_HttpSvce){



        var ModuleName     = "hitadapter_backand_svce_type";
        var ModulePackages = "hitadapter/hitadapter_backand";
        var ModuleFullName = ModulePackages + "/" + ModuleName;





        var aMod_definer = function( theS_Overrider,
                                     theS_HitAdapterSvceType,
                                     theS_IdentifierType,
                                     theS_HitServerReport,
                                     theS_HttpSvce) {


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

                theToInit.HITADAPTERSPRINGSVCE_DEFAULTNAME = "HitAdapterBackandSvceDefaultName";

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








            var aHitAdapterBackandSvce_Prototype = (function() {


                var aPrototype = new theS_HitAdapterSvceType.HitAdapterSvce_SuperPrototypeConstructor();

                pgInitFromModuleConstants( aPrototype);


                aPrototype._v_SuperPrototype = theS_HitAdapterSvceType.HitAdapterSvce_Prototype;


                aPrototype._v_Type = "HitAdapterBackandSvce";

                aPrototype._v_Module = null;





                var _pInit = function( theTitle, theIdentifier, theRecorder, theHitServer) {

                    this._pInit_HitAdapterBackandSvce( theTitle, theIdentifier, theRecorder, theHitServer);
                };
                if( _pInit){}/* CQT */
                aPrototype._pInit = _pInit;







                var _pInit_HitAdapterBackandSvce = function( theTitle, theIdentifier, theRecorder, theHitServer) {

                    /* Delegate on super prototype initialization */
                    aPrototype._v_SuperPrototype._pInit_HitAdapterSvce.apply( this, [
                        theTitle || this.HITADAPTERSPRINGSVCE_DEFAULTNAME,
                        theIdentifier,
                        theRecorder,
                        theHitServer
                    ]);

                    this._v_Prototype = aPrototype;
                    this._v_Type      = this._v_Prototype._v_Type;
                    this._v_Module    = aPrototype._v_Module;

                };
                if( _pInit_HitAdapterBackandSvce){}/* CQT */
                aPrototype._pInit_HitAdapterBackandSvce = _pInit_HitAdapterBackandSvce;












                var fprDo_RetrieveListWithParm = function( theOperationReport) {

                    var aMethodName = "fprDo_RetrieveListWithParm";
                    if( aMethodName){}/* CQT */

                    if( !theOperationReport) {
                        return this.fNewDeferredRejectPromise( "!theOperationReport");
                    }


                    var someMissingParms = [ ];

                    var anOp_URL = theOperationReport._v_URL;
                    if( !anOp_URL) {
                        someMissingParms.push( "theURL");
                    }

                    var anOp_ExpectedResponseType = theOperationReport._v_ExpectedResponseType;
                    if( !anOp_ExpectedResponseType) {
                        someMissingParms.push( "theHitType");
                    }

                    var anOp_Field = theOperationReport._v_Field;
                    if( !anOp_Field) {
                        someMissingParms.push( "theField");
                    }

                    var anOp_UrlParm = theOperationReport._v_UrlParm;
                    if( typeof anOp_UrlParm == "undefined") {
                        someMissingParms.push( "theUrlParm");
                    }


                    if( someMissingParms.length) {
                        this._v_HitServer.pReportMissingParms( theOperationReport, someMissingParms);
                        return this.fNewDeferredRejectPromise(  theOperationReport);
                    }

                    if( !anOp_UrlParm) {
                        this._v_HitServer.pReportNoUrlParm( theOperationReport, "theUrlParm");
                        return this.fNewDeferredResolveWithNullPromise();
                    }

                    var anAPIBaseURL = this.fAPIBaseURL();

                    var aURL = anAPIBaseURL + anOp_URL + anOp_UrlParm;

                    return this.fprDo_RetrieveList_inner( theOperationReport, aURL);

                };
                if( fprDo_RetrieveListWithParm){}/* CQT */
                aPrototype.fprDo_RetrieveListWithParm = fprDo_RetrieveListWithParm;











                var fprDo_RetrieveListWithQuery = function( theOperationReport) {
                    var aMethodName = "fprDo_RetrieveListWithQuery";
                    if( aMethodName){}/* CQT */

                    if( !theOperationReport) {
                        return this.fNewDeferredRejectPromise( "!theOperationReport");
                    }


                    var someMissingParms = [ ];


                    var anOp_URL = theOperationReport._v_URL;
                    if( !anOp_URL) {
                        someMissingParms.push( "theURL");
                    }

                    var anOp_ExpectedResponseType = theOperationReport._v_ExpectedResponseType;
                    if( !anOp_ExpectedResponseType) {
                        someMissingParms.push( "theHitType");
                    }

                    var anOp_Field = theOperationReport._v_Field;
                    if( !anOp_Field) {
                        someMissingParms.push( "theField");
                    }


                    var anOp_QueryParms = theOperationReport._v_UrlParm;

                    if( typeof anOp_QueryParms == "undefined") {
                        someMissingParms.push( "theQueryParms");
                    }


                    if( someMissingParms.length) {
                        this._v_HitServer.pReportMissingParms( theOperationReport, someMissingParms);
                        return this.fNewDeferredRejectPromise(  theOperationReport);
                    }

                    if( !anOp_QueryParms) {
                        this._v_HitServer.pReportNoUrlParm( theOperationReport, "theQueryParms");
                        return this.fNewDeferredResolveWithNullPromise();
                    }


                    var aURL = anOp_URL;


                    var someURLparmKeys = Object.keys( anOp_QueryParms);
                    var anNumURLparmKeys = someURLparmKeys.length;

                    for( var aURLparmKeyIdx=0; aURLparmKeyIdx < anNumURLparmKeys; aURLparmKeyIdx++) {

                        var aURLparmKey   = someURLparmKeys[ aURLparmKeyIdx];
                        var aURLparmValue =  anOp_QueryParms[ aURLparmKey];

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


                    var anAPIBaseURL = this.fAPIBaseURL();

                    var aFullURL = anAPIBaseURL + aURL;
                    if( aFullURL){}/* CQT */

                    return this.fprDo_RetrieveList_inner( theOperationReport, aFullURL);

                };
                if( fprDo_RetrieveListWithQuery){}/* CQT */
                aPrototype.fprDo_RetrieveListWithQuery = fprDo_RetrieveListWithQuery;









                var fprDo_RetrieveList = function( theOperationReport) {
                    var aMethodName = this._v_Type + " fprDo_RetrieveList";
                    if( aMethodName){}/* CQT */


                    if( !theOperationReport) {
                        return this.fNewDeferredRejectPromise( "!theOperationReport");
                    }


                    var someMissingParms = [ ];


                    var anOp_URL = theOperationReport._v_URL;
                    if( !anOp_URL) {
                        someMissingParms.push( "theURL");
                    }

                    var anOp_ExpectedResponseType = theOperationReport._v_ExpectedResponseType;
                    if( !anOp_ExpectedResponseType) {
                        someMissingParms.push( "theHitType");
                    }

                    var anOp_Field = theOperationReport._v_Field;
                    if( !anOp_Field) {
                        console.log("ACV OJO 201501251818 fprDo_RetrieveList ignore !theField");
                        if( false) {
                            someMissingParms.push( "theField");
                        }
                    }


                    if( someMissingParms.length) {
                        this._v_HitServer.pReportMissingParms( theOperationReport, someMissingParms);
                        return this._v_HitServer.fNewDeferredRejectPromise(  theOperationReport);
                    }


                    var anAPIBaseURL = this.fAPIBaseURL();

                    var aURL = anAPIBaseURL + anOp_URL;

                    var anOp_FirstIndex = theOperationReport._v_FirstIndex;
                    if( ( typeof anOp_FirstIndex == "number") || ( typeof anOp_FirstIndex == "string")) {
                        aURL = aURL.replace( this._v_HitServer.FIRSTINDEXURLREPLACEMENT, anOp_FirstIndex.toString());
                    }

                    var anOp_HowMany = theOperationReport._v_FirstIndex;
                    if( ( typeof anOp_HowMany == "number") || ( typeof anOp_HowMany == "string")) {
                        aURL = aURL.replace( this._v_HitServer.HOWMANYURLREPLACEMENT, anOp_HowMany.toString());
                    }


                    return this.fprDo_RetrieveList_inner( theOperationReport, aURL);

                };
                if( fprDo_RetrieveList){}/* CQT */
                aPrototype.fprDo_RetrieveList = fprDo_RetrieveList;











                var fprDo_RetrieveList_inner = function( theOperationReport, theURL) {
                    var aMethodName = this._v_Type + " fprDo_RetrieveList_inner";

                    if( !theOperationReport) {
                        someMissingParms.push( "theOperationReport");
                    }

                    var someMissingParms = [ ];

                    if( !theURL) {
                        someMissingParms.push( "theURL");
                    }

                    if( someMissingParms.length) {
                        this._v_HitServer.pReportMissingParms( theOperationReport, someMissingParms);
                        return this.fNewDeferredRejectPromise(  theOperationReport);
                    }

                    if( this._v_HitServer.LOGREQUESTS) {
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
                                aThis._v_HitServer.pReportNoResponseField( theOperationReport);
                                return aThis.fNewDeferredRejectPromise( theOperationReport);
                            }

                            if( aThis._v_HitServer.LOGREPLIES) {
                                var aResponseLog = null;
                                if( aThis._v_HitServer.LOGRESPONSES) {
                                    aResponseLog = someRows;
                                    if( !aResponseLog) {
                                        aResponseLog = [];
                                    }
                                    aResponseLog.fAsLogObject = (function() {
                                        if( aResponseLog.length) {
                                            return aResponseLog.slice( 0, aThis._v_HitServer.MAXRESPONSELOGENTRIES);
                                        }
                                        return aResponseLog;
                                    });
                                }
                                aThis.fRecord( aMethodName, aThis._v_HitServer.EVENTKIND_SERVICEREPORT_OK, theOperationReport, aURL, aResponseLog);
                            }

                            return aThis.fNewDeferredResolveWithRowsPromise( someRows);
                        })
                        ["catch"]( function( theError) {

                        aThis._v_HitServer.pReportAjaxError( theOperationReport, theError, null);

                        if( aThis._v_HitServer.LOGFAILURES) {
                            aThis.fRecord( aMethodName, aThis._v_HitServer.EVENTKIND_SERVICEREPORT_FAIL, theOperationReport, aURL, theError);
                        }

                        throw theError;
                    });

                };
                if( fprDo_RetrieveList_inner){}/* CQT */
                aPrototype.fprDo_RetrieveList_inner = fprDo_RetrieveList_inner;











                var fprDo_RetrieveOneWithQuery = function( theOperationReport) {
                    var aMethodName =  this._v_Type + " fprDo_RetrieveOneWithQuery";
                    if( aMethodName){}/* CQT */


                    if( !theOperationReport) {
                        return this.fNewDeferredRejectPromise( "!theOperationReport");
                    }

                    var someMissingParms = [ ];



                    var anOp_URL = theOperationReport._v_URL;
                    if( !anOp_URL) {
                        someMissingParms.push( "theURL");
                    }

                    var anOp_ExpectedResponseType = theOperationReport._v_ExpectedResponseType;
                    if( !anOp_ExpectedResponseType) {
                        someMissingParms.push( "theHitType");
                    }

                    var anOp_QueryParms = theOperationReport._v_UrlParm;
                    if( typeof anOp_QueryParms == "undefined") {
                        someMissingParms.push( "theQueryParms");
                    }


                    if( someMissingParms.length) {
                        this._v_HitServer.pReportMissingParms( theOperationReport, someMissingParms);
                        return this.fNewDeferredRejectPromise(  theOperationReport);
                    }

                    if( !anOp_QueryParms) {
                        this._v_HitServer.pReportNoUrlParm( theOperationReport, "theQueryParms");
                        return this.fNewDeferredResolveWithNullPromise();
                    }


                    var aURL = anOp_URL;


                    var someURLparmKeys = Object.keys( anOp_QueryParms);
                    var anNumURLparmKeys = someURLparmKeys.length;

                    for( var aURLparmKeyIdx=0; aURLparmKeyIdx < anNumURLparmKeys; aURLparmKeyIdx++) {

                        var aURLparmKey   = someURLparmKeys[ aURLparmKeyIdx];
                        var aURLparmValue =  anOp_QueryParms[ aURLparmKey];

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


                    var anAPIBaseURL = this.fAPIBaseURL();

                    var aFullURL = anAPIBaseURL + aURL;
                    if( aFullURL){}/* CQT */

                    return this.fprDo_RetrieveOne_inner( theOperationReport, aFullURL);

                };
                if( fprDo_RetrieveOneWithQuery){}/* CQT */
                aPrototype.fprDo_RetrieveOneWithQuery = fprDo_RetrieveOneWithQuery;











                var fprDo_RetrieveOne = function( theOperationReport) {
                    var aMethodName =  this._v_Type + " fprDo_RetrieveOne";
                    if( aMethodName){}/* CQT */


                    if( !theOperationReport) {
                        return this.fNewDeferredRejectPromise( "!theOperationReport");
                    }


                    var someMissingParms = [ ];


                    var anOp_URL = theOperationReport._v_URL;
                    if( !anOp_URL) {
                        someMissingParms.push( "theURL");
                    }

                    var anOp_ExpectedResponseType = theOperationReport._v_ExpectedResponseType;
                    if( !anOp_ExpectedResponseType) {
                        someMissingParms.push( "theHitType");
                    }

                    var anOp_UrlParm = theOperationReport._v_UrlParm;
                    if( typeof anOp_UrlParm == "undefined") {
                        someMissingParms.push( "theUrlParm");
                    }


                    if( someMissingParms.length) {
                        this._v_HitServer.pReportMissingParms( theOperationReport, someMissingParms);
                        return this.fNewDeferredRejectPromise(  theOperationReport);
                    }


                    var anAPIBaseURL = this.fAPIBaseURL();

                    var aURL = anAPIBaseURL + anOp_URL + anOp_UrlParm;
                    if( aURL){}/* CQT */

                    return this.fprDo_RetrieveOne_inner( theOperationReport, aURL);

                };
                if( fprDo_RetrieveOne){}/* CQT */
                aPrototype.fprDo_RetrieveOne = fprDo_RetrieveOne;










                var fprDo_RetrieveOne_inner = function( theOperationReport, theURL) {

                    var aMethodName =  this._v_Type + " fprDo_RetrieveOne_inner";

                    if( !theOperationReport) {
                        return this.fNewDeferredRejectPromise( "!theOperationReport");
                    }



                    var someMissingParms = [ ];

                    if( !theOperationReport) {
                        someMissingParms.push( "theOperationReport");
                    }

                    if( !theURL) {
                        someMissingParms.push( "theURL");
                    }

                    if( someMissingParms.length) {
                        this._v_HitServer.pReportMissingParms( theOperationReport, someMissingParms);
                        return this.fNewDeferredRejectPromise(  theOperationReport);
                    }

                    if( this._v_HitServer.LOGREQUESTS) {
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
                                    aThis._v_HitServer.pReportNoResponseField( theOperationReport);
                                    return aThis.fNewDeferredRejectPromise( theOperationReport);
                                }
                            }

                            if( aThis._v_HitServer.LOGREPLIES) {
                                var aResponseLog = null;
                                if( aThis._v_HitServer.LOGRESPONSES) {
                                    aResponseLog = someFields;
                                    if( !aResponseLog) {
                                        aResponseLog = [];
                                    }
                                    aResponseLog.fAsLogObject = (function() {
                                        if( aResponseLog.length) {
                                            return aResponseLog.slice( 0, aThis._v_HitServer.MAXRESPONSELOGENTRIES);
                                        }
                                        return aResponseLog;
                                    });
                                }
                                aThis.fRecord( aMethodName, aThis._v_HitServer.EVENTKIND_SERVICEREPORT_OK, theOperationReport, null, aResponseLog);
                            }

                            return aThis.fNewDeferredResolveWithFieldsPromise( someFields);
                        })
                        ["catch"]( function( theError) {

                        aThis._v_HitServer.pReportAjaxError( theOperationReport, theError, null);

                        if( aThis._v_HitServer.LOGFAILURES) {
                            aThis.fRecord( aMethodName, aThis._v_HitServer.EVENTKIND_SERVICEREPORT_FAIL, theOperationReport, theError, null);
                        }

                        throw theError;
                    });

                };
                if( fprDo_RetrieveOne_inner){}/* CQT */
                aPrototype.fprDo_RetrieveOne_inner = fprDo_RetrieveOne_inner;










                var fprDo_ChangeOne = function( theOperationReport) {
                    var aMethodName =  this._v_Type + " fprDo_ChangeOne";


                    var someMissingParms = [ ];

                    var anOp_URL = theOperationReport._v_URL;
                    if( !anOp_URL) {
                        someMissingParms.push( "theURL");
                    }

                    var anOp_ExpectedResponseType = theOperationReport._v_ExpectedResponseType;
                    if( !anOp_ExpectedResponseType) {
                        someMissingParms.push( "theHitType");
                    }

                    var anOp_Form = theOperationReport._v_Form;
                    if( !anOp_Form == "undefined") {
                        someMissingParms.push( "theForm");
                    }

                    if( someMissingParms.length) {
                        this._v_HitServer.pReportMissingParms( theOperationReport, someMissingParms);
                        return this.fNewDeferredRejectPromise(  theOperationReport);
                    }


                    if( this._v_HitServer.LOGREQUESTS) {
                        this.fRecord( aMethodName, this.EVENTKIND_SERVICEREPORT_SENDING, theOperationReport, null, null);
                    }


                    var anAPIBaseURL = this.fAPIBaseURL();

                    var aURL = anAPIBaseURL + anOp_URL;

                    var aField      = theOperationReport._v_Field;

                    var aThis = this;

                    return theS_HttpSvce
                        .fprDo_HttpPost( aURL, anOp_Form)
                        .then( function( theResponse) {

                            if( !aThis.fCheckResponseReceived_AndUpdateReport( theOperationReport, theResponse)) {
                                return aThis.fNewDeferredRejectPromise( theOperationReport);
                            }

                            var someFields = theResponse;
                            if( aField) {
                                someFields = theResponse[ aField];
                                if( typeof someFields == "undefined") {
                                    aThis._v_HitServer.pReportNoResponseField( theOperationReport);
                                    return aThis.fNewDeferredRejectPromise( theOperationReport);
                                }
                            }

                            if( aThis._v_HitServer.LOGREPLIES) {
                                var aResponseLog = null;
                                if( aThis._v_HitServer.LOGRESPONSES) {
                                    aResponseLog = someFields;
                                    if( !aResponseLog) {
                                        aResponseLog = [];
                                    }
                                    aResponseLog.fAsLogObject = (function() {
                                        if( aResponseLog.length) {
                                            return aResponseLog.slice( 0, aThis._v_HitServer.MAXRESPONSELOGENTRIES);
                                        }
                                        return aResponseLog;
                                    });
                                }
                                aThis.fRecord( aMethodName, aThis.EVENTKIND_SERVICEREPORT_OK, theOperationReport, null, aResponseLog);
                            }

                            return aThis.fNewDeferredResolveWithFieldsPromise( someFields);
                        })
                        ["catch"]( function( theError) {

                        aThis._v_HitServer.pReportAjaxError( theOperationReport, theError, null);

                        if( aThis._v_HitServer.LOGFAILURES) {
                            aThis.fRecord( aMethodName, aThis.EVENTKIND_SERVICEREPORT_FAIL, theOperationReport, theError, null);
                        }

                        throw theError;
                    });

                };
                if( fprDo_ChangeOne){}/* CQT */
                aPrototype.fprDo_ChangeOne = fprDo_ChangeOne;









                var fprDo_Create = function( theOperationReport) {
                    var aMethodName =  this._v_Type + " fprDo_Create";


                    var someMissingParms = [ ];

                    var anOp_URL = theOperationReport._v_URL;
                    if( !anOp_URL) {
                        someMissingParms.push( "theURL");
                    }

                    var anOp_ExpectedResponseType = theOperationReport._v_ExpectedResponseType;
                    if( !anOp_ExpectedResponseType) {
                        someMissingParms.push( "theHitType");
                    }

                    var anOp_Form = theOperationReport._v_Form;
                    if( !anOp_Form == "undefined") {
                        someMissingParms.push( "theForm");
                    }

                    if( someMissingParms.length) {
                        this._v_HitServer.pReportMissingParms( theOperationReport, someMissingParms);
                        return this.fNewDeferredRejectPromise(  theOperationReport);
                    }

                    if( this._v_HitServer.LOGREQUESTS) {
                        this.fRecord( aMethodName, this.EVENTKIND_SERVICEREPORT_SENDING, theOperationReport, null, null);
                    }

                    var anAPIBaseURL = this.fAPIBaseURL();

                    var aURL = anAPIBaseURL + anOp_URL;

                    var aField      = theOperationReport._v_Field;

                    var aThis = this;

                    return theS_HttpSvce
                        .fprDo_HttpPost( aURL, anOp_Form)
                        .then( function( theResponse) {

                            if( !aThis.fCheckResponseReceived_AndUpdateReport( theOperationReport, theResponse)) {
                                return aThis.fNewDeferredRejectPromise( theOperationReport);
                            }

                            var someFields = theResponse;
                            if( aField) {
                                someFields = theResponse[ aField];
                                if( typeof someFields == "undefined") {
                                    aThis._v_HitServer.pReportNoResponseField( theOperationReport);
                                    return aThis.fNewDeferredRejectPromise( theOperationReport);
                                }
                            }

                            if( aThis._v_HitServer.LOGREPLIES) {
                                var aResponseLog = null;
                                if( aThis._v_HitServer.LOGRESPONSES) {
                                    aResponseLog = someFields;
                                    if( !aResponseLog) {
                                        aResponseLog = [];
                                    }
                                    aResponseLog.fAsLogObject = (function() {
                                        if( aResponseLog.length) {
                                            return aResponseLog.slice( 0, aThis._v_HitServer.MAXRESPONSELOGENTRIES);
                                        }
                                        return aResponseLog;
                                    });
                                }
                                aThis.fRecord( aMethodName, aThis.EVENTKIND_SERVICEREPORT_OK, theOperationReport, null, aResponseLog);
                            }

                            return aThis.fNewDeferredResolveWithFieldsPromise( someFields);
                        })
                        ["catch"]( function( theError) {

                        aThis._v_HitServer.pReportAjaxError( theOperationReport, theError, null);

                        if( aThis._v_HitServer.LOGFAILURES) {
                            aThis.fRecord( aMethodName, aThis.EVENTKIND_SERVICEREPORT_FAIL, theOperationReport, theError, null);
                        }

                        throw theError;
                    });

                };
                if( fprDo_Create){}/* CQT */
                aPrototype.fprDo_Create = fprDo_Create;









                var fprDo_Delete = function( theOperationReport) {
                    var aMethodName =  this._v_Type + " fprDo_Delete";


                    var someMissingParms = [ ];

                    var anOp_URL = theOperationReport._v_URL;
                    if( !anOp_URL) {
                        someMissingParms.push( "theURL");
                    }

                    var anOp_ExpectedResponseType = theOperationReport._v_ExpectedResponseType;
                    if( !anOp_ExpectedResponseType) {
                        someMissingParms.push( "theHitType");
                    }

                    var anOp_Form = theOperationReport._v_Form;
                    if( !anOp_Form == "undefined") {
                        someMissingParms.push( "theForm");
                    }

                    if( someMissingParms.length) {
                        this._v_HitServer.pReportMissingParms( theOperationReport, someMissingParms);
                        return this.fNewDeferredRejectPromise(  theOperationReport);
                    }


                    if( this._v_HitServer.LOGREQUESTS) {
                        this.fRecord( aMethodName, this.EVENTKIND_SERVICEREPORT_SENDING, theOperationReport, null, null);
                    }

                    var anAPIBaseURL = this.fAPIBaseURL();

                    var aURL = anAPIBaseURL + anOp_URL;

                    var aField      = theOperationReport._v_Field;

                    var aThis = this;

                    return theS_HttpSvce
                        .fprDo_HttpPost( aURL, anOp_Form)
                        .then( function( theResponse) {

                            if( !aThis.fCheckResponseReceived_AndUpdateReport( theOperationReport, theResponse)) {
                                return aThis.fNewDeferredRejectPromise( theOperationReport);
                            }

                            var someFields = theResponse;
                            if( aField) {
                                someFields = theResponse[ aField];
                                if( typeof someFields == "undefined") {
                                    aThis._v_HitServer.pReportNoResponseField( theOperationReport);
                                    return aThis.fNewDeferredRejectPromise( theOperationReport);
                                }
                            }

                            if( aThis._v_HitServer.LOGREPLIES) {
                                var aResponseLog = null;
                                if( aThis._v_HitServer.LOGRESPONSES) {
                                    aResponseLog = someFields;
                                    if( !aResponseLog) {
                                        aResponseLog = [];
                                    }
                                    aResponseLog.fAsLogObject = (function() {
                                        if( aResponseLog.length) {
                                            return aResponseLog.slice( 0, aThis._v_HitServer.MAXRESPONSELOGENTRIES);
                                        }
                                        return aResponseLog;
                                    });
                                }
                                aThis.fRecord( aMethodName, aThis.EVENTKIND_SERVICEREPORT_OK, theOperationReport, null, aResponseLog);
                            }

                            return aThis.fNewDeferredResolveWithFieldsPromise( someFields);
                        })
                        ["catch"]( function( theError) {

                        aThis._v_HitServer.pReportAjaxError( theOperationReport, theError, null);

                        if( aThis._v_HitServer.LOGFAILURES) {
                            aThis.fRecord( aMethodName, aThis.EVENTKIND_SERVICEREPORT_FAIL, theOperationReport, theError, null);
                        }

                        throw theError;
                    });

                };
                if( fprDo_Delete){}/* CQT */
                aPrototype.fprDo_Delete = fprDo_Delete;









                var fprDo_Action = function( theOperationReport) {
                    var aMethodName =  this._v_Type + " fprDo_Action";

                    var someMissingParms = [ ];


                    var anOp_URL = theOperationReport._v_URL;
                    if( !anOp_URL) {
                        someMissingParms.push( "theURL");
                    }

                    var anOp_ExpectedResponseType = theOperationReport._v_ExpectedResponseType;
                    if( !anOp_ExpectedResponseType) {
                        someMissingParms.push( "theHitType");
                    }

                    var anOp_Form = theOperationReport._v_Form;
                    if( !anOp_Form == "undefined") {
                        someMissingParms.push( "theForm");
                    }


                    if( someMissingParms.length) {
                        this.pReportMissingParms( theOperationReport, someMissingParms);
                        return this.fNewDeferredRejectPromise(  theOperationReport);
                    }

                    if( this.LOGREQUESTS) {
                        this.fRecord( aMethodName, this.EVENTKIND_SERVICEREPORT_SENDING, theOperationReport, null, null);
                    }

                    var anAPIBaseURL = this.fAPIBaseURL();

                    var aURL = anAPIBaseURL + anOp_URL;

                    var aField      = theOperationReport._v_Field;

                    var aThis = this;

                    return theS_HttpSvce
                        .fprDo_HttpPost( aURL, anOp_Form)
                        .then( function( theResponse) {

                            if( !aThis.fCheckResponseReceived_AndUpdateReport( theOperationReport, theResponse)) {
                                return aThis.fNewDeferredRejectPromise( theOperationReport);
                            }

                            var someFields = theResponse;
                            if( aField) {
                                someFields = theResponse[ aField];
                                if( typeof someFields == "undefined") {
                                    aThis._v_HitServer.pReportNoResponseField( theOperationReport);
                                    return aThis.fNewDeferredRejectPromise( theOperationReport);
                                }
                            }

                            if( aThis._v_HitServer.LOGREPLIES) {
                                var aResponseLog = null;
                                if( aThis._v_HitServer.LOGRESPONSES) {
                                    aResponseLog = someFields;
                                    if( !aResponseLog) {
                                        aResponseLog = [];
                                    }
                                    aResponseLog.fAsLogObject = (function() {
                                        if( aResponseLog.length) {
                                            return aResponseLog.slice( 0, aThis._v_HitServer.MAXRESPONSELOGENTRIES);
                                        }
                                        return aResponseLog;
                                    });
                                }
                                aThis.fRecord( aMethodName, aThis.EVENTKIND_SERVICEREPORT_OK, theOperationReport, null, aResponseLog);
                            }

                            return aThis.fNewDeferredResolveWithFieldsPromise( someFields);
                        })
                        ["catch"]( function( theError) {

                        aThis._v_HitServer.pReportAjaxError( theOperationReport, theError, null);

                        if( aThis._v_HitServer.LOGFAILURES) {
                            aThis.fRecord( aMethodName, aThis.EVENTKIND_SERVICEREPORT_FAIL, theOperationReport, theError, null);
                        }

                        throw theError;
                    });

                };
                if( fprDo_Action){}/* CQT */
                aPrototype.fprDo_Action = fprDo_Action;







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





                return aPrototype;

            })();








            var HitAdapterBackandSvce_Constructor = function( theTitle, theIdentifier, theRecorder, theHitServer) {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_HitAdapterSvceType.HitAdapterSvce_Prototype;

                this._v_Prototype = null;
                this._v_Type      = null;
                this._v_Module    = null;

                this._pInit_HitAdapterBackandSvce( theTitle, theIdentifier, theRecorder, theHitServer);
            };
            HitAdapterBackandSvce_Constructor.prototype = aHitAdapterBackandSvce_Prototype;





            var HitAdapterBackandSvce_SuperPrototypeConstructor = function() {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_HitAdapterSvceType.HitAdapterSvce_Prototype;

                this._v_Prototype = aHitAdapterBackandSvce_Prototype;
                this._v_Type      = null;
                this._v_Module    = null;

            };
            HitAdapterBackandSvce_SuperPrototypeConstructor.prototype = aHitAdapterBackandSvce_Prototype;



            var aModule = {
                "HitAdapterBackandSvce_Prototype": aHitAdapterBackandSvce_Prototype,
                "HitAdapterBackandSvce_Constructor": HitAdapterBackandSvce_Constructor,
                "HitAdapterBackandSvce_SuperPrototypeConstructor": HitAdapterBackandSvce_SuperPrototypeConstructor
            };
            pgInitFromModuleConstants( aModule);
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;

            aHitAdapterBackandSvce_Prototype._v_Module = aModule;




            return aModule;
        };







        var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        if( !anExistingModule) {

            var aModule = aMod_definer(
                theSS_Overrider,
                theSS_HitAdapterSvceType,
                theSS_IdentifierType,
                theSS_HitServerReport,
                theSS_HttpSvce
            );
            anExistingModule = aModule;

            theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
        }



        return anExistingModule;


    }]);







