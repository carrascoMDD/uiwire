'use strict';

/*
 * tipos_eventos.js
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






angular.module("eventosTypes").factory("TiposEventos", [
    "TypesRegistrySvce",
    "OverriderSvce",
    function( theSS_typesregistry,
              theSS_Overrider) {




        var ModuleName     = "tipos_eventos";
        var ModulePackages = "springnut/eventosTypes";
        var ModuleFullName = ModulePackages + "/" + ModuleName;



        var aMod_definer = function( theS_Overrider) {


            if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}




            var pgInitWithModuleVariations = function( theToInit) {

                if( !theToInit) {
                    return;
                }


                theToInit.TIPOEVENTO_Accesos            = "Accesos"            ;
                theToInit.TIPOEVENTO_AccesosOperadores  = "AccesosOperadores"  ;
                theToInit.TIPOEVENTO_AccesosFallidos    = "AccesosFallidos"    ;
                theToInit.TIPOEVENTO_Lecturasboletines  = "Lecturasboletines"  ;
                theToInit.TIPOEVENTO_Excepciones        = "Excepciones"        ;
                theToInit.TIPOEVENTO_Cambios            = "Cambios"         ;
                theToInit.TIPOEVENTO_Mensajes           = "Mensajes"           ;



                theToInit.TIPOSEVENTOS = [
                    { "tEvt": theToInit.TIPOEVENTO_Accesos            ,"routeTo": { "templateUrl": "partials/eventos/eventos.html",                   "controller": "EventosCtrl"},
                        "TOPTABSBAR_ENTRIES": [
                            { "label": "Accesos de Operadores",     "value": "ListaAccesosoperadores", "selectorGridName": null,  "argumentsName": "FechasListaAccesosoperadores" },
                            { "label": "Accesos Fallidos",          "value": "ListaAccesosfallidos",   "selectorGridName": null,  "argumentsName": "FechasListaAccesosfallidos" }
                        ]},
                    { "tEvt": theToInit.TIPOEVENTO_AccesosOperadores  ,"routeTo": { "templateUrl": "partials/eventos/eventos.html",                   "controller": "EventosCtrl"},
                        "TOPTABSBAR_ENTRIES": [
                            { "label": "Accesos de Operadores",    "value": "ListaAccesosoperadores", "selectorGridName": null,   "argumentsName": "FechasListaAccesosoperadores"  }
                        ]},
                    { "tEvt": theToInit.TIPOEVENTO_AccesosFallidos    ,"routeTo": { "templateUrl": "partials/eventos/eventos.html",                   "controller": "EventosCtrl"},
                        "TOPTABSBAR_ENTRIES": [
                            { "label": "Accesos Fallidos",         "value": "ListaAccesosfallidos", "selectorGridName": null,     "argumentsName": "FechasListaAccesosfallidos" }
                        ]},
                    { "tEvt": theToInit.TIPOEVENTO_Lecturasboletines  ,"routeTo": { "templateUrl": "partials/eventos/eventos.html",                   "controller": "EventosCtrl"},
                        "TOPTABSBAR_ENTRIES": [
                            { "label": "Lecturas Boletines",       "value": "ListaLecturasboletines",  "selectorGridName": null,  "argumentsName": "FechasListaLecturasboletines" }
                        ]},
                    { "tEvt": theToInit.TIPOEVENTO_Excepciones        ,"routeTo": { "templateUrl": "partials/eventos/eventos.html",                   "controller": "EventosCtrl"},
                        "TOPTABSBAR_ENTRIES": [
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
                            }
                        ]},
                    { "tEvt": theToInit.TIPOEVENTO_Cambios        ,"routeTo": { "templateUrl": "partials/eventos/eventos.html",                   "controller": "EventosCtrl"},
                        "TOPTABSBAR_ENTRIES": [
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
                        ]},
                    { "tEvt": theToInit.TIPOEVENTO_Mensajes           ,"routeTo": { "templateUrl": "partials/eventos/eventos-pendienterealizar.html", "controller": "EventosCtrl"},
                        "TOPTABSBAR_ENTRIES": [
                            { "label": "Mensajes",                 "value": "ListaMensajes",  "selectorGridName": null ,          "argumentsName": "FechasListaMensajes" }
                        ]},
                    { "tEvt": theToInit.TIPOEVENTO_Revisiones         ,"routeTo": { "templateUrl": "partials/eventos/eventos-pendienterealizar.html", "controller": "EventosCtrl"},
                        "TOPTABSBAR_ENTRIES": [
                            { "label": "Versiones",                "value": "ListaRevisiones",  "selectorGridName": null ,        "argumentsName": "FechasListaRevisiones" }
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







