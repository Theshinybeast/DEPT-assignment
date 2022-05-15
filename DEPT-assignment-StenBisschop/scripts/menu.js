$(document).ready(function () {

  // show arrow on hovering a menu link
  $(".menu__link").hover(
    function () {
      $(this).children("span").addClass("nav-arrow-right");
    },
    function () {
      $(this).children("span").removeClass("nav-arrow-right");
    }
  );

  //   no show menu, otherwise links are not clickable
  $(":checkbox").on('click', function () {
    $(".menu").toggleClass("no-show");
    $(".menu-bg-borders").toggleClass("no-show");
  });
});

window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    document.querySelector("header").style.background = "rgba(255,255,255,.3)";
  } else {
    document.querySelector("header").style.background = "rgba(255,255,255,0)";
  }
}