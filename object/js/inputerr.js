// JavaScript Document
//输入框容错提示信息  Created by yanming   2015/11/2
;(function($){
	$.fn.inptext=function(option){
	var opt =$.extend({
	Text:"请设置提示为文字", //设置提示文字
	defaultColor:"#ff7600",//设置文字默认颜色
	SetColor:"#000",//设置输入颜色
    icosee:true,//小图标是否显示
	ico:"url(./image/icoerr.png) no-repeat #fff center left",//设置小图标
	ie6ico:"url(./image/icoerr.gif) no-repeat #fff center left",//设置ie6显示小图标
	position:"3px 11px"//设置小图标位置
	},option);
	$(this).attr("value",opt.Text);
	$(this).css({
		"color":opt.defaultColor
		});
		if(opt.icosee==true){
			$(this).css({
		"background":opt.ico,
		"_background":opt.ico,
		"background-position":opt.position
		});
		}
    $(this).focus(function(){
	   if($(this).attr("value")==opt.Text)
	 {
		$(this).attr("value","");
		$(this).css({
		"color":opt.SetColor
		});
		if(opt.icosee==true){
		$(this).css({
		"background":"",
		"_background":"",
		"background-position":""
		});	
		}
	  }
	})	
    $(this).blur(function(){
	if($(this).attr("value")==null || $(this).attr("value")=='')
	{
		$(this).attr("value",opt.Text);
		$(this).css({
		"color":opt.defaultColor
		});
		if(opt.icosee==true){
		$(this).css({
		"background":opt.ico,
		"_background":opt.ico,
		"background-position":opt.position
		});
		}
	}
	})	

   };
})(jQuery)		
	