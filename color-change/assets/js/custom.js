$(document).ready(function(){
    
    $('#red').click(function (e) { 
        e.preventDefault();
        $('.page-content ul li').css('background-color', '#f44336');
    });

    $('#blue').click(function (e) { 
        e.preventDefault();
        $('.page-content ul li').css('background-color', '#3f51b5');
    });

    $('#green').click(function (e) { 
        e.preventDefault();
        $('.page-content ul li').css('background-color', '#4caf50');
    });

    $('#purple').click(function (e) { 
        e.preventDefault();
        $('.page-content ul li').css('background-color', '#673ab7');
    });
});