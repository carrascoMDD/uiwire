'use strict';

/*
 * converted_ctrl_type.js
 *
 * Creado @author Antonio Carrasco Valero 201410112053
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






angular.module("widgetCtrlsTypes").factory("ConvertedCtrlType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "NestedCtrlType",
    "ConverterType",
    "$timeout",
function( theSS_typesregistry,
          theSS_Overrider,
          theSS_NestedCtrlType,
          theSS_ConverterType,
          theSS_timeout) {




    var ModuleName     = "converted_ctrl_type";
    var ModulePackages = "widgetctrls";
    var ModuleFullName = ModulePackages + "/" + ModuleName;



    var aMod_definer = function( theS_Overrider,
                                 theS_NestedCtrlType,
                                 theS_ConverterType,
                                 $timeout) {

        if( $timeout){}/* CQT */

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
            theToInit.DEFAULTTITLE = "ConvertedCtrlDefaultName";

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






        var aConvertedCtrl_Prototype = (function() {


            var aPrototype = new theS_NestedCtrlType.NestedCtrl_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_SuperPrototype = theS_NestedCtrlType.NestedCtrl_Prototype;


            aPrototype._v_Type = "ConvertedCtrl";

            aPrototype._v_Module = null;


            aPrototype._v_Converter = null;






            var _pInit = function( theTitle, theIdentifier, theRecorder, theScope,
                                   theDomIdPrefix,
                                   theParentCtrl,
                                   theConverter) {

                this._pInit_ConvertedCtrl( theTitle, theIdentifier, theRecorder, theScope,
                                           theDomIdPrefix,
                                           theParentCtrl,
                                           theConverter);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_ConvertedCtrl = function( theTitle, theIdentifier, theRecorder, theScope,
                                                 theDomIdPrefix,
                                                 theParentCtrl,
                                                 theConverter) {

                /* Delegate on super prototype initialization */
                aPrototype._v_SuperPrototype._pInit_NestedCtrl.apply( this, [ theTitle, theIdentifier, theRecorder, theScope,
                                                                              theDomIdPrefix,
                                                                              theParentCtrl]);

                this._v_Prototype = aPrototype;
                this._v_Type      = this._v_Prototype._v_Type;
                this._v_Module    = aPrototype._v_Module;


                this._v_Converter = theConverter;

                if( this._v_Converter){}/* CQT */
            };
            if( _pInit_ConvertedCtrl){}/* CQT */
            aPrototype._pInit_ConvertedCtrl = _pInit_ConvertedCtrl;








            var fConverter = function( ) {

                return this._v_Converter;
            };
            if( fConverter){}/* CQT */
            aPrototype.fConverter = fConverter;









            var pObtainConverter = function( ) {

                if( this._v_Converter) {
                    return;
                }

                if( this._v_ParentCtrl) {
                    if( this._v_ParentCtrl.fConverter && ( typeof this._v_ParentCtrl.fConverter == "function")) {

                        this._v_Converter = this._v_ParentCtrl.fConverter();
                    }
                }

                if( this._v_Converter) {
                    return;
                }

                var aTitle = this._v_Title;
                if( !aTitle) {
                    aTitle = "?";
                }
                this._v_Converter = new theS_ConverterType.Converter_Constructor(
                    "ConverterFor-" + aTitle,
                    this._v_Identifier,
                    this._v_Recorder,
                    this,
                    null,
                    null
                );
            };
            if( pObtainConverter){}/* CQT */
            aPrototype.pObtainConverter = pObtainConverter;









            var pInitialObtainConverter = function() {

                this.pObtainConverter();
            };
            if( pInitialObtainConverter){}/* CQT */
            aPrototype.pInitialObtainConverter = pInitialObtainConverter;









            var fprDo_InitialExtra = function() {

                this.pObtainConverter();

                return aPrototype._v_SuperPrototype.fprDo_InitialExtra.apply( this);
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




        var ConvertedCtrl_Constructor = function( theTitle, theIdentifier, theRecorder, theScope,
                                                  theDomIdPrefix,
                                                  theParentCtrl,
                                                  theConverter) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_NestedCtrlType.NestedCtrl_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;
            this._v_Module = null;

            this._v_Converter = null;

            this._pInit_ConvertedCtrl( theTitle, theIdentifier, theRecorder, theScope,
                                       theDomIdPrefix,
                                       theParentCtrl,
                                       theConverter);
        };
        ConvertedCtrl_Constructor.prototype = aConvertedCtrl_Prototype;







        var ConvertedCtrl_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_NestedCtrlType.NestedCtrl_Prototype;

            this._v_Prototype = aConvertedCtrl_Prototype;
            this._v_Type      = null;
            this._v_Module    = null;

            this._v_Converter = null;
        };
        ConvertedCtrl_SuperPrototypeConstructor.prototype = aConvertedCtrl_Prototype;



        var aModule = {
            "ConvertedCtrl_Prototype": aConvertedCtrl_Prototype,
            "ConvertedCtrl_Constructor": ConvertedCtrl_Constructor,
            "ConvertedCtrl_SuperPrototypeConstructor": ConvertedCtrl_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aConvertedCtrl_Prototype._v_Module = aModule;





        return aModule;
    };







    var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
    if( !anExistingModule) {

        var aModule = aMod_definer(
            theSS_Overrider,
            theSS_NestedCtrlType,
            theSS_ConverterType,
            theSS_timeout
        );
        anExistingModule = aModule;

        theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
    }






    return anExistingModule;

}]);







