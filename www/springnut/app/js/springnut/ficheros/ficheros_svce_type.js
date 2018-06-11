'use strict';

/*
 * ficheros_svce_type.js
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




angular.module("ficherosTypes").factory("FicherosSvceType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "HitSpecifiedSvceType",
    "HitServerSvceType",
    function( theSS_typesregistry,
              theSS_Overrider,
              theSS_HitSpecifiedSvceType,
              theSS_HitServerSvceType){



        var ModuleName     = "ficheros_svce_type";
        var ModulePackages = "springnut/ficheros";
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



                theToInit.FICHEROS_REUSEDATOSCOMPLETOS_MAXLAPSEDMILLIS = 2000;



                theToInit.FICHEROS_LISTAFICHEROS_NAME  = "fprDo_Ficheros_ListaFicheros";
                theToInit.FICHEROS_LISTAFICHEROS_TITLE = "Lista deFicheros";
                theToInit.FICHEROS_LISTAFICHEROS_URL   = "ficheros/listaFicherosConIdentificasJSON";
                theToInit.FICHEROS_LISTAFICHEROS_TYPE  = "ListaFicherosConIdentificas";
                theToInit.FICHEROS_LISTAFICHEROS_FIELD = "vFicheros";



                theToInit.FICHEROS_FICHERODATOSCOMPLETOS_NAME  = "fprDo_Ficheros_FicheroDatosCompletos";
                theToInit.FICHEROS_FICHERODATOSCOMPLETOS_TITLE = "Fichero (completo)";
                theToInit.FICHEROS_FICHERODATOSCOMPLETOS_URL   = "ficheros/ficheroDatosJSON/";
                theToInit.FICHEROS_FICHERODATOSCOMPLETOS_TYPE  = "FicheroConIdentificas";

                theToInit.FICHEROS_FICHERODATOSLIGEROS_NAME  ="fprDo_Ficheros_FicheroDatos";
                theToInit.FICHEROS_FICHERODATOSLIGEROS_TITLE = "Fichero";
                theToInit.FICHEROS_FICHERODATOSLIGEROS_URL   = "ficheros/ficheroDatosJSON/";
                theToInit.FICHEROS_FICHERODATOSLIGEROS_TYPE  = "FicheroConIdentificas";









                theToInit.FICHEROS_LISTABOLETINESDEFICHERO_NAME  = "fprDo_Ficheros_ListaBoletinesDeFichero";
                theToInit.FICHEROS_LISTABOLETINESDEFICHERO_TITLE = "Lista de Boletines de Fichero";
                theToInit.FICHEROS_LISTABOLETINESDEFICHERO_URL   = "bedids/listaBedidsDeFicheroJSON/";
                theToInit.FICHEROS_LISTABOLETINESDEFICHERO_TYPE  = "ListaBoletinIds";
                theToInit.FICHEROS_LISTABOLETINESDEFICHERO_FIELD = "vBoletines";


                theToInit.FICHEROS_BOLETINDEFICHERODATOS_NAME  ="fprDo_Ficheros_BoletinDatos";
                theToInit.FICHEROS_BOLETINDEFICHERODATOS_TITLE = "Boletín";
                theToInit.FICHEROS_BOLETINDEFICHERODATOS_URL   = "boletines/boletinDatosJSON/";
                theToInit.FICHEROS_BOLETINDEFICHERODATOS_TYPE  = "BoletinDatos";

                theToInit.FICHEROS_BOLETINDEFICHERODATOSCOMPLETOS_NAME  ="fprDo_Ficheros_BoletinDatosCompletos";
                theToInit.FICHEROS_BOLETINDEFICHERODATOSCOMPLETOS_TITLE = "Boletín";
                theToInit.FICHEROS_BOLETINDEFICHERODATOSCOMPLETOS_URL   = "boletines/boletinDatosCompletosJSON/";
                theToInit.FICHEROS_BOLETINDEFICHERODATOSCOMPLETOS_TYPE  = "BoletinDatos";




                theToInit.FICHEROS_BOLETINDEFICHERODATOSDEMOGRAFICOS_NAME  ="fprDo_Ficheros_BoletinDatosDemograficos";
                theToInit.FICHEROS_BOLETINDEFICHERODATOSDEMOGRAFICOS_TITLE = "Demograficos de Boletín";


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


                theToInit.FICHEROS_CAMBIARPARMPOSTFIX = "_cambiar";


                theToInit.FIRSTINDEXURLREPLACEMENT = "{thePrimero}";
                theToInit.HOWMANYURLREPLACEMENT    = "{theCuantos}";


                theToInit.FICHEROSSVCE_DEFAULTNAME = "FicherosSvceDefaultName";



                theToInit.OPERATIONSPECS = [

                    {
                        "title":           theToInit.FICHEROS_LISTAFICHEROS_TITLE,
                        "name":            theToInit.FICHEROS_LISTAFICHEROS_NAME,
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_LIST,
                        "url":             theToInit.FICHEROS_LISTAFICHEROS_URL,
                        "replyType":       theToInit.FICHEROS_LISTAFICHEROS_TYPE,
                        "replyField":      theToInit.FICHEROS_LISTAFICHEROS_FIELD,
                        "useUrlParm":      false,
                        "useUrlQuery":     true,
                        "useFirstAndMany": true
                    },



                    {
                        "title":           theToInit.FICHEROS_FICHERODATOSCOMPLETOS_TITLE,
                        "name":            theToInit.FICHEROS_FICHERODATOSCOMPLETOS_NAME,
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_ONE,
                        "url":             theToInit.FICHEROS_FICHERODATOSCOMPLETOS_URL,
                        "replyType":       theToInit.FICHEROS_FICHERODATOSCOMPLETOS_TYPE,
                        "replyField":      null,
                        "useUrlParm":      false,
                        "useUrlQuery":     true
                    },
                    {
                        "title":           theToInit.FICHEROS_FICHERODATOSLIGEROS_TITLE,
                        "name":            theToInit.FICHEROS_FICHERODATOSLIGEROS_NAME,
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_ONE,
                        "url":             theToInit.FICHEROS_FICHERODATOSLIGEROS_URL,
                        "replyType":       theToInit.FICHEROS_FICHERODATOSLIGEROS_TYPE,
                        "replyField":      null
                    },


                    {
                        "title":           theToInit.FICHEROS_LISTABOLETINESDEFICHERO_TITLE,
                        "name":            theToInit.FICHEROS_LISTABOLETINESDEFICHERO_NAME,
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_LIST,
                        "url":             theToInit.FICHEROS_LISTABOLETINESDEFICHERO_URL,
                        "replyType":       theToInit.FICHEROS_LISTABOLETINESDEFICHERO_TYPE,
                        "replyField":      theToInit.FICHEROS_LISTABOLETINESDEFICHERO_FIELD,
                        "useUrlParm":      false,
                        "useUrlQuery":     true,
                        "useFirstAndMany": true
                    },
                    {
                        "title":           theToInit.FICHEROS_BOLETINDEFICHERODATOS_TITLE,
                        "name":            theToInit.FICHEROS_BOLETINDEFICHERODATOS_NAME,
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_ONE,
                        "url":             theToInit.FICHEROS_BOLETINDEFICHERODATOS_URL,
                        "replyType":       theToInit.FICHEROS_BOLETINDEFICHERODATOS_TYPE,
                        "replyField":      null,
                        "useUrlParm":      false,
                        "useUrlQuery":     true
                    },
                    {
                        "title":           theToInit.FICHEROS_BOLETINDEFICHERODATOSCOMPLETOS_TITLE,
                        "name":            theToInit.FICHEROS_BOLETINDEFICHERODATOSCOMPLETOS_NAME,
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_ONE,
                        "url":             theToInit.FICHEROS_BOLETINDEFICHERODATOSCOMPLETOS_URL,
                        "replyType":       theToInit.FICHEROS_BOLETINDEFICHERODATOSCOMPLETOS_TYPE,
                        "replyField":      null,
                        "useUrlParm":      false,
                        "useUrlQuery":     true
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






            var aFicherosSvce_Prototype = (function() {


                var aPrototype = new theS_HitSpecifiedSvceType.HitSpecifiedSvce_SuperPrototypeConstructor();

                pgInitFromModuleConstants( aPrototype);


                aPrototype._v_SuperPrototype = theS_HitSpecifiedSvceType.HitSpecifiedSvce_Prototype;


                aPrototype._v_Type = "FicherosSvce";

                aPrototype._v_Module = null;








                var _pInit = function( theTitle, theIdentifier, theRecorder) {

                    this._pInit_FicherosSvce( theTitle, theIdentifier, theRecorder);
                };
                if( _pInit){}/* CQT */
                aPrototype._pInit = _pInit;







                var _pInit_FicherosSvce = function( theTitle, theIdentifier, theRecorder) {

                    /* Delegate on super prototype initialization */
                    aPrototype._v_SuperPrototype._pInit_HitSpecifiedSvce.apply( this, [
                        theTitle || this.FICHEROSSVCE_DEFAULTNAME,
                        theIdentifier,
                        theRecorder
                    ]);

                    this._v_Prototype = aPrototype;
                    this._v_Type      = this._v_Prototype._v_Type;
                    this._v_Module    = aPrototype._v_Module;


                    this.pRegisterOperationsFromSpecs( this.OPERATIONSPECS);
                };
                if( _pInit_FicherosSvce){}/* CQT */
                aPrototype._pInit_FicherosSvce = _pInit_FicherosSvce;









                var fprDo_Ficheros_ListaFicheros_Wrapper = function( theDesde, theCuantos) {

                    return this.fprDo_Ficheros_ListaFicheros( theDesde, theCuantos);
                };
                if( fprDo_Ficheros_ListaFicheros_Wrapper){}/* CQT */
                aPrototype.fprDo_Ficheros_ListaFicheros_Wrapper = fprDo_Ficheros_ListaFicheros_Wrapper;





                var fprDo_Ficheros_ListaBoletinesDeFichero_Wrapper = function( theIdFichero, theDesde, theCuantos) {

                    return this.fprDo_Ficheros_ListaBoletinesDeFichero( theIdFichero, theDesde, theCuantos);
                };
                if( fprDo_Ficheros_ListaBoletinesDeFichero_Wrapper){}/* CQT */
                aPrototype.fprDo_Ficheros_ListaBoletinesDeFichero_Wrapper = fprDo_Ficheros_ListaBoletinesDeFichero_Wrapper;








                var fprDo_Ficheros_BoletinDatosCompletos_Wrapper = function( theIdFichero, theDesde, theCuantos) {

                    return this.fprDo_Ficheros_BoletinDatosCompletos( theIdFichero, theDesde, theCuantos);
                };
                if( fprDo_Ficheros_BoletinDatosCompletos_Wrapper){}/* CQT */
                aPrototype.fprDo_Ficheros_BoletinDatosCompletos_Wrapper = fprDo_Ficheros_BoletinDatosCompletos_Wrapper;






                var fprDo_Ficheros_BoletinDatosDemograficos_Wrapper = function( theIdFichero, theDesde, theCuantos) {

                    return this.fprDo_Ficheros_BoletinDatosDemograficos( theIdFichero, theDesde, theCuantos);
                };
                if( fprDo_Ficheros_BoletinDatosDemograficos_Wrapper){}/* CQT */
                aPrototype.fprDo_Ficheros_BoletinDatosDemograficos_Wrapper = fprDo_Ficheros_BoletinDatosDemograficos_Wrapper;





                return aPrototype;

            })();








            var FicherosSvce_Constructor = function( theTitle, theIdentifier, theRecorder) {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_HitSpecifiedSvceType.HitSpecifiedSvce_Prototype;

                this._v_Prototype = null;
                this._v_Type      = null;
                this._v_Module    = null;

                this._pInit_FicherosSvce( theTitle, theIdentifier, theRecorder);
            };
            FicherosSvce_Constructor.prototype = aFicherosSvce_Prototype;





            var FicherosSvce_SuperPrototypeConstructor = function() {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_HitSpecifiedSvceType.HitSpecifiedSvce_Prototype;

                this._v_Prototype = aFicherosSvce_Prototype;
                this._v_Type      = null;
                this._v_Module    = null;
            };
            FicherosSvce_SuperPrototypeConstructor.prototype = aFicherosSvce_Prototype;



            var aModule = {
                "FicherosSvce_Prototype": aFicherosSvce_Prototype,
                "FicherosSvce_Constructor": FicherosSvce_Constructor,
                "FicherosSvce_SuperPrototypeConstructor": FicherosSvce_SuperPrototypeConstructor
            };
            pgInitFromModuleConstants( aModule);
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;

            aFicherosSvce_Prototype._v_Module = aModule;




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







