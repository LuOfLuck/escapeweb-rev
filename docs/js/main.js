const buttonMusic = document.getElementById('banner__button__music');
const background_sond = document.getElementById("background_sond");
const buttonAlert = document.getElementById('button__alert');
const contAlert = document.getElementById('cont__alert');
const textButton = buttonMusic.firstElementChild;
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

buttonAlert.addEventListener("click", ()=>{
	contAlert.classList.add("main__alert--active");
	setTimeout(()=>{
		contAlert.classList.remove("main__alert--active");
	}, 5000);
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
