'use strict';

/*
 * fasesvalidacion_operacion_ctrl_specs.js
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






angular.module("fasesvalidacionTypes").factory("FasesvalidacionFicherosOperacionCtrlSpecs", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "CssKeys",
    "CssNames_Springnut_Fasesvalidacion",
    function( theSS_typesregistry,
              theSS_Overrider,
              theSS_CssKeys,
              theSS_CssNames_Springnut_Fasesvalidacion) {




        var ModuleName     = "fasesvalidacion_operacion_ctrl_specs";
        var ModulePackages = "springnut/fasesvalidacion";
        var ModuleFullName = ModulePackages + "/" + ModuleName;



        var aMod_definer = function( theS_Overrider,
                                     theS_CssKeys,
                                     theS_CssNames_Springnut_Fasesvalidacion) {


            if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}






            var FICHEROS_NAME                        = "ListaFicheros";
            var CRITERIOSYULTIMASFASESDEFICHERO_NAME = "ListaCriteriosYUltimasFasesDeFichero";
            var HISTORIAFASESDEFICHERO_NAME          = "ListaHistoriaFasesDeFichero";

            var FICHERO_NAME                      = "Fichero";
            var CRITERIOYULTIMAFASEDEFICHERO_NAME = "UltimaFaseDeFichero";
            var CRITERIOYULTIMAFASEDEFICHERO_CUSTOM_NAME = "UltimaFaseDeFichero_Custom";

            var FASEDEFICHERO_NAME                = "FaseDeFichero";


            var STATICTAB_GRIDSPECS_NAME   = "GridSpecs";
            var STATICTAB_EDITORSPECS_NAME = "EditorSpecs";
            var STATICTAB_CREATORSPECS_NAME = "CreatorSpecs";
            var STATICTAB_WIRESPECS_NAME   = "WireSpecs";
            var STATICTAB_SVCESPECS_NAME   = "SvceSpecs";

            var STATICTAB_GRIDSPECS_LABEL   = "Grids";
            var STATICTAB_EDITORSPECS_LABEL = "Editors";
            var STATICTAB_CREATORSPECS_LABEL = "Creators";
            var STATICTAB_WIRESPECS_LABEL   = "Wires";
            var STATICTAB_SVCESPECS_LABEL   = "Service";





            var pgInitWithModuleVariations = function( theToInit) {

                if( !theToInit) {
                    return;
                }



                theToInit.FASESVALIDACION_PAGEHEADER = "Control de Errores y Avisos";



                theToInit.FICHEROS_GRIDLABEL = "Ficheros";
                theToInit.FICHEROS_LABELS    = [
                    "Boletines",
                    "Id",
                    "Año",
                    "Mes",
                    "Provincia",
                    "Nombre"
                ];
                theToInit.FICHEROS_FIELDS    = [
                    "vTipoBoletin",
                    "vIdFichero",
                    "vAnoFichero",
                    "vMesFichero",
                    "vCodigoProvinciaFichero",
                    "vNombreFichero"
                ];
                theToInit.FICHEROS_FIELDS_HIDDEN = [
                    "vIdFichero"
                ];
                theToInit.FICHEROS_DATATYPES = [
                    "String",
                    "Int",
                    "Int",
                    "Int",
                    "Int",
                    "String"
                ];
                theToInit.FICHEROS_COLUMNCLASSES = [
                    "cssSpringnut_Ficheros_TipoBoletin",
                    "cssSpringnut_Ficheros_IdFichero",
                    "cssSpringnut_Ficheros_Ano",
                    "cssSpringnut_Ficheros_Mes",
                    "cssSpringnut_Ficheros_Provincia",
                    "cssSpringnut_Ficheros_NombreFichero"
                ];


                theToInit.CRITERIOSYULTIMASFASESDEFICHERO_GRIDLABEL = "Criterios y últimas fases";
                theToInit.CRITERIOSYULTIMASFASESDEFICHERO_LABELS    = [
                    "Fichero",
                    "Destacar",
                    "Atención",
                    "IdCriterio",
                    "Criterio",
                    "Id",
                    "Éxito",
                    "Estado",
                    "Resultado",
                    "#fallos",
                    "Fecha",
                    "Causa"
                ];
                theToInit.CRITERIOSYULTIMASFASESDEFICHERO_FIELDS    = [
                    "faIdfichero",
                    "destacar",
                    "reciente",
                    "crId",
                    "crNombre",
                    "ultimaFaserealizada.id",
                    "ultimaFaserealizada.faExitoStr",
                    "ultimaFaserealizada.faEstadoStr",
                    "ultimaFaserealizada.existeresultado",
                    "ultimaFaserealizada.faNumFallos",
                    "ultimaFaserealizada.faFechaUltimaStr",
                    "ultimaFaserealizada.prCausaErrorStr"
                ];
                theToInit.CRITERIOSYULTIMASFASESDEFICHERO_FIELDS_HIDDEN    = [
                    "faIdfichero",
                    "destacar",
                    "crId",
                    "ultimaFaserealizada.id"
                ];
                theToInit.CRITERIOSYULTIMASFASESDEFICHERO_DATATYPES = [
                    "Int",
                    "BoolYesNo",
                    "BoolYesNo",
                    "Int",
                    "String",
                    "Int",
                    "String",
                    "String",
                    "IntYesNo",
                    "Int",
                    "String",
                    "String"
                ];
                theToInit.CRITERIOSYULTIMASFASESDEFICHERO_COLUMNCLASSES = [
                    "cssSpringnut_UltimasFasesDeFichero_IdFichero",
                    "cssSpringnut_UltimasFasesDeFichero_Destacar",
                    "cssSpringnut_UltimasFasesDeFichero_Reciente",
                    "cssSpringnut_UltimasFasesDeFichero_IdCriterio",
                    "cssSpringnut_UltimasFasesDeFichero_NombreCriterio",
                    "cssSpringnut_UltimasFasesDeFichero_Id",
                    "cssSpringnut_UltimasFasesDeFichero_Exito",
                    "cssSpringnut_UltimasFasesDeFichero_Estado",
                    "cssSpringnut_UltimasFasesDeFichero_ExisteResultado",
                    "cssSpringnut_UltimasFasesDeFichero_NumFallos",
                    "cssSpringnut_UltimasFasesDeFichero_FechaUltima",
                    "cssSpringnut_UltimasFasesDeFichero_CausaError"
                ];





                theToInit.HISTORIAFASESDEFICHERO_GRIDLABEL = "Historia de fases";
                theToInit.HISTORIAFASESDEFICHERO_LABELS    = [
                    "Fichero",
                    "Destacar",
                    "Atención",
                    "Id",
                    "IdCriterio",
                    "Criterio",
                    "Éxito",
                    "Estado",
                    "Informe",
                    "#fallos",
                    "Fecha",
                    "Causa"
                ];
                theToInit.HISTORIAFASESDEFICHERO_FIELDS    = [
                    "faIdfichero",
                    "destacar",
                    "reciente",
                    "id",
                    "crId",
                    "crNombre",
                    "faExitoStr",
                    "faEstadoStr",
                    "existeresultado",
                    "faNumFallos",
                    "faFechaUltimaStr",
                    "prCausaErrorStr"
                ];
                theToInit.HISTORIAFASESDEFICHERO_FIELDS_HIDDEN    = [
                    "faIdfichero",
                    "destacar",
                    "id",
                    "crId"
                ];
                theToInit.HISTORIAFASESDEFICHERO_DATATYPES = [
                    "Int",
                    "BoolYesNo",
                    "BoolYesNo",
                    "Int",
                    "Int",
                    "String",
                    "String",
                    "String",
                    "IntYesNo",
                    "Int",
                    "String",
                    "String"
                ];
                theToInit.HISTORIAFASESDEFICHERO_COLUMNCLASSES = [
                    "cssSpringnut_UltimasFasesDeFichero_IdFichero",
                    "cssSpringnut_UltimasFasesDeFichero_Destacar",
                    "cssSpringnut_UltimasFasesDeFichero_Reciente",
                    "cssSpringnut_UltimasFasesDeFichero_Id",
                    "cssSpringnut_UltimasFasesDeFichero_IdCriterio",
                    "cssSpringnut_UltimasFasesDeFichero_NombreCriterio",
                    "cssSpringnut_UltimasFasesDeFichero_Exito",
                    "cssSpringnut_UltimasFasesDeFichero_Estado",
                    "cssSpringnut_UltimasFasesDeFichero_ExisteResultado",
                    "cssSpringnut_UltimasFasesDeFichero_NumFallos",
                    "cssSpringnut_UltimasFasesDeFichero_FechaUltima",
                    "cssSpringnut_UltimasFasesDeFichero_CausaError"
                ];





                theToInit.FICHERO_EDITORLABEL             = "Fichero";
                theToInit.CRITERIOYULTIMAFASEDEFICHERO_EDITORLABEL = "Última Fase de Criterio";
                theToInit.FASEDEFICHERO_EDITORLABEL       = "Fase de Fichero";



                theToInit.FICHERO_TYPE = "Fichero";
                theToInit.FASE_TYPE    = "Fase ";



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
                theToInit.DEFAULTTITLE = "FasesvalidacionCtrlDefaultName";





                theToInit.FASESVALIDACION_DOMIDPREFIX = "didSpringnut_Fasesvalidacion";




                theToInit.FICHEROS_NAME                        = FICHEROS_NAME;
                theToInit.CRITERIOSYULTIMASFASESDEFICHERO_NAME = CRITERIOSYULTIMASFASESDEFICHERO_NAME;
                theToInit.HISTORIAFASESDEFICHERO_NAME          = HISTORIAFASESDEFICHERO_NAME;




                theToInit.FICHERO_NAME                             = FICHERO_NAME;
                theToInit.CRITERIOYULTIMAFASEDEFICHERO_NAME        = CRITERIOYULTIMAFASEDEFICHERO_NAME;
                theToInit.CRITERIOYULTIMAFASEDEFICHERO_CUSTOM_NAME = CRITERIOYULTIMAFASEDEFICHERO_CUSTOM_NAME;
                theToInit.FASEDEFICHERO_NAME                       = FASEDEFICHERO_NAME;





                theToInit.STATICTAB_GRIDSPECS_NAME   = STATICTAB_GRIDSPECS_NAME;
                theToInit.STATICTAB_EDITORSPECS_NAME = STATICTAB_EDITORSPECS_NAME;
                theToInit.STATICTAB_CREATORSPECS_NAME = STATICTAB_CREATORSPECS_NAME;
                theToInit.STATICTAB_WIRESPECS_NAME   = STATICTAB_WIRESPECS_NAME;
                theToInit.STATICTAB_SVCESPECS_NAME   = STATICTAB_SVCESPECS_NAME;



                theToInit.STATICTAB_GRIDSPECS_LABEL   = STATICTAB_GRIDSPECS_LABEL;
                theToInit.STATICTAB_EDITORSPECS_LABEL = STATICTAB_EDITORSPECS_LABEL;
                theToInit.STATICTAB_CREATORSPECS_LABEL = STATICTAB_CREATORSPECS_LABEL;
                theToInit.STATICTAB_WIRESPECS_LABEL   = STATICTAB_WIRESPECS_LABEL;
                theToInit.STATICTAB_SVCESPECS_LABEL   = STATICTAB_SVCESPECS_LABEL;








                theToInit.GRIDPARAMETERS_FICHEROS = {
                    "name":        theToInit.FICHEROS_NAME,
                    "gridLabel":   theToInit.FICHEROS_GRIDLABEL,
                    "labels":      theToInit.FICHEROS_LABELS,
                    "fields":      theToInit.FICHEROS_FIELDS,
                    "hiddenFields": theToInit.FICHEROS_FIELDS_HIDDEN,
                    "dataTypes":   theToInit.FICHEROS_DATATYPES,
                    "gridClasses": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_TABLE,
                    "classes":     theToInit.FICHEROS_COLUMNCLASSES,
                    "retrievalTarget": "fFasesvalidacionSvce",
                    "retrieval":    "fprDo_Fasesvalidacion_ListaFicheros",
                    "with":         "fParentCtrl()._v_TipoBoletinForURL",
                    "autoSelectIndex": -1,
                    "keyField":     "vIdFichero",
                    "editorName":   theToInit.FICHERO_NAME
                };




                theToInit.GRIDPARAMETERS_CRITERIOSYULTIMASFASESDEFICHERO = {
                    "name":        theToInit.CRITERIOSYULTIMASFASESDEFICHERO_NAME,
                    "gridLabel":   theToInit.CRITERIOSYULTIMASFASESDEFICHERO_GRIDLABEL,
                    "labels":      theToInit.CRITERIOSYULTIMASFASESDEFICHERO_LABELS,
                    "fields":      theToInit.CRITERIOSYULTIMASFASESDEFICHERO_FIELDS,
                    "hiddenFields": theToInit.CRITERIOSYULTIMASFASESDEFICHERO_FIELDS_HIDDEN,
                    "dataTypes":   theToInit.CRITERIOSYULTIMASFASESDEFICHERO_DATATYPES,
                    "gridClasses": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_TABLE,
                    "classes":     theToInit.CRITERIOSYULTIMASFASESDEFICHERO_COLUMNCLASSES,
                    "noRefresh":   false,
                    "autoSelectIndex": -1,
                    "keyField":    "crId",
                    "editorName":  theToInit.CRITERIOYULTIMAFASEDEFICHERO_NAME,
                    "masterType":  theToInit.FICHERO_NAME,
                    "masterLabels": [ "vIdFichero", "vAnoFichero", "vMesFichero", "vCodigoProvinciaFichero", "vNombreFichero"]
                };




                theToInit.GRIDPARAMETERS_HISTORIAFASESDEFICHERO = {
                    "name":        theToInit.HISTORIAFASESDEFICHERO_NAME,
                    "gridLabel":   theToInit.HISTORIAFASESDEFICHERO_GRIDLABEL,
                    "labels":      theToInit.HISTORIAFASESDEFICHERO_LABELS,
                    "fields":      theToInit.HISTORIAFASESDEFICHERO_FIELDS,
                    "hiddenFields": theToInit.HISTORIAFASESDEFICHERO_FIELDS_HIDDEN,
                    "dataTypes":   theToInit.HISTORIAFASESDEFICHERO_DATATYPES,
                    "gridClasses": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_TABLE,
                    "classes":     theToInit.HISTORIAFASESDEFICHERO_COLUMNCLASSES,
                    "noRefresh":   false,
                    "autoSelectIndex": -1,
                    "keyField":    "id",
                    "editorName":  theToInit.FASEDEFICHERO_NAME,
                    "masterType":  "Fichero" /* ACV OJO 201411050008 Is used exclusively to compose UI labels, even if it's named as "masterType" while it shoudl be "masterTypeLabel" */,
                    "masterLabels": [ "vIdFichero", "vAnoFichero", "vMesFichero", "vCodigoProvinciaFichero", "vNombreFichero"]
                };





                theToInit.GRIDPARAMETERS = { };
                theToInit.GRIDPARAMETERS[ theToInit.FICHEROS_NAME]               =  theToInit.GRIDPARAMETERS_FICHEROS;
                theToInit.GRIDPARAMETERS[ theToInit.CRITERIOSYULTIMASFASESDEFICHERO_NAME]  =  theToInit.GRIDPARAMETERS_CRITERIOSYULTIMASFASESDEFICHERO;
                theToInit.GRIDPARAMETERS[ theToInit.HISTORIAFASESDEFICHERO_NAME] =  theToInit.GRIDPARAMETERS_HISTORIAFASESDEFICHERO;




                theToInit.GRIDNAMES = [
                    theToInit.FICHEROS_NAME,
                    theToInit.CRITERIOSYULTIMASFASESDEFICHERO_NAME,
                    theToInit.HISTORIAFASESDEFICHERO_NAME
                ];






                theToInit.GRIDNAMES_INITIALLOAD = [
                    theToInit.FICHEROS_NAME
                ];









                theToInit.EDITPARAMETERS_FICHERO = {
                    "name": theToInit.FICHERO_NAME,
                    "editorLabel": theToInit.FICHERO_EDITORLABEL,
                    "editorClasses": theSS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR,
                    "autoEdit": false,
                    "masterLabels": [ "vIdFichero", "vAnoFichero", "vMesFichero", "vCodigoProvinciaFichero", "vNombreFichero"],
                    "noEdit":    true,
                    "noDelete":  true,
                    "noRefresh": true,
                    "fields": [
                        {
                            "name":  "vTipoBoletin",
                            "label": "Tipo Boletines",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "occult":   true,
                            "dataType": "String",
                            "labelCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_SHORT],
                            "inputCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_SHORT]
                        },
                        {
                            "name":  "vIdFichero",
                            "label": "Id",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "occult":   true,
                            "dataType": "String",
                            "dataSize": 10,
                            "labelCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_SHORT],
                            "inputCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_SHORT]
                        },
                        {
                            "name":  "vAnoFichero",
                            "label": "Año",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "dataType": "String",
                            "labelCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_MEDIUM],
                            "inputCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_MEDIUM]
                        },
                        {
                            "name":  "vMesFichero",
                            "label": "Mes",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "dataType": "String",
                            "labelCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_MEDIUM],
                            "inputCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_MEDIUM]
                        },
                        {
                            "name":  "vCodigoProvinciaFichero",
                            "label": "Provincia",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "dataType": "String",
                            "labelCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_MEDIUM],
                            "inputCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_MEDIUM]
                        },
                        {
                            "name":  "nombrefichero",
                            "label": "Nombre Fichero",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "dataType": "String",
                            "labelCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_MEDIUM],
                            "inputCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_MEDIUM]
                        }
                    ]
                };




                var a ={
                    "vTipo": "Fasesrealizadas",
                    "class_destacado": "destacado",
                    "empty_str": "",
                    "x    destacar": false,
                    "x    reciente": false,
                    "faFechaStr": "08/11/2014 01:27:51 .0 (+0100)",
                    "x    faFechaUltimaStr": "08/11/2014 01:28:08 .0 (+0100)",
                    "prFechaInicioStr": null,
                    "prFechaUltimaStr": null,
                    "faEstadoStr": "Terminado",
                    "faExitoStr": "Exito",
                    "prEstadoStr": null,
                    "prExitoStr": null,
                    "prCausaErrorStr": null,
                    "farId": 901,
                    "x    crId": 2,
                    "x    crNombre": "Errores INE",
                    "crDescripcion": null,
                    "x    id": 2042,
                    "x    faIdfichero": 1,
                    "faFecha": 1415406471000,
                    "x    faNumFallos": 1753,
                    "x    faFechaultima": 1415406488000,
                    "x    faEstado": 2,
                    "x    faExito": 1,
                    "x    existeresultado": 1,
                    "prId": 1982,
                    "prFechainicio": 1415406471000,
                    "prFechaultima": 1415406488000,
                    "prEstado": 2,
                    "prExito": 1,
                    "prPorcentajerealizado": 100,
                    "prSegundosrestantes": 0,
                    "prCausaerror": 0,
                    "vtipo": "Fasesrealizadas"
                };
                if( a){}/* CQT */












                theToInit.EDITPARAMETERS_CRITERIOYULTIMAFASEDEFICHERO = {
                    "name": theToInit.CRITERIOYULTIMAFASEDEFICHERO_NAME,
                    "editorLabel": theToInit.CRITERIOYULTIMAFASEDEFICHERO_EDITORLABEL,
                    "editorClasses": theSS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR,
                    "autoEdit": false,
                    "masterLabels": [ "crId", "crNombre", "ultimaFaserealizada.faEstadoStr", "ultimaFaserealizada.faExitoStr"],
                    "noEdit":    true,
                    "noDelete":  true,
                    "noRefresh": true,
                    "fields": [
                        {
                            "name":    theToInit.CRITERIOYULTIMAFASEDEFICHERO_CUSTOM_NAME,
                            "label":   theToInit.CRITERIOYULTIMAFASEDEFICHERO_CUSTOM_NAME + "_Label",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "occult":   false,
                            "dataType": "Int",
                            "dataSize": 10,
                            "labelCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_MEDIUM],
                            "inputCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_INT_MEDIUM],
                            "customTemplate":      "partials/fasesvalidacion/fase-lanzar.html",
                            "customTemplateClass": "cssSpringnut_CustomTemplate_Height0032px",
                            "customUIHandlers": {
                                "fUILanzarClickListener":                null,
                                "fUICancelarLanzarClickListener":        null,
                                "fUIConfirmarLanzarForzarClickListener": null
                            }
                        },
                        {
                            "name":  "ultimaFaserealizada.existeresultado",
                            "label": "Informe disponible",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "occult":   false,
                            "dataType": "IntYesNo",
                            "labelCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_BOOLEAN_CHECK],
                            "inputCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_BOOLEAN_CHECK],
                            "customTemplate":      "partials/fasesvalidacion/fase-informedisponible.html",
                            "customTemplateClass": "cssSpringnut_CustomTemplate_Height0032px"
                        },
                        {
                            "name":  "faIdfichero",
                            "label": "Id Fichero",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "occult":   true,
                            "dataType": "Int",
                            "dataSize": 10,
                            "labelCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_MEDIUM],
                            "inputCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_INT_MEDIUM]
                        },
                        {
                            "name":  "destacar",
                            "label": "Destacar",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "occult":   true,
                            "dataType": "BoolYesNo",
                            "labelCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_BOOLEAN_CHECK],
                            "inputCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_BOOLEAN_CHECK]
                        },
                        {
                            "name":  "reciente",
                            "label": "Atención",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "occult":   false,
                            "dataType": "BoolYesNo",
                            "labelCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_BOOLEAN_CHECK],
                            "inputCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_BOOLEAN_CHECK]
                        },
                        {
                            "name":  "crId",
                            "label": "Id Criterio",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "occult":   true,
                            "dataType": "Int",
                            "dataSize": 10,
                            "labelCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_MEDIUM],
                            "inputCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_INT_MEDIUM]
                        },
                        {
                            "name":  "crNombre",
                            "label": "Criterio",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "occult":   false,
                            "dataType": "String",
                            "labelCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_LONG],
                            "inputCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_LONG]
                        },
                        {
                            "name":  "ultimaFaserealizada.id",
                            "label": "Id Fase",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "occult":   true,
                            "dataType": "Int",
                            "dataSize": 10,
                            "labelCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_MEDIUM],
                            "inputCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_INT_MEDIUM]
                        },
                        {
                            "name":  "ultimaFaserealizada.faExitoStr",
                            "label": "Éxito",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "dataType": "String",
                            "labelCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_MEDIUM],
                            "inputCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_MEDIUM]
                        },
                        {
                            "name":  "ultimaFaserealizada.faEstadoStr",
                            "label": "Estado",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "occult":   false,
                            "dataType": "String",
                            "labelCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_MEDIUM],
                            "inputCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_MEDIUM]
                        },
                        {
                            "name":  "ultimaFaserealizada.faNumFallos",
                            "label": "Número de fallos",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "occult":   false,
                            "dataType": "Int",
                            "dataSize": 4,
                            "labelCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_MEDIUM],
                            "inputCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_INT_MEDIUM]
                        },
                        {
                            "name":  "ultimaFaserealizada.faFechaUltimaStr",
                            "label": "Fecha",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "occult":   false,
                            "dataType": "String",
                            "labelCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_TIMESTAMP],
                            "inputCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_TIMESTAMP]
                        },
                        {
                            "name":  "ultimaFaserealizada.prCausaErrorStr",
                            "label": "Causa Error",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "occult":   false,
                            "dataType": "String",
                            "labelCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_MEDIUM],
                            "inputCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_MEDIUM]
                        }
                    ]
                };






                theToInit.EDITPARAMETERS_FASEDEFICHERO = {
                    "name": theToInit.FASEDEFICHERO_NAME,
                    "editorLabel": theToInit.FASEDEFICHERO_EDITORLABEL,
                    "editorClasses": theSS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR,
                    "autoEdit": false,
                    "masterLabels": [ "faIdfichero", "crId", "crNombre", "faEstadoStr", "faExitoStr"],
                    "noEdit":    true,
                    "noDelete":  true,
                    "noRefresh": true,
                    "fields": [
                        {
                            "name":  "existeresultado",
                            "label": "Informe disponible",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "occult":   false,
                            "dataType": "IntYesNo",
                            "labelCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_BOOLEAN_CHECK],
                            "inputCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_BOOLEAN_CHECK],
                            "customTemplate":      "partials/fasesvalidacion/fase-informedisponible.html",
                            "customTemplateClass": "cssSpringnut_CustomTemplate_Height0032px"
                        },
                        {
                            "name":  "faIdfichero",
                            "label": "Id Fichero",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "occult":   true,
                            "dataType": "Int",
                            "dataSize": 10,
                            "labelCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_MEDIUM],
                            "inputCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_INT_MEDIUM]
                        },
                        {
                            "name":  "destacar",
                            "label": "Atención",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "occult":   false,
                            "dataType": "BoolYesNo",
                            "labelCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_BOOLEAN_CHECK],
                            "inputCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_BOOLEAN_CHECK]
                        },
                        {
                            "name":  "reciente",
                            "label": "Reciente",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "occult":   false,
                            "dataType": "BoolYesNo",
                            "labelCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_BOOLEAN_CHECK],
                            "inputCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_BOOLEAN_CHECK]
                        },
                        {
                            "name":  "id",
                            "label": "Id Fase",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "occult":   true,
                            "dataType": "Int",
                            "dataSize": 10,
                            "labelCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_MEDIUM],
                            "inputCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_INT_MEDIUM]
                        },
                        {
                            "name":  "crId",
                            "label": "Id Criterio",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "occult":   true,
                            "dataType": "Int",
                            "dataSize": 10,
                            "labelCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_MEDIUM],
                            "inputCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_INT_MEDIUM]
                        },
                        {
                            "name":  "crNombre",
                            "label": "Criterio",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "occult":   false,
                            "dataType": "String",
                            "labelCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_LONG],
                            "inputCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_LONG]
                        },
                        {
                            "name":  "faExitoStr",
                            "label": "Éxito",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "dataType": "String",
                            "labelCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_MEDIUM],
                            "inputCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_MEDIUM]
                        },
                        {
                            "name":  "faEstadoStr",
                            "label": "Estado",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "occult":   false,
                            "dataType": "String",
                            "labelCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_MEDIUM],
                            "inputCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_MEDIUM]
                        },
                        {
                            "name":  "faNumFallos",
                            "label": "Número de fallos",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "occult":   false,
                            "dataType": "Int",
                            "dataSize": 4,
                            "labelCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_MEDIUM],
                            "inputCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_INT_MEDIUM]
                        },
                        {
                            "name":  "faFechaUltimaStr",
                            "label": "Fecha",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "occult":   false,
                            "dataType": "String",
                            "labelCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_TIMESTAMP],
                            "inputCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_TIMESTAMP]
                        },
                        {
                            "name":  "prCausaErrorStr",
                            "label": "Causa Error",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "occult":   false,
                            "dataType": "String",
                            "labelCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_MEDIUM],
                            "inputCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_MEDIUM]
                        }
                    ]
                };







                theToInit.EDITPARAMETERS = { };
                theToInit.EDITPARAMETERS[ theToInit.FICHERO_NAME]             =  theToInit.EDITPARAMETERS_FICHERO;
                theToInit.EDITPARAMETERS[ theToInit.CRITERIOYULTIMAFASEDEFICHERO_NAME] =  theToInit.EDITPARAMETERS_CRITERIOYULTIMAFASEDEFICHERO;
                theToInit.EDITPARAMETERS[ theToInit.FASEDEFICHERO_NAME]       =  theToInit.EDITPARAMETERS_FASEDEFICHERO;





                theToInit.EDITORNAMES = [
                    theToInit.FICHERO_NAME,
                    theToInit.CRITERIOYULTIMAFASEDEFICHERO_NAME,
                    theToInit.FASEDEFICHERO_NAME
                ];





                theToInit.EDITORNAMES_INITIALLOAD = [];







                theToInit.CREATEPARAMETERS = {};

                theToInit.CREATORNAMES = [];









                theToInit.WIRES = [
                    {   "name":     "UpdateFicheroEditorOnFicherosSelectionChange",
                        "kind":     "GRID2EDITOR",
                        "from":     theToInit.FICHEROS_NAME,
                        "to":       theToInit.FICHERO_NAME
                    },

                    {   "name":     "UpdateListaUltimasFasesDeFicheroOnFicherosSelectionChange",
                        "kind":     "GRID2SLAVEGRID",
                        "from":     theToInit.FICHEROS_NAME,
                        "to":       theToInit.CRITERIOSYULTIMASFASESDEFICHERO_NAME,
                        "doTarget": "fFasesvalidacionSvce",
                        "do":       "fprDo_Fasesvalidacion_ListaCriteriosYUltimasFasesDeFichero",
                        "with":     "vIdFichero"
                    },
                    {   "name":     "UpdateUltimaFaseDeFicheroEditorOnUltimasFasesDeFicheroSelectionChange",
                        "kind":     "GRID2EDITOR",
                        "from":     theToInit.CRITERIOSYULTIMASFASESDEFICHERO_NAME,
                        "to":       theToInit.CRITERIOYULTIMAFASEDEFICHERO_NAME
                    },

                    {   "name":     "UpdateListaFasesHistoricasDeFicheroOnFicherosSelectionChange",
                        "kind":     "GRID2SLAVEGRID",
                        "from":     theToInit.FICHEROS_NAME,
                        "to":       theToInit.HISTORIAFASESDEFICHERO_NAME,
                        "doTarget": "fFasesvalidacionSvce",
                        "do":       "fprDo_Fasesvalidacion_ListaFasesDeFichero",
                        "with":     "vIdFichero"
                    },
                    {   "name":     "UpdateFaseHistoricaDeFicheroEditorOnHistoriaFasesDeFicheroSelectionChange",
                        "kind":     "GRID2EDITOR",
                        "from":     theToInit.HISTORIAFASESDEFICHERO_NAME,
                        "to":       theToInit.FASEDEFICHERO_NAME
                    }

                ];















                theToInit.TOPTABSBAR_ENTRIES = [
                    { label:  theToInit.FICHEROS_GRIDLABEL,               value: theToInit.FICHEROS_NAME},
                    { label:  theToInit.CRITERIOSYULTIMASFASESDEFICHERO_GRIDLABEL,  value: theToInit.CRITERIOSYULTIMASFASESDEFICHERO_NAME},
                    { label:  theToInit.HISTORIAFASESDEFICHERO_GRIDLABEL, value: theToInit.HISTORIAFASESDEFICHERO_NAME}
                ];



                theToInit.TOPTABSBAR_INITIALLYSELECTEDTAB = theToInit.FICHEROS_NAME;




                theToInit.TOPTABSBAR_TABSFIXEDINITIAL = [ ];






                theToInit.TOPTABSBAR_ENTRIES_STATIC_NONE = [];


                theToInit.TOPTABSBAR_ENTRIES_STATIC = [];


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
                theSS_Overrider,
                theSS_CssKeys,
                theSS_CssNames_Springnut_Fasesvalidacion
            );
            anExistingModule = aModule;

            theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
        }






        return anExistingModule;

    }]);







