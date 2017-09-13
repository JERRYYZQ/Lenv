$(function(){
	//轮播图定时器
	var num=0;
	var timer;
	function time(){
		 timer=setInterval(function(){
		 	num++;
			$('.ban_1').find('li').eq(num).fadeIn(1000).siblings().fadeOut(1000);
			$('.ban_2').find('li').eq(num).css('background','#fff').siblings().css('background','#383838');
			if(num==7){
				num=-1;
			}
		},2000)
	}
	time();
	//轮播左按钮
	$('.pre').click(function(){
		clearInterval(timer);
		if(num==0){
			num=8;
		}
		num--;
		$('.ban_1').find('li').eq(num).fadeIn(1000).siblings().fadeOut(1000);
	})
	//轮播右按钮
	$('.nxt').click(function(){
		clearInterval(timer);
		if(num==7){
			num=-1;
		}
		num++;
		$('.ban_1').find('li').eq(num).fadeIn(1000).siblings().fadeOut(1000);
	})
	//按钮出现
	$('.ban').hover(function(){
		$('.ban>li').show();
	},function(){
		$('.ban>li').hide();
	})
	//小圆点轮播
	$('.ban_2').on('click','li',function(){
		clearInterval(timer);
		var ind=$(this).index();
		$('.ban_1').find('li').eq(ind).fadeIn(1000).siblings().fadeOut(1000);
		$('.ban_2').find('li').eq(ind).css('background','#fff').siblings().css('background','#383838');
		console.log()
	})
    //文本框文字消失
    $('.nav_3>input').focus(function(){
    	$('.nav_3a').hide();
    }).blur(function(){
    	$('.nav_3a').show();
    })
    //滑动固定
    $(window).scroll(function() {
//       console.log()
         var num=$('.top').outerHeight(true);
         if($(this).scrollTop()>=num){
         	$('.nav').addClass('nav_fixed');
         }
         else{
         	$('.nav').removeClass('nav_fixed');
         }
    });
   //顶部图片背景
   setTimeout(function(){
   	$('.top_1').css('height',100+'px')
   	.css('backgroundImage', 'url(img/pc1.jpg)')
   },1000)
})
