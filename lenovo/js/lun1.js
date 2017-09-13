$(function(){
	
////		 $(".banner .innerbanner").css('marginLeft','-1440px'); 
////		 $(".banner .innerbanner div").eq(0).appendTo($(".banner .innerbanner"));
////       $(".banner .innerbanner").css('marginLeft','0px');  
// 	  $('.innerbanner div').each(function(index,elemt){
//	      $(this).attr('value',index/5)
//    }) 
//    var timer;
//    var w=$(".innerbanner").find('div').eq(0).outerWidth(true);
//    function lunbo(){  
//    	timer = setInterval(function(){
//	        $(".innerbanner").animate({'marginLeft':-w+'px'},800,function(){
//	    	$(this).find('div:first').appendTo('.innerbanner');
//	    	$(this).css('marginLeft',0)
//  	    })
//	    },2000)
//	}
//
//		lunbo();
//	


var w=$(".innerbanner").find('div').eq(0).outerWidth(true);
var n=1;
function timer(){
					time=setInterval(function(){
                            if(n>4){
								n=0
							};
						$('.innerbanner').animate({'marginLeft':-w*n+'px'},1000,function(){
							n++;
						})
				    },2000)
				}
				timer();
	$('.oul li').hover(function(){
		clearInterval(time)
		var num=$(this).index();
		$(this).css('height','60px');
		$(".innerbanner").animate({'marginLeft':-w*num+'px'},1000,function(){
			n=num+1;
		})
	},function(){
		$(this).css('height','52px');
		timer();
	})
})