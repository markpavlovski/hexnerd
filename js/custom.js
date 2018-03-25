'use strict'
console.log("Loaded custom JS")
let data = [{
    name: 'acidic',
    hex: '#ac1d1c',
    description: 'Acidic - #AC1D1C HEX RGB Coffee Mug',
    src: '/images/acidic.jpg'
  },
  {
    name: 'addict',
    hex: '#add1c7',
    description: 'Addict - #ADD1C7 HEX RGB Coffee Mug',
    src: '/images/addict.jpg'
  },
  {
    name: 'asself',
    hex: '#a55e1f',
    description: 'Ass Elf - #A55E1F HEX RGB Coffee Mug',
    src: '/images/asself.jpg'
  },
  {
    name: 'babies',
    hex: '#bab1e5',
    description: 'Babies - #BAB1E5 HEX RGB Coffee Mug',
    src: '/images/babies.jpg'
  },
  {
    name: 'badass',
    hex: '#bada55',
    description: 'Bad Ass - #BADA55 HEX RGB Coffee Mug',
    src: '/images/badass.jpg'
  },
  {
    name: 'badboi',
    hex: '#badb01',
    description: 'Bad Boi - #BADB01 HEX RGB Coffee Mug',
    src: '/images/badboi.jpg'
  },
  {
    name: 'badcat',
    hex: '#badca7',
    description: 'Bad Cat - #BADCA7 HEX RGB Coffee Mug',
    src: '/images/badcat.jpg'
  },
  {
    name: 'basics',
    hex: '#ba51c5',
    description: 'Basics - #BA51C5 HEX RGB Coffee Mug',
    src: '/images/basics.jpg'
  },
  {
    name: 'biased',
    hex: '#b1a5ed',
    description: 'Biased - #B1A5ED HEX RGB Coffee Mug',
    src: '/images/biased.jpg'
  },
  {
    name: 'blessd',
    hex: '#b1e55d',
    description: 'Blessed - #B1E55D HEX RGB Coffee Mug',
    src: '/images/blessd.jpg'
  },
  {
    name: 'booboo',
    hex: '#b00b00',
    description: 'Booboo - #B00B00 HEX RGB Coffee Mug',
    src: '/images/booboo.jpg'
  },
  {
    name: 'booobs',
    hex: '#b000b5',
    description: 'Booobs - #B000B5 HEX RGB Coffee Mug',
    src: '/images/booobs.jpg'
  },
  {
    name: 'bosses',
    hex: '#b055e5',
    description: 'Bosses - #B055E5 HEX RGB Coffee Mug',
    src: '/images/bosses.jpg'
  },
  {
    name: 'catbff',
    hex: '#ca7bff',
    description: 'Cat BFF - #CA7BFF HEX RGB Coffee Mug',
    src: '/images/catbff.jpg'
  },
  {
    name: 'closed',
    hex: '#c105ed',
    description: 'Closed - #C105ED HEX RGB Coffee Mug',
    src: '/images/closed.jpg'
  },
  {
    name: 'coffee',
    hex: '#c0ffee',
    description: 'Coffee - #C0FFEE HEX RGB Coffee Mug',
    src: '/images/coffee.jpg'
  },
  {
    name: 'dababe',
    hex: '#dababe',
    description: 'Da Babe - #DABABE HEX RGB Coffee Mug',
    src: '/images/dababe.jpg'
  },
  {
    name: 'dabble',
    hex: '#dabb1e',
    description: 'Dabble - #DABB1E HEX RGB Coffee Mug',
    src: '/images/dabble.jpg'
  },
  {
    name: 'dabest',
    hex: '#dabe57',
    description: 'Da Best - #DABE57 HEX RGB Coffee Mug',
    src: '/images/dabest.jpg'
  },
  {
    name: 'daboss',
    hex: '#dab055',
    description: 'Da Boss - #DAB055 HEX RGB Coffee Mug',
    src: '/images/daboss.jpg'
  },
  {
    name: 'dadbod',
    hex: '#dadb0d',
    description: 'Dad Bod - #DADB0D HEX RGB Coffee Mug',
    src: '/images/dadbod.jpg'
  },
  {
    name: 'debate',
    hex: '#deba7e',
    description: 'Debate - #DEBA7E HEX RGB Coffee Mug',
    src: '/images/debate.jpg'
  },
  {
    name: 'decode',
    hex: '#dec0de',
    description: 'Decode - #DEC0DE HEX RGB Coffee Mug',
    src: '/images/decode.jpg'
  },
  {
    name: 'defeat',
    hex: '#defea7',
    description: 'Defeat - #DEFEA7 HEX RGB Coffee Mug',
    src: '/images/defeat.jpg'
  },
  {
    name: 'defect',
    hex: '#defec7',
    description: 'Defect - #DEFEC7 HEX RGB Coffee Mug',
    src: '/images/defect.jpg'
  },
  {
    name: 'doable',
    hex: '#d0ab1e',
    description: 'Doable - #D0AB1E HEX RGB Coffee Mug',
    src: '/images/doable.jpg'
  },
  {
    name: 'doodle',
    hex: '#d00d1e',
    description: 'Doodle - #D00D1E HEX RGB Coffee Mug',
    src: '/images/doodle.jpg'
  },
  {
    name: 'effect',
    hex: '#effec7',
    description: 'Effect - #EFFEC7 HEX RGB Coffee Mug',
    src: '/images/effect.jpg'
  },
  {
    name: 'faeces',
    hex: '#faeces',
    description: 'Faeces - #FAECE5 HEX RGB Coffee Mug',
    src: '/images/faeces.jpg'
  },
  {
    name: 'fatass',
    hex: '#fatass',
    description: 'Fat Ass - #FA7A55 HEX RGB Coffee Mug',
    src: '/images/fatass.jpg'
  },
  {
    name: 'fellas',
    hex: '#fellas',
    description: 'Fellas - #FE11A5 HEX RGB Coffee Mug',
    src: '/images/fellas.jpg'
  },
  {
    name: 'fooled',
    hex: '#fooled',
    description: 'Fooled - #F001ED HEX RGB Coffee Mug',
    src: '/images/fooled.jpg'
  },
  {
    name: 'icetea',
    hex: '#icetea',
    description: 'Ice Tea - #1CE7EA HEX RGB Coffee Mug',
    src: '/images/icetea.jpg'
  },
  {
    name: 'idcdie',
    hex: '#idcdie',
    description: 'I Dont Care, Die - #1DCD1E HEX RGB Coffee Mug',
    src: '/images/idcdie.jpg'
  },
  {
    name: 'ladies',
    hex: '#ladies',
    description: 'Ladies - #1AD1E5 HEX RGB Coffee Mug',
    src: '/images/ladies.jpg'
  },
  {
    name: 'lolcat',
    hex: '#lolcat',
    description: 'Lol Cat - #101CA7 HEX RGB Coffee Mug',
    src: '/images/lolcat.jpg'
  },
  {
    name: 'obsess',
    hex: '#obsess',
    description: 'Obsess - #0B5E55 HEX RGB Coffee Mug',
    src: '/images/obsess.jpg'
  },
  {
    name: 'offset',
    hex: '#offset',
    description: 'Offset - #0FF5E7 HEX RGB Coffee Mug',
    src: '/images/offset.jpg'
  },
  {
    name: 'oldest',
    hex: '#oldest',
    description: 'Oldest - #01DE57 HEX RGB Coffee Mug',
    src: '/images/oldest.jpg'
  },
  {
    name: 'sadist',
    hex: '#sadist',
    description: 'Sadist - #5AD157 HEX RGB Coffee Mug',
    src: '/images/sadist.jpg'
  },
  {
    name: 'safest',
    hex: '#safest',
    description: 'Safest - #5AFE57 HEX RGB Coffee Mug',
    src: '/images/safest.jpg'
  },
  {
    name: 'select',
    hex: '#select',
    description: 'Select - #5E1EC7 HEX RGB Coffee Mug',
    src: '/images/select.jpg'
  },
  {
    name: 'socool',
    hex: '#socool',
    description: 'So Cool - #50C001 HEX RGB Coffee Mug',
    src: '/images/socool.jpg'
  },
  {
    name: 'solace',
    hex: '#solace',
    description: 'Solace - #501ACE HEX RGB Coffee Mug',
    src: '/images/solace.jpg'
  },
  {
    name: 'toobad',
    hex: '#toobad',
    description: 'Too Bad - #700BAD HEX RGB Coffee Mug',
    src: '/images/toobad.jpg'
  },
  {
    name: 'delete',
    hex: '#de1e7e',
    description: 'Delete - #DE1E7E HEX RGB Coffee Mug',
    src: '/images/delete.jpg'
  },
]
let cardOpacity = 0.5;
let cardTemplate = document.createElement("div")
cardTemplate.appendChild(document.createElement("div"))
cardTemplate.classList.add("card")
cardTemplate.firstElementChild.classList.add("subcard")
cardTemplate.firstElementChild.innerHTML = `
<h1>$8.99</h1>
<h2><i class="fas fa-shopping-cart"></i> SHOP ON ETSY</h2>
`
cardTemplate.appendChild(document.createElement("div"))
cardTemplate.lastElementChild.classList.add("greyout")


let main = document.querySelector("main")
for (let i = 0; i < data.length; i++) {
  let card = cardTemplate.cloneNode(true);
  card.id = data[i].name
  card.setAttribute("style", `background-image: url("${data[i].src}"); background-size: cover;`)
  console.log(card)
  main.appendChild(card)
}
for (let i = 0; i < 5 - data.length % 5; i++) {
  main.appendChild(cardTemplate.cloneNode(true))
}
