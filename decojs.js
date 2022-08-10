
var botonencriptar = document.querySelector(".boton-encriptar");
var respuesta = document.querySelector(".mensaje");
botonencriptar.addEventListener("click",function(event){
   event.preventDefault;
    let Mensajenoencontrado = document.querySelector(".mensajonoencontrado");
   
   let textohtml = document.querySelector(".texto")
    let texto = textohtml.value
    
    if(texto == ""){
        Mensajenoencontrado.classList.remove("escondido")
       respuesta.classList.add("escondido")
   }
   else{
    Mensajenoencontrado.classList.add("escondido");

   respuesta.classList.remove("escondido");
    
   texto = texto.toLowerCase();
   let textoEncriptado = encriptar(texto);
  

    respuesta.innerHTML = textoEncriptado;
   }
   

    })

    

   




    function encriptar(texto){
      x = 0
      var substringviejo = ""
      var substringfinal = ""
        for(i = 0; i <= texto.length; i++){
              
          substring = texto.substring(x,i);
             console.log(substring)
           
            if(buscarletra("a",substring) || buscarletra("e",substring) || buscarletra("i",substring) || buscarletra("o",substring) || buscarletra("u",substring)){
            substringviejo = crearSubstring("a",substring,substringviejo,"i");
             substringviejo = crearSubstring("e",substring,substringviejo,"nter");
             substringviejo = crearSubstring("i",substring,substringviejo,"mes");
             substringviejo = crearSubstring("o",substring,substringviejo,"ber");
             substringviejo = crearSubstring("u",substring,substringviejo,"fat");
            substring = ""
            }
           substringfinal = substringviejo + substring;
            console.log(substringfinal)  ;
            
            
           
        }
        console.log(substringfinal)
        return substringfinal
       
    }

    function buscarletra(letra,substring){
      let Reg = new RegExp(letra)
      return Reg.test(substring)
    }

    function crearSubstring(letra,substring,substringviejo,output){
      
      if(buscarletra(letra,substring)){
        var substringviejo =substringviejo + substring + output;
        x = i 
        substring = "";

      }
     return substringviejo
    }