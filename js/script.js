$(document).ready(function() {

    /* toggle mobile menu */
    function toggleMenu(){
        $(".page-links").slideToggle(200);
        $(".hamburger-icon").toggleClass("toggled");
        console.log("clicked");
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

    $(".hamburger-icon").click(toggleMenu);
    $(".nav-list li").click(toggleMenu);

    $(".arrow").click(toggleDetails);
    
});

