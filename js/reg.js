/**
 * Created by Administrator on 2017-3-31.
 */
// 用户名
var uname=$('#uname');
var uicon=$('.name-icon');
uname.focus(function () {
    uicon.addClass('wait');
    console.log('wait')
});

uname.blur(function(){
    var reg=/[a-zA-Z0-9]{6,12}$/;
    if(!reg.test(uname.val())){
        uicon.removeClass('wait');
        uicon.addClass('wrong');
        console.log('false');
    }else{
        uicon.removeClass('wait');
        uicon.addClass('rright');
    }
});

// 密码
var psd=$('#psd');
var picon=$('.psd-icon');
psd.focus(function(){
    picon.addClass('wait');
});
psd.blur(function(){
    var reg=/^[a-zA-Z0-9]{6,12}$/;
    if(!reg.test(psd.val())){
        picon.removeClass('wait');
        picon.addClass('wrong');

    }else{
        picon.removeClass('wait');
        picon.addClass('rright');
    }
})

//确认密码

var rpsd=$('#rpsd');
var rpicon=$('.rpsd-icon');
rpsd.focus(function(){
    rpicon.addClass('wait');

})
rpsd.blur(function(){
    // var reg=/^[a-zA-Z0-9]{6,12}$/;
     var psd=$('#psd').val();
     console.log(psd);
    var psd1=rpsd.val()
    console.log('psd1是'+psd1)
   if(psd1==psd ){
       rpicon.removeClass('wait');
       rpicon.addClass('rright');
   }else{
       rpicon.removeClass('wait');
       rpicon.addClass('wrong');
       rpicon.removeClass('rright')
   }
});


// 手机号码

var phone=$('#phone');
var phicon=$('.ph-icon');
phone.focus(function(){
    phicon.addClass('wait');
    console.log('pw');
});
phone.blur(function(){
    var reg=/^[0-9]{11}$/;
    if(!reg.test(phone.val())){
        phicon.removeClass('wait');
        phicon.addClass('wrong');
    }else{
        phicon.removeClass('wait');
        phicon.addClass('rright');
    }
})


// 地址
var dre=$('#dre');
var dreicon=$('.dre-icon');
dre.focus(function(){
    dreicon.addClass('wait');
    // console.log('pw');
});
dre.blur(function(){
    var reg=/^[0-9]{11}$/;
    if(!reg.test(dre.val())){
        dreicon.removeClass('wait');
       dreicon.addClass('wrong');

    }else{
        dreicon.removeClass('wait');
        dreicon.addClass('rright');
    }
})