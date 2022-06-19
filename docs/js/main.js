
const musicEfect = document.getElementById("music__efect");
const musicSond = document.getElementById("music__sond");
const backgroundSond = document.getElementById("background_sond");
musicEfect.addEventListener("click", ()=>{
	if (/\ music__element__efect--active\b/g.test(musicEfect.className)){
		musicEfect.classList.remove("music__element__efect--active");
		//background_sond.play()
		//launchFullScreen(document.documentElement);
	}else{
		musicEfect.classList.add("music__element__efect--active");
		//background_sond.pause();
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


/* ALERTAS */
const buttonAlert = document.getElementById('button__alert');
const contAlert = document.getElementById('cont__alert');
const msgAlert = contAlert.firstElementChild;
var alertNum = 0;
msgAlert.innerHTML = parrafos.banner.alert[alertNum];
alertVilite = true;
var lengthAlert = parrafos.banner.alert.length - 1;
buttonAlert.addEventListener("click", ()=>{
	if(alertVilite){
		alertVilite = false;
		contAlert.classList.add("main__alert--active");
		alertNum = (lengthAlert <= alertNum) ? alertNum = 0: alertNum += 1;
		console.log(alertNum)
		setTimeout(()=>{
			contAlert.classList.remove("main__alert--active");
			alertVilite = true;
			setTimeout(()=>{
				msgAlert.innerHTML = parrafos.banner.alert[alertNum];
			},200)
		}, 3000);
	}
})


function launchFullScreen(element) {
  if(element.requestFullScreen) {
    element.requestFullScreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullScreen) {
    element.webkitRequestFullScreen();
  }
}
 function cancelFullScreen() {
     if(document.cancelFullScreen) {
         document.cancelFullScreen();
     } else if(document.mozCancelFullScreen) {
         document.mozCancelFullScreen();
     } else if(document.webkitCancelFullScreen) {
         document.webkitCancelFullScreen();
     }
 }
