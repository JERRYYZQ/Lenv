$(function(){
	//明星商品轮播
	$(".nav2_box_r").click(function(){
		$(".nav2 ul ").animate({'marginLeft':"-180px"},500, function () { 
                    $(".nav2 ul li").eq(0).appendTo($(".nav2 ul"));  
                    $(".nav2 ul").css('marginLeft','0px');  
                });  
	})
		 $('.nav2_box_l').click(function () {  
                $(".nav2 ul").css('marginLeft','-180px');  
                $(".nav2 ul li").eq(10).prependTo($(".nav2 ul"));  
                $(".nav2 ul").animate({marginLeft:"0px"},500);  
            })  
//           楼层动画
		$(".building_right_zi img").hover(function(){
			$(this).animate({marginRight: '-50px'},500)
			},function(){
			$(this).animate({marginRight: '0'},500)
		})
		//底部语言选项
//		$(".yyan").hover(function(){
//			$("#yc").show();
//		})
//		$("#yc").mouseleave(function(){
//			$("#yc").hide();
//		})
		
		//图标hover
		$('.nav1 i').hover(function(){
			$(this).find('img:first').hide().next().show();
		},function(){
			$(this).find('img:first').show().next().hide();
		})
//		console.log($('.nav1 i'))
})
