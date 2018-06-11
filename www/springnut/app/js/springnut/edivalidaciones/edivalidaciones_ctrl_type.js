'use strict';

/*
 * edivalidaciones_ctrl_type.js
 *
 * Creado @author Antonio Carrasco Valero 201409301309
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






angular.module("edivalidacionesTypes").factory("EdivalidacionesCtrlType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "CommonspringnutCtrlType",
    "EdivalidacionesSvce",
    "EdivalidacionesCtrlSpecs",
function( theSS_typesregistry,
          theSS_Overrider,
          theSS_CommonspringnutCtrlType,
          theSS_EdivalidacionesSvce,
          theSS_EdivalidacionesCtrlSpecs) {




    var ModuleName     = "edivalidaciones_ctrl_type";
    var ModulePackages = "springnut/edivalidaciones";
    var ModuleFullName = ModulePackages + "/" + ModuleName;



    var aMod_definer = function( theS_Overrider,
                                 theS_CommonspringnutCtrlType,
                                 theS_EdivalidacionesSvce,
                                 theS_EdivalidacionesCtrlSpecs) {


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
            theToInit.DEFAULTEDIVALIDACIONESCTRLTITLE = "EdivalidacionesCtrlDefaultName";

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









        var aEdivalidacionesCtrl_Prototype = (function() {


            var aPrototype = new theS_CommonspringnutCtrlType.CommonspringnutCtrl_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_SuperPrototype = theS_CommonspringnutCtrlType.CommonspringnutCtrl_Prototype;


            aPrototype._v_Type = "EdivalidacionesCtrl";

            aPrototype._v_Module = null;


            aPrototype._v_EditorsDirtyChangedListeners = null;





            var _pInit = function( theTitle, theIdentifier, theRecorder, theScope,
                                   theParentCtrl,
                                   theConverter) {

                this._pInit_EdivalidacionesCtrl( theTitle, theIdentifier, theRecorder, theScope,
                                                 theParentCtrl,
                                                 theConverter);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_EdivalidacionesCtrl = function( theTitle, theIdentifier, theRecorder, theScope,
                                                       theParentCtrl,
                                                       theConverter,
                                                       theEdivalidacionesCtrlSpecs) {

                /* Delegate on super prototype initialization */
                aPrototype._v_SuperPrototype._pInit_CommonspringnutCtrl.apply( this, [
                    theTitle || this.DEFAULTEDIVALIDACIONESCTRLTITLE,
                    theIdentifier, theRecorder, theScope,
                    theParentCtrl,
                    theConverter,
                    theEdivalidacionesCtrlSpecs
                ]);


                this._v_Prototype = aPrototype;
                this._v_Type      = this._v_Prototype._v_Type;
                this._v_Module    = aPrototype._v_Module;

                this._v_EditorsDirtyChangedListeners = { };

            };
            if( _pInit_EdivalidacionesCtrl){}/* CQT */
            aPrototype._pInit_EdivalidacionesCtrl = _pInit_EdivalidacionesCtrl;






            var pDestroy = function() {

                this._v_EditorsDirtyChangedListeners       = null;

                aPrototype._v_SuperPrototype.pDestroy.apply( this);
            };
            if( pDestroy){}/* CQT */
            aPrototype.pDestroy = pDestroy;







            var pInitStaticTabsContent = function( ) {

                aPrototype._v_SuperPrototype.pInitStaticTabsContent.apply( this);

                if( !this._v_StaticTabs) {
                    return;
                }

                if( !this._v_CtrlSpecs) {
                    return;
                }

                if( !this._v_IsInstrumentacion) {
                    return;
                }

                if( !this._v_CtrlSpecs.STATICTAB_SVCESPECS_NAME) {
                    return;
                }

                var aSvceSpec = null;

                var aAdminoperadoresSvce = this.fEdivalidacionesSvce();
                if( aAdminoperadoresSvce) {
                    if( aAdminoperadoresSvce.fActiveOperationSpecs) {
                        var someOperationSpecs = aAdminoperadoresSvce.fActiveOperationSpecs();
                        if( someOperationSpecs) {
                            aSvceSpec = JSON.stringify( someOperationSpecs, null, 4);
                        }
                    }
                }
                this._v_StaticTabs[ this._v_CtrlSpecs.STATICTAB_SVCESPECS_NAME] = aSvceSpec;
            };
            if( pInitStaticTabsContent){}/* CQT */
            aPrototype.pInitStaticTabsContent = pInitStaticTabsContent;









            var pInitialObtainConverter = function() {
            };
            if( pInitialObtainConverter){}/* CQT */
            aPrototype.pInitialObtainConverter = pInitialObtainConverter;












            var fRegisterNewEditorCtrl = function( theEditorCtrl, theNombreEditor) {

                if( !aPrototype._v_SuperPrototype.fRegisterNewEditorCtrl.apply( this, [ theEditorCtrl, theNombreEditor])) {
                    return false;
                }

                if( ( theNombreEditor == theS_EdivalidacionesCtrlSpecs.CONDICIONDEVALIDACION_NAME)
                    || ( theNombreEditor == theS_EdivalidacionesCtrlSpecs.CONDICIONDEVALIDACIONDECRITERIO_NAME)
                    || ( theNombreEditor == theS_EdivalidacionesCtrlSpecs.CONDICIONNECESITANDOACTUALIZACION_NAME)) {

                    var anEditor =  this._v_EditorsDirtyChangedListeners[ theNombreEditor];
                    if( anEditor) {
                        return true;
                    }

                    var aDirtyChangedListener = this.fNewCondicionesEditorDirtyChangedListener( theEditorCtrl, theNombreEditor);
                    if( !aDirtyChangedListener) {
                        return true;
                    }

                    theEditorCtrl.pAddDirtyChangeListener( aDirtyChangedListener);

                    this._v_EditorsDirtyChangedListeners[ theNombreEditor] = aDirtyChangedListener;
                }

                return true;
            };
            if( fRegisterNewEditorCtrl){}/* CQT */
            aPrototype.fRegisterNewEditorCtrl = fRegisterNewEditorCtrl;









            var fRegisterNewCreatorCtrl = function( theCreatorCtrl, theNombreCreator) {

                if( !aPrototype._v_SuperPrototype.fRegisterNewCreatorCtrl.apply( this, [ theCreatorCtrl, theNombreCreator])) {
                    return false;
                }

                if( ( theNombreCreator == theS_EdivalidacionesCtrlSpecs.CREAR_CONDICIONDEVALIDACION_NAME)
                    || ( theNombreCreator == theS_EdivalidacionesCtrlSpecs.CREAR_CONDICIONDEVALIDACIONDECRITERIO_NAME) ) {

                    var anCreator =  this._v_EditorsDirtyChangedListeners[ theNombreCreator];
                    if( anCreator) {
                        return true;
                    }

                    var aDirtyChangedListener = this.fNewCondicionesCreatorDirtyChangedListener( theCreatorCtrl, theNombreCreator);
                    if( !aDirtyChangedListener) {
                        return true;
                    }

                    theCreatorCtrl.pAddDirtyChangeListener( aDirtyChangedListener);

                    this._v_EditorsDirtyChangedListeners[ theNombreCreator] = aDirtyChangedListener;
                }

                return true;
            };
            if( fRegisterNewCreatorCtrl){}/* CQT */
            aPrototype.fRegisterNewCreatorCtrl = fRegisterNewCreatorCtrl;










            var fNewCondicionesEditorDirtyChangedListener = function( theEditorCtrl, theNombreEditor) {
                return this.fNewCondicionesDirtyChangedListener( theEditorCtrl, theNombreEditor, false);
            };
            if( fNewCondicionesEditorDirtyChangedListener){}/* CQT */
            aPrototype.fNewCondicionesEditorDirtyChangedListener = fNewCondicionesEditorDirtyChangedListener;







            var fNewCondicionesCreatorDirtyChangedListener = function( theEditorCtrl, theNombreEditor) {
                return this.fNewCondicionesDirtyChangedListener( theEditorCtrl, theNombreEditor, true);
            };
            if( fNewCondicionesCreatorDirtyChangedListener){}/* CQT */
            aPrototype.fNewCondicionesCreatorDirtyChangedListener = fNewCondicionesCreatorDirtyChangedListener;








            var fNewCondicionesDirtyChangedListener = function( theEditorCtrl, theNombreEditor, theIsCreator) {

                var aMethodName = this._v_Type + " fNewCondicionesDirtyChangedListener";

                var aNombreEditor = theNombreEditor;
                var anIsCreator   = theIsCreator;

                var aThis = this;
                return ( function() {
                    var aThis_here = aThis;
                    var aNombreEditor_here = aNombreEditor;
                    var anIsCreator_here   = anIsCreator;

                    var aListener = (function( theFieldName, theFieldValue) {

                        var anEditor = null;
                        if( anIsCreator_here) {
                            anEditor = aThis_here.fCreatorCtrlNamed( aNombreEditor_here);
                        }
                        else {
                            anEditor = aThis_here.fEditorCtrlNamed(  aNombreEditor_here);
                        }
                        if( anEditor) {

                            var aChangeNameValue = {};
                            aChangeNameValue[ theFieldName] = theFieldValue;

                            var aToAddToEditor = null;
                            var aFieldToReset  = null;

                            switch( theFieldName) {

                                case "camposDisponibles":

                                    var aSimbolo = theFieldValue[ "vSimbolo"];
                                    if( aSimbolo) {
                                        aToAddToEditor = aSimbolo.toLowerCase();
                                    }
                                    aFieldToReset = theFieldName;
                                    break;


                                case "funcionesDisponibles":
                                    var aSimbolo = theFieldValue[ "vSimbolo"];
                                    if( aSimbolo) {
                                        aToAddToEditor = aSimbolo + "( )";
                                    }
                                    aFieldToReset = theFieldName;
                                    break;


                                case "especialesDisponibles":
                                    var aSimbolo = theFieldValue[ "vSimbolo"];
                                    if( aSimbolo) {
                                        aToAddToEditor = aSimbolo.toUpperCase();
                                    }
                                    aFieldToReset = theFieldName;
                                    break;


                                case "operadoresDisponibles":
                                    var aSimbolo = theFieldValue[ "vSimbolo"];
                                    if( aSimbolo) {
                                        aToAddToEditor = aSimbolo;
                                    }
                                    aFieldToReset = theFieldName;
                                    break;

                                default:
                            }

                            if( aToAddToEditor) {
                                var someEditableFields = anEditor.fEditableFields();
                                if( someEditableFields) {
                                    var aCondicion = someEditableFields[ "condicion"];
                                    if( aCondicion) {
                                        aCondicion += ( " " + aToAddToEditor);
                                    }
                                    else {
                                        aCondicion = aToAddToEditor;
                                    }
                                }

                                anEditor.pForceFieldValue( "condicion", aCondicion);
                            }

                            if( aFieldToReset) {
                                anEditor.pForceFieldReset( aFieldToReset);
                            }

                        }


                        return aThis_here.fNewDeferredResolveWithFieldsPromise( aChangeNameValue);
                    });


                    aListener.fIdentifyingWithTitleJSON = function() {

                        var aIdentifiyingWithTitleJSON = aThis_here.fIdentifyingWithTitleJSON();

                        var anIdentifyingJSON = {
                            "type": aMethodName,
                            "title": aIdentifiyingWithTitleJSON,
                            "theNombreLista": theNombreLista
                        };
                        if( anIdentifyingJSON){}/* CQT */
                        return anIdentifyingJSON;
                    };
                    aListener.fIdentifyingJSON = aListener.fIdentifyingWithTitleJSON;


                    return aListener;

                })();
            };
            if( fNewCondicionesDirtyChangedListener){}/* CQT */
            aPrototype.fNewCondicionesDirtyChangedListener = fNewCondicionesDirtyChangedListener;







            var fprDo_InitialExtra = function() {

                var aPromise = null;

                this.pInitStaticTabsContent();

                this.pObtainConverter();

                if( this._v_TabsTopCtrl) {
                    aPromise = this._v_TabsTopCtrl.fprDo_Initial().
                        then( aPrototype._v_SuperPrototype.fprDo_InitialExtra.bind( this));
                }
                else {
                    aPromise = aPrototype._v_SuperPrototype.fprDo_InitialExtra.apply( this);
                }
                if( aPromise){}/* CQT */

                return aPromise;
            };
            if( fprDo_InitialExtra){}/* CQT */
            aPrototype.fprDo_InitialExtra = fprDo_InitialExtra;







            var fprDo_Initial = function() {

                var aPromise = this.fprDo_DisableUIhandlers().
                    then( this.fprDo_CheckSessionLoggedAuthenticated.bind( this)).
                    then( this.fprDo_InitialExtra.bind( this)).
                    then( this.fprDo_LoadInitialGrids.bind( this)).
                    then( this.fprDo_LoadInitialEditors.bind( this))

                    ['finally']( this.fprDo_EnableUIhandlers.bind( this));

                if( aPromise){}/* CQT */

                return aPromise;
            };
            if( fprDo_Initial){}/* CQT */
            aPrototype.fprDo_Initial = fprDo_Initial;






            var fEdivalidacionesSvce = function( ) {

                return theS_EdivalidacionesSvce;
            };
            if( fEdivalidacionesSvce){}/* CQT */
            aPrototype.fEdivalidacionesSvce = fEdivalidacionesSvce;












            var fprDo_CheckSessionLoggedAuthenticated = function() {
                return this.fNewDeferredResolveWithNothingPromise();
            };
            if( fprDo_CheckSessionLoggedAuthenticated){}/* CQT */
            aPrototype.fprDo_CheckSessionLoggedAuthenticated = fprDo_CheckSessionLoggedAuthenticated;











            return aPrototype;

        })();




        var EdivalidacionesCtrl_Constructor = function( theTitle, theIdentifier, theRecorder, theScope,
                                                        theParentCtrl,
                                                        theConverter) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_CommonspringnutCtrlType.CommonspringnutCtrl_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;
            this._v_Module = null;

            this._v_EditorsDirtyChangedListeners = null;

            this._pInit_EdivalidacionesCtrl( theTitle, theIdentifier, theRecorder, theScope,
                                             theParentCtrl,
                                             theConverter);
        };
        EdivalidacionesCtrl_Constructor.prototype = aEdivalidacionesCtrl_Prototype;





        var EdivalidacionesCtrl_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_CommonspringnutCtrlType.CommonspringnutCtrl_Prototype;

            this._v_Prototype = aEdivalidacionesCtrl_Prototype;
            this._v_Type      = null;
            this._v_Module    = null;

            this._v_EditorsDirtyChangedListeners = null;
        };
        EdivalidacionesCtrl_SuperPrototypeConstructor.prototype = aEdivalidacionesCtrl_Prototype;



        var aModule = {
            "EdivalidacionesCtrl_Prototype": aEdivalidacionesCtrl_Prototype,
            "EdivalidacionesCtrl_Constructor": EdivalidacionesCtrl_Constructor,
            "EdivalidacionesCtrl_SuperPrototypeConstructor": EdivalidacionesCtrl_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aEdivalidacionesCtrl_Prototype._v_Module = aModule;





        return aModule;
    };







    var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
    if( !anExistingModule) {

        var aModule = aMod_definer(
            theSS_Overrider,
            theSS_CommonspringnutCtrlType,
            theSS_EdivalidacionesSvce,
            theSS_EdivalidacionesCtrlSpecs
        );
        anExistingModule = aModule;

        theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
    }






    return anExistingModule;

}]);







