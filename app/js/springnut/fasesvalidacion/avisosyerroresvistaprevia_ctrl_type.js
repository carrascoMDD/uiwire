'use strict';

/*
 * avisosyerroresvistaprevia_ctrl_type.js
 *
 * Creado @author Antonio Carrasco Valero 201411101935
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






angular.module("avisosyerroresvistapreviaTypes").factory("AvisosyerroresvistapreviaCtrlType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "CommonCtrlType",
    "AvisosyerroresvistapreviaSvce",
function( theSS_typesregistry,
          theSS_Overrider,
          theSS_CommonCtrlType,
          theSS_AvisosyerroresvistapreviaSvce) {




    var ModuleName     = "avisosyerroresvistaprevia_ctrl_type";
    var ModulePackages = "springnut/fasesvalidacion";
    var ModuleFullName = ModulePackages + "/" + ModuleName;



    var aMod_definer = function( theS_Overrider,
                                 theS_CommonCtrlType,
                                 theS_AvisosyerroresvistapreviaSvce) {


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
            theToInit.DEFAULTAVISOSYERRORESVISTAPREVIACTRLTITLE = "AvisosyerroresvistapreviaCtrlDefaultName";

            theToInit.TIPOBOLETININE              = "ine";
            theToInit.TIPOBOLETININEFORURL        = "INE";
            theToInit.TIPOBOLETINJUDICIALES       = "judiciales";
            theToInit.TIPOBOLETINJUDICIALESFORURL = "Judiciales";

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









        var aAvisosyerroresvistapreviaCtrl_Prototype = (function() {


            var aPrototype = new theS_CommonCtrlType.CommonCtrl_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_SuperPrototype = theS_CommonCtrlType.CommonCtrl_Prototype;


            aPrototype._v_Type = "AvisosyerroresvistapreviaCtrl";

            aPrototype._v_Module = null;



            aPrototype._v_TipoBoletin           = null;
            aPrototype._v_TipoBoletinForRequest = null;
            aPrototype._v_IdFase                = null;

            aPrototype._v_Leyendo  = null;



            var _pInit = function( theTitle, theIdentifier, theRecorder, theScope,
                                   theParentCtrl,
                                   theConverter,
                                   theTipoBoletin,
                                   theIdFase) {

                this._pInit_AvisosyerroresvistapreviaCtrl( theTitle, theIdentifier, theRecorder, theScope,
                                                           theTipoBoletin,
                                                           theIdFase);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_AvisosyerroresvistapreviaCtrl = function( theTitle, theIdentifier, theRecorder, theScope,
                                                       theTipoBoletin,
                                                       theIdFase) {

                /* Delegate on super prototype initialization */
                aPrototype._v_SuperPrototype._pInit_CommonCtrl.apply( this, [
                    theTitle || this.DEFAULTAVISOSYERRORESVISTAPREVIACTRLTITLE,
                    theIdentifier, theRecorder, theScope]);

                this._v_Prototype = aPrototype;
                this._v_Type      = this._v_Prototype._v_Type;
                this._v_Module    = aPrototype._v_Module;

                this._v_TipoBoletin           = theTipoBoletin;
                this._v_TipoBoletinForRequest = theTipoBoletin;
                if( this._v_TipoBoletin == this.TIPOBOLETININE) {
                    this._v_TipoBoletinForRequest = this.TIPOBOLETININEFORURL;
                }
                else {
                    if( this._v_TipoBoletin == this.TIPOBOLETINJUDICIALES) {
                        this._v_TipoBoletinForRequest = this.TIPOBOLETINJUDICIALESFORURL;
                    }
                }

                this._v_IdFase   = theIdFase;

                this._v_Leyendo  = null;

            };
            if( _pInit_AvisosyerroresvistapreviaCtrl){}/* CQT */
            aPrototype._pInit_AvisosyerroresvistapreviaCtrl = _pInit_AvisosyerroresvistapreviaCtrl;









            var fAvisosyerroresvistapreviaSvce = function( ) {

                return theS_AvisosyerroresvistapreviaSvce;
            };
            if( fAvisosyerroresvistapreviaSvce){}/* CQT */
            aPrototype.fAvisosyerroresvistapreviaSvce = fAvisosyerroresvistapreviaSvce;






            var pProgress = function( theMessage) {

               var aProgreso = {
                    "theTipoBoletin":     this._v_TipoBoletin,
                    "theIdFase":          this._v_IdFase,
                    "theMensajeProgreso": theMessage
                };

                var aTemplate_BoletinConErrores = $('#did_erroresYavisosTree_template_ProgresoErroresYavisosReport');

                var anExpanded = aTemplate_BoletinConErrores.tmpl( aProgreso);

                var aDivToAppendTo = $('#did_div_erroresYavisosTree_vistaPreviaDiv');
                aDivToAppendTo.empty();
                anExpanded.appendTo( aDivToAppendTo);

                $("#did_div_erroresYavisosTree_vistaPrevia").show();
            };
            if( pProgress){} /* CQT */
            aPrototype.pProgress = pProgress;










            var pPresentErroresavisosResponse = function( theResponse) {

                if( theResponse == null) {
                    var aMsg =  "¡ ERROR ! Sin respuesta del servidor";
                    console.log( aMsg);
                    this.pProgress( aMsg);
                    return;
                }

                var aTemplate_BoletinConErrores = $('#did_erroresYavisosTree_template_ErroresYavisosReport');
                $('#did_erroresYavisosTree_template_CondicionConExcepcion').template( "template_CondicionConExcepcion");
                $('#did_erroresYavisosTree_template_BoletinConErrores').template( "template_BoletinConErrores");
                $('#did_erroresYavisosTree_template_ValidacionErronea').template( "template_ValidacionErronea");
                $('#did_erroresYavisosTree_template_ErrorEnCampo').template( "template_ErrorEnCampo");

                if( theResponse[ "condicionesConExcepcion"] == null) {
                    theResponse[ "condicionesConExcepcion"] = [ ];
                }
                var anExpanded = aTemplate_BoletinConErrores.tmpl( theResponse);

                var aDivToAppendTo = $('#did_div_erroresYavisosTree_vistaPreviaDiv');
                aDivToAppendTo.empty();
                anExpanded.appendTo( aDivToAppendTo);

                $("#did_div_erroresYavisosTree_vistaPrevia").show();
            };
            if( pPresentErroresavisosResponse){} /* CQT */
            aPrototype.pPresentErroresavisosResponse = pPresentErroresavisosResponse;





            var pPresentErroresavisosError = function( theError) {
                if( theError){} /* CQT */

                var aMsg =  "¡ ERROR ! Comuncando con el servidor";
                console.log( aMsg);
                this.pProgress( aMsg);
            };
            if( pPresentErroresavisosError){} /* CQT */
            aPrototype.pPresentErroresavisosError = pPresentErroresavisosError;









            var fprDo_CheckSessionLoggedAuthenticated = function() {
                return this.fNewDeferredResolveWithNothingPromise();
            };
            if( fprDo_CheckSessionLoggedAuthenticated){}/* CQT */
            aPrototype.fprDo_CheckSessionLoggedAuthenticated = fprDo_CheckSessionLoggedAuthenticated;







            var fprDo_SolicitarErroresavisosTree = function() {

                this.pProgress( "Se está cargando el informe, por favor espere unos segundos");

                this._v_Leyendo = true;

                var aThis = this;

                return this.fAvisosyerroresvistapreviaSvce().fprDo_Avisosyerroresvistaprevia( this._v_TipoBoletinForRequest, this._v_IdFase)
                    .then( function( theResponse) {

                        aThis._v_Leyendo = true;

                        aThis.pPresentErroresavisosResponse( theResponse);

                        return aThis.fNewDeferredResolveWithResponsePromise( theResponse);
                    })
                    ['catch']( function( theError) {

                        aThis._v_Leyendo = true;

                        aThis.pPresentErroresavisosError( theError);

                        return aThis.fNewDeferredRejectAjaxErrorPromise( theError);
                });
            };
            if( fprDo_SolicitarErroresavisosTree){} /* CQT */
            aPrototype.fprDo_SolicitarErroresavisosTree = fprDo_SolicitarErroresavisosTree;






            var fprDo_InitialExtra = function() {

                var aThis = this;

                return this.fprDo_CheckSessionLoggedAuthenticated()
                    .then( function( ) {
                        return aThis.fprDo_SolicitarErroresavisosTree( );
                    });
            };
            if( fprDo_InitialExtra){}/* CQT */
            aPrototype.fprDo_InitialExtra = fprDo_InitialExtra;







            var fprDo_Initial = function() {

                return this.fprDo_InitialExtra();
            };
            if( fprDo_Initial){}/* CQT */
            aPrototype.fprDo_Initial = fprDo_Initial;








            return aPrototype;

        })();




        var AvisosyerroresvistapreviaCtrl_Constructor = function( theTitle, theIdentifier, theRecorder, theScope,
                                                        theTipoBoletin,
                                                        theIdFase) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_CommonCtrlType.CommonCtrl_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;
            this._v_Module = null;

            this._v_TipoBoletin           = null;
            this._v_TipoBoletinForRequest = null;
            this._v_IdFase                = null;

            this._v_Leyendo  = null;

            this._pInit_AvisosyerroresvistapreviaCtrl( theTitle, theIdentifier, theRecorder, theScope,
                                             theTipoBoletin,
                                             theIdFase);
        };
        AvisosyerroresvistapreviaCtrl_Constructor.prototype = aAvisosyerroresvistapreviaCtrl_Prototype;





        var AvisosyerroresvistapreviaCtrl_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_CommonCtrlType.CommonCtrl_Prototype;

            this._v_Prototype = aAvisosyerroresvistapreviaCtrl_Prototype;
            this._v_Type      = null;
            this._v_Module    = null;

            this._v_TipoBoletin           = null;
            this._v_TipoBoletinForRequest = null;
            this._v_IdFase                = null;

            this._v_Leyendo  = null;
        };
        AvisosyerroresvistapreviaCtrl_SuperPrototypeConstructor.prototype = aAvisosyerroresvistapreviaCtrl_Prototype;



        var aModule = {
            "AvisosyerroresvistapreviaCtrl_Prototype": aAvisosyerroresvistapreviaCtrl_Prototype,
            "AvisosyerroresvistapreviaCtrl_Constructor": AvisosyerroresvistapreviaCtrl_Constructor,
            "AvisosyerroresvistapreviaCtrl_SuperPrototypeConstructor": AvisosyerroresvistapreviaCtrl_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aAvisosyerroresvistapreviaCtrl_Prototype._v_Module = aModule;





        return aModule;
    };







    var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
    if( !anExistingModule) {

        var aModule = aMod_definer(
            theSS_Overrider,
            theSS_CommonCtrlType,
            theSS_AvisosyerroresvistapreviaSvce
        );
        anExistingModule = aModule;

        theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
    }






    return anExistingModule;

}]);







