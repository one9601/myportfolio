$('.slideList>div:gt(0)').hide();

setInterval(function(){
    $('.slideList>div:first')
    .fadeOut(2000)
    .next()
    .fadeIn(2000)
    .end()
    .appendTo('.slideList');
},3000);