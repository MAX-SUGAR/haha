//popup();
$(document).ready(function(){
	//二维码
	$("#weixin").mouseover(function(){
       $(".code").css({"display":"block","top":"5px","right":"10%"});
	  // $(".code").css("display","none");
    });
    $(".code").click(function(){
	   $(".code").css("display","none"); 
	});		

})
window.onload=function(){
    fuullPage();
    scrollSmall();
}//页面完全加载包括图片
$(window).resize(function(){
    scrollSmall();
});//窗口大小改变初始化小轮播
/*小轮播图片*/

/*弹出提示*/
function popup(){
var boarddiv = $("<div class='hehehe' style='background:gray;width:27%;height:28%;background:rgba(0,0,0,0.7);z-index:9999;position:fixed;top:0;margin:20% 33% 0 35%;padding:2% 3% 0 3%;font-size:16px;line-height:30px'><button type='button' style='position:absolute;bottom:5%; right:5%;'>知道了</button>尊敬的用户，您好！5月11日-5月15日期间，银河风云官方社区升级维护，所有关于社区的操作都将暂时关闭，给您带来不便，我们深感抱歉。资料下载、问题咨询请联系我们的客服QQ（4000009879），或拨打售后电话（400-000-9879）。感谢您的支持！</div>");

$(window).load(function(){ 	
	$(document.body).append(boarddiv);
        $("button").click(function(){
	   $(boarddiv).remove();   
      })
});
}

 function scrollSmall(){

     var img=$(".comprehensive-list-wrap li img");
     var heightVal=img.height();
     var widthVal=img.width();
     $(".comprehensive-scroll-info").css("top",heightVal);// 设置显示信息的位置
     var olWidth=$(".comprehensive-scroll ol").width();
     $(".comprehensive-scroll ol").css({"top":(heightVal-33),"left":(widthVal/2-olWidth/2)})//设置轮播小点的位置

     var timeScroll=null;
     var scrollImg=$(".comprehensive-scroll img");
     var tips=$(".comprehensive-scroll ol li");
     var text=$(".comprehensive-scroll-info p");
     tips.eq(0).css("background","black");
     scrollImg.eq(0).addClass("comprehensive-show");
     text.eq(0).addClass("comprehensive-show");
     var num=0;
     var  setTimeScroll=function(){
         timeScroll=setInterval(function(){
             scrollImg.stop().animate({
                 opacity:0
             });
             text.stop().animate({
                 opacity:0
             });
             tips.css("background","gray");
             tips.eq(num).css("background","white")//小轮播点的颜色
             scrollImg.eq(num).stop().animate({
                 opacity:1
             });
             text.eq(num).stop().animate({
                 opacity:1
             });

             num++;
             if(num==scrollImg.length){
                 num=0;
             }
         },3000);
     };
     setTimeScroll();
     tips.hover(function(){
         var index=$(".comprehensive-scroll ol li").index($(this));
         clearInterval(timeScroll);
         scrollImg.stop().animate({
             opacity:0
         });
         text.stop().animate({
             opacity:0
         });
         tips.css("background","gray");
         tips.eq(index).css("background","white")//小轮播鼠标未指上去的点的颜色
         scrollImg.eq(index).stop().animate({
             opacity:1
         });
         text.eq(index).stop().animate({
             opacity:1
         });
         num=index;
     },function(){
         setTimeout(function(){
             clearInterval(timeScroll);
             setTimeScroll();
         },100)
     });
 }

/*�����ͼ�ֲ�*/
function fuullPage(){
    var scrollRight=null;//��ʼ�����ҹ�������������ֻ��һ�Σ�
    var scrollRight2=null;//�ں����￪��ת�����ҹ�������
    var scrollLeft=null;//�������������
    scrollRight=setInterval(function(){
        $.fn.fullpage.moveSlideRight();
    }, 3000);
    $('#content').fullpage({
        scrollingSpeed:1000,
        resize:false,
        afterSlideLoad:function(anchorLink,index,slideIndex){
            if(slideIndex==2){
                clearInterval(scrollRight);
                clearInterval(scrollRight2);
                scrollLeft=setInterval(function(){
                    $.fn.fullpage.moveSlideLeft();
                }, 5000);
            }
            if(slideIndex==0){
                clearInterval(scrollLeft);
                scrollRight2=setInterval(function(){
                    $.fn.fullpage.moveSlideRight();
                }, 5000);
            }
        },		
        afterLoad:function(anchorLink,index){//全屏滚动时导航栏变化
              if(index==1){
		  $(".galaxywind-header-logo h2").css("color",""); 
	          $(".galaxywind-header-link li a").css("hover","#00deff");/*导航栏一级字体*/	  
              }else{                
		  $(".galaxywind-header-logo h2").css("color","#28AAE6");
		  $(".galaxywind-header-link li a").css("hover","#00deff");/*导航栏一级字体*/	
								  
              }
        }
    });
}
    
