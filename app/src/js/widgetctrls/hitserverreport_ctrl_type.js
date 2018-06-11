'use strict';

/*
 * hitserverreport_ctrl_type.js
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






angular.module("widgetCtrlsTypes").factory("HitServerReportCtrlType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "ConvertedCtrlType",
function( theSS_typesregistry,
          theSS_Overrider,
          theSS_ConvertedCtrlType) {




    var ModuleName     = "hitserverreport_ctrl_type";
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
            theToInit.DEFAULTTITLE = "HitServerReportCtrlDefaultName";

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






        var aHitServerReportCtrl_Prototype = (function() {


            var aPrototype = new theS_ConvertedCtrlType.ConvertedCtrl_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_SuperPrototype = theS_ConvertedCtrlType.ConvertedCtrl_Prototype;


            aPrototype._v_Type = "HitServerReportCtrl";

            aPrototype._v_Module = null;


            aPrototype._v_HitServerReport       = null;

            aPrototype._v_HitServerMainMessage      = null;
            aPrototype._v_HitServerDetailsMessage   = null;
            aPrototype._v_HitServerExceptionMessage = null;






            var _pInit = function( theTitle, theIdentifier, theRecorder, theScope,
                                   theDomIdPrefix,
                                   theParentCtrl,
                                   theConverter) {

                this._pInit_HitServerReportCtrl( theTitle, theIdentifier, theRecorder, theScope,
                                                 theDomIdPrefix,
                                                 theParentCtrl,
                                                 theConverter);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;









            var _pInit_HitServerReportCtrl = function( theTitle, theIdentifier, theRecorder, theScope,
                                                       theDomIdPrefix,
                                                       theParentCtrl,
                                                       theConverter) {

                /* Delegate on super prototype initialization */
                aPrototype._v_SuperPrototype._pInit_ConvertedCtrl.apply( this, [ theTitle, theIdentifier, theRecorder, theScope,
                    theParentCtrl,
                    theConverter]);

                this._v_Prototype = aPrototype;
                this._v_Type      = this._v_Prototype._v_Type;
                this._v_Module    = aPrototype._v_Module;


                this._v_HitServerReport       = null;

                this._v_HitServerMainMessage      = null;
                this._v_HitServerDetailsMessage   = null;
                this._v_HitServerExceptionMessage = null;

                this.pUpdateHitServerReportMessages();

                if( this._v_HitServerDetailsMessage){}/* CQT */
                if( this._v_HitServerExceptionMessage){}/* CQT */
            };
            if( _pInit_HitServerReportCtrl){}/* CQT */
            aPrototype._pInit_HitServerReportCtrl = _pInit_HitServerReportCtrl;








            var pRegisterHitServerReportCtrlInOwner = function( theOwnerCtrl) {

                if( !theOwnerCtrl) {
                    return;
                }

                if( !this._v_ParentCtrl) {
                    this._v_ParentCtrl = theOwnerCtrl;
                }

                this._v_HitServerReport = theOwnerCtrl.fRegisterHitServerReportCtrl( this);

                this.pUpdateHitServerReportMessages();
            };
            if( pRegisterHitServerReportCtrlInOwner){}/* CQT */
            aPrototype.pRegisterHitServerReportCtrlInOwner = pRegisterHitServerReportCtrlInOwner;







            var pUpdateHitServerReportMessages = function() {

                this._v_HitServerMainMessage      = "";
                this._v_HitServerDetailsMessage   = "";
                this._v_HitServerExceptionMessage = "";

                if( !this._v_HitServerReport) {
                    return;
                }

                if( typeof this._v_HitServerReport == "string") {
                    this._v_HitServerMainMessage = this._v_HitServerReport;
                }
                else {

                    if( this._v_HitServerReport._v_Success) {
                        this._v_HitServerMainMessage += (( this._v_HitServerMainMessage ? " " : "") + "OK");
                    }
                    else {
                        this._v_HitServerMainMessage += (( this._v_HitServerMainMessage ? " " : "") + "ERROR");
                    }


                    if( this._v_HitServerReport._v_OperationKind) {
                        this._v_HitServerMainMessage += (( this._v_HitServerMainMessage ? " " : "") + this._v_HitServerReport._v_OperationKind);
                    }

                    if( this._v_HitServerReport._v_OperationName) {
                        this._v_HitServerMainMessage += (( this._v_HitServerMainMessage ? " " : "") + this._v_HitServerReport._v_OperationName);
                    }


                    if( this._v_HitServerReport._v_Title) {
                        this._v_HitServerMainMessage += (( this._v_HitServerMainMessage ? " " : "") + this._v_HitServerReport._v_Title);
                    }

                    if( !( this._v_HitServerReport._v_UrlParm == null)) {
                        this._v_HitServerMainMessage += (( this._v_HitServerMainMessage ? " " : "") + this._v_HitServerReport._v_UrlParm);
                    }

                    if( !this._v_HitServerReport._v_Success) {

                        if( this._v_HitServerReport._v_OperationStatus) {
                            this._v_HitServerMainMessage += (( this._v_HitServerMainMessage ? " " : "") + this._v_HitServerReport._v_OperationStatus);
                        }

                        if( this._v_HitServerReport._v_OperationDetails) {
                            this._v_HitServerMainMessage += (( this._v_HitServerMainMessage ? " " : "") + this._v_HitServerReport._v_OperationDetails);
                        }

                        if( !( this._v_HitServerReport._v_ServerFailureKind == null)) {

                            this._v_HitServerMainMessage += (( this._v_HitServerMainMessage ? " " : "") + this._v_HitServerReport._v_ServerFailureKind);

                            if( this._v_HitServerReport._v_ServerFailureKind == this.HITSVRFAILURE_REPORTEDEXCEPTION) {

                                if( !( this._v_HitServerReport._v_ServerException == null)) {
                                    this._v_HitServerMainMessage += (( this._v_HitServerMainMessage ? " " : "") + this._v_HitServerReport._v_ServerException);
                                }

                                if( !( this._v_HitServerReport._v_ServerMessage == null)) {
                                    this._v_HitServerMainMessage += (( this._v_HitServerMainMessage ? " " : "") + this._v_HitServerReport._v_ServerMessage);
                                }

                                /*
                                if( !( this._v_HitServerReport._v_ServerTrace == null)) {
                                    this._v_HitServerMainMessage += (( this._v_HitServerMainMessage ? " " : "") + this._v_HitServerReport._v_ServerTrace);
                                }
                                */
                            }

                            else {


                                if( this._v_HitServerReport._v_ServerFailureKind == this.HITSVRFAILURE_AJAX) {

                                    if( !( this._v_HitServerReport._v_AjaxErrorStatus == null)) {
                                        this._v_HitServerMainMessage += (( this._v_HitServerMainMessage ? " " : "") + this._v_HitServerReport._v_AjaxErrorStatus);
                                    }
                                    /*
                                    if( !( this._v_HitServerReport._v_AjaxErrorData == null)) {
                                        this._v_HitServerMainMessage += (( this._v_HitServerMainMessage ? " " : "") + this._v_HitServerReport._v_AjaxErrorData);
                                    }
                                    */
                                }

                            }
                        }
                    }
                }
            };
            if( pUpdateHitServerReportMessages){}/* CQT */
            aPrototype.pUpdateHitServerReportMessages = pUpdateHitServerReportMessages;






            var pClearHitServerReport = function() {

                this._v_HitServerReport = null;

                this.pUpdateHitServerReportMessages();
            };
            if( pClearHitServerReport){}/* CQT */
            aPrototype.pClearHitServerReport = pClearHitServerReport;






            var pSetHitServerReport = function( theHitServerReport) {

                this._v_HitServerReport = theHitServerReport;

                this.pUpdateHitServerReportMessages();
            };
            if( pSetHitServerReport){}/* CQT */
            aPrototype.pSetHitServerReport = pSetHitServerReport;











            var fprDo_Initial = function() {

                this.pUpdateHitServerReportMessages();

                return this.fNewDeferredResolveWithNothingPromise();
            };
            if( fprDo_Initial){}/* CQT */
            aPrototype.fprDo_Initial = fprDo_Initial;









            return aPrototype;

        })();






        var HitServerReportCtrl_Constructor = function( theTitle, theIdentifier, theRecorder, theScope,
                                                        theDomIdPrefix,
                                                        theParentCtrl,
                                                        theConverter) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_ConvertedCtrlType.ConvertedCtrl_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;
            this._v_Module = null;

            this._v_HitServerReport       = null;

            this._v_HitServerMainMessage      = null;
            this._v_HitServerDetailsMessage   = null;
            this._v_HitServerExceptionMessage = null;


            this._pInit_HitServerReportCtrl( theTitle, theIdentifier, theRecorder, theScope,
                                             theDomIdPrefix,
                                             theParentCtrl,
                                             theConverter);
        };
        HitServerReportCtrl_Constructor.prototype = aHitServerReportCtrl_Prototype;







        var HitServerReportCtrl_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_ConvertedCtrlType.ConvertedCtrl_Prototype;

            this._v_Prototype = aHitServerReportCtrl_Prototype;
            this._v_Type      = null;
            this._v_Module    = null;

            this._v_HitServerReport       = null;

            this._v_HitServerMainMessage      = null;
            this._v_HitServerDetailsMessage   = null;
            this._v_HitServerExceptionMessage = null;

        };
        HitServerReportCtrl_SuperPrototypeConstructor.prototype = aHitServerReportCtrl_Prototype;



        var aModule = {
            "HitServerReportCtrl_Prototype": aHitServerReportCtrl_Prototype,
            "HitServerReportCtrl_Constructor": HitServerReportCtrl_Constructor,
            "HitServerReportCtrl_SuperPrototypeConstructor": HitServerReportCtrl_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aHitServerReportCtrl_Prototype._v_Module = aModule;





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







