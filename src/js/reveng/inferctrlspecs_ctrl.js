'use strict';

/*
 * inferctrlspecs_ctrl.js
 *
 * Creado @author Antonio Carrasco Valero 201411031729
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





angular.module('revengTypes').controller( 'InferctrlspecsCtrl', [
    'InferctrlspecsCtrlType',
    "IdentifierSvce",
    "RecorderSvce",
    '$scope',
function ( theSS_InferctrlspecsCtrlType,
           theSS_IdentifierSvce,
           theSS_RecorderSvce,
           $scope) {


    /* Used in an AngularJS template to obtain the keys of the first element of a list,
     to render the column header labels, and to retrieve column values for each row.
     */
    $scope.Object = Object;
    $scope.JSON   = JSON;
    $scope.Date = Date;


    $scope.inferctrlspecsCtrl = new theSS_InferctrlspecsCtrlType.InferctrlspecsCtrl_Constructor(
        "Inferctrlspecs_Controller",
        theSS_IdentifierSvce,
        theSS_RecorderSvce,
        $scope
    );

    $scope.inferctrlspecsCtrl.fprDo_Initial();


}]);


