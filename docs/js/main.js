const chatCont = document.getElementById("chat")
const miStorage = window.localStorage;
if(miStorage["lv"] == undefined){
	localStorage.setItem('lv', 0);
}	
if(miStorage["lv-status"] == undefined){
	localStorage.setItem('lv-status', 0);
}	
if(miStorage["status"] == undefined || miStorage["lv-status"] == 0){
	localStorage.setItem('status', 0);
}

const contLv = contenido.lv[miStorage["lv"]];
function escribir(string){
	chatCont.insertAdjacentHTML('beforeend', `
		<div class="content__div__element"><p class="p__dialogo p--koho"> ${string} </p></div>
	`)	
	
}
function addButton(objButton, idButton){
	let buttonCont = document.getElementById(idButton);
	buttonCont.insertAdjacentHTML('beforeend', `
		<button onclick="buttonClickChat(${objButton.status}, '${objButton.msg}')" class="button button--option">${objButton.msg}</button>
	`)

}
function buttonClickChat(statuB, msg){
	miStorage["status"] = statuB;
	chatCont.insertAdjacentHTML('beforeend', `
		<div class="content__div__element"><p class="p__dialogo p__dialogo--you p--koho">${msg}</p></div>
	`)
	var chatButtons = chatCont.getElementsByClassName("content__div__option")
	console.log(chatButtons)
	console.log("chatButtons")
	for (button of chatButtons){
		button.classList.add("content__div__option--none")
	}
	tabMostrar();
	setTimeout(()=>chatCont.lastElementChild.classList.add("content__div__element--aparecer"), 300)	
	
}	
function addNarracion(string){
	chatCont.insertAdjacentHTML('beforeend', `
		<div class="content__div__element"><p class="p__narro p--koho"> ${string} </p></div>

	`)	

}
function tabMostrar(){
	setTimeout(()=>tab.classList.remove("content__div__historia__tapa--desactive"), 100);
}

var contadorIdButton = 0;
var statusChatContador = 0;
function agregarElementosChat(element){
	try{
		if(element.narracion){
			addNarracion(element.narracion[miStorage["status"]]);
			tabMostrar()
		}else if(element.mensaje || element[miStorage["status"]]){
			mensaje = (element[miStorage["status"]])?element[miStorage["status"]]:element.mensaje;
			escribir(mensaje);
			tabMostrar()
		}else if (element.button){
			var idButtonVar = `button--${contadorIdButton}`; 
			chatCont.insertAdjacentHTML('beforeend', `
				<div class="content__div__option">
					<div id="${idButtonVar}" class="content__div__option centrar">
					</div>
				</div>
			`);
			element.button.forEach((buttonObj)=> {
				if(buttonObj.respuesta  || buttonObj[miStorage["status"]]){
					addButton(buttonObj.respuesta  || buttonObj[miStorage["status"]], idButtonVar)
				}
			});
		}else{	
			agregarElementosChat(contLv[statusChatContador + 1])
		}
		statusChatContador++;
	}catch{
		alert("iniciar funcion");
	}
};
const tab = document.getElementById("tab");
tab.addEventListener("click", (e)=>{
	let cont
	chatCont.scrollTo(0, chatCont.scrollHeight);
	tab.classList.add("content__div__historia__tapa--desactive");
	tab.classList.add("content__div__historia__tapa--p");
	setTimeout(()=>agregarElementosChat(contLv[statusChatContador]), 100)
	setTimeout(()=>chatCont.lastElementChild.classList.add("content__div__element--aparecer"), 300)	
	
})