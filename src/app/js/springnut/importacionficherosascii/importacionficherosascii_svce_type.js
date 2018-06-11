'use strict';

/*
 * importacionficherosascii_svce_type.js
 *
 * Creado @author Antonio Carrasco Valero 201411280052
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




angular.module("importacionficherosasciiTypes").factory("ImportacionficherosasciiSvceType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "HitSpecifiedSvceType",
    "HitServerSvceType",
    "TrabajosSvce",
function( theSS_typesregistry,
          theSS_Overrider,
          theSS_HitSpecifiedSvceType,
          theSS_HitServerSvceType,
          theSS_TrabajosSvce){



        var ModuleName     = "importacionficherosascii_svce_type";
        var ModulePackages = "springnut/importacionficherosascii";
        var ModuleFullName = ModulePackages + "/" + ModuleName;





        var aMod_definer = function( theS_Overrider,
                                     theS_HitSpecifiedSvceType,
                                     theS_HitServerSvceType,
                                     theS_TrabajosSvce) {

            if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}





            var pgInitWithModuleVariations = function( theToInit) {

                if( !theToInit) {
                    return;
                }

                theToInit.LOGREQUESTS  = true;
                theToInit.LOGFORMS     = true;
                theToInit.LOGREPLIES   = true;
                theToInit.LOGRESPONSES = true;

                theToInit.LOGUPLOADHTTPFAILURES = true;



                theToInit.MAXRESPONSELOGENTRIES = 4;






                theToInit.IMPORTACIONFICHEROSASCII_LISTAIMPORTACIONFICHEROSASCII_TITLE = "Lista de Importacionficherosascii";
                theToInit.IMPORTACIONFICHEROSASCII_LISTAIMPORTACIONFICHEROSASCII_URL   = "importacionficherosascii/listaImportacionficherosasciiCompletaJSON";
                theToInit.IMPORTACIONFICHEROSASCII_LISTAIMPORTACIONFICHEROSASCII_TYPE  = "ListaImportacionficherosascii";
                theToInit.IMPORTACIONFICHEROSASCII_LISTAIMPORTACIONFICHEROSASCII_FIELD = "vImportacionficherosascii";

                theToInit.IMPORTACIONFICHEROSASCII_IMPORTACIONFICHEROASCIIDATOS_TITLE = "Importacionficheroascii";
                theToInit.IMPORTACIONFICHEROSASCII_IMPORTACIONFICHEROASCIIDATOS_URL   = "importacionficherosascii/importacionficheroasciiDatosCompletosJSON/";
                theToInit.IMPORTACIONFICHEROSASCII_IMPORTACIONFICHEROASCIIDATOS_TYPE  = "ImportacionficheroasciiDatos";



                theToInit.IMPORTACIONFICHEROSASCII_CREARIMPORTACIONFICHEROASCIIDATOS_NAME         = "fprDo_Importacionesficherosascii_CrearImportacionFicheroASCII";
                theToInit.IMPORTACIONFICHEROSASCII_CREARIMPORTACIONFICHEROASCIIDATOS_TITLE         = "CrearImportacionficheroascii";
                theToInit.IMPORTACIONFICHEROSASCII_CREARIMPORTACIONFICHEROASCIIDATOS_URL           = "importacionficherosascii/crearTrabajoImportacionFicheroASCIIJSON";
                theToInit.IMPORTACIONFICHEROSASCII_CREARIMPORTACIONFICHEROASCIIDATOS_TYPE          = "CreadoLanzadoImportacionFicheroASCII";
                theToInit.IMPORTACIONFICHEROSASCII_CREARIMPORTACIONFICHEROASCIIDATOS_RESPONSEFIELD = "";



                theToInit.IMPORTACIONFICHEROSASCII_LANZARIMPORTACIONFICHEROASCIIDATOS_NAME         = "fprDo_Importacionesficherosascii_LanzarImportacionFicheroASCII";
                theToInit.IMPORTACIONFICHEROSASCII_LANZARIMPORTACIONFICHEROASCIIDATOS_TITLE         = "LanzarImportacionficheroascii";
                theToInit.IMPORTACIONFICHEROSASCII_LANZARIMPORTACIONFICHEROASCIIDATOS_URL           = "trabajos/lanzarEjecucionTrabajoJSON";
                theToInit.IMPORTACIONFICHEROSASCII_LANZARIMPORTACIONFICHEROASCIIDATOS_TYPE          = "LanzamientoEjecucionTrabajo";
                theToInit.IMPORTACIONFICHEROSASCII_LANZARIMPORTACIONFICHEROASCIIDATOS_RESPONSEFIELD = "vTrabajo";


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


                theToInit.IMPORTACIONFICHEROSASCII_CAMBIARPARMPOSTFIX = "_cambiar";


                theToInit.FIRSTINDEXURLREPLACEMENT = "{thePrimero}";
                theToInit.HOWMANYURLREPLACEMENT    = "{theCuantos}";


                theToInit.IMPORTACIONFICHEROSASCIISVCE_DEFAULTNAME = "ImportacionficherosasciiSvceDefaultName";

                theToInit.TIPOREGISTROSINTETICO_IMPORTACIONFICHEROASCII = "ImportacionFicheroASCII";



                theToInit.ENUM_ESTADOTRABAJO_CREADO= "Creado";



                theToInit.FIELDNAME_theTipoBoletin  = "theTipoBoletin";
                theToInit.FIELDNAME_theUploadedFile = "theUploadedFile";




                theToInit.FIELDS_IMPORTACIONFICHEROASCII_DESDE_TRABAJO = [
                    { "parmName": "vInformeExcepciones",       "sourceName": null, "conversion":   null},
                    { "parmName": "vTrIdtrabajo",              "sourceName": null, "conversion":   null},
                    { "parmName": "vTrTipotrabajo",            "sourceName": null, "conversion":   null},
                    { "parmName": "vTrDeprueba",               "sourceName": null, "conversion":   null},
                    { "parmName": "vTrIgnorartrabajo",         "sourceName": null, "conversion":   null},
                    { "parmName": "vTrIdlocalizador",          "sourceName": null, "conversion":   null},
                    { "parmName": "vTrTipolocalizador",        "sourceName": null, "conversion":   null},
                    { "parmName": "vTrPasoprimero",            "sourceName": null, "conversion":   null},
                    { "parmName": "vTrPasoultimo",             "sourceName": null, "conversion":   null},
                    { "parmName": "vTrFechaStr",               "sourceName": null, "conversion":   null},
                    { "parmName": "vTrFechaultimaStr",         "sourceName": null, "conversion":   null},
                    { "parmName": "vTrEstado",                 "sourceName": null, "conversion":   null},
                    { "parmName": "vTrExito",                  "sourceName": null, "conversion":   null},
                    { "parmName": "vTrExitoLabel",             "sourceName": null, "conversion":   null},
                    { "parmName": "vTrCausaerror",             "sourceName": null, "conversion":   null},
                    { "parmName": "vTrCausaerrorLabel",        "sourceName": null, "conversion":   null},
                    { "parmName": "vTrAfectadoerror",          "sourceName": null, "conversion":   null},
                    { "parmName": "vTrDetalleerror",           "sourceName": null, "conversion":   null},
                    { "parmName": "vTrExcepcion",              "sourceName": null, "conversion":   null},
                    { "parmName": "vTrIdejecucion",            "sourceName": null, "conversion":   null},
                    { "parmName": "vTrTipoejecucion",          "sourceName": null, "conversion":   null},
                    { "parmName": "vTrVersionejecucion",       "sourceName": null, "conversion":   null},
                    { "parmName": "vTrEstadoejecucion",        "sourceName": null, "conversion":   null},
                    { "parmName": "vTrPasoejecucion",          "sourceName": null, "conversion":   null},
                    { "parmName": "vTrNombrepaso",             "sourceName": null, "conversion":   null},
                    { "parmName": "vTrTodospasos",             "sourceName": null, "conversion":   null},
                    { "parmName": "vIncluyeLocalizador",       "sourceName": null, "conversion":   null},
                    { "parmName": "vIncluyeParametros",        "sourceName": null, "conversion":   null},
                    { "parmName": "vIncluyeParakilometros",    "sourceName": null, "conversion":   null},
                    { "parmName": "vIncluyeResultados",        "sourceName": null, "conversion":   null},
                    { "parmName": "vIncluyeResulkilotados",    "sourceName": null, "conversion":   null},
                    { "parmName": "vIncluyeProgresos",         "sourceName": null, "conversion":   null},
                    { "parmName": "vIncluyeMuestras",          "sourceName": null, "conversion":   null},
                    { "parmName": "vIncluyeMueskilotras",      "sourceName": null, "conversion":   null},
                    { "parmName": "vIncluyeIntervenciones",    "sourceName": null, "conversion":   null},
                    { "parmName": "vIncluyeEjecuciones",       "sourceName": null, "conversion":   null},
                    { "parmName": "vIncluyeIntentos",          "sourceName": null, "conversion":   null},
                    { "parmName": "vIncluyeBlobs",             "sourceName": null, "conversion":   null}
                ];


                theToInit.FIELDS_IMPORTACIONFICHEROASCII_DESDE_EJECUCION = [
                    { "parmName": "vEjIdejecucion",          "sourceName": null, "conversion":   null},
                    { "parmName": "vEjTipoejecucion",        "sourceName": null, "conversion":   null},
                    { "parmName": "vEjDeprueba",             "sourceName": null, "conversion":   null},
                    { "parmName": "vEjIgnorarejecucion",     "sourceName": null, "conversion":   null},
                    { "parmName": "vEjPasoprimero",          "sourceName": null, "conversion":   null},
                    { "parmName": "vEjPasoultimo",           "sourceName": null, "conversion":   null},
                    { "parmName": "vEjFechaStr",             "sourceName": null, "conversion":   null},
                    { "parmName": "vEjFechaultimaStr",       "sourceName": null, "conversion":   null},
                    { "parmName": "vEjVersionejecucion",     "sourceName": null, "conversion":   null},
                    { "parmName": "vEjEstadoejecucion",      "sourceName": null, "conversion":   null},
                    { "parmName": "vEjPasoejecucion",        "sourceName": null, "conversion":   null},
                    { "parmName": "vEjNombrepaso",           "sourceName": null, "conversion":   null},
                    { "parmName": "vEjIdtrabajo",            "sourceName": null, "conversion":   null},
                    { "parmName": "vEjTipotrabajo",          "sourceName": null, "conversion":   null}
                ];



                theToInit.FIELDS_IMPORTACIONFICHEROASCII_DESDE_PROGRESO = [
                    { "parmName": "vPgIdprogreso",             "sourceName": null, "conversion":   null},
                    { "parmName": "vPgTipoprogreso",           "sourceName": null, "conversion":   null},
                    { "parmName": "vPgDeprueba",               "sourceName": null, "conversion":   null},
                    { "parmName": "vPgIgnorarprogreso",        "sourceName": null, "conversion":   null},
                    { "parmName": "vPgFechaStr",               "sourceName": null, "conversion":   null},
                    { "parmName": "vPgIdtrabajo",              "sourceName": null, "conversion":   null},
                    { "parmName": "vPgTipotrabajo",            "sourceName": null, "conversion":   null},
                    { "parmName": "vPgPasoprimero",            "sourceName": null, "conversion":   null},
                    { "parmName": "vPgPasoultimo",             "sourceName": null, "conversion":   null},
                    { "parmName": "vPgFechatrabajoStr",        "sourceName": null, "conversion":   null},
                    { "parmName": "vPgFechaultimatrabajoStr",  "sourceName": null, "conversion":   null},
                    { "parmName": "vPgEstado",                 "sourceName": null, "conversion":   null},
                    { "parmName": "vPgExito",                  "sourceName": null, "conversion":   null},
                    { "parmName": "vPgExitoLabel",             "sourceName": null, "conversion":   null},
                    { "parmName": "vPgExcepcion",              "sourceName": null, "conversion":   null},
                    { "parmName": "vPgPorcentaje",             "sourceName": null, "conversion":   null},
                    { "parmName": "vPgEstimados",              "sourceName": null, "conversion":   null},
                    { "parmName": "vPgFinestimadoStr",         "sourceName": null, "conversion":   null},
                    { "parmName": "vPgCausaerrorLabel",        "sourceName": null, "conversion":   null},
                    { "parmName": "vPgAfectadoerror",          "sourceName": null, "conversion":   null},
                    { "parmName": "vPgDetalleerror",           "sourceName": null, "conversion":   null},
                    { "parmName": "vPgIdejecucion",            "sourceName": null, "conversion":   null},
                    { "parmName": "vPgTipoejecucion",          "sourceName": null, "conversion":   null},
                    { "parmName": "vPgVersionejecucion",       "sourceName": null, "conversion":   null},
                    { "parmName": "vPgEstadoejecucion",        "sourceName": null, "conversion":   null},
                    { "parmName": "vPgPasoejecucion",          "sourceName": null, "conversion":   null},
                    { "parmName": "vPgNombrepaso",             "sourceName": null, "conversion":   null},
                    { "parmName": "vPgPasoporcentaje",         "sourceName": null, "conversion":   null},
                    { "parmName": "vPgPasoestimados",          "sourceName": null, "conversion":   null},
                    { "parmName": "vPgPasofinestimadoStr",     "sourceName": null, "conversion":   null}
                ];




                theToInit.PARAMETROS_IMPORTACIONFICHEROASCII = [
                    { "parmName": "theTipoBoletin",   "sourceName": null, "conversion":   "toUpperCase"},
                    { "parmName": "theAno",           "sourceName": null, "conversion":   null},
                    { "parmName": "theMes",           "sourceName": null, "conversion":   null},
                    { "parmName": "theProvincia",     "sourceName": null, "conversion":   null},
                    { "parmName": "theNombreFichero", "sourceName": null, "conversion":   null}
                ];


                theToInit.PARAKILOMETROS_IMPORTACIONFICHEROASCII = [
                    { "parmName": "theContenidoFichero", "conversion":   "maxlen", "conversionExtra": 8192}
                ];






                theToInit.RESULTADOS_IMPORTACIONFICHEROASCII = [
                    { "parmName": "theNumeroLineas",                  "sourceName": null, "conversion":   null},
                    { "parmName": "theNumeroNBOLs",                   "sourceName": null, "conversion":   null},
                    { "parmName": "thePrimerNBOL",                    "sourceName": null, "conversion":   null},
                    { "parmName": "theUltimoNBOL",                    "sourceName": null, "conversion":   null},
                    { "parmName": "theMenorNBOL",                     "sourceName": null, "conversion":   null},
                    { "parmName": "theMayorNBOL",                     "sourceName": null, "conversion":   null},
                    { "parmName": "theNLineas_Aceptables",            "sourceName": null, "conversion":   null},
                    { "parmName": "theNLineas_NoAceptables",          "sourceName": null, "conversion":   null},
                    { "parmName": "theNLineas_Vacias",                "sourceName": null, "conversion":   null},
                    { "parmName": "theNLineas_Ilegibles",             "sourceName": null, "conversion":   null},
                    { "parmName": "theNLineas_Alteradas",             "sourceName": null, "conversion":   null},
                    { "parmName": "theNLineas_SinNBOL",               "sourceName": null, "conversion":   null},
                    { "parmName": "theNLineas_NBOLrepetido",          "sourceName": null, "conversion":   null},
                    { "parmName": "theNLineas_SinEdad",               "sourceName": null, "conversion":   null},
                    { "parmName": "theNLineas_ConDefectos",           "sourceName": null, "conversion":   null},
                    { "parmName": "theNLineas_FNacimientoIncompleta", "sourceName": null, "conversion":   null},
                    { "parmName": "theNLineas_FDefuncionIncompleta",  "sourceName": null, "conversion":   null},
                    { "parmName": "theNLineas_SinSexo",               "sourceName": null, "conversion":   null},
                    { "parmName": "theNumeroNBOLs_Creados",           "sourceName": null, "conversion":   null},
                    { "parmName": "theNumeroNBOLs_YaExistentes",      "sourceName": null, "conversion":   null},
                    { "parmName": "theNumIdentificasCreados",         "sourceName": null, "conversion":   null},
                    { "parmName": "thePrimerIdentificaCreado",        "sourceName": null, "conversion":   null},
                    { "parmName": "theUltimoIdentificaCreado",        "sourceName": null, "conversion":   null},
                    { "parmName": "theNumeroBoletinesASCII",          "sourceName": null, "conversion":   null},
                    { "parmName": "theNumNBOLsEliminados",            "sourceName": null, "conversion":   null},
                    { "parmName": "theNumIdentificasEliminados",      "sourceName": null, "conversion":   null},
                    { "parmName": "theNumBedsEliminados",             "sourceName": null, "conversion":   null},
                    { "parmName": "theNumBedcodsEliminados",          "sourceName": null, "conversion":   null},
                    { "parmName": "theNumBedlitsEliminados",          "sourceName": null, "conversion":   null},
                    { "parmName": "theNumBedImagenesEliminados",      "sourceName": null, "conversion":   null},
                    { "parmName": "theNumPMejorasEliminados",         "sourceName": null, "conversion":   null},
                    { "parmName": "theNumErroresDeBedEliminados",     "sourceName": null, "conversion":   null},
                    { "parmName": "theIdFicheroEliminado",            "sourceName": null, "conversion":   null},
                    { "parmName": "theNumFicherosEliminados",         "sourceName": null, "conversion":   null},
                    { "parmName": "theNumBloquesEliminados",          "sourceName": null, "conversion":   null},
                    { "parmName": "theNumFasesEliminadas",            "sourceName": null, "conversion":   null},
                    { "parmName": "theNumErroresDeFaseEliminados",    "sourceName": null, "conversion":   null},
                    { "parmName": "theNumBedsCreados",                "sourceName": null, "conversion":   null},
                    { "parmName": "theNumBedcodsCreados",             "sourceName": null, "conversion":   null},
                    { "parmName": "theNumBedlitsCreados",             "sourceName": null, "conversion":   null},
                    { "parmName": "theNumErroresValidacion",          "sourceName": null, "conversion":   null},
                    { "parmName": "theNumTrabajosGuardados",          "sourceName": null, "conversion":   null},
                    { "parmName": "theNumAmbitosGuardados",           "sourceName": null, "conversion":   null},
                    { "parmName": "theNumTrabajosCreados",            "sourceName": null, "conversion":   null},
                    { "parmName": "theNumAmbitosCreados",             "sourceName": null, "conversion":   null}
                ];


                theToInit.RESULKILOTADOS_IMPORTACIONFICHEROASCII = [
                    { "parmName": "Informe",                           "sourceName": null, "conversion":   null},
                    { "parmName": "theNBOLs_Creados",                  "sourceName": null, "conversion":   null},
                    { "parmName": "theNBOLs_ConDefectos",              "sourceName": null, "conversion":   null},
                    { "parmName": "theNBOLs_Repetidos",                "sourceName": null, "conversion":   null},
                    { "parmName": "theNBOLs_YaExistentes",             "sourceName": null, "conversion":   null},
                    { "parmName": "theIndLineas_NoAceptables",         "sourceName": null, "conversion":   null}
                    /*,
                    { "parmName": "theEstadosLineas",                  "sourceName": null, "conversion":   null},
                    { "parmName": "theDefectosLineas",                 "sourceName": null, "conversion":   null},
                    { "parmName": "theIndLineas_Aceptables",           "sourceName": null, "conversion":   null},
                    { "parmName": "theIndLineas_NoAceptables",         "sourceName": null, "conversion":   null},
                    { "parmName": "theIndLineas_Vacias",               "sourceName": null, "conversion":   null},
                    { "parmName": "theIndLineas_Ilegibles",            "sourceName": null, "conversion":   null},
                    { "parmName": "theIndLineas_Alteradas",            "sourceName": null, "conversion":   null},
                    { "parmName": "theIndLineas_SinNBOL",              "sourceName": null, "conversion":   null},
                    { "parmName": "theIndLineas_NBOLrepetido",         "sourceName": null, "conversion":   null},
                    { "parmName": "theIndLineas_SinEdad",              "sourceName": null, "conversion":   null},
                    { "parmName": "theIndLineas_ConDefectos",          "sourceName": null, "conversion":   null},
                    { "parmName": "theIndLineas_FNacimientoIncompleta","sourceName": null, "conversion":   null},
                    { "parmName": "theIndLineas_FDefuncionIncompleta", "sourceName": null, "conversion":   null},
                    { "parmName": "theIndLineas_SinSexo",              "sourceName": null, "conversion":   null},
                    { "parmName": "theNBOLs_FNacimientoIncompleta",    "sourceName": null, "conversion":   null},
                    { "parmName": "theNBOLs_FDefuncionIncompleta",     "sourceName": null, "conversion":   null},
                    { "parmName": "theNBOLs_SinSexo",                  "sourceName": null, "conversion":   null},
                    { "parmName": "theLineas",                         "sourceName": null, "conversion":   null},
                    { "parmName": "theLineasDesdeBoletin",             "sourceName": null, "conversion":   null},
                    { "parmName": "theNBOLs",                          "sourceName": null, "conversion":   null},
                    { "parmName": "theIdentificas_Creados",            "sourceName": null, "conversion":   null},
                    { "parmName": "theNBOLsEliminados",                "sourceName": null, "conversion":   null},
                    { "parmName": "theIdentificasEliminados",          "sourceName": null, "conversion":   null},
                    { "parmName": "theIdBedsEliminados",               "sourceName": null, "conversion":   null},
                    { "parmName": "theIdBedcodsEliminados",            "sourceName": null, "conversion":   null},
                    { "parmName": "theIdBedlitsEliminados",            "sourceName": null, "conversion":   null},
                    { "parmName": "theIdBedImagenesEliminadas",        "sourceName": null, "conversion":   null},
                    { "parmName": "theIdPMejorasEliminadas",           "sourceName": null, "conversion":   null},
                    { "parmName": "theIdErroresEliminados",            "sourceName": null, "conversion":   null},
                    { "parmName": "theIdFasesEliminadas",              "sourceName": null, "conversion":   null},
                    { "parmName": "theIdErroresDeFaseEliminados",      "sourceName": null, "conversion":   null},
                    { "parmName": "theIdBloquesEliminados",            "sourceName": null, "conversion":   null},
                    { "parmName": "theIdBedsCreados",                  "sourceName": null, "conversion":   null},
                    { "parmName": "theIdBedcodsCreados",               "sourceName": null, "conversion":   null},
                    { "parmName": "theIdBedlitsCreados",               "sourceName": null, "conversion":   null},
                    { "parmName": "theErroresValidacion",              "sourceName": null, "conversion":   null},
                    { "parmName": "theIdsTrabajosCreados",             "sourceName": null, "conversion":   null},
                    { "parmName": "theIdsAmbitosCreados",              "sourceName": null, "conversion":   null},
                    { "parmName": "theRutasTrabajosCreados",           "conversion":   "maxlen", "conversionExtra": 8192},
                    { "parmName": "theRutasAmbitosCreados",            "conversion":   "maxlen", "conversionExtra": 8192}
                    */
                ];




                theToInit.OPERATIONSPECS = [
                    {
                        "title":           theToInit.IMPORTACIONFICHEROSASCII_CREARIMPORTACIONFICHEROASCIIDATOS_TITLE,
                        "name":            theToInit.IMPORTACIONFICHEROSASCII_CREARIMPORTACIONFICHEROASCIIDATOS_NAME,
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_CREATE,
                        "url":             theToInit.IMPORTACIONFICHEROSASCII_CREARIMPORTACIONFICHEROASCIIDATOS_URL,
                        "replyType":       theToInit.IMPORTACIONFICHEROSASCII_CREARIMPORTACIONFICHEROASCIIDATOS_TYPE,
                        "replyField":      theToInit.IMPORTACIONFICHEROSASCII_CREARIMPORTACIONFICHEROASCIIDATOS_RESPONSEFIELD
                    },
                    {
                        "title":           theToInit.IMPORTACIONFICHEROSASCII_LANZARIMPORTACIONFICHEROASCIIDATOS_TITLE,
                        "name":            theToInit.IMPORTACIONFICHEROSASCII_LANZARIMPORTACIONFICHEROASCIIDATOS_NAME,
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_ACTION,
                        "url":             theToInit.IMPORTACIONFICHEROSASCII_LANZARIMPORTACIONFICHEROASCIIDATOS_URL,
                        "replyType":       theToInit.IMPORTACIONFICHEROSASCII_LANZARIMPORTACIONFICHEROASCIIDATOS_TYPE,
                        "replyField":      theToInit.IMPORTACIONFICHEROSASCII_LANZARIMPORTACIONFICHEROASCIIDATOS_RESPONSEFIELD
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






            var aImportacionficherosasciiSvce_Prototype = (function() {


                var aPrototype = new theS_HitSpecifiedSvceType.HitSpecifiedSvce_SuperPrototypeConstructor();

                pgInitFromModuleConstants( aPrototype);


                aPrototype._v_SuperPrototype = theS_HitSpecifiedSvceType.HitSpecifiedSvce_Prototype;


                aPrototype._v_Type = "ImportacionficherosasciiSvce";

                aPrototype._v_Module = null;








                var _pInit = function( theTitle, theIdentifier, theRecorder) {

                    this._pInit_ImportacionficherosasciiSvce( theTitle, theIdentifier, theRecorder);
                };
                if( _pInit){}/* CQT */
                aPrototype._pInit = _pInit;







                var _pInit_ImportacionficherosasciiSvce = function( theTitle, theIdentifier, theRecorder) {

                    /* Delegate on super prototype initialization */
                    aPrototype._v_SuperPrototype._pInit_HitSpecifiedSvce.apply( this, [
                        theTitle || this.IMPORTACIONFICHEROSASCIISVCE_DEFAULTNAME,
                        theIdentifier,
                        theRecorder
                    ]);

                    this._v_Prototype = aPrototype;
                    this._v_Type      = this._v_Prototype._v_Type;
                    this._v_Module    = aPrototype._v_Module;


                    this.pRegisterOperationsFromSpecs( this.OPERATIONSPECS);
                };
                if( _pInit_ImportacionficherosasciiSvce){}/* CQT */
                aPrototype._pInit_ImportacionficherosasciiSvce = _pInit_ImportacionficherosasciiSvce;








                var fTrabajosSvce = function() {

                    return theS_TrabajosSvce;
                };
                if( fTrabajosSvce){}/* CQT */
                aPrototype.fTrabajosSvce = fTrabajosSvce;










                var pMemberSpecIntoVoidRecord = function( theMemberSpecs, theVoidRecord) {

                    if( !theMemberSpecs) {
                        return;
                    }
                    
                    if( !theVoidRecord) {
                        return;
                    }

                    var aNumSpecs = theMemberSpecs.length;
                    for( var aSpecIdx=0; aSpecIdx < aNumSpecs; aSpecIdx++) {
                        var aSpec = theMemberSpecs[ aSpecIdx];
                        if( aSpec) {
                            var aSpecName = aSpec[ "parmName"];
                            if( aSpecName)  {
                                theVoidRecord[ aSpecName] = null;
                            }
                        }
                    }
                };
                if( pMemberSpecIntoVoidRecord){}/* CQT */
                aPrototype.pMemberSpecIntoVoidRecord = pMemberSpecIntoVoidRecord;









                var fNewVoidImportacionFicheroASCII = function() {

                    var anImportacionFicheroASCII = {
                        "vTipo": this.TIPOREGISTROSINTETICO_IMPORTACIONFICHEROASCII
                    };

                    this.pMemberSpecIntoVoidRecord( this.FIELDS_IMPORTACIONFICHEROASCII_DESDE_TRABAJO,   anImportacionFicheroASCII);
                    this.pMemberSpecIntoVoidRecord( this.FIELDS_IMPORTACIONFICHEROASCII_DESDE_EJECUCION, anImportacionFicheroASCII);
                    this.pMemberSpecIntoVoidRecord( this.FIELDS_IMPORTACIONFICHEROASCII_DESDE_PROGRESO,  anImportacionFicheroASCII);

                    this.pMemberSpecIntoVoidRecord( this.PARAMETROS_IMPORTACIONFICHEROASCII,     anImportacionFicheroASCII);
                    this.pMemberSpecIntoVoidRecord( this.PARAKILOMETROS_IMPORTACIONFICHEROASCII, anImportacionFicheroASCII);
                    this.pMemberSpecIntoVoidRecord( this.RESULTADOS_IMPORTACIONFICHEROASCII,     anImportacionFicheroASCII);
                    this.pMemberSpecIntoVoidRecord( this.RESULKILOTADOS_IMPORTACIONFICHEROASCII, anImportacionFicheroASCII);

                    return anImportacionFicheroASCII;

                };
                if( fNewVoidImportacionFicheroASCII){}/* CQT */
                aPrototype.fNewVoidImportacionFicheroASCII = fNewVoidImportacionFicheroASCII;









                var fprDo_Importacionesficherosascii_ListaImportacionesFicherosASCIILigera = function( theQueryTipoBoletinTipoTrabajo) {
                    var aMethodName = this._v_Type + " fprDo_Importacionesficherosascii_ListaImportacionesFicherosASCIILigera";
                    if( aMethodName){}/* CQT */


                    if( !theQueryTipoBoletinTipoTrabajo) {
                        return this.fNewDeferredRejectPromise( "fprDo_Importacionesficherosascii_ListaImportacionesFicherosASCIILigera !theQueryTipoBoletinTipoTrabajo");
                    }

                    var aTipoBoletin = theQueryTipoBoletinTipoTrabajo[ "theTipoBoletin"];
                    if( !aTipoBoletin) {
                        return this.fNewDeferredRejectPromise( "fprDo_Importacionesficherosascii_ListaImportacionesFicherosASCIILigera !theQueryTipoBoletinTipoTrabajo[ 'theTipoBoletin']");
                    }

                    var aDeferred = this.fNewDeferred();

                    var aThis = this;

                    /* CQT Dynamically defined at trabajos_svce_type by specified service of same name */
                    this.fTrabajosSvce()[ theS_TrabajosSvce.TRABAJOS_LISTATRABAJOSDETIPOYTIPOBOLETINLIGERA_NAME]( theQueryTipoBoletinTipoTrabajo)
                        .then( function( theResponse) {

                            if( !theResponse) {
                                aThis.pDeferredResolve( aDeferred, theResponse);
                                return;
                            }


                            var aListaImportacionesFicheroASCII = aThis.fListaImportacionesFicheroASCIIDesdeListaTrabajos( theResponse);
                            if( aListaImportacionesFicheroASCII){}/* CQT */

                            aThis.pDeferredResolve( aDeferred, aListaImportacionesFicheroASCII);


                        })
                        ['catch']( function( theError) {

                            aThis.pDeferredReject( aDeferred, theError);

                            throw theError;
                        });


                    return aDeferred.promise;
                };
                if( fprDo_Importacionesficherosascii_ListaImportacionesFicherosASCIILigera){}/* CQT */
                aPrototype.fprDo_Importacionesficherosascii_ListaImportacionesFicherosASCIILigera = fprDo_Importacionesficherosascii_ListaImportacionesFicherosASCIILigera;












                var fprDo_Importacionesficherosascii_ImportacionFicheroASCIIDatosCompletos = function( theIdTrabajo) {
                    var aMethodName = this._v_Type + " fprDo_Importacionesficherosascii_ImportacionFicherosASCIIDatosCompletos";
                    if( aMethodName){}/* CQT */


                    if( !theIdTrabajo) {
                        return this.fNewDeferredRejectPromise( "fprDo_Importacionesficherosascii_ImportacionFicheroASCIIDatosCompletos !theIdTrabajo");
                    }

                    var aDeferred = this.fNewDeferred();

                    var aThis = this;

                    /* CQT Dynamically defined at trabajos_svce_type by specified service of same name */
                    this.fTrabajosSvce()[ theS_TrabajosSvce.TRABAJOS_TRABAJODATOSCOMPLETOSCONBLOBS_NAME]( theIdTrabajo)
                        .then( function( theResponse) {

                            if( !theResponse) {
                                aThis.pDeferredResolve( aDeferred, theResponse);
                                return;
                            }

                            var anImportacion = aThis.fImportacionFicheroASCIIDesdeTrabajo( theResponse);
                            if( anImportacion){}/* CQT */

                            aThis.pDeferredResolve( aDeferred, anImportacion);


                        })
                        ['catch']( function( theError) {

                        aThis.pDeferredReject( aDeferred, theError);

                        throw theError;
                    });


                    return aDeferred.promise;
                };
                if( fprDo_Importacionesficherosascii_ImportacionFicheroASCIIDatosCompletos){}/* CQT */
                aPrototype.fprDo_Importacionesficherosascii_ImportacionFicheroASCIIDatosCompletos = fprDo_Importacionesficherosascii_ImportacionFicheroASCIIDatosCompletos;









                var fListaImportacionesFicheroASCIIDesdeListaTrabajos = function( theTrabajos) {
                    var aMethodName = this._v_Type + " fListaImportacionesFicheroASCIIDesdeListaTrabajos";
                    if( aMethodName){}/* CQT */


                    if( !theTrabajos) {
                        return null;
                    }

                    var aNumTrabajos = theTrabajos.length;
                    if( !aNumTrabajos) {
                        return null;
                    }


                    var someImportaciones = [ ];
                    for( var aTrabajoIdx=0; aTrabajoIdx < aNumTrabajos; aTrabajoIdx++) {
                        var aTrabajo = theTrabajos[ aTrabajoIdx];
                        if( aTrabajo) {
                            var anImportacion = this.fImportacionFicheroASCIIDesdeTrabajo( aTrabajo);
                            if( anImportacion) {
                                someImportaciones.push( anImportacion);
                            }
                        }
                    }

                    return someImportaciones;
                };
                if( fListaImportacionesFicheroASCIIDesdeListaTrabajos){}/* CQT */
                aPrototype.fListaImportacionesFicheroASCIIDesdeListaTrabajos = fListaImportacionesFicheroASCIIDesdeListaTrabajos;











                var fImportacionFicheroASCIIDesdeTrabajo = function( theTrabajo) {
                    var aMethodName = this._v_Type + " fImportacionFicheroASCIIDesdeTrabajo";
                    if( aMethodName){}/* CQT */

                    if( !theTrabajo) {
                        return null;
                    }

                    var anImportacionFicheroASCII = this.fNewVoidImportacionFicheroASCII();


                    this.pFieldsFromSourceIntoRecord( this.FIELDS_IMPORTACIONFICHEROASCII_DESDE_TRABAJO,  theTrabajo, anImportacionFicheroASCII);


                    var someEjecuciones = theTrabajo[ "vEjecuciones"];
                    if( someEjecuciones) {
                        var aNumEjecuciones = someEjecuciones.length;
                        if( aNumEjecuciones) {
                            var aEjecucion = someEjecuciones[ 0];
                            if( aEjecucion) {
                                this.pFieldsFromSourceIntoRecord( this.FIELDS_IMPORTACIONFICHEROASCII_DESDE_EJECUCION,  aEjecucion, anImportacionFicheroASCII);
                            }
                        }
                    }


                    var someProgresos = theTrabajo[ "vProgresos"];
                    if( someProgresos) {
                        var aNumProgresos = someProgresos.length;
                        if( aNumProgresos) {

                            var someReversedProgresos = someProgresos.reverse();
                            for( var aProgresoIdx=0; aProgresoIdx < aNumProgresos; aProgresoIdx++) {
                                var aProgreso = someReversedProgresos[ aProgresoIdx];
                                if( aProgreso) {
                                    this.pNonEmptyFieldsFromSourceIntoRecord( this.FIELDS_IMPORTACIONFICHEROASCII_DESDE_PROGRESO,  aProgreso, anImportacionFicheroASCII);
                                }
                            }
                        }
                    }

                    this.pParametrosFromSourceIntoRecord(     this.PARAMETROS_IMPORTACIONFICHEROASCII,     theTrabajo, anImportacionFicheroASCII);
                    this.pParakilometrosFromSourceIntoRecord( this.PARAKILOMETROS_IMPORTACIONFICHEROASCII, theTrabajo, anImportacionFicheroASCII);
                    this.pResultadosFromSourceIntoRecord(     this.RESULTADOS_IMPORTACIONFICHEROASCII,     theTrabajo, anImportacionFicheroASCII);
                    this.pResulkilotadosFromSourceIntoRecord( this.RESULKILOTADOS_IMPORTACIONFICHEROASCII, theTrabajo, anImportacionFicheroASCII);

                    var aLocalizador = theTrabajo[ "vLocalizador"];
                    if( aLocalizador) {

                        anImportacionFicheroASCII[ "vIfaTipoboletin"]  = aLocalizador[ "vLoKeystr1"];
                        if( anImportacionFicheroASCII[ "vIfaTipoboletin"]) {
                            anImportacionFicheroASCII[ "vIfaTipoboletin"] = anImportacionFicheroASCII[ "vIfaTipoboletin"].toUpperCase();
                        }

                        anImportacionFicheroASCII[ "vIfaProvincia"] = aLocalizador[ "vLoKeydec1"];
                        anImportacionFicheroASCII[ "vIfaAno"]       = aLocalizador[ "vLoKeydec2"];
                        anImportacionFicheroASCII[ "vIfaMes"]       = aLocalizador[ "vLoKeydec3"];
                    }

                    return anImportacionFicheroASCII;
                };
                if( fImportacionFicheroASCIIDesdeTrabajo){}/* CQT */
                aPrototype.fImportacionFicheroASCIIDesdeTrabajo = fImportacionFicheroASCIIDesdeTrabajo;








                var pFieldsFromSourceIntoRecord = function( theMemberSpecs, theSource, theRecord) {

                    if( !theSource) {
                        return;
                    }

                    if( !theMemberSpecs) {
                        return;
                    }

                    if( !theRecord) {
                        return;
                    }

                    var aNumSpecs = theMemberSpecs.length;
                    if( !aNumSpecs) {
                        return;
                    }

                    for( var aSpecIdx=0; aSpecIdx < aNumSpecs; aSpecIdx++) {
                        var aSpec = theMemberSpecs[ aSpecIdx];
                        if( aSpec) {

                            var aSpecName = aSpec[ "parmName"];
                            if( !aSpecName)  {
                                continue;
                            }

                            var aSpecSourceName = aSpec[ "sourceName"];
                            if( !aSpecSourceName) {
                                aSpecSourceName = aSpecName;
                            }


                            var aSourceValue = theSource[ aSpecSourceName];

                            var aValueToSet = this.fConvertedValue( aSpec, aSourceValue);
                            if( aValueToSet){}/* CQT */

                            theRecord[ aSpecName] = aValueToSet
                        }
                    }
                };
                if( pFieldsFromSourceIntoRecord){}/* CQT */
                aPrototype.pFieldsFromSourceIntoRecord = pFieldsFromSourceIntoRecord;







                var pNonEmptyFieldsFromSourceIntoRecord = function( theMemberSpecs, theSource, theRecord) {

                    if( !theSource) {
                        return;
                    }

                    if( !theMemberSpecs) {
                        return;
                    }

                    if( !theRecord) {
                        return;
                    }

                    var aNumSpecs = theMemberSpecs.length;
                    if( !aNumSpecs) {
                        return;
                    }

                    for( var aSpecIdx=0; aSpecIdx < aNumSpecs; aSpecIdx++) {
                        var aSpec = theMemberSpecs[ aSpecIdx];
                        if( aSpec) {

                            var aSpecName = aSpec[ "parmName"];
                            if( !aSpecName)  {
                                continue;
                            }

                            var aSpecSourceName = aSpec[ "sourceName"];
                            if( !aSpecSourceName) {
                                aSpecSourceName = aSpecName;
                            }

                            var aSourceValue = theSource[ aSpecSourceName];

                            if( typeof aSourceValue == "undefined") {
                                continue;
                            }

                            if( aSourceValue == null) {
                                continue;
                            }

                            if( typeof aSourceValue == "string") {
                                if( !aSourceValue.length) {
                                    continue;
                                }
                            }

                            if( typeof aSourceValue == "number") {
                                if( aSourceValue === 0) {
                                    continue;
                                }
                            }

                            var aValueToSet = this.fConvertedValue( aSpec, aSourceValue);
                            if( aValueToSet){}/* CQT */

                            theRecord[ aSpecName] = aValueToSet
                        }
                    }
                };
                if( pNonEmptyFieldsFromSourceIntoRecord){}/* CQT */
                aPrototype.pNonEmptyFieldsFromSourceIntoRecord = pNonEmptyFieldsFromSourceIntoRecord;








                var pParametrosFromSourceIntoRecord = function( theMemberSpecs, theSource, theRecord) {

                    if( !theSource) {
                        return;
                    }

                    if( !theMemberSpecs) {
                        return;
                    }

                    if( !theRecord) {
                        return;
                    }

                    var aNumSpecs = theMemberSpecs.length;
                    if( !aNumSpecs) {
                        return;
                    }

                    var someSources = theSource[ "vParametros"];
                    if( !someSources) {
                        return;
                    }
                    
                    var aNumSources = someSources.length;
                    if( !aNumSources) {
                        return;
                    }


                    var someSpecsBySourceName = { };
                    var someSpecSourceNames           = [ ];
                    
                    for( var aSpecIdx=0; aSpecIdx < aNumSpecs; aSpecIdx++) {
                        var aSpec = theMemberSpecs[ aSpecIdx];
                        if( aSpec) {

                            var aSpecName = aSpec[ "parmName"];
                            if( !aSpecName)  {
                                continue;
                            }

                            var aSpecSourceName = aSpec[ "sourceName"];
                            if( !aSpecSourceName) {
                                aSpecSourceName = aSpecName;
                            }

                            someSpecSourceNames.push( aSpecSourceName);

                            someSpecsBySourceName[ aSpecSourceName] = aSpec;
                        }
                    }

                    if( !someSpecSourceNames.length) {
                        return;
                    }


                    for( var aSourceIdx=0; aSourceIdx < aNumSources; aSourceIdx++) {
                        var aSource = someSources[ aSourceIdx];
                        if( aSource) {

                            var aSourceName = aSource[ "vPaNombreparametro"];
                            if( !aSourceName)  {
                                continue;
                            }

                            if( someSpecSourceNames.indexOf( aSourceName) < 0) {
                                continue;
                            }

                            var otherSpec = someSpecsBySourceName[ aSourceName];
                            if( !otherSpec)  {
                                continue;
                            }

                            var aParmName = otherSpec[ "parmName"];
                            if( !aParmName) {
                                continue;
                            }

                            var aValor = null;

                            var aTipoSource = aSource[ "vPaTipovalor"];
                            if( !aTipoSource) {
                                continue;
                            }

                            switch( aTipoSource) {

                                case "RAW":
                                    aValor = aSource[ "vPaParametro"];
                                    break;

                                case "ID":
                                    aValor = aSource[ "vPaParid"];
                                    break;

                                case "STR":
                                    aValor = aSource[ "vPaParstr"];

                                    break;

                                case "DEC":
                                    aValor = aSource[ "vPaPardec"];
                                    break;

                                case "INT":
                                    aValor = aSource[ "vPaPardec"];
                                    break;

                                case "BOO":
                                    aValor = aSource[ "vPaParboo"];
                                    break;

                                case "DAT":
                                    aValor = aSource[ "vPaPardatStr"];
                                    break;

                                default:

                            }

                            var aValueToSet = this.fConvertedValue( otherSpec, aValor);
                            if( aValueToSet){}/* CQT */

                            theRecord[ aParmName] = aValueToSet;
                        }
                    }
                };
                if( pParametrosFromSourceIntoRecord){}/* CQT */
                aPrototype.pParametrosFromSourceIntoRecord = pParametrosFromSourceIntoRecord;









                var pResultadosFromSourceIntoRecord = function( theMemberSpecs, theSource, theRecord) {

                    if( !theSource) {
                        return;
                    }

                    if( !theMemberSpecs) {
                        return;
                    }

                    if( !theRecord) {
                        return;
                    }

                    var aNumSpecs = theMemberSpecs.length;
                    if( !aNumSpecs) {
                        return;
                    }

                    var someSources = theSource[ "vResultados"];
                    if( !someSources) {
                        return;
                    }

                    var aNumSources = someSources.length;
                    if( !aNumSources) {
                        return;
                    }


                    var someSpecsBySourceName = { };
                    var someSpecSourceNames   = [ ];

                    for( var aSpecIdx=0; aSpecIdx < aNumSpecs; aSpecIdx++) {
                        var aSpec = theMemberSpecs[ aSpecIdx];
                        if( aSpec) {

                            var aSpecName = aSpec[ "parmName"];
                            if( !aSpecName)  {
                                continue;
                            }

                            var aSpecSourceName = aSpec[ "sourceName"];
                            if( !aSpecSourceName) {
                                aSpecSourceName = aSpecName;
                            }

                            someSpecSourceNames.push( aSpecSourceName);

                            someSpecsBySourceName[ aSpecSourceName] = aSpec;
                        }
                    }

                    if( !someSpecSourceNames.length) {
                        return;
                    }


                    for( var aSourceIdx=0; aSourceIdx < aNumSources; aSourceIdx++) {
                        var aSource = someSources[ aSourceIdx];
                        if( aSource) {

                            var aSourceName = aSource[ "vReNombreresultado"];
                            if( !aSourceName)  {
                                continue;
                            }

                            if( someSpecSourceNames.indexOf( aSourceName) < 0) {
                                continue;
                            }

                            var otherSpec = someSpecsBySourceName[ aSourceName];
                            if( !otherSpec)  {
                                continue;
                            }

                            var aParmName = otherSpec[ "parmName"];
                            if( !aParmName) {
                                continue;
                            }

                            var aValor = null;

                            var aTipoSource = aSource[ "vReTipovalor"];
                            if( !aTipoSource) {
                                continue;
                            }

                            switch( aTipoSource) {

                                case "RAW":
                                    aValor = aSource[ "vPaResultado"];
                                    break;

                                case "ID":
                                    aValor = aSource[ "vReResid"];
                                    break;

                                case "STR":
                                    aValor = aSource[ "vReResstr"];
                                    break;

                                case "DEC":
                                    aValor = aSource[ "vReResdec"];
                                    break;

                                case "INT":
                                    aValor = aSource[ "vReResdec"];
                                    break;

                                case "BOO":
                                    aValor = aSource[ "vReResboo"];
                                    break;

                                case "DAT":
                                    aValor = aSource[ "vReResdatStr"];
                                    break;

                                default:

                            }

                            var aValueToSet = this.fConvertedValue( otherSpec, aValor);
                            if( aValueToSet){}/* CQT */

                            theRecord[ aParmName] = aValueToSet;
                        }
                    }
                };
                if( pResultadosFromSourceIntoRecord){}/* CQT */
                aPrototype.pResultadosFromSourceIntoRecord = pResultadosFromSourceIntoRecord;









                var fConvertedValue = function( theSpec, theValue) {

                    if( !theSpec) {
                        return theValue;
                    }

                    if( !theValue) {
                        return theValue;
                    }


                    var aSpecConversion = theSpec[ "conversion"];

                    if( !aSpecConversion) {
                        return theValue;
                    }

                    var aValue = theValue;

                    switch( aSpecConversion) {

                        case "toUpperCase":
                            if( typeof aValue == "string") {
                                aValue = aValue.toUpperCase();
                            }
                            break;


                        case "toLowerCase":
                            if( typeof aValue == "string") {
                                aValue = aValue.toLowerCase();
                            }
                            break;

                        default:
                    }

                    return aValue;

                };
                if( fConvertedValue){}/* CQT */
                aPrototype.fConvertedValue = fConvertedValue;









                var pParakilometrosFromSourceIntoRecord = function( theMemberSpecs, theSource, theRecord) {

                    if( !theSource) {
                        return;
                    }

                    if( !theMemberSpecs) {
                        return;
                    }

                    if( !theRecord) {
                        return;
                    }

                    var aNumSpecs = theMemberSpecs.length;
                    if( !aNumSpecs) {
                        return;
                    }

                    var someSources = theSource[ "vParakilometros"];
                    if( !someSources) {
                        return;
                    }

                    var aNumSources = someSources.length;
                    if( !aNumSources) {
                        return;
                    }


                    var someSpecParmNamesBySourceName = { };
                    var someSpecSourceNames           = [ ];
                    var someSpecsBySourceName = { };

                    for( var aSpecIdx=0; aSpecIdx < aNumSpecs; aSpecIdx++) {
                        var aSpec = theMemberSpecs[ aSpecIdx];
                        if( aSpec) {

                            var aSpecName = aSpec[ "parmName"];
                            if( !aSpecName)  {
                                continue;
                            }

                            var aSpecSourceName = aSpec[ "sourceName"];
                            if( !aSpecSourceName) {
                                aSpecSourceName = aSpecName;
                            }

                            someSpecSourceNames.push( aSpecSourceName);

                            someSpecParmNamesBySourceName[ aSpecSourceName] = aSpecName;

                            someSpecsBySourceName[ aSpecSourceName] = aSpec;
                        }
                    }

                    if( !someSpecSourceNames.length) {
                        return;
                    }


                    for( var aSourceIdx=0; aSourceIdx < aNumSources; aSourceIdx++) {
                        var aSource = someSources[ aSourceIdx];
                        if( aSource) {

                            var aSourceName = aSource[ "vKmNombreparakilometro"];
                            if( !aSourceName)  {
                                continue;
                            }

                            if( someSpecSourceNames.indexOf( aSourceName) < 0) {
                                continue;
                            }

                            var aParmName = someSpecParmNamesBySourceName[ aSourceName];
                            if( !aParmName) {
                                continue;
                            }

                            var aLargoValor = aSource[ "vKmLargovalor"];
                            if( !aLargoValor) {
                                aLargoValor = 0;
                            }

                            var aLargoValorStr = "" + aLargoValor + " bytes";
                            if( aLargoValorStr){}/* CQT */

                            theRecord[ aParmName] = aLargoValorStr;
                        }
                    }
                };
                if( pParakilometrosFromSourceIntoRecord){}/* CQT */
                aPrototype.pParakilometrosFromSourceIntoRecord = pParakilometrosFromSourceIntoRecord;







                var pResulkilotadosFromSourceIntoRecord = function( theMemberSpecs, theSource, theRecord) {

                    if( !theSource) {
                        return;
                    }

                    if( !theMemberSpecs) {
                        return;
                    }

                    if( !theRecord) {
                        return;
                    }

                    var aNumSpecs = theMemberSpecs.length;
                    if( !aNumSpecs) {
                        return;
                    }

                    var someSources = theSource[ "vResulkilotados"];
                    if( !someSources) {
                        return;
                    }

                    var aNumSources = someSources.length;
                    if( !aNumSources) {
                        return;
                    }


                    var someSpecParmNamesBySourceName = { };
                    var someSpecSourceNames           = [ ];
                    var someSpecsBySourceName = { };

                    for( var aSpecIdx=0; aSpecIdx < aNumSpecs; aSpecIdx++) {
                        var aSpec = theMemberSpecs[ aSpecIdx];
                        if( aSpec) {

                            var aSpecName = aSpec[ "parmName"];
                            if( !aSpecName)  {
                                continue;
                            }

                            var aSpecSourceName = aSpec[ "sourceName"];
                            if( !aSpecSourceName) {
                                aSpecSourceName = aSpecName;
                            }

                            someSpecSourceNames.push( aSpecSourceName);

                            someSpecParmNamesBySourceName[ aSpecSourceName] = aSpecName;

                            someSpecsBySourceName[ aSpecSourceName] = aSpec;
                        }
                    }

                    if( !someSpecSourceNames.length) {
                        return;
                    }


                    for( var aSourceIdx=0; aSourceIdx < aNumSources; aSourceIdx++) {
                        var aSource = someSources[ aSourceIdx];
                        if( aSource) {

                            var aSourceName = aSource[ "vRkNombreresulkilotado"];
                            if( !aSourceName)  {
                                continue;
                            }

                            if( someSpecSourceNames.indexOf( aSourceName) < 0) {
                                continue;
                            }

                            var aParmName = someSpecParmNamesBySourceName[ aSourceName];
                            if( !aParmName) {
                                continue;
                            }

                            var aValor = aSource[ "vRkResulkilotado"];

                            var aSpec = someSpecsBySourceName[ aSourceName];
                            if( aSpec) {
                                var aSpecConversion = aSpec[ "conversion"];

                                switch( aSpecConversion) {

                                    case "Largovalor":

                                        var aLargoValor = aSource[ "vRkLargovalor"];
                                        if( !aLargoValor) {
                                            aLargoValor = 0;
                                        }
                                        aValor = "" + aLargoValor + " bytes";
                                        break;

                                    default:
                                }
                            }

                            theRecord[ aParmName] = aValor;
                        }
                    }
                };
                if( pResulkilotadosFromSourceIntoRecord){}/* CQT */
                aPrototype.pResulkilotadosFromSourceIntoRecord = pResulkilotadosFromSourceIntoRecord;








                var fNewVoidParakilometro = function() {

                    var aParakilometro = {
                        "vTipo":              "Parakilometro",
                        "vKmIdParakilomero":  null,
                        "vKmLargoLista":      null,
                        "vKmLargoValor":      null,
                        "vKmParakilometro":      null
                    };
                    if( aParakilometro){}/* CQT */

                    return aParakilometro;

                };
                if( fNewVoidParakilometro){}/* CQT */
                aPrototype.fNewVoidParakilometro = fNewVoidParakilometro;







                var fNewVoidResulkilotado = function() {

                    var aResulkilotado = {
                        "kind":       "Resulkilotado",
                        "id":         null,
                        "largoLista": null,
                        "largoValor": null
                    };
                    if( aResulkilotado){}/* CQT */

                    return aResulkilotado;
                };
                if( fNewVoidResulkilotado){}/* CQT */
                aPrototype.fNewVoidResulkilotado = fNewVoidResulkilotado;












                var fprDo_Importacionesficherosascii_CrearImportacionFicheroASCII_Wrapper = function( theFields) {
                    var aMethodName = "fprDo_Importacionesficherosascii_CrearImportacionFicheroASCII_Wrapper";

                    return this.fprDo_Importacionesficherosascii_CrearImportacionFicheroASCII( theFields);
                };
                if( fprDo_Importacionesficherosascii_CrearImportacionFicheroASCII_Wrapper){}/* CQT */
                aPrototype.fprDo_Importacionesficherosascii_CrearImportacionFicheroASCII_Wrapper = fprDo_Importacionesficherosascii_CrearImportacionFicheroASCII_Wrapper;






                var fprDo_Importacionesficherosascii_LanzarImportacionFicheroASCII_Wrapper = function( theFields) {
                    var aMethodName = "fprDo_Importacionesficherosascii_CrearImportacionFicheroASCII_Wrapper";

                    return this.fprDo_Importacionesficherosascii_LanzarImportacionFicheroASCII( theFields);
                };
                if( fprDo_Importacionesficherosascii_LanzarImportacionFicheroASCII_Wrapper){}/* CQT */
                aPrototype.fprDo_Importacionesficherosascii_LanzarImportacionFicheroASCII_Wrapper = fprDo_Importacionesficherosascii_LanzarImportacionFicheroASCII_Wrapper;









                return aPrototype;

            })();








            var ImportacionficherosasciiSvce_Constructor = function( theTitle, theIdentifier, theRecorder) {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_HitSpecifiedSvceType.HitSpecifiedSvce_Prototype;

                this._v_Prototype = null;
                this._v_Type      = null;
                this._v_Module    = null;

                this._pInit_ImportacionficherosasciiSvce( theTitle, theIdentifier, theRecorder);
            };
            ImportacionficherosasciiSvce_Constructor.prototype = aImportacionficherosasciiSvce_Prototype;





            var ImportacionficherosasciiSvce_SuperPrototypeConstructor = function() {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_HitSpecifiedSvceType.HitSpecifiedSvce_Prototype;

                this._v_Prototype = aImportacionficherosasciiSvce_Prototype;
                this._v_Type      = null;
                this._v_Module    = null;
            };
            ImportacionficherosasciiSvce_SuperPrototypeConstructor.prototype = aImportacionficherosasciiSvce_Prototype;



            var aModule = {
                "ImportacionficherosasciiSvce_Prototype": aImportacionficherosasciiSvce_Prototype,
                "ImportacionficherosasciiSvce_Constructor": ImportacionficherosasciiSvce_Constructor,
                "ImportacionficherosasciiSvce_SuperPrototypeConstructor": ImportacionficherosasciiSvce_SuperPrototypeConstructor
            };
            pgInitFromModuleConstants( aModule);
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;

            aImportacionficherosasciiSvce_Prototype._v_Module = aModule;




            return aModule;
        };







        var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        if( !anExistingModule) {

            var aModule = aMod_definer(
                theSS_Overrider,
                theSS_HitSpecifiedSvceType,
                theSS_HitServerSvceType,
                theSS_TrabajosSvce
            );
            anExistingModule = aModule;

            theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
        }



        return anExistingModule;


    }]);







