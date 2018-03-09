console.log("Loaded custom JS")
window.setTimeout(()=>{
	console.log(document.querySelector('aside'))
	document.querySelector('aside').style = 'opacity: 1'
},1200)
