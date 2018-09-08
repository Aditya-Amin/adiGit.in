$(document).ready(function(){

    $("#navbars").click(function(){
        $(".menu").toggleClass('toggle');
    });

    $("#slide-btn-2").click(function(){
        $(".slideshow").css('background','url(../images/slider-1.jpg)');
    });


    $("#slide-btn-3").click(function(){
        $(".slideshow").css('background','url(../images/slider-2.jpg)');
    });


    $("#slide-btn-1").click(function(){
        $(".slideshow").css('background','url(../images/slider-3.png)');
    });


});