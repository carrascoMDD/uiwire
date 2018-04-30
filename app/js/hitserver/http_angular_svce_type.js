'use strict';

/*
 * http_angular_svce_type.js
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




angular.module("hitServerTypes").factory("HttpAngularSvceType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "CommonSvceType",
    "$http",
    function( theSS_typesregistry,
              theSS_Overrider,
              theSS_CommonSvceType,
              theSS_$http){



        var ModuleName     = "http_angular_svce_type";
        var ModulePackages = "hitserver";
        var ModuleFullName = ModulePackages + "/" + ModuleName;





        var aMod_definer = function( theS_Overrider,
                                     theS_CommonSvceType,
                                     $http) {


            if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}





            var pgInitWithModuleVariations = function( theToInit) {

                if( !theToInit) {
                    return;
                }

                theToInit.LOGANGULARHTTPREQUESTS  = true;
                theToInit.LOGANGULARHTTPREPLIES   = true;
                theToInit.LOGANGULARHTTPFAILURES = true;

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

                theToInit.HTTPANGULARSVCE_DEFAULTNAME = "HttpAngularSvceDefaultName";

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






            var anHttpAngularSvce_Prototype = (function() {


                var aPrototype = new theS_CommonSvceType.CommonSvce_SuperPrototypeConstructor();

                pgInitFromModuleConstants( aPrototype);


                aPrototype._v_SuperPrototype = theS_CommonSvceType.CommonSvce_Prototype;


                aPrototype._v_Type = "HttpAngularSvce";

                aPrototype._v_Module = null;





                var _pInit = function( theTitle, theIdentifier, theRecorder) {

                    this._pInit_HttpAngularSvce( theTitle, theIdentifier, theRecorder);
                };
                if( _pInit){}/* CQT */
                aPrototype._pInit = _pInit;







                var _pInit_HttpAngularSvce = function( theTitle, theIdentifier, theRecorder) {

                    /* Delegate on super prototype initialization */
                    aPrototype._v_SuperPrototype._pInit_CommonSvce.apply( this, [
                        theTitle || this.HTTPANGULARSVCE_DEFAULTNAME,
                        theIdentifier,
                        theRecorder
                    ]);

                    this._v_Prototype = aPrototype;
                    this._v_Type      = this._v_Prototype._v_Type;
                    this._v_Module    = aPrototype._v_Module;
                };
                if( _pInit_HttpAngularSvce){}/* CQT */
                aPrototype._pInit_HttpAngularSvce = _pInit_HttpAngularSvce;










                /*

                 method – {string} – HTTP method (e.g. 'GET', 'POST', etc)
                 url – {string} – Absolute or relative URL of the resource that is being requested.
                 params – {Object.<string|Object>} – Map of strings or objects which will be turned to ?key1=value1&key2=value2 after the url. If the value is not a string, it will be JSONified.
                 data – {string|Object} – Data to be sent as the request message data.
                 headers – {Object} – Map of strings or functions which return strings representing HTTP headers to send to the server. If the return value of a function is null, the header will not be sent.
                 xsrfHeaderName – {string} – Name of HTTP header to populate with the XSRF token.
                 xsrfCookieName – {string} – Name of cookie containing the XSRF token.
                 transformRequest – {function(data, headersGetter)|Array.<function(data, headersGetter)>} – transform function or an array of such functions. The transform function takes the http request body and headers and returns its transformed (typically serialized) version. See Overriding the Default Transformations
                 transformResponse – {function(data, headersGetter)|Array.<function(data, headersGetter)>} – transform function or an array of such functions. The transform function takes the http response body and headers and returns its transformed (typically deserialized) version. See Overriding the Default Transformations
                 cache – {boolean|Cache} – If true, a default $http cache will be used to cache the GET request, otherwise if a cache instance built with $cacheFactory, this cache will be used for caching.
                 timeout – {number|Promise} – timeout in milliseconds, or promise that should abort the request when resolved.
                 withCredentials - {boolean} - whether to set the withCredentials flag on the XHR object. See requests with credentials for more information.
                 responseType - {string} - see requestType.



                 $http.get('/someUrl').
                 success(function(data, status, headers, config) {
                 // this callback will be called asynchronously
                 // when the response is available
                 }).
                 error(function(data, status, headers, config) {
                 // called asynchronously if an error occurs
                 // or server returns response with an error status.
                 });


                 $http.post('/someUrl', {msg:'hello word!'}).
                 success(function(data, status, headers, config) {
                 // this callback will be called asynchronously
                 // when the response is available
                 }).
                 error(function(data, status, headers, config) {
                 // called asynchronously if an error occurs
                 // or server returns response with an error status.
                 });
                 */






                var fprDo_HttpGet = function( theURL) {
                    var aMethodName = this._v_Type + " fprDo_HttpGet";

                    if( !theURL) {
                        return this.fNewDeferredRejectPromise( "!theURL");
                    }

                    if( this.LOGANGULARHTTPREQUESTS) {
                        this.fRecord( aMethodName, this.EVENTKIND_SERVICEREPORT_GET, theURL, null, null);
                    }

                    var aDeferred = this.fNewDeferred();


                    var aURL = theURL;

                    var aThis = this;

                    var anHttpObject = {
                        "method": "GET",
                        "url":    aURL
                    };


                    $http( anHttpObject)
                        .success(
                            function (data, status, headers, config) {
                                if( data){}{}/* CQT */
                                if( status){}{}/* CQT */
                                if( headers){}{}/* CQT */
                                if( config){}{}/* CQT */

                                if( aThis.LOGANGULARHTTPREPLIES) {
                                    aThis.fRecord( aMethodName, aThis.EVENTKIND_SERVICEREPORT_GETOK, aURL, null, data);
                                }

                                aThis.pDeferredResolveAjaxResponse( aDeferred, data);
                            }
                        )
                        .error(
                            function (data, status, headers, config) {
                                if( headers){}{}/* CQT */
                                if( config){}{}/* CQT */

                                if( aThis.LOGANGULARHTTPFAILURES) {
                                    aThis.fRecord( aMethodName, aThis.EVENTKIND_SERVICEREPORT_GETFAIL, aURL, data, status);
                                }

                                aThis.pDeferredRejectAjaxError( aDeferred, {  theURL: aURL, theErrorData: data, theErrorStatus: status});
                            }
                        );

                    return aDeferred.promise;

                };
                if( fprDo_HttpGet){}/* CQT */
                aPrototype.fprDo_HttpGet = fprDo_HttpGet;














                var fTransformRequestEncodeForm = function( theForm) {
                    var aMethodName =  this._v_Type + " fTransformRequestEncodeForm";
                    if( aMethodName){}/* CQT */

                    if( !theForm) {
                        return "";
                    }

                    var someUrlEncoded = [];

                    Object.keys( theForm).forEach( function( athFormKey) {
                        var anEncodedKey = encodeURIComponent( athFormKey);
                        var anEncodedValue = "";
                        var aValue = theForm[ athFormKey];
                        if( !( aValue == null)) {
                            anEncodedValue = encodeURIComponent( aValue);
                        }

                        var anEncoded = anEncodedKey + "=" + anEncodedValue;
                        someUrlEncoded.push( anEncoded)
                    });

                    var aFormEncoded = someUrlEncoded.join( "&");
                    if( aFormEncoded){}/* CQT */

                    return aFormEncoded;

                };
                if( fTransformRequestEncodeForm){}/* CQT */
                aPrototype.fTransformRequestEncodeForm = fTransformRequestEncodeForm;










                var fprDo_HttpPost = function( theURL, theForm) {
                    var aMethodName =  this._v_Type + " fprDo_HttpPost";

                    if( !theURL) {
                        return this.fNewDeferredRejectPromise( "!theURL");
                    }

                    if( !theForm) {
                        return this.fNewDeferredRejectPromise( "!theForm");
                    }

                    if( this.LOGANGULARHTTPREQUESTS) {
                        this.fRecord( aMethodName, this.EVENTKIND_SERVICEREPORT_POST, theURL, theForm, null);
                    }

                    var aDeferred = this.fNewDeferred();


                    var aURL = theURL;

                    var aThis = this;

                    var anHttpObject = {
                        "method":           "POST",
                        "url":              theURL,
                        "data":             theForm,
                        "headers":          {'Content-Type': 'application/x-www-form-urlencoded'},
                        "transformRequest": this.fTransformRequestEncodeForm.bind( this)
                    };

                    $http( anHttpObject)
                        .success(
                            function (data, status, headers, config) {
                                if( status){}{}/* CQT */
                                if( headers){}{}/* CQT */
                                if( config){}{}/* CQT */


                                if( aThis.LOGANGULARHTTPREPLIES) {
                                    aThis.fRecord( aMethodName, aThis.EVENTKIND_SERVICEREPORT_POSTOK, theURL, null, data);
                                }

                                aThis.pDeferredResolveAjaxResponse( aDeferred, data);
                            }
                        )
                        .error(
                            function (data, status, headers, config) {
                                if( headers){}{}/* CQT */
                                if( config){}{}/* CQT */

                                if( aThis.LOGANGULARHTTPFAILURES) {
                                    aThis.fRecord( aMethodName, aThis.EVENTKIND_SERVICEREPORT_POSTFAIL, theURL, data, status);
                                }

                                aThis.pDeferredRejectAjaxError( aDeferred, {  theURL: aURL, theErrorData: data, theErrorStatus: status});
                            }
                        );


                    return aDeferred.promise;
                };
                if( fprDo_HttpPost){}/* CQT */
                aPrototype.fprDo_HttpPost = fprDo_HttpPost;










                return aPrototype;

            })();








            var HttpAngularSvce_Constructor = function( theTitle, theIdentifier, theRecorder) {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_CommonSvceType.CommonSvce_Prototype;

                this._v_Prototype = null;
                this._v_Type      = null;
                this._v_Module    = null;

                this._pInit_HttpAngularSvce( theTitle, theIdentifier, theRecorder);
            };
            HttpAngularSvce_Constructor.prototype = anHttpAngularSvce_Prototype;





            var HttpAngularSvce_SuperPrototypeConstructor = function() {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_CommonSvceType.CommonSvce_Prototype;

                this._v_Prototype = anHttpAngularSvce_Prototype;
                this._v_Type      = null;
                this._v_Module    = null;
            };
            HttpAngularSvce_SuperPrototypeConstructor.prototype = anHttpAngularSvce_Prototype;



            var aModule = {
                "HttpAngularSvce_Prototype": anHttpAngularSvce_Prototype,
                "HttpAngularSvce_Constructor": HttpAngularSvce_Constructor,
                "HttpAngularSvce_SuperPrototypeConstructor": HttpAngularSvce_SuperPrototypeConstructor,

                "HttpSvce_Constructor": HttpAngularSvce_Constructor
            };
            pgInitFromModuleConstants( aModule);
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;

            anHttpAngularSvce_Prototype._v_Module = aModule;




            return aModule;
        };







        var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        if( !anExistingModule) {

            var aModule = aMod_definer(
                theSS_Overrider,
                theSS_CommonSvceType,
                theSS_$http
            );
            anExistingModule = aModule;

            theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
        }



        return anExistingModule;


    }]);







