/*
    <div class="game">
        
        <ul class="tower" id="tower1">
            <li class="stick">
                <li class="disc" id="disc4"> 4 </li>
                <li class="disc" id="disc3"> 3 </li>
                <li class="disc" id="disc2"> 2 </li>
                <li class="disc" id="disc1"> 1 </li>
            </li> 
        </ul>

        <ul class="tower" id="tower2">
            <li class="stick"></li>
        </ul>

        <ul class="tower" id="tower2">
            <li class="stick"></li>
        </ul>

    </div>
    */
//criar uma variável para armazenar o local de trabalho
const game = document.querySelector(".game");
const body = document.querySelector("body");
let vitoria = document.createElement("div");
let euAvisei = document.querySelectorAll("h1")
vitoria.classList.add("vitoria")
body.appendChild(vitoria);

function criarTorres(){
   
    for(let i = 0; i < 3; i++){
        //criar torres e bastões
        // let tower = document.createElement("ul");
        let stick = document.createElement("div");

        //adicionar classe nos bastões e nas torres
        stick.classList.add("stick");
        // tower.classList.add("tower");
        stick.id =`tower${i+1}`
    
        // adicionar bastões nas torres e as torres nos games
        // tower.appendChild(stick);
        game.appendChild(stick);
    }   
}
criarTorres();
const stick1 = document.querySelector("#tower1");
const stick2 = document.querySelector("#tower2");
const stick3 = document.querySelector("#tower3");
// criando discos
function crinadoDiscos(num){
    
    for(let i = num; i >= 1; i--){
        
        let disco = document.createElement("div");
        
        disco.classList.add("disc");
        // disco.innerText = i
        disco.id = `disc${i}`;
        
        stick1.appendChild(disco);
    }
}

// declarando botões
const resetGame = document.getElementById("resetButton");
const botaoIniciante = document.getElementById("buttonEasy");
const botaoExperiente = document.getElementById("buttonMedium");
const botaoMestre = document.getElementById("buttonHard");
//      ---------------- CRIANDO DIFICULDADES ------------------
const bastoes = document.querySelector(".stick");
// dificuldades
botaoIniciante.addEventListener("click", () => {
        while (stick1.firstChild) {
            stick1.removeChild(stick1.firstChild);
        }
    crinadoDiscos(4)
    while (stick2.firstChild) {
        stick2.removeChild(stick2.firstChild);
    }
    while (stick3.firstChild) {
        stick3.removeChild(stick3.firstChild);
    }
    contador = 0
    indice.innerText = contador  
});
botaoExperiente.addEventListener("click",() => {
    while (stick1.firstChild) {
        stick1.removeChild(stick1.firstChild);
    }
    while (stick2.firstChild) {
        stick2.removeChild(stick2.firstChild);
    }
    while (stick3.firstChild) {
        stick3.removeChild(stick3.firstChild);
    }
    contador = 0
    indice.innerText = contador  
    crinadoDiscos(6)   
});
botaoMestre.addEventListener("click", () => {
    while (stick1.firstChild) {
        stick1.removeChild(stick1.firstChild);
    }
    while (stick2.firstChild) {
        stick2.removeChild(stick2.firstChild);
    }
    while (stick3.firstChild) {
        stick3.removeChild(stick3.firstChild);
    }
    contador = 0
    indice.innerText = contador  
    crinadoDiscos(8) 
});
resetGame.addEventListener("click", () =>{
    while (stick1.firstChild) {
        stick1.removeChild(stick1.firstChild);
    }
    while (stick2.firstChild) {
        stick2.removeChild(stick2.firstChild);
    }
    while (stick3.firstChild) {
        stick3.removeChild(stick3.firstChild);
    }
    contador = 0
    indice.innerText = contador  
    game.style = "display: flex;"
    vitoria.style = "display: none;"
   
});
//localizando os discos
// let discos = document.getElementsByClassName("disc")
//Eventos

// let discos = stick1.lastElementChild

// stick1.addEventListener("click", selecionaDrisco);

// function selecionaDrisco(event){
    
//     discos = event.target
//     if(discos.classList == "disc"){
//         discos.classList.add("destaque")
//     } else{
//         discos.classList.remove("destaque")
//     }
    
//     if(discos.clientWidth > 190){
//      stick2.appendChild(discos)   
//     }
// }

let arrVazio = []

stick1.addEventListener("click", (event) =>{
    evento(event);
});

stick2.addEventListener("click", (event) =>{
    evento(event);
});

stick3.addEventListener("click", (event) =>{
    evento(event);
});

let result = []

let contador = 0
let indice = document.getElementById("num_mov")

function evento(event){
    arrVazio.push(event.currentTarget)
    
      
        // arrVazio[0].lastElementChild.classList.add("destaque")

    
    console.log(arrVazio[0])
    if(arrVazio.length === 2){
       movimento(arrVazio[0], arrVazio[1]);
       result += arrVazio[0] + arrVazio[1]
       contador += result[0].length 
       indice.innerText = contador   
       arrVazio = []
       console.log(contador)
       console.log(arrVazio[0])
    }

    

};


function movimento(origem, destino){
    
    
    let disco1 = origem.lastElementChild
    
    // disco1.classList.remove("destaque")

    let disco2 = destino.lastElementChild

    console.log(disco1)
    console.log(disco2)
   if(disco1 !== null && disco2 === null || (disco2 !== null && disco1 !== null && disco1.clientWidth < disco2.clientWidth)){ 
        // console.log(discos)
        
        destino.appendChild(disco1);
        
   }
    
    
    if(stick1.lastElementChild === null && stick2.lastElementChild === null && stick3.lastElementChild !== null ){
     
        game.style = "display: none;"
        vitoria.style ="display: flex"

    } 

}

