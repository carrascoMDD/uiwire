'use strict';

/*
 * edivalidaciones_svce_type.js
 *
 * Creado @author Antonio Carrasco Valero 201409301309
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




angular.module("edivalidacionesTypes").factory("EdivalidacionesSvceType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "HitSpecifiedSvceType",
    "HitServerSvceType",
function( theSS_typesregistry,
          theSS_Overrider,
          theSS_HitSpecifiedSvceType,
          theSS_HitServerSvceType){



    var ModuleName     = "edivalidaciones_svce_type";
    var ModulePackages = "springnut/edivalidaciones";
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



            theToInit.EDIVALIDACIONES_LISTAVALIDACIONES_URL   = "/edicionValidaciones/listaValidacionesYsuCriterioJSON";
            theToInit.EDIVALIDACIONES_LISTAVALIDACIONES_TYPE  = "ListaValidacionesYsuCriterio";
            theToInit.EDIVALIDACIONES_LISTAVALIDACIONES_VALIDACIONES_FIELD      = "vValidaciones";

            theToInit.EDIVALIDACIONES_LISTACONDICIONESDEVALIDACION_URL   = "/edicionValidaciones/listaCondicionesDeValidacionJSON/";
            theToInit.EDIVALIDACIONES_LISTACONDICIONESDEVALIDACION_TYPE  = "ListaCondicionesDeValidacion";
            theToInit.EDIVALIDACIONES_LISTACONDICIONESDEVALIDACION_CONDICIONESDEVALIDACION_FIELD = "vCondiciones";

            theToInit.EDIVALIDACIONES_LISTACODIGOSDELISTA_URL   = "/edicionValidaciones/listaCodigosDeListaJSON/";
            theToInit.EDIVALIDACIONES_LISTACODIGOSDELISTA_TYPE  = "ListaCodigosDeLista";
            theToInit.EDIVALIDACIONES_LISTACODIGOSDELISTA_CODIGOSDELISTA_FIELD = "vCodigosDeLista";

            theToInit.EDIVALIDACIONES_LISTACRITERIOS_URL   = "/edicionValidaciones/listaCriteriosJSON";
            theToInit.EDIVALIDACIONES_LISTACRITERIOS_TYPE  = "ListaCriterios";
            theToInit.EDIVALIDACIONES_LISTACRITERIOS_FIELD = "vCriterios";

            theToInit.EDIVALIDACIONES_LISTAVALIDACIONESDECRITERIO_URL   = "/edicionValidaciones/listaValidacionesDeCriterioJSON/";
            theToInit.EDIVALIDACIONES_LISTAVALIDACIONESDECRITERIO_TYPE  = "ListaValidacionesDeCriterio";
            theToInit.EDIVALIDACIONES_LISTAVALIDACIONESDECRITERIO_FIELD = "vValidaciones";

            theToInit.EDIVALIDACIONES_LISTALISTASCODIGOS_URL   = "/edicionValidaciones/listaListasCodigosJSON";
            theToInit.EDIVALIDACIONES_LISTALISTASCODIGOS_TYPE  = "ListaListasCodigos";
            theToInit.EDIVALIDACIONES_LISTALISTASCODIGOS_FIELD = "vListasCodigos";

            theToInit.EDIVALIDACIONES_LISTASIMBOLOSPERMITIDOS_URL   = "/edicionValidaciones/simbolosPermitidosJSON";
            theToInit.EDIVALIDACIONES_LISTASIMBOLOSPERMITIDOS_TYPE  = "SimbolosPermitidos";
            theToInit.EDIVALIDACIONES_LISTASIMBOLOSPERMITIDOS_FIELD = "vSimbolosPermitidos";


            theToInit.EDIVALIDACIONES_LISTASIMBOLOSPERMITIDOSPORTIPOS_URL   = "/edicionValidaciones/simbolosPermitidosPorTiposJSON";
            theToInit.EDIVALIDACIONES_LISTASIMBOLOSPERMITIDOSPORTIPOS_TYPE  = "SimbolosPermitidosPorTipos";

            theToInit.EDIVALIDACIONES_LISTASIMBOLOSPERMITIDOSPORTIPOS_FIELD_CAMPOS     = "vCampos";
            theToInit.EDIVALIDACIONES_LISTASIMBOLOSPERMITIDOSPORTIPOS_FIELD_FUNCIONES  = "vFunciones";
            theToInit.EDIVALIDACIONES_LISTASIMBOLOSPERMITIDOSPORTIPOS_FIELD_ESPECIALES = "vEspeciales";
            theToInit.EDIVALIDACIONES_LISTASIMBOLOSPERMITIDOSPORTIPOS_FIELD_OPERADORES = "vOperadores";


            theToInit.EDIVALIDACIONES_LISTACONDICIONESNECESITANDOACTUALIZACION_URL   = "/edicionValidaciones/listaVerificacionesCondicionDeValidacionNecesitandoActualizacionJSON";
            theToInit.EDIVALIDACIONES_LISTACONDICIONESNECESITANDOACTUALIZACION_TYPE  = "ListaVerificacionesCondicionDeValidacion";
            theToInit.EDIVALIDACIONES_LISTACONDICIONESNECESITANDOACTUALIZACION_VERIFICACIONES_FIELD  = "vVerificaciones";




            theToInit.EDIVALIDACIONES_VALIDACIONDATOS_URL   = "/edicionValidaciones/validacionDatosJSON/";
            theToInit.EDIVALIDACIONES_VALIDACIONDATOS_TYPE  = "ValidacionDatos";

            theToInit.EDIVALIDACIONES_CONDICIONDATOS_URL   = "/edicionValidaciones/condicionDeValidacionJSON/";
            theToInit.EDIVALIDACIONES_CONDICIONDATOS_TYPE  = "CondicionDeValidacion";

            theToInit.EDIVALIDACIONES_LISTACODIGOSDATOS_URL   = "/edicionValidaciones/listaCodigosDatosJSON/";
            theToInit.EDIVALIDACIONES_LISTACODIGOSDATOS_TYPE  = "ListaCodigosDatos";

            theToInit.EDIVALIDACIONES_CODIGODELISTADATOS_URL   = "/edicionValidaciones/codigoDeListaJSON/";
            theToInit.EDIVALIDACIONES_CODIGODELISTADATOS_TYPE  = "CodigoDeLista";

            theToInit.EDIVALIDACIONES_CIE10DATOS_URL   = "/edicionValidaciones/cie10DatosJSON/";
            theToInit.EDIVALIDACIONES_CIE10DATOS_TYPE  = "Cie10Datos";

            theToInit.EDIVALIDACIONES_CRITERIODATOS_URL   = "/edicionValidaciones/criterioDatosJSON/";
            theToInit.EDIVALIDACIONES_CRITERIODATOS_TYPE  = "CriterioDatos";




            theToInit.EDIVALIDACIONES_CAMBIARVALIDACION_URL   = "/edicionValidaciones/cambiarValidacionAlgunosDatosJSON";
            theToInit.EDIVALIDACIONES_CAMBIARVALIDACION_TYPE  = "CambiadoValidacion";
            theToInit.EDIVALIDACIONES_CAMBIARVALIDACION_VALIDACIONEDESPUES_FIELD = "vValidacionDespues";

            theToInit.EDIVALIDACIONES_CAMBIARCONDICIONDEVALIDACION_URL   = "/edicionValidaciones/cambiarCondicionDeValidacionAlgunosDatosJSON";
            theToInit.EDIVALIDACIONES_CAMBIARCONDICIONDEVALIDACION_TYPE  = "CambiadoCondicionDeValidacion";
            theToInit.EDIVALIDACIONES_CAMBIARCONDICIONDEVALIDACION_CONDICIONDEVALIDACIONEDESPUES_FIELD = "vCondicionDeValidacionDespues";

            theToInit.EDIVALIDACIONES_CAMBIARCRITERIO_URL   = "/aux/criterios/auxCriterioCambiarAlgunosDatosJSON";
            theToInit.EDIVALIDACIONES_CAMBIARCRITERIO_TYPE  = "CambiadoCriterio";
            theToInit.EDIVALIDACIONES_CAMBIARCRITERIO_CRITERIODESPUES_FIELD = "vCriterioDespues";

            theToInit.EDIVALIDACIONES_CAMBIARLISTACODIGOS_URL   = "/edicionValidaciones/cambiarListaCodigosAlgunosDatosJSON";
            theToInit.EDIVALIDACIONES_CAMBIARLISTACODIGOS_TYPE  = "CambiadoListaCodigos";
            theToInit.EDIVALIDACIONES_CAMBIARLISTACODIGOS_LISTACODIGOSDESPUES_FIELD = "vListaCodigosDespues";

            theToInit.EDIVALIDACIONES_CAMBIARCODIGODELISTA_URL   = "/edicionValidaciones/cambiarCodigoDeListaJSON";
            theToInit.EDIVALIDACIONES_CAMBIARCODIGODELISTA_TYPE  = "CambiadoCodigoDeLista";
            theToInit.EDIVALIDACIONES_CAMBIARCODIGODELISTA_CODIGODELISTADESPUES_FIELD = "vCodigoDeListaDespues";

            theToInit.EDIVALIDACIONES_CAMBIARCIE10_URL   = "/aux/cies10/auxCie10CambiarAlgunosDatosJSON";
            theToInit.EDIVALIDACIONES_CAMBIARCIE10_TYPE  = "CambiadoCie10";
            theToInit.EDIVALIDACIONES_CAMBIARCIE10_CIE10DESPUES_FIELD = "vCie10Despues";



            theToInit.EDIVALIDACIONES_CREARVALIDACION_URL   = "/edicionValidaciones/crearValidacionJSON";
            theToInit.EDIVALIDACIONES_CREARVALIDACION_TYPE  = "ValidacionDatos";

            theToInit.EDIVALIDACIONES_CREARCRITERIO_URL   = "/aux/criterios/auxCriterioCrearContandoJSON";
            theToInit.EDIVALIDACIONES_CREARCRITERIO_TYPE  = "CriterioDatos";

            theToInit.EDIVALIDACIONES_CREARLISTACODIGOS_URL   = "/edicionValidaciones/crearListaCodigosJSON";
            theToInit.EDIVALIDACIONES_CREARLISTACODIGOS_TYPE  = "ListaCodigosDatos";


            theToInit.EDIVALIDACIONES_CREARCONDICIONDEVALIDACION_URL   = "/edicionValidaciones/crearCondicionDeValidacionJSON";
            theToInit.EDIVALIDACIONES_CREARCONDICIONDEVALIDACION_TYPE  = "CondicionDeValidacion";

            theToInit.EDIVALIDACIONES_CREARCODIGODELISTAURL   = "/edicionValidaciones/crearCodigoDeListaJSON";
            theToInit.EDIVALIDACIONES_CREARCODIGODELISTA_TYPE  = "CodigoDeLista";





            theToInit.EDIVALIDACIONES_ELIMINARVALIDACION_URL   = "/edicionValidaciones/eliminarValidacionJSON";
            theToInit.EDIVALIDACIONES_ELIMINARVALIDACION_TYPE  = "ValidacionDatos";

            theToInit.EDIVALIDACIONES_ELIMINARCRITERIO_URL   = "/aux/criterios/auxCriterioEliminarJSON";
            theToInit.EDIVALIDACIONES_ELIMINARCRITERIO_TYPE  = "CriterioDatos";

            theToInit.EDIVALIDACIONES_ELIMINARLISTACODIGOS_URL   = "/edicionValidaciones/eliminarListaCodigosJSON";
            theToInit.EDIVALIDACIONES_ELIMINARLISTACODIGOS_TYPE  = "ListaCodigosDatos";


            theToInit.EDIVALIDACIONES_ELIMINARCONDICIONDEVALIDACION_URL   = "/edicionValidaciones/eliminarCondicionDeValidacionJSON";
            theToInit.EDIVALIDACIONES_ELIMINARCONDICIONDEVALIDACION_TYPE  = "CondicionDeValidacion";

            theToInit.EDIVALIDACIONES_ELIMINARCODIGODELISTA_URL   = "/edicionValidaciones/eliminarCodigoDeListaJSON";
            theToInit.EDIVALIDACIONES_ELIMINARCODIGODELISTA_TYPE  = "CodigoDeLista";


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


            theToInit.EDIVALIDACIONES_CAMBIARPARMPOSTFIX = "_cambiar";


            theToInit.FIRSTINDEXURLREPLACEMENT = "{thePrimero}";
            theToInit.HOWMANYURLREPLACEMENT    = "{theCuantos}";


            theToInit.EDIVALIDACIONESSVCE_DEFAULTNAME = "EdivalidacionesSvceDefaultName";



            theToInit.OPERATIONSPECS = [
                {
                    "title":           "Lista de Validaciones",
                    "name":            "fprDo_Edivalidaciones_ListaValidaciones",
                    "kind":            theS_HitServerSvceType.OPERATIONKIND_LIST,
                    "url":             theToInit.EDIVALIDACIONES_LISTAVALIDACIONES_URL,
                    "replyType":       theToInit.EDIVALIDACIONES_LISTAVALIDACIONES_TYPE,
                    "replyField":      theToInit.EDIVALIDACIONES_LISTAVALIDACIONES_VALIDACIONES_FIELD,
                    "useFirstAndMany": true
                },
                {
                    "title":           "Lista de Condiciones de Validación",
                    "name":            "fprDo_Edivalidaciones_ListaCondicionesDeValidacion",
                    "kind":            theS_HitServerSvceType.OPERATIONKIND_LIST,
                    "url":             theToInit.EDIVALIDACIONES_LISTACONDICIONESDEVALIDACION_URL,
                    "replyType":       theToInit.EDIVALIDACIONES_LISTACONDICIONESDEVALIDACION_TYPE,
                    "replyField":      theToInit.EDIVALIDACIONES_LISTACONDICIONESDEVALIDACION_CONDICIONESDEVALIDACION_FIELD,
                    "useFirstAndMany": true,
                    "useUrlParm":      true
                },
                {
                    "title":           "Lista de CIE10 usada en Condición",
                    "name":            "fprDo_Edivalidaciones_CodigosDeLista",
                    "kind":            theS_HitServerSvceType.OPERATIONKIND_LIST,
                    "url":             theToInit.EDIVALIDACIONES_LISTACODIGOSDELISTA_URL,
                    "replyType":       theToInit.EDIVALIDACIONES_LISTACODIGOSDELISTA_TYPE,
                    "replyField":      theToInit.EDIVALIDACIONES_LISTACODIGOSDELISTA_CODIGOSDELISTA_FIELD,
                    "useFirstAndMany": true,
                    "useUrlParm":      true
                },
                {
                    "title":           "Lista de Criterios",
                    "name":            "fprDo_Edivalidaciones_ListaCriterios",
                    "kind":            theS_HitServerSvceType.OPERATIONKIND_LIST,
                    "url":             theToInit.EDIVALIDACIONES_LISTACRITERIOS_URL,
                    "replyType":       theToInit.EDIVALIDACIONES_LISTACRITERIOS_TYPE,
                    "replyField":      theToInit.EDIVALIDACIONES_LISTACRITERIOS_FIELD,
                    "useFirstAndMany": true
                },
                {
                    "title":           "Lista de Validaciones de Criterio",
                    "name":            "fprDo_Edivalidaciones_ListaValidacionesDeCriterio",
                    "kind":            theS_HitServerSvceType.OPERATIONKIND_LIST,
                    "url":             theToInit.EDIVALIDACIONES_LISTAVALIDACIONESDECRITERIO_URL,
                    "replyType":       theToInit.EDIVALIDACIONES_LISTAVALIDACIONESDECRITERIO_TYPE,
                    "replyField":      theToInit.EDIVALIDACIONES_LISTAVALIDACIONESDECRITERIO_FIELD,
                    "useFirstAndMany": true,
                    "useUrlParm":      true
                },
                {
                    "title":           "Listas de Codigos",
                    "name":            "fprDo_Edivalidaciones_ListaListasCodigos",
                    "kind":            theS_HitServerSvceType.OPERATIONKIND_LIST,
                    "url":             theToInit.EDIVALIDACIONES_LISTALISTASCODIGOS_URL,
                    "replyType":       theToInit.EDIVALIDACIONES_LISTALISTASCODIGOS_TYPE,
                    "replyField":      theToInit.EDIVALIDACIONES_LISTALISTASCODIGOS_FIELD,
                    "useFirstAndMany": true
                },
                {
                    "title":           "Lista de CIE10",
                    "name":            "fprDo_Edivalidaciones_CodigosDeLista",
                    "kind":            theS_HitServerSvceType.OPERATIONKIND_LIST,
                    "url":             theToInit.EDIVALIDACIONES_LISTACODIGOSDELISTA_URL,
                    "replyType":       theToInit.EDIVALIDACIONES_LISTACODIGOSDELISTA_TYPE,
                    "replyField":      theToInit.EDIVALIDACIONES_LISTACODIGOSDELISTA_CODIGOSDELISTA_FIELD,
                    "useFirstAndMany": true,
                    "useUrlParm":      true
                },
                {
                    "title":           "Simbolos permitidos",
                    "name":            "fprDo_Edivalidaciones_ListaSimbolosPermitidos",
                    "kind":            theS_HitServerSvceType.OPERATIONKIND_LIST,
                    "url":             theToInit.EDIVALIDACIONES_LISTASIMBOLOSPERMITIDOS_URL,
                    "replyType":       theToInit.EDIVALIDACIONES_LISTASIMBOLOSPERMITIDOS_TYPE,
                    "replyField":      theToInit.EDIVALIDACIONES_LISTASIMBOLOSPERMITIDOS_FIELD,
                    "useFirstAndMany": false
                },
                {
                    "title":           "Simbolos permitidos por tipos",
                    "name":            "fprDo_Edivalidaciones_ListaSimbolosPermitidosPorTipos",
                    "kind":            theS_HitServerSvceType.OPERATIONKIND_LIST,
                    "url":             theToInit.EDIVALIDACIONES_LISTASIMBOLOSPERMITIDOSPORTIPOS_URL,
                    "replyType":       theToInit.EDIVALIDACIONES_LISTASIMBOLOSPERMITIDOSPORTIPOS_TYPE,
                    "replyField":      null,
                    "useUrlParm":      false,
                    "useUrlQuery":     false,
                    "useFirstAndMany": false
                },
                {
                    "title":           "Campos permitidos",
                    "name":            "fprDo_Edivalidaciones_ListaCamposPermitidos",
                    "kind":            theS_HitServerSvceType.OPERATIONKIND_LIST,
                    "KK-url":             theToInit.EDIVALIDACIONES_LISTASIMBOLOSPERMITIDOSPORTIPOS_URL,
                    "KK-replyType":       theToInit.EDIVALIDACIONES_LISTASIMBOLOSPERMITIDOSPORTIPOS_TYPE,
                    "replyField":      theToInit.EDIVALIDACIONES_LISTASIMBOLOSPERMITIDOSPORTIPOS_FIELD_CAMPOS,
                    "reuse":           "fprDo_Edivalidaciones_ListaSimbolosPermitidosPorTipos",
                    "maxLapsedMillis":  36000,
                    "KK-useFirstAndMany": false
                },
                {
                    "title":           "Funciones permitidas",
                    "name":            "fprDo_Edivalidaciones_ListaFuncionesPermitidas",
                    "kind":            theS_HitServerSvceType.OPERATIONKIND_LIST,
                    "KK-url":             theToInit.EDIVALIDACIONES_LISTASIMBOLOSPERMITIDOSPORTIPOS_URL,
                    "KK-replyType":       theToInit.EDIVALIDACIONES_LISTASIMBOLOSPERMITIDOSPORTIPOS_TYPE,
                    "replyField":      theToInit.EDIVALIDACIONES_LISTASIMBOLOSPERMITIDOSPORTIPOS_FIELD_FUNCIONES,
                    "reuse":           "fprDo_Edivalidaciones_ListaSimbolosPermitidosPorTipos",
                    "maxLapsedMillis":  36000,
                    "KK-useFirstAndMany": false
                },
                {
                    "title":           "Especiales permitidos",
                    "name":            "fprDo_Edivalidaciones_ListaEspecialesPermitidos",
                    "kind":            theS_HitServerSvceType.OPERATIONKIND_LIST,
                    "KK-url":             theToInit.EDIVALIDACIONES_LISTASIMBOLOSPERMITIDOSPORTIPOS_URL,
                    "KK-replyType":       theToInit.EDIVALIDACIONES_LISTASIMBOLOSPERMITIDOSPORTIPOS_TYPE,
                    "replyField":      theToInit.EDIVALIDACIONES_LISTASIMBOLOSPERMITIDOSPORTIPOS_FIELD_ESPECIALES,
                    "reuse":           "fprDo_Edivalidaciones_ListaSimbolosPermitidosPorTipos",
                    "maxLapsedMillis":  36000,
                    "KK-useFirstAndMany": false
                },
                {
                    "title":           "Operadores permitidas",
                    "name":            "fprDo_Edivalidaciones_ListaOperadoresPermitidos",
                    "kind":            theS_HitServerSvceType.OPERATIONKIND_LIST,
                    "KK-url":             theToInit.EDIVALIDACIONES_LISTASIMBOLOSPERMITIDOSPORTIPOS_URL,
                    "KK-replyType":       theToInit.EDIVALIDACIONES_LISTASIMBOLOSPERMITIDOSPORTIPOS_TYPE,
                    "replyField":      theToInit.EDIVALIDACIONES_LISTASIMBOLOSPERMITIDOSPORTIPOS_FIELD_OPERADORES,
                    "reuse":           "fprDo_Edivalidaciones_ListaSimbolosPermitidosPorTipos",
                    "maxLapsedMillis":  36000,
                    "KK-useFirstAndMany": false
                },

                {
                    "title":           "Lista de Condiciones a revisar",
                    "name":            "fprDo_Edivalidaciones_ListaCondicionesNecesitandoActualizacion",
                    "kind":            theS_HitServerSvceType.OPERATIONKIND_LIST,
                    "url":             theToInit.EDIVALIDACIONES_LISTACONDICIONESNECESITANDOACTUALIZACION_URL,
                    "replyType":       theToInit.EDIVALIDACIONES_LISTACONDICIONESNECESITANDOACTUALIZACION_TYPE,
                    "replyField":      theToInit.EDIVALIDACIONES_LISTACONDICIONESNECESITANDOACTUALIZACION_VERIFICACIONES_FIELD,
                    "useFirstAndMany": true
                },



                {
                    "title":           "Validación",
                    "name":            "fprDo_Edivalidaciones_ValidacionDatos",
                    "kind":            theS_HitServerSvceType.OPERATIONKIND_ONE,
                    "url":             theToInit.EDIVALIDACIONES_VALIDACIONDATOS_URL,
                    "replyType":       theToInit.EDIVALIDACIONES_VALIDACIONDATOS_TYPE,
                    "replyField":      null
                },
                {
                    "title":           "Condición de Validación",
                    "name":            "fprDo_Edivalidaciones_CondicionDatos",
                    "kind":            theS_HitServerSvceType.OPERATIONKIND_ONE,
                    "url":             theToInit.EDIVALIDACIONES_CONDICIONDATOS_URL,
                    "replyType":       theToInit.EDIVALIDACIONES_CONDICIONDATOS_TYPE,
                    "replyField":      null
                },
                {
                    "title":           "Datos de Lista Códigos",
                    "name":            "fprDo_Edivalidaciones_ListaCodigosDatos",
                    "kind":            theS_HitServerSvceType.OPERATIONKIND_ONE,
                    "url":             theToInit.EDIVALIDACIONES_LISTACODIGOSDATOS_URL,
                    "replyType":       theToInit.EDIVALIDACIONES_LISTACODIGOSDATOS_TYPE,
                    "replyField":      null
                },
                {
                    "title":           "Código de Lista",
                    "name":            "fprDo_Edivalidaciones_CodigoDeListaDatos",
                    "kind":            theS_HitServerSvceType.OPERATIONKIND_ONE,
                    "url":             theToInit.EDIVALIDACIONES_CODIGODELISTADATOS_URL,
                    "replyType":       theToInit.EDIVALIDACIONES_CODIGODELISTADATOS_TYPE,
                    "replyField":      null
                },
                {
                    "title":           "CIE10",
                    "name":            "fprDo_Edivalidaciones_CIE10Datos",
                    "kind":            theS_HitServerSvceType.OPERATIONKIND_ONE,
                    "url":             theToInit.EDIVALIDACIONES_CIE10DATOS_URL,
                    "replyType":       theToInit.EDIVALIDACIONES_CIE10DATOS_TYPE,
                    "replyField":      null
                },
                {
                    "title":           "Criterio",
                    "name":            "fprDo_Edivalidaciones_CriterioDatos",
                    "kind":            theS_HitServerSvceType.OPERATIONKIND_ONE,
                    "url":             theToInit.EDIVALIDACIONES_CRITERIODATOS_URL,
                    "replyType":       theToInit.EDIVALIDACIONES_CRITERIODATOS_TYPE,
                    "replyField":      null
                },






                {
                    "title":           "Cambiar Validación",
                    "name":            "fprDo_Edivalidaciones_CambiarValidacion",
                    "kind":            theS_HitServerSvceType.OPERATIONKIND_CHANGE,
                    "url":             theToInit.EDIVALIDACIONES_CAMBIARVALIDACION_URL,
                    "replyType":       theToInit.EDIVALIDACIONES_CAMBIARVALIDACION_TYPE,
                    "replyField":      theToInit.EDIVALIDACIONES_CAMBIARVALIDACION_VALIDACIONEDESPUES_FIELD
                },
                {
                    "title":           "Cambiar Condición de Validación",
                    "name":            "fprDo_Edivalidaciones_CambiarCondicionValidacion",
                    "kind":            theS_HitServerSvceType.OPERATIONKIND_CHANGE,
                    "url":             theToInit.EDIVALIDACIONES_CAMBIARCONDICIONDEVALIDACION_URL,
                    "replyType":       theToInit.EDIVALIDACIONES_CAMBIARCONDICIONDEVALIDACION_TYPE,
                    "replyField":      theToInit.EDIVALIDACIONES_CAMBIARCONDICIONDEVALIDACION_CONDICIONDEVALIDACIONEDESPUES_FIELD
                },
                {
                    "title":           "Cambiar Criterio",
                    "name":            "fprDo_Edivalidaciones_CambiarCriterio",
                    "kind":            theS_HitServerSvceType.OPERATIONKIND_CHANGE,
                    "url":             theToInit.EDIVALIDACIONES_CAMBIARCRITERIO_URL,
                    "replyType":       theToInit.EDIVALIDACIONES_CAMBIARCRITERIO_TYPE,
                    "replyField":      theToInit.EDIVALIDACIONES_CAMBIARCRITERIO_CRITERIODESPUES_FIELD
                },
                {
                    "title":           "Cambiar Datos de Lista Códigos",
                    "name":            "fprDo_Edivalidaciones_CambiarListaCodigos",
                    "kind":            theS_HitServerSvceType.OPERATIONKIND_CHANGE,
                    "url":             theToInit.EDIVALIDACIONES_CAMBIARLISTACODIGOS_URL,
                    "replyType":       theToInit.EDIVALIDACIONES_CAMBIARLISTACODIGOS_TYPE,
                    "replyField":      theToInit.EDIVALIDACIONES_CAMBIARLISTACODIGOS_LISTACODIGOSDESPUES_FIELD
                },
                {
                    "title":           "Cambiar Codigo de Lista",
                    "name":            "fprDo_Edivalidaciones_CambiarCodigoDeLista",
                    "kind":            theS_HitServerSvceType.OPERATIONKIND_CHANGE,
                    "url":             theToInit.EDIVALIDACIONES_CAMBIARCODIGODELISTA_URL,
                    "replyType":       theToInit.EDIVALIDACIONES_CAMBIARCODIGODELISTA_TYPE,
                    "replyField":      theToInit.EDIVALIDACIONES_CAMBIARCODIGODELISTA_CODIGODELISTADESPUES_FIELD
                },
                {
                    "title":           "Cambiar CIE10",
                    "name":            "fprDo_Edivalidaciones_CambiarCie10",
                    "kind":            theS_HitServerSvceType.OPERATIONKIND_CHANGE,
                    "url":             theToInit.EDIVALIDACIONES_CAMBIARCIE10_URL,
                    "replyType":       theToInit.EDIVALIDACIONES_CAMBIARCIE10_TYPE,
                    "replyField":      theToInit.EDIVALIDACIONES_CAMBIARCIE10_CIE10DESPUES_FIELD
                },






                {
                    "title":           "Crear Validación",
                    "name":            "fprDo_Edivalidaciones_CrearValidacion",
                    "kind":            theS_HitServerSvceType.OPERATIONKIND_CREATE,
                    "url":             theToInit.EDIVALIDACIONES_CREARVALIDACION_URL,
                    "replyType":       theToInit.EDIVALIDACIONES_CREARVALIDACION_TYPE
                },
                {
                    "title":           "Crear Criterio",
                    "name":            "fprDo_Edivalidaciones_CrearCriterio",
                    "kind":            theS_HitServerSvceType.OPERATIONKIND_CREATE,
                    "url":             theToInit.EDIVALIDACIONES_CREARCRITERIO_URL,
                    "replyType":       theToInit.EDIVALIDACIONES_CREARCRITERIO_TYPE
                },
                {
                    "title":           "Crear Lista de Códigos",
                    "name":            "fprDo_Edivalidaciones_CrearListaCodigos",
                    "kind":            theS_HitServerSvceType.OPERATIONKIND_CREATE,
                    "url":             theToInit.EDIVALIDACIONES_CREARLISTACODIGOS_URL,
                    "replyType":       theToInit.EDIVALIDACIONES_CREARLISTACODIGOS_TYPE
                },

                {
                    "title":           "Crear Condición de Validación",
                    "name":            "fprDo_Edivalidaciones_CrearCondicionDeValidacion",
                    "kind":            theS_HitServerSvceType.OPERATIONKIND_CREATE,
                    "url":             theToInit.EDIVALIDACIONES_CREARCONDICIONDEVALIDACION_URL,
                    "replyType":       theToInit.EDIVALIDACIONES_CREARCONDICIONDEVALIDACION_TYPE
                },
                {
                    "title":           "Crear Código de Lista",
                    "name":            "fprDo_Edivalidaciones_CrearCodigoDeLista",
                    "kind":            theS_HitServerSvceType.OPERATIONKIND_CREATE,
                    "url":             theToInit.EDIVALIDACIONES_CREARCODIGODELISTAURL,
                    "replyType":       theToInit.EDIVALIDACIONES_CREARCODIGODELISTA_TYPE
                },





                {
                    "title":           "Eliminar Validación",
                    "name":            "fprDo_Edivalidaciones_EliminarValidacion",
                    "kind":            theS_HitServerSvceType.OPERATIONKIND_DELETE,
                    "url":             theToInit.EDIVALIDACIONES_ELIMINARVALIDACION_URL,
                    "replyType":       theToInit.EDIVALIDACIONES_ELIMINARVALIDACION_TYPE
                },
                {
                    "title":           "Eliminar Criterio",
                    "name":            "fprDo_Edivalidaciones_EliminarCriterio",
                    "kind":            theS_HitServerSvceType.OPERATIONKIND_DELETE,
                    "url":             theToInit.EDIVALIDACIONES_ELIMINARCRITERIO_URL,
                    "replyType":       theToInit.EDIVALIDACIONES_ELIMINARCRITERIO_TYPE
                },
                {
                    "title":           "Eliminar Lista de Códigos",
                    "name":            "fprDo_Edivalidaciones_EliminarListaCodigos",
                    "kind":            theS_HitServerSvceType.OPERATIONKIND_DELETE,
                    "url":             theToInit.EDIVALIDACIONES_ELIMINARLISTACODIGOS_URL,
                    "replyType":       theToInit.EDIVALIDACIONES_ELIMINARLISTACODIGOS_TYPE
                },

                {
                    "title":           "Eliminar Condición de Validación",
                    "name":            "fprDo_Edivalidaciones_EliminarCondicionDeValidacion",
                    "kind":            theS_HitServerSvceType.OPERATIONKIND_DELETE,
                    "url":             theToInit.EDIVALIDACIONES_ELIMINARCONDICIONDEVALIDACION_URL,
                    "replyType":       theToInit.EDIVALIDACIONES_ELIMINARCONDICIONDEVALIDACION_TYPE
                },
                {
                    "title":           "Eliminar Código de Lista",
                    "name":            "fprDo_Edivalidaciones_EliminarCodigoDeLista",
                    "kind":            theS_HitServerSvceType.OPERATIONKIND_DELETE,
                    "url":             theToInit.EDIVALIDACIONES_ELIMINARCODIGODELISTA_URL,
                    "replyType":       theToInit.EDIVALIDACIONES_ELIMINARCODIGODELISTA_TYPE
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






        var aEdivalidacionesSvce_Prototype = (function() {


            var aPrototype = new theS_HitSpecifiedSvceType.HitSpecifiedSvce_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_SuperPrototype = theS_HitSpecifiedSvceType.HitSpecifiedSvce_Prototype;


            aPrototype._v_Type = "EdivalidacionesSvce";

            aPrototype._v_Module = null;








            var _pInit = function( theTitle, theIdentifier, theRecorder) {

                this._pInit_EdivalidacionesSvce( theTitle, theIdentifier, theRecorder);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_EdivalidacionesSvce = function( theTitle, theIdentifier, theRecorder) {

                /* Delegate on super prototype initialization */
                aPrototype._v_SuperPrototype._pInit_HitSpecifiedSvce.apply( this, [
                    theTitle || this.EDIVALIDACIONESSVCE_DEFAULTNAME,
                    theIdentifier,
                    theRecorder
                ]);

                this._v_Prototype = aPrototype;
                this._v_Type      = this._v_Prototype._v_Type;
                this._v_Module    = aPrototype._v_Module;

                this.pRegisterOperationsFromSpecs( this.OPERATIONSPECS);
            };
            if( _pInit_EdivalidacionesSvce){}/* CQT */
            aPrototype._pInit_EdivalidacionesSvce = _pInit_EdivalidacionesSvce;









            return aPrototype;

        })();








        var EdivalidacionesSvce_Constructor = function( theTitle, theIdentifier, theRecorder) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_HitSpecifiedSvceType.HitSpecifiedSvce_Prototype;

            this._v_Prototype = null;
            this._v_Type      = null;
            this._v_Module    = null;

            this._pInit_EdivalidacionesSvce( theTitle, theIdentifier, theRecorder);
        };
        EdivalidacionesSvce_Constructor.prototype = aEdivalidacionesSvce_Prototype;





        var EdivalidacionesSvce_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_HitSpecifiedSvceType.HitSpecifiedSvce_Prototype;

            this._v_Prototype = aEdivalidacionesSvce_Prototype;
            this._v_Type      = null;
            this._v_Module    = null;
        };
        EdivalidacionesSvce_SuperPrototypeConstructor.prototype = aEdivalidacionesSvce_Prototype;



        var aModule = {
            "EdivalidacionesSvce_Prototype": aEdivalidacionesSvce_Prototype,
            "EdivalidacionesSvce_Constructor": EdivalidacionesSvce_Constructor,
            "EdivalidacionesSvce_SuperPrototypeConstructor": EdivalidacionesSvce_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aEdivalidacionesSvce_Prototype._v_Module = aModule;




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







