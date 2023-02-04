let radius = 290; // how big of the radius
let autoRotate = true; // auto rotate or not
let rotateSpeed = -050; // unit: seconds/360 degrees
let imgWidth = 120; // width of images (unit: px)
let imgHeight = 170; // height of images (unit: px)

// Link of background music - set 'null' if you dont want to play background music
let bgMusicURL = 'https://open.spotify.com/search/blue%20bird';
let bgMusicControls = true; // Show UI music control



// ===================== start =======================
// animation start after 1000 miliseconds
setTimeout(init, 1000);

let odrag = document.getElementById('drag-container');
let ospin = document.getElementById('spin-container');
let aImg = document.querySelectorAll('.hero-image');
let aVid = document.getElementsByTagName('video');
let aEle = [...aImg, ...aVid]; // combine 2 arrays

// Size of images
document.querySelector('#spin-container').style.width = imgWidth + "px";
ospin.style.height = imgHeight + "px";

// Size of ground - depend on radius
let ground = document.getElementById('ground');
ground.style.width = radius * 3 + "px";
ground.style.height = radius * 3 + "px";

function init(delayTime) {
  for (let i = 0; i < aEle.length; i++) {
    aEle[i].style.transform = "rotateY(" + (i * (360 / aEle.length)) + "deg) translateZ(" + radius + "px)";
    aEle[i].style.transition = "transform 1s";
    aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + "s";
  }
}

function applyTranform(obj) {
  // Constrain the angle of camera (between 0 and 180)
  if(tY > 180) tY = 180;
  if(tY < 0) tY = 0;

  // Apply the angle
  obj.style.transform = "rotateX(" + (-tY) + "deg) rotateY(" + (tX) + "deg)";
}

function playSpin(yes) {
  ospin.style.animationPlayState = (yes?'running':'paused');
}

let sX, sY, nX, nY, desX = 0,
    desY = 0,
    tX = 0,
    tY = 10;

// auto spin
if (autoRotate) {
  let animationName = (rotateSpeed > 0 ? 'spin' : 'spinRevert');
  ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
}

// add background music
if (bgMusicURL) {
  document.getElementById('music-container').innerHTML += `
<audio src="${bgMusicURL}" ${bgMusicControls? 'controls': ''} autoplay loop>    
<p>If you are reading this, it is because your browser does not support the audio element.</p>
</audio>
`;
}

// setup events
document.onpointerdown = function (e) {
  clearInterval(odrag.timer);
  e = e || window.event;
  let sX = e.clientX,
      sY = e.clientY;

  this.onpointermove = function (e) {
    e = e || window.event;
    let nX = e.clientX,
        nY = e.clientY;
    desX = nX - sX;
    desY = nY - sY;
    tX += desX * 0.1;
    tY += desY * 0.1;
    applyTranform(odrag);
    sX = nX;
    sY = nY;
  };

  this.onpointerup = function (e) {
    odrag.timer = setInterval(function () {
      desX *= 0.95;
      desY *= 0.95;
      tX += desX * 0.1;
      tY += desY * 0.1;
      applyTranform(odrag);
      playSpin(false);
      if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
        clearInterval(odrag.timer);
        playSpin(true);
      }
    }, 17);
    this.onpointermove = this.onpointerup = null;
  };

  return false;
};

document.onmousewheel = function(e) {
  e = e || window.event;
  let d = e.wheelDelta / 20 || -e.detail;
  radius += d;
  init(1);
};
function randomiser(){
    return Math.floor(Math.random()*4)
}
console.log(randomiser())
// let nameArray=["Kakashi", "Naruto", "Sasuke", "Lee"]
function changeBgColor(){
    let nameArray=["Kakashi", "Naruto", "Sasuke", "Sakura"]
    let textColor=["blue", "red", "yellow", "white"]
    let colourChange=document.querySelector("#name")
    colourChange.textContent=nameArray[randomiser()]
    console.log(nameArray[randomiser()])
    colourChange.style.color=textColor[randomiser()];
}