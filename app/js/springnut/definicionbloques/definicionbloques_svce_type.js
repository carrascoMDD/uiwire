'use strict';

/*
 * definicionbloques_svce_type.js
 *
 * Creado @author Antonio Carrasco Valero 201411162348
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




angular.module("definicionbloquesTypes").factory("DefinicionbloquesSvceType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "HitSpecifiedSvceType",
    "HitServerSvceType",
    function( theSS_typesregistry,
              theSS_Overrider,
              theSS_HitSpecifiedSvceType,
              theSS_HitServerSvceType){



        var ModuleName     = "definicionbloques_svce_type";
        var ModulePackages = "springnut/definicionbloques";
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


                theToInit.DEFINICIONBLOQUES_LISTAFICHEROS_TITLE = "Lista de Ficheros";
                theToInit.DEFINICIONBLOQUES_LISTAFICHEROS_URL   = "ficheros/listaFicherosConIdentificasJSON";
                theToInit.DEFINICIONBLOQUES_LISTAFICHEROS_TYPE  = "ListaFicherosConIdentificas";
                theToInit.DEFINICIONBLOQUES_LISTAFICHEROS_FIELD = "vFicheros";

                theToInit.DEFINICIONBLOQUES_LISTABLOQUESDEFICHERO_TITLE = "Lista de Bloques de Fichero";
                theToInit.DEFINICIONBLOQUES_LISTABLOQUESDEFICHERO_URL   = "definicionBloques/listaBloquesDeFicheroJSON/";
                theToInit.DEFINICIONBLOQUES_LISTABLOQUESDEFICHERO_TYPE  = "ListaBloquesDeFichero";
                theToInit.DEFINICIONBLOQUES_LISTABLOQUESDEFICHERO_FIELD = "vBloques";


                
                theToInit.DEFINICIONBLOQUES_LISTAOPERADORES_TITLE   = "Lista de Operadores";
                theToInit.DEFINICIONBLOQUES_LISTAOPERADORES_URL   = "administracionOperadores/listaOperadoresJSON";
                theToInit.DEFINICIONBLOQUES_LISTAOPERADORES_TYPE  = "ListaOperadores";
                theToInit.DEFINICIONBLOQUES_LISTAOPERADORES_OPERADORES_FIELD = "vOperadores";

                theToInit.DEFINICIONBLOQUES_LISTABLOQUESDEOPERADOR_TITLE  = "Lista de Bloques de Operador";
                theToInit.DEFINICIONBLOQUES_LISTABLOQUESDEOPERADOR_URL   = "definicionBloques/listaBloquesDeOperadorJSON/";
                theToInit.DEFINICIONBLOQUES_LISTABLOQUESDEOPERADOR_TYPE  = "ListaBloquesDeOperador";
                theToInit.DEFINICIONBLOQUES_LISTABLOQUESDEOPERADOR_BLOQUESDEOPERADOR_FIELD = "vBloques";






                theToInit.DEFINICIONBLOQUES_FICHERODATOS_TITLE = "Fichero";
                theToInit.DEFINICIONBLOQUES_FICHERODATOS_URL   = "ficheros/ficheroConIdentificasJSON/";
                theToInit.DEFINICIONBLOQUES_FICHERODATOS_TYPE  = "FicheroConIdentificas";


                theToInit.DEFINICIONBLOQUES_OPERADORDATOS_TITLE = "Operador";
                theToInit.DEFINICIONBLOQUES_OPERADORDATOS_URL   = "administracionOperadores/operadorDatosJSON/";
                theToInit.DEFINICIONBLOQUES_OPERADORDATOS_TYPE  = "OperadorDatos";


                theToInit.DEFINICIONBLOQUES_BLOQUEDATOS_TITLE = "Bloque de Operador";
                theToInit.DEFINICIONBLOQUES_BLOQUEDATOS_URL   = "definicionBloques/bloqueDatosJSON/";
                theToInit.DEFINICIONBLOQUES_BLOQUEDATOS_TYPE  = "BloqueDatos";





                theToInit.DEFINICIONBLOQUES_CAMBIARBLOQUE_TITLE = "Cambiar Bloque de Operador";
                theToInit.DEFINICIONBLOQUES_CAMBIARBLOQUE_URL   = "definicionBloques/cambiarBloqueAlgunosDatosJSON";
                theToInit.DEFINICIONBLOQUES_CAMBIARBLOQUE_TYPE  = "BloqueCambiado";
                theToInit.DEFINICIONBLOQUES_CAMBIARBLOQUE_FIELD = "vBloqueDespues";


                theToInit.DEFINICIONBLOQUES_CREARBLOQUE_TITLE = "Crear Bloque de Operador";
                theToInit.DEFINICIONBLOQUES_CREARBLOQUE_URL   = "definicionBloques/crearBloqueJSON";
                theToInit.DEFINICIONBLOQUES_CREARBLOQUE_TYPE  = "BloqueCreado";


                theToInit.DEFINICIONBLOQUES_ELIMINARBLOQUE_TITLE = "Eliminar Bloque de Fichero";
                theToInit.DEFINICIONBLOQUES_ELIMINARBLOQUE_URL   = "definicionBloques/eliminarBloqueJSON";
                theToInit.DEFINICIONBLOQUES_ELIMINARBLOQUE_TYPE  = "BloqueEliminado";

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


                theToInit.DEFINICIONBLOQUES_CAMBIARPARMPOSTFIX = "_cambiar";


                theToInit.FIRSTINDEXURLREPLACEMENT = "{thePrimero}";
                theToInit.HOWMANYURLREPLACEMENT    = "{theCuantos}";


                theToInit.DEFINICIONBLOQUESSVCE_DEFAULTNAME = "DefinicionbloquesSvceDefaultName";



                theToInit.OPERATIONSPECS = [

                    {
                        "title":           theToInit.DEFINICIONBLOQUES_LISTAFICHEROS_TITLE,
                        "name":            "fprDo_Definicionbloques_ListaFicheros",
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_LIST,
                        "url":             theToInit.DEFINICIONBLOQUES_LISTAFICHEROS_URL,
                        "replyType":       theToInit.DEFINICIONBLOQUES_LISTAFICHEROS_TYPE,
                        "replyField":      theToInit.DEFINICIONBLOQUES_LISTAFICHEROS_FIELD,
                        "useUrlParm":      false,
                        "useUrlQuery":     true,
                        "useFirstAndMany": true
                    },
                    {
                        "title":           theToInit.DEFINICIONBLOQUES_LISTABLOQUESDEFICHERO_TITLE,
                        "name":            "fprDo_Definicionbloques_ListaBloquesDeFichero",
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_LIST,
                        "url":             theToInit.DEFINICIONBLOQUES_LISTABLOQUESDEFICHERO_URL,
                        "replyType":       theToInit.DEFINICIONBLOQUES_LISTABLOQUESDEFICHERO_TYPE,
                        "replyField":      theToInit.DEFINICIONBLOQUES_LISTABLOQUESDEFICHERO_FIELD,
                        "useFirstAndMany": true,
                        "useUrlParm":      false,
                        "useUrlQuery":     true
                    },

                    {
                        "title":           theToInit.DEFINICIONBLOQUES_LISTAOPERADORES_TITLE,
                        "name":            "fprDo_Definicionbloques_ListaOperadores",
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_LIST,
                        "url":             theToInit.DEFINICIONBLOQUES_LISTAOPERADORES_URL,
                        "replyType":       theToInit.DEFINICIONBLOQUES_LISTAOPERADORES_TYPE,
                        "replyField":      theToInit.DEFINICIONBLOQUES_LISTAOPERADORES_OPERADORES_FIELD,
                        "useFirstAndMany": true
                    },
                    {
                        "title":           theToInit.DEFINICIONBLOQUES_LISTABLOQUESDEOPERADOR_TITLE,
                        "name":            "fprDo_Definicionbloques_ListaBloquesDeOperador",
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_LIST,
                        "url":             theToInit.DEFINICIONBLOQUES_LISTABLOQUESDEOPERADOR_URL,
                        "replyType":       theToInit.DEFINICIONBLOQUES_LISTABLOQUESDEOPERADOR_TYPE,
                        "replyField":      theToInit.DEFINICIONBLOQUES_LISTABLOQUESDEOPERADOR_BLOQUESDEOPERADOR_FIELD,
                        "useFirstAndMany": true,
                        "useUrlParm":      false,
                        "useUrlQuery":     true
                    },




                    {
                        "title":           theToInit.DEFINICIONBLOQUES_FICHERODATOS_TITLE,
                        "name":            "fprDo_Definicionbloques_FicheroDatos",
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_ONE,
                        "url":             theToInit.DEFINICIONBLOQUES_FICHERODATOS_URL,
                        "replyType":       theToInit.DEFINICIONBLOQUES_FICHERODATOS_TYPE,
                        "replyField":      null
                    },


                    {
                        "title":           theToInit.DEFINICIONBLOQUES_OPERADORDATOS_TITLE,
                        "name":            "fprDo_Definicionbloques_OperadorDatos",
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_ONE,
                        "url":             theToInit.DEFINICIONBLOQUES_OPERADORDATOS_URL,
                        "replyType":       theToInit.DEFINICIONBLOQUES_OPERADORDATOS_TYPE,
                        "replyField":      null
                    },


                    {
                        "title":           theToInit.DEFINICIONBLOQUES_BLOQUEDATOS_TITLE,
                        "name":            "fprDo_Definicionbloques_BloqueDatos",
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_ONE,
                        "url":             theToInit.DEFINICIONBLOQUES_BLOQUEDATOS_URL,
                        "replyType":       theToInit.DEFINICIONBLOQUES_BLOQUEDATOS_TYPE,
                        "replyField":      null,
                        "useUrlQuery":     true
                    },







                    {
                        "title":           theToInit.DEFINICIONBLOQUES_CREARBLOQUE_TITLE,
                        "name":            "fprDo_Definicionbloques_CrearBloque",
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_CREATE,
                        "url":             theToInit.DEFINICIONBLOQUES_CREARBLOQUE_URL,
                        "replyType":       theToInit.DEFINICIONBLOQUES_CREARBLOQUE_TYPE
                    },


                    {
                        "title":           theToInit.DEFINICIONBLOQUES_CAMBIARBLOQUE_TITLE,
                        "name":            "fprDo_Definicionbloques_CambiarBloque",
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_CHANGE,
                        "url":             theToInit.DEFINICIONBLOQUES_CAMBIARBLOQUE_URL,
                        "replyType":       theToInit.DEFINICIONBLOQUES_CAMBIARBLOQUE_TYPE,
                        "replyField":      theToInit.DEFINICIONBLOQUES_CAMBIARBLOQUE_FIELD
                    },

                    {
                        "title":           theToInit.DEFINICIONBLOQUES_ELIMINARBLOQUE_TITLE,
                        "name":            "fprDo_Definicionbloques_EliminarBloque",
                        "kind":            theS_HitServerSvceType.OPERATIONKIND_DELETE,
                        "url":             theToInit.DEFINICIONBLOQUES_ELIMINARBLOQUE_URL,
                        "replyType":       theToInit.DEFINICIONBLOQUES_ELIMINARBLOQUE_TYPE
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






            var aDefinicionbloquesSvce_Prototype = (function() {


                var aPrototype = new theS_HitSpecifiedSvceType.HitSpecifiedSvce_SuperPrototypeConstructor();

                pgInitFromModuleConstants( aPrototype);


                aPrototype._v_SuperPrototype = theS_HitSpecifiedSvceType.HitSpecifiedSvce_Prototype;


                aPrototype._v_Type = "DefinicionbloquesSvce";

                aPrototype._v_Module = null;








                var _pInit = function( theTitle, theIdentifier, theRecorder) {

                    this._pInit_DefinicionbloquesSvce( theTitle, theIdentifier, theRecorder);
                };
                if( _pInit){}/* CQT */
                aPrototype._pInit = _pInit;







                var _pInit_DefinicionbloquesSvce = function( theTitle, theIdentifier, theRecorder) {

                    /* Delegate on super prototype initialization */
                    aPrototype._v_SuperPrototype._pInit_HitSpecifiedSvce.apply( this, [
                        theTitle || this.DEFINICIONBLOQUESSVCE_DEFAULTNAME,
                        theIdentifier,
                        theRecorder
                    ]);

                    this._v_Prototype = aPrototype;
                    this._v_Type      = this._v_Prototype._v_Type;
                    this._v_Module    = aPrototype._v_Module;


                    this.pRegisterOperationsFromSpecs( this.OPERATIONSPECS);
                };
                if( _pInit_DefinicionbloquesSvce){}/* CQT */
                aPrototype._pInit_DefinicionbloquesSvce = _pInit_DefinicionbloquesSvce;









                return aPrototype;

            })();








            var DefinicionbloquesSvce_Constructor = function( theTitle, theIdentifier, theRecorder) {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_HitSpecifiedSvceType.HitSpecifiedSvce_Prototype;

                this._v_Prototype = null;
                this._v_Type      = null;
                this._v_Module    = null;

                this._pInit_DefinicionbloquesSvce( theTitle, theIdentifier, theRecorder);
            };
            DefinicionbloquesSvce_Constructor.prototype = aDefinicionbloquesSvce_Prototype;





            var DefinicionbloquesSvce_SuperPrototypeConstructor = function() {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_HitSpecifiedSvceType.HitSpecifiedSvce_Prototype;

                this._v_Prototype = aDefinicionbloquesSvce_Prototype;
                this._v_Type      = null;
                this._v_Module    = null;
            };
            DefinicionbloquesSvce_SuperPrototypeConstructor.prototype = aDefinicionbloquesSvce_Prototype;



            var aModule = {
                "DefinicionbloquesSvce_Prototype": aDefinicionbloquesSvce_Prototype,
                "DefinicionbloquesSvce_Constructor": DefinicionbloquesSvce_Constructor,
                "DefinicionbloquesSvce_SuperPrototypeConstructor": DefinicionbloquesSvce_SuperPrototypeConstructor
            };
            pgInitFromModuleConstants( aModule);
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;

            aDefinicionbloquesSvce_Prototype._v_Module = aModule;




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







