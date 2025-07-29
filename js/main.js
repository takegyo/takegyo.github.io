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

const applyTextLimit = () => {
  let maxLength = 52; //上限文字数
  let limitedText = document.getElementById('limited-text');
  let originalText = limitedText.innerText;
  if (originalText.length > maxLength) {
    limitedText.innerText = originalText.substr(0, maxLength) + '...';
  }
}
applyTextLimit();
