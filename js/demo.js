/**
 * Created by �¶��� on 2016/3/1.
 */
$(function(){
    var footerTop = $(window).height();
    ////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////
    //ͷ����꾭����ʾ
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
    //�Ҳർ������
    //��ά��
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
    //���ض�������
    $(".top").on("click",function(){
        $("html,body").animate({
            scrollTop:0
        },300)
    })
    ////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////
    //ҳ�����ʱִ��
    window.onscroll = function () {
        //ҳ������Ķ����ľ���
        var footScrollTop = document.body.scrollTop ||  document.documentElement.scrollTop || 0;
        //��ʼ�������Ҳ෵�ض�����ť��ʾ
        if(footScrollTop>0){
            $(".gps .top").stop().fadeIn();
        }else{
            $(".gps .top").stop().fadeOut();
        }
    }

})