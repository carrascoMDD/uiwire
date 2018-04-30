'use strict';

/*
 * actions_ctrl_type.js
 *
 * Creado @author Antonio Carrasco Valero 201410030802
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






angular.module("widgetCtrlsTypes").factory("ActionsCtrlType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "ConvertedCtrlType",
    "IdentifierType",
    "ActionReport",
function( theSS_typesregistry,
          theSS_Overrider,
          theSS_ConvertedCtrlType,
          theSS_IdentifierType,
          theSS_ActionReport) {




    var ModuleName     = "actions_ctrl_type";
    var ModulePackages = "widgetctrls";
    var ModuleFullName = ModulePackages + "/" + ModuleName;



    var aMod_definer = function( theS_Overrider,
                                 theS_ConvertedCtrlType,
                                 theS_IdentifierType,
                                 theS_ActionReport) {


        if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}








        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.LOGACTIONEVENTS = true;

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
            theToInit.DEFAULTTITLE = "ActionsCtrlDefaultName";


            theToInit.ACTIONKIND_CREATE = "CREATE";
            theToInit.ACTIONKIND_CHANGE = "CHANGE";
            theToInit.ACTIONKIND_DELETE = "DELETE";

            theToInit.ACTIONKINDS = [
                theToInit.ACTIONKIND_CREATE,
                theToInit.ACTIONKIND_CHANGE,
                theToInit.ACTIONKIND_DELETE
            ];


            theToInit.ACTIONFAILURE_INTERNAL       = "ACTIONFAILURE_INTERNAL";
            theToInit.ACTIONFAILURE_PROMISECATCH   = "ACTIONFAILURE_PROMISECATCH";
            theToInit.ACTIONFAILURE_HITSERVERERROR = "ACTIONFAILURE_HITSERVERERROR";


            theToInit.ACTIONFAILURES = [
                theToInit.ACTIONFAILURE_INTERNAL,
                theToInit.ACTIONFAILURE_PROMISECATCH,
                theToInit.ACTIONFAILURE_HITSERVERERROR
            ];



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








        var aActionsCtrl_Prototype = (function() {


            var aPrototype = new theS_ConvertedCtrlType.ConvertedCtrl_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_SuperPrototype = theS_ConvertedCtrlType.ConvertedCtrl_Prototype;


            aPrototype._v_Type = "ActionsCtrl";

            aPrototype._v_Module = null;


            aPrototype._v_ActionReports      = null;
            aPrototype._v_ActionsIdentifier  = null;



            var _pInit = function( theTitle, theIdentifier, theRecorder, theScope,
                                   theDomIdPrefix,
                                   theParentCtrl,
                                   theConverter) {

                this._pInit_ActionsCtrl( theTitle, theIdentifier, theRecorder, theScope,
                                         theDomIdPrefix,
                                         theParentCtrl,
                                         theConverter);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;









            var _pInit_ActionsCtrl = function( theTitle, theIdentifier, theRecorder, theScope,
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

                this._v_ActionReports      = [ ];
                this._v_ReportsIdentifier = new theS_IdentifierType.Identifier_Constructor( "(For-" + this._v_Title + ")");


                if( this._v_ActionsIdentifier){}/* CQT */
            };
            if( _pInit_ActionsCtrl){}/* CQT */
            aPrototype._pInit_ActionsCtrl = _pInit_ActionsCtrl;








            var fCreateAndRegisterActionReport = function(
                theActionKind,
                theActionName,
                theWith,
                theWithDescribe,
                theForm,
                theFormDescribe,
                theHitServerReport,
                thePerformed,
                theSuccess,
                theFailureKind,
                theFailureDetails
                ) {

                var aReportId = this._v_ReportsIdentifier.fReserveId();

                var aReport = new theS_ActionReport.ActionReport_Constructor(
                    this,
                    aReportId,
                    theActionKind,
                    theActionName,
                    theWith,
                    theWithDescribe,
                    theForm,
                    theFormDescribe,
                    theHitServerReport,
                    thePerformed,
                    theSuccess,
                    theFailureKind,
                    theFailureDetails
                );

                this._v_ActionReports.push( aReport);

                if( this.LOGACTIONEVENTS) {
                    this.fRecord( "fCreateAndRegisterActionReport", this.EVENTKIND_ACTIONREPORT_CREATED, aReport, null, null);
                }

                this.pBubbleActionReport( aReport);

                return aReport;
            };
            if( fCreateAndRegisterActionReport){}/* CQT */
            aPrototype.fCreateAndRegisterActionReport = fCreateAndRegisterActionReport;







            var pReportActionSuccess = function( theActionReport) {

                if( !theActionReport) {
                    return;
                }


                theActionReport._v_LastTimestamp =  Date.now();
                theActionReport._v_Performed     = true;
                theActionReport._v_Success       = true;

                if( this.LOGACTIONEVENTS) {
                    this.fRecord( "pReportActionSuccess", this.EVENTKIND_ACTIONREPORT_SUCCESS, theActionReport, null, null);
                }

                this.pBubbleActionReport( theActionReport);
            };
            if( pReportActionSuccess){}/* CQT */
            aPrototype.pReportActionSuccess = pReportActionSuccess;







            var pReportFailedAction = function( theActionReport, theFailureKind, theFailureDetails) {

                if( !theActionReport) {
                    return;
                }


                theActionReport._v_LastTimestamp =  Date.now();
                theActionReport._v_Performed     = true;
                theActionReport._v_Success       = false;
                theActionReport._v_FailureKind   = theFailureKind;

                if( theFailureDetails) {
                    if( !( theFailureDetails === this)) {

                        if( theFailureDetails._v_Type == "HitServerReport") {
                            theActionReport._v_HitServerReport = theFailureDetails;
                            theActionReport._v_FailureKind   = this.ACTIONFAILURE_HITSERVERERROR;

                        }
                        else {
                            theActionReport._v_FailureDetails = theFailureDetails;
                        }
                    }
                }

                if( this.LOGACTIONEVENTS) {
                    this.fRecord( "pReportFailedAction", this.EVENTKIND_ACTIONREPORT_FAILED, theActionReport, theFailureKind, null);
                }

                this.pBubbleActionReport( theActionReport);
            };
            if( pReportFailedAction){}/* CQT */
            aPrototype.pReportFailedAction = pReportFailedAction;









            var pBubbleActionReport = function( theActionReport) {

                aPrototype._v_SuperPrototype.pBubbleActionReport.apply( this, [ theActionReport]);
            };
            if( pBubbleActionReport){}/* CQT */
            aPrototype.pBubbleActionReport = pBubbleActionReport;









            return aPrototype;

        })();






        var ActionsCtrl_Constructor = function( theTitle, theIdentifier, theRecorder, theScope,
                                                theDomIdPrefix,
                                                theParentCtrl,
                                                theConverter) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_ConvertedCtrlType.ConvertedCtrl_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;
            this._v_Module = null;

            this._v_ActionReports     = null;
            this._v_ActionsIdentifier = null;

            this._pInit_ActionsCtrl( theTitle, theIdentifier, theRecorder, theScope,
                                     theDomIdPrefix,
                                     theParentCtrl,
                                     theConverter);
        };
        ActionsCtrl_Constructor.prototype = aActionsCtrl_Prototype;







        var ActionsCtrl_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_ConvertedCtrlType.ConvertedCtrl_Prototype;

            this._v_Prototype = aActionsCtrl_Prototype;
            this._v_Type      = null;
            this._v_Module    = null;

            this._v_ActionReports     = null;
            this._v_ActionsIdentifier = null;
        };
        ActionsCtrl_SuperPrototypeConstructor.prototype = aActionsCtrl_Prototype;



        var aModule = {
            "ActionsCtrl_Prototype": aActionsCtrl_Prototype,
            "ActionsCtrl_Constructor": ActionsCtrl_Constructor,
            "ActionsCtrl_SuperPrototypeConstructor": ActionsCtrl_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aActionsCtrl_Prototype._v_Module = aModule;





        return aModule;
    };







    var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
    if( !anExistingModule) {

        var aModule = aMod_definer(
            theSS_Overrider,
            theSS_ConvertedCtrlType,
            theSS_IdentifierType,
            theSS_ActionReport
        );
        anExistingModule = aModule;

        theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
    }






    return anExistingModule;

}]);







