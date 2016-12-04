 $('.flpbtn').click(function(){
 
        console.log();
 
        $(this).parent().parent().parent().parent().find('.card').toggleClass('flipped');

    });