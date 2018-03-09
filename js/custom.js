console.log("Loaded custom JS")

function showAside() {

  const aside = document.querySelector("aside")
  const fade = document.querySelector(".fade")

  // Initial fade is set to opacity: 0; z-index: -1
  fade.classList.add("z4")
  window.setTimeout(() => {
    fade.classList.add("show")
  }, 5)

  // Initial aside is set to margin 100%, z-index -1
  aside.classList.add("z5")
  window.setTimeout(() => {
    aside.classList.add("show")
  }, 5)

}

function hideAside() {
  const aside = document.querySelector("aside")
  const fade = document.querySelector(".fade")

  // Initial aside is set to margin 100%, z-index -1
  aside.classList.remove("show")
	window.setTimeout(()=>aside.classList.remove("z5"),500)

  // Initial fade is set to opacity: 0; z-index: -1
  fade.classList.remove("show")
	window.setTimeout(()=>fade.classList.remove("z4"),500)

}
