/*********************************************
*TAB
*********************************************/
$(function(){
    $(".tab_nav li:first-child").addClass("hover");
    $(".tab_nav li").each(function(i){
        $(".tab_nav li").eq(i).mouseover(function(){
            $(this).addClass("hover").siblings("li").removeClass("hover");
            $(".tab_con").eq(i).show().siblings(".tab_con").hide();
        });
    });
});

//subTab
$(function(){
    $(".tab_subnav li:first-child").addClass("hover");
    $(".tab_subnav li").each(function(i){
        $(".tab_subnav li").eq(i).mouseover(function(){
            $(this).addClass("hover").siblings("li").removeClass("hover");
            $(".tab_sub_con").eq(i).show().siblings(".tab_sub_con").hide();
        });
    });
});

//sub_nav
// $(function(){
//     $(".main_nav li").each(function(i){
//         $(".main_nav li").eq(i).mouseover(function(){
//             $(this).addClass('on').siblings("li").removeClass('on').find('.sub_nav').hide();
//             $(this).find(".sub_nav").show();
//         });
//     });

//     $('.main_nav .sub_nav').mouseout(function(event) {
//         $(this).hide();
//     });
// });

//sub_nav
$(".nav_department").mouseover(function(){
    $(this).children('.nav_department_con').show();
});
$(".nav_department").mouseout(function(){
    $(this).children('.nav_department_con').hide();
});



