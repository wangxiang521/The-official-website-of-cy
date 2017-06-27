/**
 * Created by Administrator on 2017/3/27.
 */
/*轮播*/
$(function(){
    //代码初始化
    var size = $(".img li").size();
    for(var i = 1;i<=size;i++){
        var li = "<li>"+i+"</li>";
        $(".num").append(li);
    }

    $(".img li").eq(0).show();
    $(".num li").eq(0).addClass();
    $(".num li").mouseover(function(){
        $(this).addClass("active").siblings().removeClass("active");
        var index = $(this).index();
        i = index;
        $(".img li").eq(index).stop().fadeIn(300).siblings().stop().fadeOut(300);
    });

    var i = 0;
    var t = setInterval(move,1500);
    function move(){
        i++;
        if(i == size){
            i = 0;
        }
        $(".num li").eq(i).addClass("active").siblings().removeClass("active");
        $(".img li").eq(i).fadeIn(300).siblings().fadeOut(300);
    }
    function moveL(){
        i--;
        if(i == -1){
            i = size-1;
        }
        $(".num li").eq(i).addClass("active").siblings().removeClass("active");
        $(".img li").eq(i).fadeIn(300).siblings().fadeOut(300);
    }

    $(".out .left").click(function(){
        moveL();
    });
    $(".out .right").click(function(){
        move();
    });
    $(".out").hover(function(){
        clearInterval(t);
    },function(){
        t = setInterval(move,1500);
    });
})
/*zhengfshi*/
function animate(){

}
$('.content-1').on('mouseenter',function(){

    $(this).removeClass('active1')
    $(this).addClass('active')
})
$('.content-1').on('mouseleave',function(){

    $(this).removeClass('active')
    $(this).addClass('active1')
})
$('.content-3').on('mouseenter',function(){

    $(this).removeClass('active1')
    $(this).addClass('active')
})
$('.content-3').on('mouseleave',function(){

    $(this).removeClass('active')
    $(this).addClass('active1')
})
$('.content-2>div').on('mouseenter',function(){

    $(this).removeClass('active1')
    $(this).addClass('active')
})
$('.content-2>div').on('mouseleave',function(){
    $(this).removeClass('active')
    $(this).addClass('active1')
})
$('.content-list>div').on('mouseenter',function(){
    $(this).removeClass('active1')
    $(this).addClass('active')
    $(this).parent().find('.steller-content span').css('color','#f3773d')
})
$('.content-list>div').on('mouseleave',function(){
    $(this).removeClass('active')
    $(this).addClass('active1')
    $(this).parent().find('.steller-content span').css('color','#bbb')
})
$('.lxfs li').on('mouseenter',function(){
    $(this).find('.ewm').css('display','block')
})
$('.lxfs li').on('mouseleave',function(){
    $(this).find('.ewm').css('display','none')
})
