//scroll_effect
$(window).scroll(function () {
  var scrollAnimationElm = document.querySelectorAll('.scroll_up');
  var scrollAnimationFunc = function () {
    for (var i = 0; i < scrollAnimationElm.length; i++) {
      var triggerMargin = 100;
      if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
        scrollAnimationElm[i].classList.add('on');
      }
    }
  }
  window.addEventListener('load', scrollAnimationFunc);
  window.addEventListener('scroll', scrollAnimationFunc);
});

var swiper = new Swiper(".index-picture", {
    loop: true,
    spaceBetween: 30,
    effect: "fade",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    },
    keyboard: {
    enabled: true,
    onlyInViewport: false,
    },
});

$(function(){
  var pagetop = $('#page-top');
  pagetop.hide();
  $(window).scroll(function () {
     if ($(this).scrollTop() > 100) {
          pagetop.fadeIn();
     } else {
          pagetop.fadeOut();
     }
  });
  pagetop.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 500);
     return false;
  });
});


document.addEventListener("DOMContentLoaded", function() {
  // ここに前回のコードを記述
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const timeElement = document.getElementById("last-time");
  if (timeElement) { // 要素が存在するか確認
    const dateString = timeElement.textContent;
    const targetDate = new Date(dateString);

    const diffTime = today.getTime() - targetDate.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays >= 0) {
      timeElement.textContent = diffDays + "日前";
    } else {
      timeElement.textContent = "aaaaaaaaaaaaaa";
    }
  }
});


const applyTextLimit = () => {
  let maxLength = 104; //上限文字数
  let limitedText = document.getElementById('limited-text1');
  let originalText = limitedText.innerText;
  if (originalText.length > maxLength) {
    limitedText.innerText = originalText.substr(0, maxLength) + '...';
  }
}
applyTextLimit();
