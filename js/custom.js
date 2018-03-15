'use strict'
console.log("Loaded custom JS")

// Set up state tracking
const state = {
  fade: false,
  aside: false,
  full: false,
  display: "wide",
  filter: {
    curated: true,

    featured: true,
    favorite: false,

    classic: false,
    neat: false,
    dirty: false,
    native: false,

    alpha: false,
    triple: false,
  },
  selected: null,
  lastClick: 0
}

// Time between clicks
const clickThreshold = 350


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
  const container = document.querySelector(".grid-container")
  const main = document.querySelector("main")
  while (main.firstElementChild) {
    main.removeChild(main.childNodes[0])
  }
  container.removeChild(main)
}

function displayCards() {

  document.querySelector("main") && clearCards()
  const container = document.querySelector(".grid-container")
  const main = document.createElement("main")
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
      newCard.style = `background: linear-gradient(to bottom, ${key} 130px, white 0px);`
      newCard.id = key
      console.log(key, (key.length - 1) % 3)
      newCard.innerHTML = `
        <h1>${key.toUpperCase()}</h1>
        <h2>HEX RGB${ (key.length -1) % 3 ? "A" : ""}${ (key.length -1) < 6 ? " SHORTHAND" : ""}</h2>
      `
      main.appendChild(newCard)
    }
  }

  container.appendChild(main)
  enableCardHiding()
  state.selected = main.firstElementChild

}


function displayProducts() {

  document.querySelector("main") && clearCards()
  const container = document.querySelector(".grid-container")
  const main = document.createElement("main")
  const card = document.createElement("div")
  card.classList.add("card")
  card.classList.add("product")
  card.innerText = ""

  for (let key in colors) {
    console.log(key)
    if (mugImages[key]) {
      const newCard = card.cloneNode(true)
      newCard.style = `background-image:  url("${mugImages[key]}");`
      newCard.id = key
      console.log(key, (key.length - 1) % 3)
      newCard.innerHTML = `
        <h1>${key.toUpperCase()}</h1>
        <h2>HEX RGB${ (key.length -1) % 3 ? "A" : ""}${ (key.length -1) < 6 ? " SHORTHAND" : ""}</h2>
      `
      main.appendChild(newCard)
    }
  }

  container.appendChild(main)
  enableCardHiding()
  state.selected = main.firstElementChild

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
  window.setTimeout(() => fade.classList.remove("z4"), 300)
  state.fade = false

  aside.classList.remove("show")
  window.setTimeout(() => aside.classList.remove("z5"), 300)
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

function showMug(target) {
  showAside()

  const color = target.id;
  const header = document.querySelector(".top.color")
  const middle = document.querySelector(".middle .description")
  const footer = document.querySelector(".bottom .favorite")
  const mug = document.querySelector(".mug")
  const swag = document.querySelector("#swag")
  const aside = header.closest("aside")

  header.classList.add("block")
  middle.classList.add("block")
  footer.classList.add("block")


  aside.style = `background: linear-gradient(to bottom, ${color} 260px, rgba(255,255,255,1) 0px);`

  console.log("color:", color, mugImages[color])
  if (mugImages[color]) {
    mug.style = `display:block; background-image:  url("${mugImages[color]}")`
    swag.style = "display:block"
    mug.classList.add("pointer")
  } else {
    mug.style = `display:none; background-color: ${color}`
    mug.classList.remove("pointer")
    swag.style = "display:none"

  }
  middle.querySelector("#color").innerText = color.toUpperCase()
  middle.querySelector("#name").innerText = `HEX RGB${ (color.length -1) % 3 ? "A" : ""}${ (color.length -1) < 6 ? " SHORTHAND" : ""}`.toUpperCase()


  if (color[0] === "#") {
    let decimal = {
      r: 255,
      g: 255,
      b: 255,
      a: 1

    }
    let percent = {
      r: 100,
      g: 100,
      b: 100,
      a: 1
    }
    switch (color.length - 1) {
      case 6:
        decimal.r = parseInt(color.slice(1, 3), 16)
        decimal.g = parseInt(color.slice(3, 5), 16)
        decimal.b = parseInt(color.slice(5), 16)
        break
      case 8:
        decimal.r = parseInt(color.slice(1, 3), 16)
        decimal.g = parseInt(color.slice(3, 5), 16)
        decimal.b = parseInt(color.slice(5, 7), 16)
        decimal.a = Math.round((parseInt(color.slice(7), 16) + 1) / 256 * 100) / 100
        break
      case 3:
        decimal.r = parseInt(color[1] + color[1], 16)
        decimal.g = parseInt(color[2] + color[2], 16)
        decimal.b = parseInt(color[3] + color[3], 16)
        break
      case 4:
        decimal.r = parseInt(color[1] + color[1], 16)
        decimal.g = parseInt(color[2] + color[2], 16)
        decimal.b = parseInt(color[3] + color[3], 16)
        decimal.a = Math.round((parseInt(color[4] + color[4], 16) + 1) / 256 * 100) / 100

        break
      default:
        middle.querySelector("#decimal").innerText
    }

    percent.r = Math.round((decimal.r + 1) / 256 * 100)
    percent.g = Math.round((decimal.g + 1) / 256 * 100)
    percent.b = Math.round((decimal.b + 1) / 256 * 100)

    if ((color.length - 1) % 3 === 0) {
      middle.querySelector("#decimal").innerText = `RGB ${decimal.r} ${decimal.g} ${decimal.b}`
      middle.querySelector("#percent").innerText = `RGB ${percent.r}% ${percent.g}% ${percent.b}%`
    } else {
      middle.querySelector("#decimal").innerText = `RGBA ${decimal.r} ${decimal.g} ${decimal.b} ${decimal.a}`
      middle.querySelector("#percent").innerText = `RGBA ${percent.r}% ${percent.g}% ${percent.b}% ${decimal.a}`
    }

  }

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

  renderFull()

  const fullScreen = document.querySelector(".full-screen")
  fullScreen.classList.add("z6")
  window.setTimeout(() => fullScreen.classList.add("show"), 5)
  state.full = true
}

function hideFull() {
  const fullScreen = document.querySelector(".full-screen")
  fullScreen.classList.remove("show")
  window.setTimeout(() => fullScreen.classList.remove("z6"), 300)
  state.full = false
}

function renderFull() {
  const fullScreen = document.querySelector(".full-screen")
  const name = fullScreen.querySelector(".card h1")
  const selected = state.selected
  const text = fullScreen.querySelectorAll("h1")

  name.innerText = selected.id.toUpperCase()
  fullScreen.style = `background-color: ${selected.id}`
  for (let i = 0; i < text.length; i++) {
    text[i].style = `color: ${selected.id};`
  }
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

// Show products






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


// Calculate mug product page
function getMugPage(mugImagePath) {
  const start = mugImagePath.indexOf("~~/") + 3
  const end = mugImagePath.indexOf("-mugs.jpg")
  return "https://society6.com/product/" + mugImagePath.slice(start, end) + "_mug"
}


// Navigate Cards
function goLeft() {
  if (state.selected.previousElementSibling) {
    state.selected = state.selected.previousElementSibling
  } else {
    state.selected = state.selected.parentElement.lastElementChild
  }
  if (state.full) renderFull()
  if (state.aside) showMug(state.selected)
}

function goRight() {
  if (state.selected.nextElementSibling) {
    state.selected = state.selected.nextElementSibling

  } else {
    state.selected = state.selected.parentElement.firstElementChild
  }
  if (state.full) renderFull()
  if (state.aside) showMug(state.selected)
}

function goRandom() {
  const cards = document.querySelectorAll("main .card")
  const index = Math.floor(Math.random() * Math.floor(cards.length))
  state.selected = cards[index]
  if (state.full) renderFull()
  if (state.aside) showMug(state.selected)
}




// Event Handlers


// Display Modes
document.querySelector("header").addEventListener("click", (event) => {
  if (event.timeStamp - state.lastClick > clickThreshold) {
    state.lastClick = event.timeStamp
    const view = event.target.closest("li")
    if (view) {
      if (view.classList.contains("filter")) showFilters()
      if (view.classList.contains("wide")) displayCards()
      if (view.classList.contains("products")) displayProducts()
      if (view.classList.contains("full")) showFull()
    }
  }
})


// Display mug slider
// Click on a mug
document.addEventListener("click", (event) => {
  if (event.timeStamp - state.lastClick > clickThreshold) {
    state.lastClick = event.timeStamp
    if (event.target.classList.contains("card") || event.target.closest(".card")) {
      state.selected = event.target.closest(".card") || event.target
      showMug(state.selected)
    }

    if (event.target.classList.contains("mug") && mugImages[state.selected.id]) {
      const mugImage = mugImages[state.selected.id]
      window.open(`${getMugPage(mugImage)}`, '_blank')
    }

  }
})

// Return from slider
document.querySelector(".fade").addEventListener("click", () => {
  if (event.timeStamp - state.lastClick > clickThreshold) {
    state.lastClick = event.timeStamp
    hideFilters()
    hideMug()
  }
})



// Listen for filter changes
document.querySelector("aside").addEventListener("click", (event) => {
  if (event.timeStamp - state.lastClick > clickThreshold) {
    state.lastClick = event.timeStamp
    if (event.target.closest(".switch")) {
      getFilters()
      displayCards()
    }
  }
})


document.querySelector(".full-screen").addEventListener('click', (event) => {
  if (event.timeStamp - state.lastClick > clickThreshold) {
    state.lastClick = event.timeStamp
    const target = event.target.closest(".arrow") || event.target.closest(".esc") || event.target.closest(".space") || event.target
    console.log(target)
    if (target.classList.contains("left")) {
      goLeft()
    }
    if (target.classList.contains("right")) {
      goRight()
    }
    if (target.classList.contains("space")) {
      goRandom()
    }
    if (target.classList.contains("esc")) {
      hideFull()
    }
  }
})

function enableCardHiding() {
  document.querySelector("main").addEventListener("scroll", () => {
    const cards = document.querySelectorAll(".card")
    const titleBox = document.querySelector("header").getBoundingClientRect()

    // Toggle dissapearing cards
    for (let i = 0; i < cards.length; i++) {
      // console.log(cards[i])
      if (titleBox.y + titleBox.height / 2 > cards[i].getBoundingClientRect().y) {
        cards[i].classList.add("invisible")
      } else {
        cards[i].classList.remove("invisible")
      }
    }
  })
}



// Key presses
document.addEventListener('keydown', (event) => {
  const keyName = event.key;
  console.log('key: ' + keyName);
  if (keyName === 'Escape' || keyName.toLowerCase() === 'q') {
    event.preventDefault();
    hideFull()
    hideMug()
    hideFilters()
  }
  if (keyName === "ArrowRight" || keyName === "ArrowUp") {
    event.preventDefault();
    goRight()
  }
  if (keyName === "ArrowLeft" || keyName === "ArrowDown") {
    event.preventDefault();
    goLeft()
  }
  if (keyName === " ") {
    event.preventDefault();
    goRandom()
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
// showMug(document.querySelector(".card"))
// showFilters()
