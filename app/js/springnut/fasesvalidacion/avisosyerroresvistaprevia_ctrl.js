'use strict';

/*
 * avisosyerroresvistaprevia_ctrl.js
 *
 * Creado @author Antonio Carrasco Valero 201411031729
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





angular.module('avisosyerroresvistapreviaTypes').controller( 'AvisosyerroresvistapreviaCtrl', [
    'AvisosyerroresvistapreviaCtrlType',
    "IdentifierSvce",
    "RecorderSvce",
    '$scope',
function ( theSS_AvisosyerroresvistapreviaCtrlType,
           theSS_IdentifierSvce,
           theSS_RecorderSvce,
           $scope) {


    /* Used in an AngularJS template to obtain the keys of the first element of a list,
     to render the column header labels, and to retrieve column values for each row.
     */
    $scope.Object = Object;
    $scope.JSON   = JSON;
    $scope.Date = Date;


    var aTipoBoletinInputElement = $("#did_theTipoBoletinfld");
    var aTipoBoletin = aTipoBoletinInputElement.val();

    var aIdFaseInputElement = $("#did_theIdFasefld");
    var aIdFase = aIdFaseInputElement.val();


    $scope.avisosyerroresvistapreviaCtrl = new theSS_AvisosyerroresvistapreviaCtrlType.AvisosyerroresvistapreviaCtrl_Constructor(
        "Avisosyerroresvistaprevia_Controller",
        theSS_IdentifierSvce,
        theSS_RecorderSvce,
        $scope,
        aTipoBoletin,
        aIdFase
    );

    $scope.avisosyerroresvistapreviaCtrl.fprDo_Initial();


}]);


