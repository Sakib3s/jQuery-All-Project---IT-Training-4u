$(document).ready(function(){

    $('#dislike-btn').hide();
    
    $('#like-btn').click(function() {
        $('#like-btn').hide();
        $('#dislike-btn').show();
        $('.single-card h2 span').text('✓');
        $('.single-card h2 span').css('color', 'green');
        $('body').css('background-image', 'url(img/done.gif)');
    });

    $('#dislike-btn').click(function() {
        $('#like-btn').show();
        $('#dislike-btn').hide();
        $('.single-card h2 span').text('');
        $('body').css('background-image', '');
    });
});