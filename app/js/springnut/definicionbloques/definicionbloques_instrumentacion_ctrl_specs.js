'use strict';

/*
 * definicionbloques_instrumentacion_ctrl_specs.js
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






angular.module("definicionbloquesTypes").factory("DefinicionbloquesInstrumentacionCtrlSpecs", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "CssKeys",
    "CssNames_Springnut_Definicionbloques",
    function( theSS_typesregistry,
              theSS_Overrider,
              theSS_CssKeys,
              theSS_CssNames_Springnut_Definicionbloques) {




        var ModuleName     = "definicionbloques_instrumentacion_ctrl_specs";
        var ModulePackages = "springnut/definicionbloques";
        var ModuleFullName = ModulePackages + "/" + ModuleName;



        var aMod_definer = function( theS_Overrider,
                                     theS_CssKeys,
                                     theS_CssNames_Springnut_Definicionbloques) {


            if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}






            var FICHEROS_NAME          = "ListaFicheros";
            var BLOQUESDEFICHERO_NAME  = "ListaBloquesDeFichero";
            var OPERADORES_NAME        = "ListaOperadores";
            var BLOQUESDEOPERADOR_NAME = "ListaBloquesDeOperador";

            var FICHERO_NAME          = "Fichero";
            var BLOQUEDEFICHERO_NAME  = "BloqueDeFichero";
            var OPERADOR_NAME         = "Operador";
            var BLOQUEDEOPERADOR_NAME = "BloqueDeOperador";

            var CREAR_BLOQUEDEFICHERO_NAME = "CrearBloqueDeFichero";



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



                theToInit.DEFINICIONBLOQUES_PAGEHEADER = "Definición de Bloques";



                theToInit.BLOQUESDEFICHERO_TABLABEL  = "Bloques de Fichero";
                theToInit.BLOQUESDEOPERADOR_TABLABEL = "Bloques de Operador";




                theToInit.FICHEROS_GRIDLABEL = "Ficheros";
                theToInit.FICHEROS_LABELS    = [
                    "Boletines",
                    "Id",
                    "Año",
                    "Mes",
                    "Provincia",
                    "Cuantos",
                    "Desde",
                    "Hasta",
                    "Nombre"
                ];
                theToInit.FICHEROS_FIELDS    = [
                    "vTipoBoletin",
                    "vIdFichero",
                    "vAnoFichero",
                    "vMesFichero",
                    "vCodigoProvinciaFichero",
                    "vNumBoletines",
                    "vIdentificaDesde",
                    "vIdentificaHasta",
                    "vNombreFichero"
                ];
                theToInit.FICHEROS_FIELDS_HIDDEN = [
                ];
                theToInit.FICHEROS_DATATYPES = [
                    "String",
                    "Int",
                    "Int",
                    "Int",
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
                    "cssSpringnut_Ficheros_IdentificasCuantos",
                    "cssSpringnut_Ficheros_IdentificaDesdeHasta",
                    "cssSpringnut_Ficheros_IdentificaDesdeHasta",
                    "cssSpringnut_Ficheros_NombreFichero"
                ];








                theToInit.BLOQUESDEFICHERO_GRIDLABEL = "Bloques";
                theToInit.BLOQUESDEFICHERO_LABELS    = [
                    "Boletines",
                    "Bloque",
                    "Cuantos",
                    "Desde",
                    "Hasta",
                    "IdFich",
                    "Año",
                    "Mes",
                    "Provincia",
                    "Fichero",
                    "IdOper",
                    "NombreOperador",
                    "NombreCompleto"
                ];
                theToInit.BLOQUESDEFICHERO_FIELDS    = [
                    "vTipoBoletin",
                    "vIdBloque",
                    "vNumBoletines",
                    "vIdentificaDesde",
                    "vIdentificaHasta",
                    "vIdFichero",
                    "vAnoFichero",
                    "vMesFichero",
                    "vCodigoProvinciaFichero",
                    "vNombreFichero",
                    "vIdOperador",
                    "vNombreOperador",
                    "vNombreCompletoOperador"

                ];
                theToInit.BLOQUESDEFICHERO_FIELDS_HIDDEN = [
                    "vNombreCompletoOperador"
                ];
                theToInit.BLOQUESDEFICHERO_DATATYPES = [
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
                    "String",
                    "String"
                ];
                theToInit.BLOQUESDEFICHERO_COLUMNCLASSES = [
                    "cssSpringnut_Ficheros_TipoBoletin",
                    "cssSpringnut_Bloques_IdBloque",
                    "cssSpringnut_Ficheros_IdentificasCuantos",
                    "cssSpringnut_Ficheros_IdentificaDesdeHasta",
                    "cssSpringnut_Ficheros_IdentificaDesdeHasta",
                    "cssSpringnut_Ficheros_IdFichero",
                    "cssSpringnut_Ficheros_Ano",
                    "cssSpringnut_Ficheros_Mes",
                    "cssSpringnut_Ficheros_Provincia",
                    "cssSpringnut_Bloques_NombreFichero",
                    "cssSpringnut_Operadores_IdOperador",
                    "cssSpringnut_Bloques_NombreOperador",
                    "cssSpringnut_Operadores_NombreCompletoOperador"
                ];









                theToInit.OPERADORES_GRIDLABEL = "Operadores";
                theToInit.OPERADORES_LABELS    = [
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
                theToInit.OPERADORES_FIELDS    = [
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
                theToInit.OPERADORES_FIELDS_HIDDEN = [
                    "vNumeroAccesosGracia",
                    "vUsuarioDebeCambiarPswdAInicioDeSesion",
                    "vUsuarioNoPuedeCambiarPswd",
                    "vDescripcionOperador"
                ];
                theToInit.OPERADORES_DATATYPES = [
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
                theToInit.OPERADORES_COLUMNCLASSES = [
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








                theToInit.OPERADORESCANDIDATOSDEBLOQUEDEFICHERO_NAME      = BLOQUEDEFICHERO_NAME + "_" + "_vNombreOperador"  + "_Candidatos_" + OPERADORES_NAME;
                theToInit.OPERADORESCANDIDATOSDEBLOQUEDEFICHERO_GRIDLABEL = theToInit.OPERADORES_GRIDLABEL + " candidatos para " + theToInit.BLOQUESDEFICHERO_GRIDLABEL;
                theToInit.OPERADORESCANDIDATOSDEBLOQUEDEFICHERO_LABELS    = [
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
                theToInit.OPERADORESCANDIDATOSDEBLOQUEDEFICHERO_FIELDS    = [
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
                theToInit.OPERADORESCANDIDATOSDEBLOQUEDEFICHERO_FIELDS_HIDDEN = [
                    "vNumeroAccesosGracia",
                    "vUsuarioDebeCambiarPswdAInicioDeSesion",
                    "vUsuarioNoPuedeCambiarPswd",
                    "vDescripcionOperador"
                ];
                theToInit.OPERADORESCANDIDATOSDEBLOQUEDEFICHERO_DATATYPES = [
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
                theToInit.OPERADORESCANDIDATOSDEBLOQUEDEFICHERO_COLUMNCLASSES = [
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







                theToInit.OPERADORESCANDIDATOSDENUEVOBLOQUEDEFICHERO_NAME      = BLOQUEDEFICHERO_NAME + "_Crear_" + "_vNombreOperador"  + "_Candidatos_" + OPERADORES_NAME;
                theToInit.OPERADORESCANDIDATOSDENUEVOBLOQUEDEFICHERO_GRIDLABEL = theToInit.OPERADORES_GRIDLABEL + " candidatos para crear " + theToInit.BLOQUESDEFICHERO_GRIDLABEL;
                theToInit.OPERADORESCANDIDATOSDENUEVOBLOQUEDEFICHERO_LABELS    = [
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
                theToInit.OPERADORESCANDIDATOSDENUEVOBLOQUEDEFICHERO_FIELDS    = [
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
                theToInit.OPERADORESCANDIDATOSDENUEVOBLOQUEDEFICHERO_FIELDS_HIDDEN = [
                    "vNumeroAccesosGracia",
                    "vUsuarioDebeCambiarPswdAInicioDeSesion",
                    "vUsuarioNoPuedeCambiarPswd",
                    "vDescripcionOperador"
                ];
                theToInit.OPERADORESCANDIDATOSDENUEVOBLOQUEDEFICHERO_DATATYPES = [
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
                theToInit.OPERADORESCANDIDATOSDENUEVOBLOQUEDEFICHERO_COLUMNCLASSES = [
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







                theToInit.BLOQUESDEOPERADOR_GRIDLABEL = "Bloques";
                theToInit.BLOQUESDEOPERADOR_LABELS    = [
                    "Boletines",
                    "Bloque",
                    "Cuantos",
                    "Desde",
                    "Hasta",
                    "IdFich",
                    "Año",
                    "Mes",
                    "Provincia",
                    "Fichero",
                    "IdOper",
                    "NombreOperador",
                    "NombreCompleto"
                ];
                theToInit.BLOQUESDEOPERADOR_FIELDS    = [
                    "vTipoBoletin",
                    "vIdBloque",
                    "vNumBoletines",
                    "vIdentificaDesde",
                    "vIdentificaHasta",
                    "vIdFichero",
                    "vAnoFichero",
                    "vMesFichero",
                    "vCodigoProvinciaFichero",
                    "vNombreFichero",
                    "vIdOperador",
                    "vNombreOperador",
                    "vNombreCompletoOperador"

                ];
                theToInit.BLOQUESDEOPERADOR_FIELDS_HIDDEN = [
                    "vNombreCompletoOperador"
                ];
                theToInit.BLOQUESDEOPERADOR_DATATYPES = [
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
                    "String",
                    "String"
                ];
                theToInit.BLOQUESDEOPERADOR_COLUMNCLASSES = [
                    "cssSpringnut_Ficheros_TipoBoletin",
                    "cssSpringnut_Bloques_IdBloque",
                    "cssSpringnut_Ficheros_IdentificasCuantos",
                    "cssSpringnut_Ficheros_IdentificaDesdeHasta",
                    "cssSpringnut_Ficheros_IdentificaDesdeHasta",
                    "cssSpringnut_Ficheros_IdFichero",
                    "cssSpringnut_Ficheros_Ano",
                    "cssSpringnut_Ficheros_Mes",
                    "cssSpringnut_Ficheros_Provincia",
                    "cssSpringnut_Bloques_NombreFichero",
                    "cssSpringnut_Operadores_IdOperador",
                    "cssSpringnut_Bloques_NombreOperador",
                    "cssSpringnut_Operadores_NombreCompletoOperador"
                ];





                theToInit.FICHERO_EDITORLABEL          = "Fichero";
                theToInit.OPERADOR_EDITORLABEL         = "Operador";
                theToInit.BLOQUEDEFICHERO_EDITORLABEL  = "Bloque";
                theToInit.BLOQUEDEOPERADOR_EDITORLABEL = "Bloque";


                theToInit.BLOQUEDEFICHERO_CREATORLABEL  = "Crear Bloque";

                theToInit.FICHERO_TYPE   = "Fichero";
                theToInit.OPERADOR_TYPE  = "Operador";
                theToInit.BLOQUE_TYPE    = "Bloque";








                theToInit.GRIDNAMES_INITIALLOAD_FICHEROS = [
                    FICHEROS_NAME
                ];
                theToInit.GRIDNAMES_INITIALLOAD_OPERADORES = [
                    OPERADORES_NAME
                ];
                theToInit.GRIDNAMES_INITIALLOAD_ALL = [
                    FICHEROS_NAME,
                    OPERADORES_NAME
                ];
                theToInit.GRIDNAMES_INITIALLOAD_NONE = [];

                theToInit.GRIDNAMES_INITIALLOAD = theToInit.GRIDNAMES_INITIALLOAD_NONE.slice();














                theToInit.TOPTABSBAR_INITIALLYSELECTEDTAB = FICHEROS_NAME;






                theToInit.TOPTABSBAR_TABSFIXEDINITIAL_NONE = [];

                theToInit.TOPTABSBAR_TABSFIXEDINITIAL_ALL = [
                    FICHEROS_NAME,
                    OPERADORES_NAME,
                    BLOQUESDEFICHERO_NAME,
                    BLOQUESDEOPERADOR_NAME
                ];

                theToInit.TOPTABSBAR_TABSFIXEDINITIAL_LISTAFICHEROS = [ FICHEROS_NAME];

                theToInit.TOPTABSBAR_TABSFIXEDINITIAL_FIRST = [ theToInit.TOPTABSBAR_TABSFIXEDINITIAL_ALL[ 0]];

                theToInit.TOPTABSBAR_TABSFIXEDINITIAL = theToInit.TOPTABSBAR_TABSFIXEDINITIAL_NONE.slice();









                theToInit.TOPTABSBAR_TABSFIXEDINITIAL_STATIC_NONE = [];

                theToInit.TOPTABSBAR_TABSFIXEDINITIAL_STATIC_ALL = [
                    STATICTAB_GRIDSPECS_NAME,
                    STATICTAB_EDITORSPECS_NAME,
                    STATICTAB_WIRESPECS_NAME,
                    STATICTAB_SVCESPECS_NAME
                ];

                theToInit.TOPTABSBAR_TABSFIXEDINITIAL_STATIC_GRIDSPECS = [ STATICTAB_GRIDSPECS_NAME];

                theToInit.TOPTABSBAR_TABSFIXEDINITIAL_STATIC_FIRST = [ theToInit.TOPTABSBAR_TABSFIXEDINITIAL_STATIC_ALL[ 0]];

                theToInit.TOPTABSBAR_TABSFIXEDINITIAL_STATIC = theToInit.TOPTABSBAR_TABSFIXEDINITIAL_STATIC_NONE.slice();

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
                theToInit.DEFAULTTITLE = "DefinicionbloquesCtrlDefaultName";





                theToInit.DEFINICIONBLOQUES_DOMIDPREFIX = "didSpringnut_Definicionbloques";
                theToInit.DOMIDPREFIX = theToInit.DEFINICIONBLOQUES_DOMIDPREFIX;




                theToInit.FICHEROS_NAME          = FICHEROS_NAME;
                theToInit.OPERADORES_NAME        = OPERADORES_NAME;
                theToInit.BLOQUESDEFICHERO_NAME  = BLOQUESDEFICHERO_NAME;
                theToInit.BLOQUESDEOPERADOR_NAME = BLOQUESDEOPERADOR_NAME;


                theToInit.FICHERO_NAME          = FICHERO_NAME;
                theToInit.OPERADOR_NAME         = OPERADOR_NAME;
                theToInit.BLOQUEDEFICHERO_NAME  = BLOQUEDEFICHERO_NAME;
                theToInit.BLOQUEDEOPERADOR_NAME = BLOQUEDEOPERADOR_NAME;


                theToInit.CREAR_BLOQUEDEFICHERO_NAME = CREAR_BLOQUEDEFICHERO_NAME;


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
                    "gridClasses": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_TABLE,
                    "classes":     theToInit.FICHEROS_COLUMNCLASSES,
                    "retrievalTarget": "fDefinicionbloquesSvce",
                    "retrieval":    "fprDo_Definicionbloques_ListaFicheros",
                    "query":     {
                        "theTipoBoletin": "fParentCtrl()._v_TipoBoletin"
                    },
                    "autoSelectIndex": -1,
                    "keyField":     "vIdFichero",
                    "editorName":   theToInit.FICHERO_NAME,
                    "noEdit":       true,
                    "noDelete":     true
                };




                theToInit.GRIDPARAMETERS_BLOQUESDEFICHERO = {
                    "name":        theToInit.BLOQUESDEFICHERO_NAME,
                    "gridLabel":   theToInit.BLOQUESDEFICHERO_GRIDLABEL,
                    "labels":      theToInit.BLOQUESDEFICHERO_LABELS,
                    "fields":      theToInit.BLOQUESDEFICHERO_FIELDS,
                    "hiddenFields": theToInit.BLOQUESDEFICHERO_FIELDS_HIDDEN,
                    "dataTypes":   theToInit.BLOQUESDEFICHERO_DATATYPES,
                    "gridClasses": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_TABLE,
                    "classes":     theToInit.BLOQUESDEFICHERO_COLUMNCLASSES,
                    "autoSelectIndex": -1,
                    "keyField":     "vIdBloque",
                    "masterType":   theToInit.FICHERO_NAME,
                    "masterLabels": [ "vIdFichero", "vAnoFichero", "vMesFichero", "vCodigoProvinciaFichero", "vIdentificaDesde", "vIdentificaHasta", "vNombreFichero"],
                    "editorName":   theToInit.BLOQUEDEFICHERO_NAME,
                    "creatorName":  theToInit.CREAR_BLOQUEDEFICHERO_NAME,
                    "noEdit":       false,
                    "noDelete":     false,
                    "deleteTarget": "fDefinicionbloquesSvce",
                    "delete":       "fprDo_Definicionbloques_EliminarBloque",
                    "deleteWith": null,
                    "deleteParm": null,
                    "deleteQuery":     {
                        "theTipoBoletin":     "fParentCtrl()._v_TipoBoletin",
                        "theIdBloque":        "vIdBloque"
                    },
                    "deleteSucessIfNotExistsParm": "theExitoSiNoExiste",
                    "createRoles":  [ "DEMO", "ADMINISTRADOR", "CODIFICADOR"],
                    "deleteRoles":  [ "DEMO", "ADMINISTRADOR", "CODIFICADOR"]
                };






                theToInit.GRIDPARAMETERS_OPERADORES = {
                    "name":        theToInit.OPERADORES_NAME,
                    "gridLabel":   theToInit.OPERADORES_GRIDLABEL,
                    "labels":      theToInit.OPERADORES_LABELS,
                    "fields":      theToInit.OPERADORES_FIELDS,
                    "hiddenFields": theToInit.OPERADORES_FIELDS_HIDDEN,
                    "dataTypes":   theToInit.OPERADORES_DATATYPES,
                    "gridClasses": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_TABLE,
                    "classes":     theToInit.OPERADORES_COLUMNCLASSES,
                    "retrievalTarget": "fDefinicionbloquesSvce",
                    "retrieval":    "fprDo_Definicionbloques_ListaOperadores",
                    "autoSelectIndex": -1,
                    "keyField":     "vIdOperador",
                    "editorName":   theToInit.OPERADOR_NAME,
                    "noEdit":       true,
                    "noDelete":     true
                };






                theToInit.GRIDPARAMETERS_BLOQUESDEOPERADOR = {
                    "name":        theToInit.BLOQUESDEOPERADOR_NAME,
                    "gridLabel":   theToInit.BLOQUESDEOPERADOR_GRIDLABEL,
                    "labels":      theToInit.BLOQUESDEOPERADOR_LABELS,
                    "fields":      theToInit.BLOQUESDEOPERADOR_FIELDS,
                    "hiddenFields": theToInit.BLOQUESDEOPERADOR_FIELDS_HIDDEN,
                    "dataTypes":   theToInit.BLOQUESDEOPERADOR_DATATYPES,
                    "gridClasses": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_TABLE,
                    "classes":     theToInit.BLOQUESDEOPERADOR_COLUMNCLASSES,
                    "autoSelectIndex": -1,
                    "keyField":     "vIdBloque",
                    "masterType":   theToInit.OPERADOR_NAME,
                    "masterLabels": [ "vIdOperador", "vNombreOperador", "vNombreCompletoOperador"],
                    "editorName":   theToInit.BLOQUEDEOPERADOR_NAME,
                    "noEdit":       false,
                    "noDelete":     false,
                    "deleteTarget": "fDefinicionbloquesSvce",
                    "delete":       "fprDo_Definicionbloques_EliminarBloque",
                    "deleteWith":   "vIdBloque",
                    "deleteParm":   "theIdBloque",
                    "deleteSucessIfNotExistsParm": "theExitoSiNoExiste"
                };

                
                


                theToInit.GRIDPARAMETERS = { };
                theToInit.GRIDPARAMETERS[ theToInit.FICHEROS_NAME]          =  theToInit.GRIDPARAMETERS_FICHEROS;
                theToInit.GRIDPARAMETERS[ theToInit.OPERADORES_NAME]        =  theToInit.GRIDPARAMETERS_OPERADORES;
                theToInit.GRIDPARAMETERS[ theToInit.BLOQUESDEFICHERO_NAME]  =  theToInit.GRIDPARAMETERS_BLOQUESDEFICHERO;
                theToInit.GRIDPARAMETERS[ theToInit.BLOQUESDEOPERADOR_NAME] =  theToInit.GRIDPARAMETERS_BLOQUESDEOPERADOR;




                theToInit.GRIDNAMES = [
                    theToInit.FICHEROS_NAME,
                    theToInit.OPERADORES_NAME,
                    theToInit.BLOQUESDEFICHERO_NAME,
                    theToInit.BLOQUESDEOPERADOR_NAME
                ];






                theToInit.GRIDNAMES_INITIALLOAD_DEFAULT = [
                    theToInit.FICHEROS_NAME,
                    theToInit.OPERADORES_NAME
                ];
                theToInit.GRIDNAMES_INITIALLOAD_DEFAULT = [
                ];

                if( !theToInit.GRIDNAMES_INITIALLOAD) {
                    theToInit.GRIDNAMES_INITIALLOAD = theToInit.GRIDNAMES_INITIALLOAD_DEFAULT;
                }









                theToInit.EDITPARAMETERS_FICHERO = {
                    "name": theToInit.FICHERO_NAME,
                    "editorLabel": theToInit.FICHERO_EDITORLABEL,
                    "editorClasses": theSS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR,
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
                            "dataType": "String",
                            "labelCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_SHORT],
                            "inputCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_SHORT]
                        },
                        {
                            "name":  "vIdFichero",
                            "label": "Id",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "occult":   false,
                            "dataType": "Int",
                            "dataSize": 10,
                            "labelCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_MEDIUM],
                            "inputCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_INT_MEDIUM]
                        },
                        {
                            "name":  "vAnoFichero",
                            "label": "Año",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "dataType": "Int",
                            "labelCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_SHORT],
                            "inputCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_INT_SHORT]
                        },
                        {
                            "name":  "vMesFichero",
                            "label": "Mes",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "dataType": "Int",
                            "labelCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_SHORT],
                            "inputCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_INT_SHORT]
                        },
                        {
                            "name":  "vCodigoProvinciaFichero",
                            "label": "Provincia",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "dataType": "Int",
                            "labelCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_SHORT],
                            "inputCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_INT_SHORT]
                        },
                        {
                            "name":  "vNombreFichero",
                            "label": "Nombre Fichero",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "dataType": "String",
                            "labelCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_MEDIUM],
                            "inputCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_MEDIUM]
                        },
                        {
                            "name":  "vIdentificaDesde",
                            "label": "Desde Identifica",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "occult":   false,
                            "dataType": "Int",
                            "dataSize": 10,
                            "labelCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_SHORT],
                            "inputCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_NUMBER_INT_SHORT]
                        },
                        {
                            "name":  "vIdentificaHasta",
                            "label": "Hasta Identifica",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "occult":   false,
                            "dataType": "String",
                            "dataSize": 10,
                            "labelCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_SHORT],
                            "inputCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_NUMBER_INT_SHORT]
                        }
                    ]
                };












                theToInit.EDITPARAMETERS_OPERADOR = {
                    "name": theToInit.OPERADOR_NAME,
                    "editorLabel": theToInit.OPERADOR_EDITORLABEL,
                    "editorClasses": theSS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR,
                    "autoEdit": false,
                    "masterLabels": [ "vNombreOperador", "vNombreCompletoOperador"],
                    "noEdit":    true,
                    "noDelete":  true,
                    "noRefresh": true,
                    "fields": [
                        {
                            "name":  "vIdOperador",
                            "label": "Id Operador",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "occult":   false,
                            "dataType": "Int",
                            "dataSize": 10,
                            "labelCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_SHORT],
                            "inputCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_INT_SHORT]
                        },
                        {
                            "name":  "vNombreOperador",
                            "label": "Nombre Operador",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "dataType": "String",
                            "labelCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_MEDIUM],
                            "inputCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_MEDIUM]
                        },
                        {
                            "name":  "vNombreCompletoOperador",
                            "label": "Nombre completo",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "dataType": "String",
                            "labelCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_VERYLONG],
                            "inputCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_VERYLONG]
                        },
                        {
                            "name": "vCuentaBloqueada",
                            "label": "Acceso Bloqueado",
                            "dataType": "BoolYesNo",
                            "dataSize": 10,
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "labelCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_BOOLEAN_CHECK],
                            "inputCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_BOOLEAN_CHECK]
                        },
                        {
                            "name": "vNumeroAccesosGracia",
                            "label": "Accesos de Gracia",
                            "dataType": "Int",
                            "dataSize": 10,
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "labelCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_SHORT],
                            "inputCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_INT_SHORT]
                        },
                        {
                            "name": "vUsuarioDebeCambiarPswdAInicioDeSesion",
                            "label": "Cambiar contraseña",
                            "dataType": "BoolYesNo",
                            "dataSize": 10,
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "labelCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_BOOLEAN_CHECK],
                            "inputCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_BOOLEAN_CHECK]
                        },
                        {
                            "name": "vUsuarioNoPuedeCambiarPswd",
                            "label": "Contraseña Inamovible",
                            "dataType": "BoolYesNo",
                            "dataSize": 10,
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "labelCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_BOOLEAN_CHECK],
                            "inputCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_BOOLEAN_CHECK]
                        },
                        {
                            "name": "vDescripcionOperador",
                            "label": "Descripcion",
                            "dataType": "Text",
                            "dataSize": 255,
                            "minMult": 0,
                            "maxMult": 1,
                            "readOnly": true,
                            "labelCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_TEXT_SHORT],
                            "inputCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_TEXT_SHORT],
                            "heightCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDCONTAINER_HEIGHT_SHORT],
                            "heightEditCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDEDITCONTAINER_HEIGHT_SHORT]
                        },
                        {
                            "name": "vNumeroAccesosFallidos",
                            "label": "Accesos fallidos",
                            "dataType": "Int",
                            "minMult": 0,
                            "maxMult": 1,
                            "readOnly": true,
                            "labelCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_SHORT],
                            "inputCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_INT_SHORT]
                        },
                        {
                            "name": "vFechaUltimoAccesoStr",
                            "label": "Último Acceso",
                            "dataType": "String",
                            "minMult": 0,
                            "maxMult": 1,
                            "readOnly": true,
                            "labelCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_TIMESTAMP],
                            "inputCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_TIMESTAMP]
                        },
                        {
                            "name": "vFechaUltimoCambioPswdStr",
                            "label": "Último cambio",
                            "dataType": "String",
                            "minMult": 0,
                            "maxMult": 1,
                            "readOnly": true,
                            "labelCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_TIMESTAMP],
                            "inputCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_TIMESTAMP]
                        }
                    ]
                };














                theToInit.EDITPARAMETERS_BLOQUEDEFICHERO = {
                    "name": theToInit.BLOQUEDEFICHERO_NAME,
                    "editorLabel": theToInit.BLOQUEDEFICHERO_EDITORLABEL,
                    "editorClasses": theSS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR,
                    "autoEdit": false,
                    "masterLabels": [ "vIdFichero", "vAnoFichero", "vMesFichero", "vCodigoProvinciaFichero", "vNombreFichero", "vIdentificaDesde", "vIdentificaHasta", "vIdOperador", "vNombreOperador", "vNombreCompletoOperador"],
                    "noEdit":    false,
                    "noDelete":  false,
                    "noRefresh": false,
                    "editRoles":  [ "DEMO", "ADMINISTRADOR", "CODIFICADOR"],
                    "fields": [
                        {
                            "name":  "vTipoBoletin",
                            "label": "Tipo Boletines",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "dataType": "String",
                            "labelCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_SHORT],
                            "inputCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_SHORT],
                            "changeParm": "theTipoBoletin",
                            "parmAlways": true
                        },
                        {
                            "name":  "vIdBloque",
                            "label": "Id Bloque",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "occult":   false,
                            "dataType": "Int",
                            "dataSize": 10,
                            "labelCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_MEDIUM],
                            "inputCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_INT_MEDIUM],
                            "changeParm": "theIdBloque",
                            "parmAlways": true
                        },
                        {
                            "name":  "vDescripcion",
                            "label": "Descripción bloque",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": false,
                            "occult":   false,
                            "dataType": "String",
                            "dataSize": 255,
                            "labelCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_VERYLONG],
                            "inputCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_STRING_VERYLONG],
                            "changeParm": "theDescripcion",
                            "changeFlag": "theDescripcion_cambiar"
                        },
                        {
                            "name":  "vNumBoletines",
                            "label": "Cuántos Identifica",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "occult":   false,
                            "dataType": "Int",
                            "dataSize": 10,
                            "labelCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_MEDIUM],
                            "inputCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_INT_MEDIUM],
                            "changeParm": "theIdentificasCuantos",
                            "changeFlag": "theIdentificasCuantos_cambiar"
                        },
                        {
                            "name":  "vIdentificaDesde",
                            "label": "Desde Identifica",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": false,
                            "occult":   false,
                            "dataType": "Int",
                            "dataSize": 10,
                            "labelCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_LONG],
                            "inputCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_NUMBER_INT_LONG],
                            "changeParm": "theIdentificaDesde",
                            "changeFlag": "theIdentificaDesde_cambiar"
                        },
                        {
                            "name":  "vIdentificaHasta",
                            "label": "Hasta Identifica",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": false,
                            "occult":   false,
                            "dataType": "String",
                            "dataSize": 10,
                            "labelCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_LONG],
                            "inputCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_NUMBER_INT_LONG],
                            "changeParm": "theIdentificaHasta",
                            "changeFlag": "theIdentificaHasta_cambiar"
                        },
                        {
                            "name":  "vIdFichero",
                            "label": "Id Fichero",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "occult":   false,
                            "dataType": "Int",
                            "dataSize": 10,
                            "labelCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_MEDIUM],
                            "inputCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_INT_MEDIUM]
                        },
                        {
                            "name":  "vAnoFichero",
                            "label": "Año",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "dataType": "Int",
                            "labelCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_SHORT],
                            "inputCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_INT_SHORT]
                        },
                        {
                            "name":  "vMesFichero",
                            "label": "Mes",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "dataType": "Int",
                            "labelCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_SHORT],
                            "inputCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_INT_SHORT]
                        },
                        {
                            "name":  "vCodigoProvinciaFichero",
                            "label": "Provincia",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "dataType": "Int",
                            "labelCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_SHORT],
                            "inputCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_INT_SHORT]
                        },
                        {
                            "name":  "vNombreFichero",
                            "label": "Nombre Fichero",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "dataType": "String",
                            "labelCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_MEDIUM],
                            "inputCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_MEDIUM]
                        },
                        {
                            "name":  "vIdOperador",
                            "label": "Id Operador",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "occult":   false,
                            "dataType": "Int",
                            "dataSize": 10,
                            "labelCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_SHORT],
                            "inputCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_INT_SHORT],
                            "changeParm": "theIdOperador",
                            "parmAlways": true,
                            "changeFlag": "theIdOperador_cambiar"
                        },
                        {
                            "name":  "vNombreOperador",
                            "label": "Nombre Operador",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "dataType": "String",
                            "labelCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_MEDIUM],
                            "inputCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_MEDIUM],
                            "candidates": {
                                "retrievaAlways": true,
                                "candidateFields": [
                                    { "editorField": "vIdOperador",     "candidateField": "vIdOperador"},
                                    { "editorField": "vNombreOperador", "candidateField": "vNombreOperador"}
                                ],
                                "grid": {
                                    "name":        theToInit.OPERADORESCANDIDATOSDEBLOQUEDEFICHERO_NAME,
                                    "gridLabel":   theToInit.OPERADORESCANDIDATOSDEBLOQUEDEFICHERO_GRIDLABEL,
                                    "labels":      theToInit.OPERADORESCANDIDATOSDEBLOQUEDEFICHERO_LABELS,
                                    "fields":      theToInit.OPERADORESCANDIDATOSDEBLOQUEDEFICHERO_FIELDS,
                                    "dataTypes":   theToInit.OPERADORESCANDIDATOSDEBLOQUEDEFICHERO_DATATYPES,
                                    "gridClasses": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_TABLE,
                                    "classes":     theToInit.OPERADORESCANDIDATOSDEBLOQUEDEFICHERO_COLUMNCLASSES,
                                    "retrievalTarget": "fParentCtrl().fDefinicionbloquesSvce",
                                    "retrieval":   "fprDo_Definicionbloques_ListaOperadores",
                                    "keyField":     "vIdOperador"
                                }
                            }
                        },
                        {
                            "name":  "vNombreCompletoOperador",
                            "label": "Nombre completo",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "dataType": "String",
                            "labelCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_VERYLONG],
                            "inputCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_VERYLONG]
                        }
                    ]
                };












                theToInit.EDITPARAMETERS_BLOQUEDEOPERADOR = {
                    "name": theToInit.BLOQUEDEOPERADOR_NAME,
                    "editorLabel": theToInit.BLOQUEDEOPERADOR_EDITORLABEL,
                    "editorClasses": theSS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR,
                    "autoEdit": false,
                    "masterLabels": [ "vIdFichero", "vAnoFichero", "vMesFichero", "vCodigoProvinciaFichero", "vNombreFichero", "vIdentificaDesde", "vIdentificaHasta", "vIdOperador", "vNombreOperador", "vNombreCompletoOperador"],
                    "noEdit":    true,
                    "noDelete":  true,
                    "noRefresh": false,
                    "fields": [
                        {
                            "name":  "vTipoBoletin",
                            "label": "Tipo Boletines",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "dataType": "String",
                            "labelCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_SHORT],
                            "inputCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_SHORT]
                        },
                        {
                            "name":  "vIdBloque",
                            "label": "Id Bloque",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "occult":   false,
                            "dataType": "Int",
                            "dataSize": 10,
                            "labelCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_MEDIUM],
                            "inputCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_INT_MEDIUM]
                        },
                        {
                            "name":  "vDescripcion",
                            "label": "Descripción bloque",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "occult":   false,
                            "dataType": "String",
                            "dataSize": 255,
                            "labelCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_VERYLONG],
                            "inputCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_VERYLONG]
                        },
                        {
                            "name":  "vNumBoletines",
                            "label": "Cuántos Identifica",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "occult":   false,
                            "dataType": "Int",
                            "dataSize": 10,
                            "labelCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_MEDIUM],
                            "inputCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_INT_MEDIUM]
                        },
                        {
                            "name":  "vIdentificaDesde",
                            "label": "Desde Identifica",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "occult":   false,
                            "dataType": "Int",
                            "dataSize": 10,
                            "labelCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_LONG],
                            "inputCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_INT_LONG]
                        },
                        {
                            "name":  "vIdentificaHasta",
                            "label": "Hasta Identifica",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "occult":   false,
                            "dataType": "Int",
                            "dataSize": 10,
                            "labelCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_LONG],
                            "inputCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_INT_LONG]
                        },
                        {
                            "name":  "vIdFichero",
                            "label": "Id Fichero",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "occult":   false,
                            "dataType": "Int",
                            "dataSize": 10,
                            "labelCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_MEDIUM],
                            "inputCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_INT_MEDIUM]
                        },
                        {
                            "name":  "vAnoFichero",
                            "label": "Año",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "dataType": "Int",
                            "labelCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_SHORT],
                            "inputCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_INT_SHORT]
                        },
                        {
                            "name":  "vMesFichero",
                            "label": "Mes",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "dataType": "Int",
                            "labelCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_SHORT],
                            "inputCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_INT_SHORT]
                        },
                        {
                            "name":  "vCodigoProvinciaFichero",
                            "label": "Provincia",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "dataType": "Int",
                            "labelCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_SHORT],
                            "inputCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_INT_SHORT]
                        },
                        {
                            "name":  "vNombreFichero",
                            "label": "Nombre Fichero",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "dataType": "String",
                            "labelCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_MEDIUM],
                            "inputCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_MEDIUM]
                        },
                        {
                            "name":  "vIdOperador",
                            "label": "Id Operador",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "occult":   false,
                            "dataType": "Int",
                            "dataSize": 10,
                            "labelCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_SHORT],
                            "inputCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_INT_SHORT],
                            "changeParm": "theIdOperador",
                            "parmAlways": true
                        },
                        {
                            "name":  "vNombreOperador",
                            "label": "Nombre Operador",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "dataType": "String",
                            "labelCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_MEDIUM],
                            "inputCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_MEDIUM],
                            "changeParm": "theNombreOperador",
                            "changeFlag": "theNombreOperador_cambiar"
                        },
                        {
                            "name":  "vNombreCompletoOperador",
                            "label": "Nombre completo",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "dataType": "String",
                            "labelCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_VERYLONG],
                            "inputCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_VERYLONG],
                            "changeParm": "theNombreCompletoOperador",
                            "changeFlag": "theNombreCompletoOperador_cambiar"
                        }
                    ]
                };






                theToInit.EDITPARAMETERS = { };
                theToInit.EDITPARAMETERS[ theToInit.FICHERO_NAME]             =  theToInit.EDITPARAMETERS_FICHERO;
                theToInit.EDITPARAMETERS[ theToInit.OPERADOR_NAME]            =  theToInit.EDITPARAMETERS_OPERADOR;
                theToInit.EDITPARAMETERS[ theToInit.BLOQUEDEFICHERO_NAME]     =  theToInit.EDITPARAMETERS_BLOQUEDEFICHERO;
                theToInit.EDITPARAMETERS[ theToInit.BLOQUEDEOPERADOR_NAME]    =  theToInit.EDITPARAMETERS_BLOQUEDEOPERADOR;





                theToInit.EDITORNAMES = [
                    theToInit.FICHERO_NAME,
                    theToInit.OPERADOR_NAME,
                    theToInit.BLOQUEDEFICHERO_NAME,
                    theToInit.BLOQUEDEOPERADOR_NAME
                ];





                theToInit.EDITORNAMES_INITIALLOAD = [];












                theToInit.CREATEPARAMETERS_BLOQUEDEFICHERO = {
                    "name": theToInit.CREAR_BLOQUEDEFICHERO_NAME,
                    "creatorLabel": theToInit.BLOQUEDEFICHERO_CREATORLABEL,
                    "creatorClasses": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR,
                    "masterLabels": [ "vIdFichero", "vAnoFichero", "vMesFichero", "vCodigoProvinciaFichero", "vNombreFichero", "vIdentificaDesde", "vIdentificaHasta"],
                    "masterParms":  [ [ "vTipoBoletin", "theTipoBoletin"], [ "vIdFichero", "theIdFichero"]],
                    "masterType":  theToInit.FICHERO_TYPE,
                    "fields": [
                        {
                            "name":  "vIdOperador",
                            "label": "Id Operador",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "occult":   false,
                            "dataType": "Int",
                            "dataSize": 10,
                            "labelCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_SHORT],
                            "inputCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_INT_SHORT],
                            "changeParm": "theIdOperador"
                        },
                        {
                            "name":  "vNombreOperador",
                            "label": "Nombre Operador",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "dataType": "String",
                            "labelCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_MEDIUM],
                            "inputCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_MEDIUM],
                            "candidates": {
                                "retrievaAlways": true,
                                "candidateFields": [
                                    { "editorField": "vIdOperador",     "candidateField": "vIdOperador"},
                                    { "editorField": "vNombreOperador", "candidateField": "vNombreOperador"}
                                ],
                                "grid": {
                                    "name":        theToInit.OPERADORESCANDIDATOSDENUEVOBLOQUEDEFICHERO_NAME,
                                    "gridLabel":   theToInit.OPERADORESCANDIDATOSDENUEVOBLOQUEDEFICHERO_GRIDLABEL,
                                    "labels":      theToInit.OPERADORESCANDIDATOSDENUEVOBLOQUEDEFICHERO_LABELS,
                                    "fields":      theToInit.OPERADORESCANDIDATOSDENUEVOBLOQUEDEFICHERO_FIELDS,
                                    "dataTypes":   theToInit.OPERADORESCANDIDATOSDENUEVOBLOQUEDEFICHERO_DATATYPES,
                                    "gridClasses": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_TABLE,
                                    "classes":     theToInit.OPERADORESCANDIDATOSDENUEVOBLOQUEDEFICHERO_COLUMNCLASSES,
                                    "retrievalTarget": "fParentCtrl().fDefinicionbloquesSvce",
                                    "retrieval":   "fprDo_Definicionbloques_ListaOperadores",
                                    "keyField":     "vIdOperador"
                                }
                            }
                        },
                        {
                            "name":  "vNumBoletines",
                            "label": "Cuántos Identifica",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "occult":   true,
                            "dataType": "Int",
                            "dataSize": 10,
                            "labelCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_MEDIUM],
                            "inputCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_INT_MEDIUM],
                            "changeParm": "theIdentificasCuantos",
                            "defaultValue": 0,
                            "parmAlways": false
                        },
                        {
                            "name":  "vIdentificaDesde",
                            "label": "Desde Identifica",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": false,
                            "occult":   false,
                            "dataType": "Int",
                            "dataSize": 10,
                            "labelCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_LONG],
                            "inputCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_NUMBER_INT_LONG],
                            "changeParm": "theIdentificaDesde",
                            "defaultValue": 0,
                            "parmAlways": true
                        },
                        {
                            "name":  "vIdentificaHasta",
                            "label": "Hasta Identifica",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": false,
                            "occult":   false,
                            "dataType": "Int",
                            "dataSize": 10,
                            "labelCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_LONG],
                            "inputCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_NUMBER_INT_LONG],
                            "changeParm": "theIdentificaHasta",
                            "defaultValue": 0,
                            "parmAlways": true
                        },
                        {
                            "name":  "vDescripcion",
                            "label": "Descripción bloque",
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": false,
                            "occult":   false,
                            "dataType": "String",
                            "dataSize": 255,
                            "labelCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_VERYLONG],
                            "inputCss": theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_STRING_VERYLONG],
                            "changeParm": "theDescripcion",
                            "defaultValue": null,
                            "parmAlways": true
                        }
                    ]
                };




                theToInit.CREATEPARAMETERS = {};
                theToInit.CREATEPARAMETERS = { };
                theToInit.CREATEPARAMETERS[ theToInit.CREAR_BLOQUEDEFICHERO_NAME] =  theToInit.CREATEPARAMETERS_BLOQUEDEFICHERO;



                theToInit.CREATORNAMES = [
                    theToInit.CREAR_BLOQUEDEFICHERO_NAME
                ];









                theToInit.WIRES = [
                    {   "name":     "UpdateFicheroEditorOnFicherosSelectionChange",
                        "kind":     "GRID2EDITOR",
                        "from":     theToInit.FICHEROS_NAME,
                        "to":       theToInit.FICHERO_NAME
                    },


                    {   "name":     "UpdateBloquesDeFicheroOnFicherosSelectionChange",
                        "kind":     "GRID2SLAVEGRID",
                        "from":     theToInit.FICHEROS_NAME,
                        "to":       theToInit.BLOQUESDEFICHERO_NAME,
                        "doTarget": "fDefinicionbloquesSvce",
                        "do":       "fprDo_Definicionbloques_ListaBloquesDeFichero",
                        "query":     {
                            "theTipoBoletin": "fParentCtrl()._v_TipoBoletin",
                            "theIdFichero":   "vIdFichero"
                        }
                    },

                    {   "name":     "UpdateBloqueDeFicheroEditorOnBloquesDeFicheroSelectionChange",
                        "kind":     "GRID2EDITOR",
                        "from":     theToInit.BLOQUESDEFICHERO_NAME,
                        "to":       theToInit.BLOQUEDEFICHERO_NAME,
                        "doTarget": "fDefinicionbloquesSvce",
                        "do":       "fprDo_Definicionbloques_BloqueDatos",
                        "query":     {
                            "theTipoBoletin": "fParentCtrl()._v_TipoBoletin",
                            "theIdBloque":    "vIdBloque"
                        },
                        "reverseDo": "fprDo_Definicionbloques_CambiarBloque"
                    },
                    {   "name":     "UpdateBloqueDeFicheroCreatorOnBloquesDeFicheroSelectionChange",
                        "kind":     "GRID2CREATOR",
                        "from":     theToInit.BLOQUESDEFICHERO_NAME,
                        "to":       theToInit.CREAR_BLOQUEDEFICHERO_NAME,
                        "doTarget": "fDefinicionbloquesSvce",
                        "do":       "fprDo_Definicionbloques_BloqueDatos",
                        "query":     {
                            "theTipoBoletin": "fParentCtrl()._v_TipoBoletin",
                            "theIdBloque":    "vIdBloque"
                        },
                        "reverseDo": "fprDo_Definicionbloques_CrearBloque"
                    },

                    
                    
                    
                    {   "name":     "UpdateOperadorEditorOnOperadoresSelectionChange",
                        "kind":     "GRID2EDITOR",
                        "from":     theToInit.OPERADORES_NAME,
                        "to":       theToInit.OPERADOR_NAME
                    },


                    {   "name":     "UpdateBloquesDeOperadorOnOperadoresSelectionChange",
                        "kind":     "GRID2SLAVEGRID",
                        "from":     theToInit.OPERADORES_NAME,
                        "to":       theToInit.BLOQUESDEOPERADOR_NAME,
                        "doTarget": "fDefinicionbloquesSvce",
                        "do":       "fprDo_Definicionbloques_ListaBloquesDeOperador",
                        "query":     {
                            "theTipoBoletin": "fParentCtrl()._v_TipoBoletin",
                            "theIdOperador":   "vIdOperador"
                        }
                    },

                    {   "name":     "UpdateBloqueDeOperadorEditorOnBloquesDeOperadorSelectionChange",
                        "kind":     "GRID2EDITOR",
                        "from":     theToInit.BLOQUESDEOPERADOR_NAME,
                        "to":       theToInit.BLOQUEDEOPERADOR_NAME,
                        "doTarget": "fDefinicionbloquesSvce",
                        "do":       "fprDo_Definicionbloques_BloqueDatos",
                        "query":     {
                            "theTipoBoletin": "fParentCtrl()._v_TipoBoletin",
                            "theIdBloque":    "vIdBloque"
                        }
                    }


                ];
















                theToInit.TOPTABSBAR_ENTRIES = [
                    { label:  theToInit.FICHEROS_GRIDLABEL,          value: theToInit.FICHEROS_NAME},
                    { label:  theToInit.BLOQUESDEFICHERO_TABLABEL,   value: theToInit.BLOQUESDEFICHERO_NAME},
                    { label:  theToInit.OPERADORES_GRIDLABEL,        value: theToInit.OPERADORES_NAME},
                    { label:  theToInit.BLOQUESDEOPERADOR_TABLABEL,  value: theToInit.BLOQUESDEOPERADOR_NAME}
                ];


                theToInit.TOPTABSBAR_INITIALLYSELECTEDTAB_DEFAULT = theToInit.TOPTABSBAR_ENTRIES[ 0][ "value"];

                if( !theToInit.TOPTABSBAR_INITIALLYSELECTEDTAB) {
                    theToInit.TOPTABSBAR_INITIALLYSELECTEDTAB = theToInit.TOPTABSBAR_INITIALLYSELECTEDTAB_DEFAULT;
                }




                theToInit.TOPTABSBAR_TABSFIXEDINITIAL_DEFAULT_ALL = [
                    theToInit.FICHEROS_NAME,
                    theToInit.BLOQUESDEFICHERO_NAME,
                    theToInit.OPERADORES_NAME,
                    theToInit.BLOQUESDEOPERADOR_NAME
                ];

                theToInit.TOPTABSBAR_TABSFIXEDINITIAL_DEFAULT_FIRST = theToInit.TOPTABSBAR_TABSFIXEDINITIAL_DEFAULT_ALL[ 0];
                theToInit.TOPTABSBAR_TABSFIXEDINITIAL_DEFAULT_LISTAFICHEROS = [ theToInit.FICHEROS_NAME];

                theToInit.TOPTABSBAR_TABSFIXEDINITIAL_DEFAULT = theToInit.TOPTABSBAR_TABSFIXEDINITIAL_DEFAULT_FIRST;

                if( !theToInit.TOPTABSBAR_TABSFIXEDINITIAL) {
                    theToInit.TOPTABSBAR_TABSFIXEDINITIAL = theToInit.TOPTABSBAR_TABSFIXEDINITIAL_DEFAULT;
                }








                theToInit.TOPTABSBAR_ENTRIES_STATIC_NONE = [];

                theToInit.TOPTABSBAR_ENTRIES_STATIC_ALL  = [
                    { static: true, label:  theToInit.STATICTAB_GRIDSPECS_LABEL,   value: theToInit.STATICTAB_GRIDSPECS_NAME},
                    { static: true, label:  theToInit.STATICTAB_EDITORSPECS_LABEL, value: theToInit.STATICTAB_EDITORSPECS_NAME},
                    { static: true, label:  theToInit.STATICTAB_CREATORSPECS_LABEL, value: theToInit.STATICTAB_CREATORSPECS_NAME},
                    { static: true, label:  theToInit.STATICTAB_WIRESPECS_LABEL,   value: theToInit.STATICTAB_WIRESPECS_NAME},
                    { static: true, label:  theToInit.STATICTAB_SVCESPECS_LABEL,   value: theToInit.STATICTAB_SVCESPECS_NAME}
                ];

                theToInit.TOPTABSBAR_ENTRIES_STATIC = theToInit.TOPTABSBAR_ENTRIES_STATIC_ALL.slice();


                if( theToInit.TOPTABSBAR_ENTRIES_STATIC && theToInit.TOPTABSBAR_ENTRIES_STATIC.length) {
                    theToInit.TOPTABSBAR_ENTRIES = theToInit.TOPTABSBAR_ENTRIES.slice();
                    Array.prototype.push.apply( theToInit.TOPTABSBAR_ENTRIES, theToInit.TOPTABSBAR_ENTRIES_STATIC);
                }








                theToInit.TOPTABSBAR_TABSFIXEDINITIAL_STATIC_DEFAULT_NONE = [];

                theToInit.TOPTABSBAR_TABSFIXEDINITIAL_STATIC_DEFAULT_ALL = [
                    theToInit.STATICTAB_GRIDSPECS_NAME,
                    theToInit.STATICTAB_EDITORSPECS_NAME,
                    theToInit.STATICTAB_CREATORSPECS_NAME,
                    theToInit.STATICTAB_WIRESPECS_NAME,
                    theToInit.STATICTAB_SVCESPECS_NAME
                ];

                theToInit.TOPTABSBAR_TABSFIXEDINITIAL_STATIC_DEFAULT_GRIDSPECS = [ theToInit.STATICTAB_GRIDSPECS_NAME];

                theToInit.TOPTABSBAR_TABSFIXEDINITIAL_STATIC_DEFAULT_FIRST = [ theToInit.TOPTABSBAR_TABSFIXEDINITIAL_STATIC_ALL[ 0]];

                theToInit.TOPTABSBAR_TABSFIXEDINITIAL_STATIC_DEFAULT = theToInit.TOPTABSBAR_TABSFIXEDINITIAL_STATIC_NONE.slice();


                if( theToInit.TOPTABSBAR_TABSFIXEDINITIAL_STATIC && theToInit.TOPTABSBAR_TABSFIXEDINITIAL_STATIC.length) {
                    theToInit.TOPTABSBAR_TABSFIXEDINITIAL =  theToInit.TOPTABSBAR_TABSFIXEDINITIAL.slice();
                    Array.prototype.push.apply( theToInit.TOPTABSBAR_TABSFIXEDINITIAL, theToInit.TOPTABSBAR_TABSFIXEDINITIAL_STATIC);
                }
                else {
                    if( theToInit.TOPTABSBAR_TABSFIXEDINITIAL_STATIC_DEFAULT && theToInit.TOPTABSBAR_TABSFIXEDINITIAL_STATIC_DEFAULT.length) {
                        theToInit.TOPTABSBAR_TABSFIXEDINITIAL =  theToInit.TOPTABSBAR_TABSFIXEDINITIAL.slice();
                        Array.prototype.push.apply( theToInit.TOPTABSBAR_TABSFIXEDINITIAL, theToInit.TOPTABSBAR_TABSFIXEDINITIAL_STATIC_DEFAULT);
                    }
                }






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
                theSS_CssNames_Springnut_Definicionbloques
            );
            anExistingModule = aModule;

            theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
        }






        return anExistingModule;

    }]);







