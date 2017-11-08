// Your own scripts

(function($, document, window, viewport){

    var foundation = {
        'small':  $('<div class="device-xs show-for-small-only"></div>')[0],
        'medium': $('<div class="device-sm show-for-medium-only"></div>')[0],
        'large':  $('<div class="device-md show-for-large-only"></div>')[0],
        'xlarge': $('<div class="device-lg show-for-xlarge-only"></div>')[0]
    };

    viewport.use('foundation', foundation);

    if( viewport.is('small') ) {
        console.log('Matching: small');
    }

    if( viewport.is('>=medium') ) {
        console.log('Matching: >=medium');
    }



    // Executes once whole document has been loaded
    $(document).ready(function() {
        console.log('Current breakpoint:', viewport.current());
    });

    $(window).resize(
        viewport.changed(function(){
            console.log('Current breakpoint:', viewport.current());
        })
    );

})(jQuery, document, window, ResponsiveBootstrapToolkit);
