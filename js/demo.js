/**
 * Created by 陈冬冬 on 2016/3/1.
 */
$(function(){
    var footerTop = $(window).height();
    ////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////
    //头部鼠标经过显示
    $(".head > ul > li").on("mouseenter", function () {
        var thisDiv = $(this).children("div");
        $(".head > ul > li > div").hide();
        $(thisDiv).show(200);
    }).on("mouseleave", function () {
        $(".head > ul > li > div").hide();
    })
    ////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////
    //右侧导航部分
    //二维码
    var clicked = true;
    $(".sao").on("mouseenter", function () {
        if (clicked != true) {
            saoOne();
            return;
        }
        $(".saoall").stop().fadeIn(200);
    })
    $(".sao").on("mouseleave", function () {
        if ($(".saoone").css("display") == "block") {
            $(".saoone").stop().fadeOut(200);
            return;
        }
        $(".saoall").stop().fadeOut(200);
    })
    $(".saoall ul li").on("click", function () {
        var thisIndex = $(this).index();
        $(this).addClass("current").siblings().removeClass("current");
        $(".saoall ol li").eq(thisIndex).addClass("current").siblings().removeClass("current");
    })
    function saoOne() {
        $(".saoone").stop().fadeIn(200);
    }
    $(".saoone > a").on("click",function(){
        $(".saoone").css("display","none");
        $(".saoall").stop().fadeIn(200);
    })
    $(".saoall").on("mouseleave",function(){
        clicked = false;
    })
    ////////////////////////////////////////////////////////////////////////////
    //返回顶部部分
    $(".top").on("click",function(){
        $("html,body").animate({
            scrollTop:0
        },300)
    })
    ////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////
    //页面滚动时执行
    window.onscroll = function () {
        //页面卷曲的顶部的距离
        var footScrollTop = document.body.scrollTop ||  document.documentElement.scrollTop || 0;
        //开始滚动，右侧返回顶部按钮显示
        if(footScrollTop>0){
            $(".gps .top").stop().fadeIn();
        }else{
            $(".gps .top").stop().fadeOut();
        }
    }

})