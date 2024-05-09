
let header = document.querySelector('header');
let title = document.querySelector('#title');
let video = document.querySelector('video')

console.log(window.innerWidth);

window.onscroll = function() {
  title.style.top = window.scrollY*0.48 + "px";
  video.style.top = window.scrollY*0.60 + "px";
}
