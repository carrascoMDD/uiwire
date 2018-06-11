'use strict';

/*
 * edivalidaciones_operacion_ctrl_specs.js
 *
 * Creado @author Antonio Carrasco Valero 201410300528
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






angular.module("edivalidacionesTypes").factory("EdivalidacionesOperacionCtrlSpecs", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "CssKeys",
    "CssNames_Springnut_Edivalidaciones",
    function( theSS_typesregistry,
              theSS_Overrider,
              theSS_CssKeys,
              theSS_CssNames_Springnut_Edivalidaciones) {




        var ModuleName     = "edivalidaciones_operacion_ctrl_specs";
        var ModulePackages = "springnut/edivalidaciones";
        var ModuleFullName = ModulePackages + "/" + ModuleName;



        var aMod_definer = function( theS_Overrider,
                                     theS_CssKeys,
                                     theS_CssNames_Springnut_Edivalidaciones) {


            if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}





            var VALIDACIONES_NAME           = "ListaValidaciones";
            var CONDICIONES_NAME            = "ListaCondicionesDeValidacion";
            var CODIGOSDECONDICION_NAME     = "ListaCodigosDeCondicion";
            var CRITERIOS_NAME              = "ListaCriterios";
            var VALIDACIONESDECRITERIO_NAME = "ListaValidacionesDeCriterio";
            var CONDICIONESDEVALIDACIONDECRITERIO_NAME   = "ListaCondicionesDeValidacionDeCriterio";
            var CONDICIONESNECESITANDOACTUALIZACION_NAME  = "ListaCondicionesNecesitandoActualizacion";
            var LISTASCODIGOS_NAME          = "ListaListasCodigos";
            var CODIGOSDELISTA_NAME         = "ListaCodigosDeLista";
            var SIMBOLOSPERMITIDOS_NAME     = "SimbolosPermitidos";

            var VALIDACION_NAME               = "Validacion";
            var CONDICIONDEVALIDACION_NAME    = "CondicionDeValidacion";
            var CODIGODELISTADECONDICION_NAME = "CodigoDeListaDeCondicion";
            var CRITERIO_NAME                 = "Criterio";
            var VALIDACIONDECRITERIO_NAME     = "ValidacionDeCriterio";
            var CONDICIONDEVALIDACIONDECRITERIO_NAME    = "CondicionDeValidacionDeCriterio";
            var CONDICIONNECESITANDOACTUALIZACION_NAME  = "CondicionNecesitandoActualizacion";
            var LISTACODIGOS_NAME             = "ListaCodigos";
            var CODIGODELISTA_NAME            = "CodigoDeLista";
            var CIE10_NAME                    = "Cie10";
            var SIMBOLOPERMITIDO_NAME         = "SimboloPermitido";

            var CREAR_VALIDACION_NAME              = "CrearValidacion";
            var CREAR_CONDICIONDEVALIDACION_NAME   = "CrearCondicionDeValidacion";
            var CREAR_CRITERIO_NAME                = "CrearCriterio";
            var CREAR_VALIDACIONDECRITERIO_NAME              = "CrearValidacionDeCriterio";
            var CREAR_CONDICIONDEVALIDACIONDECRITERIO_NAME   = "CrearCondicionDeValidacionDeCriterio";
            var CREAR_LISTACODIGOS_NAME            = "CrearListaCodigos";
            var CREAR_CODIGODELISTA_NAME           = "CrearCodigoDeLista";
            var CREAR_CIE10_NAME                   = "CrearCie10";





            var pgInitWithModuleVariations = function( theToInit) {

                if( !theToInit) {
                    return;
                }

                theToInit.EDIVALIDACIONES_PAGEHEADER = "Edición de Validaciones";



                theToInit.CRITERIOS_GRIDLABEL = "Criterios";
                theToInit.CRITERIOS_LABELS    = [ "Fase", "Nombre",   "Descripcion"];
                theToInit.CRITERIOS_FIELDS    = [ "crId", "crNombre", "crDescripcion"];
                theToInit.CRITERIOS_FIELDS_HIDDEN = [ "crId"];
                theToInit.CRITERIOS_DATATYPES = [ "Int", "String",   "String"];
                theToInit.CRITERIOS_COLUMNCLASSES = [
                    "cssSpringnut_Criterios_crId",
                    "cssSpringnut_Criterios_crNombre",
                    "cssSpringnut_Criterios_crDescripcion"
                ];




                theToInit.VALIDACIONESDECRITERIO_GRIDLABEL = "Validaciones";
                theToInit.VALIDACIONESDECRITERIO_LABELS    = [ "Fase", "Criterio", "IdError", "Severidad", "Activa",    "Descripción"];
                theToInit.VALIDACIONESDECRITERIO_FIELDS    = [ "fase", "crNombre", "iderror", "severidad", "activa",    "descripcion"];
                theToInit.VALIDACIONESDECRITERIO_FIELDS_HIDDEN = [ "fase"];
                theToInit.VALIDACIONESDECRITERIO_DATATYPES = [ "Int", "String",    "String",  "IntYesNo",  "BoolYesNo", "String"];
                theToInit.VALIDACIONESDECRITERIO_COLUMNCLASSES = [
                    "cssSpringnut_Validaciones_fase",
                    "cssSpringnut_Validaciones_crnombre",
                    "cssSpringnut_Validaciones_iderror",
                    "cssSpringnut_Validaciones_severidad",
                    "cssSpringnut_Validaciones_activa",
                    "cssSpringnut_Validaciones_descripcion"
                ];


                theToInit.CONDICIONESDEVALIDACIONDECRITERIO_GRIDLABEL = "Condiciones";
                theToInit.CONDICIONESDEVALIDACIONDECRITERIO_LABELS    = [ "IdError", "IdCondicion", "OK",         "Condicion", "Id Lista", "Lista",             "Error"];
                theToInit.CONDICIONESDEVALIDACIONDECRITERIO_FIELDS    = [ "iderror", "idcondicion", "cnCorrecta", "condicion", "idlista",  "vDescripcionLista", "cnErrorsintaxis"];
                theToInit.CONDICIONESDEVALIDACIONDECRITERIO_FIELDS_HIDDEN = [ "idcondicion",  "campos", "idlista"];
                theToInit.CONDICIONESDEVALIDACIONDECRITERIO_DATATYPES = [ "String",  "Int",         "BoolYesNo",  "String",    "Int",      "String",            "String"];
                theToInit.CONDICIONESDEVALIDACIONDECRITERIO_COLUMNCLASSES = [
                    "cssSpringnut_Condiciones_iderror",
                    "cssSpringnut_Condiciones_idcondicion",
                    "cssSpringnut_Condiciones_cnCorrecta",
                    "cssSpringnut_Condiciones_condicion",
                    "cssSpringnut_Condiciones_idlista",
                    "cssSpringnut_Condiciones_descripcionlista",
                    "cssSpringnut_Condiciones_cnErrorsintaxis"
                ];


                theToInit.CONDICIONESNECESITANDOACTUALIZACION_GRIDLABEL = "Condiciones a revisar";
                theToInit.CONDICIONESNECESITANDOACTUALIZACION_LABELS    = [ "Criterio", "IdError", "IdCondicion", "OK",         "Condicion", "Id Lista", "Lista",             "Error"];
                theToInit.CONDICIONESNECESITANDOACTUALIZACION_FIELDS    = [ "crNombre", "iderror", "idcondicion", "cnCorrecta", "condicion", "idlista",  "vDescripcionLista", "cnErrorsintaxis"];
                theToInit.CONDICIONESNECESITANDOACTUALIZACION_FIELDS_HIDDEN = [ "idcondicion", "idlista"];
                theToInit.CONDICIONESNECESITANDOACTUALIZACION_DATATYPES = [ "String",   "String",   "Int",        "BoolYesNo",  "String",    "Int",      "String",            "String"];
                theToInit.CONDICIONESNECESITANDOACTUALIZACION_COLUMNCLASSES = [
                    "cssSpringnut_Condiciones_crnombre",
                    "cssSpringnut_Condiciones_iderror",
                    "cssSpringnut_Condiciones_idcondicion",
                    "cssSpringnut_Condiciones_cnCorrecta",
                    "cssSpringnut_Condiciones_condicion",
                    "cssSpringnut_Condiciones_idlista",
                    "cssSpringnut_Condiciones_descripcionlista",
                    "cssSpringnut_Condiciones_cnErrorsintaxis"
                ];




                theToInit.LISTASCODIGOS_GRIDLABEL = "Listas Codigos CIE10";
                theToInit.LISTASCODIGOS_LABELS    = [ "Id Lista", "Descripcion"];
                theToInit.LISTASCODIGOS_FIELDS    = [ "idlista", "descripcion"];
                theToInit.LISTASCODIGOS_FIELDS_HIDDEN = [ "idlista"];
                theToInit.LISTASCODIGOS_DATATYPES = [ "Int", "String"];
                theToInit.LISTASCODIGOS_COLUMNCLASSES = [
                    "cssSpringnut_ListasCodigos_idlista",
                    "cssSpringnut_ListasCodigos_descripcion"
                ];




                theToInit.CODIGOSDELISTA_GRIDLABEL  = "Códigos CIE10 de Lista";
                theToInit.CODIGOSDELISTA_LABELS     = [ "IdLista", "Id",              "CIE10",   "Título",    "Lesiones", "Morbilidad"];
                theToInit.CODIGOSDELISTA_FIELDS     = [ "idLista", "idCodigoDeLista", "idcie10", "c10Titulo", "idlesi",   "idmorbi"];
                theToInit.CODIGOSDELISTA_FIELDS_HIDDEN = [ "idLista", "idCodigoDeLista"];
                theToInit.CODIGOSDELISTA_DATATYPES  = [ "Int",     "Int",             "String",  "String",   "String",  "String"];
                theToInit.CODIGOSDELISTA_COLUMNCLASSES = [
                    "cssSpringnut_CodigosCie10_idlista",
                    "cssSpringnut_CodigosCie10_idcodigodelista",
                    "cssSpringnut_CodigosCie10_idcie10",
                    "cssSpringnut_CodigosCie10_c10Titulo",
                    "cssSpringnut_CodigosCie10_idlesi",
                    "cssSpringnut_CodigosCie10_idmorbi"
                ];








                theToInit.VALIDACIONDECRITERIO_EDITORLABEL            = "Validación";
                theToInit.CONDICIONDEVALIDACIONDECRITERIO_EDITORLABEL = "Condición";
                theToInit.LISTACODIGOS_EDITORLABEL                    = "Lista de Códigos";
                theToInit.CODIGODELISTA_EDITORLABEL                   = "Código de Lista";
                theToInit.CONDICIONNECESITANDOACTUALIZACION_EDITORLABEL = "Condición a revisar";


                theToInit.VALIDACIONDECRITERIO_CREATORLABEL            = "Validación";
                theToInit.CONDICIONDEVALIDACIONDECRITERIO_CREATORLABEL = "Condición ";
                theToInit.LISTACODIGOS_CREATORLABEL                    = "Lista de Códigos";
                theToInit.CODIGODELISTA_CREATORLABEL                   = "Código de Lista";


                theToInit.VALIDACION_TYPE    = "Validación";
                theToInit.CONDICION_TYPE     = "Condición ";
                theToInit.CRITERIO_TYPE      = "Criterio";
                theToInit.LISTACODIGOS_TYPE  = "Lista de Códigos";
                theToInit.CODIGODELISTA_TYPE = "Código de Lista";










                theToInit.CRITERIOSCANDIDATOSDEVALIDACION_NAME      = VALIDACION_NAME + "_" + "fase"  + "_Candidatos_" + CRITERIOS_NAME;
                theToInit.CRITERIOSCANDIDATOSDEVALIDACION_GRIDLABEL = theToInit.CRITERIOS_GRIDLABEL + " candidatos para " + "Criterio" + " de " + theToInit.VALIDACION_EDITORLABEL;
                theToInit.CRITERIOSCANDIDATOSDEVALIDACION_LABELS    = [ "Fase", "Nombre",   "Descripcion"];
                theToInit.CRITERIOSCANDIDATOSDEVALIDACION_FIELDS    = [ "crId", "crNombre", "crDescripcion"];
                theToInit.CRITERIOSCANDIDATOSDEVALIDACION_FIELDS_HIDDEN = [ "crId", "crDescripcion"];
                theToInit.CRITERIOSCANDIDATOSDEVALIDACION_DATATYPES = [ "Int", "String",   "String"];
                theToInit.CRITERIOSCANDIDATOSDEVALIDACION_COLUMNCLASSES = [
                    "cssSpringnut_Criterios_crId",
                    "cssSpringnut_Criterios_crNombre",
                    "cssSpringnut_Criterios_crDescripcion"
                ];






                theToInit.LISTASCODIGOSCANDIDATOSDECONDICIONVALIDACION_NAME      = CONDICIONDEVALIDACION_NAME + "_" + "idlista"  + "_Candidatos_" + LISTASCODIGOS_NAME;
                theToInit.LISTASCODIGOSCANDIDATOSDECONDICIONVALIDACION_GRIDLABEL = theToInit.LISTASCODIGOS_GRIDLABEL + " candidatas para " + "Criterio" + " de " + theToInit.CONDICIONES_GRIDLABEL;
                theToInit.LISTASCODIGOSCANDIDATOSDECONDICIONVALIDACION_LABELS    = [ "Id Lista", "Descripcion"];
                theToInit.LISTASCODIGOSCANDIDATOSDECONDICIONVALIDACION_FIELDS    = [ "idlista", "descripcion"];
                theToInit.LISTASCODIGOSCANDIDATOSDECONDICIONVALIDACION_FIELDS_HIDDEN = [ "idlista"];
                theToInit.LISTASCODIGOSCANDIDATOSDECONDICIONVALIDACION_DATATYPES = [ "Int", "String"];
                theToInit.LISTASCODIGOSCANDIDATOSDECONDICIONVALIDACION_COLUMNCLASSES = [
                    "cssSpringnut_ListasCodigos_idlista",
                    "cssSpringnut_ListasCodigos_descripcion"
                ];



                theToInit.LISTACAMPOSCANDIDATOSDECONDICIONVALIDACION_NAME      = CONDICIONDEVALIDACION_NAME + "_" + "campos"  + "_Candidatos_" + SIMBOLOSPERMITIDOS_NAME;
                theToInit.LISTACAMPOSCANDIDATOSDECONDICIONVALIDACION_GRIDLABEL = "Campos candidatos para " + "Condicion" + " de " + theToInit.CONDICIONES_GRIDLABEL;
                theToInit.LISTACAMPOSCANDIDATOSDECONDICIONVALIDACION_LABELS    = [ "Tipo", "Símbolo"];
                theToInit.LISTACAMPOSCANDIDATOSDECONDICIONVALIDACION_FIELDS    = [ "vTipoSimbolo", "vSimbolo"];
                theToInit.LISTACAMPOSCANDIDATOSDECONDICIONVALIDACION_FIELDS_HIDDEN = [ ];
                theToInit.LISTACAMPOSCANDIDATOSDECONDICIONVALIDACION_DATATYPES = [ "String", "String"];
                theToInit.LISTACAMPOSCANDIDATOSDECONDICIONVALIDACION_COLUMNCLASSES = [
                    "cssSpringnut_SimbolosPermitidos_tipoSimbolo",
                    "cssSpringnut_SimbolosPermitidos_simbolo"
                ];

                theToInit.LISTAFUNCIONESCANDIDATOSDECONDICIONVALIDACION_NAME      = CONDICIONDEVALIDACION_NAME + "_" + "funciones"  + "_Candidatos_" + SIMBOLOSPERMITIDOS_NAME;
                theToInit.LISTAFUNCIONESCANDIDATOSDECONDICIONVALIDACION_GRIDLABEL = "Funciones candidatas para " + "Condicion" + " de " + theToInit.CONDICIONES_GRIDLABEL;
                theToInit.LISTAFUNCIONESCANDIDATOSDECONDICIONVALIDACION_LABELS    = [ "Tipo", "Símbolo"];
                theToInit.LISTAFUNCIONESCANDIDATOSDECONDICIONVALIDACION_FIELDS    = [ "vTipoSimbolo", "vSimbolo"];
                theToInit.LISTAFUNCIONESCANDIDATOSDECONDICIONVALIDACION_FIELDS_HIDDEN = [ ];
                theToInit.LISTAFUNCIONESCANDIDATOSDECONDICIONVALIDACION_DATATYPES = [ "String", "String"];
                theToInit.LISTAFUNCIONESCANDIDATOSDECONDICIONVALIDACION_COLUMNCLASSES = [
                    "cssSpringnut_SimbolosPermitidos_tipoSimbolo",
                    "cssSpringnut_SimbolosPermitidos_simbolo"
                ];

                theToInit.LISTAESPECIALESCANDIDATOSDECONDICIONVALIDACION_NAME      = CONDICIONDEVALIDACION_NAME + "_" + "especiales"  + "_Candidatos_" + SIMBOLOSPERMITIDOS_NAME;
                theToInit.LISTAESPECIALESCANDIDATOSDECONDICIONVALIDACION_GRIDLABEL = "Especiales candidatos para " + "Condicion" + " de " + theToInit.CONDICIONES_GRIDLABEL;
                theToInit.LISTAESPECIALESCANDIDATOSDECONDICIONVALIDACION_LABELS    = [ "Tipo", "Símbolo"];
                theToInit.LISTAESPECIALESCANDIDATOSDECONDICIONVALIDACION_FIELDS    = [ "vTipoSimbolo", "vSimbolo"];
                theToInit.LISTAESPECIALESCANDIDATOSDECONDICIONVALIDACION_FIELDS_HIDDEN = [ ];
                theToInit.LISTAESPECIALESCANDIDATOSDECONDICIONVALIDACION_DATATYPES = [ "String", "String"];
                theToInit.LISTAESPECIALESCANDIDATOSDECONDICIONVALIDACION_COLUMNCLASSES = [
                    "cssSpringnut_SimbolosPermitidos_tipoSimbolo",
                    "cssSpringnut_SimbolosPermitidos_simbolo"
                ];

                theToInit.LISTAOPERADORESCANDIDATOSDECONDICIONVALIDACION_NAME      = CONDICIONDEVALIDACION_NAME + "_" + "operadores"  + "_Candidatos_" + SIMBOLOSPERMITIDOS_NAME;
                theToInit.LISTAOPERADORESCANDIDATOSDECONDICIONVALIDACION_GRIDLABEL = "Operadores candidatos para " + "Condicion" + " de " + theToInit.CONDICIONES_GRIDLABEL;
                theToInit.LISTAOPERADORESCANDIDATOSDECONDICIONVALIDACION_LABELS    = [ "Tipo", "Símbolo"];
                theToInit.LISTAOPERADORESCANDIDATOSDECONDICIONVALIDACION_FIELDS    = [ "vTipoSimbolo", "vSimbolo"];
                theToInit.LISTAOPERADORESCANDIDATOSDECONDICIONVALIDACION_FIELDS_HIDDEN = [ ];
                theToInit.LISTAOPERADORESCANDIDATOSDECONDICIONVALIDACION_DATATYPES = [ "String", "String"];
                theToInit.LISTAOPERADORESCANDIDATOSDECONDICIONVALIDACION_COLUMNCLASSES = [
                    "cssSpringnut_SimbolosPermitidos_tipoSimbolo",
                    "cssSpringnut_SimbolosPermitidos_simbolo"
                ];






                theToInit.TOPTABSBAR_INITIALLYSELECTEDTAB = null;

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
                theToInit.DEFAULTTITLE = "EdivalidacionesOperacionCtrlDefaultName";





                theToInit.EDIVALIDACIONES_DOMIDPREFIX = "didSpringnut_Edivalidaciones";
                theToInit.DOMIDPREFIX = theToInit.EDIVALIDACIONES_DOMIDPREFIX;




                theToInit.VALIDACIONES_NAME           = VALIDACIONES_NAME;
                theToInit.CONDICIONES_NAME            = CONDICIONES_NAME;
                theToInit.CODIGOSDECONDICION_NAME     = CODIGOSDECONDICION_NAME;
                theToInit.CRITERIOS_NAME              = CRITERIOS_NAME;
                theToInit.VALIDACIONESDECRITERIO_NAME = VALIDACIONESDECRITERIO_NAME;
                theToInit.CONDICIONESDEVALIDACIONDECRITERIO_NAME = CONDICIONESDEVALIDACIONDECRITERIO_NAME;
                theToInit.CONDICIONESNECESITANDOACTUALIZACION_NAME = CONDICIONESNECESITANDOACTUALIZACION_NAME;
                theToInit.LISTASCODIGOS_NAME          = LISTASCODIGOS_NAME;
                theToInit.CODIGOSDELISTA_NAME         = CODIGOSDELISTA_NAME;
                theToInit.SIMBOLOSPERMITIDOS_NAME     = SIMBOLOSPERMITIDOS_NAME;




                theToInit.VALIDACION_NAME               = VALIDACION_NAME;
                theToInit.CONDICIONDEVALIDACION_NAME    = CONDICIONDEVALIDACION_NAME;
                theToInit.CODIGODELISTADECONDICION_NAME = CODIGODELISTADECONDICION_NAME;
                theToInit.CRITERIO_NAME                 = CRITERIO_NAME;
                theToInit.VALIDACIONDECRITERIO_NAME     = VALIDACIONDECRITERIO_NAME;
                theToInit.CONDICIONDEVALIDACIONDECRITERIO_NAME    = CONDICIONDEVALIDACIONDECRITERIO_NAME;
                theToInit.CONDICIONNECESITANDOACTUALIZACION_NAME    = CONDICIONNECESITANDOACTUALIZACION_NAME;
                theToInit.LISTACODIGOS_NAME             = LISTACODIGOS_NAME;
                theToInit.CODIGODELISTA_NAME            = CODIGODELISTA_NAME;
                theToInit.CIE10_NAME                    = CIE10_NAME;
                theToInit.SIMBOLOPERMITIDO_NAME         = SIMBOLOPERMITIDO_NAME;




                theToInit.CREAR_VALIDACION_NAME              = CREAR_VALIDACION_NAME;
                theToInit.CREAR_CONDICIONDEVALIDACION_NAME   = CREAR_CONDICIONDEVALIDACION_NAME;
                theToInit.CREAR_CRITERIO_NAME                = CREAR_CRITERIO_NAME;
                theToInit.CREAR_VALIDACIONDECRITERIO_NAME              = CREAR_VALIDACIONDECRITERIO_NAME;
                theToInit.CREAR_CONDICIONDEVALIDACIONDECRITERIO_NAME   = CREAR_CONDICIONDEVALIDACIONDECRITERIO_NAME;
                theToInit.CREAR_LISTACODIGOS_NAME            = CREAR_LISTACODIGOS_NAME;
                theToInit.CREAR_CODIGODELISTA_NAME           = CREAR_CODIGODELISTA_NAME;
                theToInit.CREAR_CIE10_NAME                   = CREAR_CIE10_NAME;










                theToInit.GRIDPARAMETERS_CRITERIOS = {
                    "name":        theToInit.CRITERIOS_NAME,
                    "gridLabel":   theToInit.CRITERIOS_GRIDLABEL,
                    "labels":      theToInit.CRITERIOS_LABELS,
                    "fields":      theToInit.CRITERIOS_FIELDS,
                    "hiddenFields": theToInit.CRITERIOS_FIELDS_HIDDEN,
                    "dataTypes":   theToInit.CRITERIOS_DATATYPES,
                    "gridClasses": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_TABLE,
                    "classes":     theToInit.CRITERIOS_COLUMNCLASSES,
                    "retrievalTarget": "fEdivalidacionesSvce",
                    "retrieval":   "fprDo_Edivalidaciones_ListaCriterios",
                    "autoSelectIndex": -1,
                    "keyField":     "crNombre",
                    "editorName":   null,
                    "creatorName":  null,
                    "delete":       "fprDo_Edivalidaciones_EliminarCriterio",
                    "deleteWith":   "crId",
                    "deleteParm":   "theIdCriterio",
                    "createRoles":  [ "DEMO", "INSTALADOR"],
                    "deleteRoles":  [ "DEMO", "INSTALADOR"]
                };




                theToInit.GRIDPARAMETERS_VALIDACIONESDECRITERIO = {
                    "name":        theToInit.VALIDACIONESDECRITERIO_NAME,
                    "gridLabel":   theToInit.VALIDACIONESDECRITERIO_GRIDLABEL,
                    "labels":      theToInit.VALIDACIONESDECRITERIO_LABELS,
                    "fields":      theToInit.VALIDACIONESDECRITERIO_FIELDS,
                    "hiddenFields": theToInit.VALIDACIONESDECRITERIO_FIELDS_HIDDEN,
                    "dataTypes":   theToInit.VALIDACIONESDECRITERIO_DATATYPES,
                    "gridClasses": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_TABLE,
                    "classes":     theToInit.VALIDACIONESDECRITERIO_COLUMNCLASSES,
                    "retrievalTarget": "fEdivalidacionesSvce",
                    "retrieval":    "fprDo_Edivalidaciones_ListaValidaciones",
                    "autoSelectIndex": -1,
                    "keyField":     "iderror",
                    "editorName":  theToInit.VALIDACIONDECRITERIO_NAME,
                    "masterType": theToInit.CRITERIO_TYPE,
                    "masterLabels": [ "crNombre"],
                    "creatorName":  theToInit.CREAR_VALIDACIONDECRITERIO_NAME,
                    "delete":       "fprDo_Edivalidaciones_EliminarValidacion",
                    "deleteWith":   "iderror",
                    "deleteParm":   "theIdError",
                    "deleteSucessIfNotExistsParm": "theExitoSiNoExiste",
                    "createRoles":  [ "DEMO", "ADMINISTRADOR"],
                    "deleteRoles":  [ "DEMO", "ADMINISTRADOR"]
                };



                theToInit.GRIDPARAMETERS_CONDICIONESDEVALIDACIONDECRITERIO = {
                    "name":        theToInit.CONDICIONESDEVALIDACIONDECRITERIO_NAME,
                    "gridLabel":   theToInit.CONDICIONESDEVALIDACIONDECRITERIO_GRIDLABEL,
                    "labels":      theToInit.CONDICIONESDEVALIDACIONDECRITERIO_LABELS,
                    "fields":      theToInit.CONDICIONESDEVALIDACIONDECRITERIO_FIELDS,
                    "hiddenFields": theToInit.CONDICIONESDEVALIDACIONDECRITERIO_FIELDS_HIDDEN,
                    "dataTypes":   theToInit.CONDICIONESDEVALIDACIONDECRITERIO_DATATYPES,
                    "gridClasses": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_TABLE,
                    "classes":     theToInit.CONDICIONESDEVALIDACIONDECRITERIO_COLUMNCLASSES,
                    "autoSelectIndex": -1,
                    "keyField":    "condicion",
                    "editorName":  theToInit.CONDICIONDEVALIDACIONDECRITERIO_NAME,
                    "creatorName": theToInit.CREAR_CONDICIONDEVALIDACIONDECRITERIO_NAME,
                    "masterType":  theToInit.VALIDACION_NAME,
                    "masterLabels": [ "iderror", "descripcion"],
                    "deleteTarget": "fEdivalidacionesSvce",
                    "delete":       "fprDo_Edivalidaciones_EliminarCondicionDeValidacion",
                    "deleteWith":   "idcondicion",
                    "deleteParm":   "theIdCondicion",
                    "deleteSucessIfNotExistsParm": "theExitoSiNoExiste",
                    "createRoles":  [ "DEMO", "ADMINISTRADOR"],
                    "deleteRoles":  [ "DEMO", "ADMINISTRADOR"]
                };



                theToInit.GRIDPARAMETERS_CONDICIONESNECESITANDOACTUALIZACION = {
                    "name":        theToInit.CONDICIONESNECESITANDOACTUALIZACION_NAME,
                    "gridLabel":   theToInit.CONDICIONESNECESITANDOACTUALIZACION_GRIDLABEL,
                    "labels":      theToInit.CONDICIONESNECESITANDOACTUALIZACION_LABELS,
                    "fields":      theToInit.CONDICIONESNECESITANDOACTUALIZACION_FIELDS,
                    "hiddenFields": theToInit.CONDICIONESNECESITANDOACTUALIZACION_FIELDS_HIDDEN,
                    "dataTypes":   theToInit.CONDICIONESNECESITANDOACTUALIZACION_DATATYPES,
                    "gridClasses": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_TABLE,
                    "classes":     theToInit.CONDICIONESNECESITANDOACTUALIZACION_COLUMNCLASSES,
                    "retrievalTarget": "fEdivalidacionesSvce",
                    "retrieval":    "fprDo_Edivalidaciones_ListaCondicionesNecesitandoActualizacion",
                    "autoSelectIndex": -1,
                    "keyField":    "condicion",
                    "editorName":  theToInit.CONDICIONNECESITANDOACTUALIZACION_NAME,
                    "createRoles":  [ "DEMO", "ADMINISTRADOR"],
                    "deleteRoles":  [ "DEMO", "ADMINISTRADOR"]
                };



                theToInit.GRIDPARAMETERS_LISTASCODIGOS = {
                    "name":        theToInit.LISTASCODIGOS_NAME,
                    "gridLabel":   theToInit.LISTASCODIGOS_GRIDLABEL,
                    "labels":      theToInit.LISTASCODIGOS_LABELS,
                    "fields":      theToInit.LISTASCODIGOS_FIELDS,
                    "hiddenFields": theToInit.LISTASCODIGOS_FIELDS_HIDDEN,
                    "dataTypes":   theToInit.LISTASCODIGOS_DATATYPES,
                    "gridClasses": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_TABLE,
                    "classes":     theToInit.LISTASCODIGOS_COLUMNCLASSES,
                    "retrievalTarget": "fEdivalidacionesSvce",
                    "retrieval":   "fprDo_Edivalidaciones_ListaListasCodigos",
                    "autoSelectIndex": -1,
                    "keyField":     "descripcion",
                    "editorName":  theToInit.LISTACODIGOS_NAME,
                    "creatorName":  theToInit.CREAR_LISTACODIGOS_NAME,
                    "delete":       "fprDo_Edivalidaciones_EliminarListaCodigos",
                    "deleteWith":   "idlista",
                    "deleteParm":   "theIdLista",
                    "deleteSucessIfNotExistsParm": "theExitoSiNoExiste",
                    "createRoles":  [ "DEMO", "ADMINISTRADOR"],
                    "deleteRoles":  [ "DEMO", "ADMINISTRADOR"]
                };




                theToInit.GRIDPARAMETERS_CODIGOSDELISTA = {
                    "name":        theToInit.CODIGOSDELISTA_NAME,
                    "gridLabel":   theToInit.CODIGOSDELISTA_GRIDLABEL,
                    "labels":      theToInit.CODIGOSDELISTA_LABELS,
                    "fields":      theToInit.CODIGOSDELISTA_FIELDS,
                    "hiddenFields": theToInit.CODIGOSDELISTA_FIELDS_HIDDEN,
                    "dataTypes":   theToInit.CODIGOSDELISTA_DATATYPES,
                    "gridClasses": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_TABLE,
                    "classes":     theToInit.CODIGOSDELISTA_COLUMNCLASSES,
                    "autoSelectIndex": -1,
                    "keyField":     "idcie10",
                    "editorName":  theToInit.CODIGODELISTA_NAME,
                    "masterType":  theToInit.LISTACODIGOS_TYPE,
                    "masterLabels": [ "descripcion"],
                    "creatorName": theToInit.CREAR_CODIGODELISTA_NAME,
                    "deleteTarget": "fEdivalidacionesSvce",
                    "delete":       "fprDo_Edivalidaciones_EliminarCodigoDeLista",
                    "deleteWith":   "idCodigoDeLista",
                    "deleteParm":   "theIdCodigoDeLista",
                    "deleteSucessIfNotExistsParm": "theExitoSiNoExiste",
                    "createRoles":  [ "DEMO", "ADMINISTRADOR"],
                    "deleteRoles":  [ "DEMO", "ADMINISTRADOR"]
                };








                theToInit.GRIDPARAMETERS = { };
                theToInit.GRIDPARAMETERS[ theToInit.CRITERIOS_NAME]              =  theToInit.GRIDPARAMETERS_CRITERIOS;
                theToInit.GRIDPARAMETERS[ theToInit.VALIDACIONESDECRITERIO_NAME] =  theToInit.GRIDPARAMETERS_VALIDACIONESDECRITERIO;
                theToInit.GRIDPARAMETERS[ theToInit.CONDICIONESDEVALIDACIONDECRITERIO_NAME] =  theToInit.GRIDPARAMETERS_CONDICIONESDEVALIDACIONDECRITERIO;
                theToInit.GRIDPARAMETERS[ theToInit.LISTASCODIGOS_NAME]          =  theToInit.GRIDPARAMETERS_LISTASCODIGOS;
                theToInit.GRIDPARAMETERS[ theToInit.CODIGOSDELISTA_NAME]         =  theToInit.GRIDPARAMETERS_CODIGOSDELISTA;
                theToInit.GRIDPARAMETERS[ theToInit.CONDICIONESNECESITANDOACTUALIZACION_NAME] =  theToInit.GRIDPARAMETERS_CONDICIONESNECESITANDOACTUALIZACION;




                theToInit.GRIDNAMES = [
                    theToInit.CRITERIOS_NAME,
                    theToInit.VALIDACIONESDECRITERIO_NAME,
                    theToInit.CONDICIONESDEVALIDACIONDECRITERIO_NAME,
                    theToInit.LISTASCODIGOS_NAME,
                    theToInit.CODIGOSDELISTA_NAME,
                    theToInit.CONDICIONESNECESITANDOACTUALIZACION_NAME
                ];











                theToInit.EDITPARAMETERS_VALIDACION = {
                    "name": theToInit.VALIDACION_NAME,
                    "editorLabel": theToInit.VALIDACION_EDITORLABEL,
                    "editorClasses": theSS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR,
                    "autoEdit": false,
                    "masterLabels": [ "iderror", "descripcion"],
                    "editRoles":  [ "DEMO", "ADMINISTRADOR"],
                    "fields": [
                        {
                            "name":  "fase",
                            "label": "Fase",
                            "minMult": 0,
                            "maxMult": 1,
                            "readOnly": true,
                            "occult":   true,
                            "dataType": "Int",
                            "dataSize": 10,
                            "labelCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_SHORT],
                            "inputCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_SHORT],
                            "changeParm": "theIdCriterio",
                            "changeFlag": "theIdCriterio_cambiar"
                        },
                        {
                            "name":  "crNombre",
                            "label": "Criterio",
                            "minMult": 0,
                            "maxMult": 1,
                            "readOnly": true,
                            "dataType": "String",
                            "labelCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_VERYLONG],
                            "inputCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_STRING_VERYLONG],
                            "candidates": {
                                "retrievaAlways": true,
                                "candidateFields": [
                                    { "editorField": "fase",     "candidateField": "crId"},
                                    { "editorField": "crNombre", "candidateField": "crNombre"}
                                ],
                                "grid": {
                                    "name":        theToInit.CRITERIOSCANDIDATOSDEVALIDACION_NAME,
                                    "gridLabel":   theToInit.CRITERIOSCANDIDATOSDEVALIDACION_GRIDLABEL,
                                    "labels":      theToInit.CRITERIOSCANDIDATOSDEVALIDACION_LABELS,
                                    "fields":      theToInit.CRITERIOSCANDIDATOSDEVALIDACION_FIELDS,
                                    "hiddenFields": theToInit.CRITERIOSCANDIDATOSDEVALIDACION_FIELDS_HIDDEN,
                                    "dataTypes":   theToInit.CRITERIOSCANDIDATOSDEVALIDACION_DATATYPES,
                                    "gridClasses": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_TABLE,
                                    "classes":     theToInit.CRITERIOSCANDIDATOSDEVALIDACION_COLUMNCLASSES,
                                    "retrievalTarget": "fParentCtrl().fEdivalidacionesSvce",
                                    "retrieval":   "fprDo_Edivalidaciones_ListaCriterios",
                                    "keyField":     "crNombre"
                                }
                            }
                        },
                        {
                            "name": "iderror",
                            "label": "Id Error",
                            "dataType": "String",
                            "dataSize": 10,
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "labelCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_SHORT],
                            "inputCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_SHORT],
                            "changeParm": "theIdError",
                            "parmAlways": true
                        },
                        {
                            "name": "descripcion",
                            "label": "Descripcion",
                            "dataType": "Text",
                            "dataSize": 255,
                            "minMult": 1,
                            "maxMult": 1,
                            "labelCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_TEXT_SHORT],
                            "inputCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_TEXT_SHORT],
                            "heightCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDCONTAINER_HEIGHT_SHORT],
                            "heightEditCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDEDITCONTAINER_HEIGHT_SHORT],
                            "validate": "$value && $value.length",
                            "invalidMessage": "Debe introducir una descripcion no vacía",
                            "changeParm": "theDescripcion",
                            "changeFlag": "theDescripcion_cambiar"
                        },
                        {
                            "name": "severidad",
                            "label": "Severa",
                            "dataType": "IntYesNo",
                            "minMult": 1,
                            "maxMult": 1,
                            "labelCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_BOOLEAN_CHECK],
                            "inputCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_BOOLEAN_CHECK],
                            "defaultValue": 0,
                            "changeParm": "theSeveridad",
                            "changeFlag": "theSeveridad_cambiar"
                        },
                        {
                            "name": "activa",
                            "label": "Activa",
                            "dataType": "BoolYesNo",
                            "minMult": 1,
                            "maxMult": 1,
                            "labelCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_BOOLEAN_CHECK],
                            "inputCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_BOOLEAN_CHECK],
                            "defaultValue": 1,
                            "changeParm": "theActiva",
                            "changeFlag": "theActiva_cambiar"
                        }
                    ]
                };






                theToInit.EDITPARAMETERS_CONDICION = {
                    "name": theToInit.CONDICIONDEVALIDACION_NAME,
                    "editorLabel": theToInit.CONDICIONDEVALIDACION_EDITORLABEL,
                    "editorClasses": theSS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR,
                    "autoEdit": false,
                    "masterLabels": [ "condicion"],
                    "editRoles":  [ "DEMO", "ADMINISTRADOR"],
                    "fields": [

                        {
                            "name":  "fase",
                            "label": "Fase",
                            "minMult": 0,
                            "maxMult": 1,
                            "readOnly": true,
                            "occult":   true,
                            "dataType": "Int",
                            "dataSize": 10,
                            "labelCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_SHORT],
                            "inputCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_SHORT]
                        },
                        {
                            "name":  "crNombre",
                            "label": "Criterio",
                            "minMult": 0,
                            "maxMult": 1,
                            "readOnly": true,
                            "dataType": "String",
                            "labelCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_VERYLONG],
                            "inputCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_VERYLONG]
                        },
                        {
                            "name": "iderror",
                            "label": "Id Error",
                            "dataType": "String",
                            "dataSize": 10,
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "labelCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_SHORT],
                            "inputCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_SHORT]
                        },
                        {
                            "name": "descripcionValidacion",
                            "label": "Validacion",
                            "dataType": "Text",
                            "dataSize": 255,
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "labelCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_TEXT_SHORT],
                            "inputCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_TEXT_SHORT],
                            "heightCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDCONTAINER_HEIGHT_SHORT],
                            "heightEditCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDEDITCONTAINER_HEIGHT_SHORT]
                        },
                        {
                            "name": "idcondicion",
                            "label": "Id Condicion",
                            "dataType": "Int",
                            "dataSize": 10,
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "occult":   true,
                            "labelCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_MEDIUM],
                            "inputCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_INT_MEDIUM],
                            "changeParm": "theIdCondicion",
                            "parmAlways": true
                        },
                        {
                            "name":  "cnCorrecta",
                            "label": "OK",
                            "minMult": 0,
                            "maxMult": 1,
                            "readOnly": true,
                            "occult":   false,
                            "dataType": "BoolYesNo",
                            "dataSize": 10,
                            "labelCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_BOOLEAN_CHECK],
                            "inputCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_BOOLEAN_CHECK]
                        },
                        {
                            "name": "condicion",
                            "label": "Condición",
                            "dataType": "Text",
                            "dataSize": 255,
                            "minMult": 0,
                            "maxMult": 1,
                            "labelCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_TEXT_LONG],
                            "inputCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_TEXT_LONG],
                            "heightCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDCONTAINER_HEIGHT_LONG],
                            "heightEditCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDEDITCONTAINER_HEIGHT_LONG],
                            "validate": "$ownerEditor.fprDo_ValidateCondicion",
                            "invalidMessage": "Debe introducir una condición con sintaxis, campos y palabras reservadas correctas",
                            "changeParm": "theCondicion",
                            "changeFlag": "theCondicion_cambiar"
                        },
                        {
                            "name": "camposDisponibles",
                            "label": "Campos Disponibles",
                            "dataType": "String",
                            "dataSize": 63,
                            "minMult": 0,
                            "maxMult": 1,
                            "readOnly": true,
                            "occultView": true,
                            "labelCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_VERYLONG],
                            "inputCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_VERYLONG],
                            "candidates": {
                                "retrievaAlways": false,
                                "candidateFields": [
                                    { "editorField": "camposDisponibles", "candidateField": "vSimbolo"}
                                ],
                                "grid": {
                                    "name":        theToInit.LISTACAMPOSCANDIDATOSDECONDICIONVALIDACION_NAME,
                                    "gridLabel":   theToInit.LISTACAMPOSCANDIDATOSDECONDICIONVALIDACION_GRIDLABEL,
                                    "labels":      theToInit.LISTACAMPOSCANDIDATOSDECONDICIONVALIDACION_LABELS,
                                    "fields":      theToInit.LISTACAMPOSCANDIDATOSDECONDICIONVALIDACION_FIELDS,
                                    "hiddenFields": theToInit.LISTACAMPOSCANDIDATOSDECONDICIONVALIDACION_FIELDS_HIDDEN,
                                    "dataTypes":   theToInit.LISTACAMPOSCANDIDATOSDECONDICIONVALIDACION_DATATYPES,
                                    "gridClasses": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_TABLE,
                                    "classes":     theToInit.LISTACAMPOSCANDIDATOSDECONDICIONVALIDACION_COLUMNCLASSES,
                                    "retrievalTarget": "fParentCtrl().fEdivalidacionesSvce",
                                    "retrieval":   "fprDo_Edivalidaciones_ListaCamposPermitidos",
                                    "keyField":     "vSimbolo"
                                }
                            }
                        },
                        {
                            "name": "funcionesDisponibles",
                            "label": "Funciones Disponibles",
                            "dataType": "String",
                            "dataSize": 63,
                            "minMult": 0,
                            "maxMult": 1,
                            "readOnly": true,
                            "occultView": true,
                            "labelCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_VERYLONG],
                            "inputCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_VERYLONG],
                            "candidates": {
                                "retrievaAlways": false,
                                "candidateFields": [
                                    { "editorField": "funcionesDisponibles", "candidateField": "vSimbolo"}
                                ],
                                "grid": {
                                    "name":        theToInit.LISTAFUNCIONESCANDIDATOSDECONDICIONVALIDACION_NAME,
                                    "gridLabel":   theToInit.LISTAFUNCIONESCANDIDATOSDECONDICIONVALIDACION_GRIDLABEL,
                                    "labels":      theToInit.LISTAFUNCIONESCANDIDATOSDECONDICIONVALIDACION_LABELS,
                                    "fields":      theToInit.LISTAFUNCIONESCANDIDATOSDECONDICIONVALIDACION_FIELDS,
                                    "hiddenFields": theToInit.LISTAFUNCIONESCANDIDATOSDECONDICIONVALIDACION_FIELDS_HIDDEN,
                                    "dataTypes":   theToInit.LISTAFUNCIONESCANDIDATOSDECONDICIONVALIDACION_DATATYPES,
                                    "gridClasses": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_TABLE,
                                    "classes":     theToInit.LISTAFUNCIONESCANDIDATOSDECONDICIONVALIDACION_COLUMNCLASSES,
                                    "retrievalTarget": "fParentCtrl().fEdivalidacionesSvce",
                                    "retrieval":   "fprDo_Edivalidaciones_ListaFuncionesPermitidas",
                                    "keyField":     "vSimbolo"
                                }
                            }
                        },
                        {
                            "name": "especialesDisponibles",
                            "label": "Especiales Disponibles",
                            "dataType": "String",
                            "dataSize": 63,
                            "minMult": 0,
                            "maxMult": 1,
                            "readOnly": true,
                            "occultView": true,
                            "labelCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_VERYLONG],
                            "inputCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_VERYLONG],
                            "candidates": {
                                "retrievaAlways": false,
                                "candidateFields": [
                                    { "editorField": "especialesDisponibles", "candidateField": "vSimbolo"}
                                ],
                                "grid": {
                                    "name":        theToInit.LISTAESPECIALESCANDIDATOSDECONDICIONVALIDACION_NAME,
                                    "gridLabel":   theToInit.LISTAESPECIALESCANDIDATOSDECONDICIONVALIDACION_GRIDLABEL,
                                    "labels":      theToInit.LISTAESPECIALESCANDIDATOSDECONDICIONVALIDACION_LABELS,
                                    "fields":      theToInit.LISTAESPECIALESCANDIDATOSDECONDICIONVALIDACION_FIELDS,
                                    "hiddenFields": theToInit.LISTAESPECIALESCANDIDATOSDECONDICIONVALIDACION_FIELDS_HIDDEN,
                                    "dataTypes":   theToInit.LISTAESPECIALESCANDIDATOSDECONDICIONVALIDACION_DATATYPES,
                                    "gridClasses": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_TABLE,
                                    "classes":     theToInit.LISTAESPECIALESCANDIDATOSDECONDICIONVALIDACION_COLUMNCLASSES,
                                    "retrievalTarget": "fParentCtrl().fEdivalidacionesSvce",
                                    "retrieval":   "fprDo_Edivalidaciones_ListaEspecialesPermitidos",
                                    "keyField":     "vSimbolo"
                                }
                            }
                        },
                        {
                            "name": "operadoresDisponibles",
                            "label": "Operadores Disponibles",
                            "dataType": "String",
                            "dataSize": 63,
                            "minMult": 0,
                            "maxMult": 1,
                            "readOnly": true,
                            "occultView": true,
                            "labelCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_VERYLONG],
                            "inputCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_VERYLONG],
                            "goToTab":  { "tabName": theToInit.CODIGOSDELISTA_NAME, "selection": { "gridName": theToInit.LISTASCODIGOS_NAME, "sourceField": "idlista", "selectionField": "idlista"}},
                            "candidates": {
                                "retrievaAlways": false,
                                "candidateFields": [
                                    { "editorField": "operadoresDisponibles", "candidateField": "vSimbolo"}
                                ],
                                "grid": {
                                    "name":        theToInit.LISTAOPERADORESCANDIDATOSDECONDICIONVALIDACION_NAME,
                                    "gridLabel":   theToInit.LISTAOPERADORESCANDIDATOSDECONDICIONVALIDACION_GRIDLABEL,
                                    "labels":      theToInit.LISTAOPERADORESCANDIDATOSDECONDICIONVALIDACION_LABELS,
                                    "fields":      theToInit.LISTAOPERADORESCANDIDATOSDECONDICIONVALIDACION_FIELDS,
                                    "hiddenFields": theToInit.LISTAOPERADORESCANDIDATOSDECONDICIONVALIDACION_FIELDS_HIDDEN,
                                    "dataTypes":   theToInit.LISTAOPERADORESCANDIDATOSDECONDICIONVALIDACION_DATATYPES,
                                    "gridClasses": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_TABLE,
                                    "classes":     theToInit.LISTAOPERADORESCANDIDATOSDECONDICIONVALIDACION_COLUMNCLASSES,
                                    "retrievalTarget": "fParentCtrl().fEdivalidacionesSvce",
                                    "retrieval":   "fprDo_Edivalidaciones_ListaOperadoresPermitidos",
                                    "keyField":     "vSimbolo"
                                }
                            }
                        },
                        {
                            "name": "cnErrorsintaxis",
                            "label": "Error",
                            "dataType": "Text",
                            "dataSize": 255,
                            "minMult": 0,
                            "maxMult": 1,
                            "readOnly": true,
                            "labelCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_TEXT_SHORT],
                            "inputCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_TEXT_SHORT],
                            "heightCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDCONTAINER_HEIGHT_SHORT],
                            "heightEditCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDEDITCONTAINER_HEIGHT_SHORT]
                        },
                        {
                            "name": "idlista",
                            "label": "Id Lista CIEs10",
                            "dataType": "Int",
                            "dataSize": 10,
                            "minMult": 0,
                            "maxMult": 1,
                            "readOnly": true,
                            "occult":   true,
                            "labelCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_SHORT],
                            "inputCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_SHORT],
                            "changeParm": "theIdLista",
                            "changeFlag": "theIdLista_cambiar"
                        },
                        {
                            "name": "vDescripcionLista",
                            "label": "Lista CIEs10",
                            "dataType": "Text",
                            "dataSize": 255,
                            "minMult": 0,
                            "maxMult": 1,
                            "readOnly": true,
                            "labelCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_TEXT_SHORT],
                            "inputCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_TEXT_SHORT],
                            "heightCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDCONTAINER_HEIGHT_SHORT],
                            "heightEditCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDEDITCONTAINER_HEIGHT_SHORT],
                            "goToTab":  { "tabName": theToInit.CODIGOSDELISTA_NAME, "selection": { "gridName": theToInit.LISTASCODIGOS_NAME, "sourceField": "idlista", "selectionField": "idlista"}},
                            "candidates": {
                                "retrievaAlways": true,
                                "candidateFields": [
                                    { "editorField": "idlista",           "candidateField": "idlista"},
                                    { "editorField": "vDescripcionLista", "candidateField": "descripcion"}
                                ],
                                "grid": {
                                    "name":        theToInit.LISTASCODIGOSCANDIDATOSDECONDICIONVALIDACION_NAME,
                                    "gridLabel":   theToInit.LISTASCODIGOSCANDIDATOSDECONDICIONVALIDACION_GRIDLABEL,
                                    "labels":      theToInit.LISTASCODIGOSCANDIDATOSDECONDICIONVALIDACION_LABELS,
                                    "fields":      theToInit.LISTASCODIGOSCANDIDATOSDECONDICIONVALIDACION_FIELDS,
                                    "hiddenFields": theToInit.LISTASCODIGOSCANDIDATOSDECONDICIONVALIDACION_FIELDS_HIDDEN,
                                    "dataTypes":   theToInit.LISTASCODIGOSCANDIDATOSDECONDICIONVALIDACION_DATATYPES,
                                    "gridClasses": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_TABLE,
                                    "classes":     theToInit.LISTASCODIGOSCANDIDATOSDECONDICIONVALIDACION_COLUMNCLASSES,
                                    "retrievalTarget": "fParentCtrl().fEdivalidacionesSvce",
                                    "retrieval":   "fprDo_Edivalidaciones_ListaListasCodigos",
                                    "keyField":     "descripcion"
                                }
                            }
                        },
                        {
                            "name": "campos",
                            "label": "Campos",
                            "dataType": "Text",
                            "dataSize": 255,
                            "minMult": 0,
                            "maxMult": 1,
                            "readOnly": true,
                            "occult":   false,
                            "labelCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_TEXT_SHORT],
                            "inputCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_TEXT_SHORT],
                            "heightCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDCONTAINER_HEIGHT_SHORT],
                            "heightEditCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDEDITCONTAINER_HEIGHT_SHORT],
                            "changeParm": "theCampos",
                            "changeFlag": "theCampos_cambiar"
                        },
                        {
                            "name": "cnFunciones",
                            "label": "Funciones",
                            "dataType": "Text",
                            "dataSize": 255,
                            "minMult": 0,
                            "maxMult": 1,
                            "readOnly": true,
                            "occult":   false,
                            "labelCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_TEXT_SHORT],
                            "inputCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_TEXT_SHORT],
                            "heightCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDCONTAINER_HEIGHT_SHORT],
                            "heightEditCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDEDITCONTAINER_HEIGHT_SHORT]
                        },
                        {
                            "name": "cnEspeciales",
                            "label": "Especiales",
                            "dataType": "Text",
                            "dataSize": 255,
                            "minMult": 0,
                            "maxMult": 1,
                            "readOnly": true,
                            "occult":   false,
                            "labelCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_TEXT_SHORT],
                            "inputCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_TEXT_SHORT],
                            "heightCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDCONTAINER_HEIGHT_SHORT],
                            "heightEditCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDEDITCONTAINER_HEIGHT_SHORT]
                        },
                        {
                            "name": "cnOperadores",
                            "label": "Operadores",
                            "dataType": "Text",
                            "dataSize": 255,
                            "minMult": 0,
                            "maxMult": 1,
                            "readOnly": true,
                            "occult":   true,
                            "labelCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_TEXT_SHORT],
                            "inputCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_TEXT_SHORT],
                            "heightCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDCONTAINER_HEIGHT_SHORT],
                            "heightEditCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDEDITCONTAINER_HEIGHT_SHORT]
                        }
                    ]
                };








                theToInit.EDITPARAMETERS_VALIDACIONDECRITERIO = {
                    "name": theToInit.VALIDACIONDECRITERIO_NAME,
                    "editorLabel": theToInit.VALIDACIONDECRITERIO_EDITORLABEL,
                    "editorClasses": theSS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR,
                    "autoEdit": false,
                    "editRoles":  [ "DEMO", "ADMINISTRADOR"],
                    "masterLabels": [ "iderror", "descripcion"],
                    "fields": theToInit.EDITPARAMETERS_VALIDACION[ "fields"].slice()
                };




                theToInit.EDITPARAMETERS_CONDICIONDEVALIDACIONDECRITERIO = {
                    "name": theToInit.CONDICIONDEVALIDACIONDECRITERIO_NAME,
                    "editorLabel": theToInit.CONDICIONDEVALIDACION_EDITORLABEL,
                    "editorClasses": theSS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR,
                    "autoEdit": false,
                    "editRoles":  [ "DEMO", "ADMINISTRADOR"],
                    "masterLabels": [ "iderror", "condicion"],
                    "fields": theToInit.EDITPARAMETERS_CONDICION[ "fields"].slice()
                };


                theToInit.EDITPARAMETERS_CONDICIONNECESITANDOACTUALIZACION = {
                    "name": theToInit.CONDICIONNECESITANDOACTUALIZACION_NAME,
                    "editorLabel": theToInit.CONDICIONNECESITANDOACTUALIZACION_EDITORLABEL,
                    "editorClasses": theSS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR,
                    "autoEdit": false,
                    "editRoles":  [ "DEMO", "ADMINISTRADOR"],
                    "masterLabels": [ "iderror", "descripcion"],
                    "fields": theToInit.EDITPARAMETERS_CONDICION[ "fields"].slice()
                };






                theToInit.EDITPARAMETERS_LISTACODIGOS = {
                    "name": theToInit.LISTACODIGOS_NAME,
                    "editorLabel": theToInit.LISTACODIGOS_EDITORLABEL,
                    "editorClasses": theSS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR,
                    "autoEdit": false,
                    "masterLabels": [ "idlista", "descripcion"],
                    "editRoles":  [ "DEMO", "ADMINISTRADOR"],
                    "fields": [
                        {
                            "name": "idlista",
                            "label": "Id Lista",
                            "dataType": "Int",
                            "dataSize": 10,
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "occult":   true,
                            "labelCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_MEDIUM],
                            "inputCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_INT_MEDIUM],
                            "changeParm": "theIdLista",
                            "parmAlways": true
                        },
                        {
                            "name": "descripcion",
                            "label": "Descripción",
                            "dataType": "Text",
                            "dataSize": 255,
                            "minMult": 1,
                            "maxMult": 1,
                            "labelCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_TEXT_SHORT],
                            "inputCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_TEXT_SHORT],
                            "heightCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDCONTAINER_HEIGHT_SHORT],
                            "heightEditCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDEDITCONTAINER_HEIGHT_SHORT],
                            "validate": "$value && $value.length",
                            "invalidMessage": "Debe introducir una descripción no vacía",
                            "changeParm": "theDescripcion",
                            "changeFlag": "theDescripcion_cambiar"
                        }
                    ]
                };






                theToInit.EDITPARAMETERS_CODIGODELISTA = {
                    "name": theToInit.CODIGODELISTA_NAME,
                    "editorLabel": theToInit.CODIGODELISTA_EDITORLABEL,
                    "editorClasses": theSS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR,
                    "autoEdit": false,
                    "editRoles":  [ "DEMO", "ADMINISTRADOR"],
                    "masterLabels": [ "idcie10", "c10Titulo"],
                    "fields": [
                        {
                            "name": "idLista",
                            "label": "IdLista",
                            "dataType": "Int",
                            "dataSize": 10,
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "occult":   true,
                            "labelCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_MEDIUM],
                            "inputCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_INT_MEDIUM]
                        },
                        {
                            "name": "idCodigoDeLista",
                            "label": "Id",
                            "dataType": "Int",
                            "dataSize": 10,
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "occult":   true,
                            "labelCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_MEDIUM],
                            "inputCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_INT_MEDIUM],
                            "changeParm": "theIdCodigoDeLista",
                            "parmAlways": true
                        },
                        {
                            "name": "idcie10",
                            "label": "CIE10",
                            "dataType": "String",
                            "dataSize": 4,
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": false,
                            "labelCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_VERYSHORT],
                            "inputCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_STRING_VERYSHORT],
                            "changeParm": "theCodigoCie",
                            "validate": "$value && $value.length",
                            "invalidMessage": "Debe introducir un CIE10 no vacío",
                            "parmAlways": true
                        },
                        {
                            "name": "c10Titulo",
                            "label": "Título",
                            "dataType": "String",
                            "dataSize": 255,
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "labelCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_VERYLONG],
                            "inputCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_VERYLONG]
                        },
                        {
                            "name": "idlesi",
                            "label": "Lesiones",
                            "dataType": "String",
                            "dataSize": 4,
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "labelCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_VERYSHORT],
                            "inputCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_VERYSHORT]
                        },
                        {
                            "name": "idmorbi",
                            "label": "Morbilidad",
                            "dataType": "String",
                            "dataSize": 4,
                            "minMult": 1,
                            "maxMult": 1,
                            "readOnly": true,
                            "labelCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_VERYSHORT],
                            "inputCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_VERYSHORT]
                        }
                    ]
                };









                theToInit.EDITPARAMETERS_CODIGODELISTADECONDICION = {
                    "name": theToInit.CODIGODELISTADECONDICION_NAME,
                    "editorLabel":    theToInit.CODIGODELISTADECONDICION_EDITORLABEL,
                    "editorClasses":  theToInit.EDITPARAMETERS_CODIGODELISTA[ "editorClasses"],
                    "autoEdit":       theToInit.EDITPARAMETERS_CODIGODELISTA[ "autoEdit"],
                    "editRoles":  [ "DEMO", "ADMINISTRADOR"],
                    "masterLabels":   theToInit.EDITPARAMETERS_CODIGODELISTA[ "masterLabels"].slice(),
                    "fields":         theToInit.EDITPARAMETERS_CODIGODELISTA[ "fields"].slice()
                };











                theToInit.EDITPARAMETERS = { };
                theToInit.EDITPARAMETERS[ theToInit.CRITERIO_NAME]                 =  theToInit.EDITPARAMETERS_CRITERIO;
                theToInit.EDITPARAMETERS[ theToInit.VALIDACIONDECRITERIO_NAME]     =  theToInit.EDITPARAMETERS_VALIDACIONDECRITERIO;
                theToInit.EDITPARAMETERS[ theToInit.CONDICIONDEVALIDACIONDECRITERIO_NAME] =  theToInit.EDITPARAMETERS_CONDICIONDEVALIDACIONDECRITERIO;
                theToInit.EDITPARAMETERS[ theToInit.LISTACODIGOS_NAME]             =  theToInit.EDITPARAMETERS_LISTACODIGOS;
                theToInit.EDITPARAMETERS[ theToInit.CODIGODELISTA_NAME]            =  theToInit.EDITPARAMETERS_CODIGODELISTA;
                theToInit.EDITPARAMETERS[ theToInit.CONDICIONNECESITANDOACTUALIZACION_NAME] =  theToInit.EDITPARAMETERS_CONDICIONNECESITANDOACTUALIZACION;





                theToInit.EDITORNAMES = [
                    theToInit.CODIGODELISTADECONDICION_NAME,
                    theToInit.CRITERIO_NAME,
                    theToInit.VALIDACIONDECRITERIO_NAME,
                    theToInit.CONDICIONDEVALIDACIONDECRITERIO_NAME,
                    theToInit.LISTACODIGOS_NAME,
                    theToInit.CODIGODELISTA_NAME,
                    theToInit.CONDICIONNECESITANDOACTUALIZACION_NAME
                ];





                theToInit.EDITORNAMES_INITIALLOAD = [
                ];













                theToInit.CREATEPARAMETERS_VALIDACION = {
                    "name": theToInit.CREAR_VALIDACION_NAME,
                    "creatorLabel": theToInit.VALIDACION_CREATORLABEL,
                    "creatorClasses": theSS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR,
                    "autoEdit": false,
                    "fields": [
                        {
                            "name": "iderror",
                            "label": "Id Error",
                            "dataType": "String",
                            "dataSize": 10,
                            "minMult": 1,
                            "maxMult": 1,
                            "labelCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_SHORT],
                            "inputCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_STRING_SHORT],
                            "validate": "$value && $value.length",
                            "invalidMessage": "Debe introducir un id error no vacío",
                            "changeParm": "theIdError",
                            "parmAlways": true
                        },
                        {
                            "name": "descripcion",
                            "label": "Descripcion",
                            "dataType": "Text",
                            "dataSize": 255,
                            "minMult": 1,
                            "maxMult": 1,
                            "labelCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_TEXT_SHORT],
                            "inputCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_TEXT_SHORT],
                            "heightCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDCONTAINER_HEIGHT_SHORT],
                            "heightEditCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDEDITCONTAINER_HEIGHT_SHORT],
                            "validate": "$value && $value.length",
                            "invalidMessage": "Debe introducir una descripcion no vacía",
                            "changeParm": "theDescripcion",
                            "parmAlways": true
                        },
                        {
                            "name": "severidad",
                            "label": "Severa",
                            "dataType": "IntYesNo",
                            "minMult": 1,
                            "maxMult": 1,
                            "labelCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_BOOLEAN_CHECK],
                            "inputCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_BOOLEAN_CHECK],
                            "defaultValue": 0,
                            "changeParm": "theSeveridad",
                            "parmAlways": true
                        },
                        {
                            "name": "activa",
                            "label": "Activa",
                            "dataType": "BoolYesNo",
                            "minMult": 1,
                            "maxMult": 1,
                            "labelCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_BOOLEAN_CHECK],
                            "inputCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_BOOLEAN_CHECK],
                            "defaultValue": 1,
                            "changeParm": "theActiva",
                            "parmAlways": true
                        }
                    ]
                };









                theToInit.CREATEPARAMETERS_CONDICIONDEVALIDACION = {
                    "name": theToInit.CREAR_CONDICIONDEVALIDACION_NAME,
                    "creatorLabel": theToInit.CONDICIONDEVALIDACION_CREATORLABEL,
                    "creatorClasses": theSS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR,
                    "autoEdit": false,
                    "masterLabels": [ "iderror", "descripcion"],
                    "masterParms":  [ [ "iderror", "theIdError"]],
                    "masterType":  theToInit.VALIDACION_TYPE,
                    "fields": [
                        {
                            "name": "condicion",
                            "label": "Condición",
                            "dataType": "Text",
                            "dataSize": 255,
                            "minMult": 0,
                            "maxMult": 1,
                            "labelCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_TEXT_LONG],
                            "inputCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_TEXT_LONG],
                            "heightCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDCONTAINER_HEIGHT_LONG],
                            "heightEditCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDEDITCONTAINER_HEIGHT_LONG],
                            "validate": "$ownerEditor.fprDo_ValidateCondicion",
                            "invalidMessage": "Debe introducir una condición con sintaxis, campos y palabras reservadas correctas",
                            "changeParm": "theCondicion",
                            "parmAlways": true
                        },
                        {
                            "name": "camposDisponibles",
                            "label": "Campos Disponibles",
                            "dataType": "String",
                            "dataSize": 63,
                            "minMult": 0,
                            "maxMult": 1,
                            "readOnly": true,
                            "occultView": true,
                            "labelCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_VERYLONG],
                            "inputCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_VERYLONG],
                            "candidates": {
                                "retrievaAlways": false,
                                "candidateFields": [
                                    { "editorField": "camposDisponibles", "candidateField": "vSimbolo"}
                                ],
                                "grid": {
                                    "name":        theToInit.LISTACAMPOSCANDIDATOSDECONDICIONVALIDACION_NAME,
                                    "gridLabel":   theToInit.LISTACAMPOSCANDIDATOSDECONDICIONVALIDACION_GRIDLABEL,
                                    "labels":      theToInit.LISTACAMPOSCANDIDATOSDECONDICIONVALIDACION_LABELS,
                                    "fields":      theToInit.LISTACAMPOSCANDIDATOSDECONDICIONVALIDACION_FIELDS,
                                    "hiddenFields": theToInit.LISTACAMPOSCANDIDATOSDECONDICIONVALIDACION_FIELDS_HIDDEN,
                                    "dataTypes":   theToInit.LISTACAMPOSCANDIDATOSDECONDICIONVALIDACION_DATATYPES,
                                    "gridClasses": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_TABLE,
                                    "classes":     theToInit.LISTACAMPOSCANDIDATOSDECONDICIONVALIDACION_COLUMNCLASSES,
                                    "retrievalTarget": "fParentCtrl().fEdivalidacionesSvce",
                                    "retrieval":   "fprDo_Edivalidaciones_ListaCamposPermitidos",
                                    "keyField":     "vSimbolo"
                                }
                            }
                        },
                        {
                            "name": "funcionesDisponibles",
                            "label": "Funciones Disponibles",
                            "dataType": "String",
                            "dataSize": 63,
                            "minMult": 0,
                            "maxMult": 1,
                            "readOnly": true,
                            "occultView": true,
                            "labelCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_VERYLONG],
                            "inputCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_VERYLONG],
                            "candidates": {
                                "retrievaAlways": false,
                                "candidateFields": [
                                    { "editorField": "funcionesDisponibles", "candidateField": "vSimbolo"}
                                ],
                                "grid": {
                                    "name":        theToInit.LISTAFUNCIONESCANDIDATOSDECONDICIONVALIDACION_NAME,
                                    "gridLabel":   theToInit.LISTAFUNCIONESCANDIDATOSDECONDICIONVALIDACION_GRIDLABEL,
                                    "labels":      theToInit.LISTAFUNCIONESCANDIDATOSDECONDICIONVALIDACION_LABELS,
                                    "fields":      theToInit.LISTAFUNCIONESCANDIDATOSDECONDICIONVALIDACION_FIELDS,
                                    "hiddenFields": theToInit.LISTAFUNCIONESCANDIDATOSDECONDICIONVALIDACION_FIELDS_HIDDEN,
                                    "dataTypes":   theToInit.LISTAFUNCIONESCANDIDATOSDECONDICIONVALIDACION_DATATYPES,
                                    "gridClasses": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_TABLE,
                                    "classes":     theToInit.LISTAFUNCIONESCANDIDATOSDECONDICIONVALIDACION_COLUMNCLASSES,
                                    "retrievalTarget": "fParentCtrl().fEdivalidacionesSvce",
                                    "retrieval":   "fprDo_Edivalidaciones_ListaFuncionesPermitidas",
                                    "keyField":     "vSimbolo"
                                }
                            }
                        },
                        {
                            "name": "especialesDisponibles",
                            "label": "Especiales Disponibles",
                            "dataType": "String",
                            "dataSize": 63,
                            "minMult": 0,
                            "maxMult": 1,
                            "readOnly": true,
                            "occultView": true,
                            "labelCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_VERYLONG],
                            "inputCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_VERYLONG],
                            "candidates": {
                                "retrievaAlways": false,
                                "candidateFields": [
                                    { "editorField": "especialesDisponibles", "candidateField": "vSimbolo"}
                                ],
                                "grid": {
                                    "name":        theToInit.LISTAESPECIALESCANDIDATOSDECONDICIONVALIDACION_NAME,
                                    "gridLabel":   theToInit.LISTAESPECIALESCANDIDATOSDECONDICIONVALIDACION_GRIDLABEL,
                                    "labels":      theToInit.LISTAESPECIALESCANDIDATOSDECONDICIONVALIDACION_LABELS,
                                    "fields":      theToInit.LISTAESPECIALESCANDIDATOSDECONDICIONVALIDACION_FIELDS,
                                    "hiddenFields": theToInit.LISTAESPECIALESCANDIDATOSDECONDICIONVALIDACION_FIELDS_HIDDEN,
                                    "dataTypes":   theToInit.LISTAESPECIALESCANDIDATOSDECONDICIONVALIDACION_DATATYPES,
                                    "gridClasses": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_TABLE,
                                    "classes":     theToInit.LISTAESPECIALESCANDIDATOSDECONDICIONVALIDACION_COLUMNCLASSES,
                                    "retrievalTarget": "fParentCtrl().fEdivalidacionesSvce",
                                    "retrieval":   "fprDo_Edivalidaciones_ListaEspecialesPermitidos",
                                    "keyField":     "vSimbolo"
                                }
                            }
                        },
                        {
                            "name": "operadoresDisponibles",
                            "label": "Operadores Disponibles",
                            "dataType": "String",
                            "dataSize": 63,
                            "minMult": 0,
                            "maxMult": 1,
                            "readOnly": true,
                            "occultView": true,
                            "labelCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_VERYLONG],
                            "inputCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_VERYLONG],
                            "goToTab":  { "tabName": theToInit.CODIGOSDELISTA_NAME, "selection": { "gridName": theToInit.LISTASCODIGOS_NAME, "sourceField": "idlista", "selectionField": "idlista"}},
                            "candidates": {
                                "retrievaAlways": false,
                                "candidateFields": [
                                    { "editorField": "operadoresDisponibles", "candidateField": "vSimbolo"}
                                ],
                                "grid": {
                                    "name":        theToInit.LISTAOPERADORESCANDIDATOSDECONDICIONVALIDACION_NAME,
                                    "gridLabel":   theToInit.LISTAOPERADORESCANDIDATOSDECONDICIONVALIDACION_GRIDLABEL,
                                    "labels":      theToInit.LISTAOPERADORESCANDIDATOSDECONDICIONVALIDACION_LABELS,
                                    "fields":      theToInit.LISTAOPERADORESCANDIDATOSDECONDICIONVALIDACION_FIELDS,
                                    "hiddenFields": theToInit.LISTAOPERADORESCANDIDATOSDECONDICIONVALIDACION_FIELDS_HIDDEN,
                                    "dataTypes":   theToInit.LISTAOPERADORESCANDIDATOSDECONDICIONVALIDACION_DATATYPES,
                                    "gridClasses": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_TABLE,
                                    "classes":     theToInit.LISTAOPERADORESCANDIDATOSDECONDICIONVALIDACION_COLUMNCLASSES,
                                    "retrievalTarget": "fParentCtrl().fEdivalidacionesSvce",
                                    "retrieval":   "fprDo_Edivalidaciones_ListaOperadoresPermitidos",
                                    "keyField":     "vSimbolo"
                                }
                            }
                        }
                    ]
                };




                /* ACV OJO 201411300256 NO estaba usado
                theToInit.CREATEPARAMETERS_CRITERIO = {
                    "name": theToInit.CREAR_CRITERIO_NAME,
                    "creatorLabel": null,
                    "creatorClasses": theSS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR,
                    "autoEdit": false,
                    "fields": [
                        {
                            "name": "crNombre",
                            "label": "Nombre",
                            "dataType": "String",
                            "dataSize": 255,
                            "minMult": 1,
                            "maxMult": 1,
                            "labelCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_VERYLONG],
                            "inputCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_STRING_VERYLONG],
                            "validate": "$value && $value.length",
                            "invalidMessage": "Debe introducir un nombre no vacío",
                            "changeParm": "theNombre",
                            "parmAlways": true
                        }
                    ]
                };
                */


                theToInit.CREATEPARAMETERS_VALIDACIONDECRITERIO = {
                    "name": theToInit.CREAR_VALIDACIONDECRITERIO_NAME,
                    "creatorLabel": theToInit.VALIDACIONDECRITERIO_CREATORLABEL,
                    "creatorClasses": theSS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR,
                    "autoEdit": false,
                    "masterLabels": [ "crId", "crNombre"],
                    "masterParms":  [ [ "crId", "theIdCriterio", "optional"]],
                    "masterType":  theToInit.CRITERIO_TYPE,
                    "fields": theToInit.CREATEPARAMETERS_VALIDACION[ "fields"].slice()
                };






                theToInit.CREATEPARAMETERS_CONDICIONDEVALIDACIONDECRITERIO = {
                    "name": theToInit.CREAR_CONDICIONDEVALIDACIONDECRITERIO_NAME,
                    "creatorLabel": theToInit.CONDICIONDEVALIDACIONDECRITERIO_CREATORLABEL,
                    "creatorClasses": theSS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR,
                    "autoEdit": false,
                    "masterLabels": [ "iderror", "descripcion"],
                    "masterParms":  [ [ "iderror", "theIdError"]],
                    "masterType":  theToInit.VALIDACION_TYPE,
                    "fields": theToInit.CREATEPARAMETERS_CONDICIONDEVALIDACION[ "fields"].slice()
                };









                theToInit.CREATEPARAMETERS_LISTACODIGOS = {
                    "name": theToInit.CREAR_LISTACODIGOS_NAME,
                    "creatorLabel": theToInit.LISTACODIGOS_CREATORLABEL,
                    "creatorClasses": theSS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR,
                    "autoEdit": false,
                    "fields": [
                        {
                            "name": "descripcion",
                            "label": "Descripción",
                            "dataType": "Text",
                            "dataSize": 255,
                            "minMult": 1,
                            "maxMult": 1,
                            "labelCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_TEXT_SHORT],
                            "inputCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_TEXT_SHORT],
                            "heightCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDCONTAINER_HEIGHT_SHORT],
                            "heightEditCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDEDITCONTAINER_HEIGHT_SHORT],
                            "validate": "$value && $value.length",
                            "invalidMessage": "Debe introducir una descripción no vacía",
                            "changeParm": "theDescripcion",
                            "parmAlways": true
                        }
                    ]
                };








                theToInit.CREATEPARAMETERS_CODIGODELISTA = {
                    "name": theToInit.CREAR_CODIGODELISTA_NAME,
                    "creatorLabel": theToInit.CODIGODELISTA_CREATORLABEL,
                    "creatorClasses": theSS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR,
                    "autoEdit": false,
                    "masterLabels": [ "idlista", "descripcion"],
                    "masterParms":  [ [ "idlista", "theIdLista"]],
                    "masterType":  theToInit.LISTACODIGOS_TYPE,
                    "fields": [
                        {
                            "name": "idcie10",
                            "label": "CIE10",
                            "dataType": "String",
                            "dataSize": 4,
                            "minMult": 1,
                            "maxMult": 1,
                            "labelCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                            "valueCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_VERYSHORT],
                            "inputCss": theS_CssNames_Springnut_Edivalidaciones.CSSs_SPRINGNUT_EDIVALIDACIONES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_VERYSHORT],
                            "validate": "$value && $value.length",
                            "invalidMessage": "Debe introducir una descripción no vacía",
                            "changeParm": "theCodigoCie",
                            "parmAlways": true
                        }
                    ]
                };





                theToInit.CREATEPARAMETERS = { };
                /* ACV OJO 201411300256 NO estaba usado
                theToInit.CREATEPARAMETERS[ theToInit.CREAR_CRITERIO_NAME]              =  theToInit.CREATEPARAMETERS_CRITERIO;
                */
                theToInit.CREATEPARAMETERS[ theToInit.CREAR_VALIDACIONDECRITERIO_NAME]            =  theToInit.CREATEPARAMETERS_VALIDACIONDECRITERIO;
                theToInit.CREATEPARAMETERS[ theToInit.CREAR_CONDICIONDEVALIDACIONDECRITERIO_NAME] =  theToInit.CREATEPARAMETERS_CONDICIONDEVALIDACIONDECRITERIO;
                theToInit.CREATEPARAMETERS[ theToInit.CREAR_LISTACODIGOS_NAME]          =  theToInit.CREATEPARAMETERS_LISTACODIGOS;
                theToInit.CREATEPARAMETERS[ theToInit.CREAR_CODIGODELISTA_NAME]         =  theToInit.CREATEPARAMETERS_CODIGODELISTA;




                theToInit.CREATORNAMES = [
                    theToInit.CREAR_CRITERIO_NAME,
                    theToInit.CREAR_VALIDACIONDECRITERIO_NAME,
                    theToInit.CREAR_CONDICIONDEVALIDACIONDECRITERIO_NAME,
                    theToInit.CREAR_LISTACODIGOS_NAME,
                    theToInit.CREAR_CODIGODELISTA_NAME
                ];









                theToInit.WIRES = [
                    {   "name":     "UpdateValidacionEditorOnValidacionesSelectionChange",
                        "kind":     "GRID2EDITOR",
                        "from":     theToInit.VALIDACIONES_NAME,
                        "to":       theToInit.VALIDACION_NAME,
                        "doTarget": "fEdivalidacionesSvce",
                        "do":       "fprDo_Edivalidaciones_ValidacionDatos",
                        "with":     "iderror",
                        "reverseDo": "fprDo_Edivalidaciones_CambiarValidacion"
                    },
                    {   "name":     "UpdateValidacionCreatorOnValidacionesSelectionChange",
                        "kind":     "GRID2CREATOR",
                        "from":     theToInit.VALIDACIONES_NAME,
                        "to":       theToInit.CREAR_VALIDACION_NAME,
                        "doTarget": "fEdivalidacionesSvce",
                        "do":       "fprDo_Edivalidaciones_ValidacionDatos",
                        "with":     "iderror",
                        "reverseDo": "fprDo_Edivalidaciones_CrearValidacion"
                    },
                    {   "name":     "UpdateListaCondicionesDeValidacionOnValidacionesSelectionChange",
                        "kind":     "GRID2SLAVEGRID",
                        "from":     theToInit.VALIDACIONES_NAME,
                        "to":       theToInit.CONDICIONES_NAME,
                        "doTarget": "fEdivalidacionesSvce",
                        "do":       "fprDo_Edivalidaciones_ListaCondicionesDeValidacion",
                        "with":     "iderror"
                    },



                    {   "name":     "UpdateCondicionDeValidacionEditorOnCondicionesDeValidacionSelectionChange",
                        "kind":     "GRID2EDITOR",
                        "from":     theToInit.CONDICIONES_NAME,
                        "to":       theToInit.CONDICIONDEVALIDACION_NAME,
                        "doTarget": "fEdivalidacionesSvce",
                        "do":       "fprDo_Edivalidaciones_CondicionDatos",
                        "with":     "idcondicion",
                        "reverseDo":   "fprDo_Edivalidaciones_CambiarCondicionValidacion"
                    },
                    {   "name":     "UpdateCondicionDeValidacionCreatorOnCondicionesDeValidacionSelectionChange",
                        "kind":     "GRID2CREATOR",
                        "from":     theToInit.CONDICIONES_NAME,
                        "to":       theToInit.CREAR_CONDICIONDEVALIDACION_NAME,
                        "doTarget": "fEdivalidacionesSvce",
                        "do":       "fprDo_Edivalidaciones_CondicionDatos",
                        "with":     "idcondicion",
                        "reverseDo": "fprDo_Edivalidaciones_CrearCondicionDeValidacion"
                    },
                    {   "name":     "UpdateListaCodigosDeCondicionOnCondicionesDeValidacionSelectionChange",
                        "kind":     "GRID2SLAVEGRID",
                        "from":     theToInit.CONDICIONES_NAME,
                        "to":       theToInit.CODIGOSDECONDICION_NAME,
                        "doTarget": "fEdivalidacionesSvce",
                        "do":       "fprDo_Edivalidaciones_CodigosDeLista",
                        "with":     "idlista"
                    },


                    {   "name":     "UpdateCodigoDeListaDeCondicionEditorOnCodigosDeCondicionSelectionChange",
                        "kind":     "GRID2EDITOR",
                        "from":     theToInit.CODIGOSDECONDICION_NAME,
                        "to":       theToInit.CODIGODELISTADECONDICION_NAME,
                        "doTarget": "fEdivalidacionesSvce",
                        "do":       "fprDo_Edivalidaciones_CodigoDeListaDatos",
                        "with":     "idcie10",
                        "reverseDo":   "fprDo_Edivalidaciones_CambiarCodigoDeLista"
                    },









                    {   "name":     "UpdateListaValidacionesDeCriterioOnCriteriosSelectionChange",
                        "kind":     "GRID2SLAVEGRID",
                        "from":     theToInit.CRITERIOS_NAME,
                        "to":       theToInit.VALIDACIONESDECRITERIO_NAME,
                        "doTarget": "fEdivalidacionesSvce",
                        "do":       "fprDo_Edivalidaciones_ListaValidacionesDeCriterio",
                        "with":     "crId"
                    },
                    {   "name":     "UpdateValidacionDeCriterioEditorOnValidacionesDeCriterioSelectionChange",
                        "kind":     "GRID2EDITOR",
                        "from":     theToInit.VALIDACIONESDECRITERIO_NAME,
                        "to":       theToInit.VALIDACIONDECRITERIO_NAME,
                        "when":     "SELECTION",
                        "doTarget": "fEdivalidacionesSvce",
                        "do":       "fprDo_Edivalidaciones_ValidacionDatos",
                        "with":     "iderror",
                        "reverseDo":   "fprDo_Edivalidaciones_CambiarValidacion"
                    },
                    {   "name":     "UpdateValidacionDeCriterioCreatorOnValidacionesDeCriterioSelectionChange",
                        "kind":     "GRID2CREATOR",
                        "from":     theToInit.VALIDACIONESDECRITERIO_NAME,
                        "to":       theToInit.CREAR_VALIDACIONDECRITERIO_NAME,
                        "doTarget": "fEdivalidacionesSvce",
                        "do":       "fprDo_Edivalidaciones_ValidacionDatos",
                        "with":     "iderror",
                        "reverseDo": "fprDo_Edivalidaciones_CrearValidacion"
                    },

                    {   "name":     "UpdateListaCondicionesDeValidacionDeCriterioOnValidacionesDeCriterioSelectionChange",
                        "kind":     "GRID2SLAVEGRID",
                        "from":     theToInit.VALIDACIONESDECRITERIO_NAME,
                        "to":       theToInit.CONDICIONESDEVALIDACIONDECRITERIO_NAME,
                        "doTarget": "fEdivalidacionesSvce",
                        "do":       "fprDo_Edivalidaciones_ListaCondicionesDeValidacion",
                        "with":     "iderror"
                    },

                    {   "name":     "UpdateCondicionDeValidacionDeCriterioEditorOnCondicionesDeValidacionDeCriterioSelectionChange",
                        "kind":     "GRID2EDITOR",
                        "from":     theToInit.CONDICIONESDEVALIDACIONDECRITERIO_NAME,
                        "to":       theToInit.CONDICIONDEVALIDACIONDECRITERIO_NAME,
                        "doTarget": "fEdivalidacionesSvce",
                        "do":       "fprDo_Edivalidaciones_CondicionDatos",
                        "with":     "idcondicion",
                        "reverseDo":   "fprDo_Edivalidaciones_CambiarCondicionValidacion"
                    },
                    {   "name":     "UpdateCondicionDeValidacionDeCriterioCreatorOnCondicionesDeValidacionDeCriterioSelectionChange",
                        "kind":     "GRID2CREATOR",
                        "from":     theToInit.CONDICIONESDEVALIDACIONDECRITERIO_NAME,
                        "to":       theToInit.CREAR_CONDICIONDEVALIDACIONDECRITERIO_NAME,
                        "doTarget": "fEdivalidacionesSvce",
                        "do":       "fprDo_Edivalidaciones_CondicionDatos",
                        "with":     "idcondicion",
                        "reverseDo": "fprDo_Edivalidaciones_CrearCondicionDeValidacion"
                    },


                    {   "name":     "UpdateCriterioEditorOnCriteriosSelectionChange",
                        "kind":     "GRID2EDITOR",
                        "from":     theToInit.CRITERIOS_NAME,
                        "to":       theToInit.CRITERIO_NAME,
                        "doTarget": "fEdivalidacionesSvce",
                        "do":       "fprDo_Edivalidaciones_CriterioDatos",
                        "with":     "crId",
                        "reverseDo":   "fprDo_Edivalidaciones_CambiarCriterio"
                    },
                    {   "name":     "UpdateCriterioCreatorOnCriteriosSelectionChange",
                        "kind":     "GRID2CREATOR",
                        "from":     theToInit.CRITERIOS_NAME,
                        "to":       theToInit.CREAR_CRITERIO_NAME,
                        "doTarget": "fEdivalidacionesSvce",
                        "do":       "fprDo_Edivalidaciones_CriterioDatos",
                        "with":     "crId",
                        "reverseDo": "fprDo_Edivalidaciones_CrearCriterio"
                    },




                    {   "name":     "UpdateListaCodigosEditorOnListasCodigosSelectionChange",
                        "kind":     "GRID2EDITOR",
                        "from":     theToInit.LISTASCODIGOS_NAME,
                        "to":       theToInit.LISTACODIGOS_NAME,
                        "when":     "SELECTION",
                        "doTarget": "fEdivalidacionesSvce",
                        "do":       "fprDo_Edivalidaciones_ListaCodigosDatos",
                        "with":     "idlista",
                        "reverseDo": "fprDo_Edivalidaciones_CambiarListaCodigos"
                    },
                    {   "name":     "UpdateListaCodigosCreatorOnListasCodigosSelectionChange",
                        "kind":     "GRID2CREATOR",
                        "from":     theToInit.LISTASCODIGOS_NAME,
                        "to":       theToInit.CREAR_LISTACODIGOS_NAME,
                        "doTarget": "fEdivalidacionesSvce",
                        "do":       "fprDo_Edivalidaciones_ListaCodigosDatos",
                        "with":     "idlista",
                        "reverseDo": "fprDo_Edivalidaciones_CrearListaCodigos"
                    },
                    {   "name":     "UpdateListaCodigosDeListaOnListasCodigosSelectionChange",
                        "kind":     "GRID2SLAVEGRID",
                        "from":     theToInit.LISTASCODIGOS_NAME,
                        "to":       theToInit.CODIGOSDELISTA_NAME,
                        "doTarget": "fEdivalidacionesSvce",
                        "do":       "fprDo_Edivalidaciones_CodigosDeLista",
                        "with":     "idlista"
                    },



                    {   "name":     "UpdateCodigoDeListaEditorOnCodigosDeListaSelectionChange",
                        "kind":     "GRID2EDITOR",
                        "from":     theToInit.CODIGOSDELISTA_NAME,
                        "to":       theToInit.CODIGODELISTA_NAME,
                        "doTarget": "fEdivalidacionesSvce",
                        "do":       "fprDo_Edivalidaciones_CodigoDeListaDatos",
                        "with":     "idCodigoDeLista",
                        "reverseDo": "fprDo_Edivalidaciones_CambiarCodigoDeLista"
                    },
                    {   "name":     "UpdateCodigoDeListaCreatorOnCodigoDeListaSelectionChange",
                        "kind":     "GRID2CREATOR",
                        "from":     theToInit.CODIGOSDELISTA_NAME,
                        "to":       theToInit.CREAR_CODIGODELISTA_NAME,
                        "doTarget": "fEdivalidacionesSvce",
                        "do":       "fprDo_Edivalidaciones_CodigoDeListaDatos",
                        "with":     "idCodigoDeLista",
                        "reverseDo": "fprDo_Edivalidaciones_CrearCodigoDeLista"
                    },






                    {   "name":     "UpdateSimboloPermitidoEditorOnSimbolosPermitidosSelectionChange",
                        "kind":     "GRID2EDITOR",
                        "from":     theToInit.SIMBOLOSPERMITIDOS_NAME,
                        "to":       theToInit.SIMBOLOPERMITIDO_NAME
                    },

                    {   "name":     "UpdateCondicionNecesitandoActualizacionEditorOnCondicionesNecesitandoActualizacionSelectionChange",
                        "kind":     "GRID2EDITOR",
                        "from":     theToInit.CONDICIONESNECESITANDOACTUALIZACION_NAME,
                        "to":       theToInit.CONDICIONNECESITANDOACTUALIZACION_NAME,
                        "doTarget": "fEdivalidacionesSvce",
                        "do":       "fprDo_Edivalidaciones_CondicionDatos",
                        "with":     "idcondicion",
                        "reverseDo":   "fprDo_Edivalidaciones_CambiarCondicionValidacion"
                    }
                ];










                theToInit.TOPTABSBAR_ENTRIES = [
                    { label:  theToInit.VALIDACIONESDECRITERIO_GRIDLABEL,            value: theToInit.VALIDACIONESDECRITERIO_NAME, selectorGridName: theToInit.CRITERIOS_NAME},
                    { label:  theToInit.CONDICIONESDEVALIDACIONDECRITERIO_GRIDLABEL, value: theToInit.CONDICIONESDEVALIDACIONDECRITERIO_NAME},
                    { label:  theToInit.LISTASCODIGOS_GRIDLABEL,                     value: theToInit.LISTASCODIGOS_NAME},
                    { label:  theToInit.CODIGOSDELISTA_GRIDLABEL,                    value: theToInit.CODIGOSDELISTA_NAME},
                    { label:  theToInit.CONDICIONESNECESITANDOACTUALIZACION_GRIDLABEL,     value: theToInit.CONDICIONESNECESITANDOACTUALIZACION_NAME}
                ];




                theToInit.TOPTABSBAR_INITIALLYSELECTEDTAB = theToInit.VALIDACIONESDECRITERIO_NAME;


                theToInit.TOPTABSBAR_TABSFIXEDINITIAL = [];


                theToInit.TOPTABSBAR_ENTRIES_STATIC = [];







                theToInit.GRIDNAMES_INITIALLOAD = [
                    theToInit.CRITERIOS_NAME,
                    theToInit.VALIDACIONESDECRITERIO_NAME,
                    theToInit.LISTASCODIGOS_NAME
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
                theSS_CssNames_Springnut_Edivalidaciones
            );
            anExistingModule = aModule;

            theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
        }






        return anExistingModule;

    }]);







