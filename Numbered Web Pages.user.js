// ==UserScript==
// @name         Numbered Web Pages
// @namespace
// @version      0.1
// @description  try to take over the world!
// @author       You
// @require      https://code.jquery.com/jquery-3.4.1.min.js
// @match        https://phptherightway.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Get the number of page
    let pageNum = Math.floor( $( document ).height() / $( window ).height() );

    for ( let i = 1; i <= pageNum; i++ )
    {
        let pagePos = $( window ).height() * i;
        $( 'body' ).append( "<p style='position: absolute; top: " + pagePos + "px; right: 0; border-top: 1px solid red;'>Page No. " + i + "</p>" );
    }
})();
