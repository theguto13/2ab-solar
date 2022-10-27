$(document).ready(function(){
    /*
        Propriedades Gerais
    */
    window.onresize = function(){
        setTimeout(function(){
            if((document.body.clientWidth) > 1180){
                $('.nav-links a').css('color','white');
                $('.nav-links').css('background-color','transparent');
                $('.nav-links').css('display','block');
                $('#selected').css('color','#264653');
            }else{
                $('.nav-links').css('display','none');
                hamburguerTester();
            }
        }, 0.05*1000)
    }
    /*
        Hamburguer (menu / header)
    */
    var hamburguerNumber = 1;
    function hamburguerTester(){
        if(hamburguerNumber > 0){
            $('.hamburguer').removeClass('active');
            setTimeout(function(){
                $('.nav-links').css('right','-250px');
            },0.3*1000)
            setTimeout(function(){
                $('.nav-links').css('background-color','transparent');
                $('.nav-links a').css('color','white');
            }, 0.4*1000)
            setTimeout(function(){
                $('body .nav-links').css('display','none');
            },0.9*1000)
        }else if(hamburguerNumber < 0){
            $('.hamburguer').addClass('active');
            $('.nav-links').height(($('body').height)-80-144);
            $('.nav-links').css('display','flex');
            $('.nav-links').css('background-color','#264653');
            $('.nav-links a').css('color','white');
            $('#selected').css('color','#264653');
            setTimeout(function(){
                $('.nav-links').css('right','0');
            },0.15*1000)
        }
    }
    $('#a_hamburguer').click(function(){
        hamburguerNumber *= -1;
        hamburguerTester();
    })
    /*
        Carrossel
    */
    $('.carrossel-content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        centerMode: true
    })
})