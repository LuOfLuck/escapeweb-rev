const buttonMusic = document.getElementById('banner__button__music');
const textButton = buttonMusic.firstElementChild;
const background_sond = document.getElementById("background_sond");
const miStorage = window.localStorage;


buttonMusic.addEventListener("click", ()=>{
	
	if (/\ button__play\b/g.test(buttonMusic.className)){
		buttonMusic.classList.replace("button__play", "button__pause");
		background_sond.play()
		textButton.innerText = "Pause";
		//launchFullScreen(document.documentElement);
	}else{
		buttonMusic.classList.replace("button__pause","button__play");
		background_sond.pause();
		textButton.innerText = "Play";
	}
})

/* ESLOGAN */
if(miStorage["sesion"] == undefined){
	localStorage.setItem('sesion', 0);
}else{
	miStorage["sesion"]++;
}
const eslogan = document.getElementById("eslogan");
const lengthEslogan = bannerHtml.banner.eslogan.length;
const msgEslogan = (lengthEslogan <= miStorage["sesion"]) ? miStorage["sesion"] = 0 : miStorage["sesion"];
eslogan.innerHTML = bannerHtml.banner.eslogan[msgEslogan];

defAlert(bannerHtml.banner.alert)