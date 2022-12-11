$(document).ready(function(){
    $('.card-content').hide();

    $('#card-header2').click(function() {
        $('#card-content2').slideToggle();
        
        $("#report").load("test.php");
    });
});