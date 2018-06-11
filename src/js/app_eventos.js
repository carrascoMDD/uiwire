'use strict';

/*
 * app_eventos.js
 *
 * Creado @author Antonio Carrasco Valero 201503030557
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
        'cssNames_Springnut_Eventos',

        'rootsTypes',
        'identifyingTypes',
        'commonTypes',

        'widgetCtrlsTypes',

        'hitAdapterTypes',
        'hitServerTypes',

        'springnutTypes',

        'eventosTypes'

    ]
);



angular.module('springnut').config([
    '$routeProvider',
function(
    $routeProvider) {



    var LOGROUTES = false;



    /* Route path for generic app for any kind of Evento or TipoBoletin */
    $routeProvider.when('/eventos', {templateUrl: 'partials/eventos/eventos.html', controller: 'EventosCtrl'});

    if( LOGROUTES) {
        console.log( "Routed: /eventos");
    }



    var someWhens = [
        { "tEvt": "Accesos"                 ,"routeTo": { "templateUrl": "partials/eventos/eventos.html"                    , "controller": "EventosCtrl"}},
        { "tEvt": "AccesosOperadores"       ,"routeTo": { "templateUrl": "partials/eventos/eventos.html"                    , "controller": "EventosCtrl"}},
        { "tEvt": "AccesosFallidos"         ,"routeTo": { "templateUrl": "partials/eventos/eventos.html"                    , "controller": "EventosCtrl"}},
        { "tEvt": "Lecturasboletines"       ,"routeTo": { "templateUrl": "partials/eventos/eventos.html"                    , "controller": "EventosCtrl"}},
        { "tEvt": "Excepciones"             ,"routeTo": { "templateUrl": "partials/eventos/eventos.html"                    , "controller": "EventosCtrl"}},
        { "tEvt": "Cambios"                 ,"routeTo": { "templateUrl": "partials/eventos/eventos.html"                    , "controller": "EventosCtrl"}},
        { "tEvt": "Mensajes"                ,"routeTo": { "templateUrl": "partials/eventos/eventos-pendienterealizar.html"  , "controller": "EventosCtrl"}}
    ];


    var aNumWhens = someWhens.length;
    for( var aWhenIdx= 0; aWhenIdx < aNumWhens; aWhenIdx++) {

        var aWhen = someWhens[ aWhenIdx];
        if( !aWhen) {
            continue;
        }

        var aTipoEvento = aWhen[ "tEvt"];
        if( !aTipoEvento) {
            continue;
        }

        var aRouteTo = aWhen[ "routeTo"];
        if( !aRouteTo) {
            continue;
        }

        var aPath = "/eventos_tEvt_" + aTipoEvento;

        if( LOGROUTES) {
            console.log( "Routed: " + aPath);
        }

        $routeProvider.when( aPath, aRouteTo);
    }









    /* Route default URL,
    *  to be used in the path in the URL does not match any of the supported paths
    *  according to values chosen by the @RequestMapping in AppControllerHTML
    *  and supplied as hidden fields
    *  in the page rendered by Spring Thymeleaf template launchapp_eventos
    *  which shall match one of the specications above.
    *
    */


    var aTipoEventoFromField = null;
    var aTipoEventoField = document.getElementById( "did_theTipoEventofld");
    if( aTipoEventoField) {
        aTipoEventoFromField = aTipoEventoField.value;
    }

    var aRedirectURL = null;

    if( aTipoEventoFromField) {

        for( var otherWhenIdx= 0; otherWhenIdx < aNumWhens; otherWhenIdx++) {

            var otherWhen = someWhens[ otherWhenIdx];
            if( !otherWhen) {
                continue;
            }

            var otroTipoEvento = otherWhen[ "tEvt"];
            if( !otroTipoEvento) {
                continue;
            }

            var otherRouteTo = otherWhen[ "routeTo"];
            if( !otherRouteTo) {
                continue;
            }

            if( !( aTipoEventoFromField == otroTipoEvento)) {
                continue;
            }

            aRedirectURL = "/eventos_tEvt_" + otroTipoEvento;

            break;
        }
    }

    if( !aRedirectURL) {
        aRedirectURL = "/eventos";
    }

    $routeProvider.otherwise({redirectTo: aRedirectURL});
    if( LOGROUTES) {
        console.log( "RouteOtherwise: " + aRedirectURL);
    }


}]);
