/*
/ How to used:
/ Ex 1: data-bind="animate:{ animation: 'fadeInRight', state: true}"
/ Ex 2: data-bind="animate:{ animation: 'fadeInRight', state: true, handler: HandlerEvent}"
/ Ex 3: data-bind="animate:{ animationOn: 'fadeInRight', animationOff: 'fadeOutLeft', state: state, handler: HandlerEvent}"
*/

(function (factory) {
    if (typeof require === "function" && typeof exports === "object" && typeof module === "object") {
        factory(require("knockout"), exports);
    } else if (typeof define === "function" && define["amd"]) {
        define(["knockout", "exports"], factory);
    } else {
        factory(ko, ko.mapping = {});
    }
}(function (ko, exports) {
    var animations = ["bounce", "flash", "pulse", "rubberBand", "shake", "swing", "tada", "wobble", "bounceIn", "bounceInDown", "bounceInLeft", "bounceInRight", "bounceInUp", "bounceOut", "bounceOutDown", "bounceOutLeft", "bounceOutRight", "bounceOutUp", "fadeIn", "fadeInDown", "fadeInDownBig", "fadeInLeft", "fadeInLeftBig", "fadeInRight", "fadeInRightBig", "fadeInUp", "fadeInUpBig", "fadeOut", "fadeOutDown", "fadeOutDownBig", "fadeOutLeft", "fadeOutLeftBig", "fadeOutRight", "fadeOutRightBig", "fadeOutUp", "fadeOutUpBig", "flip", "flipInX", "flipInY", "flipOutX", "flipOutY", "lightSpeedIn", "lightSpeedOut", "rotateIn", "rotateInDownLeft", "rotateInDownRight", "rotateInUpLeft", "rotateInUpRight", "rotateOut", "rotateOutDownLeft", "rotateOutDownRight", "rotateOutUpLeft", "rotateOutUpRight", "hinge", "rollIn", "rollOut", "zoomIn", "zoomInDown", "zoomInLeft", "zoomInRight", "zoomInUp", "zoomOut", "zoomOutDown", "zoomOutLeft", "zoomOutRight", "zoomOutUp"],
        baseAnimateClass = "animated",
        pfx = ["webkit", "moz", "MS", "o", ""];

    function addPrefixedEvent(element, type, callback) {
        for (var p = 0; p < pfx.length; p++) {
            if (!pfx[p]) type = type.toLowerCase();
            //element.addEventListener(pfx[p] + type, callback, false);
            $(element).one(pfx[p] + type, callback);
        }
    }

    function removePrefixedEvent(element, type, callback) {
        for (var p = 0; p < pfx.length; p++) {
            if (!pfx[p]) type = type.toLowerCase();
            element.removeEventListener(pfx[p] + type, callback);
        }
    }

    function hasClass(ele, cls) {
        return ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
    }

    function addClass(ele, cls) {
        if (!hasClass(ele, cls)) {
            ele.className = ele.className ? ele.className + " " + cls : cls;
        }
    }

    function removeClass(ele, cls) {
        if (hasClass(ele, cls)) {
            var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
            ele.className = ele.className.replace(reg, ' ').trim();
        }
    }

    function doAnimationWork(element, animation1, animation2, callback, state) {
        addClass(element, baseAnimateClass);

        if (state) {
            removeClass(element, animation2);
            addClass(element, animation1);
            element.style.display = "";
        }
        else {
            removeClass(element, animation1);
            addClass(element, animation2);
            element.style.display = "none";
        }
        

        addPrefixedEvent(element, "AnimationEnd", function (event) {
            //removePrefixedEvent(element, "AnimationEnd", callback);
            
            if (typeof callback === 'function') {
                callback(element, event, state);
            }

        });
    }

    ko.bindingHandlers.animate = {
        init: function (element, valueAccessor) {
            var data = ko.unwrap(valueAccessor()),
                animation, state, toggle, animationOn, animationOff, handler;

            if (!data.animationOn) {
                throw new Error('Animation property must be defined');
            }

            if (data.state === undefined) {
                throw new Error('State property must be defined');
            }

            animation = ko.unwrap(data.animation);
            animationOn = ko.unwrap(data.animationOn);
            animationOff = ko.unwrap(data.animationOff); 

            if (animation && animations.indexOf(animation) === -1) {
                if (animationOn && animations.indexOf(animationOn) === -1) {
                    throw new Error('Invalid first animation');
                }

                if (animationOff && animations.indexOf(animationOff) === -1) {
                    throw new Error('Invalid second animation');
                }
            }            
        },
        update: function (element, valueAccessor) {
            var data = ko.unwrap(valueAccessor()),
                animation, state, toggle, animationOn, animationOff, handler;

            if (!data.animation) {
                if (!data.animationOn) {
                    throw new Error('Animation property must be defined');
                }
            }

            if (data.state === undefined) {
                throw new Error('State property must be defined');
            }

            animation = ko.unwrap(data.animation);
            state = ko.unwrap(data.state);
            animationOn = ko.unwrap(data.animationOn); 
            animationOff = ko.unwrap(data.animationOff); 
            toggle = animationOn !== undefined;
            handler = ko.unwrap(data.handler) || undefined;

            if (!toggle)
            {
                doAnimationWork(element, animation, animation, handler, state);
            }
            else
            {
                doAnimationWork(element, animationOn, animationOff, handler, state);
            }
        }
    };
}));
