const button = document.getElementById('banner__button__music');
const background_sond = document.getElementById("background_sond");

button.addEventListener("click", ()=>{
	
	if (/\ button__play\b/g.test(button.className)){
		button.classList.replace("button__play", "button__pause");
		background_sond.play()
	}else{
		button.classList.replace("button__pause","button__play");
		background_sond.pause();
	}
})