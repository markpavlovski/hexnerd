'use strict'
console.log("Loaded custom JS")

// Set up state tracking
const state = {
  fade: false,
  aside: false,
  full: false,
  display: "wide",
  filter: {
    curated: false,

    featured: true,
    favorite: true,

    classic: false,
    neat: false,
    dirty: false,
    native: false,

    alpha: false,
    triple: false,
  }
}


// Load data
const colors = {}
Object.assign(colors, classic)
Object.assign(colors, neat)
Object.assign(colors, dirty)
console.log("Colors loaded:", Object.keys(colors).length)
for (let key in colors) {
  colors[key].classic = colors[key].type === "classic"
  colors[key].neat = colors[key].type === "neat"
  colors[key].dirty = colors[key].type === "dirty"
  colors[key].native = colors[key].type === "native"
}


// Create cards

function clearCards() {
  const main = document.querySelector("main")
  while (main.firstElementChild) {
    main.removeChild(main.childNodes[0])
  }
}

function displayCards() {

  clearCards()
  const main = document.querySelector("main")
  const card = document.createElement("div")
  card.classList.add("card")
  card.classList.add("wide")
  card.innerText = ""

  for (let key in colors) {

    let displayFlag = false

    if (colors[key]['featured'] && state.filter['featured']) {
      displayFlag = true
    } else if (colors[key]['favorite'] && state.filter['favorite']) {
      displayFlag = true
    }

    if (state.filter.curated && colors[key].curated) {
      for (let property in state.filter) {
        if (!['favorite', 'featured', 'alpha', 'triple', 'curated'].includes(property)) {
          if (state.filter[property] && colors[key][property]) {
            if (state.filter.alpha && state.filter.triple) {
              displayFlag = true
            } else if (state.filter.alpha && !state.filter.triple) {
              if (!colors[key].triple) displayFlag = true
            } else if (!state.filter.alpha && state.filter.triple) {
              if (!colors[key].alpha) displayFlag = true
            } else {
              if (!colors[key].alpha && !colors[key].triple) displayFlag = true
            }
          }
        }
      }

    }
    if (!state.filter.curated) {
      for (let property in state.filter) {
        if (!['favorite', 'featured', 'alpha', 'triple', 'curated'].includes(property)) {
          if (state.filter[property] && colors[key][property]) {
            if (state.filter.alpha && state.filter.triple) {
              displayFlag = true
            } else if (state.filter.alpha && !state.filter.triple) {
              if (!colors[key].triple) displayFlag = true
            } else if (!state.filter.alpha && state.filter.triple) {
              if (!colors[key].alpha) displayFlag = true
            } else {
              if (!colors[key].alpha && !colors[key].triple) displayFlag = true
            }
          }
        }
      }

    }





    // const displayFlag = colors[key].curated
    if (displayFlag) {
      const newCard = card.cloneNode(true)
      newCard.style = `background-color: ${key}`
      newCard.id = key
      newCard.innerText = `
        Key: ${key.toUpperCase()} \n
        Word: ${colors[key].word} \n
        Type: ${colors[key].type} \n
        Alpha: ${colors[key].alpha} \n
        Triple: ${colors[key].triple} \n
        Curated: ${colors[key].curated} \n
        Featured: ${colors[key].featured} \n
        Favorite: ${colors[key].favorite} \n
      `
      main.appendChild(newCard)
    }
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

function showFilters() {
  showAside()
  const filters = document.querySelector(".top.filter")
  filters.classList.add("block")
}

function hideFilters() {
  hideAside()
  const filters = document.querySelector(".top.filter")
  window.setTimeout(() => filters.classList.remove("block"), 300)
}

function showMug(targetId) {
  showAside()

  const color = targetId;
  console.log(color)



  const header = document.querySelector(".top.color")
  const middle = document.querySelector(".middle .description")
  const footer = document.querySelector(".bottom .favorite")

  header.classList.add("block")
  middle.classList.add("block")
  footer.classList.add("block")

}

function hideMug() {
  hideAside()
  const header = document.querySelector(".top.color")
  const middle = document.querySelector(".middle .description")
  const footer = document.querySelector(".bottom .favorite")

  window.setTimeout(() => {
    header.classList.remove("block")
    middle.classList.remove("block")
    footer.classList.remove("block")
  }, 300)
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





// Filters

function setFilters() {
  for (let key in state.filter) {
    if (state.filter[key]) document.querySelector(`.switch.${key} input`).checked = true
  }
}

function getFilters() {
  for (let key in state.filter) {
    state.filter[key] = document.querySelector(`.switch.${key} input`).checked
  }
}







// Event Handlers

document.querySelector("header").addEventListener("click", (event) => {
  const view = event.target.closest("li")
  if (view) {
    if (view.classList.contains("filter")) showFilters()
    if (view.classList.contains("wide")) display("wide")
    if (view.classList.contains("square")) display("square")
    if (view.classList.contains("strip")) display("strip")
    if (view.classList.contains("full")) showFull()
  }
})


// Toggle Slider:
document.querySelector("main").addEventListener("click", (event) => {
  if (event.target.classList.contains("card")) showMug(event.target.id)
})
document.querySelector(".fade").addEventListener("click", () => {
  hideFilters()
  hideMug()
})

// Return from Full Screen Mode
document.addEventListener('keydown', (event) => {
  const keyName = event.key;
  console.log('key: ' + keyName);
  if (keyName === 'Escape' || keyName.toLowerCase() === 'q') hideFull()
})

// Listen for filter changes
document.querySelector("aside").addEventListener("click", (event) => {
  if (event.target.closest(".switch")) {
    getFilters()
    displayCards()
  }
})




// Handle mobile


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


// Behaviour on Load
setFilters()
displayCards()
// showAside()
// showFull()
