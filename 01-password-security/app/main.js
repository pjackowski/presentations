$(document).ready(function documentReady() {

    loader();

    /*impress().init();
    $('.impress').removeClass('ninja');
    $('body').addClass('impress-background');*/

});

function loader() {

    var timer = 0,
        marginTop = 400;

    var wait = function(delay) {
        timer += delay;
    };

    var printNewLine = function() {
        marginTop -= 20;
        $('.loader').css({marginTop: (marginTop).toString() + 'px'});
    };

    wait(500);
    setTimeout(function() {
        $('.loader').removeClass('ninja');
        $('.print-booting-system').typeTo('...booting system...');
        printNewLine();
    }, timer);

    wait(3500);
    setTimeout(function() {
        printNewLine();
        $('.print-system-operational').typeTo('...system operational');
    }, timer);

    wait(3000);
    setTimeout(function() {
        printNewLine();
        $('.command-list-files').typeTo('$ list files');
    }, timer);

    wait(3000);
    setTimeout(function() {
        printNewLine();
        $('.print-file-1').typeTo('...1: p4ssw0rd_s3cur1ty.txt');
    }, timer);

    wait(4000);
    setTimeout(function() {
        printNewLine();
        $('.command-load-file-1').typeTo('$ load p4ssw0rd_s3cur1ty');
    }, timer);

    wait(4000);
    setTimeout(function() {
        printNewLine();
        $('.print-file-ready').typeTo('...ready');
    }, timer);

    wait(3000);
    setTimeout(function() {
        printNewLine();
        $('.command-request-audience').typeTo('$ request audience');
    }, timer);

    wait(3000);
    setTimeout(function() {
        printNewLine();
        $('.print-audience').typeTo('...amd0kz');
    }, timer);

    wait(3000);
    setTimeout(function() {
        printNewLine();
        $('.command-request-date').typeTo('$ request date');
    }, timer);

    wait(3000);
    setTimeout(function() {
        printNewLine();
        $('.print-date').typeTo('...29 apr 2014');
    }, timer);

    wait(3000);
    setTimeout(function() {
        printNewLine();
        $('.command-request-speaker').typeTo('$ request speaker');
    }, timer);

    wait(3000);
    setTimeout(function() {
        printNewLine();
        $('.print-speaker').typeTo('...pjackowski');
    }, timer);

    wait(3000);
    setTimeout(function() {
        printNewLine();
        $('.command-request-coder').typeTo('$ request coder');
    }, timer);

    wait(3000);
    setTimeout(function() {
        printNewLine();
        $('.print-coder').typeTo('...pjackowski');
    }, timer);

    wait(3000);
    setTimeout(function() {
        printNewLine();
        $('.command-request-musician').typeTo('$ request musician');
    }, timer);

    wait(3000);
    setTimeout(function() {
        printNewLine();
        $('.print-error').typeTo('...error');
    }, timer);

    wait(3000);
    setTimeout(function() {
        printNewLine();
        $('.print-musician-not-found').typeTo('...musician not found');
    }, timer);

    wait(5000);
    setTimeout(function() {
        printNewLine();
        $('.command-display-invitation').typeTo('$ display invitation');
    }, timer);

    wait(3000);
    setTimeout(function() {
        printNewLine();
        $('.command-print-invitation').typeTo('...');
    }, timer);

    wait(3000);
    setTimeout(function() {

        $('.loader').fadeOut(500, function() {
            $('body').addClass('impress-background');
            $('.loader').addClass('ninja');
            $('.impress').removeClass('ninja');

            impress().init();
        });

    }, timer);

}