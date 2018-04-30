'use strict';

/*
 * app_adminoperadores.js
 *
 * Creado @author Antonio Carrasco Valero 201411031738
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
        'cssNames_Springnut_Adminoperadores',

        'rootsTypes',
        'identifyingTypes',
        'commonTypes',

        'widgetCtrlsTypes',

        'hitAdapterTypes',
        'hitServerTypes',

        'springnutTypes',


        'adminoperadoresTypes'
    ]
);



angular.module('springnut').config(['$routeProvider', function($routeProvider) {

    $routeProvider

        .when('/adminoperadoresInstrumentacion', {templateUrl: 'partials/adminoperadores/adminoperadores.html', controller: 'AdminoperadoresInstrumentacionCtrl'})
        .when('/adminoperadoresOperacion',       {templateUrl: 'partials/adminoperadores/adminoperadores.html', controller: 'AdminoperadoresOperacionCtrl'})

        .otherwise({redirectTo: '/adminoperadoresOperacion'});

}]);
