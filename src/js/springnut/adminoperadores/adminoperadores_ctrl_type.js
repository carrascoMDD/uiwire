'use strict';

/*
 * adminoperadores_ctrl_type.js
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






angular.module("adminoperadoresTypes").factory("AdminoperadoresCtrlType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "CommonspringnutCtrlType",
    "AdminoperadoresSvce",
function( theSS_typesregistry,
          theSS_Overrider,
          theSS_CommonspringnutCtrlType,
          theSS_AdminoperadoresSvce) {




    var ModuleName     = "adminoperadores_ctrl_type";
    var ModulePackages = "springnut/adminoperadores";
    var ModuleFullName = ModulePackages + "/" + ModuleName;



    var aMod_definer = function( theS_Overrider,
                                 theS_CommonspringnutCtrlType,
                                 theS_AdminoperadoresSvce) {

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
            theToInit.DEFAULTADMINOPERADORESCTRLTITLE = "AdminoperadoresCtrlDefaultName";

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









        var aAdminoperadoresCtrl_Prototype = (function() {


            var aPrototype = new theS_CommonspringnutCtrlType.CommonspringnutCtrl_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_SuperPrototype = theS_CommonspringnutCtrlType.CommonspringnutCtrl_Prototype;


            aPrototype._v_Type = "AdminoperadoresCtrl";

            aPrototype._v_Module = null;






            var _pInit = function( theTitle, theIdentifier, theRecorder, theScope,
                                   theParentCtrl,
                                   theConverter) {

                this._pInit_AdminoperadoresCtrl( theTitle, theIdentifier, theRecorder, theScope,
                                                 theParentCtrl,
                                                 theConverter);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_AdminoperadoresCtrl = function( theTitle, theIdentifier, theRecorder, theScope,
                                                       theParentCtrl,
                                                       theConverter,
                                                       theAdminoperadoresCtrlSpecs) {

                /* Delegate on super prototype initialization */
                aPrototype._v_SuperPrototype._pInit_CommonspringnutCtrl.apply( this, [
                    theTitle || this.DEFAULTADMINOPERADORESCTRLTITLE,
                    theIdentifier, theRecorder, theScope,
                    theParentCtrl,
                    theConverter,
                    theAdminoperadoresCtrlSpecs
                ]);


                this._v_Prototype = aPrototype;
                this._v_Type      = this._v_Prototype._v_Type;
                this._v_Module    = aPrototype._v_Module;
            };
            if( _pInit_AdminoperadoresCtrl){}/* CQT */
            aPrototype._pInit_AdminoperadoresCtrl = _pInit_AdminoperadoresCtrl;














            var pInitStaticTabsContent = function( ) {

                aPrototype._v_SuperPrototype.pInitStaticTabsContent.apply( this);

                if( !this._v_StaticTabs) {
                    return;
                }

                if( !this._v_CtrlSpecs) {
                    return;
                }

                if( !this._v_CtrlSpecs.STATICTAB_SVCESPECS_NAME) {
                    return;
                }

                var aSvceSpec = null;

                var aAdminoperadoresSvce = this.fAdminoperadoresSvce();
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










            var pInitialObtainConverter = function() {
            };
            if( pInitialObtainConverter){}/* CQT */
            aPrototype.pInitialObtainConverter = pInitialObtainConverter;










            var fprDo_InitialExtra = function() {

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






            var fAdminoperadoresSvce = function( ) {

                return theS_AdminoperadoresSvce;
            };
            if( fAdminoperadoresSvce){}/* CQT */
            aPrototype.fAdminoperadoresSvce = fAdminoperadoresSvce;














            var pInitEditParametersCustomUIHandlers = function() {
                if( !this._v_CtrlSpecs) {
                    return;
                }

                if( !this._v_CtrlSpecs.EDITPARAMETERS) {
                    return;
                }

                aPrototype._v_SuperPrototype.pInitEditParametersCustomUIHandlers.apply( this)

                var someUIHandlersByName = {
                    "fUICambiarContrasenaClickListener":          this.fUI_CustomUIHandler_CambiarContrasenaClickListener.bind( this),
                    "fUICancelarCambiarContrasenaClickListener":  this.fUI_CustomUIHandler_CancelarCambiarContrasenaClickListener.bind( this),
                    "fUIConfirmarCambiarContrasenaClickListener": this.fUI_CustomUIHandler_ConfirmarCambiarContrasenaClickListener.bind( this),
                    "fUIContrasenaChangedListener":               this.fUI_CustomUIHandler_ContrasenaChangedListener.bind( this),
                    "fUIRepetirContrasenaChangedListener":        this.fUI_CustomUIHandler_RepetirContrasenaChangedListener.bind( this)
                };

                var aOperadorEditParameters = this._v_CtrlSpecs.EDITPARAMETERS[ this._v_CtrlSpecs.OPERADOR_NAME];
                if( aOperadorEditParameters) {
                    this.pInitEditParametersCustomUIHandlers_inFieldSpecs( someUIHandlersByName, aOperadorEditParameters[ "fields"]);
                }

                var aOperadorDePerfilEditParameters = this._v_CtrlSpecs.EDITPARAMETERS[ this._v_CtrlSpecs.OPERADORDEPERFIL_NAME];
                if( aOperadorDePerfilEditParameters) {
                    this.pInitEditParametersCustomUIHandlers_inFieldSpecs( someUIHandlersByName, aOperadorDePerfilEditParameters[ "fields"]);
                }
            };
            if( pInitEditParametersCustomUIHandlers){}/* CQT */
            aPrototype.pInitEditParametersCustomUIHandlers = pInitEditParametersCustomUIHandlers;













            var fUI_CustomUIHandler_CambiarContrasenaClickListener = function( theEditorCtrl) {

                if( !theEditorCtrl) {
                    return true;
                }

                var someFields = theEditorCtrl.fFields();
                if( !someFields) {
                    return true;
                }


                someFields[ "MostrarCamposContrasena"] = true;

                someFields[ "MensajeContrasenaCambiada"] = null;

                this.fUI_CustomUIHandler_ContrasenaChangedListener( theEditorCtrl);

                return true;
            };
            if( fUI_CustomUIHandler_CambiarContrasenaClickListener){}/* CQT */
            aPrototype.fUI_CustomUIHandler_CambiarContrasenaClickListener = fUI_CustomUIHandler_CambiarContrasenaClickListener;







            var fUI_CustomUIHandler_CancelarCambiarContrasenaClickListener = function( theEditorCtrl) {

                if( !theEditorCtrl) {
                    return true;
                }

                var someFields = theEditorCtrl.fFields();
                if( !someFields) {
                    return true;
                }

                someFields[ "MostrarCamposContrasena"] = false;

                someFields[ "MensajeContrasenaCambiada"] = null;

                return true;
            };
            if( fUI_CustomUIHandler_CancelarCambiarContrasenaClickListener){}/* CQT */
            aPrototype.fUI_CustomUIHandler_CancelarCambiarContrasenaClickListener = fUI_CustomUIHandler_CancelarCambiarContrasenaClickListener;







            var fUI_CustomUIHandler_ContrasenaChangedListener = function( theEditorCtrl) {

                if( !theEditorCtrl) {
                    return true;
                }

                var someFields = theEditorCtrl.fFields();
                if( !someFields) {
                    return true;
                }

                someFields[ "MensajeContrasenaCambiada"] = null;

                var aContrasena = someFields[ "Contrasena"];
                if( !aContrasena) {
                    someFields[ "MensajeIntroducirContrasena"] = "Introduzca nueva contraseña";
                    someFields[ "PuedeCambiarContrasena"] = false;
                    return true;
                }

                var aRepetirContrasena = someFields[ "RepetirContrasena"];
                if( !aRepetirContrasena) {
                    someFields[ "MensajeIntroducirContrasena"] = "Repita la nueva contraseña";
                    someFields[ "PuedeCambiarContrasena"] = false;
                    return true;
                }

                if( !( aRepetirContrasena == aContrasena)) {
                    someFields[ "MensajeIntroducirContrasena"] = "Repita exactamente la nueva contraseña";
                    someFields[ "PuedeCambiarContrasena"] = false;
                    return true;
                }

                someFields[ "MensajeIntroducirContrasena"] = null;

                someFields[ "PuedeCambiarContrasena"] = true;

                return true;
            };
            if( fUI_CustomUIHandler_ContrasenaChangedListener){}/* CQT */
            aPrototype.fUI_CustomUIHandler_ContrasenaChangedListener = fUI_CustomUIHandler_ContrasenaChangedListener;







            var fUI_CustomUIHandler_RepetirContrasenaChangedListener = function( theEditorCtrl) {

                return this.fUI_CustomUIHandler_ContrasenaChangedListener( theEditorCtrl);
            };
            if( fUI_CustomUIHandler_RepetirContrasenaChangedListener){}/* CQT */
            aPrototype.fUI_CustomUIHandler_RepetirContrasenaChangedListener = fUI_CustomUIHandler_RepetirContrasenaChangedListener;







            var fUI_CustomUIHandler_ConfirmarCambiarContrasenaClickListener = function( theEditorCtrl) {

                if( !theEditorCtrl) {
                    return true;
                }

                var someFields = theEditorCtrl.fFields();
                if( !someFields) {
                    return true;
                }

                someFields[ "MensajeContrasenaCambiada"] = null;

                var anIdOperador = someFields[ "vIdOperador"];
                if( !anIdOperador) {
                    someFields[ "MensajeIntroducirContrasena"] = "Seleccione Operador";
                    someFields[ "PuedeCambiarContrasena"] = false;
                    return true;
                }

                var aContrasena = someFields[ "Contrasena"];
                if( !aContrasena) {
                    someFields[ "MensajeIntroducirContrasena"] = "Introduzca nueva contraseña";
                    someFields[ "PuedeCambiarContrasena"] = false;
                    return true;
                }

                var aRepetirContrasena = someFields[ "RepetirContrasena"];
                if( !aRepetirContrasena) {
                    someFields[ "MensajeIntroducirContrasena"] = "Repita la nueva contraseña";
                    someFields[ "PuedeCambiarContrasena"] = false;
                    return true;
                }

                if( !( aRepetirContrasena == aContrasena)) {
                    someFields[ "MensajeIntroducirContrasena"] = "Repita exactamente la nueva contraseña";
                    someFields[ "PuedeCambiarContrasena"] = false;
                    return true;
                }



                someFields[ "MostrarCamposContrasena"] = false;


                var aParentCtrl = theEditorCtrl.fParentCtrl();
                if( !aParentCtrl) {
                    return true;
                }

                var anAdminoperadoresSvce = aParentCtrl.fAdminoperadoresSvce();
                if( !anAdminoperadoresSvce) {
                    return true;
                }

                var aThis = this;
                var anEditorCtrl = theEditorCtrl;

                anAdminoperadoresSvce.fprDo_Adminoperadores_CambiarContrasena( anIdOperador, aContrasena, aRepetirContrasena)
                    .then(
                        function( theCambiarResponse) {

                            var aDeferred = aThis.fNewDeferred();

                            if( ( theCambiarResponse[ "vTipo"] == "CambiadaContrasena") && ( theCambiarResponse[ "vSuccess"] == true)) {

                                var otherFields = anEditorCtrl.fFields();
                                if( otherFields) {
                                    otherFields[ "MensajeContrasenaCambiada"] = "La Contraseña ha sido Cambiada";

                                    otherFields[ "Contrasena"] = null;
                                    otherFields[ "RepetirContrasena"] = null;
                                }

                                var aSuccessReport = aThis.fCreateAndRegisterActionReport(
                                    aThis.ACTIONKIND_CHANGE,
                                    "CambiarContrasena", /* theActionName */
                                    anIdOperador, /* theWith */
                                    null, /* theWithDescribe */
                                    null, /* theForm */
                                    null, /* theFormDescribe */
                                    null, /* theHitServerReport */
                                    true, /* thePerformed */
                                    true, /* theSuccess */
                                    null, /* theFailureKind */
                                    null /* theFailureDetails */);

                                aThis.pReportActionSuccess( aSuccessReport);

                                aThis.pDeferredResolveWithResponse( aDeferred, theCambiarResponse);

                                console.log( "\n\nfUI_CustomUIHandler_ConfirmarCambiarContrasenaClickListener Contrasena cambiada\n\n\n");
                            }
                            else {
                                var aFailReport = aThis.fCreateAndRegisterActionReport(
                                    aThis.ACTIONKIND_CHANGE,
                                    "CambiarContrasena", /* theActionName */
                                    anIdOperador, /* theWith */
                                    null, /* theWithDescribe */
                                    null, /* theForm */
                                    null, /* theFormDescribe */
                                    null, /* theHitServerReport */
                                    true, /* thePerformed */
                                    false, /* theSuccess */
                                    null, /* theFailureKind */
                                    null /* theFailureDetails */);

                                aThis.pReportFailedAction(
                                    aFailReport,
                                    aThis.ACTIONFAILURE_HITSERVERERROR,
                                    "! ( ( theCambiarResponse[ 'vTipo'] == 'CambiadaContrasena') && ( theCambiarResponse[ 'vSuccess'] == true))"
                                );

                                throw aFailReport;
                            }
                            return aDeferred.promise;
                        }
                    )
                    .then(
                        function( theCambiarResponse) {

                            console.log( "ACV 201502231953 here!");

                            if( anEditorCtrl == null) {
                                return aThis.fNewDeferredResolvePromise( theCambiarResponse);
                            }

                            return anEditorCtrl.fprDo_RetrieveFieldsAgain();
                        }
                    )
                    ["catch"]( function( theError) {

                        aThis.fCreateAndRegisterActionReport(
                            aThis.ACTIONKIND_CHANGE,
                            "CambiarContrasena", /* theActionName */
                            anIdOperador, /* theWith */
                            null, /* theWithDescribe */
                            null, /* theForm */
                            null, /* theFormDescribe */
                            theError, /* theHitServerReport */
                            true, /* thePerformed */
                            false, /* theSuccess */
                            null, /* theFailureKind */
                            null /* theFailureDetails */);

                        someFields[ "MensajeContrasenaCambiada"] = "Error cambiando Contraseña";

                        console.log( "\n\nfUI_CustomUIHandler_ConfirmarCambiarContrasenaClickListener Error cambiando Contrasena\n\n\n");

                        throw theError;
                    });
                return true;
            };
            if( fUI_CustomUIHandler_ConfirmarCambiarContrasenaClickListener){}/* CQT */
            aPrototype.fUI_CustomUIHandler_ConfirmarCambiarContrasenaClickListener = fUI_CustomUIHandler_ConfirmarCambiarContrasenaClickListener;









            return aPrototype;

        })();




        var AdminoperadoresCtrl_Constructor = function( theTitle, theIdentifier, theRecorder, theScope,
                                                        theParentCtrl,
                                                        theConverter) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_CommonspringnutCtrlType.CommonspringnutCtrl_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;
            this._v_Module = null;

            this._pInit_AdminoperadoresCtrl( theTitle, theIdentifier, theRecorder, theScope,
                                             theParentCtrl,
                                             theConverter);
        };
        AdminoperadoresCtrl_Constructor.prototype = aAdminoperadoresCtrl_Prototype;





        var AdminoperadoresCtrl_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_CommonspringnutCtrlType.CommonspringnutCtrl_Prototype;

            this._v_Prototype = aAdminoperadoresCtrl_Prototype;
            this._v_Type      = null;
            this._v_Module    = null;
        };
        AdminoperadoresCtrl_SuperPrototypeConstructor.prototype = aAdminoperadoresCtrl_Prototype;



        var aModule = {
            "AdminoperadoresCtrl_Prototype": aAdminoperadoresCtrl_Prototype,
            "AdminoperadoresCtrl_Constructor": AdminoperadoresCtrl_Constructor,
            "AdminoperadoresCtrl_SuperPrototypeConstructor": AdminoperadoresCtrl_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aAdminoperadoresCtrl_Prototype._v_Module = aModule;





        return aModule;
    };







    var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
    if( !anExistingModule) {

        var aModule = aMod_definer(
            theSS_Overrider,
            theSS_CommonspringnutCtrlType,
            theSS_AdminoperadoresSvce
        );
        anExistingModule = aModule;

        theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
    }






    return anExistingModule;

}]);







