$(document).ready(function() {

    
    /* toggle mobile menu */
    function toggleMenu(){
        if(document.documentElement.clientWidth < 750) {
            $(".page-links").slideToggle(200);
        }
    }

    /* toggle menu on click of any menu item */
    $(".hamburger-icon").click(toggleMenu);
    $(".nav-list li").click(toggleMenu);

    /* toggle highlight css for children text */
    function highlight() {
        $($(this).children()[0]).toggleClass("highlight");
    };

    /* highlight social media links on hover */
    $(".social-media svg").hover(highlight);

    /* animated scroll */
    function animatedScroll(event) {
        event.preventDefault();
        $("html, body").animate({ 
            scrollTop: $($(this).attr('href') ).offset().top - 73
        }, 750);
    }

    $(".nav-list a").click(animatedScroll);
    $(".main-logo").click(animatedScroll);

});

