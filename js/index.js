/// <reference types="../@types/jquery" />

$(".open-link").on("click",()=>{
    $(".open-link").css("left","270px");
    $(".open-menu").css("left","0");
})
$(".close").on("click",()=>{
    $(".open-link").css("left","20px");
    $(".open-menu").css("left","-250px");
})

$(".singer-section h3").on("click",({target})=>{
    $(target).next().slideToggle();
    $(".singer-section p").not($(target).next()).slideUp();

})

$("textarea").on("keyup",({target})=>{
    let length = $(target).val().length;$
    $("#num").html(
     (100 - length) <= 0 ? "your available character finished " : (100 - length)
    )
})

function countdown(){
    let countDownDate = new Date("2024-10-25").getTime();
    setInterval(()=> {
        let now = new Date().getTime();     
        let distance = countDownDate - now;
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        $("#hours").html(`${hours} h`);
        $("#minutes").html(`${minutes} m`);
        $("#seconds").html(`${seconds} s`); 
    }, 1000);
    }
    countdown();