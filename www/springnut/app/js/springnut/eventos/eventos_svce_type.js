'use strict';

/*
 * eventos_svce_type.js
 *
 * Creado @author Antonio Carrasco Valero 201503030557
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




angular.module("eventosTypes").factory("EventosSvceType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "HitSpecifiedSvceType",
    "HitServerSvceType",
    function( theSS_typesregistry,
              theSS_Overrider,
              theSS_HitSpecifiedSvceType,
              theSS_HitServerSvceType){



        var ModuleName     = "eventos_svce_type";
        var ModulePackages = "springnut/eventos";
        var ModuleFullName = ModulePackages + "/" + ModuleName;





        var aMod_definer = function( theS_Overrider,
                                     theS_HitSpecifiedSvceType,
                                     theS_HitServerSvceType) {

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



                theToInit.EVENTOS_REUSEDATOSCOMPLETOS_MAXLAPSEDMILLIS = 2000;



                theToInit.EVENTOS_LISTAEXCEPCIONES_NAME  = "fprDo_Excepciones_ListaExcepcionesRecientes";
                theToInit.EVENTOS_LISTAEXCEPCIONES_TITLE = "Lista de Excepciones Recientes";
                theToInit.EVENTOS_LISTAEXCEPCIONES_URL   = "excepciones/listaExcepcionesRecientesJSON";
                theToInit.EVENTOS_LISTAEXCEPCIONES_TYPE  = "ListaExcepciones";
                theToInit.EVENTOS_LISTAEXCEPCIONES_FIELD = "vExcepciones";

                theToInit.EVENTOS_LISTAEXCEPCIONESENFECHA_NAME  = "fprDo_Excepciones_ListaExcepcionesEnFecha";
                theToInit.EVENTOS_LISTAEXCEPCIONESENFECHA_TITLE = "Lista de Excepciones en Fecha";
                theToInit.EVENTOS_LISTAEXCEPCIONESENFECHA_URL   = "excepciones/listaExcepcionesEnFechaJSON";
                theToInit.EVENTOS_LISTAEXCEPCIONESENFECHA_TYPE  = "ListaExcepciones";
                theToInit.EVENTOS_LISTAEXCEPCIONESENFECHA_FIELD = "vExcepciones";

                theToInit.EVENTOS_LISTAEXCEPCIONESENTREFECHAS_NAME  = "fprDo_Excepciones_ListaExcepcionesEntreFechas";
                theToInit.EVENTOS_LISTAEXCEPCIONESENTREFECHAS_TITLE = "Lista de Excepciones entre Fechas";
                theToInit.EVENTOS_LISTAEXCEPCIONESENTREFECHAS_URL   = "excepciones/listaExcepcionesEntreFechasJSON";
                theToInit.EVENTOS_LISTAEXCEPCIONESENTREFECHAS_TYPE  = "ListaExcepciones";
                theToInit.EVENTOS_LISTAEXCEPCIONESENTREFECHAS_FIELD = "vExcepciones";




                theToInit.EVENTOS_LISTAPILADEEXCEPCION_NAME  = "fprDo_Excepciones_ListaPilaDeExcepcion";
                theToInit.EVENTOS_LISTAPILADEEXCEPCION_TITLE = "Pila de Excepción";
                theToInit.EVENTOS_LISTAPILADEEXCEPCION_FIELD = "vStackTraceElements";
                theToInit.EVENTOS_LISTAPILADEEXCEPCION_MAXLAPSEDMILLIS = theToInit.EVENTOS_REUSEDATOSCOMPLETOS_MAXLAPSEDMILLIS;


                theToInit.EVENTOS_LISTACAUSASDEEXCEPCION_NAME  = "fprDo_Excepciones_ListaCausasDeExcepcion";
                theToInit.EVENTOS_LISTACAUSASDEEXCEPCION_TITLE = "Lista de Causas de Excepción";
                theToInit.EVENTOS_LISTACAUSASDEEXCEPCION_FIELD = "vCausasAplanadas";
                theToInit.EVENTOS_LISTACAUSASDEEXCEPCION_MAXLAPSEDMILLIS = theToInit.EVENTOS_REUSEDATOSCOMPLETOS_MAXLAPSEDMILLIS;


                theToInit.EVENTOS_LISTAPILADECAUSA_NAME  = "fprDo_Excepciones_ListaPilaDeCausa";
                theToInit.EVENTOS_LISTAPILADECAUSA_TITLE = "Pila de Causa";
                theToInit.EVENTOS_LISTAPILADECAUSA_FIELD = "vStackTraceElements";
                theToInit.EVENTOS_LISTAPILADECAUSA_MAXLAPSEDMILLIS = theToInit.EVENTOS_REUSEDATOSCOMPLETOS_MAXLAPSEDMILLIS;

                
                



                theToInit.EVENTOS_EXCEPCIONDATOSCOMPLETOS_NAME  = "fprDo_Excepciones_ExcepcionDatosCompletos";
                theToInit.EVENTOS_EXCEPCIONDATOSCOMPLETOS_TITLE = "Excepción";
                theToInit.EVENTOS_EXCEPCIONDATOSCOMPLETOS_URL   = "excepciones/excepcionDatosDetalladosJSON/";
                theToInit.EVENTOS_EXCEPCIONDATOSCOMPLETOS_TYPE  = "ExcepcionDatos";


                theToInit.EVENTOS_EXCEPCIONDATOSLIGEROS_NAME  ="fprDo_Excepciones_ExcepcionDatos";
                theToInit.EVENTOS_EXCEPCIONDATOSLIGEROS_TITLE = "Excepción";
                theToInit.EVENTOS_EXCEPCIONDATOSLIGEROS_URL   = "excepciones/excepcionDatosJSON/";
                theToInit.EVENTOS_EXCEPCIONDATOSLIGEROS_TYPE  = "ExcepcionDatos";








                theToInit.EVENTOS_LISTAACCESOSOPERADORES_NAME  = "fprDo_Accesosoperadores_ListaAccesosoperadoresRecientes";
                theToInit.EVENTOS_LISTAACCESOSOPERADORES_TITLE = "Lista de Accesos Recientes";
                theToInit.EVENTOS_LISTAACCESOSOPERADORES_URL   = "accesos/listaAccesosoperadoresRecientesJSON";
                theToInit.EVENTOS_LISTAACCESOSOPERADORES_TYPE  = "ListaAccesosoperadores";
                theToInit.EVENTOS_LISTAACCESOSOPERADORES_FIELD = "vAccesos";

                theToInit.EVENTOS_LISTAACCESOSOPERADORESENFECHA_NAME  = "fprDo_Accesosoperadores_ListaAccesosoperadoresEnFecha";
                theToInit.EVENTOS_LISTAACCESOSOPERADORESENFECHA_TITLE = "Lista de Accesos en Fecha";
                theToInit.EVENTOS_LISTAACCESOSOPERADORESENFECHA_URL   = "accesos/listaAccesosoperadoresEnFechaJSON";
                theToInit.EVENTOS_LISTAACCESOSOPERADORESENFECHA_TYPE  = "ListaAccesosoperadores";
                theToInit.EVENTOS_LISTAACCESOSOPERADORESENFECHA_FIELD = "vAccesos";

                theToInit.EVENTOS_LISTAACCESOSOPERADORESENTREFECHAS_NAME  = "fprDo_Accesosoperadores_ListaAccesosoperadoresEntreFechas";
                theToInit.EVENTOS_LISTAACCESOSOPERADORESENTREFECHAS_TITLE = "Lista de Accesos entre Fechas";
                theToInit.EVENTOS_LISTAACCESOSOPERADORESENTREFECHAS_URL   = "accesos/listaAccesosoperadoresEntreFechasJSON";
                theToInit.EVENTOS_LISTAACCESOSOPERADORESENTREFECHAS_TYPE  = "ListaAccesosoperadores";
                theToInit.EVENTOS_LISTAACCESOSOPERADORESENTREFECHAS_FIELD = "vAccesos";









                theToInit.EVENTOS_LISTAACCESOSFALLIDOS_NAME  = "fprDo_Accesosfallidos_ListaAccesosfallidosRecientes";
                theToInit.EVENTOS_LISTAACCESOSFALLIDOS_TITLE = "Lista de Fallos de acceso Recientes";
                theToInit.EVENTOS_LISTAACCESOSFALLIDOS_URL   = "accesos/listaAccesosfallidosRecientesJSON";
                theToInit.EVENTOS_LISTAACCESOSFALLIDOS_TYPE  = "ListaAccesosfallidos";
                theToInit.EVENTOS_LISTAACCESOSFALLIDOS_FIELD = "vAccesos";

                theToInit.EVENTOS_LISTAACCESOSFALLIDOSENFECHA_NAME  = "fprDo_Accesosfallidos_ListaAccesosfallidosEnFecha";
                theToInit.EVENTOS_LISTAACCESOSFALLIDOSENFECHA_TITLE = "Lista de Accesos en Fecha";
                theToInit.EVENTOS_LISTAACCESOSFALLIDOSENFECHA_URL   = "accesos/listaAccesosfallidosEnFechaJSON";
                theToInit.EVENTOS_LISTAACCESOSFALLIDOSENFECHA_TYPE  = "ListaAccesosfallidos";
                theToInit.EVENTOS_LISTAACCESOSFALLIDOSENFECHA_FIELD = "vAccesos";

                theToInit.EVENTOS_LISTAACCESOSFALLIDOSENTREFECHAS_NAME  = "fprDo_Accesosfallidos_ListaAccesosfallidosEntreFechas";
                theToInit.EVENTOS_LISTAACCESOSFALLIDOSENTREFECHAS_TITLE = "Lista de Accesos entre Fechas";
                theToInit.EVENTOS_LISTAACCESOSFALLIDOSENTREFECHAS_URL   = "accesos/listaAccesosfallidosEntreFechasJSON";
                theToInit.EVENTOS_LISTAACCESOSFALLIDOSENTREFECHAS_TYPE  = "ListaAccesosfallidos";
                theToInit.EVENTOS_LISTAACCESOSFALLIDOSENTREFECHAS_FIELD = "vAccesos";





                theToInit.EVENTOS_LISTALECTURASBOLETINES_NAME  = "fprDo_Lecturasboletines_ListaLecturasboletinesRecientes";
                theToInit.EVENTOS_LISTALECTURASBOLETINES_TITLE = "Lista de Lecturas de Boletines Recientes";
                theToInit.EVENTOS_LISTALECTURASBOLETINES_URL   = "lecturasboletines/listaLecturasboletinesRecientesJSON";
                theToInit.EVENTOS_LISTALECTURASBOLETINES_TYPE  = "ListaLecturasboletines";
                theToInit.EVENTOS_LISTALECTURASBOLETINES_FIELD = "vLecturasboletines";

                theToInit.EVENTOS_LISTALECTURASBOLETINESENFECHA_NAME  = "fprDo_Lecturasboletines_ListLecturasboletinesEnFecha";
                theToInit.EVENTOS_LISTALECTURASBOLETINESENFECHA_TITLE = "Lista de Lecturas de Boletines  en Fecha";
                theToInit.EVENTOS_LISTALECTURASBOLETINESENFECHA_URL   = "lecturasboletines/listaLecturasboletinesEnFechaJSON";
                theToInit.EVENTOS_LISTALECTURASBOLETINESENFECHA_TYPE  = "ListaLecturasboletines";
                theToInit.EVENTOS_LISTALECTURASBOLETINESENFECHA_FIELD = "vLecturasboletines";

                theToInit.EVENTOS_LISTALECTURASBOLETINESENTREFECHAS_NAME  = "fprDo_Lecturasboletines_ListaLecturasboletinesEntreFechas";
                theToInit.EVENTOS_LISTALECTURASBOLETINESENTREFECHAS_TITLE = "Lista de Lecturas de Boletines  entre Fechas";
                theToInit.EVENTOS_LISTALECTURASBOLETINESENTREFECHAS_URL   = "lecturasboletines/listaLecturasboletinesEntreFechasJSON";
                theToInit.EVENTOS_LISTALECTURASBOLETINESENTREFECHAS_TYPE  = "ListaLecturasboletines";
                theToInit.EVENTOS_LISTALECTURASBOLETINESENTREFECHAS_FIELD = "vLecturasboletines";









                theToInit.EVENTOS_LISTACAMBIOS_NAME  = "fprDo_Cambios_ListaCambiosRecientes";
                theToInit.EVENTOS_LISTACAMBIOS_TITLE = "Lista de Cambios Recientes";
                theToInit.EVENTOS_LISTACAMBIOS_URL   = "vercambios/listaVercambiosRecientesJSON";
                theToInit.EVENTOS_LISTACAMBIOS_TYPE  = "ListaVercambios";
                theToInit.EVENTOS_LISTACAMBIOS_FIELD = "vVercambios";

                theToInit.EVENTOS_LISTACAMBIOSENFECHA_NAME  = "fprDo_Cambios_ListaCambiosEnFecha";
                theToInit.EVENTOS_LISTACAMBIOSENFECHA_TITLE = "Lista de Cambios en Fecha";
                theToInit.EVENTOS_LISTACAMBIOSENFECHA_URL   = "vercambios/listaVercambiosEnFechaJSON";
                theToInit.EVENTOS_LISTACAMBIOSENFECHA_TYPE  = "ListaVercambios";
                theToInit.EVENTOS_LISTACAMBIOSENFECHA_FIELD = "vVercambios";

                theToInit.EVENTOS_LISTACAMBIOSENTREFECHAS_NAME  = "fprDo_Cambios_ListaCambiosEntreFechas";
                theToInit.EVENTOS_LISTACAMBIOSENTREFECHAS_TITLE = "Lista de Cambios entre Fechas";
                theToInit.EVENTOS_LISTACAMBIOSENTREFECHAS_URL   = "vercambios/listaVercambiosEntreFechasJSON";
                theToInit.EVENTOS_LISTACAMBIOSENTREFECHAS_TYPE  = "ListaVercambios";
                theToInit.EVENTOS_LISTACAMBIOSENTREFECHAS_FIELD = "vVercambios";





                theToInit.EVENTOS_LISTACAMBIOSCONTIPOS_NAME  = "fprDo_Cambios_ListaCambiosRecientesConTipos";
                theToInit.EVENTOS_LISTACAMBIOSCONTIPOS_TITLE = "Lista de Cambios Recientes";
                theToInit.EVENTOS_LISTACAMBIOSCONTIPOS_URL   = "vercambios/listaVercambiosRecientesConTiposJSON";
                theToInit.EVENTOS_LISTACAMBIOSCONTIPOS_TYPE  = "ListaVercambios";
                theToInit.EVENTOS_LISTACAMBIOSCONTIPOS_FIELD = "vVercambios";

                theToInit.EVENTOS_LISTACAMBIOSENFECHACONTIPOS_NAME  = "fprDo_Cambios_ListaCambiosEnFechaConTipos";
                theToInit.EVENTOS_LISTACAMBIOSENFECHACONTIPOS_TITLE = "Lista de Cambios en Fecha";
                theToInit.EVENTOS_LISTACAMBIOSENFECHACONTIPOS_URL   = "vercambios/listaVercambiosEnFechaConTiposJSON";
                theToInit.EVENTOS_LISTACAMBIOSENFECHACONTIPOS_TYPE  = "ListaVercambios";
                theToInit.EVENTOS_LISTACAMBIOSENFECHACONTIPOS_FIELD = "vVercambios";

                theToInit.EVENTOS_LISTACAMBIOSENTREFECHASCONTIPOS_NAME  = "fprDo_Cambios_ListaCambiosEntreFechasConTipos";
                theToInit.EVENTOS_LISTACAMBIOSENTREFECHASCONTIPOS_TITLE = "Lista de Cambios entre Fechas";
                theToInit.EVENTOS_LISTACAMBIOSENTREFECHASCONTIPOS_URL   = "vercambios/listaVercambiosEntreFechasConTiposJSON";
                theToInit.EVENTOS_LISTACAMBIOSENTREFECHASCONTIPOS_TYPE  = "ListaVercambios";
                theToInit.EVENTOS_LISTACAMBIOSENTREFECHASCONTIPOS_FIELD = "vVercambios";




                theToInit.EVENTOS_LISTAENTIDADESDECAMBIO_NAME  = "fprDo_Cambios_ListaEntidadesDeCambio";
                theToInit.EVENTOS_LISTAENTIDADESDECAMBIO_TITLE = "Lista de Entidades Cambiadas";
                theToInit.EVENTOS_LISTAENTIDADESDECAMBIO_URL   = "vercambios/listaVeridscambiadasDeVercambioConIdJSON/";
                theToInit.EVENTOS_LISTAENTIDADESDECAMBIO_TYPE  = "ListaVeridscambiadas";
                theToInit.EVENTOS_LISTAENTIDADESDECAMBIO_FIELD = "vVeridscambiadas";




                theToInit.EVENTOS_CAMBIODATOSCOMPLETOS_NAME  = "fprDo_Cambios_CambioDatosCompletos";
                theToInit.EVENTOS_CAMBIODATOSCOMPLETOS_TITLE = "Cambio";
                theToInit.EVENTOS_CAMBIODATOSCOMPLETOS_URL   = "vercambios/vercambioDatosConTiposJSON/";
                theToInit.EVENTOS_CAMBIODATOSCOMPLETOS_TYPE  = "VercambioDatos";


                theToInit.EVENTOS_CAMBIODATOSLIGEROS_NAME  ="fprDo_Cambios_CambioDatos";
                theToInit.EVENTOS_CAMBIODATOSLIGEROS_TITLE = "Cambio";
                theToInit.EVENTOS_CAMBIODATOSLIGEROS_URL   = "vercambios/vercambioDatosJSON/";
                theToInit.EVENTOS_CAMBIODATOSLIGEROS_TYPE  = "VercambioDatos";




                theToInit.EVENTOS_ENTIDADDATOSCOMPLETOS_NAME  = "fprDo_Cambios_EntidadDatosCompletos";
                theToInit.EVENTOS_ENTIDADDATOSCOMPLETOS_TITLE = "Cambio";
                theToInit.EVENTOS_ENTIDADDATOSCOMPLETOS_URL   = "vercambios/veridcambiadaDatosDetalladosJSON/";
                theToInit.EVENTOS_ENTIDADDATOSCOMPLETOS_TYPE  = "VeeridcambiadaDatos";


                theToInit.EVENTOS_ENTIDADDATOSLIGEROS_NAME  ="fprDo_Cambios_EntidadDatos";
                theToInit.EVENTOS_ENTIDADDATOSLIGEROS_TITLE = "Cambio";
                theToInit.EVENTOS_ENTIDADDATOSLIGEROS_URL   = "vercambiosveridcambiadaDatosJSON/";
                theToInit.EVENTOS_ENTIDADDATOSLIGEROS_TYPE  = "VeeridcambiadaDatos";







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


                theToInit.EVENTOS_CAMBIARPARMPOSTFIX = "_cambiar";


                theToInit.FIRSTINDEXURLREPLACEMENT = "{thePrimero}";
                theToInit.HOWMANYURLREPLACEMENT    = "{theCuantos}";


                theToInit.EVENTOSSVCE_DEFAULTNAME = "EventosSvceDefaultName";



                theToInit.OPERATIONSPECS = [

                    {
                        "title":           theToInit.EVENTOS_LISTAEXCEPCIONES_TITLE,
                        "name":            theToInit.EVENTOS_LISTAEXCEPCIONES_NAME,
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_LIST,
                        "url":             theToInit.EVENTOS_LISTAEXCEPCIONES_URL,
                        "replyType":       theToInit.EVENTOS_LISTAEXCEPCIONES_TYPE,
                        "replyField":      theToInit.EVENTOS_LISTAEXCEPCIONES_FIELD,
                        "useUrlParm":      false,
                        "useUrlQuery":     false,
                        "useFirstAndMany": true
                    },
                    {
                        "title":           theToInit.EVENTOS_LISTAEXCEPCIONESENFECHA_TITLE,
                        "name":            theToInit.EVENTOS_LISTAEXCEPCIONESENFECHA_NAME,
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_LIST,
                        "url":             theToInit.EVENTOS_LISTAEXCEPCIONESENFECHA_URL,
                        "replyType":       theToInit.EVENTOS_LISTAEXCEPCIONESENFECHA_TYPE,
                        "replyField":      theToInit.EVENTOS_LISTAEXCEPCIONESENFECHA_FIELD,
                        "useUrlParm":      false,
                        "useUrlQuery":     true,
                        "useFirstAndMany": true
                    },
                    {
                        "title":           theToInit.EVENTOS_LISTAEXCEPCIONESENTREFECHAS_TITLE,
                        "name":            theToInit.EVENTOS_LISTAEXCEPCIONESENTREFECHAS_NAME,
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_LIST,
                        "url":             theToInit.EVENTOS_LISTAEXCEPCIONESENTREFECHAS_URL,
                        "replyType":       theToInit.EVENTOS_LISTAEXCEPCIONESENTREFECHAS_TYPE,
                        "replyField":      theToInit.EVENTOS_LISTAEXCEPCIONESENTREFECHAS_FIELD,
                        "useUrlParm":      false,
                        "useUrlQuery":     true,
                        "useFirstAndMany": true
                    },





                    {
                        "title":           theToInit.EVENTOS_LISTACAUSASDEEXCEPCION_TITLE,
                        "name":            theToInit.EVENTOS_LISTACAUSASDEEXCEPCION_NAME,
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_LIST,
                        "url":             theToInit.EVENTOS_EXCEPCIONDATOSCOMPLETOS_URL,
                        "replyType":       theToInit.EVENTOS_EXCEPCIONDATOSCOMPLETOS_TYPE,
                        "replyField":      theToInit.EVENTOS_LISTACAUSASDEEXCEPCION_FIELD,
                        "useUrlParm":      true,
                        "useUrlQuery":     false,
                        "useFirstAndMany": false
                    },


                    {
                        "title":           theToInit.EVENTOS_LISTAPILADEEXCEPCION_TITLE,
                        "name":            theToInit.EVENTOS_LISTAPILADEEXCEPCION_NAME,
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_LIST,
                        "url":             theToInit.EVENTOS_EXCEPCIONDATOSCOMPLETOS_URL,
                        "replyType":       theToInit.EVENTOS_EXCEPCIONDATOSCOMPLETOS_TYPE,
                        "replyField":      theToInit.EVENTOS_LISTAPILADEEXCEPCION_FIELD,
                        "useUrlParm":      true,
                        "useUrlQuery":     false,
                        "useFirstAndMany": false
                    },


                    {
                        "title":           theToInit.EVENTOS_EXCEPCIONDATOSCOMPLETOS_TITLE,
                        "name":            theToInit.EVENTOS_EXCEPCIONDATOSCOMPLETOS_NAME,
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_ONE,
                        "url":             theToInit.EVENTOS_EXCEPCIONDATOSCOMPLETOS_URL,
                        "replyType":       theToInit.EVENTOS_EXCEPCIONDATOSCOMPLETOS_TYPE,
                        "replyField":      null
                    },
                    {
                        "title":           theToInit.EVENTOS_EXCEPCIONDATOSLIGEROS_TITLE,
                        "name":            theToInit.EVENTOS_EXCEPCIONDATOSLIGEROS_NAME,
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_ONE,
                        "url":             theToInit.EVENTOS_EXCEPCIONDATOSLIGEROS_URL,
                        "replyType":       theToInit.EVENTOS_EXCEPCIONDATOSLIGEROS_TYPE,
                        "replyField":      null
                    },




                    {
                        "title":           theToInit.EVENTOS_LISTAACCESOSOPERADORES_TITLE,
                        "name":            theToInit.EVENTOS_LISTAACCESOSOPERADORES_NAME,
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_LIST,
                        "url":             theToInit.EVENTOS_LISTAACCESOSOPERADORES_URL,
                        "replyType":       theToInit.EVENTOS_LISTAACCESOSOPERADORES_TYPE,
                        "replyField":      theToInit.EVENTOS_LISTAACCESOSOPERADORES_FIELD,
                        "useUrlParm":      false,
                        "useUrlQuery":     false,
                        "useFirstAndMany": true
                    },
                    {
                        "title":           theToInit.EVENTOS_LISTAACCESOSOPERADORESENFECHA_TITLE,
                        "name":            theToInit.EVENTOS_LISTAACCESOSOPERADORESENFECHA_NAME,
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_LIST,
                        "url":             theToInit.EVENTOS_LISTAACCESOSOPERADORESENFECHA_URL,
                        "replyType":       theToInit.EVENTOS_LISTAACCESOSOPERADORESENFECHA_TYPE,
                        "replyField":      theToInit.EVENTOS_LISTAACCESOSOPERADORESENFECHA_FIELD,
                        "useUrlParm":      false,
                        "useUrlQuery":     true,
                        "useFirstAndMany": true
                    },
                    {
                        "title":           theToInit.EVENTOS_LISTAACCESOSOPERADORESENTREFECHAS_TITLE,
                        "name":            theToInit.EVENTOS_LISTAACCESOSOPERADORESENTREFECHAS_NAME,
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_LIST,
                        "url":             theToInit.EVENTOS_LISTAACCESOSOPERADORESENTREFECHAS_URL,
                        "replyType":       theToInit.EVENTOS_LISTAACCESOSOPERADORESENTREFECHAS_TYPE,
                        "replyField":      theToInit.EVENTOS_LISTAACCESOSOPERADORESENTREFECHAS_FIELD,
                        "useUrlParm":      false,
                        "useUrlQuery":     true,
                        "useFirstAndMany": true
                    },








                    {
                        "title":           theToInit.EVENTOS_LISTAACCESOSFALLIDOS_TITLE,
                        "name":            theToInit.EVENTOS_LISTAACCESOSFALLIDOS_NAME,
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_LIST,
                        "url":             theToInit.EVENTOS_LISTAACCESOSFALLIDOS_URL,
                        "replyType":       theToInit.EVENTOS_LISTAACCESOSFALLIDOS_TYPE,
                        "replyField":      theToInit.EVENTOS_LISTAACCESOSFALLIDOS_FIELD,
                        "useUrlParm":      false,
                        "useUrlQuery":     false,
                        "useFirstAndMany": true
                    },
                    {
                        "title":           theToInit.EVENTOS_LISTAACCESOSFALLIDOSENFECHA_TITLE,
                        "name":            theToInit.EVENTOS_LISTAACCESOSFALLIDOSENFECHA_NAME,
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_LIST,
                        "url":             theToInit.EVENTOS_LISTAACCESOSFALLIDOSENFECHA_URL,
                        "replyType":       theToInit.EVENTOS_LISTAACCESOSFALLIDOSENFECHA_TYPE,
                        "replyField":      theToInit.EVENTOS_LISTAACCESOSFALLIDOSENFECHA_FIELD,
                        "useUrlParm":      false,
                        "useUrlQuery":     true,
                        "useFirstAndMany": true
                    },
                    {
                        "title":           theToInit.EVENTOS_LISTAACCESOSFALLIDOSENTREFECHAS_TITLE,
                        "name":            theToInit.EVENTOS_LISTAACCESOSFALLIDOSENTREFECHAS_NAME,
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_LIST,
                        "url":             theToInit.EVENTOS_LISTAACCESOSFALLIDOSENTREFECHAS_URL,
                        "replyType":       theToInit.EVENTOS_LISTAACCESOSFALLIDOSENTREFECHAS_TYPE,
                        "replyField":      theToInit.EVENTOS_LISTAACCESOSFALLIDOSENTREFECHAS_FIELD,
                        "useUrlParm":      false,
                        "useUrlQuery":     true,
                        "useFirstAndMany": true
                    },






                    {
                        "title":           theToInit.EVENTOS_LISTALECTURASBOLETINES_TITLE,
                        "name":            theToInit.EVENTOS_LISTALECTURASBOLETINES_NAME,
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_LIST,
                        "url":             theToInit.EVENTOS_LISTALECTURASBOLETINES_URL,
                        "replyType":       theToInit.EVENTOS_LISTALECTURASBOLETINES_TYPE,
                        "replyField":      theToInit.EVENTOS_LISTALECTURASBOLETINES_FIELD,
                        "useUrlParm":      false,
                        "useUrlQuery":     false,
                        "useFirstAndMany": true
                    },
                    {
                        "title":           theToInit.EVENTOS_LISTALECTURASBOLETINESENFECHA_TITLE,
                        "name":            theToInit.EVENTOS_LISTALECTURASBOLETINESENFECHA_NAME,
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_LIST,
                        "url":             theToInit.EVENTOS_LISTALECTURASBOLETINESENFECHA_URL,
                        "replyType":       theToInit.EVENTOS_LISTALECTURASBOLETINESENFECHA_TYPE,
                        "replyField":      theToInit.EVENTOS_LISTALECTURASBOLETINESENFECHA_FIELD,
                        "useUrlParm":      false,
                        "useUrlQuery":     true,
                        "useFirstAndMany": true
                    },
                    {
                        "title":           theToInit.EVENTOS_LISTALECTURASBOLETINESENTREFECHAS_TITLE,
                        "name":            theToInit.EVENTOS_LISTALECTURASBOLETINESENTREFECHAS_NAME,
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_LIST,
                        "url":             theToInit.EVENTOS_LISTALECTURASBOLETINESENTREFECHAS_URL,
                        "replyType":       theToInit.EVENTOS_LISTALECTURASBOLETINESENTREFECHAS_TYPE,
                        "replyField":      theToInit.EVENTOS_LISTALECTURASBOLETINESENTREFECHAS_FIELD,
                        "useUrlParm":      false,
                        "useUrlQuery":     true,
                        "useFirstAndMany": true
                    },






                    {
                        "title":           theToInit.EVENTOS_LISTACAMBIOS_TITLE,
                        "name":            theToInit.EVENTOS_LISTACAMBIOS_NAME,
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_LIST,
                        "url":             theToInit.EVENTOS_LISTACAMBIOS_URL,
                        "replyType":       theToInit.EVENTOS_LISTACAMBIOS_TYPE,
                        "replyField":      theToInit.EVENTOS_LISTACAMBIOS_FIELD,
                        "useUrlParm":      false,
                        "useUrlQuery":     false,
                        "useFirstAndMany": true
                    },
                    {
                        "title":           theToInit.EVENTOS_LISTACAMBIOSENFECHA_TITLE,
                        "name":            theToInit.EVENTOS_LISTACAMBIOSENFECHA_NAME,
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_LIST,
                        "url":             theToInit.EVENTOS_LISTACAMBIOSENFECHA_URL,
                        "replyType":       theToInit.EVENTOS_LISTACAMBIOSENFECHA_TYPE,
                        "replyField":      theToInit.EVENTOS_LISTACAMBIOSENFECHA_FIELD,
                        "useUrlParm":      false,
                        "useUrlQuery":     true,
                        "useFirstAndMany": true
                    },
                    {
                        "title":           theToInit.EVENTOS_LISTACAMBIOSENTREFECHAS_TITLE,
                        "name":            theToInit.EVENTOS_LISTACAMBIOSENTREFECHAS_NAME,
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_LIST,
                        "url":             theToInit.EVENTOS_LISTACAMBIOSENTREFECHAS_URL,
                        "replyType":       theToInit.EVENTOS_LISTACAMBIOSENTREFECHAS_TYPE,
                        "replyField":      theToInit.EVENTOS_LISTACAMBIOSENTREFECHAS_FIELD,
                        "useUrlParm":      false,
                        "useUrlQuery":     true,
                        "useFirstAndMany": true
                    },







                    {
                        "title":           theToInit.EVENTOS_LISTACAMBIOSCONTIPOS_TITLE,
                        "name":            theToInit.EVENTOS_LISTACAMBIOSCONTIPOS_NAME,
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_LIST,
                        "url":             theToInit.EVENTOS_LISTACAMBIOSCONTIPOS_URL,
                        "replyType":       theToInit.EVENTOS_LISTACAMBIOSCONTIPOS_TYPE,
                        "replyField":      theToInit.EVENTOS_LISTACAMBIOSCONTIPOS_FIELD,
                        "useUrlParm":      false,
                        "useUrlQuery":     false,
                        "useFirstAndMany": true
                    },
                    {
                        "title":           theToInit.EVENTOS_LISTACAMBIOSENFECHACONTIPOS_TITLE,
                        "name":            theToInit.EVENTOS_LISTACAMBIOSENFECHACONTIPOS_NAME,
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_LIST,
                        "url":             theToInit.EVENTOS_LISTACAMBIOSENFECHACONTIPOS_URL,
                        "replyType":       theToInit.EVENTOS_LISTACAMBIOSENFECHACONTIPOS_TYPE,
                        "replyField":      theToInit.EVENTOS_LISTACAMBIOSENFECHACONTIPOS_FIELD,
                        "useUrlParm":      false,
                        "useUrlQuery":     true,
                        "useFirstAndMany": true
                    },
                    {
                        "title":           theToInit.EVENTOS_LISTACAMBIOSENTREFECHASCONTIPOS_TITLE,
                        "name":            theToInit.EVENTOS_LISTACAMBIOSENTREFECHASCONTIPOS_NAME,
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_LIST,
                        "url":             theToInit.EVENTOS_LISTACAMBIOSENTREFECHASCONTIPOS_URL,
                        "replyType":       theToInit.EVENTOS_LISTACAMBIOSENTREFECHASCONTIPOS_TYPE,
                        "replyField":      theToInit.EVENTOS_LISTACAMBIOSENTREFECHASCONTIPOS_FIELD,
                        "useUrlParm":      false,
                        "useUrlQuery":     true,
                        "useFirstAndMany": true
                    },





                    {
                        "title":           theToInit.EVENTOS_LISTAENTIDADESDECAMBIO_TITLE,
                        "name":            theToInit.EVENTOS_LISTAENTIDADESDECAMBIO_NAME,
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_LIST,
                        "url":             theToInit.EVENTOS_LISTAENTIDADESDECAMBIO_URL,
                        "replyType":       theToInit.EVENTOS_LISTAENTIDADESDECAMBIO_TYPE,
                        "replyField":      theToInit.EVENTOS_LISTAENTIDADESDECAMBIO_FIELD,
                        "useUrlParm":      true,
                        "useUrlQuery":     false,
                        "useFirstAndMany": false
                    },




                    {
                        "title":           theToInit.EVENTOS_CAMBIODATOSCOMPLETOS_TITLE,
                        "name":            theToInit.EVENTOS_CAMBIODATOSCOMPLETOS_NAME,
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_ONE,
                        "url":             theToInit.EVENTOS_CAMBIODATOSCOMPLETOS_URL,
                        "replyType":       theToInit.EVENTOS_CAMBIODATOSCOMPLETOS_TYPE,
                        "replyField":      null
                    },
                    {
                        "title":           theToInit.EVENTOS_CAMBIODATOSLIGEROS_TITLE,
                        "name":            theToInit.EVENTOS_CAMBIODATOSLIGEROS_NAME,
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_ONE,
                        "url":             theToInit.EVENTOS_CAMBIODATOSLIGEROS_URL,
                        "replyType":       theToInit.EVENTOS_CAMBIODATOSLIGEROS_TYPE,
                        "replyField":      null
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






            var aEventosSvce_Prototype = (function() {


                var aPrototype = new theS_HitSpecifiedSvceType.HitSpecifiedSvce_SuperPrototypeConstructor();

                pgInitFromModuleConstants( aPrototype);


                aPrototype._v_SuperPrototype = theS_HitSpecifiedSvceType.HitSpecifiedSvce_Prototype;


                aPrototype._v_Type = "EventosSvce";

                aPrototype._v_Module = null;








                var _pInit = function( theTitle, theIdentifier, theRecorder) {

                    this._pInit_EventosSvce( theTitle, theIdentifier, theRecorder);
                };
                if( _pInit){}/* CQT */
                aPrototype._pInit = _pInit;







                var _pInit_EventosSvce = function( theTitle, theIdentifier, theRecorder) {

                    /* Delegate on super prototype initialization */
                    aPrototype._v_SuperPrototype._pInit_HitSpecifiedSvce.apply( this, [
                        theTitle || this.EVENTOSSVCE_DEFAULTNAME,
                        theIdentifier,
                        theRecorder
                    ]);

                    this._v_Prototype = aPrototype;
                    this._v_Type      = this._v_Prototype._v_Type;
                    this._v_Module    = aPrototype._v_Module;


                    this.pRegisterOperationsFromSpecs( this.OPERATIONSPECS);
                };
                if( _pInit_EventosSvce){}/* CQT */
                aPrototype._pInit_EventosSvce = _pInit_EventosSvce;







                var fprDo_Excepciones_ListaExcepcionesRecientes_Wrapper = function( theDesde, theCuantos) {

                    return this.fprDo_Excepciones_ListaExcepcionesRecientes( theDesde, theCuantos);
                };
                if( fprDo_Excepciones_ListaExcepcionesRecientes_Wrapper){}/* CQT */
                aPrototype.fprDo_Excepciones_ListaExcepcionesRecientes_Wrapper = fprDo_Excepciones_ListaExcepcionesRecientes_Wrapper;



                var fprDo_Excepciones_ListaExcepcionesEntreFechas_Wrapper = function( theDesde, theCuantos) {

                    return this.fprDo_Excepciones_ListaExcepcionesEntreFechas( theDesde, theCuantos);
                };
                if( fprDo_Excepciones_ListaExcepcionesEntreFechas_Wrapper){}/* CQT */
                aPrototype.fprDo_Excepciones_ListaExcepcionesEntreFechas_Wrapper = fprDo_Excepciones_ListaExcepcionesEntreFechas_Wrapper;







                var fprDo_Excepciones_ListaCausasDeExcepcion_Wrapper = function( theIdExcepcion, theDesde, theCuantos) {

                    return this.fprDo_Excepciones_ListaCausasDeExcepcion( theIdExcepcion, theDesde, theCuantos);
                };
                if( fprDo_Excepciones_ListaCausasDeExcepcion_Wrapper){}/* CQT */
                aPrototype.fprDo_Excepciones_ListaCausasDeExcepcion_Wrapper = fprDo_Excepciones_ListaCausasDeExcepcion_Wrapper;






                var fprDo_Excepciones_ListaPilaDeExcepcion_Wrapper = function( theIdExcepcion, theDesde, theCuantos) {

                    return this.fprDo_Excepciones_ListaPilaDeExcepcion( theIdExcepcion, theDesde, theCuantos);
                };
                if( fprDo_Excepciones_ListaPilaDeExcepcion_Wrapper){}/* CQT */
                aPrototype.fprDo_Excepciones_ListaPilaDeExcepcion_Wrapper = fprDo_Excepciones_ListaPilaDeExcepcion_Wrapper;







                var fprDo_Accesosoperadores_ListaAccesosoperadoresRecientes_Wrapper = function( theDesde, theCuantos) {

                    return this.fprDo_Accesosoperadores_ListaAccesosoperadoresRecientes( theDesde, theCuantos);
                };
                if( fprDo_Accesosoperadores_ListaAccesosoperadoresRecientes_Wrapper){}/* CQT */
                aPrototype.fprDo_Accesosoperadores_ListaAccesosoperadoresRecientes_Wrapper = fprDo_Accesosoperadores_ListaAccesosoperadoresRecientes_Wrapper;





                var fprDo_Accesosoperadores_ListaAccesosoperadoresEntreFechas_Wrapper = function( theArguments, theDesde, theCuantos) {

                    return this.fprDo_Accesosoperadores_ListaAccesosoperadoresEntreFechas( theArguments, theDesde, theCuantos);
                };
                if( fprDo_Accesosoperadores_ListaAccesosoperadoresEntreFechas_Wrapper){}/* CQT */
                aPrototype.fprDo_Accesosoperadores_ListaAccesosoperadoresEntreFechas_Wrapper = fprDo_Accesosoperadores_ListaAccesosoperadoresEntreFechas_Wrapper;






                var fprDo_Accesosfallidos_ListaAccesosfallidosRecientes_Wrapper = function( theDesde, theCuantos) {

                    return this.fprDo_Accesosfallidos_ListaAccesosfallidosRecientes( theDesde, theCuantos);
                };
                if( fprDo_Accesosfallidos_ListaAccesosfallidosRecientes_Wrapper){}/* CQT */
                aPrototype.fprDo_Accesosfallidos_ListaAccesosfallidosRecientes_Wrapper = fprDo_Accesosfallidos_ListaAccesosfallidosRecientes_Wrapper;







                var fprDo_Accesosfallidos_ListaAccesosfallidosEntreFechas_Wrapper = function( theArguments, theDesde, theCuantos) {

                    return this.fprDo_Accesosfallidos_ListaAccesosfallidosEntreFechas( theArguments, theDesde, theCuantos);
                };
                if( fprDo_Accesosfallidos_ListaAccesosfallidosEntreFechas_Wrapper){}/* CQT */
                aPrototype.fprDo_Accesosfallidos_ListaAccesosfallidosEntreFechas_Wrapper = fprDo_Accesosfallidos_ListaAccesosfallidosEntreFechas_Wrapper;







                var fprDo_Lecturasboletines_ListaLecturasboletinesRecientes_Wrapper = function( theDesde, theCuantos) {

                    return this.fprDo_Lecturasboletines_ListaLecturasboletinesRecientes( theDesde, theCuantos);
                };
                if( fprDo_Lecturasboletines_ListaLecturasboletinesRecientes_Wrapper){}/* CQT */
                aPrototype.fprDo_Lecturasboletines_ListaLecturasboletinesRecientes_Wrapper = fprDo_Lecturasboletines_ListaLecturasboletinesRecientes_Wrapper;








                var fprDo_Lecturasboletines_ListaLecturasboletinesEntreFechas_Wrapper = function( theDesde, theCuantos) {

                    return this.fprDo_Lecturasboletines_ListaLecturasboletinesEntreFechas( theDesde, theCuantos);
                };
                if( fprDo_Lecturasboletines_ListaLecturasboletinesEntreFechas_Wrapper){}/* CQT */
                aPrototype.fprDo_Lecturasboletines_ListaLecturasboletinesEntreFechas_Wrapper = fprDo_Lecturasboletines_ListaLecturasboletinesEntreFechas_Wrapper;













                var fprDo_Cambios_ListaCambiosRecientes_Wrapper = function( theDesde, theCuantos) {

                    return this.fprDo_Cambios_ListaCambiosRecientes( theDesde, theCuantos);
                };
                if( fprDo_Cambios_ListaCambiosRecientes_Wrapper){}/* CQT */
                aPrototype.fprDo_Cambios_ListaCambiosRecientes_Wrapper = fprDo_Cambios_ListaCambiosRecientes_Wrapper;




                var fprDo_Cambios_ListaCambiosEntreFechas_Wrapper = function( theDesde, theCuantos) {

                    return this.fprDo_Cambios_ListaCambiosEntreFechas( theDesde, theCuantos);
                };
                if( fprDo_Cambios_ListaCambiosEntreFechas_Wrapper){}/* CQT */
                aPrototype.fprDo_Cambios_ListaCambiosEntreFechas_Wrapper = fprDo_Cambios_ListaCambiosEntreFechas_Wrapper;









                var fprDo_Cambios_ListaCambiosRecientesConTipos_Wrapper = function( theDesde, theCuantos) {

                    return this.fprDo_Cambios_ListaCambiosRecientesConTipos( theDesde, theCuantos);
                };
                if( fprDo_Cambios_ListaCambiosRecientesConTipos_Wrapper){}/* CQT */
                aPrototype.fprDo_Cambios_ListaCambiosRecientesConTipos_Wrapper = fprDo_Cambios_ListaCambiosRecientesConTipos_Wrapper;





                var fprDo_Cambios_ListaCambiosEntreFechasConTipos_Wrapper = function( theDesde, theCuantos) {

                    return this.fprDo_Cambios_ListaCambiosEntreFechasConTipos( theDesde, theCuantos);
                };
                if( fprDo_Cambios_ListaCambiosEntreFechasConTipos_Wrapper){}/* CQT */
                aPrototype.fprDo_Cambios_ListaCambiosEntreFechasConTipos_Wrapper = fprDo_Cambios_ListaCambiosEntreFechasConTipos_Wrapper;









                var fprDo_Cambios_ListaEntidadesDeCambio_Wrapper = function( theIdCambio, theDesde, theCuantos) {

                    return this.fprDo_Cambios_ListaEntidadesDeCambio( theIdCambio, theDesde, theCuantos);
                };
                if( fprDo_Cambios_ListaEntidadesDeCambio_Wrapper){}/* CQT */
                aPrototype.fprDo_Cambios_ListaEntidadesDeCambio_Wrapper = fprDo_Cambios_ListaEntidadesDeCambio_Wrapper;




                return aPrototype;

            })();








            var EventosSvce_Constructor = function( theTitle, theIdentifier, theRecorder) {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_HitSpecifiedSvceType.HitSpecifiedSvce_Prototype;

                this._v_Prototype = null;
                this._v_Type      = null;
                this._v_Module    = null;

                this._pInit_EventosSvce( theTitle, theIdentifier, theRecorder);
            };
            EventosSvce_Constructor.prototype = aEventosSvce_Prototype;





            var EventosSvce_SuperPrototypeConstructor = function() {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_HitSpecifiedSvceType.HitSpecifiedSvce_Prototype;

                this._v_Prototype = aEventosSvce_Prototype;
                this._v_Type      = null;
                this._v_Module    = null;
            };
            EventosSvce_SuperPrototypeConstructor.prototype = aEventosSvce_Prototype;



            var aModule = {
                "EventosSvce_Prototype": aEventosSvce_Prototype,
                "EventosSvce_Constructor": EventosSvce_Constructor,
                "EventosSvce_SuperPrototypeConstructor": EventosSvce_SuperPrototypeConstructor
            };
            pgInitFromModuleConstants( aModule);
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;

            aEventosSvce_Prototype._v_Module = aModule;




            return aModule;
        };







        var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        if( !anExistingModule) {

            var aModule = aMod_definer(
                theSS_Overrider,
                theSS_HitSpecifiedSvceType,
                theSS_HitServerSvceType
            );
            anExistingModule = aModule;

            theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
        }



        return anExistingModule;


    }]);







