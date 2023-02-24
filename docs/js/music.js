const musicEfect = document.getElementById("music__efect");
const musicSond = document.getElementById("music__sond");
const backgroundSond = document.getElementById("background_sond");
musicEfect.addEventListener("click", ()=>{
	if (/\ music__element__efect--active\b/g.test(musicEfect.className)){
		musicEfect.classList.remove("music__element__efect--active");
		background_sond.play()
		//launchFullScreen(document.documentElement);
	}else{
		musicEfect.classList.add("music__element__efect--active");
		background_sond.pause();
	}

})
musicSond.addEventListener("click", ()=>{
	if (/\ music__element__sond--active\b/g.test(musicSond.className)){
		musicSond.classList.remove("music__element__sond--active");
		//launchFullScreen(document.documentElement);
		backgroundSond.pause();
	}else{
		musicSond.classList.add("music__element__sond--active");
		backgroundSond.play()
	}

})

