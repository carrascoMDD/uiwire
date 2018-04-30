'use strict';

/*
 * inferctrlspecs_svce_type.js
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






angular.module("revengTypes").factory("InferctrlspecsSvceType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "CommonSvceType",
    "InferctrlspecsSampleData",
function( theSS_typesregistry,
          theSS_Overrider,
          theSS_CommonSvceType,
          theSS_InferctrlspecsSampleData) {




    var ModuleName     = "inferctrlspecs_svce_type";
    var ModulePackages = "springnut/reveng";
    var ModuleFullName = ModulePackages + "/" + ModuleName;



    var aMod_definer = function( theS_Overrider,
                                 theS_CommonSvceType,
                                 theS_InferctrlspecsSampleData) {


        if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}







        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }
            theToInit.TYPEWORDS_LISTA = [ "Lista"];

            theToInit.IGNORETYPES_LISTS = [ ];

            theToInit.IGNORETYPES_RECORDS = [ ];


            theToInit.NAMEWORDS_STR   = "Str";

            theToInit.NAMEWORDS_DATOS   = "Datos";

            theToInit.GENPREFIX_CREATOR = "Crear";

            theToInit.GENPREFIX_CREATORLABEL = "Crear ";

            theToInit.VOIDFIELDNAMEPREFIXES = [ "_v_", "_v", "v", "the", "ath"];

            theToInit.COLUMNCSSPREFIXDEFAULT = "css_";

            theToInit.PARAMETERPREFIX = "the";

            theToInit.CHANGEFLAGPREFIX  = "the";
            theToInit.CHANGEFLAGPOSTFIX = "_cambiar";

            theToInit.DEFAULTCLASSKEYCSS = "STRING_VERYLONG";

            theToInit.DEFAULTHEIGHTCLASSKEYCSS = "DEFAULT";


            theToInit.NAMEWORDS_FECHA     = [ "Fecha", "Date"];

            theToInit.NAMEWORDS_TIMESTAMP = [ "Fecha", "Date"];


            theToInit.MAXLEN_BOOL = 32;


            theToInit.MAXLEN_DATE   = "DD/MM/YYYY".length;
            theToInit.MINLEN_TIMESTAMP = "DD/MM/YYYY HH:MM:SS.sss".length;
            theToInit.MAXLEN_DATEORTIMESTAMP = 64;

            theToInit.MINLEN_INT = 1;
            theToInit.MAXLEN_INT = 18;

            theToInit.MINLEN_STRING = 1;
            theToInit.MAXLEN_STRING = 512;

            theToInit.MINLEN_TEXT = 1;
            theToInit.MAXLEN_TEXT = 8192;

            theToInit.TEXTCONTENTCHARS  = "\n\r\t";
            theToInit.TEXTCONTENTLENGTH = 128;



            /* ACV OJO 201412060142 When a String, it will render input as a field, which always presents a line, even if styled tall
            theToInit.HEIGHTCLASS_STRING_LEN_NONE  = 128;
            theToInit.HEIGHTCLASS_STRING_LEN_SHORT = 512;
            theToInit.HEIGHTCLASS_STRING_LEN_LONG  = 4096;
            */

            theToInit.HEIGHTCLASS_TEXT_LEN_SHORT   = 512;
            theToInit.HEIGHTCLASS_TEXT_LEN_LONG    = 4096;

            theToInit.CLASS_STRING_LEN_VERYSHORT   = 8;
            theToInit.CLASS_STRING_LEN_SHORT       = 16;
            theToInit.CLASS_STRING_LEN_MEDIUM      = 32;
            theToInit.CLASS_STRING_LEN_LONG        = 64;

            theToInit.CLASS_TEXT_LEN_SHORT         = 512;
            theToInit.CLASS_TEXT_LEN_LONG          = 4096;

            theToInit.CLASS_INT_LEN_SHORT          = 6;
            theToInit.CLASS_INT_LEN_MEDIUM         = 8;

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


            theToInit.INFERCTRLSPECS_DEFAULTNAME = "InferCtrlSpecsSvceDefaultName";



            theToInit.CTXTKIND_GRID   = "GRID";
            theToInit.CTXTKIND_RECORD = "RECORD";

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











        var aInferctrlspecsSvce_Prototype = (function() {


            var aPrototype = new theS_CommonSvceType.CommonSvce_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_SuperPrototype = theS_CommonSvceType.CommonSvce_Prototype;


            aPrototype._v_Type = "Inferctrlspecs";

            aPrototype._v_Module = null;


            aPrototype._v_InferredCtrlSpecs = null;

            aPrototype._v_SampleData       = null;

            aPrototype._v_TipoInferencia       = null;

            aPrototype._v_Version = null;

            aPrototype._v_ColumnClassesPrefix = null;

            aPrototype._v_TypeNamePrefixes  = null;
            aPrototype._v_FieldNamesIgnored = null;






            var _pInit = function( theTitle, theIdentifier, theRecorder) {

                this._pInit_InferctrlspecsSvce( theTitle, theIdentifier, theRecorder);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;






            var _pInit_InferctrlspecsSvce = function( theTitle, theIdentifier, theRecorder) {

                aPrototype._v_SuperPrototype._pInit_CommonSvce.apply( this, [
                    theTitle || this.INFERCTRLSPECS_DEFAULTNAME,
                    theIdentifier,
                    theRecorder
                ]);

                this._v_Prototype = aPrototype;
                this._v_Type      = this._v_Prototype._v_Type;
                this._v_Module    = aPrototype._v_Module;

                this._v_InferredCtrlSpecs = null;
                this._v_SampleData        = null;
                this._v_TipoInferencia    = null;
                this._v_Version           = null;
                this._v_ColumnClassesPrefix = null;
                this._v_TypeNamePrefixes  = null;
                this._v_FieldNamesIgnored = null;

                if( this._v_TipoInferencia){}/* CQT */
                if( this._v_Version){}/* CQT */
            };
            if( _pInit_InferctrlspecsSvce){}/* CQT */
            aPrototype._pInit_InferctrlspecsSvce = _pInit_InferctrlspecsSvce;







            var pCleanUp = function() {

                this._v_InferredCtrlSpecs = null;
                this._v_SampleData        = null;
                this._v_TipoInferencia    = null;
                this._v_Version           = null;
                this._v_ColumnClassesPrefix = null;
                this._v_TypeNamePrefixes  = null;
                this._v_FieldNamesIgnored = null;

                /*
                 aPrototype._v_SuperPrototype.pDestroy.apply( this);
                 */
            };
            if( pCleanUp){}/* CQT */
            aPrototype.pCleanUp = pCleanUp;




            var pDestroy = function() {

                this._v_InferredCtrlSpecs = null;
                this._v_SampleData        = null;
                this._v_TipoInferencia    = null;
                this._v_Version           = null;
                this._v_ColumnClassesPrefix = null;
                this._v_TypeNamePrefixes  = null;
                this._v_FieldNamesIgnored = null;

                /*
                aPrototype._v_SuperPrototype.pDestroy.apply( this);
                */
            };
            if( pDestroy){}/* CQT */
            aPrototype.pDestroy = pDestroy;








            var pSetColumnClassesPrefix = function( theColumnClassesPrefix) {

                this._v_ColumnClassesPrefix = theColumnClassesPrefix;

            };
            if( pSetColumnClassesPrefix){}/* CQT */
            aPrototype.pSetColumnClassesPrefix = pSetColumnClassesPrefix;






            

            var pSetTypeNamePrefixes = function( theTypeNamePrefixes) {

                this._v_TypeNamePrefixes = theTypeNamePrefixes;

            };
            if( pSetTypeNamePrefixes){}/* CQT */
            aPrototype.pSetTypeNamePrefixes = pSetTypeNamePrefixes;







            var pSetFieldNamesIgnored = function( theFieldNamesIgnored) {

                this._v_FieldNamesIgnored = theFieldNamesIgnored;

            };
            if( pSetFieldNamesIgnored){}/* CQT */
            aPrototype.pSetFieldNamesIgnored = pSetFieldNamesIgnored;








            var fNewVoidGeneratedCtrlSpecs = function() {

                var aGenerated = {
                    GRIDPARAMETERS:                   { },
                    EDITPARAMETERS:                   { },
                    CREATEPARAMETERS:                 { },
                    WIRES:                            [ ],
                    GRIDNAMES_INITIALLOAD:            [ ],
                    EDITORNAMES_INITIALLOAD:          [ ],
                    CREATORNAMES_INITIALINCREATION:   [ ],
                    TOPTABSBAR_ENTRIES:               [ ],
                    TOPTABSBAR_INITIALLYSELECTEDTAB:  null,
                    TOPTABSBAR_TABSFIXEDINITIAL:      [ ]
                };
                if( aGenerated){}/* CQT */

                return aGenerated;
            };
            if( fNewVoidGeneratedCtrlSpecs){}/* CQT */
            aPrototype.fNewVoidGeneratedCtrlSpecs = fNewVoidGeneratedCtrlSpecs;








            var fInferredCtrlSpecs = function() {

                if( !( this._v_InferredCtrlSpecs == null)) {
                    return this._v_InferredCtrlSpecs;
                }

                this._v_InferredCtrlSpecs = this.fNewVoidGeneratedCtrlSpecs();

                return this._v_InferredCtrlSpecs;
            };
            if( fInferredCtrlSpecs){}/* CQT */
            aPrototype.fInferredCtrlSpecs = fInferredCtrlSpecs;










            var pAddSampleData = function( theSample) {

                if( ( theSample == null) || !( typeof theSample == "object")) {
                    return;
                }

                if( this._v_SampleData == null) {
                    this._v_SampleData = [ ];
                }

                this._v_SampleData.push( theSample);
            };
            if( pAddSampleData){}/* CQT */
            aPrototype.pAddSampleData = pAddSampleData;







            var fNewVoidRootCtxt = function() {

                var aCtxt = {
                    _v_Roots: [ ]
                };
                if( aCtxt){}/* CQT */

                return aCtxt;
            };
            if( fNewVoidRootCtxt){}/* CQT */
            aPrototype.fNewVoidRootCtxt = fNewVoidRootCtxt;






            var fNewVoidCtxt = function( theRootCtxt, theCtxt) {

                if( theRootCtxt == null) {
                    return null;
                }

                var aCtxt = {
                    _v_CtxtKind:    null,
                    _v_ParentCtxt:  null,
                    _v_GridName:    null,
                    _v_EditorName:  null,
                    _v_CreatorName: null,
                    _v_FieldName:   null,
                    _v_FieldIndex:  null,
                    _v_Children:    [ ],
                    _v_Samples:     [ ]
                };


                if( theCtxt) {
                    aCtxt._v_ParentCtxt = theCtxt;
                    theCtxt._v_Children.push( aCtxt);
                }
                else {
                    theRootCtxt._v_Roots.push( aCtxt);
                }

                return aCtxt;
            };
            if( fNewVoidCtxt){}/* CQT */
            aPrototype.fNewVoidCtxt = fNewVoidCtxt;











            var fInferFromSampleData = function( theRootCtxt, theSampleData) {

                if( theRootCtxt == null) {
                    return false;
                }

                if( theSampleData == null) {
                    return false;
                }

                if( !( typeof theSampleData == "object")) {
                    return true;
                }


                var aNumSamples = theSampleData.length;
                if( !( typeof aNumSamples == "undefined")) {

                    for( var aSampleIdx=0; aSampleIdx < aNumSamples; aSampleIdx++) {

                        var aSample = theSampleData[ aSampleIdx];
                        if( aSample && ( typeof aSample == "object")) {

                            this.fInferFromSampleObject( theRootCtxt, null, aSample);
                        }
                    }

                    return true;
                }

                return this.fInferFromSampleObject( theRootCtxt, null, theSampleData);

            };
            if( fInferFromSampleData){}/* CQT */
            aPrototype.fInferFromSampleData = fInferFromSampleData;










            var fInferFromSampleListOrObject = function( theRootCtxt, theCtxt, theSample) {

                if( theRootCtxt == null) {
                    return false;
                }

                if( theCtxt == null) {
                    return false;
                }

                if( theSample == null) {
                    return true;
                }

                if( !( typeof theSample == "object")) {
                    return true;
                }


                var aNumSamples = theSample.length;
                if( !( typeof aNumSamples == "undefined")) {

                    if( !aNumSamples) {
                        return true;
                    }

                    var anInferenceSuccess = true;

                    for( var aSampleIdx=0; aSampleIdx < aNumSamples; aSampleIdx++) {
                        var aSample = theSample[ aSampleIdx];
                        if( aSample && ( typeof aSample == "object")) {

                            anInferenceSuccess = anInferenceSuccess && this.fInferFromSampleObject( theRootCtxt, theCtxt, aSample);
                        }
                    }

                    return anInferenceSuccess;
                }


                return this.fInferFromSampleObject( theRootCtxt, theCtxt, theSample);

            };
            if( fInferFromSampleListOrObject){}/* CQT */
            aPrototype.fInferFromSampleListOrObject = fInferFromSampleListOrObject;















            var fInferFromSampleObject = function( theRootCtxt, theCtxt, theSample) {

                if( theRootCtxt == null) {
                    return false;
                }

                if( theSample == null) {
                    return true;
                }

                if( !( typeof theSample == "object")) {
                    return true;
                }

                var aType = theSample[ "vTipo"];
                if( typeof aType == "undefined") {
                    return true;
                }

                if( typeof theSample[ "vSuccess"] == "undefined") {
                    return true;
                }


                var aEsLista =
                       !( typeof theSample[ "vPrimero"] == "undefined")
                    || !( typeof theSample[ "vCuantos"] == "undefined")
                    || !( typeof theSample[ "vSort"]    == "undefined");


                if( !aEsLista) {
                    var someWords = this.TYPEWORDS_LISTA;
                    var aNumWords = someWords.length;
                    for( var aWordIdx=0; aWordIdx < aNumWords; aWordIdx++) {
                        var aWord = someWords[ aWordIdx];
                        if( aWord) {
                            if( aType.indexOf( aWord) >= 0) {
                                aEsLista = true;
                                break;
                            }
                        }
                    }
                }




                if( aEsLista) {
                    return this.fInferListaObject( theRootCtxt, theCtxt, theSample, aType);
                }


                return this.fInferRecordObject( theRootCtxt, theCtxt, theSample, aType);

            };
            if( fInferFromSampleObject){}/* CQT */
            aPrototype.fInferFromSampleObject = fInferFromSampleObject;










            /* ACV OJO TODO 201411292004 Duda: se ejecuta alguna vez ? pues parece que no

             */
            var fInferListaObject = function( theRootCtxt, theCtxt, theSample, theType) {

                if( theRootCtxt == null) {
                    return false;
                }

                if( theSample == null) {
                    return true;
                }

                if( !theType) {
                    return true;
                }

                if( this.IGNORETYPES_LISTS.indexOf( theType) >= 0) {
                    return true;
                }


                var aListElementsKeyAndValue = this.fListaElementsKeyAndValue( theRootCtxt, theCtxt, theSample, theType);
                if( !aListElementsKeyAndValue) {
                    return true;
                }

                var aListElementsKey = aListElementsKeyAndValue[ "key"];
                if( !aListElementsKey) {
                    return true;
                }

                var aListElementsValue = aListElementsKeyAndValue[ "value"];
                if( ( aListElementsValue == null) || ( typeof aListElementsValue == "undefined")) {
                    return true;
                }



                var aCtxt = this.fNewVoidCtxt( theRootCtxt, theCtxt);

                aCtxt._v_CtxtKind = this.CTXTKIND_GRID;

                if( !this.fInferredList( theRootCtxt, aCtxt, theSample, theType)) {
                    return false;
                }

                return this.fInferFromSampleObject(  theRootCtxt, aCtxt, aListElementsValue)

            };
            if( fInferListaObject){}/* CQT */
            aPrototype.fInferListaObject = fInferListaObject;









            var fInferSyntheticListaObject = function( theRootCtxt, theCtxt, theFieldKey, theFieldValue, theElementType) {

                if( theRootCtxt == null) {
                    return false;
                }

                if( theCtxt == null) {
                    return false;
                }

                if( !theFieldKey) {
                    return true;
                }

                if( theFieldValue == null) {
                    return true;
                }

                if( !theElementType) {
                    return true;
                }

                var aSyntheticListName = this.fSyntheticListNameFromFieldName( theFieldKey);

                if( this.IGNORETYPES_LISTS.indexOf( aSyntheticListName) >= 0) {
                    return true;
                }


                var aCtxt = this.fNewVoidCtxt( theRootCtxt, theCtxt);

                aCtxt._v_CtxtKind = this.CTXTKIND_GRID;

                if( !this.fInferredList( theRootCtxt, aCtxt, theFieldValue, aSyntheticListName)) {
                    return false;
                }

                if( !this.fInferFromSampleObject(  theRootCtxt, aCtxt, theFieldValue)) {
                    return false;
                }
                
                
                var aMasterGridCtxt = this.fMasterGridCtxt( theCtxt);

                if( aMasterGridCtxt) {

                    if( !this.fInferredWireGrid2SlaveGrid( theRootCtxt, aCtxt, aMasterGridCtxt, theFieldKey)) {
                        return false;
                    }

                    var someMasterFields = null;
                    var aMasterGridName = aMasterGridCtxt._v_GridName;
                    if( aMasterGridName) {

                        var aMasterGridParameters = this._v_InferredCtrlSpecs.GRIDPARAMETERS[ aMasterGridName];
                        if( aMasterGridParameters) {
                            someMasterFields = aMasterGridParameters[ "fields"];
                        }
                    }

                    var anEditorName = theCtxt._v_EditorName;
                    if( anEditorName) {
                        var aTypeName = this.fTypeNameFromType( anEditorName);
                        if( aTypeName) {

                            var aGridName = aCtxt._v_GridName;
                            if( aGridName) {

                                var aGridParameters = this._v_InferredCtrlSpecs.GRIDPARAMETERS[ aGridName];
                                if( aGridParameters) {

                                    aGridParameters[ "masterType"] = aTypeName;

                                    if( someMasterFields && someMasterFields.length) {
                                        aGridParameters[ "masterLabels"] = someMasterFields.slice();
                                    }
                                }
                            }
                        }
                    }
                }

                return true;
            };
            if( fInferSyntheticListaObject){}/* CQT */
            aPrototype.fInferSyntheticListaObject = fInferSyntheticListaObject;















            var fListaElementsKeyAndValue = function( theRootCtxt, theCtxt, theSample, theType) {
                if( theType){}/* CQT */

                if( theSample == null) {
                    return true;
                }


                var someSampleKeys = Object.keys( theSample);
                if( !someSampleKeys) {
                    return true;
                }

                var aNumSampleKeys = someSampleKeys.length;
                if( !aNumSampleKeys) {
                    return true;
                }

                var aListElementsKey   = null;
                var aListElementsValue = null;

                for( var aSampleKeyIdx=0; aSampleKeyIdx < aNumSampleKeys; aSampleKeyIdx++) {

                    var aSampleKey   = someSampleKeys[ aSampleKeyIdx];
                    var aSampleValue = theSample[ aSampleKey];

                    if( !( aSampleValue == null)) {
                        if( typeof aSampleValue == "object") {

                            if( !( typeof aSampleValue.length == "undefined")) {
                                if( aSampleValue.length) {

                                    var aFirstElement = aSampleValue[ 0];
                                    if( typeof aFirstElement == "object") {
                                        if( typeof aFirstElement.length == "undefined") {
                                            if( aFirstElement[ "vTipo"] && !( typeof aFirstElement[ "vSuccess"] == "undefined")) {

                                                aListElementsKey   = aSampleKey;
                                                aListElementsValue = aFirstElement;
                                                break;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                if( !aListElementsKey || ( aListElementsValue == null)) {
                    return null;
                }

                return { "key": aListElementsKey, "value": aListElementsValue};
            };
            if( fListaElementsKeyAndValue){}/* CQT */
            aPrototype.fListaElementsKeyAndValue = fListaElementsKeyAndValue;











            var fInferRecordObject = function( theRootCtxt, theCtxt, theSample, theType) {

                if( theRootCtxt == null) {
                    return false;
                }

                if( theSample == null) {
                    return true;
                }

                if( !theType) {
                    return true;
                }

                if( this.IGNORETYPES_RECORDS.indexOf( theType) >= 0) {
                    return true;
                }



                var aCtxt = this.fNewVoidCtxt( theRootCtxt, theCtxt);

                aCtxt._v_CtxtKind = this.CTXTKIND_RECORD;

                if( !this.fInferredRecord( theRootCtxt, aCtxt, theSample, theType)) {
                    return false;
                }




                var someSampleKeys = Object.keys( theSample);
                if( !someSampleKeys) {
                    return true;
                }

                var aNumSampleKeys = someSampleKeys.length;
                if( !aNumSampleKeys) {
                    return true;
                }


                var anInferenceSuccess = true;

                for( var aSampleKeyIdx=0; aSampleKeyIdx < aNumSampleKeys; aSampleKeyIdx++) {

                    var aSampleKey   = someSampleKeys[ aSampleKeyIdx];
                    var aSampleValue = theSample[ aSampleKey];

                    if( typeof aSampleValue == "undefined") {
                        continue;
                    }

                    anInferenceSuccess = anInferenceSuccess && this.fInferFromSampleField( theRootCtxt, aCtxt,
                        theSample, theType, aSampleKey, aSampleValue
                    );

                }




                if( theCtxt._v_CtxtKind == this.CTXTKIND_GRID) {
                    var aGridName = theCtxt._v_GridName;
                    if( aGridName) {

                        var aGridParameters =  this._v_InferredCtrlSpecs.GRIDPARAMETERS[ aGridName];
                        if( aGridParameters) {

                            var anEditorName = aCtxt._v_EditorName;
                            if( anEditorName) {

                                var anEditParameters = this._v_InferredCtrlSpecs.EDITPARAMETERS[ anEditorName];
                                if( anEditParameters) {

                                    var someMasterFields = aGridParameters[ "fields"];
                                    if( someMasterFields && someMasterFields.length) {

                                        anEditParameters[ "masterLabels"]  = someMasterFields.slice();
                                    }
                                }
                            }
                        }
                    }
                }



                return anInferenceSuccess;

            };
            if( fInferRecordObject){}/* CQT */
            aPrototype.fInferRecordObject = fInferRecordObject;











            var fListOfObjectsElementTypeAndSample = function( theValue) {

                if( theValue == null) {
                    return null;
                }

                if( !( typeof theValue == "object")) {
                    return null;
                }

                var aNumSamples = theValue.length;
                if( typeof aNumSamples == "undefined"){
                    return null;
                }

                if( !aNumSamples){
                    return null;
                }

                var aSample = theValue[ 0];
                if( !aSample) {
                    return null;
                }

                if( !( typeof aSample == "object")) {
                    return null;
                }

                var aType = aSample[ "vTipo"];
                if( !aType) {
                    return null;
                }

                return { "type": aType, "sample": aSample};

            };
            if( fListOfObjectsElementTypeAndSample){}/* CQT */
            aPrototype.fListOfObjectsElementTypeAndSample = fListOfObjectsElementTypeAndSample;









            var fInferFromSampleField = function( theRootCtxt, theCtxt, theSample, theType, theFieldKey, theFieldValue) {

                if( theRootCtxt == null) {
                    return false;
                }

                if( theCtxt == null) {
                    return false;
                }

                if( theSample == null) {
                    return true;
                }

                if( !theFieldKey) {
                    return true;
                }

                if( ( typeof theFieldValue == "undefined") || ( theFieldValue == null)) {
                    return true;
                }


                if( this._v_FieldNamesIgnored) {
                    if( this._v_FieldNamesIgnored.indexOf( theFieldKey) >= 0) {
                        return true;
                    }
                }

                var aMayInferField = false;
                var aDataType   = null;
                var aDataSize   = null;

                var aTypeof = typeof theFieldValue;

                switch( aTypeof) {

                    case "string":

                        if( this.fParameterNameIsDate( theFieldKey)) {
                            
                            var aMinLength = 0;
                            if( fParameterValueIsTimestampLength) {
                                aDataType = "Timestamp";
                                aMinLength = this.MINLEN_TIMESTAMP;
                            }
                            else {
                                aDataType = "Date";
                                aMinLength = this.MAXLEN_DATE;
                            }

                            aDataSize = theFieldValue && theFieldValue.length;
                            if( !aDataSize || aDataSize < aMinLength) {
                                aDataSize = aMinLength;
                            }
                            if( aDataSize > this.MAXLEN_DATEORTIMESTAMP) {
                                aDataSize = this.MAXLEN_DATEORTIMESTAMP;
                            }

                            aMayInferField = true;
                            break;
                        }



                        aDataSize = theFieldValue.length;

                        var aIsText = this.fIsTextFieldValue( theFieldValue);
                        if( aIsText) {
                            aDataType = "Text";

                            if( !aDataSize || ( aDataSize < this.MINLEN_TEXT)) {
                                aDataSize = aMinLength;
                            }
                            if( aDataSize > this.MAXLEN_TEXT) {
                                aDataSize = this.MAXLEN_TEXT;
                            }

                        }
                        else {
                            aDataType = "String";

                            if( !aDataSize || ( aDataSize < this.MINLEN_STRING)) {
                                aDataSize = aMinLength;
                            }
                            if( aDataSize > this.MAXLEN_STRING) {
                                aDataSize = this.MAXLEN_STRING;
                            }

                        }

                        aMayInferField = true;
                        break;



                    case "number":
                        aDataType = "Int";

                        var anIntStr = "" + theFieldValue;
                        aDataSize = anIntStr.length;
                        if( !aDataSize || aDataSize < this.MINLEN_INT) {
                            aDataSize = aMinLength;
                        }
                        if( aDataSize > this.MAXLEN_INT) {
                            aDataSize = this.MAXLEN_INT;
                        }
                        aMayInferField = true;
                        break;



                    case "boolean":
                        aDataType = "BoolYesNo";

                        var aBoolStr = "" + theFieldValue;

                        aDataSize = aBoolStr.length;
                        if( !aDataSize || aDataSize < aMinLength) {
                            aDataSize = aMinLength;
                        }
                        if( aDataSize > this.MAXLEN_BOOL) {
                            aDataSize = this.MAXLEN_BOOL;
                        }

                        aMayInferField = true;
                        break;


                    case "object":

                        var aListElementTypeAndSample = this.fListOfObjectsElementTypeAndSample( theFieldValue);
                        if( aListElementTypeAndSample) {
                            if( aListElementTypeAndSample[ "type"] &&  aListElementTypeAndSample[ "sample"]) {

                                return this.fInferSyntheticListaObject( theRootCtxt, theCtxt, theFieldKey,
                                    aListElementTypeAndSample[ "sample"], aListElementTypeAndSample[ "type"]
                                );
                            }
                        }


                        var aCtxt = this.fNewVoidCtxt( theRootCtxt, theCtxt);

                        aCtxt._v_CtxtKind = this.CTXTKIND_RECORD;

                        if( !this.fInferFromSampleObject( theRootCtxt, aCtxt, theFieldValue)) {
                            return false;
                        }
                        break;


                    default:
                }


                if( !aMayInferField) {
                    return true;
                }



                if( theCtxt._v_CtxtKind == this.CTXTKIND_GRID) {

                    if( !this.fAddFieldToGrid( theRootCtxt, theCtxt, theSample, theType, theFieldKey, theFieldValue, aDataType, aDataSize)) {
                        return false;
                    }
                }
                else {
                    if( theCtxt._v_CtxtKind == this.CTXTKIND_RECORD) {

                        if( !this.fAddFieldToRecord( theRootCtxt, theCtxt, theSample, theType, theFieldKey, theFieldValue, aDataType, aDataSize)) {
                            return false;
                        }
                    }
                }

                return true;
            };
            if( fInferFromSampleField){}/* CQT */
            aPrototype.fInferFromSampleField = fInferFromSampleField;














            var fAddFieldToGrid = function( theRootCtxt, theCtxt, theSample, theType, theFieldKey, theFieldValue,
                                            theDataType, theDataSize) {

                if( theRootCtxt == null) {
                    return false;
                }

                if( theCtxt == null) {
                    return false;
                }

                if( theSample == null) {
                    return true;
                }

                if( !theFieldKey) {
                    return true;
                }

                if( ( typeof theFieldValue == "undefined") || ( theFieldValue == null)) {
                    return true;
                }

                if( !theDataType) {
                    return true;
                }


                var aGridName = theCtxt._v_GridName;
                if( !aGridName) {
                    return true;
                }

                var aGridParameters =  this._v_InferredCtrlSpecs.GRIDPARAMETERS[ aGridName];
                if( aGridParameters) {
                    return true;
                }

                var aLabel = this.fFieldLabelFromName( theFieldKey, theType);
                if( !aLabel) {
                    return true;
                }

                aGridParameters[ "labels"   ].push( aLabel);
                aGridParameters[ "fields"   ].push( theFieldKey);
                aGridParameters[ "dataTypes"].push( theDataType);



                var aCssClass = this.fColumnClassFromGridAndFieldName( aGridName, theFieldKey);
                aGridParameters[ "classes"].push( aCssClass);

                if( aGridParameters[ "fields"].length == 1) {
                    aGridParameters[ "keyField"] = theFieldKey;
                }

                var anEditorName = aGridParameters[ "editorName"];
                if( anEditorName) {

                    var anEditorParameters =  this._v_InferredCtrlSpecs.EDITPARAMETERS[ anEditorName];
                    if( anEditorParameters) {

                        this.fAddFieldToEditor( theRootCtxt, theCtxt, theSample, theFieldKey, theFieldValue,
                            theDataType, theDataSize, aLabel, anEditorParameters);
                    }
                }


                var aCreatorName = aGridParameters[ "creatorName"];
                if( aCreatorName) {

                    var anCreatorParameters =  this._v_InferredCtrlSpecs.CREATEPARAMETERS[ aCreatorName];
                    if( anCreatorParameters) {

                        this.fAddFieldToCreator( theRootCtxt, theCtxt, theSample, theFieldKey, theFieldValue,
                            theDataType, theDataSize, aLabel, anCreatorParameters);
                    }
                }

                return true;
            };
            if( fAddFieldToGrid){}/* CQT */
            aPrototype.fAddFieldToGrid = fAddFieldToGrid;















            var fAddFieldToRecord = function( theRootCtxt, theCtxt, theSample, theType, theFieldKey, theFieldValue,
                                              theDataType, theDataSize) {

                if( theRootCtxt == null) {
                    return false;
                }

                if( theCtxt == null) {
                    return false;
                }

                if( theSample == null) {
                    return true;
                }

                if( !theFieldKey) {
                    return true;
                }

                if( ( typeof theFieldValue == "undefined") || ( theFieldValue == null)) {
                    return true;
                }

                if( !theDataType) {
                    return true;
                }

                if( !( theCtxt._v_CtxtKind == this.CTXTKIND_RECORD)) {
                    return true;
                }


                var anEditorName = null;
                var aCreatorName = null;


                var aGridCtxt = this.fParentGridCtxt( theCtxt);
                if( aGridCtxt) {

                    var aGridName = aGridCtxt._v_GridName;
                    if( aGridName) {


                        var aLabel = this.fFieldLabelFromName( theFieldKey, theType);
                        if( aLabel) {

                            var aGridParameters =  this._v_InferredCtrlSpecs.GRIDPARAMETERS[ aGridName];
                            if( aGridParameters) {

                                aGridParameters[ "labels"].push( aLabel);
                                aGridParameters[ "fields"].push( theFieldKey);
                                aGridParameters[ "dataTypes"].push( theDataType);

                                var aCssClass = this.fColumnClassFromGridAndFieldName( aGridName, theFieldKey);
                                aGridParameters[ "classes"].push( aCssClass);

                                if( aGridParameters[ "fields"].length == 1) {
                                    aGridParameters[ "keyField"] = theFieldKey;
                                }

                                anEditorName = aGridParameters[ "editorName"];
                                aCreatorName = aGridParameters[ "creatorName"]
                            }
                        }
                    }
                }
                else {
                    anEditorName = this.fTypeNameFromType( theType);
                }


                if( anEditorName) {

                    var anEditorParameters =  this._v_InferredCtrlSpecs.EDITPARAMETERS[ anEditorName];
                    if( anEditorParameters) {

                        this.fAddFieldToEditor( theRootCtxt, theCtxt, theSample, theFieldKey, theFieldValue,
                            theDataType, theDataSize, aLabel, anEditorParameters);
                    }
                }


                if( aCreatorName) {

                    var anCreatorParameters =  this._v_InferredCtrlSpecs.CREATEPARAMETERS[ aCreatorName];
                    if( anCreatorParameters) {

                        this.fAddFieldToCreator( theRootCtxt, theCtxt, theSample, theFieldKey, theFieldValue,
                            theDataType, theDataSize, aLabel, anCreatorParameters);
                    }
                }

                return true;
            };
            if( fAddFieldToRecord){}/* CQT */
            aPrototype.fAddFieldToRecord = fAddFieldToRecord;







            var fGridCtxtOrParent = function( theCtxt) {

                if( theCtxt == null) {
                    return false;
                }

                if( theCtxt._v_CtxtKind == this.CTXTKIND_GRID) {
                    return theCtxt;
                }

                var aParentCtxt = theCtxt._v_ParentCtxt;

                if( aParentCtxt._v_CtxtKind == this.CTXTKIND_GRID) {
                    return aParentCtxt;
                }

                var aParentParentCtxt = aParentCtxt._v_ParentCtxt;
                if( aParentParentCtxt) {
                    if( aParentParentCtxt._v_CtxtKind == this.CTXTKIND_GRID) {
                        return aParentParentCtxt;
                    }
                }

                return null;

            };
            if( fGridCtxtOrParent){}/* CQT */
            aPrototype.fGridCtxtOrParent = fGridCtxtOrParent;







            var fParentGridCtxt = function( theCtxt) {

                if( theCtxt == null) {
                    return false;
                }

                var aParentCtxt = theCtxt._v_ParentCtxt;

                if( aParentCtxt._v_CtxtKind == this.CTXTKIND_GRID) {
                    return aParentCtxt;
                }

                var aParentParentCtxt = aParentCtxt._v_ParentCtxt;
                if( aParentParentCtxt) {
                    if( aParentParentCtxt._v_CtxtKind == this.CTXTKIND_GRID) {
                        return aParentParentCtxt;
                    }
                }

                return null;

            };
            if( fParentGridCtxt){}/* CQT */
            aPrototype.fParentGridCtxt = fParentGridCtxt;







            var fMasterGridCtxt = function( theCtxt) {

                if( theCtxt == null) {
                    return false;
                }


                var aMasterGridCtxt = null;

                var aParentCtxt = theCtxt._v_ParentCtxt;
                if( aParentCtxt) {
                    if( aParentCtxt._v_CtxtKind == this.CTXTKIND_GRID) {
                        aMasterGridCtxt = aParentCtxt;
                    }
                    else {
                        if( aParentCtxt._v_CtxtKind == this.CTXTKIND_RECORD) {
                            var aParentParentCtxt = theCtxt._v_ParentCtxt;
                            if( aParentParentCtxt) {
                                if( aParentParentCtxt._v_CtxtKind == this.CTXTKIND_GRID) {
                                    aMasterGridCtxt = aParentParentCtxt;
                                }
                            }
                        }
                    }
                }
                
                return aMasterGridCtxt;

            };
            if( fMasterGridCtxt){}/* CQT */
            aPrototype.fMasterGridCtxt = fMasterGridCtxt;









            var fAddFieldToEditor = function( theRootCtxt, theCtxt, theSample, theFieldKey, theFieldValue,
                                              theDataType, theDataSize, theLabel, theEditorParameters) {

                if( theRootCtxt == null) {
                    return false;
                }

                if( theCtxt == null) {
                    return false;
                }

                if( theSample == null) {
                    return true;
                }

                if( !theFieldKey) {
                    return true;
                }

                if( ( typeof theFieldValue == "undefined") || ( theFieldValue == null)) {
                    return true;
                }

                if( !theDataType) {
                    return true;
                }

                if( !theEditorParameters) {
                    return true;
                }

                var aFieldParameters = this.fNewVoidFieldParameters();

                aFieldParameters[ "name"]     = theFieldKey;
                aFieldParameters[ "label"]    = theLabel;
                aFieldParameters[ "minMult"]  = 0;
                aFieldParameters[ "maxMult"]  = 0;
                aFieldParameters[ "readOnly"] = false;
                aFieldParameters[ "dataType"] = theDataType;
                aFieldParameters[ "dataSize"] = theDataSize;
                aFieldParameters[ "changeParm"] = this.fParameterNameFromFieldName( theFieldKey);
                aFieldParameters[ "changeFlag"] = this.fChangeFlagFromFieldName(    theFieldKey);




                /* Set by caller when obtaines the CtrlSpecs from this service.
                    theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN]
                    aFieldParameters[ "labelCss"]  = "$$$DEFINICIONBLOQUES_EDITOR$$$[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN]";
                */



                var aClassKeyCss = this.fClassKeyCss( theFieldKey, theFieldValue, theDataType);
                if( !aClassKeyCss) {
                    aClassKeyCss = this.DEFAULTCLASSKEYCSS;
                }

                /* theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_TIMESTAMP] */
                aFieldParameters[ "valueCss"]  = aClassKeyCss;

                /* theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_TIMESTAMP] */
                aFieldParameters[ "inputCss"]  = aClassKeyCss;




                var aHeightClassKeyCss = this.fHeightClassKeyCss( theFieldKey, theFieldValue, theDataType);
                if( !aHeightClassKeyCss) {
                    aHeightClassKeyCss = this.DEFAULTHEIGHTCLASSKEYCSS;
                }

                /* theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDCONTAINER_HEIGHT_DEFAULT] */
                aFieldParameters[ "heightCss"]  = aHeightClassKeyCss;



                theEditorParameters[ "fields"].push( aFieldParameters);

                return true;
            };
            if( fAddFieldToEditor){}/* CQT */
            aPrototype.fAddFieldToEditor = fAddFieldToEditor;












            var fAddFieldToCreator = function( theRootCtxt, theCtxt, theSample, theFieldKey, theFieldValue,
                                              theDataType, theDataSize, theLabel, theCreatorParameters) {

                if( theRootCtxt == null) {
                    return false;
                }

                if( theCtxt == null) {
                    return false;
                }

                if( theSample == null) {
                    return true;
                }

                if( !theFieldKey) {
                    return true;
                }

                if( ( typeof theFieldValue == "undefined") || ( theFieldValue == null)) {
                    return true;
                }

                if( !theDataType) {
                    return true;
                }

                if( !theCreatorParameters) {
                    return true;
                }

                var aFieldParameters = this.fNewVoidFieldParameters();

                aFieldParameters[ "name"]     = theFieldKey;
                aFieldParameters[ "label"]    = theLabel;
                aFieldParameters[ "minMult"]  = 0;
                aFieldParameters[ "maxMult"]  = 0;
                aFieldParameters[ "readOnly"] = false;
                aFieldParameters[ "dataType"] = theDataType;
                aFieldParameters[ "dataSize"] = theDataSize;
                aFieldParameters[ "changeParm"] = this.fParameterNameFromFieldName( theFieldKey);
                aFieldParameters[ "changeFlag"] = this.fChangeFlagFromFieldName(    theFieldKey);




                /* Set by caller when obtaines the CtrlSpecs from this service.
                 theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN]
                 aFieldParameters[ "labelCss"]  = "$$$DEFINICIONBLOQUES_EDITOR$$$[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN]";
                 */


                var aClassKeyCss = this.fClassKeyCss( theFieldKey, theFieldValue, theDataType);
                if( !aClassKeyCss) {
                    aClassKeyCss = this.DEFAULTCLASSKEYCSS;
                }

                /* theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_TIMESTAMP] */
                aFieldParameters[ "valueCss"]  = aClassKeyCss;

                /* theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_TIMESTAMP] */
                aFieldParameters[ "inputCss"]  = aClassKeyCss;




                var aHeightClassKeyCss = this.fHeightClassKeyCss( theFieldKey, theFieldValue, theDataType);
                if( !aHeightClassKeyCss) {
                    aHeightClassKeyCss = this.DEFAULTHEIGHTCLASSKEYCSS;
                }

                /* theS_CssNames_Springnut_Definicionbloques.CSSs_SPRINGNUT_DEFINICIONBLOQUES_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDCONTAINER_HEIGHT_DEFAULT] */
                aFieldParameters[ "heightCss"]  = aHeightClassKeyCss;




                theCreatorParameters[ "fields"].push( aFieldParameters);

                return true;
            };
            if( fAddFieldToCreator){}/* CQT */
            aPrototype.fAddFieldToCreator = fAddFieldToCreator;



            
            
            
            
            
            



            var fNewVoidGridParameters = function() {

                var aGridParameters = {
                    "name":            null,
                    "gridLabel":       null,
                    "labels":          [ ],
                    "fields":          [ ],
                    "hiddenFields":    [ ],
                    "dataTypes":       [ ],
                    "gridClasses":     null,
                    "classes":         [ ],
                    "retrievalTarget": null,
                    "retrieval":       null,
                    "query":           null,
                    "autoSelectIndex": null,
                    "keyField":        null,
                    "masterType":      null,
                    "masterLabels":    null,
                    "editorName":      null,
                    "creatorName":     null,
                    "noEdit":          false,
                    "noDelete":        false,
                    "deleteTarget":    null,
                    "delete":          null,
                    "deleteWith":      null,
                    "deleteParm":      null,
                    "deleteQuery":     null,
                    "deleteSucessIfNotExistsParm": null
                };
                if( aGridParameters){}/* CQT */

                return aGridParameters;

            };
            if( fNewVoidGridParameters){}/* CQT */
            aPrototype.fNewVoidGridParameters = fNewVoidGridParameters;






            var fNewVoidEditorParameters = function() {

                var anEditorParameters = {
                    "name":            null,
                    "editorLabel":     null,
                    "editorClasses":   null,
                    "autoEdit":        null,
                    "masterLabels":    [ ],
                    "creatorName":     null,
                    "noEdit":          false,
                    "noDelete":        false,
                    "noRefresh":       false,
                    "fields":          [ ]
                };
                if( anEditorParameters){}/* CQT */

                return anEditorParameters;
            };
            if( fNewVoidEditorParameters){}/* CQT */
            aPrototype.fNewVoidEditorParameters = fNewVoidEditorParameters;






            var fNewVoidCreatorParameters = function() {

                var aCreatorParameters = {
                    "name":             null,
                    "creatorLabel":     null,
                    "creatorClasses":   null,
                    "masterLabels":     [ ],
                    "masterParms":      [ ],
                    "masterType":       null,
                    "defaultValue":     null,
                    "fields":          [ ]
                };
                if( aCreatorParameters){}/* CQT */

                return aCreatorParameters;
            };
            if( fNewVoidCreatorParameters){}/* CQT */
            aPrototype.fNewVoidCreatorParameters = fNewVoidCreatorParameters;









            var fNewVoidFieldParameters = function() {

                var aFieldParameters = {
                    "name":       null,
                    "label":      null,
                    "minMult":    null,
                    "maxMult":    null,
                    "readOnly":   null,
                    "occult":     null,
                    "dataType":   null,
                    "dataSize":   null,
                    "labelCss":   null,
                    "valueCss":   null,
                    "inputCss":   null,
                    "changeParm": null,
                    "parmAlways": null,
                    "changeFlag": null,
                    "candidates": null
                };
                if( aFieldParameters){}/* CQT */

                return aFieldParameters;
            };
            if( fNewVoidFieldParameters){}/* CQT */
            aPrototype.fNewVoidFieldParameters = fNewVoidFieldParameters;












            var fNewVoidWireGrid2SlaveGridParameters = function() {

                var aWireParameters = {
                    "name":     null,
                    "kind":     "GRID2SLAVEGRID",
                    "from":     null,
                    "to":       null,
                    "doTarget": null,
                    "do":       null,
                    "query":    null
                };
                if( aWireParameters){}/* CQT */

                return aWireParameters;
            };
            if( fNewVoidWireGrid2SlaveGridParameters){}/* CQT */
            aPrototype.fNewVoidWireGrid2SlaveGridParameters = fNewVoidWireGrid2SlaveGridParameters;






            var fNewVoidWireGrid2EditorParameters = function() {

                var aWireParameters = {
                    "name":     null,
                    "kind":     "GRID2EDITOR",
                    "from":     null,
                    "to":       null,
                    "doTarget": null,
                    "do":       null,
                    "query":    null,
                    "reverseDo":null
                };
                if( aWireParameters){}/* CQT */

                return aWireParameters;
            };
            if( fNewVoidWireGrid2EditorParameters){}/* CQT */
            aPrototype.fNewVoidWireGrid2EditorParameters = fNewVoidWireGrid2EditorParameters;







            var fNewVoidWireGrid2CreatorParameters = function() {

                var aWireParameters = {
                    "name":     null,
                    "kind":     "GRID2CREATOR",
                    "from":     null,
                    "to":       null,
                    "doTarget": null,
                    "do":       null,
                    "query":    null,
                    "reverseDo":null
                };
                if( aWireParameters){}/* CQT */

                return aWireParameters;
            };
            if( fNewVoidWireGrid2CreatorParameters){}/* CQT */
            aPrototype.fNewVoidWireGrid2CreatorParameters = fNewVoidWireGrid2CreatorParameters;




















            var fInferredList = function( theRootCtxt, theCtxt, theSample, theType) {

                if( theRootCtxt == null) {
                    return false;
                }

                if( theCtxt == null) {
                    return false;
                }

                if( theSample == null) {
                    return true;
                }

                if( !theType) {
                    return true;
                }

                var anExistingGrid =  this._v_InferredCtrlSpecs.GRIDPARAMETERS[ theType];
                if( anExistingGrid) {
                    return true;
                }

                var aNewGridParameters = this.fNewVoidGridParameters();
                aNewGridParameters[ "name"]      = theType;
                aNewGridParameters[ "gridLabel"] =  this.fEditorLabelFromName( theType);

                theCtxt._v_GridName = theType;

                this._v_InferredCtrlSpecs.GRIDPARAMETERS[ theType] = aNewGridParameters;


                var aTabsBarEntry = {
                    label:  this.fGridLabelFromName( theType),
                    value:  theType,
                    selectorGridName: null
                };
                this._v_InferredCtrlSpecs.TOPTABSBAR_ENTRIES.push( aTabsBarEntry);


                if( this._v_InferredCtrlSpecs.GRIDNAMES_INITIALLOAD.indexOf( theType) < 0) {
                    this._v_InferredCtrlSpecs.GRIDNAMES_INITIALLOAD.push( theType);
                }

                if( this._v_InferredCtrlSpecs.TOPTABSBAR_TABSFIXEDINITIAL.indexOf( theType) < 0) {
                    this._v_InferredCtrlSpecs.TOPTABSBAR_TABSFIXEDINITIAL.push( theType);
                }

                if( !this._v_InferredCtrlSpecs.TOPTABSBAR_INITIALLYSELECTEDTAB) {
                    this._v_InferredCtrlSpecs.TOPTABSBAR_INITIALLYSELECTEDTAB = theType;
                }

                return true;
            };
            if( fInferredList){}/* CQT */
            aPrototype.fInferredList = fInferredList;









            var fInferredRecord = function( theRootCtxt, theCtxt, theSample, theType) {

                if( theRootCtxt == null) {
                    return false;
                }

                if( theCtxt == null) {
                    return false;
                }

                if( theSample == null) {
                    return true;
                }

                if( !theType) {
                    return true;
                }


                var aGridName = null;
                var aGridParameters = null;

                var aParentCtxt = theCtxt._v_ParentCtxt;
                if( aParentCtxt) {
                    if( aParentCtxt._v_CtxtKind == this.CTXTKIND_GRID) {

                        aGridName = aParentCtxt._v_GridName;
                        if( aGridName) {
                            aGridParameters =  this._v_InferredCtrlSpecs.GRIDPARAMETERS[ aGridName];
                        }
                    }
                }



                var anEditorName  = this.fTypeNameFromType( theType);

                var aCreatorName  = this.GENPREFIX_CREATOR + anEditorName;

                theCtxt._v_EditorName = anEditorName;

                var anExistingEditor =  this._v_InferredCtrlSpecs.EDITPARAMETERS[ anEditorName];
                if( !anExistingEditor) {

                    var aNewEditParameters = this.fNewVoidEditorParameters();
                    aNewEditParameters[ "name"]        = anEditorName;
                    aNewEditParameters[ "editorLabel"] = this.fEditorLabelFromName( anEditorName);
                    aNewEditParameters[ "creatorName"] = aCreatorName;

                    this._v_InferredCtrlSpecs.EDITPARAMETERS[ anEditorName] = aNewEditParameters;

                    if( aGridParameters) {
                        aGridParameters[ "editorName"] = anEditorName
                    }

                    /*
                    if( this._v_InferredCtrlSpecs.EDITORNAMES_INITIALLOAD.indexOf( anEditorName) < 0) {
                        this._v_InferredCtrlSpecs.EDITORNAMES_INITIALLOAD.push( anEditorName);
                    }
                    */

                    this.fInferredWireGrid2Editor( theRootCtxt, theCtxt, aGridName, anEditorName);
                }



                theCtxt._v_CreatorName = aCreatorName;

                var anExistingCreator =  this._v_InferredCtrlSpecs.CREATEPARAMETERS[ aCreatorName];
                if( !anExistingCreator) {

                    var aNewCreateParameters = this.fNewVoidCreatorParameters();
                    aNewCreateParameters[ "name"]         = aCreatorName;
                    aNewCreateParameters[ "creatorLabel"] = this.fCreatorLabelFromName( aCreatorName);
                    aNewCreateParameters[ "masterType"]   = this.fMasterTypeFromType( theType);

                    if( aGridParameters) {
                        var aKeyField = aGridParameters[ "keyField"];
                        if( aKeyField) {
                            aNewCreateParameters[ "masterParms"]  = [ [ aKeyField, this.fParameterNameFromFieldName( aKeyField)]];
                        }
                    }


                    this._v_InferredCtrlSpecs.CREATEPARAMETERS[ aCreatorName] = aNewCreateParameters;

                    if( aGridParameters) {
                        aGridParameters[ "creatorName"] = aCreatorName
                    }


                    this.fInferredWireGrid2Creator( theRootCtxt, theCtxt, aGridName, anEditorName);
                }

                return true;
            };
            if( fInferredRecord){}/* CQT */
            aPrototype.fInferredRecord = fInferredRecord;










            var fInferredWireGrid2SlaveGrid = function( theRootCtxt, theCtxt, theMasterGridCtxt, theFieldKey) {

                if( theRootCtxt == null) {
                    return false;
                }

                if( theCtxt == null) {
                    return false;
                }

                if( theMasterGridCtxt == null) {
                    return false;
                }

                if( !theFieldKey) {
                    return false;
                }

                var aWireParameters = this.fNewVoidWireGrid2SlaveGridParameters();

                var aMasterGridName = theMasterGridCtxt._v_GridName;
                var aSlaveGridName  = theCtxt._v_GridName;

                aWireParameters[ "name"] = "Update" + aSlaveGridName + "On" + aMasterGridName + "SelectionChange";
                aWireParameters[ "from"] = aMasterGridName;
                aWireParameters[ "to"]   = aSlaveGridName;
                aWireParameters[ "with"] = theFieldKey;

                this._v_InferredCtrlSpecs.WIRES.push( aWireParameters);

                return true;
            };
            if( fInferredWireGrid2SlaveGrid){}/* CQT */
            aPrototype.fInferredWireGrid2SlaveGrid = fInferredWireGrid2SlaveGrid;











            var fInferredWireGrid2Editor = function( theRootCtxt, theCtxt, theGridName, theEditorName) {

                if( theRootCtxt == null) {
                    return false;
                }

                if( theCtxt == null) {
                    return false;
                }

                if( !theGridName) {
                    return false;
                }

                if( !theEditorName) {
                    return false;
                }

                var aWireParameters = this.fNewVoidWireGrid2EditorParameters();

                aWireParameters[ "name"] = "Update" + theEditorName + "EditorOn" + theGridName + "SelectionChange";
                aWireParameters[ "from"] = theGridName;
                aWireParameters[ "to"]   = theEditorName;

                this._v_InferredCtrlSpecs.WIRES.push( aWireParameters);

                return true;
            };
            if( fInferredWireGrid2Editor){}/* CQT */
            aPrototype.fInferredWireGrid2Editor = fInferredWireGrid2Editor;








            var fInferredWireGrid2Creator = function( theRootCtxt, theCtxt, theGridName, theCreatorName) {

                if( theRootCtxt == null) {
                    return false;
                }

                if( theCtxt == null) {
                    return false;
                }

                if( !theGridName) {
                    return false;
                }

                if( !theCreatorName) {
                    return false;
                }

                var aWireParameters = this.fNewVoidWireGrid2CreatorParameters();

                aWireParameters[ "name"] = "Update" + theCreatorName + "CreatorOn" + theGridName + "SelectionChange";
                aWireParameters[ "from"] = theGridName;
                aWireParameters[ "to"]   = theCreatorName;

                this._v_InferredCtrlSpecs.WIRES.push( aWireParameters);

                return true;
            };
            if( fInferredWireGrid2Creator){}/* CQT */
            aPrototype.fInferredWireGrid2Creator = fInferredWireGrid2Creator;











            var fMasterTypeFromType = function( theName) {

                if( !theName) {
                    return "";
                }

                return theName;
            };
            if( fMasterTypeFromType){}/* CQT */
            aPrototype.fMasterTypeFromType = fMasterTypeFromType;









            var fGridLabelFromName = function( theName) {

                if( !theName) {
                    return "";
                }

                var aLabel = this.fSpacedCamelCase( theName);
                if( aLabel){}/* CQT */

                return aLabel;
            };
            if( fGridLabelFromName){}/* CQT */
            aPrototype.fGridLabelFromName = fGridLabelFromName;










            var fTypeNameFromType = function( theType) {

                if( !theType) {
                    return "";
                }

                var aTypeName  = theType.replace( this.NAMEWORDS_DATOS, "");
                if( aTypeName){}/* CQT */

                return aTypeName;
            };
            if( fTypeNameFromType){}/* CQT */
            aPrototype.fTypeNameFromType = fTypeNameFromType;









            var fEditorLabelFromName = function( theName) {

                if( !theName) {
                    return "";
                }

                var aName = this.fTypeNameFromType( theName);

                var aLabel = this.fSpacedCamelCase( aName);
                if( aLabel){}/* CQT */

                return aLabel;
            };
            if( fEditorLabelFromName){}/* CQT */
            aPrototype.fEditorLabelFromName = fEditorLabelFromName;







            var fCreatorLabelFromName = function( theName) {

                if( !theName) {
                    return "";
                }

                var aName = this.fTypeNameFromType( theName);

                var aLabel = this.fSpacedCamelCase( aName);

                aLabel = this.GENPREFIX_CREATORLABEL + aLabel;
                return aLabel;
            };
            if( fCreatorLabelFromName){}/* CQT */
            aPrototype.fCreatorLabelFromName = fCreatorLabelFromName;








            var fFieldLabelFromName = function( theName, theType) {

                if( !theName) {
                    return "";
                }

                var aName = this.fNameWOvoidPrefixes( theName);
                if( !aName) {
                    return "";
                }

                var aLabel = this.fSpacedCamelCase( aName);
                if( aLabel){}/* CQT */

                if( theType) {

                    var aType = this.fTypeNameFromType( theType);
                    if( aType) {
                        if( this._v_TypeNamePrefixes) {
                            var aTypePrefix = this._v_TypeNamePrefixes[ aType];
                            if( aTypePrefix) {
                                var someFragments = aLabel.split( " ");
                                if( someFragments.length > 1) {
                                    var aFirstFragment = someFragments[ 0];
                                    if( aFirstFragment) {
                                        if( aFirstFragment == aTypePrefix) {
                                            someFragments = someFragments.slice( 1);
                                        }
                                    }
                                }

                                var aNumFragments = someFragments.length;
                                if( aNumFragments > 1) {
                                    var aLastFragment = someFragments[ aNumFragments - 1];
                                    if( aLastFragment) {
                                        if( this.NAMEWORDS_STR.indexOf( aLastFragment) >= 0) {

                                            someFragments = someFragments.slice( 0, aNumFragments - 1);
                                        }
                                    }

                                }

                                aLabel = someFragments.join( " ");
                            }
                        }
                    }
                }

                return aLabel;
            };
            if( fFieldLabelFromName){}/* CQT */
            aPrototype.fFieldLabelFromName = fFieldLabelFromName;








            var fNameWOvoidPrefixes = function( theName) {

                if( !theName) {
                    return "";
                }

                var aName = theName;

                var aNumPrefixes = this.VOIDFIELDNAMEPREFIXES.length;
                for( var aPrefixIdx=0; aPrefixIdx < aNumPrefixes; aPrefixIdx++) {
                    var aPrefix = this.VOIDFIELDNAMEPREFIXES[ aPrefixIdx];
                    if( aPrefix) {
                        var aPrefixIndex = theName.indexOf( aPrefix);
                        if( aPrefixIndex == 0) {
                            aName = theName.substring( aPrefixIndex + aPrefix.length);
                            break;
                        }
                    }
                }

                return aName;
            };
            if( fNameWOvoidPrefixes){}/* CQT */
            aPrototype.fNameWOvoidPrefixes = fNameWOvoidPrefixes;







            var fSpacedCamelCase = function( theString) {

                if( !theString) {
                    return "";
                }

                if( !( typeof theString == "string")) {
                    return "";
                }

                var aNumChars = theString.length;
                if( !aNumChars) {
                    return "";
                }

                if( theString.toUpperCase() == theString) {
                    return theString;
                }

                if( theString.toLowerCase() == theString) {
                    return theString;
                }

                var aName = theString.substr(0, 1);

                for( var aCharIdx=1; aCharIdx < aNumChars; aCharIdx++) {
                    var aChar = theString[ aCharIdx];
                    if( aChar) {
                        if( aChar.toUpperCase() == aChar) {
                            aName += ( " " + aChar);
                        }
                        else {
                            aName += aChar;
                        }
                    }
                }

                return aName;
            };
            if( fSpacedCamelCase){}/* CQT */
            aPrototype.fSpacedCamelCase = fSpacedCamelCase;









            var fColumnClassFromGridAndFieldName = function( theGridName, theFieldName) {
                /*
                 "cssSpringnut_Ficheros_TipoBoletin";
                 */

                if( !theGridName) {
                    return "";
                }

                if( !theFieldName) {
                    return "";
                }

                var aName = this.fNameWOvoidPrefixes( theFieldName);
                if( !aName) {
                    return "";
                }

                var aCssName = ( this._v_ColumnClassesPrefix || "") + theGridName + "_" + aName;
                if( aCssName){}/* CQT */

                return aCssName;
            };
            if( fColumnClassFromGridAndFieldName){}/* CQT */
            aPrototype.fColumnClassFromGridAndFieldName = fColumnClassFromGridAndFieldName;









            var fIsTextFieldValue = function( theFieldValue) {

                if( !( typeof theFieldValue == "string")) {
                    return false
                }

                if( !theFieldValue) {
                    return false;
                }

                if( theFieldValue.length >= this.TEXTCONTENTLENGTH) {
                    return true;
                }

                var aIsText = false;
                var aNumTextChars = this.TEXTCONTENTCHARS;
                for( var aTextCharIdx=0; aTextCharIdx < aNumTextChars; aTextCharIdx++) {
                    var aTextChar = this.TEXTCONTENTCHARS[ aTextCharIdx];
                    if( aTextChar) {
                        if( theFieldValue.indexOf( aTextChar) >= 0) {
                            return true;
                        }
                    }
                }

                return false;
            };
            if( fIsTextFieldValue){}/* CQT */
            aPrototype.fIsTextFieldValue = fIsTextFieldValue;









            var fClassKeyCss = function( theFieldKey, theFieldValue, theDataType) {

                if( !theFieldKey) {
                    return "";
                }

                if( typeof theFieldValue == "undefined") {
                    return "";
                }

                if( !theDataType) {
                    return "";
                }

                var aClassKeyCss = null;


                switch( theDataType) {

                    case "String":
                        aClassKeyCss = "STRING";

                        var aStringLength = theFieldValue.length;
                        if( aStringLength <= this.CLASS_STRING_LEN_VERYSHORT) {
                            aClassKeyCss += "_VERYSHORT";
                            break;
                        }
                        if( aStringLength <= this.CLASS_STRING_LEN_SHORT) {
                            aClassKeyCss += "_SHORT";
                            break;
                        }
                        if( aStringLength <= this.CLASS_STRING_LEN_MEDIUM) {
                            aClassKeyCss += "_MEDIUM";
                            break;
                        }
                        if( aStringLength <= this.CLASS_STRING_LEN_LONG) {
                            aClassKeyCss += "_LONG";
                            break;
                        }

                        aClassKeyCss += "_VERYLONG";

                        break;





                    case "Text":
                        aClassKeyCss = "TEXT";

                        var aTextLength = theFieldValue.length;
                        if( aTextLength <= this.CLASS_TEXT_LEN_SHORT) {
                            aClassKeyCss += "_SHORT";
                            break;
                        }
                        if( aTextLength <= this.CLASS_TEXT_LEN_LONG) {
                            aClassKeyCss += "_LONG";
                            break;
                        }
                        aClassKeyCss += "_VERYLONG";
                        break;





                    case "Int":
                        var anIntStr = "" + theFieldValue;

                        aClassKeyCss = "NUMBER_INT";

                        var anIntLength = anIntStr.length;
                        if( anIntLength <= this.CLASS_INT_LEN_SHORT ) {
                            aClassKeyCss += "_SHORT";
                            break;
                        }
                        if( anIntLength <= this.CLASS_INT_LEN_MEDIUM) {
                            aClassKeyCss += "_MEDIUM";
                            break;
                        }
                        aClassKeyCss += "_LONG";

                        break;



                    case "BoolYesNo":
                        aClassKeyCss = "BOOLEAN_CHECK";
                        break;



                    case "Date":
                        aClassKeyCss = "DATE";
                        break;


                    case "Timestamp":
                        aClassKeyCss = "TIMESTAMP";
                        break;


                    default:
                }

                if( !aClassKeyCss) {
                    aClassKeyCss = this.DEFAULTCLASSKEYCSS;
                }

                return aClassKeyCss;

            };
            if( fClassKeyCss){}/* CQT */
            aPrototype.fClassKeyCss = fClassKeyCss;









            var fHeightClassKeyCss = function( theFieldKey, theFieldValue, theDataType) {

                if( !theFieldKey) {
                    return "";
                }

                if( !theFieldValue) {
                    return "";
                }

                if( !theDataType) {
                    return "";
                }

                var aClassKeyCss = "";

                switch( theDataType) {

                    case "String":

                        aClassKeyCss = "";
                        break;
                        /* ACV OJO 201412060142 When a String, it will render input as a field, which always presents a line, even if styled tall
                        var aStringLength = theFieldValue.length;
                        if( aStringLength <= this.HEIGHTCLASS_STRING_LEN_NONE) {
                            aClassKeyCss = "";
                            break;
                        }
                        if( aStringLength > this.HEIGHTCLASS_STRING_LEN_SHORT) {
                            aClassKeyCss = "SHORT";
                            break;
                        }
                        if( aStringLength > this.HEIGHTCLASS_STRING_LEN_LONG) {
                            aClassKeyCss = "LONG";
                            break;
                        }

                        aClassKeyCss = "VERYLONG";

                        break;
                        */

                    case "Text":
                        aClassKeyCss = "TEXT";

                        var aTextLength = theFieldValue.length;
                        if( aTextLength <= this.HEIGHTCLASS_TEXT_LEN_SHORT) {
                            aClassKeyCss = "SHORT";
                            break;
                        }
                        if( aTextLength <= this.HEIGHTCLASS_TEXT_LEN_LONG) {
                            aClassKeyCss = "LONG";
                            break;
                        }
                        aClassKeyCss = "VERYLONG";
                        break;


                    case "Int":
                        aClassKeyCss = "";
                        break;

                    case "BoolYesNo":
                        aClassKeyCss = "";
                        break;

                    case "Date":
                        aClassKeyCss = "";
                        break;

                    case "Timestamp":
                        aClassKeyCss = "";
                        break;

                    default:
                }

                if( !aClassKeyCss) {
                    aClassKeyCss = this.DEFAULTHEIGHTCLASSKEYCSS;
                }

                return aClassKeyCss;

            };
            if( fHeightClassKeyCss){}/* CQT */
            aPrototype.fHeightClassKeyCss = fHeightClassKeyCss;












            var fParameterNameIsDate = function( theFieldName) {

                if( !theFieldName) {
                    return false;
                }

                var aNumWords = this.NAMEWORDS_FECHA.length;
                for( var aWordIdx=0; aWordIdx < aNumWords; aWordIdx++) {
                    var aWord = this.NAMEWORDS_FECHA[ aWordIdx];
                    if( aWord) {
                        var aPrefixIndex = theFieldName.indexOf( aWord);
                        if( aPrefixIndex >= 0) {
                            return true;
                        }
                    }
                }

                return false;
            };
            if( fParameterNameIsDate){}/* CQT */
            aPrototype.fParameterNameIsDate = fParameterNameIsDate;








            var fParameterValueIsTimestampLength = function( theDateValue) {

                if( !theDateValue) {
                    return 0;
                }

                var aDateLen = theDateValue.length;
                if( !aDateLen) {
                    return 0;
                }

                if( aDateLen < this.MAXLEN_DATE) {
                    return 0;
                }

                return aDateLen;
            };
            if( fParameterValueIsTimestampLength){}/* CQT */
            aPrototype.fParameterValueIsTimestampLength = fParameterValueIsTimestampLength;







            var fParameterNameFromFieldName = function( theFieldName) {

                if( !theFieldName) {
                    return "";
                }

                var aName = this.fNameWOvoidPrefixes( theFieldName);
                if( !aName) {
                    return "";
                }

                var aParameterName = ( this.PARAMETERPREFIX || "") + aName;
                if( aParameterName){}/* CQT */

                return aParameterName;
            };
            if( fParameterNameFromFieldName){}/* CQT */
            aPrototype.fParameterNameFromFieldName = fParameterNameFromFieldName;







            var fChangeFlagFromFieldName = function( theFieldName) {

                if( !theFieldName) {
                    return "";
                }

                var aName = this.fNameWOvoidPrefixes( theFieldName);
                if( !aName) {
                    return "";
                }

                var aChangeFlag = ( this.CHANGEFLAGPREFIX || "") + aName + ( this.CHANGEFLAGPOSTFIX || "");
                if( aChangeFlag){}/* CQT */

                return aChangeFlag;
            };
            if( fChangeFlagFromFieldName){}/* CQT */
            aPrototype.fChangeFlagFromFieldName = fChangeFlagFromFieldName;








            var fSyntheticListNameFromFieldName = function( theFieldName) {

                if( !theFieldName) {
                    return "";
                }

                var aName = this.fNameWOvoidPrefixes( theFieldName);
                if( !aName) {
                    return "";
                }

                return aName;
            };
            if( fSyntheticListNameFromFieldName){}/* CQT */
            aPrototype.fSyntheticListNameFromFieldName = fSyntheticListNameFromFieldName;












            var pInitWithDefaultSampleData = function() {

                var aSampleData = theS_InferctrlspecsSampleData.SAMPLEDATA;
                if( aSampleData) {
                    this.pAddSampleData( aSampleData);
                }

                var aColumnClassesPrefix = theS_InferctrlspecsSampleData.COLUMNCLASSESPREFIX;
                if( aColumnClassesPrefix) {
                    this.pSetColumnClassesPrefix( aColumnClassesPrefix);
                }

                var someTypeNamePrefixes = theS_InferctrlspecsSampleData.TYPENAMEPREFIXES;
                if( someTypeNamePrefixes) {
                    this.pSetTypeNamePrefixes( someTypeNamePrefixes);
                }

                var someFieldNamesIgnored = theS_InferctrlspecsSampleData.FIELDNAMESIGNORED;
                if( someFieldNamesIgnored) {
                    this.pSetFieldNamesIgnored( someFieldNamesIgnored);
                }
            };
            if( pInitWithDefaultSampleData){}/* CQT */
            aPrototype.pInitWithDefaultSampleData = pInitWithDefaultSampleData;









            var fPerformInference = function() {

                this._v_InferredCtrlSpecs = this.fNewVoidGeneratedCtrlSpecs();

                if( this._v_SampleData == null) {
                    return false;
                }

                var aNumSampleData = this._v_SampleData.length;
                if( !aNumSampleData) {
                    return false;
                }

                var anInferenceRootCtxt = this.fNewVoidRootCtxt();

                var anInferenceSuccess = true;

                for( var aSampleDataIdx=0; aSampleDataIdx < aNumSampleData; aSampleDataIdx++) {
                    var aSampleData = this._v_SampleData[ aSampleDataIdx];
                    if( aSampleData && ( typeof aSampleData == "object")) {

                        anInferenceSuccess = anInferenceSuccess && this.fInferFromSampleData( anInferenceRootCtxt, aSampleData);
                    }
                }

                return anInferenceSuccess;

            };
            if( fPerformInference){}/* CQT */
            aPrototype.fPerformInference = fPerformInference;






            var fInferFromDefaultSampleData = function() {

                this.pInitWithDefaultSampleData();

                this.fPerformInference();

                return this._v_InferredCtrlSpecs;
            };
            if( fInferFromDefaultSampleData){}/* CQT */
            aPrototype.fInferFromDefaultSampleData = fInferFromDefaultSampleData;







            return aPrototype;

        })();




        var InferctrlspecsSvce_Constructor = function( theTitle, theIdentifier, theRecorder, theScope,
                                                 theParentCtrl,
                                                 theConverter) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_CommonSvceType.CommonSvce_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;
            this._v_Module = null;

            this._v_InferredCtrlSpecs         = null;

            this._v_SampleData       = null;

            this._v_TipoInferencia       = null;

            this._v_Version = null;

            this._v_ColumnClassesPrefix = null;

            this._v_TypeNamePrefixes  = null;
            this._v_FieldNamesIgnored = null;

            this._pInit_InferctrlspecsSvce( theTitle, theIdentifier, theRecorder);
        };
        InferctrlspecsSvce_Constructor.prototype = aInferctrlspecsSvce_Prototype;





        var InferctrlspecsSvce_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_CommonSvceType.CommonSvce_Prototype;

            this._v_Prototype = aInferctrlspecsSvce_Prototype;
            this._v_Type      = null;
            this._v_Module    = null;

            this._v_InferredCtrlSpecs         = null;

            this._v_SampleData       = null;

            this._v_TipoInferencia       = null;

            this._v_Version = null;

            this._v_ColumnClassesPrefix = null;

            this._v_TypeNamePrefixes  = null;
            this._v_FieldNamesIgnored = null;
        };
        InferctrlspecsSvce_SuperPrototypeConstructor.prototype = aInferctrlspecsSvce_Prototype;



        var aModule = {
            "InferctrlspecsSvce_Prototype": aInferctrlspecsSvce_Prototype,
            "InferctrlspecsSvce_Constructor": InferctrlspecsSvce_Constructor,
            "InferctrlspecsSvce_SuperPrototypeConstructor": InferctrlspecsSvce_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aInferctrlspecsSvce_Prototype._v_Module = aModule;










        return aModule;
    };







    var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
    if( !anExistingModule) {

        var aModule = aMod_definer(
            theSS_Overrider,
            theSS_CommonSvceType,
            theSS_InferctrlspecsSampleData
        );
        anExistingModule = aModule;

        theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
    }






    return anExistingModule;

}]);







