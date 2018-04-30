'use strict';

/*
 * hitspecified_svce_type.js
 *
 * Creado @author Antonio Carrasco Valero 201409301309
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




angular.module("hitServerTypes").factory("HitSpecifiedSvceType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "HitServerAdaptedSvceType",
function( theSS_typesregistry,
          theSS_Overrider,
          theSS_HitServerAdaptedSvceType){



    var ModuleName     = "hitspecified_svce_type";
    var ModulePackages = "hitserver";
    var ModuleFullName = ModulePackages + "/" + ModuleName;





    var aMod_definer = function( theS_Overrider,
                                 theS_HitServerAdaptedSvceType) {


        if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}





        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.LOGREQUESTS  = true;
            theToInit.LOGFORMS     = true;
            theToInit.LOGREPLIES   = true;
            theToInit.LOGRESPONSES = true;


            theToInit.ALLOWZEROCLIENTSPECIFIEDMAXLAPSEDMILLIS = true;

            theToInit.CLIENTSPECIFIED_MINLAPSEDMILLIS  = 500;
            theToInit.CLIENTSPECIFIED_MAXLAPSEDMILLIS  = 60 * 1000;

            theToInit.REQUESTEXPIRATIONMILLIS = 2000;


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

            theToInit.HITSPECIFIEDSVCE_DEFAULTNAME = "HitSpecifiedSvceDefaultName";




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






        var aHitSpecifiedSvce_Prototype = (function() {


            var aPrototype = new theS_HitServerAdaptedSvceType.HitServerAdaptedSvce_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_SuperPrototype = theS_HitServerAdaptedSvceType.HitServerAdaptedSvce_Prototype;


            aPrototype._v_Type = "HitSpecifiedSvce";

            aPrototype._v_Module = null;



            aPrototype._v_OperationSpecs   = null;
            aPrototype._v_OperationSpecsByName = null;
            aPrototype._v_OperationsByName = null;

            aPrototype._v_ReusableRetrievedsByServiceName = null;






            var _pInit = function( theTitle, theIdentifier, theRecorder) {

                this._pInit_HitSpecifiedSvce( theTitle, theIdentifier, theRecorder);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_HitSpecifiedSvce = function( theTitle, theIdentifier, theRecorder) {

                /* Delegate on super prototype initialization */
                aPrototype._v_SuperPrototype._pInit_HitServerAdaptedSvce.apply( this, [
                    theTitle || this.HITSPECIFIEDSVCE_DEFAULTNAME,
                    theIdentifier,
                    theRecorder
                ]);

                this._v_Prototype = aPrototype;
                this._v_Type      = this._v_Prototype._v_Type;
                this._v_Module    = aPrototype._v_Module;

                this._v_OperationSpecs = [ ];
                this._v_OperationSpecsByName = { };
                this._v_OperationsByName = { };

                this._v_ReusableRetrievedsByServiceName = { };

            };
            if( _pInit_HitSpecifiedSvce){}/* CQT */
            aPrototype._pInit_HitSpecifiedSvce = _pInit_HitSpecifiedSvce;











            var pRegisterOperationsFromSpecs = function( theOperationSpecs) {

                if( !theOperationSpecs) {
                    return;
                }

                var aNumOperationSpecs = theOperationSpecs.length;
                for( var aOperationSpecIdx=0; aOperationSpecIdx < aNumOperationSpecs; aOperationSpecIdx++) {

                    var anOperationSpec = theOperationSpecs[ aOperationSpecIdx];
                    if( anOperationSpec) {

                        if( !anOperationSpec[ "reuse"]) {

                            var anOperationName = anOperationSpec[ "name"];
                            if( anOperationName) {

                                var aCurrentlyRegisteredOperation = this._v_OperationsByName[ anOperationName];
                                if( aCurrentlyRegisteredOperation) {
                                    continue;
                                }

                                var aBoundOperationMethod = this.fBoundOperationMethodFromSpec_direct( anOperationSpec);
                                if( !aBoundOperationMethod) {
                                    continue;
                                }

                                this._v_OperationSpecs.push( anOperationSpec);
                                this._v_OperationSpecsByName[ anOperationName] = anOperationSpec;

                                this._v_OperationsByName[ anOperationName] = aBoundOperationMethod;

                                if( !this[ anOperationName]) {
                                    this[ anOperationName] = aBoundOperationMethod;
                                }
                            }
                        }
                    }
                }

                for( var otherOperationSpecIdx=0; otherOperationSpecIdx < aNumOperationSpecs; otherOperationSpecIdx++) {

                    var otherOperationSpec = theOperationSpecs[ otherOperationSpecIdx];
                    if( otherOperationSpec) {

                        if( otherOperationSpec[ "reuse"]) {

                            var otherOperationName = otherOperationSpec[ "name"];
                            if( otherOperationName) {

                                var otherCurrentlyRegisteredOperation = this._v_OperationsByName[ otherOperationName];
                                if( otherCurrentlyRegisteredOperation) {
                                    continue;
                                }

                                var otherBoundOperationMethod = this.fBoundOperationMethodFromSpec_reuse( otherOperationSpec);
                                if( !otherBoundOperationMethod) {
                                    continue;
                                }

                                this._v_OperationSpecs.push( otherOperationSpec);
                                this._v_OperationSpecsByName[ anOperationName] = anOperationSpec;

                                this._v_OperationsByName[ otherOperationName] = otherBoundOperationMethod;

                                if( !this[ otherOperationName]) {
                                    this[ otherOperationName] = otherBoundOperationMethod;
                                }
                            }
                        }
                    }
                }
            };
            if( pRegisterOperationsFromSpecs){}/* CQT */
            aPrototype.pRegisterOperationsFromSpecs = pRegisterOperationsFromSpecs;









            var fBoundOperationMethodFromSpec = function( theOperationSpec) {

                if( !theOperationSpec) {
                    return null;
                }

                if( theOperationSpec[ "reuse"]) {
                    return this.fBoundOperationMethodFromSpec_reuse( theOperationSpec);
                }

                return this.fBoundOperationMethodFromSpec_direct( theOperationSpec);
            };
            if( fBoundOperationMethodFromSpec){}/* CQT */
            aPrototype.fBoundOperationMethodFromSpec = fBoundOperationMethodFromSpec;









            var fBoundOperationMethodFromSpec_reuse = function( theOperationSpec) {
                /* Sample svce spec
                {
                    "title":           theToInit.TRABAJOS_LISTAPARAMETROSDETRABAJO_TITLE,
                    "name":            "fprDo_Trabajos_ListaParametrosDeTrabajo",
                    "kind":            theS_HitServerAdaptedSvceType.OPERATIONKIND_LIST,
                    "reuse":           "fprDo_Trabajos_TrabajoDatosCompletos",
                    "maxLapsedMillis":  theToInit.TRABAJOS_LISTAPARAMETROSDETRABAJO_MAXLAPSEDMILLIS,
                    "replyField":      theToInit.TRABAJOS_LISTAPARAMETROSDETRABAJO_FIELD
                },
                */

                if( !theOperationSpec) {
                    return null;
                }

                var aReusedServiceName = theOperationSpec[ "reuse"];
                if( !aReusedServiceName) {
                    return null;
                }

                var aReuseBoundOperationMethod = this._v_OperationsByName[ aReusedServiceName];
                if( !aReuseBoundOperationMethod) {
                    return null;
                }



                var anOperationName = theOperationSpec[ "name"];
                if( !anOperationName) {
                    return null;
                }
                var aKind            = theOperationSpec[ "kind"];

                if( this.OPERATIONKINDS.indexOf( aKind) < 0) {
                    return null;
                }

                var aReplyField      = theOperationSpec[ "replyField"];


                var aMaxLapsedMillis = theOperationSpec[ "maxLapsedMillis"];
                if( aMaxLapsedMillis < this.REQUESTEXPIRATIONMILLIS) {
                    aMaxLapsedMillis = this.REQUESTEXPIRATIONMILLIS;
                }

                var aBoundOperationMethod = this.fprDo_ReuseRetrieved.bind( this, aReusedServiceName, aReuseBoundOperationMethod, aMaxLapsedMillis, aReplyField);
                if( aBoundOperationMethod){}/* CQT */

                return aBoundOperationMethod;
            };
            if( fBoundOperationMethodFromSpec_reuse){}/* CQT */
            aPrototype.fBoundOperationMethodFromSpec_reuse = fBoundOperationMethodFromSpec_reuse;










            var fNewVoidReusableRetrieved = function() {
                var aReusableRetrieved = {
                    "id":               null,
                    "received":         false,
                    "failed":           false,
                    "responseMillis":   null,
                    "data":             null,
                    "deferreds":        [ ]
                };
                if( aReusableRetrieved){}/* CQT */

                return aReusableRetrieved;
            };
            if( fNewVoidReusableRetrieved){}/* CQT */
            aPrototype.fNewVoidReusableRetrieved = fNewVoidReusableRetrieved;








            var fAdjustClientSpecifiedMaxLapsedMillis = function( theMaxLapsedMillis) {

                if( theMaxLapsedMillis === 0) {
                    if( this.ALLOWZEROCLIENTSPECIFIEDMAXLAPSEDMILLIS) {
                        return 0;
                    }
                }

                var aMaxLapsedMillis = theMaxLapsedMillis;
                if( !aMaxLapsedMillis || ( aMaxLapsedMillis < this.CLIENTSPECIFIED_MINLAPSEDMILLIS)) {
                    aMaxLapsedMillis = this.CLIENTSPECIFIED_MINLAPSEDMILLIS;
                }
                else {
                    if( aMaxLapsedMillis > this.CLIENTSPECIFIED_MAXLAPSEDMILLIS) {
                        aMaxLapsedMillis = this.CLIENTSPECIFIED_MAXLAPSEDMILLIS;
                    }
                }

                return aMaxLapsedMillis;
            };
            if( fAdjustClientSpecifiedMaxLapsedMillis){}/* CQT */
            aPrototype.fAdjustClientSpecifiedMaxLapsedMillis = fAdjustClientSpecifiedMaxLapsedMillis;








            var fExistingReusableForServiceNameAndUrlParm= function( theReusedServiceName, theUrlParm) {
                var aMethodName = "fReusableForServiceNameAndUrlParm";
                if( aMethodName){}/* CQT */

                if( !theReusedServiceName) {
                    return null;
                }

                if( !theUrlParm) {
                    console.log("ACV OJO 201501251818 fExistingReusableForServiceNameAndUrlParm manage !theUrlParm fExistingReusableForServiceNameWoUrlParm ");
                    return this.fExistingReusableForServiceNameWoUrlParm( theReusedServiceName);
                }

                if( !this._v_ReusableRetrievedsByServiceName) {
                    return null;
                }

                var aReusablesForServiceName = this._v_ReusableRetrievedsByServiceName[ theReusedServiceName];
                if( !aReusablesForServiceName) {
                    return null;
                }

                var aReusable = aReusablesForServiceName[ theUrlParm];
                if( !aReusable) {
                    return null;
                }

                return aReusable;
            };
            if( fExistingReusableForServiceNameAndUrlParm){}/* CQT */
            aPrototype.fExistingReusableForServiceNameAndUrlParm = fExistingReusableForServiceNameAndUrlParm;





            var fExistingReusableForServiceNameWoUrlParm= function( theReusedServiceName, theUrlParm) {
                var aMethodName = "fExistingReusableForServiceNameWoUrlParm";
                if( aMethodName){}/* CQT */

                if( !theReusedServiceName) {
                    return null;
                }

                if( !this._v_ReusableRetrievedsByServiceName) {
                    return null;
                }

                var aReusable = this._v_ReusableRetrievedsByServiceName[ theReusedServiceName];
                if( !aReusable) {
                    return null;
                }

                return aReusable;
            };
            if( fExistingReusableForServiceNameWoUrlParm){}/* CQT */
            aPrototype.fExistingReusableForServiceNameWoUrlParm = fExistingReusableForServiceNameWoUrlParm;








            var fNewReusableForServiceNameAndUrlParm= function( theReusedServiceName, theUrlParm) {
                var aMethodName = "fReusableForServiceNameAndUrlParm";
                if( aMethodName){}/* CQT */

                if( !theReusedServiceName) {
                    return null;
                }

                if( !theUrlParm) {

                    var anOperationSpec = this._v_OperationSpecsByName[ theReusedServiceName];
                    if( anOperationSpec) {
                        var anOperationSpecKind = anOperationSpec[ "kind"];
                        if( anOperationSpecKind == this.OPERATIONKIND_ONE) {
                            console.log("ACV OJO 201501251818 fNewReusableForServiceNameAndUrlParm manage !theUrlParm and anOperationSpecKind == this.OPERATIONKIND_ONE ");
                            aReusable = this.fNewVoidReusableRetrieved();
                            return aReusable;
                        }
                    }
                    console.log("ACV OJO 201501251818 fNewReusableForServiceNameAndUrlParm manage !theUrlParm DELEGATING ON fNewReusableForServiceNameWoUrlParm ");
                    return this.fNewReusableForServiceNameWoUrlParm( theReusedServiceName);
                }

                var aReusablesForServiceName = this._v_ReusableRetrievedsByServiceName[ theReusedServiceName];
                if( !aReusablesForServiceName) {
                    aReusablesForServiceName = { };
                    this._v_ReusableRetrievedsByServiceName[ theReusedServiceName] = aReusablesForServiceName;
                }

                var aReusable = aReusablesForServiceName[ theUrlParm];
                if( !aReusable) {
                    aReusable = this.fNewVoidReusableRetrieved();
                    aReusablesForServiceName[ theUrlParm] = aReusable;
                }

                return aReusable;
            };
            if( fNewReusableForServiceNameAndUrlParm){}/* CQT */
            aPrototype.fNewReusableForServiceNameAndUrlParm = fNewReusableForServiceNameAndUrlParm;







            var fNewReusableForServiceNameWoUrlParm= function( theReusedServiceName) {
                var aMethodName = "fNewReusableForServiceNameWoUrlParm";
                if( aMethodName){}/* CQT */

                if( !theReusedServiceName) {
                    return null;
                }

                var aReusable = this.fNewVoidReusableRetrieved();

                this._v_ReusableRetrievedsByServiceName[ theReusedServiceName] = aReusable;

                return aReusable;
            };
            if( fNewReusableForServiceNameWoUrlParm){}/* CQT */
            aPrototype.fNewReusableForServiceNameWoUrlParm = fNewReusableForServiceNameWoUrlParm;









            var pAddDeferredToReusable= function( theReusable, theDeferred) {
                var aMethodName = "pAddDeferredToReusable";
                if( aMethodName){}/* CQT */

                if( !theReusable) {
                    return;
                }

                if( !theDeferred) {
                    return;
                }


                var someDeferreds = theReusable[ "deferreds"];

                if( !someDeferreds) {
                    someDeferreds = [ ];
                    theReusable[ "deferreds"] = someDeferreds;

                }

                if( someDeferreds.indexOf( theDeferred) >= 0) {
                    return;
                }

                someDeferreds.push( theDeferred);

            };
            if( pAddDeferredToReusable){}/* CQT */
            aPrototype.pAddDeferredToReusable = pAddDeferredToReusable;







            var pResolveReusableDeferreds = function( theReusable, theResponse) {
                var aMethodName = "pResolveReusableDeferreds";
                if( aMethodName){}/* CQT */

                var someDeferreds = theReusable[ "deferreds"];

                if( !someDeferreds) {
                    return;
                }

                var aNumDeferreds = someDeferreds.length;
                for( var aDeferredIdx= 0; aDeferredIdx < aNumDeferreds; aDeferredIdx++) {
                    var aDeferred = someDeferreds[ aDeferredIdx];
                    if( aDeferred) {
                        this.pDeferredResolve( aDeferred, theResponse);
                    }
                }

            };
            if( pResolveReusableDeferreds){}/* CQT */
            aPrototype.pResolveReusableDeferreds = pResolveReusableDeferreds;







            var pRejectReusableDeferreds = function( theReusable, theRejection) {
                var aMethodName = "pRejectReusableDeferreds";
                if( aMethodName){}/* CQT */

                var someDeferreds = theReusable[ "deferreds"];

                if( !someDeferreds) {
                    return;
                }

                var aNumDeferreds = someDeferreds.length;
                for( var aDeferredIdx= 0; aDeferredIdx < aNumDeferreds; aDeferredIdx++) {
                    var aDeferred = someDeferreds[ aDeferredIdx];
                    if( aDeferred) {
                        this.pDeferredReject( aDeferred, theRejection);
                    }
                }


            };
            if( pRejectReusableDeferreds){}/* CQT */
            aPrototype.pRejectReusableDeferreds = pRejectReusableDeferreds;








            var fDeferredForReplyField = function( theRawResponsePromise, theReplyField) {
                var aMethodName = "fDeferredForReplyField";
                if( aMethodName){}/* CQT */

                if( !theRawResponsePromise) {
                    return null;
                }

                var aDeferred = this.fNewDeferred();

                var aReplyField = theReplyField;
                var aThis = this;

                theRawResponsePromise.then( function( theResponse) {

                    var aResponseData = theResponse;
                    if( aResponseData) {
                        if( aReplyField) {
                            aResponseData = aResponseData[ aReplyField];
                        }
                    }

                    aThis.pDeferredResolve( aDeferred, aResponseData);
                });

                return aDeferred;

            };
            if( fDeferredForReplyField){}/* CQT */
            aPrototype.fDeferredForReplyField = fDeferredForReplyField;









            var fprDo_ReuseRetrieved = function( theReusedServiceName, theReuseBoundOperationMethod, theMaxLapsedMillis, theReplyField, theUrlParm) {
                var aMethodName = "fprDo_ReuseRetrieved";
                if( aMethodName){}/* CQT */

                if( !theReusedServiceName) {
                    return this.fNewDeferredRejectPromise( "!theReusedServiceName");
                }

                if( !theReuseBoundOperationMethod) {
                    return this.fNewDeferredRejectPromise( "!theReusedServiceName");
                }

                if( !theUrlParm) {

                    console.log("ACV OJO 201501251818 fprDo_ReuseRetrieved IGNORE !theUrlParm");
                    if( false) {
                        return this.fNewDeferredRejectPromise( "!theUrlParm");
                    }
                }



                var aReusable = this.fExistingReusableForServiceNameAndUrlParm( theReusedServiceName, theUrlParm);

                if( !aReusable) {
                    return this.fprDo_ReuseRetrieved_requestNow( theReusedServiceName, theReuseBoundOperationMethod, theMaxLapsedMillis, theReplyField, theUrlParm);
                }




                if( aReusable[ "failed"]) {
                    return this.fprDo_ReuseRetrieved_requestNow( theReusedServiceName, theReuseBoundOperationMethod, theMaxLapsedMillis, theReplyField, theUrlParm);
                }





                if( aReusable[ "received"]) {

                    var aMaxLapsedMillis = this.fAdjustClientSpecifiedMaxLapsedMillis( theMaxLapsedMillis);
                    if( !aMaxLapsedMillis) {
                        return this.fprDo_ReuseRetrieved_requestNow( theReusedServiceName, theReuseBoundOperationMethod, theMaxLapsedMillis, theReplyField, theUrlParm);
                    }


                    var aResponseMillis = aReusable[ "responseMillis"];
                    if( !aResponseMillis) {
                        return this.fprDo_ReuseRetrieved_requestNow( theReusedServiceName, theReuseBoundOperationMethod, theMaxLapsedMillis, theReplyField, theUrlParm);
                    }


                    var aNowMillis     = new Date().getTime();
                    var aLapsedMillis  = aNowMillis - aResponseMillis;

                    if( aLapsedMillis > aMaxLapsedMillis) {
                        return this.fprDo_ReuseRetrieved_requestNow( theReusedServiceName, theReuseBoundOperationMethod, theMaxLapsedMillis, theReplyField, theUrlParm);
                    }



                    var aResponseData = aReusable[ "data"];
                    if( theReplyField) {
                        aResponseData = aResponseData[ theReplyField];
                    }

                    return this.fNewDeferredResolveWithResponsePromise( aResponseData);
                }





                if( aReusable[ "requested"]) {

                    var anExtraDeferred = this.fNewDeferred();

                    var aDeferredForResult = anExtraDeferred;
                    if( theReplyField) {
                        aDeferredForResult = this.fDeferredForReplyField( anExtraDeferred.promise, theReplyField);
                    }

                    this.pAddDeferredToReusable( aReusable, anExtraDeferred);

                    return aDeferredForResult.promise;
                }



                return this.fprDo_ReuseRetrieved_requestNow( theReusedServiceName, theReuseBoundOperationMethod, theMaxLapsedMillis, theReplyField, theUrlParm);



            };
            if( fprDo_ReuseRetrieved){}/* CQT */
            aPrototype.fprDo_ReuseRetrieved = fprDo_ReuseRetrieved;











            var fprDo_ReuseRetrieved_requestNow = function( theReusedServiceName, theReuseBoundOperationMethod, theMaxLapsedMillis, theReplyField, theUrlParm) {
                var aMethodName = "fprDo_ReuseRetrieved_requestNow";
                if( aMethodName){}/* CQT */

                if( !theReusedServiceName) {
                    return this.fNewDeferredRejectPromise( "!theReusedServiceName");
                }

                if( !theReuseBoundOperationMethod) {
                    return this.fNewDeferredRejectPromise( "!theReusedServiceName");
                }

                if( !theUrlParm) {
                    console.log("ACV OJO 201501251818 fprDo_ReuseRetrieved_requestNow IGNORE !theUrlParm");
                    if( false) {
                        return this.fNewDeferredRejectPromise( "!theUrlParm");
                    }
                }


                var aNewReusable = this.fNewReusableForServiceNameAndUrlParm( theReusedServiceName, theUrlParm);
                if( !aNewReusable) {
                    return this.fNewDeferredRejectPromise( "!aNewReusable");
                }


                var aFirstDeferred = this.fNewDeferred();

                var aDeferredForResult = aFirstDeferred;
                if( theReplyField) {
                    aDeferredForResult = this.fDeferredForReplyField( aFirstDeferred.promise, theReplyField);
                }

                this.pAddDeferredToReusable( aNewReusable, aFirstDeferred);
                
                

                var aThis = this;

                aNewReusable[ "received"]       = false;
                aNewReusable[ "data"]           = null;
                aNewReusable[ "responseMillis"] = null;
                aNewReusable[ "requested"]      = true;

                theReuseBoundOperationMethod( theUrlParm)
                    .then( function( theRetrieved) {

                        var anUnexpectedCondition = null;


                        if( aNewReusable[ "received"]) {
                            anUnexpectedCondition = "receiving response for already RECEIVED Reusable";
                        }
                        else {
                            if( aNewReusable[ "failed"]) {
                                anUnexpectedCondition = "receiving response for already FAILED Reusable";
                            }
                        }

                        if( anUnexpectedCondition) {
                            /* ACV OJO 20112100039 Extrange condition receiving response for non existing reusable or already received or failed Reusable, should not happen. Try at least to resolve first promise if any, trapping the condition of having already been resolved or failed */

                            if( aFirstDeferred) {
                                console.log( "\n\nACV OJO 20112100039  HitSpecifiedSvce.fprDo_ReuseRetrieved_requestNow RECEIVING " + anUnexpectedCondition + " resolving first deferred\n\n");
                                try {
                                    aThis.pDeferredResolve( aFirstDeferred);
                                }
                                catch( anException) {
                                    console.log( "\n\n\nACV OJO 20112100039  HitSpecifiedSvce.fprDo_ReuseRetrieved_requestNow RECEIVING " + anUnexpectedCondition + " catched exception resolving first deferred\n\n\n");

                                    throw anException;
                                }
                            }
                            else {
                                console.log( "\n\nACV OJO 20112100039  HitSpecifiedSvce.fprDo_ReuseRetrieved_requestNow RECEIVING  " + anUnexpectedCondition + " and there was no first deferred to resolve\n\n");
                            }

                            return;
                        }


                        aNewReusable[ "received"] = true;

                        aNewReusable[ "data"] = theRetrieved;

                        aNewReusable[ "responseMillis"] = new Date().getTime();

                        aThis.pResolveReusableDeferreds( aNewReusable, theRetrieved);

                    })
                    ["catch"]( function( theError) {

                        var otherUnexpectedCondition = null;

                        if( aNewReusable[ "received"]) {
                            otherUnexpectedCondition = "error catched for already RECEIVED Reusable";
                        }
                        else {
                            if( aNewReusable[ "failed"]) {
                                otherUnexpectedCondition = "error catched for already FAILED Reusable";
                            }
                        }

                        if( otherUnexpectedCondition) {
                            /* ACV OJO 20112100039 Extrange condition receiving response for non existing reusable or already received or failed Reusable, should not happen. Try at least to resolve first promise if any, trapping the condition of having already been resolved or failed */

                            if( aFirstDeferred) {
                                console.log( "\n\nACV OJO 20112100039  HitSpecifiedSvce.fprDo_ReuseRetrieved_requestNow CATCHING " + otherUnexpectedCondition + " resolving first deferred\n\n");
                                try {
                                    aThis.pDeferredReject( aFirstDeferred, theError);
                                }
                                catch( anException) {
                                    console.log( "\n\n\nACV OJO 20112100039  HitSpecifiedSvce.fprDo_ReuseRetrieved_requestNow CATCHING " + otherUnexpectedCondition + " catched exception resolving first deferred\n\n\n");

                                    throw anException;
                                }
                            }
                            else {
                                console.log( "\n\nACV OJO 20112100039  HitSpecifiedSvce.fprDo_ReuseRetrieved_requestNow CATCHING  " + otherUnexpectedCondition + " and there was no first deferred to resolve\n\n");
                            }

                            return;
                        }


                        aNewReusable[ "failed"] = true;

                        aThis.pRejectReusableDeferreds( aNewReusable, theError);

                        throw theError;
                    });



                return aDeferredForResult.promise;

            };
            if( fprDo_ReuseRetrieved_requestNow){}/* CQT */
            aPrototype.fprDo_ReuseRetrieved_requestNow = fprDo_ReuseRetrieved_requestNow;











            var fBoundOperationMethodFromSpec_direct = function( theOperationSpec) {

                if( !theOperationSpec) {
                    return null;
                }

                var anOperationName = theOperationSpec[ "name"];
                if( !anOperationName) {
                    return null;
                }
                var aKind            = theOperationSpec[ "kind"];

                if( this.OPERATIONKINDS.indexOf( aKind) < 0) {
                    return null;
                }

                var aTitle           = theOperationSpec[ "title"];
                var aURL             = theOperationSpec[ "url"];
                var aReplyType       = theOperationSpec[ "replyType"];
                var aReplyField      = theOperationSpec[ "replyField"];


                var aBoundOperationMethod = null;

                switch( aKind) {

                    case this.OPERATIONKIND_LIST:

                        var aUseUrlParm = theOperationSpec[ "useUrlParm"];
                        if( aUseUrlParm) {
                            aBoundOperationMethod = this.fprDo_RetrieveListWithParm.bind( this, this.OPERATIONKIND_LIST, anOperationName, aTitle, aURL, aReplyType, aReplyField);
                        }
                        else {
                            var aUseUrlQuery= theOperationSpec[ "useUrlQuery"];
                            if( aUseUrlQuery) {
                                aBoundOperationMethod = this.fprDo_RetrieveListWithQuery.bind( this, this.OPERATIONKIND_LIST, anOperationName, aTitle, aURL, aReplyType, aReplyField);
                            }
                            else {
                                aBoundOperationMethod = this.fprDo_RetrieveList.bind( this, this.OPERATIONKIND_LIST, anOperationName, aTitle, aURL, aReplyType, aReplyField);
                            }
                        }
                        break;


                    case this.OPERATIONKIND_ONE:
                        var otherUseUrlQuery= theOperationSpec[ "useUrlQuery"];
                        if( otherUseUrlQuery) {
                            aBoundOperationMethod = this.fprDo_RetrieveOneWithQuery.bind( this, this.OPERATIONKIND_ONE, anOperationName, aTitle, aURL, aReplyType, aReplyField);
                        }
                        else {
                            aBoundOperationMethod = this.fprDo_RetrieveOne.bind( this, this.OPERATIONKIND_ONE, anOperationName, aTitle, aURL, aReplyType, aReplyField);
                        }

                        break;


                    case this.OPERATIONKIND_CHANGE:
                        aBoundOperationMethod = this.fprDo_ChangeOne.bind( this, this.OPERATIONKIND_CHANGE, anOperationName, aTitle, aURL, aReplyType, aReplyField);
                        break;


                    case this.OPERATIONKIND_CREATE:
                        aBoundOperationMethod = this.fprDo_Create.bind( this, this.OPERATIONKIND_CREATE, anOperationName, aTitle, aURL, aReplyType, aReplyField);
                        break;


                    case this.OPERATIONKIND_DELETE:
                        aBoundOperationMethod = this.fprDo_Delete.bind( this, this.OPERATIONKIND_DELETE, anOperationName, aTitle, aURL, aReplyType, aReplyField);
                        break;


                    case this.OPERATIONKIND_ACTION:
                        aBoundOperationMethod = this.fprDo_Action.bind( this, this.OPERATIONKIND_ACTION, anOperationName, aTitle, aURL, aReplyType, aReplyField);
                        break;


                    default:
                }

                return aBoundOperationMethod;
            };
            if( fBoundOperationMethodFromSpec_direct){}/* CQT */
            aPrototype.fBoundOperationMethodFromSpec_direct = fBoundOperationMethodFromSpec_direct;











            var fActiveOperationSpecs = function() {

                return this._v_OperationSpecs.slice();
            };
            if( fActiveOperationSpecs){}/* CQT */
            aPrototype.fActiveOperationSpecs = fActiveOperationSpecs;









            return aPrototype;

        })();








        var HitSpecifiedSvce_Constructor = function( theTitle, theIdentifier, theRecorder) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_HitServerAdaptedSvceType.HitServerAdaptedSvce_Prototype;

            this._v_Prototype = null;
            this._v_Type      = null;
            this._v_Module    = null;

            this._v_OperationSpecs   = null;
            this._v_OperationSpecsByName = null;
            this._v_OperationsByName = null;

            this._v_ReusableRetrievedsByServiceName = { };

            this._pInit_HitSpecifiedSvce( theTitle, theIdentifier, theRecorder);
        };
        HitSpecifiedSvce_Constructor.prototype = aHitSpecifiedSvce_Prototype;





        var HitSpecifiedSvce_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_HitServerAdaptedSvceType.HitServerAdaptedSvce_Prototype;

            this._v_Prototype = aHitSpecifiedSvce_Prototype;
            this._v_Type      = null;
            this._v_Module    = null;

            this._v_OperationSpecs   = null;
            this._v_OperationSpecsByName = null;
            this._v_OperationsByName = null;

            this._v_ReusableRetrievedsByServiceName = { };
        };
        HitSpecifiedSvce_SuperPrototypeConstructor.prototype = aHitSpecifiedSvce_Prototype;



        var aModule = {
            "HitSpecifiedSvce_Prototype": aHitSpecifiedSvce_Prototype,
            "HitSpecifiedSvce_Constructor": HitSpecifiedSvce_Constructor,
            "HitSpecifiedSvce_SuperPrototypeConstructor": HitSpecifiedSvce_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aHitSpecifiedSvce_Prototype._v_Module = aModule;




        return aModule;
    };







    var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
    if( !anExistingModule) {

        var aModule = aMod_definer(
            theSS_Overrider,
            theSS_HitServerAdaptedSvceType
        );
        anExistingModule = aModule;

        theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
    }



    return anExistingModule;


}]);







