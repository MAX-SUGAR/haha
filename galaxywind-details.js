	$("#weixin").mouseover(function(){
       $(".code").css({"display":"block","top":"5px","right":"9%"});
	  // $(".code").css("display","none");
    });
    $(".code").click(function(){
	   $(".code").css("display","none"); 
	});


	$("#top_btn").click(function(){	
	   $("html,body").animate({scrollTop: 0}, 600);	
	});
		
    /*侧边栏*/
	$("#rightside li").eq(0).mouseover(function(){
	    $('#side_code').css({"display":"block","right":'50px'});
	});
	$("#rightside li").eq(0).mouseout(function(){
	    $('#side_code').css("display","none");
	});
		/*回到顶部图标*/
		$(window).scroll(function(){
		if($(window).scrollTop()>600){
		    $("#top_btn").css("display","block"); 
			//$("#top_btn").animate({"display":"block"}); 
			}else{
			$("#top_btn").css("display","none");
            //$("#top_btn").animate({"display":"none"});			
			}
		})



    $('#dowebok').fullpage(
        {
            anchors:["page1"],
            resize:false,
            scrollingSpeed:1000
        }
    );
