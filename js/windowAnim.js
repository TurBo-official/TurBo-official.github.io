

//scroll_effect
$(window).ready(function () {
  var scrollAnimationElm = document.querySelectorAll('.scroll_up');
  var scrollAnimationFunc = function () {

    for (var i = 0; i < scrollAnimationElm.length; i++) {
      var triggerMargin = 100;
      if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
        scrollAnimationElm[i].classList.add('on');
      }
    }
  }
  window.addEventListener('DOMContentLoaded', scrollAnimationFunc);
  window.addEventListener('load', scrollAnimationFunc);
  window.addEventListener('scroll', scrollAnimationFunc);
});

//scroll_effect
$(window).ready(function () {
  var scrollAnimationElm = document.querySelectorAll('.scroll_right');
  var scrollAnimationFunc = function () {

    for (var i = 0; i < scrollAnimationElm.length; i++) {
      var triggerMargin = 0;
      if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
        scrollAnimationElm[i].classList.add('on');
      }
    }
  }
  window.addEventListener('DOMContentLoaded', scrollAnimationFunc);
  window.addEventListener('load', scrollAnimationFunc);
  window.addEventListener('scroll', scrollAnimationFunc);

});