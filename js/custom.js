console.log("Loaded custom JS")
window.setTimeout(()=>{
	console.log(document.querySelector('aside'))
	console.log(document.querySelector('.grey-fade'))
	document.querySelector('aside').style = 'opacity: 1'
	document.querySelector('.grey-fade').style = 'opacity: 0'
},1200)

function toggleAside(){
	document.querySelector("aside").classList.toggle("unhidden")
	document.querySelector(".grey-fade").classList.toggle("unhidden")
}
// Trigger for the right side bar:
// document.querySelector("aside").classList.toggle("unhidden")
