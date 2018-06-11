'use strict';

/*
 * ficheros_revengsampledata.js
 *
 * Creado @author Antonio Carrasco Valero 201503201843
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






angular.module("ficherosTypes").factory("FicherosRevengSampleData", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "DecoratesystemprototypesSvce",
function( theSS_typesregistry,
          theSS_Overrider,
          theSS_DecoratesystemprototypesSvce) {

    if( theSS_DecoratesystemprototypesSvce){} /* Only used to decorate String protoype with Xtnd function used in this module */




    var ModuleName     = "ficheros_revengsampledata";
    var ModulePackages = "springnut/ficherosTypes";
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
                "vStatusOperacion": null,
                "vDetallesOperacion": null,
                "vTipo": "ListaFicherosConIdentificas",
                "vTipoBoletin": "ine",
                "vPrimero": 0, "vCuantos": -1,
                "vSort": null,
                "vSuccess": true,
                "vFicheros": [
                    {
                        "vStatusOperacion": null,
                        "vDetallesOperacion": null,
                        "vTipo": "FicheroConIdentificas",
                        "vSuccess": true,
                        "vTipoBoletin": "ine",
                        "vIdFichero": 3978,
                        "vNombreFichero": null,
                        "vAnoFichero": 2014,
                        "vMesFichero": 4,
                        "vCodigoProvinciaFichero": 46,
                        "vIdentificaDesde": 14004988,
                        "vIdentificaHasta": 14006936,
                        "vNumBoletines": 1949,
                        "vBoletines": [
                            {
                                "vStatusOperacion": null,
                                "vDetallesOperacion": null,
                                "vTipo": "BoletinDatos",
                                "vSuccess": true,
                                "vTipoBoletin": "judiciales",
                                "vIdBoletin": 1311111111,
                                "vNbol": "81234567",
                                "vIdentifica": 14800001,
                                "vIdCodBoletin": 1511111111,
                                "vIdLitBoletin": 1611111111,
                                "vIdImageBoletin": 1811111111,
                                "vIdFichero": 1111111111,
                                "vAnoFichero": 2014,
                                "vMesFichero": 1,
                                "vCodigoProvinciaFichero": 3
                            }
                        ],
                        "vInscripciones": [
                            {
                                "vStatusOperacion": null,
                                "vDetallesOperacion": null,
                                "vTipo": "BoletinInscripcion",
                                "vSuccess": true,
                                "vTipoBoletin": "judiciales",
                                "vIdBoletin": 1311111111,
                                "vNbol": "81234567",
                                "vIdentifica": 14800001,
                                "vIdCodBoletin": 1511111111,
                                "vIdLitBoletin": 1611111111,
                                "vIdImageBoletin": 1811111111,
                                "vIdFichero": 1111111111,
                                "vAnoFichero": 2014,
                                "vMesFichero": 1,
                                "vCodigoProvinciaFichero": 3,
                                "vNregc": 3,
                                "vCproi": 2,
                                "vCmuni": 3,
                                "vDci": 0,
                                "vDiail": 12,
                                "vMesil": 12,
                                "vAnoil": 2012,
                                "vTomo": "TOMO1",
                                "vCtomo": "CTOMO",
                                "vPagin": 333,
                                "vVueltain": "VB",
                                "vCarpeta": "CA"
                            },
                        ],
                        "vPersonales": [
                            {
                                "vStatusOperacion": null,
                                "vDetallesOperacion": null,
                                "vTipo": "BoletinPersonales",
                                "vSuccess": true,
                                "vTipoBoletin": "judiciales",
                                "vIdBoletin": 1311111111,
                                "vNbol": "81234567",
                                "vIdentifica": 14800001,
                                "vIdCodBoletin": 1511111111,
                                "vIdLitBoletin": 1611111111,
                                "vIdImageBoletin": 1811111111,
                                "vIdFichero": 1111111111,
                                "vAnoFichero": 2014,
                                "vMesFichero": 1,
                                "vCodigoProvinciaFichero": 3,
                                "vNomb": "vNombvNombvNombvNombvNombvNombvNo",
                                "vApe1": "vApe1vApe1vApe1vApe1vApe1vApe1vAp",
                                "vApe2": "vApe2vApe2vApe2vApe2vApe2vApe2vAp",
                                "vDian": 1,
                                "vMesn": 2,
                                "vAnon": 1910,
                                "vSexo": 1,
                                "vTidoc": 1,
                                "vDni": "12345678Z",
                                "vPasaporte": "vPasaporte12345678ZvPasaporte1234",
                                "vNie": "X1234567Y",
                                "vDiadef": 10,
                                "vMesdef": 10,
                                "vAnodef": 2010,
                                "vHorasdef": 10,
                                "vMinutdef": 10,
                                "vLugardef": 4,
                                "vNacionalidad": 108,
                                "vPaisnac": 108,
                                "vCpron": 2,
                                "vCmunn": 1,
                                "vDcnac": 9,
                                "vPaisnx": 999,
                                "vCprore": 2,
                                "vCmunre": 2,
                                "vDcre": 4,
                                "vPaisrex": 999,
                                "vTvia": "Calle",
                                "vNtvia": "Calle",
                                "vNvia": "vNvia12345678ZvNvia12345678ZvNvia12345678ZvNvia12345678ZvNvi",
                                "vCodvia": 12345,
                                "vCodpst": 1025,
                                "vNpoli": "1234",
                                "vCpoli": "B",
                                "vPortal": "22",
                                "vBloque": "33",
                                "vEsca": "44",
                                "vPlta": "555",
                                "vPuer": "6666",
                                "vEdad": 103,
                                "vDias": 36806,
                                "vDistrito": 21,
                                "vBarrio": 22,
                                "vSeccion": 23,
                                "vArea": 24,
                                "vZona": 25
                            }
                        ],
                        "vDemograficos": [
                            {
                                "vStatusOperacion": null,
                                "vDetallesOperacion": null,
                                "vTipo": "BoletinDemograficos",
                                "vSuccess": true,
                                "vTipoBoletin": "judiciales",
                                "vIdBoletin": 1311111111,
                                "vNbol": "81234567",
                                "vIdentifica": 14800001,
                                "vIdCodBoletin": 1511111111,
                                "vIdLitBoletin": 1611111111,
                                "vIdImageBoletin": 1811111111,
                                "vIdFichero": 1111111111,
                                "vAnoFichero": 2014,
                                "vMesFichero": 1,
                                "vCodigoProvinciaFichero": 3,
                                "vEciv": 2,
                                "vCodprof": 1,
                                "vProf": "vProfvProfvProfvProfvProfvProfvProfvProfvProfvProfvProfvProfvProfvProfvProfvProfvP",
                                "vCprofrev": 2
                            }
                        ],
                        "vImagenes": null,
                        "vCausas": [
                            {
                                "vStatusOperacion": null,
                                "vDetallesOperacion": null,
                                "vTipo": "BoletinCausas",
                                "vSuccess": true,
                                "vTipoBoletin": "judiciales",
                                "vIdBoletin": 1311111111,
                                "vNbol": "81234567",
                                "vIdentifica": 14800001,
                                "vIdCodBoletin": 1511111111,
                                "vIdLitBoletin": 1611111111,
                                "vIdImageBoletin": 1811111111,
                                "vIdFichero": 1111111111,
                                "vAnoFichero": 2014,
                                "vMesFichero": 1,
                                "vCodigoProvinciaFichero": 3,
                                "vCauinml": "l Fiebre tifoidea,Meningitis tuberculosa,Granuloma inguinal,",
                                "vCauinmdicc": "d Fiebre tifoidea,Meningitis tuberculosa,Granuloma inguinal,",
                                "vCauinme": "e Fiebre tifoidea,Meningitis tuberculosa,Granuloma inguinal,",
                                "vCauinmh": 23,
                                "vCauinmd": 29,
                                "vCauinmm": 11,
                                "vCauinma": 1,
                                "vCauintl1": "l Adiposidad localizada,Acidosis,Hipopotasmia,Esclerosis múl",
                                "vCauintdicc1": "d Adiposidad localizada,Acidosis,Hipopotasmia,Esclerosis múl",
                                "vCauinte1": "e Adiposidad localizada,Acidosis,Hipopotasmia,Esclerosis múl",
                                "vCauint1h": 22,
                                "vCauint1d": 28,
                                "vCauint1m": 10,
                                "vCauint1a": 2,
                                "vCaufundl": "l Miocarditis aislada,Taquicardia ventricular,Ruptura arteri",
                                "vCaufunddicc": "d Miocarditis aislada,Taquicardia ventricular,Ruptura arteri",
                                "vCaufunde": "e Miocarditis aislada,Taquicardia ventricular,Ruptura arteri",
                                "vCaufundh": 21,
                                "vCaufundd": 27,
                                "vCaufundm": 9,
                                "vCaufunda": 3,
                                "vCauintl2": "l Síndrome de Nezelof,Síndrome de Di George,Diabetes insípid",
                                "vCauintdicc2": "d Síndrome de Nezelof,Síndrome de Di George,Diabetes insípid",
                                "vCauinte2": "e Síndrome de Nezelof,Síndrome de Di George,Diabetes insípid",
                                "vCauint2h": 20,
                                "vCauint2d": 26,
                                "vCauint2m": 8,
                                "vCauint2a": 4,
                                "vOtrprocl": "l Edema pulmonar,Quilotórax,Hemotórax,Esofagitis            ",
                                "vOtrprocdicc": "d Edema pulmonar,Quilotórax,Hemotórax,Esofagitis            ",
                                "vOtrproce": "e Edema pulmonar,Quilotórax,Hemotórax,Esofagitis            ",
                                "vOtrproch": 19,
                                "vOtrprocd": 25,
                                "vOtrprocm": 7,
                                "vOtrproca": 5,
                                "vCausasAccidente": "CausasAccidente no viene en el fichero importado, normalment",
                                "vMuerteviolenta": 2,
                                "vAutops": 2,
                                "vTipoAccidente": 3,
                                "vTipaccid": 3,
                                "vDiaaccid": 24,
                                "vMesaccid": 6,
                                "vAnoaccid": 2014
                            }
                        ],
                        "vCodigos": [
                            {
                                "vStatusOperacion": null,
                                "vDetallesOperacion": null,
                                "vTipo": "BoletinCodigos",
                                "vSuccess": true,
                                "vTipoBoletin": "judiciales",
                                "vIdBoletin": 1311111111,
                                "vNbol": "81234567",
                                "vIdentifica": 14800001,
                                "vIdCodBoletin": 1511111111,
                                "vIdLitBoletin": 1611111111,
                                "vIdImageBoletin": 1811111111,
                                "vIdFichero": 1111111111,
                                "vAnoFichero": 2014,
                                "vMesFichero": 1,
                                "vCodigoProvinciaFichero": 3,
                                "vCausabasica": null,
                                "vInmediat1": "A010",
                                "vInmediat1x": "A011",
                                "vInmediat1morbi": "Y400 ",
                                "vInmediat1lesi": "S000 ",
                                "vCinml5": "A010",
                                "vInmediat2": "A170",
                                "vInmediat2x": "E68X",
                                "vInmediat2morbi": "Y404 ",
                                "vInmediat2lesi": "S004 ",
                                "vCinml6": "E65X",
                                "vInmediat3": "A58X",
                                "vInmediat3x": "A57X",
                                "vInmediat3morbi": "Y402 ",
                                "vInmediat3lesi": "S002 ",
                                "vCinml7": "A58X",
                                "vInmediat4": "B73X",
                                "vInmediat4x": "B72X",
                                "vInmediat4morbi": "Y403 ",
                                "vInmediat4lesi": "S003 ",
                                "vCinml8": "B73X",
                                "vInterb1": "E65X",
                                "vInterb1x": null,
                                "vInterb1morbi": null,
                                "vInterb1lesi": null,
                                "vCintbl5": null,
                                "vInterb2": "E872",
                                "vInterb2x": "E874",
                                "vInterb2morbi": "Y405 ",
                                "vInterb2lesi": "S005 ",
                                "vCintbl6": "E65X",
                                "vCintbl7": "E876",
                                "vInterb3": "E876",
                                "vInterb3x": "E877",
                                "vInterb3morbi": "Y406 ",
                                "vInterb3lesi": "S006 ",
                                "vInterb4": "G35X",
                                "vInterb4x": "G360",
                                "vInterb4morbi": "Y407 ",
                                "vInterb4lesi": "S007 ",
                                "vCintbl8": "G35X",
                                "vInterc1": "D814",
                                "vInterc1x": "D813",
                                "vInterc1morbi": "Y408 ",
                                "vInterc1lesi": "S008 ",
                                "vCintcl5": "D814",
                                "vInterc2": "D821",
                                "vInterc2x": "D820",
                                "vInterc2morbi": "Y409 ",
                                "vInterc2lesi": "S009 ",
                                "vCintcl6": "D821",
                                "vInterc3": "E232",
                                "vInterc3x": "E222",
                                "vInterc3morbi": "S010 ",
                                "vInterc3lesi": "Y410 ",
                                "vCintcl7": "E232",
                                "vInterc4": "E41X",
                                "vInterc4x": "E42X",
                                "vInterc4morbi": "Y412 ",
                                "vInterc4lesi": "S011 ",
                                "vCintcl8": "E41X",
                                "vInicial1": "I401",
                                "vInicial1x": "I400",
                                "vInicial1morbi": "Y413 ",
                                "vInicial1lesi": "S012 ",
                                "vCfunl5": "I401",
                                "vInicial2": "I472",
                                "vInicial2x": "I471",
                                "vInicial2morbi": "Y414 ",
                                "vInicial2lesi": "S013 ",
                                "vCfunl6": "I472",
                                "vInicial3": "I772",
                                "vInicial3x": "I771",
                                "vInicial3morbi": "Y415 ",
                                "vInicial3lesi": "S014 ",
                                "vCfunl7": "I772",
                                "vInicial4": "I871",
                                "vInicial4x": "I870",
                                "vInicial4morbi": "Y416 ",
                                "vInicial4lesi": "S015 ",
                                "vCfunl8": "I871",
                                "vContribu1": "J81X",
                                "vContribu1x": "J80X",
                                "vContribu1morbi": "Y417 ",
                                "vContribu1lesi": "S016 ",
                                "vCoprl5": "J81X",
                                "vContribu2": "J940",
                                "vContribu2x": "J941",
                                "vContribu2morbi": "Y418 ",
                                "vContribu2lesi": "S017 ",
                                "vCoprl6": "J940",
                                "vContribu3": "J942",
                                "vContribu3x": "J948",
                                "vContribu3morbi": "Y419 ",
                                "vContribu3lesi": "S018 ",
                                "vCoprl7": "J942",
                                "vContribu4": "K20X",
                                "vContribu4x": "K30X",
                                "vContribu4morbi": "Y420 ",
                                "vContribu4lesi": "S019 ",
                                "vCoprl8": "K20X"
                            }
                        ],
                        "vOtras": [
                            {
                                "vStatusOperacion": null,
                                "vDetallesOperacion": null,
                                "vTipo": "BoletinOtra",
                                "vSuccess": true,
                                "vTipoBoletin": "judiciales",
                                "vIdBoletin": 1311111111,
                                "vNbol": "81234567",
                                "vIdentifica": 14800001,
                                "vIdCodBoletin": 1511111111,
                                "vIdLitBoletin": 1611111111,
                                "vIdImageBoletin": 1811111111,
                                "vIdFichero": 1111111111,
                                "vAnoFichero": 2014,
                                "vMesFichero": 1,
                                "vCodigoProvinciaFichero": 3,
                                "vTipobol": 2,
                                "vEstadoBedjweb": 0,
                                "vEstadoBedjpapel": 0
                            }
                        ],
                        "vOrigen": [
                            {
                                "vStatusOperacion": null,
                                "vDetallesOperacion": null,
                                "vTipo": "BoletinOrigen",
                                "vSuccess": true,
                                "vTipoBoletin": "judiciales",
                                "vIdBoletin": 1311111111,
                                "vNbol": "81234567",
                                "vIdentifica": 14800001,
                                "vIdCodBoletin": 1511111111,
                                "vIdLitBoletin": 1611111111,
                                "vIdImageBoletin": 1811111111,
                                "vIdFichero": 1111111111,
                                "vAnoFichero": 2014,
                                "vMesFichero": 1,
                                "vCodigoProvinciaFichero": 3,
                                "vOrigenca": "X",
                                "vOrigenccaa": "X",
                                "vBajaca": "X",
                                "vBajaccaa": "X"
                            }
                        ],
                        "vJudiciales": [
                            {
                                "vStatusOperacion": null,
                                "vDetallesOperacion": null,
                                "vTipo": "BoletinJudiciales",
                                "vSuccess": true,
                                "vTipoBoletin": "judiciales",
                                "vIdBoletin": 1311111111,
                                "vNbol": "81234567",
                                "vIdentifica": 14800001,
                                "vIdCodBoletin": 1511111111,
                                "vIdLitBoletin": 1611111111,
                                "vIdImageBoletin": 1811111111,
                                "vIdFichero": 1111111111,
                                "vAnoFichero": 2014,
                                "vMesFichero": 1,
                                "vCodigoProvinciaFichero": 3,
                                "vCodorgano": "1234567890",
                                "vSumario": "12345678901234567890",
                                "vDiligencia": "98765432109876543210",
                                "vLesion": "LESION12345678901234567890LESION12345678901234567890LESION12345678901234567890LESION1234567890123456",
                                "vMotivo": 2,
                                "vTrafico": 2,
                                "vCondicionFallecido": 5,
                                "vObservCondiciontrans": "OBSERV_CONDICIONTRANS1234567890123456789",
                                "vTipoAccidente": 4,
                                "vTipoColision": 3,
                                "vObservTipoaccidente": "OBSERV_TIPOACCIDENTE12345678901234567890",
                                "vVehicFallecido": 11,
                                "vVehicContrario": 11,
                                "vObservAccidente": "OBSERV_ACCIDENTE12345678901234567890OBSE",
                                "vSitioAccidente": 7,
                                "vAccidente": 4,
                                "vObservOtroaccidente": "OBSERV_TIPOACCIDENTE12345678901234567890OBSERV_TIPOACCIDENTE12345678901234567890OBSERV_TIPOACCIDENTE",
                                "vSitioHomicidio": 7,
                                "vHomicidio": 5,
                                "vObservArmahomic": 3,
                                "vObservHomicenven": "OBSERV_HOMICENVEN12345678901234567890OBS",
                                "vObservOtroshomic": "OBSERV_TIPOACCIDENTE12345678901234567890",
                                "vSitioSuicidio": 7,
                                "vSuicidio": 2,
                                "vObservEnvenenamiento": "OBSERV_ENVENENAMIENTO1234567890123456789",
                                "vObservDisparosuicidio": 3,
                                "vObservOtrossuicidio": "OBSERV_OTROSSUICIDIO12345678901234567890",
                                "vCausaSuicidio": 5,
                                "vSitioOtrosupuesto": 7,
                                "vObservOtrosupuesto": "OBSERV_OTROSUPUESTO12345678901234567890OBSERV_OTROSUPUESTO12345678901234567890OBSERV_OTROSUPUESTO123"
                            }
                        ],
                        "vGrabaciones": [
                            {
                                "vStatusOperacion": null,
                                "vDetallesOperacion": null,
                                "vTipo": "BoletinGrabacion",
                                "vSuccess": true,
                                "vTipoBoletin": "judiciales",
                                "vIdBoletin": 1311111111,
                                "vNbol": "81234567",
                                "vIdentifica": 14800001,
                                "vIdCodBoletin": 1511111111,
                                "vIdLitBoletin": 1611111111,
                                "vIdImageBoletin": 1811111111,
                                "vIdFichero": 1111111111,
                                "vAnoFichero": 2014,
                                "vMesFichero": 1,
                                "vCodigoProvinciaFichero": 3,
                                "vLinterb1": "Adiposidad localizada                                       ",
                                "vLinterb2": "Acidosis                                                    ",
                                "vLinterb3": "Hipopotasmia                                                ",
                                "vLinterb4": "Esclerosis múltiple                                         ",
                                "vLinterc1": "Síndrome de Nezelof                                         ",
                                "vLinterc2": "Síndrome de Di George                                       ",
                                "vLinterc3": "Diabetes insípida                                           ",
                                "vLinterc4": "Marasmo nutricional                                         ",
                                "vLinmediat1": "Fiebre tifoidea                                             ",
                                "vLinmediat2": "Meningitis tuberculosa                                      ",
                                "vLinmediat3": "Granuloma inguinal                                          ",
                                "vLinmediat4": "Oncocercosis                                                ",
                                "vLinicial1": "Miocarditis aislada                                         ",
                                "vLinicial2": "Taquicardia ventricular                                     ",
                                "vLinicial3": "Ruptura arterial                                            ",
                                "vLinicial4": "Compresión de vena                                          ",
                                "vLcontribu1": "Edema pulmonar                                              ",
                                "vLcontribu2": "Quilotórax                                                  ",
                                "vLcontribu3": "Hemotórax                                                   ",
                                "vLcontribu4": "Esofagitis                                                  ",
                                "vFechagrabadoStr": "02/03/2014 11:12:13"
                            }
                        ],
                        "vCodificacion": [
                            {
                                "vStatusOperacion": null,
                                "vDetallesOperacion": null,
                                "vTipo": "BoletinCodificacion",
                                "vSuccess": true,
                                "vTipoBoletin": "judiciales",
                                "vIdBoletin": 1311111111,
                                "vNbol": "81234567",
                                "vIdentifica": 14800001,
                                "vIdCodBoletin": 1511111111,
                                "vIdLitBoletin": 1611111111,
                                "vIdImageBoletin": 1811111111,
                                "vIdFichero": 1111111111,
                                "vAnoFichero": 2014,
                                "vMesFichero": 1,
                                "vCodigoProvinciaFichero": 3,
                                "vFechacodificadoStr": "13/12/2014",
                                "vFechaverificadoStr": "23/12/2014",
                                "vErrores": 0,
                                "vCompleto": 1,
                                "vLegible": "L",
                                "vSecuencia": "S",
                                "vAbreviatu": "A",
                                "vCodificado": "S",
                                "vYacodificado": 1,
                                "vHoratsStr": "24/12/2014",
                                "vManinmediat1": 1,
                                "vManinmediat2": 1,
                                "vManinmediat3": 1,
                                "vManinmediat4": 1,
                                "vManinterb1": 1,
                                "vManinterb2": 1,
                                "vManinterb3": 1,
                                "vManinterb4": 1,
                                "vManinterc1": 1,
                                "vManinterc2": 1,
                                "vManinterc3": 1,
                                "vManinterc4": 1,
                                "vManinicial1": 1,
                                "vManinicial2": 1,
                                "vManinicial3": 1,
                                "vManinicial4": 1,
                                "vMancontribu1": 1,
                                "vMancontribu2": 1,
                                "vMancontribu3": 1,
                                "vMancontribu4": 1
                            }
                        ],
                        "vExtra":  [
                                {
                                "vStatusOperacion": null,
                                "vDetallesOperacion": null,
                                "vTipo": "BoletinExtra",
                                "vSuccess": true,
                                "vTipoBoletin": "judiciales",
                                "vIdBoletin": 1311111111,
                                "vNbol": "81234567",
                                "vIdentifica": 14800001,
                                "vIdCodBoletin": 1511111111,
                                "vIdLitBoletin": 1611111111,
                                "vIdImageBoletin": 1811111111,
                                "vIdFichero": 1111111111,
                                "vAnoFichero": 2014,
                                "vMesFichero": 1,
                                "vCodigoProvinciaFichero": 3,
                                "vProvmedico": 3,
                                "vLegible": "S",
                                "vMedico": "COLEG1",
                                "vAbreviatu": "A"
                            }
                        ]
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







