/* ALERTAS */
function defAlert(arrayMsg){
	const buttonAlert = document.getElementById('button__alert');
	const contAlert = document.getElementById('cont__alert');
	const msgAlert = contAlert.firstElementChild;
	var alertNum = 0;
	msgAlert.innerHTML = arrayMsg[alertNum];
	alertVilite = true;
	var lengthAlert = arrayMsg.length - 1;
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
					msgAlert.innerHTML = arrayMsg[alertNum];
				},200)
			}, 3000);
		}
	})
}
