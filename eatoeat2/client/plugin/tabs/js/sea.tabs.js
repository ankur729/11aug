﻿
$(document).on('click','.seaTabs_tab',function(){

            var item=$('.seaTabs_tab').index(this);
            $(this).addClass('seaTabs_switch_active').siblings().removeClass('seaTabs_switch_active');
            $($('.seaTabs_item')[item]).addClass('seaTabs_content_active').siblings().removeClass('seaTabs_content_active');


});


$(document).on('click' , '.seaTabs_switch_active' , function(){
    $(".timedata").hide();
})

$(document).on('click' , '.seaTabs_tab.time-select.seaTabs_switch_active' , function(){
    $(".timedata").show();
})

$(function(){
    $('.seaTabs_tab').each(function(item){
        $(this).click(function(){
            $(this).addClass('seaTabs_switch_active').siblings().removeClass('seaTabs_switch_active');
            $($('.seaTabs_item')[item]).addClass('seaTabs_content_active').siblings().removeClass('seaTabs_content_active');
        });
    });

$('.seaTabs_tab.submit-btn').click(function(){
    $(".seaTabs_tab").removeClass("seaTabs_switch_active");
    $(".time-select").addClass("seaTabs_switch_active");
    $(".timedata").show();
    $(".seaTabs_item").removeClass("seaTabs_content_active");     
});

});




$(function(){
    $('.seaTabs_tab2').each(function(item){
        $(this).click(function(){
            $(this).addClass('seaTabs_switch_active2').siblings().removeClass('seaTabs_switch_active2');
            $($('.seaTabs_item2')[item]).addClass('seaTabs_content_active2').siblings().removeClass('seaTabs_content_active2');
        });
    });
});

/*javascript for all categorey button is start from here*/

$(document).ready(function(e) {
    $(".all-cat").hover(function(){
		
		$(".all-cat-mega").toggle();
		
		});
});
