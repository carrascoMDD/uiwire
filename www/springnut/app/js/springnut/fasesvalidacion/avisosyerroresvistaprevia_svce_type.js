'use strict';

/*
 * avisosyerroresvistaprevia_svce_type.js
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




angular.module("avisosyerroresvistapreviaTypes").factory("AvisosyerroresvistapreviaSvceType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "HitServerSvceType",
    "HttpSvce",
function( theSS_typesregistry,
          theSS_Overrider,
          theSS_HitServerSvceType,
          theSS_HttpSvce){



    var ModuleName     = "avisosyerroresvistaprevia_svce_type";
    var ModulePackages = "springnut/avisosyerroresvistaprevia";
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

            theToInit.MAXRESPONSELOGLENGTH = 1024;


            theToInit.ERRORESYAVISOSTREEJSON_URL = "reports/Validaciones/ErroresYavisosTreeJSON";

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


            theToInit.FASESVALIDACION_CAMBIARPARMPOSTFIX = "_cambiar";


            theToInit.FIRSTINDEXURLREPLACEMENT = "{thePrimero}";
            theToInit.HOWMANYURLREPLACEMENT    = "{theCuantos}";


            theToInit.FASESVALIDACIONSVCE_DEFAULTNAME = "AvisosyerroresvistapreviaSvceDefaultName";

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






        var aAvisosyerroresvistapreviaSvce_Prototype = (function() {


            var aPrototype = new theS_HitServerSvceType.HitServerSvce_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_SuperPrototype = theS_HitServerSvceType.HitServerSvce_Prototype;


            aPrototype._v_Type = "AvisosyerroresvistapreviaSvce";

            aPrototype._v_Module = null;








            var _pInit = function( theTitle, theIdentifier, theRecorder) {

                this._pInit_AvisosyerroresvistapreviaSvce( theTitle, theIdentifier, theRecorder);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_AvisosyerroresvistapreviaSvce = function( theTitle, theIdentifier, theRecorder) {

                /* Delegate on super prototype initialization */
                aPrototype._v_SuperPrototype._pInit_HitServerSvce.apply( this, [
                    theTitle || this.FASESVALIDACIONSVCE_DEFAULTNAME,
                    theIdentifier,
                    theRecorder
                ]);

                this._v_Prototype = aPrototype;
                this._v_Type      = this._v_Prototype._v_Type;
                this._v_Module    = aPrototype._v_Module;
            };
            if( _pInit_AvisosyerroresvistapreviaSvce){}/* CQT */
            aPrototype._pInit_AvisosyerroresvistapreviaSvce = _pInit_AvisosyerroresvistapreviaSvce;








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







            /* Miembros de la respuesta

             public String  fechaInforme = null;

             public Boolean exito = false;
             public String  informeAUsuario = null;

             public String  tipoBoletinPath = null;
             public Integer idFase = null;
             public Integer faseNumero = null;
             public String  criterio = null;

             public Integer idFichero = 0;
             public Integer provinciaFichero = 0;
             public String  nombreProvinciaFichero = null;
             public Integer anoFichero = 0;
             public Integer mesFichero = 0;
             public Integer numFallos = 0;


             public List<BoletinConErrores> boletinesConErrores = null;
             */



            var fprDo_Avisosyerroresvistaprevia = function( theTipoBoletin, theIdFase) {
                var aMethodName = "fprDo_Avisosyerroresvistaprevia";

                var anAppBaseURL = this.fAppBaseURL();

                var aURL = anAppBaseURL + this.ERRORESYAVISOSTREEJSON_URL;

                var anOperationReport = this.fCreateAndRegisterReport(
                    this.OPERATIONKIND_LIST,
                    aMethodName,
                    aMethodName,
                    this.ERRORESYAVISOSTREEJSON_URL,
                    null,
                    null,
                    null,
                    { "theTipoBoletin": theTipoBoletin, "theIdFase": theIdFase},
                    null,
                    null
                );


                /*
                aURL = this.fAddParmToURL( aURL, "theTipoBoletin", theTipoBoletin);
                 */
                aURL = this.fAddParmToURL( aURL, "idFase",      theIdFase);


                var aThis = this;

                return theS_HttpSvce
                    .fprDo_HttpGet( aURL)
                    .then( function( theResponse) {

                        if( !aThis.fCheckResponseReceived_AndUpdateReport_Avisosyerroresvistaprevia( anOperationReport, theResponse)) {
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
                                    return JSON.stringify( aResponseLog).substr( 0, aThis.MAXRESPONSELOGLENGTH);
                                });
                            }
                            aThis.fRecord( aMethodName, aThis.EVENTKIND_SERVICEREPORT_OK, anOperationReport, aURL, aResponseLog);
                        }

                        return aThis.fNewDeferredResolveWithResponsePromise( theResponse);
                    })
                    ["catch"]( function( theError) {

                    aThis.pReportAjaxError( anOperationReport, theError, null);

                    if( aThis.LOGFAILURES) {
                        aThis.fRecord( aMethodName, aThis.EVENTKIND_SERVICEREPORT_FAIL, anOperationReport, aURL, theError);
                    }

                    throw theError;
                });

            };
            if( fprDo_Avisosyerroresvistaprevia){}/* CQT */
            aPrototype.fprDo_Avisosyerroresvistaprevia = fprDo_Avisosyerroresvistaprevia;











            var fCheckResponseReceived_AndUpdateReport_Avisosyerroresvistaprevia = function(
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




                var aResponseSuccess = theResponse[ "exito"];
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
            if( fCheckResponseReceived_AndUpdateReport_Avisosyerroresvistaprevia){}/* CQT */
            aPrototype.fCheckResponseReceived_AndUpdateReport_Avisosyerroresvistaprevia = fCheckResponseReceived_AndUpdateReport_Avisosyerroresvistaprevia;








            return aPrototype;

        })();








        var AvisosyerroresvistapreviaSvce_Constructor = function( theTitle, theIdentifier, theRecorder) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_HitServerSvceType.HitServerSvce_Prototype;

            this._v_Prototype = null;
            this._v_Type      = null;
            this._v_Module    = null;

            this._pInit_AvisosyerroresvistapreviaSvce( theTitle, theIdentifier, theRecorder);
        };
        AvisosyerroresvistapreviaSvce_Constructor.prototype = aAvisosyerroresvistapreviaSvce_Prototype;





        var AvisosyerroresvistapreviaSvce_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_HitServerSvceType.HitServerSvce_Prototype;

            this._v_Prototype = aAvisosyerroresvistapreviaSvce_Prototype;
            this._v_Type      = null;
            this._v_Module    = null;
        };
        AvisosyerroresvistapreviaSvce_SuperPrototypeConstructor.prototype = aAvisosyerroresvistapreviaSvce_Prototype;



        var aModule = {
            "AvisosyerroresvistapreviaSvce_Prototype": aAvisosyerroresvistapreviaSvce_Prototype,
            "AvisosyerroresvistapreviaSvce_Constructor": AvisosyerroresvistapreviaSvce_Constructor,
            "AvisosyerroresvistapreviaSvce_SuperPrototypeConstructor": AvisosyerroresvistapreviaSvce_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aAvisosyerroresvistapreviaSvce_Prototype._v_Module = aModule;




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







