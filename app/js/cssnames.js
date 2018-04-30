'use strict';

/*
 * cssnames.js
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




angular.module( "cssNames", [
    "typesRegistry",
    "cssKeys"
]).factory("CssNames", [
    "TypesRegistrySvce",
    "CssKeys",
function( theSS_typesregistry,
          theSS_CssKeys) {




    var ModuleName     = "cssnames";
    var ModulePackages = "";
    var ModuleFullName = ModulePackages + ModuleName;



    var aMod_definer = function( theS_CssKeys) {


        if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}






        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.CSSs_TABLE = { };
            theToInit.CSSs_TABLE[ theS_CssKeys.GRIDCLASSKEY_TABLECONTAINER     ] = "GridTableFixedHeightContainer";
            theToInit.CSSs_TABLE[ theS_CssKeys.GRIDCLASSKEY_TABLE              ] = "GridTable";
            theToInit.CSSs_TABLE[ theS_CssKeys.GRIDCLASSKEY_HEADERROW          ] = "";
            theToInit.CSSs_TABLE[ theS_CssKeys.GRIDCLASSKEY_HEADERCELL         ] = "GridHeaderCell";
            theToInit.CSSs_TABLE[ theS_CssKeys.GRIDCLASSKEY_HEADERSPAN         ] = "";
            theToInit.CSSs_TABLE[ theS_CssKeys.GRIDCLASSKEY_HEADERCELLHIDDEN   ] = "GridHeaderCellHidden";
            theToInit.CSSs_TABLE[ theS_CssKeys.GRIDCLASSKEY_HEADERSPANHIDDEN   ] = "";
            theToInit.CSSs_TABLE[ theS_CssKeys.GRIDCLASSKEY_ROW                ] = "";
            theToInit.CSSs_TABLE[ theS_CssKeys.GRIDCLASSKEY_CELL               ] = "GridCellLeft";
            theToInit.CSSs_TABLE[ theS_CssKeys.GRIDCLASSKEY_SPAN               ] = "";
            theToInit.CSSs_TABLE[ theS_CssKeys.GRIDCLASSKEY_ROW_EVEN           ] = "";
            theToInit.CSSs_TABLE[ theS_CssKeys.GRIDCLASSKEY_CELL_EVEN          ] = "GridCellLeft";
            theToInit.CSSs_TABLE[ theS_CssKeys.GRIDCLASSKEY_SPAN_EVEN          ] = "";
            theToInit.CSSs_TABLE[ theS_CssKeys.GRIDCLASSKEY_ROW_ODD            ] = "";
            theToInit.CSSs_TABLE[ theS_CssKeys.GRIDCLASSKEY_CELL_ODD           ] = "GridCellLeft";
            theToInit.CSSs_TABLE[ theS_CssKeys.GRIDCLASSKEY_SPAN_ODD           ] = "";
            theToInit.CSSs_TABLE[ theS_CssKeys.GRIDCLASSKEY_CELL_HIDDEN        ] = "GridCellHidden";
            theToInit.CSSs_TABLE[ theS_CssKeys.GRIDCLASSKEY_SPAN_HIDDEN        ] = "";
            theToInit.CSSs_TABLE[ theS_CssKeys.GRIDCLASSKEY_ROW_SELECTED       ] = "";
            theToInit.CSSs_TABLE[ theS_CssKeys.GRIDCLASSKEY_CELL_SELECTED      ] = "GridCellLeft";
            theToInit.CSSs_TABLE[ theS_CssKeys.GRIDCLASSKEY_SPAN_SELECTED      ] = "";


            theToInit.CSSs_EDITOR = { };
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_EDITORCONTAINER                 ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_EDIT_DIV                        ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_TITLE_SPAN                      ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_USEDPARMS_SPAN                  ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDSSETCONTAINER              ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDSSET_DIV                   ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDOUTERCONTAINER             ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDCONTAINER                  ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDEDITOUTERCONTAINER         ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDEDITCONTAINER              ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELD_DIV                       ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABELCONTAINER                  ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_LABEL_SPAN                      ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUECONTAINER                  ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUTCONTAINER                  ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_CANDIDATESCONTAINER             ] = "";

            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_FIELDARGUMENTINHEADEROUTERCONTAINER ] = "";



            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_SPAN                      ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_VERYSHORT          ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_SHORT              ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_MEDIUM             ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_LONG               ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_STRING_VERYLONG           ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_TEXT_SHORT                ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_TEXT_LONG                 ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_TEXT_VERYLONG             ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_SHORT          ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_MEDIUM         ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_INT_LONG           ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_DECIMAL_SHORT      ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_DECIMAL_MEDIUM     ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_NUMBER_DECIMAL_LONG       ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_BOOLEAN_STRING            ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_BOOLEAN_RADIO             ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_BOOLEAN_CHECK             ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_DATE                      ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_TIMESTAMP                 ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_VALUE_CHOICE                    ] = "";

            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_STRING_VERYSHORT          ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_STRING_SHORT              ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_STRING_MEDIUM             ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_STRING_LONG               ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_STRING_VERYLONG           ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_TEXT_SHORT                ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_TEXT_LONG                 ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_TEXT_VERYLONG             ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_NUMBER_INT_SHORT          ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_NUMBER_INT_MEDIUM         ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_NUMBER_INT_LONG           ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_NUMBER_DECIMAL_SHORT      ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_NUMBER_DECIMAL_MEDIUM     ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_NUMBER_DECIMAL_LONG       ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_BOOLEAN_STRING            ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_BOOLEAN_RADIO             ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_BOOLEAN_CHECK             ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_DATE                      ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_TIMESTAMP                 ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_INPUT_CHOICE                    ] = "";

            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_VERYSHORT          ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_SHORT              ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_MEDIUM             ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_LONG               ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_STRING_VERYLONG           ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_TEXT_SHORT                ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_TEXT_LONG                 ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_TEXT_VERYLONG             ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_INT_SHORT          ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_INT_MEDIUM         ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_INT_LONG           ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_DECIMAL_SHORT      ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_DECIMAL_MEDIUM     ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_NUMBER_DECIMAL_LONG       ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_BOOLEAN_STRING            ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_BOOLEAN_RADIO             ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_BOOLEAN_CHECK             ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_DATE                      ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_TIMESTAMP                 ] = "";
            theToInit.CSSs_EDITOR[ theS_CssKeys.EDITORCLASSKEY_RDONLY_CHOICE                    ] = "";

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

        var aModule = aMod_definer(
            theSS_CssKeys
        );
        anExistingModule = aModule;

        theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
    }






    return anExistingModule;

}]);







