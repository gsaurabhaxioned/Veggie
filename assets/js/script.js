$(document).ready(function(){
    $(".ham").click(function(){
        $(".menus").slideToggle(2000);
        $(this).removeClass("ham");
        $(this).addClass("cross");
    });
    $(".cross").click(function(){
        $(this).addClass("ham");
        $(this).removeClass("cross");
       
    })
});






















