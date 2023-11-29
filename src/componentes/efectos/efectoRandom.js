import React, {useState,useEffect} from "react";

function generarRandom(num) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&";
    const charactersLength = characters.length;
    let result = "";
      for (let i = 0; i < num; i++) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
  
    return result;
  };


function EfectoRandom(event, tiempo = 150){

     const [display, setDisplay] = useState(event.target.id);

     useEffect(()=>{

        const tiempoRandom = setInterval(()=>{
             setDisplay(generarRandom(event.target.id.length))
         }, tiempo)

         return () => {
             clearInterval(tiempoRandom);
           };
        
     }, tiempo);
     return display;

}

export default generarRandom;