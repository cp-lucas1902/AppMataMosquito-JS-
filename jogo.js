var altura = 0
var largura = 0
var vidas = 1
var tempo = 10

var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?','')

if(nivel === 'normal'){
	criaMosquitoTempo = 1500

}else if(nivel === 'dificil'){
	criaMosquitoTempo = 1000

}else if(nivel === 'checknorris'){
	criaMosquitoTempo = 750
}

function ajustarTamanhoTelaJogo() {
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(altura,largura)
}

ajustarTamanhoTelaJogo()

var cronometro = setInterval(function(){
	tempo -= 1
	if(tempo < 0){
		clearInterval(cronometro)
		clearInterval(criaMosca)
		window.location.href = 'vitoria.html'
	}else{
		document.getElementById('cronometro').innerHTML = tempo
	}
	
},1000)



function posicaoRandomica(){

	if(document.getElementById('mosquito')){
		document.getElementById('mosquito').remove()
		if(vidas > 3){
			window.location.href = 'fim_do_jogo.html'
		}else {
			document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
			vidas++
		}
	}

	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

	// ? = Se For 
	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY
	console.log(posicaoX,posicaoY)

	//Criar Elemento HTML (Ao inves de informar a img no body do app.html , informase aqui)

	var mosquito = document.createElement('img')
	//endereco de onde a img do mosquito esta
	mosquito.src = 'imagens/mosquito.png'
	//Chama o style 
	mosquito.className = mosquitoAleatorio() +' '+ ladoAleatorio()
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'
	mosquito.onclick = function(){
		this.remove()
	}

	document.body.appendChild(mosquito);
}


function mosquitoAleatorio(){

	var classe  = Math.floor(Math.random() * 3)

	switch(classe){
		case 0:
			return 'mosquito1'
		case 1:
			return 'mosquito2'
		case 2:
			return 'mosquito3'
	}
}

function ladoAleatorio(){

	var lado  = Math.floor(Math.random() * 2)

	switch(lado){
		case 0:
			return 'ladoA'
		case 1:
			return 'ladoB'
		
	}
}