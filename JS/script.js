const texto = "O espaço\nnunca esteve tao perto...";
const elemento = document.getElementById("titulo-hero");
let i = 0;

function digitar() {
  if (i < texto.length) {
    if (texto[i] === "\n") {
      elemento.innerHTML += "<br>";
    } else {
      elemento.innerHTML += texto[i];
    }
    i++;
    setTimeout(digitar, 60);
  }
}

digitar();




