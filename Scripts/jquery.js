$(document).ready(function(){
    $('.btn').click(function () {
        $('html, body').animate({scrollTop: $('.projects').offset().top}, 1000);
    });
    
    $('#Projects').click(function () {
        $('html, body').animate({scrollTop: $('.projects').offset().top}, 1000);
    });
    $('#Contact').click(function () {
        $('html, body').animate({scrollTop: $('.footer-social').offset().top}, 1000);
    });
    
    $('.ion-android-mail').click(function () {
        $('html, body').animate({scrollTop: $('.mmm').offset().top}, 1000);
    });
    
    $('#top').click(function () {
        $('html, body').animate({scrollTop: $('.top').offset().top}, 1000);
    });
    
    $('.explore-me').waypoint(function(direction){
        if (direction == "down"){
           $('nav').addClass('sticky');
           }else{
               $('nav').removeClass('sticky');
           }
    }, {
        offset: '60px'
    });
    
});