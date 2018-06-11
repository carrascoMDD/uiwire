'use strict';

/*
 * app_definicionbloques.js
 *
 * Creado @author Antonio Carrasco Valero 201411162227
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
        'cssNames_Springnut_Definicionbloques',

        'rootsTypes',
        'identifyingTypes',
        'commonTypes',

        'widgetCtrlsTypes',

        'hitAdapterTypes',
        'hitServerTypes',

        'springnutTypes',

        'definicionbloquesTypes'

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



    var aRedirectURL = '/definicionbloques' + aTipoBoletinForURL + 'Operacion';



    $routeProvider

        .when('/definicionbloquesINEInstrumentacion',        {templateUrl: 'partials/definicionbloques/definicionbloques.html', controller: 'DefinicionbloquesCtrl'})
        .when('/definicionbloquesINEOperacion',              {templateUrl: 'partials/definicionbloques/definicionbloques.html', controller: 'DefinicionbloquesCtrl'})

        .when('/definicionbloquesJudicialesInstrumentacion', {templateUrl: 'partials/definicionbloques/definicionbloques.html', controller: 'DefinicionbloquesCtrl'})
        .when('/definicionbloquesJudicialesOperacion',       {templateUrl: 'partials/definicionbloques/definicionbloques.html', controller: 'DefinicionbloquesCtrl'})

        .otherwise({redirectTo: aRedirectURL});

}]);
