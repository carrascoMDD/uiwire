'use strict';

/*
 * trabajos_ctrl_type.js
 *
 * Creado @author Antonio Carrasco Valero 201411280008
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






angular.module("importacionficherosasciiTypes").factory("ImportacionficherosasciiCtrlType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "CommonspringnutCtrlType",
    "TiposTrabajos",
    "TrabajosSvce",
    "ImportacionficherosasciiSvce",
    "ImportacionficherosasciiCtrlSpecsFactory",
function( theSS_typesregistry,
          theSS_Overrider,
          theSS_CommonspringnutCtrlType,
          theSS_TiposTrabajos,
          theSS_TrabajosSvce,
          theSS_ImportacionficherosasciiSvce,
          theSS_ImportacionficherosasciiCtrlSpecsFactory) {




        var ModuleName     = "trabajos_ctrl_type";
        var ModulePackages = "springnut/trabajos";
        var ModuleFullName = ModulePackages + "/" + ModuleName;



        var aMod_definer = function( theS_Overrider,
                                     theS_CommonspringnutCtrlType,
                                     theS_TiposTrabajos,
                                     theS_TrabajosSvce,
                                     theS_ImportacionficherosasciiSvce,
                                     theS_ImportacionficherosasciiCtrlSpecsFactory) {



            if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}





            var pgInitWithModuleVariations = function( theToInit) {

                if( !theToInit) {
                    return;
                }


                theToInit.MAXFICHEROLEN = 100 * 1000000;
                theToInit.MAXFICHEROLEN =       1000000;


                theToInit.CONFICHERO_MENSAJE = "Ha seleccionado un fichero para importar como ASCII";
                theToInit.CONFICHERO_INFORME = "Pulse el botón 'Crear' para enviarlo al servidor";

                theToInit.SINFICHERO_MENSAJE = "No ha subido todavía ningun fichero ASCII";
                theToInit.SINFICHERO_INFORME = "Puede pulsar el botón 'Seleccione un fichero ASCII a subir'";


                theToInit.FICHERODEMASIADOLARGO_MENSAJE = "Atención ERROR! El fichero seleccinado es demasiado largo";

                theToInit.FICHERODEMASIADOLARGO_INFORME = "Solo se permite importar ficheros ASCII hasta un tamaño máximo de ";

                theToInit.RECORDTYPE_TRABAJODATOS  = "TrabajoDatos";


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

                theToInit.DEFAULTIMPORTACIONFICHEROSASCIICTRLTITLE = "ImportacionficherosasciiCtrlDefaultName";


                theToInit.UPLOADER_CREATORNAME = "CrearImportacionficheroascii";


                theToInit.FIELDNAME_NOTFORFORM_NombreFichero   = "NOTFORFORM_NombreFichero";
                theToInit.FIELDNAME_NOTFORFORM_TipoFichero     = "NOTFORFORM_TipoFichero";
                theToInit.FIELDNAME_NOTFORFORM_LongitudFichero = "NOTFORFORM_LongitudFichero";
                theToInit.FIELDNAME_NOTFORFORM_FechaFichero    = "NOTFORFORM_FechaFichero";


                theToInit.RELEVANTERRORTYPES_CREATE_IMPORTACIONFICHEROASCII = [
                    "HitServerReport"
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









            var aImportacionficherosasciiCtrl_Prototype = (function() {


                var aPrototype = new theS_CommonspringnutCtrlType.CommonspringnutCtrl_SuperPrototypeConstructor();

                pgInitFromModuleConstants( aPrototype);


                aPrototype._v_SuperPrototype = theS_CommonspringnutCtrlType.CommonspringnutCtrl_Prototype;


                aPrototype._v_Type = "ImportacionficherosasciiCtrl";

                aPrototype._v_Module = null;


                aPrototype._v_TipoTrabajo       = null;
                aPrototype._v_TipoTrabajoForURL = null;

                aPrototype._v_TipoBoletin       = null;
                aPrototype._v_TipoBoletinForURL = null;

                aPrototype._v_IsInstrumentacion = null;

                aPrototype._v_ContenidoDeFicheroASubir = null;

                aPrototype._v_FicheroASubir          = null;
                aPrototype._v_FicheroASubir_Nombre   = null;
                aPrototype._v_FicheroASubir_Longitud = null;
                aPrototype._v_FicheroASubir_Tipo     = null;
                aPrototype._v_FicheroASubir_Fecha    = null;




                var _pInit = function( theTitle, theIdentifier, theRecorder, theScope,
                                       theParentCtrl,
                                       theConverter) {

                    this._pInit_ImportacionficherosasciiCtrl( theTitle, theIdentifier, theRecorder, theScope,
                        theParentCtrl,
                        theConverter);
                };
                if( _pInit){}/* CQT */
                aPrototype._pInit = _pInit;






                var _pInit_ImportacionficherosasciiCtrl = function( theTitle, theIdentifier, theRecorder, theScope,
                                                    theParentCtrl,
                                                    theConverter) {

                    this._v_TipoTrabajo       = theS_TiposTrabajos.TIPOTRABAJO_ImportacionFicherosASCII;
                    this._v_TipoBoletin       = "";
                    this._v_IsInstrumentacion = false;


                    this.pInitFromLocationURL();

                    if( this._v_LocationURL) {

                        var someTiposTrabajos = theS_TiposTrabajos.TIPOSTRABAJOS;
                        if( someTiposTrabajos) {

                            var aNumWhens = someTiposTrabajos.length;
                            for( var aWhenIdx= 0; aWhenIdx < aNumWhens; aWhenIdx++) {

                                var aWhen = someTiposTrabajos[ aWhenIdx];
                                if( !aWhen) {
                                    continue;
                                }

                                var aTipoTrabajo = aWhen[ "tTra"];
                                if( !aTipoTrabajo) {
                                    continue;
                                }

                                var aRouteTo = aWhen[ "routeTo"];
                                if( !aRouteTo) {
                                    continue;
                                }

                                var aPath = "/trabajos_tTra_" + aTipoTrabajo;

                                var aTipoBoletin = aWhen[ "tBol"];
                                if( aTipoBoletin) {
                                    aPath += "_tBol_" + aTipoBoletin
                                }
                                else {
                                    aTipoBoletin = null;
                                }

                                if( this._v_LocationURL == aPath) {
                                    this._v_TipoBoletin = aTipoBoletin;
                                    break;
                                }
                            }
                        }
                    }

                    if( !this._v_TipoBoletin) {
                        this._v_TipoBoletin = theS_TiposTrabajos.TIPOBOLETIN_INE;
                    }

                    this._v_TipoTrabajoForURL = this._v_TipoTrabajo;
                    this._v_TipoBoletinForURL = this._v_TipoBoletin;



                    var aCtrlSpecs = theS_ImportacionficherosasciiCtrlSpecsFactory.fsCtrlSpecs( this._v_IsInstrumentacion);


                    /* Delegate on super prototype initialization */
                    aPrototype._v_SuperPrototype._pInit_CommonspringnutCtrl.apply( this, [
                        aCtrlSpecs.IMPORTACIONFICHEROSASCII_PAGEHEADER || theTitle || this.DEFAULTIMPORTACIONFICHEROSASCIICTRLTITLE,
                        theIdentifier, theRecorder, theScope,
                        theParentCtrl,
                        theConverter,
                        aCtrlSpecs
                    ]);


                    this._v_Prototype = aPrototype;
                    this._v_Type      = this._v_Prototype._v_Type;
                    this._v_Module    = aPrototype._v_Module;





                    this._v_ContenidoDeFicheroASubir = null;

                    this._v_FicheroASubir          = null;
                    this._v_FicheroASubir_Nombre   = null;
                    this._v_FicheroASubir_Longitud = null;
                    this._v_FicheroASubir_Tipo     = null;
                    this._v_FicheroASubir_Fecha    = null;


                    if( this._v_TipoTrabajoForURL){}/* CQT */
                    if( this._v_TipoBoletinForURL){}/* CQT */


                    if( this._v_FicheroASubir_Longitud){}/* CQT */
                    if( this._v_FicheroASubir_Tipo){}/* CQT */
                    if( this._v_FicheroASubir_Fecha){}/* CQT */
                };
                if( _pInit_ImportacionficherosasciiCtrl){}/* CQT */
                aPrototype._pInit_ImportacionficherosasciiCtrl = _pInit_ImportacionficherosasciiCtrl;








                var pDestroy = function() {

                    this._v_TipoBoletin       = null;
                    this._v_TipoBoletinForURL = null;

                    this._v_IsInstrumentacion = null;

                    this.pUnRegisterActionHappenedListener();

                    aPrototype._v_SuperPrototype.pDestroy.apply( this);
                };
                if( pDestroy){}/* CQT */
                aPrototype.pDestroy = pDestroy;













                var pInitialObtainConverter = function() {
                };
                if( pInitialObtainConverter){}/* CQT */
                aPrototype.pInitialObtainConverter = pInitialObtainConverter;














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







                var fTrabajosSvce = function( ) {

                    return theS_TrabajosSvce;
                };
                if( fTrabajosSvce){}/* CQT */
                aPrototype.fTrabajosSvce = fTrabajosSvce;








                var fImportacionficherosasciiSvce = function( ) {

                    return theS_ImportacionficherosasciiSvce;
                };
                if( fImportacionficherosasciiSvce){}/* CQT */
                aPrototype.fImportacionficherosasciiSvce = fImportacionficherosasciiSvce;









                var fprDo_CheckSessionLoggedAuthenticated = function() {
                    return this.fNewDeferredResolveWithNothingPromise();
                };
                if( fprDo_CheckSessionLoggedAuthenticated){}/* CQT */
                aPrototype.fprDo_CheckSessionLoggedAuthenticated = fprDo_CheckSessionLoggedAuthenticated;








                var pInitStaticTabsContent = function( ) {

                    aPrototype._v_SuperPrototype.pInitStaticTabsContent.apply( this);

                    if( !this._v_StaticTabs) {
                        return;
                    }

                    if( !this._v_CtrlSpecs) {
                        return;
                    }

                    if( !this._v_IsInstrumentacion) {
                        return;
                    }

                    if( !this._v_CtrlSpecs.STATICTAB_SVCESPECS_NAME) {
                        return;
                    }

                    var aSvceSpec = null;

                    var aAdminoperadoresSvce = this.fTrabajosSvce();
                    if( aAdminoperadoresSvce) {
                        if( aAdminoperadoresSvce.fActiveOperationSpecs) {
                            var someOperationSpecs = aAdminoperadoresSvce.fActiveOperationSpecs();
                            if( someOperationSpecs) {
                                aSvceSpec = JSON.stringify( someOperationSpecs, null, 4);
                            }
                        }
                    }
                    this._v_StaticTabs[ this._v_CtrlSpecs.STATICTAB_SVCESPECS_NAME] = aSvceSpec;
                };
                if( pInitStaticTabsContent){}/* CQT */
                aPrototype.pInitStaticTabsContent = pInitStaticTabsContent;








                var fprDo_InitialExtra = function() {

                    this.pObtainConverter();

                    var aPromise = aPrototype._v_SuperPrototype.fprDo_InitialExtra.apply( this);
                    if( aPromise){}/* CQT */

                    return aPromise;
                };
                if( fprDo_InitialExtra){}/* CQT */
                aPrototype.fprDo_InitialExtra = fprDo_InitialExtra;






                var fprDo_Initial = function() {

                    var aPromise = this.fprDo_DisableUIhandlers().
                        then( this.fprDo_CheckSessionLoggedAuthenticated.bind( this)).
                        then( this.fprDo_InitialExtra.bind( this)).
                        then( this.fprDo_LoadInitialGrids.bind( this)).
                        then( this.fprDo_LoadInitialEditors.bind( this))

                        ['finally']( this.fprDo_EnableUIhandlers.bind( this));

                    if( aPromise){}/* CQT */

                    return aPromise;
                };
                if( fprDo_Initial){}/* CQT */
                aPrototype.fprDo_Initial = fprDo_Initial;









                var pInitEditParametersCustomUIHandlers = function() {
                    if( !this._v_CtrlSpecs) {
                        return;
                    }

                    if( !this._v_CtrlSpecs.EDITPARAMETERS) {
                        return;
                    }

                    var someUIHandlersByName = {
                        "fUICrearClickListener":                this.fUI_CustomUIHandler_CrearClickListener,
                        "fUICancelarCrearClickListener":        this.fUI_CustomUIHandler_CancelarCrearClickListener,
                        "fUIConfirmarCrearForzarClickListener": this.fUI_CustomUIHandler_ConfirmarCrearForzarClickListener
                    };

                    var aCrearImportacionficheroasciiParameters = this._v_CtrlSpecs.CREATEPARAMETERS[ "CrearImportacionficheroascii"];
                    if( aCrearImportacionficheroasciiParameters) {
                        this.pInitEditParametersCustomUIHandlers_inFieldSpecs( someUIHandlersByName, aCrearImportacionficheroasciiParameters[ "fields"]);
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












                var fRegisterNewCreatorCtrl = function( theCreatorCtrl, theNombreCreator) {

                    var aRegistered = aPrototype._v_SuperPrototype.fRegisterNewCreatorCtrl.apply( this, [ theCreatorCtrl, theNombreCreator]);
                    if( !aRegistered) {
                        return false;
                    }

                    var anExistingCreatorCtrl = this.fCreatorCtrlNamed( theNombreCreator);
                    if( !anExistingCreatorCtrl) {
                        return false;
                    }

                    if( !( theNombreCreator == this.UPLOADER_CREATORNAME)) {
                        return true;
                    }

                    var someFields = anExistingCreatorCtrl.fFields();
                    if( !someFields) {
                        return false;
                    }

                    this.pUploaderCreatorFieldSetValue( theS_ImportacionficherosasciiSvce.FIELDNAME_theTipoBoletin, this._v_TipoBoletinForURL);

                    return true;
                };
                if( fRegisterNewCreatorCtrl){}/* CQT */
                aPrototype.fRegisterNewCreatorCtrl = fRegisterNewCreatorCtrl;












                var pUploaderCreatorFieldSetValue = function( theFieldName, theValue) {

                    if( !theFieldName) {
                        return;
                    }

                    var anExistingCreatorCtrl = this.fUploaderCreator();
                    if( !anExistingCreatorCtrl) {
                        return;
                    }

                    anExistingCreatorCtrl.pForceFieldValue( theFieldName, theValue);
                };
                if( pUploaderCreatorFieldSetValue){}/* CQT */
                aPrototype.pUploaderCreatorFieldSetValue = pUploaderCreatorFieldSetValue;







                var fUploaderCreator = function() {

                    var anExistingCreatorCtrl = this.fCreatorCtrlNamed( this.UPLOADER_CREATORNAME);
                    if( anExistingCreatorCtrl){}/* CQT */

                    return anExistingCreatorCtrl;
                };
                if( fUploaderCreator){}/* CQT */
                aPrototype.fUploaderCreator = fUploaderCreator;









                var fUI_CustomUIHandler_SubirContenidoFicheroASCII = function() {

                    this.pUploaderCreatorFieldSetValue( theS_ImportacionficherosasciiSvce.FIELDNAME_theTipoBoletin, this._v_TipoBoletinForURL);

                    this._v_FicheroASubir          = null;
                    this._v_FicheroASubir_Nombre   = null;
                    this._v_FicheroASubir_Longitud = null;
                    this._v_FicheroASubir_Tipo     = null;
                    this._v_FicheroASubir_Fecha    = null;

                    this.pUploaderCreatorFieldSetValue( theS_ImportacionficherosasciiSvce.FIELDNAME_theUploadedFile,            null);
                    this.pUploaderCreatorFieldSetValue( this.FIELDNAME_NOTFORFORM_NombreFichero,   null);
                    this.pUploaderCreatorFieldSetValue( this.FIELDNAME_NOTFORFORM_TipoFichero,     null);
                    this.pUploaderCreatorFieldSetValue( this.FIELDNAME_NOTFORFORM_LongitudFichero, null);
                    this.pUploaderCreatorFieldSetValue( this.FIELDNAME_NOTFORFORM_FechaFichero,    null);


                    if( !this._v_ContenidoDeFicheroASubir || !this._v_ContenidoDeFicheroASubir.length) {
                        return true;
                    }

                    var aUploadFile = this._v_ContenidoDeFicheroASubir[ 0];
                    if( !aUploadFile) {
                        return true;
                    }

                    this._v_FicheroASubir_Nombre   = aUploadFile[ "name"];
                    this._v_FicheroASubir_Tipo     = aUploadFile[ "type"];
                    this._v_FicheroASubir_Longitud = aUploadFile[ "size"];
                    this._v_FicheroASubir_Fecha    = aUploadFile[ "lastModifiedDate"];

                    this.pUploaderCreatorFieldSetValue( this.FIELDNAME_NOTFORFORM_NombreFichero,   this._v_FicheroASubir_Nombre);
                    this.pUploaderCreatorFieldSetValue( this.FIELDNAME_NOTFORFORM_TipoFichero,     this._v_FicheroASubir_Tipo);
                    this.pUploaderCreatorFieldSetValue( this.FIELDNAME_NOTFORFORM_LongitudFichero, this._v_FicheroASubir_Longitud);
                    this.pUploaderCreatorFieldSetValue( this.FIELDNAME_NOTFORFORM_FechaFichero,    this._v_FicheroASubir_Fecha);


                    if( this._v_FicheroASubir_Longitud > this.MAXFICHEROLEN) {
                        return true;
                    }

                    this._v_FicheroASubir = aUploadFile;

                    this.pUploaderCreatorFieldSetValue( theS_ImportacionficherosasciiSvce.FIELDNAME_theUploadedFile, this._v_FicheroASubir);

                    return true;
                };
                if( fUI_CustomUIHandler_SubirContenidoFicheroASCII){}/* CQT */
                aPrototype.fUI_CustomUIHandler_SubirContenidoFicheroASCII = fUI_CustomUIHandler_SubirContenidoFicheroASCII;












                var fReactToError_fprDo_Importacionesficherosascii_CrearImportacionFicheroASCII = function( theError, theCreator) {

                    if( !theError) {
                        return false;
                    }

                    if( !theCreator) {
                        return false;
                    }

                    var anUploaderCreator = this.fUploaderCreator();
                    if( !anUploaderCreator) {
                        return false;
                    }

                    if( !( theCreator === anUploaderCreator)) {
                        return false;
                    }


                    if( !this.RELEVANTERRORTYPES_CREATE_IMPORTACIONFICHEROASCII) {
                        return false;
                    }

                    if( !theError._v_Type || ( this.RELEVANTERRORTYPES_CREATE_IMPORTACIONFICHEROASCII.indexOf( theError._v_Type) < 0)) {
                        return false;
                    }

                    if( theError._v_Success) {
                        return false;
                    }

                    if( !( theError._v_ServerFailureKind == this.HITSVRFAILURE_AJAX)) {
                        return false;
                    }

                    if( !( theError._v_OperationKind == "CREATE")) {
                        return false;
                    }

                    if( !( theError._v_OperationName == "fprDo_Importacionesficherosascii_CrearImportacionFicheroASCII")) {
                        return false;
                    }

                    if( !( theError._v_OperationStatus == "YAEXISTE")) {
                        return false;
                    }

                    var aResponse = theError._v_Response;
                    if( !aResponse) {
                        return false;
                    }

                    if( !aResponse[ "vAno"]) {
                        return false;
                    }
                    if( !aResponse[ "vMes"]) {
                        return false;
                    }

                    if( !aResponse[ "vProvincia"]) {
                        return false;
                    }

                    if( !aResponse[ "vTipoBoletin"]) {
                        return false;
                    }

                    if( !( aResponse[ "vStatusOperacion"] == "YAEXISTE")) {
                        return false;
                    }

                    var aDetallesOperacion = aResponse[ "vDetallesOperacion"];
                    if( !aDetallesOperacion) {
                        aDetallesOperacion = "Fichero";
                    }

                    if( aDetallesOperacion.toLowerCase().indexOf( "existe") < 0) {
                        aDetallesOperacion = "Ya Existe " + aDetallesOperacion;
                    }

                    return aDetallesOperacion;

                };
                if( fReactToError_fprDo_Importacionesficherosascii_CrearImportacionFicheroASCII){}/* CQT */
                aPrototype.fReactToError_fprDo_Importacionesficherosascii_CrearImportacionFicheroASCII = fReactToError_fprDo_Importacionesficherosascii_CrearImportacionFicheroASCII;



















                var fprAction_Importacionesficherosascii_LanzarImportacionFicheroASCII = function( theEditorCtrl) {

                    if( !theEditorCtrl) {
                        return this.fNewDeferredRejectActionErrorPromise( "fprAction_Importacionesficherosascii_LanzarImportacionFicheroASCII : !theEditorCtrl");
                    }

                    var someFields = theEditorCtrl.fFields();
                    if( !someFields) {
                        return this.fNewDeferredRejectActionErrorPromise( "fprAction_Importacionesficherosascii_LanzarImportacionFicheroASCII : !someFields");
                    }

                    var anIdTrabajo = someFields[ "vTrIdTrabajo"];
                    if( !anIdTrabajo) {
                        return this.fNewDeferredRejectActionErrorPromise( "fprAction_Importacionesficherosascii_LanzarImportacionFicheroASCII : !someFields[ 'vTrIdTrabajo']");
                    }

                    var anImportacionficherosasciiSvce = this.fImportacionficherosasciiSvce();
                    if( !anImportacionficherosasciiSvce) {
                        return this.fNewDeferredRejectActionErrorPromise( "fprAction_Importacionesficherosascii_LanzarImportacionFicheroASCII : this.fImportacionficherosasciiSvce()");
                    }


                    anImportacionficherosasciiSvce.fprDo_Importacionesficherosascii_LanzarImportacionFicheroASCII( anIdTrabajo)
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
                if( fprAction_Importacionesficherosascii_LanzarImportacionFicheroASCII){}/* CQT */
                aPrototype.fprAction_Importacionesficherosascii_LanzarImportacionFicheroASCII = fprAction_Importacionesficherosascii_LanzarImportacionFicheroASCII;









                var fReactToActionError_Importacionesficherosascii_LanzarImportacionFicheroASCII = function( theError, theEditor) {

                    if( !theError) {
                        return false;
                    }

                    if( !theCreator) {
                        return false;
                    }

                    var anUploaderCreator = this.fUploaderCreator();
                    if( !anUploaderCreator) {
                        return false;
                    }

                    if( !( theCreator === anUploaderCreator)) {
                        return false;
                    }


                    if( !this.RELEVANTERRORTYPES_CREATE_IMPORTACIONFICHEROASCII) {
                        return false;
                    }

                    if( !theError._v_Type || ( this.RELEVANTERRORTYPES_CREATE_IMPORTACIONFICHEROASCII.indexOf( theError._v_Type) < 0)) {
                        return false;
                    }

                    if( theError._v_Success) {
                        return false;
                    }

                    if( !( theError._v_ServerFailureKind == this.HITSVRFAILURE_AJAX)) {
                        return false;
                    }

                    if( !( theError._v_OperationKind == "ACTION")) {
                        return false;
                    }

                    if( !( theError._v_OperationName == "fprAction_Importacionesficherosascii_LanzarImportacionFicheroASCII")) {
                        return false;
                    }

                    if( !( theError._v_OperationStatus == "YAEXISTE")) {
                        return false;
                    }

                    var aResponse = theError._v_Response;
                    if( !aResponse) {
                        return false;
                    }

                    if( !aResponse[ "vAno"]) {
                        return false;
                    }
                    if( !aResponse[ "vMes"]) {
                        return false;
                    }

                    if( !aResponse[ "vProvincia"]) {
                        return false;
                    }

                    if( !aResponse[ "vTipoBoletin"]) {
                        return false;
                    }

                    if( !( aResponse[ "vStatusOperacion"] == "YAEXISTE")) {
                        return false;
                    }

                    var aDetallesOperacion = aResponse[ "vDetallesOperacion"];
                    if( !aDetallesOperacion) {
                        aDetallesOperacion = "Fichero";
                    }

                    return aDetallesOperacion;

                };
                if( fReactToActionError_Importacionesficherosascii_LanzarImportacionFicheroASCII){}/* CQT */
                aPrototype.fReactToActionError_Importacionesficherosascii_LanzarImportacionFicheroASCII = fReactToActionError_Importacionesficherosascii_LanzarImportacionFicheroASCII;












                var fEnablement_Importacionesficherosascii_LanzarImportacionFicheroASCII_EstaProhibido = function( theFieldSpec, theCtrl, theFields) {

                    if( !theCtrl) {
                        return true;
                    }

                    var aDisabledMessage = null;

                    if( theCtrl._v_ActionsSuccessesMessages) {

                        var anActionSuccessMessage = theCtrl._v_ActionsSuccessesMessages[ aFieldSpecName];
                        if( anActionSuccessMessage) {
                            aDisabledMessage = anActionSuccessMessage;
                        }
                    }

                    if( !aDisabledMessage) {
                        if( theCtrl._v_ActionsErrorsMessages) {

                            var anActionErrorMessage = theCtrl._v_ActionsErrorsMessages[ aFieldSpecName];
                            if( anActionErrorMessage) {
                                aDisabledMessage = anActionErrorMessage;
                            }
                        }
                    }

                    if( !aDisabledMessage) {
                        if( theCtrl._v_ActionsRetriesMessages) {

                            var anActionRetryMessage = theCtrl._v_ActionsRetriesMessages[ aFieldSpecName];
                            if( anActionRetryMessage) {
                                aDisabledMessage = anActionRetryMessage;
                            }
                        }
                    }

                    if( !aDisabledMessage) {
                        aDisabledMessage = true;
                    }


                    if( !theFieldSpec) {
                        return aDisabledMessage;
                    }


                    if( !theFields) {
                        return aDisabledMessage;
                    }

                    var aFieldSpecName = theFieldSpec[ "name"];
                    if( !aFieldSpecName) {
                        return aDisabledMessage;
                    }

                    if( !theFields[ "vTrIdtrabajo"]){
                        return aDisabledMessage;
                    }

                    if( !theFields[ "vTipo"]) {
                        return aDisabledMessage;
                    }

                    if( !( theFields[ "vTipo"] == theS_ImportacionficherosasciiSvce.TIPOREGISTROSINTETICO_IMPORTACIONFICHEROASCII)) {
                        return aDisabledMessage;
                    }

                    if( !theFields[ "vTrEstado"]) {
                        return aDisabledMessage;
                    }

                    if( !( theFields[ "vTrEstado"].toUpperCase() == theS_ImportacionficherosasciiSvce.ENUM_ESTADOTRABAJO_CREADO.toUpperCase())) {
                        return aDisabledMessage;
                    }


                    /* Return disabled true, or a non empty string */
                    return false;

                };
                if( fEnablement_Importacionesficherosascii_LanzarImportacionFicheroASCII_EstaProhibido){}/* CQT */
                aPrototype.fEnablement_Importacionesficherosascii_LanzarImportacionFicheroASCII_EstaProhibido = fEnablement_Importacionesficherosascii_LanzarImportacionFicheroASCII_EstaProhibido;



















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









                return aPrototype;

            })();




            var ImportacionficherosasciiCtrl_Constructor = function( theTitle, theIdentifier, theRecorder, theScope,
                                                     theParentCtrl,
                                                     theConverter) {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_CommonspringnutCtrlType.CommonspringnutCtrl_Prototype;

                this._v_Prototype = null;
                this._v_Type = null;
                this._v_Module = null;

                this._v_TipoTrabajo       = null;
                this._v_TipoTrabajoForURL = null;

                this._v_TipoBoletin       = null;
                this._v_TipoBoletinForURL = null;

                this._v_IsInstrumentacion = null;

                this._v_ContenidoDeFicheroASubir = null;

                this._v_FicheroASubir          = null;
                this._v_FicheroASubir_Nombre   = null;
                this._v_FicheroASubir_Longitud = null;
                this._v_FicheroASubir_Tipo     = null;
                this._v_FicheroASubir_Fecha    = null;

                this._pInit_ImportacionficherosasciiCtrl( theTitle, theIdentifier, theRecorder, theScope,
                    theParentCtrl,
                    theConverter);
            };
            ImportacionficherosasciiCtrl_Constructor.prototype = aImportacionficherosasciiCtrl_Prototype;





            var ImportacionficherosasciiCtrl_SuperPrototypeConstructor = function() {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_CommonspringnutCtrlType.CommonspringnutCtrl_Prototype;

                this._v_Prototype = aImportacionficherosasciiCtrl_Prototype;
                this._v_Type      = null;
                this._v_Module    = null;

                this._v_CtrlSpecs         = null;

                this._v_TipoTrabajo       = null;
                this._v_TipoTrabajoForURL = null;

                this._v_TipoBoletin       = null;
                this._v_TipoBoletinForURL = null;

                this._v_IsInstrumentacion = null;

                this._v_ContenidoDeFicheroASubir = null;

                this._v_FicheroASubir          = null;
                this._v_FicheroASubir_Nombre   = null;
                this._v_FicheroASubir_Longitud = null;
                this._v_FicheroASubir_Tipo     = null;
                this._v_FicheroASubir_Fecha    = null;
            };
            ImportacionficherosasciiCtrl_SuperPrototypeConstructor.prototype = aImportacionficherosasciiCtrl_Prototype;



            var aModule = {
                "ImportacionficherosasciiCtrl_Prototype": aImportacionficherosasciiCtrl_Prototype,
                "ImportacionficherosasciiCtrl_Constructor": ImportacionficherosasciiCtrl_Constructor,
                "ImportacionficherosasciiCtrl_SuperPrototypeConstructor": ImportacionficherosasciiCtrl_SuperPrototypeConstructor
            };
            pgInitFromModuleConstants( aModule);
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;

            aImportacionficherosasciiCtrl_Prototype._v_Module = aModule;





            return aModule;
        };







        var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        if( !anExistingModule) {

            var aModule = aMod_definer(
                theSS_Overrider,
                theSS_CommonspringnutCtrlType,
                theSS_TiposTrabajos,
                theSS_TrabajosSvce,
                theSS_ImportacionficherosasciiSvce,
                theSS_ImportacionficherosasciiCtrlSpecsFactory
            );
            anExistingModule = aModule;

            theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
        }






        return anExistingModule;

    }]);







