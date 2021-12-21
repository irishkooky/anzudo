// JavaScript Document
$(window).on('load', function() {
  $('.flexslider').flexslider({
    showSpeed: 500,
    animationSpeed: 1000,
    controlNav: true,
    directionNav: true
  });
});

$(function(){
  $("#item li").append("<div>");
  $("#item li div").each(function(){
    $(this).html("<p>" + $(this).parent().children().children("img").attr("alt") + "</p>")
  });
  $("#item li").hover(function(){
    $(this).children("div").stop().fadeIn(300);
    $(this).children("div").children("p").stop().animate({"top" : 0}, 300);
    }, function(){
    $(this).children("div").stop().fadeOut(300);
    $(this).children("div").children("p").stop().animate({"top" : "0.5em"}, 300);
  });
});

$(function(){
  $(".faq dl dd figure").append("<div>");
  $(".faq dl dd figure div").each(function(){
    $(this).html("<p>" + $(this).parent().children().children("img").attr("alt") + "</p>")
  });
  $(".faq dl dd figure").hover(function(){
    $(this).children("div").stop().fadeIn(300);
    $(this).children("div").children("p").stop().animate({"top" : 0}, 300);
    }, function(){
    $(this).children("div").stop().fadeOut(300);
    $(this).children("div").children("p").stop().animate({"top" : "0.5em"}, 300);
  });
});


$(function(){
  $(".itemNameImg a").click(function(){
    $(".itemNameImg figure img").attr("src", $(this).attr("href"));
   // $(".itemName").html("<h2>" + $("img", this).attr("alt") + "</h2>");
    return false;
  });
});

/* $(function(){
  if($(".ichiran figure .fig:not(:first-child)").css() == ({"display" : "none"}) {
    $(".ichiran figure .fig:first-child").css({""})
  };
}); */

/*$(function(){
  $('#contents div[id != "tab1"]').hide();
  $("#contents ul li a").click(function(){
    $("#contents div").hide();
    $($(this).attr("href")).show();
    $(".current").removeClass("current");
    $(this).addClass("current");
    return false;
  });
});*/

