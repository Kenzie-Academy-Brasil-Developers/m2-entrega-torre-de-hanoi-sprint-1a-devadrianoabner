
// <!DOCTYPE html> <html> 
// <head>
//      <title>Curso JavaScript Progressivo</title> Primeira nota <input id="nota1" type="number"> 

//      <br /> Segunda nota <input id="nota2" type="number"> 

//      <br /> <button onclick="media()">Calcular M�dia</button> 

//      <script type="text/javascript"> 

//      function media(){ 
//         var nota1 = parseFloat(document.getElementById("nota1").value);
//         var nota2 = parseFloat(document.getElementById("nota2").value);
//         var media = (nota1 + nota2)/2 ; 
//         if(media >= 7)
//         if(media=10) alert("Uau! Aprovado com distinção");
//         else alert("Parabens, aprovado! Media "+media);
//         else alert("Reprovado!") 
//     }

<div class="game">
        
        <ul class="tower" id="tower1">
            <div class="stick">
                <li class="disc" id="disc4"> 4 </li>
                <li class="disc" id="disc3"> 3 </li>
                <li class="disc" id="disc2"> 2 </li>
                <li class="disc" id="disc1"> 1 </li>
            </div> 
        </ul>

        <ul class="tower" id="tower2">
            <div class="stick"></div>
        </ul>

        <ul class="tower" id="tower2">
            <div class="stick"></div>
        </ul>

    </div>

//////////////////////////////////////////           J S           \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const tower = document.querySelectorAll(".tower")
console.log(tower)

//criar uma função para adicionar stick
function criandoStick(){
   
    for(let i = 0; i <= 3; i++){
        const stick = document.createElement("div");
        stick.classList.add("stick")
        stick.appendChild(tower[i]);
    }    
    return stick;
};

criandoStick();
//criar uma função para adicionar disc
function criandoDisc(){
    
    for(let i = 0; i <= 4; i++){
        const disc = document.createElement("li");
        disc.classList.add("disc");
        disc.innerText = i;
        disc.appendChild(stick);
    };

    return disc;
};
criandoDisc();

const stick = document.querySelectorAll(stick);

//função criar bastões
   
const criarStick = (newStick) => {
       
    stick.classList.add("stick")

    

    console.log(stick)
};
criarStick(stick);

let discos = {
    disco01 : document.createElement("li"),
    disco02 : document.createElement("li"),
    disco03 : document.createElement("li"),
    disco04 : document.createElement("li"),
    disco05 : document.createElement("li"),
    disco06 : document.createElement("li"),
    disco07 : document.createElement("li"),
    disco08 : document.createElement("li")
    }
        disco01.classList.add(disc)
        disco01.classList.add(disc1)
        disco02.classList.add(disc)
        disco02.classList.add(disc2)
        disco03.classList.add(disc)
        disco03.classList.add(disc3)
        disco04.classList.add(disc)
        disco04.classList.add(disc4)
        disco05.classList.add(disc)
        disco05.classList.add(disc5)
        disco06.classList.add(disc)
        disco06.classList.add(disc6)
        disco07.classList.add(disc)
        disco07.classList.add(disc7)
        disco08.classList.add(disc)
        disco08.classList.add(disc8)


// ------------------------------------------------------------
 //Criar a torre
 const tower = document.createElement("ul");
 // Colocar os bastões no local correto
 // Colocar os discos nos primeiros bastões

 // Criar um bastão
 const stick = document.createElement("div");
 // Criar discos
 
 let discos = {
     disco01 : document.createElement("li"),
     disco02 : document.createElement("li"),
     disco03 : document.createElement("li"),
     disco04 : document.createElement("li"),
 }

 // criar uma função para adicionar discos

 const adicionarDiscos = (discos) => {
     
     

     disco01.classList.add(disc)
     disco01.classList.add(disc1)
     disco01.innerText = 1
     disco02.classList.add(disc)
     disco02.classList.add(disc2)
     disco02.innerText = 2
     disco03.classList.add(disc)
     disco03.classList.add(disc3)
     disco03.innerText = 3
     disco04.classList.add(disc)
     disco04.classList.add(disc4)
     disco04.innerText = 4
    
     
     return discos
 }
 console.log(adicionarDiscos(discos))

 //função criar torre - dentro da torre estão os sticks e os discos
 const criarTower = (stick, discos) => {
   
 //Alimentando os elementos con informações
 tower.classList.add("tower")
 stick.classList.add("stick")   




 console.log(tower)
};   
criarTower(stick, disc);   



{/* <ul class="tower">
            <div class="stick">
                <li class="disc" id="disc4"> 4 </li>
                <li class="disc" id="disc3"> 3 </li>
                <li class="disc" id="disc2"> 2 </li>
                <li class="disc" id="disc1"> 1 </li>
            </div> 
        </ul>

        <ul class="tower">
            <div class="stick"></div>
        </ul>

        <ul class="tower">
            <div class="stick"></div>
        </ul> */}

        
//fácil
const nivelFacil = document.getElementById("buttonEasy")


nivelFacil.addEventListener("click", facil);

function facil(){
   
    for(let i = 5; i >= 1; i++){
        document.getElementById(`disc${i}`).style.display = "none";
       
        
    }
}


console.log(nivelFacil)

// médio
const nivelMedio = document.getElementById("buttonMedium")


nivelFacil.addEventListener("click", medio);

function medio(){
   
    for(let i = 7; i >= 1; i++){
       
        document.getElementById(`disc${i}`).style.display = "none";
       
        
    }
}


console.log(nivelMedio)

// criando discos
function crinadoDiscos(){
    
    for(let i = 8; i >= 1; i--){
        
        let disco = document.createElement("li");
        
        disco.classList.add("disc");
        disco.innerText = i
        disco.id = `disc${i}`;
        
        stick1.appendChild(disco);
    }
}
crinadoDiscos()

// EVENTOS
const resetGame = document.getElementById("resetButton");

resetGame.addEventListener("click", resetar);

function resetar(){
    
    for(let i = 9; i >= 1; i++){
        //document.getElementById(`disc${i}`).style.display = "none";
        stick1.appendChild(document.getElementById(`disc${i}`));
    }
}

// reset button

stick1.addEventListener("click",  (event) =>{  
    
    stick1.lastElementChild.classList.add("destaque");
    discos = event.target
    // console.log(event.currentTarget)
    console.log(event.Target)
    
});

//*&& disco1.clientWidth <disco2.clientWidth || disco2.clientWidth === null){