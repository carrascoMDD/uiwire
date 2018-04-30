'use strict';

/*
 * inferctrlspecs_sampledata.js
 *
 * Creado @author Antonio Carrasco Valero 201411281355
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






angular.module("revengTypes").factory("InferctrlspecsSampleData", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "DecoratesystemprototypesSvce",
function( theSS_typesregistry,
          theSS_Overrider,
          theSS_DecoratesystemprototypesSvce) {


    if( theSS_DecoratesystemprototypesSvce){} /* Only used to decorate String protoype with Xtnd function used in this module */





    var ModuleName     = "inferctrlspecs_sampledata";
    var ModulePackages = "springnut/reveng";
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







            theToInit.SAMPLEDATA = {
                "vStatusOperacion": "PARAMETROERRONEO".Xtnd( 32),
                "vDetallesOperacion":  "DetallesOperacion".Xtnd( 65),
                "vTipo": "ListaTrabajos",
                "vSuccess": true,
                "vTipoTrabajo": "ImportacionFicherosASCII".Xtnd( 65),
                "vPrimero": 1111111,
                "vCuantos": 9999999,
                "vSort": "Sort".Xtnd( 65),
                "vIncluyeLocalizador": true,
                "vIncluyeParametros": true,
                "vIncluyeParakilometros": true,
                "vIncluyeResultados": true,
                "vIncluyeResulkilotados": true,
                "vIncluyeProgresos": true,
                "vIncluyeMuestras": true,
                "vIncluyeMueskilotras": true,
                "vIncluyeIntervenciones": true,
                "vIncluyeEjecuciones": true,
                "vIncluyeIntentos": true,
                "vTrabajos": [
                    {
                        "vStatusOperacion": "PARAMETROERRONEO".Xtnd( 32),
                        "vDetallesOperacion":  "DetallesOperacion".Xtnd( 65),
                        "vTipo": "TrabajoDatos",
                        "vSuccess": true,
                        "vTrIdtrabajo": 5555555555,
                        "vTrTipotrabajo": "ImportacionFicherosASCII".Xtnd( 65),
                        "vTrDeprueba":  "Deprueba".Xtnd( 65),
                        "vTrIgnorartrabajo": false,
                        "vTrIdlocalizador": 5555555555,
                        "vTrTipolocalizador":"ImportacionFicherosASCII".Xtnd( 65),
                        "vTrPasoprimero": 4444,
                        "vTrPasoultimo": 4444,
                        "vTrFechaStr": "05/12/2014 22:53:49.667",
                        "vTrFechaultimaStr": "05/12/2014 22:54:01.928",
                        "vTrEstado": "Terminado",
                        "vTrExito": 2,
                        "vTrExitoLabel": "Exito".Xtnd( 16),
                        "vTrCausaerror": 2,
                        "vTrCausaerrorLabel": "Causaerror".Xtnd( 16),
                        "vTrAfectadoerror":  "Afectadoerror".Xtnd( 65),
                        "vTrDetalleerror": "Detalleerror".Xtnd( 256),
                        "vTrExcepcion": "Excepcion".Xtnd( 513),
                        "vTrIdejecucion": 5555555555,
                        "vTrTipoejecucion": "ImportacionFicherosASCII".Xtnd( 65),
                        "vTrVersionejecucion": 4444,
                        "vTrEstadoejecucion": "Activo".Xtnd( 16),
                        "vTrPasoejecucion": 4444,
                        "vTrNombrepaso": "CREARFICHEROYBOLETINES".Xtnd( 65),
                        "vTrTodospasos": "ImportacionFicherosASCII,ImportacionFicherosASCII,ExportacionFicherosASCII,ExportacionFicherosASCII,ImportacionImagenes,ImportacionFicherosJSON,ImportacionFicherosJSON,ExportacionFicherosJSON,ExportacionFicherosJSON,CodificacionAutomaticaLiterales,CodificacionAutomaticaLiterales ,CodificacionAutomaticaCausaBasica,CodificacionAutomaticaCausaBasica,ImportacionDiccionarioLiterales,ImportacionDiccionarioSecuencias,CruceBoletines,ExportacionMejoras,ObtenerAreasDeSaludPorSIP,DeteccionDuplicados,Nomenclator".Xtnd( 4000),
                        "vIncluyeLocalizador": true,
                        "vIncluyeParametros": true,
                        "vIncluyeParakilometros": true,
                        "vIncluyeResultados": true,
                        "vIncluyeResulkilotados": true,
                        "vIncluyeProgresos": true,
                        "vIncluyeMuestras": true,
                        "vIncluyeMueskilotras": true,
                        "vIncluyeIntervenciones": true,
                        "vIncluyeEjecuciones": true,
                        "vIncluyeIntentos": true,
                        "vIncluyeEncargos": null,
                        "vIncluyeDelegaciones": null,
                        "vIncluyeBlobs": false,
                        "vLocalizador": {
                            "vStatusOperacion": "PARAMETROERRONEO".Xtnd( 32),
                            "vDetallesOperacion":  "DetallesOperacion".Xtnd( 65),
                            "vTipo": "LocalizadorDatos",
                            "vSuccess": true,
                            "vLoIdlocalizador": 5555555555,
                            "vLoTipolocalizador": "ImportacionFicherosASCII".Xtnd( 65),
                            "vLoDeprueba":  "Deprueba".Xtnd( 65),
                            "vLoIgnorarlocalizador": false,
                            "vLoFechaStr": "27/11/2014 01:07:03.167",
                            "vLoKeyid1": null,
                            "vLoKeyid2": null,
                            "vLoKeyid3": null,
                            "vLoKeyid4": null,
                            "vLoKeyid5": null,
                            "vLoKeyid6": null,
                            "vLoKeyid7": null,
                            "vLoKeyid8": null,
                            "vLoKeystr1": "ine",
                            "vLoKeystr2": null,
                            "vLoKeystr3": null,
                            "vLoKeystr4": null,
                            "vLoKeystr5": null,
                            "vLoKeystr6": null,
                            "vLoKeystr7": null,
                            "vLoKeystr8": null,
                            "vLoKeydec1": 12,
                            "vLoKeydec2": 2014,
                            "vLoKeydec3": 2,
                            "vLoKeydec4": null,
                            "vLoKeydec5": null,
                            "vLoKeydec6": null,
                            "vLoKeydec7": null,
                            "vLoKeydec8": null,
                            "vLoKeyboo1": null,
                            "vLoKeyboo2": null,
                            "vLoKeyboo3": null,
                            "vLoKeyboo4": null,
                            "vLoKeyboo5": null,
                            "vLoKeyboo6": null,
                            "vLoKeyboo7": null,
                            "vLoKeyboo8": null,
                            "vLoKeydatStr1": null,
                            "vLoKeydatStr2": null,
                            "vLoKeydatStr3": null,
                            "vLoKeydatStr4": null,
                            "vLoKeydatStr5": null,
                            "vLoKeydatStr6": null,
                            "vLoKeydatStr7": null,
                            "vLoKeydatStr8": null
                        },
                        "vParametros": [
                            {
                                "vStatusOperacion": "PARAMETROERRONEO".Xtnd( 32),
                                "vDetallesOperacion":  "DetallesOperacion".Xtnd( 65),
                                "vTipo": "ParametroDatos",
                                "vSuccess": true,
                                "vPaIdparametro": 5555555555,
                                "vPaTipoparametro":"ImportacionFicherosASCII".Xtnd( 65),
                                "vPaNombreparametro": "theNombreFichero",
                                "vPaDeprueba":  "Deprueba".Xtnd( 65),
                                "vPaIgnorarparametro": false,
                                "vPaFechaStr": "05/12/2014 22:53:49.667",
                                "vPaIdtrabajo": 5555555555,
                                "vPaTipotrabajo": "ImportacionFicherosASCII".Xtnd( 65),
                                "vPaParid": 5555555555,
                                "vPaParidtipo": "ImportacionFicherosASCII".Xtnd( 65),
                                "vPaParstr": "datos_12_201402".Xtnd( 255),
                                "vPaPardec": 999999999,
                                "vPaParboo": true,
                                "vPaPardatStr": "05/12/2014 22:53:49.667",
                                "vPaCharset": "Charset".Xtnd( 32),
                                "vPaTipovalor": "STR",
                                "vPaLargovalor": 88888888,
                                "vPaParametro": "Parametro".Xtnd( 4000)
                            }
                        ],
                        "vParakilometros": [
                            {
                                "vStatusOperacion": "PARAMETROERRONEO".Xtnd( 32),
                                "vDetallesOperacion":  "DetallesOperacion".Xtnd( 65),
                                "vTipo": "ParakilometroDatos",
                                "vSuccess": true,
                                "vKmIdparakilometro": 5555555555,
                                "vKmTipoparakilometro":"ImportacionFicherosASCII".Xtnd( 65),
                                "vKmNombreparakilometro": "theContenidoFichero".Xtnd( 65),
                                "vKmDeprueba":  "Deprueba".Xtnd( 65),
                                "vKmIgnorarparakilometro": false,
                                "vKmFechaStr": "05/12/2014 22:53:49.667",
                                "vKmIdtrabajo": 5555555555,
                                "vKmTipotrabajo": "ImportacionFicherosASCII".Xtnd( 65),
                                "vKmCharset": "Charset".Xtnd( 32),
                                "vKmTipoblob": "RAW".Xtnd( 16),
                                "vKmLargolista": 666666,
                                "vKmLargovalor": 88888888,
                                "vKmLargoblob": 999999999,
                                "vKmParakilometro": "Parakilometro".Xtnd( 10000000),
                                "vIncluyeBlobs": false
                            }
                        ],
                        "vResultados": [
                            {
                                "vStatusOperacion": "PARAMETROERRONEO".Xtnd( 32),
                                "vDetallesOperacion":  "DetallesOperacion".Xtnd( 65),
                                "vTipo": "ResultadoDatos",
                                "vSuccess": true,
                                "vReIdresultado": 5555555555,
                                "vReTiporesultado":"ImportacionFicherosASCII".Xtnd( 65),
                                "vReNombreresultado": "thePrimerNBOL".Xtnd( 65),
                                "vReDeprueba":  "Deprueba".Xtnd( 65),
                                "vReIgnorarresultado": false,
                                "vReFechaStr": "05/12/2014 22:53:52.260",
                                "vReIdtrabajo": 5555555555,
                                "vReTipotrabajo": "ImportacionFicherosASCII".Xtnd( 65),
                                "vReResid": 5555555555,
                                "vReResidtipo": "ImportacionFicherosASCII".Xtnd( 65),
                                "vReResstr": "001071675".Xtnd( 255),
                                "vReResdec": 5555555555,
                                "vReResboo": true,
                                "vReResdatStr": "05/12/2014 22:53:52.260",
                                "vReCharset": "Charset".Xtnd( 32),
                                "vReTipovalor": "STR".Xtnd( 16),
                                "vReLargovalor": 88888888,
                                "vReResultado": "Resultado".Xtnd( 4000)
                            }
                        ],
                        "vResulkilotados": [
                            {
                                "vStatusOperacion": "PARAMETROERRONEO".Xtnd( 32),
                                "vDetallesOperacion":  "DetallesOperacion".Xtnd( 65),
                                "vTipo": "ResulkilotadoDatos",
                                "vSuccess": true,
                                "vRkIdresulkilotado": 5555555555,
                                "vRkTiporesulkilotado":"ImportacionFicherosASCII".Xtnd( 65),
                                "vRkNombreresulkilotado": "theLineasDesdeBoletin",
                                "vRkDeprueba":  "Deprueba".Xtnd( 65),
                                "vRkIgnorarresulkilotado": false,
                                "vRkFechaStr": "05/12/2014 22:53:52.260",
                                "vRkIdtrabajo": 5555555555,
                                "vRkTipotrabajo": "ImportacionFicherosASCII".Xtnd( 65),
                                "vRkCharset": "Charset".Xtnd( 32),
                                "vRkTipoblob": "LINEAS".Xtnd( 16),
                                "vRkLargolista": 666666,
                                "vRkLargovalor": 88888888,
                                "vRkLargoblob": 999999999,
                                "vRkResulkilotado": "Resulkilotado".Xtnd( 10000000),
                                "vIncluyeBlobs": false
                            }
                        ],
                        "vProgresos": [
                            {
                                "vStatusOperacion": "PARAMETROERRONEO".Xtnd( 32),
                                "vDetallesOperacion":  "DetallesOperacion".Xtnd( 65),
                                "vTipo": "ProgresoDatos",
                                "vSuccess": true,
                                "vPgIdprogreso": 5555555555,
                                "vPgTipoprogreso":"ImportacionFicherosASCII".Xtnd( 65),
                                "vPgDeprueba":  "Deprueba".Xtnd( 65),
                                "vPgIgnorarprogreso": false,
                                "vPgFechaStr": "05/12/2014 22:53:55.920",
                                "vPgIdtrabajo": 5555555555,
                                "vPgTipotrabajo": "ImportacionFicherosASCII".Xtnd( 65),
                                "vPgPasoprimero": 4444,
                                "vPgPasoultimo": 4444,
                                "vPgFechatrabajoStr": "05/12/2014 22:53:49.667",
                                "vPgFechaultimatrabajoStr": "05/12/2014 22:53:55.073",
                                "vPgEstado": "Ejecutando",
                                "vPgExito": 0,
                                "vPgExitoLabel": "EXITO".Xtnd( 16),
                                "vPgExcepcion":  "\nException".Xtnd( 4000),
                                "vPgPorcentaje": 100,
                                "vPgEstimados": 100000,
                                "vPgFinestimadoStr": "05/12/2014 22:53:55.073",
                                "vPgCausaerrorLabel": "EXITO".Xtnd( 16),
                                "vPgAfectadoerror":  "Afectadoerror".Xtnd( 65),
                                "vPgDetalleerror": "Afectadoerror".Xtnd( 256),
                                "vPgIdejecucion": 5555555555,
                                "vPgTipoejecucion":"ImportacionFicherosASCII".Xtnd( 65),
                                "vPgVersionejecucion": 4444,
                                "vPgEstadoejecucion": "Activo".Xtnd( 16),
                                "vPgPasoejecucion": 4444,
                                "vPgNombrepaso": "CREARFICHEROYBOLETINES".Xtnd( 65),
                                "vPgPasoporcentaje": 100,
                                "vPgPasoestimados": 100000,
                                "vPgPasofinestimadoStr": "05/12/2014 22:53:55.919",
                                "vIncluyeMuestras": true,
                                "vIncluyeMueskilotras": true,
                                "vIncluyeBlobs": false,
                                "vMuestras": [
                                    {
                                        "vStatusOperacion": "PARAMETROERRONEO".Xtnd( 32),
                                        "vDetallesOperacion":  "DetallesOperacion".Xtnd( 65),
                                        "vTipo": "MuestraDatos",
                                        "vSuccess": true,
                                        "vMuIdmuestra": 5555555555,
                                        "vMuTipomuestra":"ImportacionFicherosASCII".Xtnd( 65),
                                        "vMuNombremuestra": "theNumeroFicheroFasesErroresBloquesEliminados".Xtnd( 65),
                                        "vMuDeprueba":  "Deprueba".Xtnd( 65),
                                        "vMuIgnorarmuestra": false,
                                        "vMuFechaStr": "05/12/2014 22:53:55.920",
                                        "vMuIdprogreso": 5555555555,
                                        "vMuTipoprogreso":"ImportacionFicherosASCII".Xtnd( 65),
                                        "vMuMueid": 5555555555,
                                        "vMuMueidtipo": "ImportacionFicherosASCII".Xtnd( 65),
                                        "vMuMuestr": "Muestr".Xtnd( 255),
                                        "vMuMuedec": 9999999999,
                                        "vMuMueboo": true,
                                        "vMuMuedatStr": "05/12/2014 22:53:55.920",
                                        "vMuCharset": "Charset".Xtnd( 32),
                                        "vMuTipovalor": "DEC",
                                        "vMuLargovalor": 88888888,
                                        "vMuMuestra": "Muestra".Xtnd( 4000)
                                    }
                                ],
                                "vMueskilotras": [
                                    {
                                        "vStatusOperacion": "PARAMETROERRONEO".Xtnd( 32),
                                        "vDetallesOperacion":  "DetallesOperacion".Xtnd( 65),
                                        "vTipo": "MueskilotraDatos",
                                        "vSuccess": true,
                                        "vMkIdmueskilotra": 5555555555,
                                        "vMkTipomueskilotra":"ImportacionFicherosASCII".Xtnd( 65),
                                        "vMkNombremueskilotra": "theIdsFicheroFasesErroresBloquesEliminados".Xtnd( 65),
                                        "vMkDeprueba":  "Deprueba".Xtnd( 65),
                                        "vMkIgnorarmueskilotra": false,
                                        "vMkFechaStr": "05/12/2014 22:53:55.920",
                                        "vMkIdprogreso": 5555555555,
                                        "vMkTipoprogreso":"ImportacionFicherosASCII".Xtnd( 65),
                                        "vMkCharset": "Charset".Xtnd( 32),
                                        "vMkTipoblob": "IDS".Xtnd( 16),
                                        "vMkLargolista": 666666,
                                        "vMkLargovalor": 88888888,
                                        "vMkLargoblob": 999999999,
                                        "vMkMueskilotra": "Mueskilotra".Xtnd( 10000000),
                                        "vIncluyeBlobs": false
                                    }
                                ]
                            }
                        ],
                        "vIntervenciones": [
                            {
                                "vStatusOperacion": "PARAMETROERRONEO".Xtnd( 32),
                                "vDetallesOperacion":  "DetallesOperacion".Xtnd( 65),
                                "vTipo": "IntervencionDatos",
                                "vSuccess": true,
                                "vInIdintervencion": 5555555555,
                                "vInTipointervencion":"ImportacionFicherosASCII".Xtnd( 65),
                                "vInDeprueba":  "Deprueba".Xtnd( 65),
                                "vInIgnorarintervencion": false,
                                "vInFechaStr": "05/12/2014 22:53:49.667",
                                "vInFechaultimaStr": "05/12/2014 22:53:49.667",
                                "vInRol": "Creador".Xtnd( 32),
                                "vInIdtrabajo": 5555555555,
                                "vInTipotrabajo": "ImportacionFicherosASCII".Xtnd( 65),
                                "vInIdoperador": 5555555555,
                                "vNombreoperador": "Carlos".Xtnd( 65),
                                "vNombrecompletooperador": "Super Carloss".Xtnd( 128)
                            }
                        ],
                        "vEjecuciones": [
                            {
                                "vStatusOperacion": "PARAMETROERRONEO".Xtnd( 32),
                                "vDetallesOperacion":  "DetallesOperacion".Xtnd( 65),
                                "vTipo": "EjecucionDatos",
                                "vSuccess": true,
                                "vEjIdejecucion": 5555555555,
                                "vEjTipoejecucion":"ImportacionFicherosASCII".Xtnd( 65),
                                "vEjDeprueba":  "Deprueba".Xtnd( 65),
                                "vEjIgnorarejecucion": false,
                                "vEjPasoprimero": 4444,
                                "vEjPasoultimo": 4444,
                                "vEjFechaStr": "05/12/2014 22:53:49.775",
                                "vEjFechaultimaStr": "05/12/2014 22:54:01.959",
                                "vEjVersionejecucion": 4444,
                                "vEjEstadoejecucion": "AEliminar".Xtnd( 32),
                                "vEjPasoejecucion": 4444,
                                "vEjNombrepaso": "CREARFICHEROYBOLETINES".Xtnd( 65),
                                "vEjIdtrabajo": 5555555555,
                                "vEjTipotrabajo": "ImportacionFicherosASCII".Xtnd( 65),
                                "vIncluyeIntentos": false,
                                "vIncluyeTrabajo": false,
                                "vIncluyeBlobs": false,
                                "vIntentos": [
                                    {
                                        "vStatusOperacion": "PARAMETROERRONEO".Xtnd( 32),
                                        "vDetallesOperacion":  "DetallesOperacion".Xtnd( 65),
                                        "vTipo": "IntentoDatos",
                                        "vSuccess": false,
                                        "vItIdintento": 5555555555,
                                        "vItTipointento": null,
                                        "vItDeprueba":  "Deprueba".Xtnd( 65),
                                        "vItIgnorarintento": false,
                                        "vItFechaStr": "05/12/2014 22:53:49.827",
                                        "vItFechaultimaStr": "05/12/2014 22:54:01.965",
                                        "vItIdejecucion": 5555555555,
                                        "vItTipoejecucion":"ImportacionFicherosASCII".Xtnd( 65),
                                        "vItVersionejecucion": 666666,
                                        "vItEstadoejecucion": "ACTIVO".Xtnd( 16),
                                        "vItPasoejecucion": 4444,
                                        "vItReintentos": 4444
                                    }
                                ],
                                "vTrabajo": null
                            }
                        ],
                        "vDelegacion": null
                    }
                ]
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







