/**
 * @Package: Dinex 4 Web Admin
 * @Since: Khiev Kimkhun
 * This file is part of Main Admin Theme HTML package.
 */

// set menu to active
$('#main-menu-wrapper a[href="' + location.pathname + '"]').parent().addClass('open');

/*--------------------------------
         PACE LOADING
--------------------------------*/
paceOptions = {
    // Configuration goes here. Example:
    //elements: false,
    //restartOnPushState: false,
    //restartOnRequestAfter: false,
    ajax: {
        //trackMethods: ['GET', 'POST'],
        ignoreURLs: [/.*browserLink.*/] // I set ignore BrowserLink of web page MVC
    },
    //ajax: false, // disabled
    //document: true, // enabled
    //eventLag: false, // disabled
    //elements: {
    //    selectors: ['body']
    //}
};

jQuery(function ($) {    
    'use strict'; // Variable must to be declare before used

    var DINEX_SETTINGS = window.DINEX_SETTINGS || {};

    /*--------------------------------
         Window Based Layout
     --------------------------------*/
    DINEX_SETTINGS.windowBasedLayout = function () {
        var width = window.innerWidth;
        //console.log(width);

        if ($("body").hasClass("chat-open") || $("body").hasClass("sidebar-collapse")) {

            DINEX_SETTINGS.mainmenuCollapsed();

        } else if (width < 1025) {

            // small window
            $(".page-topbar").addClass("sidebar_shift").removeClass("chat_shift");
            $(".page-sidebar").addClass("collapseit").removeClass("expandit");
            $("#main-content").addClass("sidebar_shift").removeClass("chat_shift");
            //$(".page-chatapi").removeClass("showit").addClass("hideit");
            //$(".chatapi-windows").removeClass("showit").addClass("hideit");
            DINEX_SETTINGS.mainmenuCollapsed();

        } else {

            // large window
            $(".page-topbar").removeClass("sidebar_shift chat_shift");
            $(".page-sidebar").removeClass("collapseit chat_shift");
            $("#main-content").removeClass("sidebar_shift chat_shift");
            DINEX_SETTINGS.mainmenuScroll();
        }
    };


    /*--------------------------------
         Window Based Layout
     --------------------------------*/
    DINEX_SETTINGS.onLoadTopBar = function () {
        $(".page-topbar .message-toggle-wrapper").addClass("showopacity");
        $(".page-topbar .notify-toggle-wrapper").addClass("showopacity");
        $(".page-topbar .searchform").addClass("showopacity");
        $(".page-topbar li.profile").addClass("showopacity");
    }

    /*--------------------------------
         Top Bar
     --------------------------------*/
    DINEX_SETTINGS.pageTopBar = function () {
        $('.page-topbar li.searchform .input-group-addon').click(function (e) {
            $(this).parent().parent().toggleClass("focus");
            $(this).parent().find("input").focus();
        });

        $('.page-topbar li .dropdown-menu .list').perfectScrollbar({
            suppressScrollX: true
        });

    };

    /*--------------------------------
         CHAT API
     --------------------------------*/
    DINEX_SETTINGS.chatAPI = function () {

        //$('.page-topbar .toggle_chat').on('click', function () {
        //    var chatarea = $(".page-chatapi");
        //    var chatwindow = $(".chatapi-windows");
        //    var topbar = $(".page-topbar");
        //    var mainarea = $("#main-content");
        //    var menuarea = $(".page-sidebar");

        //    if (chatarea.hasClass("hideit")) {
        //        chatarea.addClass("showit").removeClass("hideit");
        //        chatwindow.addClass("showit").removeClass("hideit");
        //        topbar.addClass("chat_shift");
        //        mainarea.addClass("chat_shift");
        //        menuarea.addClass("chat_shift");
        //        DINEX_SETTINGS.mainmenuCollapsed();
        //    } else {
        //        chatarea.addClass("hideit").removeClass("showit");
        //        chatwindow.addClass("hideit").removeClass("showit");
        //        topbar.removeClass("chat_shift");
        //        mainarea.removeClass("chat_shift");
        //        menuarea.removeClass("chat_shift");
        //        //ULTRA_SETTINGS.mainmenuScroll();
        //        DINEX_SETTINGS.windowBasedLayout();
        //    }
        //});

        $('.page-topbar .sidebar_toggle').on('click', function () {
            //var chatarea = $(".page-chatapi");
            //var chatwindow = $(".chatapi-windows");
            var topbar = $(".page-topbar");
            var mainarea = $("#main-content");
            var menuarea = $(".page-sidebar");

            if (menuarea.hasClass("collapseit") || menuarea.hasClass("chat_shift")) {
                menuarea.addClass("expandit").removeClass("collapseit").removeClass("chat_shift");
                topbar.removeClass("sidebar_shift").removeClass("chat_shift");
                mainarea.removeClass("sidebar_shift").removeClass("chat_shift");
                //chatarea.addClass("hideit").removeClass("showit");
                //chatwindow.addClass("hideit").removeClass("showit");
                DINEX_SETTINGS.mainmenuScroll();
            } else {
                menuarea.addClass("collapseit").removeClass("expandit").removeClass("chat_shift");
                topbar.addClass("sidebar_shift").removeClass("chat_shift");
                mainarea.addClass("sidebar_shift").removeClass("chat_shift");
                DINEX_SETTINGS.mainmenuCollapsed();
            }
        });

    };

    /*--------------------------------
         Main Menu
     --------------------------------*/
    DINEX_SETTINGS.mainMenu = function () {
        $('#main-menu-wrapper li a').click(function (e) {

            if ($(this).next().hasClass('sub-menu') === false) {
                return;
            }

            var parent = $(this).parent().parent();
            var sub = $(this).next();

            parent.children('li.open').children('.sub-menu').slideUp(200);
            parent.children('li.open').children('a').children('.arrow').removeClass('open');
            parent.children('li').removeClass('open');

            if (sub.is(":visible")) {
                $(this).find(".arrow").removeClass("open");
                sub.slideUp(200);
            } else {
                $(this).parent().addClass("open");
                $(this).find(".arrow").addClass("open");
                sub.slideDown(200);
            }

        });

        $("body").click(function (e) {
            $(".page-sidebar.collapseit .wraplist li.open .sub-menu").attr("style", "");
            $(".page-sidebar.collapseit .wraplist li.open").removeClass("open");
            $(".page-sidebar.chat_shift .wraplist li.open .sub-menu").attr("style", "");
            $(".page-sidebar.chat_shift .wraplist li.open").removeClass("open");
        });

    };

    /*--------------------------------
     Main Menu Scroll
    --------------------------------*/
    DINEX_SETTINGS.mainmenuScroll = function () {

        //console.log("expand scroll menu");

        var topbar = $(".page-topbar").height();
        var projectinfo = $(".project-info").innerHeight();

        var height = window.innerHeight - topbar - projectinfo;

        $('#main-menu-wrapper').height(height).perfectScrollbar({
            suppressScrollX: true
        });
        $("#main-menu-wrapper .wraplist").height('auto');


        /*show first sub menu of open menu item only - opened after closed*/
        // > in the selector is used to select only immediate elements and not the inner nested elements.
        $("li.open > .sub-menu").attr("style", "display:block;");


    };

    /*--------------------------------
         Collapsed Main Menu
     --------------------------------*/
    DINEX_SETTINGS.mainmenuCollapsed = function () {

        if ($(".page-sidebar.chat_shift #main-menu-wrapper").length > 0 || $(".page-sidebar.collapseit #main-menu-wrapper").length > 0) {
            //console.log("collapse menu");
            var topbar = $(".page-topbar").height();
            var windowheight = window.innerHeight;
            var minheight = windowheight - topbar;
            var fullheight = $(".page-container #main-content .wrapper").height();

            var height = fullheight;

            if (fullheight < minheight) {
                height = minheight;
            }

            $('#main-menu-wrapper').perfectScrollbar('destroy');

            $('.page-sidebar.chat_shift #main-menu-wrapper .wraplist, .page-sidebar.collapseit #main-menu-wrapper .wraplist').height(height);

            /*hide sub menu of open menu item*/
            $("li.open .sub-menu").attr("style", "");

        }

    };

    /*--------------------------------
         Section Box Actions
     --------------------------------*/
    DINEX_SETTINGS.sectionBoxActions = function () {

        $('section.box .actions .box_toggle').on('click', function () {

            var content = $(this).parent().parent().parent().find(".content-body");
            if (content.hasClass("collapsed")) {
                content.removeClass("collapsed").slideDown(500);
                $(this).removeClass("fa-chevron-up").addClass("fa-chevron-down");
            } else {
                content.addClass("collapsed").slideUp(500);
                $(this).removeClass("fa-chevron-down").addClass("fa-chevron-up");
            }

        });

        $('section.box .actions .box_close').on('click', function () {
            content = $(this).parent().parent().parent().remove();
        });

    };

    /*--------------------------------
         Login Page
     --------------------------------*/
    DINEX_SETTINGS.loginPage = function () {

        var height = window.innerHeight;
        var formheight = $("#login").height();
        var newheight = (height - formheight) / 2;
        //console.log(height+" - "+ formheight + " / "+ newheight);
        $('#login').css('margin-top', +newheight + 'px');

        if ($('#login #user_login').length) {
            var d = document.getElementById('user_login');
            d.focus();
        }

    };

    /*--------------------------------
         iCheck
     --------------------------------*/
    DINEX_SETTINGS.iCheck = function () {

        if ($.isFunction($.fn.iCheck)) {

            $('input[type="checkbox"].iCheck').iCheck({
                checkboxClass: 'icheckbox_minimal',
                radioClass: 'iradio_minimal',
                increaseArea: '20%'
            });


            var x;
            var colors = ["-green", "-red", "-yellow", "-blue", "-aero", "-orange", "-grey", "-pink", "-purple", "-white"];

            for (x = 0; x < colors.length; x++) {

                if (x == 0) {
                    $('input.icheck-minimal').iCheck({
                        checkboxClass: 'icheckbox_minimal' + colors[x],
                        radioClass: 'iradio_minimal' + colors[x],
                        increaseArea: '20%'
                    });

                    $('input.skin-square').iCheck({
                        checkboxClass: 'icheckbox_square' + colors[x],
                        radioClass: 'iradio_square' + colors[x],
                        increaseArea: '20%'
                    });

                    $('input.skin-flat').iCheck({
                        checkboxClass: 'icheckbox_flat' + colors[x],
                        radioClass: 'iradio_flat' + colors[x],
                    });


                    $('input.skin-line').each(function () {
                        var self = $(this),
                            label = self.next(),
                            label_text = label.text();

                        label.remove();
                        self.iCheck({
                            checkboxClass: 'icheckbox_line' + colors[x],
                            radioClass: 'iradio_line' + colors[x],
                            insert: '<div class="icheck_line-icon"></div>' + label_text
                        });
                    });

                } // end x = 0

                $('input.icheck-minimal' + colors[x]).iCheck({
                    checkboxClass: 'icheckbox_minimal' + colors[x],
                    radioClass: 'iradio_minimal' + colors[x],
                    increaseArea: '20%'
                });


                $('input.skin-square' + colors[x]).iCheck({
                    checkboxClass: 'icheckbox_square' + colors[x],
                    radioClass: 'iradio_square' + colors[x],
                    increaseArea: '20%'
                });


                $('input.skin-flat' + colors[x]).iCheck({
                    checkboxClass: 'icheckbox_flat' + colors[x],
                    radioClass: 'iradio_flat' + colors[x],
                });


                $('input.skin-line' + colors[x]).each(function () {
                    var self = $(this),
                        label = self.next(),
                        label_text = label.text();

                    label.remove();
                    self.iCheck({
                        checkboxClass: 'icheckbox_line' + colors[x],
                        radioClass: 'iradio_line' + colors[x],
                        insert: '<div class="icheck_line-icon"></div>' + label_text
                    });
                });

            } // end for loop


        }
    };

    /******************************
     initialize respective scripts 
     *****************************/
    $(document).ready(function () {
        DINEX_SETTINGS.windowBasedLayout();
        DINEX_SETTINGS.onLoadTopBar();
        DINEX_SETTINGS.mainmenuScroll();
        DINEX_SETTINGS.mainMenu();
        DINEX_SETTINGS.mainmenuCollapsed();
        DINEX_SETTINGS.pageTopBar();
        //DINEX_SETTINGS.otherScripts();
        DINEX_SETTINGS.iCheck();
        //DINEX_SETTINGS.customDropZone();
        //DINEX_SETTINGS.formEditors();
        //DINEX_SETTINGS.extraFormSettings();
        //DINEX_SETTINGS.tooltipsPopovers();
        //DINEX_SETTINGS.nestableList();
        //DINEX_SETTINGS.uiCalendar();
        //DINEX_SETTINGS.tocifyScrollMenu();
        //DINEX_SETTINGS.loadPrettyPhoto();
        //DINEX_SETTINGS.jvectorMaps();
        //DINEX_SETTINGS.dataTablesInit();
        //DINEX_SETTINGS.jsTreeINIT();
        //DINEX_SETTINGS.breadcrumbAutoHidden();
        DINEX_SETTINGS.chatAPI();
        //DINEX_SETTINGS.chatApiScroll();
        //DINEX_SETTINGS.chatApiWindow();
        //DINEX_SETTINGS.mailboxInbox();
        //DINEX_SETTINGS.ultraWidgets();
        DINEX_SETTINGS.sectionBoxActions();
        //DINEX_SETTINGS.draggablePanels();
        //DINEX_SETTINGS.viewportElement();
        //DINEX_SETTINGS.searchPage();
        //DINEX_SETTINGS.ultraToDoAddTaskWidget();
        //DINEX_SETTINGS.ultraToDoWidget();
        //DINEX_SETTINGS.dbjvectorMap();
        //DINEX_SETTINGS.widgetSparklineChart();
        //DINEX_SETTINGS.ultraWidgetWeather();
        DINEX_SETTINGS.loginPage();
        
    });

    $(window).resize(function () {
        DINEX_SETTINGS.windowBasedLayout();
        //DINEX_SETTINGS.ultraWidgetWeather();
        //DINEX_SETTINGS.isotopeGallery();
        DINEX_SETTINGS.loginPage();
        //DINEX_SETTINGS.widgetSparklineChart();
    });

    
    //$(window).load(function () {
        //DINEX_SETTINGS.isotopeGallery();
        //DINEX_SETTINGS.loginPage();
    //});

});