function animateLogo() {
  const logo = document.querySelector('.logo-container img');
  logo.animate([
    { transform: 'rotateY(0deg)' },
    { transform: 'rotateY(360deg)' }
  ], {
    duration: 1000,
    easing: 'ease-in-out'
  });
}
