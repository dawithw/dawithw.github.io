$(document).ready(function() {

    /* toggle mobile menu */
    function toggleMenu(){
        $(".page-links").toggleClass("slide-toggle");
        $(".hamburger-icon").toggleClass("toggled");
        if(document.documentElement.clientWidth < 750) {
            $(".slide-toggle").slideToggle(200);
        }
    }

    function toggleDetails(event) {
        $(event.currentTarget).css({
                    'transform' : 'rotate(180deg)',
                    'WebkitTransform' : 'rotate(180deg)',
                    '-moz-transform' : 'rotate(180deg'});
        var arrowId = $(event.currentTarget).attr('id');
        // id has format "detail-arrow-{num}"
        var arrowNumber = arrowId.split('-')[2];
        $("#detail-" + arrowNumber).toggleClass("hide");
    }

    function highlight() {
        $($(this).children()[0]).toggleClass("highlight");
    };

    $(".hamburger-icon").click(toggleMenu);
    $(".nav-list li").click(toggleMenu);

    $(".arrow").click(toggleDetails);
    $(".social-media svg").hover(highlight);
});

