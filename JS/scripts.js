$(document).ready(function() {
    $('#icon1').on('click', function(){
        $('#icon1').hide(function(){
            $('#description1').show();
        });
    });
    $('#description1').on('click', function(){
        $('#icon1').show();
        $('#description1').hide();
    });
    $('#icon2').on('click', function(){
        $('#icon2').hide(function(){
            $('#description2').show();
        });
    });
    $('#description2').on('click', function(){
        $('#icon2').show();
        $('#description2').hide();
    });
    $('#icon3').on('click', function(){
        $('#icon3').hide(function(){
            $('#description3').show();
        });
    });
    $('#description3').on('click', function(){
        $('#icon3').show();
        $('#description3').hide();
    });
});
   
