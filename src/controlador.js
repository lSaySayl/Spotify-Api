import { pedirTokens } from "../services/serviciospotify.js";
import { consultarCanciones } from "../services/servicioCanciones.js";

let fila = document.getElementById("fila");

pedirTokens().then(function (token) {
  consultarCanciones(token).then(function (respuesta) {
    respuesta.tracks.forEach(function (song) {
      let columna = document.createElement("div");
      columna.classList.add("col", "m-3");

      let tarjeta = document.createElement("div");
      tarjeta.classList.add("car", "h-100", "shadow");

      let pista = document.createElement("audio");
      pista.classList.add("w-100");
      pista.setAttribute("controls", "controls");
      pista.src = song.preview_url;

      let foto = document.createElement("img");
      foto.classList.add("img-fluid", "w-100");
      foto.src = song.album.images[0].url;

      let nombre = document.createElement("h4");
      nombre.classList.add("text-center")
      nombre.innerHTML = song.album.name;

      tarjeta.appendChild(nombre);
      tarjeta.appendChild(foto);
      
      tarjeta.appendChild(pista);
      columna.appendChild(tarjeta);
      fila.appendChild(columna);
    });
  });
});



//Puedo usar el .then con función normal o anonima

/* .then((resp)=> {
    console.log(resp)
})
 */

/* Traversi appendchild y agrego elementos. */
/* DTO: DATA TRANSFER OBJECTC */





