(function ($) {
	"use strict";

    jQuery(document).ready(function($){

        $(function(){

            var url = window.location.pathname,
                urlRegExp = new RegExp(url.replace(/\/$/,'') + "$"); // create regexp to match current url pathname and remove trailing slash if present as it could collide with the link in navigation in case trailing slash wasn't present there
            // now grab every link from the navigation
            $('.components li a').each(function(){
                // and test its normalized href against the url pathname regexp
                if(urlRegExp.test(this.href.replace(/\/$/,''))){
                    $(this).addClass('active');
                    //$(this).parent('a').removeClass('collapsed');
                    $(this).closest('ul').addClass("in");
                    $(this).closest('ul').attr("aria-expanded","true");
                    $(this).parents('li').parents('li').find('.submenu').attr("aria-expanded","true");
                }
            });

        });

        /*  Counter area  */
        $('.number').each(function () {
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 1000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
        /*  /Counter area  */

        $('#sidebarCollapse').on('click', function () {
           $('.admin__sidebar').toggleClass('active');
           $(this).toggleClass('active');
       });

        $('#sidebar__menu').perfectScrollbar();

        /*  Product Size Check js  */
        $('.productSizeCheck').click(function(){
            $('.form-group-hidden').toggle();
        });

        
        /*  Bootstrap data table js  */
        $('#common-table').dataTable({
             "language": {
                "search": "",
                "searchPlaceholder": "Search For a Record"
            }
        });

        /*  Product checkbox show js  */
        $('.showbox').hide();
        $('.checkclick').click(function(){
            // $(this).next('.showbox').toggle();
            var x = $(this).parent().next(".showbox").toggle();
            // console.log(x);
        });

        $(".color-wrap").hide();
        $('.checkclick').click(function(){
            $('.color-wrap').toggle();
        });

        $(".fa-close").click(function() {
            $(this).parents(".colorbox").hide();
        });

        $(".fa-close").click(function() {
            $(this).parents(".featured").hide();
        });

        // product profile scroll bar
        $('.header__comments-content, .header__notification-content, .header__wishlist-content').perfectScrollbar(); 


        /*  Bootstrap tags input js  */
        $('[data-role="tags-input"]').tagsInput();

        /*  Bootstrap colorpicker js  */
        $('#cp').colorpicker({
            color: "",
            format: "hex"
        });
        $('.cp').colorpicker({
            color: "",
            format: "hex"
        });

          



});


    $(window).on('load', function() {
        var options = {
            exportEnabled: true,
            animationEnabled: true,
            title: {
                text: "",
                horizontalAlign: "left",
                padding: {
                    top: 20,
                    bottom: 20,
                    left: 20
                },
            },
            data: [
            {
                type: "splineArea", //change it to line, area, bar, pie, etc
                dataPoints: [
                { y: 10 },
                { y: 6 },
                { y: 14 },
                { y: 12 },
                { y: 19 },
                { y: 14 },
                { y: 26 },
                { y: 10 },
                { y: 22 }
                ]
            }
            ]
        };
        $("#chartContainer").CanvasJSChart(options);

        // Pie chart topReference
        var chart = new CanvasJS.Chart("chartContainer-topReference",
        {
            exportEnabled: true,
            animationEnabled: true,
                // title:{
                //     text: "Pie Chart",
                //     horizontalAlign: "left",
                //     padding: {
                //         top: 20,
                //         bottom: 2,
                //         left: 20
                //         },
                // },
                legend: {
                    cursor: "pointer",
                    horizontalAlign: "right",
                    verticalAlign: "center",
                    fontSize: 16,
                    padding: {
                        top: 20,
                        bottom: 2,
                        right: 20,
                    },
                },
                data: [
                {
                    type: "pie",
                    showInLegend: true,
                    legendText: "",
                    toolTipContent: "{name}: <strong>{#percent%} (#percent%)</strong>",
                    indexLabel: "#percent%",
                    indexLabelFontColor: "white",
                    indexLabelPlacement: "inside",
                    dataPoints: [
                    {y: 20, name: "preview.codecanyon.net"},
                    { y: 10, name: "codecanyon.net" },
                    { y: 30, name: "yandex.ru"},
                    {y: 20, name: "m.facebook.com"},
                    { y: 10, name: "www.facebook.com" }
                    ]
                }
                ]
            });
        chart.render();


        // Pie chart OS
        var chart = new CanvasJS.Chart("chartContainer-os",
        {
            exportEnabled: true,
            animationEnabled: true,
            legend: {
                cursor: "pointer",
                horizontalAlign: "right",
                verticalAlign: "center",
                fontSize: 16,
                padding: {
                    top: 20,
                    bottom: 2,
                    right: 20,
                },
            },
            data: [
            {
                type: "pie",
                showInLegend: true,
                legendText: "",
                toolTipContent: "{name}: <strong>{#percent%} (#percent%)</strong>",
                indexLabel: "#percent%",
                indexLabelFontColor: "white",
                indexLabelPlacement: "inside",
                dataPoints: [
                {y: 20, name: "Windows 10"},
                { y: 10, name: "Unknown OS Platform" },
                { y: 30, name: "Windows 7"},
                {y: 20, name: "Mac OS X"},
                { y: 10, name: "Android" }
                ]
            }
            ]
        });
        chart.render();
        
        
    });

}(jQuery));	