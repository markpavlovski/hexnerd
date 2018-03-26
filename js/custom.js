'use strict'
let data = [{
    name: 'acidic',
    hex: '#ac1d1c',
    description: 'Acidic - #AC1D1C HEX RGB Coffee Mug',
    src: '/images/acidic.jpg',
    rank: 46
  },
  {
    name: 'addict',
    hex: '#add1c7',
    description: 'Addict - #ADD1C7 HEX RGB Coffee Mug',
    src: '/images/addict.jpg',
    rank: 7
  },
  {
    name: 'asself',
    hex: '#a55e1f',
    description: 'Ass Elf - #A55E1F HEX RGB Coffee Mug',
    src: '/images/asself.jpg',
    rank: 45
  },
  {
    name: 'babies',
    hex: '#bab1e5',
    description: 'Babies - #BAB1E5 HEX RGB Coffee Mug',
    src: '/images/babies.jpg',
    rank: 17
  },
  {
    name: 'badass',
    hex: '#bada55',
    description: 'Bad Ass - #BADA55 HEX RGB Coffee Mug',
    src: '/images/badass.jpg',
    rank: 2
  },
  {
    name: 'badboi',
    hex: '#badb01',
    description: 'Bad Boi - #BADB01 HEX RGB Coffee Mug',
    src: '/images/badboi.jpg',
    rank: 16
  },
  {
    name: 'badcat',
    hex: '#badca7',
    description: 'Bad Cat - #BADCA7 HEX RGB Coffee Mug',
    src: '/images/badcat.jpg',
    rank: 24
  },
  {
    name: 'basics',
    hex: '#ba51c5',
    description: 'Basics - #BA51C5 HEX RGB Coffee Mug',
    src: '/images/basics.jpg',
    rank: 10
  },
  {
    name: 'biased',
    hex: '#b1a5ed',
    description: 'Biased - #B1A5ED HEX RGB Coffee Mug',
    src: '/images/biased.jpg',
    rank: 15
  },
  {
    name: 'blessd',
    hex: '#b1e55d',
    description: 'Blessed - #B1E55D HEX RGB Coffee Mug',
    src: '/images/blessd.jpg',
    rank: 8
  },
  {
    name: 'booboo',
    hex: '#b00b00',
    description: 'Booboo - #B00B00 HEX RGB Coffee Mug',
    src: '/images/booboo.jpg',
    rank: 25
  },
  {
    name: 'booobs',
    hex: '#b000b5',
    description: 'Booobs - #B000B5 HEX RGB Coffee Mug',
    src: '/images/booobs.jpg',
    rank: 14
  },
  {
    name: 'bosses',
    hex: '#b055e5',
    description: 'Bosses - #B055E5 HEX RGB Coffee Mug',
    src: '/images/bosses.jpg',
    rank: 35
  },
  {
    name: 'catbff',
    hex: '#ca7bff',
    description: 'Cat BFF - #CA7BFF HEX RGB Coffee Mug',
    src: '/images/catbff.jpg',
    rank: 4
  },
  {
    name: 'closed',
    hex: '#c105ed',
    description: 'Closed - #C105ED HEX RGB Coffee Mug',
    src: '/images/closed.jpg',
    rank: 36
  },
  {
    name: 'coffee',
    hex: '#c0ffee',
    description: 'Coffee - #C0FFEE HEX RGB Coffee Mug',
    src: '/images/coffee.jpg',
    rank: 1
  },
  {
    name: 'dababe',
    hex: '#dababe',
    description: 'Da Babe - #DABABE HEX RGB Coffee Mug',
    src: '/images/dababe.jpg',
    rank: 26
  },
  {
    name: 'dabble',
    hex: '#dabb1e',
    description: 'Dabble - #DABB1E HEX RGB Coffee Mug',
    src: '/images/dabble.jpg',
    rank: 37
  },
  {
    name: 'dabest',
    hex: '#dabe57',
    description: 'Da Best - #DABE57 HEX RGB Coffee Mug',
    src: '/images/dabest.jpg',
    rank: 34
  },
  {
    name: 'daboss',
    hex: '#dab055',
    description: 'Da Boss - #DAB055 HEX RGB Coffee Mug',
    src: '/images/daboss.jpg',
    rank: 3
  },
  {
    name: 'dadbod',
    hex: '#dadb0d',
    description: 'Dad Bod - #DADB0D HEX RGB Coffee Mug',
    src: '/images/dadbod.jpg',
    rank: 9
  },
  {
    name: 'debate',
    hex: '#deba7e',
    description: 'Debate - #DEBA7E HEX RGB Coffee Mug',
    src: '/images/debate.jpg',
    rank: 44
  },
  {
    name: 'decode',
    hex: '#dec0de',
    description: 'Decode - #DEC0DE HEX RGB Coffee Mug',
    src: '/images/decode.jpg',
    rank: 12
  },
  {
    name: 'defeat',
    hex: '#defea7',
    description: 'Defeat - #DEFEA7 HEX RGB Coffee Mug',
    src: '/images/defeat.jpg',
    rank: 18
  },
  {
    name: 'defect',
    hex: '#defec7',
    description: 'Defect - #DEFEC7 HEX RGB Coffee Mug',
    src: '/images/defect.jpg',
    rank: 13
  },
  {
    name: 'doable',
    hex: '#d0ab1e',
    description: 'Doable - #D0AB1E HEX RGB Coffee Mug',
    src: '/images/doable.jpg',
    rank: 19
  },
  {
    name: 'doodle',
    hex: '#d00d1e',
    description: 'Doodle - #D00D1E HEX RGB Coffee Mug',
    src: '/images/doodle.jpg',
    rank: 29
  },
  {
    name: 'effect',
    hex: '#effec7',
    description: 'Effect - #EFFEC7 HEX RGB Coffee Mug',
    src: '/images/effect.jpg',
    rank: 28
  },
  {
    name: 'faeces',
    hex: '#faece5',
    description: 'Faeces - #FAECE5 HEX RGB Coffee Mug',
    src: '/images/faeces.jpg',
    rank: 27
  },
  {
    name: 'fatass',
    hex: '#fa7a55',
    description: 'Fat Ass - #FA7A55 HEX RGB Coffee Mug',
    src: '/images/fatass.jpg',
    rank: 5
  },
  {
    name: 'fellas',
    hex: '#fe11a5',
    description: 'Fellas - #FE11A5 HEX RGB Coffee Mug',
    src: '/images/fellas.jpg',
    rank: 20
  },
  {
    name: 'fooled',
    hex: '#f001ed',
    description: 'Fooled - #F001ED HEX RGB Coffee Mug',
    src: '/images/fooled.jpg',
    rank: 38
  },
  {
    name: 'icetea',
    hex: '#1ce7ea',
    description: 'Ice Tea - #1CE7EA HEX RGB Coffee Mug',
    src: '/images/icetea.jpg',
    rank: 30
  },
  {
    name: 'idcdie',
    hex: '#1dcd1e',
    description: 'I Dont Care, Die - #1DCD1E HEX RGB Coffee Mug',
    src: '/images/idcdie.jpg',
    rank: 23
  },
  {
    name: 'ladies',
    hex: '#1ad1e5',
    description: 'Ladies - #1AD1E5 HEX RGB Coffee Mug',
    src: '/images/ladies.jpg',
    rank: 21
  },
  {
    name: 'lolcat',
    hex: '#101ca7',
    description: 'Lol Cat - #101CA7 HEX RGB Coffee Mug',
    src: '/images/lolcat.jpg',
    rank: 22
  },
  {
    name: 'obsess',
    hex: '#0b5e55',
    description: 'Obsess - #0B5E55 HEX RGB Coffee Mug',
    src: '/images/obsess.jpg',
    rank: 6
  },
  {
    name: 'offset',
    hex: '#0ff5e7',
    description: 'Offset - #0FF5E7 HEX RGB Coffee Mug',
    src: '/images/offset.jpg',
    rank: 33
  },
  {
    name: 'oldest',
    hex: '#01de57',
    description: 'Oldest - #01DE57 HEX RGB Coffee Mug',
    src: '/images/oldest.jpg',
    rank: 40
  },
  {
    name: 'sadist',
    hex: '#5ad157',
    description: 'Sadist - #5AD157 HEX RGB Coffee Mug',
    src: '/images/sadist.jpg',
    rank: 41
  },
  {
    name: 'safest',
    hex: '#5afe57',
    description: 'Safest - #5AFE57 HEX RGB Coffee Mug',
    src: '/images/safest.jpg',
    rank: 42
  },
  {
    name: 'select',
    hex: '#5e1ec7',
    description: 'Select - #5E1EC7 HEX RGB Coffee Mug',
    src: '/images/select.jpg',
    rank: 43
  },
  {
    name: 'socool',
    hex: '#50c001',
    description: 'So Cool - #50C001 HEX RGB Coffee Mug',
    src: '/images/socool.jpg',
    rank: 32
  },
  {
    name: 'solace',
    hex: '#501ace',
    description: 'Solace - #501ACE HEX RGB Coffee Mug',
    src: '/images/solace.jpg',
    rank: 39
  },
  {
    name: 'toobad',
    hex: '#700bad',
    description: 'Too Bad - #700BAD HEX RGB Coffee Mug',
    src: '/images/toobad.jpg',
    rank: 31
  },
  {
    name: 'delete',
    hex: '#de1e7e',
    description: 'Delete - #DE1E7E HEX RGB Coffee Mug',
    src: '/images/delete.jpg',
    rank: 11
  },
  {
    name: '000000',
    hex: '#000000',
    description: 'Black - #000000 HEX RGB Coffee Mug',
    src: '/images/000000.jpg',
    rank: 47
  },
  {
    name: 'ffffff',
    hex: '#ffffff',
    description: 'White - #FFFFFF HEX RGB Coffee Mug',
    src: '/images/ffffff.jpg',
    rank: 48
  },
  {
    name: 'ff0000',
    hex: '#ff0000',
    description: 'Red - #FF0000 HEX RGB Coffee Mug',
    src: '/images/ff0000.jpg',
    rank: 49
  },
  {
    name: '00ff00',
    hex: '#00ff00',
    description: 'Green - #00FF00 HEX RGB Coffee Mug',
    src: '/images/00ff00.jpg',
    rank: 50
  },
  {
    name: '0000ff',
    hex: '#0000ff',
    description: 'Blue - #0000FF HEX RGB Coffee Mug',
    src: '/images/0000ff.jpg',
    rank: 51
  },
]
data.sort((a, b) => a.rank - b.rank)
let linkedData = data.map((item) => {
  let result = [item.name, item.hex, null]
  for (let key in etsyData.results) {
    if (etsyData.results[key].title.toUpperCase().indexOf(item.hex.toUpperCase()) > -1) {
      result[2] = etsyData.results[key].url
    }
  }
  return result
})


let windowWidth = () => {
  let size = "s"
  if (window.innerWidth > 600) size = "m"
  if (window.innerWidth > 1100) size = "l"
  if (window.innerWidth > 1500) size = "xl"
  return size
}

function createCardTemplate() {
  let cardOpacity = 0.5;
  let cardTemplateLink = document.createElement("a")
  let cardTemplate = document.createElement("div")
  cardTemplate.classList.add("card")
  cardTemplate.appendChild(document.createElement("div"))
  cardTemplate.firstElementChild.classList.add("subcard")
  cardTemplate.firstElementChild.innerHTML = `
    <h1>$8.99</h1>
    <h2><i class="fas fa-shopping-cart"></i> SHOP ON ETSY</h2>
  `
  cardTemplate.appendChild(document.createElement("div"))
  cardTemplate.lastElementChild.classList.add("greyout")
  return {
    card: cardTemplate,
    link: cardTemplateLink
  }
}


function populateCards(template) {
  let main = document.querySelector("main")
  console.log("\n\n\n (!!) Greetings fellow hex nerd. You've come to the right place.\n\n\n\n")
  for (let i = 0; i < data.length; i++) {
    console.log(data[i].name)
    let link = template.link.cloneNode(true);
    let card = template.card.cloneNode(true);
    link.appendChild(card)
    card.id = data[i].name
    card.setAttribute("style", `background-image: url("${data[i].src}"); background-size: cover;`)
    link.setAttribute("href", linkedData[i][2])
    link.setAttribute("target", "_blank")
    main.appendChild(link)
  }
}
populateCards(createCardTemplate())

function setFillers(template) {
  let main = document.querySelector("main")
  while (main.lastElementChild.classList.contains("filler")) {
    main.removeChild(main.lastElementChild)
  }
  let n = 0
  if (windowWidth() === "m") n = 3
  if (windowWidth() === "l") n = 5
  if (windowWidth() === "xl") n = 7
  for (let i = 0; i < n - data.length % n; i++) {
    let filler = template.card.cloneNode(true)
    filler.classList.add("filler")
    main.appendChild(filler)
  }
}
setFillers(createCardTemplate())


function setNavText() {
  let navText = document.querySelector("nav p")
  if (windowWidth() === "s") navText.innerHTML = "HEXNERD DESIGN &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Get mugs on etsy - $8.99"
  if (windowWidth() === "m") navText.innerHTML = "HEXNERD DESIGN - HEX colors that spell out words on mugs"
  if (windowWidth() === "l" || windowWidth() === "xl") navText.innerHTML = "We scraped the dictionary for the best HEX colors that spell out words - Then we put them on mugs!"
}
setNavText()


let currentWindowWidth = windowWidth()
window.addEventListener("resize", () => {
  if (currentWindowWidth !== windowWidth()) {
    currentWindowWidth = windowWidth()
    setNavText()
    setFillers(createCardTemplate())
  }
})
