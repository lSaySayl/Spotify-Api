

  /* Función para pedir datos en spotify */

  //El front promete hacer algo en el back. Si se cumple yo le aviso a la página, de lo contrario
  //también debo decirle. 

  //Sincronia va cargando todo una, dos, tres. 

  /* Asincronia. Mientras yo cargo, te muestro algo.  */

  /* Paradigma bloqueante. Pila del stack. callbacks  */

  /* Await, sea pausada hasta que la promesa sea terminada o rechazada. */


   export async function pedirTokens () {
    //Receta para consumir apis con js == pasos para ir a un restaurante. 

    //1- URL para donde voy.

    const url = "https://accounts.spotify.com/api/token"
    let datoUno = "grant_type=client_credentials"
    let datoDos = "client_id=5938fd7d0e5f4d889ba4db749d5780ad"
    let datoTres = "client_secret=63d8eca3cf88416ca881b4f92588b05b"



    //2- ¿Que voy a hacer?

    //Deberiamos usar siempre los arreglos para que todo sea un mismo tipo de datos. 
    //Para las apis siempre es mejor un objeto. 
    //Atributos reservados
    const peticion = {
      method: "POST",
      headers: {
        "content-Type": "application/x-www-form-urlencoded"
      },
      body: `${datoUno}&${datoDos}&${datoTres}`

    }

    //3- Consumir el api:

    //Te prometo ir para ver que hay
    //Fetch buscar. promesa que permite que un cliente de javascript vaya por información.

    let respuesta = await fetch(url,peticion)
    let respuestaToken = await respuesta.json()

/*     console.log("Cliente ya llegué")
    console.log(respuestaToken) */
    let token = respuestaToken.token_type+" "+respuestaToken.access_token
    /* Acá estamos haciendo que el toquen se regenere. */
    return(token)


  }




  
  //Petición para mi GET

  




/* 
const options = {
    method: 'GET',
    headers: {
      Authorization: 'Bearer BQBUdcHn9xCqv-bKjJkl3s3KqnDjOJy7VI1kAz2oWLPOv0cwfw0eJH_fmmkLq5kbhhRuvi7gNJ5xAYloxgBQaX_LQI8lQ2bssSIsYuP2IpxMkt7gIrnt'
    }
  }; 
  
 fetch('https://api.spotify.com/v1/artists/05fG473iIaoy82BF1aGhL8/top-tracks?market=US', options)
  .then(response => response.json())
  .then(response => {
    const tracks = response.tracks;
    tracks.map(track => console.log(`${track.name} and ${track.uri}`));
  })

  .catch(err => console.error(err)); 
 */