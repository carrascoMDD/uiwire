'use strict';

/*
 * hitadapter_svce_type.js
 *
 * Creado @author Antonio Carrasco Valero 2015123101738
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




angular.module("hitAdapterTypes").factory("HitAdapterSvceType", [
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



    var ModuleName     = "hitadapter_svce_type";
    var ModulePackages = "hitadapter";
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


            theToInit.HITADAPTERSVCE_DEFAULTNAME = "HitAdapterSvceDefaultName";


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






        var aHitAdapterSvce_Prototype = (function() {


            var aPrototype = new theS_CommonSvceType.CommonSvce_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_SuperPrototype = theS_CommonSvceType.CommonSvce_Prototype;


            aPrototype._v_Type = "HitAdapterSvce";

            aPrototype._v_Module = null;


            aPrototype._v_HitServer= null;





            var _pInit = function( theTitle, theIdentifier, theRecorder, theHitServer) {

                this._pInit_HitAdapterSvce( theTitle, theIdentifier, theRecorder, theHitServer);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_HitAdapterSvce = function( theTitle, theIdentifier, theRecorder, theHitServer) {

                /* Delegate on super prototype initialization */
                aPrototype._v_SuperPrototype._pInit_CommonSvce.apply( this, [
                    theTitle || this.HITADAPTERSVCE_DEFAULTNAME,
                    theIdentifier,
                    theRecorder
                ]);

                this._v_Prototype = aPrototype;
                this._v_Type      = this._v_Prototype._v_Type;
                this._v_Module    = aPrototype._v_Module;

                this._v_HitServer= theHitServer;

            };
            if( _pInit_HitAdapterSvce){}/* CQT */
            aPrototype._pInit_HitAdapterSvce = _pInit_HitAdapterSvce;












            var fprDo_RetrieveListWithParm = function( theOperationReport) {


                return this.fNewDeferredRejectPromise( "SubtypeResponsibility:fprDo_RetrieveListWithParm");

            };
            if( fprDo_RetrieveListWithParm){}/* CQT */
            aPrototype.fprDo_RetrieveListWithParm = fprDo_RetrieveListWithParm;











            var fprDo_RetrieveListWithQuery = function( theOperationReport) {

                return this.fNewDeferredRejectPromise( "SubtypeResponsibility:fprDo_RetrieveListWithQuery");

            };
            if( fprDo_RetrieveListWithQuery){}/* CQT */
            aPrototype.fprDo_RetrieveListWithQuery = fprDo_RetrieveListWithQuery;









            var fprDo_RetrieveList = function( theOperationReport) {

                return this.fNewDeferredRejectPromise( "SubtypeResponsibility:fprDo_RetrieveList");

            };
            if( fprDo_RetrieveList){}/* CQT */
            aPrototype.fprDo_RetrieveList = fprDo_RetrieveList;











            var fprDo_RetrieveOneWithQuery = function( theOperationKind, theOperationName, theTitle, theURL, theHitType, theField, theQueryParms) {

                return this.fNewDeferredRejectPromise( "SubtypeResponsibility:fprDo_RetrieveOneWithQuery");

            };
            if( fprDo_RetrieveOneWithQuery){}/* CQT */
            aPrototype.fprDo_RetrieveOneWithQuery = fprDo_RetrieveOneWithQuery;











            var fprDo_RetrieveOne = function( theOperationKind, theOperationName, theTitle, theURL, theHitType, theField, theUrlParm) {

                return this.fNewDeferredRejectPromise( "SubtypeResponsibility:fprDo_RetrieveOneWithQuery");

            };
            if( fprDo_RetrieveOne){}/* CQT */
            aPrototype.fprDo_RetrieveOne = fprDo_RetrieveOne;











            var fprDo_ChangeOne = function( theOperationKind, theOperationName, theTitle, theURL, theHitType, theField, theForm) {

                return this.fNewDeferredRejectPromise( "SubtypeResponsibility:fprDo_RetrieveOneWithQuery");

            };
            if( fprDo_ChangeOne){}/* CQT */
            aPrototype.fprDo_ChangeOne = fprDo_ChangeOne;









            var fprDo_Create = function( theOperationKind, theOperationName, theTitle, theURL, theHitType, theField, theForm) {

                return this.fNewDeferredRejectPromise( "SubtypeResponsibility:fprDo_Create");

            };
            if( fprDo_Create){}/* CQT */
            aPrototype.fprDo_Create = fprDo_Create;









            var fprDo_Delete = function( theOperationKind, theOperationName, theTitle, theURL, theHitType, theField, theForm) {

                return this.fNewDeferredRejectPromise( "SubtypeResponsibility:fprDo_Delete");

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









            var fCheckResponseReceived_AndUpdateReport = function(
                theOperationReport,
                theResponse) {

                return this.fNewDeferredRejectPromise( "SubtypeResponsibility:fCheckResponseReceived_AndUpdateReport");

            };
            if( fCheckResponseReceived_AndUpdateReport){}/* CQT */
            aPrototype.fCheckResponseReceived_AndUpdateReport = fCheckResponseReceived_AndUpdateReport;







            return aPrototype;

        })();








        var HitAdapterSvce_Constructor = function( theTitle, theIdentifier, theRecorder, theHitServer) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_CommonSvceType.CommonSvce_Prototype;

            this._v_Prototype = null;
            this._v_Type      = null;
            this._v_Module    = null;

            this._v_HitServer= null;


            this._pInit_HitAdapterSvce( theTitle, theIdentifier, theRecorder, theHitServer);
        };
        HitAdapterSvce_Constructor.prototype = aHitAdapterSvce_Prototype;





        var HitAdapterSvce_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_CommonSvceType.CommonSvce_Prototype;

            this._v_Prototype = aHitAdapterSvce_Prototype;
            this._v_Type      = null;
            this._v_Module    = null;

            this._v_HitServer= null;

        };
        HitAdapterSvce_SuperPrototypeConstructor.prototype = aHitAdapterSvce_Prototype;



        var aModule = {
            "HitAdapterSvce_Prototype": aHitAdapterSvce_Prototype,
            "HitAdapterSvce_Constructor": HitAdapterSvce_Constructor,
            "HitAdapterSvce_SuperPrototypeConstructor": HitAdapterSvce_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aHitAdapterSvce_Prototype._v_Module = aModule;




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







