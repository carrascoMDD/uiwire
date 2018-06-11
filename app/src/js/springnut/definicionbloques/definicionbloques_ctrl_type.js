'use strict';

/*
 * definicionbloques_ctrl_type.js
 *
 * Creado @author Antonio Carrasco Valero 201411162233
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






angular.module("definicionbloquesTypes").factory("DefinicionbloquesCtrlType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "CommonspringnutCtrlType",
    "DefinicionbloquesSvce",
    "DefinicionbloquesInstrumentacionCtrlSpecs",
    "DefinicionbloquesOperacionCtrlSpecs",
function( theSS_typesregistry,
          theSS_Overrider,
          theSS_CommonspringnutCtrlType,
          theSS_DefinicionbloquesSvce,
          theSS_DefinicionbloquesInstrumentacionCtrlSpecs,
          theSS_DefinicionbloquesOperacionCtrlSpecs) {




    var ModuleName     = "definicionbloques_ctrl_type";
    var ModulePackages = "springnut/definicionbloques";
    var ModuleFullName = ModulePackages + "/" + ModuleName;



    var aMod_definer = function( theS_Overrider,
                                 theS_CommonspringnutCtrlType,
                                 theS_DefinicionbloquesSvce,
                                 theS_DefinicionbloquesInstrumentacionCtrlSpecs,
                                 theS_DefinicionbloquesOperacionCtrlSpecs) {



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
            theToInit.DEFAULTDEFINICIONBLOQUESCTRLTITLE = "DefinicionbloquesCtrlDefaultName";


            theToInit.TIPOBOLETININE              = "ine";
            theToInit.TIPOBOLETININEFORURL        = "INE";
            theToInit.TIPOBOLETINJUDICIALES       = "judiciales";
            theToInit.TIPOBOLETINJUDICIALESFORURL = "Judiciales";

            theToInit.FICHEROUOPERADORES_FICHEROS          = "ficheros";
            theToInit.FICHEROUOPERADORES_FICHEROSFORURL    = "Ficheros";
            theToInit.FICHEROUOPERADORES_OPERADORES        = "operadores";
            theToInit.FICHEROUOPERADORES_OPERADORESFORURL  = "Operadores";

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









        var aDefinicionbloquesCtrl_Prototype = (function() {


            var aPrototype = new theS_CommonspringnutCtrlType.CommonspringnutCtrl_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_SuperPrototype = theS_CommonspringnutCtrlType.CommonspringnutCtrl_Prototype;


            aPrototype._v_Type = "DefinicionbloquesCtrl";

            aPrototype._v_Module = null;


            aPrototype._v_TipoBoletin       = null;
            aPrototype._v_TipoBoletinForURL = null;

            aPrototype._v_IsInstrumentacion = null;

            aPrototype._v_BloquesDeFicheroListener = null;




            var _pInit = function( theTitle, theIdentifier, theRecorder, theScope,
                                   theParentCtrl,
                                   theConverter) {

                this._pInit_DefinicionbloquesCtrl( theTitle, theIdentifier, theRecorder, theScope,
                                                 theParentCtrl,
                                                 theConverter);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_DefinicionbloquesCtrl = function( theTitle, theIdentifier, theRecorder, theScope,
                                                       theParentCtrl,
                                                       theConverter) {

                this.pInitFromLocationURL();


                var aCtrlSpecs = null;
                
                switch( this._v_LocationURL) {
                    case '/definicionbloquesINEInstrumentacion':
                        aCtrlSpecs         = theS_DefinicionbloquesInstrumentacionCtrlSpecs;
                        this._v_TipoBoletin       = this.TIPOBOLETININE;
                        this._v_IsInstrumentacion = true;
                        break;

                    case '/definicionbloquesJudicialesInstrumentacion':
                        aCtrlSpecs         = theS_DefinicionbloquesInstrumentacionCtrlSpecs;
                        this._v_TipoBoletin       = this.TIPOBOLETINJUDICIALES;
                        this._v_IsInstrumentacion = true;
                        break;

                    case '/definicionbloquesINEOperacion':
                        aCtrlSpecs         = theS_DefinicionbloquesOperacionCtrlSpecs;
                        this._v_TipoBoletin       = this.TIPOBOLETININE;
                        this._v_IsInstrumentacion = false;
                        break;

                    case '/definicionbloquesJudicialesOperacion':
                        aCtrlSpecs         = theS_DefinicionbloquesOperacionCtrlSpecs;
                        this._v_TipoBoletin       = this.TIPOBOLETINJUDICIALES;
                        this._v_IsInstrumentacion = false;
                        break;

                    default:
                        aCtrlSpecs         = theS_DefinicionbloquesOperacionCtrlSpecs;
                        this._v_TipoBoletin       = this.TIPOBOLETININE;
                        this._v_IsInstrumentacion = false;
                        break;
                }



                this._v_TipoBoletinForURL = this._v_TipoBoletin;
                if( this._v_TipoBoletin == this.TIPOBOLETININE) {
                    this._v_TipoBoletinForURL = this.TIPOBOLETININEFORURL;
                }
                else {
                    if( this._v_TipoBoletin == this.TIPOBOLETINJUDICIALES) {
                        this._v_TipoBoletinForURL = this.TIPOBOLETINJUDICIALESFORURL;
                    }
                }


                /* Delegate on super prototype initialization */
                aPrototype._v_SuperPrototype._pInit_CommonspringnutCtrl.apply( this, [
                    ( aCtrlSpecs.DEFINICIONBLOQUES_PAGEHEADER  + " " + this._v_TipoBoletinForURL ) || theTitle || this.DEFAULTDEFINICIONBLOQUESCTRLTITLE,
                    theIdentifier, theRecorder, theScope,
                    theParentCtrl,
                    theConverter,
                    aCtrlSpecs
                ]);

                this._v_Prototype = aPrototype;
                this._v_Type      = this._v_Prototype._v_Type;
                this._v_Module    = aPrototype._v_Module;

                this._v_BloquesDeFicheroListener = null;

                if( this._v_TipoBoletinForURL){}/* CQT */
            };
            if( _pInit_DefinicionbloquesCtrl){}/* CQT */
            aPrototype._pInit_DefinicionbloquesCtrl = _pInit_DefinicionbloquesCtrl;








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

                var aAdminoperadoresSvce = this.fDefinicionbloquesSvce();
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







            var fDefinicionbloquesSvce = function( ) {

                return theS_DefinicionbloquesSvce;
            };
            if( fDefinicionbloquesSvce){}/* CQT */
            aPrototype.fDefinicionbloquesSvce = fDefinicionbloquesSvce;










            var fprDo_CheckSessionLoggedAuthenticated = function() {
                return this.fNewDeferredResolveWithNothingPromise();
            };
            if( fprDo_CheckSessionLoggedAuthenticated){}/* CQT */
            aPrototype.fprDo_CheckSessionLoggedAuthenticated = fprDo_CheckSessionLoggedAuthenticated;








            var fRegisterNewGridCtrl = function( theGridCtrl, theNombreLista) {

                if( !aPrototype._v_SuperPrototype.fRegisterNewGridCtrl.apply( this, [ theGridCtrl, theNombreLista])) {
                    return false;
                }

                if( theNombreLista == theS_DefinicionbloquesInstrumentacionCtrlSpecs.BLOQUESDEFICHERO_NAME) {

                    if( this._v_BloquesDeFicheroListener) {
                        return true;
                    }

                    var anActionsHappenedListener = this.fNewActionsHappenedListener( theGridCtrl, theNombreLista);
                    if( !anActionsHappenedListener) {
                        return true;
                    }

                    theGridCtrl.pAddActionHappenedListener( anActionsHappenedListener);

                    this._v_BloquesDeFicheroListener = anActionsHappenedListener;
                }



                if( theNombreLista == theS_DefinicionbloquesInstrumentacionCtrlSpecs.FICHEROS_NAME) {

                    if( !( typeof theGridCtrl.fIsSelectorShown == "undefined")) {
                        theGridCtrl._v_SelectorShown = true;
                    }
                }


                return true;
            };
            if( fRegisterNewGridCtrl){}/* CQT */
            aPrototype.fRegisterNewGridCtrl = fRegisterNewGridCtrl;








            var fNewActionsHappenedListener = function( theGridCtrl, theNombreLista) {

                var aMethodName = this._v_Type + " fNewActionsHappenedListener";

                var aThis = this;
                return ( function() {
                    var aThis_here = aThis;

                    var aListener = (function( theActionIsEdition) {

                        return aThis_here.fNewDeferredResolveWithFieldsPromise( theActionIsEdition)
                            .then( function( theSomethingOrNothing) {
                                if( theSomethingOrNothing){}/* CQT */

                                return aThis_here.fprDo_RefreshBloquesDeOperador( theActionIsEdition);
                            });
                    });


                    aListener.fIdentifyingWithTitleJSON = function() {

                        var aIdentifiyingWithTitleJSON = aThis_here.fIdentifyingWithTitleJSON();

                        var anIdentifyingJSON = {
                            "type": aMethodName,
                            "title": aIdentifiyingWithTitleJSON,
                            "theNombreLista": theNombreLista
                        };
                        if( anIdentifyingJSON){}/* CQT */
                        return anIdentifyingJSON;
                    };
                    aListener.fIdentifyingJSON = aListener.fIdentifyingWithTitleJSON;


                    return aListener;

                })();
            };
            if( fNewActionsHappenedListener){}/* CQT */
            aPrototype.fNewActionsHappenedListener = fNewActionsHappenedListener;









            var pUnRegisterActionHappenedListener = function( ) {

                if( !this._v_BloquesDeFicheroListener) {
                    return;
                }

                var aGridCtrl = this.fGridCtrlNamed( theS_DefinicionbloquesInstrumentacionCtrlSpecs.BLOQUESDEFICHERO_NAME);
                if( !aGridCtrl) {
                    return;
                }

                aGridCtrl.pRemoveActionHappenedListener( this._v_BloquesDeFicheroListener);

                this._v_BloquesDeFicheroListener = null;
            };
            if( pUnRegisterActionHappenedListener){}/* CQT */
            aPrototype.pUnRegisterActionHappenedListener = pUnRegisterActionHappenedListener;








            var fprDo_RefreshBloquesDeOperador = function( theActionIsEdition) {

                var aOperadoresGridCtrl = this.fGridCtrlNamed( theS_DefinicionbloquesInstrumentacionCtrlSpecs.OPERADORES_NAME);
                if( !aOperadoresGridCtrl) {
                    return this.fNewDeferredResolvePromise();
                }

                var aOperadoresSelection = aOperadoresGridCtrl.fSelection();
                if( !aOperadoresSelection){
                    return this.fNewDeferredResolvePromise();
                }

                var aBloquesDeOperadorGridCtrl = this.fGridCtrlNamed( theS_DefinicionbloquesInstrumentacionCtrlSpecs.BLOQUESDEOPERADOR_NAME);
                if( !aBloquesDeOperadorGridCtrl) {
                    return this.fNewDeferredResolvePromise();
                }

                var aBloqueDeOperadorEditorCtrl = this.fEditorCtrlNamed( theS_DefinicionbloquesInstrumentacionCtrlSpecs.BLOQUEDEOPERADOR_NAME);


                var aThis = this;

                return aBloquesDeOperadorGridCtrl.fprDo_RetrieveRowsAgain()
                    .then( function( theRetrieved) {

                        var aBloquesDeOperadorSelection = aBloquesDeOperadorGridCtrl.fSelection();
                        if( !aBloquesDeOperadorSelection){
                            return aThis.fNewDeferredResolvePromise( theRetrieved);
                        }

                        return aBloqueDeOperadorEditorCtrl.fprDo_RetrieveFieldsAgain()
                            .then( function( theRetrieved) {

                                if( !theActionIsEdition) {
                                    return aThis.fNewDeferredResolvePromise( theRetrieved);
                                }

                                var aBloquesDeFicheroGridCtrl = aThis.fGridCtrlNamed( theS_DefinicionbloquesInstrumentacionCtrlSpecs.BLOQUESDEFICHERO_NAME);
                                if( !aBloquesDeFicheroGridCtrl) {
                                    return aThis.fNewDeferredResolvePromise();
                                }

                                return aBloquesDeFicheroGridCtrl.fprDo_RetrieveRowsAgain();
                            });
                    });

            };
            if( fprDo_RefreshBloquesDeOperador){}/* CQT */
            aPrototype.fprDo_RefreshBloquesDeOperador = fprDo_RefreshBloquesDeOperador;








            var fprDo_InitialExtra = function() {

                this.pObtainConverter();

                return aPrototype._v_SuperPrototype.fprDo_InitialExtra.apply( this);

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






            return aPrototype;

        })();




        var DefinicionbloquesCtrl_Constructor = function( theTitle, theIdentifier, theRecorder, theScope,
                                                        theParentCtrl,
                                                        theConverter) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_CommonspringnutCtrlType.CommonspringnutCtrl_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;
            this._v_Module = null;

            this._v_CtrlSpecs         = null;

            this._v_TipoBoletin       = null;
            this._v_TipoBoletinForURL = null;

            this._v_IsInstrumentacion = null;

            this._v_BloquesDeFicheroListener = null;

            this._pInit_DefinicionbloquesCtrl( theTitle, theIdentifier, theRecorder, theScope,
                                             theParentCtrl,
                                             theConverter);
        };
        DefinicionbloquesCtrl_Constructor.prototype = aDefinicionbloquesCtrl_Prototype;





        var DefinicionbloquesCtrl_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_CommonspringnutCtrlType.CommonspringnutCtrl_Prototype;

            this._v_Prototype = aDefinicionbloquesCtrl_Prototype;
            this._v_Type      = null;
            this._v_Module    = null;

            this._v_CtrlSpecs         = null;

            this._v_TipoBoletin       = null;
            this._v_TipoBoletinForURL = null;

            this._v_IsInstrumentacion = null;

            this._v_BloquesDeFicheroListener = null;

        };
        DefinicionbloquesCtrl_SuperPrototypeConstructor.prototype = aDefinicionbloquesCtrl_Prototype;



        var aModule = {
            "DefinicionbloquesCtrl_Prototype": aDefinicionbloquesCtrl_Prototype,
            "DefinicionbloquesCtrl_Constructor": DefinicionbloquesCtrl_Constructor,
            "DefinicionbloquesCtrl_SuperPrototypeConstructor": DefinicionbloquesCtrl_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aDefinicionbloquesCtrl_Prototype._v_Module = aModule;





        return aModule;
    };







    var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
    if( !anExistingModule) {

        var aModule = aMod_definer(
            theSS_Overrider,
            theSS_CommonspringnutCtrlType,
            theSS_DefinicionbloquesSvce,
            theSS_DefinicionbloquesInstrumentacionCtrlSpecs,
            theSS_DefinicionbloquesOperacionCtrlSpecs
        );
        anExistingModule = aModule;

        theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
    }






    return anExistingModule;

}]);







