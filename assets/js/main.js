$(function(){
    VANTA.NET({
        el: "body",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        scale: 1.00,
        scaleMobile: 1.00
      });
    $('.header-item').hover(function (event){
        console.log(event.target);
    })
});