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






angular.module("fasesvalidacionTypes").factory("FasesvalidacionBloquesOperacionCtrlSpecs", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "CssKeys",
    "CssNames_Springnut_Fasesvalidacion",
    function( theSS_typesregistry,
              theSS_Overrider,
              theSS_CssKeys,
              theSS_CssNames_Springnut_Fasesvalidacion) {




        var ModuleName     = "fasesvalidacion_bloques_operacion_ctrl_specs";
        var ModulePackages = "springnut/fasesvalidacion";
        var ModuleFullName = ModulePackages + "/" + ModuleName;



        var aMod_definer = function( theS_Overrider,
                                     theS_CssKeys,
                                     theS_CssNames_Springnut_Fasesvalidacion) {


            if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}






            var PERFILES_NAME                         = "ListaPerfiles";
            var OPERADORESDEPERFIL_NAME               = "ListaOperadoresDePerfil";
            var AUTORIZACIONESDEOPERADORDEPERFIL_NAME = "ListaAutorizacionesDeOperadorDePerfil";

            var PERFIL_NAME                         = "Perfil";
            var OPERADORDEPERFIL_NAME               = "OperadorDePerfil";
            var AUTORIZACIONDEOPERADORDEPERFIL_NAME = "AutorizacionDeOperadorDePerfil";

            var CREAR_PERFIL_NAME                         = "CrearPerfil";
            var CREAR_OPERADORDEPERFIL_NAME               = "CrearOperadorDePerfil";
            var CREAR_AUTORIZACIONDEOPERADORDEPERFIL_NAME = "CrearAutorizacionDeOperadorDePerfil";





            var pgInitWithModuleVariations = function( theToInit) {

                if( !theToInit) {
                    return;
                }

                theToInit.FASESVALIDACION_PAGEHEADER = "Administración de Operadores";


                theToInit.PERFILES_GRIDLABEL = "Perfiles";
                theToInit.PERFILES_LABELS    = [ "Id",        "Nombre",        "Descripcion"];
                theToInit.PERFILES_FIELDS    = [ "vIdPerfil", "vNombrePerfil", "vDescripcionPerfil"];
                theToInit.PERFILES_HIDDENFIELDS    = [ "vIdPerfil"];
                theToInit.PERFILES_DATATYPES = [ "Int",       "String",        "String"];
                theToInit.PERFILES_COLUMNCLASSES = [
                    "cssSpringnut_Perfiles_vIdPerfil",
                    "cssSpringnut_Perfiles_vNombrePerfil",
                    "cssSpringnut_Perfiles_vDescripcionPerfil"
                ];




                theToInit.OPERADORESDEPERFIL_GRIDLABEL = "Operadores";
                theToInit.OPERADORESDEPERFIL_LABELS    = [
                    "Id",
                    "Nombre",
                    "Bloq",
                    "Ultimo acceso",
                    "Fallos",
                    "Cambiada",
                    "Nom.Completo",
                    "Gracia",
                    "Cambiar",
                    "Inalterable",
                    "Descripcion"
                ];
                theToInit.OPERADORESDEPERFIL_FIELDS    = [
                    "vIdOperador",
                    "vNombreOperador",
                    "vCuentaBloqueada",
                    "vFechaUltimoAccesoStr",
                    "vNumeroAccesosFallidos",
                    "vFechaUltimoCambioPswdStr",
                    "vNombreCompletoOperador",
                    "vNumeroAccesosGracia",
                    "vUsuarioDebeCambiarPswdAInicioDeSesion",
                    "vUsuarioNoPuedeCambiarPswd",
                    "vDescripcionOperador"
                ];
                theToInit.OPERADORESDEPERFIL_FIELDS_HIDDEN = [
                    "vIdOperador",
                    "vNumeroAccesosGracia",
                    "vUsuarioDebeCambiarPswdAInicioDeSesion",
                    "vUsuarioNoPuedeCambiarPswd",
                    "vDescripcionOperador"
                ];
                theToInit.OPERADORESDEPERFIL_DATATYPES = [
                    "Int",
                    "String",
                    "BoolYesNo",
                    "String",
                    "Int",
                    "String",
                    "String",
                    "Int",
                    "BoolYesNo",
                    "BoolYesNo",
                    "String"
                ];
                theToInit.OPERADORESDEPERFIL_COLUMNCLASSES = [
                    "cssSpringnut_Operadores_IdOperador",
                    "cssSpringnut_Operadores_NombreOperador",
                    "cssSpringnut_Operadores_CuentaBloqueada",
                    "cssSpringnut_Operadores_FechaUltimoAccesoStr",
                    "cssSpringnut_Operadores_NumeroAccesosFallidos",
                    "cssSpringnut_Operadores_FechaUltimoCambioPswdStr",
                    "cssSpringnut_Operadores_NombreCompletoOperador",
                    "cssSpringnut_Operadores_NumeroAccesosGracia",
                    "cssSpringnut_Operadores_UsuarioDebeCambiarPswdAInicioDeSesion",
                    "cssSpringnut_Operadores_UsuarioNoPuedeCambiarPswd",
                    "cssSpringnut_Operadores_DescripcionOperador"
                ];



                theToInit.AUTORIZACIONESDEOPERADORDEPERFIL_GRIDLABEL = "Autorizaciones";
                theToInit.AUTORIZACIONESDEOPERADORDEPERFIL_LABELS    = [
                    "Id",
                    "Id Oper.",
                    "Operador",
                    "Nombre Completo",
                    "Id Perfil",
                    "Perfil",
                    "Descripcion Perfil"
                ];
                theToInit.AUTORIZACIONESDEOPERADORDEPERFIL_FIELDS    = [
                    "vIdAutorizacion",
                    "vIdOperador",
                    "vNombreOperador",
                    "vNombreCompletoOperador",
                    "vIdPerfil",
                    "vNombrePerfil",
                    "vDescripcionPerfil"
                ];
                theToInit.AUTORIZACIONESDEOPERADORDEPERFIL_HIDDENFIELDS    = [
                    "vIdAutorizacion",
                    "vIdOperador",
                    "vNombreOperador",
                    "vNombreCompletoOperador",
                    "vIdPerfil"
                ];
                theToInit.AUTORIZACIONESDEOPERADORDEPERFIL_DATATYPES = [
                    "Int",
                    "Int",
                    "String",
                    "String",
                    "Int",
                    "String",
                    "String"
                ];
                theToInit.AUTORIZACIONESDEOPERADORDEPERFIL_COLUMNCLASSES = [
                    "cssSpringnut_Autorizaciones_vIdAutorizacion",
                    "cssSpringnut_Autorizaciones_vIdOperador",
                    "cssSpringnut_Autorizaciones_vNombreOperador",
                    "cssSpringnut_Autorizaciones_vNombreCompletoOperador",
                    "cssSpringnut_Autorizaciones_vIdPerfil",
                    "cssSpringnut_Autorizaciones_vNombrePerfil",
                    "cssSpringnut_Autorizaciones_vDescripcionPerfil"
                ];





                theToInit.PERFIL_EDITORLABEL                         = "Perfil";
                theToInit.OPERADORDEPERFIL_EDITORLABEL               = "Operador";
                theToInit.AUTORIZACIONDEOPERADORDEPERFIL_EDITORLABEL = "Autorización";


                theToInit.PERFIL_CREATORLABEL                         = "Perfil";
                theToInit.OPERADORDEPERFIL_CREATORLABEL               = "Operador";
                theToInit.AUTORIZACIONDEOPERADORDEPERFIL_CREATORLABEL = "Autorización ";


                theToInit.OPERADOR_TYPE      = "Operador";
                theToInit.AUTORIZACION_TYPE  = "Autorización ";
                theToInit.PERFIL_TYPE        = "Perfil";




                theToInit.PERFILESCANDIDATOSDEAUTORIZACIONOPERADORDEPERFIL_NAME      = AUTORIZACIONDEOPERADORDEPERFIL_NAME + "_" + "_vNombrePerfil"  + "_Candidatos_" + PERFILES_NAME;
                theToInit.PERFILESCANDIDATOSDEAUTORIZACIONOPERADORDEPERFIL_GRIDLABEL = theToInit.PERFILES_GRIDLABEL + " candidatos para " + theToInit.AUTORIZACIONESDEOPERADORDEPERFIL_GRIDLABEL;
                theToInit.PERFILESCANDIDATOSDEAUTORIZACIONOPERADORDEPERFIL_LABELS    = [ "Id",        "Perfil",        "Descripcion"];
                theToInit.PERFILESCANDIDATOSDEAUTORIZACIONOPERADORDEPERFIL_FIELDS    = [ "vIdPerfil", "vNombrePerfil", "vDescripcionPerfil"];
                theToInit.PERFILESCANDIDATOSDEAUTORIZACIONOPERADORDEPERFIL_FIELDS_HIDDEN = [];
                theToInit.PERFILESCANDIDATOSDEAUTORIZACIONOPERADORDEPERFIL_DATATYPES = [ "Int"      , "String",        "String"];
                theToInit.PERFILESCANDIDATOSDEAUTORIZACIONOPERADORDEPERFIL_COLUMNCLASSES = [
                    "cssSpringnut_Perfiles_vIdPerfil",
                    "cssSpringnut_Perfiles_vNombrePerfil",
                    "cssSpringnut_Perfiles_vDescripcionPerfil"
                ];



                theToInit.PERFILESCANDIDATOSDENUEVAAUTORIZACIONOPERADORDEPERFIL_NAME      = AUTORIZACIONDEOPERADORDEPERFIL_NAME + "_Crear_" + "_vNombrePerfil"  + "_Candidatos_" + PERFILES_NAME;
                theToInit.PERFILESCANDIDATOSDENUEVAAUTORIZACIONOPERADORDEPERFIL_GRIDLABEL = theToInit.PERFILES_GRIDLABEL + " candidatos para " + theToInit.AUTORIZACIONESDEOPERADORDEPERFIL_GRIDLABEL;
                theToInit.PERFILESCANDIDATOSDENUEVAAUTORIZACIONOPERADORDEPERFIL_LABELS    = [ "Id",        "Perfil",        "Descripcion"];
                theToInit.PERFILESCANDIDATOSDENUEVAAUTORIZACIONOPERADORDEPERFIL_FIELDS    = [ "vIdPerfil", "vNombrePerfil", "vDescripcionPerfil"];
                theToInit.PERFILESCANDIDATOSDENUEVAAUTORIZACIONOPERADORDEPERFIL_FIELDS_HIDDEN = [];
                theToInit.PERFILESCANDIDATOSDENUEVAAUTORIZACIONOPERADORDEPERFIL_DATATYPES = [ "Int"      , "String",        "String"];
                theToInit.PERFILESCANDIDATOSDENUEVAAUTORIZACIONOPERADORDEPERFIL_COLUMNCLASSES = [
                    "cssSpringnut_Perfiles_vIdPerfil",
                    "cssSpringnut_Perfiles_vNombrePerfil",
                    "cssSpringnut_Perfiles_vDescripcionPerfil"
                ];








                theToInit.TOPTABSBAR_INITIALLYSELECTEDTAB = OPERADORESDEPERFIL_NAME;


                theToInit.TOPTABSBAR_TABSFIXEDINITIAL = [];


                theToInit.TOPTABSBAR_TABSFIXEDINITIAL_STATIC = [];

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




                theToInit.PERFILES_NAME                         = PERFILES_NAME;
                theToInit.OPERADORESDEPERFIL_NAME               = OPERADORESDEPERFIL_NAME;
                theToInit.AUTORIZACIONESDEOPERADORDEPERFIL_NAME = AUTORIZACIONESDEOPERADORDEPERFIL_NAME;




                theToInit.PERFIL_NAME                         = PERFIL_NAME;
                theToInit.OPERADORDEPERFIL_NAME               = OPERADORDEPERFIL_NAME;
                theToInit.AUTORIZACIONDEOPERADORDEPERFIL_NAME = AUTORIZACIONDEOPERADORDEPERFIL_NAME;




                theToInit.CREAR_PERFIL_NAME                         = CREAR_PERFIL_NAME;
                theToInit.CREAR_OPERADORDEPERFIL_NAME               = CREAR_OPERADORDEPERFIL_NAME;
                theToInit.CREAR_AUTORIZACIONDEOPERADORDEPERFIL_NAME = CREAR_AUTORIZACIONDEOPERADORDEPERFIL_NAME;






                theToInit.GRIDPARAMETERS_PERFILES = {
                    "name":        theToInit.PERFILES_NAME,
                    "gridLabel":   theToInit.PERFILES_GRIDLABEL,
                    "labels":      theToInit.PERFILES_LABELS,
                    "fields":      theToInit.PERFILES_FIELDS,
                    "hiddenFields": theToInit.PERFILES_HIDDENFIELDS,
                    "dataTypes":   theToInit.PERFILES_DATATYPES,
                    "gridClasses": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_TABLE,
                    "classes":     theToInit.PERFILES_COLUMNCLASSES,
                    "retrievalTarget": "fFasesvalidacionSvce",
                    "retrieval":   "fprDo_Fasesvalidacion_ListaPerfiles",
                    "autoSelectIndex": -1,
                    "keyField":     "vNombrePerfil",
                    "editorName":   theToInit.PERFIL_NAME,
                    "creatorName":  theToInit.CREAR_PERFIL_NAME,
                    "deleteTarget": "fFasesvalidacionSvce",
                    "delete":       "fprDo_Fasesvalidacion_EliminarPerfil",
                    "deleteWith":   "vIdPerfil",
                    "deleteParm":   "theIdPerfil",
                    "deleteSucessIfNotExistsParm": "theExitoSiNoExiste"
                };




                theToInit.GRIDPARAMETERS_OPERADORESDEPERFIL = {
                    "name":        theToInit.OPERADORESDEPERFIL_NAME,
                    "gridLabel":   theToInit.OPERADORESDEPERFIL_GRIDLABEL,
                    "labels":      theToInit.OPERADORESDEPERFIL_LABELS,
                    "fields":      theToInit.OPERADORESDEPERFIL_FIELDS,
                    "hiddenFields": theToInit.OPERADORESDEPERFIL_FIELDS_HIDDEN,
                    "dataTypes":   theToInit.OPERADORESDEPERFIL_DATATYPES,
                    "gridClasses": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_TABLE,
                    "classes":     theToInit.OPERADORESDEPERFIL_COLUMNCLASSES,
                    "retrievalTarget": "fFasesvalidacionSvce",
                    "retrieval":    "fprDo_Fasesvalidacion_ListaOperadores",
                    "autoSelectIndex": -1,
                    "keyField":     "vIdOperador",
                    "editorName":  theToInit.OPERADORDEPERFIL_NAME,
                    "masterType":  theToInit.PERFIL_NAME,
                    "masterLabels": [ "vNombrePerfil"],
                    "creatorName":  theToInit.CREAR_OPERADORDEPERFIL_NAME,
                    "deleteTarget": "fFasesvalidacionSvce",
                    "delete":       "fprDo_Fasesvalidacion_EliminarOperador",
                    "deleteWith":   "vIdOperador",
                    "deleteParm":   "theIdOperador",
                    "deleteSucessIfNotExistsParm": "theExitoSiNoExiste"
                };




                theToInit.GRIDPARAMETERS_AUTORIZACIONESDEOPERADORDEPERFIL = {
                    "name":        theToInit.AUTORIZACIONESDEOPERADORDEPERFIL_NAME,
                    "gridLabel":   theToInit.AUTORIZACIONESDEOPERADORDEPERFIL_GRIDLABEL,
                    "labels":      theToInit.AUTORIZACIONESDEOPERADORDEPERFIL_LABELS,
                    "fields":      theToInit.AUTORIZACIONESDEOPERADORDEPERFIL_FIELDS,
                    "hiddenFields": theToInit.AUTORIZACIONESDEOPERADORDEPERFIL_HIDDENFIELDS,
                    "dataTypes":   theToInit.AUTORIZACIONESDEOPERADORDEPERFIL_DATATYPES,
                    "gridClasses": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_TABLE,
                    "classes":     theToInit.AUTORIZACIONESDEOPERADORDEPERFIL_COLUMNCLASSES,
                    "autoSelectIndex": -1,
                    "keyField":    "condicion",
                    "editorName":  theToInit.AUTORIZACIONDEOPERADORDEPERFIL_NAME,
                    "creatorName": theToInit.CREAR_AUTORIZACIONDEOPERADORDEPERFIL_NAME,
                    "masterType":  "Operador" /* ACV OJO 201411050008 Is used exclusively to compose UI labels, even if it's named as "masterType" while it shoudl be "masterTypeLabel" */,
                    "masterLabels": [ "vNombreOperador"],
                    "deleteTarget": "fFasesvalidacionSvce",
                    "delete":       "fprDo_Fasesvalidacion_EliminarAutorizacionDeOperador",
                    "deleteWith":   "vIdAutorizacion",
                    "deleteParm":   "theIdAutorizacion",
                    "deleteSucessIfNotExistsParm": "theExitoSiNoExiste"
                };





                theToInit.GRIDPARAMETERS = { };
                theToInit.GRIDPARAMETERS[ theToInit.PERFILES_NAME]                         =  theToInit.GRIDPARAMETERS_PERFILES;
                theToInit.GRIDPARAMETERS[ theToInit.OPERADORESDEPERFIL_NAME]               =  theToInit.GRIDPARAMETERS_OPERADORESDEPERFIL;
                theToInit.GRIDPARAMETERS[ theToInit.AUTORIZACIONESDEOPERADORDEPERFIL_NAME] =  theToInit.GRIDPARAMETERS_AUTORIZACIONESDEOPERADORDEPERFIL;




                theToInit.GRIDNAMES = [
                    theToInit.PERFILES_NAME,
                    theToInit.OPERADORESDEPERFIL_NAME,
                    theToInit.AUTORIZACIONESDEOPERADORDEPERFIL_NAME
                ];





                theToInit.GRIDNAMES_INITIALLOAD = [
                    theToInit.PERFILES_NAME,
                    theToInit.OPERADORESDEPERFIL_NAME
                ];









                theToInit.EDITPARAMETERS_OPERADORDEPERFIL = {
                    "name": theToInit.OPERADORDEPERFIL_NAME,
                    "editorLabel": theToInit.OPERADORDEPERFIL_EDITORLABEL,
                    "editorClasses": theSS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR,
                    "autoEdit": false,
                    "masterLabels": [ "vIdOperador", "descripcion"],
                    "fields": [
                        {
                            "name":  "vIdOperador",
                            "label": "Id",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "occult":   true,
                            "dataType": "Int",
                            "dataSize": 10,
                            "labelCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_SHORT],
                            "inputCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_INT_SHORT],
                            "changeParm": "theIdOperador",
                            "parmAlways": true
                        },
                        {
                            "name":  "vNombreOperador",
                            "label": "Nombre",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": false,
                            "dataType": "String",
                            "labelCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_MEDIUM],
                            "inputCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_STRING_MEDIUM],
                            "changeParm": "theNombreOperador",
                            "changeFlag": "theNombreOperador_cambiar"
                        },
                        {
                            "name":  "vNombreCompletoOperador",
                            "label": "Nombre completo",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": false,
                            "dataType": "String",
                            "labelCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_VERYLONG],
                            "inputCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_STRING_VERYLONG],
                            "changeParm": "theNombreCompletoOperador",
                            "changeFlag": "theNombreCompletoOperador_cambiar"
                        },
                        {
                            "name": "vCuentaBloqueada",
                            "label": "Acceso Bloqueado",
                            "dataType": "BoolYesNo",
                            "dataSize": 10,
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": false,
                            "labelCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_BOOLEAN_CHECK],
                            "inputCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_BOOLEAN_CHECK],
                            "changeParm": "theCuentaBloqueada",
                            "changeFlag": "theCuentaBloqueada_cambiar"
                        },
                        {
                            "name": "vNumeroAccesosGracia",
                            "label": "Accesos de Gracia",
                            "dataType": "Int",
                            "dataSize": 10,
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": false,
                            "labelCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_SHORT],
                            "inputCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_NUMBER_INT_SHORT],
                            "changeParm": "theNumeroAccesosGracia",
                            "changeFlag": "theNumeroAccesosGracia_cambiar"
                        },
                        {
                            "name": "vUsuarioDebeCambiarPswdAInicioDeSesion",
                            "label": "Cambiar contraseña",
                            "dataType": "BoolYesNo",
                            "dataSize": 10,
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": false,
                            "labelCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_BOOLEAN_CHECK],
                            "inputCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_BOOLEAN_CHECK],
                            "defaultValue": 0,
                            "changeParm": "theUsuarioDebeCambiarPswdAInicioDeSesion",
                            "changeFlag": "theUsuarioDebeCambiarPswdAInicioDeSesion_cambiar"
                        },
                        {
                            "name": "vUsuarioNoPuedeCambiarPswd",
                            "label": "Contraseña Inamovible",
                            "dataType": "BoolYesNo",
                            "dataSize": 10,
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": false,
                            "labelCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_BOOLEAN_CHECK],
                            "inputCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_BOOLEAN_CHECK],
                            "defaultValue": 0,
                            "changeParm": "theUsuarioNoPuedeCambiarPswd",
                            "changeFlag": "theUsuarioNoPuedeCambiarPswd_cambiar"
                        },
                        {
                            "name": "vDescripcionOperador",
                            "label": "Descripcion",
                            "dataType": "Text",
                            "dataSize": 255,
                            "minMult": 0,
                            "maxMult": 1,
                            "readOnly": false,
                            "labelCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_TEXT_SHORT],
                            "inputCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_TEXT_SHORT],
                            "heightCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDCONTAINER_HEIGHT_SHORT],
                            "heightEditCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDEDITCONTAINER_HEIGHT_SHORT],
                            "changeParm": "theDescripcionOperador",
                            "changeFlag": "theDescripcionOperador_cambiar"
                        },


                        {
                            "name": "vNumeroAccesosFallidos",
                            "label": "Accesos fallidos",
                            "dataType": "Int",
                            "minMult": 0,
                            "maxMult": 1,
                            "readOnly": true,
                            "labelCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_SHORT],
                            "inputCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_INT_SHORT]
                        },
                        {
                            "name": "vFechaUltimoAccesoStr",
                            "label": "Último Acceso",
                            "dataType": "String",
                            "minMult": 0,
                            "maxMult": 1,
                            "readOnly": true,
                            "labelCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_TIMESTAMP],
                            "inputCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_TIMESTAMP]
                        },
                        {
                            "name": "vFechaUltimoCambioPswdStr",
                            "label": "Último cambio",
                            "dataType": "String",
                            "minMult": 0,
                            "maxMult": 1,
                            "readOnly": true,
                            "labelCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_TIMESTAMP],
                            "inputCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_TIMESTAMP]
                        }
                    ]
                };






                theToInit.EDITPARAMETERS_AUTORIZACIONDEOPERADORDEPERFIL = {
                    "name": theToInit.AUTORIZACIONDEOPERADORDEPERFIL_NAME,
                    "editorLabel": theToInit.AUTORIZACIONDEOPERADORDEPERFIL_EDITORLABEL,
                    "editorClasses": theSS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR,
                    "autoEdit": false,
                    "masterLabels": [ "vNombreOperador", "vNombrePerfil"],
                    "noRefresh": true,
                    "noEdit":    true,
                    "noDelete":  false,
                    "fields": [
                        {
                            "name":  "vIdAutorizacion",
                            "label": "Id",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "occult":   true,
                            "dataType": "Int",
                            "dataSize": 10,
                            "labelCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_SHORT],
                            "inputCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_INT_SHORT],
                            "changeParm": "theIdAutorizacion",
                            "parmAlways": true
                        },
                        {
                            "name":  "vIdOperador",
                            "label": "Id Operador",
                            "minMult": 0,
                            "maxMult": 1,
                            "readOnly": true,
                            "occult":   true,
                            "dataType": "Int",
                            "dataSize": 10,
                            "labelCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_SHORT],
                            "inputCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_INT_SHORT]
                        },
                        {
                            "name": "vNombreOperador",
                            "label": "Operador",
                            "dataType": "String",
                            "minMult": 0,
                            "maxMult": 1,
                            "readOnly": true,
                            "occult":   true,
                            "labelCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_MEDIUM],
                            "inputCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_MEDIUM]
                        },
                        {
                            "name": "vNombreCompletoOperador",
                            "label": "Nombre Completo",
                            "dataType": "String",
                            "minMult": 0,
                            "maxMult": 1,
                            "readOnly": true,
                            "occult":   true,
                            "labelCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_VERYLONG],
                            "inputCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_VERYLONG]
                        },
                        {
                            "name":  "vIdPerfil",
                            "label": "Id Perfil",
                            "minMult": 0,
                            "maxMult": 1,
                            "readOnly": true,
                            "occult":   true,
                            "dataType": "Int",
                            "dataSize": 10,
                            "labelCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_SHORT],
                            "inputCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_INT_SHORT],
                            "changeParm": "theIdPerfil",
                            "changeFlag": "theIdPerfil_cambiar"
                        },
                        {
                            "name": "vNombrePerfil",
                            "label": "Perfil",
                            "dataType": "String",
                            "dataSize": 255,
                            "minMult": 0,
                            "maxMult": 1,
                            "occult":   true,
                            "readOnly": true,
                            "labelCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_MEDIUM],
                            "inputCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_MEDIUM],
                            "candidates": {
                                "retrievaAlways": true,
                                "candidateFields": [
                                    { "editorField": "vIdPerfil",     "candidateField": "vIdPerfil"},
                                    { "editorField": "vNombrePerfil", "candidateField": "vNombrePerfil"}
                                ],
                                "grid": {
                                    "name":        theToInit.PERFILESCANDIDATOSDEAUTORIZACIONOPERADORDEPERFIL_NAME,
                                    "gridLabel":   theToInit.PERFILESCANDIDATOSDEAUTORIZACIONOPERADORDEPERFIL_GRIDLABEL,
                                    "labels":      theToInit.PERFILESCANDIDATOSDEAUTORIZACIONOPERADORDEPERFIL_LABELS,
                                    "fields":      theToInit.PERFILESCANDIDATOSDEAUTORIZACIONOPERADORDEPERFIL_FIELDS,
                                    "dataTypes":   theToInit.PERFILESCANDIDATOSDEAUTORIZACIONOPERADORDEPERFIL_DATATYPES,
                                    "gridClasses": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_TABLE,
                                    "classes":     theToInit.PERFILESCANDIDATOSDEAUTORIZACIONOPERADORDEPERFIL_COLUMNCLASSES,
                                    "retrievalTarget": "fParentCtrl().fFasesvalidacionSvce",
                                    "retrieval":   "fprDo_Fasesvalidacion_ListaPerfiles",
                                    "keyField":     "vNombrePerfil"
                                }
                            }
                        },
                        {
                            "name": "vDescripcionPerfil",
                            "label": "Descripcion Perfil",
                            "dataType": "Text",
                            "minMult": 0,
                            "maxMult": 1,
                            "readOnly": true,
                            "occult":   true,
                            "labelCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_TEXT_SHORT],
                            "inputCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_TEXT_SHORT],
                            "heightCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDCONTAINER_HEIGHT_SHORT],
                            "heightEditCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDEDITCONTAINER_HEIGHT_SHORT]
                        }
                    ]
                };







                theToInit.EDITPARAMETERS = { };
                theToInit.EDITPARAMETERS[ theToInit.OPERADORDEPERFIL_NAME]     =  theToInit.EDITPARAMETERS_OPERADORDEPERFIL;
                theToInit.EDITPARAMETERS[ theToInit.AUTORIZACIONDEOPERADORDEPERFIL_NAME] =  theToInit.EDITPARAMETERS_AUTORIZACIONDEOPERADORDEPERFIL;





                theToInit.EDITORNAMES = [
                    theToInit.PERFIL_NAME,
                    theToInit.OPERADORDEPERFIL_NAME,
                    theToInit.AUTORIZACIONDEOPERADORDEPERFIL_NAME
                ];




                theToInit.EDITORNAMES_INITIALLOAD = [ ];










                theToInit.CREATEPARAMETERS_PERFIL = {
                    "name": theToInit.CREAR_PERFIL_NAME,
                    "creatorLabel": theToInit.PERFIL_CREATORLABEL,
                    "creatorClasses": theSS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR,
                    "fields": [
                        {
                            "name": "vNombrePerfil",
                            "label": "Nombre",
                            "dataType": "String",
                            "dataSize": 255,
                            "minMult": 1,
                            "maxMult": 1,
                            "labelCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_VERYLONG],
                            "inputCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_STRING_VERYLONG],
                            "validate": "$value && $value.length",
                            "invalidMessage": "Debe introducir un nombre no vacío",
                            "changeParm": "theNombrePerfil",
                            "parmAlways": true
                        },
                        {
                            "name": "vDescripcionPerfil",
                            "label": "Descripcion",
                            "dataType": "Text",
                            "dataSize": 512,
                            "minMult": 1,
                            "maxMult": 1,
                            "labelCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_TEXT_SHORT],
                            "inputCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_TEXT_SHORT],
                            "heightCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDCONTAINER_HEIGHT_SHORT],
                            "heightEditCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDEDITCONTAINER_HEIGHT_SHORT],
                            "changeParm": "theDescripcionPerfil",
                            "parmAlways": true
                        }
                    ]
                };



                theToInit.CREATEPARAMETERS_OPERADORDEPERFIL = {
                    "name": theToInit.CREAR_OPERADORDEPERFIL_NAME,
                    "creatorLabel": theToInit.OPERADORDEPERFIL_CREATORLABEL,
                    "creatorClasses": theSS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR,
                    "masterLabels": [ "vIdPerfil", "vNombrePerfil"],
                    "masterParms":  [ [ "vIdPerfil", "theIdPerfil", "optional"]],
                    "masterType":  theToInit.PERFIL_TYPE,
                    "fields": [
                        {
                            "name":  "vNombreOperador",
                            "label": "Nombre",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": false,
                            "dataType": "String",
                            "labelCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_MEDIUM],
                            "inputCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_STRING_MEDIUM],
                            "changeParm": "theNombreOperador",
                            "parmAlways": true
                        },
                        {
                            "name":  "vNombreCompletoOperador",
                            "label": "Nombre completo",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": false,
                            "dataType": "String",
                            "labelCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_VERYLONG],
                            "inputCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_STRING_VERYLONG],
                            "changeParm": "theNombreCompletoOperador",
                            "parmAlways": true
                        },
                        {
                            "name": "vCuentaBloqueada",
                            "label": "Acceso Bloqueado",
                            "dataType": "BoolYesNo",
                            "dataSize": 10,
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": false,
                            "labelCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_BOOLEAN_CHECK],
                            "inputCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_BOOLEAN_CHECK],
                            "changeParm": "theCuentaBloqueada",
                            "defaultValue": 0,
                            "parmAlways": true
                        },
                        {
                            "name": "vNumeroAccesosGracia",
                            "label": "Accesos de Gracia",
                            "dataType": "Int",
                            "dataSize": 10,
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": false,
                            "labelCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_SHORT],
                            "inputCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_NUMBER_INT_SHORT],
                            "changeParm": "theNumeroAccesosGracia",
                            "defaultValue": 3,
                            "parmAlways": true
                        },
                        {
                            "name": "vUsuarioDebeCambiarPswdAInicioDeSesion",
                            "label": "Cambiar contraseña",
                            "dataType": "BoolYesNo",
                            "dataSize": 10,
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": false,
                            "labelCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_BOOLEAN_CHECK],
                            "inputCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_BOOLEAN_CHECK],
                            "defaultValue": 0,
                            "changeParm": "theUsuarioDebeCambiarPswdAInicioDeSesion",
                            "parmAlways": true
                        },
                        {
                            "name": "vUsuarioNoPuedeCambiarPswd",
                            "label": "Contraseña Inamovible",
                            "dataType": "BoolYesNo",
                            "dataSize": 10,
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": false,
                            "labelCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_BOOLEAN_CHECK],
                            "inputCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_BOOLEAN_CHECK],
                            "defaultValue": 0,
                            "changeParm": "theUsuarioNoPuedeCambiarPswd",
                            "parmAlways": true
                        },
                        {
                            "name": "vDescripcionOperador",
                            "label": "Descripcion",
                            "dataType": "Text",
                            "dataSize": 255,
                            "minMult": 0,
                            "maxMult": 1,
                            "readOnly": false,
                            "labelCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_TEXT_SHORT],
                            "inputCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_TEXT_SHORT],
                            "heightCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDCONTAINER_HEIGHT_SHORT],
                            "heightEditCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDEDITCONTAINER_HEIGHT_SHORT],
                            "changeParm": "theDescripcionOperador",
                            "parmAlways": true
                        }
                    ]
                };





                theToInit.CREATEPARAMETERS_AUTORIZACIONDEOPERADORDEPERFIL = {
                    "name": theToInit.CREAR_AUTORIZACIONDEOPERADORDEPERFIL_NAME,
                    "creatorLabel": theToInit.AUTORIZACIONDEOPERADORDEPERFIL_CREATORLABEL,
                    "creatorClasses": theSS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR,
                    "masterLabels": [ "vNombreOperador"],
                    "masterParms":  [ [ "vIdOperador", "theIdOperador"]],
                    "masterType":  theToInit.OPERADOR_TYPE,
                    "fields": [
                        {
                            "name":  "vIdPerfil",
                            "label": "Id Perfil",
                            "minMult": 0,
                            "maxMult": 1,
                            "readOnly": true,
                            "occult": true,
                            "dataType": "Int",
                            "dataSize": 10,
                            "labelCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_SHORT],
                            "inputCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_INT_SHORT],
                            "changeParm": "theIdPerfil"
                        },
                        {
                            "name": "vNombrePerfil",
                            "label": "Perfil",
                            "dataType": "String",
                            "dataSize": 255,
                            "minMult": 0,
                            "maxMult": 1,
                            "readOnly": true,
                            "labelCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_MEDIUM],
                            "inputCss": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_MEDIUM],
                            "candidates": {
                                "retrievaAlways": true,
                                "candidateFields": [
                                    { "editorField": "vIdPerfil",     "candidateField": "vIdPerfil"},
                                    { "editorField": "vNombrePerfil", "candidateField": "vNombrePerfil"}
                                ],
                                "grid": {
                                    "name":        theToInit.PERFILESCANDIDATOSDENUEVAAUTORIZACIONOPERADORDEPERFIL_NAME,
                                    "gridLabel":   theToInit.PERFILESCANDIDATOSDENUEVAAUTORIZACIONOPERADORDEPERFIL_GRIDLABEL,
                                    "labels":      theToInit.PERFILESCANDIDATOSDENUEVAAUTORIZACIONOPERADORDEPERFIL_LABELS,
                                    "fields":      theToInit.PERFILESCANDIDATOSDENUEVAAUTORIZACIONOPERADORDEPERFIL_FIELDS,
                                    "dataTypes":   theToInit.PERFILESCANDIDATOSDENUEVAAUTORIZACIONOPERADORDEPERFIL_DATATYPES,
                                    "gridClasses": theS_CssNames_Springnut_Fasesvalidacion.CSSs_SPRINGNUT_FASESVALIDACION_TABLE,
                                    "classes":     theToInit.PERFILESCANDIDATOSDENUEVAAUTORIZACIONOPERADORDEPERFIL_COLUMNCLASSES,
                                    "retrievalTarget": "fParentCtrl().fFasesvalidacionSvce",
                                    "retrieval":   "fprDo_Fasesvalidacion_ListaPerfiles",
                                    "keyField":     "vNombrePerfil"
                                }
                            }
                        }
                    ]
                };









                theToInit.CREATEPARAMETERS = { };
                theToInit.CREATEPARAMETERS[ theToInit.CREAR_PERFIL_NAME]              =  theToInit.CREATEPARAMETERS_PERFIL;
                theToInit.CREATEPARAMETERS[ theToInit.CREAR_OPERADORDEPERFIL_NAME]            =  theToInit.CREATEPARAMETERS_OPERADORDEPERFIL;
                theToInit.CREATEPARAMETERS[ theToInit.CREAR_AUTORIZACIONDEOPERADORDEPERFIL_NAME] =  theToInit.CREATEPARAMETERS_AUTORIZACIONDEOPERADORDEPERFIL;




                theToInit.CREATORNAMES = [
                    theToInit.CREAR_PERFIL_NAME,
                    theToInit.CREAR_OPERADORDEPERFIL_NAME,
                    theToInit.CREAR_AUTORIZACIONDEOPERADORDEPERFIL_NAME
                ];









                theToInit.WIRES = [

                    {   "name":     "UpdateListaOperadoresDePerfilOnPerfilesSelectionChange",
                        "kind":     "GRID2SLAVEGRID",
                        "from":     theToInit.PERFILES_NAME,
                        "to":       theToInit.OPERADORESDEPERFIL_NAME,
                        "doTarget": "fFasesvalidacionSvce",
                        "do":       "fprDo_Fasesvalidacion_ListaOperadoresDePerfil",
                        "with":     "vIdPerfil"
                    },
                    {   "name":     "UpdateOperadorDePerfilEditorOnOperadoresDePerfilSelectionChange",
                        "kind":     "GRID2EDITOR",
                        "from":     theToInit.OPERADORESDEPERFIL_NAME,
                        "to":       theToInit.OPERADORDEPERFIL_NAME,
                        "when":     "SELECTION",
                        "doTarget": "fFasesvalidacionSvce",
                        "do":       "fprDo_Fasesvalidacion_OperadorDatos",
                        "with":     "vIdOperador",
                        "reverseDo":   "fprDo_Fasesvalidacion_CambiarOperador"
                    },
                    {   "name":     "UpdateOperadorDePerfilCreatorOnOperadoresDePerfilSelectionChange",
                        "kind":     "GRID2CREATOR",
                        "from":     theToInit.OPERADORESDEPERFIL_NAME,
                        "to":       theToInit.CREAR_OPERADORDEPERFIL_NAME,
                        "doTarget": "fFasesvalidacionSvce",
                        "do":       "fprDo_Fasesvalidacion_OperadorDatos",
                        "with":     "vIdOperador",
                        "reverseDo": "fprDo_Fasesvalidacion_CrearOperadorConPerfil"
                    },

                    {   "name":     "UpdateListaAutorizacionesDeOperadorDePerfilOnOperadoresDePerfilSelectionChange",
                        "kind":     "GRID2SLAVEGRID",
                        "from":     theToInit.OPERADORESDEPERFIL_NAME,
                        "to":       theToInit.AUTORIZACIONESDEOPERADORDEPERFIL_NAME,
                        "doTarget": "fFasesvalidacionSvce",
                        "do":       "fprDo_Fasesvalidacion_ListaAutorizacionesDeOperador",
                        "with":     "vIdOperador"
                    },

                    {   "name":     "UpdateAutorizacionDeOperadorDePerfilEditorOnAutorizacionesDeOperadorDePerfilSelectionChange",
                        "kind":     "GRID2EDITOR",
                        "from":     theToInit.AUTORIZACIONESDEOPERADORDEPERFIL_NAME,
                        "to":       theToInit.AUTORIZACIONDEOPERADORDEPERFIL_NAME,
                        "doTarget": "fFasesvalidacionSvce",
                        "do":       "fprDo_Fasesvalidacion_AutorizacionDatos",
                        "with":     "vIdAutorizacion",
                        "reverseDo":   "fprDo_Fasesvalidacion_CambiarAutorizacionOperador"
                    },
                    {   "name":     "UpdateAutorizacionDeOperadorDePerfilCreatorOnAutorizacionesDeOperadorDePerfilSelectionChange",
                        "kind":     "GRID2CREATOR",
                        "from":     theToInit.AUTORIZACIONESDEOPERADORDEPERFIL_NAME,
                        "to":       theToInit.CREAR_AUTORIZACIONDEOPERADORDEPERFIL_NAME,
                        "doTarget": "fFasesvalidacionSvce",
                        "do":       "fprDo_Fasesvalidacion_AutorizacionDatos",
                        "with":     "vIdAutorizacion",
                        "reverseDo": "fprDo_Fasesvalidacion_CrearAutorizacionDeOperador"
                    },

                    {   "name":     "UpdatePerfilEditorOnPerfilesSelectionChange",
                        "kind":     "GRID2EDITOR",
                        "from":     theToInit.PERFILES_NAME,
                        "to":       theToInit.PERFIL_NAME,
                        "doTarget": "fFasesvalidacionSvce",
                        "do":       "fprDo_Fasesvalidacion_PerfilDatos",
                        "with":     "vIdPerfil",
                        "reverseDo":   "fprDo_Fasesvalidacion_CambiarPerfil"
                    },
                    {   "name":     "UpdatePerfilCreatorOnPerfilesSelectionChange",
                        "kind":     "GRID2CREATOR",
                        "from":     theToInit.PERFILES_NAME,
                        "to":       theToInit.CREAR_PERFIL_NAME,
                        "doTarget": "fFasesvalidacionSvce",
                        "do":       "fprDo_Fasesvalidacion_PerfilDatos",
                        "with":     "vIdPerfil",
                        "reverseDo": "fprDo_Fasesvalidacion_CrearPerfil"
                    }

                ];















                theToInit.TOPTABSBAR_ENTRIES = [
                    { label:  theToInit.OPERADORESDEPERFIL_GRIDLABEL,               value: theToInit.OPERADORESDEPERFIL_NAME, selectorGridName: theToInit.PERFILES_NAME},
                    { label:  theToInit.AUTORIZACIONESDEOPERADORDEPERFIL_GRIDLABEL, value: theToInit.AUTORIZACIONESDEOPERADORDEPERFIL_NAME}
                ];



                theToInit.TOPTABSBAR_INITIALLYSELECTEDTAB = theToInit.OPERADORESDEPERFIL_NAME;




                theToInit.TOPTABSBAR_TABSFIXEDINITIAL = [ ];






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







