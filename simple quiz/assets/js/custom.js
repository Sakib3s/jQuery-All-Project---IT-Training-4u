$(document).ready(function(){
    $("#result-content").hide();

    $("#question-area #1").click(function(){
        $("#result-content").fadeIn();
        $("#result-content img").attr('src', 'assets/img/checked.png');
        $("#result-content p").text('Great! Your answer is correct!');
    });

    $("#question-area #2").click(function(){
        $("#result-content").fadeIn();
        $("#result-content img").attr('src', 'assets/img/delete-button.png');
        $("#result-content p").text('Opps! Your answer is incorrect!');
    });
});