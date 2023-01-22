

//scroll_effect
$(window).ready(function () {
  var scrollAnimationElm = document.querySelectorAll('.scroll_up_onload');

  scrollAnimationElm[i].classList.add('on');

});

//scroll_effect
$(window).ready(function () {
  var scrollAnimationElm = document.querySelectorAll('.scroll_right');
  var scrollAnimationFunc = function () {

    for (var i = 0; i < scrollAnimationElm.length; i++) {
      var triggerMargin = 1000;
      if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
        scrollAnimationElm[i].classList.add('on');
      }
    }
  }
  window.addEventListener('DOMContentLoaded', scrollAnimationFunc);
  window.addEventListener('load', scrollAnimationFunc);
  window.addEventListener('scroll', scrollAnimationFunc);

});