/*
 * rowindexfinder.js
 *
 * Creado @author Antonio Carrasco Valero 201410161851
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







RowIndexFinder = function( theFindCriteria) {

    var MAYLOG = false;

    var aRowIndexFinderElement = $("#RowIndexFinder");
    if( !aRowIndexFinderElement || !aRowIndexFinderElement.length) {
        return;
    }

    var aShown = false;

    if( !theFindCriteria) {
        if( MAYLOG) {
            console.log( "RowIndexFinder NO CRITERIA!!!");
        }

        $("#RowIndexFinder_result").text( "NO CRITERIA!!!");
        return -1;
    }

    var aFindCriteriaStr = JSON.stringify( theFindCriteria);
    if( aFindCriteriaStr) {
        $("#RowIndexFinder_criteria").text( aFindCriteriaStr);
        aShown = true;
    }

    var aRowIndex = _RowIndexFinder( theFindCriteria);
    $("#RowIndexFinder_result").text( "" + aRowIndex);
    aShown = true;

    if( aShown) {
        aRowIndexFinderElement.removeClass( "RowIndexFinder_Container_Hidden").addClass( "RowIndexFinder_Container_Shown");
    }

    return aRowIndex;

};








var _RowIndexFinder = function( theFindCriteria) {

    if( !theFindCriteria) {
        return -1;
    }

    var aTableId = theFindCriteria[ "tableId"];
    if( !aTableId) {
        return -1;
    }
    
    if( theFindCriteria[ "multiColumns"]) {
        return _RowIndexFinder_MultiColumns( theFindCriteria);
    }

    return _RowIndexFinder_SingleColumn( theFindCriteria);
}









var _RowIndexFinder_SingleColumn = function( theFindCriteria) {

    if( !theFindCriteria) {
        return -1;
    }

    var aTableId = theFindCriteria[ "tableId"];
    if( !aTableId) {
        return -1;
    }

    var aColumnIndex = theFindCriteria[ "columnIndex"];
    if( !typeof aColumnIndex == "number") {
        return -1;
    }


    var aSpanIndex = theFindCriteria[ "spanIndex"];
    if( !typeof aSpanIndex == "number") {
        aSpanIndex = undefined;
    }


    var aValue = theFindCriteria[ "value"];
    if( typeof aValue == "undefined") {
        return -1;
    }

    if( ( typeof aValue == "number")) {
        aValue = "" + aValue;
    }

    var anExact = true;

    if( aValue.indexOf( "*") == 0) {
        aValue = aValue.replaceAll( "*", "");
        anExact = false;
    }



    var aTable = $("#" + aTableId);
    if( !aTable || !aTable.length) {
        return -1;
    }

    var aTBody = aTable.children( "tbody");
    if( !aTBody || !aTBody.length) {
        return -1;
    }

    var someRows = aTBody.children();
    if( !someRows || !someRows.length) {
        return -1;
    }


    var aNumRows = someRows.length;
    if( !aNumRows) {
        return -1;
    }

    for( var aRowIdx=0; aRowIdx < aNumRows; aRowIdx++) {

        var aRow = someRows[ aRowIdx];
        var aJQRow = $( aRow);

        var someCells = aJQRow.children( "td");
        if( !someCells) {
            continue;
        }

        var aNumCells = someCells.length;
        if( !aNumCells) {
            continue;
        }

        if( aColumnIndex >= aNumCells) {
            continue;
        }

        var aCell = someCells[ aColumnIndex];
        if( !aCell) {
            continue;
        }

        var anElementWithValue = aCell;


        if( typeof aSpanIndex == "number") {

            var aJQCell = $( aCell);
            var someSpan = aJQCell.children( "span");
            if( !someSpan) {
                continue;
            }

            var aNumSpan = someSpan.length;
            if( !aNumSpan) {
                continue;
            }

            if( aSpanIndex >= aNumSpan) {
                continue;
            }

            anElementWithValue = someSpan[ aSpanIndex];
        }


        var aJQElementWithValue = $( anElementWithValue);

        var aOneValue = aJQElementWithValue.text();
        if( anExact) {
            if( aOneValue == aValue) {
                return aRowIdx;
            }
        }
        else {
            if( aOneValue.indexOf( aValue) >= 0) {
                return aRowIdx;
            }
        }
    }


    return -1;
};

















var _RowIndexFinder_MultiColumns = function( theFindCriteria) {

    if( !theFindCriteria) {
        return -1;
    }

    var aTableId = theFindCriteria[ "tableId"];
    if( !aTableId) {
        return -1;
    }


    var someMultiColumns = theFindCriteria[ "multiColumns"];
    if( !someMultiColumns) {
        return -1;
    }

    var aNumMultiColumns = someMultiColumns.length;
    if( !aNumMultiColumns) {
        return -1;
    }



    var someValuesToSelect = [ ];



    for( var aColumnIdx=0; aColumnIdx < aNumMultiColumns; aColumnIdx++) {

        var aColumnCriteria = someMultiColumns[ aColumnIdx];
        if( aColumnCriteria) {

            var aColumnIndex = aColumnCriteria[ "columnIndex"];
            if( !typeof aColumnIndex == "number") {
                return -1;
            }

            var aSpanIndex = aColumnCriteria[ "spanIndex"];
            if( !typeof aSpanIndex == "number") {
                aSpanIndex = undefined;
            }

            var aValue = aColumnCriteria[ "value"];
            if( typeof aValue == "undefined") {
                return -1;
            }

            if( ( typeof aValue == "number")) {
                aValue = "" + aValue;
            }

            someValuesToSelect.push( aValue);
        }
    }


    var anExact = true;

    if( aValue.indexOf( "*") == 0) {
        aValue = aValue.replaceAll( "*", "");
        anExact = false;
    }



    var aTable = $("#" + aTableId);
    if( !aTable || !aTable.length) {
        return -1;
    }

    var aTBody = aTable.children( "tbody");
    if( !aTBody || !aTBody.length) {
        return -1;
    }

    var someRows = aTBody.children();
    if( !someRows || !someRows.length) {
        return -1;
    }


    var aNumRows = someRows.length;
    if( !aNumRows) {
        return -1;
    }

    for( var aRowIdx=0; aRowIdx < aNumRows; aRowIdx++) {

        var aRow = someRows[ aRowIdx];
        var aJQRow = $( aRow);

        var someCells = aJQRow.children( "td");
        if( !someCells) {
            continue;
        }

        var aNumCells = someCells.length;
        if( !aNumCells) {
            continue;
        }


        var aNumColumnsMatching = false;

        for( var aColumnIdx=0; aColumnIdx < aNumMultiColumns; aColumnIdx++) {

            var aColumnCriteria = someMultiColumns[ aColumnIdx];
            if( aColumnCriteria) {

                var aValueToSelect = someValuesToSelect[ aColumnIdx];

                if( aColumnIndex >= aNumCells) {
                    break;
                }

                var aCell = someCells[ aColumnIndex];
                if( !aCell) {
                    break;
                }

                var anElementWithValue = aCell;


                if( typeof aSpanIndex == "number") {

                    var aJQCell = $( aCell);
                    var someSpan = aJQCell.children( "span");
                    if( !someSpan) {
                        break;
                    }

                    var aNumSpan = someSpan.length;
                    if( !aNumSpan) {
                        break;
                    }

                    if( aSpanIndex >= aNumSpan) {
                        break;
                    }

                    anElementWithValue = someSpan[ aSpanIndex];
                }


                var aJQElementWithValue = $( anElementWithValue);

                var aOneValue = aJQElementWithValue.text();
                if( anExact) {
                    if( aOneValue == aValue) {
                        aNumColumnsMatching += 1;
                    }
                    else {
                        break;
                    }
                }
                else {
                    if( aOneValue.indexOf( aValue) >= 0) {
                        aNumColumnsMatching += 1;
                    }
                    else {
                        break;
                    }
                }
            }
        }

        if( aNumColumnsMatching == aNumMultiColumns) {
            return aRowIdx;
        }
    }


    return -1;
};
