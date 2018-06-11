'use strict';

/*
 * credenciales_svce_type.js
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






angular.module("credencialesTypes").factory("CredencialesSvceType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "CommonSvceType",
function( theSS_typesregistry,
          theSS_Overrider,
          theSS_CommonSvceType) {




    var ModuleName     = "credenciales_svce_type";
    var ModulePackages = "springnut/reveng";
    var ModuleFullName = ModulePackages + "/" + ModuleName;



    var aMod_definer = function( theS_Overrider,
                                 theS_CommonSvceType) {


        if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}







        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.DOMID_AuthenticationPrincipalName = "did_AuthenticationPrincipalName";
            theToInit.DOMID_AuthenticationAuthorities   = "did_AuthenticationAuthorities";

            theToInit.AUTHENTICATIONAUTHORITIESINPUTVALUESEPARATOR = ",";

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


            theToInit.CREDENCIALES_DEFAULTNAME = "CredencialesSvceDefaultName";


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











        var aCredencialesSvce_Prototype = (function() {


            var aPrototype = new theS_CommonSvceType.CommonSvce_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_SuperPrototype = theS_CommonSvceType.CommonSvce_Prototype;


            aPrototype._v_Type = "Credenciales";

            aPrototype._v_Module = null;


            aPrototype._v_AuthenticationPrincipalName = null;
            aPrototype._v_AuthenticationAuthorities   = null;







            var _pInit = function( theTitle, theIdentifier, theRecorder) {

                this._pInit_CredencialesSvce( theTitle, theIdentifier, theRecorder);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;






            var _pInit_CredencialesSvce = function( theTitle, theIdentifier, theRecorder) {

                aPrototype._v_SuperPrototype._pInit_CommonSvce.apply( this, [
                    theTitle || this.CREDENCIALES_DEFAULTNAME,
                    theIdentifier,
                    theRecorder
                ]);

                this._v_Prototype = aPrototype;
                this._v_Type      = this._v_Prototype._v_Type;
                this._v_Module    = aPrototype._v_Module;

                this._v_AuthenticationPrincipalName = null;
                this._v_AuthenticationAuthorities   = null;

                var anAuthenticationPrincipalNameField = document.getElementById( this.DOMID_AuthenticationPrincipalName);
                if( anAuthenticationPrincipalNameField) {
                    this._v_AuthenticationPrincipalName = anAuthenticationPrincipalNameField.value;
                }

                var anAuthenticationAuthoritiesField = document.getElementById( this.DOMID_AuthenticationAuthorities);
                if( anAuthenticationAuthoritiesField) {
                    var anAuthoritiesStr = anAuthenticationAuthoritiesField.value;
                    if( anAuthoritiesStr) {
                        var someAuthorities = anAuthoritiesStr.split( this.AUTHENTICATIONAUTHORITIESINPUTVALUESEPARATOR);
                        this._v_AuthenticationAuthorities = someAuthorities;
                    }
                }
            };
            if( _pInit_CredencialesSvce){}/* CQT */
            aPrototype._pInit_CredencialesSvce = _pInit_CredencialesSvce;








            var fAuthenticationPrincipalName = function() {
                return this._v_AuthenticationPrincipalName;
            };
            if( fAuthenticationPrincipalName){}/* CQT */
            aPrototype.fAuthenticationPrincipalName = fAuthenticationPrincipalName;







            var fAuthenticationAuthorities = function() {
                return this._v_AuthenticationAuthorities;
            };
            if( fAuthenticationAuthorities){}/* CQT */
            aPrototype.fAuthenticationAuthorities = fAuthenticationAuthorities;






            return aPrototype;

        })();




        var CredencialesSvce_Constructor = function( theTitle, theIdentifier, theRecorder, theScope,
                                                 theParentCtrl,
                                                 theConverter) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_CommonSvceType.CommonSvce_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;
            this._v_Module = null;

            this._v_AuthenticationPrincipalName  = null;
            this._v_AuthenticationAuthorities    = null;

            this._pInit_CredencialesSvce( theTitle, theIdentifier, theRecorder);
        };
        CredencialesSvce_Constructor.prototype = aCredencialesSvce_Prototype;





        var CredencialesSvce_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_CommonSvceType.CommonSvce_Prototype;

            this._v_Prototype = aCredencialesSvce_Prototype;
            this._v_Type      = null;
            this._v_Module    = null;

            this._v_AuthenticationPrincipalName = null;
            this._v_AuthenticationAuthorities   = null;
        };
        CredencialesSvce_SuperPrototypeConstructor.prototype = aCredencialesSvce_Prototype;



        var aModule = {
            "CredencialesSvce_Prototype": aCredencialesSvce_Prototype,
            "CredencialesSvce_Constructor": CredencialesSvce_Constructor,
            "CredencialesSvce_SuperPrototypeConstructor": CredencialesSvce_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aCredencialesSvce_Prototype._v_Module = aModule;










        return aModule;
    };







    var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
    if( !anExistingModule) {

        var aModule = aMod_definer(
            theSS_Overrider,
            theSS_CommonSvceType
        );
        anExistingModule = aModule;

        theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
    }






    return anExistingModule;

}]);







