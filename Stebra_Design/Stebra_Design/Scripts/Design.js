'use strict';

$(document).ready(function () {
    $('.carousel').carousel();

    $('.nav a').on('click', function () {
        $('.btn-navbar').click(); //bootstrap 2.x
        $('.navbar-toggle').click() //bootstrap 3.x by Richard
    });

    var heights = $(".mydiv").map(function () {
        return $(this).height();
    }).get(),

    maxHeight = Math.max.apply(null, heights);

    $(".mydiv").height(maxHeight);

    ResponsiveResize();
});

function ResponsiveResize() {
    $(window).resize(function () {
        var heights = $(".mydiv").map(function () {
            return $(this).height();
        }).get(),

    maxHeight = Math.max.apply(null, heights);

        $(".mydiv").height(maxHeight);
    });
}

//------simons js kod------------------------------------
//-------------------------------------------------------
//$(document).ready(function () {
    
//    var heights = $(".mydiv").map(function () {
//        return $(this).height();
//    }).get();
//​
//    var normalHeight = heights;
//​
//    maxHeight = Math.max.apply(null, heights);
//​
//    $(".mydiv").height(maxHeight);
//​
//    $(window).resize(function () {
//   ​
//        ResponsiveResize(normalHeight);
//    });
//});
//​
//function ResponsiveResize(normalHeight) {
   
//    var heights;
//    $(".mydiv").html(" ");
//​
//​
//​
//    heights = window.innerHeight;
//​
//​
//​
//    $(".mydiv").append(heights);
//​
//    $(".mydiv").height(heights/10);
    
//}
//----------------------------------------------------