'use strict';

/*
 * app_fasesvalidacion.js
 *
 * Creado @author Antonio Carrasco Valero 201411080504
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

/* App Module */

angular.module('springnut',
    [
        'ngRoute',

        '$strap.directives',
        'ui.bootstrap',

        'pasvaz.bindonce',

        'angularFileUpload',

        'appVersionTypes',

        'typesRegistry',

        'cssNames',
        'cssNames_Springnut',
        'cssNames_Springnut_Fasesvalidacion',

        'rootsTypes',
        'identifyingTypes',
        'commonTypes',

        'widgetCtrlsTypes',

        'hitAdapterTypes',
        'hitServerTypes',

        'springnutTypes',

        'fasesvalidacionTypes'

    ]
);



angular.module('springnut').config([
    '$routeProvider',
function(
    $routeProvider) {



    var TIPOBOLETININE              = "ine";
    var TIPOBOLETININEFORURL        = "INE";
    var TIPOBOLETINJUDICIALES       = "judiciales";
    var TIPOBOLETINJUDICIALESFORURL = "Judiciales";


    var FICHEROSOBLOQUES_FICHEROS       = "ficheros";
    var FICHEROSOBLOQUES_FICHEROSFORURL = "Ficheros";
    var FICHEROSOBLOQUES_BLOQUES        = "bloques";
    var FICHEROSOBLOQUES_BLOQUESFORURL  = "Bloques";

    

    var aTipoBoletin = null;
    var aTipoBoletinField = document.getElementById( "did_theTipoBoletinfld");
    if( aTipoBoletinField) {
        aTipoBoletin = aTipoBoletinField.value;
        if( aTipoBoletin) {
            aTipoBoletin = aTipoBoletin.toLowerCase();
        }
    }
    var aTipoBoletinForURL = null;
    switch( aTipoBoletin) {
        case TIPOBOLETININE:
            aTipoBoletinForURL = TIPOBOLETININEFORURL;
            break;

        case TIPOBOLETINJUDICIALES:
            aTipoBoletinForURL = TIPOBOLETINJUDICIALESFORURL;
            break;

        default:
            aTipoBoletinForURL = TIPOBOLETININEFORURL;
    }


    var aFicherosObloques = null;
    var aFicherosObloquesField = document.getElementById( "did_theFicherosObloquesfld");
    if( aFicherosObloquesField) {
        aFicherosObloques = aFicherosObloquesField.value;
        if( aFicherosObloques) {
            aFicherosObloques = aFicherosObloques.toLowerCase();
        }
    }
    var aFicherosObloquesForURL = null;
    switch( aFicherosObloques) {
        case FICHEROSOBLOQUES_FICHEROS:
            aFicherosObloquesForURL = FICHEROSOBLOQUES_FICHEROSFORURL;
            break;

        case FICHEROSOBLOQUES_BLOQUES:
            aFicherosObloquesForURL = FICHEROSOBLOQUES_BLOQUESFORURL;
            break;

        default:
            aFicherosObloquesForURL = FICHEROSOBLOQUES_FICHEROSFORURL;
    }


    var aRedirectURL = '/fasesvalidacion' + aFicherosObloquesForURL + aTipoBoletinForURL + 'Operacion';



    if( aFicherosObloquesForURL == FICHEROSOBLOQUES_FICHEROSFORURL) {
        $routeProvider

            .when('/fasesvalidacionFicherosINEInstrumentacion',        {templateUrl: 'partials/fasesvalidacion/fasesvalidacion.html', controller: 'FasesvalidacionCtrl'})
            .when('/fasesvalidacionFicherosINEOperacion',              {templateUrl: 'partials/fasesvalidacion/fasesvalidacion.html', controller: 'FasesvalidacionCtrl'})

            .when('/fasesvalidacionFicherosJudicialesInstrumentacion', {templateUrl: 'partials/fasesvalidacion/fasesvalidacion.html', controller: 'FasesvalidacionCtrl'})
            .when('/fasesvalidacionFicherosJudicialesOperacion',       {templateUrl: 'partials/fasesvalidacion/fasesvalidacion.html', controller: 'FasesvalidacionCtrl'})

            .when('/fasesvalidacionBloquesINEInstrumentacion',         {templateUrl: 'partials/fasesvalidacion/fasesvalidacion.html', controller: 'FasesvalidacionCtrl'})
            .when('/fasesvalidacionBloquesINEOperacion',               {templateUrl: 'partials/fasesvalidacion/fasesvalidacion.html', controller: 'FasesvalidacionCtrl'})

            .when('/fasesvalidacionBloquesJudicialesInstrumentacion',  {templateUrl: 'partials/fasesvalidacion/fasesvalidacion.html', controller: 'FasesvalidacionCtrl'})
            .when('/fasesvalidacionBloquesJudicialesOperacion',        {templateUrl: 'partials/fasesvalidacion/fasesvalidacion.html', controller: 'FasesvalidacionCtrl'})

            .otherwise({redirectTo: aRedirectURL});
    }


}]);
