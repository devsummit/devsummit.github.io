function isMobile() {
  return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
}

window.addEventListener('scroll', function (e) {
  if (!isMobile()) {
    const body = document.querySelector('body');
    const nav = document.querySelector('#nav-main');
    if (body.scrollTop > 100) {
      nav.classList.add('fixed-top');
      body.paddingTop = '80px';
    } else {
      nav.classList.remove('fixed-top');
      body.paddingTop = 0;
    }
  }
});
