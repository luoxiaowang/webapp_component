$(function(){
    $("#showBtn").on("click",function(){
        var toast = new Toast("登陆成功",{},1000);
        toast.show();
    })
});