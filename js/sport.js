/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2019-07-22 20:07:25
 * @version $Id$
 */

 $(function(){

	// 列表左侧导航
	$(".main-leftNav .selnav a").click(function(){
		$(this).addClass("on").siblings().removeClass("on")
	})


}); 

