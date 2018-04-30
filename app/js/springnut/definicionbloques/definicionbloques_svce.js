'use strict';

/*
 * definicionbloques_svce.js
 *
 * Creado @author Antonio Carrasco Valero 201411162235
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




angular.module("definicionbloquesTypes").factory("DefinicionbloquesSvce", [
    "DefinicionbloquesSvceType",
    "IdentifierSvce",
    "RecorderSvce",
function( theSS_DefinicionbloquesSvceType,
          theSS_IdentifierSvce,
          theSS_RecorderSvce){

    var aService = new theSS_DefinicionbloquesSvceType.DefinicionbloquesSvce_Constructor(
        "Definicionbloques_Service",
        theSS_IdentifierSvce,
        theSS_RecorderSvce
    );
    if( aService){}/* CQT */

    return aService;

}]);







