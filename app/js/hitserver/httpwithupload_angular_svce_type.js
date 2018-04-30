'use strict';

/*
 * httpwithupload_angular_svce_type.js
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




angular.module("hitServerTypes").factory("HttpwithuploadAngularSvceType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "HttpAngularSvceType",
    '$upload',
function( theSS_typesregistry,
          theSS_Overrider,
          theSS_HttpAngularSvceType,
          theSS_$upload){



        var ModuleName     = "httpwithupload_angular_svce_type";
        var ModulePackages = "hitserver";
        var ModuleFullName = ModulePackages + "/" + ModuleName;





        var aMod_definer = function( theS_Overrider,
                                     theS_HttpAngularSvceType,
                                     $upload) {


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

                theToInit.HTTPANGULARSVCE_DEFAULTNAME = "HttpwithpuloadAngularSvceDefaultName";

                theToInit.FORMFIELD_FILE_CONSTRUCTORNAME = "File";

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






            var anHttpwithpuloadAngularSvce_Prototype = (function() {


                var aPrototype = new theS_HttpAngularSvceType.HttpAngularSvce_SuperPrototypeConstructor();

                pgInitFromModuleConstants( aPrototype);


                aPrototype._v_SuperPrototype = theS_HttpAngularSvceType.HttpAngularSvce_Prototype;


                aPrototype._v_Type = "HttpwithpuloadAngularSvce";

                aPrototype._v_Module = null;





                var _pInit = function( theTitle, theIdentifier, theRecorder) {

                    this._pInit_HttpwithpuloadAngularSvce( theTitle, theIdentifier, theRecorder);
                };
                if( _pInit){}/* CQT */
                aPrototype._pInit = _pInit;







                var _pInit_HttpwithpuloadAngularSvce = function( theTitle, theIdentifier, theRecorder) {

                    /* Delegate on super prototype initialization */
                    aPrototype._v_SuperPrototype._pInit_HttpAngularSvce.apply( this, [
                        theTitle || this.HTTPANGULARSVCE_DEFAULTNAME,
                        theIdentifier,
                        theRecorder
                    ]);

                    this._v_Prototype = aPrototype;
                    this._v_Type      = this._v_Prototype._v_Type;
                    this._v_Module    = aPrototype._v_Module;
                };
                if( _pInit_HttpwithpuloadAngularSvce){}/* CQT */
                aPrototype._pInit_HttpwithpuloadAngularSvce = _pInit_HttpwithpuloadAngularSvce;








                var fIsFileValue = function( theValue) {

                    if( !theValue) {
                        return false;
                    }

                    var aValueConstructor = theValue.constructor;
                    if( !aValueConstructor) {
                        return false;
                    }

                    var aValueConstructorName = aValueConstructor.name;
                    if( !aValueConstructorName) {
                        return false;
                    }

                    var anIsFileValue = aValueConstructorName == this.FORMFIELD_FILE_CONSTRUCTORNAME;
                    if( anIsFileValue){}/* CQT */

                    return anIsFileValue;
                };
                if( fIsFileValue){}/* CQT */
                aPrototype.fIsFileValue = fIsFileValue;







                var fFormFileFieldNames = function( theForm) {

                    if( !theForm) {
                        return false;
                    }

                    if( !( typeof theForm == "object")) {
                        return false;
                    }

                    var someFormKeys = Object.keys( theForm);
                    if( !someFormKeys) {
                        return false;
                    }

                    var aNumFormKeys = someFormKeys.length;
                    if( !aNumFormKeys) {
                        return false;
                    }

                    var someFileFieldNames = [ ];

                    for( var aFormKeyIdx=0; aFormKeyIdx < aNumFormKeys; aFormKeyIdx++) {
                        var aFormKey = someFormKeys[ aFormKeyIdx];
                        var aFormValue = theForm[ aFormKey];

                        if( this.fIsFileValue( aFormValue)) {
                            someFileFieldNames.push( aFormKey);
                        }
                    }

                    return someFileFieldNames;
                };
                if( fFormFileFieldNames){}/* CQT */
                aPrototype.fFormFileFieldNames = fFormFileFieldNames;









                var pCopyOtherFieldNamesInto = function( theForm, theFieldNames, theFormData) {

                    if( !theForm) {
                        return;
                    }

                    if( !theFieldNames) {
                        return;
                    }

                    if( !theFormData) {
                        return;
                    }

                    var someFormKeys = Object.keys( theForm);
                    if( !someFormKeys) {
                        return;
                    }

                    var aNumFormKeys = someFormKeys.length;
                    if( !aNumFormKeys) {
                        return;
                    }

                    for( var aFormKeyIdx=0; aFormKeyIdx < aNumFormKeys; aFormKeyIdx++) {
                        var aFormKey = someFormKeys[ aFormKeyIdx];

                        if( theFieldNames.indexOf( aFormKey) < 0) {

                            var aFormValue = theForm[ aFormKey];
                            if( aFormValue){}/* CQT */

                            theFormData[ aFormKey] = aFormValue;
                        }
                    }
                };
                if( pCopyOtherFieldNamesInto){}/* CQT */
                aPrototype.pCopyOtherFieldNamesInto = pCopyOtherFieldNamesInto;













                var fprDo_HttpPost = function( theURL, theForm) {
                    var aMethodName =  this._v_Type + " fprDo_HttpPost";

                    if( !theForm) {
                        return aPrototype._v_SuperPrototype.fprDo_HttpPost.apply( this, [ theURL, theForm]);
                    }

                    var someFileFieldNames = this.fFormFileFieldNames( theForm);

                    if( !someFileFieldNames || !someFileFieldNames.length) {
                        return aPrototype._v_SuperPrototype.fprDo_HttpPost.apply( this, [ theURL, theForm]);
                    }

                    /* ACV OJO 201412112343 TODO Manage multiple upload files in same request, possibly in support of transactionally uploading multiple data source files (as in an aggregate of exchange files with other applications) */
                    var aFileFieldName = someFileFieldNames[ 0];
                    if( !aFileFieldName) {
                        return aPrototype._v_SuperPrototype.fprDo_HttpPost.apply( this, [ theURL, theForm]);
                    }

                    var aFile = theForm[ aFileFieldName];
                    if( !aFile) {
                        return aPrototype._v_SuperPrototype.fprDo_HttpPost.apply( this, [ theURL, theForm]);
                    }

                    if( !this.fIsFileValue( aFile)) {
                        return aPrototype._v_SuperPrototype.fprDo_HttpPost.apply( this, [ theURL, theForm]);
                    }



                    var aDeferred = this.fNewDeferred();


                    var anUploadData = { };
                    this.pCopyOtherFieldNamesInto( theForm, someFileFieldNames, anUploadData);

                    var anUploadParms = {
                        "url":       theURL,
                        "method":    'POST',
                        "headers": {'Content-Type': 'application/x-www-form-urlencoded'},
                        "data":      anUploadData,
                        "file":      aFile,
                        "fileFormDataName": aFileFieldName
                    };



                    var anUpload = $upload.upload( anUploadParms);

                    var aThis = this;

                    anUpload.then(
                        function( theResponse) {

                            if( aThis.LOGANGULARHTTPREPLIES) {
                                aThis.fRecord( aMethodName, aThis.EVENTKIND_SERVICEREPORT_POSTOK, theURL, null, theResponse);
                            }

                            var aResponseStatus = theResponse[ "status"];
                            var aResponseData   = theResponse[ "data"];

                            if( !aResponseStatus || !( aResponseStatus == 200)) {
                                if( aThis.LOGUPLOADHTTPFAILURES) {
                                    aThis.fRecord( aMethodName, aThis.EVENTKIND_SERVICEREPORT_UPLOADFAIL, theURL, aResponseStatus, aResponseData);
                                }

                                aThis.pDeferredRejectAjaxError( aDeferred, { aURL: theURL, theErrorData: aResponseData, theErrorStatus: aResponseStatus});
                            }

                            aThis.pDeferredResolveAjaxResponse( aDeferred, aResponseData);
                        },
                        function( theError) {

                            if ( theError && theError.status > 0) {

                                if( aThis.LOGANGULARHTTPFAILURES) {
                                    aThis.fRecord( aMethodName, aThis.EVENTKIND_SERVICEREPORT_POSTFAIL, theURL, theResponse, status);
                                }

                                aThis.pDeferredRejectAjaxError( aDeferred, theError);
                            }
                        }
                    );


                    /*
                     anUploadedFile.upload.progress(function(evt) {
                     // Math.min is to fix IE which reports 200% sometimes
                     anUpload.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
                     });
                     */

                    /*
                     anUpload.xhr(function(xhr) {
                     // xhr.upload.addEventListener('abort', function(){console.log('abort complete')}, false);
                     });
                     */

                    return aDeferred.promise;
                };
                if( fprDo_HttpPost){}/* CQT */
                aPrototype.fprDo_HttpPost = fprDo_HttpPost;


                return aPrototype;

            })();








            var HttpwithpuloadAngularSvce_Constructor = function( theTitle, theIdentifier, theRecorder) {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_HttpAngularSvceType.HttpAngularSvce_Prototype;

                this._v_Prototype = null;
                this._v_Type      = null;
                this._v_Module    = null;

                this._pInit_HttpwithpuloadAngularSvce( theTitle, theIdentifier, theRecorder);
            };
            HttpwithpuloadAngularSvce_Constructor.prototype = anHttpwithpuloadAngularSvce_Prototype;





            var HttpwithpuloadAngularSvce_SuperPrototypeConstructor = function() {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_HttpAngularSvceType.HttpAngularSvce_Prototype;

                this._v_Prototype = anHttpwithpuloadAngularSvce_Prototype;
                this._v_Type      = null;
                this._v_Module    = null;
            };
            HttpwithpuloadAngularSvce_SuperPrototypeConstructor.prototype = anHttpwithpuloadAngularSvce_Prototype;



            var aModule = {
                "HttpwithpuloadAngularSvce_Prototype": anHttpwithpuloadAngularSvce_Prototype,
                "HttpwithpuloadAngularSvce_Constructor": HttpwithpuloadAngularSvce_Constructor,
                "HttpwithpuloadAngularSvce_SuperPrototypeConstructor": HttpwithpuloadAngularSvce_SuperPrototypeConstructor,

                "HttpSvce_Constructor": HttpwithpuloadAngularSvce_Constructor
            };
            pgInitFromModuleConstants( aModule);
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;

            anHttpwithpuloadAngularSvce_Prototype._v_Module = aModule;




            return aModule;
        };







        var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        if( !anExistingModule) {

            var aModule = aMod_definer(
                theSS_Overrider,
                theSS_HttpAngularSvceType,
                theSS_$upload
            );
            anExistingModule = aModule;

            theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
        }



        return anExistingModule;


    }]);







