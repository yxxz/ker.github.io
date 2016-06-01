/**
 * Created by Administrator on 2016/2/29.
 */
///设置图片的自动播放
var timer2 = null;
var pic2 = 0;
var li = 0
$(function () {
    slide()
    $(".arrowleft").on("click", function () {
        clearInterval(timer2);
        if (pic2 == 6) {
            $(".sliderimg_show")[0].style.left = 0;
            pic2 = 0;
        }
        pic2++;
        var target = -pic2 * ($(".sliderimg_li")[0].offsetWidth / 2) + "px";
        $(".sliderimg_show").stop().animate({"left": target}, 1000);
    })
    $(".arrowright").on("click", function () {
        if (pic2 == 0) {
            pic2 = 6;
            $(".sliderimg_show")[0].style.left = -pic2 * ($(".sliderimg_li")[0].offsetWidth) / 2 + "px";
        }
        pic2--;
        var target = -pic2 * ($(".sliderimg_li")[0].offsetWidth / 2) + "px";
        $(".sliderimg_show").stop().animate({"left": target}, 1000);
    })

    $(".sliderimg_show").on("mouseenter", function () {
        clearInterval(timer2);
    })
    $(".sliderimg_show").on("mouseleave", function () {
        slide();

    })
})

function slide() {
    timer2 = setInterval(function () {
        if (pic2 == 6) {
            $(".sliderimg_show")[0].style.left = 0;
            pic2 = 0;
        }
        if (li == 6) {
            li = -1;
        }
        pic2++;
        li++;
        $(".slider_cicle").find("li").eq(li).addClass("color").siblings("li").removeClass("color");
        var target = -pic2 * ($(".sliderimg_li")[0].offsetWidth / 2) + "px";
        $(".sliderimg_show").animate({"left": target}, 1000);
    }, 3000)
}


//底部图片切换
$(function () {
    /*    $(".foot_menu").find("a").on("click", function () {
     $(this).addClass("current").siblings("a").removeClass("current");
     $("#serve").on("click", function () {
     $(".serve_price").siblings().hide();
     $(".serve_price").show();
     })
     $("#prac").on("click", function () {
     $(".contact").siblings().hide();
     $(".contact").show();
     })
     $("#menu_map").on("click", function () {
     $(".map").siblings().hide();
     $(".map").show();
     })
     })*/

    $(".foot_menu a").on("click", function () {
        var thisIndex = $(this).index() + 1;
        //alert(thisIndex);
        $(this).addClass("current").siblings().removeClass("current");
        $(".table_list div").eq(thisIndex).show().siblings().hide();
        $("#serve").on("click", function () {
            $(".serve_price").show();
        })
    })
})


//根据索引及坐标匹配图片
$(function () {
    $(".severs_content").find("i").each(function (index) {
        // alert(index);
        $(this).css({
            //"background-image":"url(../images/severs" + (index + 1) + ".png)",
            "background-position": "0 -" + (10 + 110 * index) + "px",
            "background-repeat": "no-repeat"
        })
    })
})


//public start
$(function () {
    // 1. 给tab栏菜单 绑定鼠标点击事件
    $(".tab-item").click(function () {
        // 给当前这个元素添加类，给兄弟元素移除这个类
        $(this).addClass("active").siblings().removeClass("active");
        // 让菜单对应的内容展示出来，让内容的兄弟隐藏
        var index = $(this).index();
        //console.log(index);
        $(".tab-ctr > div")
            .eq(index)
            .addClass("selected")
            .siblings("div")
            .removeClass("selected");
    });
    $(".public_img").on("mouseenter", function () {
        $(".k-space").show();
    })
    $(".public_img").on("mouseleave", function () {
        $(".k-space").hide();
    })


});

