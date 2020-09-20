$(document).ready(function(){
    function navbartranslate() {
        $(window).scroll(function(e){
            var scrollvalue = $(window).scrollTop();
            if (scrollvalue) {
                $('.navbar-expand-lg').removeClass('blue');
            }
            else {
                $('.navbar-expand-lg').addClass('blue');
            };
        });
        
    };
    navbartranslate();
});