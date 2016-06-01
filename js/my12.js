/**
 * Created by Administrator on 2016/2/29.
 */

//li的宽度用js写进去，还有添加后一张图片
//$(function () {
//    $(".scrollImg li").each(function () {
//        $(this).css("width",document.body.offsetWidth+"px")
//    })
//    var $li = $(".scrollImg li").eq(0).clone(false,true);
//    $(".scrollImg ul").append($li);
//
//})

//screen部分
//设置箭头的显示和隐藏
$(document).ready(function () {

    $(".screen").on("mouseenter", function () {
        clearInterval(timer);
        $(".arr").show();
    });

    $(".screen").on("mouseleave", function () {
        $(".arr").hide();
        scrollImg();
    });
})

//设置图片的自动播放
var timer=null;
var pic=0;
$(function () {
    //scrollImg();
    $(".arrleft").on("click", function () {
        if (pic == 2) {
            $(".screen_ul")[0].style.left = 0;
            pic = 0;
        }
        pic++;
        var target = -pic * $(".screen")[0].offsetWidth+"px";
        //alert( $(".screen")[0].offsetWidth)
        $(".screen_ul").stop().animate({"left": target}, 1000);
    })
    $(".arrright").on("click", function () {
        if (pic == 0) {
            pic = 2;
            $(".screen_ul")[0].style.left = -pic * $(".screen")[0].offsetWidth + "px";
        }
        pic--;
        var target = -pic * $(".screen")[0].offsetWidth + "px";
        $(".screen_ul").stop().animate({"left": target}, 1000);
    })
})

//scrollImg();
function scrollImg() {
    timer = setInterval(function () {
        if (pic==2) {
            $(".screen_ul")[0].style.left = 0;
            //alert(pic);
            pic = 0;
        }
        pic++;
        var target = -pic *$(".screen")[0].offsetWidth+"px";
        $(".screen_ul").animate({"left": target}, 1000);
    }, 3000)
}





//第二个轮播图
$(function () {

    $(".allscroll").on("mouseenter", function () {
   // alert(1);
    $(".scrollarrow").show();
    $(".scrollarrow_L").animate({
        "left":"0px",
        "opacity":1
    })
    $(".scrollarrow_R").animate({
        "right":"0px",
        "opacity":1
    })
})
    $(".allscroll").on("mouseleave", function () {
        $(".scrollarrow_L").animate({
            "left":"-40px",
            "opacity":0
        })
        $(".scrollarrow_R").animate({
            "right":"-40px",
            "opacity":0
        })
    })
})
var timer1=null;
var pic1=0;
//设置图片自动播放
$(function () {
    scroll();
    $(".scrollarrow_L").on("click", function () {
        //clearInterval(timer1);
        if (pic1 == 6) {
            $(".scroll_ul")[0].style.left = 0;
            pic1=0;
        }
        pic1++;
        var target =-pic1*$(".scrollImg")[0].offsetWidth+"px";
       // alert($(".scrollImg")[0].offsetWidth)
        $(".scroll_ul").stop().animate({"left": target}, 1000);
    });

    $(".scrollarrow_R").on("click", function () {
        if(pic1==0){
            pic1=6;
            $(".scroll_ul")[0].style.left=-pic1*$(".scrollImg")[0].offsetWidth+"px";
        }
        pic1--;
        var target=-pic1*$(".scrollImg")[0].offsetWidth+"px";
        $(".scroll_ul").stop().animate({"left":target},1000);
    });

    $(".allscroll").on("mouseenter", function () {
        clearInterval(timer1);
    });
    $(".allscroll").on("mouseleave", function () {
        scroll();
    });

})



//设置图片自动播放
function scroll(){
    timer1=setInterval(function () {
        if(pic1==6){
            $(".scroll_ul")[0].style.left=0;
            //alert( $(".scroll_ul").css("left"));
            pic1=0;
        }
        pic1++;
        var target=-pic1*$(".scrollImg")[0].offsetWidth+"px";
        //alert($(".scrollImg li")[0].offsetWidth);
        $(".scroll_ul").animate({"left":target},1000);
    },3000)
}






