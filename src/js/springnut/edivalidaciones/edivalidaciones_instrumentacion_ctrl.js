'use strict';

/*
 * edivalidaciones_instrumentacion_ctrl.js
 *
 * Creado @author Antonio Carrasco Valero 201410282305
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





angular.module('springnut').controller( 'EdivalidacionesInstrumentacionCtrl', [
    'EdivalidacionesInstrumentacionCtrlType',
    "IdentifierSvce",
    "RecorderSvce",
    '$scope',
    function ( theSS_EdivalidacionesInstrumentacionCtrlType,
               theSS_IdentifierSvce,
               theSS_RecorderSvce,
               $scope) {


        /* Used in an AngularJS template to obtain the keys of the first element of a list,
         to render the column header labels, and to retrieve column values for each row.
         */
        $scope.Object = Object;
        $scope.JSON   = JSON;
        $scope.Date = Date;

        $scope.edivalidacionesCtrl = new theSS_EdivalidacionesInstrumentacionCtrlType.EdivalidacionesInstrumentacionCtrl_Constructor(
            "EdivalidacionesInstrumentacion_Controller",
            theSS_IdentifierSvce,
            theSS_RecorderSvce,
            $scope
        );


        $scope.compositeCtrl = $scope.edivalidacionesCtrl;


        $scope.edivalidacionesCtrl.fprDo_Initial();


    }]);


