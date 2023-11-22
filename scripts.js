let uno = document.querySelector(".uno");
let dos = document.querySelector(".dos");
let tres = document.querySelector(".tres");
let cuatro = document.querySelector(".cuatro");
let cinco = document.querySelector(".cinco");
let seis = document.querySelector(".seis");
let siete = document.querySelector(".siete");
let ocho = document.querySelector(".ocho");
let nueve =  document.querySelector(".nueve");
let cruz = true;
let circulo = false;
let casilla = document.querySelectorAll(".casilla");
let ocupada;
let txt = document.querySelectorAll(".txt");
let pos = ["uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];
let inicio = document.querySelector('.jugar');
let restart = document.querySelector('.reiniciar');
let btn = document.querySelector(".btn");
let winner;
let puntosX = document.querySelector(".puntosX");
let puntosO = document.querySelector(".puntosO");
let color = document.querySelector(":root");
let btnColor = document.querySelector(".color");
let green = false;
let blue = true;
let red = false;

restart.addEventListener("click", ()=>{
  jugar();
  for(i = 0; i < 9; i++){
  txt[i].innerHTML = "";
  uno = "";
  dos = "";
  tres = "";
  cuatro = "";
  cinco = "";
  seis = "";
  siete = "";
  ocho = "";
  nueve = "";

}
})

inicio.addEventListener("click", ()=>{
  jugar();
  alert("que comience el juego");
  btn.removeChild(inicio);
  restart.classList.add("show");
})


const jugar = ()=>{
for (let i = 0; i < casilla.length; i++) {
 casilla[i].addEventListener("click", ()=> {
  if (txt[i].textContent != "") {
    console.log(txt[i].children);
  }else{
   if(cruz) {
    txt[i].textContent += "x";
    posicion(casilla[i]);
   cruz = false;
   circulo = true;
 }else{
  txt[i].textContent += "o";
  posicion(casilla[i]);
  cruz = true;
  circulo = false;
}};
})}
}



const posicion = (casilla)=>{
  for (let x = 0; x <= 8; x++) {
    if (casilla.classList.contains(pos[x])) {
      console.log(pos[x]);
      if (cruz) {
        punto(pos[x], "x");
        x = 9;
      }else{
        punto(pos[x], "o");
        x = 9;
      }
    }
  }
}



const punto = (posicion, jugador)=>{
  switch(posicion){
    case "uno":
        uno = jugador;
        break;

    case "dos":
        dos = jugador;
        break;

    case "tres":
        tres = jugador;
        break;

    case "cuatro":
        cuatro = jugador;
        break;

    case "cinco":
        cinco = jugador;
        break;

    case "seis":
        seis = jugador;
        break;

    case "siete":
        siete = jugador;
        break;

    case "ocho":
        ocho = jugador;
        break;

    case "nueve":
        nueve = jugador;
        break;
  
    default:
    console.log("error");
    break;
  }
  verificar();
}

const verificar  = ()=> {
  if(uno === "x" && dos === "x" && tres === "x"){
  decir("Ganó el jugador de las X"); 
  alert("Gano el jugador de las X");
  winner = "X";
  acabarJuego();
  
}else if(uno === "x" && cuatro === "x" && siete === "x"){
  decir("Ganó el jugador de las X"); 
  alert("Gano el jugador de las X");
  winner = "X";
  acabarJuego();
  
}else if(uno === "x" && cinco === "x" && nueve === "x"){
 decir("Ganó el jugador de las X"); 
 alert("Gano el jugador de las X");
 winner = "X";
 acabarJuego();
 
}else if(dos === "x" && cinco === "x" && ocho === "x"){
 decir("Ganó el jugador de las X"); 
 alert("Gano el jugador de las X");
 winner = "X";
 acabarJuego();
 
}else if(cuatro === "x" && cinco === "x" && seis === "x"){                                    
 decir("Ganó el jugador de las X"); 
 alert("Gano el jugador de las X");
 winner = "X";
 acabarJuego();
 
}else if(siete === "x" && ocho === "x" && nueve === "x"){
 decir("Ganó el jugador de las X"); 
 alert("Gano el jugador de las X");
 winner = "X";
 acabarJuego();
 
}else if(tres === "x" && seis === "x" && nueve === "x"){                                    
  decir("Ganó el jugador de las X"); 
  alert("Gano el jugador de las X");
  winner = "X";
  acabarJuego();
  
}else if(siete === "x" && cinco === "x" && tres === "x"){                                    
  decir("Ganó el jugador de las X"); 
  alert("Gano el jugador de las X");
  winner = "X"; 
  acabarJuego();
  
}else if(uno === "o" && dos === "o" && tres === "o"){
  decir("Ganó el jugador de las O");  
  alert("Gano el jugador de las o");
  winner = "O";
  acabarJuego();
  
}else if(uno === "o" && cuatro === "o" && siete === "o"){
  decir("Ganó el jugador de las O");
  alert("Gano el jugador de las o");
  winner = "O";
  acabarJuego();
  
}else if(uno === "o" && cinco === "o" && nueve === "o"){
  decir("Ganó el jugador de las O");
 alert("Gano el jugador de las o");
 winner = "O";
 acabarJuego();
 
}else if(dos === "o" && cinco === "o" && ocho === "o"){
  decir("Ganó el jugador de las O");
 alert("Gano el jugador de las o");
 winner = "O";
 acabarJuego();
 
}else if(cuatro === "o" && cinco === "o" && seis === "o"){
  decir("Ganó el jugador de las O");                                    
 alert("Gano el jugador de las o");
 winner = "O";
 acabarJuego();
 
}else if(siete === "o" && ocho === "o" && nueve === "o"){
  decir("Ganó el jugador de las O");                                   
 alert("Gano el jugador de las o");
 winner = "O";
 acabarJuego();
 
}else if(tres === "o" && seis === "o" && nueve === "o"){
  decir("Ganó el jugador de las O");                                    
  alert("Gano el jugador de las o");
  winner = "O";
  acabarJuego();
  
}else if(siete === "o" && cinco === "o" && tres === "o"){
  decir("Ganó el jugador de las O");                                    
  alert("Gano el jugador de las o");
  winner = "O";
  acabarJuego();
  ;
}

}

const acabarJuego = ()=>{
  if (winner === "X") {
    puntosX.textContent += puntosX.textContent + 1;
  }else{
    puntosO.textContent += puntosO.textContent + 1;
  }
  for (let i = 0; i < casilla.length; i++) {
  casilla[i].replaceWith(casilla[i].cloneNode(true));
}
}







if(localStorage.getItem('Red') === 'true'){
    Red();
} else if (localStorage.getItem('blue') === 'true'){
    Blue();
}else if (localStorage.getItem('green') === 'true'){
  Green();
}

function Blue() {
    color.style.setProperty('--celeste', '#29ddfd');
    color.style.setProperty('--blanco', '#fff');
    color.style.setProperty('--negro', '#000');
    color.style.setProperty('--hover', '#222');
    blue = true;
}

function Red() {
    color.style.setProperty('--celeste', '#ff0571');
    color.style.setProperty('--blanco', '#fff');
    color.style.setProperty('--negro', '#000');
    color.style.setProperty('--hover', '#222');
    red = true;
} 

function Green() {
    color.style.setProperty('--celeste', '#00ff00');
    color.style.setProperty('--blanco', '#fff');
    color.style.setProperty('--negro', '#000');
    color.style.setProperty('--hover', '#222');
    green = true;
} 


btnColor.addEventListener('click', () => {
    if(red) {
        Blue();
        red = false;
        localStorage.removeItem('red');
        localStorage.setItem('blue', 'true');
    }else if(blue) {
        Green();
        blue = false;
        localStorage.removeItem('blue');
        localStorage.setItem('green', 'true');
    } else if(green){
        Red();
        green = false;
        localStorage.removeItem('green');
        localStorage.setItem('red', 'true');    }
})



































let texto = document.getElementById("texto");
var audio;
let voice = false;
let asistente = document.querySelector(".asistente");





 asistente.addEventListener("click", ()=> {

    voice = true;
        var rec;
        if (!("webkitSpeechRecognition" in window)) {
            alert("disculpas, no puedes usar la API");
        } else {
            rec = new webkitSpeechRecognition();
            rec.lang = "es-AR";
            rec.continuous = false;
            rec.interim = true;
            rec.addEventListener("result", iniciar);
            rec.start();  
            rec.onend = function() {
               rec.start();
             };
        }
    })

function iniciar(event){
    for (let i = event.resultIndex; i < event.results.length; i++){
         texto.textContent = event.results[i][0].transcript;
    }
    audio = texto.textContent;
    charla();
}


function charla(){
    audio = audio.toLowerCase();
    console.log(audio)
    switch(audio){
        case "a1":
        if (uno.textContent != ""){
          console.log(uno.children);
        }else if(cruz){
           uno.textContent += "x";
           cruz = false;
           circulo = true;
         }else{
           uno.textContent += "0";
           cruz = true;
           circulo = false;
        }
        break;
        case "a2":
        if (cuatro.textContent != ""){
          console.log(cuatro.children);
        }else if(cruz){
           cuatro.textContent += "x";
           cruz = false;
           circulo = true;
         }else{
           cuatro.textContent += "0";
           cruz = true;
           circulo = false;
        }
        break;
        case "a3":
        if (siete.textContent != ""){
          console.log(siete.children);
        }else if(cruz){
           siete.textContent += "x";
           cruz = false;
           circulo = true;
         }else{
           siete.textContent += "0";
           cruz = true;
           circulo = false;
        }
        break;
        case "b1":
        if (dos.textContent != ""){
          console.log(dos.children);
        }else if(cruz){
           dos.textContent += "x";
           cruz = false;
           circulo = true;
         }else{
           dos.textContent += "0";
           cruz = true;
           circulo = false;
        }
        break;
        case "b2":
        if (cinco.textContent != ""){
          console.log(cinco.children);
        }else if(cruz){
           cinco.textContent += "x";
           cruz = false;
           circulo = true;
         }else{
           cinco.textContent += "0";
           cruz = true;
           circulo = false;
        }
        break;
        case "b3":
        if (ocho.textContent != ""){
          console.log(ocho.children);
        }else if(cruz){
           ocho.textContent += "x";
           cruz = false;
           circulo = true;
         }else{
           ocho.textContent += "0";
           cruz = true;
           circulo = false;
        }
        break;
        case "c1":
        if (tres.textContent != ""){
          console.log(tres.children);
        }else if(cruz){
           tres.textContent += "x";
           cruz = false;
           circulo = true;
         }else{
           tres.textContent += "0";
           cruz = true;
           circulo = false;
        }
        break;
        case "c2":
        if (seis.textContent != ""){
          console.log(seis.children);
        }else if(cruz){
           seis.textContent += "x";
           cruz = false;
           circulo = true;
         }else{
           seis.textContent += "0";
           cruz = true;
           circulo = false;
        }
        break;
        case "c3":
        if (nueve.textContent != ""){
          console.log(nueve.children);
        }else if(cruz){
           nueve.textContent += "x";
           cruz = false;
           circulo = true;
         }else{
           nueve.textContent += "0";
           cruz = true;
           circulo = false;
        }
        break;
        default:
        decir("no te escuché");
    }
    verificar();
    }



function decir(texto){
    if (voice) {
        speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
    }else{
        alert("no tengo permiso de hablar");
    }
}