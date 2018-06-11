'use strict';

/*
 * ejemplos_ctrl_specs.js
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






angular.module("ejemplosTypes").factory("EjemplosCtrlSpecsTobefilled", [
    "TypesRegistrySvce",
    "OverriderSvce",
function( theSS_typesregistry,
          theSS_Overrider) {




        var ModuleName     = "ejemplos_ctrl_specs";
        var ModulePackages = "springnut/ejemplos";
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

                        "ListaAuxauditables": {
                            "name": "ListaAuxauditables",
                            "gridLabel": "Auxauditables",
                            "labels": [
                                "Id",
                                "Ultima Fecha",
                                "Ultima FechaHora",
                                "Clave",
                                "Número",
                                "Si/No",
                                "Fecha",
                                "Fecha y Hora",
                                "Cadena",
                                "Texto"
                            ],
                            "fields": [
                                "vIdAux",
                                "vUltDateStr",
                                "vUltTimestampStr",
                                "vAuxKey",
                                "vAuxNum",
                                "vAuxBoo",
                                "vAuxDateStr",
                                "vAuxTimestampStr",
                                "vAuxStr",
                                "vAuxTxt"
                            ],
                            "hiddenFields": [
                                "vUltDateStr",
                                "vAuxDateStr",
                                "vAuxTxt"
                            ],
                            "dataTypes": [
                                "Int",
                                "String",
                                "String",
                                "String",
                                "Int",
                                "BoolYesNo",
                                "String",
                                "String",
                                "String",
                                "Text"
                            ],
                            "gridClasses": null,
                            "classes": [
                                "cssSpringnut_Ejemplos_ListaAuxauditables_IdAux",
                                "cssSpringnut_Ejemplos_ListaAuxauditables_UltDateStr",
                                "cssSpringnut_Ejemplos_ListaAuxauditables_UltTimestampStr",
                                "cssSpringnut_Ejemplos_ListaAuxauditables_AuxKey",
                                "cssSpringnut_Ejemplos_ListaAuxauditables_AuxNum",
                                "cssSpringnut_Ejemplos_ListaAuxauditables_AuxBoo",
                                "cssSpringnut_Ejemplos_ListaAuxauditables_AuxDateStr",
                                "cssSpringnut_Ejemplos_ListaAuxauditables_AuxTimestampStr",
                                "cssSpringnut_Ejemplos_ListaAuxauditables_AuxStr",
                                "cssSpringnut_Ejemplos_ListaAuxauditables_AuxTxt"
                            ],
                            "retrievalTarget": null,
                            "retrieval": null,
                            "query": null,
                            "autoSelectIndex": null,
                            "keyField": "vIdAux",
                            "masterType": null,
                            "masterLabels": null,
                            "editorName": "Auxauditable",
                            "creatorName": "CrearAuxauditable",
                            "noEdit": false,
                            "noDelete": false,
                            "noRefresh": true,
                            "delete":       "fprDo_Ejemplos_EliminarAuxauditable_Wrapper",
                            "deleteWith":   "vIdAux",
                            "deleteParm":   "theIdAuxauditable",
                            "deleteSucessIfNotExistsParm": "theExitoSiNoExiste",
                            "createRoles":  [ "DEMO", "INSTALADOR", "AVANZADO", "ADMINISTRADOR", "CODIFICADOR", "GRABADOR"],
                            "deleteRoles":  [ "DEMO", "INSTALADOR", "AVANZADO", "ADMINISTRADOR", "CODIFICADOR", "GRABADOR"]
                        },


                        "ListaAuxdetallesDeAuxauditable": {
                            "name": "ListaAuxdetallesDeAuxauditable",
                            "gridLabel": "Auxauditables",
                            "labels": [
                                "^Id",
                                "Id",
                                "Ultima Fecha",
                                "Ultima FechaHora",
                                "Clave",
                                "Número",
                                "Si/No",
                                "Fecha",
                                "Fecha y Hora",
                                "Cadena",
                                "Texto"
                            ],
                            "fields": [
                                "vIdAux",
                                "vIdAuxdet",
                                "vUltDateStr",
                                "vUltTimestampStr",
                                "vAuxKey",
                                "vAuxNum",
                                "vAuxBoo",
                                "vAuxDateStr",
                                "vAuxTimestampStr",
                                "vAuxStr",
                                "vAuxTxt"
                            ],
                            "hiddenFields": [
                                "vUltDateStr",
                                "vAuxDateStr",
                                "vAuxTxt"
                            ],
                            "dataTypes": [
                                "Int",
                                "Int",
                                "String",
                                "String",
                                "String",
                                "Int",
                                "BoolYesNo",
                                "String",
                                "String",
                                "String",
                                "Text"
                            ],
                            "gridClasses": null,
                            "classes": [
                                "cssSpringnut_Ejemplos_ListaAuxdetalles_IdAux",
                                "cssSpringnut_Ejemplos_ListaAuxdetalles_IdAuxdet",
                                "cssSpringnut_Ejemplos_ListaAuxdetalles_UltDateStr",
                                "cssSpringnut_Ejemplos_ListaAuxdetalles_UltTimestampStr",
                                "cssSpringnut_Ejemplos_ListaAuxdetalles_AuxKey",
                                "cssSpringnut_Ejemplos_ListaAuxdetalles_AuxNum",
                                "cssSpringnut_Ejemplos_ListaAuxdetalles_AuxBoo",
                                "cssSpringnut_Ejemplos_ListaAuxdetalles_AuxDateStr",
                                "cssSpringnut_Ejemplos_ListaAuxdetalles_AuxTimestampStr",
                                "cssSpringnut_Ejemplos_ListaAuxdetalles_AuxStr",
                                "cssSpringnut_Ejemplos_ListaAuxdetalles_AuxTxt"
                            ],
                            "retrievalTarget": null,
                            "retrieval": null,
                            "query": null,
                            "autoSelectIndex": null,
                            "keyField": "vIdAuxdet",
                            "masterType": "Auxauditable",
                            "masterLabels": [
                                "vIdAux",
                                "vAuxKey"
                            ],
                            "editorName": "AuxdetalleDeAuxauditable",
                            "creatorName": "CrearAuxdetalleDeAuxauditable",
                            "noEdit": false,
                            "noDelete": false,
                            "noRefresh": false,
                            "delete":       "fprDo_Ejemplos_EliminarAuxdetalleDeAuxauditable_Wrapper",
                            "deleteWith":   "vIdAuxdet",
                            "deleteParm":   "theIdAuxdetalle",
                            "deleteSucessIfNotExistsParm": "theExitoSiNoExiste",
                            "createRoles":  [ "DEMO", "INSTALADOR", "AVANZADO", "ADMINISTRADOR", "CODIFICADOR", "GRABADOR"],
                            "deleteRoles":  [ "DEMO", "INSTALADOR", "AVANZADO", "ADMINISTRADOR", "CODIFICADOR", "GRABADOR"]
                        }



                    },














                    "EDITPARAMETERS": {

                        "Auxauditable": {
                            "name": "Auxauditable",
                            "editorLabel": "Auxauditable",
                            "editorClasses": null,
                            "autoEdit": null,
                            "masterLabels": [
                                "vIdAux",
                                "vAuxKey"
                            ],
                            "creatorName": "CrearAuxauditable",
                            "noEdit": false,
                            "noDelete": false,
                            "noRefresh": false,
                            "fields": [
                                {
                                    "name": "vIdAux",
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
                                    "heightCss": "DEFAULT",
                                    "changeParm": "theIdAuxauditable",
                                    "parmAlways": true
                                },
                                {
                                    "name": "vUltDateStr",
                                    "label": "Última Fecha",
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
                                    "name": "vUltTimestampStr",
                                    "label": "Última FechaHora",
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
                                    "name": "vAuxKey",
                                    "label": "Clave",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": false,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 16,
                                    "labelCss": null,
                                    "valueCss": "STRING_VERYLONG",
                                    "inputCss": "STRING_VERYLONG",
                                    "heightCss": "DEFAULT",
                                    "changeFlag": "theAuxKey_cambiar",
                                    "changeParm": "theAuxKey",
                                    "parmAlways": false
                                },
                                {
                                    "name": "vAuxNum",
                                    "label": "Número",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": false,
                                    "occult": null,
                                    "dataType": "Int",
                                    "dataSize": 10,
                                    "labelCss": null,
                                    "valueCss": "NUMBER_INT_LONG",
                                    "inputCss": "NUMBER_INT_LONG",
                                    "heightCss": "DEFAULT",
                                    "changeFlag": "theAuxNum_cambiar",
                                    "changeParm": "theAuxNum",
                                    "parmAlways": false
                                },
                                {
                                    "name": "vAuxBoo",
                                    "label": "Si/No",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": false,
                                    "occult": null,
                                    "dataType": "BoolYesNo",
                                    "dataSize": 10,
                                    "labelCss": null,
                                    "valueCss": "BOOLEAN_CHECK",
                                    "inputCss": "BOOLEAN_CHECK",
                                    "heightCss": "DEFAULT",
                                    "changeFlag": "theAuxBoo_cambiar",
                                    "changeParm": "theAuxBoo",
                                    "parmAlways": false
                                },
                                {
                                    "name": "vAuxDateStr",
                                    "label": "Fecha",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": false,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 16,
                                    "labelCss": null,
                                    "valueCss": "STRING_MEDIUM",
                                    "inputCss": "STRING_MEDIUM",
                                    "heightCss": "DEFAULT",
                                    "changeFlag": "theAuxFecha_cambiar",
                                    "changeParm": "theAuxFechaStr",
                                    "parmAlways": false
                                },
                                {
                                    "name": "vAuxTimestampStr",
                                    "label": "Fecha y hora",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": false,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 65,
                                    "labelCss": null,
                                    "valueCss": "STRING_LONG",
                                    "inputCss": "STRING_LONG",
                                    "heightCss": "DEFAULT",
                                    "changeFlag": "theAuxFechaHora_cambiar",
                                    "changeParm": "theAuxFechaHoraStr",
                                    "parmAlways": false
                                },
                                {
                                    "name": "vAuxStr",
                                    "label": "Cadena",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": false,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 65,
                                    "labelCss": null,
                                    "valueCss": "STRING_VERYLONG",
                                    "inputCss": "STRING_VERYLONG",
                                    "heightCss": "DEFAULT",
                                    "changeFlag": "theAuxStr_cambiar",
                                    "changeParm": "theAuxStr",
                                    "parmAlways": false
                                },
                                {
                                    "name": "vAuxTxt",
                                    "label": "Texto",
                                    "minMult": 0,
                                    "maxMult": 1,
                                    "readOnly": false,
                                    "occult": null,
                                    "dataType": "Text",
                                    "dataSize": 4000,
                                    "labelCss": null,
                                    "valueCss": "TEXT_LONG",
                                    "inputCss": "TEXT_LONG",
                                    "heightCss": "LONG",
                                    "changeFlag": "theAuxTxt_cambiar",
                                    "changeParm": "theAuxTxt",
                                    "parmAlways": false
                                }
                            ]
                        },





                        "AuxdetalleDeAuxauditable": {
                            "name": "AuxdetalleDeAuxauditable",
                            "editorLabel": "Auxdetalle",
                            "editorClasses": null,
                            "autoEdit": null,
                            "masterLabels": [
                                "vIdAux",
                                "vIdAuxdet",
                                "vAuxKey"
                            ],
                            "creatorName": "CrearAuxdetalleDeAuxauditable",
                            "noEdit": false,
                            "noDelete": false,
                            "noRefresh": true,
                            "fields": [
                                {
                                    "name": "vIdAux",
                                    "label": "IdMaestro",
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
                                    "name": "vIdAuxdet",
                                    "label": "IdDetalle",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": true,
                                    "occult": null,
                                    "dataType": "Int",
                                    "dataSize": 10,
                                    "labelCss": null,
                                    "valueCss": "NUMBER_INT_LONG",
                                    "inputCss": "NUMBER_INT_LONG",
                                    "heightCss": "DEFAULT",
                                    "changeParm": "theIdAuxdetalle",
                                    "parmAlways": true
                                },
                                {
                                    "name": "vUltDateStr",
                                    "label": "Última Fecha",
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
                                    "name": "vUltTimestampStr",
                                    "label": "Última FechaHora",
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
                                    "name": "vAuxKey",
                                    "label": "Clave",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": false,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 16,
                                    "labelCss": null,
                                    "valueCss": "STRING_VERYLONG",
                                    "inputCss": "STRING_VERYLONG",
                                    "heightCss": "DEFAULT",
                                    "changeFlag": "theAuxKey_cambiar",
                                    "changeParm": "theAuxKey",
                                    "parmAlways": false
                                },
                                {
                                    "name": "vAuxNum",
                                    "label": "Número",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": false,
                                    "occult": null,
                                    "dataType": "Int",
                                    "dataSize": 10,
                                    "labelCss": null,
                                    "valueCss": "NUMBER_INT_LONG",
                                    "inputCss": "NUMBER_INT_LONG",
                                    "heightCss": "DEFAULT",
                                    "changeFlag": "theAuxNum_cambiar",
                                    "changeParm": "theAuxNum",
                                    "parmAlways": false
                                },
                                {
                                    "name": "vAuxBoo",
                                    "label": "Si/No",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": false,
                                    "occult": null,
                                    "dataType": "BoolYesNo",
                                    "dataSize": 10,
                                    "labelCss": null,
                                    "valueCss": "BOOLEAN_CHECK",
                                    "inputCss": "BOOLEAN_CHECK",
                                    "heightCss": "DEFAULT",
                                    "changeFlag": "theAuxBoo_cambiar",
                                    "changeParm": "theAuxBoo",
                                    "parmAlways": false
                                },
                                {
                                    "name": "vAuxDateStr",
                                    "label": "Fecha",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": false,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 16,
                                    "labelCss": null,
                                    "valueCss": "STRING_MEDIUM",
                                    "inputCss": "STRING_MEDIUM",
                                    "heightCss": "DEFAULT",
                                    "changeFlag": "theAuxFecha_cambiar",
                                    "changeParm": "theAuxFechaStr",
                                    "parmAlways": false
                                },
                                {
                                    "name": "vAuxTimestampStr",
                                    "label": "Fecha y hora",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": false,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 65,
                                    "labelCss": null,
                                    "valueCss": "STRING_LONG",
                                    "inputCss": "STRING_LONG",
                                    "heightCss": "DEFAULT",
                                    "changeFlag": "theAuxFechaHora_cambiar",
                                    "changeParm": "theAuxFechaHoraStr",
                                    "parmAlways": false
                                },
                                {
                                    "name": "vAuxStr",
                                    "label": "Cadena",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": false,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 16,
                                    "labelCss": null,
                                    "valueCss": "STRING_VERYLONG",
                                    "inputCss": "STRING_VERYLONG",
                                    "heightCss": "DEFAULT",
                                    "changeFlag": "theAuxStr_cambiar",
                                    "changeParm": "theAuxStr",
                                    "parmAlways": false
                                },
                                {
                                    "name": "vAuxTxt",
                                    "label": "Texto",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": false,
                                    "occult": null,
                                    "dataType": "Text",
                                    "dataSize": 4000,
                                    "labelCss": null,
                                    "valueCss": "TEXT_LONG",
                                    "inputCss": "TEXT_LONG",
                                    "heightCss": "LONG",
                                    "changeFlag": "theAuxTxt_cambiar",
                                    "changeParm": "theAuxTxt",
                                    "parmAlways": false
                                }

                            ]
                        },








                        "FechasListaAuxauditables": {
                            "name": "FechasListaAuxauditables",
                            "editorLabel": "Fechas de Auxauditables",
                            "editorClasses": null,
                            "autoEdit": null,
                            "masterLabels": null,
                            "creatorName": null,
                            "noEdit": false,
                            "noDelete": true,
                            "noRefresh": false,
                            "initiallyArgumenting": true,
                            "allButtonLabel": "Todas",
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
                        },



                        "FechasListaAuxdetalles": {
                            "name": "FechasListaAuxdetalles",
                            "editorLabel": "Fechas de Auxdetalles",
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
                        }


                    },
                    "CREATEPARAMETERS": {


                        "CrearAuxauditable": {
                            "name": "CrearAuxauditable",
                            "creatorLabel": "CrearAuxauditable",
                            "creatorClasses": null,
                            "masterLabels": [
                                "vIdAux",
                                "vAuxKey"
                            ],
                            "fields": [

                                {
                                    "name": "vAuxKey",
                                    "label": "Clave",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": false,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 16,
                                    "labelCss": null,
                                    "valueCss": "STRING_VERYLONG",
                                    "inputCss": "STRING_VERYLONG",
                                    "heightCss": "DEFAULT",
                                    "changeParm": "theAuxKey",
                                    "parmAlways": true
                                },
                                {
                                    "name": "vAuxNum",
                                    "label": "Número",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": false,
                                    "occult": null,
                                    "dataType": "Int",
                                    "dataSize": 10,
                                    "labelCss": null,
                                    "valueCss": "NUMBER_INT_LONG",
                                    "inputCss": "NUMBER_INT_LONG",
                                    "heightCss": "DEFAULT",
                                    "changeParm": "theAuxNum",
                                    "parmAlways": false
                                },
                                {
                                    "name": "vAuxBoo",
                                    "label": "Si/No",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": false,
                                    "occult": null,
                                    "dataType": "BoolYesNo",
                                    "dataSize": 10,
                                    "labelCss": null,
                                    "valueCss": "BOOLEAN_CHECK",
                                    "inputCss": "BOOLEAN_CHECK",
                                    "heightCss": "DEFAULT",
                                    "changeParm": "theAuxBoo",
                                    "parmAlways": false
                                },
                                {
                                    "name": "vAuxDateStr",
                                    "label": "Fecha",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": false,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 16,
                                    "labelCss": null,
                                    "valueCss": "STRING_MEDIUM",
                                    "inputCss": "STRING_MEDIUM",
                                    "heightCss": "DEFAULT",
                                    "changeParm": "theAuxFechaStr",
                                    "parmAlways": false
                                },
                                {
                                    "name": "vAuxTimestampStr",
                                    "label": "Fecha y hora",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": false,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 65,
                                    "labelCss": null,
                                    "valueCss": "STRING_LONG",
                                    "inputCss": "STRING_LONG",
                                    "heightCss": "DEFAULT",
                                    "changeParm": "theAuxFechaHoraStr",
                                    "parmAlways": false
                                },
                                {
                                    "name": "vAuxStr",
                                    "label": "Cadena",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": false,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 65,
                                    "labelCss": null,
                                    "valueCss": "STRING_VERYLONG",
                                    "inputCss": "STRING_VERYLONG",
                                    "heightCss": "DEFAULT",
                                    "changeParm": "theAuxStr",
                                    "parmAlways": false
                                },
                                {
                                    "name": "vAuxTxt",
                                    "label": "Texto",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": false,
                                    "occult": null,
                                    "dataType": "Text",
                                    "dataSize": 4000,
                                    "labelCss": null,
                                    "valueCss": "TEXT_LONG",
                                    "inputCss": "TEXT_LONG",
                                    "heightCss": "LONG",
                                    "changeParm": "theAuxTxt",
                                    "parmAlways": false
                                }

                            ]
                        },





                        "CrearAuxdetalleDeAuxauditable": {
                            "name": "CrearAuxdetalleDeAuxauditable",
                            "creatorLabel": "Auxdetalle",
                            "creatorClasses": null,
                            "masterLabels": [
                                "vIdAux",
                                "vIdAuxdet",
                                "vKey"
                            ],
                            "masterParms":  [ [ "vIdAux", "theIdAuxauditable"]],
                            "masterType":  "Auxdetalle",
                            "fields": [
                                {
                                    "name": "vAuxKey",
                                    "label": "Clave",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": false,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 16,
                                    "labelCss": null,
                                    "valueCss": "STRING_VERYLONG",
                                    "inputCss": "STRING_VERYLONG",
                                    "heightCss": "DEFAULT",
                                    "changeParm": "theAuxKeyDetalle",
                                    "parmAlways": true
                                },
                                {
                                    "name": "vAuxNum",
                                    "label": "Número",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": false,
                                    "occult": null,
                                    "dataType": "Int",
                                    "dataSize": 10,
                                    "labelCss": null,
                                    "valueCss": "NUMBER_INT_LONG",
                                    "inputCss": "NUMBER_INT_LONG",
                                    "heightCss": "DEFAULT",
                                    "changeParm": "theAuxNum",
                                    "parmAlways": false
                                },
                                {
                                    "name": "vAuxBoo",
                                    "label": "Si/No",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": false,
                                    "occult": null,
                                    "dataType": "BoolYesNo",
                                    "dataSize": 10,
                                    "labelCss": null,
                                    "valueCss": "BOOLEAN_CHECK",
                                    "inputCss": "BOOLEAN_CHECK",
                                    "heightCss": "DEFAULT",
                                    "changeParm": "theAuxBoo",
                                    "parmAlways": false
                                },
                                {
                                    "name": "vAuxDateStr",
                                    "label": "Fecha",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": false,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 16,
                                    "labelCss": null,
                                    "valueCss": "STRING_MEDIUM",
                                    "inputCss": "STRING_MEDIUM",
                                    "heightCss": "DEFAULT",
                                    "changeParm": "theAuxFechaStr",
                                    "parmAlways": false
                                },
                                {
                                    "name": "vAuxTimestampStr",
                                    "label": "Fecha y hora",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": false,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 65,
                                    "labelCss": null,
                                    "valueCss": "STRING_LONG",
                                    "inputCss": "STRING_LONG",
                                    "heightCss": "DEFAULT",
                                    "changeParm": "theAuxFechaHoraStr",
                                    "parmAlways": false
                                },
                                {
                                    "name": "vAuxStr",
                                    "label": "Cadena",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": false,
                                    "occult": null,
                                    "dataType": "String",
                                    "dataSize": 16,
                                    "labelCss": null,
                                    "valueCss": "STRING_VERYLONG",
                                    "inputCss": "STRING_VERYLONG",
                                    "heightCss": "DEFAULT",
                                    "changeParm": "theAuxStr",
                                    "parmAlways": false
                                },
                                {
                                    "name": "vAuxTxt",
                                    "label": "Texto",
                                    "minMult": 0,
                                    "maxMult": 0,
                                    "readOnly": false,
                                    "occult": null,
                                    "dataType": "Text",
                                    "dataSize": 4000,
                                    "labelCss": null,
                                    "valueCss": "TEXT_LONG",
                                    "inputCss": "TEXT_LONG",
                                    "heightCss": "LONG",
                                    "changeParm": "theAuxTxt",
                                    "parmAlways": false
                                }

                            ]
                        }


                    },
                    "WIRES": [

                        {
                            "name": "UpdateListaAuxauditablesOnFechasListaAuxauditablesChange",
                            "kind": "ARGUMENTS2GRID",
                            "from": "FechasListaAuxauditables",
                            "to": "ListaAuxauditables",
                            "doTarget": "fEjemplosSvce",
                            "do": "fprDo_Ejemplos_ListaAuxauditablesEntreFechas_Wrapper",
                            "with": null,
                            "query": null,
                            "reverseDo": null

                        },

                        {
                            "name": "UpdateAuxauditableEditorOnListaAuxauditablesSelectionChange",
                            "kind": "GRID2EDITOR",
                            "from": "ListaAuxauditables",
                            "to": "Auxauditable",
                            "doTarget": "fEjemplosSvce",
                            "do":       "fprDo_Ejemplos_AuxauditableDatosCompletos",
                            "with":     "vIdAux",
                            "query": null,
                            "reverseDo": "fprDo_Ejemplos_CambiarAuxauditable_Wrapper"
                        },

                        {   "name":     "UpdateAuxauditableCreatorOnListaAuxauditablesSelectionChange",
                            "kind":     "GRID2CREATOR",
                            "from":     "ListaAuxauditables",
                            "to":       "CrearAuxauditable",
                            "doTarget": "fEjemplosSvce",
                            "do":       "fprDo_Ejemplos_AuxauditableDatos",
                            "with":     "vIdAux",
                            "reverseDo": "fprDo_Ejemplos_CrearAuxauditable_Wrapper"
                        },




                        {
                            "name": "UpdateListaAuxdetallesDeAuxauditableOnListaAuxauditablesSelectionChange",
                            "kind": "GRID2SLAVEGRID",
                            "from": "ListaAuxauditables",
                            "to": "ListaAuxdetallesDeAuxauditable",
                            "doTarget": "fEjemplosSvce",
                            "do": "fprDo_Ejemplos_ListaTodasAuxdetallesDeAuxauditable_Wrapper",
                            "with": "vIdAux",
                            "query": null,
                            "reverseDo": null
                        },
                        {
                            "name": "UpdateAuxdetalleDeAuxauditableEditorOnListaAuxdetallesDeAuxauditableSelectionChange",
                            "kind": "GRID2EDITOR",
                            "from": "ListaAuxdetallesDeAuxauditable",
                            "to": "AuxdetalleDeAuxauditable",
                            "doTarget": "fEjemplosSvce",
                            "reverseDo": "fprDo_Ejemplos_CambiarAuxdetalleDeAuxauditable_Wrapper"
                        },


                        {   "name":     "UpdateAuxaudetalleDeAuxauditableCreatorOnListaAuxdetallesDeAuxauditableSelectionChange",
                            "kind":     "GRID2CREATOR",
                            "from":     "ListaAuxdetallesDeAuxauditable",
                            "to":       "CrearAuxdetalleDeAuxauditable",
                            "doTarget": "fEjemplosSvce",
                            "reverseDo": "fprDo_Ejemplos_CrearAuxdetalleDeAuxauditable_Wrapper"
                        }


                    ],
                    "GRIDNAMES_INITIALLOAD": [],
                    "EDITORNAMES_INITIALLOAD": [],
                    "CREATORNAMES_INITIALINCREATION": [],
                    "TOPTABSBAR_ENTRIES": [
                        {
                            "label": "Auxauditables",
                            "value": "ListaAuxauditables",
                            "selectorGridName": null,
                            "argumentsName": "FechasListaAuxauditables"
                        },

                        {
                            "label": "Auxdetalles",
                            "value": "ListaAuxdetallesDeAuxauditable",
                            "selectorGridName": null,
                            "XXXargumentsName": "FechasListaAuxdetalles"
                        }
                    ],
                    "TOPTABSBAR_INITIALLYSELECTEDTAB": "ListaAuxauditables",
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







