'use strict';

/*
 * fasesvalidacion_ctrl_type.js
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






angular.module("fasesvalidacionTypes").factory("FasesvalidacionCtrlType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "WithTabsCtrlType",
    "FasesvalidacionSvce",
    "FasesvalidacionFicherosInstrumentacionCtrlSpecs",
    "FasesvalidacionFicherosOperacionCtrlSpecs",
    "FasesvalidacionBloquesInstrumentacionCtrlSpecs",
    "FasesvalidacionBloquesOperacionCtrlSpecs",
    "$timeout",
function( theSS_typesregistry,
          theSS_Overrider,
          theSS_WithTabsCtrlType,
          theSS_FasesvalidacionSvce,
          theSS_FasesvalidacionFicherosInstrumentacionCtrlSpecs,
          theSS_FasesvalidacionFicherosOperacionCtrlSpecs,
          theSS_FasesvalidacionBloquesInstrumentacionCtrlSpecs,
          theSS_FasesvalidacionBloquesOperacionCtrlSpecs,
          theSS_timeout) {




    var ModuleName     = "fasesvalidacion_ctrl_type";
    var ModulePackages = "springnut/fasesvalidacion";
    var ModuleFullName = ModulePackages + "/" + ModuleName;



    var aMod_definer = function( theS_Overrider,
                                 theS_WithTabsCtrlType,
                                 theS_FasesvalidacionSvce,
                                 theS_FasesvalidacionFicherosInstrumentacionCtrlSpecs,
                                 theS_FasesvalidacionFicherosOperacionCtrlSpecs,
                                 theS_FasesvalidacionBloquesInstrumentacionCtrlSpecs,
                                 theS_FasesvalidacionBloquesOperacionCtrlSpecs,
                                 $timeout) {



        if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}





        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.REFRESHTIMEOUTINTERVAL = 30000;

            theToInit.RETRIEVEROWSTIMEOUT    = 100;

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
            theToInit.DEFAULTFASESVALIDACIONCTRLTITLE = "FasesvalidacionCtrlDefaultName";


            theToInit.TIPOBOLETININE              = "ine";
            theToInit.TIPOBOLETININEFORURL        = "INE";
            theToInit.TIPOBOLETINJUDICIALES       = "judiciales";
            theToInit.TIPOBOLETINJUDICIALESFORURL = "Judiciales";


            theToInit.FICHEROSOBLOQUES_FICHEROS       = "ficheros";
            theToInit.FICHEROSOBLOQUES_FICHEROSFORURL = "Ficheros";
            theToInit.FICHEROSOBLOQUES_BLOQUES        = "bloques";
            theToInit.FICHEROSOBLOQUES_BLOQUESFORURL  = "Bloques";

            theToInit.MINREFRESHTIMEOUTINTERVAL = 1000;

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









        var aFasesvalidacionCtrl_Prototype = (function() {


            var aPrototype = new theS_WithTabsCtrlType.WithTabsCtrl_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_SuperPrototype = theS_WithTabsCtrlType.WithTabsCtrl_Prototype;


            aPrototype._v_Type = "FasesvalidacionCtrl";

            aPrototype._v_Module = null;


            aPrototype._v_CtrlSpecs = null;

            aPrototype._v_TipoBoletin       = null;
            aPrototype._v_TipoBoletinForURL = null;

            aPrototype._v_FicherosObloques       = null;
            aPrototype._v_FicherosObloquesForURL = null;

            aPrototype._v_IsInstrumentacion = null;

            aPrototype._v_RefreshTimeoutInterval = null;
            aPrototype._v_RefreshTimeout         = null;
            aPrototype._v_PauseRefresh           = null;





            var _pInit = function( theTitle, theIdentifier, theRecorder, theScope,
                                   theParentCtrl,
                                   theConverter) {

                this._pInit_FasesvalidacionCtrl( theTitle, theIdentifier, theRecorder, theScope,
                                                 theParentCtrl,
                                                 theConverter);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_FasesvalidacionCtrl = function( theTitle, theIdentifier, theRecorder, theScope,
                                                       theParentCtrl,
                                                       theConverter) {

                this.pInitFromLocationURL();


                switch( this._v_LocationURL) {
                    case '/fasesvalidacionFicherosINEInstrumentacion':
                        this._v_CtrlSpecs         = theS_FasesvalidacionFicherosInstrumentacionCtrlSpecs;
                        this._v_TipoBoletin       = this.TIPOBOLETININE;
                        this._v_FicherosObloques  = this.FICHEROSOBLOQUES_FICHEROS;
                        this._v_IsInstrumentacion = true;
                        break;

                    case '/fasesvalidacionFicherosJudicialesInstrumentacion':
                        this._v_CtrlSpecs         = theS_FasesvalidacionFicherosInstrumentacionCtrlSpecs;
                        this._v_TipoBoletin       = this.TIPOBOLETINJUDICIALES;
                        this._v_FicherosObloques  = this.FICHEROSOBLOQUES_FICHEROS;
                        this._v_IsInstrumentacion = true;
                        break;

                    case '/fasesvalidacionFicherosINEOperacion':
                        this._v_CtrlSpecs         = theS_FasesvalidacionFicherosOperacionCtrlSpecs;
                        this._v_TipoBoletin       = this.TIPOBOLETININE;
                        this._v_FicherosObloques  = this.FICHEROSOBLOQUES_FICHEROS;
                        this._v_IsInstrumentacion = false;
                        break;

                    case '/fasesvalidacionFicherosJudicialesOperacion':
                        this._v_CtrlSpecs         = theS_FasesvalidacionFicherosOperacionCtrlSpecs;
                        this._v_TipoBoletin       = this.TIPOBOLETINJUDICIALES;
                        this._v_FicherosObloques  = this.FICHEROSOBLOQUES_FICHEROS;
                        this._v_IsInstrumentacion = false;
                        break;


                    case '/fasesvalidacionBloquesINEInstrumentacion':
                        this._v_CtrlSpecs         = theS_FasesvalidacionBloquesInstrumentacionCtrlSpecs;
                        this._v_CtrlSpecs         = theS_FasesvalidacionFicherosInstrumentacionCtrlSpecs; /* ACV OJO TODO 201411120940 sustituir por bloques cuando este listo */
                        this._v_TipoBoletin       = this.TIPOBOLETININE;
                        this._v_FicherosObloques  = this.FICHEROSOBLOQUES_BLOQUES;
                        this._v_IsInstrumentacion = true;
                        break;

                    case '/fasesvalidacionBloquesJudicialesInstrumentacion':
                        this._v_CtrlSpecs         = theS_FasesvalidacionBloquesInstrumentacionCtrlSpecs;
                        this._v_CtrlSpecs         = theS_FasesvalidacionFicherosInstrumentacionCtrlSpecs; /* ACV OJO TODO 201411120940 sustituir por bloques cuando este listo */
                        this._v_TipoBoletin       = this.TIPOBOLETINJUDICIALES;
                        this._v_FicherosObloques  = this.FICHEROSOBLOQUES_BLOQUES;
                        this._v_IsInstrumentacion = true;
                        break;

                    case '/fasesvalidacionBloquesINEOperacion':
                        this._v_CtrlSpecs         = theS_FasesvalidacionBloquesOperacionCtrlSpecs;
                        this._v_CtrlSpecs         = theS_FasesvalidacionFicherosOperacionCtrlSpecs; /* ACV OJO TODO 201411120940 sustituir por bloques cuando este listo */
                        this._v_TipoBoletin       = this.TIPOBOLETININE;
                        this._v_FicherosObloques  = this.FICHEROSOBLOQUES_BLOQUES;
                        this._v_IsInstrumentacion = false;
                        break;

                    case '/fasesvalidacionBloquesJudicialesOperacion':
                        this._v_CtrlSpecs         = theS_FasesvalidacionBloquesOperacionCtrlSpecs;
                        this._v_CtrlSpecs         = theS_FasesvalidacionFicherosOperacionCtrlSpecs; /* ACV OJO TODO 201411120940 sustituir por bloques cuando este listo */
                        this._v_TipoBoletin       = this.TIPOBOLETINJUDICIALES;
                        this._v_FicherosObloques  = this.FICHEROSOBLOQUES_BLOQUES;
                        this._v_IsInstrumentacion = false;
                        break;

                    default:
                        this._v_CtrlSpecs         = theS_FasesvalidacionFicherosOperacionCtrlSpecs;
                        this._v_CtrlSpecs         = theS_FasesvalidacionFicherosInstrumentacionCtrlSpecs; /* ACV OJO TODO 201411120940 sustituir por operacion cuando este listo */
                        this._v_TipoBoletin       = this.TIPOBOLETININE;
                        this._v_FicherosObloques  = this.FICHEROSOBLOQUES_FICHEROS;
                        this._v_IsInstrumentacion = false;
                        break;
                }


                this.pInitEditParametersCustomUIHandlers();




                this._v_RefreshTimeoutInterval = this.REFRESHTIMEOUTINTERVAL;
                if( this._v_RefreshTimeoutInterval < this.MINREFRESHTIMEOUTINTERVAL) {
                    this._v_RefreshTimeoutInterval = this.MINREFRESHTIMEOUTINTERVAL;
                }
                this._v_RefreshTimeout         = null;
                this._v_PauseRefresh           = false;


                this._v_TipoBoletinForURL = this._v_TipoBoletin;
                if( this._v_TipoBoletin == this.TIPOBOLETININE) {
                    this._v_TipoBoletinForURL = this.TIPOBOLETININEFORURL;
                }
                else {
                    if( this._v_TipoBoletin == this.TIPOBOLETINJUDICIALES) {
                        this._v_TipoBoletinForURL = this.TIPOBOLETINJUDICIALESFORURL;
                    }
                }


                this._v_FicherosObloquesForURL = this._v_FicherosObloques;
                if( this._v_FicherosObloques == this.FICHEROSOBLOQUES_FICHEROS) {
                    this._v_FicherosObloquesForURL = this.FICHEROSOBLOQUES_FICHEROSFORURL;
                }
                else {
                    if( this._v_FicherosObloques == this.FICHEROSOBLOQUES_BLOQUES) {
                        this._v_FicherosObloquesForURL = this.FICHEROSOBLOQUES_BLOQUESFORURL;
                    }
                }



                /* Delegate on super prototype initialization */
                aPrototype._v_SuperPrototype._pInit_WithTabsCtrl.apply( this, [
                    ( this._v_CtrlSpecs.FASESVALIDACION_PAGEHEADER  + " " +this._v_FicherosObloquesForURL + " " + this._v_TipoBoletinForURL ) || theTitle || this.DEFAULTFASESVALIDACIONCTRLTITLE,
                    theIdentifier, theRecorder, theScope,
                    this._v_CtrlSpecs.FASESVALIDACION_DOMIDPREFIX,
                    theParentCtrl,
                    theConverter,
                    this._v_CtrlSpecs.GRIDPARAMETERS,
                    this._v_CtrlSpecs.EDITPARAMETERS,
                    this._v_CtrlSpecs.CREATEPARAMETERS,
                    this._v_CtrlSpecs.WIRES,
                    this._v_CtrlSpecs.GRIDNAMES_INITIALLOAD,
                    this._v_CtrlSpecs.EDITORNAMES_INITIALLOAD,
                    null,
                    this._v_CtrlSpecs.TOPTABSBAR_ENTRIES,
                    this._v_CtrlSpecs.TOPTABSBAR_INITIALLYSELECTEDTAB,
                    this._v_CtrlSpecs.TOPTABSBAR_TABSFIXEDINITIAL
                ]);

                this._v_Prototype = aPrototype;
                this._v_Type      = this._v_Prototype._v_Type;
                this._v_Module    = aPrototype._v_Module;

                if( this._v_TipoBoletinForURL){}/* CQT */
                if( this._v_FicherosObloquesForURL){}/* CQT */
            };
            if( _pInit_FasesvalidacionCtrl){}/* CQT */
            aPrototype._pInit_FasesvalidacionCtrl = _pInit_FasesvalidacionCtrl;








            var pDestroy = function() {

                this.pPauseRefresh();

                this._v_CtrlSpecs = null;

                this._v_TipoBoletin       = null;
                this._v_TipoBoletinForURL = null;

                this._v_FicherosObloques       = null;
                this._v_FicherosObloquesForURL = null;

                this._v_IsInstrumentacion = null;

                aPrototype._v_SuperPrototype.pDestroy.apply( this);
            };
            if( pDestroy){}/* CQT */
            aPrototype.pDestroy = pDestroy;










            var pInitEditParametersCustomUIHandlers = function() {
                if( !this._v_CtrlSpecs) {
                    return;
                }

                if( !this._v_CtrlSpecs.EDITPARAMETERS) {
                    return;
                }

                var someUIHandlersByName = {
                    "fUILanzarClickListener":                this.fUI_CustomUIHandler_LanzarClickListener,
                    "fUICancelarLanzarClickListener":        this.fUI_CustomUIHandler_CancelarLanzarClickListener,
                    "fUIConfirmarLanzarForzarClickListener": this.fUI_CustomUIHandler_ConfirmarLanzarForzarClickListener
                };

                var aCriterioYUltimaFaseDeFicheroEditParameters = this._v_CtrlSpecs.EDITPARAMETERS[ this._v_CtrlSpecs.CRITERIOYULTIMAFASEDEFICHERO_NAME];
                if( aCriterioYUltimaFaseDeFicheroEditParameters) {
                    this.pInitEditParametersCustomUIHandlers_inFieldSpecs( someUIHandlersByName, aCriterioYUltimaFaseDeFicheroEditParameters[ "fields"]);
                }
            };
            if( pInitEditParametersCustomUIHandlers){}/* CQT */
            aPrototype.pInitEditParametersCustomUIHandlers = pInitEditParametersCustomUIHandlers;








            var pInitEditParametersCustomUIHandlers_inFieldSpecs = function( theUIHandlersByName, theFieldSpecs) {

                if( !theUIHandlersByName) {
                    return;
                }

                if( !theFieldSpecs) {
                    return;
                }

                var aNumFieldSpecs = theFieldSpecs.length;
                if( !aNumFieldSpecs) {
                    return;
                }

                for( var aFieldSpecIdx=0; aFieldSpecIdx < aNumFieldSpecs; aFieldSpecIdx++) {
                    var aFieldSpec = theFieldSpecs[ aFieldSpecIdx];
                    if( aFieldSpec) {

                        var someCustomUIHandlerSpecs = aFieldSpec[ "customUIHandlers"];
                        if( someCustomUIHandlerSpecs) {

                            var someUIHandlerKeys = Object.keys( someCustomUIHandlerSpecs);
                            var aNumUIHandlerKeys = someUIHandlerKeys.length;
                            for( var aUIHandlerKeyIdx=0; aUIHandlerKeyIdx < aNumUIHandlerKeys; aUIHandlerKeyIdx++) {

                                var aUIHandlerKey = someUIHandlerKeys[ aUIHandlerKeyIdx];

                                var aUIHandler = theUIHandlersByName[ aUIHandlerKey];
                                if( aUIHandler && ( typeof aUIHandler == "function")) {

                                    someCustomUIHandlerSpecs[ aUIHandlerKey] = aUIHandler;
                                }
                            }
                        }
                    }
                }
            };
            if( pInitEditParametersCustomUIHandlers_inFieldSpecs){}/* CQT */
            aPrototype.pInitEditParametersCustomUIHandlers_inFieldSpecs = pInitEditParametersCustomUIHandlers_inFieldSpecs;










            var fUI_CustomUIHandler_LanzarClickListener = function( theEditorCtrl) {

                if( !theEditorCtrl) {
                    return true;
                }

                var someFields = theEditorCtrl.fFields();
                if( !someFields) {
                    return true;
                }

                var anIdFichero = someFields[ 'idFichero'];
                if( !anIdFichero) {
                    return true;
                }

                var anIdCriterio = someFields[ 'crId'];
                if( !anIdCriterio) {
                    return true;
                }

                var aParentCtrl = theEditorCtrl.fParentCtrl();
                if( !aParentCtrl) {
                    return true;
                }

                var aFasesvalidacionSvce = aParentCtrl.fFasesvalidacionSvce();
                if( !aFasesvalidacionSvce) {
                    return true;
                }

                aFasesvalidacionSvce.fprDo_Fasesvalidacion_LanzarValidacionAvisosYerrores( anIdFichero, anIdCriterio)
                    .then(
                    function( theLanzarResponse) {

                        if( theLanzarResponse[ "vTipo"] == "InformeEstadoValidaciones") {

                            var aFicheroOBloque = ( aParentCtrl._v_FicherosObloquesForURL == aParentCtrl.FICHEROSOBLOQUES_FICHEROSFORURL) ? "Fichero" : "Bloque";

                            var aCriteriosYUltimasFasesGrid = aParentCtrl.fGridCtrlNamed( "ListaCriteriosYUltimasFasesDe" + aFicheroOBloque);
                            if( aCriteriosYUltimasFasesGrid) {
                                aCriteriosYUltimasFasesGrid.fprDo_RetrieveRowsAgain();
                            }

                            console.log( "\n\nfUILanzarClickListener LAUNCHED\n\n\n");
                            return;
                        }

                        if( theLanzarResponse[ "vTipo"] == "FicheroYFasesrealizadas") {
                            console.log( "\n\nfUILanzarClickListener NOT LAUNCHED: FicheroYFasesrealizadas\n\n\n");

                            if( !theEditorCtrl.fWasDestroyed()) {

                                var otherFields = theEditorCtrl.fFields();
                                if( !otherFields) {
                                    return;
                                }
                                otherFields[ "ConfirmarLanzarForzar"] = true;
                            }
                        }

                    }
                )
                    ["catch"]( function( theError) {
                    if( theError){}/* CQT */
                    console.log( "\n\nfUILanzarClickListener ERROR LAUNCHING\n\n\n");
                });

                return true;
            };
            if( fUI_CustomUIHandler_LanzarClickListener){}/* CQT */
            aPrototype.fUI_CustomUIHandler_LanzarClickListener = fUI_CustomUIHandler_LanzarClickListener;







            var fUI_CustomUIHandler_CancelarLanzarClickListener = function( theEditorCtrl) {

                if( !theEditorCtrl) {
                    return true;
                }

                var someFields = theEditorCtrl.fFields();
                if( !someFields) {
                    return true;
                }

                someFields[ "ConfirmarLanzarForzar"] = false;

                return true;
            };
            if( fUI_CustomUIHandler_CancelarLanzarClickListener){}/* CQT */
            aPrototype.fUI_CustomUIHandler_CancelarLanzarClickListener = fUI_CustomUIHandler_CancelarLanzarClickListener;








            var fUI_CustomUIHandler_ConfirmarLanzarForzarClickListener = function( theEditorCtrl) {

                if( !theEditorCtrl) {
                    return true;
                }

                var someFields = theEditorCtrl.fFields();
                if( !someFields) {
                    return true;
                }

                someFields[ "ConfirmarLanzarForzar"] = false;

                var anIdFichero = someFields[ 'idFichero'];
                if( !anIdFichero) {
                    return true;
                }

                var anIdCriterio = someFields[ 'crId'];
                if( !anIdCriterio) {
                    return true;
                }

                var aParentCtrl = theEditorCtrl.fParentCtrl();
                if( !aParentCtrl) {
                    return true;
                }

                var aFasesvalidacionSvce = aParentCtrl.fFasesvalidacionSvce();
                if( !aFasesvalidacionSvce) {
                    return true;
                }

                aFasesvalidacionSvce.fprDo_Fasesvalidacion_LanzarForzarValidacionAvisosYerrores( anIdFichero, anIdCriterio)
                    .then(
                    function( theLanzarResponse) {

                        if( theLanzarResponse[ "vTipo"] == "InformeEstadoValidaciones") {
                            console.log( "\n\nfUIConfirmarLanzarForzarClickListener LAUNCHED\n\n\n");
                        }
                        else {
                            console.log( "\n\nfUIConfirmarLanzarForzarClickListener NOT LAUNCHED\n\n\n");
                        }
                    }
                )
                    ["catch"]( function( theError) {
                    if( theError){}/* CQT */
                    console.log( "\n\nfUIConfirmarLanzarForzarClickListener ERROR LAUNCHING\n\n\n");
                });

                return true;
            };
            if( fUI_CustomUIHandler_ConfirmarLanzarForzarClickListener){}/* CQT */
            aPrototype.fUI_CustomUIHandler_ConfirmarLanzarForzarClickListener = fUI_CustomUIHandler_ConfirmarLanzarForzarClickListener;















            var pPauseRefresh = function() {

                if( this._v_RefreshTimeout) {
                    clearTimeout( this._v_RefreshTimeout);
                }

                this._v_PauseRefresh = true;
            };
            if( pPauseRefresh){}/* CQT */
            aPrototype.pPauseRefresh = pPauseRefresh;







            var pStartRefresh = function() {

                this._v_RefreshTimeout = setTimeout( this.fNewTimeoutHandler(), this._v_RefreshTimeoutInterval);
            };
            if( pStartRefresh){}/* CQT */
            aPrototype.pStartRefresh = pStartRefresh;







            var fNewTimeoutHandler = function() {

                var aThis = this;
                var aTimeoutHandler = (function() {
                    var aThis_here = aThis;
                    return (function() {

                        aThis_here._v_RefreshTimeout = null;
                        if( aThis_here._v_PauseRefresh) {
                            return;
                        }

                        var aFicheroOBloque = ( aThis_here._v_FicherosObloquesForURL == aThis_here.FICHEROSOBLOQUES_FICHEROSFORURL) ? "Fichero" : "Bloque";

                        var aCriteriosYUltimasFasesGrid = aThis_here.fGridCtrlNamed( "ListaCriteriosYUltimasFasesDe" + aFicheroOBloque);
                        var aHistoriaFasesGrid          = aThis_here.fGridCtrlNamed( "ListaHistoriaFasesDe"          + aFicheroOBloque);

                        if( !aCriteriosYUltimasFasesGrid && !aHistoriaFasesGrid) {
                            return;
                        }


                        if( aCriteriosYUltimasFasesGrid) {
                            if( !aCriteriosYUltimasFasesGrid._v_LastRetrieval) {
                                aCriteriosYUltimasFasesGrid = null;
                            }
                        }

                        if( aHistoriaFasesGrid) {
                            if( !aHistoriaFasesGrid._v_LastRetrieval) {
                                aHistoriaFasesGrid = null;
                            }
                        }

                        $timeout(
                            function() {

                                if( aCriteriosYUltimasFasesGrid && aCriteriosYUltimasFasesGrid) {

                                    aCriteriosYUltimasFasesGrid.fprDo_RetrieveRowsAgain()
                                        .then( function() {
                                            aHistoriaFasesGrid.fprDo_RetrieveRowsAgain();
                                        });

                                    return;
                                }

                                if( aCriteriosYUltimasFasesGrid) {
                                    aCriteriosYUltimasFasesGrid.fprDo_RetrieveRowsAgain();
                                }

                                if( aHistoriaFasesGrid) {
                                    aHistoriaFasesGrid.fprDo_RetrieveRowsAgain();
                                }
                            },
                            aThis_here.RETRIEVEROWSTIMEOUT
                        );

                        aThis_here._v_RefreshTimeout = setTimeout( aThis_here.fNewTimeoutHandler(), aThis_here._v_RefreshTimeoutInterval)
                    })
                })();
                if( aTimeoutHandler){}/* CQT */

                return aTimeoutHandler;
            };
            if( fNewTimeoutHandler){}/* CQT */
            aPrototype.fNewTimeoutHandler = fNewTimeoutHandler;







            var pInitialObtainConverter = function() {
            };
            if( pInitialObtainConverter){}/* CQT */
            aPrototype.pInitialObtainConverter = pInitialObtainConverter;











            var pInitStaticTabsContent = function( ) {

                if( !this._v_IsInstrumentacion) {
                    return;
                }

                if( this._v_StaticTabs) {
                    return;
                }


                if( !this._v_CtrlSpecs) {
                    return;
                }



                aPrototype._v_SuperPrototype.pInitStaticTabsContent.apply( this);


                if( !this._v_StaticTabs ) {
                    this._v_StaticTabs  = { };
                }



                var aNumTabsBarEntries = this._v_CtrlSpecs.TOPTABSBAR_ENTRIES.length;
                for( var aTabsBarEntryIdx=0; aTabsBarEntryIdx < aNumTabsBarEntries; aTabsBarEntryIdx++) {

                    var aTabsBarEntry = this._v_CtrlSpecs.TOPTABSBAR_ENTRIES[ aTabsBarEntryIdx];
                    if( aTabsBarEntry) {

                        if( aTabsBarEntry[ "static"]) {

                            switch( aTabsBarEntry[ "value"]) {

                                case this._v_CtrlSpecs.STATICTAB_GRIDSPECS_NAME:
                                    if( this._v_GridSpecs) {
                                        this._v_StaticTabs[ this._v_CtrlSpecs.STATICTAB_GRIDSPECS_NAME]   = JSON.stringify( this._v_GridSpecs, null, 4);
                                    }
                                    else {
                                        this._v_StaticTabs[ this._v_CtrlSpecs.STATICTAB_GRIDSPECS_NAME]   = null;
                                    }
                                    break;


                                case this._v_CtrlSpecs.STATICTAB_EDITORSPECS_NAME:
                                    if( this._v_EditorSpecs) {
                                        this._v_StaticTabs[ this._v_CtrlSpecs.STATICTAB_EDITORSPECS_NAME]   = JSON.stringify( this._v_EditorSpecs, null, 4);
                                    }
                                    else {
                                        this._v_StaticTabs[ this._v_CtrlSpecs.STATICTAB_EDITORSPECS_NAME]   = null;
                                    }
                                    break;


                                case this._v_CtrlSpecs.STATICTAB_CREATORSPECS_NAME:
                                    if( this._v_CreatorSpecs) {
                                        this._v_StaticTabs[ this._v_CtrlSpecs.STATICTAB_CREATORSPECS_NAME]   = JSON.stringify( this._v_CreatorSpecs, null, 4);
                                    }
                                    else {
                                        this._v_StaticTabs[ this._v_CtrlSpecs.STATICTAB_CREATORSPECS_NAME]   = null;
                                    }
                                    break;


                                case this._v_CtrlSpecs.STATICTAB_WIRESPECS_NAME:
                                    if( this._v_WireSpecs) {
                                        this._v_StaticTabs[ this._v_CtrlSpecs.STATICTAB_WIRESPECS_NAME]   = JSON.stringify( this._v_WireSpecs, null, 4);
                                    }
                                    else {
                                        this._v_StaticTabs[ this._v_CtrlSpecs.STATICTAB_WIRESPECS_NAME]   = null;
                                    }
                                    break;


                                case this._v_CtrlSpecs.STATICTAB_SVCESPECS_NAME:
                                    var aSvceSpec = null;

                                    var aWithTabsSvce = this.fFasesvalidacionSvce();
                                    if( aWithTabsSvce) {
                                        if( aWithTabsSvce.fActiveOperationSpecs) {
                                            var someOperationSpecs = aWithTabsSvce.fActiveOperationSpecs();
                                            if( someOperationSpecs) {
                                                aSvceSpec = JSON.stringify( someOperationSpecs, null, 4);
                                            }
                                        }
                                    }

                                    this._v_StaticTabs[ this._v_CtrlSpecs.STATICTAB_SVCESPECS_NAME]   = aSvceSpec;

                            }
                        }
                    }
                }
            };
            if( pInitStaticTabsContent){}/* CQT */
            aPrototype.pInitStaticTabsContent = pInitStaticTabsContent;










            var pSetGridSpecsAutoSelectIndexFromLocationQuery = function() {
                if( !this._v_IsInstrumentacion) {
                    return;
                }

                aPrototype._v_SuperPrototype.pSetGridSpecsAutoSelectIndexFromLocationQuery.apply( this);
            };
            if( pSetGridSpecsAutoSelectIndexFromLocationQuery){}/* CQT */
            aPrototype.pSetGridSpecsAutoSelectIndexFromLocationQuery = pSetGridSpecsAutoSelectIndexFromLocationQuery;






            var pSetInitialLoadGridNamesFromLocationQuery = function() {
                if( !this._v_IsInstrumentacion) {
                    return;
                }

                aPrototype._v_SuperPrototype.pSetInitialLoadGridNamesFromLocationQuery.apply( this);
            };
            if( pSetInitialLoadGridNamesFromLocationQuery){}/* CQT */
            aPrototype.pSetInitialLoadGridNamesFromLocationQuery = pSetInitialLoadGridNamesFromLocationQuery;






            var pSetEditorSpecsAutoEditFromLocationQuery = function() {
                if( !this._v_IsInstrumentacion) {
                    return;
                }

                aPrototype._v_SuperPrototype.pSetEditorSpecsAutoEditFromLocationQuery.apply( this);
            };
            if( pSetEditorSpecsAutoEditFromLocationQuery){}/* CQT */
            aPrototype.pSetEditorSpecsAutoEditFromLocationQuery = pSetEditorSpecsAutoEditFromLocationQuery;







            var fFasesvalidacionSvce = function( ) {

                return theS_FasesvalidacionSvce;
            };
            if( fFasesvalidacionSvce){}/* CQT */
            aPrototype.fFasesvalidacionSvce = fFasesvalidacionSvce;










            var fprDo_CheckSessionLoggedAuthenticated = function() {
                return this.fNewDeferredResolveWithNothingPromise();
            };
            if( fprDo_CheckSessionLoggedAuthenticated){}/* CQT */
            aPrototype.fprDo_CheckSessionLoggedAuthenticated = fprDo_CheckSessionLoggedAuthenticated;









            var fprDo_InitialExtra = function() {

                this.pObtainConverter();

                this.pStartRefresh();

                return aPrototype._v_SuperPrototype.fprDo_InitialExtra.apply( this);

            };
            if( fprDo_InitialExtra){}/* CQT */
            aPrototype.fprDo_InitialExtra = fprDo_InitialExtra;







            var fprDo_Initial = function() {

                return aPrototype._v_SuperPrototype.fprDo_Initial.apply( this);

            };
            if( fprDo_Initial){}/* CQT */
            aPrototype.fprDo_Initial = fprDo_Initial;









            return aPrototype;

        })();




        var FasesvalidacionCtrl_Constructor = function( theTitle, theIdentifier, theRecorder, theScope,
                                                        theParentCtrl,
                                                        theConverter) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_WithTabsCtrlType.WithTabsCtrl_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;
            this._v_Module = null;

            this._v_CtrlSpecs         = null;

            this._v_TipoBoletin       = null;
            this._v_TipoBoletinForURL = null;

            this._v_IsInstrumentacion = null;

            this._v_RefreshTimeoutInterval = null;
            this._v_RefreshTimeout         = null;
            this._v_PauseRefresh           = null;

            this._pInit_FasesvalidacionCtrl( theTitle, theIdentifier, theRecorder, theScope,
                                             theParentCtrl,
                                             theConverter);
        };
        FasesvalidacionCtrl_Constructor.prototype = aFasesvalidacionCtrl_Prototype;





        var FasesvalidacionCtrl_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_WithTabsCtrlType.WithTabsCtrl_Prototype;

            this._v_Prototype = aFasesvalidacionCtrl_Prototype;
            this._v_Type      = null;
            this._v_Module    = null;

            this._v_CtrlSpecs         = null;

            this._v_TipoBoletin       = null;
            this._v_TipoBoletinForURL = null;

            this._v_IsInstrumentacion = null;

            this._v_RefreshTimeoutInterval = null;
            this._v_RefreshTimeout         = null;
            this._v_PauseRefresh           = null;
        };
        FasesvalidacionCtrl_SuperPrototypeConstructor.prototype = aFasesvalidacionCtrl_Prototype;



        var aModule = {
            "FasesvalidacionCtrl_Prototype": aFasesvalidacionCtrl_Prototype,
            "FasesvalidacionCtrl_Constructor": FasesvalidacionCtrl_Constructor,
            "FasesvalidacionCtrl_SuperPrototypeConstructor": FasesvalidacionCtrl_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aFasesvalidacionCtrl_Prototype._v_Module = aModule;





        return aModule;
    };







    var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
    if( !anExistingModule) {

        var aModule = aMod_definer(
            theSS_Overrider,
            theSS_WithTabsCtrlType,
            theSS_FasesvalidacionSvce,
            theSS_FasesvalidacionFicherosInstrumentacionCtrlSpecs,
            theSS_FasesvalidacionFicherosOperacionCtrlSpecs,
            theSS_FasesvalidacionBloquesInstrumentacionCtrlSpecs,
            theSS_FasesvalidacionBloquesOperacionCtrlSpecs,
            theSS_timeout
        );
        anExistingModule = aModule;

        theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
    }






    return anExistingModule;

}]);







