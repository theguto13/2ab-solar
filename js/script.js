/*
    Propriedades Gerais
*/
window.onresize = function(){
    setTimeout(function(){
        if((document.body.clientWidth) > 1180){
            $('.nav-links a').css('color','#fff');
            $('.nav-links').css('background-color','transparent');
            $('#selected').css('color','#264653');
            $('.nav-links').css('display','block');
        }else{
            $('.nav-links').css('display','none');
            hamburguerTester();
        }
    }, 1000)
}
/*
    Hamburguer (menu / header)
*/
var hamburguerNumber = 1;
function hamburguerTester(){
    if(hamburguerNumber > 0){
        setTimeout(function(){
            $('.nav-links').css('right','-250px');
        },0.3*1000)
        setTimeout(function(){
            $('.nav-links').css('background-color','transparent');
            $('.nav-links a').css('color','#fff');
        }, 0.4*1000)
        setTimeout(function(){
            $('body .nav-links').css('display','none');
        },0.9*1000)
    }else if(hamburguerNumber < 0){
        $('.nav-links').height(($('body').height)-80-144);
        $('.nav-links').css('display','flex');
        $('.nav-links').css('background-color','white');
        $('.nav-links a').css('color','#264653');
        $('#selected').css('color','#fff');
        setTimeout(function(){
            $('.nav-links').css('right','0');
        },0.15*1000)
    }
}
$('#a_hamburguer').click(function(){
    hamburguerNumber *= -1;
    hamburguerTester();
})
const hamburguerMenu = $('.hamburguer');
var counter = 0;
hamburguerMenu.click(function(){
    counter++;
    if((counter % 2) == 1){
        hamburguerMenu.addClass('active');
    }else{
        hamburguerMenu.removeClass('active');
    }
})
/*
    *
*/