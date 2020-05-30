$(document).ready(function() {
    $(".menu > .icon").click(function(event){
        $(".menu ul").toggleClass("hide-mobile");
        console.log($(".menu ul"));
    });
});