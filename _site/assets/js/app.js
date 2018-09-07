$(document).ready(function(){

  // Clicking the Espanol button
  $("#span").click(function(){
    $(".span").removeClass("hide");
    $(".eng").addClass("hide");
    $(this).addClass("chosen");
    $("#eng").removeClass("chosen");
  });

  // Clicking the English button
  $("#eng").click(function(){
    $(".eng").removeClass("hide");
    $(".span").addClass("hide");
    $(this).addClass("chosen");
    $("#span").removeClass("chosen");
  });

  // Clicking the Menu button
  $(".menu").click(function(){
    $(".menu-overlay").fadeToggle(300);
    $(".menu-close").toggleClass("hide");
    $(".menu-open").toggleClass("hide");
  });

});
