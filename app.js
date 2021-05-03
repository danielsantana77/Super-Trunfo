var cartaPaulo = {
    nome: "Seiya de Pegaso",
    imagem: "https://i.pinimg.com/originals/c2/1a/ac/c21aacd5d092bf17cfff269091f04606.jpg",
    atributos: {
        ataque: 80,
        defesa: 60,
        magia: 90
    }
}

var cartaRafa = {
    nome: "Bulbasauro",
    imagem: "http://4.bp.blogspot.com/-ZoCqleSAYNc/UQgfMdobjUI/AAAAAAAACP0/s_iiWjmw2Ys/s1600/001Bulbasaur_Dream.png",
    atributos: {
        ataque: 70,
        defesa: 65,
        magia: 85
    }
}

var cartaGui = {
    nome: "Lorde Darth Vader",
    imagem: "https://images-na.ssl-images-amazon.com/images/I/51VJBqMZVAL._SX328_BO1,204,203,200_.jpg",
    atributos: {
        ataque: 88,
        defesa: 62,
        magia: 90
    }
}

var cartaLol = {
    nome: "Caitlyn",
    imagem: "http://1.bp.blogspot.com/-K7CbqWc1-p0/VLc98v85s0I/AAAAAAAABqk/-ZB684VVHbg/s1600/Caitlyn_OriginalSkin.jpg",
    atributos: {
        ataque: 95,
        defesa: 40,
        magia: 10
    }
}

var cartaNaruto = {
    nome: "Naruto",
    imagem: "https://conteudo.imguol.com.br/c/entretenimento/16/2017/06/27/naruto-1498593686428_v2_450x337.png",
    atributos: {
        ataque: 80,
        defesa: 60,
        magia: 100
    }
}

var cartaHarry = {
    nome: "Harry Potter",
    imagem: "https://sm.ign.com/ign_br/screenshot/default/89ff10dd-aa41-4d17-ae8f-835281ebd3fd_49hp.jpg",
    atributos: {
        ataque: 70,
        defesa: 50,
        magia: 95
    }
}

var cartaBatman = {
    nome: "Batman",
    imagem: "https://assets.b9.com.br/wp-content/uploads/2020/09/Batman-issue86-heder-1280x677.jpg",
    atributos: {
        ataque: 95,
        defesa: 70,
        magia: 70
    }
}

var cartaMarvel = {
    nome: "Capitã Marvel",
    imagem: "https://cinepop.com.br/wp-content/uploads/2018/09/capitamarvel21.jpg",
    atributos: {
        ataque: 90,
        defesa: 80,
        magia: 80
    }
}

var cartaMaquina
var cartaJogador
var cartas = [cartaPaulo, cartaRafa, cartaGui, cartaLol, cartaNaruto, cartaHarry, cartaBatman, cartaMarvel]
var cartasRemovidas = []
//            0           1           2          3         4            5            6           7     

var pontosJogador = 0
var pontosMaquina = 0

atualizaPlacar()
atualizaQuantidadeDeCartas()

function atualizaPlacar(){
   var jogador = "Jogador"

  var divPlacar = document.getElementById('placar')
  var html = `${jogador} ` + pontosJogador + " / " + pontosMaquina + " Máquina"
    
  divPlacar.innerHTML = html
  
}


function sortearCarta() {
    
  
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]    
    cartasRemovidas.push(cartaMaquina)
    cartas.splice(numeroCartaMaquina,1)


    
    var numeroCartaJogador = parseInt(Math.random() * cartas.length)    
    cartaJogador = cartas[numeroCartaJogador]
    cartasRemovidas.push(cartaJogador)
    cartas.splice(numeroCartaJogador,1)
   

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false
    
    exibeCartaJogador()

}


function exibeCartaJogador() {
   
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function obtemAtributoSelecionado() {

    var radioAtributo = document.getElementsByName('atributo')
    
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
    return false;
}

function jogar() {
    
    
      
  
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()

    if(atributoSelecionado == false){
        alert("Escolha o Atributo para Jogar !!")
        return;
    }

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Venceu</p>'
        pontosJogador++
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Perdeu</p>'
        pontosMaquina++
    } else {
        htmlResultado = '<p class="resultado-final">Empatou</p>'
    }
    
    if(cartas.length == 0){
        
      
      var divBotaoSortear = document.getElementById('btnSortear');
      var divBotaoJogarNovamente = document.getElementById('btnJogarNovamente')
      
      
        alert("FIM DE JOGO")



      if(pontosJogador > pontosMaquina){
          htmlResultado = '<p class="resultado-final">Voce Ganhou o jogo !!</p>'
      }else if (pontosJogador < pontosMaquina){
          htmlResultado = '<p class="resultado-final">Voce Perdeu o jogo</p>'
      }else {
        htmlResultado = '<p class="resultado-final">Houve Empate no jogo</p>'
      }

      divBotaoSortear.style.display = 'none'
      divBotaoJogarNovamente.style.display = 'block'
      
      
    }else{  
        document.getElementById('btnProximaRodada').disabled = false
      
    }
    
    divResultado.innerHTML = htmlResultado
    document.getElementById('btnJogar').disabled = true
    
    
    atualizaPlacar()
    exibeCartaMaquina()
    atualizaQuantidadeDeCartas()
}

function exibeCartaMaquina() {
  
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        console.log(atributo)
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
      
    }

    var html = "<div id='opcoes' class='carta-status --spacing'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}
function atualizaQuantidadeDeCartas(){
  
    var divQuantidadeCartas = document.getElementById('quantidade-cartas')
    var html = "Quantidade de cartas no jogo: " + cartas.length
    
    divQuantidadeCartas.innerHTML = html
    
  }


function proximaRodada(){
    
    var divCartas = document.getElementById('cartas')
    
    divCartas.innerHTML = `<div id="carta-jogador" class="carta"> </div> <div id = "carta-maquina" class = "carta"> </div>`
    
    document.getElementById('btnSortear').disabled = false
    document.getElementById('btnJogar').disabled = true
    document.getElementById('btnProximaRodada').disabled = true
  
    var divResultado = document.getElementById('resultado')
    divResultado.innerHTML = ""
}


// Função que limpa os campos das cartas, atribui o array de cartas Removidas a variavel cartas
// reniciando o jogo

function jogarNovamente(){

    var divBotaoSortear = document.getElementById('btnSortear');
    var divBotaoJogarNovamente = document.getElementById('btnJogarNovamente')
    var divResultado = document.getElementById('resultado')
    var divCartas = document.getElementById('cartas')
    
    divCartas.innerHTML = `<div id="carta-jogador" class="carta"> </div> <div id = "carta-maquina" class = "carta"> </div>`

    console.log(cartas);
    console.log(cartasRemovidas)

    cartas = cartasRemovidas;
    cartasRemovidas = []
    divBotaoSortear.style.display = 'block'
    divBotaoSortear.disabled = false;
    divBotaoJogarNovamente.style.display = 'none'

    divResultado.innerHTML = ""
    
    
}