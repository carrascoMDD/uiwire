'use strict';

/*
 * ejemplos_svce_backand_type.js
 *
 * Creado @author Antonio Carrasco Valero 201512301800
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




angular.module("ejemplosTypes").factory("EjemplosSvceBackandType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "HitSpecifiedSvceType",
    "HitServerSvceType",

    "HttpSvce",

    "Backand",

    function( theSS_typesregistry,
              theSS_Overrider,
              theSS_HitSpecifiedSvceType,
              theSS_HitServerSvceType,
              theSS_HttpSvce,
              theSS_Backand){



        var ModuleName     = "ejemplos_svce_type";
        var ModulePackages = "springnut/ejemplos";
        var ModuleFullName = ModulePackages + "/" + ModuleName;





        var aMod_definer = function( theS_Overrider,
                                     theS_HitSpecifiedSvceType,
                                     theS_HitServerSvceType,
                                     theS_HttpSvce,
                                     theS_Backand) {

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



                theToInit.EJEMPLOS_REUSEDATOSCOMPLETOS_MAXLAPSEDMILLIS = 2000;



                theToInit.EJEMPLOS_LISTATODASAUXAUDITABLES_NAME  = "fprDo_Ejemplos_ListaTodasAuxauditables";
                theToInit.EJEMPLOS_LISTATODASAUXAUDITABLES_TITLE = "Lista de Todas las Auxauditables";
                theToInit.EJEMPLOS_LISTATODASAUXAUDITABLES_URL   = "aux/auditables/listaTodasAuxauditablesJSON";
                theToInit.EJEMPLOS_LISTATODASAUXAUDITABLES_TYPE  = "ListaAuxauditables";
                theToInit.EJEMPLOS_LISTATODASAUXAUDITABLES_FIELD = "vAuxauditables";

                theToInit.EJEMPLOS_LISTAAUXAUDITABLES_NAME  = "fprDo_Ejemplos_ListaAuxauditablesRecientes";
                theToInit.EJEMPLOS_LISTAAUXAUDITABLES_TITLE = "Lista de Auxauditables Recientes";
                theToInit.EJEMPLOS_LISTAAUXAUDITABLES_URL   = "aux/auditables/listaAuxauditablesRecientesJSON";
                theToInit.EJEMPLOS_LISTAAUXAUDITABLES_TYPE  = "ListaAuxauditables";
                theToInit.EJEMPLOS_LISTAAUXAUDITABLES_FIELD = "vAuxauditables";

                theToInit.EJEMPLOS_LISTAAUXAUDITABLESENFECHA_NAME  = "fprDo_Ejemplos_ListaAuxauditablesEnFecha";
                theToInit.EJEMPLOS_LISTAAUXAUDITABLESENFECHA_TITLE = "Lista de Auxauditables en Fecha";
                theToInit.EJEMPLOS_LISTAAUXAUDITABLESENFECHA_URL   = "aux/auditables/listaAuxauditablesEnFechaJSON";
                theToInit.EJEMPLOS_LISTAAUXAUDITABLESENFECHA_TYPE  = "ListaAuxauditables";
                theToInit.EJEMPLOS_LISTAAUXAUDITABLESENFECHA_FIELD = "vAuxauditables";

                theToInit.EJEMPLOS_LISTAAUXAUDITABLESENTREFECHAS_NAME  = "fprDo_Ejemplos_ListaAuxauditablesEntreFechas";
                theToInit.EJEMPLOS_LISTAAUXAUDITABLESENTREFECHAS_TITLE = "Lista de Auxauditables entre Fechas";
                theToInit.EJEMPLOS_LISTAAUXAUDITABLESENTREFECHAS_URL   = "aux/auditables/listaAuxauditablesEntreFechasJSON";
                theToInit.EJEMPLOS_LISTAAUXAUDITABLESENTREFECHAS_TYPE  = "ListaAuxauditables";
                theToInit.EJEMPLOS_LISTAAUXAUDITABLESENTREFECHAS_FIELD = "vAuxauditables";




                theToInit.EJEMPLOS_AUXAUDITABLEDATOSCOMPLETOS_NAME  = "fprDo_Ejemplos_AuxauditableDatosCompletos";
                theToInit.EJEMPLOS_AUXAUDITABLEDATOSCOMPLETOS_TITLE = "Auxauditable (completo)";
                theToInit.EJEMPLOS_AUXAUDITABLEDATOSCOMPLETOS_URL   = "aux/auditables/auxauditableDatosCompletosJSON/";
                theToInit.EJEMPLOS_AUXAUDITABLEDATOSCOMPLETOS_TYPE  = "AuxauditableDatos";


                theToInit.EJEMPLOS_AUXAUDITABLEDATOSLIGEROS_NAME  ="fprDo_Ejemplos_AuxauditableDatos";
                theToInit.EJEMPLOS_AUXAUDITABLEDATOSLIGEROS_TITLE = "Auxauditable";
                theToInit.EJEMPLOS_AUXAUDITABLEDATOSLIGEROS_URL   = "aux/auditables/auxauditableDatosJSON/";
                theToInit.EJEMPLOS_AUXAUDITABLEDATOSLIGEROS_TYPE  = "AuxauditableDatos";




                theToInit.EJEMPLOS_CREARAUXAUDITABLE_NAME  ="fprDo_Ejemplos_CrearAuxauditable";
                theToInit.EJEMPLOS_CREARAUXAUDITABLE_TITLE = "Crear Auxauditable";
                theToInit.EJEMPLOS_CREARAUXAUDITABLE_URL   = "aux/auditables/crearAuxauditableJSON/";
                theToInit.EJEMPLOS_CREARAUXAUDITABLE_TYPE  = "AuxauditableDatos";


                theToInit.EJEMPLOS_CAMBIARAUXAUDITABLE_NAME  ="fprDo_Ejemplos_CambiarAuxauditable";
                theToInit.EJEMPLOS_CAMBIARAUXAUDITABLE_TITLE = "Cambiar Auxauditable";
                theToInit.EJEMPLOS_CAMBIARAUXAUDITABLE_URL   = "aux/auditables/auxAuxauditableCambiarAlgunosDatosJSON/";
                theToInit.EJEMPLOS_CAMBIARAUXAUDITABLE_TYPE  = "CambiadoAuxauditable";
                theToInit.EJEMPLOS_CAMBIARAUXAUDITABLE_AUXAUDITABLEDESPUES_FIELD  = "vAuxauditableDespues";



                theToInit.EJEMPLOS_ELIMINARAUXAUDITABLE_NAME  ="fprDo_Ejemplos_EliminarAuxauditable";
                theToInit.EJEMPLOS_ELIMINARAUXAUDITABLE_TITLE = "Eliminar Auxauditable";
                theToInit.EJEMPLOS_ELIMINARAUXAUDITABLE_URL   = "aux/auditables/auxAuxauditableEliminarJSON/";
                theToInit.EJEMPLOS_ELIMINARAUXAUDITABLE_TYPE  = "AuxauditableDatos";











                theToInit.EJEMPLOS_LISTATODASAUXDETALLESDEAUXAUDITABLE_NAME  = "fprDo_Ejemplos_ListaTodasAuxdetallesDeAuxauditable";
                theToInit.EJEMPLOS_LISTATODASAUXDETALLESDEAUXAUDITABLE_TITLE = "Lista de Auxdetalles Recientes";
                theToInit.EJEMPLOS_LISTATODASAUXDETALLESDEAUXAUDITABLE_URL   = "aux/auditables/listaTodasAuxdetallesDeAuxauditableConIdJSON/";
                theToInit.EJEMPLOS_LISTATODASAUXDETALLESDEAUXAUDITABLE_TYPE  = "ListaAuxdetalles";
                theToInit.EJEMPLOS_LISTATODASAUXDETALLESDEAUXAUDITABLE_FIELD = "vAuxdetalles";

                theToInit.EJEMPLOS_LISTAAUXDETALLESDEAUXAUDITABLE_NAME  = "fprDo_Ejemplos_ListaAuxdetallesDeAuxauditableRecientes";
                theToInit.EJEMPLOS_LISTAAUXDETALLESDEAUXAUDITABLE_TITLE = "Lista de Auxdetalles Recientes";
                theToInit.EJEMPLOS_LISTAAUXDETALLESDEAUXAUDITABLE_URL   = "aux/auditables/listaAuxdetallesDeAuxauditableConIdRecientesJSON/";
                theToInit.EJEMPLOS_LISTAAUXDETALLESDEAUXAUDITABLE_TYPE  = "ListaAuxdetalles";
                theToInit.EJEMPLOS_LISTAAUXDETALLESDEAUXAUDITABLE_FIELD = "vAuxdetalles";

                theToInit.EJEMPLOS_LISTAAUXDETALLESDEAUXAUDITABLEENFECHA_NAME  = "fprDo_Ejemplos_ListaAuxdetallesDeAuxauditableEnFecha";
                theToInit.EJEMPLOS_LISTAAUXDETALLESDEAUXAUDITABLEENFECHA_TITLE = "Lista de Auxdetalles en Fecha";
                theToInit.EJEMPLOS_LISTAAUXDETALLESDEAUXAUDITABLEENFECHA_URL   = "aux/auditables/listaAuxdetallesDeAuxauditableConIdEnFechaJSON/";
                theToInit.EJEMPLOS_LISTAAUXDETALLESDEAUXAUDITABLEENFECHA_TYPE  = "ListaAuxdetalles";
                theToInit.EJEMPLOS_LISTAAUXDETALLESDEAUXAUDITABLEENFECHA_FIELD = "vAuxdetalles";

                theToInit.EJEMPLOS_LISTAAUXDETALLESDEAUXAUDITABLEENTREFECHAS_NAME  = "fprDo_Ejemplos_ListaAuxdetallesDeAuxauditableEntreFechas";
                theToInit.EJEMPLOS_LISTAAUXDETALLESDEAUXAUDITABLEENTREFECHAS_TITLE = "Lista de Auxdetalles entre Fechas";
                theToInit.EJEMPLOS_LISTAAUXDETALLESDEAUXAUDITABLEENTREFECHAS_URL   = "aux/auditables/listaAuxdetallesDeAuxauditableConIdEntreFechasJSON/";
                theToInit.EJEMPLOS_LISTAAUXDETALLESDEAUXAUDITABLEENTREFECHAS_TYPE  = "ListaAuxdetalles";
                theToInit.EJEMPLOS_LISTAAUXDETALLESDEAUXAUDITABLEENTREFECHAS_FIELD = "vAuxdetalles";


                theToInit.EJEMPLOS_CREARAUXDETALLEDEAUXAUDITABLE_NAME  ="fprDo_Ejemplos_CrearAuxdetalleDeAuxauditable";
                theToInit.EJEMPLOS_CREARAUXDETALLEDEAUXAUDITABLE_TITLE = "Auxauditable";
                theToInit.EJEMPLOS_CREARAUXDETALLEDEAUXAUDITABLE_URL   = "aux/auditables/crearAuxdetalleDeAuxauditableConIdJSON/";
                theToInit.EJEMPLOS_CREARAUXDETALLEDEAUXAUDITABLE_TYPE  = "AuxdetalleDatos";



                theToInit.EJEMPLOS_CAMBIARAUXDETALLEDEAUXAUDITABLE_NAME  ="fprDo_Ejemplos_CambiarAuxdetalleDeAuxauditable";
                theToInit.EJEMPLOS_CAMBIARAUXDETALLEDEAUXAUDITABLE_TITLE = "Cambiar Auxdetalle de Auxauditable";
                theToInit.EJEMPLOS_CAMBIARAUXDETALLEDEAUXAUDITABLE_URL   = "aux/auditables/auxAuxdetalleCambiarAlgunosDatosJSON/";
                theToInit.EJEMPLOS_CAMBIARAUXDETALLEDEAUXAUDITABLE_TYPE  = "CambiadoAuxdetalle";
                theToInit.EJEMPLOS_CAMBIARAUXDETALLEDEAUXAUDITABLE_AUXAUDITABLEDESPUES_FIELD  = "vAuxdetalleDespues";



                theToInit.EJEMPLOS_ELIMINARAUXDETALLEDEAUDITABLE_NAME  ="fprDo_Ejemplos_EliminarAuxdetalleDeAuxauditable";
                theToInit.EJEMPLOS_ELIMINARAUXDETALLEDEAUDITABLE_TITLE = "Eliminar Auxdetalle de Auxauditable";
                theToInit.EJEMPLOS_ELIMINARAUXDETALLEDEAUDITABLE_URL   = "aux/auditables/auxAuxdetalleEliminarJSON/";
                theToInit.EJEMPLOS_ELIMINARAUXDETALLEDEAUDITABLE_TYPE  = "AuxdetalleDatos";






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


                theToInit.EJEMPLOS_CAMBIARPARMPOSTFIX = "_cambiar";


                theToInit.FIRSTINDEXURLREPLACEMENT = "{thePrimero}";
                theToInit.HOWMANYURLREPLACEMENT    = "{theCuantos}";


                theToInit.EJEMPLOSSVCE_DEFAULTNAME = "EjemplosSvceDefaultName";



                theToInit.OPERATIONSPECS = [

                    {
                        "title":           theToInit.EJEMPLOS_LISTATODASAUXAUDITABLES_TITLE,
                        "name":            theToInit.EJEMPLOS_LISTATODASAUXAUDITABLES_NAME,
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_LIST,
                        "url":             theToInit.EJEMPLOS_LISTATODASAUXAUDITABLES_URL,
                        "replyType":       theToInit.EJEMPLOS_LISTATODASAUXAUDITABLES_TYPE,
                        "replyField":      theToInit.EJEMPLOS_LISTATODASAUXAUDITABLES_FIELD,
                        "useUrlParm":      false,
                        "useUrlQuery":     false,
                        "useFirstAndMany": true
                    },

                    {
                        "title":           theToInit.EJEMPLOS_LISTAAUXAUDITABLES_TITLE,
                        "name":            theToInit.EJEMPLOS_LISTAAUXAUDITABLES_NAME,
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_LIST,
                        "url":             theToInit.EJEMPLOS_LISTAAUXAUDITABLES_URL,
                        "replyType":       theToInit.EJEMPLOS_LISTAAUXAUDITABLES_TYPE,
                        "replyField":      theToInit.EJEMPLOS_LISTAAUXAUDITABLES_FIELD,
                        "useUrlParm":      false,
                        "useUrlQuery":     false,
                        "useFirstAndMany": true
                    },
                    {
                        "title":           theToInit.EJEMPLOS_LISTAAUXAUDITABLESENFECHA_TITLE,
                        "name":            theToInit.EJEMPLOS_LISTAAUXAUDITABLESENFECHA_NAME,
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_LIST,
                        "url":             theToInit.EJEMPLOS_LISTAAUXAUDITABLESENFECHA_URL,
                        "replyType":       theToInit.EJEMPLOS_LISTAAUXAUDITABLESENFECHA_TYPE,
                        "replyField":      theToInit.EJEMPLOS_LISTAAUXAUDITABLESENFECHA_FIELD,
                        "useUrlParm":      false,
                        "useUrlQuery":     true,
                        "useFirstAndMany": true
                    },
                    {
                        "title":           theToInit.EJEMPLOS_LISTAAUXAUDITABLESENTREFECHAS_TITLE,
                        "name":            theToInit.EJEMPLOS_LISTAAUXAUDITABLESENTREFECHAS_NAME,
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_LIST,
                        "url":             theToInit.EJEMPLOS_LISTAAUXAUDITABLESENTREFECHAS_URL,
                        "replyType":       theToInit.EJEMPLOS_LISTAAUXAUDITABLESENTREFECHAS_TYPE,
                        "replyField":      theToInit.EJEMPLOS_LISTAAUXAUDITABLESENTREFECHAS_FIELD,
                        "useUrlParm":      false,
                        "useUrlQuery":     true,
                        "useFirstAndMany": true
                    },




                    {
                        "title":           theToInit.EJEMPLOS_AUXAUDITABLEDATOSCOMPLETOS_TITLE,
                        "name":            theToInit.EJEMPLOS_AUXAUDITABLEDATOSCOMPLETOS_NAME,
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_ONE,
                        "url":             theToInit.EJEMPLOS_AUXAUDITABLEDATOSCOMPLETOS_URL,
                        "replyType":       theToInit.EJEMPLOS_AUXAUDITABLEDATOSCOMPLETOS_TYPE,
                        "replyField":      null
                    },
                    {
                        "title":           theToInit.EJEMPLOS_AUXAUDITABLEDATOSLIGEROS_TITLE,
                        "name":            theToInit.EJEMPLOS_AUXAUDITABLEDATOSLIGEROS_NAME,
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_ONE,
                        "url":             theToInit.EJEMPLOS_AUXAUDITABLEDATOSLIGEROS_URL,
                        "replyType":       theToInit.EJEMPLOS_AUXAUDITABLEDATOSLIGEROS_TYPE,
                        "replyField":      null
                    },


                    {
                        "title":           theToInit.EJEMPLOS_CREARAUXAUDITABLE_TITLE,
                        "name":            theToInit.EJEMPLOS_CREARAUXAUDITABLE_NAME,
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_CREATE,
                        "url":             theToInit.EJEMPLOS_CREARAUXAUDITABLE_URL,
                        "replyType":       theToInit.EJEMPLOS_CREARAUXAUDITABLE_TYPE
                    },


                    {
                        "title":           theToInit.EJEMPLOS_CAMBIARAUXAUDITABLE_TITLE,
                        "name":            theToInit.EJEMPLOS_CAMBIARAUXAUDITABLE_NAME,
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_CHANGE,
                        "url":             theToInit.EJEMPLOS_CAMBIARAUXAUDITABLE_URL,
                        "replyType":       theToInit.EJEMPLOS_CAMBIARAUXAUDITABLE_TYPE,
                        "replyField":      theToInit.EJEMPLOS_CAMBIARAUXAUDITABLE_AUXAUDITABLEDESPUES_FIELD
                    },

                    {
                        "title":           theToInit.EJEMPLOS_ELIMINARAUXAUDITABLE_TITLE,
                        "name":            theToInit.EJEMPLOS_ELIMINARAUXAUDITABLE_NAME,
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_CHANGE,
                        "url":             theToInit.EJEMPLOS_ELIMINARAUXAUDITABLE_URL,
                        "replyType":       theToInit.EJEMPLOS_ELIMINARAUXAUDITABLE_TYPE
                    },





                    {
                        "title":           theToInit.EJEMPLOS_LISTATODASAUXDETALLESDEAUXAUDITABLE_TITLE,
                        "name":            theToInit.EJEMPLOS_LISTATODASAUXDETALLESDEAUXAUDITABLE_NAME,
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_LIST,
                        "url":             theToInit.EJEMPLOS_LISTATODASAUXDETALLESDEAUXAUDITABLE_URL,
                        "replyType":       theToInit.EJEMPLOS_LISTATODASAUXDETALLESDEAUXAUDITABLE_TYPE,
                        "replyField":      theToInit.EJEMPLOS_LISTATODASAUXDETALLESDEAUXAUDITABLE_FIELD,
                        "useUrlParm":      true,
                        "useUrlQuery":     false,
                        "useFirstAndMany": true
                    },

                    {
                        "title":           theToInit.EJEMPLOS_LISTAAUXDETALLESDEAUXAUDITABLE_TITLE,
                        "name":            theToInit.EJEMPLOS_LISTAAUXDETALLESDEAUXAUDITABLE_NAME,
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_LIST,
                        "url":             theToInit.EJEMPLOS_LISTAAUXDETALLESDEAUXAUDITABLE_URL,
                        "replyType":       theToInit.EJEMPLOS_LISTAAUXDETALLESDEAUXAUDITABLE_TYPE,
                        "replyField":      theToInit.EJEMPLOS_LISTAAUXDETALLESDEAUXAUDITABLE_FIELD,
                        "useUrlParm":      true,
                        "useUrlQuery":     false,
                        "useFirstAndMany": true
                    },
                    {
                        "title":           theToInit.EJEMPLOS_LISTAAUXDETALLESDEAUXAUDITABLEENFECHA_TITLE,
                        "name":            theToInit.EJEMPLOS_LISTAAUXDETALLESDEAUXAUDITABLEENFECHA_NAME,
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_LIST,
                        "url":             theToInit.EJEMPLOS_LISTAAUXDETALLESDEAUXAUDITABLEENFECHA_URL,
                        "replyType":       theToInit.EJEMPLOS_LISTAAUXDETALLESDEAUXAUDITABLEENFECHA_TYPE,
                        "replyField":      theToInit.EJEMPLOS_LISTAAUXDETALLESDEAUXAUDITABLEENFECHA_FIELD,
                        "useUrlParm":      false,
                        "useUrlQuery":     true,
                        "useFirstAndMany": true
                    },
                    {
                        "title":           theToInit.EJEMPLOS_LISTAAUXDETALLESDEAUXAUDITABLEENTREFECHAS_TITLE,
                        "name":            theToInit.EJEMPLOS_LISTAAUXDETALLESDEAUXAUDITABLEENTREFECHAS_NAME,
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_LIST,
                        "url":             theToInit.EJEMPLOS_LISTAAUXDETALLESDEAUXAUDITABLEENTREFECHAS_URL,
                        "replyType":       theToInit.EJEMPLOS_LISTAAUXDETALLESDEAUXAUDITABLEENTREFECHAS_TYPE,
                        "replyField":      theToInit.EJEMPLOS_LISTAAUXDETALLESDEAUXAUDITABLEENTREFECHAS_FIELD,
                        "useUrlParm":      false,
                        "useUrlQuery":     true,
                        "useFirstAndMany": true
                    },



                    {
                        "title":           theToInit.EJEMPLOS_CREARAUXDETALLEDEAUXAUDITABLE_TITLE,
                        "name":            theToInit.EJEMPLOS_CREARAUXDETALLEDEAUXAUDITABLE_NAME,
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_CREATE,
                        "url":             theToInit.EJEMPLOS_CREARAUXDETALLEDEAUXAUDITABLE_URL,
                        "replyType":       theToInit.EJEMPLOS_CREARAUXDETALLEDEAUXAUDITABLE_TYPE
                    },

                    {
                        "title":           theToInit.EJEMPLOS_ELIMINARAUXDETALLEDEAUDITABLE_TITLE,
                        "name":            theToInit.EJEMPLOS_ELIMINARAUXDETALLEDEAUDITABLE_NAME,
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_DELETE,
                        "url":             theToInit.EJEMPLOS_ELIMINARAUXDETALLEDEAUDITABLE_URL,
                        "replyType":       theToInit.EJEMPLOS_ELIMINARAUXDETALLEDEAUDITABLE_TYPE
                    },


                    {
                        "title":           theToInit.EJEMPLOS_CAMBIARAUXDETALLEDEAUXAUDITABLE_TITLE,
                        "name":            theToInit.EJEMPLOS_CAMBIARAUXDETALLEDEAUXAUDITABLE_NAME,
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_CHANGE,
                        "url":             theToInit.EJEMPLOS_CAMBIARAUXDETALLEDEAUXAUDITABLE_URL,
                        "replyType":       theToInit.EJEMPLOS_CAMBIARAUXDETALLEDEAUXAUDITABLE_TYPE,
                        "replyField":      theToInit.EJEMPLOS_CAMBIARAUXDETALLEDEAUXAUDITABLE_AUXAUDITABLEDESPUES_FIELD
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






            var aEjemplosSvce_Prototype = (function() {


                var aPrototype = new theS_HitSpecifiedSvceType.HitSpecifiedSvce_SuperPrototypeConstructor();

                pgInitFromModuleConstants( aPrototype);


                aPrototype._v_SuperPrototype = theS_HitSpecifiedSvceType.HitSpecifiedSvce_Prototype;


                aPrototype._v_Type = "EjemplosSvce";

                aPrototype._v_Module = null;








                var _pInit = function( theTitle, theIdentifier, theRecorder) {

                    this._pInit_EjemplosSvce( theTitle, theIdentifier, theRecorder);
                };
                if( _pInit){}/* CQT */
                aPrototype._pInit = _pInit;







                var _pInit_EjemplosSvce = function( theTitle, theIdentifier, theRecorder) {

                    /* Delegate on super prototype initialization */
                    aPrototype._v_SuperPrototype._pInit_HitSpecifiedSvce.apply( this, [
                        theTitle || this.EJEMPLOSSVCE_DEFAULTNAME,
                        theIdentifier,
                        theRecorder
                    ]);

                    this._v_Prototype = aPrototype;
                    this._v_Type      = this._v_Prototype._v_Type;
                    this._v_Module    = aPrototype._v_Module;


                    this.pRegisterOperationsFromSpecs( this.OPERATIONSPECS);
                };
                if( _pInit_EjemplosSvce){}/* CQT */
                aPrototype._pInit_EjemplosSvce = _pInit_EjemplosSvce;







                var fprDo_Ejemplos_ListaTodasAuxauditables_Wrapper_NoBackand = function( theDesde, theCuantos) {

                    return this.fprDo_Ejemplos_ListaTodasAuxauditables( theDesde, theCuantos);
                };
                if( fprDo_Ejemplos_ListaTodasAuxauditables_Wrapper_NoBackand){}/* CQT */
                aPrototype.fprDo_Ejemplos_ListaTodasAuxauditables_Wrapper_NoBackand = fprDo_Ejemplos_ListaTodasAuxauditables_Wrapper_NoBackand;







                var fprDo_Ejemplos_ListaTodasAuxauditables_Wrapper = function( theDesde, theCuantos) {

                    /*
                    return this.fprDo_Ejemplos_ListaTodasAuxauditables( theDesde, theCuantos);
                     */



                    var aMethodName = this._v_Type + " fprDo_Ejemplos_ListaTodasAuxauditables_Wrapper";

                    /*
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
                    */

                    var aURL = theS_Backand.getApiUrl() + "/1/objects/auxauditables";

                    var aThis = this;

                    return theS_HttpSvce
                        .fprDo_HttpGet( aURL)
                        .then( function( theResponse) {

                            /*
                            if( !aThis.fCheckResponseReceived_AndUpdateReport( theOperationReport, theResponse)) {
                                return aThis.fNewDeferredRejectPromise( theOperationReport);
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

                            var aField = theOperationReport._v_Field;
                            if( aField) {
                                someRows = theResponse[ aField];
                            }
                            */


                            if( !theResponse) {
                                return aThis.fNewDeferredRejectPromise( null);
                            }


                            var someRows = theResponse[ "data"];

                            if( typeof someRows == "undefined") {
                                return aThis.fNewDeferredRejectPromise( null);
                            }


                            return aThis.fNewDeferredResolveWithRowsPromise( someRows);
                        })
                        ["catch"]( function( theError) {

                        console.log( theError);

                        /*
                        aThis.pReportAjaxError( theOperationReport, theError, null);

                        if( aThis.LOGFAILURES) {
                            aThis.fRecord( aMethodName, aThis.EVENTKIND_SERVICEREPORT_FAIL, theOperationReport, aURL, theError);
                        }
                        */

                        throw theError;
                    });


                };
                if( fprDo_Ejemplos_ListaTodasAuxauditables_Wrapper){}/* CQT */
                aPrototype.fprDo_Ejemplos_ListaTodasAuxauditables_Wrapper = fprDo_Ejemplos_ListaTodasAuxauditables_Wrapper;





                var fprDo_Ejemplos_ListaAuxauditablesRecientes_Wrapper = function( theDesde, theCuantos) {

                    return this.fprDo_Ejemplos_ListaAuxauditablesRecientes( theDesde, theCuantos);
                };
                if( fprDo_Ejemplos_ListaAuxauditablesRecientes_Wrapper){}/* CQT */
                aPrototype.fprDo_Ejemplos_ListaAuxauditablesRecientes_Wrapper = fprDo_Ejemplos_ListaAuxauditablesRecientes_Wrapper;




                var fprDo_Ejemplos_ListaAuxauditablesEntreFechas_Wrapper = function( theDesde, theCuantos) {

                    return this.fprDo_Ejemplos_ListaAuxauditablesEntreFechas( theDesde, theCuantos);
                };
                if( fprDo_Ejemplos_ListaAuxauditablesEntreFechas_Wrapper){}/* CQT */
                aPrototype.fprDo_Ejemplos_ListaAuxauditablesEntreFechas_Wrapper = fprDo_Ejemplos_ListaAuxauditablesEntreFechas_Wrapper;







                var fprDo_Ejemplos_CrearAuxauditable_Wrapper = function( theForm) {

                    return this.fprDo_Ejemplos_CrearAuxauditable( theForm);
                };
                if( fprDo_Ejemplos_CrearAuxauditable_Wrapper){}/* CQT */
                aPrototype.fprDo_Ejemplos_CrearAuxauditable_Wrapper = fprDo_Ejemplos_CrearAuxauditable_Wrapper;







                var fprDo_Ejemplos_CambiarAuxauditable_Wrapper = function( theForm) {

                    return this.fprDo_Ejemplos_CambiarAuxauditable( theForm);
                };
                if( fprDo_Ejemplos_CambiarAuxauditable_Wrapper){}/* CQT */
                aPrototype.fprDo_Ejemplos_CambiarAuxauditable_Wrapper = fprDo_Ejemplos_CambiarAuxauditable_Wrapper;





                var fprDo_Ejemplos_EliminarAuxauditable_Wrapper = function( theForm) {

                    return this.fprDo_Ejemplos_EliminarAuxauditable( theForm);
                };
                if( fprDo_Ejemplos_EliminarAuxauditable_Wrapper){}/* CQT */
                aPrototype.fprDo_Ejemplos_EliminarAuxauditable_Wrapper = fprDo_Ejemplos_EliminarAuxauditable_Wrapper;













                var fprDo_Ejemplos_ListaTodasAuxdetallesDeAuxauditable_Wrapper = function( theIdAuxauditable, theDesde, theCuantos) {

                    return this.fprDo_Ejemplos_ListaTodasAuxdetallesDeAuxauditable( theIdAuxauditable, theDesde, theCuantos);
                };
                if( fprDo_Ejemplos_ListaTodasAuxdetallesDeAuxauditable_Wrapper){}/* CQT */
                aPrototype.fprDo_Ejemplos_ListaTodasAuxdetallesDeAuxauditable_Wrapper = fprDo_Ejemplos_ListaTodasAuxdetallesDeAuxauditable_Wrapper;





                var fprDo_Ejemplos_ListaAuxdetallesDeAuxauditableRecientes_Wrapper = function( theIdAuxauditable, theDesde, theCuantos) {

                    return this.fprDo_Ejemplos_ListaAuxdetallesDeAuxauditableRecientes( theIdAuxauditable, theDesde, theCuantos);
                };
                if( fprDo_Ejemplos_ListaAuxdetallesDeAuxauditableRecientes_Wrapper){}/* CQT */
                aPrototype.fprDo_Ejemplos_ListaAuxdetallesDeAuxauditableRecientes_Wrapper = fprDo_Ejemplos_ListaAuxdetallesDeAuxauditableRecientes_Wrapper;





                var fprDo_Ejemplos_ListaAuxdetallesDeAuxauditableEntreFechas_Wrapper = function( theIdAuxauditable, theDesde, theCuantos) {

                    return this.fprDo_Ejemplos_ListaAuxdetallesDeAuxauditableEntreFechas( theIdAuxauditable, theDesde, theCuantos);
                };
                if( fprDo_Ejemplos_ListaAuxdetallesDeAuxauditableEntreFechas_Wrapper){}/* CQT */
                aPrototype.fprDo_Ejemplos_ListaAuxdetallesDeAuxauditableEntreFechas_Wrapper = fprDo_Ejemplos_ListaAuxdetallesDeAuxauditableEntreFechas_Wrapper;







                var fprDo_Ejemplos_CrearAuxdetalleDeAuxauditable_Wrapper = function( theForm) {

                    return this.fprDo_Ejemplos_CrearAuxdetalleDeAuxauditable( theForm);
                };
                if( fprDo_Ejemplos_CrearAuxdetalleDeAuxauditable_Wrapper){}/* CQT */
                aPrototype.fprDo_Ejemplos_CrearAuxdetalleDeAuxauditable_Wrapper = fprDo_Ejemplos_CrearAuxdetalleDeAuxauditable_Wrapper;




                var fprDo_Ejemplos_CambiarAuxdetalleDeAuxauditable_Wrapper = function( theForm) {

                    return this.fprDo_Ejemplos_CambiarAuxdetalleDeAuxauditable( theForm);
                };
                if( fprDo_Ejemplos_CambiarAuxdetalleDeAuxauditable_Wrapper){}/* CQT */
                aPrototype.fprDo_Ejemplos_CambiarAuxdetalleDeAuxauditable_Wrapper = fprDo_Ejemplos_CambiarAuxdetalleDeAuxauditable_Wrapper;




                var fprDo_Ejemplos_EliminarAuxdetalleDeAuxauditable_Wrapper = function( theForm) {

                    return this.fprDo_Ejemplos_EliminarAuxdetalleDeAuxauditable( theForm);
                };
                if( fprDo_Ejemplos_EliminarAuxdetalleDeAuxauditable_Wrapper){}/* CQT */
                aPrototype.fprDo_Ejemplos_EliminarAuxdetalleDeAuxauditable_Wrapper = fprDo_Ejemplos_EliminarAuxdetalleDeAuxauditable_Wrapper;







                return aPrototype;

            })();








            var EjemplosSvce_Constructor = function( theTitle, theIdentifier, theRecorder) {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_HitSpecifiedSvceType.HitSpecifiedSvce_Prototype;

                this._v_Prototype = null;
                this._v_Type      = null;
                this._v_Module    = null;

                this._pInit_EjemplosSvce( theTitle, theIdentifier, theRecorder);
            };
            EjemplosSvce_Constructor.prototype = aEjemplosSvce_Prototype;





            var EjemplosSvce_SuperPrototypeConstructor = function() {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_HitSpecifiedSvceType.HitSpecifiedSvce_Prototype;

                this._v_Prototype = aEjemplosSvce_Prototype;
                this._v_Type      = null;
                this._v_Module    = null;
            };
            EjemplosSvce_SuperPrototypeConstructor.prototype = aEjemplosSvce_Prototype;



            var aModule = {
                "EjemplosSvce_Prototype": aEjemplosSvce_Prototype,
                "EjemplosSvce_Constructor": EjemplosSvce_Constructor,
                "EjemplosSvce_SuperPrototypeConstructor": EjemplosSvce_SuperPrototypeConstructor
            };
            pgInitFromModuleConstants( aModule);
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;

            aEjemplosSvce_Prototype._v_Module = aModule;




            return aModule;
        };







        var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        if( !anExistingModule) {

            var aModule = aMod_definer(
                theSS_Overrider,
                theSS_HitSpecifiedSvceType,
                theSS_HitServerSvceType,
                theSS_HttpSvce,
                theSS_Backand
            );
            anExistingModule = aModule;

            theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
        }



        return anExistingModule;


    }]);







