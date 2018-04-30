'use strict';

/*
 * eventos_ctrl_specs.js
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






angular.module("eventosTypes").factory("EventosCtrlSpecsTobefilled", [
    "TypesRegistrySvce",
    "OverriderSvce",
function( theSS_typesregistry,
          theSS_Overrider) {




        var ModuleName     = "eventos_ctrl_specs";
        var ModulePackages = "springnut/eventos";
        var ModuleFullName = ModulePackages + "/" + ModuleName;



        var aMod_definer = function( theS_Overrider) {


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


                theToInit.CTRLSPECS = {
                    "GRIDPARAMETERS": {

                        "ListaExcepciones": {
                            "name": "ListaExcepciones",
                            "gridLabel": "Excepciones",
                            "labels": [
                                "Id",
                                "Fecha",
                                "Fecha y hora",
                                "Tst",
                                "Class(full)",
                                "Class",
                                "Id Operador",
                                "Operador",
                                "Ip Operador",
                                "User-Agent",
                                "HTTP",
                                "Ruta Solicitada",
                                "Id Trabajo",
                                "Tipo Trabajo",
                                "Nivel causa",
                                "Mensaje",
                                "Mensaje localizado"
                            ],
                            "fields": [
                                "vIdExcepcion",
                                "vDateStr",
                                "vTimestampStr",
                                "vDePrueba",
                                "vClassName",
                                "vClassSimpleName",
                                "vIdOperador",
                                "vNombreOperador",
                                "vIpOperador",
                                "vUserAgent",
                                "vHttpMethod",
                                "vRutaSolicitada",
                                "vIdTrabajo",
                                "vTipoTrabajo",
                                "vNestingLevel",
                                "vMessage",
                                "vLocalizedMessage"
                            ],
                            "hiddenFields": [
                                "vIdExcepcion",
                                "vDateStr",
                                "vClassName",
                                "vIdOperador",
                                "vIpOperador",
                                "vUserAgent",
                                "vHttpMethod",
                                "vRutaSolicitada",
                                "vIdTrabajo",
                                "vNestingLevel",
                                "vLocalizedMessage"
                            ],
                            "dataTypes": [
                                "Int",
                                "String",
                                "String",
                                "String",
                                "String",
                                "String",
                                "Int",
                                "String",
                                "String",
                                "String",
                                "String",
                                "String",
                                "Int",
                                "String",
                                "Int",
                                "String",
                                "String"
                            ],
                            "gridClasses": null,
                            "classes": [
                                "cssSpringnut_Eventos_ListaExcepciones_IdExcepcion",
                                "cssSpringnut_Eventos_ListaExcepciones_DateStr",
                                "cssSpringnut_Eventos_ListaExcepciones_TimestampStr",
                                "cssSpringnut_Eventos_ListaExcepciones_DePrueba",
                                "cssSpringnut_Eventos_ListaExcepciones_ClassName",
                                "cssSpringnut_Eventos_ListaExcepciones_ClassSimpleName",
                                "cssSpringnut_Eventos_ListaExcepciones_IdOperador",
                                "cssSpringnut_Eventos_ListaExcepciones_NombreOperador",
                                "cssSpringnut_Eventos_ListaExcepciones_IpOperador",
                                "cssSpringnut_Eventos_ListaExcepciones_UserAgent",
                                "cssSpringnut_Eventos_ListaExcepciones_HttpMethod",
                                "cssSpringnut_Eventos_ListaExcepciones_RutaSolicitada",
                                "cssSpringnut_Eventos_ListaExcepciones_IdTrabajo",
                                "cssSpringnut_Eventos_ListaExcepciones_TipoTrabajo",
                                "cssSpringnut_Eventos_ListaExcepciones_NestingLevel",
                                "cssSpringnut_Eventos_ListaExcepciones_Message",
                                "cssSpringnut_Eventos_ListaExcepciones_LocalizedMessage"
                            ],
                            "retrievalTarget": null,
                            "retrieval": null,
                            "query": null,
                            "autoSelectIndex": null,
                            "keyField": "vIdExcepcion",
                            "masterType": null,
                            "masterLabels": null,
                            "editorName": "Excepcion",
                            "creatorName": null,
                            "noEdit": false,
                            "noDelete": true,
                            "noRefresh": true,
                            "pageMaxSize": 100
                        },
                        "ListaPilaDeExcepcion": {
                            "name": "ListaPilaDeExcepcion",
                            "gridLabel": "Pila ",
                            "labels": [
                                "Clase",
                                "Método",
                                "Fichero",
                                "Línea",
                                "Nativo"
                            ],
                            "fields": [
                                "vDeclaringClass",
                                "vMethodName",
                                "vFileName",
                                "vLineNumber",
                                "vIsNativeMethod"
                            ],
                            "hiddenFields": [
                                "vFileName",
                                "vLineNumber",
                                "vIsNativeMethod"
                            ],
                            "dataTypes": [
                                "String",
                                "String",
                                "String",
                                "Int",
                                "BoolYesNo"
                            ],
                            "gridClasses": null,
                            "classes": [
                                "cssSpringnut_Eventos_ListaPila_DeclaringClass",
                                "cssSpringnut_Eventos_ListaPila_MethodName",
                                "cssSpringnut_Eventos_ListaPila_FileName",
                                "cssSpringnut_Eventos_ListaPila_LineNumber",
                                "cssSpringnut_Eventos_ListaPila_IsNativeMethod"
                            ],
                            "retrievalTarget": null,
                            "retrieval": null,
                            "query": null,
                            "autoSelectIndex": null,
                            "keyField": "vDeclaringClass",
                            "masterType": "Excepción",
                            "masterLabels": [
                                "vIdExcepcion",
                                "vTimestampStr",
                                "vDePrueba",
                                "vClassSimpleName",
                                "vMessage"
                            ],
                            "editorName": "PilaDeExcepcion",
                            "creatorName": null,
                            "noEdit": false,
                            "noDelete": true,
                            "noRefresh": true,
                            "pageMaxSize": 100
                        },
                        "ListaCausasDeExcepcion": {
                            "name": "ListaCausasDeExcepcion",
                            "gridLabel": "Causas ",
                            "labels": [
                                "Nivel",
                                "Class(full)",
                                "Class",
                                "Mensaje",
                                "Mensaje localizado"
                            ],
                            "fields": [
                                "vNestingLevel",
                                "vClassName",
                                "vClassSimpleName",
                                "vMessage",
                                "vLocalizedMessage"
                            ],
                            "hiddenFields": [
                                "vIdExcepcion",
                                "vClassName",
                                "vLocalizedMessage"
                            ],
                            "dataTypes": [
                                "Int",
                                "String",
                                "String",
                                "String",
                                "String"
                            ],
                            "gridClasses": null,
                            "classes": [
                                "cssSpringnut_Eventos_ListaCausasExcepcion_NestingLevel",
                                "cssSpringnut_Eventos_ListaCausasExcepcion_ClassName",
                                "cssSpringnut_Eventos_ListaCausasExcepcion_ClassSimpleName",
                                "cssSpringnut_Eventos_ListaCausasExcepcion_Message",
                                "cssSpringnut_Eventos_ListaCausasExcepcion_LocalizedMessage"
                            ],
                            "retrievalTarget": null,
                            "retrieval": null,
                            "query": null,
                            "autoSelectIndex": null,
                            "keyField": "vNestingLevel",
                            "masterType": "Excepción",
                            "masterLabels": [
                                "vIdExcepcion",
                                "vTimestampStr",
                                "vDePrueba",
                                "vClassSimpleName",
                                "vMessage"
                            ],
                            "editorName": "CausaDeExcepcion",
                            "creatorName": null,
                            "noEdit": false,
                            "noDelete": true,
                            "noRefresh": true,
                            "pageMaxSize": 100
                        },
                        "ListaPilaDeCausa": {
                            "name": "ListaPilaDeCausa",
                            "gridLabel": "Pila ",
                            "labels": [
                                "Clase",
                                "Método",
                                "Fichero",
                                "Línea",
                                "Nativo"
                            ],
                            "fields": [
                                "vDeclaringClass",
                                "vMethodName",
                                "vFileName",
                                "vLineNumber",
                                "vIsNativeMethod"
                            ],
                            "hiddenFields": [
                                "vFileName",
                                "vLineNumber",
                                "vIsNativeMethod"
                            ],
                            "dataTypes": [
                                "String",
                                "String",
                                "String",
                                "Int",
                                "BoolYesNo"
                            ],
                            "gridClasses": null,
                            "classes": [
                                "cssSpringnut_Eventos_ListaPila_DeclaringClass",
                                "cssSpringnut_Eventos_ListaPila_MethodName",
                                "cssSpringnut_Eventos_ListaPila_FileName",
                                "cssSpringnut_Eventos_ListaPila_LineNumber",
                                "cssSpringnut_Eventos_ListaPila_IsNativeMethod"
                            ],
                            "retrievalTarget": null,
                            "retrieval": null,
                            "query": null,
                            "autoSelectIndex": null,
                            "keyField": "vDeclaringClass",
                            "masterType": "Causa",
                            "masterLabels": [
                                "vNestingLevel",
                                "vClassSimpleName",
                                "vMessage"
                            ],
                            "editorName": "PilaDeCausa",
                            "creatorName": null,
                            "noEdit": false,
                            "noDelete": true,
                            "noRefresh": true,
                            "pageMaxSize": 100
                        },




                        "ListaAccesosoperadores": {
                            "name": "ListaAccesosoperadores",
                            "gridLabel": "Accesos de Operadores",
                            "labels": [
                                "Id",
                                "Fecha",
                                "Fecha y hora",
                                "Id Operador",
                                "Operador",
                                "Ip Operador",
                                "Perfiles",
                                "User-Agent"
                            ],
                            "fields": [
                                "vIdAcceso",
                                "vFechaAccesoStr",
                                "vFechaHoraAccesoStr",
                                "vIdOperador",
                                "vNombreOperador",
                                "vIpOperador",
                                "vPerfilesOperador",
                                "vUserAgent"
                            ],
                            "hiddenFields": [
                                "vIdAcceso",
                                "vFechaAccesoStr",
                                "vIdOperador",
                                "vUserAgent"
                            ],
                            "dataTypes": [
                                "Int",
                                "String",
                                "String",
                                "Int",
                                "String",
                                "String",
                                "String",
                                "String",
                                "String"
                            ],
                            "gridClasses": null,
                            "classes": [
                                "cssSpringnut_Eventos_ListaAccesosoperadores_IdAcceso",
                                "cssSpringnut_Eventos_ListaAccesosoperadores_FechaStr",
                                "cssSpringnut_Eventos_ListaAccesosoperadores_FechaHoraStr",
                                "cssSpringnut_Eventos_ListaAccesosoperadores_IdOperador",
                                "cssSpringnut_Eventos_ListaAccesosoperadores_NombreOperador",
                                "cssSpringnut_Eventos_ListaAccesosoperadores_IpOperador",
                                "cssSpringnut_Eventos_ListaAccesosoperadores_PerfilesOperador",
                                "cssSpringnut_Eventos_ListaAccesosoperadores_UserAgent"
                            ],
                            "retrievalTarget": null,
                            "retrieval": null,
                            "query": null,
                            "autoSelectIndex": null,
                            "keyField": "vIdAcceso",
                            "masterType": null,
                            "masterLabels": null,
                            "editorName": "Accesooperador",
                            "creatorName": null,
                            "noEdit": false,
                            "noDelete": true,
                            "noRefresh": true,
                            "pageMaxSize": 100
                        },






                        "ListaAccesosfallidos": {
                            "name": "ListaAccesosfallidos",
                            "gridLabel": "Fallos de acceso",
                            "labels": [
                                "Id",
                                "Fecha",
                                "Fecha y hora",
                                "Id Operador",
                                "Operador",
                                "User-Agent",
                                "Ip Operador",
                                "Modo"
                            ],
                            "fields": [
                                "vIdFallo",
                                "vFechaFalloStr",
                                "vFechaHoraFalloStr",
                                "vIdOperador",
                                "vNombreOperador",
                                "vUserAgent",
                                "vIpOperador",
                                "vModoFallo"
                            ],
                            "hiddenFields": [
                                "vIdFallo",
                                "vFechaFalloStr",
                                "vIdOperador",
                                "vUserAgent"
                            ],
                            "dataTypes": [
                                "Int",
                                "String",
                                "String",
                                "Int",
                                "String",
                                "String",
                                "String",
                                "String"
                            ],
                            "gridClasses": null,
                            "classes": [
                                "cssSpringnut_Eventos_ListaAccesosfallidos_IdFallo",
                                "cssSpringnut_Eventos_ListaAccesosfallidos_FechaStr",
                                "cssSpringnut_Eventos_ListaAccesosfallidos_FechaHoraStr",
                                "cssSpringnut_Eventos_ListaAccesosfallidos_IdOperador",
                                "cssSpringnut_Eventos_ListaAccesosfallidos_NombreOperador",
                                "cssSpringnut_Eventos_ListaAccesosfallidos_IpOperador",
                                "cssSpringnut_Eventos_ListaAccesosfallidos_UserAgent",
                                "cssSpringnut_Eventos_ListaAccesosfallidos_ModoFallo"
                            ],
                            "retrievalTarget": null,
                            "retrieval": null,
                            "query": null,
                            "autoSelectIndex": null,
                            "keyField": "vIdFallo",
                            "masterType": null,
                            "masterLabels": null,
                            "editorName": "Accesofallido",
                            "creatorName": null,
                            "noEdit": false,
                            "noDelete": true,
                            "noRefresh": true,
                            "pageMaxSize": 100
                        },







                        "ListaLecturasboletines": {
                            "name": "ListaLecturasboletines",
                            "gridLabel": "Lecturas Boletines",
                            "labels": [
                                "Id",
                                "Fecha",
                                "Fecha y hora",
                                "Tipo Bol",
                                "Id Fichero",
                                "Ano",
                                "Mes",
                                "Prov",
                                "Boletín",
                                "Id CodBoletin",
                                "Id LitBoletin",
                                "Id Imagen",
                                "NBol",
                                "Identifica",
                                "Lee Imagen",
                                "De Prueba",
                                "HTTP",
                                "Ruta Solicitada",
                                "Ip Operador",
                                "User-Agent",
                                "Id Trabajo",
                                "Tipo Trabajo",
                                "Id Operador",
                                "Operador",
                                "Perfiles"

                            ],
                            "fields": [
                                "vIdLectura",
                                "vTimestampStr",
                                "vDateStr",
                                "vTipoBoletin",
                                "vIdFichero",
                                "vAnoFichero",
                                "vMesFichero",
                                "vCodigoProvinciaFichero",
                                "vIdBoletin",
                                "vIdCodBoletin",
                                "vIdLitBoletin",
                                "vIdImageBoletin",
                                "vNbol",
                                "vIdentifica",
                                "vLeeImagen",
                                "vDePrueba",
                                "vHttpMethod",
                                "vRutaSolicitada",
                                "vIpOperador",
                                "vUserAgent",
                                "vIdTrabajo",
                                "vTipoTrabajo",
                                "vIdOperador",
                                "vNombreOperador",
                                "vPerfilesOperador"
                            ],
                            "hiddenFields": [
                                "vDateStr",
                                "vIdFichero",
                                "vIdCodBoletin",
                                "vIdLitBoletin",
                                "vIdImageBoletin",
                                "vDePrueba",
                                "vHttpMethod",
                                "vRutaSolicitada",
                                "vIpOperador",
                                "vUserAgent",
                                "vIdTrabajo",
                                "vTipoTrabajo",
                                "vIdOperador",
                                "vPerfilesOperador"
                            ],
                            "dataTypes": [
                                "Int",
                                "String",
                                "String",
                                "String",
                                "Int",
                                "Int",
                                "Int",
                                "Int",
                                "Int",
                                "Int",
                                "Int",
                                "Int",
                                "String",
                                "Int",
                                "BoolYesNo",
                                "String",
                                "String",
                                "String",
                                "String",
                                "String",
                                "Int",
                                "String",
                                "Int",
                                "String",
                                "String"
                            ],
                            "gridClasses": null,
                            "classes": [
                                "cssSpringnut_Eventos_ListaLecturasboletines_IdLectura",
                                "cssSpringnut_Eventos_ListaLecturasboletines_TimestampStr",
                                "cssSpringnut_Eventos_ListaLecturasboletines_DateStr",
                                "cssSpringnut_Eventos_ListaLecturasboletines_TipoBoletin",
                                "cssSpringnut_Eventos_ListaLecturasboletines_IdFichero",
                                "cssSpringnut_Eventos_ListaLecturasboletines_AnoFichero",
                                "cssSpringnut_Eventos_ListaLecturasboletines_MesFichero",
                                "cssSpringnut_Eventos_ListaLecturasboletines_CodigoProvinciaFichero",
                                "cssSpringnut_Eventos_ListaLecturasboletines_IdBoletin",
                                "cssSpringnut_Eventos_ListaLecturasboletines_IdCodBoletin",
                                "cssSpringnut_Eventos_ListaLecturasboletines_IdLitBoletin",
                                "cssSpringnut_Eventos_ListaLecturasboletines_IdImageBoletin",
                                "cssSpringnut_Eventos_ListaLecturasboletines_Nbol",
                                "cssSpringnut_Eventos_ListaLecturasboletines_Identifica",
                                "cssSpringnut_Eventos_ListaLecturasboletines_LeeImagen",
                                "cssSpringnut_Eventos_ListaLecturasboletines_DePrueba",
                                "cssSpringnut_Eventos_ListaLecturasboletines_HttpMethod",
                                "cssSpringnut_Eventos_ListaLecturasboletines_RutaSolicitada",
                                "cssSpringnut_Eventos_ListaLecturasboletines_IpOperador",
                                "cssSpringnut_Eventos_ListaLecturasboletines_UserAgent",
                                "cssSpringnut_Eventos_ListaLecturasboletines_IdTrabajo",
                                "cssSpringnut_Eventos_ListaLecturasboletines_TipoTrabajo",
                                "cssSpringnut_Eventos_ListaLecturasboletines_IdOperador",
                                "cssSpringnut_Eventos_ListaLecturasboletines_NombreOperador",
                                "cssSpringnut_Eventos_ListaLecturasboletines_PerfilesOperador"
                            ],
                            "retrievalTarget": null,
                            "retrieval": null,
                            "query": null,
                            "autoSelectIndex": null,
                            "keyField": "vIdLectura",
                            "masterType": null,
                            "masterLabels": null,
                            "editorName": "Lecturaboletin",
                            "creatorName": null,
                            "noEdit": false,
                            "noDelete": true,
                            "noRefresh": true,
                            "pageMaxSize": 100
                        },



                        "ListaCambios": {
                            "name": "ListaCambios",
                            "gridLabel": "Cambios",
                            "labels": [
                                "Id",
                                "Fecha",
                                "FechaHora",
                                "Id Oper",
                                "Operador",
                                "Perfiles",
                                "Ip Operador",
                                "User-agent",
                                "Http",
                                "Ruta solicitada",
                                "Tipos Cambiados"
                            ],
                            "fields": [
                                "vIdCambio",
                                "vDateStr",
                                "vTimestampStr",
                                "vIdOperador",
                                "vNombreOperador",
                                "vPerfilesOperador",
                                "vIpOperador",
                                "vUserAgent",
                                "vHttpMethod",
                                "vRutaSolicitada",
                                "vInformeTipos"
                            ],
                            "hiddenFields": [
                                "vDateStr",
                                "vPerfilesOperador",
                                "vIpOperador",
                                "vUserAgent",
                                "vHttpMethod",
                                "vRutaSolicitada"
                            ],
                            "dataTypes": [
                                "Int",
                                "String",
                                "String",
                                "Int",
                                "String",
                                "String",
                                "String",
                                "String",
                                "String",
                                "String",
                                "Text"
                            ],
                            "gridClasses": null,
                            "classes": [
                                "cssSpringnut_Eventos_ListaCambios_IdCambio",
                                "cssSpringnut_Eventos_ListaCambios_DateStr",
                                "cssSpringnut_Eventos_ListaCambios_TimestampStr",
                                "cssSpringnut_Eventos_ListaCambios_IdOperador",
                                "cssSpringnut_Eventos_ListaCambios_NombreOperador",
                                "cssSpringnut_Eventos_ListaCambios_PerfilesOperador",
                                "cssSpringnut_Eventos_ListaCambios_IpOperador",
                                "cssSpringnut_Eventos_ListaCambios_UserAgent",
                                "cssSpringnut_Eventos_ListaCambios_HttpMethod",
                                "cssSpringnut_Eventos_ListaCambios_RutaSolicitada",
                                "cssSpringnut_Eventos_ListaCambios_TiposCambiados"
                            ],
                            "retrievalTarget": null,
                            "retrieval": null,
                            "query": null,
                            "autoSelectIndex": null,
                            "keyField": "vIdCambio",
                            "masterType": null,
                            "masterLabels": null,
                            "editorName": "Cambio",
                            "creatorName": null,
                            "noEdit": false,
                            "noDelete": true,
                            "noRefresh": true,
                            "pageMaxSize": 100
                        },


                        "ListaEntidadesDeCambio": {
                            "name": "ListaEntidadesDeCambio",
                            "gridLabel": "Entidades",
                            "labels": [
                                "IdCambio",
                                "Id",
                                "Fecha",
                                "Fecha y Hora",
                                "Modo",
                                "Tipo",
                                "Identidad",
                                "Claves",
                                "Campos"
                            ],
                            "fields": [
                                "vIdCambio",
                                "vId",
                                "vDateStr",
                                "vTimestampStr",
                                "vTipoRev",
                                "vTipoentidad",
                                "vIdentidad",
                                "vClaves",
                                "vInformeCampos"
                            ],
                            "hiddenFields": [
                                "vIdCambio",
                                "vDateStr",
                                "vInformeCampos"
                            ],
                            "dataTypes": [
                                "Int",
                                "Int",
                                "String",
                                "String",
                                "Int",
                                "String",
                                "Int",
                                "String",
                                "Text",
                                "Text"
                            ],
                            "gridClasses": null,
                            "classes": [
                                "cssSpringnut_Eventos_ListaEntidadesDeCambio_IdCambio",
                                "cssSpringnut_Eventos_ListaEntidadesDeCambio_Id",
                                "cssSpringnut_Eventos_ListaEntidadesDeCambio_DateStr",
                                "cssSpringnut_Eventos_ListaEntidadesDeCambio_TimestampStr",
                                "cssSpringnut_Eventos_ListaEntidadesDeCambio_TipoRev",
                                "cssSpringnut_Eventos_ListaEntidadesDeCambio_Tipoentidad",
                                "cssSpringnut_Eventos_ListaEntidadesDeCambio_Identidad",
                                "cssSpringnut_Eventos_ListaEntidadesDeCambio_Claves",
                                "cssSpringnut_Eventos_ListaEntidadesDeCambio_InformeCampos"
                            ],
                            "retrievalTarget": null,
                            "retrieval": null,
                            "query": null,
                            "autoSelectIndex": null,
                            "keyField": "vIdCambio",
                            "masterType": "Cambio",
                            "masterLabels": [
                                "vIdCambio",
                                "vTimestampStr",
                                "vNombreOperador",
                                "vInformeTipos"
                            ],
                            "editorName": "EntidadDeCambio",
                            "creatorName": null,
                            "noEdit": false,
                            "noDelete": true,
                            "noRefresh": true,
                            "pageMaxSize": 100
                        }

                    },














                    "EDITPARAMETERS": {



                        "Excepcion": {
                            "name": "Excepcion",
                            "editorLabel": "Excepción",
                            "editorClasses": null,
                            "autoEdit": null,
                            "masterLabels": [
                                "vIdExcepcion",
                                "vTimestampStr",
                                "vDePrueba",
                                "vClassSimpleName",
                                "vMessage"
                            ],
                            "creatorName": null,
                            "noEdit": false,
                            "noDelete": true,
                            "noRefresh": false,
                            "fields": [
                                {
                                    "name": "vIdExcepcion",
                                    "label": "Id",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "Int",
                                    "dataSize": 10,
                                    "labelCss": null,
                                    "valueCss": "NUMBER_INT_LONG",
                                    "inputCss": "NUMBER_INT_LONG",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vDateStr",
                                    "label": "Fecha",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 16,
                                    "labelCss": null,
                                    "valueCss": "STRING_MEDIUM",
                                    "inputCss": "STRING_MEDIUM",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vTimestampStr",
                                    "label": "Fecha y hora",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 65,
                                    "labelCss": null,
                                    "valueCss": "STRING_LONG",
                                    "inputCss": "STRING_LONG",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vDePrueba",
                                    "label": "Tst",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 65,
                                    "labelCss": null,
                                    "valueCss": "STRING_VERYLONG",
                                    "inputCss": "STRING_VERYLONG",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vInformeExcepcion",
                                    "label": "Informe",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "Text",
                                    "dataSize": 4000,
                                    "labelCss": null,
                                    "valueCss": "TEXT_LONG",
                                    "inputCss": "TEXT_LONG",
                                    "heightCss": "LONG"
                                },
                                {
                                    "name": "vClassSimpleName",
                                    "label": "Class",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 65,
                                    "labelCss": null,
                                    "valueCss": "STRING_VERYLONG",
                                    "inputCss": "STRING_VERYLONG",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vClassName",
                                    "label": "Class (full)",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 65,
                                    "labelCss": null,
                                    "valueCss": "STRING_VERYLONG",
                                    "inputCss": "STRING_VERYLONG",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vMessage",
                                    "label": "Mensaje",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 65,
                                    "labelCss": null,
                                    "valueCss": "STRING_VERYLONG",
                                    "inputCss": "STRING_VERYLONG",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vLocalizedMessage",
                                    "label": "Msg. localizado",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 65,
                                    "labelCss": null,
                                    "valueCss": "STRING_VERYLONG",
                                    "inputCss": "STRING_VERYLONG",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vIdOperador",
                                    "label": "Id Operador",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "Int",
                                    "dataSize": 10,
                                    "labelCss": null,
                                    "valueCss": "NUMBER_INT_LONG",
                                    "inputCss": "NUMBER_INT_LONG",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vNombreOperador",
                                    "label": "Operador",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 65,
                                    "labelCss": null,
                                    "valueCss": "STRING_VERYLONG",
                                    "inputCss": "STRING_VERYLONG",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vIpOperador",
                                    "label": "IP Operador",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 65,
                                    "labelCss": null,
                                    "valueCss": "STRING_LONG",
                                    "inputCss": "STRING_LONG",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vUserAgent",
                                    "label": "Navegador",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 65,
                                    "labelCss": null,
                                    "valueCss": "STRING_VERYLONG",
                                    "inputCss": "STRING_VERYLONG",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vHttpMethod",
                                    "label": "HTTP",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 65,
                                    "labelCss": null,
                                    "valueCss": "STRING_SHORT",
                                    "inputCss": "STRING_SHORT",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vRutaSolicitada",
                                    "label": "Ruta en URL",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 65,
                                    "labelCss": null,
                                    "valueCss": "STRING_VERYLONG",
                                    "inputCss": "STRING_VERYLONG",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vIdTrabajo",
                                    "label": "Id Trabajo",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "Int",
                                    "dataSize": 10,
                                    "labelCss": null,
                                    "valueCss": "NUMBER_INT_LONG",
                                    "inputCss": "NUMBER_INT_LONG",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vTipoTrabajo",
                                    "label": "Tipo Trabajo",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 48,
                                    "labelCss": null,
                                    "valueCss": "STRING_MEDIUM",
                                    "inputCss": "STRING_MEDIUM",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vNestingLevel",
                                    "label": "Nivel causa",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "Int",
                                    "dataSize": 10,
                                    "labelCss": null,
                                    "valueCss": "NUMBER_INT_SHORT",
                                    "inputCss": "NUMBER_INT_SHORT",
                                    "heightCss": "DEFAULT"
                                }
                            ]
                        },



                        "CausaDeExcepcion": {
                            "name": "CausaDeExcepcion",
                            "editorLabel": "Causa de Excepción",
                            "editorClasses": null,
                            "autoEdit": null,
                            "masterLabels": [
                                "vNestingLevel",
                                "vClassSimpleName",
                                "vMessage"
                            ],
                            "creatorName": null,
                            "noEdit": false,
                            "noDelete": true,
                            "noRefresh": true,
                            "fields": [
                                {
                                    "name": "vNestingLevel",
                                    "label": "Nivel causa",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "Int",
                                    "dataSize": 10,
                                    "labelCss": null,
                                    "valueCss": "NUMBER_INT_SHORT",
                                    "inputCss": "NUMBER_INT_SHORT",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vInformeExcepcion",
                                    "label": "Informe",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "Text",
                                    "dataSize": 4000,
                                    "labelCss": null,
                                    "valueCss": "TEXT_LONG",
                                    "inputCss": "TEXT_LONG",
                                    "heightCss": "LONG"
                                },
                                {
                                    "name": "vClassSimpleName",
                                    "label": "Class",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 65,
                                    "labelCss": null,
                                    "valueCss": "STRING_VERYLONG",
                                    "inputCss": "STRING_VERYLONG",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vClassName",
                                    "label": "Class (full)",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 65,
                                    "labelCss": null,
                                    "valueCss": "STRING_VERYLONG",
                                    "inputCss": "STRING_VERYLONG",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vMessage",
                                    "label": "Mensaje",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 65,
                                    "labelCss": null,
                                    "valueCss": "STRING_VERYLONG",
                                    "inputCss": "STRING_VERYLONG",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vLocalizedMessage",
                                    "label": "Msg. localizado",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 65,
                                    "labelCss": null,
                                    "valueCss": "STRING_VERYLONG",
                                    "inputCss": "STRING_VERYLONG",
                                    "heightCss": "DEFAULT"
                                }
                            ]
                        },
                        "PilaDeExcepcion": {
                            "name": "PilaDeExcepcion",
                            "editorLabel": "Traza en Pila",
                            "editorClasses": null,
                            "autoEdit": null,
                            "masterLabels": [
                                "vDeclaringClass",
                                "vMethodName"
                            ],
                            "creatorName": null,
                            "noEdit": true,
                            "noDelete": true,
                            "noRefresh": true,
                            "fields": [
                                {
                                    "name": "vDeclaringClass",
                                    "label": "Clase",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 65,
                                    "labelCss": null,
                                    "valueCss": "STRING_VERYLONG",
                                    "inputCss": "STRING_VERYLONG",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vMethodName",
                                    "label": "Método",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 65,
                                    "labelCss": null,
                                    "valueCss": "STRING_VERYLONG",
                                    "inputCss": "STRING_VERYLONG",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vFileName",
                                    "label": "Fichero",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 65,
                                    "labelCss": null,
                                    "valueCss": "STRING_VERYLONG",
                                    "inputCss": "STRING_VERYLONG",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vLineNumber",
                                    "label": "Línea",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "Int",
                                    "dataSize": 6,
                                    "labelCss": null,
                                    "valueCss": "NUMBER_INT_MEDIUM",
                                    "inputCss": "NUMBER_INT_MEDIUM",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vIsNativeMethod",
                                    "label": "Nativo",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "BoolYesNo",
                                    "dataSize": 6,
                                    "labelCss": null,
                                    "valueCss": "BOOLEAN_CHECK",
                                    "inputCss": "BOOLEAN_CHECK",
                                    "heightCss": "DEFAULT"
                                }
                            ]
                        },
                        "PilaDeCausa": {
                            "name": "PilaDeCausa",
                            "editorLabel": "Traza en Pila de Causa",
                            "editorClasses": null,
                            "autoEdit": null,
                            "masterLabels": [
                                "vDeclaringClass",
                                "vMethodName"
                            ],
                            "creatorName": null,
                            "noEdit": true,
                            "noDelete": true,
                            "noRefresh": true,
                            "fields": [
                                {
                                    "name": "vDeclaringClass",
                                    "label": "Clase",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 65,
                                    "labelCss": null,
                                    "valueCss": "STRING_VERYLONG",
                                    "inputCss": "STRING_VERYLONG",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vMethodName",
                                    "label": "Método",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 65,
                                    "labelCss": null,
                                    "valueCss": "STRING_VERYLONG",
                                    "inputCss": "STRING_VERYLONG",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vFileName",
                                    "label": "Fichero",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 65,
                                    "labelCss": null,
                                    "valueCss": "STRING_VERYLONG",
                                    "inputCss": "STRING_VERYLONG",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vLineNumber",
                                    "label": "Línea",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "Int",
                                    "dataSize": 6,
                                    "labelCss": null,
                                    "valueCss": "NUMBER_INT_MEDIUM",
                                    "inputCss": "NUMBER_INT_MEDIUM",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vIsNativeMethod",
                                    "label": "Nativo",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "BoolYesNo",
                                    "dataSize": 6,
                                    "labelCss": null,
                                    "valueCss": "BOOLEAN_CHECK",
                                    "inputCss": "BOOLEAN_CHECK",
                                    "heightCss": "DEFAULT"
                                }
                            ]
                        },








                        "Accesooperador": {
                            "name": "Accesooperador",
                            "editorLabel": "Acceso de Operador",
                            "editorClasses": null,
                            "autoEdit": null,
                            "masterLabels": [
                                "vFechaHoraAccesoStr",
                                "vNombreOperador",
                                "vPerfilesOperador"
                            ],
                            "creatorName": null,
                            "noEdit": true,
                            "noDelete": true,
                            "noRefresh": true,
                            "fields": [
                                {
                                    "name": "vIdAcceso",
                                    "label": "Id",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "Int",
                                    "dataSize": 10,
                                    "labelCss": null,
                                    "valueCss": "NUMBER_INT_LONG",
                                    "inputCss": "NUMBER_INT_LONG",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vFechaAccesoStr",
                                    "label": "Fecha",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 16,
                                    "labelCss": null,
                                    "valueCss": "STRING_MEDIUM",
                                    "inputCss": "STRING_MEDIUM",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vFechaHoraAccesoStr",
                                    "label": "Fecha y hora",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 65,
                                    "labelCss": null,
                                    "valueCss": "STRING_LONG",
                                    "inputCss": "STRING_LONG",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vIdOperador",
                                    "label": "Id Operador",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "Int",
                                    "dataSize": 10,
                                    "labelCss": null,
                                    "valueCss": "NUMBER_INT_LONG",
                                    "inputCss": "NUMBER_INT_LONG",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vNombreOperador",
                                    "label": "Operador",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 65,
                                    "labelCss": null,
                                    "valueCss": "STRING_VERYLONG",
                                    "inputCss": "STRING_VERYLONG",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vPerfilesOperador",
                                    "label": "Perfiles",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 65,
                                    "labelCss": null,
                                    "valueCss": "STRING_VERYLONG",
                                    "inputCss": "STRING_VERYLONG",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vIpOperador",
                                    "label": "IP Operador",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 65,
                                    "labelCss": null,
                                    "valueCss": "STRING_LONG",
                                    "inputCss": "STRING_LONG",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vUserAgent",
                                    "label": "Navegador",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 65,
                                    "labelCss": null,
                                    "valueCss": "STRING_VERYLONG",
                                    "inputCss": "STRING_VERYLONG",
                                    "heightCss": "DEFAULT"
                                }
                            ]
                        },






                        "Accesofallido": {
                            "name": "Accesofallido",
                            "editorLabel": "Fallo de acceso",
                            "editorClasses": null,
                            "autoEdit": null,
                            "masterLabels": [
                                "vFechaHoraFalloStr",
                                "vModoFallo",
                                "vNombreOperador"
                            ],
                            "creatorName": null,
                            "noEdit": true,
                            "noDelete": true,
                            "noRefresh": true,
                            "fields": [
                                {
                                    "name": "vIdFallo",
                                    "label": "Id",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "Int",
                                    "dataSize": 10,
                                    "labelCss": null,
                                    "valueCss": "NUMBER_INT_LONG",
                                    "inputCss": "NUMBER_INT_LONG",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vFechaFalloStr",
                                    "label": "Fecha",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 16,
                                    "labelCss": null,
                                    "valueCss": "STRING_MEDIUM",
                                    "inputCss": "STRING_MEDIUM",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vFechaHoraFalloStr",
                                    "label": "Fecha y hora",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 65,
                                    "labelCss": null,
                                    "valueCss": "STRING_LONG",
                                    "inputCss": "STRING_LONG",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vModoFallo",
                                    "label": "Modo Fallo",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 65,
                                    "labelCss": null,
                                    "valueCss": "STRING_VERYLONG",
                                    "inputCss": "STRING_VERYLONG",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vIdOperador",
                                    "label": "Id Operador",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "Int",
                                    "dataSize": 10,
                                    "labelCss": null,
                                    "valueCss": "NUMBER_INT_LONG",
                                    "inputCss": "NUMBER_INT_LONG",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vNombreOperador",
                                    "label": "Operador",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 65,
                                    "labelCss": null,
                                    "valueCss": "STRING_VERYLONG",
                                    "inputCss": "STRING_VERYLONG",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vIpOperador",
                                    "label": "IP Operador",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 65,
                                    "labelCss": null,
                                    "valueCss": "STRING_LONG",
                                    "inputCss": "STRING_LONG",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vUserAgent",
                                    "label": "Navegador",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 65,
                                    "labelCss": null,
                                    "valueCss": "STRING_VERYLONG",
                                    "inputCss": "STRING_VERYLONG",
                                    "heightCss": "DEFAULT"
                                }
                            ]
                        },








                        "Lecturaboletin": {
                            "name": "Lecturaboletin",
                            "editorLabel": "Lectura Boletín",
                            "editorClasses": null,
                            "autoEdit": null,
                            "masterLabels": [
                                "vIdLectura",
                                "vTimestampStr",
                                "vDePrueba",
                                "vTipoBoletin",
                                "vIdBoletin",
                                "vNbol",
                                "vIdentifica"
                            ],
                            "creatorName": null,
                            "noEdit": true,
                            "noDelete": true,
                            "noRefresh": true,
                            "fields": [
                                {
                                    "name": "vIdLectura",
                                    "label": "Id",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "Int",
                                    "dataSize": 10,
                                    "labelCss": null,
                                    "valueCss": "NUMBER_INT_LONG",
                                    "inputCss": "NUMBER_INT_LONG",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vDateStr",
                                    "label": "Fecha",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 65,
                                    "labelCss": null,
                                    "valueCss": "STRING_MEDIUM",
                                    "inputCss": "STRING_MEDIUM",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vTimestampStr",
                                    "label": "Fecha y hora",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 65,
                                    "labelCss": null,
                                    "valueCss": "STRING_LONG",
                                    "inputCss": "STRING_LONG",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vIdOperador",
                                    "label": "Id Operador",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "Int",
                                    "dataSize": 10,
                                    "labelCss": null,
                                    "valueCss": "NUMBER_INT_LONG",
                                    "inputCss": "NUMBER_INT_LONG",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vNombreOperador",
                                    "label": "Operador",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 65,
                                    "labelCss": null,
                                    "valueCss": "STRING_VERYLONG",
                                    "inputCss": "STRING_VERYLONG",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vPerfilesOperador",
                                    "label": "Perfiles",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 65,
                                    "labelCss": null,
                                    "valueCss": "STRING_VERYLONG",
                                    "inputCss": "STRING_VERYLONG",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vTipoBoletin",
                                    "label": "Tipo Bol",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 16,
                                    "labelCss": null,
                                    "valueCss": "STRING_MEDIUM",
                                    "inputCss": "STRING_MEDIUM",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vAnoFichero",
                                    "label": "Año",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "Int",
                                    "dataSize": 4,
                                    "labelCss": null,
                                    "valueCss": "NUMBER_INT_SHORT",
                                    "inputCss": "NUMBER_INT_SHORT",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vMesFichero",
                                    "label": "Mes",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "Int",
                                    "dataSize": 4,
                                    "labelCss": null,
                                    "valueCss": "NUMBER_INT_SHORT",
                                    "inputCss": "NUMBER_INT_SHORT",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vCodigoProvinciaFichero",
                                    "label": "Provincia",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "Int",
                                    "dataSize": 4,
                                    "labelCss": null,
                                    "valueCss": "NUMBER_INT_SHORT",
                                    "inputCss": "NUMBER_INT_SHORT",
                                    "heightCss": "DEFAULT"
                                },

                                {
                                    "name": "vIdBoletin",
                                    "label": "Id Bol",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "Int",
                                    "dataSize": 10,
                                    "labelCss": null,
                                    "valueCss": "NUMBER_INT_LONG",
                                    "inputCss": "NUMBER_INT_LONG",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vIdCodBoletin",
                                    "label": "Id CodBol",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "Int",
                                    "dataSize": 10,
                                    "labelCss": null,
                                    "valueCss": "NUMBER_INT_LONG",
                                    "inputCss": "NUMBER_INT_LONG",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vIdLitBoletin",
                                    "label": "Id LitBol",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "Int",
                                    "dataSize": 10,
                                    "labelCss": null,
                                    "valueCss": "NUMBER_INT_LONG",
                                    "inputCss": "NUMBER_INT_LONG",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vIdImageBoletin",
                                    "label": "Id Image",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "Int",
                                    "dataSize": 10,
                                    "labelCss": null,
                                    "valueCss": "NUMBER_INT_LONG",
                                    "inputCss": "NUMBER_INT_LONG",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vNbol",
                                    "label": "NBOL",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 10,
                                    "labelCss": null,
                                    "valueCss": "STRING_MEDIUM",
                                    "inputCss": "STRING_MEDIUM",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vIdentifica",
                                    "label": "Identifica",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "Int",
                                    "dataSize": 10,
                                    "labelCss": null,
                                    "valueCss": "NUMBER_INT_LONG",
                                    "inputCss": "NUMBER_INT_LONG",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "VLeeImagen",
                                    "label": "Lee Imagen",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "BoolYesNo",
                                    "dataSize": 10,
                                    "labelCss": null,
                                    "valueCss": "BOOLEAN_CHECK",
                                    "inputCss": "BOOLEAN_CHECK",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vDePrueba",
                                    "label": "Tst",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 65,
                                    "labelCss": null,
                                    "valueCss": "STRING_VERYLONG",
                                    "inputCss": "STRING_VERYLONG",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vIpOperador",
                                    "label": "IP Operador",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 65,
                                    "labelCss": null,
                                    "valueCss": "STRING_LONG",
                                    "inputCss": "STRING_LONG",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vUserAgent",
                                    "label": "Navegador",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 65,
                                    "labelCss": null,
                                    "valueCss": "STRING_VERYLONG",
                                    "inputCss": "STRING_VERYLONG",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vHttpMethod",
                                    "label": "HTTP",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 65,
                                    "labelCss": null,
                                    "valueCss": "STRING_SHORT",
                                    "inputCss": "STRING_SHORT",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vRutaSolicitada",
                                    "label": "Ruta en URL",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 65,
                                    "labelCss": null,
                                    "valueCss": "STRING_VERYLONG",
                                    "inputCss": "STRING_VERYLONG",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vIdTrabajo",
                                    "label": "Id Trabajo",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "Int",
                                    "dataSize": 10,
                                    "labelCss": null,
                                    "valueCss": "NUMBER_INT_LONG",
                                    "inputCss": "NUMBER_INT_LONG",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vTipoTrabajo",
                                    "label": "Tipo Trabajo",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 48,
                                    "labelCss": null,
                                    "valueCss": "STRING_MEDIUM",
                                    "inputCss": "STRING_MEDIUM",
                                    "heightCss": "DEFAULT"
                                }
                            ]
                        },








                        "Cambio": {
                            "name": "Cambio",
                            "editorLabel": "Cambio",
                            "editorClasses": null,
                            "autoEdit": null,
                            "masterLabels": [
                                "vIdCambio",
                                "vTimestampStr",
                                "vNombreOperador"
                            ],
                            "creatorName": null,
                            "noEdit": false,
                            "noDelete": true,
                            "noRefresh": false,
                            "fields": [
                                {
                                    "name": "vIdCambio",
                                    "label": "Id",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "Int",
                                    "dataSize": 10,
                                    "labelCss": null,
                                    "valueCss": "NUMBER_INT_LONG",
                                    "inputCss": "NUMBER_INT_LONG",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vDateStr",
                                    "label": "Fecha",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 16,
                                    "labelCss": null,
                                    "valueCss": "STRING_MEDIUM",
                                    "inputCss": "STRING_MEDIUM",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vTimestampStr",
                                    "label": "Fecha y hora",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 65,
                                    "labelCss": null,
                                    "valueCss": "STRING_LONG",
                                    "inputCss": "STRING_LONG",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vIdOperador",
                                    "label": "Id Operador",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "Int",
                                    "dataSize": 10,
                                    "labelCss": null,
                                    "valueCss": "NUMBER_INT_LONG",
                                    "inputCss": "NUMBER_INT_LONG",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vNombreOperador",
                                    "label": "Operador",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 65,
                                    "labelCss": null,
                                    "valueCss": "STRING_VERYLONG",
                                    "inputCss": "STRING_VERYLONG",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vPerfilesOperador",
                                    "label": "Perfiles",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 65,
                                    "labelCss": null,
                                    "valueCss": "STRING_VERYLONG",
                                    "inputCss": "STRING_VERYLONG",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vIpOperador",
                                    "label": "IP Operador",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 65,
                                    "labelCss": null,
                                    "valueCss": "STRING_LONG",
                                    "inputCss": "STRING_LONG",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vUserAgent",
                                    "label": "Navegador",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 65,
                                    "labelCss": null,
                                    "valueCss": "STRING_VERYLONG",
                                    "inputCss": "STRING_VERYLONG",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vHttpMethod",
                                    "label": "Http",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 65,
                                    "labelCss": null,
                                    "valueCss": "STRING_SHORT",
                                    "inputCss": "STRING_SHORT",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vRutaSolicitada",
                                    "label": "Ruta Solicitada",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 65,
                                    "labelCss": null,
                                    "valueCss": "STRING_VERYLONG",
                                    "inputCss": "STRING_VERYLONG",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vInformeTipos",
                                    "label": "Tipos Cambiados",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "Text",
                                    "dataSize": 4000,
                                    "labelCss": null,
                                    "valueCss": "TEXT_LONG",
                                    "inputCss": "TEXT_LONG",
                                    "heightCss": "LONG"
                                }

                            ]
                        },


                        "EntidadDeCambio": {
                            "name": "EntidadDeCambio",
                            "editorLabel": "Entidad",
                            "editorClasses": null,
                            "autoEdit": null,
                            "masterLabels": [
                                "vId",
                                "vTimestampStr",
                                "vTipoRev",
                                "vTipoentidad",
                                "vIdentidad",
                                "vClaves"
                            ],
                            "creatorName": null,
                            "noEdit": false,
                            "noDelete": true,
                            "noRefresh": true,
                            "fields": [
                                {
                                    "name": "vIdCambio",
                                    "label": "Id Cambio",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "Int",
                                    "dataSize": 10,
                                    "labelCss": null,
                                    "valueCss": "NUMBER_INT_LONG",
                                    "inputCss": "NUMBER_INT_LONG",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vId",
                                    "label": "Id",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "Int",
                                    "dataSize": 10,
                                    "labelCss": null,
                                    "valueCss": "NUMBER_INT_LONG",
                                    "inputCss": "NUMBER_INT_LONG",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vDateStr",
                                    "label": "Fecha",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 16,
                                    "labelCss": null,
                                    "valueCss": "STRING_MEDIUM",
                                    "inputCss": "STRING_MEDIUM",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vTimestampStr",
                                    "label": "Fecha y hora",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 65,
                                    "labelCss": null,
                                    "valueCss": "STRING_LONG",
                                    "inputCss": "STRING_LONG",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vTipoRev",
                                    "label": "Modo",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "Int",
                                    "dataSize": 3,
                                    "labelCss": null,
                                    "valueCss": "NUMBER_INT_SHORT",
                                    "inputCss": "NUMBER_INT_SHORT",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vTipoentidad",
                                    "label": "Tipo",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 65,
                                    "labelCss": null,
                                    "valueCss": "STRING_VERYLONG",
                                    "inputCss": "STRING_VERYLONG",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vIdentidad",
                                    "label": "Identidad",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "Int",
                                    "dataSize": 3,
                                    "labelCss": null,
                                    "valueCss": "NUMBER_INT_LONG",
                                    "inputCss": "NUMBER_INT_LONG",
                                    "heightCss": "DEFAULT"
                                },
                                {
                                    "name": "vClaves",
                                    "label": "Claves",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "Text",
                                    "dataSize": 4000,
                                    "labelCss": null,
                                    "valueCss": "TEXT_LONG",
                                    "inputCss": "TEXT_LONG",
                                    "heightCss": "LONG"
                                },
                                {
                                    "name": "vInformeCampos",
                                    "label": "Campos Cambiados",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "Text",
                                    "dataSize": 4000,
                                    "labelCss": null,
                                    "valueCss": "TEXT_LONG",
                                    "inputCss": "TEXT_LONG",
                                    "heightCss": "LONG"
                                }

                            ]
                        },






















                        "FechasListaAccesosoperadores": {
                            "name": "FechasListaAccesosoperadores",
                            "editorLabel": "Fechas de Accesos de Operadores",
                            "editorClasses": null,
                            "autoEdit": null,
                            "masterLabels": null,
                            "creatorName": null,
                            "noEdit": false,
                            "noDelete": true,
                            "noRefresh": false,
                            "initiallyArgumenting": true,
                            "anyButtonLabel": "Recientes",
                            "fields": [
                                {
                                    "name": "theDesdeFecha",
                                    "label": "Desde",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": false,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 16,
                                    "defaultValue": null,
                                    "labelCss": null,
                                    "valueCss": "NUMBER_INT_LONG",
                                    "inputCss": "NUMBER_INT_LONG",
                                    "heightCss": "DEFAULT",
                                    "inHeader":  true,
                                    "changeParm": "theDesdeFecha",
                                    "parmAlways": true
                                },
                                {
                                    "name": "theHastaFecha",
                                    "label": "Hasta",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": false,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 16,
                                    "defaultValue": null,
                                    "labelCss": null,
                                    "valueCss": "NUMBER_INT_LONG",
                                    "inputCss": "NUMBER_INT_LONG",
                                    "heightCss": "DEFAULT",
                                    "inHeader":  true,
                                    "changeParm": "theHastaFecha",
                                    "parmAlways": true
                                }
                            ]
                        },


                        "FechasListaAccesosfallidos": {
                            "name": "FechasListaAccesosfallidos",
                            "editorLabel": "Fechas de Accesos Fallidos",
                            "editorClasses": null,
                            "autoEdit": null,
                            "masterLabels": null,
                            "creatorName": null,
                            "noEdit": false,
                            "noDelete": true,
                            "noRefresh": false,
                            "initiallyArgumenting": true,
                            "anyButtonLabel": "Recientes",
                            "fields": [
                                {
                                    "name": "theDesdeFecha",
                                    "label": "Desde",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": false,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 16,
                                    "defaultValue": null,
                                    "labelCss": null,
                                    "valueCss": "NUMBER_INT_LONG",
                                    "inputCss": "NUMBER_INT_LONG",
                                    "heightCss": "DEFAULT",
                                    "inHeader":  true,
                                    "changeParm": "theDesdeFecha",
                                    "parmAlways": true
                                },
                                {
                                    "name": "theHastaFecha",
                                    "label": "Hasta",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": false,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 16,
                                    "defaultValue": null,
                                    "labelCss": null,
                                    "valueCss": "NUMBER_INT_LONG",
                                    "inputCss": "NUMBER_INT_LONG",
                                    "heightCss": "DEFAULT",
                                    "inHeader":  true,
                                    "changeParm": "theHastaFecha",
                                    "parmAlways": true
                                }
                            ]
                        },


                        "FechasListaLecturasboletines": {
                            "name": "FechasListaLecturasboletines",
                            "editorLabel": "Fechas de Lecturas de Boletines",
                            "editorClasses": null,
                            "autoEdit": null,
                            "masterLabels": null,
                            "creatorName": null,
                            "noEdit": false,
                            "noDelete": true,
                            "noRefresh": false,
                            "initiallyArgumenting": true,
                            "anyButtonLabel": "Recientes",
                            "fields": [
                                {
                                    "name": "theDesdeFecha",
                                    "label": "Desde",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": false,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 16,
                                    "defaultValue": null,
                                    "labelCss": null,
                                    "valueCss": "NUMBER_INT_LONG",
                                    "inputCss": "NUMBER_INT_LONG",
                                    "heightCss": "DEFAULT",
                                    "inHeader":  true,
                                    "changeParm": "theDesdeFecha",
                                    "parmAlways": true
                                },
                                {
                                    "name": "theHastaFecha",
                                    "label": "Hasta",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": false,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 16,
                                    "defaultValue": null,
                                    "labelCss": null,
                                    "valueCss": "NUMBER_INT_LONG",
                                    "inputCss": "NUMBER_INT_LONG",
                                    "heightCss": "DEFAULT",
                                    "inHeader":  true,
                                    "changeParm": "theHastaFecha",
                                    "parmAlways": true
                                }
                            ]
                        },



                        "FechasListaExcepciones": {
                            "name": "FechasListaExcepciones",
                            "editorLabel": "Fechas de Excepciones",
                            "editorClasses": null,
                            "autoEdit": null,
                            "masterLabels": null,
                            "creatorName": null,
                            "noEdit": false,
                            "noDelete": true,
                            "noRefresh": false,
                            "initiallyArgumenting": true,
                            "anyButtonLabel": "Recientes",
                            "fields": [
                                {
                                    "name": "theDesdeFecha",
                                    "label": "Desde",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": false,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 16,
                                    "defaultValue": null,
                                    "labelCss": null,
                                    "valueCss": "NUMBER_INT_LONG",
                                    "inputCss": "NUMBER_INT_LONG",
                                    "heightCss": "DEFAULT",
                                    "inHeader":  true,
                                    "changeParm": "theDesdeFecha",
                                    "parmAlways": true
                                },
                                {
                                    "name": "theHastaFecha",
                                    "label": "Hasta",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": false,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 16,
                                    "defaultValue": null,
                                    "labelCss": null,
                                    "valueCss": "NUMBER_INT_LONG",
                                    "inputCss": "NUMBER_INT_LONG",
                                    "heightCss": "DEFAULT",
                                    "inHeader":  true,
                                    "changeParm": "theHastaFecha",
                                    "parmAlways": true
                                }
                            ]
                        },





                        "FechasListaCambios": {
                            "name": "FechasListaCambios",
                            "editorLabel": "Fechas de Cambios",
                            "editorClasses": null,
                            "autoEdit": null,
                            "masterLabels": null,
                            "creatorName": null,
                            "noEdit": false,
                            "noDelete": true,
                            "noRefresh": false,
                            "initiallyArgumenting": true,
                            "allButtonLabel": null,
                            "anyButtonLabel": "Recientes",
                            "fields": [
                                {
                                    "name": "theDesdeFecha",
                                    "label": "Desde",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": false,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 16,
                                    "defaultValue": null,
                                    "labelCss": null,
                                    "valueCss": "STRING_SHORT",
                                    "inputCss": "STRING_SHORT",
                                    "heightCss": "DEFAULT",
                                    "inHeader":  true,
                                    "changeParm": "theDesdeFecha",
                                    "parmAlways": true
                                },
                                {
                                    "name": "theHastaFecha",
                                    "label": "Hasta",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": false,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 16,
                                    "defaultValue": null,
                                    "labelCss": null,
                                    "valueCss": "STRING_SHORT",
                                    "inputCss": "STRING_SHORT",
                                    "heightCss": "DEFAULT",
                                    "inHeader":  true,
                                    "changeParm": "theHastaFecha",
                                    "parmAlways": true
                                }
                            ]
                        }










                    },
                    "CREATEPARAMETERS": {
                    },
                    "WIRES": [

                        {
                            "name": "UpdateListaExcepcionesOnFechasListaExcepcionesChange",
                            "kind": "ARGUMENTS2GRID",
                            "from": "FechasListaExcepciones",
                            "to": "ListaExcepciones",
                            "doTarget": "fEventosSvce",
                            "do": "fprDo_Excepciones_ListaExcepcionesEntreFechas_Wrapper",
                            "with": null,
                            "query": null,
                            "reverseDo": null
                        },

                        {
                            "name": "UpdateExcepcionEditorOnListaExcepcionesSelectionChange",
                            "kind": "GRID2EDITOR",
                            "from": "ListaExcepciones",
                            "to": "Excepcion",
                            "doTarget": "fEventosSvce",
                            "do":       "fprDo_Excepciones_ExcepcionDatosCompletos",
                            "with":     "vIdExcepcion",
                            "query": null,
                            "reverseDo": null
                        },


                        {
                            "name": "UpdateListaCausasDeExcepcionOnListaExcepcionesSelectionChange",
                            "kind": "GRID2SLAVEGRID",
                            "from": "ListaExcepciones",
                            "to": "ListaCausasDeExcepcion",
                            "doTarget": "fEventosSvce",
                            "do": "fprDo_Excepciones_ListaCausasDeExcepcion_Wrapper",
                            "with": "vIdExcepcion",
                            "query": null,
                            "reverseDo": null
                        },
                        {
                            "name": "UpdateCausaDeExcepcionEditorOnListaCausasDeExcepcionSelectionChange",
                            "kind": "GRID2EDITOR",
                            "from": "ListaCausasDeExcepcion",
                            "to": "CausaDeExcepcion"
                        },

                        {
                            "name": "UpdateListaPilaDeExcepcionOnListaExcepcionesSelectionChange",
                            "kind": "GRID2SLAVEGRID",
                            "from": "ListaExcepciones",
                            "to": "ListaPilaDeExcepcion",
                            "doTarget": "fEventosSvce",
                            "do": "fprDo_Excepciones_ListaPilaDeExcepcion_Wrapper",
                            "with": "vIdExcepcion",
                            "query": null,
                            "reverseDo": null
                        },
                        {
                            "name": "UpdatePilaDeExcepcionEditorOnListaPilaDeExcepcionSelectionChange",
                            "kind": "GRID2EDITOR",
                            "from": "ListaPilaDeExcepcion",
                            "to": "PilaDeExcepcion"
                        },


                        {
                            "name": "UpdateListaPilaDeCausaOnListaCausasDeExcepcionSelectionChange",
                            "kind": "GRID2SLAVEGRID",
                            "from": "ListaCausasDeExcepcion",
                            "to": "ListaPilaDeCausa",
                            "with": "vStackTraceElements"
                        },
                        {
                            "name": "UpdatePilaDeCausaEditorOnListaPilaDeCausaSelectionChange",
                            "kind": "GRID2EDITOR",
                            "from": "ListaPilaDeCausa",
                            "to": "PilaDeCausa"
                        },








                        {
                            "name": "UpdateListaAccesosoperadoresOnFechasListaAccesosoperadoresChange",
                            "kind": "ARGUMENTS2GRID",
                            "from": "FechasListaAccesosoperadores",
                            "to": "ListaAccesosoperadores",
                            "doTarget": "fEventosSvce",
                            "do": "fprDo_Accesosoperadores_ListaAccesosoperadoresEntreFechas_Wrapper",
                            "with": null,
                            "query": null,
                            "reverseDo": null
                        },

                        {
                            "name": "UpdateAccesooperadorEditorOnListaAccesosoperadoresSelectionChange",
                            "kind": "GRID2EDITOR",
                            "from": "ListaAccesosoperadores",
                            "to": "Accesooperador"
                        },





                        {
                            "name": "UpdateListaAccesosfallidosOnFechasListaAccesosfallidosChange",
                            "kind": "ARGUMENTS2GRID",
                            "from": "FechasListaAccesosfallidos",
                            "to": "ListaAccesosfallidos",
                            "doTarget": "fEventosSvce",
                            "do": "fprDo_Accesosfallidos_ListaAccesosfallidosEntreFechas_Wrapper",
                            "with": null,
                            "query": null,
                            "reverseDo": null
                        },

                        {
                            "name": "UpdateAccesofallidoEditorOnListaAccesosfallidosSelectionChange",
                            "kind": "GRID2EDITOR",
                            "from": "ListaAccesosfallidos",
                            "to": "Accesofallido"
                        },



                        {
                            "name": "UpdateListaLecturasboletinesOnFechasListaLecturasboletinesChange",
                            "kind": "ARGUMENTS2GRID",
                            "from": "FechasListaLecturasboletines",
                            "to": "ListaLecturasboletines",
                            "doTarget": "fEventosSvce",
                            "do": "fprDo_Lecturasboletines_ListaLecturasboletinesEntreFechas_Wrapper",
                            "with": null,
                            "query": null,
                            "reverseDo": null
                        },

                        {
                            "name": "UpdateLecturaboletineEditorOnListaLecturasboletinesSelectionChange",
                            "kind": "GRID2EDITOR",
                            "from": "ListaLecturasboletines",
                            "to": "Lecturaboletin"
                        },






                        {
                            "name": "UpdateListaCambiosOnFechasListaCambiosChange",
                            "kind": "ARGUMENTS2GRID",
                            "from": "FechasListaCambios",
                            "to": "ListaCambios",
                            "doTarget": "fEventosSvce",
                            "do": "fprDo_Cambios_ListaCambiosEntreFechasConTipos_Wrapper",
                            "with": null,
                            "query": null,
                            "reverseDo": null

                        },

                        {
                            "name": "UpdateCambioEditorOnListaCambiosSelectionChange",
                            "kind": "GRID2EDITOR",
                            "from": "ListaCambios",
                            "to": "Cambio",
                            "doTarget": "fEventosSvce",
                            "do":       "fprDo_Cambios_CambioDatosCompletos",
                            "with":     "vIdCambio",
                            "query": null
                        },



                        {
                            "name": "UpdateListaEntidadesDeCambioOnListaCambiosSelectionChange",
                            "kind": "GRID2SLAVEGRID",
                            "from": "ListaCambios",
                            "to": "ListaEntidadesDeCambio",
                            "doTarget": "fEventosSvce",
                            "do": "fprDo_Cambios_ListaEntidadesDeCambio_Wrapper",
                            "with": "vIdCambio",
                            "query": null,
                            "reverseDo": null
                        },
                        {
                            "name": "UpdateEntidadDeCambioEditorOnListaEntidadesDeCambioSelectionChange",
                            "kind": "GRID2EDITOR",
                            "from": "ListaEntidadesDeCambio",
                            "to": "EntidadDeCambio"
                        }


                    ],
                    "GRIDNAMES_INITIALLOAD": [],
                    "EDITORNAMES_INITIALLOAD": [],
                    "CREATORNAMES_INITIALINCREATION": [],
                    "TOPTABSBAR_ENTRIES": [
                        {
                            "label": "Accesos de Operadores",
                            "value": "ListaAccesosoperadores",
                            "selectorGridName": null,
                            "argumentsName": "FechasListaAccesosoperadores"
                        },
                        {
                            "label": "Accesos Fallidos",
                            "value": "ListaAccesosfallidos",
                            "selectorGridName": null,
                            "argumentsName": "FechasListaAccesosfallidos"
                        },
                        {
                            "label": "Lecturas Boletines",
                            "value": "ListaLecturasboletines",
                            "selectorGridName": null,
                            "argumentsName": "FechasListaLecturasboletines"
                        },
                        {
                            "label": "Excepciones",
                            "value": "ListaExcepciones",
                            "selectorGridName": null,
                            "argumentsName": "FechasListaExcepciones"
                        },
                        {
                            "label": "Pila",
                            "value": "ListaPilaDeExcepcion",
                            "selectorGridName": null
                        },
                        {
                            "label": "Causas",
                            "value": "ListaCausasDeExcepcion",
                            "selectorGridName": null
                        },
                        {
                            "label": "Pila de Causa",
                            "value": "ListaPilaDeCausa",
                            "selectorGridName": null
                        },
                        {
                            "label": "Cambios",
                            "value": "ListaCambios",
                            "selectorGridName": null,
                            "argumentsName": "FechasListaCambios"
                        },
                        {
                            "label": "Entidades",
                            "value": "ListaEntidadesDeCambio",
                            "selectorGridName": null
                        }
                        /* ,
                        {

                            "label": "Mensajes",
                            "value": "ListaMensajes",
                            "selectorGridName": null
                        },

                        */
                    ],
                    "TOPTABSBAR_INITIALLYSELECTEDTAB": "ListaAccesosoperadores",
                    "TOPTABSBAR_TABSFIXEDINITIAL": [ ]
                };


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




            var aModule = { };
            pgInitFromModuleConstants( aModule);
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;

            aModule.pgInitFromModuleConstants  = pgInitFromModuleConstants;



            return aModule;
        };







        var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        if( !anExistingModule) {

            var aModule = aMod_definer(
                theSS_Overrider
            );
            anExistingModule = aModule;

            theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
        }






        return anExistingModule;

    }]);







