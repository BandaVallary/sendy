'use strict';
// sign up selections
const modal = document.querySelector('.modal');
const btnOpenModal = document.querySelector('.btn__show__modal');
const btnCloseModal = document.querySelector('.btn__close__modal');
const overlay = document.querySelector('.overlay');
// Log in selections
const logInModal = document.querySelector('.logIn__Modal');
const closeLogIn = document.querySelector('.close__logIn-modal');
const btnLogIn = document.querySelector('.btn__LogIn-modal');
const logInOverlay = document.querySelector('.login__overlay');
const btnScrollto = document.querySelector('.vid--link');
const videoSection = document.querySelector('.section__content');
const navigation = document.querySelector('.links');

// implementing smooth scrolling
btnScrollto.addEventListener('click', function (e) {
  videoSection.scrollIntoView({ behavior: 'smooth' });
});
//smooth scrolling for navigation links
navigation.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function (e) {
  e.preventDefault();
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnOpenModal.addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
// Log In form
const LogIn = function () {
  logInModal.classList.remove('hidden');
  // overlay.classList.remove("hidden");
  logInOverlay.classList.remove('hidden');
};
const logout = function (e) {
  e.preventDefault();
  logInModal.classList.add('hidden');
  // overlay.classList.add("hidden");
  logInOverlay.classList.add('hidden');
};
btnLogIn.addEventListener('click', LogIn);
closeLogIn.addEventListener('click', logout);
logInOverlay.addEventListener('click', logout);
// the log in modal was getting closed when you click on the form, therefore you just change the z-index of the modal window container to be higher than that of the background.
// overlay.addEventListener("click", logout);
// YOUTUBE IFRAME API

// const tag = document.createElement('script');
// tag.src = 'https://www.youtube.com/watch?v=YqWJ6wzFg-8';
// const firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// const player = function onYouTubeIframeAPIReady() {
//   player = new YT.Player('player', {
//     playerVars: { playsinline: 1 },

//     events: {
//       onReady: onPlayerReady,
//       onStateChange: onPlayerStateChange,
//     },
//   });
// };
// // 4. The API will call this function when the video player is ready.
// function onPlayerReady(event) {
//   event.target.playVideo();
// }
// // 5. The API calls this function when the player's state changes.
// //    The function indicates that when playing a video (state=1),
// //    the player should play for six seconds and then stop.
// let done = false;
// function onPlayerStateChange(event) {
//   if (event.data == YT.PlayerState.PLAYING && !done) {
//     setTimeout(stopVideo, 6000);
//     done = true;
//   }
// }
// function stopVideo() {
//   player.stopVideo();
// }
