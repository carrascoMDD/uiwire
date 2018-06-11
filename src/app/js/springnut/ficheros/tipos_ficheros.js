'use strict';

/*
 * tipos_ficheros.js
 *
 * Creado @author Antonio Carrasco Valero 201503171427
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






angular.module("ficherosTypes").factory("TiposFicheros", [
    "TypesRegistrySvce",
    "OverriderSvce",
    function( theSS_typesregistry,
              theSS_Overrider) {




        var ModuleName     = "tipos_ficheros";
        var ModulePackages = "springnut/ficherosTypes";
        var ModuleFullName = ModulePackages + "/" + ModuleName;



        var aMod_definer = function( theS_Overrider) {


            if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}




            var pgInitWithModuleVariations = function( theToInit) {

                if( !theToInit) {
                    return;
                }


                theToInit.TIPOFICHERO_INE            = "INE"            ;
                theToInit.TIPOFICHERO_Judiciales     = "Judiciales"            ;


                theToInit.TIPOSFICHEROS = [
                    { "tFic": theToInit.TIPOFICHERO_INE         ,"routeTo": { "templateUrl": "partials/ficheros/ficheros.html",                   "controller": "FicherosCtrl"},
                        "TOPTABSBAR_ENTRIES": [
                            { "label": "Ficheros INE",                 "value": "ListaFicheros",           "selectorGridName": null,   "argumentsName": null },
                            { "label": "Boletines de Fichero",         "value": "ListaBoletinesDeFichero", "selectorGridName": null,   "argumentsName": null },
                            { "label": "Inscripcion",                  "value": "InscripcionDeBoletin",    "editorName": "BoletinInscripcion", "selectorGridName": null,   "argumentsName": null },
                            { "label": "Personales",                   "value": "PersonalesDeBoletin",     "editorName": "BoletinPersonales", "selectorGridName": null,   "argumentsName": null },
                            { "label": "Demograficos",                 "value": "DemograficosDeBoletin",   "editorName": "BoletinDemograficos", "selectorGridName": null,   "argumentsName": null },
                            { "label": "Causas",                       "value": "CausasDeBoletin",         "editorName": "BoletinCausas", "selectorGridName": null,   "argumentsName": null },
                            { "label": "Codigos",                      "value": "CodigosDeBoletin",        "editorName": "BoletinCodigos", "selectorGridName": null,   "argumentsName": null },
                            { "label": "Otros datos",                  "value": "OtrosDatosDeBoletin",     "editorName": "BoletinOtra", "selectorGridName": null,   "argumentsName": null },
                            { "label": "Origen",                       "value": "OrigenDeBoletin",         "editorName": "BoletinOrigen", "selectorGridName": null,   "argumentsName": null },
                            { "label": "Judiciales",                   "value": "JudicialesDeBoletin",     "editorName": "BoletinJudiciales", "selectorGridName": null,   "argumentsName": null },
                            { "label": "Imagen",                       "value": "ImagenDeBoletin",         "editorName": "BoletinImagen", "selectorGridName": null,   "argumentsName": null },
                            { "label": "Grabacion",                    "value": "GrabacionDeBoletin",      "editorName": "BoletinGrabacion", "selectorGridName": null,   "argumentsName": null },
                            { "label": "Codificacion",                 "value": "CodificacionDeBoletin",   "editorName": "BoletinCodificacion", "selectorGridName": null,   "argumentsName": null },
                            { "label": "Extra datos",                  "value": "ExtraDatosDeBoletin",     "editorName": "BoletinExtra", "selectorGridName": null,   "argumentsName": null }
                        ]},
                    { "tFic": theToInit.TIPOFICHERO_Judiciales  ,"routeTo": { "templateUrl": "partials/ficheros/ficheros.html",                   "controller": "FicherosCtrl"},
                        "TOPTABSBAR_ENTRIES": [
                            { "label": "Ficheros Judiciales",  "value": "ListaFicheros",           "selectorGridName": null,   "argumentsName": null },
                            { "label": "Boletines de Fichero", "value": "ListaBoletinesDeFichero", "selectorGridName": null,   "argumentsName": null },
                            { "label": "Inscripcion",                  "value": "InscripcionDeBoletin",    "editorName": "BoletinInscripcion", "selectorGridName": null,   "argumentsName": null },
                            { "label": "Personales",                   "value": "PersonalesDeBoletin",     "editorName": "BoletinPersonales", "selectorGridName": null,   "argumentsName": null },
                            { "label": "Demograficos",                 "value": "DemograficosDeBoletin",   "editorName": "BoletinDemograficos", "selectorGridName": null,   "argumentsName": null },
                            { "label": "Causas",                       "value": "CausasDeBoletin",         "editorName": "BoletinCausas", "selectorGridName": null,   "argumentsName": null },
                            { "label": "Codigos",                      "value": "CodigosDeBoletin",        "editorName": "BoletinCodigos", "selectorGridName": null,   "argumentsName": null },
                            { "label": "Otros datos",                  "value": "OtrosDatosDeBoletin",     "editorName": "BoletinOtra", "selectorGridName": null,   "argumentsName": null },
                            { "label": "Origen",                       "value": "OrigenDeBoletin",         "editorName": "BoletinOrigen", "selectorGridName": null,   "argumentsName": null },
                            { "label": "Judiciales",                   "value": "JudicialesDeBoletin",     "editorName": "BoletinJudiciales", "selectorGridName": null,   "argumentsName": null },
                            { "label": "Grabacion",                    "value": "GrabacionDeBoletin",      "editorName": "BoletinGrabacion", "selectorGridName": null,   "argumentsName": null },
                            { "label": "Codificacion",                 "value": "CodificacionDeBoletin",   "editorName": "BoletinCodificacion", "selectorGridName": null,   "argumentsName": null },
                            { "label": "Extra datos",                  "value": "ExtraDatosDeBoletin",     "editorName": "BoletinExtra", "selectorGridName": null,   "argumentsName": null }
                        ]}

                ];
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







