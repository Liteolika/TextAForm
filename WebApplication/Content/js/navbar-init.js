'use strict';
(function () {

    //Stack menu when collapsed
    $('#mainNavigation').on('show.bs.collapse', function () {
        $('.nav-pills').addClass('nav-stacked');
        //console.log("adding nav-stacked");
    });

    //Unstack menu when not collapsed
    $('#mainNavigation').on('hide.bs.collapse', function () {
        $('.nav-pills').removeClass('nav-stacked');
        //console.log("removing adding nav-stacked");
    });

    $(window).resize(function () {

        var mainnav = $('#mainNavigation');
        var toggle = $('#mainNavToggle');

        if (toggle.css('display') === 'none')
        {
            $('.nav-pills').removeClass('nav-stacked');
        } else {
            $('.nav-pills').addClass('nav-stacked');
        }

    });


}());