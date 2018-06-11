'use strict';

/*
 * lastaction_ctrl_type.js
 *
 * Creado @author Antonio Carrasco Valero 201410240137
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






angular.module("widgetCtrlsTypes").factory("LastActionCtrlType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "ConvertedCtrlType",
function( theSS_typesregistry,
          theSS_Overrider,
          theSS_ConvertedCtrlType) {




    var ModuleName     = "lastaction_ctrl_type";
    var ModulePackages = "widgetctrls";
    var ModuleFullName = ModulePackages + "/" + ModuleName;



    var aMod_definer = function( theS_Overrider,
                                 theS_ConvertedCtrlType) {


        if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}








        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
            }
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
            theToInit.DEFAULTTITLE = "LastActionCtrlDefaultName";

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






        var aLastActionCtrl_Prototype = (function() {


            var aPrototype = new theS_ConvertedCtrlType.ConvertedCtrl_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_SuperPrototype = theS_ConvertedCtrlType.ConvertedCtrl_Prototype;


            aPrototype._v_Type = "LastActionCtrl";

            aPrototype._v_Module = null;


            aPrototype._v_LastActionReport       = null;

            aPrototype._v_MainMessage      = null;
            aPrototype._v_DetailsMessage   = null;
            aPrototype._v_ExceptionMessage = null;

            aPrototype._v_HitServerReportCtrl = null;




            var _pInit = function( theTitle, theIdentifier, theRecorder, theScope,
                                   theDomIdPrefix,
                                   theParentCtrl,
                                   theConverter) {

                this._pInit_LastActionCtrl( theTitle, theIdentifier, theRecorder, theScope,
                                            theDomIdPrefix,
                                            theParentCtrl,
                                            theConverter);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;









            var _pInit_LastActionCtrl = function( theTitle, theIdentifier, theRecorder, theScope,
                                                  theDomIdPrefix,
                                                  theParentCtrl,
                                                  theConverter) {

                /* Delegate on super prototype initialization */
                aPrototype._v_SuperPrototype._pInit_ConvertedCtrl.apply( this, [ theTitle, theIdentifier, theRecorder, theScope,
                                                                                 theDomIdPrefix,
                                                                                 theParentCtrl,
                                                                                 theConverter]);

                this._v_Prototype = aPrototype;
                this._v_Type      = this._v_Prototype._v_Type;
                this._v_Module    = aPrototype._v_Module;


                this._v_LastActionReport       = null;

                this._v_MainMessage      = null;
                this._v_DetailsMessage   = null;
                this._v_ExceptionMessage = null;

                this._v_HitServerReportCtrl = null;

                this.pUpdateLastActionMessages();

                if( this._v_DetailsMessage){}/* CQT */
                if( this._v_ExceptionMessage){}/* CQT */
            };
            if( _pInit_LastActionCtrl){}/* CQT */
            aPrototype._pInit_LastActionCtrl = _pInit_LastActionCtrl;








            var pRegisterLastActionCtrlInOwner = function( theOwnerCtrl) {

                if( !theOwnerCtrl) {
                    return;
                }

                if( !this._v_ParentCtrl) {
                    this._v_ParentCtrl = theOwnerCtrl;
                }

                theOwnerCtrl.pRegisterLastActionCtrl( this);

                this.pUpdateLastActionMessages();
            };
            if( pRegisterLastActionCtrlInOwner){}/* CQT */
            aPrototype.pRegisterLastActionCtrlInOwner = pRegisterLastActionCtrlInOwner;







            var fRegisterHitServerReportCtrl = function( theHitServerReportCtrl) {

                if( !theHitServerReportCtrl) {
                    return;
                }

                this._v_HitServerReportCtrl = theHitServerReportCtrl;

                return this._v_LastActionReport._v_HitServerReport;
            };
            if( fRegisterHitServerReportCtrl){}/* CQT */
            aPrototype.fRegisterHitServerReportCtrl = fRegisterHitServerReportCtrl;






            var pClearLastActionReport = function() {

                this._v_LastActionReport = null;

                if( this._v_HitServerReportCtrl) {
                    this._v_HitServerReportCtrl.pClearHitServerReport();
                }

                this.pUpdateLastActionMessages();
            };
            if( pClearLastActionReport){}/* CQT */
            aPrototype.pClearLastActionReport = pClearLastActionReport;






            var pSetLastActionReport = function( theLastActionReport) {

                this._v_LastActionReport = theLastActionReport;

                if( this._v_HitServerReportCtrl) {
                    if( this._v_LastActionReport._v_HitServerReport) {
                        this._v_HitServerReportCtrl.pSetHitServerReport( this._v_LastActionReport._v_HitServerReport);
                    }
                    else {
                        this._v_HitServerReportCtrl.pClearHitServerReport();
                    }
                }

                this.pUpdateLastActionMessages();
            };
            if( pSetLastActionReport){}/* CQT */
            aPrototype.pSetLastActionReport = pSetLastActionReport;











            var pUpdateLastActionMessages = function() {

                this._v_MainMessage      = "";
                this._v_DetailsMessage   = "";
                this._v_ExceptionMessage = "";

                if( !this._v_LastActionReport) {
                    return;
                }

                if( typeof this._v_LastActionReport == "string") {
                    this._v_MainMessage = this._v_LastActionReport;
                }
                else {

                    if( !this._v_LastActionReport._v_Performed) {
                        return;
                    }

                    if( this._v_LastActionReport._v_Success) {
                        this._v_MainMessage += (( this._v_MainMessage ? " " : "") + "OK");
                    }
                    else {
                        this._v_MainMessage += (( this._v_MainMessage ? " " : "") + "ERROR");
                    }

                    if( this._v_LastActionReport._v_ActionKind) {
                        this._v_MainMessage += (( this._v_MainMessage ? " " : "") + this._v_LastActionReport._v_ActionKind);
                    }

                    if( this._v_LastActionReport._v_ActionName) {
                        this._v_MainMessage += (( this._v_MainMessage ? " " : "") + this._v_LastActionReport._v_ActionName);
                    }

                    if( !( this._v_LastActionReport._v_With == null)) {
                        if( !( this._v_LastActionReport._v_WithDescribe == null)) {
                            var aWithDescribeLabel    = this._v_LastActionReport._v_WithDescribe.fieldLabel;
                            var aWithDescribeParmName = this._v_LastActionReport._v_WithDescribe.parmName;
                            if( aWithDescribeParmName) {

                                var aWithDescribeValue = this._v_LastActionReport._v_With[ aWithDescribeParmName];
                                if( !( typeof aWithDescribeValue == "undefined") && !( aWithDescribeValue == null)) {
                                    this._v_MainMessage += (( this._v_MainMessage ? " " : "") + aWithDescribeLabel + "=" + aWithDescribeValue);
                                }
                            }
                        }
                        else {
                            this._v_MainMessage += (( this._v_MainMessage ? " " : "") + this._v_LastActionReport._v_With);
                        }
                    }


                    if( !( this._v_LastActionReport._v_Form == null) && !( this._v_LastActionReport._v_FormDescribe == null)) {

                        var aNumFormDescribes = this._v_LastActionReport._v_FormDescribe.length;
                        for( var aFormDescribeIdx=0; aFormDescribeIdx < aNumFormDescribes; aFormDescribeIdx++) {

                            var aFormDescribe = this._v_LastActionReport._v_FormDescribe[ aFormDescribeIdx];
                            if( aFormDescribe) {

                                var aFormDescribeLabel    = aFormDescribe.fieldLabel;
                                var aFormDescribeParmName = aFormDescribe.parmName;
                                if( aFormDescribeParmName) {

                                    var aFormDescribeValue = this._v_LastActionReport._v_Form[ aFormDescribeParmName];
                                    if( !( typeof aFormDescribeValue == "undefined") && !( aFormDescribeValue == null)) {
                                        this._v_MainMessage += (( this._v_MainMessage ? " " : "") + aFormDescribeLabel + "=" + aFormDescribeValue);
                                    }
                                }
                            }
                        }
                    }


                    if( !this._v_LastActionReport._v_Success) {

                        var anIsNoAutorizado = false;

                        if( !( this._v_LastActionReport._v_FailureDetails == null)) {

                            var aFailureDetailsErrorStatus = this._v_LastActionReport._v_FailureDetails [ "theErrorStatus"];
                            var aFailureDetailsErrorData   = this._v_LastActionReport._v_FailureDetails [ "theErrorData"];

                            if( ( aFailureDetailsErrorStatus == 403)
                                || ( aFailureDetailsErrorData &&  aFailureDetailsErrorData[ "vTipo"] && ( aFailureDetailsErrorData[ "vTipo"] == "NoAutorizado"))) {
                                anIsNoAutorizado = true;
                            }

                            if( anIsNoAutorizado) {
                                this._v_MainMessage += (( this._v_MainMessage ? " " : "") + "NO AUTORIZADO");

                                var aRutaNoAutorizada = null;
                                if( aFailureDetailsErrorData) {
                                    aRutaNoAutorizada = aFailureDetailsErrorData[ "vRutaSolicitada"];
                                    if( aRutaNoAutorizada) {
                                        this._v_MainMessage += (( this._v_MainMessage ? " " : "") + aRutaNoAutorizada);
                                    }
                                }
                            }
                        }

                        if( !anIsNoAutorizado) {
                            if( !( this._v_LastActionReport._v_FailureKind == null)) {
                                this._v_MainMessage += (( this._v_MainMessage ? " " : "") + this._v_LastActionReport._v_FailureKind);
                            }
                        }
                    }
                }
            };
            if( pUpdateLastActionMessages){}/* CQT */
            aPrototype.pUpdateLastActionMessages = pUpdateLastActionMessages;







            var fprDo_Initial = function() {

                this.pUpdateLastActionMessages();

                return this.fNewDeferredResolveWithNothingPromise();
            };
            if( fprDo_Initial){}/* CQT */
            aPrototype.fprDo_Initial = fprDo_Initial;









            return aPrototype;

        })();






        var LastActionCtrl_Constructor = function( theTitle, theIdentifier, theRecorder, theScope,
                                                   theDomIdPrefix,
                                                   theParentCtrl,
                                                   theConverter) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_ConvertedCtrlType.ConvertedCtrl_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;
            this._v_Module = null;

            this._v_LastActionReport       = null;

            this._v_MainMessage      = null;
            this._v_DetailsMessage   = null;
            this._v_ExceptionMessage = null;

            this._v_HitServerReportCtrl = null;

            this._pInit_LastActionCtrl( theTitle, theIdentifier, theRecorder, theScope,
                                        theDomIdPrefix,
                                        theParentCtrl,
                                        theConverter);
        };
        LastActionCtrl_Constructor.prototype = aLastActionCtrl_Prototype;







        var LastActionCtrl_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_ConvertedCtrlType.ConvertedCtrl_Prototype;

            this._v_Prototype = aLastActionCtrl_Prototype;
            this._v_Type      = null;
            this._v_Module    = null;

            this._v_LastActionReport       = null;

            this._v_MainMessage      = null;
            this._v_DetailsMessage   = null;
            this._v_ExceptionMessage = null;

            this._v_HitServerReportCtrl = null;

        };
        LastActionCtrl_SuperPrototypeConstructor.prototype = aLastActionCtrl_Prototype;



        var aModule = {
            "LastActionCtrl_Prototype": aLastActionCtrl_Prototype,
            "LastActionCtrl_Constructor": LastActionCtrl_Constructor,
            "LastActionCtrl_SuperPrototypeConstructor": LastActionCtrl_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aLastActionCtrl_Prototype._v_Module = aModule;





        return aModule;
    };







    var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
    if( !anExistingModule) {

        var aModule = aMod_definer(
            theSS_Overrider,
            theSS_ConvertedCtrlType
        );
        anExistingModule = aModule;

        theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
    }






    return anExistingModule;

}]);







