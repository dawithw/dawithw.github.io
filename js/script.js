$(document).ready(function() {

    /* toggle mobile menu */
    function toggleMenu(){
        if(document.documentElement.clientWidth < 768) {
            $(".page-links").slideToggle(200);
        }
    }

    /* toggle menu on click of any menu item */
    $(".hamburger-icon").click(toggleMenu);
    $(".nav-list li").click(toggleMenu);


    /* animated scroll */
    function animatedScroll(event) {
        event.preventDefault();
        $("html, body").animate({ 
            scrollTop: $($(this).attr('href') ).offset().top - 60
        }, 750);
    }

    /* animated scroll on click for page navigation links*/
    $(".nav-list a").click(animatedScroll);
    $(".main-logo").click(animatedScroll);


    /* toggle highlight css for children text */
    function fill(svgClass, color) {
        svgClass = "." + svgClass;
        $(svgClass + " g").css({"stroke" : color});
        $(svgClass + " path").css({"fill" : color});
    };

    /* fill svg child to white */
    function highlight() {
        let elemClass = $(this).attr("class");
        fill(elemClass, "#fff");
    }

    /* fill svg child to original color */
    function restore() {
        // should be same as ".social-media path" fill defined in the style.css file
        let originalColor =  "#bbb";        
        let elemClass = $(this).attr("class");
        fill(elemClass, originalColor);
    }

    /* highlight social media links on hover or touch */
    $(".linkedin, .github, .email").on({
        "mouseenter" : highlight,
        "mouseleave" : restore,
        "touchstart" : highlight,
        "touchend" : restore
    });

    /* filling and unfilling toggled buttons */

    function fillButton() {
        $(this).addClass('button-fill');
    }

    function unfillButton() {
        $(this).removeClass('button-fill');
    }

    $(".button, #projects article a").on({
        "mouseenter": fillButton,
        "mouseleave": unfillButton,
        "touchstart" : fillButton, 
        "touchend" : unfillButton}
    );

    /* --- end button fill ---- */

});

