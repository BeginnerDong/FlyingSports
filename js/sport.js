/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2019-07-22 20:07:25
 * @version $Id$
 */

 $(function(){
 // 首页效果
	$(".indNavbar .list li").click(function(){
		$(this).addClass("on").siblings().removeClass("on")
	})

	$("#banner").slide({ titCell: ".hd ul", mainCell: ".bd ul", autoPlay: true, autoPage: true, trigger: "mouseover" });
 

    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 5,
      spaceBetween: 30,
	  centeredSlides: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
}); 

