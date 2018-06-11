'use strict';

/*
 * hitserver_adapted_svce_type.js
 *
 * Creado @author Antonio Carrasco Valero 201512301752
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




angular.module("hitServerTypes").factory("HitServerAdaptedSvceType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "HitServerSvceType",
    "IdentifierType",
    "HitServerReport",
    "HttpSvce",
    "HitAdapterSpringSvceType",
function( theSS_typesregistry,
          theSS_Overrider,
          theSS_HitServerSvceType,
          theSS_IdentifierType,
          theSS_HitServerReport,
          theSS_HttpSvce,
          theSS_HitAdapterSpringSvceType){



    var ModuleName     = "hitserver_adapted_svce_type";
    var ModulePackages = "hitserver";
    var ModuleFullName = ModulePackages + "/" + ModuleName;





    var aMod_definer = function( theS_Overrider,
                                 theS_HitServerSvceType,
                                 theS_IdentifierType,
                                 theS_HitServerReport,
                                 theS_HttpSvce,
                                 theS_HitAdapterSpringSvceType) {


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


            theToInit.HITSERVERADAPTEDSVCE_DEFAULTNAME = "HitServerAdaptedSvceDefaultName";




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






        var aHitServerAdaptedSvce_Prototype = (function() {


            var aPrototype = new theS_HitServerSvceType.HitServerSvce_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_SuperPrototype = theS_HitServerSvceType.HitServerSvce_Prototype;


            aPrototype._v_Type = "HitServerAdaptedSvce";

            aPrototype._v_Module = null;



            aPrototype._v_HitAdapter        = null;




            var _pInit = function( theTitle, theIdentifier, theRecorder) {

                this._pInit_HitServerAdaptedSvce( theTitle, theIdentifier, theRecorder);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_HitServerAdaptedSvce = function( theTitle, theIdentifier, theRecorder) {

                /* Delegate on super prototype initialization */
                aPrototype._v_SuperPrototype._pInit_HitServerSvce.apply( this, [
                    theTitle || this.HITSERVERADAPTEDSVCE_DEFAULTNAME,
                    theIdentifier,
                    theRecorder
                ]);

                this._v_Prototype = aPrototype;
                this._v_Type      = this._v_Prototype._v_Type;
                this._v_Module    = aPrototype._v_Module;


                this._v_HitAdapter        = null;

                this.pInitHitAdapter();

            };
            if( _pInit_HitServerAdaptedSvce){}/* CQT */
            aPrototype._pInit_HitServerAdaptedSvce = _pInit_HitServerAdaptedSvce;







            var pInitHitAdapter = function( ) {

                this._v_HitAdapter = new theS_HitAdapterSpringSvceType.HitAdapterSpringSvce_Constructor(
                    "(HitAdapter-Spring-For-" + this._v_Title + ")",
                    this._v_Identifier,
                    this._v_Recorder,
                    this
                );
            };
            if( pInitHitAdapter){}/* CQT */
            aPrototype.pInitHitAdapter = pInitHitAdapter;















            var fprDo_RetrieveListWithParm = function( theOperationKind, theOperationName, theTitle, theURL, theHitType, theField, theUrlParm, theFirstIndex, theHowMany) {

                var anOperationReport = this.fCreateAndRegisterReport(
                    theOperationKind,
                    theOperationName,
                    theTitle,
                    theURL,
                    theHitType,
                    theField,
                    theUrlParm,
                    null,
                    theFirstIndex,
                    theHowMany
                );


                if( !this._v_HitAdapter) {
                    return this.fNewDeferredRejectPromise(  anOperationReport);
                }

                return this._v_HitAdapter.fprDo_RetrieveListWithParm( anOperationReport);
            };
            if( fprDo_RetrieveListWithParm){}/* CQT */
            aPrototype.fprDo_RetrieveListWithParm = fprDo_RetrieveListWithParm;











            var fprDo_RetrieveListWithQuery = function( theOperationKind, theOperationName, theTitle, theURL, theHitType, theField, theQueryParms, theFirstIndex, theHowMany) {


                var anOperationReport = this.fCreateAndRegisterReport(
                    theOperationKind,
                    theOperationName,
                    theTitle,
                    theURL,
                    theHitType,
                    theField,
                    theQueryParms,
                    null,
                    theFirstIndex,
                    theHowMany
                );

                if( !this._v_HitAdapter) {
                    return this.fNewDeferredRejectPromise(  anOperationReport);
                }

                return this._v_HitAdapter.fprDo_RetrieveListWithQuery( anOperationReport);

            };
            if( fprDo_RetrieveListWithQuery){}/* CQT */
            aPrototype.fprDo_RetrieveListWithQuery = fprDo_RetrieveListWithQuery;









            var fprDo_RetrieveList = function( theOperationKind, theOperationName, theTitle, theURL, theHitType, theField, theFirstIndex, theHowMany) {

                var anOperationReport = this.fCreateAndRegisterReport(
                    theOperationKind,
                    theOperationName,
                    theTitle,
                    theURL,
                    theHitType,
                    theField,
                    null,
                    null,
                    theFirstIndex,
                    theHowMany
                );

                if( !this._v_HitAdapter) {
                    return this.fNewDeferredRejectPromise(  anOperationReport);
                }


                return this._v_HitAdapter.fprDo_RetrieveList( anOperationReport);

            };
            if( fprDo_RetrieveList){}/* CQT */
            aPrototype.fprDo_RetrieveList = fprDo_RetrieveList;













            var fprDo_RetrieveOneWithQuery = function( theOperationKind, theOperationName, theTitle, theURL, theHitType, theField, theQueryParms) {

                var anOperationReport = this.fCreateAndRegisterReport(
                    theOperationKind,
                    theOperationName,
                    theTitle,
                    theURL,
                    theHitType,
                    theField,
                    theQueryParms,
                    null,
                    null,
                    null
                );

                if( !this._v_HitAdapter) {
                    return this.fNewDeferredRejectPromise(  anOperationReport);
                }


                return this._v_HitAdapter.fprDo_RetrieveOneWithQuery( anOperationReport);

            };
            if( fprDo_RetrieveOneWithQuery){}/* CQT */
            aPrototype.fprDo_RetrieveOneWithQuery = fprDo_RetrieveOneWithQuery;











            var fprDo_RetrieveOne = function( theOperationKind, theOperationName, theTitle, theURL, theHitType, theField, theUrlParm) {

                var anOperationReport = this.fCreateAndRegisterReport(
                    theOperationKind,
                    theOperationName,
                    theTitle,
                    theURL,
                    theHitType,
                    theField,
                    theUrlParm,
                    null,
                    null,
                    null
                );

                if( !this._v_HitAdapter) {
                    return this.fNewDeferredRejectPromise(  anOperationReport);
                }


                return this._v_HitAdapter.fprDo_RetrieveOne( anOperationReport);

            };
            if( fprDo_RetrieveOne){}/* CQT */
            aPrototype.fprDo_RetrieveOne = fprDo_RetrieveOne;












            var fprDo_ChangeOne = function( theOperationKind, theOperationName, theTitle, theURL, theHitType, theField, theForm) {

                var anOperationReport = this.fCreateAndRegisterReport(
                    theOperationKind,
                    theOperationName,
                    theTitle,
                    theURL,
                    theHitType,
                    theField,
                    null,
                    theForm,
                    null,
                    null
                );

                if( !this._v_HitAdapter) {
                    return this.fNewDeferredRejectPromise(  anOperationReport);
                }


                return this._v_HitAdapter.fprDo_ChangeOne( anOperationReport);
            };
            if( fprDo_ChangeOne){}/* CQT */
            aPrototype.fprDo_ChangeOne = fprDo_ChangeOne;









            var fprDo_Create = function( theOperationKind, theOperationName, theTitle, theURL, theHitType, theField, theForm) {

                var anOperationReport = this.fCreateAndRegisterReport(
                    theOperationKind,
                    theOperationName,
                    theTitle,
                    theURL,
                    theHitType,
                    theField,
                    null,
                    theForm,
                    null,
                    null
                );

                if( !this._v_HitAdapter) {
                    return this.fNewDeferredRejectPromise(  anOperationReport);
                }


                return this._v_HitAdapter.fprDo_Create( anOperationReport);

            };
            if( fprDo_Create){}/* CQT */
            aPrototype.fprDo_Create = fprDo_Create;









            var fprDo_Delete = function( theOperationKind, theOperationName, theTitle, theURL, theHitType, theField, theForm) {

                var anOperationReport = this.fCreateAndRegisterReport(
                    theOperationKind,
                    theOperationName,
                    theTitle,
                    theURL,
                    theHitType,
                    theField,
                    null,
                    theForm,
                    null,
                    null
                );


                if( !this._v_HitAdapter) {
                    return this.fNewDeferredRejectPromise(  anOperationReport);
                }


                return this._v_HitAdapter.fprDo_Delete( anOperationReport);

            };
            if( fprDo_Delete){}/* CQT */
            aPrototype.fprDo_Delete = fprDo_Delete;









            var fprDo_Action = function( theOperationKind, theOperationName, theTitle, theURL, theHitType, theField, theForm) {

                var anOperationReport = this.fCreateAndRegisterReport(
                    theOperationKind,
                    theOperationName,
                    theTitle,
                    theURL,
                    theHitType,
                    theField,
                    null,
                    theForm,
                    null,
                    null
                );

                if( !this._v_HitAdapter) {
                    return this.fNewDeferredRejectPromise(  anOperationReport);
                }


                return this._v_HitAdapter.fprDo_Action( anOperationReport);

            };
            if( fprDo_Action){}/* CQT */
            aPrototype.fprDo_Action = fprDo_Action;









            var fCheckResponseReceived_AndUpdateReport = function( theOperationReport, theResponse) {

                if( !this._v_HitAdapter) {
                    return false;
                }

                return this._v_HitAdapter.fCheckResponseReceived_AndUpdateReport( theOperationReport, theResponse);

            };
            if( fCheckResponseReceived_AndUpdateReport){}/* CQT */
            aPrototype.fCheckResponseReceived_AndUpdateReport = fCheckResponseReceived_AndUpdateReport;










            return aPrototype;

        })();








        var HitServerAdaptedSvce_Constructor = function( theTitle, theIdentifier, theRecorder) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_HitServerSvceType.HitServerSvce_Prototype;

            this._v_Prototype = null;
            this._v_Type      = null;
            this._v_Module    = null;


            this._v_HitAdapter        = null;

            this._pInit_HitServerAdaptedSvce( theTitle, theIdentifier, theRecorder);
        };
        HitServerAdaptedSvce_Constructor.prototype = aHitServerAdaptedSvce_Prototype;





        var HitServerAdaptedSvce_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_HitServerSvceType.HitServerSvce_Prototype;

            this._v_Prototype = aHitServerAdaptedSvce_Prototype;
            this._v_Type      = null;
            this._v_Module    = null;


            this._v_HitAdapter        = null;
        };
        HitServerAdaptedSvce_SuperPrototypeConstructor.prototype = aHitServerAdaptedSvce_Prototype;



        var aModule = {
            "HitServerAdaptedSvce_Prototype": aHitServerAdaptedSvce_Prototype,
            "HitServerAdaptedSvce_Constructor": HitServerAdaptedSvce_Constructor,
            "HitServerAdaptedSvce_SuperPrototypeConstructor": HitServerAdaptedSvce_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aHitServerAdaptedSvce_Prototype._v_Module = aModule;




        return aModule;
    };







    var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
    if( !anExistingModule) {

        var aModule = aMod_definer(
            theSS_Overrider,
            theSS_HitServerSvceType,
            theSS_IdentifierType,
            theSS_HitServerReport,
            theSS_HttpSvce,
            theSS_HitAdapterSpringSvceType
        );
        anExistingModule = aModule;

        theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
    }



    return anExistingModule;


}]);







