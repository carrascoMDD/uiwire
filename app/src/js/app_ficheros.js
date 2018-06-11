'use strict';

/*
 * app_ficheros.js
 *
 * Creado @author Antonio Carrasco Valero 201503030557
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
        'cssNames_Springnut_Ficheros',

        'rootsTypes',
        'identifyingTypes',
        'commonTypes',

        'widgetCtrlsTypes',

        'hitAdapterTypes',
        'hitServerTypes',

        'revengTypes',

        'springnutTypes',

        'ficherosTypes'

    ]
);



angular.module('springnut').config([
    '$routeProvider',
    function(
        $routeProvider) {



        var LOGROUTES = false;



        /* Route path for generic app for any kind of Fichero or TipoBoletin */
        $routeProvider.when('/ficheros', {templateUrl: 'partials/ficheros/ficheros.html', controller: 'FicherosCtrl'});

        if( LOGROUTES) {
            console.log( "Routed: /ficheros");
        }



        var someWhens = [
            { "tFic": "INE"                 ,"routeTo": { "templateUrl": "partials/ficheros/ficheros.html"                    , "controller": "FicherosCtrl"}},
            { "tFic": "Judiciales"          ,"routeTo": { "templateUrl": "partials/ficheros/ficheros.html"                    , "controller": "FicherosCtrl"}}
        ];


        var aNumWhens = someWhens.length;
        for( var aWhenIdx= 0; aWhenIdx < aNumWhens; aWhenIdx++) {

            var aWhen = someWhens[ aWhenIdx];
            if( !aWhen) {
                continue;
            }

            var aTipoFichero = aWhen[ "tFic"];
            if( !aTipoFichero) {
                continue;
            }

            var aRouteTo = aWhen[ "routeTo"];
            if( !aRouteTo) {
                continue;
            }

            var aPath = "/ficheros_tFic_" + aTipoFichero;

            if( LOGROUTES) {
                console.log( "Routed: " + aPath);
            }

            $routeProvider.when( aPath, aRouteTo);
        }









        /* Route default URL,
         *  to be used in the path in the URL does not match any of the supported paths
         *  according to values chosen by the @RequestMapping in AppControllerHTML
         *  and supplied as hidden fields
         *  in the page rendered by Spring Thymeleaf template launchapp_ficheros
         *  which shall match one of the specications above.
         *
         */


        var aTipoFicheroFromField = null;
        var aTipoFicheroField = document.getElementById( "did_theTipoFicherofld");
        if( aTipoFicheroField) {
            aTipoFicheroFromField = aTipoFicheroField.value;
        }

        var aRedirectURL = null;

        if( aTipoFicheroFromField) {

            for( var otherWhenIdx= 0; otherWhenIdx < aNumWhens; otherWhenIdx++) {

                var otherWhen = someWhens[ otherWhenIdx];
                if( !otherWhen) {
                    continue;
                }

                var otroTipoFichero = otherWhen[ "tFic"];
                if( !otroTipoFichero) {
                    continue;
                }

                var otherRouteTo = otherWhen[ "routeTo"];
                if( !otherRouteTo) {
                    continue;
                }

                if( !( aTipoFicheroFromField == otroTipoFichero)) {
                    continue;
                }

                aRedirectURL = "/ficheros_tFic_" + otroTipoFichero;

                break;
            }
        }

        if( !aRedirectURL) {
            aRedirectURL = "/ficheros";
        }

        $routeProvider.otherwise({redirectTo: aRedirectURL});
        if( LOGROUTES) {
            console.log( "RouteOtherwise: " + aRedirectURL);
        }


    }]);
