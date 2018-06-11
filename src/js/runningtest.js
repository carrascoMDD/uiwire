/*
 * runningtest.js
 *
 * Creado @author Antonio Carrasco Valero 201411011615
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
 */







RunningTest = function( theRunningTestInfo) {

    var MAYLOG = false;

    var aRunningTestInfoStr = "";
    try {
        aRunningTestInfoStr = JSON.stringify( theRunningTestInfo);
    }
    catch( anException) {}

    var aJsonElement = $("#RunningTest_json");
    if( aJsonElement && aJsonElement.length) {
        aJsonElement.text( "RunningTest " + aRunningTestInfoStr).show();
    }



    if( MAYLOG) {
        console.log( "RunningTest " + aRunningTestInfoStr);
    }

    if( !theRunningTestInfo) {
        return "!theRunningTestInfo";
    }


    var aRunningTestElement = $("#RunningTest");
    if( !aRunningTestElement || !aRunningTestElement.length) {
        return "Missing #RunningTest";
    }

    var aShown = false;

    var aCurrentElement = $("#RunningTest_current");
    if( aCurrentElement && aCurrentElement.length) {
        if( theRunningTestInfo[ "current"]) {
            aCurrentElement.text( theRunningTestInfo[ "current"]).show();
            aShown = true;
        }
        else {
            aCurrentElement.text( "").hide();
        }
    }


    var aTopElement = $("#RunningTest_top");
    if( aTopElement && aTopElement.length) {
        if( theRunningTestInfo[ "top"]) {
            aTopElement.text( theRunningTestInfo[ "top"]).show();
            aShown = true;
        }
        else {
            aTopElement.text( "").hide();
        }
    }




    var aFullElement = $("#RunningTest_full");
    if( aFullElement && aFullElement.length) {

        var aFullHtml = null;

        if( theRunningTestInfo[ "full"]) {
            var someFull = theRunningTestInfo[ "full"];
            if( someFull) {
                var aNumFull = someFull.length;
                if( aNumFull > 1) {
                    aFullHtml = someFull.slice( 0, aNumFull - 1).reverse().join( '<br class="RunningTest_full_br"/>');
                }
            }
        }

        if( aFullHtml) {
            aFullElement.html( aFullHtml).show();
            aShown = true;
        }
        else {
            aFullElement.html( "").hide();
        }
    }


    var anExtraElement = $("#RunningTest_extra");
    if( anExtraElement && anExtraElement.length) {
        var anExtraStr = null;
        if( theRunningTestInfo[ "extra"]) {
            try {
                anExtraStr = JSON.stringify( theRunningTestInfo[ "extra"]);
            }
            catch( anException) {}
        }
        if( anExtraStr) {
            anExtraElement.text( anExtraStr).show();
            aShown = true;
        }
        else {
            anExtraElement.text( "").hide();
        }
    }

    if( aShown) {
        aRunningTestElement.removeClass( "RunningTest_Container_Hidden").addClass( "RunningTest_Container_Shown");
        return theRunningTestInfo;
    }

    return "Not Shown";

};


