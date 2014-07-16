$(document).ready(function a_documentReady() {

    function renderBackward() {

        //hardcoded first step
        $('.intro').removeClass('intro-1');
        $('.logo').removeClass('logo-1');
        $('.technologies').removeClass('technologies-1');

    }

    function renderForward() {

        //hardcoded second step
        $('.intro').addClass('intro-1');
        $('.logo').addClass('logo-1');
        $('.technologies').addClass('technologies-1');

    }

    //manual navigation is disabled
    $(document).keydown(function(event) {

        var keyCode   = event.which,
            leftArrow = 37,
            rightArow = 39,
            upArrow   = 38,
            downArrow = 40,
            space     = 32,
            pageUp    = 33,
            pageDown  = 34,
            backward  = (keyCode === leftArrow || keyCode === upArrow || keyCode === pageUp),
            forward   = (keyCode === rightArow || keyCode === downArrow || keyCode === pageDown || keyCode === space);

        //navigation backward
        if(backward) {
            renderBackward();
        }

        //navigation forward
        if(forward) {
            renderForward();
        }

    });

    setTimeout(function() {
        renderForward();
    }, 3000);

});