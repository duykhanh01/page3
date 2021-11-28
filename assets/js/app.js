$(document).ready(function () {
  $(".btn-bar").click(function () {
    $(".nav-overlay").addClass("d-block").removeClass("d-none");
    $(".header-mobile").css("transform", "translateX(0%)");
  });
  $(".nav-overlay").click(function () {
    $(".nav-overlay").addClass("d-none").removeClass("d-block");
    $(".header-mobile").css("transform", "translateX(100%)");
  });
  $(".btn-close").click(function () {
    $(".nav-overlay").addClass("d-none").removeClass("d-block");
    $(".header-mobile").css("transform", "translateX(100%)");
  });
  $(".search-input").click(function () {
    $(this).find("input").focus();
  });
});
