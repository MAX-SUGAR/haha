$(document).ready(function(){
    navbarShow();
    produceShow();
})
function navbarShow(){//导航栏鼠标移入
    $("#headerNav").mouseover(function(){
        //$("#headerNav").css({"background":"url('../img/index/bg/nav_four.png')","z-index":1000})
          $("#headerNav").css({"background":"#FFFFFF","z-index":1000})
    });	
    $("#headerNav").mouseout(function(){
          $("#headerNav").css({"background":"rgba(242,242,242,0.7)","z-index":1000})
    });	
}
/*导航栏背景随页面滚动的变化
$(document).scroll(function(){
   //if()
   $(document).scrollTop()> 400 ? 
   $("#headerNav").css("background","url(../img/index/bg/nav_three.png)") &&  $("#headerNav").mouseover(function(){
	     $("#headerNav").css("background","url(../img/index/bg/nav_four.png)")    
	 })
   : 
   $("#headerNav").css("background","url(../img/index/bg/nav_one.png)")  &&   $("#headerNav").mouseover(function(){
	     $("#headerNav").css("background","url(../img/index/bg/nav_two.png)")    
	 })
});*/

/*??????????*/
function produceShow(){
    var time=null;
    var list=$(".galaxywind-header-link");
    var box=$("#galaxywind-header-box")
    var listLi=$('.galaxywind-header-link li[class!="galaxywind-header-link-not"]');

    for(var i=0;i<listLi.length;i++){
        if(listLi[i].className=="now"){
            var oldLi=i;
        }
    }

    var box_show=function(hei){
        box.stop().animate({
            height:hei,
            opacity:1
        },400);
    };

    var box_hide=function(){
        box.stop().animate({
            height:0,
            opacity:0
        },400);
    };

    listLi.hover(function(){
        listLi.removeClass("now");
        $(this).addClass("now");
        clearInterval(time);
        var index=list.find('li[class!="galaxywind-header-link-not"]').index($(this));
        box.find(".galaxywind-header-sub").hide().eq(index).show();
        var boxHeight=box.find(".galaxywind-header-sub").eq(index).height();
        box_show(boxHeight);
    },function(){
        time=setTimeout(function(){
            box.find(".galaxywind-header-sub").hide();
            box_hide();
        },40);
        listLi.removeClass("now");
        listLi.eq(oldLi).addClass("now");
    });

    box.find(".galaxywind-header-sub").hover(function(){
        var index2=box.find(".galaxywind-header-sub").index($(this));
        listLi.removeClass("now");
        listLi.eq(index2).addClass("now");
        clearInterval(time);
        $(this).show();
        var height2=$(this).height();
        box_show(height2);
    },function(){
        time=setTimeout(function(){
            $(this).hide();
            box_hide();
        },40);
        listLi.remove("now");
        listLi.eq(oldLi).addClass("now")
    });
    /*?????????????????????????????????*/
    $(".galaxywind-header-product").hover(function(){
        $(".galaxywind-header-product").addClass("galaxywind-header-product-show");
        $(this).removeClass("galaxywind-header-product-show")
    },function(){
        $(".galaxywind-header-product").removeClass("galaxywind-header-product-show");
    })
}
