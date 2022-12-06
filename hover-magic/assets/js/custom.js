$(document).ready(function(){
    
    $("#hover-content").hide();

    $("#hover-area").hover(function(){
        $("#hover-content").fadeIn();
    },function(){
        $("#hover-content").fadeOut();
    });
});