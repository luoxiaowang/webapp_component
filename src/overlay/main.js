$(function(){
    $("#showBtn").on("click",function(){
        var overlay = new Overlay({
            background:'rgba(0,0,0,.9)'
        });
        overlay.show();
        setTimeout(function(){
            overlay.hide();
        },3000);
    })
});