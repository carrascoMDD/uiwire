'use strict';

/*
 * app_trabajos.js
 *
 * Creado @author Antonio Carrasco Valero 201411280001
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
        'cssNames_Springnut_Trabajos',

        'rootsTypes',
        'identifyingTypes',
        'commonTypes',

        'widgetCtrlsTypes',

        'hitAdapterTypes',
        'hitServerTypes',

        'revengTypes',

        'springnutTypes',

        'trabajosTypes',

        'importacionficherosasciiTypes'

    ]
);



angular.module('springnut').config([
    '$routeProvider',
function(
    $routeProvider) {



    var LOGROUTES = false;



    /* Route path for generic app for any kind of Trabajo or TipoBoletin */
    $routeProvider.when('/trabajos', {templateUrl: 'partials/trabajos/trabajos.html', controller: 'TrabajosCtrl'});

    if( LOGROUTES) {
        console.log( "Routed: /trabajos");
    }



    var someWhens = [
        { "tTra": "ImportacionFicherosASCII"           ,"tBol": "INE",        "routeTo": { "templateUrl": "partials/trabajos/trabajos.html", "controller": "ImportacionficherosasciiCtrl"}},
        { "tTra": "ImportacionFicherosASCII"           ,"tBol": "Judiciales", "routeTo": { "templateUrl": "partials/trabajos/trabajos.html", "controller": "ImportacionficherosasciiCtrl"}},
        { "tTra": "ExportacionFicherosASCII"           ,"tBol": "INE",        "routeTo": { "templateUrl": "partials/trabajos/trabajos-pendienterealizar.html", "controller": "TrabajosCtrl"}},
        { "tTra": "ExportacionFicherosASCII"           ,"tBol": "Judiciales", "routeTo": { "templateUrl": "partials/trabajos/trabajos-pendienterealizar.html", "controller": "TrabajosCtrl"}},
        { "tTra": "ImportacionImagenes"                ,"tBol": null,         "routeTo": { "templateUrl": "partials/trabajos/trabajos-pendienterealizar.html", "controller": "TrabajosCtrl"}},
        { "tTra": "ImportacionFicherosJSON"            ,"tBol": "INE",        "routeTo": { "templateUrl": "partials/trabajos/trabajos-pendienterealizar.html", "controller": "TrabajosCtrl"}},
        { "tTra": "ImportacionFicherosJSON"            ,"tBol": "Judiciales", "routeTo": { "templateUrl": "partials/trabajos/trabajos-pendienterealizar.html", "controller": "TrabajosCtrl"}},
        { "tTra": "ExportacionFicherosJSON"            ,"tBol": "INE",        "routeTo": { "templateUrl": "partials/trabajos/trabajos-pendienterealizar.html", "controller": "TrabajosCtrl"}},
        { "tTra": "ExportacionFicherosJSON"            ,"tBol": "Judiciales", "routeTo": { "templateUrl": "partials/trabajos/trabajos-pendienterealizar.html", "controller": "TrabajosCtrl"}},
        { "tTra": "CodificacionAutomaticaLiterales"    ,"tBol": "INE",        "routeTo": { "templateUrl": "partials/trabajos/trabajos-pendienterealizar.html", "controller": "TrabajosCtrl"}},
        { "tTra": "CodificacionAutomaticaLiterales "   ,"tBol": "Judiciales", "routeTo": { "templateUrl": "partials/trabajos/trabajos-pendienterealizar.html", "controller": "TrabajosCtrl"}},
        { "tTra": "CodificacionAutomaticaCausaBasica"  ,"tBol": "INE",        "routeTo": { "templateUrl": "partials/trabajos/trabajos-pendienterealizar.html", "controller": "TrabajosCtrl"}},
        { "tTra": "CodificacionAutomaticaCausaBasica"  ,"tBol": "Judiciales", "routeTo": { "templateUrl": "partials/trabajos/trabajos-pendienterealizar.html", "controller": "TrabajosCtrl"}},
        { "tTra": "ImportacionDiccionarioLiterales"    ,"tBol": null,         "routeTo": { "templateUrl": "partials/trabajos/trabajos-pendienterealizar.html", "controller": "TrabajosCtrl"}},
        { "tTra": "ImportacionDiccionarioSecuencias"   ,"tBol": null,         "routeTo": { "templateUrl": "partials/trabajos/trabajos-pendienterealizar.html", "controller": "TrabajosCtrl"}},
        { "tTra": "CruceBoletines"                     ,"tBol": null,         "routeTo": { "templateUrl": "partials/trabajos/trabajos-pendienterealizar.html", "controller": "TrabajosCtrl"}},
        { "tTra": "ExportacionMejoras"                 ,"tBol": null,         "routeTo": { "templateUrl": "partials/trabajos/trabajos-pendienterealizar.html", "controller": "TrabajosCtrl"}},
        { "tTra": "ObtenerAreasDeSaludPorSIP"          ,"tBol": null,         "routeTo": { "templateUrl": "partials/trabajos/trabajos-pendienterealizar.html", "controller": "TrabajosCtrl"}},
        { "tTra": "DeteccionDuplicados"                ,"tBol": null,         "routeTo": { "templateUrl": "partials/trabajos/trabajos-pendienterealizar.html", "controller": "TrabajosCtrl"}},
        { "tTra": "Nomenclator"                        ,"tBol": null,         "routeTo": { "templateUrl": "partials/trabajos/trabajos-pendienterealizar.html", "controller": "TrabajosCtrl"}}
    ];


    var aNumWhens = someWhens.length;
    for( var aWhenIdx= 0; aWhenIdx < aNumWhens; aWhenIdx++) {

        var aWhen = someWhens[ aWhenIdx];
        if( !aWhen) {
            continue;
        }

        var aTipoTrabajo = aWhen[ "tTra"];
        if( !aTipoTrabajo) {
            continue;
        }

        var aRouteTo = aWhen[ "routeTo"];
        if( !aRouteTo) {
            continue;
        }

        var aPath = "/trabajos_tTra_" + aTipoTrabajo;

        var aTipoBoletin = aWhen[ "tBol"];
        if( aTipoBoletin) {
            aPath += "_tBol_" + aTipoBoletin
        }

        if( LOGROUTES) {
            console.log( "Routed: " + aPath);
        }

        $routeProvider.when( aPath, aRouteTo);
    }









    /* Route default URL,
    *  to be used in the path in the URL does not match any of the supported paths
    *  according to values chosen by the @RequestMapping in AppControllerHTML
    *  and supplied as hidden fields
    *  in the page rendered by Spring Thymeleaf template launchapp_trabajos
    *  which shall match one of the specications above.
    *
    */


    var aTipoTrabajoFromField = null;
    var aTipoTrabajoField = document.getElementById( "did_theTipoTrabajofld");
    if( aTipoTrabajoField) {
        aTipoTrabajoFromField = aTipoTrabajoField.value;
    }

    var aTipoBoletinFromField = null;
    var aTipoBoletinField = document.getElementById( "did_theTipoBoletinfld");
    if( aTipoBoletinField) {
        aTipoBoletinFromField = aTipoBoletinField.value;
    }

    var aRedirectURL = null;

    if( aTipoTrabajoFromField) {

        for( var otherWhenIdx= 0; otherWhenIdx < aNumWhens; otherWhenIdx++) {

            var otherWhen = someWhens[ otherWhenIdx];
            if( !otherWhen) {
                continue;
            }

            var otroTipoTrabajo = otherWhen[ "tTra"];
            if( !otroTipoTrabajo) {
                continue;
            }

            var otherRouteTo = otherWhen[ "routeTo"];
            if( !otherRouteTo) {
                continue;
            }

            if( !( aTipoTrabajoFromField == otroTipoTrabajo)) {
                continue;
            }

            var otroTipoBoletin = otherWhen[ "tBol"];
            if( otroTipoBoletin) {
                if( !aTipoBoletinFromField || !( aTipoBoletinFromField == otroTipoBoletin)) {
                    continue;
                }
            }

            aRedirectURL = "/trabajos_tTra_" + otroTipoTrabajo;

            if( otroTipoBoletin) {
                aRedirectURL += "_tBol_" + otroTipoBoletin
            }

            break;
        }
    }

    if( !aRedirectURL) {
        aRedirectURL = "/trabajos";
    }

    $routeProvider.otherwise({redirectTo: aRedirectURL});
    if( LOGROUTES) {
        console.log( "RouteOtherwise: " + aRedirectURL);
    }







    /* Just for some interactive tests at development time*/
    $routeProvider.when('/inferctrlspecs', {templateUrl: 'partials/reveng_inferctrlspecs.html', controller: 'InferctrlspecsCtrl'});


}]);
