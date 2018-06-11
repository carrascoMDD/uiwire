'use strict';

/*
 * fasesvalidacion_svce_type.js
 *
 * Creado @author Antonio Carrasco Valero 201411031729
 *
 *
 ***************************************************************************

 Copyright 2014 2015 2016 Antonio Carrasco Valero
 Utiliza uiwire asynchronous user interface written by Antonio Carrasco Valero in Javascript with AngularJS and licensed under EUPL  http://www.uiwire.org

 Licensed under the EUPL, Version 1.1 only (the "Licence"); You may not use this work except in compliance with the Licence. You may obtain a copy of the Licence at: https://joinup.ec.europa.eu/software/page/eupl/licence-eupl Unless required by applicable law or agreed to in writing, software distributed under the Licence is distributed on an "AS IS" basis, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the Licence for the specific language governing permissions and limitations under the Licence.
 {{License2}}

 {{Licensed1}}
 {{Licensed2}}

 ***************************************************************************
 *
 */




angular.module("fasesvalidacionTypes").factory("FasesvalidacionSvceType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "HitServerSvceType",
    "HttpSvce",
function( theSS_typesregistry,
          theSS_Overrider,
          theSS_HitServerSvceType,
          theSS_HttpSvce){



    var ModuleName     = "fasesvalidacion_svce_type";
    var ModulePackages = "springnut/fasesvalidacion";
    var ModuleFullName = ModulePackages + "/" + ModuleName;





    var aMod_definer = function( theS_Overrider,
                                 theS_HitServerSvceType,
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

            theToInit.MAXRESPONSELOGENTRIES = 4;


            theToInit.LISTAFICHEROS_URL           = "/ficheros/listaFicherosConIdentificasJSON";
            theToInit.LISTAFICHEROS_TYPE          = "ListaFicherosConIdentificas";
            theToInit.LISTAFICHEROS_RESPONSEFIELD = "vFicheros";


            theToInit.CRITERIOSYULTIMASFASESDEFICHERO_URL = "/ine/validaciones/fasesRealizadasValidacionAvisosYerroresINEjson/";
            theToInit.CRITERIOSYULTIMASFASESDEFICHERO_TYPE = "FicheroYFasesrealizadas";
            theToInit.CRITERIOSYULTIMASFASESDEFICHERO_RESPONSEFIELD = "criteriosYUltimaFaserealizada";


            theToInit.HISTORIAFASESDEFICHERO_URL = "/ine/validaciones/fasesRealizadasValidacionAvisosYerroresINEjson/";
            theToInit.HISTORIAFASESDEFICHERO_TYPE = "FicheroYFasesrealizadas";
            theToInit.HISTORIAFASESDEFICHERO_RESPONSEFIELD = "fasesRealizadas";





            theToInit.LANZARVALIDACIONAVISOSYERRORES_URL = "/ine/validaciones/lanzarValidacionAvisosYerroresINEjson";
            theToInit.LANZARVALIDACIONAVISOSYERRORES_TYPE = "InformeEstadoValidaciones";
            theToInit.LANZARVALIDACIONAVISOSYERRORES_RESPONSEFIELD = "informeProgreso";

            theToInit.MAXLAPSEDMILLISTOREUSELASTFICHEROYFASESREALIZADAS = 999;

        };

        var aSampleFasesRealizadasResponse_body = {
            "vTipo": "FicheroYFasesrealizadas",
            "fechaInforme": "08/11/2014 06:45:52 .398 (+0100)",
            "exito": true,
            "informeAUsuario": "",
            "excepcion": null,
            "tipoBoletinURLpath": "ine",
            "idFichero": 1,
            "provinciaFichero": 3,
            "nombreProvinciaFichero": "Alicante",
            "anoFichero": 2009,
            "mesFichero": 3,
            "intervaloActualizacion": 3000,
            "fasesRealizadas": [
                {
                    "vTipo": "Fasesrealizadas",
                    "class_destacado": "destacado",
                    "empty_str": "",
                    "destacar": false,
                    "reciente": false,
                    "faFechaStr": "08/11/2014 01:27:51 .0 (+0100)",
                    "faFechaUltimaStr": "08/11/2014 01:28:08 .0 (+0100)",
                    "prFechaInicioStr": null,
                    "prFechaUltimaStr": null,
                    "faEstadoStr": "Terminado",
                    "faExitoStr": "Exito",
                    "prEstadoStr": null,
                    "prExitoStr": null,
                    "prCausaErrorStr": null,
                    "farId": 901,
                    "crId": 2,
                    "crNombre": "Errores INE",
                    "crDescripcion": null,
                    "id": 2042,
                    "faIdfichero": 1,
                    "faFecha": 1415406471000,
                    "faNumFallos": 1753,
                    "faFechaultima": 1415406488000,
                    "faEstado": 2,
                    "faExito": 1,
                    "existeresultado": 1,
                    "prId": 1982,
                    "prFechainicio": 1415406471000,
                    "prFechaultima": 1415406488000,
                    "prEstado": 2,
                    "prExito": 1,
                    "prPorcentajerealizado": 100,
                    "prSegundosrestantes": 0,
                    "prCausaerror": 0,
                    "vtipo": "Fasesrealizadas"
                }
            ],
            "criteriosYUltimaFaserealizada": [
                {
                    "vTipo": "CriterioYUltimaFaserealizada",
                    "class_destacado": "destacado",
                    "empty_str": "",
                    "criterio": {
                        "vTipo": "Criterios",
                        "crId": 245,
                        "crNombre": "cambiado-auxcriterio-245",
                        "crDescripcion": "cambiado-descripcion auxcriterio-245",
                        "vtipo": "Criterios"
                    },
                    "requiereConfirmacion": false,
                    "destacar": false,
                    "reciente": false,
                    "ultimaFaserealizada": null
                },
                {
                    "vTipo": "CriterioYUltimaFaserealizada",
                    "class_destacado": "destacado",
                    "empty_str": "",
                    "criterio": {
                        "vTipo": "Criterios",
                        "crId": 1,
                        "crNombre": "Valida",
                        "crDescripcion": null,
                        "vtipo": "Criterios"
                    },
                    "requiereConfirmacion": false,
                    "destacar": false,
                    "reciente": false,
                    "ultimaFaserealizada": {
                        "vTipo": "Fasesrealizadas",
                        "class_destacado": "destacado",
                        "empty_str": "",
                        "destacar": false,
                        "reciente": false,
                        "faFechaStr": "07/11/2014 09:04:28",
                        "faFechaUltimaStr": "07/11/2014 09:04:28",
                        "prFechaInicioStr": null,
                        "prFechaUltimaStr": null,
                        "faEstadoStr": "Terminado",
                        "faExitoStr": "Exito",
                        "prEstadoStr": null,
                        "prExitoStr": null,
                        "prCausaErrorStr": null,
                        "farId": 896,
                        "crId": 1,
                        "crNombre": "Valida",
                        "crDescripcion": null,
                        "id": 2031,
                        "faIdfichero": 1,
                        "faFecha": 1415347468000,
                        "faNumFallos": 0,
                        "faFechaultima": 1415347468000,
                        "faEstado": 2,
                        "faExito": 1,
                        "existeresultado": 1,
                        "prId": 1971,
                        "prFechainicio": 1415347468000,
                        "prFechaultima": 1415347468000,
                        "prEstado": 2,
                        "prExito": 1,
                        "prPorcentajerealizado": 100,
                        "prSegundosrestantes": 0,
                        "prCausaerror": 0,
                        "vtipo": "Fasesrealizadas"
                    }
                }
            ]
        };
        if( aSampleFasesRealizadasResponse_body){}/* CQT */




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


            theToInit.FASESVALIDACION_CAMBIARPARMPOSTFIX = "_cambiar";


            theToInit.FIRSTINDEXURLREPLACEMENT = "{thePrimero}";
            theToInit.HOWMANYURLREPLACEMENT    = "{theCuantos}";


            theToInit.FASESVALIDACIONSVCE_DEFAULTNAME = "FasesvalidacionSvceDefaultName";

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






        var aFasesvalidacionSvce_Prototype = (function() {


            var aPrototype = new theS_HitServerSvceType.HitServerSvce_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_SuperPrototype = theS_HitServerSvceType.HitServerSvce_Prototype;


            aPrototype._v_Type = "FasesvalidacionSvce";

            aPrototype._v_Module = null;


            aPrototype._v_LastFicheroYFasesrealizadasPorIdFichero     = null;
            aPrototype._v_LastFicheroYFasesrealizadasTimePorIdFichero = null;






            var _pInit = function( theTitle, theIdentifier, theRecorder) {

                this._pInit_FasesvalidacionSvce( theTitle, theIdentifier, theRecorder);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_FasesvalidacionSvce = function( theTitle, theIdentifier, theRecorder) {

                /* Delegate on super prototype initialization */
                aPrototype._v_SuperPrototype._pInit_HitServerSvce.apply( this, [
                    theTitle || this.FASESVALIDACIONSVCE_DEFAULTNAME,
                    theIdentifier,
                    theRecorder
                ]);

                this._v_Prototype = aPrototype;
                this._v_Type      = this._v_Prototype._v_Type;
                this._v_Module    = aPrototype._v_Module;

                this._v_LastFicheroYFasesrealizadasPorIdFichero     = { };
                this._v_LastFicheroYFasesrealizadasTimePorIdFichero = { };
            };
            if( _pInit_FasesvalidacionSvce){}/* CQT */
            aPrototype._pInit_FasesvalidacionSvce = _pInit_FasesvalidacionSvce;








            var fAddParmToURL = function( theURL, theParmName, theParmValue) {

                if( !theParmName) {
                    return theURL;
                }

                var aURL = theURL;
                if( aURL == null) {
                    aURL = "";
                }

                if( aURL.indexOf( this.HTTPQUERYCHAR) < 0) {
                    aURL +=  this.HTTPQUERYCHAR;
                }
                else {
                    aURL +=  this.HTTPEXTRAPARMCHAR;
                }

                var aParmNameEncoded = encodeURIComponent( theParmName);
                if( aParmNameEncoded){}/* CQT */
                aURL += aParmNameEncoded;

                aURL += this.HTTPPARMASSIGN;

                var aValueEncoded    = encodeURIComponent( theParmValue);
                if( aValueEncoded){}/* CQT */
                aURL += aValueEncoded;

                return aURL;
            };
            if( fAddParmToURL){}/* CQT */
            aPrototype.fAddParmToURL = fAddParmToURL;








            var fprDo_Fasesvalidacion_ListaFicheros = function( theTipoBoletin, theFirstIndex, theHowMany) {
                var aMethodName = "fprDo_Fasesvalidacion_ListaFicheros";

                var anAppBaseURL = this.fAppBaseURL();

                var aURL = anAppBaseURL + this.LISTAFICHEROS_URL;

                var aField = this.LISTAFICHEROS_RESPONSEFIELD;

                var anOperationReport = this.fCreateAndRegisterReport(
                    this.OPERATIONKIND_LIST,
                    aMethodName,
                    aMethodName,
                    this.LISTAFICHEROS_URL,
                    this.LISTAFICHEROS_TYPE,
                    aField,
                    null,
                    { "theTipoBoletin": theTipoBoletin},
                    theFirstIndex,
                    theHowMany
                );


                aURL = this.fAddParmToURL( aURL, "theTipoBoletin", theTipoBoletin);

                if( !( typeof theFirstIndex == "undefined")) {
                    aURL = this.fAddParmToURL( aURL, "thePrimero", theFirstIndex);
                }

                if( !( typeof theHowMany == "undefined")) {
                    aURL = this.fAddParmToURL( aURL, "theCuantos", theHowMany);
                }

                
                
                var aThis = this;

                return theS_HttpSvce
                    .fprDo_HttpGet( aURL)
                    .then( function( theResponse) {

                        if( !aThis.fCheckResponseReceived_AndUpdateReport( anOperationReport, theResponse)) {
                            return aThis.fNewDeferredRejectPromise( anOperationReport);
                        }


                        var aField = anOperationReport._v_Field;

                        var someRows = theResponse[ aField];

                        if( typeof someRows == "undefined") {
                            aThis.pReportNoResponseField( anOperationReport);
                            return aThis.fNewDeferredRejectPromise( anOperationReport);
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
                            aThis.fRecord( aMethodName, aThis.EVENTKIND_SERVICEREPORT_OK, anOperationReport, aURL, aResponseLog);
                        }

                        return aThis.fNewDeferredResolveWithRowsPromise( someRows);
                    })
                    ["catch"]( function( theError) {

                    aThis.pReportAjaxError( anOperationReport, theError, null);

                    if( aThis.LOGFAILURES) {
                        aThis.fRecord( aMethodName, aThis.EVENTKIND_SERVICEREPORT_FAIL, anOperationReport, aURL, theError);
                    }

                    throw theError;
                });

            };
            if( fprDo_Fasesvalidacion_ListaFicheros){}/* CQT */
            aPrototype.fprDo_Fasesvalidacion_ListaFicheros = fprDo_Fasesvalidacion_ListaFicheros;











            var fprDo_Fasesvalidacion_ListaCriteriosYUltimasFasesDeFichero = function( theIdFichero, theFirstIndex, theHowMany) {
                var aMethodName = "fprDo_Fasesvalidacion_ListaCriteriosYUltimasFasesDeFichero";

                var aField = this.CRITERIOSYULTIMASFASESDEFICHERO_RESPONSEFIELD;

                var aLastFicheroYFasesrealizadas = this._v_LastFicheroYFasesrealizadasPorIdFichero[ theIdFichero];
                if( aLastFicheroYFasesrealizadas) {
                    var aLastFicheroYFasesrealizadasTime = this._v_LastFicheroYFasesrealizadasTimePorIdFichero[ theIdFichero];
                    if( aLastFicheroYFasesrealizadasTime) {
                        var aTimeNow = new Date().getTime();
                        var aLapsed = aTimeNow - aLastFicheroYFasesrealizadasTime;
                        if( aLapsed < this.MAXLAPSEDMILLISTOREUSELASTFICHEROYFASESREALIZADAS) {

                            var someRows = aLastFicheroYFasesrealizadas[ aField];
                            if( someRows){}/* CQT */

                            return this.fNewDeferredResolveWithRowsPromise( someRows);
                        }
                    }
                }


                var anOperationReport = this.fCreateAndRegisterReport(
                    this.OPERATIONKIND_LIST,
                    aMethodName,
                    aMethodName,
                    this.CRITERIOSYULTIMASFASESDEFICHERO_URL,
                    this.CRITERIOSYULTIMASFASESDEFICHERO_TYPE,
                    aField,
                    theIdFichero,
                    null,
                    theFirstIndex,
                    theHowMany
                );


                if( !theIdFichero) {
                    this.pReportNoUrlParm( anOperationReport, "theIdFichero");
                    return this.fNewDeferredResolveWithNullPromise();
                }


                var anAppBaseURL = this.fAppBaseURL();

                var aURL = anAppBaseURL + this.CRITERIOSYULTIMASFASESDEFICHERO_URL + theIdFichero;



                var aThis = this;

                return theS_HttpSvce
                    .fprDo_HttpGet( aURL)
                    .then( function( theResponse) {

                        if( !aThis.fCheckResponseReceived_AndUpdateReport_ListaUltimasFasesDeFichero( anOperationReport, theResponse)) {
                            return aThis.fNewDeferredRejectPromise( anOperationReport);
                        }

                        aThis._v_LastFicheroYFasesrealizadasPorIdFichero[ theIdFichero]     = theResponse;
                        aThis._v_LastFicheroYFasesrealizadasTimePorIdFichero[ theIdFichero] = new Date().getTime();

                        var aField = anOperationReport._v_Field;

                        var someRows = theResponse[ aField];

                        if( typeof someRows == "undefined") {
                            aThis.pReportNoResponseField( anOperationReport);
                            return aThis.fNewDeferredRejectPromise( anOperationReport);
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
                            aThis.fRecord( aMethodName, aThis.EVENTKIND_SERVICEREPORT_OK, anOperationReport, aURL, aResponseLog);
                        }

                        return aThis.fNewDeferredResolveWithRowsPromise( someRows);
                    })
                    ["catch"]( function( theError) {

                    aThis.pReportAjaxError( anOperationReport, theError, null);

                    if( aThis.LOGFAILURES) {
                        aThis.fRecord( aMethodName, aThis.EVENTKIND_SERVICEREPORT_FAIL, anOperationReport, aURL, theError);
                    }

                    throw theError;
                });

            };
            if( fprDo_Fasesvalidacion_ListaCriteriosYUltimasFasesDeFichero){}/* CQT */
            aPrototype.fprDo_Fasesvalidacion_ListaCriteriosYUltimasFasesDeFichero = fprDo_Fasesvalidacion_ListaCriteriosYUltimasFasesDeFichero;












            var fprDo_Fasesvalidacion_ListaFasesDeFichero = function( theIdFichero, theFirstIndex, theHowMany) {
                var aMethodName = "fprDo_Fasesvalidacion_ListaFasesDeFichero";

                var aField = this.HISTORIAFASESDEFICHERO_RESPONSEFIELD;

                var aLastFicheroYFasesrealizadas = this._v_LastFicheroYFasesrealizadasPorIdFichero[ theIdFichero];
                if( aLastFicheroYFasesrealizadas) {
                    var aLastFicheroYFasesrealizadasTime = this._v_LastFicheroYFasesrealizadasTimePorIdFichero[ theIdFichero];
                    if( aLastFicheroYFasesrealizadasTime) {
                        var aTimeNow = new Date().getTime();
                        var aLapsed = aTimeNow - aLastFicheroYFasesrealizadasTime;
                        if( aLapsed < this.MAXLAPSEDMILLISTOREUSELASTFICHEROYFASESREALIZADAS) {

                            var someRows = aLastFicheroYFasesrealizadas[ aField];
                            if( someRows){}/* CQT */

                            return this.fNewDeferredResolveWithRowsPromise( someRows);
                        }
                    }
                }


                var anOperationReport = this.fCreateAndRegisterReport(
                    this.OPERATIONKIND_LIST,
                    aMethodName,
                    aMethodName,
                    this.HISTORIAFASESDEFICHERO_URL,
                    this.HISTORIAFASESDEFICHERO_TYPE,
                    aField,
                    theIdFichero,
                    null,
                    theFirstIndex,
                    theHowMany
                );


                if( !theIdFichero) {
                    this.pReportNoUrlParm( anOperationReport, "theIdFichero");
                    return this.fNewDeferredResolveWithNullPromise();
                }

                var anAppBaseURL = this.fAppBaseURL();

                var aURL = anAppBaseURL + this.HISTORIAFASESDEFICHERO_URL + theIdFichero;



                var aThis = this;

                return theS_HttpSvce
                    .fprDo_HttpGet( aURL)
                    .then( function( theResponse) {

                        if( !aThis.fCheckResponseReceived_AndUpdateReport_ListaUltimasFasesDeFichero( anOperationReport, theResponse)) {
                            return aThis.fNewDeferredRejectPromise( anOperationReport);
                        }

                        aThis._v_LastFicheroYFasesrealizadasPorIdFichero[ theIdFichero]     = theResponse;
                        aThis._v_LastFicheroYFasesrealizadasTimePorIdFichero[ theIdFichero] = new Date().getTime();

                        var aField = anOperationReport._v_Field;

                        var someRows = theResponse[ aField];

                        if( typeof someRows == "undefined") {
                            aThis.pReportNoResponseField( anOperationReport);
                            return aThis.fNewDeferredRejectPromise( anOperationReport);
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
                            aThis.fRecord( aMethodName, aThis.EVENTKIND_SERVICEREPORT_OK, anOperationReport, aURL, aResponseLog);
                        }

                        return aThis.fNewDeferredResolveWithRowsPromise( someRows);
                    })
                    ["catch"]( function( theError) {

                    aThis.pReportAjaxError( anOperationReport, theError, null);

                    if( aThis.LOGFAILURES) {
                        aThis.fRecord( aMethodName, aThis.EVENTKIND_SERVICEREPORT_FAIL, anOperationReport, aURL, theError);
                    }

                    throw theError;
                });

            };
            if( fprDo_Fasesvalidacion_ListaFasesDeFichero){}/* CQT */
            aPrototype.fprDo_Fasesvalidacion_ListaFasesDeFichero = fprDo_Fasesvalidacion_ListaFasesDeFichero;








            var fCheckResponseReceived_AndUpdateReport_ListaUltimasFasesDeFichero = function(
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

                theOperationReport._v_Success = true;
                theOperationReport._v_ServerFailureKind = null;

                return true;

            };
            if( fCheckResponseReceived_AndUpdateReport_ListaUltimasFasesDeFichero){}/* CQT */
            aPrototype.fCheckResponseReceived_AndUpdateReport_ListaUltimasFasesDeFichero = fCheckResponseReceived_AndUpdateReport_ListaUltimasFasesDeFichero;


















            var fprDo_Fasesvalidacion_LanzarValidacionAvisosYerrores = function( theIdFichero, theIdCriterio) {
                var aMethodName = "fprDo_Fasesvalidacion_LanzarValidacionAvisosYerrores";

                var aForm = {
                    "idFichero": theIdFichero,
                    "criterio":  theIdCriterio,
                    "forzar":    "" /* Set to not empty to force launch */
                };

                var anOperationReport = this.fCreateAndRegisterReport(
                    this.OPERATIONKIND_LIST,
                    aMethodName,
                    aMethodName,
                    this.LANZARVALIDACIONAVISOSYERRORES_URL,
                    this.LANZARVALIDACIONAVISOSYERRORES_TYPE,
                    this.LANZARVALIDACIONAVISOSYERRORES_RESPONSEFIELD,
                    null,
                    aForm,
                    null,
                    null
                );

                if( !theIdFichero) {
                    this.pReportNoUrlParm( anOperationReport, "theIdFichero");
                    return this.fNewDeferredRejectPromise( "!theIdFichero");
                }

                if( !theIdCriterio) {
                    this.pReportNoUrlParm( anOperationReport, "theIdCriterio");
                    return this.fNewDeferredRejectPromise( "!theIdCriterio");
                }



                return this.fprDo_Fasesvalidacion_LanzarValidacionAvisosYerrores_withForm( theIdFichero, theIdCriterio, aForm);

            };
            if( fprDo_Fasesvalidacion_LanzarValidacionAvisosYerrores){}/* CQT */
            aPrototype.fprDo_Fasesvalidacion_LanzarValidacionAvisosYerrores = fprDo_Fasesvalidacion_LanzarValidacionAvisosYerrores;








            var fprDo_Fasesvalidacion_LanzarForzarValidacionAvisosYerrores = function( theIdFichero, theIdCriterio) {
                var aMethodName = "fprDo_Fasesvalidacion_LanzarForzarValidacionAvisosYerrores";

                var aForm = {
                    "idFichero": theIdFichero,
                    "criterio":  theIdCriterio,
                    "forzar":    "si" /* Set to not empty to force launch */
                };

                var anOperationReport = this.fCreateAndRegisterReport(
                    this.OPERATIONKIND_LIST,
                    aMethodName,
                    aMethodName,
                    this.LANZARVALIDACIONAVISOSYERRORES_URL,
                    this.LANZARVALIDACIONAVISOSYERRORES_TYPE,
                    this.LANZARVALIDACIONAVISOSYERRORES_RESPONSEFIELD,
                    null,
                    aForm,
                    null,
                    null
                );

                if( !theIdFichero) {
                    this.pReportNoUrlParm( anOperationReport, "theIdFichero");
                    return this.fNewDeferredRejectPromise( "!theIdFichero");
                }


                if( !theIdCriterio) {
                    this.pReportNoUrlParm( anOperationReport, "theIdCriterio");
                    return this.fNewDeferredRejectPromise( "!theIdCriterio");
                }



                return this.fprDo_Fasesvalidacion_LanzarValidacionAvisosYerrores_withForm( theIdFichero, theIdCriterio, aForm);

            };
            if( fprDo_Fasesvalidacion_LanzarForzarValidacionAvisosYerrores){}/* CQT */
            aPrototype.fprDo_Fasesvalidacion_LanzarForzarValidacionAvisosYerrores = fprDo_Fasesvalidacion_LanzarForzarValidacionAvisosYerrores;













            var fprDo_Fasesvalidacion_LanzarValidacionAvisosYerrores_withForm = function( theIdFichero, theIdCriterio, theForm) {
                var aMethodName = "fprDo_Fasesvalidacion_LanzarValidacionAvisosYerrores";


                var aField = this.LANZARVALIDACIONAVISOSYERRORES_RESPONSEFIELD;

                var anOperationReport = this.fCreateAndRegisterReport(
                    this.OPERATIONKIND_LIST,
                    aMethodName,
                    aMethodName,
                    this.LANZARVALIDACIONAVISOSYERRORES_URL,
                    this.LANZARVALIDACIONAVISOSYERRORES_TYPE,
                    aField,
                    null,
                    theForm,
                    null,
                    null
                );

                if( !theForm) {
                    this.pReportNoUrlParm( anOperationReport, "theIdFichero");
                    return this.fNewDeferredRejectPromise( "!theIdFichero");
                }


                if( !theIdFichero) {
                    this.pReportNoUrlParm( anOperationReport, "theIdFichero");
                    return this.fNewDeferredRejectPromise( "!theIdFichero");
                }


                if( !theIdCriterio) {
                    this.pReportNoUrlParm( anOperationReport, "theIdCriterio");
                    return this.fNewDeferredRejectPromise( "!theIdCriterio");
                }


                if( this._v_LastFicheroYFasesrealizadasPorIdFichero[ theIdFichero]) {
                    delete this._v_LastFicheroYFasesrealizadasPorIdFichero[ theIdFichero];
                }
                if( this._v_LastFicheroYFasesrealizadasTimePorIdFichero[ theIdFichero]) {
                    delete this._v_LastFicheroYFasesrealizadasTimePorIdFichero[ theIdFichero];
                }

                var anAppBaseURL = this.fAppBaseURL();

                var aURL = anAppBaseURL + this.LANZARVALIDACIONAVISOSYERRORES_URL;


                var aThis = this;

                return theS_HttpSvce
                    .fprDo_HttpPost( aURL, theForm)
                    .then( function( theResponse) {

                        anOperationReport._v_Response         = theResponse;
                        anOperationReport._v_OutcomeTimestamp = Date.now();

                        if( !theResponse) {
                            anOperationReport._v_Success = false;
                            anOperationReport._v_ServerFailureKind = this.HITSVRFAILURE_NORESPONSE;
                            return aThis.fNewDeferredRejectPromise( anOperationReport);
                        }

                        if( !theResponse[ "exito"]) {
                            anOperationReport._v_Success = false;
                            anOperationReport._v_ServerFailureKind = this.HITSVRFAILURE_NOSUCCESS;
                            return aThis.fNewDeferredRejectPromise( anOperationReport);
                        }

                        if( !theResponse[ "vTipo"] == aThis.LANZARVALIDACIONAVISOSYERRORES_TYPE) {
                            anOperationReport._v_Success = false;
                            anOperationReport._v_ServerFailureKind = this.HITSVRFAILURE_NOSUCCESS;
                            return aThis.fNewDeferredRejectPromise( anOperationReport);
                        }


                        if( aThis.LOGREPLIES) {
                            var aResponseLog = null;
                            if( aThis.LOGRESPONSES) {
                                aResponseLog = theResponse;
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
                            aThis.fRecord( aMethodName, aThis.EVENTKIND_SERVICEREPORT_OK, anOperationReport, aURL, aResponseLog);
                        }

                        return aThis.fNewDeferredResolveWithRowsPromise( theResponse);
                    })
                    ["catch"]( function( theError) {

                    aThis.pReportAjaxError( anOperationReport, theError, null);

                    if( aThis.LOGFAILURES) {
                        aThis.fRecord( aMethodName, aThis.EVENTKIND_SERVICEREPORT_FAIL, anOperationReport, aURL, theError);
                    }

                    throw theError;
                });

            };
            if( fprDo_Fasesvalidacion_LanzarValidacionAvisosYerrores_withForm){}/* CQT */
            aPrototype.fprDo_Fasesvalidacion_LanzarValidacionAvisosYerrores_withForm = fprDo_Fasesvalidacion_LanzarValidacionAvisosYerrores_withForm;








            return aPrototype;

        })();








        var FasesvalidacionSvce_Constructor = function( theTitle, theIdentifier, theRecorder) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_HitServerSvceType.HitServerSvce_Prototype;

            this._v_Prototype = null;
            this._v_Type      = null;
            this._v_Module    = null;

            this._v_LastFicheroYFasesrealizadasPorIdFichero     = null;
            this._v_LastFicheroYFasesrealizadasTimePorIdFichero = null;

            this._pInit_FasesvalidacionSvce( theTitle, theIdentifier, theRecorder);
        };
        FasesvalidacionSvce_Constructor.prototype = aFasesvalidacionSvce_Prototype;





        var FasesvalidacionSvce_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_HitServerSvceType.HitServerSvce_Prototype;

            this._v_Prototype = aFasesvalidacionSvce_Prototype;
            this._v_Type      = null;
            this._v_Module    = null;

            this._v_LastFicheroYFasesrealizadasPorIdFichero     = null;
            this._v_LastFicheroYFasesrealizadasTimePorIdFichero = null;
        };
        FasesvalidacionSvce_SuperPrototypeConstructor.prototype = aFasesvalidacionSvce_Prototype;



        var aModule = {
            "FasesvalidacionSvce_Prototype": aFasesvalidacionSvce_Prototype,
            "FasesvalidacionSvce_Constructor": FasesvalidacionSvce_Constructor,
            "FasesvalidacionSvce_SuperPrototypeConstructor": FasesvalidacionSvce_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aFasesvalidacionSvce_Prototype._v_Module = aModule;




        return aModule;
    };







    var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
    if( !anExistingModule) {

        var aModule = aMod_definer(
            theSS_Overrider,
            theSS_HitServerSvceType,
            theSS_HttpSvce
        );
        anExistingModule = aModule;

        theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
    }



    return anExistingModule;


}]);







