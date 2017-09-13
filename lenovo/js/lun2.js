$(function(){
	$('.banner_1').on('click','.span_l',function(){
		clearInterval(timer1)
	$(".innerbanner_1").animate({'marginLeft':'-1580px'},800,function(){
    	$(".banner_1 .innerbanner_1 div").eq(0).appendTo($(".banner_1 .innerbanner_1"));
    	$(".banner_1 .innerbanner_1").css('marginLeft',0)
  })
	})
	
	$('.banner_1').on('click','.span_r',function(){
	$(".innerbanner_1").css('marginLeft','-1580px');
    	$(".banner_1 .innerbanner_1 div").eq(3).prependTo($(".banner_1 .innerbanner_1"));
    	$(".banner_1 .innerbanner_1").animate({'marginLeft':"0px"},800)
  
	})
	$('.banner_1').hover(function(){
		$(".span_l").show();
		$(".span_r").show();
	}).mouseleave(function(){
		$(".span_l").hide();
		$(".span_r").hide();
	})
	
	$('.innerbanner_1 div').each(function(index,elemt){
	$(this).attr('value',index)
}) 
	var timer1=setInterval(function(){
		 $(".innerbanner_1").animate({'marginLeft':'-1580px'},1000,function(){
    	$(this).find('div:first').appendTo('.innerbanner_1');
    	$(this).css('marginLeft',0)
    	})
	},3000)
})