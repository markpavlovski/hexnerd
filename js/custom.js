'use strict'
console.log("Loaded custom JS")

// Values for display include wide, square, line
const state = {
  nav: true,
  fade: false,
  aside: false,
  full: false,
  display: "wide"
}

const colors = {
  classic6: {
    names: Object.keys(classicHex).filter((key) => (classicHex[key].include)),
    include: true
  },
  leetNeat6: {
    names: Object.keys(leetNeat).filter((key) => (leetNeat[key].include)),
    include: true
  },
  leetDirty6: {
    names: Object.keys(leetDirty).filter((key) => (leetDirty[key].include)),
    include: true
  }
}


// Create cards


const card = document.createElement("div")
card.classList.add("card")
card.classList.add("wide")

const main = document.querySelector("main")
for (let key in colors) {
  if (colors[key].include) {
    colors[key].names.forEach((value) => {
      console.log(value)
      const newCard = card.cloneNode(true)
      newCard.style = `background-color: #${value}`
      main.appendChild(newCard)
    })
  }
}




// Side bar transitions
function showAside() {
  const aside = document.querySelector("aside")
  const fade = document.querySelector(".fade")

  fade.classList.add("z4")
  window.setTimeout(() => fade.classList.add("show"), 5)
  state.fade = true

  aside.classList.add("z5")
  window.setTimeout(() => aside.classList.add("show"), 5)
  state.aside = true
}

function hideAside() {
  const aside = document.querySelector("aside")
  const fade = document.querySelector(".fade")

  fade.classList.remove("show")
  window.setTimeout(() => fade.classList.remove("z4"), 500)
  state.fade = false

  aside.classList.remove("show")
  window.setTimeout(() => aside.classList.remove("z5"), 500)
  state.aside = false
}

// Full screen mode
function showFull() {
  const fullScreen = document.querySelector(".full-screen")
  fullScreen.classList.add("z6")
  window.setTimeout(() => fullScreen.classList.add("show"), 5)
  state.full = true
}

function hideFull() {
  const fullScreen = document.querySelector(".full-screen")
  fullScreen.classList.remove("show")
  window.setTimeout(() => fullScreen.classList.remove("z6"), 500)
  state.full = false
}

// Switch between grid systems

function display(mode) {
  const cards = document.querySelectorAll(".card")
  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.remove(state.display)
    cards[i].classList.add(mode)
  }
  state.display = mode
}



// Event Handlers
document.querySelector(".wide").addEventListener("click", () => display("wide"))
document.querySelector(".square").addEventListener("click", () => display("square"))
document.querySelector(".strip").addEventListener("click", () => display("strip"))
document.querySelector(".full").addEventListener("click", () => showFull())

document.querySelector("main").addEventListener("click", (event) => {
  if (event.target.classList.contains("card")) showAside()
})

document.querySelector(".fade").addEventListener("click", () => hideAside())


document.addEventListener('keydown', (event) => {
  const keyName = event.key;
  console.log('key: ' + keyName);

  if (keyName === 'Escape' || keyName.toLowerCase() === 'q') hideFull()

});


// detect mobile
//
//
// function isMobileDevice() {
//     return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
// };
//
// alert(isMobileDevice())

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;
var yDown = null;

function handleTouchStart(evt) {
  xDown = evt.touches[0].clientX;
  yDown = evt.touches[0].clientY;
};

function handleTouchMove(evt) {
  if (!xDown || !yDown) {
    return;
  }

  var xUp = evt.touches[0].clientX;
  var yUp = evt.touches[0].clientY;

  var xDiff = xDown - xUp;
  var yDiff = yDown - yUp;

  if (Math.abs(xDiff) > Math.abs(yDiff)) { /*most significant*/
    if (xDiff > 0) {
      /* left swipe */
    } else {
      /* right swipe */
    }
  } else {
    if (yDiff > 0) {
      hideFull()
    } else {
      /* down swipe */
    }
  }
  /* reset values */
  xDown = null;
  yDown = null;
};


// testing
showAside()
// showFull()
