$(function(){
    $("#start").click(function(){
        $(".lamp").removeClass("die");
        $(".font").removeClass("dieFont");
    });
    $("#end").click(function(){
        $(".lamp").addClass("die");
        $(".font").addClass("dieFont");
    });
});