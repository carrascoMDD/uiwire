'use strict';

/*
 * fillspecs_svce_type.js
 *
 * Creado @author Antonio Carrasco Valero 201412070719
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




var mFillspecsServices = angular.module("fillspecsSvceTypes", []);




mFillspecsServices.factory("FillspecsSvceType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "CommonSvceType",
    "CssKeys",
function( theSS_typesregistry,
          theSS_Overrider,
          theSS_CommonSvceType,
          theSS_CssKeys) {




    var ModuleName     = "fillspecs_svce_type";
    var ModulePackages = "springnut/utils";
    var ModuleFullName = ModulePackages + "/" + ModuleName;



    var aMod_definer = function( theS_Overrider,
                                 theS_CommonSvceType,
                                 theS_CssKeys) {


        if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}






        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }


            theToInit.LOGINFERREDSPECS = true;
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
            }

            theToInit.FILLSPECS_DEFAULTNAME = "FillSpecsSvce";
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






        var aFillspecsSvce_Prototype = (function() {


            var aPrototype = new theS_CommonSvceType.CommonSvce_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_SuperPrototype = theS_CommonSvceType.CommonSvce_Prototype;


            aPrototype._v_Type = "Fillspecs";

            aPrototype._v_Module = null;


            aPrototype._v_SourceSpecs = null;
            aPrototype._v_FilledSpecs = null;







            var _pInit = function( theTitle, theIdentifier, theRecorder) {

                this._pInit_FillspecsSvce( theTitle, theIdentifier, theRecorder);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;






            var _pInit_FillspecsSvce = function( theTitle, theIdentifier, theRecorder) {

                aPrototype._v_SuperPrototype._pInit_CommonSvce.apply( this, [
                    theTitle || this.FILLSPECS_DEFAULTNAME,
                    theIdentifier,
                    theRecorder
                ]);

                this._v_Prototype = aPrototype;
                this._v_Type      = this._v_Prototype._v_Type;
                this._v_Module    = aPrototype._v_Module;

                this._v_SourceSpecs = null;
                this._v_FilledSpecs = null;
            };
            if( _pInit_FillspecsSvce){}/* CQT */
            aPrototype._pInit_FillspecsSvce = _pInit_FillspecsSvce;







            var pCleanUp = function() {

                this._v_SourceSpecs = null;
                this._v_FilledSpecs = null;
            };
            if( pCleanUp){}/* CQT */
            aPrototype.pCleanUp = pCleanUp;




            var pDestroy = function() {

                this._v_SourceSpecs = null;
                this._v_FilledSpecs = null;

                aPrototype._v_SuperPrototype.pDestroy.apply( this);
            };
            if( pDestroy){}/* CQT */
            aPrototype.pDestroy = pDestroy;











            var fSpecsTopCopy = function( theSpecs) {

                if( !theSpecs) {
                    return null;
                }

                var aSpecsCopy = { };

                var someCtrlSpecKeys = Object.keys( theSpecs);
                var aNumKeys = someCtrlSpecKeys.length;
                for( var aKeyIdx=0; aKeyIdx < aNumKeys; aKeyIdx++) {
                    var aKey = someCtrlSpecKeys[ aKeyIdx];
                    var aValue = theSpecs[ aKey];

                    aSpecsCopy[ aKey] = aValue;
                }

                return aSpecsCopy;
            };
            if( fSpecsTopCopy){}/* CQT */
            aPrototype.fSpecsTopCopy = fSpecsTopCopy;








            var fFillSpecsCsss = function( theSpecs, theGridCssClasses, theEditorCssClasses) {

                if( !theSpecs) {
                    return null;
                }

                if( !theGridCssClasses) {
                    return null;
                }

                if( !theEditorCssClasses) {
                    return null;
                }

                this._v_SourceSpecs = theSpecs;

                var aSpecs = this.fSpecsTopCopy( theSpecs);
                if( !aSpecs) {
                    return null;
                }

                this._v_FilledSpecs = aSpecs;


                var someGridParameters = aSpecs.GRIDPARAMETERS;
                if( someGridParameters) {

                    var someGridNames = Object.keys( someGridParameters);
                    if( someGridNames) {
                        var aNumGridNames = someGridNames.length;
                        for( var aGridNameIdx=0; aGridNameIdx < aNumGridNames; aGridNameIdx++) {

                            var aGridName = someGridNames[ aGridNameIdx];
                            var aGridParameters = someGridParameters[ aGridName];
                            if( aGridParameters) {
                                aGridParameters[ "gridClasses"] = theGridCssClasses;
                            }
                        }
                    }
                }


                var someEditorParameters = aSpecs.EDITPARAMETERS;
                if( someEditorParameters) {


                    var someEditorNames = Object.keys( someEditorParameters);
                    if( someEditorNames) {

                        var aNumEditorNames = someEditorNames.length;
                        for( var aEditorNameIdx=0; aEditorNameIdx < aNumEditorNames; aEditorNameIdx++) {

                            var aEditorName = someEditorNames[ aEditorNameIdx];
                            var aEditorParameters = someEditorParameters[ aEditorName];
                            if( aEditorParameters) {

                                var someEditorFields = aEditorParameters[ "fields"];
                                if( someEditorFields) {

                                    this.pInitCsssForFields( someEditorFields, theEditorCssClasses);
                                }

                                aEditorParameters[ "editorClasses"] = theEditorCssClasses;
                            }
                        }
                    }
                }


                var someCreatorParameters = aSpecs.CREATEPARAMETERS;
                if( someCreatorParameters) {

                    var someCreatorNames = Object.keys( someCreatorParameters);
                    if( someCreatorNames) {

                        var aNumCreatorNames = someCreatorNames.length;
                        for( var aCreatorNameIdx=0; aCreatorNameIdx < aNumCreatorNames; aCreatorNameIdx++) {

                            var aCreatorName = someCreatorNames[ aCreatorNameIdx];
                            var aCreatorParameters = someCreatorParameters[ aCreatorName];
                            if( aCreatorParameters) {

                                var someCreatorFields = aCreatorParameters[ "fields"];
                                if( someCreatorFields) {

                                    this.pInitCsssForFields( someCreatorFields, theEditorCssClasses);
                                }

                                aCreatorParameters[ "creatorClasses"] = theEditorCssClasses;
                            }
                        }
                    }
                }


                return aSpecs;
            };
            if( fFillSpecsCsss){}/* CQT */
            aPrototype.fFillSpecsCsss = fFillSpecsCsss;










            var pInitCsssForFields = function( theFields, theEditorCssClasses) {

                if( !theFields) {
                    return;
                }

                var aNumFields = theFields.length;
                for( var aFieldIdx=0; aFieldIdx < aNumFields; aFieldIdx++) {
                    var aField = theFields[ aFieldIdx];
                    if( aField) {

                        aField[ "labelCss"] = theEditorCssClasses[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN];


                        var aValueCssKeyPostfix = aField[ "valueCss"];
                        if( aValueCssKeyPostfix) {
                            var aValueCssKey = "EDITORCLASSKEY_VALUE_" + aValueCssKeyPostfix;
                            var anActualCssKey = theS_CssKeys[ aValueCssKey];
                            if( anActualCssKey) {

                                aField[ "valueCss"] = theEditorCssClasses[ anActualCssKey];
                            }
                        }

                        var aIsRdOnly       = aField[ "readOnly"];
                        var anINPUTorRDONLY = ( aIsRdOnly ? "RDONLY" : "INPUT");

                        var anInputCssKeyPostfix = aField[ "inputCss"];
                        if( anInputCssKeyPostfix) {
                            var anInputCssKey = "EDITORCLASSKEY_" + anINPUTorRDONLY + "_" + aValueCssKeyPostfix;
                            var anActualInputCssKey = theS_CssKeys[ anInputCssKey];
                            if( anActualInputCssKey) {
                                aField[ "inputCss"] = theEditorCssClasses[ anActualInputCssKey];
                            }
                        }


                        var aHeightCssKeyPostfix = aField[ "heightCss"];
                        if( aHeightCssKeyPostfix) {
                            var aHeightCssKey = "EDITORCLASSKEY_FIELDCONTAINER_HEIGHT_" + aHeightCssKeyPostfix;
                            var anActualHeightCssKey = theS_CssKeys[ aHeightCssKey];
                            if( anActualHeightCssKey) {

                                aField[ "heightCss"] = " " + theEditorCssClasses[ anActualHeightCssKey];
                            }

                            var aHeightEditCssKey = "EDITORCLASSKEY_FIELDEDITCONTAINER_HEIGHT_" + aHeightCssKeyPostfix;
                            var anActualHeightEditCssKey = theS_CssKeys[ aHeightEditCssKey];
                            if( anActualHeightEditCssKey) {

                                aField[ "heightEditCss"] = " " + theEditorCssClasses[ anActualHeightEditCssKey];
                            }
                        }
                    }
                }
            };
            if( pInitCsssForFields){}/* CQT */
            aPrototype.pInitCsssForFields = pInitCsssForFields;










            var fFillSpecsRetrievals = function( theSpecs,
                                                 theRetrievalTarget,
                                                 theRetrievalsForGrids,
                                                 theRetrievalsForEditors,
                                                 theRetrievalsForCreators) {

                if( !theSpecs) {
                    return null;
                }

                this._v_SourceSpecs = theSpecs;

                var aSpecs = this.fSpecsTopCopy( theSpecs);
                if( !aSpecs) {
                    return null;
                }

                this._v_FilledSpecs = aSpecs;

                var someGridParameters = aSpecs.GRIDPARAMETERS;
                if( someGridParameters) {

                    var someGridNames = Object.keys( someGridParameters);
                    if( someGridNames) {
                        var aNumGridNames = someGridNames.length;
                        for( var aGridNameIdx=0; aGridNameIdx < aNumGridNames; aGridNameIdx++) {

                            var aGridName = someGridNames[ aGridNameIdx];
                            var aGridParameters = someGridParameters[ aGridName];
                            if( aGridParameters) {

                                aGridParameters[ "retrievalTarget"] = theRetrievalTarget;

                                if( theRetrievalsForGrids) {
                                    var aGridRetrieval = theRetrievalsForGrids[ aGridName];
                                    if( aGridRetrieval) {
                                        aGridParameters[ "retrieval"] = aGridRetrieval;
                                    }
                                }
                            }
                        }
                    }
                }



                var someEditorParameters = aSpecs.EDITPARAMETERS;
                if( someEditorParameters) {

                    var someEditorNames = Object.keys( someEditorParameters);
                    if( someEditorNames) {

                        var aNumEditorNames = someEditorNames.length;
                        for( var aEditorNameIdx=0; aEditorNameIdx < aNumEditorNames; aEditorNameIdx++) {

                            var aEditorName = someEditorNames[ aEditorNameIdx];
                            var aEditorParameters = someEditorParameters[ aEditorName];
                            if( aEditorParameters) {

                                aEditorParameters[ "retrievalTarget"] = theRetrievalTarget;

                                if( theRetrievalsForEditors) {
                                    var aEditorRetrieval = theRetrievalsForEditors[ aEditorName];
                                    if( aEditorRetrieval) {
                                        aEditorParameters[ "retrieval"] = aEditorRetrieval;
                                    }
                                }
                            }
                        }
                    }
                }



                var someCreatorParameters = aSpecs.CREATEPARAMETERS;
                if( someCreatorParameters) {

                    var someCreatorNames = Object.keys( someCreatorParameters);
                    if( someCreatorNames) {

                        var aNumCreatorNames = someCreatorNames.length;
                        for( var aCreatorNameIdx=0; aCreatorNameIdx < aNumCreatorNames; aCreatorNameIdx++) {

                            var aCreatorName = someCreatorNames[ aCreatorNameIdx];
                            var aCreatorParameters = someCreatorParameters[ aCreatorName];
                            if( aCreatorParameters) {

                                aCreatorParameters[ "retrievalTarget"] = theRetrievalTarget;

                                if( theRetrievalsForCreators) {
                                    var aCreatorRetrieval = theRetrievalsForCreators[ aCreatorName];
                                    if( aCreatorRetrieval) {
                                        aCreatorParameters[ "retrieval"] = aCreatorRetrieval;
                                    }
                                }
                            }
                        }
                    }
                }


                return aSpecs;
            };
            if( fFillSpecsRetrievals){}/* CQT */
            aPrototype.fFillSpecsRetrievals = fFillSpecsRetrievals;








            return aPrototype;

        })();




        var FillspecsSvce_Constructor = function( theTitle, theIdentifier, theRecorder) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_CommonSvceType.CommonSvce_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;
            this._v_Module = null;

            this._v_FilledSpecs  = null;

            this._v_SourceSpecs           = null;

            this._pInit_FillspecsSvce( theTitle, theIdentifier, theRecorder);
        };
        FillspecsSvce_Constructor.prototype = aFillspecsSvce_Prototype;





        var FillspecsSvce_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_CommonSvceType.CommonSvce_Prototype;

            this._v_Prototype = aFillspecsSvce_Prototype;
            this._v_Type      = null;
            this._v_Module    = null;

            this._v_FilledSpecs  = null;

            this._v_SourceSpecs           = null;
        };
        FillspecsSvce_SuperPrototypeConstructor.prototype = aFillspecsSvce_Prototype;



        var aModule = {
            "FillspecsSvce_Prototype": aFillspecsSvce_Prototype,
            "FillspecsSvce_Constructor": FillspecsSvce_Constructor,
            "FillspecsSvce_SuperPrototypeConstructor": FillspecsSvce_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aFillspecsSvce_Prototype._v_Module = aModule;



        return aModule;
    };







    var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
    if( !anExistingModule) {

        var aModule = aMod_definer(
            theSS_Overrider,
            theSS_CommonSvceType,
            theSS_CssKeys
        );
        anExistingModule = aModule;

        theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
    }






    return anExistingModule;

}]);







