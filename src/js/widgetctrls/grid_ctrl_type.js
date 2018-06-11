'use strict';

/*
 * grid_ctrl_type.js
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






angular.module("widgetCtrlsTypes").factory("GridCtrlType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "MastereableCtrlType",
    "CssKeys",
    "$q",
    "$timeout",
function( theSS_typesregistry,
          theSS_Overrider,
          theSS_MastereableCtrlType,
          theSS_CssKeys,
          theSS_q,
          theSS_timeout) {




    var ModuleName     = "grid_ctrl_type";
    var ModulePackages = "widgetctrls";
    var ModuleFullName = ModulePackages + "/" + ModuleName;



    var aMod_definer = function( theS_Overrider,
                                 theS_MastereableCtrlType,
                                 theS_CssKeys,
                                 $q,
                                 $timeout) {


        if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}








        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }



            theToInit.MAXPAGESIZEHARDLIMIT = 5000;

            theToInit.MAXPAGESIZEDEFAULT   = 500;
            
            
            

            theToInit.SCROLLROWINTOVIEW          = true;
            theToInit.SCROLLSELECTEDROWINTOVIEW  = true;


            theToInit.REFRESHDELAYMILLIS = 100;

            theToInit.LOGEVENTS                        = true;
            theToInit.LOGREGISTRATION                  = true;
            theToInit.LOGREGISTRATIONSPEC              = false;
            theToInit.LOGADDROWSCHANGELISTENER         = true;
            theToInit.LOGREMOVEROWSCHANGELISTENER      = true;
            theToInit.LOGADDSELECTIONCHANGELISTENER    = true;
            theToInit.LOGREMOVESELECTIONCHANGELISTENER = true;
            theToInit.LOGADDACTIONHAPPENEDLISTENER     = true;
            theToInit.LOGREMOVEACTIONHAPPENEDLISTENER  = true;
            theToInit.LOGACLEANUPROWS                  = true;
            theToInit.LOGACLEANUPSELECTION             = true;
            theToInit.LOGRETRIEVEROWS                  = true;
            theToInit.LOGRETRIEVEDROWS                 = false;
            theToInit.LOGCONTENTCHANGE                 = true;
            theToInit.LOGSELECTIONCHANGE               = true;
            theToInit.LOGUPDATEROW                     = true;
            theToInit.LOGUPDATEROWDATA                 = true;
            theToInit.LOGINSERTED                      = true;
            theToInit.LOGINSERTEDDATA                  = true;
            theToInit.LOGDELETED                       = true;
            theToInit.LOGCHANGED                       = true;

            theToInit.LOGDELETETRIGGERLISTENED         = true;

            theToInit.LOGFIELDSACCESSFUNCTIONINVOCATIONS = false;


            theToInit.ACTIONRESULT_CREATED = "Creación con éxito";

            theToInit.ACTIONRESULT_DELETED = "Eliminación con éxito";

            theToInit.ACTIONRESULT_CHANGED = "Modificación con éxito";


            theToInit.RENDERDIRECTDOM = false;


            theToInit.GRIDHEIGHT_FACTOR_MIN     = 1;
            theToInit.GRIDHEIGHT_FACTOR_MAX     = 40;
            theToInit.GRIDHEIGHT_FACTOR_INITIAL = 2;

            theToInit.GRIDHEIGHT_UNITPIXELS = 120;

            theToInit.RESIZEDGRIDWAITTOAPLY = 50;


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
            theToInit.DEFAULTTITLE = "GridCtrlDefaultName";

            theToInit.RANDOMCLASS_PRECISSION = 1000000000;
            theToInit.CELLRANDOMCLASS_PREFIX = "GridCtrlRnd_";
            theToInit.ROWRANDOMCLASS_PREFIX  = "GridCtrlRowsRnd_";


            theToInit.MAXGRIDDISPLAYVALUELEN = 4096;

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






        var aGridCtrl_Prototype = (function() {


            var aPrototype = new theS_MastereableCtrlType.MastereableCtrl_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_SuperPrototype = theS_MastereableCtrlType.MastereableCtrl_Prototype;


            aPrototype._v_Type = "GridCtrl";

            aPrototype._v_Module = null;


            aPrototype._v_GridName        = null;
            aPrototype._v_GridLabel       = null;
            aPrototype._v_Labels          = null;
            aPrototype._v_Fields          = null;
            aPrototype._v_HiddenFields    = null;
            aPrototype._v_DataTypes       = null;
            aPrototype._v_GridClasses     = null;
            aPrototype._v_ColumnClasses   = null;
            aPrototype._v_RetrievalTarget = null;
            aPrototype._v_Retrieval       = null;
            aPrototype._v_With            = null;
            aPrototype._v_Query           = null;
            aPrototype._v_AutoSelectIndex = null;
            aPrototype._v_KeyField        = null;
            aPrototype._v_EditorName      = null;
            aPrototype._v_CreatorName     = null;
            aPrototype._v_DeleteTarget    = null;
            aPrototype._v_Delete          = null;
            aPrototype._v_DeleteWith      = null;
            aPrototype._v_DeleteParm      = null;
            aPrototype._v_DeleteSucessIfNotExistsParm = null;
            aPrototype._v_DeleteQuery     = null;

            aPrototype._v_CreateRoles     = null;
            aPrototype._v_DeleteRoles     = null;
            aPrototype._v_HasAnyCreateRoles = null;
            aPrototype._v_HasAnyDeleteRoles = null;

            aPrototype._v_Rows      = null;
            aPrototype._v_Selection = null;

            aPrototype._v_RowsChangeListeners      = null;
            aPrototype._v_SelectionChangeListeners = null;
            aPrototype._v_ActionHappenedListeners  = null;

            aPrototype._v_InhibitSelectionChangeNotifications = null;

            aPrototype._v_RowCssCache  = null;
            aPrototype._v_CellCssCache = null;





            aPrototype._v_HeaderCellCssCache   = null;
            aPrototype._v_HeaderCellHiddenCssCache   = null;
            aPrototype._v_SelectedCellCssCache = null;
            aPrototype._v_EvenCellCssCache     = null;
            aPrototype._v_OddCellCssCache      = null;

            aPrototype._v_CellValuesFunctions  = null;
            aPrototype._v_CellValuesCache      = null;
            aPrototype._v_NewCellValuesCache   = null;

            aPrototype._v_RandomCellClass      = null;
            aPrototype._v_RandomRowClass       = null;
            aPrototype._v_CachedRowDOMelements = null;

            aPrototype._v_Leyendo = null;

            aPrototype._v_PreviousSelectionIndex = null;

            aPrototype._v_LastRetrieval    = null;
            aPrototype._v_LastMasterFields  = null;

            aPrototype._v_DisableScrollRowIntoView = null;

            aPrototype._v_SelectionClickListener = null;

            aPrototype._v_OwnGridRetrieval = null;

            aPrototype._v_EverRetrieved = null;

            aPrototype._v_WaitsDeleteConfirmation = null;

            aPrototype._v_NoRefresh = null;

            aPrototype._v_GridHeightFactor = null;

            aPrototype._v_GridResizedTimeout = null;



            aPrototype._v_NoPage            = null;
            aPrototype._v_PageMaxSize       = null;

            aPrototype._v_PageMaxSizeInput    = null;
            aPrototype._v_HidePageMaxSizeInput    = null;


            aPrototype._v_Paging            = null;
            aPrototype._v_PageFirstRowIndex = null;
            aPrototype._v_PageSize          = null;
            aPrototype._v_PageLastRowIndex  = null;





            var _pInit = function( theTitle, theIdentifier, theRecorder, theScope,
                                   theDomIdPrefix,
                                   theParentCtrl,
                                   theConverter,
                                   theMasterFields,
                                   theGridName, theGridLabel, theLabels, theFields, theHiddenFields, theDataTypes,
                                   theGridClasses, theColumnClasses,
                                   theRetrievalTarget, theRetrieval, theWith, theQuery, theDeleteQuery,
                                   theAutoSelectIndex, theKeyField,
                                   theEditorName, theCreatorName,
                                   theDeleteTarget, theDelete, theDeleteWith, theDeleteParm, theDeleteSucessIfNotExistsParm,
                                   theRowsChangeListener, theSelectionChangeListener,
                                   theCreateRoles, theDeleteRoles,
                                   theNoPage, theMaxPageSize, theHidePageMaxSizeInput) {

                this._pInit_GridCtrl( theTitle, theIdentifier, theRecorder, theScope,
                                      theDomIdPrefix,
                                      theParentCtrl,
                                      theConverter,
                                      theMasterFields,
                                      theGridName, theGridLabel, theLabels, theFields, theHiddenFields, theDataTypes,
                                      theGridClasses, theColumnClasses,
                                      theRetrievalTarget, theRetrieval, theWith, theQuery, theDeleteQuery,
                                      theAutoSelectIndex, theKeyField,
                                      theEditorName, theCreatorName,
                                      theDeleteTarget, theDelete, theDeleteWith, theDeleteParm, theDeleteSucessIfNotExistsParm,
                                      theRowsChangeListener, theSelectionChangeListener,
                                      theCreateRoles, theDeleteRoles,
                                      theNoPage, theMaxPageSize, theHidePageMaxSizeInput);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_GridCtrl = function( theTitle, theIdentifier, theRecorder, theScope,
                                            theDomIdPrefix,
                                            theParentCtrl,
                                            theConverter,
                                            theMasterFields,
                                            theGridName, theGridLabel, theLabels, theFields, theHiddenFields, theDataTypes,
                                            theGridClasses, theColumnClasses,
                                            theRetrievalTarget, theRetrieval, theWith, theQuery,
                                            theAutoSelectIndex, theKeyField,
                                            theEditorName, theCreatorName,
                                            theDeleteTarget, theDelete, theDeleteWith, theDeleteParm, theDeleteSucessIfNotExistsParm, theDeleteQuery,
                                            theRowsChangeListener, theSelectionChangeListener,
                                            theCreateRoles, theDeleteRoles,
                                            theNoPage, theMaxPageSize, theHidePageMaxSizeInput) {

                /* Delegate on super prototype initialization */
                aPrototype._v_SuperPrototype._pInit_MastereableCtrl.apply( this, [ theTitle, theIdentifier, theRecorder, theScope,
                                                                                   theDomIdPrefix,
                                                                                   theParentCtrl,
                                                                                   theConverter,
                                                                                   theMasterFields]);

                this._v_Prototype = aPrototype;
                this._v_Type      = this._v_Prototype._v_Type;
                this._v_Module    = aPrototype._v_Module;

                this._v_GridName        = theGridName;
                this._v_GridLabel       = theGridLabel;
                this._v_Labels          = theLabels;
                this._v_Fields          = theFields;
                this._v_HiddenFields    = theHiddenFields;
                this._v_DataTypes       = theDataTypes;
                this._v_GridClasses     = theGridClasses;
                this._v_ColumnClasses   = theColumnClasses;
                this._v_RetrievalTarget = theRetrievalTarget;
                this._v_Retrieval       = theRetrieval;
                this._v_With            = theWith;
                this._v_Query           = theQuery;
                this._v_AutoSelectIndex = theAutoSelectIndex;
                this._v_KeyField        = theKeyField;
                this._v_EditorName      = theEditorName;
                this._v_CreatorName     = theCreatorName;
                this._v_DeleteTarget    = theDeleteTarget;
                this._v_Delete          = theDelete;
                this._v_DeleteWith      = theDeleteWith;
                this._v_DeleteParm      = theDeleteParm;
                this._v_DeleteSucessIfNotExistsParm = theDeleteSucessIfNotExistsParm;
                this._v_DeleteQuery     = theDeleteQuery;

                this._v_CreateRoles     = theCreateRoles;
                this._v_DeleteRoles     = theDeleteRoles;
                this._v_HasAnyCreateRoles = null;
                this._v_HasAnyDeleteRoles = null;
                this.pInitHasRoles();



                this._v_InhibitSelectionChangeNotifications = false;

                this._v_RowsChangeListeners      = [ ];
                this._v_SelectionChangeListeners = [ ];
                this._v_ActionHappenedListeners  = [ ];

                if( theRowsChangeListener) {
                    this.pAddRowsChangeListener( theRowsChangeListener);
                }

                if( theSelectionChangeListener) {
                    this.pAddSelectionChangeListener( theSelectionChangeListener);
                }



                this._v_NoPage            = theNoPage;
                this._v_PageMaxSize       = theMaxPageSize;

                if( !( typeof this._v_PageMaxSize == "number")) {
                    this._v_PageMaxSize = this.MAXPAGESIZEDEFAULT;
                }
                if( this._v_PageMaxSize < 0) {
                    this._v_PageMaxSize = this.MAXPAGESIZEDEFAULT;
                }
                if( this._v_PageMaxSize > this.MAXPAGESIZEHARDLIMIT) {
                    this._v_PageMaxSize = this.MAXPAGESIZEHARDLIMIT;
                }

                this._v_PageMaxSizeInput    = "" + this._v_PageMaxSize;
                this._v_HidePageMaxSizeInput = theHidePageMaxSizeInput;


                this._v_Rows      = null;
                this._v_Selection = null;

                this._v_RowCssCache  = null;
                this._v_CellCssCache = null;

                this._v_HeaderCellCssCache   = null;
                this._v_HeaderCellHiddenCssCache   = null;
                this._v_SelectedCellCssCache = null;
                this._v_EvenCellCssCache     = null;
                this._v_OddCellCssCache      = null;

                this._v_CellValuesFunctions  = null;
                this._v_CellValuesCache      = null;
                this._v_NewCellValuesCache   = null;

                this._v_RandomCellClass      = null;
                this._v_RandomRowClass       = null;
                this._v_CachedRowDOMelements = null;

                this._v_Leyendo = null;

                this._v_PreviousSelectionIndex = null;

                this._v_LastRetrieval    = null;

                this._v_DisableScrollRowIntoView = false;

                this._v_SelectionClickListener = null;

                this._v_OwnGridRetrieval = null;

                this._v_EverRetrieved = null;

                this._v_WaitsDeleteConfirmation = false;

                this._v_NoRefresh    = false;

                this._v_GridHeightFactor = this.GRIDHEIGHT_FACTOR_INITIAL;

                this._v_GridResizedTimeout = null;


                this._v_Paging            = false;
                this._v_PageFirstRowIndex = 0;
                this._v_PageSize          = 0;
                this._v_PageLastRowIndex  = 0;


                if( this._v_GridName){}/* CQT */
                if( this._v_GridLabel){}/* CQT */
                if( this._v_Labels){}/* CQT */
                if( this._v_Leyendo){}/* CQT */
                if( this._v_HeaderCellCssCache){}/* CQT */
                if( this._v_HeaderCellHiddenCssCache){}/* CQT */
                if( this._v_EverRetrieved){}/* CQT */
                if( this._v_NoRefresh){}/* CQT */
            };
            if( _pInit_GridCtrl){}/* CQT */
            aPrototype._pInit_GridCtrl = _pInit_GridCtrl;













            var pDestroy = function() {

                this._v_GridName        = null;
                this._v_GridLabel       = null;
                this._v_Labels          = null;
                this._v_Fields          = null;
                this._v_HiddenFields    = null;
                this._v_DataTypes       = null;
                this._v_GridClasses     = null;
                this._v_ColumnClasses   = null;
                this._v_RetrievalTarget = null;
                this._v_Retrieval       = null;
                this._v_With            = null;
                this._v_Query           = null;
                this._v_AutoSelectIndex = null;
                this._v_KeyField        = null;
                this._v_EditorName      = null;
                this._v_CreatorName     = null;
                this._v_DeleteTarget    = null;
                this._v_Delete          = null;
                this._v_DeleteWith      = null;
                this._v_DeleteParm      = null;
                this._v_DeleteSucessIfNotExistsParm = null;
                this._v_DeleteQuery     = null;

                this._v_CreateRoles     = null;
                this._v_DeleteRoles     = null;
                this._v_HasAnyCreateRoles = false;
                this._v_HasAnyDeleteRoles = false;

                this._v_Rows      = null;
                this._v_Selection = null;

                this._v_RowsChangeListeners      = null;
                this._v_SelectionChangeListeners = null;
                this._v_ActionHappenedListeners  = null;

                this._v_InhibitSelectionChangeNotifications = null;

                this._v_RowCssCache  = null;
                this._v_CellCssCache = null;

                this._v_HeaderCellCssCache   = null;
                this._v_HeaderCellHiddenCssCache   = null;
                this._v_SelectedCellCssCache = null;
                this._v_EvenCellCssCache     = null;
                this._v_OddCellCssCache      = null;

                this._v_CellValuesFunctions  = null;
                this._v_CellValuesCache      = null;
                this._v_NewCellValuesCache   = null;

                this._v_RandomCellClass      = null;
                this._v_RandomRowClass       = null;
                this._v_CachedRowDOMelements = null;

                this._v_Leyendo = null;

                this._v_PreviousSelectionIndex = null;

                this._v_LastRetrieval    = null;
                this._v_LastMasterFields  = null;

                this._v_DisableScrollRowIntoView = null;

                this._v_SelectionClickListener = null;

                this._v_OwnGridRetrieval = null;

                this._v_EverRetrieved = null;

                this._v_NoRefresh    = null;

                this._v_GridHeightFactor = null;

                if( this._v_GridResizedTimeout) {
                    window.clearTimeout( this._v_GridResizedTimeout);
                    this._v_GridResizedTimeout = null;
                }

                this._v_NoPage            = null;
                this._v_PageMaxSize       = null;

                this._v_PageMaxSizeInput    = null;

                this._v_Paging            = null;
                this._v_PageFirstRowIndex = null;
                this._v_PageSize          = null;
                this._v_PageLastRowIndex  = null;

                this.pUnHookUISelectionClickListeners();

                this.pUnhookResizableGrid();

                aPrototype._v_SuperPrototype.pDestroy.apply( this);
            };
            if( pDestroy){}/* CQT */
            aPrototype.pDestroy = pDestroy;














            var pInitialObtainConverter = function() {
            };
            if( pInitialObtainConverter){}/* CQT */
            aPrototype.pInitialObtainConverter = pInitialObtainConverter;











            var pRegisterGridInParent = function( theParentCtrl, theGridName) {

                if( !theParentCtrl) {
                    return;
                }

                if( !theGridName) {
                    return;
                }

                this.pSetParentCtrl( theParentCtrl);


                var someGridParameters = theParentCtrl.fParametersForNewGridCtrl( this, theGridName);
                if( !someGridParameters) {
                    return;
                }

                this._v_DomIdPrefix      = someGridParameters[ "domIdPrefix"];

                this._v_MasterLabels     = someGridParameters[ "masterLabels"];
                this._v_MasterFields     = someGridParameters[ "masterFields"];
                this._v_LastMasterFields = this._v_MasterFields;
                this.pUpdateMasterLabel();

                this._v_MasterParms      = someGridParameters[ "masterParms"];
                this._v_MasterType       = someGridParameters[ "masterType"];

                this._v_GridName         = someGridParameters[ "name"];
                this._v_GridLabel        = someGridParameters[ "gridLabel"];
                this._v_Labels           = someGridParameters[ "labels"];
                this._v_Fields           = someGridParameters[ "fields"];
                this._v_HiddenFields     = someGridParameters[ "hiddenFields"];

                this._v_DataTypes        = someGridParameters[ "dataTypes"];
                this._v_GridClasses      = someGridParameters[ "gridClasses"];
                this._v_ColumnClasses    = someGridParameters[ "classes"];
                this._v_RetrievalTarget  = someGridParameters[ "retrievalTarget"];
                this._v_Retrieval        = someGridParameters[ "retrieval"];
                this._v_With             = someGridParameters[ "with"];
                this._v_Query            = someGridParameters[ "query"];
                this._v_AutoSelectIndex  = someGridParameters[ "autoSelectIndex"];
                this._v_KeyField         = someGridParameters[ "keyField"];
                this._v_EditorName       = someGridParameters[ "editorName"];
                this._v_CreatorName      = someGridParameters[ "creatorName"];
                this._v_DeleteTarget     = someGridParameters[ "deleteTarget"];
                this._v_Delete           = someGridParameters[ "delete"];
                this._v_DeleteWith       = someGridParameters[ "deleteWith"];
                this._v_DeleteParm       = someGridParameters[ "deleteParm"];
                this._v_DeleteSucessIfNotExistsParm = someGridParameters[ "deleteSucessIfNotExistsParm"];
                this._v_DeleteQuery      = someGridParameters[ "deleteQuery"];


                this._v_CreateRoles     = someGridParameters[ "createRoles"];
                this._v_DeleteRoles     = someGridParameters[ "deleteRoles"];
                this._v_HasAnyCreateRoles = false;
                this._v_HasAnyDeleteRoles = false;
                this.pInitHasRoles();

                this._v_NoRefresh        = someGridParameters[ "noRefresh"];
                this._v_GridHeightFactor = someGridParameters[ "gridHeightFactor"];
                if( !( typeof this._v_GridHeightFactor == "number")) {
                    this._v_GridHeightFactor = this.GRIDHEIGHT_FACTOR_INITIAL;
                }
                if( this._v_GridHeightFactor < this.GRIDHEIGHT_FACTOR_MIN) {
                    this._v_GridHeightFactor = this.GRIDHEIGHT_FACTOR_INITIAL;
                }
                if( this._v_GridHeightFactor > this.GRIDHEIGHT_FACTOR_MAX) {
                    this._v_GridHeightFactor = this.GRIDHEIGHT_FACTOR_INITIAL;
                }



                this._v_LastRetrieval = null;
                this._v_LastMasterFields = null;

                if( this._v_GridName) {
                    this._v_Title += ( "-" + this._v_GridName);
                }


                this._v_NoPage               = someGridParameters[ "noPage"];
                this._v_PageMaxSize          = someGridParameters[ "pageMaxSize"];
                this._v_HidePageMaxSizeInput = someGridParameters[ "hidePageMaxSizeInput"];

                if( !( typeof this._v_PageMaxSize == "number")) {
                    this._v_PageMaxSize = this.MAXPAGESIZEDEFAULT;
                }
                if( this._v_PageMaxSize < 0) {
                    this._v_PageMaxSize = this.MAXPAGESIZEDEFAULT;
                }
                if( this._v_PageMaxSize > this.MAXPAGESIZEHARDLIMIT) {
                    this._v_PageMaxSize = this.MAXPAGESIZEHARDLIMIT;
                }

                this._v_PageMaxSizeInput    = "" + this._v_PageMaxSize;

                this._v_Paging            = false;
                this._v_PageFirstRowIndex = 0;
                this._v_PageSize          = 0;
                this._v_PageLastRowIndex  = 0;


                this.pObtainConverter();


                if( this.LOGREGISTRATION) {
                    if( this.LOGREGISTRATIONSPEC) {
                        this.pLogEvent( this.EVENTKIND_GRIDREGISTEREDINPARENT, someGridParameters);

                    }
                    else {
                        this.pLogEvent( this.EVENTKIND_GRIDREGISTEREDINPARENT);
                    }
                }

                var aParentCtrl = this.fParentCtrl();
                if( aParentCtrl) {
                    aParentCtrl.pWireNewCtrl( this, this._v_GridName);
                }
            };
            if( pRegisterGridInParent){}/* CQT */
            aPrototype.pRegisterGridInParent = pRegisterGridInParent;







            var pInitHasRoles = function() {

                var aParentCtrl = this.fParentCtrl();
                if( !aParentCtrl) {
                    this._v_HasAnyCreateRoles = true;
                    this._v_HasAnyDeleteRoles = true;
                    return;
                }

                if( !( aParentCtrl.fHasAnyRole) || !( typeof aParentCtrl.fHasAnyRole == "function")) {
                    this._v_HasAnyCreateRoles = true;
                    this._v_HasAnyDeleteRoles = true;
                    return;
                }

                if( this._v_CreateRoles) {
                    this._v_HasAnyCreateRoles = aParentCtrl.fHasAnyRole( this._v_CreateRoles);
                }
                else {
                    this._v_HasAnyCreateRoles = true;
                }

                if( this._v_DeleteRoles) {
                    this._v_HasAnyDeleteRoles = aParentCtrl.fHasAnyRole( this._v_DeleteRoles);
                }
                else {
                    this._v_HasAnyDeleteRoles = true;
                }
            };
            if( pInitHasRoles){}/* CQT */
            aPrototype.pInitHasRoles = pInitHasRoles;













            var pHookResizableGrid = function( theListener) {
                if( theListener){}/* CQT */

                var aResizableDomElementId = this.fDomId_GridHolderDiv();
                if( aResizableDomElementId) {
                    var aGridJelement = $("#" + aResizableDomElementId);
                    if( aGridJelement && aGridJelement.length) {
                        var someResizableOptions = {
                            "handles": "s",
                            "minHeight": this.GRIDHEIGHT_UNITPIXELS * this.GRIDHEIGHT_FACTOR_MIN,
                            "maxHeight": this.GRIDHEIGHT_UNITPIXELS * this.GRIDHEIGHT_FACTOR_MAX,
                            "distance": 6
                        };

                        aGridJelement.resizable( someResizableOptions);

                        var aThis = this;
                        aGridJelement.resize( function() {

                            if( aThis._v_GridResizedTimeout) {
                                window.clearTimeout( aThis._v_GridResizedTimeout);
                                aThis._v_GridResizedTimeout = null;
                            }

                            var aThis_here = aThis;
                            aThis._v_GridResizedTimeout = window.setTimeout(
                                function() {
                                    aThis_here._v_GridResizedTimeout = null;

                                    var aGridHolderDiv = aThis_here.fDom_GridHolderDiv();
                                    if( aGridHolderDiv) {
                                        var aGridHolderDivHeight = aGridHolderDiv.clientHeight;
                                        if( aGridHolderDivHeight) {

                                            if( aGridHolderDivHeight < ( aThis_here.GRIDHEIGHT_UNITPIXELS * aThis_here.GRIDHEIGHT_FACTOR_MIN)) {
                                                aGridHolderDivHeight = aThis_here.GRIDHEIGHT_UNITPIXELS * aThis_here.GRIDHEIGHT_FACTOR_MIN;
                                            }

                                            if( aGridHolderDivHeight > ( aThis_here.GRIDHEIGHT_UNITPIXELS * aThis_here.GRIDHEIGHT_FACTOR_MAX)) {
                                                aGridHolderDivHeight = aThis_here.GRIDHEIGHT_UNITPIXELS * aThis_here.GRIDHEIGHT_FACTOR_MAX;
                                            }

                                            var aDomGridTableHolder = aThis_here.fDom_TableHolder();
                                            if( aDomGridTableHolder) {
                                                /*
                                                aDomGridTableHolder.setAttribute('style', 'height:' + aGridHolderDivHeight + 'px; min-height:' + aGridHolderDivHeight + 'px');
                                                 */
                                                aDomGridTableHolder.setAttribute('style', 'height:' + aGridHolderDivHeight + 'px');

                                                aThis_here._v_GridHeightFactor = Math.round( aGridHolderDivHeight / aThis_here.GRIDHEIGHT_UNITPIXELS);
                                                if( aThis_here._v_GridHeightFactor < aThis_here.GRIDHEIGHT_FACTOR_MIN) {
                                                    aThis_here._v_GridHeightFactor = aThis_here.GRIDHEIGHT_FACTOR_MIN;
                                                }
                                                if( aThis_here._v_GridHeightFactor > aThis_here.GRIDHEIGHT_FACTOR_MAX) {
                                                    aThis_here._v_GridHeightFactor = aThis_here.GRIDHEIGHT_FACTOR_MIN;
                                                }
                                            }

                                            aGridHolderDiv.setAttribute('style', 'height: auto');
                                        }
                                    }
                                },
                                aThis.RESIZEDGRIDWAITTOAPLY
                            );
                        });
                    }
                }
            };
            if( pHookResizableGrid){}/* CQT */
            aPrototype.pHookResizableGrid = pHookResizableGrid;




            var pUnhookResizableGrid = function( theListener) {
            };
            if( pUnhookResizableGrid){}/* CQT */
            aPrototype.pUnhookResizableGrid = pUnhookResizableGrid;











            var pAddContentChangeListener = function( theListener) {

                this.pAddRowsChangeListener( theListener);
            };
            if( pAddContentChangeListener){}/* CQT */
            aPrototype.pAddContentChangeListener = pAddContentChangeListener;






            var pRemoveContentChangeListener = function( theListener) {

                this.pRemoveRowsChangeListener( theListener);

            };
            if( pRemoveContentChangeListener){}/* CQT */
            aPrototype.pRemoveContentChangeListener = pRemoveContentChangeListener;









            var pAddRowsChangeListener = function( theListener) {


                if( !theListener) {
                    return;
                }

                if( this._v_RowsChangeListeners.indexOf( theListener) >= 0) {
                    return;
                }

                if( this.LOGADDROWSCHANGELISTENER) {
                    this.pLogEvent( this.EVENTKIND_ADDROWSCHANGELISTENER, theListener)
                }

                this._v_RowsChangeListeners.push( theListener);
            };
            if( pAddRowsChangeListener){}/* CQT */
            aPrototype.pAddRowsChangeListener = pAddRowsChangeListener;






            var pRemoveRowsChangeListener = function( theListener) {

                if( !theListener) {
                    return;
                }

                var aListenerIndex = this._v_RowsChangeListeners.indexOf( theListener);

                if( aListenerIndex < 0) {
                    return;
                }

                if( this.LOGREMOVEROWSCHANGELISTENER) {
                    this.pLogEvent(this.EVENTKIND_REMOVEROWSCHANGELISTENER, theListener);
                }

                this._v_RowsChangeListeners.splice( aListenerIndex, 1);
            };
            if( pRemoveRowsChangeListener){}/* CQT */
            aPrototype.pRemoveRowsChangeListener = pRemoveRowsChangeListener;











            var pAddSelectionChangeListener = function( theListener) {

                if( !theListener) {
                    return;
                }

                if( this._v_SelectionChangeListeners.indexOf( theListener) >= 0) {
                    return;
                }

                if( this.LOGADDSELECTIONCHANGELISTENER) {
                    this.pLogEvent( this.EVENTKIND_ADDSELECTIONCHANGELISTENER, theListener);
                }

                this._v_SelectionChangeListeners.push( theListener);
            };
            if( pAddSelectionChangeListener){}/* CQT */
            aPrototype.pAddSelectionChangeListener = pAddSelectionChangeListener;






            var pRemoveSelectionChangeListener = function( theListener) {

                if( !theListener) {
                    return;
                }

                var aListenerIndex = this._v_SelectionChangeListeners.indexOf( theListener);

                if( aListenerIndex < 0) {
                    return;
                }

                if( this.LOGREMOVESELECTIONCHANGELISTENER) {
                    this.pLogEvent( this.EVENTKIND_REMOVESELECTIONCHANGELISTENER, theListener);
                }

                this._v_SelectionChangeListeners.splice( aListenerIndex, 1);
            };
            if( pRemoveSelectionChangeListener){}/* CQT */
            aPrototype.pRemoveSelectionChangeListener = pRemoveSelectionChangeListener;











            var pAddActionHappenedListener = function( theListener) {

                if( !theListener) {
                    return;
                }

                if( this._v_ActionHappenedListeners.indexOf( theListener) >= 0) {
                    return;
                }

                if( this.LOGADDACTIONHAPPENEDLISTENER) {
                    this.pLogEvent( this.EVENTKIND_ADDACTIONHAPPENEDLISTENER, theListener);
                }

                this._v_ActionHappenedListeners.push( theListener);
            };
            if( pAddActionHappenedListener){}/* CQT */
            aPrototype.pAddActionHappenedListener = pAddActionHappenedListener;






            var pRemoveActionHappenedListener = function( theListener) {

                if( !theListener) {
                    return;
                }

                var aListenerIndex = this._v_ActionHappenedListeners.indexOf( theListener);

                if( aListenerIndex < 0) {
                    return;
                }

                if( this.LOGREMOVEACTIONHAPPENEDLISTENER) {
                    this.pLogEvent( this.EVENTKIND_REMOVEACTIONHAPPENEDLISTENER, theListener);
                }

                this._v_ActionHappenedListeners.splice( aListenerIndex, 1);
            };
            if( pRemoveActionHappenedListener){}/* CQT */
            aPrototype.pRemoveActionHappenedListener = pRemoveActionHappenedListener;









            var fRows = function( ) {

                return this._v_Rows;
            };
            if( fRows){}/* CQT */
            aPrototype.fRows = fRows;




            var fNumRows = function( ) {

                if( !this._v_Rows) {
                    return 0;
                }

                return this._v_Rows.length;
            };
            if( fNumRows){}/* CQT */
            aPrototype.fNumRows = fNumRows;





            var fSelection = function( ) {

                return this._v_Selection;
            };
            if( fSelection){}/* CQT */
            aPrototype.fSelection = fSelection;








            var fSelectionIndex = function( ) {

                var aSelection = this.fSelection();
                if( !aSelection) {
                    return -1;
                }

                var someRows = this.fRows();
                if( !someRows) {
                    return -1;
                }

                var aSelectionIndex = someRows.indexOf( aSelection);
                if( aSelectionIndex){}/* CQT */

                return aSelectionIndex;
            };
            if( fSelectionIndex){}/* CQT */
            aPrototype.fSelectionIndex = fSelectionIndex;









            var fCanDeleteSelection = function( ) {

                if( !this._v_Delete) {
                    return false;
                }

                return this.fSelection() ? true : false;
            };
            if( fCanDeleteSelection){}/* CQT */
            aPrototype.fCanDeleteSelection = fCanDeleteSelection;









            var fprDo_InitialExtra = function() {

                return aPrototype._v_SuperPrototype.fprDo_InitialExtra.apply( this);
            };
            if( fprDo_InitialExtra){}/* CQT */
            aPrototype.fprDo_InitialExtra = fprDo_InitialExtra;








            var fprDo_Initial = function() {

                var aPromise = this.fprDo_DisableUIhandlers().
                    then( this.fprDo_InitialExtra.bind( this))
                    ['finally']( this.fprDo_EnableUIhandlers.bind( this));
                if( aPromise){}/* CQT */

                return aPromise;
            };
            if( fprDo_Initial){}/* CQT */
            aPrototype.fprDo_Initial = fprDo_Initial;









            var fprDo_RetrieveRows = function( theRetrieval, theMasterFields, theToSelectFields) {
                var aMethodName = this._v_Type + " fprDo_RetrieveRows";

                var aDeferred = this.fNewDeferred();

                this._v_WaitsDeleteConfirmation = false;

                this._v_LastRetrieval = null;
                this._v_LastMasterFields = null;
                this.pUpdateMasterLabel();

                this._v_Leyendo = true;

                this._v_MasterFields = theMasterFields;
                this.pUpdateMasterLabel();

                var aParentCtrl = this.fParentCtrl();

                var aRetrieval = theRetrieval;
                if( !aRetrieval) {
                    var aRetrievalTargetName = this._v_RetrievalTarget;
                    if( aRetrievalTargetName) {

                        if( aParentCtrl) {



                            var aWith = undefined;
                            if( this._v_With) {
                                var aWithSupplier = this;
                                if( this._v_With.indexOf( this.RETRIEVALWITHPARENTSENTINEL) == 0) {
                                    console.log( "ACV OJO 201411091330 this._v_With in fParentCtrl().");
                                    aWithSupplier = this.fParentCtrl();
                                }
                                else {
                                    console.log( "ACV OJO 201411171630 Not supported grid_ctrl_type fprDo_RetrieveRows 'with' not including RETRIEVALWITHPARENTSENTINEL which should be resolved with a rows or selection field access")
                                }

                                if( aWithSupplier) {
                                    var aWithName = this._v_With.replace( this.RETRIEVALWITHPARENTSENTINEL, "");
                                    aWith = aWithSupplier[ aWithName];
                                }
                            }





                            if( this._v_Query) {

                                var aWithQuery = { };

                                var someQueryKeys = Object.keys( this._v_Query);
                                var aNumQueryKeys = someQueryKeys.length;
                                for( var aQueryKeyIdx=0; aQueryKeyIdx < aNumQueryKeys; aQueryKeyIdx++) {

                                    var aQueryKey   = someQueryKeys[ aQueryKeyIdx];
                                    var aQueryValue = this._v_Query[ aQueryKey];

                                    var aQueryEntryWithName = aQueryValue;

                                    var aQueryValueSupplier = this;
                                    if( aQueryValue.indexOf( this.RETRIEVALWITHPARENTSENTINEL) == 0) {
                                        aQueryEntryWithName = aQueryValue.replace( this.RETRIEVALWITHPARENTSENTINEL, "");
                                        aQueryValueSupplier = this.fParentCtrl();
                                    }
                                    else {
                                        console.log( "ACV OJO 201411171630 Not supported grid_ctrl_type fprDo_RetrieveRows 'query' not including RETRIEVALWITHPARENTSENTINEL which should be resolved with a rows or selection field access")
                                    }

                                    if( aQueryValueSupplier) {
                                        var aQueryEntryWithValue = aQueryValueSupplier[ aQueryEntryWithName];
                                        if( !( typeof aQueryEntryWithValue == "undefined")) {
                                            aWithQuery[ aQueryKey] = aQueryEntryWithValue;
                                        }
                                    }
                                }



                                if( Object.keys( aWithQuery).length < 1) {
                                    console.log( "\n\nACV OJO 201410311611 " + aMethodName + " Object.keys( aWithQuery).length < 1'\n\n");
                                    return this.fNewDeferredRejectPromise( aMethodName + " Object.keys( aWithQuery).length < 1");
                                }

                                aWith = aWithQuery;
                            }


                            var aRetrievalTargetSupplier = aParentCtrl;

                            if( aRetrievalTargetName.indexOf( this.RETRIEVALTARGETSUPPLIERPARENTSENTINEL) == 0) {
                                aRetrievalTargetSupplier = aRetrievalTargetSupplier.fParentCtrl();
                                aRetrievalTargetName = aRetrievalTargetName.replace( this.RETRIEVALTARGETSUPPLIERPARENTSENTINEL, "");
                            }


                            var aRetrievalTarget = aRetrievalTargetSupplier[ aRetrievalTargetName];
                            if( aRetrievalTarget) {

                                if( typeof aRetrievalTarget == "function") {

                                    aRetrievalTarget = aRetrievalTarget.bind( aRetrievalTargetSupplier);
                                    aRetrievalTarget = aRetrievalTarget();
                                }

                                var aRetrievalName = this._v_Retrieval;
                                if( aRetrievalName) {

                                    var aNamedRetrieval = aRetrievalTarget[ aRetrievalName];
                                    if( typeof aNamedRetrieval == "function") {
                                        if( !( typeof aWith == "undefined")) {
                                            aRetrieval = aNamedRetrieval.bind( aRetrievalTarget, aWith);
                                        }
                                        else {
                                            aRetrieval = aNamedRetrieval.bind( aRetrievalTarget);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                if( !aRetrieval) {
                    this.pDeferredReject( aDeferred, aMethodName + " !aRetrieval");
                    return aDeferred.promise;
                }


                this._v_LastRetrieval   = aRetrieval;
                this._v_LastMasterFields = theMasterFields;
                this.pUpdateMasterLabel();


                if( this.LOGRETRIEVEROWS) {
                    this.pLogEvent( this.EVENTKIND_TRYTORETRIEVEROWS, aRetrieval);
                }


                /* ********************************************************************
                Retrieve data NOW (usually from server, remote or async resource, ...)
                The promise returned from aRetrieval is probably the one returned by the service hit operation.

                */
                var aPromise = aRetrieval();


                var aPreviousSelectionHolder = [ this._v_Selection];
                var aRetrievedDataHolder     = [ null];

                var aThis = this;
                aPromise.
                    then(
                        function( theResolvedData) {

                            aThis._v_EverRetrieved = true;

                            if( aThis.LOGRETRIEVEROWS) {
                                if( aThis.LOGRETRIEVEDROWS) {
                                    aThis.pLogEvent( aThis.EVENTKIND_RETRIEVEDROWS, theResolvedData);
                                }
                                else {
                                    aThis.pLogEvent( aThis.EVENTKIND_RETRIEVEDROWS);
                                }
                            }

                            aThis._v_Leyendo = false;

                            aThis._v_Rows = theResolvedData;

                            aRetrievedDataHolder[ 0] = theResolvedData;




                            if( theToSelectFields) {

                                var aKeyField = aThis._v_KeyField;
                                if( aKeyField) {

                                    var aToSelectKeyValue = theToSelectFields[ aKeyField];
                                    if( !( typeof aToSelectKeyValue == "undefined")) {

                                        var aRowToSelect = null;

                                        if( aThis._v_Rows) {
                                            var aNumRows = aThis._v_Rows.length;
                                            for( var aRowIdx=0; aRowIdx < aNumRows; aRowIdx++) {
                                                var aRow = aThis._v_Rows[ aRowIdx];
                                                if( aRow) {
                                                    var aRowKeyValue      = aRow[ aKeyField];
                                                    if( !( typeof aRowKeyValue == "undefined") && !(  typeof aToSelectKeyValue == "undefined")) {
                                                        if( aRowKeyValue == aToSelectKeyValue) {
                                                            aRowToSelect = aRow;
                                                            break;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    if( aRowToSelect) {
                                        aPreviousSelectionHolder[ 0] = aRowToSelect;
                                    }
                                }
                            }



                            aThis.pUpdateCssCaches();
                            aThis.pUpdateCellValuesCache();

                            return aThis.fNewDeferredResolveWithRowsPromise( theResolvedData);
                        }
                    ).
                    then(
                        function( theResolvedData) {

                            return aThis.fprDo_RefreshRows( theResolvedData);
                        }
                    ).
                    then(
                        this.fprDo_RowsChanged.bind( this)
                    ).
                    then(
                        this.fprDo_ReSelect.bind( this, aPreviousSelectionHolder)
                    ).
                    then(
                        this.fprDo_AutoSelect.bind( this)
                    ).
                    then(
                        function() {
                            aThis.pDeferredResolveWithRows( aDeferred, aRetrievedDataHolder[ 0]);
                        }
                    )
                    ['finally'](
                        function() {
                            aThis.pScrollSelectedRowIntoView( );
                        }
                    )
                    ["catch"](
                        function( theError) {
                            aThis._v_Leyendo = false;
                            aThis.pDeferredReject( aDeferred, theError);
                        }
                    );

                return aDeferred.promise;

            };
            if( fprDo_RetrieveRows){}/* CQT */
            aPrototype.fprDo_RetrieveRows = fprDo_RetrieveRows;









            var fOwnGridRetrieval = function( ) {
                var aMethodName = this._v_Type + " fOwnGridRetrieval";
                if( aMethodName){}/* CQT */

                if( this._v_OwnGridRetrieval) {
                    return this._v_OwnGridRetrieval;
                }

                var aRetrievalTargetName = this._v_RetrievalTarget;
                if( !aRetrievalTargetName) {
                    return null;
                }

                var aParentCtrl = this.fParentCtrl();
                if( !aParentCtrl) {
                    return null;
                }

                var aRetrievalTargetSupplier = aParentCtrl;

                if( aRetrievalTargetName.indexOf( this.RETRIEVALTARGETSUPPLIERPARENTSENTINEL) == 0) {
                    aRetrievalTargetSupplier = aRetrievalTargetSupplier.fParentCtrl();
                    aRetrievalTargetName = aRetrievalTargetName.replace( this.RETRIEVALTARGETSUPPLIERPARENTSENTINEL, "");
                }


                var aRetrievalTarget = aRetrievalTargetSupplier[ aRetrievalTargetName];
                if( !aRetrievalTarget) {
                    return null;
                }

                if( typeof aRetrievalTarget == "function") {

                    console.log( "ACV OJO 201410212343 Binding aRetrievalTarget to aRetrievalTargetSupplier");
                    aRetrievalTarget = aRetrievalTarget.bind( aRetrievalTargetSupplier);
                    aRetrievalTarget = aRetrievalTarget();
                }

                var aRetrievalName = this._v_Retrieval;
                if(! aRetrievalName) {
                    return null;
                }

                var aNamedRetrieval = aRetrievalTarget[ aRetrievalName];
                if( !( typeof aNamedRetrieval == "function")) {
                    return null;
                }

                this._v_OwnGridRetrieval = aNamedRetrieval.bind( aRetrievalTarget);

                return this._v_OwnGridRetrieval;

            };
            if( fOwnGridRetrieval){}/* CQT */
            aPrototype.fOwnGridRetrieval = fOwnGridRetrieval;







            var fprDo_RetrieveRowsAgain = function() {

                console.log( "ACV OJO 201410220352 passing current selection to grid_ctrl_type fprDo_RetrieveRowsAgain");

                var aSelection = this.fSelection();
                if( !aSelection) {
                    return this.fprDo_RetrieveRows( this._v_LastRetrieval, this._v_LastMasterFields);
                }

                return this.fprDo_RetrieveRows( this._v_LastRetrieval, this._v_LastMasterFields, aSelection);
            };
            if( fprDo_RetrieveRowsAgain){}/* CQT */
            aPrototype.fprDo_RetrieveRowsAgain = fprDo_RetrieveRowsAgain;









            var fprDo_AfterRowInserted = function( theCreatedFields) {

                var aMethodName = "fprDo_AfterRowInserted";


                if( this.LOGINSERTED) {
                    this.pLogEvent( aMethodName);
                }

                var aThis = this;

                return this.fprDo_RetrieveRows( this._v_LastRetrieval, this._v_LastMasterFields, theCreatedFields)
                    .then( function( theRetrievedRows) {

                        var aRetrievedRows = theRetrievedRows;
                        return aThis.fprDo_NotifyModifyingActionHappened( false)
                            .then( function( ) {
                                return aThis.fNewDeferredResolvePromise( aRetrievedRows);
                            });
                    })
                    .then( function( theRetrievedRows) {

                        return aThis.fNewDeferredResolveWithRowsPromise( theRetrievedRows);
                    })
                    ["catch"]( function( theError) {

                        throw theError;
                    });
            };
            if( fprDo_AfterRowInserted){}/* CQT */
            aPrototype.fprDo_AfterRowInserted = fprDo_AfterRowInserted;











            var fDom_TableHolder = function( ) {
                var aTableHolderDomId = this.fDomId_TableHolder();
                if( !aTableHolderDomId) {
                    return null;
                }

                var aTableHolderDomElem = document.getElementById( aTableHolderDomId);
                if( aTableHolderDomElem){}/* CQT */

                return aTableHolderDomElem;
            };
            if( fDom_TableHolder){}/* CQT */
            aPrototype.fDom_TableHolder = fDom_TableHolder;








            var fDom_GridHolderDiv = function( ) {
                var aGridHolderDivDomId = this.fDomId_GridHolderDiv();
                if( !aGridHolderDivDomId) {
                    return null;
                }

                var aGridHolderDivDomElem = document.getElementById( aGridHolderDivDomId);
                if( aGridHolderDivDomElem){}/* CQT */

                return aGridHolderDivDomElem;
            };
            if( fDom_GridHolderDiv){}/* CQT */
            aPrototype.fDom_GridHolderDiv = fDom_GridHolderDiv;







            var fDomId_TableHolder = function( ) {

                var aDomId = this._v_DomIdPrefix + "_Grid_" + this._v_GridName;
                if( aDomId){}/* CQT */
                return aDomId;
            };
            if( fDomId_TableHolder){}/* CQT */
            aPrototype.fDomId_TableHolder = fDomId_TableHolder;





            var fDomId_GridHolderDiv = function( ) {

                var aDomId = this._v_DomIdPrefix + "_Grid_" + this._v_GridName + "_GridHolderDiv";
                if( aDomId){}/* CQT */
                return aDomId;
            };
            if( fDomId_GridHolderDiv){}/* CQT */
            aPrototype.fDomId_GridHolderDiv = fDomId_GridHolderDiv;






            var fDomId_Table = function( ) {

                var aDomId = this._v_DomIdPrefix + "_Grid_" + this._v_GridName + "_Table";
                if( aDomId){}/* CQT */
                return aDomId;
            };
            if( fDomId_Table){}/* CQT */
            aPrototype.fDomId_Table = fDomId_Table;












            var fprDo_RefreshRows = function( theRows) {

                if( this.RENDERDIRECTDOM) {
                    return this.fprDo_RefreshRows_directdom( theRows);
                }

                return this.fprDo_RefreshRows_angularunbind( theRows);
            };
            if( fprDo_RefreshRows){}/* CQT */
            aPrototype.fprDo_RefreshRows = fprDo_RefreshRows;









            var fprDo_RefreshRows_directdom = function( theRows) {
                if( theRows){}/* CQT */


                this.pUnHookUISelectionClickListeners();

                this.pDestroyDOMTable();


                this._v_CellValuesCache = null;


                this._v_CellValuesCache = this._v_NewCellValuesCache;

                if( this._v_NewCellValuesCache == null) {
                    var someRows = this.fRows();
                    return this.fNewDeferredResolveWithRowsPromise( someRows);
                }

                this.pRenderDOMTable();


                this.pHookUISelectionClickListeners();

                return this.fNewDeferredResolveWithRowsPromise( someRows);
            };
            if( fprDo_RefreshRows_directdom){}/* CQT */
            aPrototype.fprDo_RefreshRows_directdom = fprDo_RefreshRows_directdom;








            var pDestroyDOMTable = function() {

                var aTableHolderDomElem = this.fDom_TableHolder();
                if( !aTableHolderDomElem) {
                    return;
                }

                while ( aTableHolderDomElem.firstChild) {
                    aTableHolderDomElem.removeChild( aTableHolderDomElem.firstChild);
                }

            };
            if( pDestroyDOMTable){}/* CQT */
            aPrototype.pDestroyDOMTable = pDestroyDOMTable;







            var pRenderDOMTable = function() {

                var aTableHolderDomElem = this.fDom_TableHolder();
                if( !aTableHolderDomElem) {
                    return;
                }

                var aNewTableDomElem = document.createElement( "table");
                aNewTableDomElem.id = this.fDomId_Table();
                aNewTableDomElem.className = this._v_GridClasses[ theS_CssKeys.GRIDCLASSKEY_TABLE];

                var aNewBodyDomElem = document.createElement( "tbody");

                aNewTableDomElem.appendChild( aNewBodyDomElem);

                aTableHolderDomElem.appendChild( aNewTableDomElem);


                var aNumRows = this._v_CellValuesCache.length;
                var aNumFields = this._v_Fields.length;

                for( var aRowIdx=0; aRowIdx < aNumRows; aRowIdx++) {

                    var aNewRowElement = document.createElement( "tr");
                    aNewRowElement.id = this._v_DomIdPrefix + "_Grid_" + this._v_GridName + "_Row_" + aRowIdx;
                    aNewRowElement.className = this._v_RowCssCache[ aRowIdx];

                    var someColumnsCss =  this._v_CellCssCache[ aRowIdx];

                    aNewBodyDomElem.appendChild( aNewRowElement);

                    for( var aFieldIdx=0; aFieldIdx < aNumFields; aFieldIdx++) {

                        var aNewCellElement = document.createElement( "td");
                        aNewCellElement.id  = this._v_DomIdPrefix + "_Grid_" + this._v_GridName + "_Row_" + aRowIdx + '_Col_' + aFieldIdx;
                        aNewCellElement.className = someColumnsCss[ aFieldIdx];


                        var aNewSpanElement = document.createElement( "span");
                        aNewSpanElement.id = this._v_DomIdPrefix + "_Grid_" + this._v_GridName + "_Row_" + aRowIdx + '_Col_' + aFieldIdx + '_Span';
                        aNewSpanElement.className = this._v_GridClasses[ theS_CssKeys.GRIDCLASSKEY_SPAN];

                        var aText = this._v_CellValuesCache[ aRowIdx][ aFieldIdx];

                        var aNewTextElement = document.createTextNode( aText);
                        aNewSpanElement.appendChild( aNewTextElement);

                        aNewCellElement.appendChild( aNewSpanElement);

                        aNewRowElement.appendChild( aNewCellElement);
                    }
                }
            };
            if( pRenderDOMTable){}/* CQT */
            aPrototype.pRenderDOMTable = pRenderDOMTable;











            var fprDo_RefreshRows_angularunbind = function( theRows) {
                if( theRows){}/* CQT */

                var aDeferred = this.fNewDeferred();

                var aRows  = theRows;
                var aCache = this._v_NewCellValuesCache;

                var aThis = this;
                (function() {

                    aThis._v_CellValuesCache = null;

                    if( aCache == null) {
                        aThis.pDeferredResolveWithRows( aDeferred, aRows);

                        return;
                    }

                    $timeout(
                        function( ) {

                            aThis._v_CachedRowDOMelements = null;

                            aThis._v_CellValuesCache      = aCache;




                            if( aThis._v_PageMaxSizeInput) {

                                var aMaxPageSize = null;
                                try {
                                    aMaxPageSize = parseInt( aThis._v_PageMaxSizeInput)
                                }
                                catch( anException) {}

                                if( typeof aMaxPageSize == "number") {

                                    if( ( aMaxPageSize > 0)) {

                                        if( aMaxPageSize > aThis.MAXPAGESIZEHARDLIMIT) {
                                            aMaxPageSize = aThis.MAXPAGESIZEHARDLIMIT;
                                        }

                                        aThis._v_PageMaxSize = aMaxPageSize;
                                    }
                                }
                            }



                            if( !aThis._v_NoPage && aThis._v_PageMaxSize) {

                                if( aThis._v_NewCellValuesCache && ( typeof aThis._v_NewCellValuesCache.length == "number")) {

                                    var aNumRows = aThis._v_NewCellValuesCache.length;
                                    if( aNumRows) {

                                        if( aThis._v_Paging) {

                                            var aFirstRowIndexToRender = aThis._v_PageFirstRowIndex;
                                            if( !( typeof aFirstRowIndexToRender  == "number")) {
                                                aFirstRowIndexToRender = 0;
                                            }
                                            if( aFirstRowIndexToRender >= aNumRows) {
                                                aFirstRowIndexToRender = aNumRows - 1;
                                            }

                                            var aNumRowsToRender = aNumRows;
                                            if( aNumRowsToRender > aThis._v_PageMaxSize) {
                                                aNumRowsToRender = aThis._v_PageMaxSize;
                                            }

                                            var aLastRowIndexToRender = aFirstRowIndexToRender + aNumRowsToRender - 1;

                                            if( aLastRowIndexToRender >= aNumRows) {
                                                aLastRowIndexToRender = aNumRows - 1;
                                            }

                                            aThis._v_PageFirstRowIndex = aFirstRowIndexToRender;
                                            aThis._v_PageSize          = aLastRowIndexToRender - aFirstRowIndexToRender + 1;
                                            aThis._v_PageLastRowIndex  = aLastRowIndexToRender;

                                            aThis._v_CellValuesCache = aThis._v_NewCellValuesCache.slice( aFirstRowIndexToRender, aLastRowIndexToRender + 1);
                                        }

                                        else {
                                            if( aNumRows <= aThis._v_PageMaxSize) {

                                                aThis._v_Paging = false;

                                                aThis._v_PageFirstRowIndex = 0;
                                                aThis._v_PageSize          = aNumRows;
                                                aThis._v_PageLastRowIndex  = aNumRows - 1;

                                                aThis._v_CellValuesCache = aThis._v_NewCellValuesCache.slice();
                                            }
                                            else {

                                                aThis._v_Paging = true;

                                                aThis._v_PageFirstRowIndex = 0;
                                                aThis._v_PageSize          = aThis._v_PageMaxSize;
                                                aThis._v_PageLastRowIndex  = aThis._v_PageMaxSize - 1;

                                                aThis._v_CellValuesCache = aThis._v_NewCellValuesCache.slice( 0, aThis._v_PageMaxSize);
                                            }
                                        }
                                    }
                                }
                            }



                            $timeout(
                                function( ) {
                                    aThis.pHookUISelectionClickListeners();

                                    aThis.pDeferredResolveWithRows( aDeferred, aRows);
                                },
                                aThis.REFRESHDELAYMILLIS
                            );
                        },
                        aThis.REFRESHDELAYMILLIS
                    );

                })();

                return aDeferred.promise;

            };
            if( fprDo_RefreshRows_angularunbind){}/* CQT */
            aPrototype.fprDo_RefreshRows_angularunbind = fprDo_RefreshRows_angularunbind;









            var fCachedRowDOMelements = function() {

                if( this._v_CachedRowDOMelements) {
                    return this._v_CachedRowDOMelements;
                }

                var aRandomRowClass = this.fRandomRowClass();
                if( !aRandomRowClass) {
                    return null;
                }

                var allRows = $("." + aRandomRowClass);

                this._v_CachedRowDOMelements = [ ];

                var aNumRows = allRows.length;
                for( var aRowIdx=0; aRowIdx < aNumRows; aRowIdx++) {

                    var aRow = allRows[ aRowIdx];
                    if( aRow) {
                        if( aRow.nodeName.toLowerCase() == "tr") {
                            this._v_CachedRowDOMelements.push( aRow);
                        }
                    }
                }

                return this._v_CachedRowDOMelements;
            };
            if( fCachedRowDOMelements){}/* CQT */
            aPrototype.fCachedRowDOMelements = fCachedRowDOMelements;













            var fMayShrinkGrid = function( ) {
                if( !this._v_GridHeightFactor) {
                    return false;
                }

                if( this._v_GridHeightFactor < 1) {
                    return false;
                }

                var aMayShrink = this._v_GridHeightFactor > this.GRIDHEIGHT_FACTOR_MIN;
                if( aMayShrink){}/* CQT */

                return aMayShrink;
            };
            if( fMayShrinkGrid){}/* CQT */
            aPrototype.fMayShrinkGrid = fMayShrinkGrid;





            var fMayStretchGrid = function( ) {
                if( !this._v_GridHeightFactor) {
                    return false;
                }

                var aMayStretch = this._v_GridHeightFactor < this.GRIDHEIGHT_FACTOR_MAX;
                if( aMayStretch){}/* CQT */

                return aMayStretch;
            };
            if( fMayStretchGrid){}/* CQT */
            aPrototype.fMayStretchGrid = fMayStretchGrid;






            var pUIShrinkGrid = function( theEvent) {
                if( !theEvent) {
                }

                if( !this.fMayShrinkGrid()) {
                    this._v_GridHeightFactor = this.GRIDHEIGHT_FACTOR_MIN;
                    return true;
                }

                var aDomGridTableHolder = this.fDom_TableHolder();
                if( !aDomGridTableHolder) {
                    return false;
                }

                this._v_GridHeightFactor = this._v_GridHeightFactor - 1;
                if( this._v_GridHeightFactor < this.GRIDHEIGHT_FACTOR_MIN) {
                    this._v_GridHeightFactor = this.GRIDHEIGHT_FACTOR_MIN;
                }

                var aHeight = this._v_GridHeightFactor * this.GRIDHEIGHT_UNITPIXELS;

                aDomGridTableHolder.setAttribute('style', 'height:' + aHeight + "px");

                return true;
            };
            if( pUIShrinkGrid){}/* CQT */
            aPrototype.pUIShrinkGrid = pUIShrinkGrid;








            var pUIStretchGrid = function( theEvent) {
                if( !theEvent) {
                }

                if( !this.fMayStretchGrid()) {
                    this._v_GridHeightFactor = this.GRIDHEIGHT_FACTOR_MAX;
                    return true;
                }

                var aDomGridTableHolder = this.fDom_TableHolder();
                if( !aDomGridTableHolder) {
                    return false;
                }

                this._v_GridHeightFactor = this._v_GridHeightFactor + 1;
                if( this._v_GridHeightFactor > this.GRIDHEIGHT_FACTOR_MAX) {
                    this._v_GridHeightFactor = this.GRIDHEIGHT_FACTOR_MAX;
                }

                var aHeight = this._v_GridHeightFactor * this.GRIDHEIGHT_UNITPIXELS;

                aDomGridTableHolder.setAttribute('style', 'height:' + aHeight + "px");

                return true;
            };
            if( pUIStretchGrid){}/* CQT */
            aPrototype.pUIStretchGrid = pUIStretchGrid;














            var pUISelectionClick_DoAtBegin = function( theEvent) {
                if( !theEvent) {
                }
            };
            if( pUISelectionClick_DoAtBegin){}/* CQT */
            aPrototype.pUISelectionClick_DoAtBegin = pUISelectionClick_DoAtBegin;








            var pUISelectionClick_DoAtEnd = function( theEvent) {
                if( !theEvent) {
                }
            };
            if( pUISelectionClick_DoAtEnd){}/* CQT */
            aPrototype.pUISelectionClick_DoAtEnd = pUISelectionClick_DoAtEnd;










            var fUISelectionClickListener = function( theEvent) {

                this._v_WaitsDeleteConfirmation = false;

                this.pUISelectionClick_DoAtBegin( theEvent);

                var aRowIndex = null;

                var aContinueToEnd = false;

                try {

                    if( !theEvent) {
                        return true;
                    }

                    var aTarget = theEvent.currentTarget;
                    if( !aTarget) {
                        return true;
                    }

                    if( !( aTarget.nodeName.toLowerCase() == "td")) {
                        return true;
                    }

                    var aRowNode = aTarget.parentNode;
                    if( !aRowNode) {
                        return true;
                    }

                    if( !( aRowNode.nodeName.toLowerCase() == "tr")) {
                        return true;
                    }


                    var someRows = this.fCachedRowDOMelements();
                    if( !someRows) {
                        return true;
                    }

                    aRowIndex = someRows.indexOf( aRowNode);

                    var aCurrentSelectionIndex = this.fSelectionIndex();

                    if( !( aRowIndex == null) &&  ( aRowIndex >= 0) &&  !( aCurrentSelectionIndex == null)  &&  ( aCurrentSelectionIndex >= 0)) {

                        var aRowIndexAbsolute = aRowIndex;
                        if( !( typeof this._v_PageFirstRowIndex == "undefined") && !( this._v_PageFirstRowIndex == null)) {
                         aRowIndexAbsolute +=  this._v_PageFirstRowIndex;
                        }

                        if( aRowIndexAbsolute == aCurrentSelectionIndex) {
                            return this.fprDo_UnSelect( aRowIndex);
                        }
                    }

                    this.pDisableScrollRowIntoView( true);

                    aContinueToEnd = true;
                }
                finally {
                    if( !aContinueToEnd) {
                        this.pUISelectionClick_DoAtEnd( theEvent);
                    }
                }


                var aThis = this;

                return this.fprDo_Select( aRowIndex)
                    ['finally']( function() {
                        aThis.pDisableScrollRowIntoView( false);

                        aThis.pUISelectionClick_DoAtEnd( theEvent);
                    });
            };
            if( fUISelectionClickListener){}/* CQT */
            aPrototype.fUISelectionClickListener = fUISelectionClickListener;







            var pDisableScrollRowIntoView  = function( theDisabled) {

                this._v_DisableScrollRowIntoView = theDisabled ? true : false;
            };
            if( pDisableScrollRowIntoView){}/* CQT */
            aPrototype.pDisableScrollRowIntoView = pDisableScrollRowIntoView;






            var pScrollSelectedRowIntoView = function() {

                if( !this.SCROLLSELECTEDROWINTOVIEW) {
                    return;
                }

                if( this._v_DisableScrollRowIntoView) {
                    return;
                }


                var aSelection = this.fSelection();
                if( !aSelection) {
                    return;
                }


                if( !this._v_Rows) {
                    return;
                }

                var aSelectionIndex = this._v_Rows.indexOf( aSelection);
                if( aSelectionIndex < 0) {
                    return;
                }

                this.pScrollRowIntoView( aSelectionIndex);

            };
            if( pScrollSelectedRowIntoView){}/* CQT */
            aPrototype.pScrollSelectedRowIntoView = pScrollSelectedRowIntoView;







            var pScrollRowIntoView = function( theSelectionIndex) {

                if( !this.SCROLLROWINTOVIEW) {
                    return;
                }

                if( this._v_DisableScrollRowIntoView) {
                    return;
                }

                if( ( theSelectionIndex == null) || ( typeof theSelectionIndex == "undefined")) {
                    return;
                }

                if( theSelectionIndex < 0) {
                    return;
                }

                var someCachedRowDOMelements = this.fCachedRowDOMelements();
                if( !someCachedRowDOMelements) {
                    return;
                }

                var aNumDomElements = someCachedRowDOMelements.size;

                if( theSelectionIndex >= aNumDomElements) {
                    return;
                }

                var aDOMelement = someCachedRowDOMelements[ theSelectionIndex];
                if( !aDOMelement) {
                    return;
                }

                console.log( "scrollIntoView theSelectionIndex=" + theSelectionIndex);

                aDOMelement.scrollIntoView();

            };
            if( pScrollRowIntoView){}/* CQT */
            aPrototype.pScrollRowIntoView = pScrollRowIntoView;







            var pHookUISelectionClickListeners = function( ) {

                var aRandomCellClass = this.fRandomCellClass();

                /* *****************************************************************************************
                Find all cells from this grid:
                the ones annotated with the random class built solely for the cells managed by this GridCtrl
                */
                var someCells = $( "td." + aRandomCellClass);

                if( someCells && someCells.length) {

                    if( this._v_SelectionClickListener) {
                        someCells.unbind( "click", this._v_SelectionClickListener);
                    }
                    this._v_SelectionClickListener = this.fUISelectionClickListener.bind( this);

                    someCells.click( this._v_SelectionClickListener );
                }
            };
            if( pHookUISelectionClickListeners){}/* CQT */
            aPrototype.pHookUISelectionClickListeners = pHookUISelectionClickListeners;








            var pUnHookUISelectionClickListeners = function( ) {

                if( !this._v_SelectionClickListener) {
                    return;
                }

                var aRandomCellClass = this.fRandomCellClass();

                /* *****************************************************************************************
                 Find all cells from this grid:
                 the ones annotated with the random class built solely for the cells managed by this GridCtrl
                 */
                var someCells = $( "td." + aRandomCellClass);

                if( someCells && someCells.length) {

                    someCells.unbind( "click", this._v_SelectionClickListener);
                }
            };
            if( pUnHookUISelectionClickListeners){}/* CQT */
            aPrototype.pUnHookUISelectionClickListeners = pUnHookUISelectionClickListeners;








            var fprDo_Select = function( theRowIndex) {

                var aDeferred = this.fNewDeferred();

                if( theRowIndex < 0) {
                    this._v_PreviousSelectionIndex = null;

                    this.pDeferredResolveWithNothing();
                    return aDeferred.promise;
                }



                this.pCacheUnselectAndSelect( this._v_PreviousSelectionIndex, theRowIndex);

                this._v_PreviousSelectionIndex = theRowIndex;

                var aThis = this;
                (function() {

                    var aDeferred_here   = aDeferred;
                    var aThis_here       = aThis;
                    var theRowIndex_here = theRowIndex;

                    $timeout(
                        function() {
                            aThis_here.
                                fprDo_SelectionChanged( theRowIndex_here)
                                .then( function() {

                                    aThis_here.pDeferredResolveWithSelectionIndex( aDeferred_here, theRowIndex_here);
                                });
                        },
                        aThis_here.REFRESHDELAYMILLIS
                    );
                })();

                return aDeferred.promise;
            };
            if( fprDo_Select){}/* CQT */
            aPrototype.fprDo_Select = fprDo_Select;












            var fprDo_UnSelect = function() {

                var aDeferred = this.fNewDeferred();

                this.pCacheUnselect( this._v_PreviousSelectionIndex);

                this._v_PreviousSelectionIndex = -1;

                var aThis = this;
                (function() {

                    var aDeferred_here   = aDeferred;
                    var aThis_here       = aThis;

                    $timeout(
                        function() {
                            aThis_here.fprDo_SelectionChanged( -1)
                                .then( function() {
                                    aThis_here.pDeferredResolveWithSelectionIndex( aDeferred_here, -1);
                                });
                        },
                        aThis_here.REFRESHDELAYMILLIS
                    );
                })();

                return aDeferred.promise;
            };
            if( fprDo_UnSelect){}/* CQT */
            aPrototype.fprDo_UnSelect = fprDo_UnSelect;









            var fprDo_ReSelect = function( thePreviousSelectionHolder) {

                if( !thePreviousSelectionHolder) {
                    return this.fNewDeferredRejectPromise( "fprDo_ReSelect !thePreviousSelectionHolder");
                }

                if( !thePreviousSelectionHolder.length) {
                    return this.fNewDeferredRejectPromise( "fprDo_ReSelect !thePreviousSelectionHolder.length");
                }

                var aPreviousSelection = thePreviousSelectionHolder[ 0];

                var aNewSelectionIndex = -1;

                if( aPreviousSelection) {
                    if( this._v_Rows) {
                        aNewSelectionIndex = this._v_Rows.indexOf( aPreviousSelection);
                    }
                }

                if( aNewSelectionIndex < 0) {
                    return this.fprDo_UnSelect();
                }

                return this.fprDo_Select( aNewSelectionIndex);
            };
            if( fprDo_ReSelect){}/* CQT */
            aPrototype.fprDo_ReSelect = fprDo_ReSelect;








            var fprDo_AutoSelect = function( ) {

                if( this.fSelection()) {
                    return this.fNewDeferredResolveWithNothingPromise();
                }

                if( !( typeof this._v_AutoSelectIndex == "number") ||
                    ( this._v_AutoSelectIndex < 0)  || ( this._v_AutoSelectIndex >= this.fNumRows())) {

                    return this.fNewDeferredResolveWithNothingPromise();
                }

                return this.fprDo_Select( this._v_AutoSelectIndex);
            };
            if( fprDo_AutoSelect){}/* CQT */
            aPrototype.fprDo_AutoSelect = fprDo_AutoSelect;















            var fprDo_RowsChanged = function( ) {

                this.pHookResizableGrid();

                var someRows = this.fRows();

                var someListenerPromises = [ ];

                var aNumListeners = this._v_RowsChangeListeners.length;
                for( var aListenerIdx=0; aListenerIdx < aNumListeners; aListenerIdx++) {

                    var aListener = this._v_RowsChangeListeners[ aListenerIdx];
                    if( aListener) {

                        if( typeof aListener == "function") {

                            var aListenerResult = aListener( this.fRows());
                            if( aListenerResult && aListenerResult.then) {
                                someListenerPromises.push( aListenerResult);
                            }
                        }
                        else {

                            if( ( typeof aListener == "object") && ( aListener.length)) {


                                aListener.forEach( function( athListenerOne) {

                                    if( typeof athListenerOne == "function") {
                                        var aOneListenerResult = athListenerOne( someRows);
                                        if( aOneListenerResult && aOneListenerResult.then) {
                                            someListenerPromises.push( aOneListenerResult);
                                        }
                                    }
                                });
                            }
                        }
                    }
                }

                var aNumListenerPromises = someListenerPromises.length;
                if( !aNumListenerPromises) {
                    return this.fNewDeferredResolveWithRowsPromise( someRows);
                }

                if( aNumListenerPromises == 1) {
                    return someListenerPromises[ 0];
                }

                return this.fNewPromiseAll( someListenerPromises);
            };
            if( fprDo_RowsChanged){}/* CQT */
            aPrototype.fprDo_RowsChanged = fprDo_RowsChanged;














            var pInhibitSelectionChangeNotifications = function( theInhibit) {

                this._v_InhibitSelectionChangeNotifications = theInhibit ? true : false;
            };
            if( pInhibitSelectionChangeNotifications){}/* CQT */
            aPrototype.pInhibitSelectionChangeNotifications = pInhibitSelectionChangeNotifications;











            var fprDo_SelectionChanged= function( theSelectionIndex) {

                this._v_WaitsDeleteConfirmation = false;


                var aSelection = null;

                if( theSelectionIndex >= 0) {


                    var aPagedSelectionIndex = theSelectionIndex;
                    if( this._v_Paging) {
                        aPagedSelectionIndex += this._v_PageFirstRowIndex;
                    }

                    var someRows = this.fRows();
                    if( someRows) {

                        var aNumRows = someRows.length;
                        if( aPagedSelectionIndex < aNumRows) {
                            aSelection = someRows[ aPagedSelectionIndex];
                        }
                    }
                }


                if( aSelection == this._v_Selection) {
                    return this.fNewDeferredResolveWithNothingPromise();
                }


                this._v_Selection = aSelection;

                if( this._v_InhibitSelectionChangeNotifications) {
                    return this.fNewDeferredResolveWithFieldsPromise( this._v_Selection);
                }

                var someListenerPromises = [ ];

                var aNumListeners = this._v_SelectionChangeListeners.length;
                for( var aListenerIdx=0; aListenerIdx < aNumListeners; aListenerIdx++) {

                    var aListener = this._v_SelectionChangeListeners[ aListenerIdx];
                    if( aListener) {

                        if( typeof aListener == "function") {

                            var aListenerResult = aListener( aSelection, theSelectionIndex);
                            if( aListenerResult && aListenerResult.then) {
                                someListenerPromises.push( aListenerResult);
                            }
                        }
                        else {

                            if( ( typeof aListener == "object") && ( aListener.length)) {

                                aListener.forEach( function( athListenerOne) {

                                    if( typeof athListenerOne == "function") {
                                        var aOneListenerResult = athListenerOne( aSelection, theSelectionIndex);
                                        if( aOneListenerResult && aOneListenerResult.then) {
                                            someListenerPromises.push( aOneListenerResult);
                                        }
                                    }
                                });
                            }
                        }
                    }
                }



                var aNumListenerPromises = someListenerPromises.length;
                if( !aNumListenerPromises) {
                    return this.fNewDeferredResolveWithNothingPromise();
                }

                if( aNumListenerPromises == 1) {
                    return someListenerPromises[ 0];
                }

                return this.fNewPromiseAll( someListenerPromises);
            };
            if( fprDo_SelectionChanged){}/* CQT */
            aPrototype.fprDo_SelectionChanged = fprDo_SelectionChanged;











            var fUIGridRefreshClickListener = function( theEvent) {
                if( theEvent){}/* CQT */

                this._v_WaitsDeleteConfirmation = false;

                this.fprDo_RetrieveRowsAgain();

                return true;
            };
            if( fUIGridRefreshClickListener){}/* CQT */
            aPrototype.fUIGridRefreshClickListener = fUIGridRefreshClickListener;








            var fUICreateClickListener = function( theEvent) {
                if( theEvent){}/* CQT */

                this._v_WaitsDeleteConfirmation = false;


                if( !this._v_CreatorName) {
                    return true;
                }

                if( !this._v_ParentCtrl) {
                    return true;
                }

                this._v_ParentCtrl.pSetInCreation( this._v_CreatorName);

                return true;
            };
            if( fUICreateClickListener){}/* CQT */
            aPrototype.fUICreateClickListener = fUICreateClickListener;








            var fUIDeleteSelectionClickListener = function( theEvent) {
                if( theEvent){}/* CQT */

                this._v_WaitsDeleteConfirmation = true;

                return true;
            };
            if( fUIDeleteSelectionClickListener){}/* CQT */
            aPrototype.fUIDeleteSelectionClickListener = fUIDeleteSelectionClickListener;






            var fUICancelDeleteSelectionClickListener = function( theEvent) {
                if( theEvent){}/* CQT */

                this._v_WaitsDeleteConfirmation = false;

                return true;
            };
            if( fUICancelDeleteSelectionClickListener){}/* CQT */
            aPrototype.fUICancelDeleteSelectionClickListener = fUICancelDeleteSelectionClickListener;






            var fUIConfirmDeleteSelectionClickListener = function( theEvent) {
                if( theEvent){}/* CQT */

                if( !this._v_WaitsDeleteConfirmation) {
                    return true;
                }

                this._v_WaitsDeleteConfirmation = false;


                this.fprDo_DeleteSelectedRow()
                    .then(
                        function( theChanges, theMore) {
                            if( theChanges){}/* CQT */
                            if( theMore){}/* CQT */
                            console.log( "\n\nfUIConfirmDeleteSelectionClickListener DELETED\n\n\n");
                        }
                    )
                    ["catch"]( function( theError) {
                        if( theError){}/* CQT */
                        console.log( "\n\nfUIConfirmDeleteSelectionClickListener ERROR DELETING\n\n\n");
                    });

                return true;
            };
            if( fUIConfirmDeleteSelectionClickListener){}/* CQT */
            aPrototype.fUIConfirmDeleteSelectionClickListener = fUIConfirmDeleteSelectionClickListener;










            var fUIPageMaxSizeChangeListener = function( theEvent) {
                if( theEvent){}/* CQT */

                this._v_WaitsDeleteConfirmation = false;

                return true;
            };
            if( fUIPageMaxSizeChangeListener){}/* CQT */
            aPrototype.fUIPageMaxSizeChangeListener = fUIPageMaxSizeChangeListener;






            var fUIApplyPageMaxSizeListener = function( theEvent) {
                if( theEvent){}/* CQT */

                this._v_WaitsDeleteConfirmation = false;

                this.fprDo_PageMaxSize()
                    .then( function() {
                        console.log( "fUIApplyPageMaxSizeListener APPLIED")
                    })
                    ["catch"]( function( theError) {
                    if( theError){}/* CQT */
                    console.log( "\n\nfUIApplyPageMaxSizeListener ERROR APPLYING\n\n\n");
                });

                return true;
            };
            if( fUIApplyPageMaxSizeListener){}/* CQT */
            aPrototype.fUIApplyPageMaxSizeListener = fUIApplyPageMaxSizeListener;







            var fprDo_PageMaxSize = function() {
                var aMethodName = this._v_Type + " fprDo_PageMaxSize";

                this._v_WaitsDeleteConfirmation = false;

                if( !this._v_PageMaxSizeInput) {
                    this._v_PageMaxSizeInput = "" + ( this._v_PageMaxSize || this.MAXPAGESIZEDEFAULT);

                    return this.fNewDeferredResolveWithNothingPromise();
                }


                var aMaxPageSize = null;
                try {
                    aMaxPageSize = parseInt( this._v_PageMaxSizeInput)
                }
                catch( anException) {}
                if( !( typeof aMaxPageSize == "number")) {

                    this._v_PageMaxSizeInput = "" + ( this._v_PageMaxSize || this.MAXPAGESIZEDEFAULT);

                    return this.fNewDeferredResolveWithNothingPromise();
                }



                if( !( aMaxPageSize > 0)) {
                    this._v_PageMaxSizeInput = "" + ( this._v_PageMaxSize || this.MAXPAGESIZEDEFAULT);

                    return this.fNewDeferredResolveWithNothingPromise();
                }


                if( aMaxPageSize > this.MAXPAGESIZEHARDLIMIT) {

                    aMaxPageSize = this.MAXPAGESIZEHARDLIMIT;
                    this._v_PageMaxSizeInput = "" + aMaxPageSize;
                }



                this._v_PageMaxSize = aMaxPageSize;


                if( this._v_NoPage) {
                    return this.fNewDeferredResolveWithNothingPromise();
                }

                if( !this._v_NewCellValuesCache || !( typeof this._v_NewCellValuesCache.length == "number")) {
                    return this.fNewDeferredResolveWithNothingPromise();
                }

                var aNumRows = this._v_NewCellValuesCache.length;

                if( !aNumRows) {
                    return this.fNewDeferredResolveWithNothingPromise();
                }

                return this.fprDo_RefreshRows( this._v_Rows);

                if( this._v_PageMaxSizeTimeout) {
                    this._v_PageMaxSizeTimeout = $timeout.cancel( this._v_PageMaxSizeTimeout);
                    this._v_PageMaxSizeTimeout = null;
                }


                this._v_PageMaxSizeTimeout = $timeout.cancel( this._v_PageMaxSizeTimeout);

                var aTimeoutHandler = this.fPageMaxSizeTimeoutHandler();

                this._v_PageMaxSizeTimeout  = $timeout( aTimeoutHandler);
            };
            if( fprDo_PageMaxSize){}/* CQT */
            aPrototype.fprDo_PageMaxSize = fprDo_PageMaxSize;















            var fUIGridFirstClickListener = function( theEvent) {
                if( theEvent){}/* CQT */

                this._v_WaitsDeleteConfirmation = false;

                this.fprDo_GridPaging( "First");

                return true;
            };
            if( fUIGridFirstClickListener){}/* CQT */
            aPrototype.fUIGridFirstClickListener = fUIGridFirstClickListener;







            var fUIGridPreviousClickListener = function( theEvent) {
                if( theEvent){}/* CQT */

                this._v_WaitsDeleteConfirmation = false;

                this.fprDo_GridPaging( "Previous");

                return true;
            };
            if( fUIGridPreviousClickListener){}/* CQT */
            aPrototype.fUIGridPreviousClickListener = fUIGridPreviousClickListener;









            var fUIGridNextClickListener = function( theEvent) {
                if( theEvent){}/* CQT */

                this._v_WaitsDeleteConfirmation = false;

                this.fprDo_GridPaging( "Next");

                return true;
            };
            if( fUIGridNextClickListener){}/* CQT */
            aPrototype.fUIGridNextClickListener = fUIGridNextClickListener;





            var fUIGridLastClickListener = function( theEvent) {
                if( theEvent){}/* CQT */

                this._v_WaitsDeleteConfirmation = false;

                this.fprDo_GridPaging( "Last");

                return true;
            };
            if( fUIGridLastClickListener){}/* CQT */
            aPrototype.fUIGridLastClickListener = fUIGridLastClickListener;











            var fprDo_GridPaging = function( theGotoPage) {
                var aMethodName = this._v_Type + " fprDo_GridPaging";

                this._v_WaitsDeleteConfirmation = false;


                if( !theGotoPage) {
                    return this.fNewDeferredResolveWithNothingPromise();
                }

                if( this._v_NoPage) {
                    return this.fNewDeferredResolveWithNothingPromise();
                }


                if( !this._v_NewCellValuesCache || !( typeof this._v_NewCellValuesCache.length == "number")) {
                    return this.fNewDeferredResolveWithNothingPromise();
                }

                var aNumRows = this._v_NewCellValuesCache.length;
                if( !aNumRows) {
                    return this.fNewDeferredResolveWithNothingPromise();
                }


                if( !this._v_Paging) {
                    return this.fNewDeferredResolveWithNothingPromise();
                }

                if( !this._v_PageMaxSize) {
                    return this.fNewDeferredResolveWithNothingPromise();
                }


                if( theGotoPage == "First") {
                    this._v_PageFirstRowIndex = 0;
                }
                else {

                    if( theGotoPage == "Previous") {

                        var aPreviousRowIndexToRender = this._v_PageFirstRowIndex;
                        if( !( typeof aPreviousRowIndexToRender  == "number")) {
                            aPreviousRowIndexToRender = 0;
                        }
                        aPreviousRowIndexToRender -= this._v_PageMaxSize;
                        if( aPreviousRowIndexToRender < 0) {
                            aPreviousRowIndexToRender = 0;
                        }

                        this._v_PageFirstRowIndex = aPreviousRowIndexToRender;
                    }
                    else {
                        if( theGotoPage == "Next") {

                            var aNextRowIndexToRender = this._v_PageFirstRowIndex;
                            if( !( typeof aNextRowIndexToRender  == "number")) {
                                aNextRowIndexToRender = 0;
                            }
                            aNextRowIndexToRender += this._v_PageMaxSize;
                            if( aNextRowIndexToRender >= aNumRows) {
                                aNextRowIndexToRender = aNumRows - 1;
                            }

                            this._v_PageFirstRowIndex = aNextRowIndexToRender;
                        }
                        else {
                            if( theGotoPage == "Last") {
                                this._v_PageFirstRowIndex = aNumRows - this._v_PageMaxSize;
                            }
                        }
                    }
                }

                return this.fprDo_RefreshRows( this._v_Rows);

            };
            if( fprDo_GridPaging){}/* CQT */
            aPrototype.fprDo_GridPaging = fprDo_GridPaging;





















            var fprDo_DeleteSelectedRow = function() {

                var aMethodName = "fprDo_DeleteSelectedRow";


                if( this.LOGDELETETRIGGERLISTENED) {
                    this.fRecord( aMethodName, this.EVENTKIND_LISTENED, this.fSelection(), null, null);
                }

                var aDeletionActionReport = this.fNewDeletionActionReport();
                if( !aDeletionActionReport) {
                    return this.fNewDeferredResolveWithNullPromise();
                }


                var anUpdater = this.fNewDeletionUpdater( aDeletionActionReport);
                if( !anUpdater) {
                    return this.fNewDeferredResolveWithNullPromise();
                }


                var aDeletePromise = anUpdater();

                var aThis = this;

                return aDeletePromise
                    .then( function() {
                        aThis.pReportActionSuccess( aDeletionActionReport);

                        return aThis.fprDo_RetrieveRowsAgain();
                    })
                    .then( function( theRetrieved) {

                        var aRetrieved = theRetrieved;

                        return aThis.fprDo_NotifyModifyingActionHappened( false)
                            .then( function( ) {
                                return aThis.fNewDeferredResolvePromise( aRetrieved);
                            });
                    })
                    ["catch"]( function( theError) {

                        aThis.pReportFailedAction( aDeletionActionReport, aThis.ACTIONFAILURE_PROMISECATCH, theError);

                        throw aDeletionActionReport;
                    });

            };
            if( fprDo_DeleteSelectedRow){}/* CQT */
            aPrototype.fprDo_DeleteSelectedRow = fprDo_DeleteSelectedRow;












            var fNewDeletionUpdater = function( theActionReport) {

                var aMethodName = this._v_Type + " fNewDeletionUpdater";
                if( aMethodName){}/* CQT */

                if( !this._v_Delete) {
                    return null;
                }

                var aForm = theActionReport._v_Form;
                if( !aForm) {
                    return null;
                }

                var aParentCtrl = this.fParentCtrl();
                if( !aParentCtrl) {
                    return null;
                }

                var aDeleteTargetName = this._v_DeleteTarget;
                if( !aDeleteTargetName) {
                    aDeleteTargetName = this._v_RetrievalTarget;
                    if( !aDeleteTargetName) {
                        return null;
                    }
                }

                var aDeleteTarget = aParentCtrl[ aDeleteTargetName];
                if( !aDeleteTarget) {
                    return null;
                }

                if( typeof aDeleteTarget == "function") {
                    aDeleteTarget = aDeleteTarget();
                }

                var anUpdater = aDeleteTarget[ this._v_Delete];
                if( !anUpdater) {
                    return null;
                }

                if( !(typeof anUpdater == "function")) {
                    return null;
                }

                var aBoundUpdater = anUpdater.bind( aDeleteTarget, aForm);
                if( aBoundUpdater){}/* CQT */

                return aBoundUpdater;
            };
            if( fNewDeletionUpdater){}/* CQT */
            aPrototype.fNewDeletionUpdater = fNewDeletionUpdater;








            var fLabelForFieldNamed = function( theFieldName) {

                if( !theFieldName) {
                    return null;
                }

                if( !this._v_Fields) {
                    return null;
                }

                if( !this._v_Labels) {
                    return null;
                }

                var aFieldIndex = this._v_Fields.indexOf( theFieldName);
                if( aFieldIndex < 0) {
                    return null;
                }

                var aNumLabels = this._v_Labels.length;
                if( aFieldIndex >= aNumLabels) {
                    return null;
                }

                var aLabel = this._v_Labels[ aFieldIndex];
                if( aLabel){}/* CQT */

                return aLabel;
            };
            if( fLabelForFieldNamed){}/* CQT */
            aPrototype.fLabelForFieldNamed = fLabelForFieldNamed;





            var fNewDeletionActionReport = function() {

                var aMethodName = this._v_Type + " fNewDeletionActionReport";
                if( aMethodName){}/* CQT */

                var aSelection = this.fSelection();
                if( !aSelection) {
                    return null;
                }

                if( !this.fCanDeleteSelection()) {
                    return null;
                }



                var aDeleteForm = { };
                var aDeleteFormDescribe = [ ];


                var aWith = aSelection;


                if( this._v_DeleteWith) {
                    aWith = aSelection[ this._v_DeleteWith];
                    if( typeof aWith == "undefined") {
                        return null;
                    }
                }




                if( this._v_DeleteQuery) {

                    var someQueryKeys = Object.keys( this._v_DeleteQuery);
                    var aNumQueryKeys = someQueryKeys.length;
                    for( var aQueryKeyIdx=0; aQueryKeyIdx < aNumQueryKeys; aQueryKeyIdx++) {

                        var aQueryKey   = someQueryKeys[ aQueryKeyIdx];
                        var aQueryValue = this._v_DeleteQuery[ aQueryKey];

                        var aQueryEntryWithName = aQueryValue;

                        var aQueryValueSupplier = this;
                        if( aQueryValue.indexOf( this.RETRIEVALWITHPARENTSENTINEL) == 0) {
                            aQueryEntryWithName = aQueryValue.replace( this.RETRIEVALWITHPARENTSENTINEL, "");
                            aQueryValueSupplier = this.fParentCtrl();
                        }
                        else {
                            aQueryValueSupplier = this.fSelection();
                        }

                        if( aQueryValueSupplier) {
                            var aQueryEntryWithValue = aQueryValueSupplier[ aQueryEntryWithName];
                            if( !( typeof aQueryEntryWithValue == "undefined")) {

                                aDeleteForm[ aQueryKey] = aQueryEntryWithValue;

                                var otherFieldLabel = this.fLabelForFieldNamed( aQueryEntryWithName);
                                if( otherFieldLabel){
                                    aDeleteFormDescribe.push( this.fNewDescribe( aQueryEntryWithName, otherFieldLabel, aQueryKey));
                                }
                            }
                        }
                    }

                }


                if( this._v_DeleteWith) {
                    var aFieldLabel = this.fLabelForFieldNamed( this._v_DeleteWith);
                    if( aFieldLabel){
                        aDeleteFormDescribe.push( this.fNewDescribe( this._v_DeleteWith, aFieldLabel, this._v_DeleteParm));
                    }
                }

                if( this._v_DeleteParm) {
                    aDeleteForm[ this._v_DeleteParm] = aWith;
                }

                if( this._v_DeleteSucessIfNotExistsParm) {
                    aDeleteForm[ this._v_DeleteSucessIfNotExistsParm] = true;
                }


                if( Object.keys( aDeleteForm).length < 1) {
                    return null;
                }


                var anActionReport = this.fCreateAndRegisterActionReport(
                    this.ACTIONKIND_DELETE,
                    this._v_GridName, /* theActionName */
                    null, /* theWith */
                    null, /* theWithDescribe */
                    aDeleteForm, /* theForm */
                    aDeleteFormDescribe, /* theFormDescribe */
                    null, /* theHitServerReport */
                    false, /* thePerformed */
                    false, /* theSuccess */
                    null, /* theFailureKind */
                    null /* theFailureDetails */
                );
                if( anActionReport){}/* CQT */

                return anActionReport;

            };
            if( fNewDeletionActionReport){}/* CQT */
            aPrototype.fNewDeletionActionReport = fNewDeletionActionReport;














            var fprDo_UpdateRow_AfterEdition_AndPropagateToWiresWithChanged = function( theRetrievedFields) {

                var aMethodName = "fprDo_UpdateRow_AfterEdition_AndPropagateToWiresWithChanged";
                if( aMethodName){}/* CQT */


                var someChangedFieldNames = this.fSetRowWithData_ChangedFieldNames( theRetrievedFields);

                if( !someChangedFieldNames || !someChangedFieldNames.length) {
                    return this.fNewDeferredResolveWithFieldsPromise( theRetrievedFields);
                }

                var somePromises = [ ];

                var someWiresFromThisWith = this.fWiresFromThisWith( someChangedFieldNames);
                if( someWiresFromThisWith) {

                    var aNumWires = someWiresFromThisWith.length;
                    for( var aWireIdx=0; aWireIdx < aNumWires; aWireIdx++) {

                        var aWire = someWiresFromThisWith[ aWireIdx];
                        if( aWire) {

                            var aWireSelectionChangeListener = aWire.fNewGridSelectionChangeListener();
                            if( aWireSelectionChangeListener) {

                                var aWirePromise = aWireSelectionChangeListener();
                                if( aWirePromise) {
                                    if( aWirePromise.then) {
                                        somePromises.push( aWirePromise);
                                    }
                                }
                            }
                        }
                    }
                }



                var aThis = this;
                var someRetrievedFields = theRetrievedFields;


                if( !somePromises.length) {
                    return this.fNewDeferredResolveWithFieldsPromise( theRetrievedFields)
                        .then( function( theOtherRetrievedFields) {
                            if( theOtherRetrievedFields){}/* CQT */

                            return aThis.fprDo_NotifyModifyingActionHappened( true)
                                .then( function() {
                                    return aThis.fNewDeferredResolvePromise( someRetrievedFields);
                                });
                        });
                }


                if( somePromises.length == 1) {
                    return somePromises[ 0]
                        .then( function() {
                            return aThis.fNewDeferredResolveWithFieldsPromise( someRetrievedFields);
                        })
                        .then( function( theOtherRetrievedFields) {
                            if( theOtherRetrievedFields){}/* CQT */

                            return aThis.fprDo_NotifyModifyingActionHappened( true)
                                .then( function( ) {
                                    return aThis.fNewDeferredResolvePromise( someRetrievedFields);
                                });
                        });
                }


                return this.fNewPromiseAll( somePromises)
                    .then( function( theWireSelectionChangeResponses) {
                        if( theWireSelectionChangeResponses){}/* CQT */

                        return aThis.fNewDeferredResolveWithFieldsPromise( someRetrievedFields);
                    })
                    .then( function( theAnotherRetrievedFields) {
                        if( theAnotherRetrievedFields){}/* CQT */

                        /*
                        var aAnotherRetrievedFields = theAnotherRetrievedFields;
                        */
                        return aThis.fprDo_NotifyModifyingActionHappened( true)
                            .then( function( ) {
                                return aThis.fNewDeferredResolveWithRowsPromise( someRetrievedFields);
                            });
                    })
                    ["catch"]( function( theError) {

                        throw theError;
                    })
                    ['finally']( function( theOne, theOther) {
                        if( theOne){}/* CQT */
                        if( theOther){}/* CQT */

                           console.log( "HERE!!!");
                    });

            };
            if( fprDo_UpdateRow_AfterEdition_AndPropagateToWiresWithChanged){}/* CQT */
            aPrototype.fprDo_UpdateRow_AfterEdition_AndPropagateToWiresWithChanged = fprDo_UpdateRow_AfterEdition_AndPropagateToWiresWithChanged;







            var fWiresFromThisWith = function( theFieldNames) {

                if( !theFieldNames) {
                    return null;
                }

                var aParentCtrl = this.fParentCtrl();
                if( !aParentCtrl) {
                    return null;
                }

                var someWires = aParentCtrl.fWiresFromWith( this, theFieldNames);
                if( someWires){}/* CQT */

                return someWires;
            };
            if( fWiresFromThisWith){}/* CQT */
            aPrototype.fWiresFromThisWith = fWiresFromThisWith;














            var fSetRowWithData_ChangedFieldNames = function( theFields) {

                if( !theFields) {
                    return null;
                }

                if( !this._v_Fields) {
                    return null;
                }


                var someChangedFields = [ ];


                var aSelection = this.fSelection();
                if( !aSelection) {
                    return someChangedFields;
                }

                var aSelectionIndex = this.fSelectionIndex();
                if( aSelectionIndex < 0) {
                    return null;
                }

                if( !this._v_Rows) {
                    return someChangedFields;
                }

                var aNumRows = this._v_Rows.length;
                if( aSelectionIndex >= aNumRows) {
                    return someChangedFields;
                }

                var aRowToUpdate = this._v_Rows[ aSelectionIndex];
                if( !aRowToUpdate) {
                    return someChangedFields;
                }


                var aCellValuesCacheToUpdate = null;

                if( this._v_CellValuesCache) {

                    var aNumCellValuesCache = this._v_CellValuesCache.length;
                    if( aSelectionIndex < aNumCellValuesCache) {

                        aCellValuesCacheToUpdate = this._v_CellValuesCache[ aSelectionIndex];
                    }
                }


                var aNumFields    = this._v_Fields.length;

                for( var aFieldIdx=0; aFieldIdx < aNumFields; aFieldIdx++) {

                    var aField = this._v_Fields[ aFieldIdx];
                    if( aField) {

                        var aFieldValue = theFields[ aField];


                        aRowToUpdate[ aField] = aFieldValue;


                        var aConvertedFieldValue = this.fConvertFieldValueForCache( aFieldValue,  aFieldIdx);
                        if( aConvertedFieldValue){}/* CQT */


                        var aCurrentValue =  aCellValuesCacheToUpdate[ aFieldIdx];

                        if( !( aConvertedFieldValue == aCurrentValue)) {
                            someChangedFields.push( aField);
                        }

                        aCellValuesCacheToUpdate[ aFieldIdx] = aConvertedFieldValue;
                    }
                }


                this.pSetRowDOMWithDataAtIndex( theFields, aSelectionIndex);

                return someChangedFields;

            };
            if( fSetRowWithData_ChangedFieldNames){}/* CQT */
            aPrototype.fSetRowWithData_ChangedFieldNames = fSetRowWithData_ChangedFieldNames;











            var pSetRowDOMWithDataAtIndex = function( theFields, theSelectionIndex) {

                if( !theFields) {
                    return;
                }

                if( theSelectionIndex < 0) {
                    return;
                }

                if( !this._v_Fields) {
                    return;
                }

                var someCachedRowDOMelements = this.fCachedRowDOMelements();
                if( !someCachedRowDOMelements) {
                    return;
                }

                var aNumCachedRowDOMelements = someCachedRowDOMelements.length;

                if( theSelectionIndex >= aNumCachedRowDOMelements) {
                    return;
                }


                var aRowDOMelement = someCachedRowDOMelements[ theSelectionIndex];
                if( !aRowDOMelement) {
                    return
                }

                var aJQRowDOMelement = $( aRowDOMelement);

                var someChildrenCells = aJQRowDOMelement.children();
                if( !someChildrenCells) {
                    return;
                }

                var aNumChildrenCells = someChildrenCells.length;
                if( !aNumChildrenCells) {
                    return;
                }


                var aNumFields    = this._v_Fields.length;

                for( var aFieldIdx=0; aFieldIdx < aNumFields; aFieldIdx++) {

                    var aField = this._v_Fields[ aFieldIdx];
                    if( aField) {

                        var aFieldValue = theFields[ aField];

                        var aConvertedFieldValue = this.fConvertFieldValueForCache( aFieldValue,  aFieldIdx);
                        if( aConvertedFieldValue){}/* CQT */

                        var aCell = someChildrenCells[ aFieldIdx];
                        if( aCell) {

                            var aJQCell = $( aCell);

                            var someSpan = aJQCell.children( "span");
                            if( someSpan && someSpan.length) {

                                var aSpan = someSpan[ 0];
                                if( aSpan) {

                                    var aJQSpan = $( aSpan);
                                    aJQSpan.text( "" + aConvertedFieldValue);
                                }
                            }
                        }
                    }
                }
            };
            if( pSetRowDOMWithDataAtIndex){}/* CQT */
            aPrototype.pSetRowDOMWithDataAtIndex = pSetRowDOMWithDataAtIndex;












            var fIsGridRendered = function() {

               return true;
            };
            if( fIsGridRendered){}/* CQT */
            aPrototype.fIsGridRendered = fIsGridRendered;







            var fIsGridShown = function() {

                if( !this._v_CellValuesCache) {
                    return false;
                }

                return this._v_CellValuesCache.length > 0;
            };
            if( fIsGridShown){}/* CQT */
            aPrototype.fIsGridShown = fIsGridShown;









            var fRandomRowClass = function() {

                if( this._v_RandomRowClass) {
                    return this._v_RandomRowClass;
                }

                var aRandomNum = Math.floor( Math.random() * this.RANDOMCLASS_PRECISSION);

                this._v_RandomRowClass = this.ROWRANDOMCLASS_PREFIX + aRandomNum;

                return this._v_RandomRowClass;
            };
            if( fRandomRowClass){}/* CQT */
            aPrototype.fRandomRowClass = fRandomRowClass;









            var fRandomCellClass = function() {

                if( this._v_RandomCellClass) {
                    return this._v_RandomCellClass;
                }

                var aRandomNum = Math.floor( Math.random() * this.RANDOMCLASS_PRECISSION);

                this._v_RandomCellClass = this.CELLRANDOMCLASS_PREFIX + aRandomNum;

                return this._v_RandomCellClass;
            };
            if( fRandomCellClass){}/* CQT */
            aPrototype.fRandomCellClass = fRandomCellClass;








            var fWithRandomCellClass = function( theBaseClass) {

                var aBaseClass = theBaseClass;
                if( !aBaseClass) {
                    aBaseClass = "";
                }
                else {
                    aBaseClass += " ";
                }

                var aRandomCellClass = this.fRandomCellClass();

                var aWithRandomClass = ( aBaseClass + aRandomCellClass).trim();
                if( aWithRandomClass){}/* CQT */

                return aWithRandomClass;
            };
            if( fWithRandomCellClass){}/* CQT */
            aPrototype.fWithRandomCellClass = fWithRandomCellClass;








            var fCellClassWithBaseClass = function( theBaseClass) {

                var aBaseClass = theBaseClass;
                if( !aBaseClass) {
                    aBaseClass = "";
                }
                else {
                    aBaseClass += " ";
                }

                var aNumFields = this._v_Fields.length;

                var aNumColumns = this._v_ColumnClasses.length;

                var someCellCss = new Array( aNumFields);

                for( var aFieldIdx=0; aFieldIdx < aNumFields; aFieldIdx++) {

                    if( aFieldIdx >= aNumColumns) {
                        someCellCss[ aFieldIdx] = null;
                        continue;
                    }

                    var aFieldName = this._v_Fields[ aFieldIdx];
                    if( aFieldName) {
                        if( this._v_HiddenFields && ( this._v_HiddenFields.indexOf( aFieldName) >= 0)) {
                            someCellCss[ aFieldIdx] = this._v_GridClasses[ theS_CssKeys.GRIDCLASSKEY_HEADERCELLHIDDEN];
                            continue;
                        }
                    }

                    var aFieldClass = this._v_ColumnClasses[ aFieldIdx];
                    aFieldClass = ( aFieldClass ? ( aBaseClass + aFieldClass) : aBaseClass).trim();
                    if( aFieldClass){}/* CQT */

                    someCellCss[ aFieldIdx] = aFieldClass;
                }

                return someCellCss;
            };
            if( fCellClassWithBaseClass){}/* CQT */
            aPrototype.fCellClassWithBaseClass = fCellClassWithBaseClass;







            var fCellClassWithRandomAndBaseClass = function( theBaseClass) {

                var aBaseClass = this.fWithRandomCellClass( theBaseClass);
                if( !aBaseClass) {
                    aBaseClass = "";
                }
                else {
                    aBaseClass += " ";
                }

                var aNumFields = this._v_Fields.length;

                var aNumColumns = this._v_ColumnClasses.length;

                var someCellCss = new Array( aNumFields);

                for( var aFieldIdx=0; aFieldIdx < aNumFields; aFieldIdx++) {

                    if( aFieldIdx >= aNumColumns) {
                        someCellCss[ aFieldIdx] = null;
                        continue;
                    }

                    var aFieldName = this._v_Fields[ aFieldIdx];
                    if( aFieldName) {
                        if( this._v_HiddenFields && ( this._v_HiddenFields.indexOf( aFieldName) >= 0)) {
                            someCellCss[ aFieldIdx] = this._v_GridClasses[ theS_CssKeys.GRIDCLASSKEY_CELL_HIDDEN];
                            continue;
                        }
                    }

                    var anEvenFieldClass = this._v_ColumnClasses[ aFieldIdx];
                    var anEvenCellClass = ( anEvenFieldClass ? ( aBaseClass + anEvenFieldClass) : aBaseClass).trim();
                    if( anEvenCellClass){}/* CQT */

                    someCellCss[ aFieldIdx] = anEvenCellClass;
                }

                return someCellCss;
            };
            if( fCellClassWithRandomAndBaseClass){}/* CQT */
            aPrototype.fCellClassWithRandomAndBaseClass = fCellClassWithRandomAndBaseClass;








            var pUpdateCssCaches = function() {

                if( !this._v_GridClasses) {
                    return;
                }

                this._v_HeaderCellCssCache       = this.fCellClassWithBaseClass( this._v_GridClasses[ theS_CssKeys.GRIDCLASSKEY_HEADERCELL]);
                this._v_HeaderCellHiddenCssCache = this.fCellClassWithBaseClass( this._v_GridClasses[ theS_CssKeys.GRIDCLASSKEY_HEADERCELLHIDDEN]);

                this._v_SelectedCellCssCache     = this.fCellClassWithBaseClass( this._v_GridClasses[ theS_CssKeys.GRIDCLASSKEY_CELL_SELECTED]);

                this._v_RowCssCache  = [ ];
                this._v_CellCssCache = [ ];


                var someRows = this.fRows();
                if( !someRows) {
                    return;
                }

                var aNumRows = someRows.length;

                this._v_RowCssCache  = new Array( aNumRows);
                this._v_RowCssCache  = new Array( aNumRows);

                if( !aNumRows) {
                    return;
                }

                var aRandomRowClass = this.fRandomRowClass();

                var anEvenRowCss = aRandomRowClass + " " + this._v_GridClasses[ theS_CssKeys.GRIDCLASSKEY_ROW_EVEN];
                var anOddRowCss  = aRandomRowClass + " " + this._v_GridClasses[ theS_CssKeys.GRIDCLASSKEY_ROW_ODD];

                this._v_EvenCellCssCache   = this.fCellClassWithRandomAndBaseClass( this._v_GridClasses[ theS_CssKeys.GRIDCLASSKEY_CELL_EVEN]);
                this._v_OddCellCssCache    = this.fCellClassWithRandomAndBaseClass( this._v_GridClasses[ theS_CssKeys.GRIDCLASSKEY_CELL_ODD]);

                for( var aRowIdx=0; aRowIdx < aNumRows; aRowIdx++) {

                    this._v_RowCssCache[ aRowIdx]  = ( aRowIdx % 2) ? anOddRowCss : anEvenRowCss;

                    this._v_CellCssCache[ aRowIdx] = ( aRowIdx % 2) ? this._v_OddCellCssCache : this._v_EvenCellCssCache;
                }
            };
            if( pUpdateCssCaches){}/* CQT */
            aPrototype.pUpdateCssCaches = pUpdateCssCaches;











            var fCellValuesFunctions = function() {
                if( this._v_CellValuesFunctions) {
                    return this._v_CellValuesFunctions;
                }


                var aNumFields    = this._v_Fields.length;

                this._v_CellValuesFunctions = new Array( aNumFields);

                for( var aFieldIdx=0; aFieldIdx < aNumFields; aFieldIdx++) {

                    var aField = this._v_Fields[ aFieldIdx];
                    if( aField) {
                        if( aField.indexOf( this.FIELDNAMEDOT) < 0) {
                            continue;
                        }

                        var someFieldSteps = aField.split(  this.FIELDNAMEDOT);
                        var aNumFieldSteps = someFieldSteps.length;
                        if( !aNumFieldSteps) {
                            continue;
                        }

                        var aFunctionSourceCode = "(function( theRec) { ";
                        if( this.LOGFIELDSACCESSFUNCTIONINVOCATIONS) {
                            aFunctionSourceCode += " /* console.log( 'FieldsAccessFunction " + aField + "'); */";
                        }
                        aFunctionSourceCode += " var aCur = theRec;";

                        for( var aFieldStepIdx=0; aFieldStepIdx < aNumFieldSteps; aFieldStepIdx++) {
                            var aFieldStep = someFieldSteps[ aFieldStepIdx];
                            if( aFieldStep) {
                                aFunctionSourceCode += " if( !aCur) { return null}; ";
                                aFunctionSourceCode += " aCur = aCur." + aFieldStep + ";";
                            }
                        }
                        aFunctionSourceCode += " return aCur;";
                        aFunctionSourceCode += " });";
                        var aCellValueFunction = null;
                        try {
                            aCellValueFunction = eval( aFunctionSourceCode);
                        }
                        catch( anException) {
                        }
                        if( aCellValueFunction) {
                            this._v_CellValuesFunctions[ aFieldIdx] = aCellValueFunction;
                        }
                    }
                }

                return this._v_CellValuesFunctions;

            };
            if( fCellValuesFunctions){}/* CQT */
            aPrototype.fCellValuesFunctions = fCellValuesFunctions;








            var pUpdateCellValuesCache = function() {

                this._v_CellValuesCache = null;

                this._v_NewCellValuesCache   = null;

                this._v_Paging            = false;
                this._v_PageFirstRowIndex = 0;
                this._v_PageSize          = 0;
                this._v_PageLastRowIndex  = 0;


                if( !this._v_GridClasses) {
                    return;
                }

                this._v_NewCellValuesCache  = [ ];

                var someRows = this.fRows();
                if( !someRows) {
                    return;
                }

                var aNumRows = someRows.length;
                if( !aNumRows) {
                    return;
                }

                var someCellValuesFunctions = this.fCellValuesFunctions();

                this._v_NewCellValuesCache = new Array( aNumRows);

                var aNumFields    = this._v_Fields.length;

                for( var aRowIdx=0; aRowIdx < aNumRows; aRowIdx++) {

                    var aRow = someRows[ aRowIdx];

                    var someCellValues = new Array( aNumFields);

                    this._v_NewCellValuesCache[ aRowIdx] = someCellValues;

                    for( var aFieldIdx=0; aFieldIdx < aNumFields; aFieldIdx++) {

                        var aFieldName = this._v_Fields[ aFieldIdx];
                        var aFieldValue = null;

                        if( someCellValuesFunctions) {
                            var aCellValueFunction = someCellValuesFunctions[ aFieldIdx];
                            if( aCellValueFunction) {
                                aFieldValue = aCellValueFunction( aRow);
                            }
                            else {
                                aFieldValue = aRow[ aFieldName];
                            }
                        }
                        else {
                            aFieldValue = aRow[ aFieldName];
                        }

                        var aConvertedFieldValue = this.fConvertFieldValueForCache( aFieldValue,  aFieldIdx);
                        if( aConvertedFieldValue){}/* CQT */

                        someCellValues[ aFieldIdx] = aConvertedFieldValue;
                    }
                }
            };
            if( pUpdateCellValuesCache){}/* CQT */
            aPrototype.pUpdateCellValuesCache = pUpdateCellValuesCache;










            var fConvertFieldValueForCache = function( theFieldValue, theFieldIndex) {

                var aConvertedFieldValue = theFieldValue;

                var aConverter = this.fConverter();
                if( aConverter) {

                    var aDataType = null;
                    if( this._v_DataTypes) {
                        if( ( theFieldIndex >= 0) && ( theFieldIndex <= this._v_DataTypes.length)) {

                            aDataType = this._v_DataTypes[ theFieldIndex];
                        }
                    }

                    aConvertedFieldValue = aConverter.fConvertToDisplayValue( theFieldValue, aDataType, true);
                }

                return aConvertedFieldValue;
            };
            if( fConvertFieldValueForCache){}/* CQT */
            aPrototype.fConvertFieldValueForCache = fConvertFieldValueForCache;












            var pCacheUnselectAndSelect = function( thePreviousSelectionIndex, theNewSelectionIndex) {

                if( !( thePreviousSelectionIndex == null) && !( typeof thePreviousSelectionIndex == "undefined")) {
                    this.pCacheUnselect( thePreviousSelectionIndex);
                }


                if( !( theNewSelectionIndex == null) && !( typeof theNewSelectionIndex == "undefined")) {
                    this.pCacheSelect( theNewSelectionIndex);
                }
            };
            if( pCacheUnselectAndSelect){}/* CQT */
            aPrototype.pCacheUnselectAndSelect = pCacheUnselectAndSelect;







            var pCacheSelect = function( theSelectionIndex) {

                if( !this._v_GridClasses) {
                    return;
                }

                var aRowSelectedCss = this._v_GridClasses[ theS_CssKeys.GRIDCLASSKEY_ROW_SELECTED];

                var aRowCss = ( theSelectionIndex % 2)
                    ? this._v_GridClasses[ theS_CssKeys.GRIDCLASSKEY_ROW_ODD]
                    : this._v_GridClasses[ theS_CssKeys.GRIDCLASSKEY_ROW_EVEN];


                var someCellSelectedCss = this._v_SelectedCellCssCache;

                var someCellCss = ( theSelectionIndex % 2)? this._v_OddCellCssCache : this._v_EvenCellCssCache;


                if( aRowSelectedCss || aRowCss || someCellSelectedCss || someCellCss) {
                    this.pCacheRowCssRemoveAdd( theSelectionIndex,
                        aRowCss,    aRowSelectedCss,
                        someCellCss, someCellSelectedCss
                    );
                }
            };
            if( pCacheSelect){}/* CQT */
            aPrototype.pCacheSelect = pCacheSelect;







            var pCacheUnselect = function( theSelectionIndex) {


                if( !this._v_GridClasses) {
                    return;
                }

                var aRowSelectedCss = this._v_GridClasses[ theS_CssKeys.GRIDCLASSKEY_ROW_SELECTED];

                var aRowCss = ( theSelectionIndex % 2)
                    ? this._v_GridClasses[ theS_CssKeys.GRIDCLASSKEY_ROW_ODD]
                    : this._v_GridClasses[ theS_CssKeys.GRIDCLASSKEY_ROW_EVEN];


                var someCellSelectedCss = this._v_SelectedCellCssCache;

                var someCellCss = ( theSelectionIndex % 2) ? this._v_OddCellCssCache : this._v_EvenCellCssCache;


                if( aRowSelectedCss || aRowCss || someCellSelectedCss || someCellCss) {
                    this.pCacheRowCssRemoveAdd( theSelectionIndex,
                        aRowSelectedCss,     aRowCss,
                        someCellSelectedCss, someCellCss
                    );
                }
            };
            if( pCacheUnselect){}/* CQT */
            aPrototype.pCacheUnselect = pCacheUnselect;












            var pCacheRowCssRemoveAdd = function( theSelectionIndex,
                                                  theRowCssToRemove, theRowCssToAdd,
                                                  theCellCssSToRemove, theCellCssSToAdd) {

                if( !theRowCssToRemove && !theRowCssToAdd && !theCellCssSToRemove && !theCellCssSToAdd) {
                    return;
                }

                if( ( theSelectionIndex == null) || ( typeof theSelectionIndex == "undefined")) {
                    return;
                }

                if( theSelectionIndex < 0) {
                    return;
                }

                var someCachedRowDOMelements = this.fCachedRowDOMelements();
                if( !someCachedRowDOMelements) {
                    return;
                }

                var aNumDomElements = someCachedRowDOMelements.size;

                if( theSelectionIndex >= aNumDomElements) {
                    return;
                }

                var aDOMelement = someCachedRowDOMelements[ theSelectionIndex];
                if( !aDOMelement) {
                    return;
                }

                var aJQueryElement = $( aDOMelement);
                if( !aJQueryElement) {
                    return;
                }

                this.pCacheCssRemoveAdd( theSelectionIndex,
                                         theRowCssToRemove, theRowCssToAdd,
                                         theCellCssSToRemove, theCellCssSToAdd,
                                         aJQueryElement);

            };
            if( pCacheRowCssRemoveAdd){}/* CQT */
            aPrototype.pCacheRowCssRemoveAdd = pCacheRowCssRemoveAdd;








            var pCacheCssRemoveAdd = function( theSelectionIndex,
                                               theRowCssToRemove, theRowCssToAdd,
                                               theCellCssSToRemove, theCellCssSToAdd,
                                               theJQueryElement) {

                if( !theJQueryElement) {
                    return;
                }

                if( !theRowCssToRemove && !theRowCssToAdd && !theCellCssSToRemove && !theCellCssSToAdd) {
                    return;
                }

                if( ( theSelectionIndex == null) || ( typeof theSelectionIndex == "undefined")) {
                    return;
                }

                if( theSelectionIndex < 0) {
                    return;
                }


                if( theRowCssToRemove) {
                    if( theJQueryElement.hasClass( theRowCssToRemove)) {
                        theJQueryElement.removeClass( theRowCssToRemove);
                    }
                }

                if( theRowCssToAdd) {
                    if( !theJQueryElement.hasClass( theRowCssToAdd)) {
                        theJQueryElement.addClass( theRowCssToAdd);
                    }
                }

                if( !theCellCssSToRemove && !theCellCssSToAdd) {
                    return;
                }

                if( !this._v_Fields) {
                    return;
                }

                var someChildrenCells = theJQueryElement.children();
                if( !someChildrenCells) {
                    return;
                }

                var aNumChildrenCells = someChildrenCells.length;
                if( !aNumChildrenCells) {
                    return;
                }


                var aNumColumns = this._v_Fields.length;

                var allCellsToRemove = new Array( aNumColumns);
                var allCellsToAdd    = new Array( aNumColumns);

                var aThis = this;

                if( theCellCssSToRemove) {

                    for( var aColumnIdx=0; aColumnIdx < aNumColumns; aColumnIdx++) {

                        var someCellCssToRemove = theCellCssSToRemove[ aColumnIdx];

                        if( someCellCssToRemove) {
                            someCellCssToRemove = someCellCssToRemove.split( " ").filter(
                                function( theCss) {
                                    var aCss = theCss.trim();
                                    if( !aCss) {
                                        return false;
                                    }
                                    var aResToRemove = !( aCss.indexOf( aThis.CELLRANDOMCLASS_PREFIX) == 0);
                                    if( aResToRemove){}/* CQT */
                                    return aResToRemove;
                                }
                            );
                            allCellsToRemove[ aColumnIdx] = someCellCssToRemove;
                        }
                    }
                }



                if( theCellCssSToAdd) {

                    for( var aColumnToAddIdx=0; aColumnToAddIdx < aNumColumns; aColumnToAddIdx++) {

                        var someCellCssToAdd = theCellCssSToAdd[ aColumnToAddIdx];

                        if( someCellCssToAdd) {
                            someCellCssToAdd = someCellCssToAdd.split( " ").filter(
                                function( theCss) {
                                    var aCss = theCss.trim();
                                    if( !aCss) {
                                        return false;
                                    }

                                    var aResToAdd = !( aCss.indexOf( aThis.CELLRANDOMCLASS_PREFIX) == 0);
                                    if( aResToAdd){}/* CQT */
                                    return aResToAdd;
                                }
                            );

                            allCellsToAdd[ aColumnToAddIdx] = someCellCssToAdd;
                        }
                    }
                }




                for( var aChildCellIdx=0; aChildCellIdx < aNumChildrenCells; aChildCellIdx++) {

                    var aChildCell = someChildrenCells[ aChildCellIdx];
                    if( aChildCell) {

                        if( !aChildCell.hasClass) {
                            aChildCell = $( aChildCell);
                        }

                        if( !aChildCell.removeClass) {
                            aChildCell = $( aChildCell);
                        }

                        var aRemoveCellCssS = allCellsToRemove[ aChildCellIdx];

                        if( aRemoveCellCssS) {
                            aRemoveCellCssS.forEach(
                                function( theCss) {

                                    if( aChildCell.hasClass( theCss)) {
                                        aChildCell.removeClass( theCss);
                                    }
                                }
                            );
                        }


                        var anAddCellCssS = allCellsToAdd[ aChildCellIdx];

                        if( anAddCellCssS) {
                            anAddCellCssS.forEach(
                                function( theCss) {
                                    if( !aChildCell.hasClass( theCss)) {
                                        aChildCell.addClass( theCss);
                                    }
                                }
                            );
                        }
                    }
                }

            };
            if( pCacheCssRemoveAdd){}/* CQT */
            aPrototype.pCacheCssRemoveAdd = pCacheCssRemoveAdd;








            var pLogEvent = function( theEvent, theData, theDetails) {

                if( !this.LOGEVENTS) {
                    return;
                }

                aPrototype._v_SuperPrototype.pLogEvent.apply( this, [ theEvent, theData, theDetails]);
            };
            if( pLogEvent){}/* CQT */
            aPrototype.pLogEvent = pLogEvent;








            var fHasMasterSelection = function( ) {

                return this._v_MasterFields ? true : false
            };
            if( fHasMasterSelection){}/* CQT */
            aPrototype.fHasMasterSelection = fHasMasterSelection;








            var fAllowCreation = function( ) {

                if( !this._v_CreatorName) {
                    return false;
                }

                if( this.fHasMasterSelection()) {
                    return true;
                }

                var anAllowCreation = this._v_Retrieval ? true : false;
                if( anAllowCreation){}/* CQT */

                return anAllowCreation;
            };
            if( fAllowCreation){}/* CQT */
            aPrototype.fAllowCreation = fAllowCreation;






            var fAllowRefresh = function( ) {

                if( this._v_Retrieval) {
                    return true;
                }

                var anAllowRefresh = this.fHasMasterSelection() ? true : false;
                if( anAllowRefresh){}/* CQT */

                return anAllowRefresh;
            };
            if( fAllowRefresh){}/* CQT */
            aPrototype.fAllowRefresh = fAllowRefresh;










            var fprDo_GoToSelection = function( theGoToSelectionSpec, theSelectionValue) {

                if( !theGoToSelectionSpec) {
                    return this.fNewDeferredResolveWithNothingPromise();
                }

                var aSelectionField = theGoToSelectionSpec[ "selectionField"];
                if( !aSelectionField) {
                    return this.fNewDeferredResolveWithNothingPromise();
                }


                if( typeof theSelectionValue == "undefined") {

                    if( !this.fSelection()) {
                        return this.fNewDeferredResolveWithNothingPromise();
                    }
                    else {
                        return this.fprDo_UnSelect();
                    }
                }


                var someRows = this.fRows();
                if( !someRows) {
                    return this.fNewDeferredResolveWithNothingPromise();
                }


                var aRowToSelectIndex = -1;

                var aNumRows = someRows.length;
                for( var aRowIdx=0; aRowIdx < aNumRows; aRowIdx++) {
                    var aRow = someRows[ aRowIdx];
                    if( aRow) {
                        var aRowKeyValue      = aRow[ aSelectionField];
                        if( aRowKeyValue == theSelectionValue) {
                            aRowToSelectIndex = aRowIdx;
                            break;
                        }
                    }
                }


                if( aRowToSelectIndex < 0)  {
                    return this.fNewDeferredResolveWithNothingPromise();
                }

                return this.fprDo_Select( aRowToSelectIndex);
            };
            if( fprDo_GoToSelection){}/* CQT */
            aPrototype.fprDo_GoToSelection = fprDo_GoToSelection;











            var fprDo_NotifyModifyingActionHappened= function( theActionIsEdition) {

                var someListenerPromises = [ ];

                var aNumListeners = this._v_ActionHappenedListeners.length;
                for( var aListenerIdx=0; aListenerIdx < aNumListeners; aListenerIdx++) {

                    var aListener = this._v_ActionHappenedListeners[ aListenerIdx];
                    if( aListener) {

                        if( typeof aListener == "function") {

                            var aListenerResult = aListener( theActionIsEdition);
                            if( aListenerResult && aListenerResult.then) {
                                someListenerPromises.push( aListenerResult);
                            }
                        }
                        else {

                            if( ( typeof aListener == "object") && ( aListener.length)) {

                                aListener.forEach( function( athListenerOne) {

                                    if( typeof athListenerOne == "function") {
                                        var aOneListenerResult = athListenerOne( theActionIsEdition);
                                        if( aOneListenerResult && aOneListenerResult.then) {
                                            someListenerPromises.push( aOneListenerResult);
                                        }
                                    }
                                });
                            }
                        }
                    }
                }

                var aNumListenerPromises = someListenerPromises.length;
                if( !aNumListenerPromises) {
                    return this.fNewDeferredResolvePromise( theActionIsEdition);
                }

                if( aNumListenerPromises == 1) {
                    return someListenerPromises[ 0];
                }

                return this.fNewPromiseAll( someListenerPromises);
            };
            if( fprDo_NotifyModifyingActionHappened){}/* CQT */
            aPrototype.fprDo_NotifyModifyingActionHappened = fprDo_NotifyModifyingActionHappened;








            return aPrototype;

        })();




        var GridCtrl_Constructor = function( theTitle, theIdentifier, theRecorder, theScope,
                                             theDomIdPrefix,
                                             theParentCtrl,
                                             theConverter,
                                             theMasterFields,
                                             theGridName, theGridLabel, theLabels, theFields, theHiddenFields, theDataTypes,
                                             theGridClasses, theColumnClasses,
                                             theRetrievalTarget, theRetrieval, theWith, theQuery, theDeleteQuery,
                                             theAutoSelectIndex, theKeyField,
                                             theEditorName, theCreatorName,
                                             theDeleteTarget, theDelete, theDeleteWith, theDeleteParm, theDeleteSucessIfNotExistsParm,
                                             theRowsChangeListener, theSelectionChangeListener,
                                             theCreateRoles, theDeleteRoles,
                                             theNoPage, theMaxPageSize, theHidePageMaxSizeInput) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_MastereableCtrlType.MastereableCtrl_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;
            this._v_Module = null;

            this._v_GridName        = null;
            this._v_GridLabel       = null;
            this._v_Labels          = null;
            this._v_Fields          = null;
            this._v_HiddenFields    = null;
            this._v_DataTypes       = null;
            this._v_GridClasses     = null;
            this._v_ColumnClasses   = null;
            this._v_RetrievalTarget = null;
            this._v_Retrieval       = null;
            this._v_With            = null;
            this._v_Query           = null;
            this._v_AutoSelectIndex = null;
            this._v_KeyField        = null;
            this._v_EditorName      = null;
            this._v_CreatorName     = null;
            this._v_DeleteTarget    = null;
            this._v_Delete          = null;
            this._v_DeleteWith      = null;
            this._v_DeleteParm      = null;
            this._v_DeleteSucessIfNotExistsParm = null;
            this._v_DeleteQuery     = null;

            this._v_CreateRoles     = null;
            this._v_DeleteRoles     = null;
            this._v_HasAnyCreateRoles = false;
            this._v_HasAnyDeleteRoles = false;

            this._v_Rows      = null;
            this._v_Selection = null;

            this._v_RowsChangeListeners      = null;
            this._v_SelectionChangeListeners = null;
            this._v_ActionHappenedListeners  = null;

            this._v_InhibitSelectionChangeNotifications = null;

            this._v_RowCssCache  = null;
            this._v_CellCssCache = null;

            this._v_HeaderCellCssCache   = null;
            this._v_HeaderCellHiddenCssCache   = null;
            this._v_SelectedCellCssCache = null;
            this._v_EvenCellCssCache     = null;
            this._v_OddCellCssCache      = null;

            this._v_CellValuesFunctions  = null;
            this._v_CellValuesCache      = null;
            this._v_NewCellValuesCache   = null;

            this._v_RandomCellClass      = null;
            this._v_RandomRowClass       = null;
            this._v_CachedRowDOMelements = null;

            this._v_Leyendo                  = null;

            this._v_PreviousSelectionIndex   = null;

            this._v_LastRetrieval            = null;

            this._v_DisableScrollRowIntoView = null;

            this._v_SelectionClickListener   = null;

            this._v_OwnGridRetrieval         = null;

            this._v_EverRetrieved            = null;

            this._v_WaitsDeleteConfirmation  = null;

            this._v_NoRefresh = null;

            this._v_GridHeightFactor = null;

            this._v_GridResizedTimeout = null;

            this._v_NoPage            = null;
            this._v_PageMaxSize       = null;

            this._v_PageMaxSizeInput     = null;
            this._v_HidePageMaxSizeInput = null;

            this._v_Paging            = null;
            this._v_PageFirstRowIndex = null;
            this._v_PageSize          = null;
            this._v_PageLastRowIndex  = null;

            this._pInit_GridCtrl( theTitle, theIdentifier, theRecorder, theScope,
                                  theDomIdPrefix,
                                  theParentCtrl,
                                  theConverter,
                                  theMasterFields,
                                  theGridName, theGridLabel, theLabels, theFields, theHiddenFields, theDataTypes,
                                  theGridClasses, theColumnClasses,
                                  theRetrievalTarget, theRetrieval, theWith, theQuery, theDeleteQuery,
                                  theAutoSelectIndex, theKeyField,
                                  theEditorName, theCreatorName,
                                  theDeleteTarget, theDelete, theDeleteWith,
                                  theRowsChangeListener, theSelectionChangeListener,
                                  theCreateRoles, theDeleteRoles,
                                  theNoPage, theMaxPageSize, theHidePageMaxSizeInput);
        };
        GridCtrl_Constructor.prototype = aGridCtrl_Prototype;







        var GridCtrl_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_MastereableCtrlType.MastereableCtrl_Prototype;

            this._v_Prototype = aGridCtrl_Prototype;
            this._v_Type      = null;
            this._v_Module    = null;

            this._v_GridName        = null;
            this._v_GridLabel       = null;
            this._v_Labels          = null;
            this._v_Fields          = null;
            this._v_HiddenFields    = null;
            this._v_DataTypes       = null;
            this._v_GridClasses     = null;
            this._v_ColumnClasses   = null;
            this._v_RetrievalTarget = null;
            this._v_Retrieval       = null;
            this._v_With            = null;
            this._v_Query           = null;
            this._v_AutoSelectIndex = null;
            this._v_KeyField        = null;
            this._v_EditorName      = null;
            this._v_CreatorName     = null;
            this._v_DeleteTarget    = null;
            this._v_Delete          = null;
            this._v_DeleteWith      = null;
            this._v_DeleteParm      = null;
            this._v_DeleteSucessIfNotExistsParm = null;
            this._v_DeleteQuery     = null;

            this._v_CreateRoles     = null;
            this._v_DeleteRoles     = null;
            this._v_HasAnyCreateRoles = null;
            this._v_HasAnyDeleteRoles = null;

            this._v_Rows      = null;
            this._v_Selection = null;

            this._v_RowsChangeListeners      = null;
            this._v_SelectionChangeListeners = null;
            this._v_ActionHappenedListeners  = null;

            this._v_InhibitSelectionChangeNotifications = null;

            this._v_RowCssCache  = null;
            this._v_CellCssCache = null;

            this._v_HeaderCellCssCache   = null;
            this._v_HeaderCellHiddenCssCache   = null;
            this._v_SelectedCellCssCache = null;
            this._v_EvenCellCssCache     = null;
            this._v_OddCellCssCache      = null;

            this._v_CellValuesFunctions  = null;
            this._v_CellValuesCache      = null;
            this._v_NewCellValuesCache   = null;

            this._v_RandomCellClass      = null;
            this._v_RandomRowClass       = null;
            this._v_CachedRowDOMelements = null;

            this._v_Leyendo                  = null;

            this._v_PreviousSelectionIndex   = null;

            this._v_LastRetrieval            = null;

            this._v_DisableScrollRowIntoView = null;

            this._v_SelectionClickListener   = null;

            this._v_OwnGridRetrieval         = null;

            this._v_EverRetrieved            = null;

            this._v_WaitsDeleteConfirmation  = null;

            this._v_NoRefresh = null;

            this._v_GridHeightFactor = null;

            this._v_GridResizedTimeout = null;

            this._v_NoPage            = null;
            this._v_PageMaxSize       = null;

            this._v_PageMaxSizeInput     = null;
            this._v_HidePageMaxSizeInput = null;

            this._v_Paging            = null;
            this._v_PageFirstRowIndex = null;
            this._v_PageSize          = null;
            this._v_PageLastRowIndex  = null;
        };
        GridCtrl_SuperPrototypeConstructor.prototype = aGridCtrl_Prototype;



        var aModule = {
            "GridCtrl_Prototype": aGridCtrl_Prototype,
            "GridCtrl_Constructor": GridCtrl_Constructor,
            "GridCtrl_SuperPrototypeConstructor": GridCtrl_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aGridCtrl_Prototype._v_Module = aModule;





        return aModule;
    };







    var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
    if( !anExistingModule) {

        var aModule = aMod_definer(
            theSS_Overrider,
            theSS_MastereableCtrlType,
            theSS_CssKeys,
            theSS_q,
            theSS_timeout
        );
        anExistingModule = aModule;

        theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
    }






    return anExistingModule;

}]);







