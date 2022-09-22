$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $(".navbar").toggleClass("nav-toggle");
  });
  $('#login').click(function(){
    $('.login-form').addClass('popup');
  })
  $('.fa-times').click(function(){
    $('.login-form').removeClass('popup');
  })
  $(window).on("load scroll", function () {
    $(this).removeClass("fa-times");
    $(".navbar").removeClass("nav-toggle");
    $('.login-form').removeClass('popup');
  });
});
