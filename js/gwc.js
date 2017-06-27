/**
 * Created by Administrator on 2017/3/29.
 */
$('.add').on('click',function(){
    var b=parseFloat($(this).siblings('.count1').html());
    var a= parseInt($(this).siblings('span').html());
    $(this).siblings('span').html(a+1);
    heji()
})
$('.minus').on('click',function(){
    var b=parseFloat($(this).siblings('.count1').html());
    var a= parseInt($(this).siblings('span').html());
    if(a==1){return}
    $(this).siblings('span').html(a-1);
    heji()
})
$('tbody .check').on('click',function(){
    $(this).toggleClass('checked')
    heji()
})
$('.qx-btn').on('click',function(){
    $(this).toggleClass('checked');
    if($(this).hasClass('checked')){
        $('.check').addClass('checked')
    }else{
        $('.check').removeClass('checked')
    }
    heji()
})
function heji(){
    var zongjia=[];
    var tbody=document.getElementById('tbody');
    var checked=tbody.getElementsByClassName('checked');
    for(var i=0;i<checked.length;i++){
       var num=$(checked[i]).parent().parent().parent().find('.count-num').html();
        console.log(num)
        var dj=$(checked[i]).parent().parent().parent().find('.dj').html();
        dj=dj.slice(1,dj.length);
        console.log(dj)
        zongjia.push(num*dj)
    }
    for(var i= 0,sum=0;i<zongjia.length;i++){
        sum=sum+zongjia[i]
    }
    sum=sum.toFixed(2)
    $('.price').html('￥'+sum)
}
$('.qx-txt').on('click',function(){
    $('.qx-btn').toggleClass('checked');
    if($('.qx-btn').hasClass('checked')){
        $('.check').addClass('checked')
    }else{
        $('.check').removeClass('checked')
    }
})
$('.delete-btn').on('click',function(){
    $(this).parent().parent().remove();
})
$('.delete-all').on('click',function(e){
    e.preventDefault()
   $('tbody .checked').parent().parent().parent().remove();
    $('price').html('￥0.00')
    heji();

})

