

/*nav fold*/
$("#fold").on("click",function(){
    if($("#fold ul").is(":hidden")){//判断是否隐藏，若隐藏就显示
        $("#fold ul").show("1500");
    }else{
        $("#fold ul").hide("1500");//否则就隐藏
    }
})


/*company profile*/
function change(i){

   $("#company_info .information").eq(i).on("tap",function(){

     $("#company_info ul").eq(i).is(":hidden") ? $("#company_info ul").eq(i).show("1500") && $("#company_info h3").eq(i).html("×"): $("#company_info ul").eq(i).hide("1500") && $("#company_info h3").eq(i).html("+");

   })
}

var list=$("#company_info ul")
for(var i=0;i<list.length;i++){
    change(i);
}


/*wechat*/
$("#popup").on("tap",function(){
   alert("请关注银河风云官方微信号galaxy-wind");
})



