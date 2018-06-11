'use strict';

/*
 * commonspringnut_ctrl_type.js
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






angular.module("commonspringnutTypes").factory("CommonspringnutCtrlType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "WithTabsCtrlType",
    "CredencialesSvce",
    function( theSS_typesregistry,
              theSS_Overrider,
              theSS_WithTabsCtrlType,
              theSS_CredencialesSvce) {




        var ModuleName     = "commonspringnut_ctrl_type";
        var ModulePackages = "springnut/commonspringnutctrls";
        var ModuleFullName = ModulePackages + "/" + ModuleName;



        var aMod_definer = function( theS_Overrider,
                                     theS_WithTabsCtrlType,
                                     theS_CredencialesSvce) {


            if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}





            var pgInitWithModuleVariations = function( theToInit) {

                if( !theToInit) {
                    return;
                }

                theToInit.ROLE_DEMO           = "DEMO";
                theToInit.ROLE_INSTALADOR     = "INSTALADOR";
                theToInit.ROLE_AVANZADO       = "AVANZADO";
                theToInit.ROLE_ADMINISTRADOR  = "ADMINISTRADOR";
                theToInit.ROLE_CODIFICADOR    = "CODIFICADOR";
                theToInit.ROLE_GRABADOR       = "GRABADOR";

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
                theToInit.DEFAULTCOMMONSPRINGNUTCTRLTITLE = "CommonspringnutCtrlDefaultName";

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









            var aCommonspringnutCtrl_Prototype = (function() {


                var aPrototype = new theS_WithTabsCtrlType.WithTabsCtrl_SuperPrototypeConstructor();

                pgInitFromModuleConstants( aPrototype);


                aPrototype._v_SuperPrototype = theS_WithTabsCtrlType.WithTabsCtrl_Prototype;


                aPrototype._v_Type = "CommonspringnutCtrl";

                aPrototype._v_Module = null;


                aPrototype._v_CtrlSpecs = null;


                aPrototype._v_AuthenticationPrincipalName = null;
                aPrototype._v_AuthenticationAuthorities   = null;

                aPrototype._v_HasRole_DEMO           = null;
                aPrototype._v_HasRole_INSTALADOR     = null;
                aPrototype._v_HasRole_AVANZADO       = null;
                aPrototype._v_HasRole_ADMINISTRADOR  = null;
                aPrototype._v_HasRole_CODIFICADOR    = null;
                aPrototype._v_HasRole_GRABADOR       = null;






                var _pInit = function( theTitle, theIdentifier, theRecorder, theScope,
                                       theParentCtrl,
                                       theConverter) {

                    this._pInit_CommonspringnutCtrl( theTitle, theIdentifier, theRecorder, theScope,
                        theParentCtrl,
                        theConverter);
                };
                if( _pInit){}/* CQT */
                aPrototype._pInit = _pInit;







                var _pInit_CommonspringnutCtrl = function( theTitle, theIdentifier, theRecorder, theScope,
                                                           theParentCtrl,
                                                           theConverter,
                                                           theCtrlSpecs) {

                    this._v_CtrlSpecs      = theCtrlSpecs;

                    /* Delegate on super prototype initialization */
                    aPrototype._v_SuperPrototype._pInit_WithTabsCtrl.apply( this, [
                        theTitle || this.DEFAULTCOMMONSPRINGNUTCTRLTITLE,
                        theIdentifier, theRecorder, theScope,
                        theCtrlSpecs.DOMIDPREFIX,
                        theParentCtrl,
                        theConverter,
                        theCtrlSpecs.GRIDPARAMETERS,
                        theCtrlSpecs.EDITPARAMETERS,
                        theCtrlSpecs.CREATEPARAMETERS,
                        theCtrlSpecs.WIRES,
                        theCtrlSpecs.GRIDNAMES_INITIALLOAD,
                        theCtrlSpecs.EDITORNAMES_INITIALLOAD,
                        null, /* theInitialInCreationNames, */
                        theCtrlSpecs.TOPTABSBAR_ENTRIES.slice(),
                        theCtrlSpecs.TOPTABSBAR_INITIALLYSELECTEDTAB,
                        theCtrlSpecs.TOPTABSBAR_TABSFIXEDINITIAL
                    ]);


                    this._v_Prototype = aPrototype;
                    this._v_Type      = this._v_Prototype._v_Type;
                    this._v_Module    = aPrototype._v_Module;


                    this._v_AuthenticationPrincipalName = null;
                    this._v_AuthenticationAuthorities   = null;

                    this._v_HasRole_DEMO           = null;
                    this._v_HasRole_INSTALADOR     = null;
                    this._v_HasRole_AVANZADO       = null;
                    this._v_HasRole_ADMINISTRADOR  = null;
                    this._v_HasRole_CODIFICADOR    = null;
                    this._v_HasRole_GRABADOR       = null;


                    this.pInitAuthentication();

                    this.pInitEditParametersCustomUIHandlers();

                    if( this._v_HasRole_DEMO         ){}/* CQT */
                    if( this._v_HasRole_INSTALADOR   ){}/* CQT */
                    if( this._v_HasRole_AVANZADO     ){}/* CQT */
                    if( this._v_HasRole_ADMINISTRADOR){}/* CQT */
                    if( this._v_HasRole_CODIFICADOR  ){}/* CQT */
                    if( this._v_HasRole_GRABADOR     ){}/* CQT */
                };
                if( _pInit_CommonspringnutCtrl){}/* CQT */
                aPrototype._pInit_CommonspringnutCtrl = _pInit_CommonspringnutCtrl;









                var pInitAuthentication = function() {

                    this._v_AuthenticationPrincipalName = theS_CredencialesSvce.fAuthenticationPrincipalName();
                    this._v_AuthenticationAuthorities   = theS_CredencialesSvce.fAuthenticationAuthorities();

                    if( this._v_AuthenticationAuthorities) {

                        this._v_HasRole_DEMO          = this._v_AuthenticationAuthorities.indexOf( this.ROLE_DEMO         ) >= 0;
                        this._v_HasRole_INSTALADOR    = this._v_AuthenticationAuthorities.indexOf( this.ROLE_INSTALADOR   ) >= 0;
                        this._v_HasRole_AVANZADO      = this._v_AuthenticationAuthorities.indexOf( this.ROLE_AVANZADO     ) >= 0;
                        this._v_HasRole_ADMINISTRADOR = this._v_AuthenticationAuthorities.indexOf( this.ROLE_ADMINISTRADOR) >= 0;
                        this._v_HasRole_CODIFICADOR   = this._v_AuthenticationAuthorities.indexOf( this.ROLE_CODIFICADOR  ) >= 0;
                        this._v_HasRole_GRABADOR      = this._v_AuthenticationAuthorities.indexOf( this.ROLE_GRABADOR     ) >= 0;
                    }

                };
                if( pInitAuthentication){}/* CQT */
                aPrototype.pInitAuthentication = pInitAuthentication;











                var pInitStaticTabsContent = function( ) {

                    if( this._v_StaticTabs) {
                        return;
                    }


                    this._v_StaticTabs  = { };

                    if( !this._v_CtrlSpecs) {
                        return;
                    }

                    if( !this._v_IsInstrumentacion) {
                        return;
                    }

                    if( this._v_GridSpecs) {
                        this._v_StaticTabs[ this._v_CtrlSpecs.STATICTAB_GRIDSPECS_NAME]   = JSON.stringify( this._v_GridSpecs, null, 4);
                    }
                    else {
                        this._v_StaticTabs[ this._v_CtrlSpecs.STATICTAB_GRIDSPECS_NAME]   = null;
                    }

                    if( this._v_EditorSpecs) {
                        this._v_StaticTabs[ this._v_CtrlSpecs.STATICTAB_EDITORSPECS_NAME]   = JSON.stringify( this._v_EditorSpecs, null, 4);
                    }
                    else {
                        this._v_StaticTabs[ this._v_CtrlSpecs.STATICTAB_EDITORSPECS_NAME]   = null;
                    }

                    if( this._v_CreatorSpecs) {
                        this._v_StaticTabs[ this._v_CtrlSpecs.STATICTAB_CREATORSPECS_NAME]   = JSON.stringify( this._v_CreatorSpecs, null, 4);
                    }
                    else {
                        this._v_StaticTabs[ this._v_CtrlSpecs.STATICTAB_CREATORSPECS_NAME]   = null;
                    }

                    if( this._v_WireSpecs) {
                        this._v_StaticTabs[ this._v_CtrlSpecs.STATICTAB_WIRESPECS_NAME]   = JSON.stringify( this._v_WireSpecs, null, 4);
                    }
                    else {
                        this._v_StaticTabs[ this._v_CtrlSpecs.STATICTAB_WIRESPECS_NAME]   = null;
                    }

                };
                if( pInitStaticTabsContent){}/* CQT */
                aPrototype.pInitStaticTabsContent = pInitStaticTabsContent;










                var pInitialObtainConverter = function() {
                };
                if( pInitialObtainConverter){}/* CQT */
                aPrototype.pInitialObtainConverter = pInitialObtainConverter;








                var pDestroy = function() {

                    this._v_CtrlSpecs = null;

                    this._v_AuthenticationPrincipalName = null;
                    this._v_AuthenticationAuthorities   = null;

                    this._v_HasRole_DEMO           = null;
                    this._v_HasRole_INSTALADOR     = null;
                    this._v_HasRole_AVANZADO       = null;
                    this._v_HasRole_ADMINISTRADOR  = null;
                    this._v_HasRole_CODIFICADOR    = null;
                    this._v_HasRole_GRABADOR       = null;

                    aPrototype._v_SuperPrototype.pDestroy.apply( this);
                };
                if( pDestroy){}/* CQT */
                aPrototype.pDestroy = pDestroy;







                var fprDo_GoToTab = function( theGoToTabSpec, theSelectionValue) {

                    if( !theGoToTabSpec) {
                        return this.fNewDeferredResolveWithNothingPromise();
                    }

                    var aTabName = theGoToTabSpec[ "tabName"];
                    if( aTabName) {
                        if( this._v_TabsTopCtrl) {
                            this._v_TabsTopCtrl.pSelectTab( aTabName);
                        }
                    }

                    var aSelection = theGoToTabSpec[ "selection"];
                    if( !aSelection) {
                        return this.fNewDeferredResolveWithNothingPromise();
                    }

                    var aGridName = aSelection[ "gridName"];
                    if( !aGridName) {
                        return this.fNewDeferredResolveWithNothingPromise();
                    }

                    var aGridCtrl = this.fGridCtrlNamed( aGridName);
                    if( !aGridCtrl) {
                        return this.fNewDeferredResolveWithNothingPromise();
                    }

                    return aGridCtrl.fprDo_GoToSelection( aSelection, theSelectionValue);
                };
                if( fprDo_GoToTab){}/* CQT */
                aPrototype.fprDo_GoToTab = fprDo_GoToTab;









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











                var fprDo_CheckSessionLoggedAuthenticated = function() {
                    return this.fNewDeferredResolveWithNothingPromise();
                };
                if( fprDo_CheckSessionLoggedAuthenticated){}/* CQT */
                aPrototype.fprDo_CheckSessionLoggedAuthenticated = fprDo_CheckSessionLoggedAuthenticated;









                var pInitEditParametersCustomUIHandlers = function() {
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







                var fHasAnyRole = function( theRoles) {

                    if( !theRoles) {
                        return false;
                    }
                    
                    if( !this._v_AuthenticationAuthorities) {
                        return false;
                    }
                    
                    var aNumRoles = theRoles.length;
                    for( var aRoleIdx=0; aRoleIdx < aNumRoles; aRoleIdx++) {
                        var aRole = theRoles[ aRoleIdx];
                        if( aRole) {
                            if( this._v_AuthenticationAuthorities.indexOf( aRole) >= 0) {
                                return true;
                            }
                        }
                    }
                    return false;
                };
                if( fHasAnyRole){}/* CQT */
                aPrototype.fHasAnyRole = fHasAnyRole;

                



                return aPrototype;

            })();




            var CommonspringnutCtrl_Constructor = function( theTitle, theIdentifier, theRecorder, theScope,
                                                            theParentCtrl,
                                                            theConverter) {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_WithTabsCtrlType.WithTabsCtrl_Prototype;

                this._v_Prototype = null;
                this._v_Type = null;
                this._v_Module = null;

                this._v_AuthenticationPrincipalName = null;
                this._v_AuthenticationAuthorities   = null;

                this._v_HasRole_DEMO           = null;
                this._v_HasRole_INSTALADOR     = null;
                this._v_HasRole_AVANZADO       = null;
                this._v_HasRole_ADMINISTRADOR  = null;
                this._v_HasRole_CODIFICADOR    = null;
                this._v_HasRole_GRABADOR       = null;


                this._pInit_CommonspringnutCtrl( theTitle, theIdentifier, theRecorder, theScope,
                    theParentCtrl,
                    theConverter);
            };
            CommonspringnutCtrl_Constructor.prototype = aCommonspringnutCtrl_Prototype;





            var CommonspringnutCtrl_SuperPrototypeConstructor = function() {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_WithTabsCtrlType.WithTabsCtrl_Prototype;

                this._v_Prototype = aCommonspringnutCtrl_Prototype;
                this._v_Type      = null;
                this._v_Module    = null;

                this._v_AuthenticationPrincipalName = null;
                this._v_AuthenticationAuthorities   = null;

                this._v_HasRole_DEMO           = null;
                this._v_HasRole_INSTALADOR     = null;
                this._v_HasRole_AVANZADO       = null;
                this._v_HasRole_ADMINISTRADOR  = null;
                this._v_HasRole_CODIFICADOR    = null;
                this._v_HasRole_GRABADOR       = null;
            };
            CommonspringnutCtrl_SuperPrototypeConstructor.prototype = aCommonspringnutCtrl_Prototype;



            var aModule = {
                "CommonspringnutCtrl_Prototype": aCommonspringnutCtrl_Prototype,
                "CommonspringnutCtrl_Constructor": CommonspringnutCtrl_Constructor,
                "CommonspringnutCtrl_SuperPrototypeConstructor": CommonspringnutCtrl_SuperPrototypeConstructor
            };
            pgInitFromModuleConstants( aModule);
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;

            aCommonspringnutCtrl_Prototype._v_Module = aModule;





            return aModule;
        };







        var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        if( !anExistingModule) {

            var aModule = aMod_definer(
                theSS_Overrider,
                theSS_WithTabsCtrlType,
                theSS_CredencialesSvce
            );
            anExistingModule = aModule;

            theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
        }






        return anExistingModule;

    }]);







