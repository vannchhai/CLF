window.styleManager = (function () {
    'use strict'; // Variable must to be declare before used

    var styleManager = {};

    styleManager.loadColorPicker = function()
    {
        $('#fontName').change(function (e) {
            $('body').css('font-family', $(this).val());
        });

        $('#pageBody').colorpicker().on('changeColor', function (e) {
            $('body').css('background-color', e.color.toHex());
        });

        $('#pageTitle').colorpicker().on('changeColor', function (e) {
            $('.page-title .title').css('color', e.color.toHex());
        });

        $('#pageTopBar').colorpicker().on('changeColor', function (e) {
            $('.page-topbar').css('background-color', e.color.toHex());
        });

        $('#textTopBar').colorpicker().on('changeColor', function (e) {
            $('.page-topbar a').css('color', e.color.toHex());
        });

        $('#logoArea').colorpicker().on('changeColor', function (e) {
            $('.logo-area').css('background-color', e.color.toHex());
        });

        $('#pageSidebar').colorpicker().on('changeColor', function (e) {
            $('.page-sidebar').css('background-color', e.color.toHex());
            $('.wraplist').css('background-color', e.color.toHex());
        });

        $('#textSidebar').colorpicker().on('changeColor', function (e) {
            $('#main-menu-wrapper li a').css('color', e.color.toHex());
        });

        $('#projectInfo').colorpicker().on('changeColor', function (e) {
            $('.project-info').css('background-color', e.color.toHex());
        });
        $('#color').colorpicker();

    };

    styleManager.Default = function () {
        $('#pageBody').colorpicker('setValue', '#f1f2f7');
        $('#pageTitle').colorpicker('setValue', '#767676');
        $('#pageTopBar').colorpicker('setValue', '#fff');
        $('#textTopBar').colorpicker('setValue', '#96969e');
        $('#logoArea').colorpicker('setValue', '#333');
        $('#pageSidebar').colorpicker('setValue', '#333');
        $('#textSidebar').colorpicker('setValue', '#D6DADE');
        $('#projectInfo').colorpicker('setValue', '#333');
    };

    styleManager.Green = function () {
        $('#pageBody').colorpicker('setValue', '#f1f2f7');
        $('#pageTitle').colorpicker('setValue', '#767676');
        $('#pageTopBar').colorpicker('setValue', '#1fb5ac');
        $('#textTopBar').colorpicker('setValue', '#fff');
        $('#logoArea').colorpicker('setValue', '#1fb5ac');
        $('#pageSidebar').colorpicker('setValue', '#333');
        $('#textSidebar').colorpicker('setValue', '#D6DADE');
        $('#projectInfo').colorpicker('setValue', '#1fb5ac');
    };

    styleManager.Blue = function () {
        $('#pageBody').colorpicker('setValue', '#f1f2f7');
        $('#pageTitle').colorpicker('setValue', '#767676');
        $('#pageTopBar').colorpicker('setValue', '#489ee7');
        $('#textTopBar').colorpicker('setValue', '#fff');
        $('#logoArea').colorpicker('setValue', '#489ee7');
        $('#pageSidebar').colorpicker('setValue', '#333');
        $('#textSidebar').colorpicker('setValue', '#D6DADE');
        $('#projectInfo').colorpicker('setValue', '#489ee7');
    };

    styleManager.Magenta = function () {
        $('#pageBody').colorpicker('setValue', '#f1f2f7');
        $('#pageTitle').colorpicker('setValue', '#767676');
        $('#pageTopBar').colorpicker('setValue', '#7b4a8d');
        $('#textTopBar').colorpicker('setValue', '#fff');
        $('#logoArea').colorpicker('setValue', '#7b4a8d');
        $('#pageSidebar').colorpicker('setValue', '#333');
        $('#textSidebar').colorpicker('setValue', '#D6DADE');
        $('#projectInfo').colorpicker('setValue', '#7b4a8d');
    };

    styleManager.Apply = function () {
        
    };

    return styleManager;

})();

styleManager.loadColorPicker();