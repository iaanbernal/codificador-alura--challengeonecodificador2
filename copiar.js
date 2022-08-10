let botoncopiar = document.querySelector(".copiar-boton")



botoncopiar.addEventListener("click",copy)

function copy() {
  let copiador = document.querySelector("#copiador");   
   
  
  copiador.classList.remove("escondido");
  let textohtml = document.querySelector(".mensaje");
  let texto = textohtml.innerHTML;
   copiador.innerHTML = texto;
   console.log(copiador) 
    copiador.select();
    document.execCommand("copy");
    copiador.classList.add("escondido");
  }