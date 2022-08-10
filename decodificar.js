var botondesencriptar = document.querySelector(".boton-desencriptar")
var respuesta = document.querySelector(".mensaje");
var textohtml = document.querySelector(".texto")
    var texto = textohtml.value



    botondesencriptar.addEventListener("click",function(event){
    event.preventDefault;
 
    textohtml = document.querySelector(".texto")
    texto = textohtml.value
    textohtml = document.querySelector(".texto")

    let Mensajenoencontrado = document.querySelector(".mensajonoencontrado");
   
   
    
    if(texto == ""){
        Mensajenoencontrado.classList.remove("escondido")
       respuesta.classList.add("escondido")
   }
   else{
    Mensajenoencontrado.classList.add("escondido");

   respuesta.classList.remove("escondido");
  
   texto = desencriptar(texto)
   respuesta.innerHTML = texto;
      
   }
})

function desencriptar(texto){
    x = 0
    var substringviejo = ""
    var substringfinal = ""
      for(i = 0; i <= texto.length; i++){
            
         substring = texto.substring(x,i);
           console.log(substring)
           

           
          if(buscarletra("a",substring) || buscarletra("e",substring) || buscarletra("i",substring) || buscarletra("o",substring) || buscarletra("u",substring)){
          substringviejo = crearDesencriptado("ai",substring,substringviejo);
          substringviejo = crearDesencriptado("enter",substring,substringviejo);
          substringviejo = crearDesencriptado("imes",substring,substringviejo);
          substringviejo = crearDesencriptado("ober",substring,substringviejo);
          substringviejo = crearDesencriptado("ufat",substring,substringviejo);
          console.log(substringviejo)
          substring = ""
          }
          console.log(substringviejo)
          console.log(substring)
          
          console.log(substringviejo + substring)
          substringfinal = substringviejo + substring;
           
          
          console.log(x)
          console.log(i)
          
      }
      console.log(substringfinal)
      
      
      return substringfinal

}

function crearDesencriptado(letra,substring,substringviejo){
      
    if(buscarletra(letra,substring)){
           
        var substringviejo = substringviejo + texto.substring(x,i - (letra.length - 1));
      x = i 
     
      ;

    }
   return substringviejo
  }