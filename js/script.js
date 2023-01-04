const mobileOption = document.getElementById('mobileoption');
const barButton = document.getElementById('barbutton');
const closeButton = document.getElementById('closebutton');
const body = document.querySelector('body');
// disable popup mopbile menu
mobileOption.style.display = 'none';
// event listener for popup menu bar
barButton.addEventListener('click', () => {
  mobileOption.style.display = 'block';
  body.style.overflow = 'hidden';
});
// add event listener for close button
closeButton.addEventListener('click', () => {
  mobileOption.style.display = 'none';
  body.style.overflow = 'auto';
});
// add event listner mobile option for anywhere click
mobileOption.addEventListener('click', () => {
  mobileOption.style.display = 'none';
  body.style.overflow = 'auto';
});
// check resize on windows to disable mobileoption
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    mobileOption.style.display = 'none';
    body.style.overflow = 'auto';
  }
});