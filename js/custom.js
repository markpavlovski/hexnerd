console.log("Loaded custom JS")

const state = {
  nav: true,
  fade: false,
  aside: false,
  full: false
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
