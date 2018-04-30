'use strict';

/*
 * adminoperadores_ctrl_specs.js
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

 @author Antonio Carrasco Valero

 ***************************************************************************
 *
 */






angular.module("adminoperadoresTypes").factory("AdminoperadoresCtrlSpecs", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "CssKeys",
    "CssNames_Springnut_Adminoperadores",
function( theSS_typesregistry,
          theSS_Overrider,
          theSS_CssKeys,
          theSS_CssNames_Springnut_Adminoperadores) {




    var ModuleName     = "adminoperadores_ctrl_specs";
    var ModulePackages = "springnut/adminoperadores";
    var ModuleFullName = ModulePackages + "/" + ModuleName;



    var aMod_definer = function( theS_Overrider,
                                 theS_CssKeys,
                                 theS_CssNames_Springnut_Adminoperadores) {


        if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}






        var OPERADORES_NAME                       = "ListaOperadores";
        var AUTORIZACIONESDEOPERADOR_NAME         = "ListaAutorizacionesDeOperador";
        var PERFILES_NAME                         = "ListaPerfiles";
        var OPERADORESDEPERFIL_NAME               = "ListaOperadoresDePerfil";
        var AUTORIZACIONESDEOPERADORDEPERFIL_NAME = "ListaAutorizacionesDeOperadorDePerfil";

        var OPERADOR_NAME                       = "Operador";
        var AUTORIZACIONDEOPERADOR_NAME         = "AutorizacionDeOperador";
        var PERFIL_NAME                         = "Perfil";
        var OPERADORDEPERFIL_NAME               = "OperadorDePerfil";
        var AUTORIZACIONDEOPERADORDEPERFIL_NAME = "AutorizacionDeOperadorDePerfil";

        var CREAR_OPERADOR_NAME                       = "CrearOperador";
        var CREAR_AUTORIZACIONDEOPERADOR_NAME         = "CrearAutorizacionDeOperador";
        var CREAR_PERFIL_NAME                         = "CrearPerfil";
        var CREAR_OPERADORDEPERFIL_NAME               = "CrearOperadorDePerfil";
        var CREAR_AUTORIZACIONDEOPERADORDEPERFIL_NAME = "CrearAutorizacionDeOperadorDePerfil";

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


            theToInit.ADMINOPERADORES_PAGEHEADER = "Administración de Operadores";


            theToInit.OPERADORES_GRIDLABEL = "Operadores";
            theToInit.OPERADORES_LABELS    = [
                "Id",
                "Nombre",
                "Puede",
                "Fallos",
                "Fija",
                "Dias",
                "Bloq",
                "Deshab",
                "Expir",
                "Éxito",
                "Gracia",
                "Cambiar",
                "Ultimo acceso",
                "Ult.CambioPwd",
                "Ult.IdentificaINE",
                "Ult.IdentificaJUD",
                "Nom.Completo",
                "Ult.Perfiles",
                "Descripcion"
            ];
            theToInit.OPERADORES_FIELDS    = [
                "vIdOperador",
                "vNombreOperador",
                "vPuedeConectarse",
                "vNumeroAccesosFallidos",
                "vUsuarioNoPuedeCambiarPswd",
                "vDiasCambioPwd",
                "vCuentaBloqueada",
                "vCuentaDeshabilitada",
                "vCredencialesExpiradas",
                "vUltimoEsExito",
                "vNumeroAccesosGracia",
                "vUsuarioDebeCambiarPswdAInicioDeSesion",
                "vFechaUltimoAccesoStr",
                "vFechaUltimoCambioPswdStr",
                "vUltIdentificaIne",
                "vUltIdentificaJudiciales",
                "vNombreCompletoOperador",
                "vUltimosPerfiles",
                "vDescripcionOperador"
            ];
            theToInit.OPERADORES_FIELDS_HIDDEN = [
                "vCuentaDeshabilitada",
                "vCredencialesExpiradas",
                "vNumeroAccesosGracia",
                "vFechaUltimoCambioPswdStr",
                "vUltIdentificaIne",
                "vUltIdentificaJudiciales",
                "vNombreCompletoOperador",
                "vUltimosPerfiles",
                "vDescripcionOperador"
            ];
            theToInit.OPERADORES_DATATYPES = [
                "Int",
                "String",
                "BoolYesNo",
                "Int",
                "BoolYesNo",
                "Int",
                "BoolYesNo",
                "BoolYesNo",
                "BoolYesNo",
                "BoolYesNo",
                "Int",
                "BoolYesNo",
                "String",
                "String",
                "Int",
                "Int",
                "String",
                "String",
                "String"
            ];
            theToInit.OPERADORES_COLUMNCLASSES = [
                "cssSpringnut_Operadores_IdOperador",
                "cssSpringnut_Operadores_NombreOperador",
                "cssSpringnut_Operadores_PuedeConectar",
                "cssSpringnut_Operadores_NumeroAccesosFallidos",
                "cssSpringnut_Operadores_UsuarioNoPuedeCambiarPswd",
                "cssSpringnut_Operadores_DiasCambioPwd",
                "cssSpringnut_Operadores_CuentaBloqueada",
                "cssSpringnut_Operadores_CuentaDeshabilitada",
                "cssSpringnut_Operadores_CredencialesExpiradas",
                "cssSpringnut_Operadores_UltimoEsExito",
                "cssSpringnut_Operadores_NumeroAccesosGracia",
                "cssSpringnut_Operadores_UsuarioDebeCambiarPswdAInicioDeSesion",
                "cssSpringnut_Operadores_FechaUltimoAccesoStrFill",
                "cssSpringnut_Operadores_FechaUltimoCambioPswdStr",
                "cssSpringnut_Operadores_UltIdentifica",
                "cssSpringnut_Operadores_UltIdentifica",
                "cssSpringnut_Operadores_NombreCompletoOperador",
                "cssSpringnut_Operadores_UltimosPerfiles",
                "cssSpringnut_Operadores_DescripcionOperador"
            ];


            theToInit.AUTORIZACIONESDEOPERADOR_GRIDLABEL = "Autorizaciones";
            theToInit.AUTORIZACIONESDEOPERADOR_LABELS    = [
                "Id",
                "Id Oper.",
                "Operador",
                "Nombre Completo",
                "Id Perfil",
                "Perfil",
                "Descripcion Perfil"
            ];
            theToInit.AUTORIZACIONESDEOPERADOR_FIELDS    = [
                "vIdAutorizacion",
                "vIdOperador",
                "vNombreOperador",
                "vNombreCompletoOperador",
                "vIdPerfil",
                "vNombrePerfil",
                "vDescripcionPerfil"
            ];
            theToInit.AUTORIZACIONESDEOPERADOR_DATATYPES = [
                "Int",
                "Int",
                "String",
                "String",
                "Int",
                "String",
                "String"
            ];
            theToInit.AUTORIZACIONESDEOPERADOR_COLUMNCLASSES = [
                "cssSpringnut_Autorizaciones_vIdAutorizacion",
                "cssSpringnut_Autorizaciones_vIdOperador",
                "cssSpringnut_Autorizaciones_vNombreOperador",
                "cssSpringnut_Autorizaciones_vNombreCompletoOperador",
                "cssSpringnut_Autorizaciones_vIdPerfil",
                "cssSpringnut_Autorizaciones_vNombrePerfil",
                "cssSpringnut_Autorizaciones_vDescripcionPerfil"
            ];


            


            theToInit.PERFILES_GRIDLABEL = "Perfiles";
            theToInit.PERFILES_LABELS    = [ "Id",        "Nombre",        "Descripcion"];
            theToInit.PERFILES_FIELDS    = [ "vIdPerfil", "vNombrePerfil", "vDescripcionPerfil"];
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
                "Puede",
                "Fallos",
                "Fija",
                "Dias",
                "Bloq",
                "Deshab",
                "Expir",
                "Éxito",
                "Gracia",
                "Cambiar",
                "Ultimo acceso",
                "Ult.CambioPwd",
                "Ult.IdentificaINE",
                "Ult.IdentificaJUD",
                "Nom.Completo",
                "Ult.Perfiles",
                "Descripcion"
            ];
            theToInit.OPERADORESDEPERFIL_FIELDS    = [
                "vIdOperador",
                "vNombreOperador",
                "vPuedeConectarse",
                "vNumeroAccesosFallidos",
                "vUsuarioNoPuedeCambiarPswd",
                "vDiasCambioPwd",
                "vCuentaBloqueada",
                "vCuentaDeshabilitada",
                "vCredencialesExpiradas",
                "vUltimoEsExito",
                "vNumeroAccesosGracia",
                "vUsuarioDebeCambiarPswdAInicioDeSesion",
                "vFechaUltimoAccesoStr",
                "vFechaUltimoCambioPswdStr",
                "vUltIdentificaIne",
                "vUltIdentificaJudiciales",
                "vNombreCompletoOperador",
                "vUltimosPerfiles",
                "vDescripcionOperador"
            ];
            theToInit.OPERADORESDEPERFIL_FIELDS_HIDDEN = [
                "vCuentaDeshabilitada",
                "vCredencialesExpiradas",
                "vNumeroAccesosGracia",
                "vFechaUltimoCambioPswdStr",
                "vUltIdentificaIne",
                "vUltIdentificaJudiciales",
                "vNombreCompletoOperador",
                "vUltimosPerfiles",
                "vDescripcionOperador"
            ];
            theToInit.OPERADORESDEPERFIL_DATATYPES = [
                "Int",
                "String",
                "BoolYesNo",
                "Int",
                "BoolYesNo",
                "Int",
                "BoolYesNo",
                "BoolYesNo",
                "BoolYesNo",
                "BoolYesNo",
                "Int",
                "BoolYesNo",
                "String",
                "String",
                "Int",
                "Int",
                "String",
                "String",
                "String"
            ];
            theToInit.OPERADORESDEPERFIL_COLUMNCLASSES = [
                "cssSpringnut_Operadores_IdOperador",
                "cssSpringnut_Operadores_NombreOperador",
                "cssSpringnut_Operadores_PuedeConectar",
                "cssSpringnut_Operadores_NumeroAccesosFallidos",
                "cssSpringnut_Operadores_UsuarioNoPuedeCambiarPswd",
                "cssSpringnut_Operadores_DiasCambioPwd",
                "cssSpringnut_Operadores_CuentaBloqueada",
                "cssSpringnut_Operadores_CuentaDeshabilitada",
                "cssSpringnut_Operadores_CredencialesExpiradas",
                "cssSpringnut_Operadores_UltimoEsExito",
                "cssSpringnut_Operadores_NumeroAccesosGracia",
                "cssSpringnut_Operadores_UsuarioDebeCambiarPswdAInicioDeSesion",
                "cssSpringnut_Operadores_FechaUltimoAccesoStrFill",
                "cssSpringnut_Operadores_FechaUltimoCambioPswdStr",
                "cssSpringnut_Operadores_UltIdentifica",
                "cssSpringnut_Operadores_UltIdentifica",
                "cssSpringnut_Operadores_NombreCompletoOperador",
                "cssSpringnut_Operadores_UltimosPerfiles",
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





            theToInit.OPERADOR_EDITORLABEL                       = "Operador";
            theToInit.AUTORIZACIONDEOPERADOR_EDITORLABEL         = "Autorización";
            theToInit.PERFIL_EDITORLABEL                         = "Perfil";
            theToInit.OPERADORDEPERFIL_EDITORLABEL               = "Operador";
            theToInit.AUTORIZACIONDEOPERADORDEPERFIL_EDITORLABEL = "Autorización";


            theToInit.OPERADOR_CREATORLABEL                       = "Operador";
            theToInit.AUTORIZACIONDEOPERADOR_CREATORLABEL         = "Autorización ";
            theToInit.PERFIL_CREATORLABEL                         = "Perfil";
            theToInit.OPERADORDEPERFIL_CREATORLABEL               = "Operador";
            theToInit.AUTORIZACIONDEOPERADORDEPERFIL_CREATORLABEL = "Autorización ";


            theToInit.OPERADOR_TYPE      = "Operador";
            theToInit.AUTORIZACION_TYPE  = "Autorización ";
            theToInit.PERFIL_TYPE        = "Perfil";










            theToInit.PERFILESCANDIDATOSDEAUTORIZACIONOPERADOR_NAME      = AUTORIZACIONDEOPERADOR_NAME + "_" + "_vNombrePerfil"  + "_Candidatos_" + PERFILES_NAME;
            theToInit.PERFILESCANDIDATOSDEAUTORIZACIONOPERADOR_GRIDLABEL = theToInit.PERFILES_GRIDLABEL + " candidatos para " + theToInit.AUTORIZACIONESDEOPERADOR_GRIDLABEL;
            theToInit.PERFILESCANDIDATOSDEAUTORIZACIONOPERADOR_LABELS    = [ "Id",        "Perfil",        "Descripcion"];
            theToInit.PERFILESCANDIDATOSDEAUTORIZACIONOPERADOR_FIELDS    = [ "vIdPerfil", "vNombrePerfil", "vDescripcionPerfil"];
            theToInit.PERFILESCANDIDATOSDEAUTORIZACIONOPERADOR_FIELDS_HIDDEN = [];
            theToInit.PERFILESCANDIDATOSDEAUTORIZACIONOPERADOR_DATATYPES = [ "Int"      , "String",        "String"];
            theToInit.PERFILESCANDIDATOSDEAUTORIZACIONOPERADOR_COLUMNCLASSES = [
                "cssSpringnut_Perfiles_vIdPerfil",
                "cssSpringnut_Perfiles_vNombrePerfil",
                "cssSpringnut_Perfiles_vDescripcionPerfil"
            ];





            theToInit.PERFILESCANDIDATOSDENUEVAAUTORIZACIONOPERADOR_NAME      = AUTORIZACIONDEOPERADOR_NAME + "_Crear_" + "_vNombrePerfil"  + "_Candidatos_" + PERFILES_NAME;
            theToInit.PERFILESCANDIDATOSDENUEVAAUTORIZACIONOPERADOR_GRIDLABEL = theToInit.PERFILES_GRIDLABEL + " candidatos para " + theToInit.AUTORIZACIONESDEOPERADOR_GRIDLABEL;
            theToInit.PERFILESCANDIDATOSDENUEVAAUTORIZACIONOPERADOR_LABELS    = [ "Id",        "Perfil",        "Descripcion"];
            theToInit.PERFILESCANDIDATOSDENUEVAAUTORIZACIONOPERADOR_FIELDS    = [ "vIdPerfil", "vNombrePerfil", "vDescripcionPerfil"];
            theToInit.PERFILESCANDIDATOSDENUEVAAUTORIZACIONOPERADOR_FIELDS_HIDDEN = [];
            theToInit.PERFILESCANDIDATOSDENUEVAAUTORIZACIONOPERADOR_DATATYPES = [ "Int"      , "String",        "String"];
            theToInit.PERFILESCANDIDATOSDENUEVAAUTORIZACIONOPERADOR_COLUMNCLASSES = [
                "cssSpringnut_Perfiles_vIdPerfil",
                "cssSpringnut_Perfiles_vNombrePerfil",
                "cssSpringnut_Perfiles_vDescripcionPerfil"
            ];








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
            theToInit.PERFILESCANDIDATOSDENUEVAAUTORIZACIONOPERADORDEPERFIL_GRIDLABEL = theToInit.PERFILES_GRIDLABEL + " candidatos para crear " + theToInit.AUTORIZACIONESDEOPERADORDEPERFIL_GRIDLABEL;
            theToInit.PERFILESCANDIDATOSDENUEVAAUTORIZACIONOPERADORDEPERFIL_LABELS    = [ "Id",        "Perfil",        "Descripcion"];
            theToInit.PERFILESCANDIDATOSDENUEVAAUTORIZACIONOPERADORDEPERFIL_FIELDS    = [ "vIdPerfil", "vNombrePerfil", "vDescripcionPerfil"];
            theToInit.PERFILESCANDIDATOSDENUEVAAUTORIZACIONOPERADORDEPERFIL_FIELDS_HIDDEN = [];
            theToInit.PERFILESCANDIDATOSDENUEVAAUTORIZACIONOPERADORDEPERFIL_DATATYPES = [ "Int"      , "String",        "String"];
            theToInit.PERFILESCANDIDATOSDENUEVAAUTORIZACIONOPERADORDEPERFIL_COLUMNCLASSES = [
                "cssSpringnut_Perfiles_vIdPerfil",
                "cssSpringnut_Perfiles_vNombrePerfil",
                "cssSpringnut_Perfiles_vDescripcionPerfil"
            ];




            theToInit.GRIDNAMES_INITIALLOAD_OPERADORES = [
                OPERADORES_NAME
            ];
            theToInit.GRIDNAMES_INITIALLOAD_PERFILES = [
                PERFILES_NAME
            ];
            theToInit.GRIDNAMES_INITIALLOAD_ALL = [
                OPERADORES_NAME,
                PERFILES_NAME
            ];
            theToInit.GRIDNAMES_INITIALLOAD_NONE = [];

            theToInit.GRIDNAMES_INITIALLOAD = theToInit.GRIDNAMES_INITIALLOAD_NONE.slice();














            theToInit.TOPTABSBAR_INITIALLYSELECTEDTAB = OPERADORES_NAME;






            theToInit.TOPTABSBAR_TABSFIXEDINITIAL_NONE = [];

            theToInit.TOPTABSBAR_TABSFIXEDINITIAL_ALL = [
                OPERADORES_NAME,
                AUTORIZACIONESDEOPERADOR_NAME,
                PERFILES_NAME,
                OPERADORESDEPERFIL_NAME,
                AUTORIZACIONESDEOPERADORDEPERFIL_NAME
            ];

            theToInit.TOPTABSBAR_TABSFIXEDINITIAL_LISTAOPERADORES = [ OPERADORES_NAME];

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
            theToInit.DEFAULTTITLE = "AdminoperadoresCtrlDefaultName";





            theToInit.ADMINOPERADORES_DOMIDPREFIX = "didSpringnut_Adminoperadores";
            theToInit.DOMIDPREFIX = theToInit.ADMINOPERADORES_DOMIDPREFIX;




            theToInit.OPERADORES_NAME                       = OPERADORES_NAME;
            theToInit.AUTORIZACIONESDEOPERADOR_NAME         = AUTORIZACIONESDEOPERADOR_NAME;
            theToInit.PERFILES_NAME                         = PERFILES_NAME;
            theToInit.OPERADORESDEPERFIL_NAME               = OPERADORESDEPERFIL_NAME;
            theToInit.AUTORIZACIONESDEOPERADORDEPERFIL_NAME = AUTORIZACIONESDEOPERADORDEPERFIL_NAME;




            theToInit.OPERADOR_NAME                       = OPERADOR_NAME;
            theToInit.AUTORIZACIONDEOPERADOR_NAME         = AUTORIZACIONDEOPERADOR_NAME;
            theToInit.PERFIL_NAME                         = PERFIL_NAME;
            theToInit.OPERADORDEPERFIL_NAME               = OPERADORDEPERFIL_NAME;
            theToInit.AUTORIZACIONDEOPERADORDEPERFIL_NAME = AUTORIZACIONDEOPERADORDEPERFIL_NAME;




            theToInit.CREAR_OPERADOR_NAME                       = CREAR_OPERADOR_NAME;
            theToInit.CREAR_AUTORIZACIONDEOPERADOR_NAME         = CREAR_AUTORIZACIONDEOPERADOR_NAME;
            theToInit.CREAR_PERFIL_NAME                         = CREAR_PERFIL_NAME;
            theToInit.CREAR_OPERADORDEPERFIL_NAME               = CREAR_OPERADORDEPERFIL_NAME;
            theToInit.CREAR_AUTORIZACIONDEOPERADORDEPERFIL_NAME = CREAR_AUTORIZACIONDEOPERADORDEPERFIL_NAME;




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








            theToInit.GRIDPARAMETERS_OPERADORES = {
                "name":        theToInit.OPERADORES_NAME,
                "gridLabel":   theToInit.OPERADORES_GRIDLABEL,
                "labels":      theToInit.OPERADORES_LABELS,
                "fields":      theToInit.OPERADORES_FIELDS,
                "hiddenFields": theToInit.OPERADORES_FIELDS_HIDDEN,
                "dataTypes":   theToInit.OPERADORES_DATATYPES,
                "gridClasses": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_TABLE,
                "classes":     theToInit.OPERADORES_COLUMNCLASSES,
                "retrievalTarget": "fAdminoperadoresSvce",
                "retrieval":    "fprDo_Adminoperadores_ListaOperadores",
                "autoSelectIndex": -1,
                "keyField":     "vIdOperador",
                "editorName":   theToInit.OPERADOR_NAME,
                "creatorName":  theToInit.CREAR_OPERADOR_NAME,
                "delete":       "fprDo_Adminoperadores_EliminarOperador",
                "deleteWith":   "vIdOperador",
                "deleteParm":   "theIdOperador",
                "deleteSucessIfNotExistsParm": "theExitoSiNoExiste",
                "createRoles":  [ "ADMINISTRADOR"],
                "deleteRoles":  [ "ADMINISTRADOR"]
            };




            theToInit.GRIDPARAMETERS_AUTORIZACIONES = {
                "name":        theToInit.AUTORIZACIONESDEOPERADOR_NAME,
                "gridLabel":   theToInit.AUTORIZACIONESDEOPERADOR_GRIDLABEL,
                "labels":      theToInit.AUTORIZACIONESDEOPERADOR_LABELS,
                "fields":      theToInit.AUTORIZACIONESDEOPERADOR_FIELDS,
                "dataTypes":   theToInit.AUTORIZACIONESDEOPERADOR_DATATYPES,
                "gridClasses": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_TABLE,
                "classes":     theToInit.AUTORIZACIONESDEOPERADOR_COLUMNCLASSES,
                "autoSelectIndex": -1,
                "keyField":    "vIdAutorizacion",
                "editorName":  theToInit.AUTORIZACIONDEOPERADOR_NAME,
                "creatorName": theToInit.CREAR_AUTORIZACIONDEOPERADOR_NAME,
                "masterType":  theToInit.OPERADOR_NAME,
                "masterLabels": [ "vIdOperador", "vNombreOperador"],
                "deleteTarget": "fAdminoperadoresSvce",
                "delete":       "fprDo_Adminoperadores_EliminarAutorizacionDeOperador",
                "deleteWith":   "vIdAutorizacion",
                "deleteParm":   "theIdAutorizacion",
                "deleteSucessIfNotExistsParm": "theExitoSiNoExiste",
                "createRoles":  [ "ADMINISTRADOR"],
                "deleteRoles":  [ "ADMINISTRADOR"]
            };




             theToInit.GRIDPARAMETERS_PERFILES = {
                 "name":        theToInit.PERFILES_NAME,
                 "gridLabel":   theToInit.PERFILES_GRIDLABEL,
                 "labels":      theToInit.PERFILES_LABELS,
                 "fields":      theToInit.PERFILES_FIELDS,
                 "dataTypes":   theToInit.PERFILES_DATATYPES,
                 "gridClasses": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_TABLE,
                 "classes":     theToInit.PERFILES_COLUMNCLASSES,
                 "retrievalTarget": "fAdminoperadoresSvce",
                 "retrieval":   "fprDo_Adminoperadores_ListaPerfiles",
                 "autoSelectIndex": -1,
                 "keyField":     "vNombrePerfil",
                 "editorName":   theToInit.PERFIL_NAME,
                 "creatorName":  theToInit.CREAR_PERFIL_NAME,
                 "delete":       "fprDo_Adminoperadores_EliminarPerfil",
                 "deleteWith":   "vIdPerfil",
                 "deleteParm":   "theIdPerfil",
                 "deleteSucessIfNotExistsParm": "theExitoSiNoExiste",
                 "createRoles":  [ "INSTALADOR"],
                 "deleteRoles":  [ "INSTALADOR"]
             };




            theToInit.GRIDPARAMETERS_OPERADORESDEPERFIL = {
                "name":        theToInit.OPERADORESDEPERFIL_NAME,
                "gridLabel":   theToInit.OPERADORESDEPERFIL_GRIDLABEL,
                "labels":      theToInit.OPERADORESDEPERFIL_LABELS,
                "fields":      theToInit.OPERADORESDEPERFIL_FIELDS,
                "hiddenFields": theToInit.OPERADORESDEPERFIL_FIELDS_HIDDEN,
                "dataTypes":   theToInit.OPERADORESDEPERFIL_DATATYPES,
                "gridClasses": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_TABLE,
                "classes":     theToInit.OPERADORESDEPERFIL_COLUMNCLASSES,
                "TOUSEINOPERATION_retrievalTarget": "fAdminoperadoresSvce",
                "TOUSEINOPERATION_retrieval":    "fprDo_Adminoperadores_ListaOperadores",
                "autoSelectIndex": -1,
                "keyField":     "vIdOperador",
                "editorName":  theToInit.OPERADORDEPERFIL_NAME,
                "masterType":  theToInit.PERFIL_NAME,
                "masterLabels": [ "vIdPerfil", "vNombrePerfil"],
                "creatorName":  theToInit.CREAR_OPERADORDEPERFIL_NAME,
                "deleteTarget": "fAdminoperadoresSvce",
                "delete":       "fprDo_Adminoperadores_EliminarOperador",
                "deleteWith":   "vIdOperador",
                "deleteParm":   "theIdOperador",
                "deleteSucessIfNotExistsParm": "theExitoSiNoExiste",
                "createRoles":  [ "ADMINISTRADOR"],
                "deleteRoles":  [ "ADMINISTRADOR"]
            };



            theToInit.GRIDPARAMETERS_AUTORIZACIONESDEOPERADORDEPERFIL = {
                "name":        theToInit.AUTORIZACIONESDEOPERADORDEPERFIL_NAME,
                "gridLabel":   theToInit.AUTORIZACIONESDEOPERADORDEPERFIL_GRIDLABEL,
                "labels":      theToInit.AUTORIZACIONESDEOPERADORDEPERFIL_LABELS,
                "fields":      theToInit.AUTORIZACIONESDEOPERADORDEPERFIL_FIELDS,
                "dataTypes":   theToInit.AUTORIZACIONESDEOPERADORDEPERFIL_DATATYPES,
                "gridClasses": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_TABLE,
                "classes":     theToInit.AUTORIZACIONESDEOPERADORDEPERFIL_COLUMNCLASSES,
                "autoSelectIndex": -1,
                "keyField":    "condicion",
                "editorName":  theToInit.AUTORIZACIONDEOPERADORDEPERFIL_NAME,
                "creatorName": theToInit.CREAR_AUTORIZACIONDEOPERADORDEPERFIL_NAME,
                "masterType":  "Operador" /* ACV OJO 201411050008 Is used exclusively to compose UI labels, even if it's named as "masterType" while it shoudl be "masterTypeLabel" */,
                "masterLabels": [ "vIdOperador", "vNombreOperador"],
                "deleteTarget": "fAdminoperadoresSvce",
                "delete":       "fprDo_Adminoperadores_EliminarAutorizacionDeOperador",
                "deleteWith":   "vIdAutorizacion",
                "deleteParm":   "theIdAutorizacion",
                "deleteSucessIfNotExistsParm": "theExitoSiNoExiste",
                "createRoles":  [ "ADMINISTRADOR"],
                "deleteRoles":  [ "ADMINISTRADOR"]
            };





            theToInit.GRIDPARAMETERS = { };
            theToInit.GRIDPARAMETERS[ theToInit.OPERADORES_NAME]                       =  theToInit.GRIDPARAMETERS_OPERADORES;
            theToInit.GRIDPARAMETERS[ theToInit.AUTORIZACIONESDEOPERADOR_NAME]         =  theToInit.GRIDPARAMETERS_AUTORIZACIONES;
            theToInit.GRIDPARAMETERS[ theToInit.PERFILES_NAME]                         =  theToInit.GRIDPARAMETERS_PERFILES;
            theToInit.GRIDPARAMETERS[ theToInit.OPERADORESDEPERFIL_NAME]               =  theToInit.GRIDPARAMETERS_OPERADORESDEPERFIL;
            theToInit.GRIDPARAMETERS[ theToInit.AUTORIZACIONESDEOPERADORDEPERFIL_NAME] =  theToInit.GRIDPARAMETERS_AUTORIZACIONESDEOPERADORDEPERFIL;




            theToInit.GRIDNAMES = [
                theToInit.OPERADORES_NAME,
                theToInit.AUTORIZACIONESDEOPERADOR_NAME,
                theToInit.PERFILES_NAME,
                theToInit.OPERADORESDEPERFIL_NAME,
                theToInit.AUTORIZACIONESDEOPERADORDEPERFIL_NAME
            ];






            theToInit.GRIDNAMES_INITIALLOAD_DEFAULT = [
                theToInit.OPERADORES_NAME
            ];
            theToInit.GRIDNAMES_INITIALLOAD_DEFAULT = [
                theToInit.PERFILES_NAME
            ];
            theToInit.GRIDNAMES_INITIALLOAD_DEFAULT = [
                theToInit.OPERADORES_NAME,
                theToInit.PERFILES_NAME,
                theToInit.OPERADORESDEPERFIL_NAME
            ];
            theToInit.GRIDNAMES_INITIALLOAD_DEFAULT = [
            ];

            if( !theToInit.GRIDNAMES_INITIALLOAD) {
                theToInit.GRIDNAMES_INITIALLOAD = theToInit.GRIDNAMES_INITIALLOAD_DEFAULT;
            }





            theToInit.EDITPARAMETERS_OPERADOR = {
                "name": theToInit.OPERADOR_NAME,
                "editorLabel": theToInit.OPERADOR_EDITORLABEL,
                "editorClasses": theSS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR,
                "autoEdit": false,
                "masterLabels": [ "vNombreOperador", "vNombreCompletoOperador"],
                "editRoles":  [ "ADMINISTRADOR"],
                "fields": [
                    {
                        "name":  "vIdOperador",
                        "label": "Id",
                        "minMult": 1,
                        "maxMult": 1,
                        "readOnly": true,
                        "occult":   false,
                        "dataType": "Int",
                        "dataSize": 10,
                        "labelCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                        "valueCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_SHORT],
                        "inputCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_INT_SHORT],
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
                        "labelCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                        "valueCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_MEDIUM],
                        "inputCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_STRING_MEDIUM],
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
                        "labelCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                        "valueCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_VERYLONG],
                        "inputCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_STRING_VERYLONG],
                        "changeParm": "theNombreCompletoOperador",
                        "changeFlag": "theNombreCompletoOperador_cambiar"
                    },
                    {
                        "name": "vDescripcionOperador",
                        "label": "Descripcion",
                        "dataType": "Text",
                        "dataSize": 255,
                        "minMult": 0,
                        "maxMult": 1,
                        "readOnly": false,
                        "labelCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                        "valueCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_TEXT_SHORT],
                        "inputCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_TEXT_SHORT],
                        "heightCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDCONTAINER_HEIGHT_SHORT],
                        "heightEditCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDEDITCONTAINER_HEIGHT_SHORT],
                        "changeParm": "theDescripcionOperador",
                        "changeFlag": "theDescripcionOperador_cambiar"
                    },


                    {
                        "name": "vCuentaBloqueada",
                        "label": "Acceso Bloqueado",
                        "dataType": "BoolYesNo",
                        "dataSize": 10,
                        "minMult": 1,
                        "maxMult": 1,
                        "readOnly": false,
                        "labelCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                        "valueCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_BOOLEAN_CHECK],
                        "inputCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_BOOLEAN_CHECK],
                        "changeParm": "theCuentaBloqueada",
                        "changeFlag": "theCuentaBloqueada_cambiar"
                    },

                    {
                        "name": "vUsuarioDebeCambiarPswdAInicioDeSesion",
                        "label": "DEBE Cambiar contraseña",
                        "dataType": "BoolYesNo",
                        "dataSize": 10,
                        "minMult": 1,
                        "maxMult": 1,
                        "readOnly": false,
                        "labelCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                        "valueCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_BOOLEAN_CHECK],
                        "inputCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_BOOLEAN_CHECK],
                        "defaultValue": 0,
                        "changeParm": "theUsuarioDebeCambiarPswdAInicioDeSesion",
                        "changeFlag": "theUsuarioDebeCambiarPswdAInicioDeSesion_cambiar"
                    },


                    {
                        "name": "vUsuarioNoPuedeCambiarPswd",
                        "label": "Contraseña Fija",
                        "dataType": "BoolYesNo",
                        "dataSize": 10,
                        "minMult": 1,
                        "maxMult": 1,
                        "readOnly": false,
                        "labelCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                        "valueCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_BOOLEAN_CHECK],
                        "inputCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_BOOLEAN_CHECK],
                        "defaultValue": 0,
                        "changeParm": "theUsuarioNoPuedeCambiarPswd",
                        "changeFlag": "theUsuarioNoPuedeCambiarPswd_cambiar"
                    },
                    {
                        "name": "vDiasCambioPwd",
                        "label": "Dias cambio contraseña",
                        "dataType": "Int",
                        "dataSize": 10,
                        "minMult": 1,
                        "maxMult": 1,
                        "readOnly": false,
                        "labelCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                        "valueCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_SHORT],
                        "inputCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_NUMBER_INT_SHORT],
                        "defaultValue": 0,
                        "changeParm": "theDiasCambioPwd",
                        "changeFlag": "theDiasCambioPwd_cambiar"
                    },


                    {
                        "name":    "NuevaContrasenaCustom",
                        "label":   "Nueva Contraseña",
                        "minMult": 1,
                        "maxMult": 1,
                        "readOnly": true,
                        "occult":   false,
                        "dataType": "Int",
                        "dataSize": 10,
                        "labelCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                        "valueCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_MEDIUM],
                        "inputCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_INT_MEDIUM],
                        "customTemplate":      "partials/adminoperadores/adminoperadores-cambiarcontrasena-custom.html",
                        "customTemplateClass": "cssSpringnut_CustomTemplate_Height0032px",
                        "visibleRoles": [ "ADMINISTRADOR"],
                        "customUIHandlers": {
                            "fUICambiarContrasenaClickListener":          null,
                            "fUICancelarCambiarContrasenaClickListener":  null,
                            "fUIConfirmarCambiarContrasenaClickListener": null,
                            "fUIContrasenaChangedListener":               null,
                            "fUIRepetirContrasenaChangedListener":        null
                        }
                    },


                    {
                        "name": "vPuedeConectarse",
                        "label": "Puede Conectarse",
                        "dataType": "BoolYesNo",
                        "dataSize": 10,
                        "minMult": 1,
                        "maxMult": 1,
                        "readOnly": true,
                        "labelCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                        "valueCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_BOOLEAN_CHECK],
                        "inputCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_BOOLEAN_CHECK]
                    },

                    {
                        "name": "vCuentaDeshabilitada",
                        "label": "Acceso Deshabilitado",
                        "dataType": "BoolYesNo",
                        "dataSize": 10,
                        "minMult": 1,
                        "maxMult": 1,
                        "readOnly": true,
                        "labelCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                        "valueCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_BOOLEAN_CHECK],
                        "inputCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_BOOLEAN_CHECK]
                    },
                    {
                        "name": "vCredencialesExpiradas",
                        "label": "Contraseña Expirada",
                        "dataType": "BoolYesNo",
                        "dataSize": 10,
                        "minMult": 1,
                        "maxMult": 1,
                        "readOnly": true,
                        "labelCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                        "valueCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_BOOLEAN_CHECK],
                        "inputCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_BOOLEAN_CHECK]
                    },


                    {
                        "name": "vFechaUltimoAccesoStr",
                        "label": "Último Acceso",
                        "dataType": "String",
                        "minMult": 0,
                        "maxMult": 1,
                        "readOnly": true,
                        "labelCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                        "valueCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_TIMESTAMP],
                        "inputCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_TIMESTAMP]
                    },
                    {
                        "name": "vUltimoEsExito",
                        "label": "Último con Éxito",
                        "dataType": "BoolYesNo",
                        "dataSize": 10,
                        "minMult": 1,
                        "maxMult": 1,
                        "readOnly": true,
                        "labelCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                        "valueCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_BOOLEAN_CHECK],
                        "inputCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_BOOLEAN_CHECK]
                    },
                    {
                        "name":  "vUltimosPerfiles",
                        "label": "Últimos perfiles",
                        "minMult": 1,
                        "maxMult": 1,
                        "readOnly": true,
                        "dataType": "String",
                        "labelCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                        "valueCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_VERYLONG],
                        "inputCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_STRING_VERYLONG],
                        "changeParm": "theNombreCompletoOperador",
                        "changeFlag": "theNombreCompletoOperador_cambiar"
                    },

                    {
                        "name": "vNumeroAccesosFallidos",
                        "label": "Accesos fallidos",
                        "dataType": "Int",
                        "minMult": 0,
                        "maxMult": 1,
                        "readOnly": true,
                        "labelCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                        "valueCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_SHORT],
                        "inputCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_INT_SHORT]
                    },
                    {
                        "name": "vFallosRestantes",
                        "label": "Fallos restantes",
                        "dataType": "Int",
                        "minMult": 0,
                        "maxMult": 1,
                        "readOnly": true,
                        "labelCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                        "valueCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_SHORT],
                        "inputCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_INT_SHORT]
                    },

                    {
                        "name": "vDiasHastaCambioPswd",
                        "label": "Dias hasta cambio contraseña",
                        "dataType": "Int",
                        "dataSize": 10,
                        "minMult": 1,
                        "maxMult": 1,
                        "readOnly": true,
                        "labelCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                        "valueCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_SHORT],
                        "inputCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_NUMBER_INT_SHORT],
                        "defaultValue": 0
                    },
                    {
                        "name": "vMillisHastaCambioPswd",
                        "label": "Milisegundos hasta cambio contraseña",
                        "dataType": "Int",
                        "dataSize": 10,
                        "minMult": 1,
                        "maxMult": 1,
                        "readOnly": true,
                        "labelCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                        "valueCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_LONG],
                        "inputCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_NUMBER_INT_LONG],
                        "defaultValue": 0
                    },
                    {
                        "name": "vNumeroAccesosGracia",
                        "label": "Accesos de Gracia",
                        "dataType": "Int",
                        "dataSize": 10,
                        "minMult": 1,
                        "maxMult": 1,
                        "readOnly": true,
                        "labelCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                        "valueCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_SHORT],
                        "inputCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_INT_SHORT]
                    },
                    {
                        "name": "vAccesosGraciaRestantes",
                        "label": "Restantes de Gracia",
                        "dataType": "Int",
                        "dataSize": 10,
                        "minMult": 1,
                        "maxMult": 1,
                        "readOnly": true,
                        "labelCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                        "valueCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_SHORT],
                        "inputCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_INT_SHORT]
                    },

                    {
                        "name": "vFechaUltimoCambioPswdStr",
                        "label": "Último CambioPwd",
                        "dataType": "String",
                        "minMult": 0,
                        "maxMult": 1,
                        "readOnly": true,
                        "labelCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                        "valueCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_TIMESTAMP],
                        "inputCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_TIMESTAMP]
                    },

                    {
                        "name": "vUltIdentificaIne",
                        "label": "Ult.Identifica INE",
                        "dataType": "Int",
                        "dataSize": 10,
                        "minMult": 1,
                        "maxMult": 1,
                        "readOnly": true,
                        "labelCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                        "valueCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_LONG],
                        "inputCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_INT_LONG]
                    },
                    {
                        "name": "vUltIdentificaJudiciales",
                        "label": "Ult.Identifica JUD",
                        "dataType": "Int",
                        "dataSize": 10,
                        "minMult": 1,
                        "maxMult": 1,
                        "readOnly": true,
                        "labelCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                        "valueCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_LONG],
                        "inputCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_INT_LONG]
                    }
                ]
            };






            theToInit.EDITPARAMETERS_AUTORIZACION = {
                "name": theToInit.AUTORIZACIONDEOPERADOR_NAME,
                "editorLabel": theToInit.AUTORIZACIONDEOPERADOR_EDITORLABEL,
                "editorClasses": theSS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR,
                "autoEdit": false,
                "masterLabels": [ "vIdOperador", "vNombreOperador"],
                "editRoles":  [ "ADMINISTRADOR"],
                "fields": [
                    {
                        "name":  "vIdAutorizacion",
                        "label": "Id",
                        "minMult": 1,
                        "maxMult": 1,
                        "readOnly": true,
                        "occult":   false,
                        "dataType": "Int",
                        "dataSize": 10,
                        "labelCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                        "valueCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_SHORT],
                        "inputCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_INT_SHORT],
                        "changeParm": "theIdAutorizacion",
                        "parmAlways": true
                    },
                    {
                        "name":  "vIdOperador",
                        "label": "Id Operador",
                        "minMult": 0,
                        "maxMult": 1,
                        "readOnly": true,
                        "dataType": "Int",
                        "dataSize": 10,
                        "labelCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                        "valueCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_SHORT],
                        "inputCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_INT_SHORT]
                    },
                    {
                        "name": "vNombreOperador",
                        "label": "Operador",
                        "dataType": "String",
                        "minMult": 0,
                        "maxMult": 1,
                        "readOnly": true,
                        "labelCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                        "valueCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_MEDIUM],
                        "inputCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_MEDIUM]
                    },
                    {
                        "name": "vNombreCompletoOperador",
                        "label": "Nombre Completo",
                        "dataType": "String",
                        "minMult": 0,
                        "maxMult": 1,
                        "readOnly": true,
                        "labelCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                        "valueCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_VERYLONG],
                        "inputCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_VERYLONG]
                    },
                    {
                        "name":  "vIdPerfil",
                        "label": "Id Perfil",
                        "minMult": 0,
                        "maxMult": 1,
                        "readOnly": true,
                        "dataType": "Int",
                        "dataSize": 10,
                        "labelCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                        "valueCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_SHORT],
                        "inputCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_INT_SHORT],
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
                        "readOnly": true,
                        "labelCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                        "valueCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_MEDIUM],
                        "inputCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_MEDIUM],
                        "candidates": {
                            "retrievaAlways": true,
                            "candidateFields": [
                                { "editorField": "vIdPerfil",     "candidateField": "vIdPerfil"},
                                { "editorField": "vNombrePerfil", "candidateField": "vNombrePerfil"}
                            ],
                            "grid": {
                                "name":        theToInit.PERFILESCANDIDATOSDEAUTORIZACIONOPERADOR_NAME,
                                "gridLabel":   theToInit.PERFILESCANDIDATOSDEAUTORIZACIONOPERADOR_GRIDLABEL,
                                "labels":      theToInit.PERFILESCANDIDATOSDEAUTORIZACIONOPERADOR_LABELS,
                                "fields":      theToInit.PERFILESCANDIDATOSDEAUTORIZACIONOPERADOR_FIELDS,
                                "dataTypes":   theToInit.PERFILESCANDIDATOSDEAUTORIZACIONOPERADOR_DATATYPES,
                                "gridClasses": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_TABLE,
                                "classes":     theToInit.PERFILESCANDIDATOSDEAUTORIZACIONOPERADOR_COLUMNCLASSES,
                                "retrievalTarget": "fParentCtrl().fAdminoperadoresSvce",
                                "retrieval":   "fprDo_Adminoperadores_ListaPerfiles",
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
                        "labelCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                        "valueCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_TEXT_SHORT],
                        "inputCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_TEXT_SHORT],
                        "heightCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDCONTAINER_HEIGHT_SHORT],
                        "heightEditCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDEDITCONTAINER_HEIGHT_SHORT]
                    }
                ]
            };





            theToInit.EDITPARAMETERS_PERFIL = {
                "name": theToInit.PERFIL_NAME,
                "editorLabel": theToInit.PERFIL_EDITORLABEL,
                "editorClasses": theSS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR,
                "autoEdit": false,
                "masterLabels": [ "crNombre", "crDescripcion"],
                "editRoles":  [ "INSTALADOR"],
                "fields": [
                    {
                        "name": "vIdPerfil",
                        "label": "Id",
                        "dataType": "Int",
                        "dataSize": 10,
                        "minMult": 1,
                        "maxMult": 1,
                        "readOnly": true,
                        "labelCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                        "valueCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_MEDIUM],
                        "inputCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_INT_MEDIUM],
                        "changeParm": "theIdPerfil",
                        "parmAlways": true
                    },
                    {
                        "name": "vNombrePerfil",
                        "label": "Nombre",
                        "dataType": "String",
                        "dataSize": 255,
                        "minMult": 1,
                        "maxMult": 1,
                        "labelCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                        "valueCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_LONG],
                        "inputCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_STRING_LONG],
                        "validate": "$value && $value.length",
                        "invalidMessage": "Debe introducir un nombre no vacío",
                        "changeParm": "theNombrePerfil",
                        "changeFlag": "theNombrePerfil_cambiar"
                    },
                    {
                        "name": "vDescripcionPerfil",
                        "label": "Descripcion",
                        "dataType": "Text",
                        "dataSize": 512,
                        "minMult": 0,
                        "maxMult": 1,
                        "labelCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                        "valueCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_TEXT_SHORT],
                        "inputCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_TEXT_SHORT],
                        "heightCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDCONTAINER_HEIGHT_SHORT],
                        "heightEditCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDEDITCONTAINER_HEIGHT_SHORT],
                        "changeParm": "theDescripcionPerfil",
                        "changeFlag": "theDescripcionPerfil_cambiar"
                    }
                ]
            };







            theToInit.EDITPARAMETERS_OPERADORDEPERFIL = {
                "name": theToInit.OPERADORDEPERFIL_NAME,
                "editorLabel": theToInit.OPERADORDEPERFIL_EDITORLABEL,
                "editorClasses": theSS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR,
                "autoEdit": false,
                "masterLabels": [ "vIdOperador", "descripcion"],
                "editRoles":  [ "ADMINISTRADOR"],
                "fields": theToInit.EDITPARAMETERS_OPERADOR[ "fields"].slice()
            };






            theToInit.EDITPARAMETERS_AUTORIZACIONDEOPERADORDEPERFIL = {
                "name": theToInit.AUTORIZACIONDEOPERADORDEPERFIL_NAME,
                "editorLabel": theToInit.AUTORIZACIONDEOPERADORDEPERFIL_EDITORLABEL,
                "editorClasses": theSS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR,
                "autoEdit": false,
                "masterLabels": [ "vIdOperador", "vNombreOperador", "vNonbreCompletoOperador"],
                "editRoles":  [ "ADMINISTRADOR"],
                "fields": [
                    {
                        "name":  "vIdAutorizacion",
                        "label": "Id",
                        "minMult": 1,
                        "maxMult": 1,
                        "readOnly": true,
                        "occult":   false,
                        "dataType": "Int",
                        "dataSize": 10,
                        "labelCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                        "valueCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_SHORT],
                        "inputCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_INT_SHORT],
                        "changeParm": "theIdAutorizacion",
                        "parmAlways": true
                    },
                    {
                        "name":  "vIdOperador",
                        "label": "Id Operador",
                        "minMult": 0,
                        "maxMult": 1,
                        "readOnly": true,
                        "dataType": "Int",
                        "dataSize": 10,
                        "labelCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                        "valueCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_SHORT],
                        "inputCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_INT_SHORT]
                    },
                    {
                        "name": "vNombreOperador",
                        "label": "Operador",
                        "dataType": "String",
                        "minMult": 0,
                        "maxMult": 1,
                        "readOnly": true,
                        "labelCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                        "valueCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_MEDIUM],
                        "inputCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_MEDIUM]
                    },
                    {
                        "name": "vNombreCompletoOperador",
                        "label": "Nombre Completo",
                        "dataType": "String",
                        "minMult": 0,
                        "maxMult": 1,
                        "readOnly": true,
                        "labelCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                        "valueCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_VERYLONG],
                        "inputCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_VERYLONG]
                    },
                    {
                        "name":  "vIdPerfil",
                        "label": "Id Perfil",
                        "minMult": 0,
                        "maxMult": 1,
                        "readOnly": true,
                        "dataType": "Int",
                        "dataSize": 10,
                        "labelCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                        "valueCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_SHORT],
                        "inputCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_INT_SHORT],
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
                        "readOnly": true,
                        "labelCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                        "valueCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_MEDIUM],
                        "inputCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_MEDIUM],
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
                                "gridClasses": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_TABLE,
                                "classes":     theToInit.PERFILESCANDIDATOSDEAUTORIZACIONOPERADORDEPERFIL_COLUMNCLASSES,
                                "retrievalTarget": "fParentCtrl().fAdminoperadoresSvce",
                                "retrieval":   "fprDo_Adminoperadores_ListaPerfiles",
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
                        "labelCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                        "valueCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_TEXT_SHORT],
                        "inputCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_TEXT_SHORT],
                        "heightCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDCONTAINER_HEIGHT_SHORT],
                        "heightEditCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDEDITCONTAINER_HEIGHT_SHORT]
                    }
                ]
            };







            theToInit.EDITPARAMETERS = { };
            theToInit.EDITPARAMETERS[ theToInit.OPERADOR_NAME]               =  theToInit.EDITPARAMETERS_OPERADOR;
            theToInit.EDITPARAMETERS[ theToInit.AUTORIZACIONDEOPERADOR_NAME]    =  theToInit.EDITPARAMETERS_AUTORIZACION;
            theToInit.EDITPARAMETERS[ theToInit.PERFIL_NAME]                 =  theToInit.EDITPARAMETERS_PERFIL;
            theToInit.EDITPARAMETERS[ theToInit.OPERADORDEPERFIL_NAME]     =  theToInit.EDITPARAMETERS_OPERADORDEPERFIL;
            theToInit.EDITPARAMETERS[ theToInit.AUTORIZACIONDEOPERADORDEPERFIL_NAME] =  theToInit.EDITPARAMETERS_AUTORIZACIONDEOPERADORDEPERFIL;





            theToInit.EDITORNAMES = [
                theToInit.OPERADOR_NAME,
                theToInit.AUTORIZACIONDEOPERADOR_NAME,
                theToInit.PERFIL_NAME,
                theToInit.OPERADORDEPERFIL_NAME,
                theToInit.AUTORIZACIONDEOPERADORDEPERFIL_NAME
            ];





            theToInit.EDITORNAMES_INITIALLOAD = [
            ];










            theToInit.CREATEPARAMETERS_OPERADOR = {
                "name": theToInit.CREAR_OPERADOR_NAME,
                "creatorLabel": theToInit.OPERADOR_CREATORLABEL,
                "creatorClasses": theSS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR,
                "fields": [
                    {
                        "name":  "vNombreOperador",
                        "label": "Nombre",
                        "minMult": 1,
                        "maxMult": 1,
                        "readOnly": false,
                        "dataType": "String",
                        "labelCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                        "valueCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_MEDIUM],
                        "inputCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_STRING_MEDIUM],
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
                        "labelCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                        "valueCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_VERYLONG],
                        "inputCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_STRING_VERYLONG],
                        "changeParm": "theNombreCompletoOperador",
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
                        "labelCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                        "valueCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_TEXT_SHORT],
                        "inputCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_TEXT_SHORT],
                        "heightCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDCONTAINER_HEIGHT_SHORT],
                        "heightEditCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDEDITCONTAINER_HEIGHT_SHORT],
                        "changeParm": "theDescripcionOperador",
                        "parmAlways": true
                    },
                    {
                        "name":  "vContrasena",
                        "label": "Contraseña",
                        "minMult": 1,
                        "maxMult": 1,
                        "readOnly": false,
                        "dataType": "String",
                        "labelCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                        "valueCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_MEDIUM],
                        "inputCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_STRING_MEDIUM],
                        "changeParm": "theContrasena",
                        "parmAlways": true
                    },
                    {
                        "name":  "vRepetirContrasena",
                        "label": "Repetir Contraseña",
                        "minMult": 1,
                        "maxMult": 1,
                        "readOnly": false,
                        "dataType": "String",
                        "labelCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                        "valueCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_MEDIUM],
                        "inputCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_STRING_MEDIUM],
                        "changeParm": "theRepetirContrasena",
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
                        "labelCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                        "valueCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_BOOLEAN_CHECK],
                        "inputCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_BOOLEAN_CHECK],
                        "defaultValue": 0,
                        "changeParm": "theUsuarioNoPuedeCambiarPswd",
                        "parmAlways": true
                    },

                    {
                        "name": "vDiasCambioPwd",
                        "label": "Dias cambio contraseña",
                        "dataType": "Int",
                        "dataSize": 10,
                        "minMult": 1,
                        "maxMult": 1,
                        "readOnly": false,
                        "labelCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                        "valueCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_SHORT],
                        "inputCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_NUMBER_INT_SHORT],
                        "defaultValue": 0,
                        "changeParm": "theDiasCambioPwd",
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
                        "labelCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                        "valueCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_BOOLEAN_CHECK],
                        "inputCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_BOOLEAN_CHECK],
                        "changeParm": "theCuentaBloqueada",
                        "defaultValue": 0,
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
                        "labelCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                        "valueCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_BOOLEAN_CHECK],
                        "inputCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_BOOLEAN_CHECK],
                        "defaultValue": 0,
                        "changeParm": "theUsuarioDebeCambiarPswdAInicioDeSesion",
                        "parmAlways": true
                    }
                ]
            };









            theToInit.CREATEPARAMETERS_AUTORIZACIONDEOPERADOR = {
                "name": theToInit.CREAR_AUTORIZACIONDEOPERADOR_NAME,
                "creatorLabel": theToInit.AUTORIZACIONDEOPERADOR_CREATORLABEL,
                "creatorClasses": theSS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR,
                "masterLabels": [ "vIdOperador", "vNombreOperador"],
                "masterParms":  [ [ "vIdOperador", "theIdOperador"]],
                "masterType":  theToInit.OPERADOR_TYPE,
                "fields": [
                    {
                        "name":  "vIdPerfil",
                        "label": "Id Perfil",
                        "minMult": 0,
                        "maxMult": 1,
                        "readOnly": true,
                        "dataType": "Int",
                        "dataSize": 10,
                        "labelCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                        "valueCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_SHORT],
                        "inputCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_INT_SHORT],
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
                        "labelCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                        "valueCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_MEDIUM],
                        "inputCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_MEDIUM],
                        "candidates": {
                            "retrievaAlways": true,
                            "candidateFields": [
                                { "editorField": "vIdPerfil",     "candidateField": "vIdPerfil"},
                                { "editorField": "vNombrePerfil", "candidateField": "vNombrePerfil"}
                            ],
                            "grid": {
                                "name":        theToInit.PERFILESCANDIDATOSDENUEVAAUTORIZACIONOPERADOR_NAME,
                                "gridLabel":   theToInit.PERFILESCANDIDATOSDENUEVAAUTORIZACIONOPERADOR_GRIDLABEL,
                                "labels":      theToInit.PERFILESCANDIDATOSDENUEVAAUTORIZACIONOPERADOR_LABELS,
                                "fields":      theToInit.PERFILESCANDIDATOSDENUEVAAUTORIZACIONOPERADOR_FIELDS,
                                "dataTypes":   theToInit.PERFILESCANDIDATOSDENUEVAAUTORIZACIONOPERADOR_DATATYPES,
                                "gridClasses": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_TABLE,
                                "classes":     theToInit.PERFILESCANDIDATOSDENUEVAAUTORIZACIONOPERADOR_COLUMNCLASSES,
                                "retrievalTarget": "fParentCtrl().fAdminoperadoresSvce",
                                "retrieval":   "fprDo_Adminoperadores_ListaPerfiles",
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
                        "labelCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                        "valueCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_TEXT_SHORT],
                        "inputCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_TEXT_SHORT],
                        "heightCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDCONTAINER_HEIGHT_SHORT],
                        "heightEditCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDEDITCONTAINER_HEIGHT_SHORT]
                    }
                ]
            };





            theToInit.CREATEPARAMETERS_PERFIL = {
                "name": theToInit.CREAR_PERFIL_NAME,
                "creatorLabel": theToInit.PERFIL_CREATORLABEL,
                "creatorClasses": theSS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR,
                "fields": [
                    {
                        "name": "vNombrePerfil",
                        "label": "Nombre",
                        "dataType": "String",
                        "dataSize": 255,
                        "minMult": 1,
                        "maxMult": 1,
                        "labelCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                        "valueCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_VERYLONG],
                        "inputCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_STRING_VERYLONG],
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
                        "labelCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                        "valueCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_TEXT_SHORT],
                        "inputCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_TEXT_SHORT],
                        "heightCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDCONTAINER_HEIGHT_SHORT],
                        "heightEditCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDEDITCONTAINER_HEIGHT_SHORT],
                        "changeParm": "theDescripcionPerfil",
                        "parmAlways": true
                    }
                ]
            };



            theToInit.CREATEPARAMETERS_OPERADORDEPERFIL = {
                "name": theToInit.CREAR_OPERADORDEPERFIL_NAME,
                "creatorLabel": theToInit.OPERADORDEPERFIL_CREATORLABEL,
                "creatorClasses": theSS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR,
                "masterLabels": [ "vIdPerfil", "vNombrePerfil"],
                "masterParms":  [ [ "vIdPerfil", "theIdPerfil", "optional"]],
                "masterType":  theToInit.PERFIL_TYPE,
                "fields": theToInit.CREATEPARAMETERS_OPERADOR[ "fields"].slice()
            };





            theToInit.CREATEPARAMETERS_AUTORIZACIONDEOPERADORDEPERFIL = {
                "name": theToInit.CREAR_AUTORIZACIONDEOPERADORDEPERFIL_NAME,
                "creatorLabel": theToInit.AUTORIZACIONDEOPERADORDEPERFIL_CREATORLABEL,
                "creatorClasses": theSS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR,
                "masterLabels": [ "vIdOperador", "vNombreOperador"],
                "masterParms":  [ [ "vIdOperador", "theIdOperador"]],
                "masterType":  theToInit.OPERADOR_TYPE,
                "fields": [
                    {
                        "name":  "vIdPerfil",
                        "label": "Id Perfil",
                        "minMult": 0,
                        "maxMult": 1,
                        "readOnly": true,
                        "dataType": "Int",
                        "dataSize": 10,
                        "labelCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                        "valueCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_SHORT],
                        "inputCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_INT_SHORT],
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
                        "labelCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                        "valueCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_MEDIUM],
                        "inputCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_MEDIUM],
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
                                "gridClasses": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_TABLE,
                                "classes":     theToInit.PERFILESCANDIDATOSDENUEVAAUTORIZACIONOPERADORDEPERFIL_COLUMNCLASSES,
                                "retrievalTarget": "fParentCtrl().fAdminoperadoresSvce",
                                "retrieval":   "fprDo_Adminoperadores_ListaPerfiles",
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
                        "labelCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN],
                        "valueCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_TEXT_SHORT],
                        "inputCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_TEXT_SHORT],
                        "heightCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDCONTAINER_HEIGHT_SHORT],
                        "heightEditCss": theS_CssNames_Springnut_Adminoperadores.CSSs_SPRINGNUT_ADMINOPERADORES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDEDITCONTAINER_HEIGHT_SHORT]
                    }
                ]
            };









            theToInit.CREATEPARAMETERS = { };
            theToInit.CREATEPARAMETERS[ theToInit.CREAR_OPERADOR_NAME]            =  theToInit.CREATEPARAMETERS_OPERADOR;
            theToInit.CREATEPARAMETERS[ theToInit.CREAR_AUTORIZACIONDEOPERADOR_NAME] =  theToInit.CREATEPARAMETERS_AUTORIZACIONDEOPERADOR;
            theToInit.CREATEPARAMETERS[ theToInit.CREAR_PERFIL_NAME]              =  theToInit.CREATEPARAMETERS_PERFIL;
            theToInit.CREATEPARAMETERS[ theToInit.CREAR_OPERADORDEPERFIL_NAME]            =  theToInit.CREATEPARAMETERS_OPERADORDEPERFIL;
            theToInit.CREATEPARAMETERS[ theToInit.CREAR_AUTORIZACIONDEOPERADORDEPERFIL_NAME] =  theToInit.CREATEPARAMETERS_AUTORIZACIONDEOPERADORDEPERFIL;




            theToInit.CREATORNAMES = [
                theToInit.CREAR_OPERADOR_NAME,
                theToInit.CREAR_AUTORIZACIONDEOPERADOR_NAME,
                theToInit.CREAR_PERFIL_NAME,
                theToInit.CREAR_OPERADORDEPERFIL_NAME,
                theToInit.CREAR_AUTORIZACIONDEOPERADORDEPERFIL_NAME
            ];









            theToInit.WIRES = [
                {   "name":     "UpdateOperadorEditorOnOperadoresSelectionChange",
                    "kind":     "GRID2EDITOR",
                    "from":     theToInit.OPERADORES_NAME,
                    "to":       theToInit.OPERADOR_NAME,
                    "doTarget": "fAdminoperadoresSvce",
                    "do":       "fprDo_Adminoperadores_OperadorDatos",
                    "with":     "vIdOperador",
                    "reverseDo": "fprDo_Adminoperadores_CambiarOperador"
                },
                {   "name":     "UpdateOperadorCreatorOnOperadoresSelectionChange",
                    "kind":     "GRID2CREATOR",
                    "from":     theToInit.OPERADORES_NAME,
                    "to":       theToInit.CREAR_OPERADOR_NAME,
                    "doTarget": "fAdminoperadoresSvce",
                    "do":       "fprDo_Adminoperadores_OperadorDatos",
                    "with":     "vIdOperador",
                    "reverseDo": "fprDo_Adminoperadores_CrearOperador"
                },
                {   "name":     "UpdateListaAutorizacionesDeOperadorOnOperadoresSelectionChange",
                    "kind":     "GRID2SLAVEGRID",
                    "from":     theToInit.OPERADORES_NAME,
                    "to":       theToInit.AUTORIZACIONESDEOPERADOR_NAME,
                    "doTarget": "fAdminoperadoresSvce",
                    "do":       "fprDo_Adminoperadores_ListaAutorizacionesDeOperador",
                    "with":     "vIdOperador"
                },



                {   "name":     "UpdateAutorizacionDeOperadorEditorOnAutorizacionesDeOperadorSelectionChange",
                    "kind":     "GRID2EDITOR",
                    "from":     theToInit.AUTORIZACIONESDEOPERADOR_NAME,
                    "to":       theToInit.AUTORIZACIONDEOPERADOR_NAME,
                    "doTarget": "fAdminoperadoresSvce",
                    "do":       "fprDo_Adminoperadores_AutorizacionDatos",
                    "with":     "vIdAutorizacion",
                    "reverseDo":   "fprDo_Adminoperadores_CambiarAutorizacionOperador"
                },
                {   "name":     "UpdateAutorizacionDeOperadorCreatorOnAutorizacionesDeOperadorSelectionChange",
                    "kind":     "GRID2CREATOR",
                    "from":     theToInit.AUTORIZACIONESDEOPERADOR_NAME,
                    "to":       theToInit.CREAR_AUTORIZACIONDEOPERADOR_NAME,
                    "doTarget": "fAdminoperadoresSvce",
                    "do":       "fprDo_Adminoperadores_AutorizacionDatos",
                    "with":     "vIdAutorizacion",
                    "reverseDo": "fprDo_Adminoperadores_CrearAutorizacionDeOperador"
                },





                {   "name":     "UpdateListaOperadoresDePerfilOnPerfilesSelectionChange",
                    "kind":     "GRID2SLAVEGRID",
                    "from":     theToInit.PERFILES_NAME,
                    "to":       theToInit.OPERADORESDEPERFIL_NAME,
                    "doTarget": "fAdminoperadoresSvce",
                    "do":       "fprDo_Adminoperadores_ListaOperadoresDePerfil",
                    "with":     "vIdPerfil"
                },
                {   "name":     "UpdateOperadorDePerfilEditorOnOperadoresDePerfilSelectionChange",
                    "kind":     "GRID2EDITOR",
                    "from":     theToInit.OPERADORESDEPERFIL_NAME,
                    "to":       theToInit.OPERADORDEPERFIL_NAME,
                    "when":     "SELECTION",
                    "doTarget": "fAdminoperadoresSvce",
                    "do":       "fprDo_Adminoperadores_OperadorDatos",
                    "with":     "vIdOperador",
                    "reverseDo":   "fprDo_Adminoperadores_CambiarOperador"
                },
                {   "name":     "UpdateOperadorDePerfilCreatorOnOperadoresDePerfilSelectionChange",
                    "kind":     "GRID2CREATOR",
                    "from":     theToInit.OPERADORESDEPERFIL_NAME,
                    "to":       theToInit.CREAR_OPERADORDEPERFIL_NAME,
                    "doTarget": "fAdminoperadoresSvce",
                    "do":       "fprDo_Adminoperadores_OperadorDatos",
                    "with":     "vIdOperador",
                    "reverseDo": "fprDo_Adminoperadores_CrearOperadorConPerfil"
                },

                {   "name":     "UpdateListaAutorizacionesDeOperadorDePerfilOnOperadoresDePerfilSelectionChange",
                    "kind":     "GRID2SLAVEGRID",
                    "from":     theToInit.OPERADORESDEPERFIL_NAME,
                    "to":       theToInit.AUTORIZACIONESDEOPERADORDEPERFIL_NAME,
                    "doTarget": "fAdminoperadoresSvce",
                    "do":       "fprDo_Adminoperadores_ListaAutorizacionesDeOperador",
                    "with":     "vIdOperador"
                },

                {   "name":     "UpdateAutorizacionDeOperadorDePerfilEditorOnAutorizacionesDeOperadorDePerfilSelectionChange",
                    "kind":     "GRID2EDITOR",
                    "from":     theToInit.AUTORIZACIONESDEOPERADORDEPERFIL_NAME,
                    "to":       theToInit.AUTORIZACIONDEOPERADORDEPERFIL_NAME,
                    "doTarget": "fAdminoperadoresSvce",
                    "do":       "fprDo_Adminoperadores_AutorizacionDatos",
                    "with":     "vIdAutorizacion",
                    "reverseDo":   "fprDo_Adminoperadores_CambiarAutorizacionOperador"
                },
                {   "name":     "UpdateAutorizacionDeOperadorDePerfilCreatorOnAutorizacionesDeOperadorDePerfilSelectionChange",
                    "kind":     "GRID2CREATOR",
                    "from":     theToInit.AUTORIZACIONESDEOPERADORDEPERFIL_NAME,
                    "to":       theToInit.CREAR_AUTORIZACIONDEOPERADORDEPERFIL_NAME,
                    "doTarget": "fAdminoperadoresSvce",
                    "do":       "fprDo_Adminoperadores_AutorizacionDatos",
                    "with":     "vIdAutorizacion",
                    "reverseDo": "fprDo_Adminoperadores_CrearAutorizacionDeOperador"
                },



                {   "name":     "UpdatePerfilEditorOnPerfilesSelectionChange",
                    "kind":     "GRID2EDITOR",
                    "from":     theToInit.PERFILES_NAME,
                    "to":       theToInit.PERFIL_NAME,
                    "doTarget": "fAdminoperadoresSvce",
                    "do":       "fprDo_Adminoperadores_PerfilDatos",
                    "with":     "vIdPerfil",
                    "reverseDo":   "fprDo_Adminoperadores_CambiarPerfil"
                },
                {   "name":     "UpdatePerfilCreatorOnPerfilesSelectionChange",
                    "kind":     "GRID2CREATOR",
                    "from":     theToInit.PERFILES_NAME,
                    "to":       theToInit.CREAR_PERFIL_NAME,
                    "doTarget": "fAdminoperadoresSvce",
                    "do":       "fprDo_Adminoperadores_PerfilDatos",
                    "with":     "vIdPerfil",
                    "reverseDo": "fprDo_Adminoperadores_CrearPerfil"
                }



            ];















            theToInit.TOPTABSBAR_ENTRIES = [
                { label:  theToInit.OPERADORES_GRIDLABEL,           value: theToInit.OPERADORES_NAME},
                { label:  theToInit.AUTORIZACIONESDEOPERADOR_GRIDLABEL,            value: theToInit.AUTORIZACIONESDEOPERADOR_NAME},
                { label:  theToInit.PERFILES_GRIDLABEL,              value: theToInit.PERFILES_NAME},
                { label:  theToInit.OPERADORESDEPERFIL_GRIDLABEL, value: theToInit.OPERADORESDEPERFIL_NAME},
                { label:  theToInit.AUTORIZACIONESDEOPERADORDEPERFIL_GRIDLABEL, value: theToInit.AUTORIZACIONESDEOPERADORDEPERFIL_NAME}
            ];


            theToInit.TOPTABSBAR_INITIALLYSELECTEDTAB_DEFAULT = theToInit.TOPTABSBAR_ENTRIES[ 0][ "value"];

            if( !theToInit.TOPTABSBAR_INITIALLYSELECTEDTAB) {
                theToInit.TOPTABSBAR_INITIALLYSELECTEDTAB = theToInit.TOPTABSBAR_INITIALLYSELECTEDTAB_DEFAULT;
            }




            theToInit.TOPTABSBAR_TABSFIXEDINITIAL_DEFAULT_ALL = [
                theToInit.OPERADORES_NAME,
                theToInit.AUTORIZACIONESDEOPERADOR_NAME,
                theToInit.PERFILES_NAME,
                theToInit.OPERADORESDEPERFIL_NAME,
                theToInit.AUTORIZACIONESDEOPERADORDEPERFIL_NAME
            ];

            theToInit.TOPTABSBAR_TABSFIXEDINITIAL_DEFAULT_FIRST = theToInit.TOPTABSBAR_TABSFIXEDINITIAL_DEFAULT_ALL[ 0];
            theToInit.TOPTABSBAR_TABSFIXEDINITIAL_DEFAULT_LISTAOPERADORES = [ theToInit.OPERADORES_NAME];

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
            theSS_CssNames_Springnut_Adminoperadores
        );
        anExistingModule = aModule;

        theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
    }






    return anExistingModule;

}]);







