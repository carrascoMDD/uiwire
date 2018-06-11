'use strict';

/*
 * converter_type.js
 *
 * Creado @author Antonio Carrasco Valero 201410112025
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






angular.module("widgetCtrlsTypes").factory("ConverterType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "CommonType",
    "$timeout",
function( theSS_typesregistry,
          theSS_Overrider,
          theSS_CommonType,
          theSS_timeout) {




    var ModuleName     = "converter_type";
    var ModulePackages = "widgetctrls";
    var ModuleFullName = ModulePackages + "/" + ModuleName;



    var aMod_definer = function( theS_Overrider,
                                 theS_CommonType,
                                 $timeout) {
        if( $timeout){}/* CQT */


        if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}








        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.REPRESENTATIONVALUE_NULL  = "Ø";
            theToInit.REPRESENTATIONVALUE_TRUE  = "SI";
            theToInit.REPRESENTATIONVALUE_FALSE = "NO";
            theToInit.REPRESENTATIONVALUE_YES   = "SI";
            theToInit.REPRESENTATIONVALUE_NO    = "NO";

            theToInit.MAXFIELDDISPLAYVALUELEN = 8192;
            theToInit.MAXGRIDDISPLAYVALUELEN  = 1024;
            theToInit.DISPLAYVALUECONTINUES = " ...recortado:";


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
            theToInit.DEFAULTTITLE = "ConverterDefaultName";

            theToInit.COMMASPACE_MACIC = "*12)3/5&";
            theToInit.COMMA_MAGIC      = "!7-45.3?";

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






        var aConverter_Prototype = (function() {


            var aPrototype = new theS_CommonType.Common_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_SuperPrototype = theS_CommonType.Common_Prototype;


            aPrototype._v_Type = "Converter";

            aPrototype._v_Module = null;


            aPrototype._v_OwnerCtrl         = null;
            aPrototype._v_TypeConversions   = null;
            aPrototype._v_FixedConversions  = null;

            aPrototype._v_ConversionsCache  = null;






            var _pInit = function( theTitle, theIdentifier, theRecorder,
                                   theOwnerCtrl, theTypeConversions, theFixedConversions) {

                this._pInit_Converter( theTitle, theIdentifier, theRecorder,
                                       theOwnerCtrl, theTypeConversions, theFixedConversions);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_Converter = function( theTitle, theIdentifier, theRecorder,
                                             theOwnerCtrl, theTypeConversions, theFixedConversions) {

                /* Delegate on super prototype initialization */
                aPrototype._v_SuperPrototype._pInit_Common.apply( this, [ theTitle, theIdentifier, theRecorder]);

                this._v_Prototype = aPrototype;
                this._v_Type      = this._v_Prototype._v_Type;
                this._v_Module    = aPrototype._v_Module;

                this._v_OwnerCtrl         = theOwnerCtrl;
                this._v_TypeConversions   = theTypeConversions;
                this._v_FixedConversions  = theFixedConversions;

                this._v_ConversionsCache  = { };

                if( this._v_OwnerCtrl){}/* CQT */
                if( this._v_TypeConversions){}/* CQT */
                if( this._v_FixedConversions){}/* CQT */
                if( this._v_ConversionsCache){}/* CQT */
            };
            if( _pInit_Converter){}/* CQT */
            aPrototype._pInit_Converter = _pInit_Converter;











            var fprDo_InitialExtra = function() {
                return this.fNewDeferredResolveWithNothingPromise();
            };
            if( fprDo_InitialExtra){}/* CQT */
            aPrototype.fprDo_InitialExtra = fprDo_InitialExtra;









            var fprDo_Initial = function() {

                return this.fprDo_InitialExtra();
            };
            if( fprDo_Initial){}/* CQT */
            aPrototype.fprDo_Initial = fprDo_Initial;










            var fConvertToDisplayValue = function( theFieldValue, theDataType, theForGrid) {

                var aDataType = theDataType;
                if( !aDataType) {
                    aDataType = "String";
                }


                var aConvertedFieldValue = theFieldValue;

                if( typeof aConvertedFieldValue == "string") {
                    var aMaxLen = this.MAXFIELDDISPLAYVALUELEN;
                    if( theForGrid)  {
                        aMaxLen = this.MAXGRIDDISPLAYVALUELEN;
                    }
                    var aNumChars = aConvertedFieldValue.length;
                    if( aNumChars > aMaxLen) {
                        aConvertedFieldValue = aConvertedFieldValue.substring( 0, aMaxLen) +
                            this.DISPLAYVALUECONTINUES + aNumChars + ">" + aMaxLen;
                    }
                }

                switch( aDataType) {


                    case "String":

                        if( ( typeof aConvertedFieldValue == "undefined") || ( aConvertedFieldValue == null)) {
                            aConvertedFieldValue = this.REPRESENTATIONVALUE_NULL;
                            break;
                        }

                        var otherFieldValue = ( "" + aConvertedFieldValue).
                            replaceAll( ", ", this.COMMASPACE_MACIC).
                            replaceAll( ",", this.COMMA_MAGIC).
                            replaceAll( this.COMMA_MAGIC, ", ").
                            replaceAll( this.COMMASPACE_MACIC, ", ");

                        if( !( otherFieldValue == aConvertedFieldValue)) {
                            aConvertedFieldValue = otherFieldValue;
                        }
                        break;



                    case "Int":

                        if( ( typeof aConvertedFieldValue == "undefined") || ( aConvertedFieldValue == null)) {
                            aConvertedFieldValue = 0;
                            break;
                        }
                        break;



                    case "Number":

                        if( ( typeof aConvertedFieldValue == "undefined") || ( aConvertedFieldValue == null)) {
                            aConvertedFieldValue = 0;
                            break;
                        }
                        break;



                    case "IntYesNo":

                        if( ( typeof aConvertedFieldValue == "undefined") || ( aConvertedFieldValue == null)) {
                            aConvertedFieldValue = this.REPRESENTATIONVALUE_NO;
                            break;
                        }

                        if( aConvertedFieldValue > 0) {
                            aConvertedFieldValue = this.REPRESENTATIONVALUE_YES;
                        }
                        else {
                            aConvertedFieldValue = this.REPRESENTATIONVALUE_NO;
                        }
                        break;



                    case "BoolYesNo":

                        if( ( typeof aConvertedFieldValue == "undefined") || ( aConvertedFieldValue == null)) {
                            aConvertedFieldValue = this.REPRESENTATIONVALUE_FALSE;
                            break;
                        }

                        if( aConvertedFieldValue === true) {
                            aConvertedFieldValue = this.REPRESENTATIONVALUE_TRUE;
                        }
                        else {
                            aConvertedFieldValue = this.REPRESENTATIONVALUE_FALSE;
                        }
                        break;



                    case "File":

                        if( ( typeof aConvertedFieldValue == "undefined") || ( aConvertedFieldValue == null)) {
                            aConvertedFieldValue = this.REPRESENTATIONVALUE_NULL;
                            break;
                        }

                        if( !( aConvertedFieldValue.constructor && aConvertedFieldValue.constructor.name && ( aConvertedFieldValue.constructor.name == "File"))) {
                            aConvertedFieldValue = this.REPRESENTATIONVALUE_NULL;
                            break;
                        }


                        var aDisplayValue = "";

                        var aFileName = aConvertedFieldValue[ "name"];
                        if( !aFileName) {
                            aFileName = "<<>>";
                        }
                        if( aFileName) {
                            if( aDisplayValue.length) {
                                aDisplayValue += " ";
                            }
                            aDisplayValue += aFileName;
                        }

                        if( !theForGrid || !aDisplayValue.length)  {
                            var aFileSize = aConvertedFieldValue[ "size"];
                            if( typeof aFileSize == "number") {
                                aFileSize = "" + aFileSize;
                            }
                            else {
                                aFileSize = "";
                            }
                            if( aFileSize) {
                                if( aDisplayValue.length) {
                                    aDisplayValue += " ";
                                }
                                aDisplayValue += aFileSize;
                            }
                        }

                        if( !theForGrid || !aDisplayValue.length)  {
                            var aFileType = aConvertedFieldValue[ "type"];
                            if( !aFileType) {
                                aFileType = "";
                            }
                            if( aFileType) {
                               if( aDisplayValue.length) {
                                   aDisplayValue += " ";
                               }
                               aDisplayValue += aFileType;
                            }
                        }

                        aConvertedFieldValue = aDisplayValue;
                        break;


                    default:

                        if( ( typeof aConvertedFieldValue == "undefined") || ( aConvertedFieldValue == null)) {
                            aConvertedFieldValue = this.REPRESENTATIONVALUE_NULL;
                            break;
                        }
                }

                return aConvertedFieldValue;
            };
            if( fConvertToDisplayValue){}/* CQT */
            aPrototype.fConvertToDisplayValue = fConvertToDisplayValue;










            var fConvertToEditableValue = function( theFieldValue, theDataType) {

                if( ( typeof theFieldValue == "undefined") || ( theFieldValue == null)) {
                    return null;
                }

                if( !theDataType) {
                    return null;
                }


                var aConvertedFieldValue = theFieldValue;

                switch( theDataType) {

                    case "String":
                        break;

                    case "Int":
                        if( !theFieldValue) {
                            aConvertedFieldValue = "0";
                        }
                        else {
                            aConvertedFieldValue = "" + theFieldValue;
                        }
                        break;


                    case "Number":
                        if( !theFieldValue) {
                            aConvertedFieldValue = "0";
                        }
                        else {
                            aConvertedFieldValue = "" + theFieldValue;
                        }
                        break;


                    case "IntYesNo":
                        aConvertedFieldValue = ( theFieldValue > 0);
                        break;


                    case "BoolYesNo":
                        aConvertedFieldValue = ( theFieldValue === true);
                        break;

                    default:
                }

                return aConvertedFieldValue;
            };
            if( fConvertToEditableValue){}/* CQT */
            aPrototype.fConvertToEditableValue = fConvertToEditableValue;












            var fConvertFromEditableValue = function( theFieldValue, theDataType) {

                if( ( typeof theFieldValue == "undefined") || ( theFieldValue == null)) {
                    return null;
                }

                if( !theDataType) {
                    return null;
                }


                var aConvertedFieldValue = theFieldValue;

                switch( theDataType) {

                    case "String":
                        break;

                    case "Int":
                        if( !theFieldValue) {
                            aConvertedFieldValue = 0;
                        }
                        else {
                            try {
                                aConvertedFieldValue = parseInt( theFieldValue);
                            }
                            catch( anException) {
                                aConvertedFieldValue = 0;
                            }
                        }
                        break;


                    case "Number":
                        if( !theFieldValue) {
                            aConvertedFieldValue = 0.0;
                        }
                        else {
                            try {
                                aConvertedFieldValue = parseFloat( theFieldValue);
                            }
                            catch( anException) {
                                aConvertedFieldValue = 0.0;
                            }
                        }
                        break;


                    case "IntYesNo":
                        aConvertedFieldValue = theFieldValue ? 1 : 0;
                        break;


                    case "BoolYesNo":
                        aConvertedFieldValue = ( theFieldValue === true);
                        break;

                    default:
                }

                return aConvertedFieldValue;
            };
            if( fConvertFromEditableValue){}/* CQT */
            aPrototype.fConvertFromEditableValue = fConvertFromEditableValue;








            return aPrototype;

        })();




        var Converter_Constructor = function( theTitle, theIdentifier, theRecorder,
                                              theOwnerCtrl, theTypeConversions, theFixedConversions) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_CommonType.Common_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;
            this._v_Module = null;

            this._v_OwnerCtrl         = null;
            this._v_TypeConversions   = null;
            this._v_FixedConversions  = null;

            this._v_ConversionsCache  = null;

            this._pInit_Converter( theTitle, theIdentifier, theRecorder,
                                   theOwnerCtrl, theTypeConversions, theFixedConversions);
        };
        Converter_Constructor.prototype = aConverter_Prototype;







        var Converter_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_CommonType.Common_Prototype;

            this._v_Prototype = aConverter_Prototype;
            this._v_Type      = null;
            this._v_Module    = null;

            this._v_OwnerCtrl         = null;
            this._v_TypeConversions   = null;
            this._v_FixedConversions  = null;

            this._v_ConversionsCache  = null;
        };
        Converter_SuperPrototypeConstructor.prototype = aConverter_Prototype;



        var aModule = {
            "Converter_Prototype": aConverter_Prototype,
            "Converter_Constructor": Converter_Constructor,
            "Converter_SuperPrototypeConstructor": Converter_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aConverter_Prototype._v_Module = aModule;





        return aModule;
    };







    var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
    if( !anExistingModule) {

        var aModule = aMod_definer(
            theSS_Overrider,
            theSS_CommonType,
            theSS_timeout
        );
        anExistingModule = aModule;

        theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
    }






    return anExistingModule;

}]);







