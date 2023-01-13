let audioButton = document.querySelector('.audio-button');
var audio = document.querySelector('.music-player audio');
audioButton.addEventListener('click', function () {
  if (audio.paused) {
    audio.play();
    audioButton.classList.add('playing');
  } else {
    audio.pause();
    // audio.currentTime = 0;
    audioButton.classList.remove('playing');
  }
});

let musicVolume = document.getElementById('music-volume');
musicVolume.addEventListener('change', function (e) {
  audio.volume = e.currentTarget.value / 100;
});

var body = document.querySelector('body');
body.addEventListener('mouseout', (event) => {
  setTimeout(function () {
    body.classList.remove('mouses-active');
  }, 20000);
});
body.addEventListener('mouseenter', (event) => {
  body.classList.add('mouses-active');
});

var keyboardAudio = document.querySelector('.keyboard audio');
let keyboardVolume = document.getElementById('keyboard');
keyboardVolume.addEventListener('change', function (e) {
  keyboardAudio.play();
  keyboardAudio.volume = e.currentTarget.value / 100;
});

var trafficAudio = document.querySelector('.city-traffic audio');
let trafficVolume = document.getElementById('city-traffic');
trafficVolume.addEventListener('change', function (e) {
  trafficAudio.play();
  trafficAudio.volume = e.currentTarget.value / 100;
});

var rainAudio = document.querySelector('.city-rain audio');
let rainVolume = document.getElementById('city-rain');
rainVolume.addEventListener('change', function (e) {
  rainAudio.play();
  rainAudio.volume = e.currentTarget.value / 100;
  if (rainAudio.volume > 0) {
    body.classList.add('raining');
  } else {
    body.classList.remove('raining');
  }
});

var campfireAudio = document.querySelector('.campfire audio');
let campfireVolume = document.getElementById('campfire');
campfireVolume.addEventListener('change', function (e) {
  campfireAudio.play();
  campfireAudio.volume = e.currentTarget.value / 100;
});

var forestAudio = document.querySelector('.forest-night audio');
let forestVolume = document.getElementById('forest-night');
forestVolume.addEventListener('change', function (e) {
  forestAudio.play();
  forestAudio.volume = e.currentTarget.value / 100;
});

let muteBTN = document.querySelector('.mute-all');
var allAudios = document.querySelectorAll('audio');
muteBTN.addEventListener('click', function (e) {
  allAudios.forEach((elem) => (elem.muted = !elem.muted));
  muteBTN.classList.toggle('muted');
});

let mixerPOP = document.querySelector('#mixer');
let mixerAction = document.querySelector('.mixer-icon');
mixerAction.addEventListener('click', function (e) {
  mixerAction.classList.toggle('active');
  mixerPOP.classList.toggle('active-pop');
});
