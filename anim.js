$('document').ready(function(){
    alert('En poussant les images par la gauche vous pourrez les déplacer');
    $("img").mouseover(function(){

    $(this).css('transform','rotate(10deg)');
    $(this).css('marginLeft','+=20%');
    });

    
});