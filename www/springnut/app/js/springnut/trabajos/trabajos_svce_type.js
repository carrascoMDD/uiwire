'use strict';

/*
 * trabajos_svce_type.js
 *
 * Creado @author Antonio Carrasco Valero 201411280008
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




angular.module("trabajosTypes").factory("TrabajosSvceType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "HitSpecifiedSvceType",
    "HitServerSvceType",
    function( theSS_typesregistry,
              theSS_Overrider,
              theSS_HitSpecifiedSvceType,
              theSS_HitServerSvceType){



        var ModuleName     = "trabajos_svce_type";
        var ModulePackages = "springnut/trabajos";
        var ModuleFullName = ModulePackages + "/" + ModuleName;





        var aMod_definer = function( theS_Overrider,
                                     theS_HitSpecifiedSvceType,
                                     theS_HitServerSvceType) {

            if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}





            var pgInitWithModuleVariations = function( theToInit) {

                if( !theToInit) {
                    return;
                }

                theToInit.LOGREQUESTS  = true;
                theToInit.LOGFORMS     = true;
                theToInit.LOGREPLIES   = true;
                theToInit.LOGRESPONSES = true;





                theToInit.MAXRESPONSELOGENTRIES = 4;



                theToInit.TRABAJOS_REUSEDATOSCOMPLETOS_MAXLAPSEDMILLIS = 2000;



                theToInit.TRABAJOS_LISTATRABAJOSCOMPLETA_TITLE = "Lista de Trabajos (completa)";
                theToInit.TRABAJOS_LISTATRABAJOSCOMPLETA_URL   = "trabajos/listaTrabajosCompletaJSON";
                theToInit.TRABAJOS_LISTATRABAJOSCOMPLETA_TYPE  = "ListaTrabajos";
                theToInit.TRABAJOS_LISTATRABAJOSCOMPLETA_FIELD = "vTrabajos";

                theToInit.TRABAJOS_LISTATRABAJOSLIGERA_TITLE = "Lista de Trabajos Raiz (ligera)";
                theToInit.TRABAJOS_LISTATRABAJOSLIGERA_URL   = "trabajos/listaTrabajosRaizJSON";
                theToInit.TRABAJOS_LISTATRABAJOSLIGERA_TYPE  = "ListaTrabajos";
                theToInit.TRABAJOS_LISTATRABAJOSLIGERA_FIELD = "vTrabajos";

                theToInit.TRABAJOS_LISTATRABAJOSLIGERA_TODOS_TITLE = "Lista de Trabajos (ligera)";
                theToInit.TRABAJOS_LISTATRABAJOSLIGERA_TODOS_URL   = "trabajos/listaTrabajosJSON";
                theToInit.TRABAJOS_LISTATRABAJOSLIGERA_TODOS_TYPE  = "ListaTrabajos";
                theToInit.TRABAJOS_LISTATRABAJOSLIGERA_TODOS_FIELD = "vTrabajos";


                theToInit.TRABAJOS_LISTATRABAJOSDETIPOLIGERA_TITLE = "Lista de Trabajos de un Tipo(ligera)";
                theToInit.TRABAJOS_LISTATRABAJOSDETIPOLIGERA_URL   = "trabajos/listaTrabajosDeTipoJSON";
                theToInit.TRABAJOS_LISTATRABAJOSDETIPOLIGERA_TYPE  = "ListaTrabajos";
                theToInit.TRABAJOS_LISTATRABAJOSDETIPOLIGERA_FIELD = "vTrabajos";





                theToInit.TRABAJOS_LISTATRABAJOSDETIPOYTIPOBOLETINLIGERA_NAME  = "fprDo_Trabajos_ListaTrabajosDeTipoYTipoBoletinLigera";
                theToInit.TRABAJOS_LISTATRABAJOSDETIPOYTIPOBOLETINLIGERA_TITLE = "Lista de Trabajos de un Tipo(ligera)";
                theToInit.TRABAJOS_LISTATRABAJOSDETIPOYTIPOBOLETINLIGERA_URL   = "trabajos/listaTrabajosDeTipoYTipoBoletinJSON";
                theToInit.TRABAJOS_LISTATRABAJOSDETIPOYTIPOBOLETINLIGERA_TYPE  = "ListaTrabajos";
                theToInit.TRABAJOS_LISTATRABAJOSDETIPOYTIPOBOLETINLIGERA_FIELD = "vTrabajos";



                theToInit.TRABAJOS_LISTAPARAMETROSDETRABAJO_TITLE = "Lista de Parametros de Trabajo";
                theToInit.TRABAJOS_LISTAPARAMETROSDETRABAJO_FIELD = "vParametros";
                theToInit.TRABAJOS_LISTAPARAMETROSDETRABAJO_MAXLAPSEDMILLIS = theToInit.TRABAJOS_REUSEDATOSCOMPLETOS_MAXLAPSEDMILLIS;

                theToInit.TRABAJOS_LISTAPARAKILOMETROSDETRABAJO_TITLE = "Lista de Parakilometros de Trabajo";
                theToInit.TRABAJOS_LISTAPARAKILOMETROSDETRABAJO_FIELD = "vParakilometros";
                theToInit.TRABAJOS_LISTAPARAKILOMETROSDETRABAJO_MAXLAPSEDMILLIS = theToInit.TRABAJOS_REUSEDATOSCOMPLETOS_MAXLAPSEDMILLIS;

                theToInit.TRABAJOS_LISTARESULTADOSDETRABAJO_TITLE = "Lista de Resultados de Trabajo";
                theToInit.TRABAJOS_LISTARESULTADOSDETRABAJO_FIELD = "vResultados";
                theToInit.TRABAJOS_LISTARESULTADOSDETRABAJO_MAXLAPSEDMILLIS = theToInit.TRABAJOS_REUSEDATOSCOMPLETOS_MAXLAPSEDMILLIS;

                theToInit.TRABAJOS_LISTARESULKILOTADOSDETRABAJO_TITLE = "Lista de Resulkilotados de Trabajo";
                theToInit.TRABAJOS_LISTARESULKILOTADOSDETRABAJO_FIELD = "vResulkilotados";
                theToInit.TRABAJOS_LISTARESULKILOTADOSDETRABAJO_MAXLAPSEDMILLIS = theToInit.TRABAJOS_REUSEDATOSCOMPLETOS_MAXLAPSEDMILLIS;

                theToInit.TRABAJOS_LISTAINTERVENCIONESDETRABAJO_TITLE = "Lista de Intervenciones de Trabajo";
                theToInit.TRABAJOS_LISTAINTERVENCIONESDETRABAJO_FIELD = "vIntervenciones";
                theToInit.TRABAJOS_LISTAINTERVENCIONESDETRABAJO_MAXLAPSEDMILLIS = theToInit.TRABAJOS_REUSEDATOSCOMPLETOS_MAXLAPSEDMILLIS;

                theToInit.TRABAJOS_LISTAEJECUCIONESDETRABAJO_TITLE = "Lista de Ejecuciones de Trabajo";
                theToInit.TRABAJOS_LISTAEJECUCIONESDETRABAJO_FIELD = "vEjecuciones";
                theToInit.TRABAJOS_LISTAEJECUCIONESDETRABAJO_MAXLAPSEDMILLIS = theToInit.TRABAJOS_REUSEDATOSCOMPLETOS_MAXLAPSEDMILLIS;

                theToInit.TRABAJOS_LISTAPROGRESOSDETRABAJO_TITLE = "Lista de Progresos de Trabajo";
                theToInit.TRABAJOS_LISTAPROGRESOSDETRABAJO_FIELD = "vProgresos";
                theToInit.TRABAJOS_LISTAPROGRESOSDETRABAJO_MAXLAPSEDMILLIS = theToInit.TRABAJOS_REUSEDATOSCOMPLETOS_MAXLAPSEDMILLIS;

                theToInit.TRABAJOS_PARAKILOMETRODATOSCONBLOB_TITLE = "Parakilometro";
                theToInit.TRABAJOS_PARAKILOMETRODATOSCONBLOB_URL   = "trabajos/parakilometroDatosConBlobJSON/";
                theToInit.TRABAJOS_PARAKILOMETRODATOSCONBLOB_TYPE  = "ParakilometroDatos";

                theToInit.TRABAJOS_RESULKILOTADODATOSCONBLOB_TITLE = "Resulkilotado";
                theToInit.TRABAJOS_RESULKILOTADODATOSCONBLOB_URL   = "trabajos/resulkilotadoDatosConBlobJSON/";
                theToInit.TRABAJOS_RESULKILOTADODATOSCONBLOB_TYPE  = "ResulkilotadoDatos";

                theToInit.TRABAJOS_MUESKILOTRADATOSCONBLOB_TITLE = "Mueskilotra";
                theToInit.TRABAJOS_MUESKILOTRADATOSCONBLOB_URL   = "trabajos/mueskilotraDatosConBlobJSON/";
                theToInit.TRABAJOS_MUESKILOTRADATOSCONBLOB_TYPE  = "MueskilotraDatos";



                theToInit.TRABAJOS_LISTAEXCEPCIONESDETRABAJO_TITLE = "Lista de Excepciones de Trabajo";
                theToInit.TRABAJOS_LISTAEXCEPCIONESDETRABAJO_FIELD = "vExcepciones";
                theToInit.TRABAJOS_LISTAEXCEPCIONESDETRABAJO_MAXLAPSEDMILLIS = theToInit.TRABAJOS_REUSEDATOSCOMPLETOS_MAXLAPSEDMILLIS;





                theToInit.TRABAJOS_TRABAJODATOSCOMPLETOS_NAME  = "fprDo_Trabajos_TrabajoDatosCompletos";
                theToInit.TRABAJOS_TRABAJODATOSCOMPLETOS_TITLE = "Trabajo (completo sin blobs)";
                theToInit.TRABAJOS_TRABAJODATOSCOMPLETOS_URL   = "trabajos/trabajoDatosCompletosJSON/";
                theToInit.TRABAJOS_TRABAJODATOSCOMPLETOS_TYPE  = "TrabajoDatos";

                theToInit.TRABAJOS_TRABAJODATOSCOMPLETOSCONBLOBS_NAME  = "fprDo_Trabajos_TrabajoDatosCompletosConBlobs";
                theToInit.TRABAJOS_TRABAJODATOSCOMPLETOSCONBLOBS_TITLE = "Trabajo (completo CON blobs)";
                theToInit.TRABAJOS_TRABAJODATOSCOMPLETOSCONBLOBS_URL   = "trabajos/trabajoDatosCompletosConBlobsJSON/";
                theToInit.TRABAJOS_TRABAJODATOSCOMPLETOSCONBLOBS_TYPE  = "TrabajoDatos";


                theToInit.TRABAJOS_TRABAJODATOSLIGEROS_TITLE = "Trabajo (ligero)";
                theToInit.TRABAJOS_TRABAJODATOSLIGEROS_NAME  ="fprDo_Trabajos_TrabajoDatosLigeros";
                theToInit.TRABAJOS_TRABAJODATOSLIGEROS_URL   = "trabajos/trabajoDatosJSON/";
                theToInit.TRABAJOS_TRABAJODATOSLIGEROS_TYPE  = "TrabajoDatos";


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


                theToInit.TRABAJOS_CAMBIARPARMPOSTFIX = "_cambiar";


                theToInit.FIRSTINDEXURLREPLACEMENT = "{thePrimero}";
                theToInit.HOWMANYURLREPLACEMENT    = "{theCuantos}";


                theToInit.TRABAJOSSVCE_DEFAULTNAME = "TrabajosSvceDefaultName";



                theToInit.OPERATIONSPECS = [

                    {
                        "title":           theToInit.TRABAJOS_LISTATRABAJOSCOMPLETA_TITLE,
                        "name":            "fprDo_Trabajos_ListaTrabajosCompleta",
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_LIST,
                        "url":             theToInit.TRABAJOS_LISTATRABAJOSCOMPLETA_URL,
                        "replyType":       theToInit.TRABAJOS_LISTATRABAJOSCOMPLETA_TYPE,
                        "replyField":      theToInit.TRABAJOS_LISTATRABAJOSCOMPLETA_FIELD,
                        "useUrlParm":      false,
                        "useUrlQuery":     false,
                        "useFirstAndMany": true
                    },


                    {
                        "title":           theToInit.TRABAJOS_LISTATRABAJOSLIGERA_TITLE,
                        "name":            "fprDo_Trabajos_ListaTrabajosLigera",
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_LIST,
                        "url":             theToInit.TRABAJOS_LISTATRABAJOSLIGERA_URL,
                        "replyType":       theToInit.TRABAJOS_LISTATRABAJOSLIGERA_TYPE,
                        "replyField":      theToInit.TRABAJOS_LISTATRABAJOSLIGERA_FIELD,
                        "useUrlParm":      false,
                        "useUrlQuery":     false,
                        "useFirstAndMany": true
                    },



                    {
                        "title":           theToInit.TRABAJOS_LISTATRABAJOSDETIPOLIGERA_TITLE,
                        "name":            "fprDo_Trabajos_ListaTrabajosDeTipoLigera",
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_LIST,
                        "url":             theToInit.TRABAJOS_LISTATRABAJOSDETIPOLIGERA_URL,
                        "replyType":       theToInit.TRABAJOS_LISTATRABAJOSDETIPOLIGERA_TYPE,
                        "replyField":      theToInit.TRABAJOS_LISTATRABAJOSDETIPOLIGERA_FIELD,
                        "useUrlParm":      false,
                        "useUrlQuery":     true,
                        "useFirstAndMany": true
                    },


                    {
                        "title":           theToInit.TRABAJOS_LISTATRABAJOSDETIPOYTIPOBOLETINLIGERA_TITLE,
                        "name":            theToInit.TRABAJOS_LISTATRABAJOSDETIPOYTIPOBOLETINLIGERA_NAME,
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_LIST,
                        "url":             theToInit.TRABAJOS_LISTATRABAJOSDETIPOYTIPOBOLETINLIGERA_URL,
                        "replyType":       theToInit.TRABAJOS_LISTATRABAJOSDETIPOYTIPOBOLETINLIGERA_TYPE,
                        "replyField":      theToInit.TRABAJOS_LISTATRABAJOSDETIPOYTIPOBOLETINLIGERA_FIELD,
                        "useUrlParm":      false,
                        "useUrlQuery":     true,
                        "useFirstAndMany": true
                    },




                    {
                        "title":           theToInit.TRABAJOS_LISTAPARAMETROSDETRABAJO_TITLE,
                        "name":            "fprDo_Trabajos_ListaParametrosDeTrabajo",
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_LIST,
                        "reuse":           theToInit.TRABAJOS_TRABAJODATOSCOMPLETOS_NAME,
                        "maxLapsedMillis":  theToInit.TRABAJOS_LISTAPARAMETROSDETRABAJO_MAXLAPSEDMILLIS,
                        "replyField":      theToInit.TRABAJOS_LISTAPARAMETROSDETRABAJO_FIELD
                    },

                    {
                        "title":           theToInit.TRABAJOS_LISTAPARAKILOMETROSDETRABAJO_TITLE,
                        "name":            "fprDo_Trabajos_ListaParakilometrosDeTrabajo",
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_LIST,
                        "reuse":           theToInit.TRABAJOS_TRABAJODATOSCOMPLETOS_NAME,
                        "maxLapsedMillis":  theToInit.TRABAJOS_LISTAPARAKILOMETROSDETRABAJO_MAXLAPSEDMILLIS,
                        "replyField":      theToInit.TRABAJOS_LISTAPARAKILOMETROSDETRABAJO_FIELD
                    },
                    {
                        "title":           theToInit.TRABAJOS_LISTARESULTADOSDETRABAJO_TITLE,
                        "name":            "fprDo_Trabajos_ListaResultadosDeTrabajo",
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_LIST,
                        "reuse":           theToInit.TRABAJOS_TRABAJODATOSCOMPLETOS_NAME,
                        "maxLapsedMillis":  theToInit.TRABAJOS_LISTARESULTADOSDETRABAJO_MAXLAPSEDMILLIS,
                        "replyField":      theToInit.TRABAJOS_LISTARESULTADOSDETRABAJO_FIELD
                    },
                    {
                        "title":           theToInit.TRABAJOS_LISTARESULKILOTADOSDETRABAJO_TITLE,
                        "name":            "fprDo_Trabajos_ListaResulkilotadosDeTrabajo",
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_LIST,
                        "reuse":           theToInit.TRABAJOS_TRABAJODATOSCOMPLETOS_NAME,
                        "maxLapsedMillis":  theToInit.TRABAJOS_LISTARESULKILOTADOSDETRABAJO_MAXLAPSEDMILLIS,
                        "replyField":      theToInit.TRABAJOS_LISTARESULKILOTADOSDETRABAJO_FIELD
                    },
                    {
                        "title":           theToInit.TRABAJOS_LISTAINTERVENCIONESDETRABAJO_TITLE,
                        "name":            "fprDo_Trabajos_ListaIntervencionesDeTrabajo",
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_LIST,
                        "reuse":           theToInit.TRABAJOS_TRABAJODATOSCOMPLETOS_NAME,
                        "maxLapsedMillis":  theToInit.TRABAJOS_LISTAINTERVENCIONESDETRABAJO_MAXLAPSEDMILLIS,
                        "replyField":      theToInit.TRABAJOS_LISTAINTERVENCIONESDETRABAJO_FIELD
                    },
                    {
                        "title":           theToInit.TRABAJOS_LISTAEJECUCIONESDETRABAJO_TITLE,
                        "name":            "fprDo_Trabajos_ListaEjecucionesDeTrabajo",
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_LIST,
                        "reuse":           theToInit.TRABAJOS_TRABAJODATOSCOMPLETOS_NAME,
                        "maxLapsedMillis":  theToInit.TRABAJOS_LISTAEJECUCIONESDETRABAJO_MAXLAPSEDMILLIS,
                        "replyField":      theToInit.TRABAJOS_LISTAEJECUCIONESDETRABAJO_FIELD
                    },
                    {
                        "title":           theToInit.TRABAJOS_LISTAPROGRESOSDETRABAJO_TITLE,
                        "name":            "fprDo_Trabajos_ListaProgresosDeTrabajo",
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_LIST,
                        "reuse":           theToInit.TRABAJOS_TRABAJODATOSCOMPLETOS_NAME,
                        "maxLapsedMillis":  theToInit.TRABAJOS_LISTAPROGRESOSDETRABAJO_MAXLAPSEDMILLIS,
                        "replyField":      theToInit.TRABAJOS_LISTAPROGRESOSDETRABAJO_FIELD
                    },

                    {
                        "title":           theToInit.TRABAJOS_PARAKILOMETRODATOSCONBLOB_TITLE,
                        "name":            "fprDo_Trabajos_ParakilometroDatosConBlob",
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_ONE,
                        "url":             theToInit.TRABAJOS_PARAKILOMETRODATOSCONBLOB_URL,
                        "replyType":       theToInit.TRABAJOS_PARAKILOMETRODATOSCONBLOB_TYPE,
                        "replyField":      null
                    },
                    {
                        "title":           theToInit.TRABAJOS_RESULKILOTADODATOSCONBLOB_TITLE,
                        "name":            "fprDo_Trabajos_ResulkilotadoDatosConBlob",
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_ONE,
                        "url":             theToInit.TRABAJOS_RESULKILOTADODATOSCONBLOB_URL,
                        "replyType":       theToInit.TRABAJOS_RESULKILOTADODATOSCONBLOB_TYPE,
                        "replyField":      null
                    },
                    {
                        "title":           theToInit.TRABAJOS_MUESKILOTRADATOSCONBLOB_TITLE,
                        "name":            "fprDo_Trabajos_MueskilotraDatosConBlob",
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_ONE,
                        "url":             theToInit.TRABAJOS_MUESKILOTRADATOSCONBLOB_URL,
                        "replyType":       theToInit.TRABAJOS_MUESKILOTRADATOSCONBLOB_TYPE,
                        "replyField":      null
                    },


                    {
                        "title":           theToInit.TRABAJOS_LISTAEXCEPCIONESDETRABAJO_TITLE,
                        "name":            "fprDo_Trabajos_ListaExcepcionesDeTrabajo",
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_LIST,
                        "reuse":           theToInit.TRABAJOS_TRABAJODATOSCOMPLETOSCONBLOBS_NAME,
                        "maxLapsedMillis":  theToInit.TRABAJOS_LISTAPROGRESOSDETRABAJO_MAXLAPSEDMILLIS,
                        "replyField":      theToInit.TRABAJOS_LISTAEXCEPCIONESDETRABAJO_FIELD
                    },




                    {
                        "title":           theToInit.TRABAJOS_TRABAJODATOSCOMPLETOS_TITLE,
                        "name":            theToInit.TRABAJOS_TRABAJODATOSCOMPLETOS_NAME,
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_ONE,
                        "url":             theToInit.TRABAJOS_TRABAJODATOSCOMPLETOS_URL,
                        "replyType":       theToInit.TRABAJOS_TRABAJODATOSCOMPLETOS_TYPE,
                        "replyField":      null
                    },
                    {
                        "title":           theToInit.TRABAJOS_TRABAJODATOSCOMPLETOSCONBLOBS_TITLE,
                        "name":            theToInit.TRABAJOS_TRABAJODATOSCOMPLETOSCONBLOBS_NAME,
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_ONE,
                        "url":             theToInit.TRABAJOS_TRABAJODATOSCOMPLETOSCONBLOBS_URL,
                        "replyType":       theToInit.TRABAJOS_TRABAJODATOSCOMPLETOSCONBLOBS_TYPE,
                        "replyField":      null
                    },
                    {
                        "title":           theToInit.TRABAJOS_TRABAJODATOSLIGEROS_TITLE,
                        "name":            theToInit.TRABAJOS_TRABAJODATOSLIGEROS_NAME,
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_ONE,
                        "url":             theToInit.TRABAJOS_TRABAJODATOSLIGEROS_URL,
                        "replyType":       theToInit.TRABAJOS_TRABAJODATOSLIGEROS_TYPE,
                        "replyField":      null
                    }


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






            var aTrabajosSvce_Prototype = (function() {


                var aPrototype = new theS_HitSpecifiedSvceType.HitSpecifiedSvce_SuperPrototypeConstructor();

                pgInitFromModuleConstants( aPrototype);


                aPrototype._v_SuperPrototype = theS_HitSpecifiedSvceType.HitSpecifiedSvce_Prototype;


                aPrototype._v_Type = "TrabajosSvce";

                aPrototype._v_Module = null;








                var _pInit = function( theTitle, theIdentifier, theRecorder) {

                    this._pInit_TrabajosSvce( theTitle, theIdentifier, theRecorder);
                };
                if( _pInit){}/* CQT */
                aPrototype._pInit = _pInit;







                var _pInit_TrabajosSvce = function( theTitle, theIdentifier, theRecorder) {

                    /* Delegate on super prototype initialization */
                    aPrototype._v_SuperPrototype._pInit_HitSpecifiedSvce.apply( this, [
                        theTitle || this.TRABAJOSSVCE_DEFAULTNAME,
                        theIdentifier,
                        theRecorder
                    ]);

                    this._v_Prototype = aPrototype;
                    this._v_Type      = this._v_Prototype._v_Type;
                    this._v_Module    = aPrototype._v_Module;


                    this.pRegisterOperationsFromSpecs( this.OPERATIONSPECS);
                };
                if( _pInit_TrabajosSvce){}/* CQT */
                aPrototype._pInit_TrabajosSvce = _pInit_TrabajosSvce;







                var fprDo_Trabajos_ListaExcepcionesDeTrabajo_Wrapper = function( theDesde, theCuantos) {

                    return this.fprDo_Trabajos_ListaExcepcionesDeTrabajo( theDesde, theCuantos);
                };
                if( fprDo_Trabajos_ListaExcepcionesDeTrabajo_Wrapper){}/* CQT */
                aPrototype.fprDo_Trabajos_ListaExcepcionesDeTrabajo_Wrapper = fprDo_Trabajos_ListaExcepcionesDeTrabajo_Wrapper;







                return aPrototype;

            })();








            var TrabajosSvce_Constructor = function( theTitle, theIdentifier, theRecorder) {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_HitSpecifiedSvceType.HitSpecifiedSvce_Prototype;

                this._v_Prototype = null;
                this._v_Type      = null;
                this._v_Module    = null;

                this._pInit_TrabajosSvce( theTitle, theIdentifier, theRecorder);
            };
            TrabajosSvce_Constructor.prototype = aTrabajosSvce_Prototype;





            var TrabajosSvce_SuperPrototypeConstructor = function() {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_HitSpecifiedSvceType.HitSpecifiedSvce_Prototype;

                this._v_Prototype = aTrabajosSvce_Prototype;
                this._v_Type      = null;
                this._v_Module    = null;
            };
            TrabajosSvce_SuperPrototypeConstructor.prototype = aTrabajosSvce_Prototype;



            var aModule = {
                "TrabajosSvce_Prototype": aTrabajosSvce_Prototype,
                "TrabajosSvce_Constructor": TrabajosSvce_Constructor,
                "TrabajosSvce_SuperPrototypeConstructor": TrabajosSvce_SuperPrototypeConstructor
            };
            pgInitFromModuleConstants( aModule);
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;

            aTrabajosSvce_Prototype._v_Module = aModule;




            return aModule;
        };







        var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        if( !anExistingModule) {

            var aModule = aMod_definer(
                theSS_Overrider,
                theSS_HitSpecifiedSvceType,
                theSS_HitServerSvceType
            );
            anExistingModule = aModule;

            theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
        }



        return anExistingModule;


    }]);







