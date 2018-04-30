'use strict';

/*
 * http_jquery_svce_type.js
 *
 * Creado @author Antonio Carrasco Valero 201410312116
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




angular.module("hitServerTypes").factory("HttpJQuerySvceType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "CommonSvceType",
    function( theSS_typesregistry,
              theSS_Overrider,
              theSS_CommonSvceType){



        var ModuleName     = "http_jquery_svce_type";
        var ModulePackages = "hitserver";
        var ModuleFullName = ModulePackages + "/" + ModuleName;





        var aMod_definer = function( theS_Overrider,
                                     theS_CommonSvceType) {


            if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}





            var pgInitWithModuleVariations = function( theToInit) {

                if( !theToInit) {
                    return;
                }

                theToInit.LOGJQUERYHTTPREQUESTS  = true;
                theToInit.LOGJQUERYHTTPREPLIES   = true;
                theToInit.LOGJQUERYHTTPFAILURES = true;

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

                theToInit.HTTPJQUERYSVCE_DEFAULTNAME = "HttpJQuerySvceDefaultName";

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






            var anHttpJQuerySvce_Prototype = (function() {


                var aPrototype = new theS_CommonSvceType.CommonSvce_SuperPrototypeConstructor();

                pgInitFromModuleConstants( aPrototype);


                aPrototype._v_SuperPrototype = theS_CommonSvceType.CommonSvce_Prototype;


                aPrototype._v_Type = "HttpJQuerySvce";

                aPrototype._v_Module = null;





                var _pInit = function( theTitle, theIdentifier, theRecorder) {

                    this._pInit_HttpJQuerySvce( theTitle, theIdentifier, theRecorder);
                };
                if( _pInit){}/* CQT */
                aPrototype._pInit = _pInit;







                var _pInit_HttpJQuerySvce = function( theTitle, theIdentifier, theRecorder) {

                    /* Delegate on super prototype initialization */
                    aPrototype._v_SuperPrototype._pInit_CommonSvce.apply( this, [
                        theTitle || this.HTTPJQUERYSVCE_DEFAULTNAME,
                        theIdentifier,
                        theRecorder
                    ]);

                    this._v_Prototype = aPrototype;
                    this._v_Type      = this._v_Prototype._v_Type;
                    this._v_Module    = aPrototype._v_Module;
                };
                if( _pInit_HttpJQuerySvce){}/* CQT */
                aPrototype._pInit_HttpJQuerySvce = _pInit_HttpJQuerySvce;











                var fprDo_HttpGet = function( theURL) {
                    var aMethodName = this._v_Type + " fprDo_HttpGet";

                    if( !theURL) {
                        return this.fNewDeferredRejectPromise( "!theURL");
                    }

                    if( this.LOGJQUERYHTTPREQUESTS) {
                        this.fRecord( aMethodName, this.EVENTKIND_SERVICEREPORT_GET, theURL, null, null);
                    }

                    var aDeferred = this.fNewDeferred();

                    var aThis = this;

                    var anAjax = $.ajax( {
                        url: theURL,
                        success: function( theResponse) {

                            if( aThis.LOGJQUERYHTTPREPLIES) {
                                aThis.fRecord( aMethodName, aThis.EVENTKIND_SERVICEREPORT_GETOK, theURL, null, theResponse);
                            }

                            aThis.fRecord( aMethodName, aThis.EVENTKIND_SERVICEREPORT_GETOK, theURL, null, theResponse);

                            aThis.pDeferredResolveAjaxResponse( aDeferred, theResponse);
                        }
                    });

                    anAjax.fail( function( theErrorData, theErrorStatus) {

                        if( aThis.LOGJQUERYHTTPFAILURES) {
                            aThis.fRecord( aMethodName, aThis.EVENTKIND_SERVICEREPORT_GETFAIL, theURL, theErrorStatus, theErrorData);
                        }

                        aThis.pDeferredRejectAjaxError( aDeferred, {  theURL: theURL, theErrorData: theErrorData, theErrorStatus: theErrorStatus});
                    });

                    return aDeferred.promise;
                };
                if( fprDo_HttpGet){}/* CQT */
                aPrototype.fprDo_HttpGet = fprDo_HttpGet;













                var fprDo_HttpPost = function( theURL, theForm) {
                    var aMethodName =  this._v_Type + " fprDo_HttpPost";

                    if( !theURL) {
                        return this.fNewDeferredRejectPromise( "!theURL");
                    }

                    if( !theForm) {
                        return this.fNewDeferredRejectPromise( "!theForm");
                    }

                    if( this.LOGJQUERYHTTPREQUESTS) {
                        this.fRecord( aMethodName, this.EVENTKIND_SERVICEREPORT_POST, theURL, theForm, null);
                    }

                    var aDeferred = this.fNewDeferred();


                    var aURL = theURL;
                    var aForm = theForm;

                    var aThis = this;

                    var anAjax = $.ajax( {
                        type: "POST",
                        url: theURL,
                        data: theForm,
                        success: function( theResponse) {

                            if( aThis.LOGJQUERYHTTPREPLIES) {
                                aThis.fRecord( aMethodName, aThis.EVENTKIND_SERVICEREPORT_POSTOK, aURL, aForm, theResponse);
                            }

                            aThis.pDeferredResolveAjaxResponse( aDeferred, theResponse);
                        }
                    });

                    anAjax.fail( function( theErrorData, theErrorStatus) {

                        if( aThis.LOGJQUERYHTTPFAILURES) {
                            aThis.fRecord( aMethodName, aThis.EVENTKIND_SERVICEREPORT_POSTFAIL, aURL, theErrorStatus, theErrorData);
                        }

                        aThis.pDeferredRejectAjaxError( aDeferred, { aURL: aURL, theErrorData: theErrorData, theErrorStatus: theErrorStatus});
                    });

                    return aDeferred.promise;
                };
                if( fprDo_HttpPost){}/* CQT */
                aPrototype.fprDo_HttpPost = fprDo_HttpPost;










                return aPrototype;

            })();








            var HttpJQuerySvce_Constructor = function( theTitle, theIdentifier, theRecorder) {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_CommonSvceType.CommonSvce_Prototype;

                this._v_Prototype = null;
                this._v_Type      = null;
                this._v_Module    = null;

                this._pInit_HttpJQuerySvce( theTitle, theIdentifier, theRecorder);
            };
            HttpJQuerySvce_Constructor.prototype = anHttpJQuerySvce_Prototype;





            var HttpJQuerySvce_SuperPrototypeConstructor = function() {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_CommonSvceType.CommonSvce_Prototype;

                this._v_Prototype = anHttpJQuerySvce_Prototype;
                this._v_Type      = null;
                this._v_Module    = null;
            };
            HttpJQuerySvce_SuperPrototypeConstructor.prototype = anHttpJQuerySvce_Prototype;



            var aModule = {
                "HttpJQuerySvce_Prototype": anHttpJQuerySvce_Prototype,
                "HttpJQuerySvce_Constructor": HttpJQuerySvce_Constructor,
                "HttpJQuerySvce_SuperPrototypeConstructor": HttpJQuerySvce_SuperPrototypeConstructor,

                "HttpSvce_Constructor": HttpJQuerySvce_Constructor
            };
            pgInitFromModuleConstants( aModule);
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;

            anHttpJQuerySvce_Prototype._v_Module = aModule;




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







