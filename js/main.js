let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', () => mainNav.classList.toggle('active'));




// Get elements
let callToAction = document.getElementsByClassName('btn-request-demo');
let modal = document.querySelector('.modal');
let backdrop = document.querySelector('.backdrop');
let cancel = document.querySelector('.btn-cancel');


let closeModal = () => {
  modal.classList.remove('open');
  backdrop.classList.remove('open');
}

let openModal = () => {
  modal.classList.add('open');
  backdrop.classList.add('open');
}

let callToActionArr = [...callToAction];

callToActionArr.map((item) => {
  item.addEventListener('click', openModal);
 });

cancel.addEventListener('click', closeModal);
backdrop.addEventListener('click', closeModal);


// Smooth scroll

window.onload = function() {
  const easeInCubic = function(t) {
    return t * t * t;
  };
  const scrollElems = document.getElementsByClassName('nav-links');

  const scrollToElem = (
    start,
    stamp,
    duration,
    scrollEndElemTop,
    startScrollOffset
  ) => {
    const runtime = stamp - start;
    let progress = runtime / duration;
    const ease = easeInCubic(progress);

    progress = Math.min(progress, 1);

    const newScrollOffset = startScrollOffset + scrollEndElemTop * ease;
    window.scroll(0, startScrollOffset + scrollEndElemTop * ease);

    if (runtime < duration) {
      requestAnimationFrame(timestamp => {
        const stamp = new Date().getTime();
        scrollToElem(
          start,
          stamp,
          duration,
          scrollEndElemTop,
          startScrollOffset
        );
      });
    }
  };

  for (let i = 0; i < scrollElems.length; i++) {
    const elem = scrollElems[i];

    elem.addEventListener('click', function(e) {
      e.preventDefault();
      const scrollElemId = e.target.href.split('#')[1];
      const scrollEndElem = document.getElementById(scrollElemId);

      const anim = requestAnimationFrame(() => {
        const stamp = new Date().getTime();
        const duration = 500;
        const start = stamp;

        const startScrollOffset = window.pageYOffset;

        const scrollEndElemTop = scrollEndElem.getBoundingClientRect().top - 50;

        scrollToElem(
          start,
          stamp,
          duration,
          scrollEndElemTop,
          startScrollOffset
        );
      });
    });
  }
};