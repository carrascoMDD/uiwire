'use strict';

/*
 * csskeys.js
 *
 * Creado @author Antonio Carrasco Valero 201410041251
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


var aM_CssNames = angular.module("cssKeys", [
    "typesRegistry",
    "rootsTypes"
]);




aM_CssNames.factory("CssKeys", [
    "TypesRegistrySvce",
function( theSS_typesregistry) {




    var ModuleName     = "csskeys";
    var ModulePackages = "";
    var ModuleFullName = ModulePackages + ModuleName;



    var aMod_definer = function() {


        if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}





        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.GRIDCLASSKEY_TABLECONTAINER = "TableContainer";
            theToInit.GRIDCLASSKEY_TABLE          = "Table";
            theToInit.GRIDCLASSKEY_HEADERROW      = "HeaderRow";
            theToInit.GRIDCLASSKEY_HEADERCELL     = "HeaderCell";
            theToInit.GRIDCLASSKEY_HEADERSPAN     = "HeaderSpan";
            theToInit.GRIDCLASSKEY_HEADERCELLHIDDEN = "HeaderCellHidden";
            theToInit.GRIDCLASSKEY_HEADERSPANHIDDEN = "HeaderSpanHidden";
            theToInit.GRIDCLASSKEY_ROW            = "Row";
            theToInit.GRIDCLASSKEY_CELL           = "Cell";
            theToInit.GRIDCLASSKEY_SPAN           = "Span";
            theToInit.GRIDCLASSKEY_ROW_EVEN       = "RowEven";
            theToInit.GRIDCLASSKEY_CELL_EVEN      = "CellEven";
            theToInit.GRIDCLASSKEY_SPAN_EVEN      = "SpanEven";
            theToInit.GRIDCLASSKEY_ROW_ODD        = "RowOdd";
            theToInit.GRIDCLASSKEY_CELL_ODD       = "CellOdd";
            theToInit.GRIDCLASSKEY_SPAN_ODD       = "SpanOdd";
            theToInit.GRIDCLASSKEY_CELL_HIDDEN    = "CellHidden";
            theToInit.GRIDCLASSKEY_SPAN_HIDDEN    = "SpanHidden";
            theToInit.GRIDCLASSKEY_ROW_SELECTED   = "RowSelected";
            theToInit.GRIDCLASSKEY_CELL_SELECTED  = "CellSelected";
            theToInit.GRIDCLASSKEY_SPAN_SELECTED  = "SpanSelected";


            theToInit.GRIDCLASSKEYS = [
                theToInit.GRIDCLASSKEY_TABLECONTAINER , 
                theToInit.GRIDCLASSKEY_TABLE          , 
                theToInit.GRIDCLASSKEY_HEADERROW      , 
                theToInit.GRIDCLASSKEY_HEADERCELL     , 
                theToInit.GRIDCLASSKEY_HEADERSPAN     ,
                theToInit.GRIDCLASSKEY_HEADERCELLHIDDEN     ,
                theToInit.GRIDCLASSKEY_HEADERSPANHIDDEN     ,
                theToInit.GRIDCLASSKEY_ROW            ,
                theToInit.GRIDCLASSKEY_CELL           , 
                theToInit.GRIDCLASSKEY_SPAN           , 
                theToInit.GRIDCLASSKEY_ROW_EVEN       , 
                theToInit.GRIDCLASSKEY_CELL_EVEN      , 
                theToInit.GRIDCLASSKEY_SPAN_EVEN      , 
                theToInit.GRIDCLASSKEY_ROW_ODD        , 
                theToInit.GRIDCLASSKEY_CELL_ODD       , 
                theToInit.GRIDCLASSKEY_SPAN_ODD       ,
                theToInit.GRIDCLASSKEY_CELL_HIDDEN    ,
                theToInit.GRIDCLASSKEY_SPAN_HIDDEN    ,
                theToInit.GRIDCLASSKEY_ROW_SELECTED   ,
                theToInit.GRIDCLASSKEY_CELL_SELECTED  , 
                theToInit.GRIDCLASSKEY_SPAN_SELECTED
            ];
            


            theToInit.EDITORCLASSKEY_EDITORCONTAINER                    = "EditorContainer";
            theToInit.EDITORCLASSKEY_EDIT_DIV                           = "EditDiv";
            theToInit.EDITORCLASSKEY_TITLE_SPAN                         = "TitleSpan";
            theToInit.EDITORCLASSKEY_USEDPARMS_SPAN                     = "UsedParmsSpan";
            theToInit.EDITORCLASSKEY_FIELDSSETCONTAINER                 = "FieldsSetContainer";
            theToInit.EDITORCLASSKEY_FIELDSSET_DIV                      = "FieldsSet";
            theToInit.EDITORCLASSKEY_FIELDOUTERCONTAINER                = "FieldOuterContainer";
            theToInit.EDITORCLASSKEY_FIELDCONTAINER                     = "FieldContainer";
            theToInit.EDITORCLASSKEY_FIELDCONTAINER_HEIGHT_DEFAULT      = "FieldContainerHeightDefault";
            theToInit.EDITORCLASSKEY_FIELDCONTAINER_HEIGHT_ANDAHALF     = "FieldContainerHeightAndAHalf";
            theToInit.EDITORCLASSKEY_FIELDCONTAINER_HEIGHT_DOUBLE       = "FieldContainerHeightDouble";
            theToInit.EDITORCLASSKEY_FIELDCONTAINER_HEIGHT_SHORT        = "FieldContainerHeightShort";
            theToInit.EDITORCLASSKEY_FIELDCONTAINER_HEIGHT_LONG         = "FieldContainerHeightLong";
            theToInit.EDITORCLASSKEY_FIELDCONTAINER_HEIGHT_VERYLONG     = "FieldContainerHeightVeryLong";
            theToInit.EDITORCLASSKEY_FIELDEDITCONTAINER_HEIGHT_DEFAULT  = "FieldEditContainerHeightDefault";
            theToInit.EDITORCLASSKEY_FIELDEDITCONTAINER_HEIGHT_SHORT    = "FieldEditContainerHeightShort";
            theToInit.EDITORCLASSKEY_FIELDEDITCONTAINER_HEIGHT_LONG     = "FieldEditContainerHeightLong";
            theToInit.EDITORCLASSKEY_FIELDEDITCONTAINER_HEIGHT_VERYLONG = "FieldEditContainerHeightVeryLong";
            theToInit.EDITORCLASSKEY_FIELDEDITOUTERCONTAINER            = "FieldEditOuterContainer";
            theToInit.EDITORCLASSKEY_FIELDEDITCONTAINER                 = "FieldEditContainer";
            theToInit.EDITORCLASSKEY_FIELD_DIV                          = "FieldDiv";
            theToInit.EDITORCLASSKEY_LABELCONTAINER                     = "LabelContainer";
            theToInit.EDITORCLASSKEY_LABEL_SPAN                         = "LabelSpan";
            theToInit.EDITORCLASSKEY_VALUECONTAINER                     = "ValueContainer";
            theToInit.EDITORCLASSKEY_INPUTCONTAINER                     = "InputContainer";
            theToInit.EDITORCLASSKEY_CANDIDATESCONTAINER                = "CandidatesContainer";

            theToInit.EDITORCLASSKEY_FIELDARGUMENTINHEADEROUTERCONTAINER            = "FieldArgumentInHeaderOuterContainer";




            theToInit.EDITORCLASSKEY_VALUE_SPAN                         = "ValueSpan";
            theToInit.EDITORCLASSKEY_VALUE_STRING_VERYSHORT             = "ValueStringVeryShort";
            theToInit.EDITORCLASSKEY_VALUE_STRING_SHORT                 = "ValueStringShort";
            theToInit.EDITORCLASSKEY_VALUE_STRING_MEDIUM                = "ValueStringMedium";
            theToInit.EDITORCLASSKEY_VALUE_STRING_LONG                  = "ValueStringLong";
            theToInit.EDITORCLASSKEY_VALUE_STRING_VERYLONG              = "ValueStringVeryLong";
            theToInit.EDITORCLASSKEY_VALUE_TEXT_SHORT                   = "ValueTextShort";
            theToInit.EDITORCLASSKEY_VALUE_TEXT_LONG                    = "ValueTextLong";
            theToInit.EDITORCLASSKEY_VALUE_TEXT_VERYLONG                = "ValueTextVeryLong";
            theToInit.EDITORCLASSKEY_VALUE_NUMBER_INT_SHORT             = "ValueNumberIntShort";
            theToInit.EDITORCLASSKEY_VALUE_NUMBER_INT_MEDIUM            = "ValueNumberIntMedium";
            theToInit.EDITORCLASSKEY_VALUE_NUMBER_INT_LONG              = "ValueNumberIntLong";
            theToInit.EDITORCLASSKEY_VALUE_NUMBER_DECIMAL_SHORT         = "ValueNumberDecimalShort";
            theToInit.EDITORCLASSKEY_VALUE_NUMBER_DECIMAL_MEDIUM        = "ValueNumberDecimalMedium";
            theToInit.EDITORCLASSKEY_VALUE_NUMBER_DECIMAL_LONG          = "ValueNumberDecimalLong";
            theToInit.EDITORCLASSKEY_VALUE_BOOLEAN_STRING               = "ValueBooleanString";
            theToInit.EDITORCLASSKEY_VALUE_BOOLEAN_RADIO                = "ValueBooleanRadio";
            theToInit.EDITORCLASSKEY_VALUE_BOOLEAN_CHECK                = "ValueBooleanCheck";
            theToInit.EDITORCLASSKEY_VALUE_DATE                         = "ValueDate";
            theToInit.EDITORCLASSKEY_VALUE_TIMESTAMP                    = "ValueTimestamp";
            theToInit.EDITORCLASSKEY_VALUE_CHOICE                       = "ValueChoice";

            theToInit.EDITORCLASSKEY_INPUT_STRING_VERYSHORT             = "InputStringVeryShort";
            theToInit.EDITORCLASSKEY_INPUT_STRING_SHORT                 = "InputStringShort";
            theToInit.EDITORCLASSKEY_INPUT_STRING_MEDIUM                = "InputStringMedium";
            theToInit.EDITORCLASSKEY_INPUT_STRING_LONG                  = "InputStringLong";
            theToInit.EDITORCLASSKEY_INPUT_STRING_VERYLONG              = "InputStringVeryLong";
            theToInit.EDITORCLASSKEY_INPUT_TEXT_SHORT                   = "InputTextShort";
            theToInit.EDITORCLASSKEY_INPUT_TEXT_LONG                    = "InputTextLong";
            theToInit.EDITORCLASSKEY_INPUT_TEXT_VERYLONG                = "InputTextVeryLong";
            theToInit.EDITORCLASSKEY_INPUT_NUMBER_INT_SHORT             = "InputNumberIntShort";
            theToInit.EDITORCLASSKEY_INPUT_NUMBER_INT_MEDIUM            = "InputNumberIntMedium";
            theToInit.EDITORCLASSKEY_INPUT_NUMBER_INT_LONG              = "InputNumberIntLong";
            theToInit.EDITORCLASSKEY_INPUT_NUMBER_DECIMAL_SHORT         = "InputNumberDecimalShort";
            theToInit.EDITORCLASSKEY_INPUT_NUMBER_DECIMAL_MEDIUM        = "InputNumberDecimalMedium";
            theToInit.EDITORCLASSKEY_INPUT_NUMBER_DECIMAL_LONG          = "InputNumberDecimalLong";
            theToInit.EDITORCLASSKEY_INPUT_BOOLEAN_STRING               = "InputBooleanString";
            theToInit.EDITORCLASSKEY_INPUT_BOOLEAN_RADIO                = "InputBooleanRadio";
            theToInit.EDITORCLASSKEY_INPUT_BOOLEAN_CHECK                = "InputBooleanCheck";
            theToInit.EDITORCLASSKEY_INPUT_DATE                         = "InputDate";
            theToInit.EDITORCLASSKEY_INPUT_TIMESTAMP                    = "InputTimestamp";
            theToInit.EDITORCLASSKEY_INPUT_CHOICE                       = "InputChoice";

            theToInit.EDITORCLASSKEY_RDONLY_STRING_VERYSHORT            = "RdOnlyStringVeryShort";
            theToInit.EDITORCLASSKEY_RDONLY_STRING_SHORT                = "RdOnlyStringShort";
            theToInit.EDITORCLASSKEY_RDONLY_STRING_MEDIUM               = "RdOnlyStringMedium";
            theToInit.EDITORCLASSKEY_RDONLY_STRING_LONG                 = "RdOnlyStringLong";
            theToInit.EDITORCLASSKEY_RDONLY_STRING_VERYLONG             = "RdOnlyStringVeryLong";
            theToInit.EDITORCLASSKEY_RDONLY_TEXT_SHORT                  = "RdOnlyTextShort";
            theToInit.EDITORCLASSKEY_RDONLY_TEXT_LONG                   = "RdOnlyTextLong";
            theToInit.EDITORCLASSKEY_RDONLY_TEXT_VERYLONG               = "RdOnlyTextVeryLong";
            theToInit.EDITORCLASSKEY_RDONLY_NUMBER_INT_SHORT            = "RdOnlyNumberIntShort";
            theToInit.EDITORCLASSKEY_RDONLY_NUMBER_INT_MEDIUM           = "RdOnlyNumberIntMedium";
            theToInit.EDITORCLASSKEY_RDONLY_NUMBER_INT_LONG             = "RdOnlyNumberIntLong";
            theToInit.EDITORCLASSKEY_RDONLY_NUMBER_DECIMAL_SHORT        = "RdOnlyNumberDecimalShort";
            theToInit.EDITORCLASSKEY_RDONLY_NUMBER_DECIMAL_MEDIUM       = "RdOnlyNumberDecimalMedium";
            theToInit.EDITORCLASSKEY_RDONLY_NUMBER_DECIMAL_LONG         = "RdOnlyNumberDecimalLong";
            theToInit.EDITORCLASSKEY_RDONLY_BOOLEAN_STRING              = "RdOnlyBooleanString";
            theToInit.EDITORCLASSKEY_RDONLY_BOOLEAN_RADIO               = "RdOnlyBooleanRadio";
            theToInit.EDITORCLASSKEY_RDONLY_BOOLEAN_CHECK               = "RdOnlyBooleanCheck";
            theToInit.EDITORCLASSKEY_RDONLY_DATE                        = "RdOnlyDate";
            theToInit.EDITORCLASSKEY_RDONLY_TIMESTAMP                   = "RdOnlyTimestamp";
            theToInit.EDITORCLASSKEY_RDONLY_CHOICE                      = "RdOnlyChoice";

            theToInit.EDITORCLASSKEYS = [
                theToInit.EDITORCLASSKEY_EDITORCONTAINER                    ,
                theToInit.EDITORCLASSKEY_EDIT_DIV                           ,
                theToInit.EDITORCLASSKEY_TITLE_SPAN                         ,
                theToInit.EDITORCLASSKEY_USEDPARMS_SPAN                     ,
                theToInit.EDITORCLASSKEY_FIELDSSETCONTAINER                 ,
                theToInit.EDITORCLASSKEY_FIELDSSET_DIV                      ,
                theToInit.EDITORCLASSKEY_FIELDOUTERCONTAINER                ,
                theToInit.EDITORCLASSKEY_FIELDCONTAINER                     ,
                theToInit.EDITORCLASSKEY_FIELDCONTAINER_HEIGHT_DEFAULT      ,
                theToInit.EDITORCLASSKEY_FIELDCONTAINER_HEIGHT_ANDAHALF     ,
                theToInit.EDITORCLASSKEY_FIELDCONTAINER_HEIGHT_DOUBLE       ,
                theToInit.EDITORCLASSKEY_FIELDCONTAINER_HEIGHT_SHORT        ,
                theToInit.EDITORCLASSKEY_FIELDCONTAINER_HEIGHT_LONG         ,
                theToInit.EDITORCLASSKEY_FIELDCONTAINER_HEIGHT_VERYLONG     ,
                theToInit.EDITORCLASSKEY_FIELDEDITCONTAINER_HEIGHT_DEFAULT  ,
                theToInit.EDITORCLASSKEY_FIELDEDITCONTAINER_HEIGHT_SHORT    ,
                theToInit.EDITORCLASSKEY_FIELDEDITCONTAINER_HEIGHT_LONG     ,
                theToInit.EDITORCLASSKEY_FIELDEDITCONTAINER_HEIGHT_VERYLONG ,
                theToInit.EDITORCLASSKEY_FIELDEDITOUTERCONTAINER            ,
                theToInit.EDITORCLASSKEY_FIELDEDITCONTAINER                 ,
                theToInit.EDITORCLASSKEY_FIELD_DIV                          ,
                theToInit.EDITORCLASSKEY_LABELCONTAINER                     ,
                theToInit.EDITORCLASSKEY_LABEL_SPAN                         ,
                theToInit.EDITORCLASSKEY_VALUECONTAINER                     ,
                theToInit.EDITORCLASSKEY_INPUTCONTAINER                     ,
                theToInit.EDITORCLASSKEY_CANDIDATESCONTAINER                ,

                theToInit.EDITORCLASSKEY_FIELDARGUMENTINHEADEROUTERCONTAINER,

                theToInit.EDITORCLASSKEY_VALUE_SPAN                         ,
                theToInit.EDITORCLASSKEY_VALUE_STRING_VERYSHORT             ,
                theToInit.EDITORCLASSKEY_VALUE_STRING_SHORT                 ,
                theToInit.EDITORCLASSKEY_VALUE_STRING_MEDIUM                ,
                theToInit.EDITORCLASSKEY_VALUE_STRING_LONG                  ,
                theToInit.EDITORCLASSKEY_VALUE_STRING_VERYLONG              ,
                theToInit.EDITORCLASSKEY_VALUE_TEXT_SHORT                   ,
                theToInit.EDITORCLASSKEY_VALUE_TEXT_LONG                    ,
                theToInit.EDITORCLASSKEY_VALUE_TEXT_VERYLONG                ,
                theToInit.EDITORCLASSKEY_VALUE_NUMBER_INT_SHORT             ,
                theToInit.EDITORCLASSKEY_VALUE_NUMBER_INT_MEDIUM            ,
                theToInit.EDITORCLASSKEY_VALUE_NUMBER_INT_LONG              ,
                theToInit.EDITORCLASSKEY_VALUE_NUMBER_DECIMAL_SHORT         ,
                theToInit.EDITORCLASSKEY_VALUE_NUMBER_DECIMAL_MEDIUM        ,
                theToInit.EDITORCLASSKEY_VALUE_NUMBER_DECIMAL_LONG          ,
                theToInit.EDITORCLASSKEY_VALUE_BOOLEAN_STRING               ,
                theToInit.EDITORCLASSKEY_VALUE_BOOLEAN_RADIO                ,
                theToInit.EDITORCLASSKEY_VALUE_BOOLEAN_CHECK                ,
                theToInit.EDITORCLASSKEY_VALUE_DATE                         ,
                theToInit.EDITORCLASSKEY_VALUE_TIMESTAMP                    ,
                theToInit.EDITORCLASSKEY_VALUE_CHOICE                       ,

                theToInit.EDITORCLASSKEY_INPUT_STRING_VERYSHORT             ,
                theToInit.EDITORCLASSKEY_INPUT_STRING_SHORT                 ,
                theToInit.EDITORCLASSKEY_INPUT_STRING_MEDIUM                ,
                theToInit.EDITORCLASSKEY_INPUT_STRING_LONG                  ,
                theToInit.EDITORCLASSKEY_INPUT_STRING_VERYLONG              ,
                theToInit.EDITORCLASSKEY_INPUT_TEXT_SHORT                   ,
                theToInit.EDITORCLASSKEY_INPUT_TEXT_LONG                    ,
                theToInit.EDITORCLASSKEY_INPUT_TEXT_VERYLONG                ,
                theToInit.EDITORCLASSKEY_INPUT_NUMBER_INT_SHORT             ,
                theToInit.EDITORCLASSKEY_INPUT_NUMBER_INT_MEDIUM            ,
                theToInit.EDITORCLASSKEY_INPUT_NUMBER_INT_LONG              ,
                theToInit.EDITORCLASSKEY_INPUT_NUMBER_DECIMAL_SHORT         ,
                theToInit.EDITORCLASSKEY_INPUT_NUMBER_DECIMAL_MEDIUM        ,
                theToInit.EDITORCLASSKEY_INPUT_NUMBER_DECIMAL_LONG          ,
                theToInit.EDITORCLASSKEY_INPUT_BOOLEAN_STRING               ,
                theToInit.EDITORCLASSKEY_INPUT_BOOLEAN_RADIO                ,
                theToInit.EDITORCLASSKEY_INPUT_BOOLEAN_CHECK                ,
                theToInit.EDITORCLASSKEY_INPUT_DATE                         ,
                theToInit.EDITORCLASSKEY_INPUT_TIMESTAMP                    ,
                theToInit.EDITORCLASSKEY_INPUT_CHOICE                       ,

                theToInit.EDITORCLASSKEY_RDONLY_STRING_VERYSHORT            ,
                theToInit.EDITORCLASSKEY_RDONLY_STRING_SHORT                ,
                theToInit.EDITORCLASSKEY_RDONLY_STRING_MEDIUM               ,
                theToInit.EDITORCLASSKEY_RDONLY_STRING_LONG                 ,
                theToInit.EDITORCLASSKEY_RDONLY_STRING_VERYLONG             ,
                theToInit.EDITORCLASSKEY_RDONLY_TEXT_SHORT                  ,
                theToInit.EDITORCLASSKEY_RDONLY_TEXT_LONG                   ,
                theToInit.EDITORCLASSKEY_RDONLY_TEXT_VERYLONG               ,
                theToInit.EDITORCLASSKEY_RDONLY_NUMBER_INT_SHORT            ,
                theToInit.EDITORCLASSKEY_RDONLY_NUMBER_INT_MEDIUM           ,
                theToInit.EDITORCLASSKEY_RDONLY_NUMBER_INT_LONG             ,
                theToInit.EDITORCLASSKEY_RDONLY_NUMBER_DECIMAL_SHORT        ,
                theToInit.EDITORCLASSKEY_RDONLY_NUMBER_DECIMAL_MEDIUM       ,
                theToInit.EDITORCLASSKEY_RDONLY_NUMBER_DECIMAL_LONG         ,
                theToInit.EDITORCLASSKEY_RDONLY_BOOLEAN_STRING              ,
                theToInit.EDITORCLASSKEY_RDONLY_BOOLEAN_RADIO               ,
                theToInit.EDITORCLASSKEY_RDONLY_BOOLEAN_CHECK               ,
                theToInit.EDITORCLASSKEY_RDONLY_DATE                        ,
                theToInit.EDITORCLASSKEY_RDONLY_TIMESTAMP                   ,
                theToInit.EDITORCLASSKEY_RDONLY_CHOICE
            ];

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




        var aModule = { };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aModule.pgInitFromModuleConstants = pgInitFromModuleConstants;



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







