'use strict';

/*
 * overrider_type.js
 *
 * Creado @author Antonio Carrasco Valero 201410030300
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



angular.module("rootsTypes").factory("OverriderType", [
    "TypesRegistrySvce",
function( theSS_typesregistry) {


    var ModuleName     = "overrider_type";
    var ModulePackages = "roots";
    var ModuleFullName = ModulePackages + "/" + ModuleName;



    var aMod_definer = function() {


        if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}








        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
                return;
            }
            theToInit.OVERRIDER_DEFAULTTITLE = "OverriderDefaultName";
        };



        var ModuleConstants = {};
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






        var aOverrider_Prototype = (function() {


            var aPrototype = {};

            pgInitFromModuleConstants( aPrototype);




            aPrototype._v_Type = "Overrider";

            aPrototype._v_Module = null;





            var _pInit = function( theIdentifier, theRecorder, theTitle) {

                this._pInit_Overrider( theIdentifier, theRecorder, theTitle);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;






            var _fTitleDefault = function( ) {

               return this.BASECMP_DEFAULTTITLE;
            };
            if( _fTitleDefault){}/* CQT */
            aPrototype._fTitleDefault = _fTitleDefault;






            var _pInit_Overrider = function( theTitle) {

                this._v_Prototype = aPrototype;
                this._v_Type      = this._v_Prototype._v_Type;
                this._v_Module    = aPrototype._v_Module;

                this._v_Title = theTitle;
                if( !this._v_Title) {
                    this._v_Title = this.OVERRIDER_DEFAULTTITLE;
                }
            };
            if( _pInit_Overrider){}/* CQT */
            aPrototype._pInit_Overrider = _pInit_Overrider;









            var fIdentifyingJSON = function() {

                var aIdentifiyingJSON = {
                    "type": this._v_Type,
                    "id": this._v_Id
                };
                if( aIdentifiyingJSON){}/* CQT */
                return aIdentifiyingJSON;
            };
            if( fIdentifyingJSON){}/* CQT */
            aPrototype.fIdentifyingJSON = fIdentifyingJSON;






            var fIdentifyingString = function() {

                var aIdentifyingJSON = this.fIdentifyingJSON();

                var aIdentifyingString = JSON.stringify( aIdentifyingJSON);
                if( aIdentifyingString){}/* CQT */

                return aIdentifyingString;
            };
            if( fIdentifyingString){}/* CQT */
            aPrototype.fIdentifyingString = fIdentifyingString;







            var fIdentifyingWithTitleJSON = function() {

                var aIdentifyingJSON = this.fIdentifyingJSON();

                aIdentifyingJSON[ "title"] = this._v_Title;

                return aIdentifyingJSON;
            };
            if( fIdentifyingWithTitleJSON){}/* CQT */
            aPrototype.fIdentifyingWithTitleJSON = fIdentifyingWithTitleJSON;






            var fIdentifyingWithTitleString = function() {

                var aIdentifyingJSON = this.fIdentifyingWithTitleJSON();

                var aIdentifyingString = JSON.stringify( aIdentifyingJSON);
                if( aIdentifyingString){}/* CQT */

                return aIdentifyingString;
            };
            if( fIdentifyingWithTitleString){}/* CQT */
            aPrototype.fIdentifyingWithTitleString = fIdentifyingWithTitleString;










            var fToResultJSON = function( theCommonObjects, theAlready) {
                if( !( theAlready == null)) {
                    if( theAlready.fAlready( this)){
                        return this.fIdentifyingJSON();
                    }
                }

                var aResultJSON = this.fIdentifyingWithTitleJSON();
                if( aResultJSON){}/* CQT */

                return aResultJSON;
            };
            if( fToResultJSON){}/* CQT */
            aPrototype.fToResultJSON = fToResultJSON;







            var pOverrideModuleVariations = function( theModuleFullName, theModuleVariations) {
            };
            if( pOverrideModuleVariations){}/* CQT */
            aPrototype.pOverrideModuleVariations = pOverrideModuleVariations;







            return aPrototype;

        })();




        var Overrider_Constructor = function( theTitle) {
            this._v_Prototype = null;
            this._v_Type = null;
            this._v_Module = null;

            this._v_Title = null;

            this._pInit_Overrider( theTitle);
        };
        Overrider_Constructor.prototype = aOverrider_Prototype;





        var Overrider_SuperPrototypeConstructor = function() {
            this._v_Prototype = aOverrider_Prototype;
            this._v_Type      = null;
            this._v_Module    = null;

            this._v_Title     = null;
        };
        Overrider_SuperPrototypeConstructor.prototype = aOverrider_Prototype;



        var aModule = {
            "Overrider_Prototype": aOverrider_Prototype,
            "Overrider_Constructor": Overrider_Constructor,
            "Overrider_SuperPrototypeConstructor": Overrider_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aOverrider_Prototype._v_Module = aModule;




        return aModule;
    };







    var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
    if( !anExistingModule) {

        var aModule = aMod_definer();
        anExistingModule = aModule;

        theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
    }






    return anExistingModule;

}]);







