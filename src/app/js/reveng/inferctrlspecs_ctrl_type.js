'use strict';

/*
 * inferctrlspecs_ctrl_type.js
 *
 * Creado @author Antonio Carrasco Valero 201411101935
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






angular.module("revengTypes").factory("InferctrlspecsCtrlType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "CommonCtrlType",
    "InferctrlspecsSvce",
function( theSS_typesregistry,
          theSS_Overrider,
          theSS_CommonCtrlType,
          theSS_InferctrlspecsSvce) {




    var ModuleName     = "inferctrlspecs_ctrl_type";
    var ModulePackages = "springnut/fasesvalidacion";
    var ModuleFullName = ModulePackages + "/" + ModuleName;



    var aMod_definer = function( theS_Overrider,
                                 theS_CommonCtrlType,
                                 theS_InferctrlspecsSvce) {


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
            theToInit.DEFAULTINFERCTRLSPECSCTRLTITLE = "InferctrlspecsCtrlDefaultName";


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









        var aInferctrlspecsCtrl_Prototype = (function() {


            var aPrototype = new theS_CommonCtrlType.CommonCtrl_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_SuperPrototype = theS_CommonCtrlType.CommonCtrl_Prototype;


            aPrototype._v_Type = "InferctrlspecsCtrl";

            aPrototype._v_Module = null;


            aPrototype._v_InferredSpecsJSON = null;





            var _pInit = function( theTitle, theIdentifier, theRecorder, theScope) {

                this._pInit_InferctrlspecsCtrl( theTitle, theIdentifier, theRecorder, theScope);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_InferctrlspecsCtrl = function( theTitle, theIdentifier, theRecorder, theScope) {

                /* Delegate on super prototype initialization */
                aPrototype._v_SuperPrototype._pInit_CommonCtrl.apply( this, [
                    theTitle || this.DEFAULTINFERCTRLSPECSCTRLTITLE,
                    theIdentifier, theRecorder, theScope]);

                this._v_Prototype = aPrototype;
                this._v_Type      = this._v_Prototype._v_Type;
                this._v_Module    = aPrototype._v_Module;

                this._v_InferredSpecsJSON = null;

                if( this._v_InferredSpecsJSON){}/* CQT */
            };
            if( _pInit_InferctrlspecsCtrl){}/* CQT */
            aPrototype._pInit_InferctrlspecsCtrl = _pInit_InferctrlspecsCtrl;









            var fInferctrlspecsSvce = function( ) {

                return theS_InferctrlspecsSvce;
            };
            if( fInferctrlspecsSvce){}/* CQT */
            aPrototype.fInferctrlspecsSvce = fInferctrlspecsSvce;









            var fprDo_CheckSessionLoggedAuthenticated = function() {
                return this.fNewDeferredResolveWithNothingPromise();
            };
            if( fprDo_CheckSessionLoggedAuthenticated){}/* CQT */
            aPrototype.fprDo_CheckSessionLoggedAuthenticated = fprDo_CheckSessionLoggedAuthenticated;







            var fprDo_InferFromDefaultSampleData = function() {

                var anInferredSpecs = this.fInferctrlspecsSvce().fInferFromDefaultSampleData();

                var anInferredSpecsJSON = JSON.stringify( anInferredSpecs, null, 4);
                if( anInferredSpecsJSON){} /* CQT */

                this._v_InferredSpecsJSON = anInferredSpecsJSON;

                return this.fNewDeferredResolveWithSomethingPromise( anInferredSpecs);

            };
            if( fprDo_InferFromDefaultSampleData){} /* CQT */
            aPrototype.fprDo_InferFromDefaultSampleData = fprDo_InferFromDefaultSampleData;








            var fUI_InferFromDefaultSampleData_ClickListener = function() {

                var aThis = this;

                this.fprDo_InferFromDefaultSampleData( )
                    .then(
                        function( theInferredSpecs) {

                            console.log( "fUI_InferFromDefaultSampleData_ClickListener Generated CtrlSpecs\n" + JSON.stringify( theInferredSpecs, null, 4));

                            return aThis.fNewDeferredResolveWithSomethingPromise( theInferredSpecs);
                        }
                    )
                    ["catch"]( function( theError) {
                        if( theError){}/* CQT */
                        console.log( "\n\nfUI_InferFromDefaultSampleData_ClickListener ERROR LAUNCHING\n\n\n");
                    });

                return true;
            };
            if( fUI_InferFromDefaultSampleData_ClickListener){}/* CQT */
            aPrototype.fUI_InferFromDefaultSampleData_ClickListener = fUI_InferFromDefaultSampleData_ClickListener;






            var fprDo_InitialExtra = function() {

                var aThis = this;

                return this.fprDo_CheckSessionLoggedAuthenticated()
                    .then( function( ) {
                        return aThis.fprDo_InferFromDefaultSampleData( );
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




        var InferctrlspecsCtrl_Constructor = function( theTitle, theIdentifier, theRecorder, theScope,
                                                        theTipoBoletin,
                                                        theIdFase) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_CommonCtrlType.CommonCtrl_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;
            this._v_Module = null;

            this._v_InferredSpecsJSON = null;

            this._pInit_InferctrlspecsCtrl( theTitle, theIdentifier, theRecorder, theScope,
                                             theTipoBoletin,
                                             theIdFase);
        };
        InferctrlspecsCtrl_Constructor.prototype = aInferctrlspecsCtrl_Prototype;





        var InferctrlspecsCtrl_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_CommonCtrlType.CommonCtrl_Prototype;

            this._v_Prototype = aInferctrlspecsCtrl_Prototype;
            this._v_Type      = null;
            this._v_Module    = null;

            this._v_InferredSpecsJSON = null;
        };
        InferctrlspecsCtrl_SuperPrototypeConstructor.prototype = aInferctrlspecsCtrl_Prototype;



        var aModule = {
            "InferctrlspecsCtrl_Prototype": aInferctrlspecsCtrl_Prototype,
            "InferctrlspecsCtrl_Constructor": InferctrlspecsCtrl_Constructor,
            "InferctrlspecsCtrl_SuperPrototypeConstructor": InferctrlspecsCtrl_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aInferctrlspecsCtrl_Prototype._v_Module = aModule;





        return aModule;
    };







    var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
    if( !anExistingModule) {

        var aModule = aMod_definer(
            theSS_Overrider,
            theSS_CommonCtrlType,
            theSS_InferctrlspecsSvce
        );
        anExistingModule = aModule;

        theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
    }






    return anExistingModule;

}]);







