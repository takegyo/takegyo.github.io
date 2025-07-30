document.addEventListener('DOMContentLoaded', function() {
  function applyLettering(selector) {
    document.querySelectorAll(selector).forEach(element => {
      const text = element.textContent;
      element.innerHTML = ''; 
      text.split('').forEach(char => {
        const span = document.createElement('span');
        span.textContent = char;
        element.appendChild(span);
      });
    });
  }

  applyLettering(".title");
  applyLettering(".button");
  applyLettering(".link");

  setTimeout(animation, 1000);

  // const button = document.querySelector('.button');
  // if (button) {
  //   button.addEventListener('click', function() {
  //     animation();
  //   });
  // }
});

function animation() {

  var title1 = gsap.timeline();
  title1.to(".button", 0, {visibility: 'hidden', opacity: 0});
  title1.to(".link", 0, {visibility: 'hidden', opacity: 0});
  title1.staggerFromTo(".title span", 0.5,
    {ease: "back.out(1.7)", opacity: 0, y: 80},
    {ease: "back.out(1.7)", opacity: 1, y: 0}, 0.05);
  title1.to(".button", 0.2, {visibility: 'visible' ,opacity: 1});
  title1.to(".link", 0.2, {visibility: 'visible' ,opacity: 1});
}