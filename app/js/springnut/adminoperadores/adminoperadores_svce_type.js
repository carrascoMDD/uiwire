'use strict';

/*
 * adminoperadores_svce_type.js
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




angular.module("adminoperadoresTypes").factory("AdminoperadoresSvceType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "HitSpecifiedSvceType",
    "HitServerSvceType",
    "HttpSvce",
function( theSS_typesregistry,
          theSS_Overrider,
          theSS_HitSpecifiedSvceType,
          theSS_HitServerSvceType,
          theSS_HttpSvce){



    var ModuleName     = "adminoperadores_svce_type";
    var ModulePackages = "springnut/adminoperadores";
    var ModuleFullName = ModulePackages + "/" + ModuleName;





    var aMod_definer = function( theS_Overrider,
                                 theS_HitSpecifiedSvceType,
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



            theToInit.ADMINOPERADORES_LISTAOPERADORES_TITLE   = "Lista de Operadores";
            theToInit.ADMINOPERADORES_LISTAOPERADORES_URL   = "/administracionOperadores/listaOperadoresJSON";
            theToInit.ADMINOPERADORES_LISTAOPERADORES_TYPE  = "ListaOperadores";
            theToInit.ADMINOPERADORES_LISTAOPERADORES_OPERADORES_FIELD      = "vOperadores";

            theToInit.ADMINOPERADORES_LISTAAUTORIZACIONESDEOPERADOR_TITLE  = "Lista de Autorizaciones de Operador";
            theToInit.ADMINOPERADORES_LISTAAUTORIZACIONESDEOPERADOR_URL   = "/administracionOperadores/listaAutorizacionesDeOperadorJSON/";
            theToInit.ADMINOPERADORES_LISTAAUTORIZACIONESDEOPERADOR_TYPE  = "ListaAutorizacionesDeOperador";
            theToInit.ADMINOPERADORES_LISTAAUTORIZACIONESDEOPERADOR_AUTORIZACIONESDEOPERADOR_FIELD = "vAutorizaciones";


            theToInit.ADMINOPERADORES_LISTAPERFILES_TITLE = "Lista de Perfiles";
            theToInit.ADMINOPERADORES_LISTAPERFILES_URL   = "/administracionOperadores/listaPerfilesJSON";
            theToInit.ADMINOPERADORES_LISTAPERFILES_TYPE  = "ListaPerfiles";
            theToInit.ADMINOPERADORES_LISTAPERFILES_FIELD = "vPerfiles";

            theToInit.ADMINOPERADORES_LISTAOPERADORESDEPERFIL_TITLE = "Lista de Operadores de Perfil";
            theToInit.ADMINOPERADORES_LISTAOPERADORESDEPERFIL_URL   = "/administracionOperadores/listaOperadoresConPerfilJSON/";
            theToInit.ADMINOPERADORES_LISTAOPERADORESDEPERFIL_TYPE  = "ListaOperadoresConPerfil";
            theToInit.ADMINOPERADORES_LISTAOPERADORESDEPERFIL_FIELD = "vOperadores";




            theToInit.ADMINOPERADORES_OPERADORDATOS_TITLE = "Operador";
            theToInit.ADMINOPERADORES_OPERADORDATOS_URL   = "/administracionOperadores/operadorDatosJSON/";
            theToInit.ADMINOPERADORES_OPERADORDATOS_TYPE  = "OperadorDatos";

            theToInit.ADMINOPERADORES_AUTORIZACIONDATOS_TITLE = "Autorización de Operador";
            theToInit.ADMINOPERADORES_AUTORIZACIONDATOS_URL   = "/administracionOperadores/autorizacionDeOperadorDatosJSON/";
            theToInit.ADMINOPERADORES_AUTORIZACIONDATOS_TYPE  = "AutorizacionDatos";

            theToInit.ADMINOPERADORES_PERFILDATOS_TITLE = "Perfil";
            theToInit.ADMINOPERADORES_PERFILDATOS_URL   = "/administracionOperadores/perfilDatosJSON/";
            theToInit.ADMINOPERADORES_PERFILDATOS_TYPE  = "PerfilDatos";




            theToInit.ADMINOPERADORES_CAMBIAROPERADOR_TITLE = "Cambiar Operador";
            theToInit.ADMINOPERADORES_CAMBIAROPERADOR_URL   = "/administracionOperadores/cambiarOperadorAlgunosDatosJSON";
            theToInit.ADMINOPERADORES_CAMBIAROPERADOR_TYPE  = "CambiadoOperador";
            theToInit.ADMINOPERADORES_CAMBIAROPERADOR_OPERADOREDESPUES_FIELD = "vOperadorDespues";

            theToInit.ADMINOPERADORES_CAMBIARAUTORIZACIONDEOPERADOR_TITLE = "Cambiar Autorización de Operador";
            theToInit.ADMINOPERADORES_CAMBIARAUTORIZACIONDEOPERADOR_URL   = "/administracionOperadores/cambiarAutorizacionJSON";
            theToInit.ADMINOPERADORES_CAMBIARAUTORIZACIONDEOPERADOR_TYPE  = "CambiadoAutorizacion";
            theToInit.ADMINOPERADORES_CAMBIARAUTORIZACIONDEOPERADOR_AUTORIZACIONDEOPERADOREDESPUES_FIELD = "vAutorizacionDespues";

            theToInit.ADMINOPERADORES_CAMBIARPERFIL_TITLE = "Cambiar Perfil";
            theToInit.ADMINOPERADORES_CAMBIARPERFIL_URL   = "/aux/perfiles/auxPerfilCambiarAlgunosDatosJSON";
            theToInit.ADMINOPERADORES_CAMBIARPERFIL_TYPE  = "CambiadoPerfil";
            theToInit.ADMINOPERADORES_CAMBIARPERFIL_PERFILDESPUES_FIELD = "vPerfilDespues";





            theToInit.ADMINOPERADORES_CREAROPERADOR_TITLE = "Crear Operador";
            theToInit.ADMINOPERADORES_CREAROPERADOR_URL   = "/administracionOperadores/crearOperadorJSON";
            theToInit.ADMINOPERADORES_CREAROPERADOR_TYPE  = "OperadorDatos";

            theToInit.ADMINOPERADORES_CREAROPERADORCONPERFIL_TITLE = "Crear Operador con Perfil";
            theToInit.ADMINOPERADORES_CREAROPERADORCONPERFIL_URL   = "/administracionOperadores/crearOperadorConPerfilJSON";
            theToInit.ADMINOPERADORES_CREAROPERADORCONPERFIL_TYPE  = "CreadoOperadorConPerfil";


            theToInit.ADMINOPERADORES_CREARPERFIL_TITLE = "Crear Perfil";
            theToInit.ADMINOPERADORES_CREARPERFIL_URL   = "/aux/perfiles/auxPerfilCrearJSON";
            theToInit.ADMINOPERADORES_CREARPERFIL_TYPE  = "PerfilDatos";

            theToInit.ADMINOPERADORES_CREARAUTORIZACIONDEOPERADOR_TITLE = "Crear Autorización de Operador";
            theToInit.ADMINOPERADORES_CREARAUTORIZACIONDEOPERADOR_URL   = "/administracionOperadores/crearAutorizacionJSON";
            theToInit.ADMINOPERADORES_CREARAUTORIZACIONDEOPERADOR_TYPE  = "AutorizacionDatos";





            theToInit.ADMINOPERADORES_ELIMINAROPERADOR_TITLE  = "Eliminar Operador";
            theToInit.ADMINOPERADORES_ELIMINAROPERADOR_URL   = "/administracionOperadores/eliminarOperadorJSON";
            theToInit.ADMINOPERADORES_ELIMINAROPERADOR_TYPE  = "OperadorDatos";

            theToInit.ADMINOPERADORES_ELIMINARPERFIL_TITLE = "Eliminar Perfil";
            theToInit.ADMINOPERADORES_ELIMINARPERFIL_URL   = "/aux/perfiles/auxPerfilEliminarJSON";
            theToInit.ADMINOPERADORES_ELIMINARPERFIL_TYPE  = "PerfilDatos";

            theToInit.ADMINOPERADORES_ELIMINARAUTORIZACIONDEOPERADOR_TITLE = "Eliminar Autorizacion";
            theToInit.ADMINOPERADORES_ELIMINARAUTORIZACIONDEOPERADOR_URL   = "/administracionOperadores/eliminarAutorizacionJSON";
            theToInit.ADMINOPERADORES_ELIMINARAUTORIZACIONDEOPERADOR_TYPE  = "AutorizacionDatos";




            theToInit.ADMINOPERADORES_CAMBIARCONTRASENA_URL = "/administracionOperadores/cambiarContrasenaOperadorJSON";
            theToInit.ADMINOPERADORES_CAMBIARCONTRASENA_TYPE = "CambiadaContrasena";
            theToInit.ADMINOPERADORES_CAMBIARCONTRASENA_RESPONSEFIELD = "informeProgreso";


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


            theToInit.ADMINOPERADORES_CAMBIARPARMPOSTFIX = "_cambiar";


            theToInit.FIRSTINDEXURLREPLACEMENT = "{thePrimero}";
            theToInit.HOWMANYURLREPLACEMENT    = "{theCuantos}";


            theToInit.ADMINOPERADORESSVCE_DEFAULTNAME = "AdminoperadoresSvceDefaultName";



            theToInit.OPERATIONSPECS = [
                {
                    "title":           theToInit.ADMINOPERADORES_LISTAOPERADORES_TITLE,
                    "name":            "fprDo_Adminoperadores_ListaOperadores",
                    "kind":            theS_HitServerSvceType.OPERATIONKIND_LIST,
                    "url":             theToInit.ADMINOPERADORES_LISTAOPERADORES_URL,
                    "replyType":       theToInit.ADMINOPERADORES_LISTAOPERADORES_TYPE,
                    "replyField":      theToInit.ADMINOPERADORES_LISTAOPERADORES_OPERADORES_FIELD,
                    "useFirstAndMany": true
                },
                {
                    "title":           theToInit.ADMINOPERADORES_LISTAAUTORIZACIONESDEOPERADOR_TITLE,
                    "name":            "fprDo_Adminoperadores_ListaAutorizacionesDeOperador",
                    "kind":            theS_HitServerSvceType.OPERATIONKIND_LIST,
                    "url":             theToInit.ADMINOPERADORES_LISTAAUTORIZACIONESDEOPERADOR_URL,
                    "replyType":       theToInit.ADMINOPERADORES_LISTAAUTORIZACIONESDEOPERADOR_TYPE,
                    "replyField":      theToInit.ADMINOPERADORES_LISTAAUTORIZACIONESDEOPERADOR_AUTORIZACIONESDEOPERADOR_FIELD,
                    "useFirstAndMany": true,
                    "useUrlParm":      true
                },
                {
                    "title":           theToInit.ADMINOPERADORES_LISTAPERFILES_TITLE,
                    "name":            "fprDo_Adminoperadores_ListaPerfiles",
                    "kind":            theS_HitServerSvceType.OPERATIONKIND_LIST,
                    "url":             theToInit.ADMINOPERADORES_LISTAPERFILES_URL,
                    "replyType":       theToInit.ADMINOPERADORES_LISTAPERFILES_TYPE,
                    "replyField":      theToInit.ADMINOPERADORES_LISTAPERFILES_FIELD,
                    "useFirstAndMany": true
                },
                {
                    "title":           theToInit.ADMINOPERADORES_LISTAOPERADORESDEPERFIL_TITLE,
                    "name":            "fprDo_Adminoperadores_ListaOperadoresDePerfil",
                    "kind":            theS_HitServerSvceType.OPERATIONKIND_LIST,
                    "url":             theToInit.ADMINOPERADORES_LISTAOPERADORESDEPERFIL_URL,
                    "replyType":       theToInit.ADMINOPERADORES_LISTAOPERADORESDEPERFIL_TYPE,
                    "replyField":      theToInit.ADMINOPERADORES_LISTAOPERADORESDEPERFIL_FIELD,
                    "useFirstAndMany": true,
                    "useUrlParm":      true
                },




                {
                    "title":           theToInit.ADMINOPERADORES_OPERADORDATOS_TITLE,
                    "name":            "fprDo_Adminoperadores_OperadorDatos",
                    "kind":            theS_HitServerSvceType.OPERATIONKIND_ONE,
                    "url":             theToInit.ADMINOPERADORES_OPERADORDATOS_URL,
                    "replyType":       theToInit.ADMINOPERADORES_OPERADORDATOS_TYPE,
                    "replyField":      null
                },
                {
                    "title":           theToInit.ADMINOPERADORES_AUTORIZACIONDATOS_TITLE,
                    "name":            "fprDo_Adminoperadores_AutorizacionDatos",
                    "kind":            theS_HitServerSvceType.OPERATIONKIND_ONE,
                    "url":             theToInit.ADMINOPERADORES_AUTORIZACIONDATOS_URL,
                    "replyType":       theToInit.ADMINOPERADORES_AUTORIZACIONDATOS_TYPE,
                    "replyField":      null
                },
                {
                    "title":           theToInit.ADMINOPERADORES_PERFILDATOS_TITLE,
                    "name":            "fprDo_Adminoperadores_PerfilDatos",
                    "kind":            theS_HitServerSvceType.OPERATIONKIND_ONE,
                    "url":             theToInit.ADMINOPERADORES_PERFILDATOS_URL,
                    "replyType":       theToInit.ADMINOPERADORES_PERFILDATOS_TYPE,
                    "replyField":      null
                },






                {
                    "title":           theToInit.ADMINOPERADORES_CAMBIAROPERADOR_TITLE,
                    "name":            "fprDo_Adminoperadores_CambiarOperador",
                    "kind":            theS_HitServerSvceType.OPERATIONKIND_CHANGE,
                    "url":             theToInit.ADMINOPERADORES_CAMBIAROPERADOR_URL,
                    "replyType":       theToInit.ADMINOPERADORES_CAMBIAROPERADOR_TYPE,
                    "replyField":      theToInit.ADMINOPERADORES_CAMBIAROPERADOR_OPERADOREDESPUES_FIELD
                },
                {
                    "title":           theToInit.ADMINOPERADORES_CAMBIARAUTORIZACIONDEOPERADOR_TITLE,
                    "name":            "fprDo_Adminoperadores_CambiarAutorizacionOperador",
                    "kind":            theS_HitServerSvceType.OPERATIONKIND_CHANGE,
                    "url":             theToInit.ADMINOPERADORES_CAMBIARAUTORIZACIONDEOPERADOR_URL,
                    "replyType":       theToInit.ADMINOPERADORES_CAMBIARAUTORIZACIONDEOPERADOR_TYPE,
                    "replyField":      theToInit.ADMINOPERADORES_CAMBIARAUTORIZACIONDEOPERADOR_AUTORIZACIONDEOPERADOREDESPUES_FIELD
                },
                {
                    "title":           theToInit.ADMINOPERADORES_CAMBIARPERFIL_TITLE,
                    "name":            "fprDo_Adminoperadores_CambiarPerfil",
                    "kind":            theS_HitServerSvceType.OPERATIONKIND_CHANGE,
                    "url":             theToInit.ADMINOPERADORES_CAMBIARPERFIL_URL,
                    "replyType":       theToInit.ADMINOPERADORES_CAMBIARPERFIL_TYPE,
                    "replyField":      theToInit.ADMINOPERADORES_CAMBIARPERFIL_PERFILDESPUES_FIELD
                },




                {
                    "title":           theToInit.ADMINOPERADORES_CREARPERFIL_TITLE,
                    "name":            "fprDo_Adminoperadores_CrearPerfil",
                    "kind":            theS_HitServerSvceType.OPERATIONKIND_CREATE,
                    "url":             theToInit.ADMINOPERADORES_CREARPERFIL_URL,
                    "replyType":       theToInit.ADMINOPERADORES_CREARPERFIL_TYPE
                },


                {
                    "title":           theToInit.ADMINOPERADORES_CREAROPERADOR_TITLE,
                    "name":            "fprDo_Adminoperadores_CrearOperador",
                    "kind":            theS_HitServerSvceType.OPERATIONKIND_CREATE,
                    "url":             theToInit.ADMINOPERADORES_CREAROPERADOR_URL,
                    "replyType":       theToInit.ADMINOPERADORES_CREAROPERADOR_TYPE
                },
                {
                    "title":           theToInit.ADMINOPERADORES_CREAROPERADORCONPERFIL_TITLE,
                    "name":            "fprDo_Adminoperadores_CrearOperadorConPerfil",
                    "kind":            theS_HitServerSvceType.OPERATIONKIND_CREATE,
                    "url":             theToInit.ADMINOPERADORES_CREAROPERADORCONPERFIL_URL,
                    "replyType":       theToInit.ADMINOPERADORES_CREAROPERADORCONPERFIL_TYPE
                },
                {
                    "title":           theToInit.ADMINOPERADORES_CREARAUTORIZACIONDEOPERADOR_TITLE,
                    "name":            "fprDo_Adminoperadores_CrearAutorizacionDeOperador",
                    "kind":            theS_HitServerSvceType.OPERATIONKIND_CREATE,
                    "url":             theToInit.ADMINOPERADORES_CREARAUTORIZACIONDEOPERADOR_URL,
                    "replyType":       theToInit.ADMINOPERADORES_CREARAUTORIZACIONDEOPERADOR_TYPE
                },








                {
                    "title":           theToInit.ADMINOPERADORES_ELIMINAROPERADOR_TITLE,
                    "name":            "fprDo_Adminoperadores_EliminarOperador",
                    "kind":            theS_HitServerSvceType.OPERATIONKIND_DELETE,
                    "url":             theToInit.ADMINOPERADORES_ELIMINAROPERADOR_URL,
                    "replyType":       theToInit.ADMINOPERADORES_ELIMINAROPERADOR_TYPE
                },
                {
                    "title":           theToInit.ADMINOPERADORES_ELIMINARPERFIL_TITLE,
                    "name":            "fprDo_Adminoperadores_EliminarPerfil",
                    "kind":            theS_HitServerSvceType.OPERATIONKIND_DELETE,
                    "url":             theToInit.ADMINOPERADORES_ELIMINARPERFIL_URL,
                    "replyType":       theToInit.ADMINOPERADORES_ELIMINARPERFIL_TYPE
                },

                {
                    "title":           theToInit.ADMINOPERADORES_ELIMINARAUTORIZACIONDEOPERADOR_TITLE,
                    "name":            "fprDo_Adminoperadores_EliminarAutorizacionDeOperador",
                    "kind":            theS_HitServerSvceType.OPERATIONKIND_DELETE,
                    "url":             theToInit.ADMINOPERADORES_ELIMINARAUTORIZACIONDEOPERADOR_URL,
                    "replyType":       theToInit.ADMINOPERADORES_ELIMINARAUTORIZACIONDEOPERADOR_TYPE
                }
            ];

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






        var aAdminoperadoresSvce_Prototype = (function() {


            var aPrototype = new theS_HitSpecifiedSvceType.HitSpecifiedSvce_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_SuperPrototype = theS_HitSpecifiedSvceType.HitSpecifiedSvce_Prototype;


            aPrototype._v_Type = "AdminoperadoresSvce";

            aPrototype._v_Module = null;








            var _pInit = function( theTitle, theIdentifier, theRecorder) {

                this._pInit_AdminoperadoresSvce( theTitle, theIdentifier, theRecorder);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_AdminoperadoresSvce = function( theTitle, theIdentifier, theRecorder) {

                /* Delegate on super prototype initialization */
                aPrototype._v_SuperPrototype._pInit_HitSpecifiedSvce.apply( this, [
                    theTitle || this.ADMINOPERADORESSVCE_DEFAULTNAME,
                    theIdentifier,
                    theRecorder
                ]);

                this._v_Prototype = aPrototype;
                this._v_Type      = this._v_Prototype._v_Type;
                this._v_Module    = aPrototype._v_Module;


                this.pRegisterOperationsFromSpecs( this.OPERATIONSPECS);
            };
            if( _pInit_AdminoperadoresSvce){}/* CQT */
            aPrototype._pInit_AdminoperadoresSvce = _pInit_AdminoperadoresSvce;












            var fprDo_Adminoperadores_CambiarContrasena = function( theIdOperador, theContrasena, theRepetirContrasena) {
                var aMethodName = "fprDo_Adminoperadores_CambiarContrasena";

                var aForm = {
                    "theIdOperador":         theIdOperador,
                    "theContrasena":         theContrasena,
                    "theRepetirContrasena":  theRepetirContrasena
                };

                var anOperationReport = this.fCreateAndRegisterReport(
                    this.OPERATIONKIND_CHANGE,
                    aMethodName,
                    aMethodName,
                    this.ADMINOPERADORES_CAMBIARCONTRASENA_URL,
                    this.ADMINOPERADORES_CAMBIARCONTRASENA_TYPE,
                    this.LANZARVALIDACIONAVISOSYERRORES_RESPONSEFIELD,
                    null,
                    aForm,
                    null,
                    null
                );

                if( !theIdOperador) {
                    this.pReportNoUrlParm( anOperationReport, "theIdOperador");
                    return this.fNewDeferredRejectPromise( "!theIdOperador");
                }

                if( !theContrasena) {
                    this.pReportNoUrlParm( anOperationReport, "theContrasena");
                    return this.fNewDeferredRejectPromise( "!theContrasena");
                }

                if( !theRepetirContrasena) {
                    this.pReportNoUrlParm( anOperationReport, "theRepetirContrasena");
                    return this.fNewDeferredRejectPromise( "!theRepetirContrasena");
                }


                var anAppBaseURL = this.fAppBaseURL();

                var aURL = anAppBaseURL + this.ADMINOPERADORES_CAMBIARCONTRASENA_URL;

                var aThis = this;

                return theS_HttpSvce
                    .fprDo_HttpPost( aURL, aForm)
                    .then( function( theResponse) {

                        anOperationReport._v_Response         = theResponse;
                        anOperationReport._v_OutcomeTimestamp = Date.now();

                        if( !theResponse) {
                            anOperationReport._v_Success = false;
                            anOperationReport._v_ServerFailureKind = this.HITSVRFAILURE_NORESPONSE;
                            return aThis.fNewDeferredRejectPromise( anOperationReport);
                        }

                        if( !theResponse[ "vSuccess"]) {
                            anOperationReport._v_Success = false;
                            anOperationReport._v_ServerFailureKind = this.HITSVRFAILURE_NOSUCCESS;
                            return aThis.fNewDeferredRejectPromise( anOperationReport);
                        }

                        if( !theResponse[ "vTipo"] == aThis.ADMINOPERADORES_CAMBIARCONTRASENA_TYPE) {
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
            if( fprDo_Adminoperadores_CambiarContrasena){}/* CQT */
            aPrototype.fprDo_Adminoperadores_CambiarContrasena = fprDo_Adminoperadores_CambiarContrasena;









            return aPrototype;

        })();








        var AdminoperadoresSvce_Constructor = function( theTitle, theIdentifier, theRecorder) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_HitSpecifiedSvceType.HitSpecifiedSvce_Prototype;

            this._v_Prototype = null;
            this._v_Type      = null;
            this._v_Module    = null;

            this._pInit_AdminoperadoresSvce( theTitle, theIdentifier, theRecorder);
        };
        AdminoperadoresSvce_Constructor.prototype = aAdminoperadoresSvce_Prototype;





        var AdminoperadoresSvce_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_HitSpecifiedSvceType.HitSpecifiedSvce_Prototype;

            this._v_Prototype = aAdminoperadoresSvce_Prototype;
            this._v_Type      = null;
            this._v_Module    = null;
        };
        AdminoperadoresSvce_SuperPrototypeConstructor.prototype = aAdminoperadoresSvce_Prototype;



        var aModule = {
            "AdminoperadoresSvce_Prototype": aAdminoperadoresSvce_Prototype,
            "AdminoperadoresSvce_Constructor": AdminoperadoresSvce_Constructor,
            "AdminoperadoresSvce_SuperPrototypeConstructor": AdminoperadoresSvce_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aAdminoperadoresSvce_Prototype._v_Module = aModule;




        return aModule;
    };







    var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
    if( !anExistingModule) {

        var aModule = aMod_definer(
            theSS_Overrider,
            theSS_HitSpecifiedSvceType,
            theSS_HitServerSvceType,
            theSS_HttpSvce
        );
        anExistingModule = aModule;

        theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
    }



    return anExistingModule;


}]);







