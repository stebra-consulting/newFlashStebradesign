'use strict';

$(document).ready(function () {
    $('.carousel').carousel();

    var heights = $(".mydiv").map(function () {
        return $(this).height();
    }).get(),

    maxHeight = Math.max.apply(null, heights);

    $(".mydiv").height(maxHeight);
});