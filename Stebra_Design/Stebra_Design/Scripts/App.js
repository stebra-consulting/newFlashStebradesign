'use strict';

var pathname = window.location.pathname;    // Returns path only
var url = window.location.href;             // Returns full URL

$(document).ready(function () {
    currentPath(pathname);
});

function currentPath(currUrl) {

    //window.location.href = "/{controller}/{action}" //in your case, /employee/empl

    var splittedUrl = url.split('/');
    var rebuildedUrl = splittedUrl[0] + '//' + splittedUrl[2];
    $('#flashNav').html('');
    var appentString;
    switch (currUrl) {
        case '/Home/About':
            appentString = '<li>' +
                                '<a id="navNews" role="button">News</a>' +
                            '</li>' +
                            '<li>' +
                                '<a id="navProjects" role="button">Projects</a>' +
                            '</li>' +
                            '<li>' +
                                '<a id="navBlogs" role="button">Blogs</a>' +
                            '</li>';
            $('#flashNav').append(appentString);
            LoadAnimations();
            break;
        case '/Home/News':
        case '/Home/NewsOne':
        case '/Home/NewsTwo':
        case '/Home/NewsThree':
        case '/Home/Projects':
        case '/Home/ProjectsOne':
        case '/Home/ProjectsTwo':
        case '/Home/ProjectsThree':
        case '/Home/Blogs':
        case '/Home/BlogsOne':
        case '/Home/BlogsTwo':
            appentString = '<li>' +
                                '<a id="navNews" href="' + rebuildedUrl + '/Home/News' + '" role="button">News</a>' +
                            '</li>' +
                            '<li>' +
                                '<a id="navProjects" href="' + rebuildedUrl + '/Home/Projects' + '" role="button">Projects</a>' +
                            '</li>' +
                            '<li>' +
                                '<a id="navBlogs" href="' + rebuildedUrl + '/Home/Blogs' + '" role="button">Blogs</a>' +
                            '</li>';
            $('#flashNav').append(appentString);
            break;
        default:
            appentString = '<li>' +
                                '<a id="navNews" role="button">News</a>' +
                            '</li>' +
                            '<li>' +
                                '<a id="navProjects" role="button">Projects</a>' +
                            '</li>' +
                            '<li>' +
                                '<a id="navBlogs" role="button">Blogs</a>' +
                            '</li>';
            $('#flashNav').append(appentString);
            LoadAnimations();
            break;
    }
}

function LoadAnimations() {
    $('a').on('click', function () {
        switch (this.id) {
            case 'navNews':
                SmoothSlide('#myNews');
                break;
            case 'navProjects':
                SmoothSlide('#myProjects');
                break;
            case 'navBlogs':
                SmoothSlide('#myBlogs');
                break;
            default:
                break;
        }
    });

    $(window).scroll(function () {
        $(".slideanim").each(function () {
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                $(this).addClass("slide");
            }
        });
    });
}

function SmoothSlide(scrollTo) {
    $('html, body').animate({
        scrollTop: $(scrollTo).offset().top
    }, 900);
}