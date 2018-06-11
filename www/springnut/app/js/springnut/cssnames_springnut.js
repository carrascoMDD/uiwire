'use strict';

/*
 * cssnames_springnut.js
 *
 * Creado @author Antonio Carrasco Valero 201410041303
 *
 *
 ***************************************************************************

 Copyright 2014 2015 2016 Antonio Carrasco Valero
 Utiliza uiwire asynchronous user interface written by Antonio Carrasco Valero in Javascript with AngularJS and licensed under EUPL  http://www.uiwire.org

 Licensed under the EUPL, Version 1.1 only (the "Licence"); You may not use this work except in compliance with the Licence. You may obtain a copy of the Licence at: https://joinup.ec.europa.eu/software/page/eupl/licence-eupl Unless required by applicable law or agreed to in writing, software distributed under the Licence is distributed on an "AS IS" basis, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the Licence for the specific language governing permissions and limitations under the Licence.
 {{License2}}

 {{Licensed1}}
 {{Licensed2}}

 ***************************************************************************
 *
 */


angular.module("cssNames_Springnut", [
    "typesRegistry",
    "cssKeys",
    "cssNames"
]).
factory("CssNames_Springnut", [
    "TypesRegistrySvce",
    "CssKeys",
    "CssNames",
function( theSS_typesregistry,
          theSS_CssKeys,
          theSS_CssNames) {




    var ModuleName     = "cssnames_springnut";
    var ModulePackages = "springnut";
    var ModuleFullName = ModulePackages + "/" + ModuleName;



    var aMod_definer = function( theS_CssKeys,
                                 theS_CssNames) {


        if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}








        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
            }


            var aUsable = "cssSpringnut_BgColor_VeryLightBlue    cssSpringnut_Color_WhiteOnBgColor_SelectedRow cssSpringnut_BgColor_LightBlue";
            if( aUsable){}/* CQT */

            theToInit.CSSs_SPRINGNUT_TABLE = { };
            theToInit.CSSs_SPRINGNUT_TABLE[ theS_CssKeys.GRIDCLASSKEY_TABLECONTAINER     ] = ( /* theToInit.CSSs_TABLE[ theS_CssKeys.GRIDCLASSKEY_TABLECONTAINER     ] + */ " cssSpringnut_GridTableFixedHeightContainer").trim();
            theToInit.CSSs_SPRINGNUT_TABLE[ theS_CssKeys.GRIDCLASSKEY_TABLE              ] = ( /* theToInit.CSSs_TABLE[ theS_CssKeys.GRIDCLASSKEY_TABLE              ] + */ " cssSpringnut_GridTable").trim();
            theToInit.CSSs_SPRINGNUT_TABLE[ theS_CssKeys.GRIDCLASSKEY_HEADERROW          ] = ( /* theToInit.CSSs_TABLE[ theS_CssKeys.GRIDCLASSKEY_HEADERROW          ] + */ "").trim();
            theToInit.CSSs_SPRINGNUT_TABLE[ theS_CssKeys.GRIDCLASSKEY_HEADERCELL         ] = ( /* theToInit.CSSs_TABLE[ theS_CssKeys.GRIDCLASSKEY_HEADERCELL         ] + */ " cssSpringnut_GridHeaderCell cssSpringnut_BgColor_VeryLightBlue").trim();
            theToInit.CSSs_SPRINGNUT_TABLE[ theS_CssKeys.GRIDCLASSKEY_HEADERSPAN         ] = ( /* theToInit.CSSs_TABLE[ theS_CssKeys.GRIDCLASSKEY_HEADERSPAN         ] + */ " cssSpringnut_Color_LabelText_DarkBlue").trim();
            theToInit.CSSs_SPRINGNUT_TABLE[ theS_CssKeys.GRIDCLASSKEY_HEADERCELLHIDDEN   ] = ( /* theToInit.CSSs_TABLE[ theS_CssKeys.GRIDCLASSKEY_HEADERCELL         ] + */ " cssSpringnut_GridHeaderCellHidden").trim();
            theToInit.CSSs_SPRINGNUT_TABLE[ theS_CssKeys.GRIDCLASSKEY_HEADERSPANHIDDEN   ] = ( /* theToInit.CSSs_TABLE[ theS_CssKeys.GRIDCLASSKEY_HEADERSPAN         ] + */ "").trim();
            theToInit.CSSs_SPRINGNUT_TABLE[ theS_CssKeys.GRIDCLASSKEY_ROW                ] = ( /* theToInit.CSSs_TABLE[ theS_CssKeys.GRIDCLASSKEY_ROW                ] + */ "").trim();
            theToInit.CSSs_SPRINGNUT_TABLE[ theS_CssKeys.GRIDCLASSKEY_CELL               ] = ( /* theToInit.CSSs_TABLE[ theS_CssKeys.GRIDCLASSKEY_CELL               ] + */ "  cssSpringnut_GridCell").trim();
            theToInit.CSSs_SPRINGNUT_TABLE[ theS_CssKeys.GRIDCLASSKEY_SPAN               ] = ( /* theToInit.CSSs_TABLE[ theS_CssKeys.GRIDCLASSKEY_SPAN               ] + */ " cssSpringnut_Color_DataText_DarkGray").trim();
            theToInit.CSSs_SPRINGNUT_TABLE[ theS_CssKeys.GRIDCLASSKEY_ROW_EVEN           ] = ( /* theToInit.CSSs_TABLE[ theS_CssKeys.GRIDCLASSKEY_ROW_EVEN           ] + */ "").trim();
            theToInit.CSSs_SPRINGNUT_TABLE[ theS_CssKeys.GRIDCLASSKEY_CELL_EVEN          ] = ( /* theToInit.CSSs_TABLE[ theS_CssKeys.GRIDCLASSKEY_CELL_EVEN          ] + */ "  cssSpringnut_GridCell").trim();
            theToInit.CSSs_SPRINGNUT_TABLE[ theS_CssKeys.GRIDCLASSKEY_SPAN_EVEN          ] = ( /* theToInit.CSSs_TABLE[ theS_CssKeys.GRIDCLASSKEY_SPAN_EVEN          ] + */ " cssSpringnut_Color_DataText_DarkGray").trim();
            theToInit.CSSs_SPRINGNUT_TABLE[ theS_CssKeys.GRIDCLASSKEY_ROW_ODD            ] = ( /* theToInit.CSSs_TABLE[ theS_CssKeys.GRIDCLASSKEY_ROW_ODD            ] + */ "").trim();
            theToInit.CSSs_SPRINGNUT_TABLE[ theS_CssKeys.GRIDCLASSKEY_CELL_ODD           ] = ( /* theToInit.CSSs_TABLE[ theS_CssKeys.GRIDCLASSKEY_CELL_ODD           ] + */ "  cssSpringnut_GridCell cssSpringnut_BgColor_LightBlue").trim();
            theToInit.CSSs_SPRINGNUT_TABLE[ theS_CssKeys.GRIDCLASSKEY_SPAN_ODD           ] = ( /* theToInit.CSSs_TABLE[ theS_CssKeys.GRIDCLASSKEY_SPAN_ODD           ] + */ " cssSpringnut_Color_DataText_DarkGray").trim();
            theToInit.CSSs_SPRINGNUT_TABLE[ theS_CssKeys.GRIDCLASSKEY_CELL_HIDDEN        ] = ( /* theToInit.CSSs_TABLE[ theS_CssKeys.GRIDCLASSKEY_CELL_EVEN          ] + */ " cssSpringnut_GridCellHidden").trim();
            theToInit.CSSs_SPRINGNUT_TABLE[ theS_CssKeys.GRIDCLASSKEY_SPAN_HIDDEN        ] = ( /* theToInit.CSSs_TABLE[ theS_CssKeys.GRIDCLASSKEY_SPAN_EVEN          ] + */ "").trim();
            theToInit.CSSs_SPRINGNUT_TABLE[ theS_CssKeys.GRIDCLASSKEY_ROW_SELECTED       ] = ( /* theToInit.CSSs_TABLE[ theS_CssKeys.GRIDCLASSKEY_ROW_SELECTED       ] + */ "").trim();
            theToInit.CSSs_SPRINGNUT_TABLE[ theS_CssKeys.GRIDCLASSKEY_CELL_SELECTED      ] = ( /* theToInit.CSSs_TABLE[ theS_CssKeys.GRIDCLASSKEY_CELL_SELECTED      ] + */ "  cssSpringnut_GridCell cssSpringnut_BgColor_SelectedRow").trim();
            theToInit.CSSs_SPRINGNUT_TABLE[ theS_CssKeys.GRIDCLASSKEY_SPAN_SELECTED      ] = ( /* theToInit.CSSs_TABLE[ theS_CssKeys.GRIDCLASSKEY_SPAN_SELECTED      ] + */ " ").trim();



            theToInit.CSSs_SPRINGNUT_EDITOR = { };
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_EDITORCONTAINER                 ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_EDITORCONTAINER              ] + */ " cssSpringnut_EditorContainer").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_EDIT_DIV                        ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_EDIT_DIV                     ] + */ " cssSpringnut_BgColor_Blue cssSpringnut_EditDiv").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_TITLE_SPAN                      ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_TITLE_SPAN                   ] + */ "").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_USEDPARMS_SPAN                  ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_USEDPARMS_SPAN               ] + */ "").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDSSETCONTAINER              ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDSSETCONTAINER           ] + */ "").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDSSET_DIV                   ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDSSET_DIV                ] + */ "").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDOUTERCONTAINER             ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDOUTERCONTAINER          ] + */ " cssSpringnut_FieldOuterContainer").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDCONTAINER                  ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDCONTAINER               ] + */ " cssSpringnut_FieldContainer").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDCONTAINER_HEIGHT_DEFAULT   ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDCONTAINER               ] + */ " cssSpringnut_FieldContainer_Height_Default").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDCONTAINER_HEIGHT_ANDAHALF  ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDCONTAINER               ] + */ " cssSpringnut_FieldContainer_Height_AndAHalf").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDCONTAINER_HEIGHT_DOUBLE    ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDCONTAINER               ] + */ " cssSpringnut_FieldContainer_Height_Double").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDCONTAINER_HEIGHT_SHORT     ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDCONTAINER               ] + */ " cssSpringnut_FieldContainer_Height_Short").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDCONTAINER_HEIGHT_LONG      ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDCONTAINER               ] + */ " cssSpringnut_FieldContainer_Height_Long").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDCONTAINER_HEIGHT_VERYLONG  ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDCONTAINER               ] + */ " cssSpringnut_FieldContainer_Height_VeryLong").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDEDITCONTAINER_HEIGHT_DEFAULT ]=( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDCONTAINER               ] + */ " cssSpringnut_FieldEditContainer_Height_Default").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDEDITCONTAINER_HEIGHT_SHORT   ]=( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDCONTAINER               ] + */ " cssSpringnut_FieldEditContainer_Height_Short").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDEDITCONTAINER_HEIGHT_LONG    ]=( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDCONTAINER               ] + */ " cssSpringnut_FieldEditContainer_Height_Long").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDEDITCONTAINER_HEIGHT_VERYLONG]=( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDCONTAINER               ] + */ " cssSpringnut_FieldEditContainer_Height_VeryLong").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDEDITOUTERCONTAINER         ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDOUTERCONTAINER          ] + */ " cssSpringnut_FieldEditOuterContainer").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDEDITCONTAINER              ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDOUTERCONTAINER          ] + */ " cssSpringnut_FieldEditContainer").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELD_DIV                       ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELD_DIV                    ] + */ "").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABELCONTAINER                  ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABELCONTAINER               ] + */ " cssSpringnut_LabelContainer").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN                      ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN                   ] + */ " cssSpringnut_Color_LabelText_DarkBlue cssSpringnut_Label").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUECONTAINER                  ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUECONTAINER               ] + */ " cssSpringnut_ValueContainer").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUTCONTAINER                  ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUTCONTAINER               ] + */ " cssSpringnut_InputContainer").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_CANDIDATESCONTAINER             ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_CANDIDATESCONTAINER          ] + */ " cssSpringnut_BgColor_LightBlue cssSpringnut_BorderColor_VeryDarkGray cssSpringnut_CandidatesContainer").trim();

            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDARGUMENTINHEADEROUTERCONTAINER         ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDARGUMENTINHEADEROUTERCONTAINER          ] + */ " cssSpringnut_FieldArgumentInHeaderOuterContainer").trim();


            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_SPAN                      ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_SPAN                   ] + */ " cssSpringnut_Value").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_VERYSHORT          ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_VERYSHORT       ] + */ " cssSpringnut_Color_DataText_DarkGray cssSpringnut_Value cssSpringnut_Value_String  cssSpringnut_Value_String_Veryshort").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_SHORT              ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_SHORT           ] + */ " cssSpringnut_Color_DataText_DarkGray cssSpringnut_Value cssSpringnut_Value_String  cssSpringnut_Value_String_Short").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_MEDIUM             ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_MEDIUM          ] + */ " cssSpringnut_Color_DataText_DarkGray cssSpringnut_Value cssSpringnut_Value_String  cssSpringnut_Value_String_Medium").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_LONG               ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_LONG            ] + */ " cssSpringnut_Color_DataText_DarkGray cssSpringnut_Value cssSpringnut_Value_String  cssSpringnut_Value_String_Long").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_VERYLONG           ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_VERYLONG        ] + */ " cssSpringnut_Color_DataText_DarkGray cssSpringnut_Value cssSpringnut_Value_String  cssSpringnut_Value_String_Verylong").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_TEXT_SHORT                ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_TEXT_SHORT             ] + */ " cssSpringnut_Color_DataText_DarkGray cssSpringnut_Value cssSpringnut_Value_Text    cssSpringnut_Value_Text_Short").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_TEXT_LONG                 ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_TEXT_LONG              ] + */ " cssSpringnut_Color_DataText_DarkGray cssSpringnut_Value cssSpringnut_Value_Text    cssSpringnut_Value_Text_Long").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_TEXT_VERYLONG             ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_TEXT_VERYLONG          ] + */ " cssSpringnut_Color_DataText_DarkGray cssSpringnut_Value cssSpringnut_Value_Text    cssSpringnut_Value_Text_VeryLong").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_SHORT          ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_SHORT       ] + */ " cssSpringnut_Color_DataText_DarkGray cssSpringnut_Value cssSpringnut_Value_Number  cssSpringnut_Value_Number_Int     cssSpringnut_Value_Number_Int_Short").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_MEDIUM         ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_MEDIUM      ] + */ " cssSpringnut_Color_DataText_DarkGray cssSpringnut_Value cssSpringnut_Value_Number  cssSpringnut_Value_Number_Int     cssSpringnut_Value_Number_Int_Medium").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_LONG           ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_LONG        ] + */ " cssSpringnut_Color_DataText_DarkGray cssSpringnut_Value cssSpringnut_Value_Number  cssSpringnut_Value_Number_Int     cssSpringnut_Value_Number_Int_Long").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_DECIMAL_SHORT      ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_DECIMAL_SHORT   ] + */ " cssSpringnut_Color_DataText_DarkGray cssSpringnut_Value cssSpringnut_Value_Number  cssSpringnut_Value_Number_Decimal cssSpringnut_Value_Number_Decimal_Short").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_DECIMAL_MEDIUM     ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_DECIMAL_MEDIUM  ] + */ " cssSpringnut_Color_DataText_DarkGray cssSpringnut_Value cssSpringnut_Value_Number  cssSpringnut_Value_Number_Decimal cssSpringnut_Value_Number_Decimal_Medium").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_DECIMAL_LONG       ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_DECIMAL_LONG    ] + */ " cssSpringnut_Color_DataText_DarkGray cssSpringnut_Value cssSpringnut_Value_Number  cssSpringnut_Value_Number_Decimal cssSpringnut_Value_Number_Decimal_Long").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_BOOLEAN_STRING            ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_BOOLEAN_STRING         ] + */ " cssSpringnut_Color_DataText_DarkGray cssSpringnut_Value cssSpringnut_Value_Boolean cssSpringnut_Value_Boolean_String").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_BOOLEAN_RADIO             ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_BOOLEAN_RADIO          ] + */ " cssSpringnut_Color_DataText_DarkGray cssSpringnut_Value cssSpringnut_Value_Boolean cssSpringnut_Value_Boolean_Radio").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_BOOLEAN_CHECK             ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_BOOLEAN_CHECK          ] + */ " cssSpringnut_Color_DataText_DarkGray cssSpringnut_Value cssSpringnut_Value_Boolean cssSpringnut_Value_Boolean_Check").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_DATE                      ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_DATE                   ] + */ " cssSpringnut_Color_DataText_DarkGray cssSpringnut_Value cssSpringnut_Value_Date").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_TIMESTAMP                 ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_TIMESTAMP              ] + */ " cssSpringnut_Color_DataText_DarkGray cssSpringnut_Value cssSpringnut_Value_Timestamp").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_CHOICE                    ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_CHOICE                 ] + */ " cssSpringnut_BgColor_VeryLightBlue cssSpringnut_BorderColor_LightBlue cssSpringnut_Color_DataText_DarkGray cssSpringnut_Value cssSpringnut_Value_Choice").trim();

            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_STRING_VERYSHORT          ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_STRING_VERYSHORT       ] + */ " cssSpringnut_BgColor_VeryLightBlue cssSpringnut_BorderColor_LightBlue cssSpringnut_Color_DataText_DarkGray cssSpringnut_Input cssSpringnut_Input_String  cssSpringnut_Input_String_Veryshort").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_STRING_SHORT              ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_STRING_SHORT           ] + */ " cssSpringnut_BgColor_VeryLightBlue cssSpringnut_BorderColor_LightBlue cssSpringnut_Color_DataText_DarkGray cssSpringnut_Input cssSpringnut_Input_String  cssSpringnut_Input_String_Short").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_STRING_MEDIUM             ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_STRING_MEDIUM          ] + */ " cssSpringnut_BgColor_VeryLightBlue cssSpringnut_BorderColor_LightBlue cssSpringnut_Color_DataText_DarkGray cssSpringnut_Input cssSpringnut_Input_String  cssSpringnut_Input_String_Medium").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_STRING_LONG               ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_STRING_LONG            ] + */ " cssSpringnut_BgColor_VeryLightBlue cssSpringnut_BorderColor_LightBlue cssSpringnut_Color_DataText_DarkGray cssSpringnut_Input cssSpringnut_Input_String  cssSpringnut_Input_String_Long").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_STRING_VERYLONG           ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_STRING_VERYLONG        ] + */ " cssSpringnut_BgColor_VeryLightBlue cssSpringnut_BorderColor_LightBlue cssSpringnut_Color_DataText_DarkGray cssSpringnut_Input cssSpringnut_Input_String  cssSpringnut_Input_String_Verylong").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_TEXT_SHORT                ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_TEXT_SHORT             ] + */ " cssSpringnut_BgColor_VeryLightBlue cssSpringnut_BorderColor_LightBlue cssSpringnut_Color_DataText_DarkGray cssSpringnut_Input cssSpringnut_Input_Text    cssSpringnut_Input_Text_Short").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_TEXT_LONG                 ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_TEXT_LONG              ] + */ " cssSpringnut_BgColor_VeryLightBlue cssSpringnut_BorderColor_LightBlue cssSpringnut_Color_DataText_DarkGray cssSpringnut_Input cssSpringnut_Input_Text    cssSpringnut_Input_Text_Long").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_TEXT_VERYLONG             ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_TEXT_VERYLONG          ] + */ " cssSpringnut_BgColor_VeryLightBlue cssSpringnut_BorderColor_LightBlue cssSpringnut_Color_DataText_DarkGray cssSpringnut_Input cssSpringnut_Input_Text    cssSpringnut_Input_Text_VeryLong").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_NUMBER_INT_SHORT          ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_NUMBER_INT_SHORT       ] + */ " cssSpringnut_BgColor_VeryLightBlue cssSpringnut_BorderColor_LightBlue cssSpringnut_Color_DataText_DarkGray cssSpringnut_Input cssSpringnut_Input_Number  cssSpringnut_Input_Number_Int     cssSpringnut_Input_Number_Int_Short").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_NUMBER_INT_MEDIUM         ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_NUMBER_INT_MEDIUM      ] + */ " cssSpringnut_BgColor_VeryLightBlue cssSpringnut_BorderColor_LightBlue cssSpringnut_Color_DataText_DarkGray cssSpringnut_Input cssSpringnut_Input_Number  cssSpringnut_Input_Number_Int     cssSpringnut_Input_Number_Int_Medium").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_NUMBER_INT_LONG           ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_NUMBER_INT_LONG        ] + */ " cssSpringnut_BgColor_VeryLightBlue cssSpringnut_BorderColor_LightBlue cssSpringnut_Color_DataText_DarkGray cssSpringnut_Input cssSpringnut_Input_Number  cssSpringnut_Input_Number_Int     cssSpringnut_Input_Number_Int_Long").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_NUMBER_DECIMAL_SHORT      ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_NUMBER_DECIMAL_SHORT   ] + */ " cssSpringnut_BgColor_VeryLightBlue cssSpringnut_BorderColor_LightBlue cssSpringnut_Color_DataText_DarkGray cssSpringnut_Input cssSpringnut_Input_Number  cssSpringnut_Input_Number_Decimal cssSpringnut_Input_Number_Decimal_Short").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_NUMBER_DECIMAL_MEDIUM     ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_NUMBER_DECIMAL_MEDIUM  ] + */ " cssSpringnut_BgColor_VeryLightBlue cssSpringnut_BorderColor_LightBlue cssSpringnut_Color_DataText_DarkGray cssSpringnut_Input cssSpringnut_Input_Number  cssSpringnut_Input_Number_Decimal cssSpringnut_Input_Number_Decimal_Medium").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_NUMBER_DECIMAL_LONG       ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_NUMBER_DECIMAL_LONG    ] + */ " cssSpringnut_BgColor_VeryLightBlue cssSpringnut_BorderColor_LightBlue cssSpringnut_Color_DataText_DarkGray cssSpringnut_Input cssSpringnut_Input_Number  cssSpringnut_Input_Number_Decimal cssSpringnut_Input_Number_Decimal_Long").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_BOOLEAN_STRING            ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_BOOLEAN_STRING         ] + */ " cssSpringnut_BgColor_VeryLightBlue cssSpringnut_BorderColor_LightBlue cssSpringnut_Color_DataText_DarkGray cssSpringnut_Input cssSpringnut_Input_Boolean cssSpringnut_Input_Boolean_String").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_BOOLEAN_RADIO             ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_BOOLEAN_RADIO          ] + */ " cssSpringnut_BgColor_VeryLightBlue cssSpringnut_BorderColor_LightBlue cssSpringnut_Color_DataText_DarkGray cssSpringnut_Input cssSpringnut_Input_Boolean cssSpringnut_Input_Boolean_Radio").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_BOOLEAN_CHECK             ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_BOOLEAN_CHECK          ] + */ " cssSpringnut_BgColor_VeryLightBlue cssSpringnut_BorderColor_LightBlue cssSpringnut_Color_DataText_DarkGray cssSpringnut_Input cssSpringnut_Input_Boolean cssSpringnut_Input_Boolean_Check").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_DATE                      ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_DATE                   ] + */ " cssSpringnut_BgColor_VeryLightBlue cssSpringnut_BorderColor_LightBlue cssSpringnut_Color_DataText_DarkGray cssSpringnut_Input cssSpringnut_Input_Date").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_TIMESTAMP                 ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_TIMESTAMP              ] + */ " cssSpringnut_BgColor_VeryLightBlue cssSpringnut_BorderColor_LightBlue cssSpringnut_Color_DataText_DarkGray cssSpringnut_Input cssSpringnut_Input_Timestamp").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_CHOICE                    ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_CHOICE                 ] + */ " cssSpringnut_BgColor_VeryLightBlue cssSpringnut_BorderColor_LightBlue cssSpringnut_Color_DataText_DarkGray cssSpringnut_Input cssSpringnut_Input_Choice").trim();

            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_VERYSHORT          ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_VERYSHORT       ] + */ " cssSpringnut_BgColor_LightBlue cssSpringnut_BorderColor_LightBlue cssSpringnut_Color_DataText_DarkGray cssSpringnut_RdOnly cssSpringnut_RdOnly_String  cssSpringnut_RdOnly_String_Veryshort").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_SHORT              ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_SHORT           ] + */ " cssSpringnut_BgColor_LightBlue cssSpringnut_BorderColor_LightBlue cssSpringnut_Color_DataText_DarkGray cssSpringnut_RdOnly cssSpringnut_RdOnly_String  cssSpringnut_RdOnly_String_Short").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_MEDIUM             ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_MEDIUM          ] + */ " cssSpringnut_BgColor_LightBlue cssSpringnut_BorderColor_LightBlue cssSpringnut_Color_DataText_DarkGray cssSpringnut_RdOnly cssSpringnut_RdOnly_String  cssSpringnut_RdOnly_String_Medium").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_LONG               ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_LONG            ] + */ " cssSpringnut_BgColor_LightBlue cssSpringnut_BorderColor_LightBlue cssSpringnut_Color_DataText_DarkGray cssSpringnut_RdOnly cssSpringnut_RdOnly_String  cssSpringnut_RdOnly_String_Long").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_VERYLONG           ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_VERYLONG        ] + */ " cssSpringnut_BgColor_LightBlue cssSpringnut_BorderColor_LightBlue cssSpringnut_Color_DataText_DarkGray cssSpringnut_RdOnly cssSpringnut_RdOnly_String  cssSpringnut_RdOnly_String_Verylong").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_TEXT_SHORT                ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_TEXT_SHORT             ] + */ " cssSpringnut_BgColor_LightBlue cssSpringnut_BorderColor_LightBlue cssSpringnut_Color_DataText_DarkGray cssSpringnut_RdOnly cssSpringnut_RdOnly_Text    cssSpringnut_RdOnly_Text_Short").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_TEXT_LONG                 ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_TEXT_LONG              ] + */ " cssSpringnut_BgColor_LightBlue cssSpringnut_BorderColor_LightBlue cssSpringnut_Color_DataText_DarkGray cssSpringnut_RdOnly cssSpringnut_RdOnly_Text    cssSpringnut_RdOnly_Text_Long").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_TEXT_VERYLONG             ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_TEXT_VERYLONG          ] + */ " cssSpringnut_BgColor_LightBlue cssSpringnut_BorderColor_LightBlue cssSpringnut_Color_DataText_DarkGray cssSpringnut_RdOnly cssSpringnut_RdOnly_Text    cssSpringnut_RdOnly_Text_VeryLong").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_INT_SHORT          ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_INT_SHORT       ] + */ " cssSpringnut_BgColor_LightBlue cssSpringnut_BorderColor_LightBlue cssSpringnut_Color_DataText_DarkGray cssSpringnut_RdOnly cssSpringnut_RdOnly_Number  cssSpringnut_RdOnly_Number_Int     cssSpringnut_RdOnly_Number_Int_Short").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_INT_MEDIUM         ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_INT_MEDIUM      ] + */ " cssSpringnut_BgColor_LightBlue cssSpringnut_BorderColor_LightBlue cssSpringnut_Color_DataText_DarkGray cssSpringnut_RdOnly cssSpringnut_RdOnly_Number  cssSpringnut_RdOnly_Number_Int     cssSpringnut_RdOnly_Number_Int_Medium").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_INT_LONG           ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_INT_LONG        ] + */ " cssSpringnut_BgColor_LightBlue cssSpringnut_BorderColor_LightBlue cssSpringnut_Color_DataText_DarkGray cssSpringnut_RdOnly cssSpringnut_RdOnly_Number  cssSpringnut_RdOnly_Number_Int     cssSpringnut_RdOnly_Number_Int_Long").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_DECIMAL_SHORT      ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_DECIMAL_SHORT   ] + */ " cssSpringnut_BgColor_LightBlue cssSpringnut_BorderColor_LightBlue cssSpringnut_Color_DataText_DarkGray cssSpringnut_RdOnly cssSpringnut_RdOnly_Number  cssSpringnut_RdOnly_Number_Decimal cssSpringnut_RdOnly_Number_Decimal_Short").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_DECIMAL_MEDIUM     ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_DECIMAL_MEDIUM  ] + */ " cssSpringnut_BgColor_LightBlue cssSpringnut_BorderColor_LightBlue cssSpringnut_Color_DataText_DarkGray cssSpringnut_RdOnly cssSpringnut_RdOnly_Number  cssSpringnut_RdOnly_Number_Decimal cssSpringnut_RdOnly_Number_Decimal_Medium").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_DECIMAL_LONG       ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_DECIMAL_LONG    ] + */ " cssSpringnut_BgColor_LightBlue cssSpringnut_BorderColor_LightBlue cssSpringnut_Color_DataText_DarkGray cssSpringnut_RdOnly cssSpringnut_RdOnly_Number  cssSpringnut_RdOnly_Number_Decimal cssSpringnut_RdOnly_Number_Decimal_Long").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_BOOLEAN_STRING            ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_BOOLEAN_STRING         ] + */ " cssSpringnut_BgColor_LightBlue cssSpringnut_BorderColor_LightBlue cssSpringnut_Color_DataText_DarkGray cssSpringnut_RdOnly cssSpringnut_RdOnly_Boolean cssSpringnut_RdOnly_Boolean_String").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_BOOLEAN_RADIO             ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_BOOLEAN_RADIO          ] + */ " cssSpringnut_BgColor_LightBlue cssSpringnut_BorderColor_LightBlue cssSpringnut_Color_DataText_DarkGray cssSpringnut_RdOnly cssSpringnut_RdOnly_Boolean cssSpringnut_RdOnly_Boolean_Radio").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_BOOLEAN_CHECK             ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_BOOLEAN_CHECK          ] + */ " cssSpringnut_BgColor_LightBlue cssSpringnut_BorderColor_LightBlue cssSpringnut_Color_DataText_DarkGray cssSpringnut_RdOnly cssSpringnut_RdOnly_Boolean cssSpringnut_RdOnly_Boolean_Check").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_DATE                      ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_DATE                   ] + */ " cssSpringnut_BgColor_LightBlue cssSpringnut_BorderColor_LightBlue cssSpringnut_Color_DataText_DarkGray cssSpringnut_RdOnly cssSpringnut_RdOnly_Date").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_TIMESTAMP                 ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_TIMESTAMP              ] + */ " cssSpringnut_BgColor_LightBlue cssSpringnut_BorderColor_LightBlue cssSpringnut_Color_DataText_DarkGray cssSpringnut_RdOnly cssSpringnut_RdOnly_Timestamp").trim();
            theToInit.CSSs_SPRINGNUT_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_CHOICE                    ] = ( /* theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_CHOICE                 ] + */ " cssSpringnut_BgColor_LightBlue cssSpringnut_BorderColor_LightBlue cssSpringnut_Color_DataText_DarkGray cssSpringnut_RdOnly cssSpringnut_RdOnly_Choice").trim();

        };



        var ModuleConstants = {};
        theS_CssNames.pgInitFromModuleConstants( ModuleConstants);
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

        var aModule = aMod_definer(
            theSS_CssKeys,
            theSS_CssNames
        );
        anExistingModule = aModule;

        theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
    }






    return anExistingModule;

}]);







